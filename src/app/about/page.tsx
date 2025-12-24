"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Globe,
  Heart,
  Star,
  ArrowRight,
  Quote,
} from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const values = [
  {
    icon: Heart,
    title: "Passion for Travel",
    description:
      "We live and breathe travel. Our team has explored over 100 countries and brings firsthand knowledge to every journey we design.",
  },
  {
    icon: Users,
    title: "Personal Connection",
    description:
      "We take time to understand your dreams, preferences, and travel style to create truly personalized experiences.",
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    description:
      "We partner only with the finest hotels, guides, and service providers to ensure every detail exceeds expectations.",
  },
  {
    icon: Globe,
    title: "Global Expertise",
    description:
      "Our network of local experts in over 50 destinations ensures authentic, insider access wherever you travel.",
  },
];

const team = [
  {
    name: "Alexandra Sterling",
    role: "Founder & Lead Travel Designer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio: "With 20 years in luxury travel, Alexandra founded Wanderlux to share her passion for transformative journeys.",
  },
  {
    name: "Marcus Chen",
    role: "Asia & Pacific Specialist",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Born in Hong Kong, Marcus brings deep expertise in Asian cultures, cuisines, and hidden gems.",
  },
  {
    name: "Emma Richardson",
    role: "Africa & Safari Expert",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "After living in Tanzania for 5 years, Emma curates extraordinary wildlife and cultural experiences.",
  },
  {
    name: "James Hartford",
    role: "Europe & Mediterranean Lead",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    bio: "James has spent decades exploring Europe's hidden corners, from Tuscan vineyards to Nordic fjords.",
  },
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "5000+", label: "Happy Travelers" },
  { value: "50+", label: "Destinations" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80"
          alt="About Wanderlux Journeys"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80" />

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-tag inline-block mb-4"
            >
              Our Story
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white mb-4"
            >
              We Don&apos;t Plan Trips.
              <br />
              <span className="text-gold">We Craft Experiences.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-xl font-body max-w-2xl mx-auto"
            >
              For over 15 years, we&apos;ve been turning travel dreams into
              extraordinary realities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-ivory">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-tag inline-block mb-4">About Us</span>
              <h2 className="text-navy mb-6">
                Crafting Extraordinary Journeys Since 2009
              </h2>
              <div className="gold-line mb-6" />
              <p className="text-navy-light font-body text-lg mb-6 leading-relaxed">
                Wanderlux Journeys was born from a simple belief: travel should
                be transformative. Not just another vacation, but an experience
                that changes how you see the world and yourself.
              </p>
              <p className="text-navy-light font-body mb-6">
                Founded by Alexandra Sterling after two decades of exploring the
                globe, Wanderlux brings together a team of passionate travel
                designers who have collectively visited over 100 countries. We
                leverage our deep connections with the world&apos;s finest
                hotels, guides, and local experts to create journeys that go far
                beyond the ordinary.
              </p>
              <p className="text-navy-light font-body mb-8">
                Every itinerary we craft is a labor of love, designed from
                scratch to match your unique interests, travel style, and
                dreams. We handle every detail with impeccable care, so you can
                focus on what matters most: experiencing the extraordinary.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-4xl font-heading text-teal mb-1">
                      {stat.value}
                    </p>
                    <p className="text-navy-light text-sm font-body">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
                  alt="Travel adventure"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gold -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-sand">
        <div className="container">
          <SectionHeader
            tag="Our Values"
            title="What Drives Us"
            subtitle="The principles that guide every journey we create."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8"
              >
                <div className="w-16 h-16 bg-teal mb-6 flex items-center justify-center">
                  <value.icon className="text-white" size={32} />
                </div>
                <h4 className="text-navy text-xl mb-3">{value.title}</h4>
                <p className="text-navy-light font-body">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section id="team" className="section bg-white">
        <div className="container">
          <SectionHeader
            tag="Our Team"
            title="Meet Your Travel Designers"
            subtitle="Passionate experts dedicated to crafting your perfect journey."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-navy text-xl mb-1">{member.name}</h4>
                <p className="text-gold text-sm font-body uppercase tracking-wider mb-3">
                  {member.role}
                </p>
                <p className="text-navy-light font-body text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section bg-navy">
        <div className="container">
          <SectionHeader
            tag="Testimonials"
            title="What Our Travelers Say"
            subtitle="Don't just take our word for it."
            light
          />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8"
              >
                <Quote className="text-gold mb-4" size={32} />
                <p className="text-white font-body mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-gold fill-gold"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <p className="text-white font-heading">{testimonial.name}</p>
                    <p className="text-white/60 text-sm font-body">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Mountain landscape"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-navy/70" />

        <div className="container relative text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-4"
          >
            Ready to Start Your Journey?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg font-body mb-8 max-w-xl mx-auto"
          >
            Let us turn your travel dreams into reality. Contact our team to
            begin planning your extraordinary journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/plan-your-trip">
              <Button variant="gold" size="lg" icon={<ArrowRight size={18} />}>
                Start Planning
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
