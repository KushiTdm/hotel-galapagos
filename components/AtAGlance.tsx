"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const AMENITY_ICONS: Record<string, React.ReactNode> = {
  wave: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2" />
      <path d="M2 12c.6.5 1.2 1 2.5 1C7 13 7 11 9.5 11c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2" />
      <path d="M2 18c.6.5 1.2 1 2.5 1C7 19 7 17 9.5 17c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2" />
    </svg>
  ),
  wifi: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  leaf: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
  home: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  fork: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3v2a2 2 0 0 1-2 2h-1" />
    </svg>
  ),
  sun: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

const AMENITIES = [
  {
    iconKey: "wave",
    title: "Beachfront Access",
    description:
      "Two of our three villas sit directly on Puerto Villamil's pristine beach — step outside and your toes are in the sand.",
  },
  {
    iconKey: "wifi",
    title: "Starlink Internet",
    description:
      "Complimentary high-speed satellite internet in all villas, so you stay connected while the world feels far away.",
  },
  {
    iconKey: "leaf",
    title: "Wildlife at Your Door",
    description:
      "Marine iguanas, sea lions, and giant tortoises are your neighbors. The Galápagos are yours to explore.",
  },
  {
    iconKey: "home",
    title: "Fully Furnished",
    description:
      "Each villa is thoughtfully furnished with everything you need for a comfortable, extended stay.",
  },
  {
    iconKey: "fork",
    title: "Local Dining",
    description:
      "Surrounded by restaurants, cafés, and bars. Puerto Villamil's best flavors are steps from your door.",
  },
  {
    iconKey: "sun",
    title: "Private Patios",
    description:
      "Generous outdoor terraces where the ocean breeze and the sound of waves become your constant companions.",
  },
];

export default function AtAGlance() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reducedMotion) return;

      gsap.from(".amenity-card", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="amenities"
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <SectionHeading
          eyebrow="At a Glance"
          title="ISLAND LIVING"
          subtitle="Everything you need, and nothing you don't"
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {AMENITIES.map((item) => (
            <div
              key={item.title}
              className="amenity-card group flex flex-col gap-4"
            >
              <span className="text-bronze">{AMENITY_ICONS[item.iconKey]}</span>
              <div className="w-8 h-px bg-bronze group-hover:w-16 transition-all duration-500" />
              <h3 className="font-serif text-xl text-ink">{item.title}</h3>
              <p className="text-sm leading-[1.8] text-neutral-600 font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
