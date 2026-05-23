"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { T } from "@/lib/translations";

const WA_NUMBER = "593993211049";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  villa: {
    name: string;
    slug: string;
    priceFrom: string;
    image: string;
    imageAlt: string;
    bedrooms: number;
    bathrooms: number;
    guests: number;
  };
}

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export default function ReservationModal({ isOpen, onClose, villa }: ReservationModalProps) {
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("2");
  const { lang } = useLanguage();
  const tr = T[lang];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const guestIdx = Math.min(parseInt(guests, 10) - 1, tr.villas_guest_options.length - 1);
  const guestLabel = tr.villas_guest_options[guestIdx] ?? guests;
  const waMsg = tr.villas_whatsapp_msg(villa.name, checkin || "—", checkout || "—", guestLabel);
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMsg)}`;

  const labelClass = "text-[9px] tracking-[0.25em] uppercase text-neutral-400 font-sans block mb-1";
  const inputClass = "w-full text-ink text-sm font-sans outline-none bg-transparent border-b border-neutral-200 pb-1 cursor-pointer focus:border-bronze transition-colors duration-200";

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Reserve ${villa.name}`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative z-10 bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-ink transition-colors duration-200 z-10"
          aria-label="Close"
        >
          <span className="text-xl font-light">✕</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left — villa info */}
          <div className="bg-cream p-6 md:p-8 flex flex-col gap-4">
            <div className="overflow-hidden aspect-[4/3]">
              <Image
                src={villa.image}
                alt={villa.imageAlt}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[10px] tracking-[0.25em] uppercase text-bronze font-sans">
                {tr.villa_types[villa.slug]}
              </p>
              <h3 className="font-serif text-2xl text-ink">{villa.name}</h3>
              <p className="text-xs text-neutral-500 font-sans">
                {tr.villa_locations[villa.slug]}
              </p>
            </div>

            <div className="flex gap-3 text-[10px] tracking-[0.2em] uppercase text-neutral-500 font-sans">
              <span>{villa.bedrooms} {tr.villas_bedrooms}</span>
              <span className="text-neutral-300">·</span>
              <span>{villa.bathrooms} {tr.villas_baths}</span>
              <span className="text-neutral-300">·</span>
              <span>Max {villa.guests}</span>
            </div>

            <ul className="flex flex-col gap-1.5 mt-1">
              {tr.villa_features[villa.slug].map((f) => (
                <li key={f} className="text-xs text-neutral-600 font-sans flex items-start gap-2">
                  <span className="text-bronze mt-0.5 text-[9px]">✦</span>
                  {f}
                </li>
              ))}
            </ul>

            <p className="text-xs text-neutral-400 font-sans mt-auto pt-4 border-t border-neutral-200">
              {tr.villas_from}{" "}
              <span className="text-ink font-medium text-sm">{villa.priceFrom}</span>{" "}
              {tr.villas_night}
            </p>
          </div>

          {/* Right — booking form */}
          <div className="p-6 md:p-8 flex flex-col gap-5">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-bronze font-sans mb-1">
                {lang === "es" ? "Reserva tu estancia" : "Reserve Your Stay"}
              </p>
              <h4 className="font-serif text-xl text-ink">
                {villa.name}
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>{tr.villas_checkin_label}</label>
                <input
                  type="date"
                  value={checkin}
                  onChange={(e) => setCheckin(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>{tr.villas_checkout_label}</label>
                <input
                  type="date"
                  value={checkout}
                  onChange={(e) => setCheckout(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>{tr.villas_guests_label}</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className={inputClass}
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={String(n)}>
                    {tr.villas_guest_options[n - 1]}
                  </option>
                ))}
              </select>
            </div>

            {/* Message preview */}
            <div className="bg-cream p-4 text-[11px] text-neutral-500 font-sans leading-relaxed border-l-2 border-bronze">
              <p className="whitespace-pre-wrap">{waMsg}</p>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-ink hover:bg-ink-light text-white text-[11px] tracking-[0.25em] uppercase px-8 py-4 transition-all duration-500 font-sans mt-auto"
            >
              <WhatsAppIcon />
              {tr.villas_book_whatsapp}
            </a>

            <p className="text-[10px] text-neutral-400 font-sans text-center -mt-3">
              {lang === "es"
                ? "Serás redirigido a WhatsApp"
                : "You'll be redirected to WhatsApp"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
