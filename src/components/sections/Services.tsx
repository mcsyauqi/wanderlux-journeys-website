"use client";

import { Plane, Hotel, Compass, Utensils, Camera, Shield } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Private Flights",
    description: "First-class and private jet arrangements to your destination.",
  },
  {
    icon: Hotel,
    title: "Luxury Stays",
    description: "Handpicked 5-star hotels and exclusive private villas.",
  },
  {
    icon: Compass,
    title: "Curated Tours",
    description: "Personalized itineraries with expert local guides.",
  },
  {
    icon: Utensils,
    title: "Fine Dining",
    description: "Reservations at Michelin-starred restaurants worldwide.",
  },
  {
    icon: Camera,
    title: "Unique Experiences",
    description: "Access to exclusive events and hidden gems.",
  },
  {
    icon: Shield,
    title: "24/7 Concierge",
    description: "Round-the-clock support throughout your journey.",
  },
];

export default function Services() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="wrapper">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Our Services
          </p>
          <h2 className="text-navy mb-4">
            Exceptional Travel Services
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="text-center p-8 bg-sand hover:bg-ivory transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal/10 text-teal mb-6">
                <service.icon size={28} />
              </div>
              <h3 className="text-navy text-xl mb-3">{service.title}</h3>
              <p className="text-navy-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
