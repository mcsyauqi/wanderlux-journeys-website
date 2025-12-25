import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-8 h-[72px] flex items-center justify-between">
          <Link href="/" className="font-[Playfair_Display] text-[24px] font-semibold text-dark">
            Wanderlux
          </Link>
          <div className="hidden md:flex items-center gap-[32px]">
            <Link href="#destinations" className="text-[14px] text-gray hover:text-dark">Destinations</Link>
            <Link href="#about" className="text-[14px] text-gray hover:text-dark">About</Link>
            <Link href="#contact" className="text-[14px] bg-dark text-white px-[24px] py-[12px] hover:bg-dark/90">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-dark relative flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1600&q=80"
            alt="Luxury beach"
            fill
            className="object-cover opacity-40"
            priority
            unoptimized
          />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 py-[160px]">
          <p className="text-accent text-[14px] font-medium tracking-[3px] uppercase mb-[24px]">
            Luxury Travel Experiences
          </p>
          <h1 className="text-white text-[56px] md:text-[72px] max-w-[700px] mb-[32px]">
            Journey Beyond the Ordinary
          </h1>
          <p className="text-white/70 text-[18px] max-w-[500px] mb-[48px]">
            Discover handcrafted travel experiences to the world's most extraordinary destinations.
          </p>
          <Link
            href="#destinations"
            className="inline-block bg-accent text-dark px-[32px] py-[16px] text-[14px] font-semibold tracking-[1px] uppercase hover:bg-accent/90"
          >
            Explore Destinations
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-cream">
        <div className="max-w-[1200px] mx-auto px-8 py-[120px]">
          <div className="grid lg:grid-cols-2 gap-[80px] items-center">
            <div>
              <p className="text-accent text-[14px] font-medium tracking-[3px] uppercase mb-[16px]">
                About Wanderlux
              </p>
              <h2 className="text-[40px] md:text-[48px] text-dark mb-[24px]">
                Crafting Dreams Into Reality
              </h2>
              <p className="text-gray text-[16px] mb-[24px]">
                Since 2009, Wanderlux has been curating exceptional travel experiences for discerning travelers. We believe that luxury is personal, and every journey should be as unique as you are.
              </p>
              <p className="text-gray text-[16px] mb-[40px]">
                From private island escapes to cultural immersions, our team of travel experts creates bespoke itineraries that exceed expectations.
              </p>
              <div className="flex gap-[48px]">
                <div>
                  <p className="text-[36px] font-[Playfair_Display] text-accent">500+</p>
                  <p className="text-gray text-[14px]">Destinations</p>
                </div>
                <div>
                  <p className="text-[36px] font-[Playfair_Display] text-accent">15K+</p>
                  <p className="text-gray text-[14px]">Happy Travelers</p>
                </div>
                <div>
                  <p className="text-[36px] font-[Playfair_Display] text-accent">15</p>
                  <p className="text-gray text-[14px]">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80"
                alt="Santorini"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="bg-white">
        <div className="max-w-[1200px] mx-auto px-8 py-[120px]">
          <div className="text-center mb-[64px]">
            <p className="text-accent text-[14px] font-medium tracking-[3px] uppercase mb-[16px]">
              Featured Destinations
            </p>
            <h2 className="text-[40px] md:text-[48px] text-dark">
              Where Will You Go?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-[24px]">
            {[
              { name: "Santorini", country: "Greece", image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&q=80" },
              { name: "Maldives", country: "Indian Ocean", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80" },
              { name: "Swiss Alps", country: "Switzerland", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
            ].map((dest) => (
              <div key={dest.name} className="group cursor-pointer">
                <div className="relative h-[400px] overflow-hidden mb-[20px]">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                </div>
                <p className="text-accent text-[12px] font-medium tracking-[2px] uppercase mb-[8px]">
                  {dest.country}
                </p>
                <h3 className="text-[24px] text-dark">{dest.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-dark">
        <div className="max-w-[900px] mx-auto px-8 py-[120px] text-center">
          <p className="text-accent text-[14px] font-medium tracking-[3px] uppercase mb-[32px]">
            Client Stories
          </p>
          <blockquote className="text-[28px] md:text-[36px] text-white font-[Playfair_Display] leading-[1.4] mb-[40px]">
            "Wanderlux created the most magical honeymoon experience. Every detail was perfect — from our private villa to the surprise sunset dinner on the beach."
          </blockquote>
          <p className="text-accent font-medium">Sarah & Michael</p>
          <p className="text-white/60 text-[14px]">Maldives, 2024</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-cream">
        <div className="max-w-[700px] mx-auto px-8 py-[120px] text-center">
          <p className="text-accent text-[14px] font-medium tracking-[3px] uppercase mb-[16px]">
            Start Your Journey
          </p>
          <h2 className="text-[40px] md:text-[48px] text-dark mb-[24px]">
            Ready to Explore?
          </h2>
          <p className="text-gray text-[16px] mb-[48px]">
            Let our travel experts craft your perfect itinerary. Share your dreams with us.
          </p>
          <Link
            href="mailto:hello@wanderlux.com"
            className="inline-block bg-dark text-white px-[40px] py-[18px] text-[14px] font-semibold tracking-[1px] uppercase hover:bg-dark/90"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark">
        <div className="max-w-[1200px] mx-auto px-8 py-[80px]">
          <div className="grid md:grid-cols-4 gap-[48px] mb-[64px]">
            <div>
              <p className="font-[Playfair_Display] text-[24px] text-white mb-[16px]">Wanderlux</p>
              <p className="text-white/60 text-[14px]">Crafting extraordinary travel experiences since 2009.</p>
            </div>
            <div>
              <p className="text-accent text-[12px] font-semibold tracking-[2px] uppercase mb-[20px]">Explore</p>
              <div className="flex flex-col gap-[12px]">
                <Link href="#destinations" className="text-white/60 text-[14px] hover:text-white">Destinations</Link>
                <Link href="#about" className="text-white/60 text-[14px] hover:text-white">Experiences</Link>
                <Link href="#about" className="text-white/60 text-[14px] hover:text-white">Honeymoons</Link>
              </div>
            </div>
            <div>
              <p className="text-accent text-[12px] font-semibold tracking-[2px] uppercase mb-[20px]">Company</p>
              <div className="flex flex-col gap-[12px]">
                <Link href="#about" className="text-white/60 text-[14px] hover:text-white">About Us</Link>
                <Link href="#contact" className="text-white/60 text-[14px] hover:text-white">Contact</Link>
              </div>
            </div>
            <div>
              <p className="text-accent text-[12px] font-semibold tracking-[2px] uppercase mb-[20px]">Contact</p>
              <p className="text-white/60 text-[14px]">hello@wanderlux.com</p>
              <p className="text-white/60 text-[14px]">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-[32px] flex flex-col md:flex-row justify-between items-center gap-[16px]">
            <p className="text-white/40 text-[14px]">© 2024 Wanderlux Journeys. All rights reserved.</p>
            <p className="text-white/40 text-[14px]">Created by Creativism Digital Marketing</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
