export interface Route {
  id: string;
  from: string;
  to: string;
  label: string;
  slug: string;
  approxDuration: string;
  distanceKm: string;
  description: string;
  highlights: string[];
}

export const routes: Route[] = [
  {
    id: "jed-airport-makkah",
    from: "Jeddah Airport (IATA: JED)",
    to: "Makkah Hotel",
    label: "Jeddah Airport → Makkah Hotel",
    slug: "jeddah-airport-to-makkah",
    approxDuration: "1–1.5 hrs",
    distanceKm: "~80 km",
    description:
      "Direct private transfer from King Abdulaziz International Airport (Jeddah) to your hotel in Makkah (Mecca). The route via the Haramain Expressway is fast and comfortable. All vehicles are air-conditioned and tracked for punctuality.",
    highlights: [
      "Meet & greet inside arrivals",
      "Flight-monitoring so the driver waits for delays",
      "Door-to-hotel luggage assist",
    ],
  },
  {
    id: "makkah-jed-airport",
    from: "Makkah Hotel",
    to: "Jeddah Airport (IATA: JED)",
    label: "Makkah Hotel → Jeddah Airport",
    slug: "makkah-to-jeddah-airport",
    approxDuration: "1–1.5 hrs",
    distanceKm: "~80 km",
    description:
      "Timely hotel pick-up in Makkah and transfer to King Abdulaziz International Airport in Jeddah. Driver arrives 10–15 minutes early as standard so you never miss a flight.",
    highlights: [
      "Scheduled ahead of your flight time",
      "Luggage assistance included",
      "Real-time traffic monitoring",
    ],
  },
  {
    id: "makkah-madinah",
    from: "Makkah Hotel",
    to: "Madinah Hotel",
    label: "Makkah Hotel → Madinah Hotel",
    slug: "makkah-to-madinah",
    approxDuration: "4–5 hrs",
    distanceKm: "~420 km",
    description:
      "The most-travelled Umrah route — a comfortable inter-city private transfer from your Makkah hotel to your hotel in Madinah Al-Munawwarah. The Haramain High-Speed Railway is an alternative, but private taxi gives door-to-door service with no station transfers.",
    highlights: [
      "Rest stop en route at a licensed rest area",
      "Bottled water provided",
      "No shared passengers — fully private",
    ],
  },
  {
    id: "madinah-makkah",
    from: "Madinah Hotel",
    to: "Makkah Hotel",
    label: "Madinah Hotel → Makkah Hotel",
    slug: "madinah-to-makkah",
    approxDuration: "4–5 hrs",
    distanceKm: "~420 km",
    description:
      "Private return transfer from Madinah to Makkah. Depart at a time that suits your schedule, with a comfort stop mid-route. Ideal for pilgrims completing their stay in Madinah before performing Umrah in Makkah.",
    highlights: [
      "Flexible departure time",
      "Comfort stop included",
      "Child seats on request",
    ],
  },
  {
    id: "med-airport-madinah",
    from: "Madinah Airport (IATA: MED)",
    to: "Madinah Hotel",
    label: "Madinah Airport → Madinah Hotel",
    slug: "madinah-airport-to-madinah-hotel",
    approxDuration: "30–45 mins",
    distanceKm: "~15 km",
    description:
      "Short private transfer from Prince Mohammad bin Abdulaziz International Airport to your hotel near Al-Masjid an-Nabawi. Driver meets you in arrivals with your name board.",
    highlights: [
      "Name-board meet & greet",
      "24/7 availability for all flight times",
      "Fixed fare — no meter surprises",
    ],
  },
  {
    id: "madinah-med-airport",
    from: "Madinah Hotel",
    to: "Madinah Airport (IATA: MED)",
    label: "Madinah Hotel → Madinah Airport",
    slug: "madinah-hotel-to-madinah-airport",
    approxDuration: "30–45 mins",
    distanceKm: "~15 km",
    description:
      "Timely pick-up from your Madinah hotel to Prince Mohammad bin Abdulaziz International Airport. Ideal for direct Madinah-departure itineraries.",
    highlights: [
      "Early morning flights accommodated",
      "Fixed transparent fare",
      "Luggage loading assistance",
    ],
  },
  {
    id: "jed-airport-madinah",
    from: "Jeddah Airport (IATA: JED)",
    to: "Madinah Hotel",
    label: "Jeddah Airport → Madinah Hotel",
    slug: "jeddah-airport-to-madinah",
    approxDuration: "5–6 hrs",
    distanceKm: "~430 km",
    description:
      "Long-haul private transfer from King Abdulaziz International Airport in Jeddah to your Madinah hotel. Popular with pilgrims whose itinerary starts with Madinah before Makkah. Includes a comfort stop.",
    highlights: [
      "Long-distance comfort — reclining seats available in larger vehicles",
      "Comfort stop included",
      "Ideal for families with luggage",
    ],
  },
  {
    id: "madinah-jed-airport",
    from: "Madinah Hotel",
    to: "Jeddah Airport (IATA: JED)",
    label: "Madinah Hotel → Jeddah Airport",
    slug: "madinah-to-jeddah-airport",
    approxDuration: "5–6 hrs",
    distanceKm: "~430 km",
    description:
      "Return long-haul private transfer from Madinah to Jeddah Airport. Scheduled to ensure sufficient time for check-in. Overnight transfers also available for very early morning flights.",
    highlights: [
      "Departure timed to your flight",
      "Overnight transfers available",
      "Fixed flat fare",
    ],
  },
  {
    id: "jeddah-ziyarat",
    from: "Jeddah",
    to: "Jeddah Ziyarat & Return",
    label: "Jeddah → Ziyarat & Return Jeddah",
    slug: "jeddah-ziyarat",
    approxDuration: "Full day",
    distanceKm: "Varies",
    description:
      "Full-day Ziyarat (Islamic heritage tour) around Jeddah's sacred and historic sites, with return to your hotel. Includes stops at the old city (Al-Balad), Corniche, and key Islamic landmarks.",
    highlights: [
      "Experienced guide-driver familiar with Islamic sites",
      "Flexible itinerary",
      "Fixed round-trip fare",
    ],
  },
  {
    id: "makkah-taif-ziyarat",
    from: "Makkah",
    to: "Taif Ziyarat & Return Makkah",
    label: "Makkah → Taif Ziyarat → Return Makkah",
    slug: "makkah-taif-ziyarat",
    approxDuration: "Full day",
    distanceKm: "~180 km round trip",
    description:
      "Day trip from Makkah to Taif — the City of Roses — visiting Islamic heritage sites including Masjid Abdullah ibn Abbas and the scenic mountain road. Returns to your Makkah hotel by evening.",
    highlights: [
      "Scenic mountain route",
      "Key Islamic sites in Taif",
      "Return to Makkah same day",
    ],
  },
  {
    id: "jed-airport-jed-hotel",
    from: "Jeddah Airport",
    to: "Jeddah Hotel",
    label: "Jeddah Airport → Jeddah Hotel",
    slug: "jeddah-airport-to-jeddah-hotel",
    approxDuration: "20–40 mins",
    distanceKm: "~30 km",
    description:
      "Private transfer from King Abdulaziz International Airport to your Jeddah hotel. Quick and comfortable — perfect for overnight layovers or Jeddah-based itineraries.",
    highlights: [
      "24/7 availability",
      "Fixed fare — no surge pricing",
      "Meet & greet available",
    ],
  },
  {
    id: "hotel-train-station",
    from: "Hotel",
    to: "Train Station (Haramain)",
    label: "Hotel → Train Station",
    slug: "hotel-to-train-station",
    approxDuration: "15–30 mins",
    distanceKm: "Varies by city",
    description:
      "Private transfer from your hotel to the Haramain High-Speed Railway station in Makkah or Madinah. Includes luggage loading. Timed to your train departure.",
    highlights: [
      "Punctual — timed to your train",
      "Luggage assistance",
      "Available in Makkah and Madinah",
    ],
  },
  {
    id: "train-station-hotel",
    from: "Train Station (Haramain)",
    to: "Hotel",
    label: "Train Station → Hotel",
    slug: "train-station-to-hotel",
    approxDuration: "15–30 mins",
    distanceKm: "Varies by city",
    description:
      "Private pick-up from the Haramain High-Speed Railway station and transfer to your hotel. Driver waits with a name board in the arrivals area.",
    highlights: [
      "Name-board meet & greet",
      "All hours available",
      "Hassle-free hotel drop-off",
    ],
  },
  {
    id: "makkah-ziyarat",
    from: "Makkah",
    to: "Makkah Ziyarat (day tour)",
    label: "Makkah Ziyarat",
    slug: "makkah-ziyarat",
    approxDuration: "4–8 hrs",
    distanceKm: "Varies",
    description:
      "Private Ziyarah tour of Makkah's sacred sites — Masjid al-Haram, Jabal al-Nour (Cave of Hira), Jabal Thawr, Mina, Muzdalifah, and Arafat. Led by an experienced driver who knows the religious significance of each site.",
    highlights: [
      "All key Makkah Ziyarah sites",
      "Private — your pace, your schedule",
      "Driver experienced in pilgrimage routes",
    ],
  },
  {
    id: "madinah-ziyarat",
    from: "Madinah",
    to: "Madinah Ziyarat (day tour)",
    label: "Madinah Ziyarat",
    slug: "madinah-ziyarat",
    approxDuration: "4–8 hrs",
    distanceKm: "Varies",
    description:
      "Private Ziyarah tour of Madinah's sacred sites — Masjid an-Nabawi, Al-Baqi Cemetery, Masjid Quba (the first mosque), Masjid al-Qiblatayn, and Uhud Mountain. Fully private, at your own pace.",
    highlights: [
      "Masjid an-Nabawi and Al-Baqi",
      "Masjid Quba and Uhud Mountain",
      "Flexible timing",
    ],
  },
  {
    id: "madinah-badr",
    from: "Madinah",
    to: "Badr",
    label: "Madinah → Badr",
    slug: "madinah-to-badr",
    approxDuration: "2.5–3 hrs one way",
    distanceKm: "~150 km",
    description:
      "Day trip from Madinah to the historic battlefield of Badr — site of Islam's first great battle. Visit the Badr Cemetery (Shuhada al-Badr) and the mosque at the battle site, then return to Madinah.",
    highlights: [
      "Historic Islamic battlefield",
      "Cemetery of Badr martyrs",
      "Return trip included",
    ],
  },
  {
    id: "per-hour",
    from: "Any location",
    to: "As required",
    label: "Per Hour Rate",
    slug: "per-hour-hire",
    approxDuration: "Minimum 1 hour",
    distanceKm: "Unlimited within hours",
    description:
      "Flexible hourly hire — choose your vehicle and book by the hour for sightseeing, multiple stops, or business travel across Makkah, Madinah, and Jeddah.",
    highlights: [
      "Flexible — no fixed route",
      "Driver on standby throughout",
      "Minimum 1-hour booking",
    ],
  },
];

export const routeSelectOptions = routes.map((r) => ({
  value: r.id,
  label: r.label,
}));
