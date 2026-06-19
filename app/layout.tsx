import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BackToTop from "@/components/ui/BackToTop";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Cursor from "@/components/ui/Cursor";
import Intro from "@/components/ui/Intro";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://verticefc.com"),
  title: "VÉRTICE FC | Academia de fútbol de alto rendimiento en Medellín",
  description:
    "Formamos jugadores, no entrenamos niños en montón. Metodología profesional por etapas, scouting y vitrina ante clubes. Agenda tu prueba de ingreso gratuita.",
  keywords: ["academia de futbol Medellin", "escuela de futbol", "alto rendimiento", "formacion deportiva", "futbol infantil"],
  openGraph: {
    title: "VÉRTICE FC — Academia de Alto Rendimiento",
    description: "Donde el talento se convierte en oficio. Agenda tu prueba de ingreso gratuita.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${anton.variable}`}>
      <body className="grain bg-night font-sans text-chalk antialiased">
        <Intro />
        <ScrollProgress />
        <Cursor />
        <SmoothScroll>
          <Navbar />
          <main id="top">{children}</main>
          <Footer />
        </SmoothScroll>
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
