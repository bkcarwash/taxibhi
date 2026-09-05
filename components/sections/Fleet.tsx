"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, ArrowRight, Star } from "lucide-react";

const fleetVehicles = [
  {
    id: "staria",
    name: "Hyundai Staria",
    badge: "Most Popular",
    badgeStyle: "bg-gold-500 text-brand-950",
    capacity: "Up to 7 passengers",
    fromPrice: 350,
    image: "/images/vehicles/staria-7-seater-makkah.webp",
    imageAlt:
      "Hyundai Staria 7-seater MPV near Makkah mosque — Taxi Bhai most popular Umrah transfer vehicle",
    description:
      "Premium 7-seater MPV — the most booked vehicle for Umrah families. Spacious cabin, generous luggage space, full air-conditioning.",
    featured: true,
  },
  {
    id: "gmc",
    name: "GMC Yukon XL",
    badge: "Luxury SUV",
    badgeStyle: "bg-white/15 text-white backdrop-blur-sm",
    capacity: "Up to 7 passengers",
    fromPrice: 550,
    image: "/images/vehicles/gmc-yukon-madinah-front.webp",
    imageAlt:
      "New GMC Yukon XL full-size SUV at Madinah — Taxi Bhai luxury Umrah private transfer",
    description:
      "New-model full-size luxury SUV. Plush leather, commanding road presence — ideal for families wanting premium comfort.",
    featured: false,
  },
  {
    id: "camry",
    name: "Toyota Camry",
    badge: "Best Value",
    badgeStyle: "bg-brand-50 text-brand-700",
    capacity: "1–3 passengers",
    fromPrice: 250,
    image: "/images/vehicles/sedan-night-makkah.webp",
    imageAlt:
      "Toyota Camry sedan at night in Makkah — Taxi Bhai economical airport transfer",
    description:
      "Reliable saloon for solo travellers and couples. Most economical choice for airport and city transfers.",
    featured: false,
  },
  {
    id: "hiace",
    name: "Toyota Hiace",
    badge: "Large Groups",
    badgeStyle: "bg-brand-50 text-brand-700",
    capacity: "Up to 12 passengers",
    fromPrice: 400,
    image: "/images/vehicles/van-madinah-makkah.webp",
    imageAlt:
      "Private minibus on the Madinah to Makkah route — Taxi Bhai group Umrah transfer",
    description:
      "Spacious minibus for larger families with plenty of luggage room — great for extended family groups.",
    featured: false,
  },
  {
    id: "coaster",
    name: "Coaster / Coach",
    badge: "Group Tours",
    badgeStyle: "bg-brand-50 text-brand-700",
    capacity: "Up to 30+ passengers",
    fromPrice: 800,
    image: "/images/vehicles/coaster-bus-makkah-hotel.webp",
    imageAlt:
      "Coaster group bus at Makkah hotel — Taxi Bhai Ziyarah tour and group transfer service",
    description:
      "Mid-size and full-size coaches for Ziyarah tour groups, hotel delegations, and organised pilgrim groups.",
    featured: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export function Fleet() {
  return (
    <section
      className="py-20 lg:py-28 bg-cream"
      aria-labelledby="fleet-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-brand-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Fleet
            </p>
            <h2
              id="fleet-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-950"
            >
              6 vehicle types,
              <br />
              every group size
            </h2>
          </div>
          <Link
            href="/pricing"
            className="shrink-0 inline-flex items-center gap-2 text-brand-700 hover:text-brand-600 font-semibold text-sm transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-sm"
          >
            View all fares
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </Link>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* ── Staria — featured, spans 2 cols ── */}
          <motion.article
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-2 relative rounded-2xl overflow-hidden min-h-[300px] lg:min-h-[380px] flex flex-col justify-end"
            aria-label="Hyundai Staria — most popular Umrah vehicle"
          >
            <Image
              src={fleetVehicles[0].image}
              alt={fleetVehicles[0].imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 820px"
            />
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(to top, rgba(2,44,34,0.97) 0%, rgba(2,44,34,0.65) 45%, rgba(2,44,34,0.1) 100%)",
              }}
            />
            {/* Badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 bg-gold-500 text-brand-950 text-xs font-bold px-3 py-1.5 rounded-full">
                <Star size={10} className="fill-brand-950" aria-hidden="true" />
                {fleetVehicles[0].badge}
              </span>
            </div>
            {/* Text overlay */}
            <div className="relative p-6 lg:p-8">
              <div className="flex items-end justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-1">
                    {fleetVehicles[0].name}
                  </h3>
                  <div className="flex items-center gap-2 text-brand-200 text-sm mb-3">
                    <Users size={13} aria-hidden="true" />
                    <span>{fleetVehicles[0].capacity}</span>
                  </div>
                  <p className="text-brand-300 text-sm max-w-md leading-relaxed">
                    {fleetVehicles[0].description}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-brand-300 text-xs mb-0.5">From</p>
                  <p className="font-display text-3xl font-bold text-gold-400">
                    SAR {fleetVehicles[0].fromPrice}
                  </p>
                </div>
              </div>
            </div>
          </motion.article>

          {/* ── GMC — dark image card, 1 col ── */}
          <motion.article
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative rounded-2xl overflow-hidden min-h-[300px] flex flex-col justify-end"
            aria-label="GMC Yukon XL — luxury Umrah transfer"
          >
            <Image
              src={fleetVehicles[1].image}
              alt={fleetVehicles[1].imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
            />
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(to top, rgba(2,44,34,0.97) 0%, rgba(2,44,34,0.5) 55%, transparent 100%)",
              }}
            />
            <div className="absolute top-4 left-4">
              <span className={`inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full ${fleetVehicles[1].badgeStyle}`}>
                {fleetVehicles[1].badge}
              </span>
            </div>
            <div className="relative p-5 lg:p-6">
              <h3 className="font-display text-xl font-bold text-white mb-1">
                {fleetVehicles[1].name}
              </h3>
              <div className="flex items-center gap-1.5 text-brand-200 text-xs mb-2">
                <Users size={11} aria-hidden="true" />
                <span>{fleetVehicles[1].capacity}</span>
              </div>
              <p className="text-gold-400 font-bold text-sm">
                From SAR {fleetVehicles[1].fromPrice}
              </p>
            </div>
          </motion.article>

          {/* ── Row 2: Camry + Hiace + Coaster — white cards with image tops ── */}
          {fleetVehicles.slice(2).map((v, i) => (
            <motion.article
              key={v.id}
              custom={i + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white border border-sand rounded-2xl overflow-hidden hover:border-brand-300 hover:shadow-md transition-all duration-200 flex flex-col"
              aria-label={`${v.name} — ${v.capacity}`}
            >
              {/* Image */}
              <div className="relative h-44 shrink-0">
                <Image
                  src={v.image}
                  alt={v.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                />
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center text-xs font-bold px-2.5 py-1 rounded-full ${v.badgeStyle}`}>
                    {v.badge}
                  </span>
                </div>
              </div>
              {/* Info */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display text-lg font-bold text-brand-950">
                    {v.name}
                  </h3>
                  <p className="font-bold text-gold-700 text-sm shrink-0 tabular-nums">
                    SAR {v.fromPrice}+
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-brand-500 text-xs mb-3">
                  <Users size={11} aria-hidden="true" />
                  <span>{v.capacity}</span>
                </div>
                <p className="text-brand-700/70 text-sm leading-relaxed flex-1">
                  {v.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 bg-brand-50 border border-brand-100 rounded-2xl px-6 py-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div>
            <p className="font-semibold text-brand-900 text-sm mb-0.5">
              All vehicles are air-conditioned, cleaned before every journey.
            </p>
            <p className="text-brand-600 text-xs">
              Experienced drivers · Fixed fares · No shared passengers
            </p>
          </div>
          <Link
            href="/pricing"
            className="shrink-0 inline-flex items-center gap-2 bg-brand-900 hover:bg-brand-800 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
          >
            View full price list
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
