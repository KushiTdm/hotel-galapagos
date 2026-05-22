"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);
  const checkinRef = useRef<HTMLInputElement>(null);
  const checkoutRef = useRef<HTMLInputElement>(null);
  const guestsRef = useRef<HTMLSelectElement>(null);
  const villaRef = useRef<HTMLSelectElement>(null);

  const handleReserve = () => {
    const checkin = checkinRef.current?.value || "";
    const checkout = checkoutRef.current?.value || "";
    const guests = guestsRef.current?.value || "2 Guests";
    const villa = villaRef.current?.value || "Any Villa";
    const subject = encodeURIComponent(`Reservation Request — ${villa}`);
    const body = encodeURIComponent(
      `Hello Esteban & Elena,\n\nI would like to inquire about a reservation:\n\nVilla: ${villa}\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nGuests: ${guests}\n\nPlease confirm availability and pricing.\n\nThank you!`
    );
    window.location.href = `mailto:info@galapagos-hotel.com?subject=${subject}&body=${body}`;
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
          Puerto Villamil · Isabela · Galápagos
        </p>
        <h1
          ref={titleRef}
          className="font-serif text-5xl md:text-7xl lg:text-8xl italic text-white leading-[1.05] [clip-path:inset(0_0_0_0)]"
        >
          Where the Ocean
          <br />
          <em className="not-italic font-normal">Meets Paradise</em>
        </h1>
        <p
          ref={subtitleRef}
          className="font-serif italic text-xl md:text-2xl text-white/80 mt-6 max-w-lg"
        >
          Three exclusive villas on the shores of the Galápagos
        </p>

        <a
          href="#villas"
          className="mt-10 border border-white/70 text-white text-[11px] tracking-[0.3em] uppercase px-10 py-4 font-sans hover:bg-white hover:text-ink transition-all duration-500"
        >
          Discover Our Villas
        </a>
      </div>

      {/* Booking widget */}
      <div
        ref={bookingRef}
        id="book"
        className="relative z-10 bg-white/95 backdrop-blur mx-4 md:mx-12 lg:mx-20 mb-0 shadow-lg"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 py-6 flex flex-col md:flex-row items-center gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
          <div className="flex-1 px-4 md:px-8 w-full">
            <label className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 font-sans block mb-1">
              Check-in
            </label>
            <input
              ref={checkinRef}
              type="date"
              className="w-full text-ink text-sm font-sans outline-none bg-transparent border-b border-neutral-200 pb-1 cursor-pointer"
            />
          </div>
          <div className="flex-1 px-4 md:px-8 w-full">
            <label className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 font-sans block mb-1">
              Check-out
            </label>
            <input
              ref={checkoutRef}
              type="date"
              className="w-full text-ink text-sm font-sans outline-none bg-transparent border-b border-neutral-200 pb-1 cursor-pointer"
            />
          </div>
          <div className="flex-1 px-4 md:px-8 w-full">
            <label className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 font-sans block mb-1">
              Guests
            </label>
            <select ref={guestsRef} className="w-full text-ink text-sm font-sans outline-none bg-transparent border-b border-neutral-200 pb-1 cursor-pointer">
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5+ Guests</option>
            </select>
          </div>
          <div className="flex-1 px-4 md:px-8 w-full">
            <label className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 font-sans block mb-1">
              Villa
            </label>
            <select ref={villaRef} className="w-full text-ink text-sm font-sans outline-none bg-transparent border-b border-neutral-200 pb-1 cursor-pointer">
              <option>Any Villa</option>
              <option>Yellow Heron House</option>
              <option>Sandy Feet House</option>
              <option>Flip Flop House</option>
            </select>
          </div>
          <div className="px-4 md:px-8 w-full md:w-auto">
            <button
              onClick={handleReserve}
              className="w-full md:w-auto bg-bronze hover:bg-bronze-dark text-white text-[11px] tracking-[0.3em] uppercase px-10 py-4 transition-colors duration-500 font-sans whitespace-nowrap"
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
