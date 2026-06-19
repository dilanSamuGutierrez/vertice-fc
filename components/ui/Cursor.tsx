"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Custom mouse-follow cursor with magnetic state on interactive elements. Desktop only. */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor], input, textarea, select"));
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        style={{ left: sx, top: sy }}
        className="pointer-events-none fixed z-[80] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hover ? 2.6 : 1, opacity: hover ? 0.25 : 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="h-3 w-3 rounded-full bg-lime"
        />
      </motion.div>
      <motion.div
        style={{ left: x, top: y }}
        className="pointer-events-none fixed z-[80] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hover ? 1.5 : 1, borderColor: hover ? "#BEF264" : "rgba(244,247,244,0.4)" }}
          className="h-9 w-9 rounded-full border"
        />
      </motion.div>
    </>
  );
}
