"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-gold text-sm font-semibold tracking-widest mb-4">START YOUR JOURNEY</p>
        <h2 className="text-4xl text-navy mb-6">Ready to Travel?</h2>
        <p className="text-navy-light text-lg mb-10">
          Let our experts craft your perfect itinerary. Share your dreams with us.
        </p>
        <Link
          href="/plan-your-trip"
          className="inline-block bg-teal text-white px-10 py-4 font-semibold text-sm tracking-wide hover:bg-teal-dark"
        >
          PLAN YOUR TRIP
        </Link>
      </div>
    </section>
  );
}
