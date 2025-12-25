"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 bg-sand">
      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gold text-sm font-semibold tracking-widest mb-6">
            LUXURY TRAVEL EXPERIENCES
          </p>
          <h1 className="text-5xl lg:text-6xl text-navy mb-6 leading-tight">
            Discover Your Next
            <span className="text-teal block">Adventure</span>
          </h1>
          <p className="text-navy-light text-lg mb-10 max-w-md">
            Bespoke journeys to the world's most extraordinary destinations, crafted exclusively for you.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/plan-your-trip"
              className="bg-teal text-white px-8 py-4 font-semibold text-sm tracking-wide hover:bg-teal-dark"
            >
              START PLANNING
            </Link>
            <Link
              href="/destinations"
              className="border-2 border-navy text-navy px-8 py-4 font-semibold text-sm tracking-wide hover:bg-navy hover:text-white"
            >
              VIEW DESTINATIONS
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] relative">
            <Image
              src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80"
              alt="Santorini"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gold/20 -z-10" />
        </div>
      </div>
    </section>
  );
}
