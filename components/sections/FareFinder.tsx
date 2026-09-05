"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeftRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { routes } from "@/lib/data/routes";
import { vehicles } from "@/lib/data/vehicles";
import { pricingTable } from "@/lib/data/pricing";
import { buildQuickBookWhatsAppUrl, formatSAR } from "@/lib/utils";
import type { VehicleId } from "@/lib/data/pricing";

const popularRoutes = [
  "jed-airport-makkah",
  "makkah-madinah",
  "madinah-makkah",
  "makkah-jed-airport",
  "med-airport-madinah",
  "makkah-ziyarat",
];

function useCountUp(target: number, duration = 500) {
  const [value, setValue] = useState(target);
  const prevRef = useRef(target);

  useEffect(() => {
    const start = prevRef.current;
    const end = target;
    if (start === end) return;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
    prevRef.current = end;
  }, [target, duration]);

  return value;
}

export function FareFinder() {
  const [routeId, setRouteId] = useState(popularRoutes[0]);
  const [vehicleId, setVehicleId] = useState<VehicleId>("camry");

  const selectedRoute = routes.find((r) => r.id === routeId);
  const priceRow = pricingTable.find((r) => r.routeId === routeId);
  const price = priceRow ? priceRow.prices[vehicleId] : null;
  const selectedVehicle = vehicles.find((v) => v.id === vehicleId);
  const animatedPrice = useCountUp(price ?? 0);

  const whatsappUrl =
    selectedRoute && selectedVehicle && price
      ? buildQuickBookWhatsAppUrl(
          selectedRoute.label,
          selectedVehicle.name,
          price
        )
      : "https://wa.me/966573067785";

  return (
    <section
      className="py-20 lg:py-28 bg-brand-950 relative overflow-hidden"
      aria-labelledby="fare-finder-heading"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-rule='evenodd'%3E%3Cpath d='M30 0l8.66 5v10L30 20l-8.66-5V5zm0 40l8.66 5v10L30 60l-8.66-5V45z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Instant Fare Finder
          </p>
          <h2
            id="fare-finder-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Know your fare before you travel
          </h2>
          <p className="text-brand-300 text-lg max-w-xl mx-auto">
            Select your route and vehicle to see the exact fixed fare instantly.
            No meters, no surprises.
          </p>
        </motion.div>

        {/* Finder card */}
        <motion.div
          className="max-w-3xl mx-auto bg-white/[0.05] border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-3 sm:gap-4 items-center mb-6">
            {/* Route select */}
            <div>
              <label
                htmlFor="fare-route"
                className="block text-brand-300 text-xs font-semibold uppercase tracking-widest mb-2"
              >
                Route
              </label>
              <select
                id="fare-route"
                value={routeId}
                onChange={(e) => setRouteId(e.target.value)}
                className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent appearance-none cursor-pointer"
                aria-label="Select route"
              >
                {routes
                  .filter((r) => r.id !== "per-hour")
                  .map((r) => (
                    <option key={r.id} value={r.id} className="bg-brand-900 text-white">
                      {r.label}
                    </option>
                  ))}
              </select>
            </div>

            <div
              className="flex justify-center text-brand-500"
              aria-hidden="true"
            >
              <ArrowLeftRight size={18} />
            </div>

            {/* Vehicle select */}
            <div>
              <label
                htmlFor="fare-vehicle"
                className="block text-brand-300 text-xs font-semibold uppercase tracking-widest mb-2"
              >
                Vehicle
              </label>
              <select
                id="fare-vehicle"
                value={vehicleId}
                onChange={(e) => setVehicleId(e.target.value as VehicleId)}
                className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent appearance-none cursor-pointer"
                aria-label="Select vehicle"
              >
                {vehicles.map((v) => (
                  <option key={v.id} value={v.id} className="bg-brand-900 text-white">
                    {v.name} — {v.capacity}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Price display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${routeId}-${vehicleId}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white/[0.08] border border-white/10 rounded-2xl p-5 sm:p-6 mb-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-brand-400 text-xs uppercase tracking-widest mb-1">
                    Fixed fare
                  </p>
                  <div
                    className="font-display text-5xl sm:text-6xl font-bold text-white tabular-nums"
                    aria-live="polite"
                    aria-label={`Fixed fare: SAR ${animatedPrice}`}
                  >
                    <span className="text-gold-400 text-2xl font-semibold mr-1">SAR</span>
                    {animatedPrice.toLocaleString()}
                  </div>
                  {selectedRoute && (
                    <p className="text-brand-300 text-sm mt-1">
                      {selectedRoute.from} → {selectedRoute.to}
                    </p>
                  )}
                </div>
                {selectedRoute && (
                  <div className="flex flex-col gap-1.5 text-sm shrink-0">
                    <div className="flex items-center gap-2 text-brand-300">
                      <span className="text-brand-500 text-xs uppercase tracking-widest">Duration</span>
                      <span className="text-white font-medium">
                        {selectedRoute.approxDuration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-brand-300">
                      <span className="text-brand-500 text-xs uppercase tracking-widest">Distance</span>
                      <span className="text-white font-medium">
                        {selectedRoute.distanceKm}
                      </span>
                    </div>
                    {selectedVehicle && (
                      <div className="flex items-center gap-2 text-brand-300">
                        <span className="text-brand-500 text-xs uppercase tracking-widest">Capacity</span>
                        <span className="text-white font-medium">
                          {selectedVehicle.capacity}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2.5 bg-gold-500 hover:bg-gold-400 active:bg-gold-600 text-brand-950 font-bold px-6 py-3.5 rounded-full transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950"
              aria-label={`Book this route on WhatsApp for SAR ${price ?? 0}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4.5 h-4.5"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.117 1.533 5.849L.072 23.99l6.328-1.434A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.68-.513-5.214-1.41l-.374-.216-3.757.852.882-3.653-.24-.388A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Book this route on WhatsApp
            </a>
            <Link
              href="/pricing"
              className="flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/40 text-white text-sm font-semibold px-5 py-3.5 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950"
            >
              All routes & fares
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </motion.div>

        {/* Quick-access popular routes */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-brand-400 text-xs uppercase tracking-widest text-center mb-4">
            Popular routes
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {popularRoutes.map((rid) => {
              const r = routes.find((x) => x.id === rid);
              if (!r) return null;
              const p = pricingTable.find((x) => x.routeId === rid);
              const fromSAR = p ? p.prices.camry : null;
              return (
                <button
                  key={rid}
                  onClick={() => setRouteId(rid)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
                    routeId === rid
                      ? "bg-gold-500 text-brand-950"
                      : "bg-white/10 text-brand-300 hover:bg-white/20 hover:text-white"
                  }`}
                  aria-pressed={routeId === rid}
                  aria-label={`Select route: ${r.label}${fromSAR ? `, from SAR ${fromSAR}` : ""}`}
                >
                  {r.label.split("→")[0].trim()} → {r.label.split("→")[1]?.trim()}
                  {fromSAR && (
                    <span className="ml-1.5 opacity-70 font-normal">
                      from {formatSAR(fromSAR)}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
