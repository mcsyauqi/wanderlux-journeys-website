"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 md:py-32 bg-sand">
      <div className="wrapper">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Start Your Journey
          </p>

          <h2 className="text-navy mb-6">
            Ready to Experience Luxury Travel?
          </h2>

          <p className="text-navy-light text-lg mb-10">
            Let our travel experts craft your perfect journey. Share your dreams with us and we'll make them a reality.
          </p>

          <Link
            href="/plan-your-trip"
            className="inline-flex items-center gap-3 bg-teal text-white px-10 py-5 font-semibold uppercase tracking-wider text-sm hover:bg-teal-dark transition-colors"
          >
            Plan Your Trip
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
