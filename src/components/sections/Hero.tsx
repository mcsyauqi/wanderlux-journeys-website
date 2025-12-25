"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1920&q=80"
          alt="Santorini"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-navy/50" />
      </div>

      {/* Content */}
      <div className="relative wrapper">
        <div className="max-w-2xl">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-6">
            Luxury Travel Experiences
          </p>

          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-heading)] font-medium mb-6 leading-tight">
            Journey Beyond <span className="text-gold">Ordinary</span>
          </h1>

          <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
            Discover the world's most extraordinary destinations with bespoke travel experiences crafted for discerning travelers.
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
        </div>
      </div>
    </section>
  );
}
