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
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {tagText && (
        <p className="text-gold text-sm font-semibold tracking-widest mb-4">
          {tagText.toUpperCase()}
        </p>
      )}
      <h2 className={`text-4xl ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      {descText && (
        <p className={`text-lg mt-4 max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-white/70" : "text-navy-light"}`}>
          {descText}
        </p>
      )}
    </div>
  );
}
