"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const links = {
  destinations: ["Europe", "Asia", "Africa", "Americas", "Oceania"],
  company: ["About Us", "Our Team", "Blog", "Careers", "Contact"],
};

const socials = [
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Twitter, href: "https://twitter.com" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-serif text-white">Wanderlux</span>
              <span className="block text-xs uppercase tracking-[0.25em] text-gold">Journeys</span>
            </Link>
            <p className="text-white/70 text-sm mb-6">
              Crafting extraordinary travel experiences for discerning travelers since 2009.
            </p>
            <div className="flex gap-4">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-gold transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-white font-semibold mb-5">Destinations</h4>
            <ul className="space-y-3">
              {links.destinations.map((name) => (
                <li key={name}>
                  <Link
                    href={`/destinations?region=${name.toLowerCase()}`}
                    className="text-white/70 text-sm hover:text-gold transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              {links.company.map((name) => (
                <li key={name}>
                  <Link
                    href={`/${name.toLowerCase().replace(" ", "-")}`}
                    className="text-white/70 text-sm hover:text-gold transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@wanderluxjourneys.com" className="flex items-center gap-3 text-white/70 text-sm hover:text-gold transition-colors">
                  <Mail size={16} />
                  hello@wanderluxjourneys.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-center gap-3 text-white/70 text-sm hover:text-gold transition-colors">
                  <Phone size={16} />
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>123 Luxury Lane, Suite 500<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-white/50">
              &copy; {new Date().getFullYear()} Wanderlux Journeys. All rights reserved.
            </p>
            <p className="text-white/50">
              Created by{" "}
              <a
                href="https://creativism.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                Creativism Digital Marketing
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
