"use client";

import { MapPin } from "lucide-react";

const routes = [
  {
    label: "Jeddah Airport → Makkah",
    waText: "Hello Taxi Bhai, I'd like to book a transfer from Jeddah Airport to Makkah.",
  },
  {
    label: "Makkah → Jeddah Airport",
    waText: "Hello Taxi Bhai, I'd like to book a transfer from Makkah to Jeddah Airport.",
  },
  {
    label: "Makkah → Madinah",
    waText: "Hello Taxi Bhai, I'd like to book a transfer from Makkah to Madinah.",
  },
  {
    label: "Madinah → Makkah",
    waText: "Hello Taxi Bhai, I'd like to book a transfer from Madinah to Makkah.",
  },
  {
    label: "Makkah Ziyarat",
    waText: "Hello Taxi Bhai, I'd like to book a Makkah Ziyarat tour.",
  },
  {
    label: "Madinah Ziyarat",
    waText: "Hello Taxi Bhai, I'd like to book a Madinah Ziyarat tour.",
  },
  {
    label: "Madinah → Badr",
    waText: "Hello Taxi Bhai, I'd like to book a Madinah to Badr day trip.",
  },
  {
    label: "Makkah → Taif",
    waText: "Hello Taxi Bhai, I'd like to book a Makkah to Taif day trip.",
  },
];

export function RouteButtons() {
  return (
    <section className="py-10 bg-white border-b border-sand" aria-label="Popular routes">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-brand-500 text-xs font-semibold uppercase tracking-widest mb-5">
          Popular Routes — tap to book instantly
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {routes.map((r) => (
            <a
              key={r.label}
              href={`https://wa.me/966573067785?text=${encodeURIComponent(r.waText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-800 hover:bg-brand-700 active:bg-brand-900 text-white font-semibold text-sm px-4 py-2.5 rounded-full transition-colors duration-200 active:scale-[0.97]"
            >
              <MapPin size={13} className="shrink-0" aria-hidden="true" />
              {r.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
