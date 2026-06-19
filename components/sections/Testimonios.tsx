"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonios() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const go = (d: number) => setI((p) => (p + d + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="relative overflow-hidden bg-night py-24 md:py-36">
      <span className="pointer-events-none absolute -left-6 top-10 select-none font-display text-[28vw] leading-none text-line/40 md:text-[18vw]">“</span>
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal><span className="text-xs font-semibold uppercase tracking-widest text-lime">Lo que dicen las familias</span></Reveal>
        <div className="mt-10 min-h-[220px] md:min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(12px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display text-3xl uppercase leading-tight tracking-tight text-chalk md:text-5xl">{t.quote}</p>
              <footer className="mt-8">
                <p className="text-lg font-semibold text-lime">{t.name}</p>
                <p className="text-sm text-ash">{t.role}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button type="button" aria-label="Anterior" onClick={() => go(-1)} className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-chalk transition-colors hover:border-lime hover:text-lime">←</button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, k) => (
              <button key={k} aria-label={`Testimonio ${k + 1}`} onClick={() => setI(k)} className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-lime" : "w-2 bg-line"}`} />
            ))}
          </div>
          <button type="button" aria-label="Siguiente" onClick={() => go(1)} className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-chalk transition-colors hover:border-lime hover:text-lime">→</button>
        </div>
      </div>
    </section>
  );
}
