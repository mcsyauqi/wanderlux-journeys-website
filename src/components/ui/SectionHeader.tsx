"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  light?: boolean;
}

export default function SectionHeader({
  tag,
  title,
  subtitle,
  alignment = "center",
  light = false,
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={`max-w-3xl ${alignmentClasses[alignment]} mb-14 md:mb-20`}>
      {tag && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-tag inline-block mb-4"
        >
          {tag}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={light ? "text-white" : "text-navy"}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`mt-4 text-lg ${light ? "text-white/80" : "text-navy-light"}`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className={`gold-line mt-6 ${
          alignment === "center"
            ? "mx-auto"
            : alignment === "right"
              ? "ml-auto"
              : ""
        }`}
      />
    </div>
  );
}
