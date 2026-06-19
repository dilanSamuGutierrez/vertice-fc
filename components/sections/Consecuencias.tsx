"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { U, IMAGES } from "@/lib/data";

export default function Consecuencias() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative flex min-h-[90vh] items-center overflow-hidden bg-night">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image src={U(IMAGES.ballNet, 1800)} alt="Cancha vacía bajo las luces" fill sizes="100vw" className="object-cover opacity-25" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-night via-night/70 to-night" />

      <div className="relative mx-auto max-w-container px-5 py-24 md:px-8">
        <div className="max-w-3xl">
          <Reveal><span className="text-xs font-semibold uppercase tracking-widest text-red-400">El costo de esperar</span></Reveal>
          <Reveal delay={0.05} blur>
            <h2 className="mt-4 font-display text-5xl uppercase leading-[0.88] tracking-tight md:text-8xl">
              El talento tiene <span className="text-stroke">fecha de</span> <span className="text-grad-lime">vencimiento</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-fog">
              Cada temporada sin formación real es una ventana que se cierra. Los clubes scoutean temprano y los hábitos se forjan en la infancia. Esperar “un año más” puede costar la oportunidad de su vida.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10">
              <MagneticButton href="#registro" variant="lime">No dejes pasar la temporada</MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
