"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "lime" | "outline" | "grass";
  strength?: number;
  fullWidthMobile?: boolean;
};

export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  variant = "lime",
  strength = 0.45,
  fullWidthMobile = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });
  const textX = useTransform(springX, (v) => v * 0.4);
  const textY = useTransform(springY, (v) => v * 0.4);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };
  const reset = () => { x.set(0); y.set(0); };

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest transition-colors duration-300 will-change-transform";
  const styles =
    variant === "lime"
      ? "bg-lime text-night hover:bg-lime-bright shadow-[0_0_40px_-8px_rgba(190,242,100,0.6)]"
      : variant === "grass"
      ? "bg-grass text-chalk hover:bg-grass-bright"
      : "border border-chalk/25 text-chalk hover:border-lime hover:text-lime";

  const widthCls = fullWidthMobile ? "flex w-full sm:inline-flex sm:w-auto" : "inline-flex";
  const wrapperCls = fullWidthMobile ? "block w-full sm:inline-block sm:w-auto" : "inline-block";

  const content = (
    <motion.div
      ref={ref}
      data-cursor="button"
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`${base.replace("inline-flex", widthCls)} ${styles} ${className}`}
    >
      <motion.span style={{ x: textX, y: textY }} className="pointer-events-none inline-flex items-center gap-2">
        {children}
      </motion.span>
    </motion.div>
  );

  if (href) return <a href={href} onClick={onClick} className={wrapperCls}>{content}</a>;
  return <button onClick={onClick} type="button" className={wrapperCls}>{content}</button>;
}
