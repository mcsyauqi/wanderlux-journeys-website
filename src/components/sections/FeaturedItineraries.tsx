"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { getFeaturedItineraries } from "@/lib/data";

export default function FeaturedItineraries() {
  const itineraries = getFeaturedItineraries();

  return (
    <section className="section bg-sand">
      <div className="container">
        <SectionHeader
          tag="Curated Itineraries"
          title="Ready-to-Book Journeys"
          subtitle="Expertly designed travel experiences, ready for you to embark on. Each itinerary can be customized to your preferences."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itineraries.map((itinerary, index) => (
            <motion.div
              key={itinerary.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white overflow-hidden"
            >
              <Link href={`/itineraries/${itinerary.slug}`}>
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={itinerary.image}
                    alt={itinerary.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 flex items-center gap-2">
                    <Calendar size={14} className="text-teal" />
                    <span className="text-navy text-sm font-body font-medium">
                      {itinerary.duration}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white/80 text-xs font-body uppercase tracking-wider mb-1">
                      From
                    </p>
                    <p className="text-white text-2xl font-heading">
                      ${itinerary.priceFrom.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Destinations */}
                  <div className="flex items-center gap-2 text-teal text-sm font-body mb-3">
                    <MapPin size={14} />
                    <span>
                      {itinerary.destinations
                        .map((d) => d.charAt(0).toUpperCase() + d.slice(1))
                        .join(", ")}
                    </span>
                  </div>

                  <h3 className="text-navy text-xl mb-2 group-hover:text-teal transition-colors">
                    {itinerary.name}
                  </h3>

                  <p className="text-navy-light text-sm font-body mb-4 line-clamp-2">
                    {itinerary.tagline}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {itinerary.highlights.slice(0, 3).map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2 py-1 bg-sand text-navy-light text-xs font-body"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-teal font-body font-semibold text-sm uppercase tracking-wider group-hover:text-teal-dark transition-colors">
                    <span>View Itinerary</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/itineraries" className="btn-secondary">
            Browse All Itineraries
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
