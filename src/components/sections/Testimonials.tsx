"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section bg-ivory">
      <div className="container">
        <SectionHeader
          tag="Testimonials"
          title="Stories From Our Travelers"
          subtitle="Don't just take our word for it. Hear from those who've experienced the Wanderlux difference."
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gold flex items-center justify-center z-10"
            >
              <Quote className="text-white" size={24} />
            </motion.div>

            {/* Testimonial Card */}
            <div className="bg-white pt-12 pb-8 px-8 md:px-16 text-center shadow-xl border border-sand-medium">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="text-gold fill-gold"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl font-heading text-navy mb-8 leading-relaxed">
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </blockquote>

                  {/* Trip */}
                  <p className="text-teal text-sm font-body uppercase tracking-wider mb-6">
                    {currentTestimonial.trip}
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="text-left">
                      <p className="text-navy font-heading text-lg">
                        {currentTestimonial.name}
                      </p>
                      <p className="text-navy-light text-sm font-body">
                        {currentTestimonial.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-3 border border-navy/20 text-navy hover:bg-navy hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-gold w-8"
                        : "bg-navy/20 hover:bg-navy/40"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 border border-navy/20 text-navy hover:bg-navy hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
