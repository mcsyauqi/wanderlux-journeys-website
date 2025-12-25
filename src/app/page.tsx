import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-charcoal/10">
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-['DM_Serif_Display'] text-2xl text-charcoal">
            Wanderlux
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#destinations" className="text-sm text-slate hover:text-charcoal transition-colors">
              Destinations
            </Link>
            <Link href="#services" className="text-sm text-slate hover:text-charcoal transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm text-slate hover:text-charcoal transition-colors">
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm text-white bg-forest px-6 py-2.5 hover:bg-forest/90 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-16 min-h-screen flex items-center bg-sand">
        <div className="max-w-[1280px] mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-[480px]">
              <Image
                src="https://images.unsplash.com/photo-1502301103665-0b95cc738daf?w=800&q=80"
                alt="Luxury travel"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-6">
              Luxury Travel
            </span>
            <h1 className="text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">
              Experience the World in Style
            </h1>
            <p className="text-slate text-lg mb-10 max-w-md">
              Curated journeys to extraordinary destinations. Every detail crafted for the discerning traveler.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#destinations"
                className="inline-block bg-forest text-white text-sm font-medium px-8 py-4 hover:bg-forest/90 transition-colors"
              >
                Explore Destinations
              </Link>
              <Link
                href="#about"
                className="inline-block border border-charcoal text-charcoal text-sm font-medium px-8 py-4 hover:bg-charcoal hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-4">
              About Us
            </span>
            <h2 className="text-4xl lg:text-5xl text-charcoal mb-6">
              Crafting Unforgettable Journeys
            </h2>
            <p className="text-slate text-lg">
              Since 2009, we have been designing bespoke travel experiences for those who seek more than ordinary tourism. Our expert team ensures every moment of your journey is exceptional.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="font-['DM_Serif_Display'] text-5xl text-forest mb-2">15</p>
              <p className="text-slate text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="font-['DM_Serif_Display'] text-5xl text-forest mb-2">500+</p>
              <p className="text-slate text-sm">Destinations</p>
            </div>
            <div className="text-center">
              <p className="font-['DM_Serif_Display'] text-5xl text-forest mb-2">10K+</p>
              <p className="text-slate text-sm">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="font-['DM_Serif_Display'] text-5xl text-forest mb-2">24/7</p>
              <p className="text-slate text-sm">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-sand py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-4">
              Our Services
            </span>
            <h2 className="text-4xl lg:text-5xl text-charcoal">
              What We Offer
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Private Tours", desc: "Exclusive guided experiences tailored to you" },
              { title: "Luxury Stays", desc: "Hand-selected 5-star hotels and villas" },
              { title: "Fine Dining", desc: "Reservations at world-renowned restaurants" },
              { title: "Concierge", desc: "24/7 personal assistance during your trip" },
            ].map((service) => (
              <div key={service.title} className="bg-white p-8">
                <h3 className="text-xl text-charcoal mb-3">{service.title}</h3>
                <p className="text-slate text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-4">
                Destinations
              </span>
              <h2 className="text-4xl lg:text-5xl text-charcoal">
                Featured Places
              </h2>
            </div>
            <Link href="#destinations" className="text-forest text-sm font-medium mt-4 md:mt-0 hover:underline">
              View All Destinations →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Santorini", location: "Greece", img: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&q=80" },
              { name: "Maldives", location: "Indian Ocean", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80" },
              { name: "Swiss Alps", location: "Switzerland", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
            ].map((dest) => (
              <div key={dest.name} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image
                    src={dest.img}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <span className="text-gold text-xs font-semibold tracking-widest uppercase">{dest.location}</span>
                <h3 className="text-2xl text-charcoal mt-1">{dest.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-forest py-24">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-8">
            Testimonial
          </span>
          <blockquote className="font-['DM_Serif_Display'] text-3xl lg:text-4xl text-white leading-snug mb-8">
            "An absolutely incredible experience. Wanderlux handled everything perfectly, from our private villa to the surprise dinner on the beach."
          </blockquote>
          <p className="text-gold font-medium">Sarah & Michael</p>
          <p className="text-white/60 text-sm">Maldives, 2024</p>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-sand py-24">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Get Started
          </span>
          <h2 className="text-4xl lg:text-5xl text-charcoal mb-6">
            Plan Your Journey
          </h2>
          <p className="text-slate text-lg mb-10">
            Ready to explore? Let our experts create your perfect itinerary.
          </p>
          <Link
            href="mailto:hello@wanderlux.com"
            className="inline-block bg-forest text-white text-sm font-medium px-10 py-4 hover:bg-forest/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <p className="font-['DM_Serif_Display'] text-2xl text-white mb-4">Wanderlux</p>
              <p className="text-white/60 text-sm">Luxury travel experiences since 2009.</p>
            </div>
            <div>
              <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">Quick Links</p>
              <div className="flex flex-col gap-2">
                <Link href="#destinations" className="text-white/60 text-sm hover:text-white">Destinations</Link>
                <Link href="#services" className="text-white/60 text-sm hover:text-white">Services</Link>
                <Link href="#about" className="text-white/60 text-sm hover:text-white">About</Link>
                <Link href="#contact" className="text-white/60 text-sm hover:text-white">Contact</Link>
              </div>
            </div>
            <div>
              <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">Contact</p>
              <p className="text-white/60 text-sm">hello@wanderlux.com</p>
              <p className="text-white/60 text-sm">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4">
            <p className="text-white/40 text-sm">© 2024 Wanderlux Journeys</p>
            <p className="text-white/40 text-sm">Created by Creativism Digital Marketing</p>
          </div>
        </div>
      </footer>
    </>
  );
}
