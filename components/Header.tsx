"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Villas", href: "#villas" },
  { label: "Experience", href: "#experience" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          {/* Burger */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className={`flex flex-col gap-[5px] group transition-colors duration-300 ${
              scrolled ? "text-ink" : "text-white"
            }`}
          >
            <span className="block w-6 h-px bg-current transition-transform duration-300" />
            <span className="block w-4 h-px bg-current group-hover:w-6 transition-all duration-300" />
            <span className="block w-6 h-px bg-current" />
          </button>

          {/* Wordmark */}
          <Link
            href="/"
            className={`font-serif text-base md:text-lg tracking-[0.35em] uppercase transition-colors duration-300 ${
              scrolled ? "text-ink" : "text-white"
            }`}
          >
            Galápagos
            <span className="block text-center text-[10px] tracking-[0.45em] mt-[-2px] font-sans font-light">
              HOTEL
            </span>
          </Link>

          {/* Right actions */}
          <div
            className={`flex items-center gap-6 text-[11px] tracking-[0.2em] uppercase font-sans font-light transition-colors duration-300 ${
              scrolled ? "text-ink" : "text-white"
            }`}
          >
            <span className="hidden md:block opacity-50 cursor-default select-none">EN</span>
            <span className="hidden md:block opacity-30">|</span>
            <a
              href="#book"
              className={`px-6 py-3 text-[11px] tracking-[0.25em] uppercase transition-all duration-500 ${
                scrolled
                  ? "bg-bronze text-white hover:bg-bronze-dark"
                  : "border border-white/70 text-white hover:bg-white hover:text-ink"
              }`}
            >
              Reserve
            </a>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-ink flex flex-col">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-6 flex justify-between items-center w-full">
            <Link
              href="/"
              className="font-serif text-lg tracking-[0.35em] uppercase text-white"
              onClick={() => setMenuOpen(false)}
            >
              Galápagos
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <span className="text-2xl font-light">✕</span>
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-4xl md:text-6xl text-white/80 hover:text-white transition-colors duration-300 italic"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="px-6 md:px-12 lg:px-20 pb-12">
            <p className="text-white/40 text-xs tracking-[0.2em] uppercase font-sans">
              Puerto Villamil, Isabela, Galápagos
            </p>
          </div>
        </div>
      )}
    </>
  );
}
