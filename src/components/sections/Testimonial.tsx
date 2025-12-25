"use client";

export default function Testimonial() {
  return (
    <section className="bg-navy py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-gold text-sm font-semibold tracking-widest mb-8">TESTIMONIAL</p>
        <blockquote className="text-2xl md:text-3xl text-white font-['Cormorant_Garamond',Georgia,serif] leading-relaxed mb-8">
          "Wanderlux made our honeymoon absolutely magical. Every detail was perfectly planned, from our private villa to the sunset dinner on the beach."
        </blockquote>
        <p className="text-gold font-semibold">Sarah & Michael</p>
        <p className="text-white/60 text-sm">Maldives, 2024</p>
      </div>
    </section>
  );
}
