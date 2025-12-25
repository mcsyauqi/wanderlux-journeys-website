"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Intro() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] relative">
              <Image
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80"
                alt="Luxury travel experience"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            {/* Accent box */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold/10 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
              About Wanderlux
            </span>
            <h2 className="text-navy mb-6">
              We Craft Unforgettable Travel Experiences
            </h2>
            <div className="w-16 h-0.5 bg-gold mb-8" />
            <p className="text-navy-light text-lg mb-6">
              For over 15 years, Wanderlux Journeys has been curating exceptional travel experiences for those who seek more than ordinary vacations.
            </p>
            <p className="text-navy-light mb-8">
              Our team of expert travel designers works closely with you to understand your dreams and create journeys that exceed expectations. From private yacht charters to exclusive cultural immersions, we handle every detail.
            </p>
            <div className="grid grid-cols-3 gap-8 mb-10">
              <div>
                <p className="text-4xl font-serif text-teal mb-1">15+</p>
                <p className="text-sm text-navy-light">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-teal mb-1">50+</p>
                <p className="text-sm text-navy-light">Destinations</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-teal mb-1">98%</p>
                <p className="text-sm text-navy-light">Happy Clients</p>
              </div>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-teal font-semibold uppercase tracking-wider text-sm hover:text-teal-dark transition-colors"
            >
              Learn More About Us
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
