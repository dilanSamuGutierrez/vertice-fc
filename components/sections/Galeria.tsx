"use client";

import Reveal from "@/components/ui/Reveal";
import ImageReveal from "@/components/ui/ImageReveal";
import Marquee from "@/components/ui/Marquee";
import { U, GALLERY } from "@/lib/data";

export default function Galeria() {
  return (
    <section id="galeria" className="relative bg-coal py-24 md:py-32">
      <div className="mx-auto max-w-container px-5 md:px-8">
        <Reveal><span className="text-xs font-semibold uppercase tracking-widest text-lime">Galería multimedia</span></Reveal>
        <Reveal delay={0.05} blur>
          <h2 className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-tight md:text-7xl">
            La cancha <span className="text-grad-lime">no miente</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[260px] md:grid-cols-4">
          {GALLERY.map((img, i) => {
            const span = i === 0 ? "col-span-2 row-span-2" : i === 3 ? "md:col-span-2" : "";
            return (
              <Reveal key={i} delay={(i % 4) * 0.06} scale className={`${span} h-full`}>
                <ImageReveal src={img} alt={`Galería VÉRTICE FC ${i + 1}`} sizes="(max-width:768px) 50vw, 25vw" className="h-full w-full rounded-2xl" />
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="mt-20">
        <Marquee items={["#SOMOSVÉRTICE", "ALTO RENDIMIENTO", "MEDELLÍN", "FÚTBOL FORMATIVO"]} reverse fast />
      </div>
    </section>
  );
}
