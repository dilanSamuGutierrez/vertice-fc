"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { FAQS } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative bg-coal py-24 md:py-36">
      <div className="mx-auto grid max-w-container gap-12 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-8">
        <div>
          <Reveal><span className="text-xs font-semibold uppercase tracking-widest text-lime">Preguntas frecuentes</span></Reveal>
          <Reveal delay={0.05} blur>
            <h2 className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-tight md:text-6xl">
              Resolvemos tus <span className="text-grad-lime">dudas</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-fog">¿Tienes otra pregunta? Escríbenos por WhatsApp y te respondemos al instante.</p>
          </Reveal>
        </div>

        <div className="flex flex-col">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  >
                    <span className="font-display text-xl uppercase tracking-tight text-chalk md:text-2xl">{f.q}</span>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-lime transition-transform duration-300 ${isOpen ? "rotate-45 border-lime" : ""}`}>+</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 leading-relaxed text-ash">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
