"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function GalapagosParallax() {
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
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(
        textRef.current!.querySelectorAll(".reveal-line"),
        {
          opacity: 0,
          y: 30,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 70%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[80vh] min-h-[560px] overflow-hidden flex items-center justify-center"
    >
      {/* Parallax background */}
      <div
        ref={imageRef}
        className="absolute inset-[-20%] will-change-transform"
      >
        <Image
          src="/images/parallax.jpg"
          alt="Hammerhead sharks in the crystal-clear waters of the Galápagos"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div ref={textRef} className="relative z-10 text-center px-6 max-w-3xl">
        <p className="reveal-line text-[11px] tracking-[0.35em] uppercase text-white/60 font-sans mb-6">
          Galápagos Time
        </p>
        <h2 className="reveal-line font-serif text-4xl md:text-6xl lg:text-7xl italic text-white leading-[1.1] mb-8">
          Time moves differently
          <br />
          <em className="not-italic font-light">here</em>
        </h2>
        <p className="reveal-line font-serif italic text-xl md:text-2xl text-white/75 max-w-xl mx-auto mb-10">
          Where giant tortoises set the pace and the only agenda is the tide
        </p>
        <a
          href="#location"
          className="reveal-line inline-block border border-white/60 text-white text-[11px] tracking-[0.3em] uppercase px-10 py-4 font-sans hover:bg-white hover:text-ink transition-all duration-500"
        >
          Plan Your Visit
        </a>
      </div>
    </section>
  );
}
