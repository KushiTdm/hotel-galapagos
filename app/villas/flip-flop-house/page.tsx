"use client";

import VillaPageLayout, { type VillaPageData } from "@/components/VillaPageLayout";

const DATA: VillaPageData = {
  villa: {
    name: "Flip Flop House",
    slug: "flip-flop-house",
    tagline: "Cozy House in the Heart of Town",
    type: "Two-Story Family Home",
    guests: 5,
    bedrooms: 2,
    beds: 4,
    bathrooms: 2,
    checkin: "4:00 PM",
    checkout: "10:00 AM",
    priceStandard: "€166",
    priceChristmas: "€238",
    priceFrom: "€166",
    christmasPeriod: "22 Nov 2026 – 5 Jan 2027",
    heroImage: "/images/villas/flip-flop-house/hero.jpg",
    heroAlt: "Flip Flop House — cozy family home in Puerto Villamil",
    gallery: [
      { src: "/images/villas/flip-flop-house/living-room.png", alt: "Spacious living room with 60″ flat-screen TV" },
      { src: "/images/villas/flip-flop-house/master-bedroom.jpg", alt: "Master bedroom with air conditioning" },
      { src: "/images/villas/flip-flop-house/dining-area.jpg", alt: "Dining area" },
      { src: "/images/villas/flip-flop-house/tv-room.jpg", alt: "TV room" },
    ],
  },
  highlights: [
    "Heart of Puerto Villamil — walking distance to everything",
    "High-speed Starlink internet (complimentary)",
    "Individual A/C units in each room",
    "60″ flat-screen TV",
    "Fully fenced two-story house with private yard",
    "Patio with hammock and dining table",
    "In-house washer & dryer",
    "Optional Graco crib available on request",
  ],
  amenities: [
    {
      category: "Bedroom & Bathroom",
      items: ["Bed linen (100% cotton)", "Towel set (bath & beach)", "Blow dryer", "Shampoo, shower gel, conditioner", "Bathtub", "Iron & ironing board"],
    },
    {
      category: "Kitchen",
      items: ["Coffee machine", "Kitchen stove", "Microwave", "Refrigerator", "Cooking utensils"],
    },
    {
      category: "Comfort & Technology",
      items: ["Air conditioning (all rooms)", "High-speed Starlink internet", "60″ TV with antenna", "Patio with hammock"],
    },
    {
      category: "Laundry & Family",
      items: ["Washing machine", "Clothes dryer", "Crib on request (Graco Play'n'Go)", "Children's books & games"],
    },
  ],
  reviews: [
    {
      name: "Julie Wessen",
      date: "July 2025",
      type: "Family with young children",
      quote: "This home is absolute perfection! Comfortable and outfitted with everything you need. Merely steps away from the heart of the island — restaurants, shops, beach. The gates at the top and bottom of the stairs make this suitable for families with very young children.",
    },
    {
      name: "Shannon Stevenson",
      date: "August 2024",
      type: "Family with older children",
      quote: "Our family with three teenagers stayed for three nights. It was our best stay in Ecuador. The house is comfortable and well stocked with everything we needed. Elena was a responsive and helpful host sharing information ahead of time and during our stay.",
    },
    {
      name: "Piotr Dranka",
      date: "February 2024",
      type: "Group",
      quote: "We stayed as a group of 5 friends. The house was very clean, comfortable and well equipped. Air conditioning in every room. Quiet location but very close to the centre. Host is very helpful and responds quickly. Possible to do flexible check in/out.",
    },
    {
      name: "Lori Delmas",
      date: "December 2023",
      type: "Group",
      quote: "Flip Flop House is well appointed for your family's stay. Kitchen has everything you will need. Beds are comfortable and bathrooms are spacious. Large outside area with hammock and dining area. The host Elena is great to work with and always quick to respond.",
    },
    {
      name: "Michael Noble",
      date: "December 2022",
      type: "Other",
      quote: "Really well located — only 10 minutes walk to the beach and main tourist street. The house itself is lovely. Superbly clean, well stocked, really comfortable. The beds were comfy and the aircon, when we needed it, was really effective. A wonderful retreat after a day of exploring.",
    },
    {
      name: "Paola Vallejo",
      date: "April 2021",
      type: "Family with young children",
      quote: "We believe this was the right choice staying at Flip Flop House for our family holiday in Isabela. The location is great and the house size is perfect for a one-family relaxing time. We truly recommend staying there and spending a wonderful week exploring the island at your pace.",
    },
  ],
  aboutTitle: "Your home in\nthe heart of Isabela",
  aboutText1: "Flip Flop House is a fully fenced, two-story family home in the centre of Puerto Villamil. With spacious rooms, a generous patio with hammock, and everything you need for a comfortable extended stay, it is the perfect base for exploring Isabela Island.",
  aboutText2: "The beach is a 5-minute walk away; Concha de Perla snorkelling, the tortoise breeding centre, and all the island's tour operators are within easy reach. Everything is here — but the sounds of the island, not the city, surround you.",
  houseRules: [
    { label: "Check-in", value: "From 4:00 PM" },
    { label: "Check-out", value: "By 10:00 AM" },
    { label: "Maximum guests", value: "5 guests" },
    { label: "Children", value: "Welcome" },
    { label: "Smoking", value: "Not permitted" },
    { label: "Pets", value: "Not permitted" },
    { label: "Crib", value: "Available on request" },
  ],
  ctaSubline: "Flip Flop House · Puerto Villamil",
  ctaHeadline: "Your island home\nawaits",
};

export default function FlipFlopPage() {
  return <VillaPageLayout data={DATA} />;
}
