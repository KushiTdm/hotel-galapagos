"use client";

import VillaPageLayout, { type VillaPageData } from "@/components/VillaPageLayout";

const DATA: VillaPageData = {
  villa: {
    name: "Yellow Heron House",
    slug: "yellow-heron-house",
    tagline: "Comfortable Beachfront House",
    type: "Brand-New Luxury Beachfront Home",
    guests: 8,
    bedrooms: 3,
    beds: 6,
    bathrooms: 3,
    checkin: "4:00 PM",
    checkout: "11:00 AM",
    priceStandard: "€417",
    priceChristmas: "€639",
    priceFrom: "€417",
    christmasPeriod: "20 Dec – 5 Jan (each year)",
    additionalGuest: "+ €43 per guest / night after 6 guests",
    heroImage: "/images/villas/yellow-heron-house/hero.jpg",
    heroAlt: "Yellow Heron House — brand-new luxury beachfront villa",
    gallery: [
      { src: "/images/villas/yellow-heron-house/living-room.jpg", alt: "Bright living area with ocean views" },
      { src: "/images/villas/yellow-heron-house/bedroom-ocean-view.jpg", alt: "Bedroom with direct ocean view" },
      { src: "/images/villas/yellow-heron-house/master-bedroom.jpg", alt: "Master bedroom with ensuite" },
      { src: "/images/villas/yellow-heron-house/master-bathroom.jpg", alt: "Spacious master bathroom" },
    ],
  },
  highlights: [
    "Brand-new two-story luxury beachfront house",
    "Sun-soaked patio by the waves",
    "High-speed Starlink internet (complimentary)",
    "Independent A/C in each room",
    "Fully equipped chef's kitchen (oven, grill, blender)",
    "Spacious bathrooms with bathtub & shower",
    "In-house washer & dryer",
    "Beach chairs on the patio",
    "Optional housekeeper service available",
    "Optional Graco crib on request",
  ],
  amenities: [
    {
      category: "Bedroom & Bathroom",
      items: ["Bed linen (100% cotton)", "Towel set (bath & beach)", "Blow dryer", "Shampoo, shower gel, conditioner", "Bathtub", "Shower", "Iron & ironing board"],
    },
    {
      category: "Kitchen",
      items: ["Full chef's kitchen", "Oven", "Grill", "Kitchen stove", "Blender", "Coffee machine", "Microwave", "Refrigerator", "Cooking utensils"],
    },
    {
      category: "Comfort & Technology",
      items: ["Air conditioning (all rooms)", "High-speed Starlink internet", "Beach chairs", "Private garden", "Sun-soaked beachfront patio"],
    },
    {
      category: "Safety & Services",
      items: ["Carbon monoxide detector", "Fire extinguisher", "First aid kit", "Safe", "Housekeeper (optional)", "Crib on request (Graco Play'n'Go)"],
    },
  ],
  reviews: [
    {
      name: "Christian Francis",
      date: "December 2024",
      type: "Family with older children",
      quote: "Our family LOVED this home! The most beautiful, immaculately clean, and comfortable home we stayed in on the islands. The beach is perfect in every way and steps from the door. The area is peaceful but close to town. We'd do it again in a heartbeat.",
    },
    {
      name: "Amanda",
      date: "January 2024",
      type: "Family with young children",
      quote: "This is by far one of the best houses we have stayed in! Perfect location right on the beach to watch the sunrise, sunset and wildlife right outside your doors. Huge bathrooms with great showers and hot water. I loved the hammock area outside. Thank you Elena and Esteban for making our stay so perfect.",
    },
    {
      name: "The Sabens",
      date: "July 2022",
      type: "Family with young children",
      quote: "Casa Blanca was even better than the pictures. Esteban and Elena were fantastic hosts — helped with our transportation from the airport. Their house was very well stocked and the pool was clean with toys for the kids. If you have kids, this is the place to stay! A first class residence for families.",
    },
  ],
  aboutTitle: "A new luxury\non Isabela's shore",
  aboutText1: "Yellow Heron House is a brand-new, two-story luxury residence sitting directly on the beach of Puerto Villamil. Designed with care and furnished to the highest standard, the house accommodates up to eight guests across three beautifully appointed bedrooms — one on the ground floor, two on the first floor.",
  aboutText2: "Spread across both floors, the generous living spaces open onto a sun-soaked patio where the waves of the Pacific lap just metres away. A fully equipped chef's kitchen, spacious bathrooms with bathtub and shower, and beach chairs on the patio complete this exceptional home.",
  houseRules: [
    { label: "Check-in", value: "From 4:00 PM" },
    { label: "Check-out", value: "By 11:00 AM" },
    { label: "Maximum guests", value: "8 guests" },
    { label: "Children", value: "Welcome" },
    { label: "Smoking", value: "Not permitted" },
    { label: "Pets", value: "Not permitted" },
    { label: "Housekeeper", value: "Optional (on request)" },
    { label: "Crib", value: "Available on request" },
    { label: "Credit cards", value: "Accepted" },
  ],
  ctaSubline: "Yellow Heron House · Beachfront · Puerto Villamil",
  ctaHeadline: "The finest address\non Isabela Island",
};

export default function YellowHeronPage() {
  return <VillaPageLayout data={DATA} />;
}
