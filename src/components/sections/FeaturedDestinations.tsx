"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import DestinationCard from "@/components/ui/DestinationCard";
import { getFeaturedDestinations } from "@/lib/data";

export default function FeaturedDestinations() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const destinations = getFeaturedDestinations();

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="section bg-sand overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeader
            tag="Featured Destinations"
            title="Discover Extraordinary Places"
            subtitle="From sun-kissed Mediterranean shores to remote wilderness, explore our curated collection of the world's most captivating destinations."
            alignment="left"
          />

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => scroll("left")}
              className="p-3 border border-navy/20 text-navy hover:bg-navy hover:text-white transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 border border-navy/20 text-navy hover:bg-navy hover:text-white transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll */}
      <div
        ref={scrollRef}
        className="horizontal-scroll"
      >
        {destinations.map((destination, index) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
            index={index}
          />
        ))}

        {/* View All Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex-shrink-0 w-[280px] md:w-[320px] aspect-[3/4] bg-navy flex flex-col items-center justify-center text-center p-8 group cursor-pointer"
        >
          <Link href="/destinations" className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
              <ArrowRight className="text-gold group-hover:text-white transition-colors" size={24} />
            </div>
            <h4 className="text-white text-2xl font-heading mb-3">
              View All Destinations
            </h4>
            <p className="text-white/90 font-body text-sm">
              Explore our complete collection
            </p>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
