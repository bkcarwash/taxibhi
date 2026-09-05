"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Plane, MapPin, Hotel, ArrowRight } from "lucide-react";

const services = [
  {
    id: "airport",
    icon: <Plane className="w-7 h-7" aria-hidden="true" />,
    title: "Airport Pick-Ups",
    subtitle: "Jeddah (JED) · Madinah (MED)",
    description:
      "Comfortable, timely airport pick-up from King Abdulaziz International Airport (Jeddah) or Madinah Airport. Driver monitors your flight, meets you in arrivals with a name board, and assists with luggage — no surprises, fixed fares.",
    image: "/images/vehicles/van-jeddah-airport.webp",
    imageAlt:
      "Taxi Bhai private van ready for airport pick-up at Jeddah King Abdulaziz International Airport",
    cta: "Book airport transfer",
    href: "/book-ride?service=airport",
    stats: [
      { label: "Cities covered", value: "3" },
      { label: "Airports", value: "2" },
    ],
  },
  {
    id: "ziyarat",
    icon: <MapPin className="w-5 h-5" aria-hidden="true" />,
    title: "Ziyarah Tours",
    subtitle: "Makkah · Madinah · Jeddah",
    description:
      "Private Ziyarah tours of sacred Islamic sites — Masjid al-Haram, Jabal Nour, Masjid an-Nabawi, Uhud, Masjid Quba, Mina, Arafat, and more. Your schedule, your pace.",
    image: "/images/ziyarat/madinah-nabawi-green-dome.webp",
    imageAlt:
      "Masjid an-Nabawi green dome in Madinah — Ziyarah tour sacred site visited with Taxi Bhai",
    cta: "Explore Ziyarah tours",
    href: "/services#ziyarat",
    stats: [],
  },
  {
    id: "hotel",
    icon: <Hotel className="w-5 h-5" aria-hidden="true" />,
    title: "Hotel Transfers",
    subtitle: "Makkah ↔ Madinah · All hotels",
    description:
      "Easy hotel-to-hotel transfers between Makkah and Madinah — the most travelled Umrah route. Private vehicle, fixed fare, rest stop included.",
    image: "/images/vehicles/van-madinah-makkah.webp",
    imageAlt:
      "Taxi Bhai private transfer van on the Makkah to Madinah intercity hotel route",
    cta: "View hotel routes",
    href: "/services#hotel-transfers",
    stats: [],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

export function Services() {
  return (
    <section
      className="py-20 lg:py-28 bg-parchment"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-brand-600 text-sm font-semibold uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h2
            id="services-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-950 max-w-lg"
          >
            Umrah transfer services for every journey
          </h2>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-5">
          {/* ── Large card — Airport ── */}
          <motion.article
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative bg-brand-900 text-white rounded-2xl overflow-hidden flex flex-col justify-between min-h-[380px]"
          >
            {/* Subtle SVG pattern */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              aria-hidden="true"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-rule='evenodd'%3E%3Cpath d='M20 0l5.77 3.33v6.67L20 13.33l-5.77-3.33V3.33zM20 26.67l5.77 3.33v6.67L20 40l-5.77-3.33V30z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            {/* Vehicle photo — right half, desktop only */}
            <div
              className="absolute right-0 top-0 bottom-0 w-[44%] hidden lg:block"
              aria-hidden="true"
            >
              <Image
                src={services[0].image}
                alt={services[0].imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 0px, 340px"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, #022c22 0%, rgba(2,44,34,0.85) 20%, rgba(2,44,34,0.25) 75%, transparent 100%)",
                }}
              />
            </div>

            {/* Content */}
            <div className="relative p-8 lg:p-10 lg:max-w-[58%]">
              <div className="w-14 h-14 rounded-2xl bg-brand-700/60 border border-brand-600 flex items-center justify-center mb-6 text-gold-400">
                {services[0].icon}
              </div>
              <p className="text-brand-300 text-xs font-semibold uppercase tracking-widest mb-2">
                {services[0].subtitle}
              </p>
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">
                {services[0].title}
              </h3>
              <p className="text-brand-300 leading-relaxed max-w-sm">
                {services[0].description}
              </p>
            </div>

            {/* CTA row */}
            <div className="relative p-8 lg:p-10 lg:max-w-[58%] flex items-center justify-between">
              <Link
                href={services[0].href}
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-brand-950 font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
              >
                {services[0].cta}
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <div className="flex gap-5">
                {services[0].stats.map((s) => (
                  <div key={s.label} className="text-right">
                    <div className="font-display text-2xl font-bold text-gold-400">
                      {s.value}
                    </div>
                    <div className="text-brand-400 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          {/* ── Right column: 2 smaller cards with real photos ── */}
          <div className="flex flex-col gap-5">
            {services.slice(1).map((service, i) => (
              <motion.article
                key={service.id}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex-1 bg-white border border-sand rounded-2xl overflow-hidden hover:border-brand-300 hover:shadow-md transition-all duration-200 flex flex-col"
              >
                {/* Photo strip */}
                <div className="relative h-44 shrink-0">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"
                    aria-hidden="true"
                  />
                  {/* Icon overlay */}
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-brand-700 shadow-sm">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-brand-500 text-xs font-semibold uppercase tracking-widest mb-1.5">
                    {service.subtitle}
                  </p>
                  <h3 className="font-display text-xl font-bold text-brand-950 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-brand-700/70 text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-brand-700 hover:text-brand-600 font-semibold text-sm transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-sm"
                  >
                    {service.cta}
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
