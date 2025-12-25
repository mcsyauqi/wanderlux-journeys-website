"use client";

interface SectionHeaderProps {
  eyebrow?: string;
  tag?: string;
  title: string;
  description?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  tag,
  title,
  description,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  const tagText = eyebrow || tag;
  const descText = description || subtitle;

  return (
    <div className={centered ? "text-center mb-16" : "mb-12"}>
      {tagText && (
        <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">
          {tagText}
        </p>
      )}
      <h2 className={light ? "text-white mb-4" : "text-navy mb-4"}>{title}</h2>
      <div className={`w-16 h-0.5 bg-gold ${centered ? "mx-auto" : ""} ${descText ? "mb-6" : ""}`} />
      {descText && (
        <p
          className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-white/80" : "text-navy-light"
          }`}
        >
          {descText}
        </p>
      )}
    </div>
  );
}
