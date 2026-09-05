"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";

const WaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.117 1.533 5.849L.072 23.99l6.328-1.434A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.68-.513-5.214-1.41l-.374-.216-3.757.852.882-3.653-.24-.388A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

const fleet = [
  {
    id: "camry",
    name: "Camry, Sonata",
    capacity: "1–3 passengers",
    fromPrice: 250,
    image: "/ChatGPT-Image-Aug-19-2026-05_51_46-AM.webp",
    alt: "Toyota Camry — Taxi Bhai Umrah sedan transfer",
    waText: "Hello Taxi Bhai, I'd like to book a Camry / Sonata transfer.",
  },
  {
    id: "h1",
    name: "Hyundai H1",
    capacity: "Up to 7 passengers",
    fromPrice: 350,
    image: "/ChatGPT-Image-Aug-19-2026-05_55_07-AM.webp",
    alt: "Hyundai H1 van — Taxi Bhai private Umrah transfer",
    waText: "Hello Taxi Bhai, I'd like to book a Hyundai H1 transfer.",
  },
  {
    id: "staria",
    name: "Hyundai Staria",
    capacity: "Up to 7 passengers",
    fromPrice: 350,
    image: "/ChatGPT-Image-Aug-19-2026-05_57_08-AM.webp",
    alt: "Hyundai Staria — Taxi Bhai most popular Umrah vehicle",
    waText: "Hello Taxi Bhai, I'd like to book a Hyundai Staria transfer.",
  },
  {
    id: "gmc",
    name: "GMC Yukon XL",
    capacity: "Up to 7 passengers",
    fromPrice: 550,
    image: "/ChatGPT-Image-Aug-19-2026-05_59_33-AM.webp",
    alt: "GMC Yukon XL — Taxi Bhai luxury SUV Umrah transfer",
    waText: "Hello Taxi Bhai, I'd like to book a GMC Yukon XL transfer.",
  },
  {
    id: "hiace",
    name: "Hiace",
    capacity: "Up to 14 passengers",
    fromPrice: 400,
    image: "/ChatGPT-Image-Aug-20-2026-12_17_16-PM.webp",
    alt: "Toyota Hiace minibus — Taxi Bhai group Umrah transfer",
    waText: "Hello Taxi Bhai, I'd like to book a Hiace minibus transfer.",
  },
];

export function Fleet() {
  return (
    <section className="py-16 lg:py-24 bg-white" aria-labelledby="fleet-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-brand-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Vehicles
          </p>
          <h2
            id="fleet-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-950"
          >
            Discover the Perfect Vehicle
            <br className="hidden sm:block" /> for Your Journey
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {fleet.map((v, i) => (
            <motion.article
              key={v.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-sand overflow-hidden shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-200 flex flex-col"
            >
              {/* Branded vehicle image */}
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={v.image}
                  alt={v.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>

              {/* Info */}
              <div className="p-3 sm:p-4 flex flex-col flex-1 gap-2">
                <div>
                  <h3 className="font-display font-bold text-brand-900 text-sm sm:text-base leading-tight">
                    {v.name}
                  </h3>
                  <div className="flex items-center gap-1 text-brand-500 text-xs mt-0.5">
                    <Users size={10} aria-hidden="true" />
                    <span>{v.capacity}</span>
                  </div>
                </div>
                <p className="text-gold-700 font-bold text-xs sm:text-sm">
                  From SAR {v.fromPrice}
                </p>

                {/* WhatsApp button */}
                <a
                  href={`https://wa.me/966573067785?text=${encodeURIComponent(v.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-1.5 bg-brand-800 hover:bg-brand-700 active:bg-brand-900 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-colors duration-200 active:scale-[0.97] uppercase tracking-wide"
                  aria-label={`Book ${v.name} on WhatsApp`}
                >
                  <WaIcon />
                  <span className="hidden sm:inline">Book on</span> WhatsApp
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom strip */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-brand-50 border border-brand-100 rounded-2xl px-6 py-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div>
            <p className="font-semibold text-brand-900 text-sm mb-0.5">
              All vehicles air-conditioned &amp; cleaned before every journey
            </p>
            <p className="text-brand-600 text-xs">
              Experienced drivers · Fixed fares · No shared passengers
            </p>
          </div>
          <Link
            href="/pricing"
            className="shrink-0 inline-flex items-center gap-2 bg-brand-900 hover:bg-brand-800 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 active:scale-[0.97]"
          >
            View full price list
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
