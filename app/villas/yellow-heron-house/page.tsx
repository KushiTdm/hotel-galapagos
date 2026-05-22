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
  name: "Yellow Heron House",
  tagline: "Comfortable Beachfront House",
  type: "Brand-New Luxury Beachfront Home",
  location: "Avenida Antonio Gil, Puerto Villamil, Ecuador 200250",
  guests: 8,
  bedrooms: 3,
  beds: 6,
  bathrooms: 3,
  checkin: "4:00 PM",
  checkout: "11:00 AM",
  priceStandard: "€417",
  priceChristmas: "€639",
  christmasPeriod: "20 Dec – 5 Jan (each year)",
  additionalGuest: "+ €43 per guest / night after 6 guests",
  heroImage: "/images/villas/yellow-heron-house/hero.jpg",
  gallery: [
    { src: "/images/villas/yellow-heron-house/living-room.jpg", alt: "Bright living area with ocean views" },
    { src: "/images/villas/yellow-heron-house/bedroom-ocean-view.jpg", alt: "Bedroom with direct ocean view" },
    { src: "/images/villas/yellow-heron-house/master-bedroom.jpg", alt: "Master bedroom with ensuite" },
    { src: "/images/villas/yellow-heron-house/master-bathroom.jpg", alt: "Spacious master bathroom" },
  ],
};

const HIGHLIGHTS = [
  "Brand-new two-story luxury beachfront house",
  "Sun-soaked patio by the waves",
  "High-speed Starlink internet (complimentary)",
  "Independent A/C in each room",
  "Fully equipped chef's kitchen (oven, grill, blender)",
  "Spacious bathrooms with bathtub & shower",
  "In-house washer & dryer",
  "Beach chairs on the patio",
  "Optional housekeeper service available",
  "Optional Graco crib on request",
];

const AMENITIES = [
  {
    category: "Bedroom & Bathroom",
    items: ["Bed linen (100% cotton)", "Towel set (bath & beach)", "Blow dryer", "Shampoo, shower gel, conditioner", "Bathtub", "Shower", "Iron & ironing board"],
  },
  {
    category: "Kitchen",
    items: ["Full chef's kitchen", "Oven", "Grill", "Kitchen stove", "Blender", "Coffee machine", "Microwave", "Refrigerator", "Cooking utensils"],
  },
  {
    category: "Comfort & Technology",
    items: ["Air conditioning (all rooms)", "High-speed Starlink internet", "Beach chairs", "Private garden", "Sun-soaked beachfront patio"],
  },
  {
    category: "Safety & Services",
    items: ["Carbon monoxide detector", "Fire extinguisher", "First aid kit", "Safe", "Housekeeper (optional)", "Crib on request (Graco Play'n'Go)"],
  },
];

const REVIEWS = [
  {
    name: "Christian Francis",
    date: "December 2024",
    type: "Family with older children",
    quote: "Our family LOVED this home! The most beautiful, immaculately clean, and comfortable home we stayed in on the islands. The beach is perfect in every way and steps from the door. The area is peaceful but close to town. We'd do it again in a heartbeat.",
  },
  {
    name: "Amanda",
    date: "January 2024",
    type: "Family with young children",
    quote: "This is by far one of the best houses we have stayed in! Perfect location right on the beach to watch the sunrise, sunset and wildlife right outside your doors. Huge bathrooms with great showers and hot water. I loved the hammock area outside. Thank you Elena and Esteban for making our stay so perfect.",
  },
  {
    name: "The Sabens",
    date: "July 2022",
    type: "Family with young children",
    quote: "Casa Blanca was even better than the pictures. Esteban and Elena were fantastic hosts — helped with our transportation from the airport. Their house was very well stocked and the pool was clean with toys for the kids. If you have kids, this is the place to stay! A first class residence for families.",
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

export default function YellowHeronPage() {
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

  const mailtoHref = `mailto:info@galapagos-hotel.com?subject=${encodeURIComponent("Reservation Request — Yellow Heron House")}&body=${encodeURIComponent("Hello Elena & Esteban,\n\nI would like to inquire about reserving Yellow Heron House.\n\nCheck-in:\nCheck-out:\nGuests:\n\nPlease confirm availability and pricing.\n\nThank you!")}`;

  return (
    <main ref={heroRef}>
      <Header />

      {/* Hero */}
      <section className="relative h-screen min-h-[600px] overflow-hidden flex flex-col justify-end">
        <div ref={imageRef} className="absolute inset-0 will-change-transform">
          <Image
            src={VILLA.heroImage}
            alt="Yellow Heron House — brand-new luxury beachfront villa"
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
                  A new luxury<br />on Isabela's shore
                </h2>
                <p className="text-base leading-[1.9] text-neutral-600 font-sans">
                  Yellow Heron House is a brand-new, two-story luxury residence sitting directly on the beach of Puerto Villamil. Designed with care and furnished to the highest standard, the house accommodates up to eight guests across three beautifully appointed bedrooms — one on the ground floor, two on the first floor.
                </p>
                <p className="text-base leading-[1.9] text-neutral-600 font-sans mt-4">
                  Spread across both floors, the generous living spaces open onto a sun-soaked patio where the waves of the Pacific lap just metres away. A fully equipped chef's kitchen, spacious bathrooms with bathtub and shower, and beach chairs on the patio complete this exceptional home.
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
                  <p className="text-xs text-neutral-400 font-sans mt-2">{VILLA.additionalGuest}</p>
                </div>
                <div className="border-2 border-bronze p-8 flex flex-col gap-3 bg-cream">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-bronze font-sans">
                    Christmas &amp; New Year
                  </p>
                  <p className="font-serif text-5xl text-ink">{VILLA.priceChristmas}</p>
                  <p className="text-[11px] text-neutral-500 font-sans">per night</p>
                  <p className="text-[10px] text-neutral-400 font-sans mt-2">{VILLA.christmasPeriod}</p>
                  <p className="text-xs text-neutral-400 font-sans">{VILLA.additionalGuest}</p>
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
                  { label: "Check-out", value: "By 11:00 AM" },
                  { label: "Maximum guests", value: "8 guests" },
                  { label: "Children", value: "Welcome" },
                  { label: "Smoking", value: "Not permitted" },
                  { label: "Pets", value: "Not permitted" },
                  { label: "Housekeeper", value: "Optional (on request)" },
                  { label: "Crib", value: "Available on request" },
                  { label: "Credit cards", value: "Accepted" },
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
                  Reserve Yellow Heron House
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
              Yellow Heron House · Beachfront · Puerto Villamil
            </p>
            <h2 className="font-serif text-4xl md:text-5xl italic text-white leading-tight">
              The finest address<br />on Isabela Island
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
