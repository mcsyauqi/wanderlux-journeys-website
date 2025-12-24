"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Cloud,
  DollarSign,
  Languages,
  Star,
  Check,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { Destination, Experience } from "@/lib/data";
import Button from "@/components/ui/Button";

interface DestinationContentProps {
  destination: Destination;
  relatedExperiences: Experience[];
}

export default function DestinationContent({
  destination,
  relatedExperiences,
}: DestinationContentProps) {
  const [activeImage, setActiveImage] = useState(0);
  const allImages = [destination.image, ...destination.gallery];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-28 left-8"
        >
          <Link
            href="/destinations"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ChevronLeft size={20} />
            <span className="font-body text-sm uppercase tracking-wider">
              All Destinations
            </span>
          </Link>
        </motion.div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 pb-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 text-gold mb-4"
            >
              <MapPin size={18} />
              <span className="font-body uppercase tracking-wider">
                {destination.country}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white mb-4"
            >
              {destination.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white/80 text-xl font-body max-w-2xl mb-8"
            >
              {destination.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/plan-your-trip">
                <Button variant="gold" size="lg" icon={<ArrowRight size={18} />}>
                  Plan Your Trip
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="bg-white py-8 border-b border-sand">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-sand flex items-center justify-center">
                <Calendar className="text-teal" size={24} />
              </div>
              <div>
                <p className="text-navy-light text-xs font-body uppercase tracking-wider">
                  Best Time
                </p>
                <p className="text-navy font-body font-medium">
                  {destination.bestTimeToVisit}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-sand flex items-center justify-center">
                <Cloud className="text-teal" size={24} />
              </div>
              <div>
                <p className="text-navy-light text-xs font-body uppercase tracking-wider">
                  Weather
                </p>
                <p className="text-navy font-body font-medium line-clamp-1">
                  {destination.weather}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-sand flex items-center justify-center">
                <DollarSign className="text-teal" size={24} />
              </div>
              <div>
                <p className="text-navy-light text-xs font-body uppercase tracking-wider">
                  Currency
                </p>
                <p className="text-navy font-body font-medium">
                  {destination.currency}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-sand flex items-center justify-center">
                <Languages className="text-teal" size={24} />
              </div>
              <div>
                <p className="text-navy-light text-xs font-body uppercase tracking-wider">
                  Language
                </p>
                <p className="text-navy font-body font-medium">
                  {destination.language}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-ivory">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-navy mb-6">About {destination.name}</h2>
                <div className="gold-line mb-6" />
                <p className="text-navy-light font-body text-lg leading-relaxed">
                  {destination.longDescription}
                </p>
              </motion.div>

              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="text-navy mb-6">Gallery</h3>
                <div className="relative aspect-video mb-4 overflow-hidden">
                  <Image
                    src={allImages[activeImage]}
                    alt={`${destination.name} gallery`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <button
                    onClick={() =>
                      setActiveImage(
                        (prev) => (prev - 1 + allImages.length) % allImages.length
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() =>
                      setActiveImage((prev) => (prev + 1) % allImages.length)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {allImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`relative aspect-video overflow-hidden ${
                        index === activeImage
                          ? "ring-2 ring-teal"
                          : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${destination.name} ${index + 1}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-navy mb-6">Highlights</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3 bg-white p-4"
                    >
                      <div className="w-8 h-8 bg-teal flex items-center justify-center flex-shrink-0">
                        <Check className="text-white" size={18} />
                      </div>
                      <span className="text-navy font-body">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              {/* Inquiry Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 shadow-lg sticky top-28 mb-8"
              >
                <h4 className="text-navy text-xl mb-4">
                  Start Planning Your Trip
                </h4>
                <p className="text-navy-light font-body mb-6">
                  Let our experts craft your perfect {destination.name}{" "}
                  experience.
                </p>
                <Link href="/plan-your-trip" className="btn-primary w-full mb-4">
                  Request a Quote
                </Link>
                <p className="text-center text-navy-light text-sm font-body">
                  or call{" "}
                  <a href="tel:+1234567890" className="text-teal font-medium">
                    +1 (234) 567-890
                  </a>
                </p>
              </motion.div>

              {/* Related Experiences */}
              {relatedExperiences.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-navy p-8"
                >
                  <h4 className="text-white text-xl mb-6">
                    Experiences in {destination.name}
                  </h4>
                  <div className="space-y-4">
                    {relatedExperiences.slice(0, 3).map((exp) => (
                      <Link
                        key={exp.id}
                        href={`/experiences?type=${exp.slug}`}
                        className="block p-4 bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <p className="text-white font-heading text-lg mb-1">
                          {exp.name}
                        </p>
                        <p className="text-white/60 text-sm font-body">
                          From ${exp.priceFrom.toLocaleString()}
                        </p>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src={destination.gallery[0] || destination.image}
          alt={destination.name}
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
            Ready to Explore {destination.name}?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg font-body mb-8 max-w-xl mx-auto"
          >
            Let us create your bespoke journey to this extraordinary
            destination.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/plan-your-trip">
              <Button variant="gold" size="lg" icon={<ArrowRight size={18} />}>
                Start Planning
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
