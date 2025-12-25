"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Destinations", href: "/destinations" },
  { label: "Experiences", href: "/experiences" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBg = scrolled ? "bg-white shadow-md" : "bg-transparent";
  const textColor = scrolled ? "text-navy" : "text-white";
  const logoColor = scrolled ? "text-navy" : "text-white";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="wrapper">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className={`text-2xl font-[family-name:var(--font-heading)] font-medium ${logoColor}`}>
              Wanderlux
            </span>
            <span className="text-gold text-[10px] uppercase tracking-[0.3em]">
              Journeys
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wider hover:text-teal transition-colors ${textColor}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/plan-your-trip"
              className="bg-teal text-white px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-teal-dark transition-colors"
            >
              Plan Your Trip
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 ${textColor}`}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-sand">
          <div className="wrapper py-6">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-navy text-lg py-2 border-b border-sand hover:text-teal transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/plan-your-trip"
                onClick={() => setMenuOpen(false)}
                className="mt-4 bg-teal text-white text-center py-4 font-semibold uppercase tracking-wider hover:bg-teal-dark transition-colors"
              >
                Plan Your Trip
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
