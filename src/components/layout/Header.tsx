"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navigation = [
  { name: "Destinations", href: "/destinations" },
  { name: "Experiences", href: "/experiences" },
  { name: "Honeymoons", href: "/honeymoons" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <span
            className={`text-2xl font-serif ${
              isScrolled || isMobileMenuOpen ? "text-navy" : "text-white"
            }`}
          >
            Wanderlux
          </span>
          <span
            className={`block text-[10px] uppercase tracking-[0.25em] ${
              isScrolled || isMobileMenuOpen ? "text-gold" : "text-gold"
            }`}
          >
            Journeys
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-teal ${
                isScrolled ? "text-navy" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+1234567890"
            className={`flex items-center gap-2 text-sm transition-colors hover:text-teal ${
              isScrolled ? "text-navy" : "text-white"
            }`}
          >
            <Phone size={16} />
            <span className="hidden xl:inline">+1 (234) 567-890</span>
          </a>
          <Link
            href="/plan-your-trip"
            className="bg-teal text-white px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-teal-dark transition-colors"
          >
            Plan Your Trip
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 ${
            isScrolled || isMobileMenuOpen ? "text-navy" : "text-white"
          }`}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white absolute top-full left-0 right-0 shadow-lg"
          >
            <nav className="max-w-6xl mx-auto px-6 py-6">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-3 text-navy text-lg border-b border-sand hover:text-teal transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/plan-your-trip"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 bg-teal text-white text-center py-4 font-semibold uppercase tracking-wide hover:bg-teal-dark transition-colors"
                >
                  Plan Your Trip
                </Link>
                <a
                  href="tel:+1234567890"
                  className="flex items-center justify-center gap-2 py-3 text-gold"
                >
                  <Phone size={18} />
                  +1 (234) 567-890
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
