"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/lib/LanguageContext";
import { T } from "@/lib/translations";

const WA_NUMBER = "593993211049";

const VILLAS = [
  {
    name: "Yellow Heron House",
    slug: "yellow-heron-house",
    bedrooms: 3,
    bathrooms: 3,
    guests: 8,
    priceFrom: "€417",
    image: "/images/villa-yellow-heron.jpg",
    imageAlt: "Yellow Heron House — living room with direct ocean view",
  },
  {
    name: "Sandy Feet House",
    slug: "sandy-feet-house",
    bedrooms: 2,
    bathrooms: 2,
    guests: 6,
    priceFrom: "€289",
    image: "/images/villa-sandy-feet.jpg",
    imageAlt: "Sandy Feet House — master bedroom with ocean view",
  },
  {
    name: "Flip Flop House",
    slug: "flip-flop-house",
    bedrooms: 2,
    bathrooms: 2,
    guests: 5,
    priceFrom: "€166",
    image: "/images/villa-flip-flop.jpg",
    imageAlt: "Flip Flop House — spacious living and dining room",
  },
];

export default function VillasSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const { lang } = useLanguage();
  const tr = T[lang];

  return (
    <section id="villas" className="py-12 md:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <SectionHeading
          eyebrow={tr.villas_eyebrow}
          title={tr.villas_title}
          subtitle={tr.villas_subtitle}
        />

        <div className="mt-8 md:mt-16">
          {/* Desktop: plain grid */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {VILLAS.map((villa) => (
              <VillaCard
                key={villa.name}
                villa={villa}
                isActive
              />
            ))}
          </div>

          {/* Mobile / tablet: autoplay carousel */}
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
                  <VillaCard
                    villa={villa}
                    isActive={i === activeIndex}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Mobile navigation */}
            <div className="flex items-center justify-between mt-6 md:mt-10">
              <p className="font-serif text-4xl text-ink/30">
                <span className="text-ink">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                {" / "}
                {String(VILLAS.length).padStart(2, "0")}
              </p>

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
  const { lang } = useLanguage();
  const tr = T[lang];
  const waMsg =
    lang === "es"
      ? `Hola Elena y Esteban!\n\nMe gustaria reservar *${villa.name}*.\n\nPodrian confirmar disponibilidad y precio?\n\nGracias!`
      : `Hello Elena & Esteban!\n\nI'd like to book *${villa.name}*.\n\nCould you please confirm availability and pricing?\n\nThank you!`;
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMsg)}`;

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
            {villa.bedrooms} {tr.villas_bedrooms}
          </span>
          <span className="bg-white/90 text-ink text-[10px] tracking-[0.2em] uppercase px-3 py-1 font-sans">
            {villa.bathrooms} {tr.villas_baths}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4 pb-2 flex flex-col gap-2 md:gap-3">
        <p className="text-[10px] tracking-[0.25em] uppercase text-bronze font-sans">
          {tr.villa_types[villa.slug]}
        </p>
        <h3 className="font-serif text-2xl text-ink">{villa.name}</h3>
        <p className="text-xs tracking-wide text-neutral-500 font-sans">
          {tr.villa_locations[villa.slug]}
        </p>
        <ul className="flex flex-col gap-1">
          {tr.villa_features[villa.slug].map((f) => (
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
          {tr.villas_from}{" "}
          <span className="text-ink font-medium">{villa.priceFrom}</span>{" "}
          {tr.villas_night}
        </p>

        <div className="mt-2 flex flex-col gap-2">
          <a
            href={`/villas/${villa.slug}`}
            className="border border-bronze text-bronze hover:bg-bronze hover:text-white text-[11px] tracking-[0.25em] uppercase px-8 py-3 text-center transition-all duration-500 font-sans"
          >
            {tr.villas_explore}
          </a>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bronze hover:bg-bronze-dark text-white text-[11px] tracking-[0.25em] uppercase px-8 py-3 text-center transition-all duration-500 font-sans"
          >
            {tr.reserve}
          </a>
        </div>
      </div>
    </div>
  );
}
