"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useLanguage } from "@/lib/LanguageContext";
import { T } from "@/lib/translations";

const WA_NUMBER = "593993211049";

export default function HeroSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);
  const checkinRef = useRef<HTMLInputElement>(null);
  const checkoutRef = useRef<HTMLInputElement>(null);
  const guestsRef = useRef<HTMLSelectElement>(null);
  const villaRef = useRef<HTMLSelectElement>(null);

  const { lang } = useLanguage();
  const tr = T[lang];

  const handleReserve = () => {
    const checkin = checkinRef.current?.value || "—";
    const checkout = checkoutRef.current?.value || "—";
    const guests = guestsRef.current?.value || tr.hero_guest_options[0];
    const villa = villaRef.current?.value || tr.hero_any_villa;
    const msg = tr.hero_whatsapp_msg(villa, checkin, checkout, guests);
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(imageRef.current, { scale: 1.15, duration: 1.8 })
      .from(
        titleRef.current,
        { clipPath: "inset(0 0 100% 0)", duration: 1, ease: "power4.out" },
        0.3
      )
      .from(
        subtitleRef.current,
        { opacity: 0, y: 20, duration: 0.8 },
        0.8
      )
      .from(
        bookingRef.current,
        { opacity: 0, y: 40, duration: 0.8 },
        0.9
      );
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex flex-col overflow-hidden">
      {/* Background image */}
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/hero.png"
          alt="Beach loungers on the pristine sands of Puerto Villamil, Galápagos"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Hero text */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 mt-20">
        <p className="text-white/70 text-xs tracking-[0.35em] uppercase font-sans font-light mb-6">
          {tr.hero_location}
        </p>
        <h1
          ref={titleRef}
          className="font-serif text-5xl md:text-7xl lg:text-8xl italic text-white leading-[1.05] [clip-path:inset(0_0_0_0)]"
        >
          {tr.hero_h1_line1}
          <br />
          <em className="not-italic font-normal">{tr.hero_h1_line2}</em>
        </h1>
        <p
          ref={subtitleRef}
          className="font-serif italic text-xl md:text-2xl text-white/80 mt-6 max-w-lg"
        >
          {tr.hero_subtitle}
        </p>

        <a
          href="#villas"
          className="mt-10 border border-white/70 text-white text-[11px] tracking-[0.3em] uppercase px-10 py-4 font-sans hover:bg-white hover:text-ink transition-all duration-500"
        >
          {tr.hero_discover}
        </a>
      </div>

      {/* Booking widget */}
      <div
        ref={bookingRef}
        id="book"
        className="relative z-10 bg-white/95 backdrop-blur mx-4 md:mx-12 lg:mx-20 mb-0 shadow-lg"
      >
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:flex md:flex-row md:items-center">
          <div className="flex-1 px-4 md:px-8 py-4 md:py-6 border-b border-r border-neutral-200 md:border-b-0 md:border-r-0">
            <label className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 font-sans block mb-1">
              {tr.hero_checkin}
            </label>
            <input
              ref={checkinRef}
              type="date"
              className="w-full text-ink text-sm font-sans outline-none bg-transparent border-b border-neutral-200 pb-1 cursor-pointer"
            />
          </div>
          <div className="flex-1 px-4 md:px-8 py-4 md:py-6 border-b border-neutral-200 md:border-b-0 md:border-l">
            <label className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 font-sans block mb-1">
              {tr.hero_checkout}
            </label>
            <input
              ref={checkoutRef}
              type="date"
              className="w-full text-ink text-sm font-sans outline-none bg-transparent border-b border-neutral-200 pb-1 cursor-pointer"
            />
          </div>
          <div className="flex-1 px-4 md:px-8 py-4 md:py-6 border-r border-neutral-200 md:border-r-0 md:border-l">
            <label className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 font-sans block mb-1">
              {tr.hero_guests}
            </label>
            <select ref={guestsRef} className="w-full text-ink text-sm font-sans outline-none bg-transparent border-b border-neutral-200 pb-1 cursor-pointer">
              {tr.hero_guest_options.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div className="flex-1 px-4 md:px-8 py-4 md:py-6 md:border-l border-neutral-200">
            <label className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 font-sans block mb-1">
              {tr.hero_villa}
            </label>
            <select ref={villaRef} className="w-full text-ink text-sm font-sans outline-none bg-transparent border-b border-neutral-200 pb-1 cursor-pointer">
              <option>{tr.hero_any_villa}</option>
              <option>Yellow Heron House</option>
              <option>Sandy Feet House</option>
              <option>Flip Flop House</option>
            </select>
          </div>
          <div className="col-span-2 md:col-span-1 px-4 md:px-8 py-3 md:py-6 border-t border-neutral-200 md:border-t-0 md:border-l">
            <button
              onClick={handleReserve}
              className="w-full md:w-auto bg-bronze hover:bg-bronze-dark text-white text-[11px] tracking-[0.3em] uppercase px-10 py-4 transition-colors duration-500 font-sans whitespace-nowrap"
            >
              {tr.hero_reserve_btn}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
