"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function FullBleedCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

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
        className="relative z-10 h-full flex flex-col justify-end max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24"
      >
        <p className="text-[11px] tracking-[0.35em] uppercase text-white/60 font-sans mb-4">
          Your Galápagos Escape Awaits
        </p>
        <h2 className="font-serif text-4xl md:text-6xl text-white italic max-w-2xl leading-tight mb-8">
          Unforgettable stays in
          <br />
          the world's last Eden
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#book"
            className="border border-white/80 text-white text-[11px] tracking-[0.3em] uppercase px-10 py-4 font-sans hover:bg-white hover:text-ink transition-all duration-500 text-center"
          >
            Reserve a Villa
          </a>
          <a
            href="#villas"
            className="text-white/70 hover:text-white text-[11px] tracking-[0.3em] uppercase px-10 py-4 font-sans transition-colors duration-300 text-center flex items-center gap-3"
          >
            View All Villas
            <span className="block w-6 h-px bg-current" />
          </a>
        </div>
      </div>
    </section>
  );
}
