"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const pillars = [
  {
    title: "Bespoke Journeys",
    description:
      "Every itinerary is crafted from scratch, tailored to your dreams, interests, and travel style.",
  },
  {
    title: "Exclusive Access",
    description:
      "We open doors others can't, from private museum viewings to chef's table experiences.",
  },
  {
    title: "Local Expertise",
    description:
      "Our network of local experts ensures authentic connections in every destination.",
  },
  {
    title: "Seamless Luxury",
    description:
      "From the first call to your return home, every detail is handled with impeccable care.",
  },
];

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Luxury travel background"
          fill
          className="object-cover scale-125"
          unoptimized
        />
      </motion.div>
      <div className="absolute inset-0 bg-navy/75" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-tag inline-block mb-6"
            >
              Our Philosophy
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white mb-6"
            >
              We Don&apos;t Plan Trips.
              <br />
              <span className="text-gold">We Craft Experiences.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="gold-line mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white text-lg font-body mb-8 leading-relaxed"
            >
              At Wanderlux Journeys, we believe travel should be transformative.
              Our team of expert travel designers works closely with you to
              create journeys that resonate with your passions, exceed your
              expectations, and create memories that last a lifetime.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-white/90 font-body mb-8"
            >
              With over 15 years of experience and partnerships with the
              world&apos;s finest hotels, guides, and local experts, we handle
              every detail so you can focus on what matters most: experiencing
              the extraordinary.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20"
            >
              <div>
                <p className="text-4xl font-heading text-gold mb-1">15+</p>
                <p className="text-white/80 text-sm font-body">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-4xl font-heading text-gold mb-1">50+</p>
                <p className="text-white/80 text-sm font-body">
                  Destinations
                </p>
              </div>
              <div>
                <p className="text-4xl font-heading text-gold mb-1">98%</p>
                <p className="text-white/80 text-sm font-body">
                  Client Satisfaction
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Pillars */}
          <div className="space-y-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white/10 backdrop-blur-md p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold flex items-center justify-center flex-shrink-0">
                    <Check className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white text-xl font-heading mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-white/90 font-body text-sm">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
