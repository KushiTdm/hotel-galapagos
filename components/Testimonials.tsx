"use client";

import SectionHeading from "./SectionHeading";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { useLanguage } from "@/lib/LanguageContext";
import { T } from "@/lib/translations";

const TESTIMONIALS = [
  {
    quote:
      "This home is absolute perfection! Comfortable and outfitted with everything you need. Merely steps away from the heart of the island — restaurants, shops, beach. The hosts provide water so you have no worries at all.",
    name: "Julie Wessen",
    title: "Flip Flop House · July 2025",
  },
  {
    quote:
      "From the sofa, we could watch sea lions and iguanas strolling along the beach through the window — an unforgettable experience. The service was excellent and the facilities were fully equipped. We will definitely stay here again.",
    name: "Minjung",
    title: "Sandy Feet House · March 2025",
  },
  {
    quote:
      "Our family LOVED this home! The most beautiful, immaculately clean, and comfortable home we stayed in on the islands. The beach is perfect in every way and steps from the door. We'd do it again in a heartbeat.",
    name: "Christian Francis",
    title: "Yellow Heron House · December 2024",
  },
  {
    quote:
      "Waking up to the sound of the ocean and spotting wildlife right from the terrace is something we'll never forget. Every detail was thoughtfully prepared. Truly a home away from home.",
    name: "Amélie Fontaine",
    title: "Sandy Feet House · January 2025",
  },
  {
    quote:
      "The location is unbeatable and the villa exceeded every expectation. Crystal-clear waters, incredible sunsets, and warm hospitality — the Galápagos experience we'd always dreamed of.",
    name: "James & Claire Morton",
    title: "Yellow Heron House · February 2025",
  },
];

export default function Testimonials() {
  const { lang } = useLanguage();
  const tr = T[lang];

  return (
    <section className="py-12 md:py-32 bg-cream-dark overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <SectionHeading
          eyebrow={tr.testimonials_eyebrow}
          title={tr.testimonials_title}
          subtitle={tr.testimonials_subtitle}
        />
      </div>

      <div className="mt-8 md:mt-16 flex flex-col antialiased items-center justify-center relative">
        <InfiniteMovingCards
          items={TESTIMONIALS}
          direction="left"
          speed="slow"
          pauseOnHover
        />
      </div>
    </section>
  );
}
