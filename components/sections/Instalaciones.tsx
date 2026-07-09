"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "@/components/ui/Reveal";
import { U, FACILITIES } from "@/lib/data";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Instalaciones() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    // Desktop: pin + horizontal scroll
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const track = trackRef.current!;
      const getScroll = () => -(track.scrollWidth - window.innerWidth + 80);
      const tween = gsap.to(track, {
        x: getScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth + 80}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
      return () => { tween.kill(); };
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="instalaciones" ref={sectionRef} className="relative overflow-hidden bg-coal lg:h-screen">
      <div className="flex h-full flex-col lg:justify-center">
        <div className="mx-auto w-full max-w-container px-5 pt-20 md:px-8 lg:pt-0">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-lime">Instalaciones</span>
          </Reveal>
          <Reveal delay={0.05} blur>
            <h2 className="mt-4 max-w-3xl font-display text-5xl uppercase leading-[0.9] tracking-tight md:text-7xl">
              Un entorno de <span className="text-grad-lime">primera división</span>
            </h2>
          </Reveal>
        </div>

        {/* Horizontal track */}
        <div ref={trackRef} className="mt-12 flex gap-5 px-5 pb-20 md:px-8 lg:mt-16 lg:flex-nowrap lg:pb-0 lg:will-change-transform max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory">
          {FACILITIES.map((f, i) => (
            <article
              key={f.title}
              className="group relative h-[60vh] w-[82vw] shrink-0 snap-center overflow-hidden rounded-3xl border border-line sm:w-[60vw] lg:h-[58vh] lg:w-[38vw]"
            >
              <Image src={f.img} alt={f.title} fill sizes="(max-width:1024px) 82vw, 38vw" className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full bg-night/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-lime backdrop-blur">0{i + 1}</span>
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <p className="text-xs uppercase tracking-widest text-lime">{f.meta}</p>
                <h3 className="mt-2 font-display text-3xl uppercase leading-none tracking-tight text-chalk md:text-4xl">{f.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
