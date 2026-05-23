"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { T } from "@/lib/translations";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  Instagram: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  Facebook: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  WhatsApp: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  ),
};

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", title: "Instagram (coming soon)" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100064153594670",
    title: "Galápagos Hotel on Facebook",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/593993211049",
    title: "Chat on WhatsApp",
  },
];

const WA_NUMBER = "593993211049";

export default function Footer() {
  const { lang, setLang } = useLanguage();
  const tr = T[lang];
  const waReserveUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(tr.whatsapp_general_msg)}`;

  const FOOTER_LINKS = {
    [tr.footer_col_villas]: [
      { label: "Yellow Heron House", href: "#villas" },
      { label: "Sandy Feet House", href: "#villas" },
      { label: "Flip Flop House", href: "#villas" },
    ],
    [tr.footer_col_explore]: [
      { label: tr.footer_experience, href: "#experience" },
      { label: tr.footer_amenities, href: "#amenities" },
      { label: tr.footer_location, href: "#location" },
    ],
    [tr.footer_col_stay]: [
      { label: tr.footer_reserve, href: waReserveUrl },
      { label: tr.footer_contact_owners, href: "mailto:info@galapagos-hotel.com" },
      { label: tr.footer_airbnb, href: "#" },
    ],
    [tr.footer_col_info]: [
      { label: tr.footer_getting_here, href: "#location" },
      { label: tr.footer_wildlife, href: "#experience" },
      { label: tr.footer_puerto, href: "#location" },
    ],
  };

  return (
    <footer className="bg-cream-dark border-t border-neutral-200">
      {/* Main footer */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-24">
        {/* Mobile layout */}
        <div className="md:hidden flex flex-col gap-6">
          {/* Brand row */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="font-serif text-xl tracking-[0.3em] uppercase text-ink"
              >
                Galápagos
                <span className="block text-[11px] tracking-[0.45em] font-sans font-light mt-[-2px]">
                  HOTEL
                </span>
              </Link>
              <a href="tel:+593993211049" className="text-xs text-neutral-600 font-sans">+593 993 211 049</a>
              <a href="mailto:info@galapagos-hotel.com" className="text-xs text-neutral-600 font-sans">info@galapagos-hotel.com</a>
            </div>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  title={s.title}
                  className="w-8 h-8 rounded-full border border-bronze/50 flex items-center justify-center text-bronze hover:bg-bronze hover:text-white transition-all duration-300"
                >
                  {SOCIAL_ICONS[s.label]}
                </a>
              ))}
            </div>
          </div>
          {/* Link columns 2x2 */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-5">
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title} className="flex flex-col gap-2">
                <p className="text-[9px] tracking-[0.3em] uppercase text-bronze font-sans font-medium">
                  {title}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.href.startsWith("https://wa.me") && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                        className="text-xs text-neutral-600 hover:text-ink font-sans transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="col-span-1 lg:col-span-1 flex flex-col gap-6">
            <Link
              href="/"
              className="font-serif text-xl tracking-[0.3em] uppercase text-ink"
            >
              Galápagos
              <span className="block text-[11px] tracking-[0.45em] font-sans font-light mt-[-2px]">
                HOTEL
              </span>
            </Link>
            <p className="text-sm leading-[1.8] text-neutral-600 font-sans max-w-xs">
              {tr.footer_desc}
            </p>
            <div className="flex flex-col gap-1">
              <a href="tel:+593993211049" className="text-sm text-neutral-600 hover:text-ink font-sans transition-colors duration-200">
                +593 993 211 049
              </a>
              <a href="mailto:info@galapagos-hotel.com" className="text-sm text-neutral-600 hover:text-ink font-sans transition-colors duration-200">
                info@galapagos-hotel.com
              </a>
            </div>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  title={s.title}
                  className="w-9 h-9 rounded-full border border-bronze/50 flex items-center justify-center text-bronze hover:bg-bronze hover:text-white transition-all duration-300"
                >
                  {SOCIAL_ICONS[s.label]}
                </a>
              ))}
            </div>
          </div>
          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-4">
              <p className="text-[10px] tracking-[0.3em] uppercase text-bronze font-sans font-medium">
                {title}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.href.startsWith("https://wa.me") && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      className="text-sm text-neutral-600 hover:text-ink font-sans transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-200">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-[11px] tracking-[0.15em] text-neutral-400 font-sans">
            {tr.footer_copyright(new Date().getFullYear())}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[11px] tracking-[0.15em] uppercase text-neutral-400 hover:text-bronze font-sans transition-colors duration-200"
            >
              {tr.footer_privacy}
            </a>
            <a
              href="#"
              className="text-[11px] tracking-[0.15em] uppercase text-neutral-400 hover:text-bronze font-sans transition-colors duration-200"
            >
              {tr.footer_terms}
            </a>
            <div className="flex items-center gap-2 text-[11px] tracking-[0.15em] font-sans">
              <button
                onClick={() => setLang("en")}
                className={`uppercase transition-colors duration-200 ${lang === "en" ? "text-bronze" : "text-neutral-400 hover:text-bronze"}`}
              >
                EN
              </button>
              <span className="text-neutral-300">|</span>
              <button
                onClick={() => setLang("es")}
                className={`uppercase transition-colors duration-200 ${lang === "es" ? "text-bronze" : "text-neutral-400 hover:text-bronze"}`}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
