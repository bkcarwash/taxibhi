"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Shield, MapPin, Plane } from "lucide-react";

const pillars = [
  {
    icon: <Clock className="w-7 h-7" aria-hidden="true" />,
    number: "24/7",
    title: "Always Available",
    description:
      "Day or night, Ramadan or Hajj season — Taxi Bhai operates round the clock. Early-morning flight? Late-night inter-city transfer? We're there.",
  },
  {
    icon: <Shield className="w-7 h-7" aria-hidden="true" />,
    number: "100%",
    title: "Private & Reliable",
    description:
      "Every booking is fully private — no shared vehicles, no strangers, no uncertainty. Transparent fixed fares quoted upfront with no meter and no hidden charges.",
  },
  {
    icon: <MapPin className="w-7 h-7" aria-hidden="true" />,
    number: "5+",
    title: "Cities Covered",
    description:
      "Makkah, Madinah, Jeddah, Taif, and Badr — plus all major airports, train stations, and Haramain landmarks. One booking partner for your whole pilgrimage.",
  },
  {
    icon: <Plane className="w-7 h-7" aria-hidden="true" />,
    number: "JED · MED",
    title: "Airport Specialists",
    description:
      "We monitor flight arrivals in real time so the driver is always there — even when flights are delayed. Meet-and-greet service with name board in arrivals.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      className="py-20 lg:py-28 bg-cream"
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-start">
          {/* Left: headline + context + vehicle image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24"
          >
            <p className="text-brand-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Why Pilgrims Choose Us
            </p>
            <h2
              id="why-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-950 mb-6"
            >
              Reliable transport, so you can focus on your Umrah
            </h2>
            <p className="text-brand-700/70 text-lg leading-relaxed mb-8">
              Thousands of pilgrims from the UK, Pakistan, India, and Bangladesh
              trust Taxi Bhai for stress-free transfers throughout their Umrah
              journey.
            </p>

            {/* Pull quote */}
            <blockquote className="border-l-4 border-gold-500 pl-5 py-2">
              <p className="font-display text-lg italic text-brand-800 leading-relaxed">
                &ldquo;Makkah to Madinah, driver helpful, vehicle comfortable.&rdquo;
              </p>
              <footer className="mt-2 text-brand-500 text-sm">
                — Ahmed H., verified Google review
              </footer>
            </blockquote>

            {/* Vehicle interior photo */}
            <div className="mt-8 relative rounded-2xl overflow-hidden h-52 hidden lg:block shadow-md">
              <Image
                src="/images/vehicles/gmc-interior-seats.webp"
                alt="Premium leather interior of Taxi Bhai GMC Yukon SUV — air-conditioned and comfortable for Umrah"
                fill
                className="object-cover"
                sizes="400px"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-brand-950/70 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
                <p className="text-white text-sm font-semibold">Premium interiors</p>
                <p className="text-white/70 text-xs">
                  Leather seats · Air-conditioned · USB charging
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: 2×2 pillars grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-white border border-sand hover:border-brand-200 rounded-2xl p-6 transition-all duration-200 hover:shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-4 text-brand-700">
                  {pillar.icon}
                </div>
                <div className="font-display text-3xl font-bold text-brand-900 mb-1 tabular-nums">
                  {pillar.number}
                </div>
                <h3 className="font-display text-lg font-bold text-brand-950 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-brand-700/70 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
