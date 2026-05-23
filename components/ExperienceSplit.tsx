"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/lib/LanguageContext";
import { T } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSplit() {
  const { lang } = useLanguage();
  const tr = T[lang];

  const EXPERIENCES = [
    {
      eyebrow: tr.exp1_eyebrow,
      title: tr.exp1_title,
      subtitle: tr.exp1_subtitle,
      body: tr.exp1_body,
      image: "/images/exp-wildlife.jpg",
      imageAlt: "Blue-footed booby on lava rocks at Las Tintoreras, Galápagos",
      imageLeft: true,
      cta: { label: tr.exp1_cta, href: "#location" },
    },
    {
      eyebrow: tr.exp2_eyebrow,
      title: tr.exp2_title,
      subtitle: tr.exp2_subtitle,
      body: tr.exp2_body,
      image: "/images/exp-beach-villa.jpg",
      imageAlt: "Ocean-view master bedroom at Sandy Feet House, direct beach access",
      imageLeft: false,
      cta: { label: tr.exp2_cta, href: "#villas" },
    },
  ];

  return (
    <section id="experience" className="py-12 md:py-32">
      {EXPERIENCES.map((exp, i) => (
        <ExperienceItem key={i} {...exp} />
      ))}
    </section>
  );
}

function ExperienceItem({
  eyebrow,
  title,
  subtitle,
  body,
  image,
  imageAlt,
  imageLeft,
  cta,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  body: string;
  image: string;
  imageAlt: string;
  imageLeft: boolean;
  cta: { label: string; href: string };
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reducedMotion) return;

      gsap.from(imageRef.current, {
        yPercent: imageLeft ? -10 : 10,
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
        x: imageLeft ? 40 : -40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <div
      ref={sectionRef}
      className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-10 md:mb-32"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
          imageLeft ? "" : "lg:[direction:rtl]"
        }`}
      >
        {/* Image */}
        <div className="lg:col-span-7 overflow-hidden aspect-video lg:aspect-auto lg:h-[560px] lg:[direction:ltr]">
          <div ref={imageRef} className="relative w-full h-full will-change-transform">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center hover:scale-105 transition-transform duration-[1200ms] ease-out"
            />
          </div>
        </div>

        {/* Text */}
        <div
          ref={textRef}
          className="lg:col-span-5 lg:[direction:ltr] flex flex-col gap-6"
        >
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            align="left"
          />
          <p className="text-base leading-[1.8] text-neutral-600 font-sans max-w-md">
            {body}
          </p>
          <a
            href={cta.href}
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-bronze hover:text-bronze-dark font-sans transition-colors duration-300 group mt-2"
          >
            {cta.label}
            <span className="block w-8 h-px bg-bronze group-hover:w-12 transition-all duration-500" />
          </a>
        </div>
      </div>
    </div>
  );
}
