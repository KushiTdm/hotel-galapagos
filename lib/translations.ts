import type { Lang } from "./LanguageContext";

export interface Translations {
  nav_villas: string;
  nav_experience: string;
  nav_amenities: string;
  nav_location: string;
  reserve: string;

  hero_location: string;
  hero_h1_line1: string;
  hero_h1_line2: string;
  hero_subtitle: string;
  hero_discover: string;
  hero_checkin: string;
  hero_checkout: string;
  hero_guests: string;
  hero_villa: string;
  hero_any_villa: string;
  hero_guest_options: string[];
  hero_reserve_btn: string;
  hero_whatsapp_msg: (villa: string, checkin: string, checkout: string, guests: string) => string;

  villas_eyebrow: string;
  villas_title: string;
  villas_subtitle: string;
  villas_bedrooms: string;
  villas_baths: string;
  villas_from: string;
  villas_night: string;
  villas_explore: string;
  villas_book_whatsapp: string;
  villas_checkin_label: string;
  villas_checkout_label: string;
  villas_guests_label: string;
  villas_guest_options: string[];
  villas_whatsapp_msg: (villa: string, checkin: string, checkout: string, guests: string) => string;
  villa_types: Record<string, string>;
  villa_locations: Record<string, string>;
  villa_features: Record<string, string[]>;

  exp1_eyebrow: string;
  exp1_title: string;
  exp1_subtitle: string;
  exp1_body: string;
  exp1_cta: string;
  exp2_eyebrow: string;
  exp2_title: string;
  exp2_subtitle: string;
  exp2_body: string;
  exp2_cta: string;

  parallax_eyebrow: string;
  parallax_h2_line1: string;
  parallax_h2_line2: string;
  parallax_subtitle: string;
  parallax_cta: string;

  glance_eyebrow: string;
  glance_title: string;
  glance_subtitle: string;
  amenity_beach_title: string;
  amenity_beach_desc: string;
  amenity_wifi_title: string;
  amenity_wifi_desc: string;
  amenity_wildlife_title: string;
  amenity_wildlife_desc: string;
  amenity_home_title: string;
  amenity_home_desc: string;
  amenity_dining_title: string;
  amenity_dining_desc: string;
  amenity_patio_title: string;
  amenity_patio_desc: string;

  testimonials_eyebrow: string;
  testimonials_title: string;
  testimonials_subtitle: string;

  cta_eyebrow: string;
  cta_h2_line1: string;
  cta_h2_line2: string;
  cta_reserve: string;
  cta_view: string;

  location_eyebrow: string;
  location_title: string;
  location_subtitle: string;
  location_neighbourhood: string;
  location_airport: string;
  location_ferry: string;
  location_directions: string;
  location_quote: string;
  location_owners: string;
  nearby: Array<{ label: string; distance: string }>;

  footer_desc: string;
  footer_col_villas: string;
  footer_col_explore: string;
  footer_col_stay: string;
  footer_col_info: string;
  footer_reserve: string;
  footer_contact_owners: string;
  footer_airbnb: string;
  footer_getting_here: string;
  footer_wildlife: string;
  footer_puerto: string;
  footer_experience: string;
  footer_amenities: string;
  footer_location: string;
  footer_privacy: string;
  footer_terms: string;
  footer_copyright: (year: number) => string;

  whatsapp_tooltip: string;
  whatsapp_general_msg: string;
}

export const T: Record<Lang, Translations> = {
  en: {
    nav_villas: "Villas",
    nav_experience: "Experience",
    nav_amenities: "Amenities",
    nav_location: "Location",
    reserve: "Reserve",

    hero_location: "Puerto Villamil · Isabela · Galápagos",
    hero_h1_line1: "Where the Ocean",
    hero_h1_line2: "Meets Paradise",
    hero_subtitle: "Three exclusive villas on the shores of the Galápagos",
    hero_discover: "Discover Our Villas",
    hero_checkin: "Check-in",
    hero_checkout: "Check-out",
    hero_guests: "Guests",
    hero_villa: "Villa",
    hero_any_villa: "Any Villa",
    hero_guest_options: ["2 Guests", "3 Guests", "4 Guests", "5+ Guests"],
    hero_reserve_btn: "Reserve",
    hero_whatsapp_msg: (villa, checkin, checkout, guests) =>
      `Hello Elena & Esteban!\n\nI'd like to book *${villa}*.\n\nCheck-in: *${checkin}*\nCheck-out: *${checkout}*\nGuests: *${guests}*\n\nCould you please confirm availability and pricing?\n\nThank you!`,

    villas_eyebrow: "Our Villas",
    villas_title: "ACCOMMODATIONS",
    villas_subtitle: "Three exceptional houses, one extraordinary destination",
    villas_bedrooms: "Bedrooms",
    villas_baths: "Baths",
    villas_from: "From",
    villas_night: "/ night",
    villas_explore: "Explore This Villa",
    villas_book_whatsapp: "Book via WhatsApp",
    villas_checkin_label: "Check-in",
    villas_checkout_label: "Check-out",
    villas_guests_label: "Guests",
    villas_guest_options: ["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5 Guests", "6+ Guests"],
    villas_whatsapp_msg: (villa, checkin, checkout, guests) =>
      `Hello Elena & Esteban!\n\nI'd like to book *${villa}*.\n\nCheck-in: *${checkin}*\nCheck-out: *${checkout}*\nGuests: *${guests}*\n\nCould you please confirm availability and pricing?\n\nThank you!`,
    villa_types: {
      "yellow-heron-house": "Private Luxurious House",
      "sandy-feet-house": "Beachfront Family House",
      "flip-flop-house": "Two-Story Family House",
    },
    villa_locations: {
      "yellow-heron-house": "Centre of Puerto Villamil, directly on the beach",
      "sandy-feet-house": "Directly on the beach",
      "flip-flop-house": "Heart of Puerto Villamil",
    },
    villa_features: {
      "yellow-heron-house": ["Big patio on the beach", "Fully furnished", "High-speed Starlink internet"],
      "sandy-feet-house": ["Ocean-view patio (waves touch the patio)", "Spacious living areas", "High-speed Starlink internet"],
      "flip-flop-house": ["Spacious living room with 60″ TV", "Big fully equipped kitchen", "High-speed Starlink internet"],
    },

    exp1_eyebrow: "The Galápagos",
    exp1_title: "EXPERIENCE",
    exp1_subtitle: "A living laboratory of extraordinary nature",
    exp1_body: "The Galápagos Islands are unlike anywhere else on Earth. Swim alongside marine iguanas, watch giant tortoises roam free, and walk on beaches shared with sea lions. Every day on Isabela Island is an invitation to witness evolution in motion.",
    exp1_cta: "Discover Isabela",
    exp2_eyebrow: "Direct Beach Access",
    exp2_title: "THE SHORES",
    exp2_subtitle: "Where the Pacific meets pristine white sand",
    exp2_body: "Yellow Heron House and Sandy Feet House sit directly on the beach of Puerto Villamil, one of the most beautiful beaches in the archipelago. Wake up to the sound of the ocean and step onto the sand without leaving the comfort of your villa.",
    exp2_cta: "Our Beachfront Villas",

    parallax_eyebrow: "Galápagos Time",
    parallax_h2_line1: "Time moves differently",
    parallax_h2_line2: "here",
    parallax_subtitle: "Where giant tortoises set the pace and the only agenda is the tide",
    parallax_cta: "Plan Your Visit",

    glance_eyebrow: "At a Glance",
    glance_title: "ISLAND LIVING",
    glance_subtitle: "Everything you need, and nothing you don't",
    amenity_beach_title: "Beachfront Access",
    amenity_beach_desc: "Two of our three villas sit directly on Puerto Villamil's pristine beach — step outside and your toes are in the sand.",
    amenity_wifi_title: "Starlink Internet",
    amenity_wifi_desc: "Complimentary high-speed satellite internet in all villas, so you stay connected while the world feels far away.",
    amenity_wildlife_title: "Wildlife at Your Door",
    amenity_wildlife_desc: "Marine iguanas, sea lions, and giant tortoises are your neighbors. The Galápagos are yours to explore.",
    amenity_home_title: "Fully Furnished",
    amenity_home_desc: "Each villa is thoughtfully furnished with everything you need for a comfortable, extended stay.",
    amenity_dining_title: "Local Dining",
    amenity_dining_desc: "Surrounded by restaurants, cafés, and bars. Puerto Villamil's best flavors are steps from your door.",
    amenity_patio_title: "Private Patios",
    amenity_patio_desc: "Generous outdoor terraces where the ocean breeze and the sound of waves become your constant companions.",

    testimonials_eyebrow: "Our Guests",
    testimonials_title: "THEIR WORDS",
    testimonials_subtitle: "Experiences from those who called our villas home",

    cta_eyebrow: "Your Galápagos Escape Awaits",
    cta_h2_line1: "Unforgettable stays in",
    cta_h2_line2: "the world's last Eden",
    cta_reserve: "Reserve a Villa",
    cta_view: "View All Villas",

    location_eyebrow: "Where to Find Us",
    location_title: "LOCATION",
    location_subtitle: "Puerto Villamil, Isabela Island, Galápagos",
    location_neighbourhood: "In the Neighbourhood",
    location_airport: "✈ Isabela Airport (GPS) — 10 min",
    location_ferry: "🚤 Ferry from Santa Cruz — 2h",
    location_directions: "Get Directions",
    location_quote: "\"The closest you'll get to the wild without leaving paradise.\"",
    location_owners: "— Elena & Esteban Chavez, Owners",
    nearby: [
      { label: "Puerto Villamil Beach", distance: "At your door" },
      { label: "Tortoise Breeding Centre", distance: "5 min walk" },
      { label: "Las Tintoreras (sharks & boobies)", distance: "10 min walk" },
      { label: "Concha de Perla (snorkelling)", distance: "15 min walk" },
      { label: "Wall of Tears", distance: "20 min by bike" },
      { label: "Los Tuneles (lava arches)", distance: "45 min by boat" },
    ],

    footer_desc: "Three stunning vacation houses in Puerto Villamil, Isabela — designed for comfort, nature, and luxury.",
    footer_col_villas: "Our Villas",
    footer_col_explore: "Explore",
    footer_col_stay: "Stay With Us",
    footer_col_info: "Information",
    footer_reserve: "Reserve a Villa",
    footer_contact_owners: "Contact Owners",
    footer_airbnb: "Airbnb Listings",
    footer_getting_here: "Getting to Isabela",
    footer_wildlife: "Galapagos Wildlife",
    footer_puerto: "Puerto Villamil",
    footer_experience: "Experience",
    footer_amenities: "Amenities",
    footer_location: "Location",
    footer_privacy: "Privacy",
    footer_terms: "Terms",
    footer_copyright: (year) => `© ${year} Galápagos Hotel · Esteban & Elena Chavez · Puerto Villamil, Ecuador`,

    whatsapp_tooltip: "Contact us on WhatsApp",
    whatsapp_general_msg: "Hello Elena & Esteban!\n\nI'm interested in staying at Galapagos Hotel. Could you please send me more information about availability and pricing?\n\nThank you!",
  },

  es: {
    nav_villas: "Villas",
    nav_experience: "Experiencia",
    nav_amenities: "Comodidades",
    nav_location: "Ubicación",
    reserve: "Reservar",

    hero_location: "Puerto Villamil · Isabela · Galápagos",
    hero_h1_line1: "Donde el Océano",
    hero_h1_line2: "Toca el Paraíso",
    hero_subtitle: "Tres villas exclusivas a orillas de las Galápagos",
    hero_discover: "Descubrir Nuestras Villas",
    hero_checkin: "Llegada",
    hero_checkout: "Salida",
    hero_guests: "Huéspedes",
    hero_villa: "Villa",
    hero_any_villa: "Cualquier Villa",
    hero_guest_options: ["2 Huéspedes", "3 Huéspedes", "4 Huéspedes", "5+ Huéspedes"],
    hero_reserve_btn: "Reservar",
    hero_whatsapp_msg: (villa, checkin, checkout, guests) =>
      `Hola Elena y Esteban!\n\nMe gustaria reservar *${villa}*.\n\nLlegada: *${checkin}*\nSalida: *${checkout}*\nHuespedes: *${guests}*\n\nPodrian confirmar disponibilidad y precio?\n\nGracias!`,

    villas_eyebrow: "Nuestras Villas",
    villas_title: "ALOJAMIENTOS",
    villas_subtitle: "Tres casas excepcionales, un destino extraordinario",
    villas_bedrooms: "Dormitorios",
    villas_baths: "Baños",
    villas_from: "Desde",
    villas_night: "/ noche",
    villas_explore: "Explorar Esta Villa",
    villas_book_whatsapp: "Reservar por WhatsApp",
    villas_checkin_label: "Llegada",
    villas_checkout_label: "Salida",
    villas_guests_label: "Huéspedes",
    villas_guest_options: ["1 Huésped", "2 Huéspedes", "3 Huéspedes", "4 Huéspedes", "5 Huéspedes", "6+ Huéspedes"],
    villas_whatsapp_msg: (villa, checkin, checkout, guests) =>
      `Hola Elena y Esteban!\n\nMe gustaria reservar *${villa}*.\n\nLlegada: *${checkin}*\nSalida: *${checkout}*\nHuespedes: *${guests}*\n\nPodrian confirmar disponibilidad y precio?\n\nGracias!`,
    villa_types: {
      "yellow-heron-house": "Casa de Lujo Privada",
      "sandy-feet-house": "Casa Familiar Frente al Mar",
      "flip-flop-house": "Casa Familiar de Dos Pisos",
    },
    villa_locations: {
      "yellow-heron-house": "Centro de Puerto Villamil, directamente en la playa",
      "sandy-feet-house": "Directamente en la playa",
      "flip-flop-house": "Corazón de Puerto Villamil",
    },
    villa_features: {
      "yellow-heron-house": ["Gran patio en la playa", "Completamente amoblada", "Internet Starlink de alta velocidad"],
      "sandy-feet-house": ["Patio con vista al mar (las olas tocan el patio)", "Amplias áreas de estar", "Internet Starlink de alta velocidad"],
      "flip-flop-house": ["Amplia sala de estar con TV 60″", "Gran cocina completamente equipada", "Internet Starlink de alta velocidad"],
    },

    exp1_eyebrow: "Las Galápagos",
    exp1_title: "EXPERIENCIA",
    exp1_subtitle: "Un laboratorio vivo de naturaleza extraordinaria",
    exp1_body: "Las Islas Galápagos son como ningún otro lugar en la Tierra. Nada junto a iguanas marinas, observa tortugas gigantes en libertad y camina por playas compartidas con lobos marinos. Cada día en Isabela es una invitación a ser testigo de la evolución en movimiento.",
    exp1_cta: "Descubrir Isabela",
    exp2_eyebrow: "Acceso Directo a la Playa",
    exp2_title: "LAS ORILLAS",
    exp2_subtitle: "Donde el Pacífico se encuentra con la arena blanca",
    exp2_body: "Yellow Heron House y Sandy Feet House se ubican directamente en la playa de Puerto Villamil, una de las más hermosas del archipiélago. Despierta con el sonido del océano y pisa la arena sin salir de tu villa.",
    exp2_cta: "Nuestras Villas Frente al Mar",

    parallax_eyebrow: "Tiempo Galápagos",
    parallax_h2_line1: "El tiempo transcurre diferente",
    parallax_h2_line2: "aquí",
    parallax_subtitle: "Donde las tortugas gigantes marcan el ritmo y la única agenda es la marea",
    parallax_cta: "Planifica tu Visita",

    glance_eyebrow: "De un Vistazo",
    glance_title: "VIDA EN LA ISLA",
    glance_subtitle: "Todo lo que necesitas, y nada que no",
    amenity_beach_title: "Acceso a la Playa",
    amenity_beach_desc: "Dos de nuestras tres villas están directamente en la playa de Puerto Villamil — sal y tus pies estarán en la arena.",
    amenity_wifi_title: "Internet Starlink",
    amenity_wifi_desc: "Internet satelital de alta velocidad gratuito en todas las villas, para que te mantengas conectado mientras el mundo parece lejano.",
    amenity_wildlife_title: "Fauna a Tu Puerta",
    amenity_wildlife_desc: "Iguanas marinas, lobos marinos y tortugas gigantes son tus vecinos. Las Galápagos son tuyas para explorar.",
    amenity_home_title: "Completamente Equipada",
    amenity_home_desc: "Cada villa está amoblada con todo lo que necesitas para una estadía cómoda y prolongada.",
    amenity_dining_title: "Gastronomía Local",
    amenity_dining_desc: "Rodeado de restaurantes, cafés y bares. Los mejores sabores de Puerto Villamil están a pasos de tu puerta.",
    amenity_patio_title: "Patios Privados",
    amenity_patio_desc: "Amplias terrazas exteriores donde la brisa del mar y el sonido de las olas se convierten en tus compañeros constantes.",

    testimonials_eyebrow: "Nuestros Huéspedes",
    testimonials_title: "SUS PALABRAS",
    testimonials_subtitle: "Experiencias de quienes llamaron a nuestras villas su hogar",

    cta_eyebrow: "Tu Escape a las Galápagos Te Espera",
    cta_h2_line1: "Estadías inolvidables en",
    cta_h2_line2: "el último Edén del mundo",
    cta_reserve: "Reservar una Villa",
    cta_view: "Ver Todas las Villas",

    location_eyebrow: "Dónde Encontrarnos",
    location_title: "UBICACIÓN",
    location_subtitle: "Puerto Villamil, Isla Isabela, Galápagos",
    location_neighbourhood: "En el Vecindario",
    location_airport: "✈ Aeropuerto de Isabela (GPS) — 10 min",
    location_ferry: "🚤 Ferry desde Santa Cruz — 2h",
    location_directions: "Cómo Llegar",
    location_quote: "\"Lo más cerca que estarás de la naturaleza salvaje sin abandonar el paraíso.\"",
    location_owners: "— Elena y Esteban Chávez, Propietarios",
    nearby: [
      { label: "Playa de Puerto Villamil", distance: "En tu puerta" },
      { label: "Centro de Crianza de Tortugas", distance: "5 min caminando" },
      { label: "Las Tintoreras (tiburones y piqueros)", distance: "10 min caminando" },
      { label: "Concha de Perla (snorkel)", distance: "15 min caminando" },
      { label: "Muro de las Lágrimas", distance: "20 min en bici" },
      { label: "Los Túneles (arcos de lava)", distance: "45 min en bote" },
    ],

    footer_desc: "Tres espectaculares casas vacacionales en Puerto Villamil, Isabela — diseñadas para el confort, la naturaleza y el lujo.",
    footer_col_villas: "Nuestras Villas",
    footer_col_explore: "Explorar",
    footer_col_stay: "Hospédate con Nosotros",
    footer_col_info: "Información",
    footer_reserve: "Reservar una Villa",
    footer_contact_owners: "Contactar Propietarios",
    footer_airbnb: "Listados en Airbnb",
    footer_getting_here: "Cómo Llegar a Isabela",
    footer_wildlife: "Fauna de Galápagos",
    footer_puerto: "Puerto Villamil",
    footer_experience: "Experiencia",
    footer_amenities: "Comodidades",
    footer_location: "Ubicación",
    footer_privacy: "Privacidad",
    footer_terms: "Términos",
    footer_copyright: (year) => `© ${year} Galápagos Hotel · Esteban & Elena Chávez · Puerto Villamil, Ecuador`,

    whatsapp_tooltip: "Contáctanos por WhatsApp",
    whatsapp_general_msg: "Hola Elena y Esteban!\n\nEstoy interesado/a en alojarme en el Hotel Galapagos. Podrian enviarme mas informacion sobre disponibilidad y precios?\n\nGracias!",
  },
};
