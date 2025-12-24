"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Star } from "lucide-react";
import { itineraries } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ItinerariesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80"
          alt="Curated itineraries"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80" />

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-tag inline-block mb-4"
            >
              Curated Journeys
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white mb-4"
            >
              Ready-to-Book Itineraries
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-xl font-body max-w-2xl mx-auto"
            >
              Expertly designed journeys, meticulously planned and ready for you
              to experience. Each can be customized to your preferences.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Itineraries Grid */}
      <section className="section bg-sand">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itineraries.map((itinerary, index) => (
              <motion.div
                key={itinerary.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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

                    {/* Featured Badge */}
                    {itinerary.featured && (
                      <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 bg-gold text-white text-xs font-body font-semibold uppercase tracking-wider">
                        <Star size={12} fill="white" />
                        Featured
                      </div>
                    )}

                    {/* Duration Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1.5 bg-white/95 backdrop-blur-sm">
                      <Calendar size={14} className="text-teal" />
                      <span className="text-navy text-sm font-body font-medium">
                        {itinerary.duration}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white/80 text-xs font-body uppercase tracking-wider">
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
                    <div className="flex items-center gap-1.5 text-teal text-sm font-body mb-2">
                      <MapPin size={14} />
                      <span>
                        {itinerary.destinations
                          .map(
                            (d) => d.charAt(0).toUpperCase() + d.slice(1)
                          )
                          .join(", ")}
                      </span>
                    </div>

                    <h3 className="text-navy text-xl mb-2 group-hover:text-teal transition-colors">
                      {itinerary.name}
                    </h3>

                    <p className="text-navy-light font-body text-sm mb-4 line-clamp-2">
                      {itinerary.tagline}
                    </p>

                    {/* Highlights Preview */}
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
                    <span className="inline-flex items-center gap-2 text-teal font-body font-semibold text-sm uppercase tracking-wider group-hover:text-teal-dark transition-colors">
                      View Itinerary
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Itinerary CTA */}
      <section className="section bg-ivory">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-tag inline-block mb-4">
                Custom Journeys
              </span>
              <h2 className="text-navy mb-6">
                Don&apos;t See Your Perfect Trip?
              </h2>
              <div className="gold-line mb-6" />
              <p className="text-navy-light font-body text-lg mb-6">
                Our sample itineraries are just the beginning. Every journey we
                create is uniquely tailored to your interests, pace, and travel
                style.
              </p>
              <p className="text-navy-light font-body mb-8">
                Share your travel dreams with us, and our expert travel
                designers will craft a bespoke itinerary that exceeds your
                expectations.
              </p>
              <Link href="/plan-your-trip" className="btn-primary">
                Design Your Journey
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <Image
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80"
                alt="Custom travel planning"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
