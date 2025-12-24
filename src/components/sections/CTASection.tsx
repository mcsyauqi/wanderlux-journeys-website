"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          alt="Tropical beach destination"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/90 to-navy/85" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-tag inline-block mb-6"
            >
              Start Your Journey
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white mb-6"
            >
              Ready to Experience the{" "}
              <span className="text-gold">Extraordinary</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white text-lg font-body mb-8 max-w-xl"
            >
              Let our expert travel designers craft your perfect journey. Share
              your dreams with us, and we&apos;ll create an experience that
              exceeds your imagination.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/plan-your-trip">
                <Button variant="gold" size="lg" icon={<ArrowRight size={18} />}>
                  Plan Your Trip
                </Button>
              </Link>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="lg"
                  icon={<MessageCircle size={18} />}
                  iconPosition="left"
                >
                  WhatsApp Us
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right - Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md p-8 md:p-10 border border-white/20"
          >
            <h3 className="text-white text-2xl font-heading mb-6">
              Speak to a Travel Expert
            </h3>
            <p className="text-white/90 font-body mb-8">
              Our team is available 7 days a week to help you plan your perfect
              getaway.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-gold flex items-center justify-center">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white/90 text-sm font-body mb-1">
                    Call us anytime
                  </p>
                  <p className="text-white text-lg font-body group-hover:text-gold transition-colors">
                    +1 (234) 567-890
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@wanderluxjourneys.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-teal flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white/90 text-sm font-body mb-1">
                    Email us
                  </p>
                  <p className="text-white text-lg font-body group-hover:text-gold transition-colors">
                    hello@wanderluxjourneys.com
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-green-500 flex items-center justify-center">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white/90 text-sm font-body mb-1">
                    Message on WhatsApp
                  </p>
                  <p className="text-white text-lg font-body group-hover:text-gold transition-colors">
                    Quick response guaranteed
                  </p>
                </div>
              </a>
            </div>

            {/* Availability */}
            <div className="mt-8 pt-6 border-t border-white/30">
              <p className="text-white/90 text-sm font-body text-center">
                Available Monday - Sunday, 9am - 9pm EST
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
