export interface ServicePillar {
  id: string;
  slug: string;
  name: string;
  headline: string;
  shortAnswer: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  startingFrom: string;
  relatedRouteIds: string[];
  keyFeatures: string[];
}

export const services: ServicePillar[] = [
  {
    id: "airport-transfers",
    slug: "airport-transfers",
    name: "Airport Transfers",
    headline: "Private Airport Transfers — Jeddah (JED) & Madinah (MED)",
    shortAnswer:
      "Taxi Bhai provides 24/7 private airport transfers from King Abdulaziz International Airport in Jeddah (JED) and Prince Mohammad bin Abdulaziz Airport in Madinah (MED). A driver meets you in the arrivals hall with a name board and monitors your flight in real time — fixed fares, no meters.",
    icon: "Plane",
    metaTitle: "Airport Transfer Service — Jeddah & Madinah Airports | Taxi Bhai",
    metaDescription:
      "Private airport pickups from Jeddah (JED) to Makkah from SAR 250 and Madinah (MED) to hotel from SAR 150. Flight-tracked, name board, 24/7. Book on WhatsApp: +966 57 306 7785.",
    startingFrom: "SAR 150",
    relatedRouteIds: [
      "jed-airport-makkah",
      "makkah-jed-airport",
      "med-airport-madinah",
      "madinah-med-airport",
      "jed-airport-madinah",
      "jed-airport-jed-hotel",
    ],
    keyFeatures: [
      "Real-time flight monitoring — driver adjusts for delays automatically",
      "Name board meet & greet in arrivals hall",
      "Luggage loading assistance",
      "Fixed fare agreed before travel — no meter, no surge pricing",
      "All vehicle types: sedan to full-size bus",
      "Available at JED (Jeddah) and MED (Madinah) airports",
    ],
  },
  {
    id: "intercity-transfers",
    slug: "intercity-transfers",
    name: "Intercity Transfers",
    headline: "Intercity Taxi Transfers — Makkah, Madinah & Jeddah",
    shortAnswer:
      "Taxi Bhai operates private door-to-door intercity transfers between Makkah, Madinah, and Jeddah — the three main cities for Umrah pilgrims. The Makkah–Madinah route covers ~420 km via the Haramain Expressway in 4–5 hours, with a rest stop included. No shared passengers, fixed fares in SAR.",
    icon: "ArrowLeftRight",
    metaTitle: "Makkah to Madinah Taxi & Intercity Transfers | Taxi Bhai",
    metaDescription:
      "Makkah to Madinah private taxi from SAR 450. Rest stop included, bottled water, door-to-door, 24/7. Jeddah Airport to Madinah from SAR 500. Book on WhatsApp.",
    startingFrom: "SAR 450",
    relatedRouteIds: [
      "makkah-madinah",
      "madinah-makkah",
      "jed-airport-madinah",
      "madinah-jed-airport",
    ],
    keyFeatures: [
      "Door-to-door: hotel pickup to hotel drop-off, no station transfers",
      "Rest stop included on all routes over 2 hours",
      "Bottled water provided on long-distance routes",
      "Fully private — no shared passengers ever",
      "Flexible departure time — choose your own schedule",
      "Child seats available on request at no extra charge",
    ],
  },
  {
    id: "umrah-ziyarat-transport",
    slug: "umrah-ziyarat-transport",
    name: "Umrah & Ziyarat Transport",
    headline: "Umrah Taxi & Private Ziyarat Tours — Makkah, Madinah & Jeddah",
    shortAnswer:
      "Taxi Bhai provides dedicated Umrah transportation and private Ziyarat tours across Saudi Arabia. Ziyarat (also: Ziyarah) means visitation of sacred Islamic sites. Tours cover Makkah's Jabal al-Nour, Arafat, and Mina; Madinah's Masjid an-Nabawi, Quba Mosque, and Uhud; plus day trips to Taif and Badr.",
    icon: "MapPin",
    metaTitle: "Umrah Taxi & Ziyarat Tours — Makkah & Madinah | Taxi Bhai",
    metaDescription:
      "Private Umrah transport and Ziyarat tours. Makkah Ziyarat from SAR 200, Madinah Ziyarat from SAR 200. Taif day trip from SAR 450, Badr day trip from SAR 400. Book on WhatsApp.",
    startingFrom: "SAR 200",
    relatedRouteIds: [
      "makkah-ziyarat",
      "madinah-ziyarat",
      "jeddah-ziyarat",
      "makkah-taif-ziyarat",
      "madinah-badr",
    ],
    keyFeatures: [
      "Private — just your group, no strangers in the vehicle",
      "Makkah Ziyarat: Jabal al-Nour, Jabal Thawr, Mina, Muzdalifah, Arafat",
      "Madinah Ziyarat: Masjid an-Nabawi, Quba Mosque, Uhud, Al-Baqi",
      "Day trip to Taif (City of Roses) from Makkah",
      "Day trip to Badr battlefield from Madinah",
      "Flexible itinerary — visit sites at your own pace",
    ],
  },
  {
    id: "group-family-transport",
    slug: "group-family-transport",
    name: "Group & Family Transport",
    headline: "Group Taxi Service — 7 to 30+ Passengers for Umrah",
    shortAnswer:
      "Taxi Bhai operates group and family transport for Umrah pilgrimages across Saudi Arabia. For families of 4–7, the Hyundai Staria or Hyundai H1 seats everyone comfortably. Groups of 8–12 use the Toyota Hiace. Larger delegations use the Coaster (up to 30) or a full-size bus. All vehicles are privately chartered.",
    icon: "Users",
    metaTitle: "Group Taxi Service for Umrah — 7 to 30+ Passengers | Taxi Bhai",
    metaDescription:
      "Private group transport for Umrah: Staria/H1 (7 seats), Hiace (12 seats), Coaster (30 seats), Bus (30+). All routes in Saudi Arabia. Fixed group fares. Book on WhatsApp.",
    startingFrom: "SAR 350",
    relatedRouteIds: [
      "makkah-madinah",
      "madinah-makkah",
      "jed-airport-makkah",
      "makkah-ziyarat",
      "madinah-ziyarat",
    ],
    keyFeatures: [
      "7-seater: Hyundai Staria or Hyundai H1 (MPV/vans, ample luggage space)",
      "12-seater: Toyota Hiace — best for extended family groups",
      "30-seater: Coaster — ideal for mosque groups and community tours",
      "30+ passengers: Full-size bus for large delegations",
      "Multiple vehicles coordinated together for very large groups",
      "All routes: airport pickups, intercity, Ziyarat tours",
    ],
  },
  {
    id: "executive-chauffeur",
    slug: "executive-chauffeur",
    name: "Executive Chauffeur",
    headline: "Executive Chauffeur Service — GMC Yukon XL, Hourly & Fixed Routes",
    shortAnswer:
      "Taxi Bhai's executive service uses the new-model GMC Yukon XL — a full-size luxury SUV with three rows of seating, generous cargo space, and a commanding presence on Saudi roads. Available as hourly hire (minimum 1 hour, SAR 180/hr) or fixed routes across Makkah, Madinah, and Jeddah.",
    icon: "Star",
    metaTitle: "Executive Chauffeur & Luxury Taxi in Saudi Arabia | Taxi Bhai",
    metaDescription:
      "GMC Yukon XL executive chauffeur in Makkah, Madinah & Jeddah. Hourly hire from SAR 180/hr or fixed routes from SAR 400. VIP, business travel, luxury family transfers. Book on WhatsApp.",
    startingFrom: "SAR 180/hr",
    relatedRouteIds: ["per-hour", "jed-airport-makkah", "makkah-madinah"],
    keyFeatures: [
      "New-model GMC Yukon XL — 7 seats, leather interior, full A/C",
      "Hourly hire: SAR 180/hr, minimum 1 hour",
      "Fixed route pricing available (e.g., JED Airport → Makkah: SAR 550)",
      "Professional, discreet driver",
      "Available in Makkah, Madinah, and Jeddah",
      "Suitable for VIP visits, corporate travel, and luxury family transfers",
    ],
  },
];
