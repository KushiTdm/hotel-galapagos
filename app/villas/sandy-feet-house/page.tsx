"use client";

import VillaPageLayout, { type VillaPageData } from "@/components/VillaPageLayout";

const DATA: VillaPageData = {
  villa: {
    name: "Sandy Feet House",
    slug: "sandy-feet-house",
    tagline: "Ocean Front Beautiful House",
    type: "Beachfront Vacation Home",
    guests: 6,
    bedrooms: 2,
    beds: 6,
    bathrooms: 2,
    checkin: "4:00 PM",
    checkout: "11:00 AM",
    priceStandard: "€289",
    priceChristmas: "€409",
    priceFrom: "€289",
    christmasPeriod: "22 Nov 2026 – 5 Jan 2027",
    additionalGuest: "+ €26 per guest / night after 4 guests",
    heroImage: "/images/villas/sandy-feet-house/hero.jpg",
    heroAlt: "Sandy Feet House — beachfront view with ocean patio",
    gallery: [
      { src: "/images/villas/sandy-feet-house/living-room-ocean.jpg", alt: "Living room with panoramic ocean view" },
      { src: "/images/villas/sandy-feet-house/private-patio.png", alt: "Private beachfront patio" },
      { src: "/images/villas/sandy-feet-house/kitchen.jpg", alt: "Fully equipped kitchen" },
      { src: "/images/villas/sandy-feet-house/dining-area.jpg", alt: "Dining area" },
    ],
  },
  highlights: [
    "Prime beachfront location — waves at the patio",
    "High-speed Starlink internet (complimentary)",
    "Air conditioning in every room",
    "Hot showers",
    "In-house washer & dryer",
    "100% cotton bed linen & beach towels provided",
    "Coffee machine, microwave, refrigerator",
    "5-minute walk to restaurants, shops & bars",
  ],
  amenities: [
    {
      category: "Bedroom & Bathroom",
      items: ["Bed linen (100% cotton)", "Towel set (bath & beach)", "Blow dryer", "Shampoo, shower gel, conditioner", "Bathrobe"],
    },
    {
      category: "Kitchen",
      items: ["Coffee machine", "Microwave", "Refrigerator", "Cooking utensils", "Kitchen towels", "Grocery bag"],
    },
    {
      category: "Comfort & Technology",
      items: ["Air conditioning (all rooms)", "High-speed Starlink internet", "TV with cable", "Beach bag"],
    },
    {
      category: "Laundry & Safety",
      items: ["Washing machine", "Clothes dryer", "First aid kit"],
    },
  ],
  reviews: [
    {
      name: "Minjung",
      date: "March 2025",
      type: "Group",
      quote: "From the sofa, we could watch sea lions and iguanas strolling along the beach through the window — an unforgettable experience. The service was excellent. Whenever we needed help, the staff responded immediately.",
    },
    {
      name: "Karen Cornell",
      date: "May 2024",
      type: "Family with older children",
      quote: "Sandy Feet has everything. We loved being right on the beach, watching marine iguanas, crabs and water birds each day. It truly is a dream. Thank you, Sandy Feet, for providing the perfect environment for us to thoroughly enjoy Isabela!",
    },
    {
      name: "Sarah",
      date: "April 2024",
      type: "Young couple",
      quote: "Such an amazingly beautiful stay. As soon as we arrived we booked an extra night. This property will not disappoint. Elena provided a helpful magazine full of tips on tours, local food, and other excursions to enjoy.",
    },
    {
      name: "Jennifer",
      date: "May 2024",
      type: "Family with older children",
      quote: "Our family of 4 loved staying at the beach house. The views were unreal and the location convenient to everything. Being able to see, hear and walk out the door onto the beach was priceless.",
    },
    {
      name: "Pierre Luc Baril",
      date: "January 2024",
      type: "Family with older children",
      quote: "One word sums it all: AMAZING! The location is perfect on the beach, really close to multiple good restaurants. The house is clean, quiet, well furnished and well equipped. I would recommend this house without any hesitation.",
    },
    {
      name: "Brian Mouradian",
      date: "November 2023",
      type: "Mature couple",
      quote: "This place was hands down the best place on the island. The location is absolutely amazing. I want to live there forever. Don't hesitate in booking Sandy Feet House — it is worth every penny and more.",
    },
  ],
  aboutTitle: "Where the Pacific\nmeets your patio",
  aboutText1: "Sandy Feet House sits directly on Puerto Villamil's stunning beach — step through the back doors and the ocean is at your feet. This beautifully designed home accommodates up to six guests with two spacious bedrooms, a generous living area, and a private patio where waves lap just metres away.",
  aboutText2: "Surrounded by the best restaurants, cafés, and shops of Puerto Villamil, yet utterly peaceful — Sandy Feet House offers the perfect balance of comfort and raw Galápagos nature.",
  houseRules: [
    { label: "Check-in", value: "From 4:00 PM" },
    { label: "Check-out", value: "By 11:00 AM" },
    { label: "Maximum guests", value: "6 guests" },
    { label: "Children", value: "Welcome" },
    { label: "Smoking", value: "Not permitted" },
    { label: "Pets", value: "Not permitted" },
    { label: "Accessible 24/7", value: "Yes" },
  ],
  ctaSubline: "Sandy Feet House · Puerto Villamil",
  ctaHeadline: "Your Galápagos escape\nstarts here",
};

export default function SandyFeetPage() {
  return <VillaPageLayout data={DATA} />;
}
