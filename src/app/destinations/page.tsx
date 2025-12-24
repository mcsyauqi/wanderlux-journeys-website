"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Filter, Grid, List, ArrowRight, Search } from "lucide-react";
import { destinations } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

const regions = [
  { id: "all", name: "All Regions" },
  { id: "europe", name: "Europe" },
  { id: "asia", name: "Asia" },
  { id: "africa", name: "Africa" },
  { id: "americas", name: "Americas" },
  { id: "oceania", name: "Oceania" },
];

export default function DestinationsPage() {
  const [activeRegion, setActiveRegion] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      const matchesRegion = activeRegion === "all" || dest.region === activeRegion;
      const matchesSearch =
        searchQuery === "" ||
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.country.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRegion && matchesSearch;
    });
  }, [activeRegion, searchQuery]);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80"
          alt="Destinations hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80" />

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-tag inline-block mb-4"
            >
              Explore the World
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white mb-4"
            >
              Our Destinations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-xl font-body max-w-2xl mx-auto"
            >
              From ancient temples to pristine beaches, discover our curated
              collection of the world&apos;s most extraordinary places.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[72px] z-40 bg-white shadow-md">
        <div className="container py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 px-4 pl-11 bg-sand border-0"
              />
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-light"
                size={18}
              />
            </div>

            {/* Region Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region.id)}
                  className={`px-4 py-2 text-sm font-body font-medium transition-all ${
                    activeRegion === region.id
                      ? "bg-teal text-white"
                      : "bg-sand text-navy hover:bg-sand-medium"
                  }`}
                >
                  {region.name}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${
                  viewMode === "grid" ? "text-teal" : "text-navy-light"
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${
                  viewMode === "list" ? "text-teal" : "text-navy-light"
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid/List */}
      <section className="section bg-sand">
        <div className="container">
          <AnimatePresence mode="wait">
            {viewMode === "grid" ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredDestinations.map((destination, index) => (
                  <motion.div
                    key={destination.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group relative aspect-[3/4] overflow-hidden bg-white"
                  >
                    <Link href={`/destinations/${destination.slug}`}>
                      <Image
                        src={destination.image}
                        alt={destination.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />

                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <div className="flex items-center gap-1.5 text-gold text-sm font-body mb-2">
                          <MapPin size={14} />
                          <span>{destination.country}</span>
                        </div>
                        <h3 className="text-white text-2xl mb-2">
                          {destination.name}
                        </h3>
                        <p className="text-white/70 text-sm font-body line-clamp-2 mb-4">
                          {destination.tagline}
                        </p>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-2 text-gold text-sm font-body font-semibold uppercase tracking-wider"
                        >
                          <span>Explore</span>
                          <ArrowRight size={14} />
                        </motion.div>
                      </div>

                      {destination.featured && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-gold text-white text-xs font-body font-semibold uppercase tracking-wider">
                          Featured
                        </div>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {filteredDestinations.map((destination, index) => (
                  <motion.div
                    key={destination.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-white overflow-hidden"
                  >
                    <Link
                      href={`/destinations/${destination.slug}`}
                      className="flex flex-col md:flex-row"
                    >
                      <div className="relative w-full md:w-80 aspect-video md:aspect-auto flex-shrink-0">
                        <Image
                          src={destination.image}
                          alt={destination.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {destination.featured && (
                          <div className="absolute top-4 left-4 px-3 py-1 bg-gold text-white text-xs font-body font-semibold uppercase tracking-wider">
                            Featured
                          </div>
                        )}
                      </div>
                      <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-1.5 text-teal text-sm font-body mb-2">
                          <MapPin size={14} />
                          <span>{destination.country}</span>
                        </div>
                        <h3 className="text-navy text-2xl mb-2 group-hover:text-teal transition-colors">
                          {destination.name}
                        </h3>
                        <p className="text-navy-light font-body mb-4">
                          {destination.tagline}
                        </p>
                        <p className="text-navy-light/70 font-body text-sm mb-4 line-clamp-2">
                          {destination.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {destination.highlights.slice(0, 3).map((highlight) => (
                            <span
                              key={highlight}
                              className="px-2 py-1 bg-sand text-navy-light text-xs font-body"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-2 text-teal font-body font-semibold text-sm uppercase tracking-wider group-hover:text-teal-dark transition-colors">
                          View Destination
                          <ArrowRight
                            size={14}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-16">
              <p className="text-navy-light text-lg font-body">
                No destinations found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setActiveRegion("all");
                  setSearchQuery("");
                }}
                className="mt-4 btn-secondary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
