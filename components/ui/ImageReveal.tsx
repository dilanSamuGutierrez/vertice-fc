"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  zoom?: boolean;
};

/** Image with a clip-path curtain reveal + optional hover zoom. */
export default function ImageReveal({ src, alt, className = "", sizes = "100vw", priority = false, zoom = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <div ref={ref} className={`group relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={inView ? { clipPath: "inset(0 0 0% 0)" } : {}}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-full w-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover transition-transform duration-[1200ms] ease-out-expo ${zoom ? "group-hover:scale-110" : ""}`}
        />
      </motion.div>
    </div>
  );
}
