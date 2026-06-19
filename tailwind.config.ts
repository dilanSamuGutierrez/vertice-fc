import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark stadium palette
        night: "#070A08",
        coal: "#0C110D",
        slate2: "#141B16",
        line: "#222C24",
        ash: "#8A968C",
        fog: "#C7D0C8",
        chalk: "#F4F7F4",
        // Brand: grass green + electric lime
        grass: { DEFAULT: "#15803D", dark: "#0E5C2C", bright: "#22C55E" },
        lime: { DEFAULT: "#BEF264", bright: "#D9FF66", dark: "#A3E635" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-anton)", "Impact", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.05em",
        huge: "-0.06em",
      },
      maxWidth: { container: "1320px" },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
        "marquee-fast": "marquee 16s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
