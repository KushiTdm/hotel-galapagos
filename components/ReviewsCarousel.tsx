"use client";

import React, { useEffect, useRef, useState } from "react";

type Review = {
  name: string;
  date: string;
  type: string;
  quote: string;
};

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

export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      scrollerRef.current!.appendChild(item.cloneNode(true));
    });
    scrollerRef.current.style.animationDuration = "80s";
    setStart(true);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
    >
      <ul
        ref={scrollerRef}
        className={`flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-2 ${start ? "animate-scroll" : ""} hover:[animation-play-state:paused]`}
      >
        {reviews.map((r, idx) => (
          <li
            key={idx}
            className="w-[280px] md:w-[380px] shrink-0 bg-white p-5 md:p-7 flex flex-col gap-3"
          >
            <StarRow />
            <blockquote className="font-serif italic text-base text-ink leading-[1.55] flex-1">
              &ldquo;{r.quote}&rdquo;
            </blockquote>
            <div className="border-t border-neutral-100 pt-3">
              <p className="font-sans text-sm font-medium text-ink">{r.name}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] tracking-[0.15em] uppercase text-bronze font-sans">{r.date}</span>
                <span className="text-neutral-300 text-xs">·</span>
                <span className="text-[10px] tracking-[0.15em] uppercase text-neutral-400 font-sans">{r.type}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
