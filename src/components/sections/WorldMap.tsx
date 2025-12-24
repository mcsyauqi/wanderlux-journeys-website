"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { destinations } from "@/lib/data";

// SVG coordinates for destination pins (approximate positions on a world map)
const destinationPins = [
  { slug: "santorini", x: 55, y: 38, name: "Santorini" },
  { slug: "maldives", x: 68, y: 52, name: "Maldives" },
  { slug: "swiss-alps", x: 51, y: 35, name: "Swiss Alps" },
  { slug: "kyoto", x: 83, y: 40, name: "Kyoto" },
  { slug: "serengeti", x: 56, y: 58, name: "Serengeti" },
  { slug: "amalfi-coast", x: 52, y: 38, name: "Amalfi Coast" },
  { slug: "patagonia", x: 28, y: 82, name: "Patagonia" },
  { slug: "bora-bora", x: 5, y: 60, name: "Bora Bora" },
];

export default function WorldMap() {
  const [activeDestination, setActiveDestination] = useState<string | null>(null);

  const getDestinationDetails = (slug: string) => {
    return destinations.find((d) => d.slug === slug);
  };

  return (
    <section className="section bg-navy overflow-hidden">
      <div className="container px-6">
        <SectionHeader
          tag="Explore the World"
          title="Our Destinations"
          subtitle="Click on a pin to discover your next adventure."
          light
        />

        <div className="relative">
          {/* World Map SVG */}
          <div className="relative w-full aspect-[2/1] bg-navy-medium/30 rounded-lg overflow-hidden">
            {/* Simple world map background */}
            <svg
              viewBox="0 0 100 50"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Simplified continent shapes */}
              <defs>
                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(13, 148, 136, 0.1)" />
                  <stop offset="100%" stopColor="rgba(212, 175, 55, 0.1)" />
                </linearGradient>
              </defs>

              {/* Background */}
              <rect width="100" height="50" fill="url(#mapGradient)" />

              {/* Grid lines */}
              {[...Array(10)].map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1="0"
                  y1={i * 5}
                  x2="100"
                  y2={i * 5}
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="0.1"
                />
              ))}
              {[...Array(20)].map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={i * 5}
                  y1="0"
                  x2={i * 5}
                  y2="50"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="0.1"
                />
              ))}

              {/* Simplified continent outlines */}
              {/* North America */}
              <path
                d="M10,15 Q15,12 20,14 L25,18 Q28,22 26,28 L22,32 Q18,30 15,28 L12,22 Q8,18 10,15"
                fill="rgba(255,255,255,0.08)"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="0.2"
              />
              {/* South America */}
              <path
                d="M24,35 Q28,38 30,45 L28,48 Q24,47 22,44 L20,38 Q22,35 24,35"
                fill="rgba(255,255,255,0.08)"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="0.2"
              />
              {/* Europe */}
              <path
                d="M45,18 Q52,15 58,18 L60,22 Q58,25 54,26 L48,24 Q44,22 45,18"
                fill="rgba(255,255,255,0.08)"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="0.2"
              />
              {/* Africa */}
              <path
                d="M48,30 Q55,28 60,32 L62,42 Q60,50 55,52 L50,48 Q46,42 48,30"
                fill="rgba(255,255,255,0.08)"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="0.2"
              />
              {/* Asia */}
              <path
                d="M60,15 Q70,12 82,18 L88,25 Q90,32 85,38 L75,40 Q68,38 62,32 L58,25 Q58,18 60,15"
                fill="rgba(255,255,255,0.08)"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="0.2"
              />
              {/* Australia */}
              <path
                d="M80,48 Q85,46 90,48 L92,52 Q90,56 85,56 L82,54 Q78,52 80,48"
                fill="rgba(255,255,255,0.08)"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="0.2"
              />
            </svg>

            {/* Destination Pins */}
            {destinationPins.map((pin) => {
              const destination = getDestinationDetails(pin.slug);
              const isActive = activeDestination === pin.slug;

              return (
                <motion.button
                  key={pin.slug}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: Math.random() * 0.5 }}
                  onClick={() => setActiveDestination(isActive ? null : pin.slug)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                >
                  {/* Pulse effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute inset-0 rounded-full ${
                      isActive ? "bg-gold" : "bg-teal"
                    }`}
                    style={{ width: 24, height: 24, margin: -4 }}
                  />

                  {/* Pin */}
                  <div
                    className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-gold scale-150"
                        : "bg-teal group-hover:bg-gold group-hover:scale-125"
                    }`}
                  >
                    <div className="absolute inset-1 bg-white rounded-full" />
                  </div>

                  {/* Tooltip */}
                  <AnimatePresence>
                    {isActive && destination && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-48 bg-white p-4 shadow-xl z-10"
                      >
                        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white" />
                        <p className="text-gold text-xs font-body uppercase tracking-wider mb-1">
                          {destination.country}
                        </p>
                        <p className="text-navy font-heading text-lg mb-2">
                          {destination.name}
                        </p>
                        <p className="text-navy-light text-xs font-body mb-3 line-clamp-2">
                          {destination.tagline}
                        </p>
                        <Link
                          href={`/destinations/${destination.slug}`}
                          className="inline-flex items-center gap-1 text-teal text-xs font-body font-semibold uppercase tracking-wider hover:text-teal-dark"
                        >
                          Explore
                          <ArrowRight size={12} />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {destinationPins.map((pin) => {
              const destination = getDestinationDetails(pin.slug);
              const isActive = activeDestination === pin.slug;

              return (
                <button
                  key={pin.slug}
                  onClick={() => setActiveDestination(isActive ? null : pin.slug)}
                  className={`flex items-center gap-2 px-4 py-2 transition-all ${
                    isActive
                      ? "bg-gold text-white"
                      : "bg-white/15 text-white/90 hover:bg-white/25 hover:text-white"
                  }`}
                >
                  <MapPin size={14} />
                  <span className="text-sm font-body">{pin.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/destinations" className="btn-secondary">
            View All Destinations
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
