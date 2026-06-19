"use client";

import Marquee from "@/components/ui/Marquee";
import Counter from "@/components/ui/Counter";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { STATS } from "@/lib/data";

export default function Validacion() {
  return (
    <section className="relative bg-night">
      <Marquee items={["TÉCNICA", "DISCIPLINA", "VELOCIDAD", "CARÁCTER", "VISIÓN", "GARRA"]} />

      <div className="mx-auto max-w-container px-5 py-20 md:px-8 md:py-28">
        <StaggerGroup className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {STATS.map((s) => (
            <StaggerItem key={s.label} className="border-l border-line pl-5">
              <div className="font-display text-5xl text-grad-lime md:text-7xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-sm leading-snug text-ash md:text-base">{s.label}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
