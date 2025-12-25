"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
        alt="Tropical beach"
        fill
        className="object-cover"
        unoptimized
      />
      <div className="absolute inset-0 bg-navy/80" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
            Start Your Journey
          </span>
          <h2 className="text-white mb-6">
            Ready to Experience the Extraordinary?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Let our expert travel designers craft your perfect journey. Contact us today and take the first step towards an unforgettable adventure.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              href="/plan-your-trip"
              className="inline-flex items-center justify-center gap-3 bg-teal text-white px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:bg-teal-dark transition-colors"
            >
              Plan Your Trip
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:bg-white hover:text-navy transition-colors"
            >
              <Phone size={18} />
              Call Us Now
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-8 text-white/80 text-sm">
            <a href="tel:+1234567890" className="flex items-center justify-center gap-2 hover:text-gold transition-colors">
              <Phone size={16} />
              +1 (234) 567-890
            </a>
            <a href="mailto:hello@wanderluxjourneys.com" className="flex items-center justify-center gap-2 hover:text-gold transition-colors">
              <Mail size={16} />
              hello@wanderluxjourneys.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
