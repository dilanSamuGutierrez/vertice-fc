"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LenisContext = createContext<Lenis | null>(null);
export const useLenis = () => useContext(LenisContext);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const instance = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });
    setLenis(instance);

    // Keep ScrollTrigger in sync with Lenis' scroll position.
    instance.on("scroll", ScrollTrigger.update);

    // SINGLE animation loop: GSAP's ticker drives Lenis. (Having a second
    // requestAnimationFrame loop advancing Lenis is what caused the jittery,
    // self-scrolling "sube y baja" bug and desynced the parallax.)
    const update = (time: number) => {
      instance.raf(time * 1000); // gsap ticker time is in seconds; Lenis expects ms
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Route same-page anchor links through Lenis so native jumps don't fight it.
    const onAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!target) return;
      const id = target.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      instance.scrollTo(el as HTMLElement, { offset: -70, duration: 1.2 });
    };
    document.addEventListener("click", onAnchorClick);

    // Recalculate trigger positions after layout / fonts / images settle.
    const refresh = () => ScrollTrigger.refresh();
    const settle = setTimeout(refresh, 250);
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    return () => {
      clearTimeout(settle);
      document.removeEventListener("click", onAnchorClick);
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      gsap.ticker.remove(update);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
