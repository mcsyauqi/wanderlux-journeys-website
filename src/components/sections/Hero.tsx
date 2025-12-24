"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, MapPin, ChevronDown, Play } from "lucide-react";
import Button from "@/components/ui/Button";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1920&q=80",
    alt: "Santorini sunset",
    destination: "Santorini, Greece",
  },
  {
    src: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=80",
    alt: "Maldives overwater villas",
    destination: "Maldives",
  },
  {
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80",
    alt: "Serengeti safari",
    destination: "Serengeti, Tanzania",
  },
  {
    src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=80",
    alt: "Kyoto temples",
    destination: "Kyoto, Japan",
  },
];

const quickLinks = [
  { name: "Europe", href: "/destinations?region=europe" },
  { name: "Asia", href: "/destinations?region=asia" },
  { name: "Africa", href: "/destinations?region=africa" },
  { name: "Honeymoons", href: "/honeymoons" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[currentSlide].src}
            alt={heroImages[currentSlide].alt}
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/30 to-navy/70" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <div className="container max-w-5xl">
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gold font-body text-sm md:text-base uppercase tracking-[0.3em] mb-6"
          >
            Journey Beyond the Ordinary
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white font-heading font-medium mb-6"
          >
            Where Will Your Story{" "}
            <span className="text-gold">Unfold</span>?
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/80 text-lg md:text-xl font-body max-w-2xl mx-auto mb-10"
          >
            We craft bespoke travel experiences for those who seek the
            extraordinary. Let us guide you to the world&apos;s most exclusive
            destinations.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full flex justify-center mb-8"
          >
            <div className="relative w-full max-w-2xl">
              <input
                type="text"
                placeholder="Where do you dream of going?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-4 px-6 pl-14 pr-32 bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-gold text-lg"
              />
              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-white/60"
                size={22}
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-gold text-white px-6 py-2 font-body font-semibold uppercase text-sm tracking-wider hover:bg-gold-dark transition-colors">
                Explore
              </button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
          >
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-body hover:bg-white/20 hover:border-gold transition-all"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/plan-your-trip">
              <Button variant="primary" size="lg">
                Start Planning
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" size="lg" icon={<Play size={16} />} iconPosition="left">
                Our Story
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Current Destination Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-32 left-8 hidden lg:flex items-center gap-3"
        >
          <MapPin size={18} className="text-gold" />
          <span className="text-white/80 font-body text-sm">
            {heroImages[currentSlide].destination}
          </span>
        </motion.div>

        {/* Slide Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-32 right-8 hidden lg:flex items-center gap-2"
        >
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 transition-all ${
                index === currentSlide ? "bg-gold" : "bg-white/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        >
          <ChevronDown size={32} />
        </motion.div>
      </div>
    </section>
  );
}
