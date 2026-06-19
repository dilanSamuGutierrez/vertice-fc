import Hero from "@/components/sections/Hero";
import Validacion from "@/components/sections/Validacion";
import Problema from "@/components/sections/Problema";
import Solucion from "@/components/sections/Solucion";
import Instalaciones from "@/components/sections/Instalaciones";
import Programas from "@/components/sections/Programas";
import Entrenadores from "@/components/sections/Entrenadores";
import Eventos from "@/components/sections/Eventos";
import Galeria from "@/components/sections/Galeria";
import Testimonios from "@/components/sections/Testimonios";
import Consecuencias from "@/components/sections/Consecuencias";
import FAQ from "@/components/sections/FAQ";
import CTAFinal from "@/components/sections/CTAFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <Validacion />
      <Problema />
      <Solucion />
      <Instalaciones />
      <Programas />
      <Entrenadores />
      <Eventos />
      <Galeria />
      <Testimonios />
      <Consecuencias />
      <FAQ />
      <CTAFinal />
    </>
  );
}
