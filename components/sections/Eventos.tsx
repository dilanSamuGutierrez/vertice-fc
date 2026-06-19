"use client";

import Reveal from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import MagneticButton from "@/components/ui/MagneticButton";
import { EVENTS } from "@/lib/data";

export default function Eventos() {
  return (
    <section id="eventos" className="relative bg-night py-24 md:py-36">
      <div className="mx-auto max-w-container px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal><span className="text-xs font-semibold uppercase tracking-widest text-lime">Calendario · Eventos</span></Reveal>
            <Reveal delay={0.05} blur>
              <h2 className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-tight md:text-7xl">
                Próximas <span className="text-grad-lime">fechas</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}><MagneticButton href="#registro" variant="outline">Reservar mi cupo</MagneticButton></Reveal>
        </div>

        <StaggerGroup className="mt-14 flex flex-col gap-px overflow-hidden rounded-3xl border border-line">
          {EVENTS.map((e) => (
            <StaggerItem key={e.title}>
              <div className="group grid grid-cols-[auto_1fr] items-center gap-5 bg-coal/60 p-6 transition-colors hover:bg-coal md:grid-cols-[120px_1fr_auto] md:p-8">
                <div className="font-display text-3xl uppercase leading-none text-grad-lime md:text-4xl">{e.date}</div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-lime">{e.cat}</span>
                  <h3 className="mt-1 font-display text-2xl uppercase tracking-tight text-chalk md:text-3xl">{e.title}</h3>
                  <p className="text-sm text-ash">{e.place}</p>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-fog transition-colors group-hover:text-lime">
                    Más info
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
