"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import SectionHeading from "./SectionHeading";

const VILLAS = [
  {
    name: "Yellow Heron House",
    slug: "yellow-heron-house",
    type: "Private Luxurious House",
    location: "Centre of Puerto Villamil, directly on the beach",
    bedrooms: 3,
    bathrooms: 3,
    guests: 8,
    priceFrom: "€417",
    features: [
      "Big patio on the beach",
      "Fully furnished",
      "High-speed Starlink internet",
    ],
    image: "/images/villa-yellow-heron.jpg",
    imageAlt: "Yellow Heron House — living room with direct ocean view",
  },
  {
    name: "Sandy Feet House",
    slug: "sandy-feet-house",
    type: "Beachfront Family House",
    location: "Directly on the beach",
    bedrooms: 2,
    bathrooms: 2,
    guests: 6,
    priceFrom: "€289",
    features: [
      "Ocean-view patio (waves touch the patio)",
      "Spacious living areas",
      "High-speed Starlink internet",
    ],
    image: "/images/villa-sandy-feet.jpg",
    imageAlt: "Sandy Feet House — master bedroom with ocean view",
  },
  {
    name: "Flip Flop House",
    slug: "flip-flop-house",
    type: "Two-Story Family House",
    location: "Heart of Puerto Villamil",
    bedrooms: 2,
    bathrooms: 2,
    guests: 5,
    priceFrom: "€166",
    features: [
      "Spacious living room with 60″ TV",
      "Big fully equipped kitchen",
      "High-speed Starlink internet",
    ],
    image: "/images/villa-flip-flop.jpg",
    imageAlt: "Flip Flop House — spacious living and dining room",
  },
];

export default function VillasSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="villas" className="py-24 md:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <SectionHeading
          eyebrow="Our Villas"
          title="ACCOMMODATIONS"
          subtitle="Three exceptional houses, one extraordinary destination"
        />

        <div className="mt-16">
          {/* Desktop: plain grid, no navigation needed */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {VILLAS.map((villa) => (
              <VillaCard key={villa.name} villa={villa} isActive />
            ))}
          </div>

          {/* Mobile / tablet: autoplay carousel with arrows */}
          <div className="lg:hidden">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={24}
              loop
              autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {VILLAS.map((villa, i) => (
                <SwiperSlide key={villa.name}>
                  <VillaCard villa={villa} isActive={i === activeIndex} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Mobile navigation */}
            <div className="flex items-center justify-between mt-10">
              {/* Counter */}
              <p className="font-serif text-4xl text-ink/30">
                <span className="text-ink">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                {" / "}
                {String(VILLAS.length).padStart(2, "0")}
              </p>

              {/* Hex pagination dots */}
              <div className="flex items-center gap-3">
                {VILLAS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => swiperRef.current?.slideToLoop(i)}
                    aria-label={`Go to villa ${i + 1}`}
                  >
                    <svg width="28" height="32" viewBox="0 0 100 116">
                      <polygon
                        points="50,3 95,27 95,89 50,113 5,89 5,27"
                        fill={i === activeIndex ? "#8B7A4F" : "none"}
                        stroke="#8B7A4F"
                        strokeWidth="4"
                        className="transition-all duration-300"
                      />
                    </svg>
                  </button>
                ))}
              </div>

              {/* Arrow buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="w-12 h-12 border border-bronze/40 hover:border-bronze flex items-center justify-center text-bronze transition-colors duration-300"
                  aria-label="Previous villa"
                >
                  ←
                </button>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="w-12 h-12 border border-bronze/40 hover:border-bronze flex items-center justify-center text-bronze transition-colors duration-300"
                  aria-label="Next villa"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VillaCard({
  villa,
  isActive,
}: {
  villa: (typeof VILLAS)[0];
  isActive: boolean;
}) {
  return (
    <div
      className={`group flex flex-col transition-all duration-500 ${
        isActive ? "opacity-100 scale-100" : "opacity-70 scale-[0.97]"
      }`}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={villa.image}
          alt={villa.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
        <div className="absolute bottom-4 left-4 flex gap-2">
          <span className="bg-white/90 text-ink text-[10px] tracking-[0.2em] uppercase px-3 py-1 font-sans">
            {villa.bedrooms} Bedrooms
          </span>
          <span className="bg-white/90 text-ink text-[10px] tracking-[0.2em] uppercase px-3 py-1 font-sans">
            {villa.bathrooms} Baths
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="pt-6 pb-4 flex flex-col gap-3">
        <p className="text-[10px] tracking-[0.25em] uppercase text-bronze font-sans">
          {villa.type}
        </p>
        <h3 className="font-serif text-2xl text-ink">{villa.name}</h3>
        <p className="text-xs tracking-wide text-neutral-500 font-sans">
          {villa.location}
        </p>
        <ul className="flex flex-col gap-1 mt-2">
          {villa.features.map((f) => (
            <li
              key={f}
              className="text-sm text-neutral-600 font-sans flex items-start gap-2"
            >
              <span className="text-bronze mt-[3px] text-xs">✦</span>
              {f}
            </li>
          ))}
        </ul>
        <p className="text-xs text-neutral-400 font-sans mt-1">
          From <span className="text-ink font-medium">{villa.priceFrom}</span> / night
        </p>
        <div className="mt-3 flex flex-col gap-2">
          <a
            href={`/villas/${villa.slug}`}
            className="border border-bronze text-bronze hover:bg-bronze hover:text-white text-[11px] tracking-[0.25em] uppercase px-8 py-3 text-center transition-all duration-500 font-sans"
          >
            Explore This Villa
          </a>
          <a
            href={`mailto:info@galapagos-hotel.com?subject=${encodeURIComponent(`Reservation Request — ${villa.name}`)}&body=${encodeURIComponent(`Hello Elena & Esteban,\n\nI would like to inquire about reserving:\n\nVilla: ${villa.name}\n\nPlease let me know availability and pricing.\n\nThank you!`)}`}
            className="text-center text-[10px] tracking-[0.2em] uppercase text-neutral-400 hover:text-bronze font-sans transition-colors duration-300 py-1"
          >
            Reserve by email →
          </a>
        </div>
      </div>
    </div>
  );
}
