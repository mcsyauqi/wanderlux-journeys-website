"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-['Cormorant_Garamond',Georgia,serif] mb-4">Wanderlux</h3>
            <p className="text-white/60 text-sm">
              Crafting extraordinary travel experiences since 2009.
            </p>
          </div>

          <div>
            <h4 className="text-gold text-sm font-semibold mb-4">EXPLORE</h4>
            <div className="flex flex-col gap-2">
              <Link href="/destinations" className="text-white/60 text-sm hover:text-white">Destinations</Link>
              <Link href="/experiences" className="text-white/60 text-sm hover:text-white">Experiences</Link>
              <Link href="/honeymoons" className="text-white/60 text-sm hover:text-white">Honeymoons</Link>
            </div>
          </div>

          <div>
            <h4 className="text-gold text-sm font-semibold mb-4">COMPANY</h4>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-white/60 text-sm hover:text-white">About Us</Link>
              <Link href="/blog" className="text-white/60 text-sm hover:text-white">Blog</Link>
              <Link href="/plan-your-trip" className="text-white/60 text-sm hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-gold text-sm font-semibold mb-4">CONTACT</h4>
            <p className="text-white/60 text-sm">hello@wanderlux.com</p>
            <p className="text-white/60 text-sm">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2024 Wanderlux Journeys. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Created by Creativism Digital Marketing
          </p>
        </div>
      </div>
    </footer>
  );
}
