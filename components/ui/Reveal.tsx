"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: boolean;
  scale?: boolean;
  once?: boolean;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
  blur = false,
  scale = false,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-12% 0px -12% 0px" });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y,
      scale: scale ? 0.92 : 1,
      filter: blur ? "blur(16px)" : "blur(0px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.95, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}
