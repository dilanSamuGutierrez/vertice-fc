# VÉRTICE FC — Academia de Alto Rendimiento

Demo premium de alta energía para academia de fútbol, desarrollada por **DilNic Studio**.
Experiencia editorial-deportiva, mobile-first, orientada a conversión (prueba de ingreso gratis vía WhatsApp).

Stack: **Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · GSAP + ScrollTrigger · Lenis Smooth Scroll**.

---

## Cómo ejecutar

```bash
cd vertice-fc
npm install
npm run dev      # http://localhost:3000
```

Producción:

```bash
npm run build
npm run start
```

> Nota: el proyecto usa imágenes de Unsplash (ya configurado en `next.config.mjs`). Para producción real, reemplaza por fotos propias de la academia y cambia el número de WhatsApp/datos de marca en `lib/data.ts`, `components/ui/WhatsAppButton.tsx` y `components/sections/CTAFinal.tsx`.

---

## Estructura de secciones (storytelling de conversión)

1. **Hero** — titular agresivo + parallax + capas con profundidad por mouse.
2. **Validación** — marquee infinito + contadores animados de resultados.
3. **Problema** — dolores del cliente + dato de impacto.
4. **Solución** — método por pilares con tarjetas 3D (tilt).
5. **Instalaciones** — scroll horizontal anclado (GSAP pin) en desktop / carrusel swipe en móvil.
6. **Programas** — oferta por etapas con CTA por plan.
7. **Entrenadores** — cuerpo técnico (hover desaturado → color).
8. **Eventos / Calendario** — próximas fechas (pruebas, torneos, showcase).
9. **Galería multimedia** — bento grid con reveal por cortina + marquee.
10. **Testimonios** — validación social con carrusel.
11. **Consecuencias** — el costo de no actuar (urgencia).
12. **FAQ** — acordeón.
13. **CTA Final / Registro** — formulario que abre WhatsApp con los datos prellenados.

Globales: **Navbar fija**, **botón flotante de WhatsApp**, **Back to Top**, **indicador de progreso de scroll**, **cursor personalizado**, **transición de entrada de página**, **Footer completo**.

---

## Animaciones implementadas

Scroll reveal · stagger · fade · blur reveal · scale · parallax · mouse interactions ·
floating elements · magnetic buttons · sticky/pinned sections · horizontal scroll ·
infinite marquee · image zoom · motion values · layered depth · page transition ·
scroll progress · hover interactions · perspective / 3D hover.

## Responsive

Diseñado mobile-first, no adaptado: el scroll horizontal se convierte en carrusel táctil,
el cursor y el tilt 3D se desactivan en touch, los parallax se moderan y `prefers-reduced-motion`
desactiva Lenis y animaciones. Validado en mobile, tablet, desktop y ultrawide.

---

## Verificación

`tsc --noEmit` pasa sin errores en todos los archivos (tipos de Next, React, Framer Motion, GSAP y Lenis resueltos).
