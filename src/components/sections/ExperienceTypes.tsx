"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Compass,
  Ship,
  Binoculars,
  Landmark,
  Heart,
  Mountain,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { experiences } from "@/lib/data";

const iconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
  compass: Compass,
  ship: Ship,
  binoculars: Binoculars,
  landmark: Landmark,
  heart: Heart,
  mountain: Mountain,
};

export default function ExperienceTypes() {
  const [activeExperience, setActiveExperience] = useState(experiences[0]);

  return (
    <section className="section bg-ivory">
      <div className="container px-6">
        <SectionHeader
          tag="Curated Experiences"
          title="How Will You Travel?"
          subtitle="From private guided tours to wellness retreats, we craft experiences that transform the way you see the world."
        />

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Experience Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden order-2 lg:order-1"
          >
            <motion.div
              key={activeExperience.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={activeExperience.image}
                alt={activeExperience.name}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
            </motion.div>

            {/* Experience Info Overlay */}
            <motion.div
              key={`info-${activeExperience.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute bottom-0 left-0 right-0 p-8"
            >
              <p className="text-gold text-sm font-body uppercase tracking-wider mb-2">
                From ${activeExperience.priceFrom.toLocaleString()}
              </p>
              <h3 className="text-white text-3xl mb-3">
                {activeExperience.name}
              </h3>
              <p className="text-white font-body mb-4">
                {activeExperience.tagline}
              </p>
              <Link
                href={`/experiences?type=${activeExperience.slug}`}
                className="inline-flex items-center gap-2 text-gold font-body font-semibold uppercase text-sm tracking-wider hover:text-gold-light transition-colors"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Experience List */}
          <div className="order-1 lg:order-2">
            <div className="space-y-4">
              {experiences.map((experience, index) => {
                const IconComponent = iconMap[experience.icon] || Compass;
                const isActive = experience.id === activeExperience.id;

                return (
                  <motion.button
                    key={experience.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setActiveExperience(experience)}
                    className={`w-full flex items-center gap-6 p-6 text-left transition-all border shadow-md hover:shadow-lg ${
                      isActive
                        ? "bg-teal border-teal shadow-teal/20"
                        : "bg-white border-sand-medium hover:border-teal"
                    }`}
                  >
                    <div
                      className={`w-14 h-14 flex items-center justify-center ${
                        isActive ? "bg-white/20" : "bg-sand"
                      }`}
                    >
                      <IconComponent
                        size={28}
                        className={isActive ? "text-white" : "text-teal"}
                      />
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`text-xl font-heading mb-1 ${
                          isActive ? "text-white" : "text-navy"
                        }`}
                      >
                        {experience.name}
                      </h4>
                      <p
                        className={`text-sm font-body ${
                          isActive ? "text-white/80" : "text-navy-light"
                        }`}
                      >
                        {experience.duration} · From $
                        {experience.priceFrom.toLocaleString()}
                      </p>
                    </div>
                    <ArrowRight
                      size={20}
                      className={`transition-transform ${
                        isActive
                          ? "text-white translate-x-0"
                          : "text-teal -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                    />
                  </motion.button>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <Link
                href="/experiences"
                className="btn-secondary inline-flex items-center gap-2"
              >
                View All Experiences
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
