"use client";

import { Compass, Shield, Star } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Curated Experiences",
    text: "Hand-picked destinations and unique activities tailored to your preferences.",
  },
  {
    icon: Shield,
    title: "24/7 Support",
    text: "Dedicated travel concierge available around the clock for your peace of mind.",
  },
  {
    icon: Star,
    title: "Luxury Stays",
    text: "Access to the finest hotels, private villas, and exclusive accommodations.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-widest mb-4">WHY CHOOSE US</p>
          <h2 className="text-4xl text-navy">The Wanderlux Difference</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item) => (
            <div key={item.title} className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 bg-teal/10 flex items-center justify-center">
                <item.icon className="text-teal" size={28} />
              </div>
              <h3 className="text-xl text-navy mb-3">{item.title}</h3>
              <p className="text-navy-light">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
