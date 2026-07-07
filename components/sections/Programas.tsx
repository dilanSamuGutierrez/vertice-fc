"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import MagneticButton from "@/components/ui/MagneticButton";
import { U, PROGRAMS } from "@/lib/data";

export default function Programas() {
  return (
    <section id="programas" className="relative bg-night py-24 md:py-36">
      <div className="mx-auto max-w-container px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal><span className="text-xs font-semibold uppercase tracking-widest text-lime">Programas</span></Reveal>
            <Reveal delay={0.05} blur>
              <h2 className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-tight md:text-7xl">
                Elige tu <span className="text-grad-lime">camino</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-fog">Tres etapas, un mismo método. Ubicamos a cada atleta según edad y nivel tras una prueba de ingreso gratuita.</p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-14 grid gap-6 lg:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <StaggerItem key={p.name}>
              <article className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-coal/60 transition-all duration-500 ${i === 2 ? "border-lime/40 shadow-[0_0_60px_-20px_rgba(190,242,100,0.5)]" : "border-line hover:border-lime/30"}`}>
                <div className="relative h-56 overflow-hidden">
                  <Image src={p.img} alt={p.name} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-coal to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-night/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-lime backdrop-blur">{p.tag}</span>
                  {i === 2 && <span className="absolute right-5 top-5 rounded-full bg-lime px-3 py-1 text-xs font-bold uppercase tracking-widest text-night">Más elegido</span>}
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-3xl uppercase tracking-tight text-chalk">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ash">{p.desc}</p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-3 text-sm text-fog">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime/15 text-lime">✓</span>{pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-2">
                    <MagneticButton href="#registro" variant={i === 2 ? "lime" : "outline"} className="w-full">Inscribirme</MagneticButton>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
