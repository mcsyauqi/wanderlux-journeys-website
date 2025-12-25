"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="py-24 md:py-32 bg-navy">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="text-gold fill-gold" />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-white text-2xl md:text-3xl font-serif mb-10 leading-relaxed">
            &ldquo;Wanderlux transformed our honeymoon into a fairy tale. Every detail was perfect, from the private villa in Santorini to the sunset sailing. An experience we&apos;ll treasure forever.&rdquo;
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
                alt="Sarah & Michael"
                width={64}
                height={64}
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">Sarah & Michael</p>
              <p className="text-white/70 text-sm">Honeymoon in Greece</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
