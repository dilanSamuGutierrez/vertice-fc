"use client";

import { motion } from "framer-motion";

/** Decorative floating element (CSS keyframe + entrance). */
export default function Floating({
  className = "",
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`animate-floaty pointer-events-none ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  );
}
