"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Header from "./Header";
import Footer from "./Footer";
import ReviewsCarousel from "./ReviewsCarousel";
import { useLanguage } from "@/lib/LanguageContext";
import { T } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

const WA_NUMBER = "593993211049";

export interface VillaPageData {
  villa: {
    name: string;
    slug: string;
    tagline: string;
    type: string;
    guests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
    checkin: string;
    checkout: string;
    priceStandard: string;
    priceChristmas: string;
    christmasPeriod: string;
    additionalGuest?: string;
    heroImage: string;
    heroAlt: string;
    priceFrom: string;
    gallery: { src: string; alt: string }[];
  };
  highlights: string[];
  amenities: { category: string; items: string[] }[];
  reviews: { name: string; date: string; type: string; quote: string }[];
  aboutTitle: string;
  aboutText1: string;
  aboutText2?: string;
  houseRules: { label: string; value: string }[];
  ctaSubline: string;
  ctaHeadline: string;
}

function StarRow() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#8B7A4F" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function VillaPageLayout({ data }: { data: VillaPageData }) {
  const { villa, highlights, amenities, reviews, aboutTitle, aboutText1, aboutText2, houseRules, ctaSubline, ctaHeadline } = data;
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();
  const tr = T[lang];

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

  const waMsg = `Hello Elena & Esteban!\n\nI'd like to book *${villa.name}*.\n\nCould you please confirm availability and pricing?\n\nThank you!`;
  const waMsgEs = `Hola Elena y Esteban!\n\nMe gustaria reservar *${villa.name}*.\n\nPodrian confirmar disponibilidad y precio?\n\nGracias!`;
  const reserveWaUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lang === "es" ? waMsgEs : waMsg)}`;

  const titleLines = aboutTitle.split("\n");
  const ctaLines = ctaHeadline.split("\n");

  return (
    <main ref={heroRef}>
      <Header />

      {/* Hero */}
      <section className="relative h-screen min-h-[560px] overflow-hidden flex flex-col justify-end">
        <div ref={imageRef} className="absolute inset-0 will-change-transform">
          <Image
            src={villa.heroImage}
            alt={villa.heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        <div className="hero-text relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-12 md:pb-20 w-full">
          <Link
            href="/#villas"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-[10px] tracking-[0.3em] uppercase font-sans mb-5 transition-colors duration-300"
          >
            <span className="block w-5 h-px bg-current" />
            {lang === "es" ? "Nuestras Villas" : "Our Villas"}
          </Link>
          <p className="text-white/60 text-[11px] tracking-[0.35em] uppercase font-sans mb-2">
            {villa.type}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl italic text-white leading-[1.05] mb-2">
            {villa.name}
          </h1>
          <p className="font-serif italic text-lg md:text-xl text-white/75">
            {villa.tagline}
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-ink text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-4 flex flex-wrap gap-5 md:gap-0 md:divide-x divide-white/20">
          {[
            { label: lang === "es" ? "Huéspedes" : "Guests", value: `Max ${villa.guests}` },
            { label: lang === "es" ? "Dormitorios" : "Bedrooms", value: villa.bedrooms },
            { label: lang === "es" ? "Camas" : "Beds", value: villa.beds },
            { label: lang === "es" ? "Baños" : "Bathrooms", value: villa.bathrooms },
            { label: lang === "es" ? "Llegada" : "Check-in", value: villa.checkin },
            { label: lang === "es" ? "Salida" : "Check-out", value: villa.checkout },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-0.5 md:px-6 first:pl-0 last:pr-0">
              <span className="text-[9px] tracking-[0.3em] uppercase text-white/50 font-sans">{s.label}</span>
              <span className="text-sm font-sans text-white font-light">{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Description + Gallery */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <p className="text-[10px] tracking-[0.35em] uppercase text-bronze font-sans mb-3">
                  {lang === "es" ? "Sobre esta villa" : "About This Villa"}
                </p>
                <h2 className="font-serif text-3xl md:text-4xl italic text-ink leading-tight mb-4">
                  {titleLines.map((line, i) => (
                    <span key={i}>{line}{i < titleLines.length - 1 && <br />}</span>
                  ))}
                </h2>
                <p className="text-sm leading-[1.9] text-neutral-600 font-sans">
                  {aboutText1}
                </p>
                {aboutText2 && (
                  <p className="text-sm leading-[1.9] text-neutral-600 font-sans mt-3">
                    {aboutText2}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2 border-t border-neutral-100 pt-6">
                <p className="text-[10px] tracking-[0.3em] uppercase text-bronze font-sans mb-1">
                  {lang === "es" ? "Puntos clave" : "Key Highlights"}
                </p>
                {highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2">
                    <span className="text-bronze mt-1 shrink-0">
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
                        <polygon points="5,0 6.5,3.5 10,4 7,7 7.5,10.5 5,8.5 2.5,10.5 3,7 0,4 3.5,3.5" />
                      </svg>
                    </span>
                    <p className="text-xs font-sans text-neutral-600">{h}</p>
                  </div>
                ))}
              </div>

              <a
                href={reserveWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start bg-bronze hover:bg-bronze-dark text-white text-[11px] tracking-[0.3em] uppercase px-8 py-3 font-sans transition-colors duration-500"
              >
                {lang === "es" ? "Reservar esta villa" : "Reserve This Villa"}
              </a>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-2 overflow-hidden aspect-[16/9]">
                  <Image
                    src={villa.gallery[0].src}
                    alt={villa.gallery[0].alt}
                    width={900}
                    height={506}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1200ms] ease-out"
                  />
                </div>
                {villa.gallery.slice(1).map((img) => (
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
      <section className="py-10 md:py-20 bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-[10px] tracking-[0.35em] uppercase text-bronze font-sans mb-1">
            {lang === "es" ? "Qué incluye" : "What's Included"}
          </p>
          <h2 className="font-serif text-2xl md:text-3xl italic text-ink mb-8">
            {lang === "es" ? "Equipamiento" : "Amenities"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((group) => (
              <div key={group.category}>
                <p className="text-[10px] tracking-[0.3em] uppercase text-bronze font-sans mb-3">
                  {group.category}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-xs font-sans text-neutral-600 flex items-start gap-2">
                      <span className="text-bronze mt-[4px] shrink-0 text-[7px]">■</span>
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
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <p className="text-[10px] tracking-[0.35em] uppercase text-bronze font-sans mb-1">
                {lang === "es" ? "Precios" : "Pricing"}
              </p>
              <h2 className="font-serif text-2xl md:text-3xl italic text-ink mb-7">
                {lang === "es" ? "Tarifas" : "Rates"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-neutral-200 p-5 flex flex-col gap-2">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-sans">
                    {lang === "es" ? "Tarifa estándar" : "Standard Rate"}
                  </p>
                  <p className="font-serif text-3xl text-ink">{villa.priceStandard}</p>
                  <p className="text-[11px] text-neutral-500 font-sans">
                    {lang === "es" ? "por noche" : "per night"}
                  </p>
                  {villa.additionalGuest && (
                    <p className="text-xs text-neutral-400 font-sans mt-1">{villa.additionalGuest}</p>
                  )}
                </div>
                <div className="border-2 border-bronze p-5 flex flex-col gap-2 bg-cream">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-bronze font-sans">
                    {lang === "es" ? "Navidad y Año Nuevo" : "Christmas & New Year"}
                  </p>
                  <p className="font-serif text-3xl text-ink">{villa.priceChristmas}</p>
                  <p className="text-[11px] text-neutral-500 font-sans">
                    {lang === "es" ? "por noche" : "per night"}
                  </p>
                  <p className="text-[10px] text-neutral-400 font-sans mt-1">{villa.christmasPeriod}</p>
                  {villa.additionalGuest && (
                    <p className="text-xs text-neutral-400 font-sans">{villa.additionalGuest}</p>
                  )}
                </div>
              </div>

              <div className="mt-6 p-5 bg-cream flex flex-col gap-3">
                <p className="text-[10px] tracking-[0.3em] uppercase text-bronze font-sans">
                  {lang === "es" ? "Política de cancelación" : "Cancellation Policy"}
                </p>
                <p className="text-sm font-sans text-neutral-600 leading-relaxed">
                  <strong className="text-ink">
                    {lang === "es" ? "Reembolso del 100%" : "100% refund"}
                  </strong>{" "}
                  {lang === "es"
                    ? "si se cancela 60 días o más antes de la llegada."
                    : "if cancelled 60 days or more before arrival."}
                </p>
                <p className="text-sm font-sans text-neutral-600 leading-relaxed">
                  <strong className="text-ink">
                    {lang === "es" ? "Sin reembolso" : "Non-refundable"}
                  </strong>{" "}
                  {lang === "es"
                    ? "si se cancela dentro de los 60 días de la llegada."
                    : "if cancelled within 60 days of arrival."}
                </p>
                <p className="text-sm font-sans text-neutral-600 leading-relaxed">
                  {lang === "es"
                    ? "Pago completo requerido al reservar. Sin depósito de seguridad."
                    : "Full payment required at time of reservation. No security deposit required."}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <p className="text-[10px] tracking-[0.35em] uppercase text-bronze font-sans mb-1">
                {lang === "es" ? "Normas y políticas" : "Rules & Policies"}
              </p>
              <h2 className="font-serif text-2xl md:text-3xl italic text-ink mb-7">
                {lang === "es" ? "Normas de la casa" : "House Rules"}
              </h2>
              <div className="flex flex-col divide-y divide-neutral-100">
                {houseRules.map((r) => (
                  <div key={r.label} className="flex justify-between items-center py-3">
                    <span className="text-sm font-sans text-neutral-500">{r.label}</span>
                    <span className="text-sm font-sans text-ink">{r.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={reserveWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-bronze hover:bg-bronze-dark text-white text-[11px] tracking-[0.3em] uppercase px-8 py-4 font-sans transition-colors duration-500 text-center"
                >
                  {lang === "es" ? `Reservar ${villa.name}` : `Reserve ${villa.name}`}
                </a>
                <a
                  href="tel:+593993211049"
                  className="border border-bronze text-bronze hover:bg-bronze hover:text-white text-[11px] tracking-[0.3em] uppercase px-8 py-4 font-sans transition-all duration-500 text-center"
                >
                  {lang === "es" ? "Llamar +593 993 211 049" : "Call +593 993 211 049"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-10 md:py-20 bg-cream-dark">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-[10px] tracking-[0.35em] uppercase text-bronze font-sans mb-1">
            {lang === "es" ? "Opiniones de huéspedes" : "Guest Reviews"}
          </p>
          <h2 className="font-serif text-2xl md:text-3xl italic text-ink mb-8">
            {lang === "es" ? "Lo que dicen nuestros huéspedes" : "What Our Guests Say"}
          </h2>
          <ReviewsCarousel reviews={reviews} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-ink text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase text-white/50 font-sans mb-2">
              {ctaSubline}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl italic text-white leading-tight">
              {ctaLines.map((line, i) => (
                <span key={i}>{line}{i < ctaLines.length - 1 && <br />}</span>
              ))}
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={reserveWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bronze hover:bg-bronze-dark text-white text-[11px] tracking-[0.3em] uppercase px-8 py-4 font-sans transition-colors duration-500 text-center"
            >
              {lang === "es" ? "Reservar ahora" : "Reserve Now"}
            </a>
            <Link
              href="/#villas"
              className="border border-white/40 text-white hover:bg-white hover:text-ink text-[11px] tracking-[0.3em] uppercase px-8 py-4 font-sans transition-all duration-500 text-center"
            >
              {lang === "es" ? "Ver todas las villas" : "View All Villas"}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
