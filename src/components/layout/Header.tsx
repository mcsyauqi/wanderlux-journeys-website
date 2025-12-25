"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-navy/10">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-['Cormorant_Garamond',Georgia,serif] font-semibold text-navy">
          Wanderlux
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/destinations" className="text-sm text-navy/70 hover:text-teal">
            Destinations
          </Link>
          <Link href="/experiences" className="text-sm text-navy/70 hover:text-teal">
            Experiences
          </Link>
          <Link href="/about" className="text-sm text-navy/70 hover:text-teal">
            About
          </Link>
          <Link
            href="/plan-your-trip"
            className="text-sm bg-teal text-white px-5 py-2.5 hover:bg-teal-dark"
          >
            Plan Trip
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
        >
          <span className={`h-0.5 bg-navy transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-0.5 bg-navy transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 bg-navy transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-white border-t border-navy/10 px-6 py-4 flex flex-col gap-4">
          <Link href="/destinations" className="text-navy/70">Destinations</Link>
          <Link href="/experiences" className="text-navy/70">Experiences</Link>
          <Link href="/about" className="text-navy/70">About</Link>
          <Link href="/plan-your-trip" className="bg-teal text-white px-5 py-2.5 text-center">
            Plan Trip
          </Link>
        </nav>
      )}
    </header>
  );
}
