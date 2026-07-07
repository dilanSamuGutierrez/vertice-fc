"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { U, IMAGES } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Parallax / scale on the BACKGROUND only.
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.35]);

  // Gentle parallax on content — NO opacity fade on the CTA (stays visible).
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -60]);
  // Only the headline fades, and only late in the scroll, never the CTA row.
  const headlineOpacity = useTransform(scrollYProgress, [0.45, 0.95], [1, 0]);

  // Mouse layered depth (decorative orbs only).
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const tx1 = useTransform(sx, [-1, 1], [-22, 22]);
  const ty1 = useTransform(sy, [-1, 1], [-18, 18]);
  const tx2 = useTransform(sx, [-1, 1], [18, -18]);
  const ty2 = useTransform(sy, [-1, 1], [14, -14]);

  const onMove = (e: React.MouseEvent) => {
    if (window.matchMedia("(hover: none)").matches) return;
    mx.set((e.clientX / window.innerWidth) * 2 - 1);
    my.set((e.clientY / window.innerHeight) * 2 - 1);
  };

  return (
    <section ref={ref} onMouseMove={onMove} className="relative min-h-[100svh] overflow-hidden bg-night">
      {/* Background image layer */}
      <motion.div style={{ y: yImg, scale: scaleImg, opacity: bgOpacity }} className="absolute inset-0">
        <Image src={U(IMAGES.heroMain, 2000)} alt="Jugador entrenando en VÉRTICE FC" fill priority sizes="100vw" className="object-cover object-center opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-night/75 via-night/45 to-night" />
        <div className="absolute inset-0 bg-gradient-to-r from-night via-night/30 to-transparent" />
      </motion.div>

      {/* Floating depth orbs */}
      <motion.div style={{ x: tx1, y: ty1 }} className="pointer-events-none absolute right-[8%] top-[20%] h-40 w-40 rounded-full bg-lime/20 blur-3xl md:h-72 md:w-72" />
      <motion.div style={{ x: tx2, y: ty2 }} className="pointer-events-none absolute left-[5%] bottom-[16%] h-48 w-48 rounded-full bg-grass/30 blur-3xl md:h-80 md:w-80" />

      {/* Content */}
      <motion.div
        style={{ y: yContent }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-container flex-col justify-end gap-7 px-5 pb-20 pt-28 md:px-8 md:pb-24 md:pt-32"
      >
        {/* Headline group — fades only late on scroll */}
        <motion.div style={{ opacity: headlineOpacity }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-lime md:text-xs"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-lime" /> Academia de alto rendimiento · Medellín
          </motion.span>

          <h1 className="font-display uppercase leading-[0.9] tracking-tight text-chalk md:tracking-huge md:leading-[0.85]">
            {["DONDE EL TALENTO", "SE CONVIERTE", "EN OFICIO"].map((line, i) => (
              <span key={i} className="block overflow-hidden py-[0.5vw]">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`block text-[11vw] sm:text-[9vw] md:text-[8vw] xl:text-[8.5rem] ${i === 1 ? "text-grad-lime" : ""}`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
        </motion.div>

        {/* Paragraph + CTA — always fully visible (no scroll opacity, short delay) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-base leading-relaxed text-fog md:text-lg">
            No entrenamos niños en montón. <span className="text-chalk">Formamos jugadores</span> con metodología profesional por etapas, scouting y vitrina ante clubes.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <MagneticButton href="#registro" variant="lime" fullWidthMobile>Agenda tu prueba gratis</MagneticButton>
            <MagneticButton href="#programas" variant="outline" fullWidthMobile>Ver programas</MagneticButton>
          </div>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        style={{ opacity: headlineOpacity }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-widest text-ash lg:flex"
      >
        Scroll
        <span className="block h-10 w-px overflow-hidden bg-line">
          <motion.span animate={{ y: [-40, 40] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }} className="block h-4 w-px bg-lime" />
        </span>
      </motion.div>
    </section>
  );
}
