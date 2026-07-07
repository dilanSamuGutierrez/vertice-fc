"use client";

import RevealDefault from "@/components/ui/Reveal";
import Parallax from "@/components/ui/Parallax";
import ImageReveal from "@/components/ui/ImageReveal";
import { U, IMAGES } from "@/lib/data";

const PAINS = [
  "Escuelas con 30 niños por entrenador donde tu hijo es un número más.",
  "Entrenos sin método: mucho partido, cero desarrollo técnico real.",
  "Promesas de “llevarlo a las grandes” que nunca tienen un plan detrás.",
  "Talento que se apaga por falta de exigencia, seguimiento y vitrina.",
];

export default function Problema() {
  return (
    <section className="relative overflow-hidden bg-coal py-24 md:py-36">
      <div className="mx-auto grid max-w-container items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div>
          <RevealDefault>
            <span className="text-xs font-semibold uppercase tracking-widest text-lime">El problema</span>
          </RevealDefault>
          <RevealDefault delay={0.05} blur>
            <h2 className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-tight text-chalk md:text-7xl">
              El talento <span className="text-stroke">no basta</span> sin formación
            </h2>
          </RevealDefault>
          <div className="mt-10 flex flex-col gap-px overflow-hidden rounded-2xl border border-line">
            {PAINS.map((p, i) => (
              <RevealDefault key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 bg-night/60 p-5 transition-colors hover:bg-night md:p-6">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-400">✕</span>
                  <p className="text-base leading-relaxed text-fog">{p}</p>
                </div>
              </RevealDefault>
            ))}
          </div>
        </div>

        <RevealDefault scale className="relative">
          <Parallax amount={50} className="aspect-[4/5] w-full overflow-hidden rounded-3xl">
            <ImageReveal src={IMAGES.youthGame} alt="Niños jugando fútbol sin método" sizes="(max-width:768px) 100vw, 50vw" className="h-full w-full" />
          </Parallax>
          <div className="absolute -bottom-6 -left-6 max-w-[220px] rounded-2xl border border-line bg-night/90 p-5 backdrop-blur">
            <p className="font-display text-4xl text-red-400">73%</p>
            <p className="mt-1 text-sm text-ash">de los niños con talento abandonan el fútbol por falta de formación real.</p>
          </div>
        </RevealDefault>
      </div>
    </section>
  );
}
