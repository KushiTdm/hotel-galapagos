"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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

function ReviewCard({ r }: { r: Review }) {
  return (
    <div className="bg-white p-8 flex flex-col gap-4 h-full">
      <StarRow />
      <blockquote className="font-serif italic text-lg text-ink leading-[1.65] flex-1">
        "{r.quote}"
      </blockquote>
      <div className="border-t border-neutral-100 pt-4">
        <p className="font-sans text-sm font-medium text-ink">{r.name}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[10px] tracking-[0.15em] uppercase text-bronze font-sans">{r.date}</span>
          <span className="text-neutral-300 text-xs">·</span>
          <span className="text-[10px] tracking-[0.15em] uppercase text-neutral-400 font-sans">{r.type}</span>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  if (reviews.length <= 3) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <ReviewCard key={r.name} r={r} />
        ))}
      </div>
    );
  }

  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={24}
      loop
      autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
      breakpoints={{
        768: { slidesPerView: 2 },
        1280: { slidesPerView: 3 },
      }}
      className="!pb-2"
    >
      {reviews.map((r) => (
        <SwiperSlide key={r.name} className="h-auto self-stretch">
          <ReviewCard r={r} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
