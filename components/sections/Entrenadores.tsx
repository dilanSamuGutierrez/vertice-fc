"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { U, COACHES } from "@/lib/data";

export default function Entrenadores() {
  return (
    <section id="entrenadores" className="relative overflow-hidden bg-coal py-24 md:py-36">
      <div className="mx-auto max-w-container px-5 md:px-8">
        <Reveal><span className="text-xs font-semibold uppercase tracking-widest text-lime">Cuerpo técnico</span></Reveal>
        <Reveal delay={0.05} blur>
          <h2 className="mt-4 max-w-3xl font-display text-5xl uppercase leading-[0.9] tracking-tight md:text-7xl">
            Te forman quienes <span className="text-grad-lime">vivieron el fútbol</span>
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {COACHES.map((c) => (
            <StaggerItem key={c.name}>
              <article className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-line">
                <Image src={c.img} alt={c.name} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-flex rounded-full bg-lime/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-lime">{c.badge}</span>
                  <h3 className="mt-3 font-display text-3xl uppercase tracking-tight text-chalk">{c.name}</h3>
                  <p className="text-sm text-ash">{c.role}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
