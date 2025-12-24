"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Check,
  X,
  ChevronLeft,
  Clock,
} from "lucide-react";
import { itineraries, getItineraryBySlug } from "@/lib/data";
import Button from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ItineraryPage({ params }: PageProps) {
  const { slug } = use(params);
  const itinerary = getItineraryBySlug(slug);

  if (!itinerary) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src={itinerary.image}
          alt={itinerary.name}
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-28 left-8"
        >
          <Link
            href="/itineraries"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ChevronLeft size={20} />
            <span className="font-body text-sm uppercase tracking-wider">
              All Itineraries
            </span>
          </Link>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 pb-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="flex items-center gap-1.5 text-gold">
                <MapPin size={18} />
                {itinerary.destinations
                  .map((d) => d.charAt(0).toUpperCase() + d.slice(1))
                  .join(", ")}
              </span>
              <span className="flex items-center gap-1.5 text-white/80">
                <Calendar size={18} />
                {itinerary.duration}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white mb-4"
            >
              {itinerary.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-xl font-body max-w-2xl mb-8"
            >
              {itinerary.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-6"
            >
              <div>
                <p className="text-white/60 text-sm font-body uppercase tracking-wider">
                  From
                </p>
                <p className="text-white text-3xl font-heading">
                  ${itinerary.priceFrom.toLocaleString()}
                </p>
              </div>
              <Link href="/plan-your-trip">
                <Button variant="gold" size="lg" icon={<ArrowRight size={18} />}>
                  Book This Trip
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section bg-ivory">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-navy mb-6">Journey Overview</h2>
                <div className="gold-line mb-6" />
                <p className="text-navy-light font-body text-lg leading-relaxed">
                  {itinerary.description}
                </p>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="text-navy mb-6">Trip Highlights</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {itinerary.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3 bg-white p-4"
                    >
                      <div className="w-8 h-8 bg-gold flex items-center justify-center flex-shrink-0">
                        <Check className="text-white" size={18} />
                      </div>
                      <span className="text-navy font-body">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Day-by-Day */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-navy mb-8">Day-by-Day Itinerary</h3>
                <div className="space-y-6">
                  {itinerary.days.map((day, index) => (
                    <motion.div
                      key={day.day}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white p-6 border-l-4 border-teal"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 bg-teal text-white flex items-center justify-center font-heading text-xl">
                          {day.day}
                        </div>
                        <div>
                          <p className="text-teal text-sm font-body uppercase tracking-wider">
                            Day {day.day}
                          </p>
                          <h4 className="text-navy text-xl">{day.title}</h4>
                        </div>
                      </div>
                      <p className="text-navy-light font-body mb-4">
                        {day.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {day.activities.map((activity) => (
                          <span
                            key={activity}
                            className="flex items-center gap-1 px-3 py-1 bg-sand text-navy-light text-sm font-body"
                          >
                            <Clock size={12} />
                            {activity}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}

                  {/* Remaining days indicator */}
                  {itinerary.days.length <
                    parseInt(itinerary.duration.split(" ")[0]) && (
                    <div className="bg-sand p-6 text-center">
                      <p className="text-navy-light font-body">
                        Full day-by-day itinerary available upon inquiry.
                        Contact us for the complete experience details.
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Booking Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 shadow-lg sticky top-28 mb-8"
              >
                <h4 className="text-navy text-xl mb-2">Book This Journey</h4>
                <p className="text-gold text-sm font-body uppercase tracking-wider mb-4">
                  {itinerary.duration}
                </p>
                <div className="border-t border-b border-sand py-4 mb-6">
                  <p className="text-navy-light text-sm font-body mb-1">
                    Starting from
                  </p>
                  <p className="text-navy text-3xl font-heading">
                    ${itinerary.priceFrom.toLocaleString()}
                  </p>
                  <p className="text-navy-light text-xs font-body">per person</p>
                </div>
                <Link href="/plan-your-trip" className="btn-primary w-full mb-4">
                  Request This Trip
                </Link>
                <p className="text-center text-navy-light text-sm font-body">
                  or call{" "}
                  <a href="tel:+1234567890" className="text-teal font-medium">
                    +1 (234) 567-890
                  </a>
                </p>
              </motion.div>

              {/* What's Included */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-teal p-8 mb-8"
              >
                <h4 className="text-white text-xl mb-4">What&apos;s Included</h4>
                <ul className="space-y-3">
                  {itinerary.included.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-white/90 font-body text-sm"
                    >
                      <Check
                        className="text-gold flex-shrink-0 mt-0.5"
                        size={16}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* What's Not Included */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-sand p-8"
              >
                <h4 className="text-navy text-xl mb-4">Not Included</h4>
                <ul className="space-y-3">
                  {itinerary.excluded.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-navy-light font-body text-sm"
                    >
                      <X
                        className="text-terracotta flex-shrink-0 mt-0.5"
                        size={16}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src={itinerary.image}
          alt={itinerary.name}
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="container relative text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-4"
          >
            Ready to Embark on This Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg font-body mb-8 max-w-xl mx-auto"
          >
            This itinerary can be customized to match your preferences, dates,
            and travel style.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/plan-your-trip">
              <Button variant="gold" size="lg" icon={<ArrowRight size={18} />}>
                Book This Trip
              </Button>
            </Link>
            <Link href="/itineraries">
              <Button variant="ghost" size="lg">
                Browse More Itineraries
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
