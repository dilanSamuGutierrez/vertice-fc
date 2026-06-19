"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { U, IMAGES } from "@/lib/data";

const PHONE = "573001234567";

export default function CTAFinal() {
  const [form, setForm] = useState({ nombre: "", edad: "", whatsapp: "", programa: "Formación" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola VÉRTICE FC, quiero agendar una prueba de ingreso.\n\nNombre del atleta: ${form.nombre}\nEdad: ${form.edad}\nPrograma de interés: ${form.programa}\nWhatsApp: ${form.whatsapp}`
    );
    window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
  };

  const field = "w-full rounded-xl border border-line bg-night/60 px-4 py-3.5 text-chalk placeholder-ash outline-none transition-colors focus:border-lime";

  return (
    <section id="registro" className="relative overflow-hidden bg-night py-24 md:py-32">
      <div className="absolute inset-0">
        <Image src={U(IMAGES.celebrate, 1800)} alt="Celebración del equipo" fill sizes="100vw" className="object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-night via-night/80 to-night" />
      </div>

      <div className="relative mx-auto grid max-w-container items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        <div>
          <Reveal><span className="text-xs font-semibold uppercase tracking-widest text-lime">Inscripciones abiertas 2026</span></Reveal>
          <Reveal delay={0.05} blur>
            <h2 className="mt-4 font-display text-6xl uppercase leading-[0.85] tracking-huge md:text-8xl">
              Agenda tu <span className="text-grad-lime">prueba gratis</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-lg text-fog">
              Cupos limitados por grupo. Déjanos tus datos y un coach te contacta hoy mismo por WhatsApp para coordinar la evaluación.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-ash">
              <span className="flex items-center gap-2"><span className="text-lime">✓</span> Sin costo</span>
              <span className="flex items-center gap-2"><span className="text-lime">✓</span> Sin compromiso</span>
              <span className="flex items-center gap-2"><span className="text-lime">✓</span> Respuesta el mismo día</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} scale>
          <motion.form
            onSubmit={submit}
            className="rounded-3xl border border-line bg-coal/80 p-7 backdrop-blur-xl md:p-9"
          >
            <h3 className="font-display text-2xl uppercase tracking-tight text-chalk">Reserva tu cupo</h3>
            <div className="mt-6 flex flex-col gap-4">
              <input required placeholder="Nombre del atleta" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} className={field} />
              <div className="grid grid-cols-2 gap-4">
                <input required type="number" min={4} max={18} placeholder="Edad" value={form.edad} onChange={(e) => setForm({ ...form, edad: e.target.value })} className={field} />
                <select value={form.programa} onChange={(e) => setForm({ ...form, programa: e.target.value })} className={field}>
                  <option>Semillero</option>
                  <option>Formación</option>
                  <option>Alto Rendimiento</option>
                </select>
              </div>
              <input required placeholder="Tu WhatsApp" value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} className={field} />
              <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-lime px-8 py-4 text-sm font-bold uppercase tracking-widest text-night transition-colors hover:bg-lime-bright shadow-[0_0_40px_-8px_rgba(190,242,100,0.6)]">
                Agendar por WhatsApp
              </button>
              <p className="text-center text-xs text-ash">Al enviar abrirás WhatsApp con tus datos listos.</p>
            </div>
          </motion.form>
        </Reveal>
      </div>
    </section>
  );
}
