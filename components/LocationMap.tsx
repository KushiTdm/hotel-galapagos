"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/lib/LanguageContext";
import { T } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

const MAPS_EMBED =
  "https://maps.google.com/maps?q=Avenida+Antonio+Gil,+Puerto+Villamil,+Ecuador&output=embed&z=16";

const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Avenida+Antonio+Gil+Puerto+Villamil+Ecuador+200250";

export default function LocationMap() {
  const sectionRef = useRef<HTMLElement>(null);
  const { lang } = useLanguage();
  const tr = T[lang];

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
      className="py-12 md:py-32 bg-cream"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <SectionHeading
          eyebrow={tr.location_eyebrow}
          title={tr.location_title}
          subtitle={tr.location_subtitle}
        />

        <div className="mt-8 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Google Maps embed */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden h-[220px] md:h-[500px]">
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
                  {tr.location_airport}
                </span>
                <span className="text-neutral-300 hidden sm:block">|</span>
                <span className="text-[11px] tracking-[0.2em] uppercase text-neutral-500 font-sans">
                  {tr.location_ferry}
                </span>
              </div>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[0.2em] uppercase text-bronze hover:text-bronze-dark font-sans transition-colors duration-300 flex items-center gap-2"
              >
                {tr.location_directions}
                <span className="block w-5 h-px bg-current" />
              </a>
            </div>
          </div>

          {/* Nearby + Contact */}
          <div className="lg:col-span-5">
            <p className="text-[11px] tracking-[0.3em] uppercase text-bronze font-sans mb-4 md:mb-8">
              {tr.location_neighbourhood}
            </p>
            <div className="flex flex-col divide-y divide-neutral-200">
              {tr.nearby.map((item) => (
                <div
                  key={item.label}
                  className="nearby-row flex items-center justify-between py-3 md:py-4 group"
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

            <div className="mt-6 md:mt-10 p-5 md:p-8 bg-white border-l-2 border-bronze">
              <p className="font-serif italic text-lg md:text-2xl text-ink mb-2 md:mb-3 leading-snug">
                {tr.location_quote}
              </p>
              <p className="text-[11px] tracking-[0.2em] uppercase text-neutral-500 font-sans mb-6">
                {tr.location_owners}
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
