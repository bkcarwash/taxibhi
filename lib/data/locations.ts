export interface LocationData {
  id: string;
  slug: string;
  name: string;
  arabicName: string;
  altNames: string[];
  lat: number;
  lng: number;
  country: string;
  metaTitle: string;
  metaDescription: string;
  shortAnswer: string;
  airport?: { name: string; iata: string; distanceKm: string; durationMins: string };
  nearestAirport?: { name: string; iata: string; distanceKm: string; durationHrs: string };
  distanceFromMakkah?: string;
  distanceFromMadinah?: string;
  distanceFromJeddah?: string;
  durationFromMakkah?: string;
  durationFromMadinah?: string;
  durationFromJeddah?: string;
  keyAreas: string[];
  ziyaratSites: { name: string; note: string }[];
  routeIds: string[];
}

export const locations: LocationData[] = [
  {
    id: "makkah",
    slug: "makkah",
    name: "Makkah",
    arabicName: "مكة المكرمة",
    altNames: ["Mecca", "Makkah al-Mukarramah", "Makkah Al-Mukarramah", "Holy Makkah"],
    lat: 21.3891,
    lng: 39.8579,
    country: "Saudi Arabia",
    metaTitle: "Taxi Service in Makkah (Mecca) — Airport Transfers & Ziyarat | Taxi Bhai",
    metaDescription:
      "Private taxi in Makkah: from Jeddah Airport (JED) from SAR 250, Makkah Ziyarat tours from SAR 200, intercity to Madinah from SAR 450. 24/7, fixed fares. Book on WhatsApp.",
    shortAnswer:
      "Taxi Bhai provides private taxi services throughout Makkah (Mecca) — including airport transfers from Jeddah Airport (JED, ~80 km), hotel-to-hotel intercity transfers to Madinah (~420 km), private Makkah Ziyarat tours, and hourly hire. All vehicles are air-conditioned, fully private, and available 24/7 with fixed SAR fares.",
    nearestAirport: {
      name: "King Abdulaziz International Airport",
      iata: "JED",
      distanceKm: "~80 km",
      durationHrs: "1–1.5 hrs",
    },
    distanceFromMadinah: "~420 km",
    distanceFromJeddah: "~80 km",
    durationFromMadinah: "4–5 hrs",
    durationFromJeddah: "1–1.5 hrs",
    keyAreas: [
      "Al Haram area (Masjid al-Haram district)",
      "Aziziyah",
      "Abraj Al Bait (Clock Tower area)",
      "Ajyad",
      "Mina (tent city, 5 km from Masjid al-Haram)",
      "Arafat (Plain of Arafat, ~15 km)",
      "Muzdalifah",
    ],
    ziyaratSites: [
      {
        name: "Masjid al-Haram (Grand Mosque)",
        note: "Holiest site in Islam — Taxi Bhai drops guests at the hotel; walking distance to Haram",
      },
      {
        name: "Jabal al-Nour — Cave of Hira",
        note: "~5 km from Masjid al-Haram; 270 steps to the cave where first Quranic revelation occurred",
      },
      {
        name: "Jabal Thawr — Cave of Thawr",
        note: "~6 km south; the Prophet ﷺ sheltered here during the Hijra",
      },
      {
        name: "Plain of Arafat (Arafah)",
        note: "~15 km from Makkah; Hajj pillar — also visited during Ziyarat",
      },
      {
        name: "Mina",
        note: "~5 km; tent city and site of Jamarat (stoning ritual during Hajj)",
      },
      {
        name: "Muzdalifah",
        note: "Between Mina and Arafat; significant Hajj site",
      },
      {
        name: "Masjid Namira",
        note: "On the edge of Arafat; large mosque associated with Hajj khutbah",
      },
      {
        name: "Masjid al-Jinn",
        note: "Close to Masjid al-Haram; historically significant site",
      },
    ],
    routeIds: [
      "jed-airport-makkah",
      "makkah-jed-airport",
      "makkah-madinah",
      "madinah-makkah",
      "makkah-ziyarat",
      "makkah-taif-ziyarat",
      "hotel-train-station",
      "train-station-hotel",
      "per-hour",
    ],
  },
  {
    id: "madinah",
    slug: "madinah",
    name: "Madinah",
    arabicName: "المدينة المنورة",
    altNames: [
      "Medina",
      "Madinah al-Munawwarah",
      "Al-Madinah al-Munawwarah",
      "City of the Prophet",
    ],
    lat: 24.4672,
    lng: 39.615,
    country: "Saudi Arabia",
    metaTitle: "Taxi Service in Madinah (Medina) — Airport Transfers & Ziyarat | Taxi Bhai",
    metaDescription:
      "Private taxi in Madinah: from Madinah Airport (MED) from SAR 150, Madinah Ziyarat from SAR 200, Madinah–Makkah from SAR 450. 24/7, fixed fares. Book on WhatsApp.",
    shortAnswer:
      "Taxi Bhai provides private taxi services throughout Madinah (Medina) — including airport transfers from Madinah Airport (MED, ~15 km), hotel-to-hotel transfers to Makkah (~420 km), private Madinah Ziyarat tours, and day trips to Badr. All vehicles are fully private and available 24/7 with fixed SAR fares.",
    airport: {
      name: "Prince Mohammad bin Abdulaziz International Airport",
      iata: "MED",
      distanceKm: "~15 km",
      durationMins: "30–45 mins",
    },
    distanceFromMakkah: "~420 km",
    distanceFromJeddah: "~430 km",
    durationFromMakkah: "4–5 hrs",
    durationFromJeddah: "5–6 hrs",
    keyAreas: [
      "Al Haram area (Masjid an-Nabawi district)",
      "Quba district",
      "Salam district",
      "Al Awali",
      "Bab al-Salam",
      "Haramain train station area",
    ],
    ziyaratSites: [
      {
        name: "Masjid an-Nabawi (Prophet's Mosque)",
        note: "Second holiest mosque in Islam; burial site of the Prophet Muhammad ﷺ",
      },
      {
        name: "Al-Baqi Cemetery (Jannat al-Baqi)",
        note: "Adjacent to Masjid an-Nabawi; burial site of many companions and family of the Prophet ﷺ",
      },
      {
        name: "Masjid Quba",
        note: "~4 km from Masjid an-Nabawi; the first mosque ever built in Islam",
      },
      {
        name: "Masjid al-Qiblatayn",
        note: "Mosque of the Two Qiblas — where the Qibla changed from Jerusalem to Makkah",
      },
      {
        name: "Uhud Mountain & Battlefield",
        note: "~5 km north of Masjid an-Nabawi; site of the Battle of Uhud",
      },
      {
        name: "Shuhada al-Uhud Cemetery",
        note: "Burial place of the martyrs of Uhud, including Hamza ibn Abd al-Muttalib (RA)",
      },
      {
        name: "Masjid al-Fath (Seven Mosques area)",
        note: "Historic mosque area associated with the Battle of the Trench (Khandaq)",
      },
    ],
    routeIds: [
      "madinah-makkah",
      "makkah-madinah",
      "med-airport-madinah",
      "madinah-med-airport",
      "jed-airport-madinah",
      "madinah-jed-airport",
      "madinah-ziyarat",
      "madinah-badr",
      "hotel-train-station",
      "train-station-hotel",
      "per-hour",
    ],
  },
  {
    id: "jeddah",
    slug: "jeddah",
    name: "Jeddah",
    arabicName: "جدة",
    altNames: ["Jiddah", "Gateway to Makkah"],
    lat: 21.4858,
    lng: 39.1925,
    country: "Saudi Arabia",
    metaTitle: "Taxi Service in Jeddah — Airport Transfers & City Rides | Taxi Bhai",
    metaDescription:
      "Private taxi in Jeddah: from JED Airport to Makkah from SAR 250, JED to Madinah from SAR 500, local Jeddah transfers from SAR 200. 24/7, fixed fares. Book on WhatsApp.",
    shortAnswer:
      "Taxi Bhai provides private taxi services throughout Jeddah — airport transfers from King Abdulaziz International Airport (JED), connections to Makkah (~80 km) and Madinah (~430 km), local Jeddah city rides, and Jeddah Ziyarat heritage tours. Jeddah is the arrival gateway for most international Umrah pilgrims.",
    airport: {
      name: "King Abdulaziz International Airport",
      iata: "JED",
      distanceKm: "~30 km from city centre",
      durationMins: "20–40 mins to Jeddah hotels",
    },
    distanceFromMakkah: "~80 km",
    distanceFromMadinah: "~430 km",
    durationFromMakkah: "1–1.5 hrs",
    durationFromMadinah: "5–6 hrs",
    keyAreas: [
      "King Abdulaziz International Airport (JED)",
      "Al-Balad (UNESCO Heritage district)",
      "Corniche (Red Sea waterfront)",
      "Al Shati district",
      "Al Hamra",
      "Obhur",
      "Al Rehab",
    ],
    ziyaratSites: [
      {
        name: "Al-Balad (Historic Jeddah)",
        note: "UNESCO World Heritage Site — coral-stone architecture, traditional souks, historic mosques",
      },
      {
        name: "Floating Mosque (Masjid Al-Rahma)",
        note: "Built over the Red Sea — appears to float at high tide; iconic Jeddah landmark",
      },
      {
        name: "Corniche",
        note: "30 km Red Sea waterfront promenade with parks, cafes, and views",
      },
      {
        name: "King Fahd Fountain",
        note: "World's tallest fountain — 312 m high, visible from across the city",
      },
      {
        name: "Al-Shafi Mosque",
        note: "Historic mosque in Al-Balad; one of Jeddah's oldest places of worship",
      },
    ],
    routeIds: [
      "jed-airport-makkah",
      "makkah-jed-airport",
      "jed-airport-madinah",
      "madinah-jed-airport",
      "jed-airport-jed-hotel",
      "jeddah-ziyarat",
      "per-hour",
    ],
  },
];
