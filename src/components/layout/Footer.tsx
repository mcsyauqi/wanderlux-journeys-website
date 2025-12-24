"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const footerLinks = {
  destinations: [
    { name: "Europe", href: "/destinations?region=europe" },
    { name: "Asia", href: "/destinations?region=asia" },
    { name: "Africa", href: "/destinations?region=africa" },
    { name: "Americas", href: "/destinations?region=americas" },
    { name: "Oceania", href: "/destinations?region=oceania" },
  ],
  experiences: [
    { name: "Private Tours", href: "/experiences?type=private-tours" },
    { name: "Luxury Cruises", href: "/experiences?type=luxury-cruises" },
    { name: "Safari Adventures", href: "/experiences?type=safari" },
    { name: "Cultural Immersions", href: "/experiences?type=cultural" },
    { name: "Wellness Retreats", href: "/experiences?type=wellness" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Testimonials", href: "/about#testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ],
  support: [
    { name: "Plan Your Trip", href: "/plan-your-trip" },
    { name: "FAQs", href: "/faqs" },
    { name: "Travel Insurance", href: "/travel-insurance" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
  { name: "Facebook", href: "https://facebook.com", icon: Facebook },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/20">
        <div className="container py-20">
          <div className="max-w-4xl mx-auto text-center px-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-body text-sm uppercase tracking-[0.2em] inline-block mb-4"
            >
              Stay Inspired
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white mt-4 mb-6"
            >
              Join Our Journey
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/90 mb-8 max-w-xl mx-auto text-lg"
            >
              Subscribe to receive exclusive travel inspiration, insider tips,
              and special offers curated for discerning travelers.
            </motion.p>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/15 border border-white/30 text-white placeholder:text-white/70 focus:border-gold focus:bg-white/20 py-4 px-6"
              />
              <button type="submit" className="btn-primary whitespace-nowrap flex items-center justify-center">
                Subscribe
                <ArrowRight size={16} className="ml-2" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-heading font-light text-white">
                Wanderlux
              </span>
              <span className="block text-xs uppercase tracking-[0.3em] text-gold mt-1">
                Journeys
              </span>
            </Link>
            <p className="text-white/80 mb-6 max-w-sm">
              We don&apos;t plan trips. We craft experiences. Let us guide you
              to the world&apos;s most extraordinary destinations.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:hello@wanderluxjourneys.com"
                className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors"
              >
                <Mail size={18} />
                hello@wanderluxjourneys.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors"
              >
                <Phone size={18} />
                +1 (234) 567-890
              </a>
              <p className="flex items-start gap-3 text-white/80">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                123 Luxury Lane, Suite 500
                <br />
                New York, NY 10001
              </p>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-white text-lg font-heading mb-5">
              Destinations
            </h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="text-white text-lg font-heading mb-5">
              Experiences
            </h4>
            <ul className="space-y-3">
              {footerLinks.experiences.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-lg font-heading mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white text-lg font-heading mb-5">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container py-8 px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-white/70 text-sm">
                &copy; {new Date().getFullYear()} Wanderlux Journeys. All rights
                reserved.
              </p>
              <p className="text-white/60 text-xs mt-2">
                Created by{" "}
                <a
                  href="https://creativism.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  Creativism Digital Marketing
                </a>
              </p>
            </div>
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-gold transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
