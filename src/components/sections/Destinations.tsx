"use client";

import Image from "next/image";
import Link from "next/link";

const places = [
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
    <section className="bg-sand py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-gold text-sm font-semibold tracking-widest mb-4">DESTINATIONS</p>
            <h2 className="text-4xl text-navy">Popular Destinations</h2>
          </div>
          <Link
            href="/destinations"
            className="text-teal font-semibold text-sm tracking-wide mt-4 md:mt-0 hover:text-teal-dark"
          >
            VIEW ALL →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {places.map((place) => (
            <Link key={place.slug} href={`/destinations/${place.slug}`} className="group">
              <div className="aspect-[3/4] relative overflow-hidden mb-4">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-gold text-sm mb-1">{place.country}</p>
                  <h3 className="text-white text-xl">{place.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
