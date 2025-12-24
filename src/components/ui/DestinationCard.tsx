"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import type { Destination } from "@/lib/data";

interface DestinationCardProps {
  destination: Destination;
  index?: number;
  size?: "default" | "large" | "wide";
}

export default function DestinationCard({
  destination,
  index = 0,
  size = "default",
}: DestinationCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    default: "aspect-[3/4] w-[300px] md:w-[350px]",
    large: "aspect-[3/4] w-full",
    wide: "aspect-[16/9] w-full",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-300 ${sizeClasses[size]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/destinations/${destination.slug}`} className="block h-full">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
          {/* Location Tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-gold text-sm font-body mb-3"
          >
            <MapPin size={14} />
            <span>{destination.country}</span>
          </motion.div>

          {/* Title */}
          <h3 className="text-white text-2xl md:text-3xl font-heading mb-3">
            {destination.name}
          </h3>

          {/* Tagline */}
          <p className="text-white/80 text-sm md:text-base font-body mb-4 line-clamp-2">
            {destination.tagline}
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-gold font-body text-sm font-semibold uppercase tracking-wider"
          >
            <span>Explore</span>
            <ArrowRight size={16} />
          </motion.div>
        </div>

        {/* Gold accent line */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gold"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.4 }}
        />
      </Link>
    </motion.div>
  );
}
