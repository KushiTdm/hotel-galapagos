"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewsCarousel from "@/components/ReviewsCarousel";

gsap.registerPlugin(ScrollTrigger);

const VILLA = {
  name: "Flip Flop House",
  tagline: "Cozy House in the Heart of Town",
  type: "Two-Story Family Home",
  location: "Puerto Villamil, Ecuador 200250",
  guests: 5,
  bedrooms: 2,
  beds: 4,
  bathrooms: 2,
  checkin: "4:00 PM",
  checkout: "10:00 AM",
  priceStandard: "€166",
  priceChristmas: "€238",
  christmasPeriod: "22 Nov 2026 – 5 Jan 2027",
  heroImage: "/images/villas/flip-flop-house/hero.jpg",
  gallery: [
    { src: "/images/villas/flip-flop-house/living-room.png", alt: "Spacious living room with 60″ flat-screen TV" },
    { src: "/images/villas/flip-flop-house/master-bedroom.jpg", alt: "Master bedroom with air conditioning" },
    { src: "/images/villas/flip-flop-house/dining-area.jpg", alt: "Dining area" },
    { src: "/images/villas/flip-flop-house/tv-room.jpg", alt: "TV room" },
  ],
};

const HIGHLIGHTS = [
  "Heart of Puerto Villamil — walking distance to everything",
  "High-speed Starlink internet (complimentary)",
  "Individual A/C units in each room",
  "60″ flat-screen TV",
  "Fully fenced two-story house with private yard",
  "Patio with hammock and dining table",
  "In-house washer & dryer",
  "Optional Graco crib available on request",
];

const AMENITIES = [
  {
    category: "Bedroom & Bathroom",
    items: ["Bed linen (100% cotton)", "Towel set (bath & beach)", "Blow dryer", "Shampoo, shower gel, conditioner", "Bathtub", "Iron & ironing board"],
  },
  {
    category: "Kitchen",
    items: ["Coffee machine", "Kitchen stove", "Microwave", "Refrigerator", "Cooking utensils"],
  },
  {
    category: "Comfort & Technology",
    items: ["Air conditioning (all rooms)", "High-speed Starlink internet", "60″ TV with antenna", "Patio with hammock"],
  },
  {
    category: "Laundry & Family",
    items: ["Washing machine", "Clothes dryer", "Crib on request (Graco Play'n'Go)", "Children's books & games"],
  },
];

const REVIEWS = [
  {
    name: "Julie Wessen",
    date: "July 2025",
    type: "Family with young children",
    quote: "This home is absolute perfection! Comfortable and outfitted with everything you need. Merely steps away from the heart of the island — restaurants, shops, beach. The gates at the top and bottom of the stairs make this suitable for families with very young children.",
  },
  {
    name: "Shannon Stevenson",
    date: "August 2024",
    type: "Family with older children",
    quote: "Our family with three teenagers stayed for three nights. It was our best stay in Ecuador. The house is comfortable and well stocked with everything we needed. Elena was a responsive and helpful host sharing information ahead of time and during our stay.",
  },
  {
    name: "Piotr Dranka",
    date: "February 2024",
    type: "Group",
    quote: "We stayed as a group of 5 friends. The house was very clean, comfortable and well equipped. Air conditioning in every room. Quiet location but very close to the centre. Host is very helpful and responds quickly. Possible to do flexible check in/out.",
  },
  {
    name: "Lori Delmas",
    date: "December 2023",
    type: "Group",
    quote: "Flip Flop House is well appointed for your family's stay. Kitchen has everything you will need. Beds are comfortable and bathrooms are spacious. Large outside area with hammock and dining area. The host Elena is great to work with and always quick to respond.",
  },
  {
    name: "Michael Noble",
    date: "December 2022",
    type: "Other",
    quote: "Really well located — only 10 minutes walk to the beach and main tourist street. The house itself is lovely. Superbly clean, well stocked, really comfortable. The beds were comfy and the aircon, when we needed it, was really effective. A wonderful retreat after a day of exploring.",
  },
  {
    name: "Paola Vallejo",
    date: "April 2021",
    type: "Family with young children",
    quote: "We believe this was the right choice staying at Flip Flop House for our family holiday in Isabela. The location is great and the house size is perfect for a one-family relaxing time. We truly recommend staying there and spending a wonderful week exploring the island at your pace.",
  },
];

function StarRow() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#8B7A4F" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function FlipFlopPage() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion) return;

      gsap.from(imageRef.current, { scale: 1.12, duration: 1.8, ease: "power3.out" });

      gsap.from(".hero-text > *", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.3,
      });
    },
    { scope: heroRef }
  );

  const mailtoHref = `mailto:info@galapagos-hotel.com?subject=${encodeURIComponent("Reservation Request — Flip Flop House")}&body=${encodeURIComponent("Hello Elena & Esteban,\n\nI would like to inquire about reserving Flip Flop House.\n\nCheck-in:\nCheck-out:\nGuests:\n\nPlease confirm availability and pricing.\n\nThank you!")}`;

  return (
    <main ref={heroRef}>
      <Header />

      {/* Hero */}
      <section className="relative h-screen min-h-[600px] overflow-hidden flex flex-col justify-end">
        <div ref={imageRef} className="absolute inset-0 will-change-transform">
          <Image
            src={VILLA.heroImage}
            alt="Flip Flop House — cozy family home in Puerto Villamil"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        <div className="hero-text relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24 w-full">
          <Link
            href="/#villas"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-[10px] tracking-[0.3em] uppercase font-sans mb-6 transition-colors duration-300"
          >
            <span className="block w-5 h-px bg-current" />
            Our Villas
          </Link>
          <p className="text-white/60 text-[11px] tracking-[0.35em] uppercase font-sans mb-3">
            {VILLA.type}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl italic text-white leading-[1.05] mb-3">
            {VILLA.name}
          </h1>
          <p className="font-serif italic text-xl md:text-2xl text-white/75">
            {VILLA.tagline}
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-ink text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-5 flex flex-wrap gap-6 md:gap-0 md:divide-x divide-white/20">
          {[
            { label: "Guests", value: `Up to ${VILLA.guests}` },
            { label: "Bedrooms", value: VILLA.bedrooms },
            { label: "Beds", value: VILLA.beds },
            { label: "Bathrooms", value: VILLA.bathrooms },
            { label: "Check-in", value: VILLA.checkin },
            { label: "Check-out", value: VILLA.checkout },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1 md:px-8 first:pl-0 last:pr-0">
              <span className="text-[9px] tracking-[0.3em] uppercase text-white/50 font-sans">{s.label}</span>
              <span className="text-sm font-sans text-white font-light">{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Description + Gallery */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <p className="text-[10px] tracking-[0.35em] uppercase text-bronze font-sans mb-4">
                  About This Villa
                </p>
                <h2 className="font-serif text-4xl md:text-5xl italic text-ink leading-tight mb-6">
                  Your home in<br />the heart of Isabela
                </h2>
                <p className="text-base leading-[1.9] text-neutral-600 font-sans">
                  Flip Flop House is a fully fenced, two-story family home in the centre of Puerto Villamil. With spacious rooms, a generous patio with hammock, and everything you need for a comfortable extended stay, it is the perfect base for exploring Isabela Island.
                </p>
                <p className="text-base leading-[1.9] text-neutral-600 font-sans mt-4">
                  The beach is a 5-minute walk away; Concha de Perla snorkelling, the tortoise breeding centre, and all the island's tour operators are within easy reach. Everything is here — but the sounds of the island, not the city, surround you.
                </p>
              </div>
              <div className="flex flex-col gap-3 border-t border-neutral-100 pt-8">
                <p className="text-[10px] tracking-[0.3em] uppercase text-bronze font-sans mb-2">
                  Key Highlights
                </p>
                {HIGHLIGHTS.map((h) => (
                  <div key={h} className="flex items-start gap-3">
                    <span className="text-bronze mt-1 shrink-0">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
                        <polygon points="5,0 6.5,3.5 10,4 7,7 7.5,10.5 5,8.5 2.5,10.5 3,7 0,4 3.5,3.5" />
                      </svg>
                    </span>
                    <p className="text-sm font-sans text-neutral-600">{h}</p>
                  </div>
                ))}
              </div>
              <a
                href={mailtoHref}
                className="self-start bg-bronze hover:bg-bronze-dark text-white text-[11px] tracking-[0.3em] uppercase px-10 py-4 font-sans transition-colors duration-500"
              >
                Reserve This Villa
              </a>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 overflow-hidden aspect-[16/9]">
                  <Image
                    src={VILLA.gallery[0].src}
                    alt={VILLA.gallery[0].alt}
                    width={900}
                    height={506}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1200ms] ease-out"
                  />
                </div>
                {VILLA.gallery.slice(1).map((img) => (
                  <div key={img.src} className="overflow-hidden aspect-square">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={450}
                      height={450}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1200ms] ease-out"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-[10px] tracking-[0.35em] uppercase text-bronze font-sans mb-2">
            What's Included
          </p>
          <h2 className="font-serif text-4xl md:text-5xl italic text-ink mb-16">
            Amenities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {AMENITIES.map((group) => (
              <div key={group.category}>
                <p className="text-[10px] tracking-[0.3em] uppercase text-bronze font-sans mb-4">
                  {group.category}
                </p>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm font-sans text-neutral-600 flex items-start gap-2">
                      <span className="text-bronze mt-[5px] shrink-0 text-[8px]">■</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates & House Rules */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <p className="text-[10px] tracking-[0.35em] uppercase text-bronze font-sans mb-2">
                Pricing
              </p>
              <h2 className="font-serif text-4xl md:text-5xl italic text-ink mb-10">
                Rates
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border border-neutral-200 p-8 flex flex-col gap-3">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-sans">
                    Standard Rate
                  </p>
                  <p className="font-serif text-5xl text-ink">{VILLA.priceStandard}</p>
                  <p className="text-[11px] text-neutral-500 font-sans">per night</p>
                </div>
                <div className="border-2 border-bronze p-8 flex flex-col gap-3 bg-cream">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-bronze font-sans">
                    Christmas &amp; New Year
                  </p>
                  <p className="font-serif text-5xl text-ink">{VILLA.priceChristmas}</p>
                  <p className="text-[11px] text-neutral-500 font-sans">per night</p>
                  <p className="text-[10px] text-neutral-400 font-sans mt-2">{VILLA.christmasPeriod}</p>
                </div>
              </div>

              <div className="mt-10 p-8 bg-cream flex flex-col gap-4">
                <p className="text-[10px] tracking-[0.3em] uppercase text-bronze font-sans">
                  Cancellation Policy
                </p>
                <p className="text-sm font-sans text-neutral-600 leading-relaxed">
                  <strong className="text-ink">100% refund</strong> if cancelled 60 days or more before arrival.
                </p>
                <p className="text-sm font-sans text-neutral-600 leading-relaxed">
                  <strong className="text-ink">Non-refundable</strong> if cancelled within 60 days of arrival.
                </p>
                <p className="text-sm font-sans text-neutral-600 leading-relaxed">
                  Full payment required at time of reservation. No security deposit required.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <p className="text-[10px] tracking-[0.35em] uppercase text-bronze font-sans mb-2">
                Rules &amp; Policies
              </p>
              <h2 className="font-serif text-4xl md:text-5xl italic text-ink mb-10">
                House Rules
              </h2>
              <div className="flex flex-col divide-y divide-neutral-100">
                {[
                  { label: "Check-in", value: "From 4:00 PM" },
                  { label: "Check-out", value: "By 10:00 AM" },
                  { label: "Maximum guests", value: "5 guests" },
                  { label: "Children", value: "Welcome" },
                  { label: "Smoking", value: "Not permitted" },
                  { label: "Pets", value: "Not permitted" },
                  { label: "Crib", value: "Available on request" },
                ].map((r) => (
                  <div key={r.label} className="flex justify-between items-center py-4">
                    <span className="text-sm font-sans text-neutral-500">{r.label}</span>
                    <span className="text-sm font-sans text-ink">{r.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3">
                <a
                  href={mailtoHref}
                  className="bg-bronze hover:bg-bronze-dark text-white text-[11px] tracking-[0.3em] uppercase px-10 py-4 font-sans transition-colors duration-500 text-center"
                >
                  Reserve Flip Flop House
                </a>
                <a
                  href="tel:+593993211049"
                  className="border border-bronze text-bronze hover:bg-bronze hover:text-white text-[11px] tracking-[0.3em] uppercase px-10 py-4 font-sans transition-all duration-500 text-center"
                >
                  Call +593 993 211 049
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 md:py-32 bg-cream-dark">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-[10px] tracking-[0.35em] uppercase text-bronze font-sans mb-2">
            Guest Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl italic text-ink mb-16">
            What Our Guests Say
          </h2>
          <ReviewsCarousel reviews={REVIEWS} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-ink text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase text-white/50 font-sans mb-3">
              Flip Flop House · Puerto Villamil
            </p>
            <h2 className="font-serif text-4xl md:text-5xl italic text-white leading-tight">
              Your island home<br />awaits
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href={mailtoHref}
              className="bg-bronze hover:bg-bronze-dark text-white text-[11px] tracking-[0.3em] uppercase px-10 py-4 font-sans transition-colors duration-500 text-center"
            >
              Reserve Now
            </a>
            <Link
              href="/#villas"
              className="border border-white/40 text-white hover:bg-white hover:text-ink text-[11px] tracking-[0.3em] uppercase px-10 py-4 font-sans transition-all duration-500 text-center"
            >
              View All Villas
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
