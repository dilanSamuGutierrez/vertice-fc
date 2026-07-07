"use client";

import Reveal from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import TiltCard from "@/components/ui/TiltCard";
import ImageReveal from "@/components/ui/ImageReveal";
import Parallax from "@/components/ui/Parallax";
import { U, IMAGES } from "@/lib/data";

const PILLARS = [
  { n: "01", title: "Metodología por etapas", desc: "Un plan de desarrollo claro según edad y nivel. Cada sesión tiene objetivo técnico." },
  { n: "02", title: "Grupos reducidos", desc: "Máximo 12 atletas por entrenador. Atención y corrección individual real." },
  { n: "03", title: "Preparación profesional", desc: "Físico, táctico y mental. El mismo enfoque que un club de primera división." },
  { n: "04", title: "Vitrina ante clubes", desc: "Scouting, showcases y red de contactos para abrir puertas al fútbol profesional." },
];

export default function Solucion() {
  return (
    <section className="relative overflow-hidden bg-night py-24 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-pitch-lines opacity-40" />
      <div className="relative mx-auto max-w-container px-5 md:px-8">
        <div className="grid items-end gap-8 md:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-lime">La solución</span>
            </Reveal>
            <Reveal delay={0.05} blur>
              <h2 className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-tight md:text-7xl">
                Formación <span className="text-grad-lime">de verdad</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-fog">
              VÉRTICE FC nace para cerrar la brecha entre el potrero y el fútbol profesional. Un ecosistema completo que convierte talento bruto en jugadores listos para competir.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <StaggerGroup className="grid gap-5 sm:grid-cols-2" >
            {PILLARS.map((p) => (
              <StaggerItem key={p.n}>
                <TiltCard className="h-full rounded-2xl border border-line bg-coal/70 p-7 transition-colors hover:border-lime/40">
                  <span className="font-display text-3xl text-lime/40">{p.n}</span>
                  <h3 className="mt-4 font-display text-2xl uppercase tracking-tight text-chalk">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ash">{p.desc}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal scale className="relative">
            <Parallax amount={60} className="aspect-[3/4] w-full overflow-hidden rounded-3xl">
              <ImageReveal src={IMAGES.training} alt="Entrenamiento de alto rendimiento" sizes="(max-width:1024px) 100vw, 40vw" className="h-full w-full" />
            </Parallax>
            <div className="absolute -right-4 -top-4 rounded-full bg-lime px-5 py-3 font-display text-xl uppercase text-night shadow-[0_0_40px_-8px_rgba(190,242,100,0.7)]">
              Método Vértice™
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
