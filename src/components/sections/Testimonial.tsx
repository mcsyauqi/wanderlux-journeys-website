"use client";

import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="py-24 md:py-32 bg-navy">
      <div className="wrapper">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="text-gold mx-auto mb-8" size={48} />

          <blockquote className="text-2xl md:text-3xl text-white font-[family-name:var(--font-heading)] leading-relaxed mb-8">
            "Wanderlux transformed our anniversary trip into an unforgettable experience. Every detail was perfect, from the private villa to the sunset dinner on the beach."
          </blockquote>

          <div>
            <p className="text-gold font-semibold">Sarah & Michael Thompson</p>
            <p className="text-white/70 text-sm">Maldives, 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
}
