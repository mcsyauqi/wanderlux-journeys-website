"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const destinations = [
  {
    name: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&q=80",
    slug: "santorini",
  },
  {
    name: "Maldives",
    country: "Indian Ocean",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80",
    slug: "maldives",
  },
  {
    name: "Swiss Alps",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    slug: "swiss-alps",
  },
  {
    name: "Kyoto",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80",
    slug: "kyoto",
  },
];

export default function Destinations() {
  return (
    <section className="py-24 md:py-32 bg-sand">
      <div className="wrapper">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Featured Destinations
          </p>
          <h2 className="text-navy mb-4">
            Explore Extraordinary Places
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-gold text-sm mb-2">
                    <MapPin size={14} />
                    <span>{dest.country}</span>
                  </div>
                  <h3 className="text-white text-xl">{dest.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 border-2 border-gold text-gold px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:bg-gold hover:text-white transition-colors"
          >
            View All Destinations
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
