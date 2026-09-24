export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogSection {
  heading?: string;
  paragraphs: string[];
  list?: string[];
  isAnswerBlock?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  h1: string;
  excerpt: string;
  publishDate: string;
  lastModified: string;
  category: string;
  categorySlug: string;
  readMinutes: number;
  sections: BlogSection[];
  faqs: BlogFAQ[];
  relatedPageLinks: { label: string; href: string }[];
  relatedSlugs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "jeddah-airport-to-makkah-taxi-guide",
    title: "Jeddah Airport to Makkah Taxi: Cost, Time & What to Expect (2026)",
    h1: "Jeddah Airport to Makkah by taxi — cost, time, and what to expect",
    excerpt:
      "Everything you need to know about taking a private taxi from King Abdulaziz International Airport (JED) to Makkah — prices by vehicle type, journey time, and exactly what happens when you land.",
    publishDate: "2026-09-24",
    lastModified: "2026-09-24",
    category: "Route Guides",
    categorySlug: "route-guides",
    readMinutes: 5,
    sections: [
      {
        isAnswerBlock: true,
        paragraphs: [
          "A private taxi from Jeddah Airport (JED) to Makkah costs SAR 250 in a sedan. The journey covers ~80 km via the Haramain Expressway and takes about 1 to 1.5 hours. Your driver meets you inside the arrivals hall with a name board and helps load your luggage.",
        ],
      },
      {
        heading: "How much does a taxi from Jeddah Airport to Makkah cost?",
        paragraphs: [
          "All fares are per vehicle — not per person. A family of four pays the same as a solo traveller in the same car.",
          "Prices are fixed before travel. There is no meter and no surge pricing.",
        ],
        list: [
          "Sedan (Toyota Camry / Hyundai Sonata): SAR 250 — suits 1 to 3 passengers with standard luggage",
          "Hyundai Staria 7-seater: SAR 350 — ideal for families up to 7",
          "GMC Yukon XL (luxury SUV): SAR 550 — comfortable for 7 with ample boot space",
          "Toyota Hiace (up to 12 passengers): SAR 400",
          "Coaster (up to 30 passengers): SAR 800",
        ],
      },
      {
        heading: "How long does the journey take?",
        paragraphs: [
          "The drive from Jeddah Airport to Makkah takes 1 to 1.5 hours under normal conditions. The distance is approximately 80 km via the Haramain Expressway.",
          "During peak times — Friday afternoons, Hajj season, and late-night Umrah rushes — allow an extra 20 to 30 minutes. Your driver monitors traffic in real time and may use alternative routes if needed.",
          "Unlike public transport, your private taxi leaves when you are ready. There is no waiting for other passengers.",
        ],
      },
      {
        heading: "What happens when you land at Jeddah Airport?",
        paragraphs: [
          "International flights arrive at Terminal 1 of King Abdulaziz International Airport. After you collect your luggage and clear customs, your driver will be waiting in the arrivals meeting area.",
          "Your driver holds a name board with your name. If your flight is delayed, they already know — Taxi Bhai monitors your flight number in real time. You do not need to call or send a message.",
          "The driver helps carry your luggage to the car and loads it. You then head directly to your Makkah hotel. There are no stops unless you request one.",
        ],
      },
      {
        heading: "How to book your airport transfer",
        paragraphs: [
          "The fastest way to book is via WhatsApp: message +966 57 306 7785. Tell us your flight number, landing date and time, number of passengers, luggage pieces, and your Makkah hotel name.",
          "You will receive a confirmed fare and driver details before your flight. Book at least 24 hours in advance for airport transfers. Same-day bookings are accepted subject to availability.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best time to take a taxi from Jeddah Airport to Makkah?",
        answer:
          "Any time — Taxi Bhai operates 24/7. If you land during late afternoon on a Friday or during peak Hajj season, allow an extra 20–30 minutes for traffic. All other times, the 1 to 1.5 hour journey time is reliable.",
      },
      {
        question: "Can I share a taxi from Jeddah Airport to Makkah to cut costs?",
        answer:
          "Taxi Bhai provides fully private transfers only. There are no shared passengers in your vehicle. If you are travelling with family or a group, this means the entire car is yours at the same fixed price.",
      },
      {
        question: "Do I need to pay in advance for the airport transfer?",
        answer:
          "No — you pay the driver in cash (SAR) on arrival at your Makkah hotel. For groups booking multiple vehicles, a bank transfer deposit option is available.",
      },
    ],
    relatedPageLinks: [
      { label: "Jeddah Airport → Makkah route page", href: "/routes/jeddah-airport-to-makkah" },
      { label: "Airport transfer service", href: "/services/airport-transfers" },
      { label: "All route fares", href: "/pricing" },
      { label: "Our fleet", href: "/fleet" },
      { label: "Taxi in Jeddah", href: "/locations/jeddah" },
      { label: "Taxi in Makkah", href: "/locations/makkah" },
    ],
    relatedSlugs: ["makkah-madinah-taxi-vs-train", "umrah-taxi-booking-guide", "umrah-taxi-prices-2026"],
  },

  {
    slug: "makkah-madinah-taxi-vs-train",
    title: "Makkah to Madinah: Private Taxi vs Haramain Train (2026)",
    h1: "Makkah to Madinah — private taxi vs Haramain High-Speed Train",
    excerpt:
      "Travelling from Makkah to Madinah for Umrah? Here is an honest comparison of private taxi and the Haramain High-Speed Railway — total travel time, cost, convenience, and which is better for families with luggage.",
    publishDate: "2026-09-24",
    lastModified: "2026-09-24",
    category: "Route Guides",
    categorySlug: "route-guides",
    readMinutes: 6,
    sections: [
      {
        isAnswerBlock: true,
        paragraphs: [
          "A private taxi from Makkah to Madinah costs SAR 450 for a sedan and takes 4 to 5 hours door-to-door. The Haramain High-Speed Train runs in about 2 hours — but you also need a taxi to the station, time to check in, and a transfer from Madinah station to your hotel. For most families, the total door-to-door time is similar.",
        ],
      },
      {
        heading: "At a glance — taxi vs train",
        paragraphs: [
          "Private taxi: SAR 450 per vehicle (sedan), 4–5 hrs door-to-door, no station transfers, fully private, available 24/7.",
          "Haramain train: SAR 150–320 per person (varies), ~2 hrs on the train, but you also need: taxi to Makkah station (~SAR 100, 30–45 mins), waiting at the station (30 mins minimum), and taxi from Madinah station to your hotel (~SAR 100+, 30–45 mins). Total: 3.5 to 5 hrs and a higher cost for families.",
        ],
      },
      {
        heading: "When private taxi is the better choice",
        paragraphs: [
          "For most Umrah pilgrims, a private taxi is the easier and more practical option.",
        ],
        list: [
          "You have heavy luggage — no carrying bags through stations or waiting for lifts",
          "You are travelling as a family — especially with young children or elderly relatives",
          "Your hotel is not close to the Haramain train station in Makkah or Madinah",
          "You are travelling at night or very early in the morning (train hours are limited)",
          "You value flexibility — the taxi leaves when you are ready, not on a train timetable",
          "You are a group of 4 or more — per-person train fares add up quickly",
        ],
      },
      {
        heading: "When the Haramain train makes more sense",
        paragraphs: [
          "The train has real advantages in certain situations.",
        ],
        list: [
          "You are a solo traveller and want the cheapest option",
          "You enjoy the experience of high-speed rail travel",
          "Your hotel is walking distance from a Haramain station",
          "You have very little luggage",
        ],
      },
      {
        heading: "What does the Makkah to Madinah taxi fare include?",
        paragraphs: [
          "The SAR 450 sedan fare includes hotel pickup at your Makkah hotel entrance, a rest stop of around 20–30 minutes approximately halfway through the journey, bottled water in the vehicle, and drop-off at your Madinah hotel entrance.",
          "There are no additional charges unless you request extras — such as a child seat or additional luggage for a very large group.",
          "A Hyundai Staria (7-seater) costs SAR 550 for the same journey — useful for families of 4 to 7.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is it safe to travel by private taxi on the Makkah to Madinah route?",
        answer:
          "Yes. The Haramain Expressway (Route 15) is a well-maintained, modern dual carriageway. Taxi Bhai drivers are experienced on this route and vehicles are regularly serviced. A rest stop is built into every Makkah–Madinah booking.",
      },
      {
        question: "Can a family of six take a taxi from Makkah to Madinah together?",
        answer:
          "Yes — a Hyundai Staria (7-seater) fits up to 7 passengers and costs SAR 550. That is less than 6 individual train tickets, and it includes door-to-door hotel service with no station transfers or luggage handling.",
      },
      {
        question: "How long does the Makkah to Madinah taxi journey actually take?",
        answer:
          "The drive takes 4 to 5 hours. The total door-to-door time including the rest stop is typically 4.5 to 5.5 hours. By comparison, taking the train door-to-door (taxi to station, wait, train, taxi from station to hotel) often takes 3.5 to 5 hours — making the time difference smaller than most people expect.",
      },
    ],
    relatedPageLinks: [
      { label: "Makkah → Madinah route details", href: "/routes/makkah-to-madinah" },
      { label: "Madinah → Makkah route details", href: "/routes/madinah-to-makkah" },
      { label: "Intercity transfer service", href: "/services/intercity-transfers" },
      { label: "Group & family transport", href: "/services/group-family-transport" },
      { label: "All route fares", href: "/pricing" },
    ],
    relatedSlugs: ["jeddah-airport-to-makkah-taxi-guide", "umrah-taxi-prices-2026", "umrah-taxi-booking-guide"],
  },

  {
    slug: "umrah-taxi-booking-guide",
    title: "How to Book a Private Taxi for Umrah in Saudi Arabia — 2026 Guide",
    h1: "How to book a private taxi for Umrah — a step-by-step guide",
    excerpt:
      "First Umrah trip? This guide explains how to book a private taxi in Saudi Arabia — what information to provide, how far ahead to book, what to expect on the day, and what every fare includes.",
    publishDate: "2026-09-24",
    lastModified: "2026-09-24",
    category: "Booking Tips",
    categorySlug: "booking-tips",
    readMinutes: 5,
    sections: [
      {
        isAnswerBlock: true,
        paragraphs: [
          "Book a Taxi Bhai transfer via WhatsApp: message +966 57 306 7785. Tell us your pickup location, drop-off, travel date and time, number of passengers, and preferred vehicle. You will receive a confirmed price. That price does not change.",
        ],
      },
      {
        heading: "What is a private Umrah taxi?",
        paragraphs: [
          "A private Umrah taxi is a vehicle booked exclusively for your group. No strangers share the ride. The driver goes only where you need to go, on your schedule.",
          "This is different from a shared shuttle, where you wait for other passengers and make multiple stops. With a private taxi, you go directly to your destination.",
          "All Taxi Bhai vehicles are air-conditioned, and all fares are fixed in Saudi Riyals (SAR) before travel.",
        ],
      },
      {
        heading: "How to book — step by step",
        paragraphs: [
          "Step 1: Open WhatsApp and send a message to +966 57 306 7785.",
          "Step 2: Share your details — pickup location (hotel name or airport terminal), drop-off location, travel date, time, number of passengers, and your preferred vehicle type.",
          "Step 3: You receive a confirmed price. This is your fixed fare — it will not change on the day.",
          "Step 4: The night before your trip, you receive your driver's name and mobile number.",
          "Step 5: On the day, the driver picks you up from your hotel lobby (or meets you in the airport arrivals hall with a name board). You pay in cash at the end of the journey.",
        ],
      },
      {
        heading: "How far ahead should I book?",
        paragraphs: [
          "For airport transfers, book at least 24 hours before your flight lands. This gives time to assign a driver and confirm flight monitoring.",
          "For the Makkah to Madinah and Madinah to Makkah routes, book 24 to 48 hours ahead.",
          "For Ziyarat tours and local city rides, 12 hours is usually enough.",
          "Same-day bookings are accepted for all services subject to vehicle availability. WhatsApp is the fastest way to check.",
        ],
      },
      {
        heading: "What information do I need to have ready?",
        list: [
          "Flight number — for airport pickup transfers (so the driver monitors your arrival time)",
          "Hotel name and area — so the driver knows exactly where to go",
          "Travel date and time",
          "Number of passengers (adults and children separately)",
          "Approximate luggage count",
          "Vehicle preference — sedan, 7-seater, GMC, or larger",
        ],
        paragraphs: [],
      },
      {
        heading: "What does every fare include?",
        paragraphs: [
          "Every Taxi Bhai fare includes a private vehicle (your group only), air conditioning, luggage loading assistance, and a fixed price with no hidden charges.",
          "Long-distance routes (over 2 hours) include a rest stop at a licensed rest area and bottled water in the vehicle.",
          "Airport pickups include real-time flight monitoring and a name board meet-and-greet in arrivals.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I change or cancel my booking?",
        answer:
          "Yes — WhatsApp us as soon as possible. Cancellations made at least 6 hours before the pickup time are free of charge. Same-day cancellations may incur a fee depending on whether a driver has already departed.",
      },
      {
        question: "Do you provide child seats?",
        answer:
          "Yes — child seats are available on request at no extra charge. Mention how many you need and the approximate age or weight of the child when booking.",
      },
      {
        question: "What currency do I need to pay?",
        answer:
          "Saudi Riyals (SAR). Most passengers pay cash to the driver at the end of the journey. Bank transfer is available for advance deposits on large group bookings.",
      },
    ],
    relatedPageLinks: [
      { label: "Book a ride", href: "/book-ride" },
      { label: "All services", href: "/services" },
      { label: "Pricing table", href: "/pricing" },
      { label: "FAQ page", href: "/faq" },
      { label: "Our fleet", href: "/fleet" },
    ],
    relatedSlugs: ["jeddah-airport-to-makkah-taxi-guide", "makkah-madinah-taxi-vs-train", "umrah-taxi-prices-2026"],
  },

  {
    slug: "makkah-ziyarat-sacred-sites-taxi",
    title: "Makkah Ziyarat by Private Taxi — Complete Guide to Sacred Sites (2026)",
    h1: "Makkah Ziyarat by private taxi — the complete guide",
    excerpt:
      "A complete guide to visiting the sacred Islamic sites around Makkah (Mecca) by private taxi — which sites are covered, how long the tour takes, what it costs, and how to book.",
    publishDate: "2026-09-24",
    lastModified: "2026-09-24",
    category: "Services",
    categorySlug: "services",
    readMinutes: 6,
    sections: [
      {
        isAnswerBlock: true,
        paragraphs: [
          "A private Makkah Ziyarat tour with Taxi Bhai starts from SAR 200 in a sedan. The tour visits Jabal al-Nour (Cave of Hira), Jabal Thawr, Mina, Muzdalifah, and Arafat. Tours take 4 to 8 hours. Your driver waits at every site while you visit — there is no rushing.",
        ],
      },
      {
        heading: "What is Ziyarat?",
        paragraphs: [
          "Ziyarat (also spelled Ziyarah) means visitation of sacred places. For Umrah pilgrims, the days spent in Makkah are often a once-in-a-lifetime opportunity to visit sites connected to Islamic history.",
          "A private Ziyarat tour is the most comfortable way to do this. You travel in your own vehicle, visit sites at your own pace, and your driver waits while you take your time at each location.",
          "Tours are private — no strangers in the vehicle, no fixed group schedule.",
        ],
      },
      {
        heading: "Sacred sites included in the Makkah Ziyarat tour",
        paragraphs: [
          "Your driver will take you to all the major Makkah Ziyarat sites. The main ones are:",
        ],
        list: [
          "Jabal al-Nour (Mountain of Light): home to the Cave of Hira, where the first Quranic revelation was received by the Prophet ﷺ. There is a climb of around 300 steps to reach the cave.",
          "Jabal Thawr: the cave where the Prophet ﷺ sheltered with Abu Bakr during the Hijra (migration to Madinah).",
          "Mina: the valley where Hajj pilgrims stay and where the symbolic stoning of Shaitan takes place.",
          "Muzdalifah: the open plain between Mina and Arafat, where Hajj pilgrims spend a night under the sky.",
          "Arafat (Jabal ar-Rahmah): the plain where the Prophet ﷺ gave his Farewell Sermon — the most important stop in the entire Hajj.",
          "Masjid al-Khaif (Mina): the mosque in Mina where the Prophet ﷺ performed prayers.",
        ],
      },
      {
        heading: "How the tour works",
        paragraphs: [
          "Your driver picks you up from your Makkah hotel at a time you choose. You then visit the sites in a logical order to save travel time.",
          "At each site, the driver parks and waits while you explore, pray, or take photographs. You move on when you are ready — there is no tour group and no time pressure.",
          "Most pilgrims finish within 5 to 6 hours, but if you want to climb Jabal al-Nour (about 30 to 45 minutes up and down) and spend meaningful time at each place, allow a full day.",
        ],
      },
      {
        heading: "Makkah Ziyarat prices 2026",
        paragraphs: [
          "All prices are for the entire vehicle — not per person.",
        ],
        list: [
          "Sedan (Toyota Camry / Hyundai Sonata): SAR 200 — suits 1 to 3 passengers",
          "Hyundai Staria (7-seater): SAR 300 — ideal for families",
          "GMC Yukon XL (luxury SUV): SAR 500",
          "Toyota Hiace (up to 12 passengers): SAR 600",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does a Makkah Ziyarat tour take?",
        answer:
          "A typical tour takes 4 to 8 hours. If you want to climb Jabal al-Nour (about 30–45 minutes up and down) and spend meaningful time at each site, allow a full day. You set the pace — the driver waits at each location.",
      },
      {
        question: "Is the Makkah Ziyarat tour available at night?",
        answer:
          "Yes — Taxi Bhai operates 24/7. Many pilgrims prefer early-morning or post-Isha Ziyarat tours when the weather is cooler and crowds are smaller at sites like Jabal al-Nour. Simply specify your preferred departure time when booking.",
      },
      {
        question: "Can I combine Makkah Ziyarat with a trip to Taif?",
        answer:
          "Yes — Taxi Bhai offers a separate Makkah to Taif day trip (approx. 180 km round trip, SAR 450 sedan). This covers Islamic heritage sites in Taif including Masjid Abdullah ibn Abbas and the scenic mountain road. It is typically booked as a separate day to Makkah Ziyarat.",
      },
    ],
    relatedPageLinks: [
      { label: "Umrah & Ziyarat transport service", href: "/services/umrah-ziyarat-transport" },
      { label: "Taxi in Makkah", href: "/locations/makkah" },
      { label: "Makkah to Taif day trip fares", href: "/pricing#makkah-taif-ziyarat" },
      { label: "Group transport", href: "/services/group-family-transport" },
      { label: "Book a Ziyarat tour", href: "/book-ride" },
    ],
    relatedSlugs: ["umrah-taxi-booking-guide", "umrah-taxi-prices-2026", "jeddah-airport-to-makkah-taxi-guide"],
  },

  {
    slug: "umrah-taxi-prices-2026",
    title: "Umrah Taxi Prices in Saudi Arabia 2026 — Complete Fare Guide",
    h1: "Umrah taxi prices in Saudi Arabia 2026 — complete fare guide",
    excerpt:
      "Full price list for private Umrah taxi services across Saudi Arabia in 2026 — airport transfers, Makkah to Madinah, Ziyarat tours, and hourly hire. All prices in SAR, per vehicle, fixed before travel.",
    publishDate: "2026-09-24",
    lastModified: "2026-09-24",
    category: "Pricing",
    categorySlug: "pricing",
    readMinutes: 5,
    sections: [
      {
        isAnswerBlock: true,
        paragraphs: [
          "Private Umrah taxi fares in Saudi Arabia start from SAR 100 for local city rides and go up to SAR 1,400 for large groups on the Makkah–Madinah route. All fares are per vehicle — not per person — and are fixed when you book. There is no meter and no surge pricing.",
        ],
      },
      {
        heading: "Airport transfer fares",
        paragraphs: [
          "These are the sedan prices. Larger vehicles (Staria, GMC, Hiace, Coaster) cost more — see the full pricing page for the complete table.",
        ],
        list: [
          "Jeddah Airport (JED) → Makkah: SAR 250 sedan | SAR 350 Staria | SAR 550 GMC",
          "Jeddah Airport (JED) → Madinah: SAR 500 sedan | SAR 600 Staria | SAR 1,000 GMC",
          "Jeddah Airport (JED) → Jeddah Hotel: SAR 200 sedan",
          "Madinah Airport (MED) → Madinah Hotel: SAR 150 sedan",
          "Madinah Airport (MED) → Makkah: SAR 500 sedan | SAR 600 Staria | SAR 1,000 GMC",
        ],
      },
      {
        heading: "Intercity transfer fares (hotel to hotel)",
        paragraphs: [
          "All intercity fares include a rest stop and bottled water. The vehicle goes from your hotel door to your destination hotel door.",
        ],
        list: [
          "Makkah → Madinah: SAR 450 sedan | SAR 550 Staria | SAR 1,000 GMC | SAR 1,400 bus",
          "Madinah → Makkah: SAR 450 sedan | SAR 550 Staria | SAR 1,000 GMC | SAR 1,400 bus",
        ],
      },
      {
        heading: "Ziyarat tour fares",
        paragraphs: [
          "Ziyarat tours are full-day or half-day private tours of sacred sites. The driver waits at each location while you visit.",
        ],
        list: [
          "Makkah Ziyarat (Jabal al-Nour, Arafat, Mina, Muzdalifah): SAR 200 sedan",
          "Madinah Ziyarat (Masjid an-Nabawi area, Quba, Uhud, Al-Baqi): SAR 200 sedan",
          "Jeddah Ziyarat (Al-Balad old city, Corniche, Islamic sites): SAR 600 sedan",
          "Makkah → Taif day trip (City of Roses, ~180 km round trip): SAR 450 sedan",
          "Madinah → Badr day trip (historic battlefield, ~150 km one way): SAR 400 sedan",
        ],
      },
      {
        heading: "Local city ride fares",
        list: [
          "Hotel ↔ Haramain Train Station (Makkah or Madinah): SAR 100 sedan",
          "Jeddah Airport ↔ Jeddah Hotel: SAR 200 sedan",
          "Hourly hire — Toyota Camry: SAR 100/hr | Staria: SAR 120/hr | GMC: SAR 180/hr (minimum 1 hour)",
        ],
        paragraphs: [],
      },
      {
        heading: "What is included in every fare?",
        paragraphs: [
          "Every Taxi Bhai fare includes: a private vehicle (your group only, no shared passengers), air conditioning, luggage loading assistance, and a fixed price agreed before travel.",
          "Long routes (over 2 hours) also include a rest stop and bottled water.",
          "Airport transfers include real-time flight monitoring and a name-board meet-and-greet.",
        ],
      },
      {
        heading: "Vehicle options",
        paragraphs: [
          "Choose the vehicle that fits your group size and budget.",
        ],
        list: [
          "Toyota Camry / Hyundai Sonata sedan: 1–3 passengers — lowest fare, comfortable for couples and individuals",
          "Hyundai Staria (7-seater MPV): up to 7 passengers — most popular for families",
          "GMC Yukon XL (luxury SUV): up to 7 passengers — premium comfort, large boot",
          "Toyota Hiace: up to 12 passengers — extended family or small tour group",
          "Coaster: up to 30 passengers — mosque groups and pilgrim delegations",
          "Full-size bus: 30+ passengers — large group bookings, please enquire",
        ],
      },
    ],
    faqs: [
      {
        question: "Are these prices for 2026?",
        answer:
          "Yes — all fares listed are current as of September 2026. Taxi Bhai fares are set annually and are not subject to daily fluctuation or surge pricing. The price you are quoted is the price you pay.",
      },
      {
        question: "Are taxi prices per person or per vehicle?",
        answer:
          "All Taxi Bhai fares are per vehicle, not per person. A family of four travelling in a sedan pays the same SAR 250 as a solo traveller. For groups, larger vehicles accommodate more passengers at a higher (but still shared) fare.",
      },
      {
        question: "Is there a discount for booking multiple vehicles or routes?",
        answer:
          "Groups booking two or more vehicles simultaneously can ask about multi-vehicle pricing. Message us on WhatsApp with your full itinerary and group size for a custom quote.",
      },
    ],
    relatedPageLinks: [
      { label: "Full pricing table", href: "/pricing" },
      { label: "Book a ride", href: "/book-ride" },
      { label: "Airport transfers", href: "/services/airport-transfers" },
      { label: "Intercity transfers", href: "/services/intercity-transfers" },
      { label: "Our fleet", href: "/fleet" },
    ],
    relatedSlugs: ["jeddah-airport-to-makkah-taxi-guide", "makkah-madinah-taxi-vs-train", "umrah-taxi-booking-guide"],
  },
];
