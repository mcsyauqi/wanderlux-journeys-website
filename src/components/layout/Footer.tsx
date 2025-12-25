"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="wrapper py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-[family-name:var(--font-heading)] text-white">
                Wanderlux
              </span>
              <span className="block text-gold text-[10px] uppercase tracking-[0.3em]">
                Journeys
              </span>
            </Link>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Crafting extraordinary travel experiences for discerning travelers since 2009.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Destinations
            </h4>
            <ul className="space-y-3">
              {["Europe", "Asia", "Africa", "Americas", "Oceania"].map((item) => (
                <li key={item}>
                  <Link href="/destinations" className="text-white/70 text-sm hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {["About Us", "Our Team", "Blog", "Careers"].map((item) => (
                <li key={item}>
                  <Link href="/about" className="text-white/70 text-sm hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@wanderluxjourneys.com" className="flex items-center gap-3 text-white/70 text-sm hover:text-gold transition-colors">
                  <Mail size={16} className="flex-shrink-0" />
                  <span>hello@wanderluxjourneys.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-center gap-3 text-white/70 text-sm hover:text-gold transition-colors">
                  <Phone size={16} className="flex-shrink-0" />
                  <span>+1 (234) 567-890</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>123 Luxury Lane, Suite 500<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="wrapper py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>&copy; {new Date().getFullYear()} Wanderlux Journeys. All rights reserved.</p>
            <p>
              Created by{" "}
              <a href="https://creativism.id" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                Creativism Digital Marketing
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
