"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px]">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1920&q=80"
        alt="Santorini sunset"
        fill
        className="object-cover"
        priority
        unoptimized
      />
      <div className="absolute inset-0 bg-navy/50" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-6">
              Luxury Travel Experiences
            </span>
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-medium mb-6">
              Journey Beyond{" "}
              <span className="text-gold">Ordinary</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-xl">
              Discover the world's most extraordinary destinations with our bespoke travel experiences crafted for discerning travelers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/plan-your-trip"
                className="inline-flex items-center gap-3 bg-teal text-white px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:bg-teal-dark transition-colors"
              >
                Plan Your Journey
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/destinations"
                className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:bg-white hover:text-navy transition-colors"
              >
                Explore Destinations
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
