"use client";

import { motion } from "framer-motion";
import { Compass, Ship, Mountain, Heart, Landmark, Plane } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Private Tours",
    description: "Exclusive guided experiences with local experts tailored to your interests.",
  },
  {
    icon: Ship,
    title: "Luxury Cruises",
    description: "Sail the world's most beautiful waters aboard premium vessels.",
  },
  {
    icon: Mountain,
    title: "Adventure Expeditions",
    description: "Thrilling journeys to remote and extraordinary destinations.",
  },
  {
    icon: Heart,
    title: "Honeymoon Packages",
    description: "Romantic escapes designed for couples seeking unforgettable moments.",
  },
  {
    icon: Landmark,
    title: "Cultural Immersions",
    description: "Deep dive into local traditions, cuisine, and heritage.",
  },
  {
    icon: Plane,
    title: "Custom Itineraries",
    description: "Fully personalized travel plans built around your vision.",
  },
];

export default function Services() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4 block"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-navy mb-4"
          >
            How We Can Help You Travel
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-16 h-0.5 bg-gold mx-auto"
          />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-sand/50 hover:bg-sand transition-colors group"
            >
              <div className="w-14 h-14 bg-teal/10 flex items-center justify-center mb-6 group-hover:bg-teal transition-colors">
                <service.icon className="text-teal group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-navy text-xl mb-3">{service.title}</h3>
              <p className="text-navy-light">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 text-teal font-semibold uppercase tracking-wider text-sm hover:text-teal-dark transition-colors"
          >
            Explore All Experiences
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
