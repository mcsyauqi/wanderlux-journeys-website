"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Ship,
  Binoculars,
  Landmark,
  Heart,
  Mountain,
  Check,
} from "lucide-react";
import { experiences, destinations } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const iconMap: {
  [key: string]: React.ComponentType<{ size?: number; className?: string }>;
} = {
  compass: Compass,
  ship: Ship,
  binoculars: Binoculars,
  landmark: Landmark,
  heart: Heart,
  mountain: Mountain,
};

export default function ExperiencesPage() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  const getDestinationNames = (slugs: string[]) => {
    return slugs
      .map((slug) => destinations.find((d) => d.slug === slug)?.name)
      .filter(Boolean)
      .join(", ");
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80"
          alt="Luxury travel experiences"
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
              Curated Experiences
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white mb-4"
            >
              How Will You Travel?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-xl font-body max-w-2xl mx-auto"
            >
              From private guided tours to transformative wellness retreats,
              discover the perfect way to experience the world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Experience Grid */}
      <section className="section bg-sand">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => {
              const IconComponent = iconMap[experience.icon] || Compass;

              return (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={experience.image}
                      alt={experience.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 w-14 h-14 bg-gold flex items-center justify-center">
                      <IconComponent className="text-white" size={28} />
                    </div>

                    {/* Price */}
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white/80 text-xs font-body uppercase tracking-wider">
                        From
                      </p>
                      <p className="text-white text-2xl font-heading">
                        ${experience.priceFrom.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-teal text-sm font-body mb-2">
                      {experience.duration}
                    </p>
                    <h3 className="text-navy text-xl mb-2">
                      {experience.name}
                    </h3>
                    <p className="text-navy-light font-body text-sm mb-4">
                      {experience.tagline}
                    </p>
                    <p className="text-navy-light/70 font-body text-sm mb-4 line-clamp-2">
                      {experience.description}
                    </p>

                    {/* Destinations */}
                    <p className="text-sm font-body text-navy-light mb-4">
                      <span className="font-medium">Available in:</span>{" "}
                      {getDestinationNames(experience.destinations)}
                    </p>

                    <Link
                      href="/plan-your-trip"
                      className="inline-flex items-center gap-2 text-teal font-body font-semibold text-sm uppercase tracking-wider hover:text-teal-dark transition-colors"
                    >
                      Inquire Now
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selected Experience Detail */}
      <section className="section bg-ivory">
        <div className="container">
          <SectionHeader
            tag="Explore in Detail"
            title="What's Included"
            subtitle="Select an experience to see what makes each journey extraordinary."
          />

          {/* Experience Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {experiences.map((exp) => {
              const IconComponent = iconMap[exp.icon] || Compass;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExperience(exp)}
                  className={`flex items-center gap-2 px-4 py-2 font-body text-sm transition-all ${
                    selectedExperience.id === exp.id
                      ? "bg-teal text-white"
                      : "bg-white text-navy hover:bg-sand"
                  }`}
                >
                  <IconComponent size={18} />
                  {exp.name}
                </button>
              );
            })}
          </div>

          {/* Experience Details */}
          <motion.div
            key={selectedExperience.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={selectedExperience.image}
                alt={selectedExperience.name}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-navy mb-4">{selectedExperience.name}</h3>
              <p className="text-gold font-body uppercase tracking-wider text-sm mb-4">
                {selectedExperience.tagline}
              </p>
              <p className="text-navy-light font-body mb-6">
                {selectedExperience.description}
              </p>

              {/* Highlights */}
              <div className="mb-8">
                <h4 className="text-navy text-lg font-heading mb-4">
                  Highlights
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedExperience.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2">
                      <Check className="text-teal flex-shrink-0" size={18} />
                      <span className="text-navy-light font-body text-sm">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included */}
              <div className="mb-8">
                <h4 className="text-navy text-lg font-heading mb-4">
                  What&apos;s Included
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedExperience.included.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="text-gold flex-shrink-0" size={18} />
                      <span className="text-navy-light font-body text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link href="/plan-your-trip">
                  <Button variant="primary" icon={<ArrowRight size={16} />}>
                    Plan This Experience
                  </Button>
                </Link>
                <p className="text-navy-light font-body">
                  From{" "}
                  <span className="text-navy font-semibold">
                    ${selectedExperience.priceFrom.toLocaleString()}
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
          alt="Luxury yacht"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="container relative text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-4"
          >
            Not Sure Which Experience Is Right for You?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg font-body mb-8 max-w-xl mx-auto"
          >
            Speak with our travel experts who will help design the perfect
            journey based on your interests and dreams.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/plan-your-trip">
              <Button variant="gold" size="lg" icon={<ArrowRight size={18} />}>
                Start a Conversation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
