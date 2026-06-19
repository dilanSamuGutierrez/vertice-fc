"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";

const LINKS = [
  { label: "Programas", href: "#programas" },
  { label: "Instalaciones", href: "#instalaciones" },
  { label: "Entrenadores", href: "#entrenadores" },
  { label: "Eventos", href: "#eventos" },
  { label: "Galería", href: "#galeria" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -90 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-[65] transition-colors duration-500 ${
          scrolled ? "border-b border-line bg-night/80 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-[68px] max-w-container items-center justify-between px-5 md:h-20 md:px-8">
          <a href="#top" className="group flex items-center gap-2.5" aria-label="VÉRTICE FC inicio">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-lime text-night transition-transform duration-300 group-hover:rotate-12 md:h-9 md:w-9">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 2l3 6 6 .8-4.4 4.3 1.1 6.1L12 16.9 6.3 19.2l1.1-6.1L3 8.8 9 8z"/></svg>
            </span>
            <span className="font-display text-xl uppercase tracking-tight text-chalk md:text-2xl">Vértice<span className="text-lime">FC</span></span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="group relative text-sm font-medium uppercase tracking-wide text-fog transition-colors hover:text-chalk">
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-lime transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <MagneticButton href="#registro" variant="lime" className="px-6 py-3 text-xs">Inscríbete</MagneticButton>
          </div>

          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className="relative z-[80] flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className={`h-0.5 w-6 bg-chalk transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-chalk transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-chalk transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[64] flex flex-col justify-center bg-night px-7 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                  className="font-display text-4xl uppercase tracking-tight text-chalk"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#registro"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 inline-flex w-fit rounded-full bg-lime px-8 py-4 text-sm font-bold uppercase tracking-widest text-night"
              >
                Inscríbete ahora
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
