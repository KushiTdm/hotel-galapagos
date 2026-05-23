"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "@/lib/LanguageContext";
import { T } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

const WA_NUMBER = "593993211049";

export default function FullBleedCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();
  const tr = T[lang];
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(tr.whatsapp_general_msg)}`;

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reducedMotion) return;

      gsap.to(imageRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(textRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[75vh] min-h-[500px] overflow-hidden"
    >
      <div
        ref={imageRef}
        className="absolute inset-[-15%] will-change-transform"
      >
        <Image
          src="/images/cta-villa.jpg"
          alt="Sandy Feet House — beachfront villa at sunset with fire pit and loungers"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div
        ref={textRef}
        className="relative z-10 h-full flex flex-col justify-end max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-10 md:pb-24"
      >
        <p className="text-[11px] tracking-[0.35em] uppercase text-white/60 font-sans mb-4">
          {tr.cta_eyebrow}
        </p>
        <h2 className="font-serif text-3xl md:text-6xl text-white italic max-w-2xl leading-tight mb-5 md:mb-8">
          {tr.cta_h2_line1}
          <br />
          {tr.cta_h2_line2}
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/80 text-white text-[11px] tracking-[0.3em] uppercase px-10 py-4 font-sans hover:bg-white hover:text-ink transition-all duration-500 text-center"
          >
            {tr.cta_reserve}
          </a>
          <a
            href="#villas"
            className="text-white/70 hover:text-white text-[11px] tracking-[0.3em] uppercase px-10 py-4 font-sans transition-colors duration-300 text-center flex items-center gap-3"
          >
            {tr.cta_view}
            <span className="block w-6 h-px bg-current" />
          </a>
        </div>
      </div>
    </section>
  );
}
