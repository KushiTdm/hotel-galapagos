"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const NEARBY = [
  { label: "Puerto Villamil Beach", distance: "At your door" },
  { label: "Tortoise Breeding Centre", distance: "5 min walk" },
  { label: "Las Tintoreras (sharks & boobies)", distance: "10 min walk" },
  { label: "Concha de Perla (snorkelling)", distance: "15 min walk" },
  { label: "Wall of Tears", distance: "20 min by bike" },
  { label: "Los Tuneles (lava arches)", distance: "45 min by boat" },
];

const MAPS_EMBED =
  "https://maps.google.com/maps?q=Avenida+Antonio+Gil,+Puerto+Villamil,+Ecuador&output=embed&z=16";

const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Avenida+Antonio+Gil+Puerto+Villamil+Ecuador+200250";

export default function LocationMap() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reducedMotion) return;

      gsap.from(".nearby-row", {
        opacity: 0,
        x: 20,
        duration: 0.6,
        stagger: 0.08,
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
      id="location"
      className="py-24 md:py-32 bg-cream"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <SectionHeading
          eyebrow="Where to Find Us"
          title="LOCATION"
          subtitle="Puerto Villamil, Isabela Island, Galápagos"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Google Maps embed */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden h-[400px] md:h-[500px]">
              <iframe
                title="Galápagos Hotel — Avenida Antonio Gil, Puerto Villamil"
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-4">
                <span className="text-[11px] tracking-[0.2em] uppercase text-neutral-500 font-sans">
                  ✈ Isabela Airport (GPS) — 10 min
                </span>
                <span className="text-neutral-300 hidden sm:block">|</span>
                <span className="text-[11px] tracking-[0.2em] uppercase text-neutral-500 font-sans">
                  🚤 Ferry from Santa Cruz — 2h
                </span>
              </div>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[0.2em] uppercase text-bronze hover:text-bronze-dark font-sans transition-colors duration-300 flex items-center gap-2"
              >
                Get Directions
                <span className="block w-5 h-px bg-current" />
              </a>
            </div>
          </div>

          {/* Nearby + Contact */}
          <div className="lg:col-span-5">
            <p className="text-[11px] tracking-[0.3em] uppercase text-bronze font-sans mb-8">
              In the Neighbourhood
            </p>
            <div className="flex flex-col divide-y divide-neutral-200">
              {NEARBY.map((item) => (
                <div
                  key={item.label}
                  className="nearby-row flex items-center justify-between py-4 group"
                >
                  <span className="text-sm font-sans text-neutral-700 group-hover:text-ink transition-colors duration-200">
                    {item.label}
                  </span>
                  <span className="text-[11px] tracking-[0.15em] text-bronze font-sans">
                    {item.distance}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-8 bg-white border-l-2 border-bronze">
              <p className="font-serif italic text-2xl text-ink mb-3 leading-snug">
                "The closest you'll get to the wild without leaving paradise."
              </p>
              <p className="text-[11px] tracking-[0.2em] uppercase text-neutral-500 font-sans mb-6">
                — Elena &amp; Esteban Chavez, Owners
              </p>
              <div className="flex flex-col gap-2 border-t border-neutral-100 pt-6">
                <p className="text-sm font-sans text-neutral-600">
                  Avenida Antonio Gil
                </p>
                <p className="text-sm font-sans text-neutral-600">
                  Puerto Villamil, Ecuador 200250
                </p>
                <a
                  href="tel:+593993211049"
                  className="text-sm font-sans text-bronze hover:text-bronze-dark transition-colors duration-200 mt-1"
                >
                  +593 993 211 049
                </a>
                <a
                  href="mailto:info@galapagos-hotel.com"
                  className="text-sm font-sans text-bronze hover:text-bronze-dark transition-colors duration-200"
                >
                  info@galapagos-hotel.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
