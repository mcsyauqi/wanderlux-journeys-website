"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, MapPin, Star, ArrowRight, Check, Sparkles } from "lucide-react";
import { destinations } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const honeymoonDestinations = destinations.filter(
  (d) =>
    d.slug === "maldives" ||
    d.slug === "santorini" ||
    d.slug === "bora-bora" ||
    d.slug === "amalfi-coast"
);

const honeymoonPackages = [
  {
    id: "1",
    name: "Romantic Maldives Escape",
    duration: "7 Days",
    priceFrom: 8500,
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80",
    highlights: [
      "Overwater villa with private pool",
      "Sunset dolphin cruise",
      "Couples spa treatment",
      "Private beach dinner",
    ],
  },
  {
    id: "2",
    name: "Santorini Love Story",
    duration: "5 Days",
    priceFrom: 6500,
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200&q=80",
    highlights: [
      "Cave suite with caldera views",
      "Private sunset sailing",
      "Wine tasting experience",
      "Romantic dinner in Oia",
    ],
  },
  {
    id: "3",
    name: "Bora Bora Paradise",
    duration: "8 Days",
    priceFrom: 12000,
    image:
      "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=1200&q=80",
    highlights: [
      "Luxury overwater bungalow",
      "Private lagoon tour",
      "Couples massage at sunrise",
      "Champagne breakfast in bed",
    ],
  },
];

const whyChooseUs = [
  {
    title: "Personalized Romance",
    description:
      "Every detail tailored to create your perfect love story.",
  },
  {
    title: "Exclusive Access",
    description:
      "Private experiences and romantic settings unavailable to others.",
  },
  {
    title: "Seamless Planning",
    description:
      "From flights to flowers, we handle every detail so you can focus on each other.",
  },
  {
    title: "24/7 Concierge",
    description:
      "Round-the-clock support to ensure your honeymoon is flawless.",
  },
];

export default function HoneymoonsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
          alt="Romantic honeymoon destination"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/30 to-navy/70" />

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <Heart className="text-gold" size={24} fill="currentColor" />
              <span className="section-tag">Honeymoons</span>
              <Heart className="text-gold" size={24} fill="currentColor" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white mb-4"
            >
              Begin Your Forever
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-xl font-body max-w-2xl mx-auto mb-8"
            >
              Let us craft the honeymoon of your dreams. Extraordinary
              destinations, intimate experiences, and memories that last a
              lifetime.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/plan-your-trip">
                <Button
                  variant="gold"
                  size="lg"
                  icon={<Heart size={18} fill="currentColor" />}
                  iconPosition="left"
                >
                  Plan Your Honeymoon
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-sand">
        <div className="container">
          <SectionHeader
            tag="The Wanderlux Difference"
            title="Why Couples Choose Us"
            subtitle="We understand that your honeymoon is one of the most important trips of your life. That's why we go above and beyond to make it perfect."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 text-center"
              >
                <div className="w-16 h-16 bg-gold mx-auto mb-6 flex items-center justify-center">
                  <Sparkles className="text-white" size={32} />
                </div>
                <h4 className="text-navy text-xl mb-3">{item.title}</h4>
                <p className="text-navy-light font-body">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Honeymoon Packages */}
      <section className="section bg-ivory">
        <div className="container">
          <SectionHeader
            tag="Featured Packages"
            title="Romantic Escapes"
            subtitle="Curated honeymoon experiences in the world's most romantic destinations. Each can be customized to your dreams."
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {honeymoonPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />

                  {/* Heart Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gold flex items-center justify-center">
                    <Heart className="text-white" size={24} fill="currentColor" />
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white/80 text-xs font-body uppercase tracking-wider">
                      From
                    </p>
                    <p className="text-white text-2xl font-heading">
                      ${pkg.priceFrom.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gold text-sm font-body uppercase tracking-wider mb-2">
                    {pkg.duration}
                  </p>
                  <h3 className="text-navy text-xl mb-4">{pkg.name}</h3>

                  <ul className="space-y-2 mb-6">
                    {pkg.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-navy-light font-body text-sm"
                      >
                        <Heart
                          className="text-gold flex-shrink-0 mt-0.5"
                          size={14}
                          fill="currentColor"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/plan-your-trip"
                    className="inline-flex items-center gap-2 text-teal font-body font-semibold text-sm uppercase tracking-wider hover:text-teal-dark transition-colors"
                  >
                    Inquire Now
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Romantic Destinations */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            tag="Dream Destinations"
            title="Where Romance Blooms"
            subtitle="Discover the world's most romantic destinations, each offering unique experiences for newlyweds."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {honeymoonDestinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <Link href={`/destinations/${dest.slug}`}>
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="flex items-center gap-1.5 text-gold text-sm font-body mb-2">
                      <MapPin size={14} />
                      <span>{dest.country}</span>
                    </div>
                    <h3 className="text-white text-2xl mb-2">{dest.name}</h3>
                    <p className="text-white/70 text-sm font-body line-clamp-2">
                      {dest.tagline}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=1920&q=80"
          alt="Romantic sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/70" />

        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-gold mx-auto mb-8 flex items-center justify-center"
          >
            <Heart className="text-white" size={40} fill="currentColor" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-4"
          >
            Let&apos;s Plan Your Love Story
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg font-body mb-8 max-w-xl mx-auto"
          >
            Share your honeymoon dreams with us, and we&apos;ll create an
            unforgettable journey tailored just for you and your partner.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/plan-your-trip">
              <Button variant="gold" size="lg" icon={<ArrowRight size={18} />}>
                Start Planning
              </Button>
            </Link>
            <a href="tel:+1234567890">
              <Button variant="ghost" size="lg">
                Call Our Experts
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
