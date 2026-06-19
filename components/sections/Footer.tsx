"use client";

import MagneticButton from "@/components/ui/MagneticButton";

const COLS = [
  { title: "Academia", links: ["Programas", "Instalaciones", "Entrenadores", "Eventos", "Galería"] },
  { title: "Programas", links: ["Semillero (5-9)", "Formación (10-14)", "Alto Rendimiento (15-18)", "Becas deportivas"] },
  { title: "Contacto", links: ["WhatsApp", "Instagram", "Sede principal · Medellín", "info@verticefc.com"] },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-coal">
      <div className="mx-auto max-w-container px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <span className="font-display text-4xl uppercase tracking-tight text-chalk">Vértice<span className="text-lime">FC</span></span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ash">
              Academia de fútbol de alto rendimiento en Medellín. Donde el talento se convierte en oficio.
            </p>
            <div className="mt-6"><MagneticButton href="#registro" variant="lime" className="text-xs">Inscríbete</MagneticButton></div>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-lime">{c.title}</h4>
              <ul className="mt-5 flex flex-col gap-3">
                {c.links.map((l) => (
                  <li key={l}><a href="#top" className="text-sm text-fog transition-colors hover:text-lime">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-xs text-ash md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} VÉRTICE FC · Todos los derechos reservados.</p>
          <p>
            Diseño y desarrollo por{" "}
            <a href="https://wa.me/573001234567" className="font-semibold text-lime hover:underline" target="_blank" rel="noopener noreferrer">DilNic Studio</a>
          </p>
        </div>
      </div>

      {/* Oversized brand watermark */}
      <div className="pointer-events-none select-none overflow-hidden">
        <p className="-mb-[3vw] text-center font-display text-[20vw] leading-none text-line/30">VÉRTICE</p>
      </div>
    </footer>
  );
}
