"use client";

type Props = {
  items: string[];
  fast?: boolean;
  reverse?: boolean;
};

export default function Marquee({ items, fast = false, reverse = false }: Props) {
  const row = [...items, ...items];
  const speed = fast ? "animate-marquee-fast" : "animate-marquee";
  const dir = reverse ? "[animation-direction:reverse]" : "";
  return (
    <div className="relative flex overflow-hidden border-y border-line bg-coal py-7 select-none">
      {[0, 1].map((k) => (
        <div key={k} className={`flex shrink-0 ${speed} ${dir} items-center gap-12 pr-12`} aria-hidden={k === 1}>
          {row.map((item, i) => (
            <span key={i} className="flex items-center gap-12">
              <span className="font-display text-3xl uppercase tracking-tight text-chalk/85 md:text-5xl">{item}</span>
              <span className="text-lime text-2xl leading-none md:text-4xl">●</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
