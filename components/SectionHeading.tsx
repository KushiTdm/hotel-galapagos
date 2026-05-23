"use client";

import ScrollFloat from "./ScrollFloat";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const itemsClass =
    align === "center"
      ? "items-center"
      : align === "right"
      ? "items-end"
      : "items-start";

  const textAlignClass =
    align === "center"
      ? "text-center"
      : align === "right"
      ? "text-right"
      : "text-left";

  return (
    <div className={`flex flex-col ${itemsClass}`}>
      {eyebrow && (
        <p
          className={`text-xs tracking-[0.3em] uppercase mb-2 md:mb-4 font-sans ${
            light ? "text-white/70" : "text-neutral-500"
          }`}
        >
          {eyebrow}
        </p>
      )}

      <ScrollFloat
        containerClassName={`${textAlignClass} my-0`}
        textClassName={`font-serif text-3xl md:text-5xl lg:text-6xl uppercase tracking-wide ${
          light ? "text-white" : "text-ink"
        }`}
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.025}
      >
        {title}
      </ScrollFloat>

      <span
        className={`block w-14 h-px mt-4 md:mt-6 ${
          align === "center" ? "mx-auto" : ""
        } ${light ? "bg-bronze-light" : "bg-bronze"}`}
      />
      {subtitle && (
        <p
          className={`font-serif italic text-lg md:text-2xl mt-4 md:mt-6 max-w-xl ${
            align === "center" ? "mx-auto text-center" : ""
          } ${light ? "text-white/80" : "text-neutral-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
