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
  const alignClass =
    align === "center"
      ? "text-center items-center"
      : align === "right"
      ? "text-right items-end"
      : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass}`}>
      {eyebrow && (
        <p
          className={`text-xs tracking-[0.3em] uppercase mb-4 ${
            light ? "text-white/70" : "text-neutral-500"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide leading-tight ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <span
        className={`block w-14 h-px mt-6 ${
          align === "center" ? "mx-auto" : ""
        } ${light ? "bg-bronze-light" : "bg-bronze"}`}
      />
      {subtitle && (
        <p
          className={`font-serif italic text-xl md:text-2xl mt-6 max-w-xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/80" : "text-neutral-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
