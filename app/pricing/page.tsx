import type { Metadata } from "next";
import { generateBreadcrumbJsonLd, generateServiceJsonLdItems } from "@/lib/schema/jsonLd";
import { FareFinder } from "@/components/sections/FareFinder";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { routes } from "@/lib/data/routes";
import { vehicles } from "@/lib/data/vehicles";
import { pricingTable } from "@/lib/data/pricing";
import type { VehicleId } from "@/lib/data/pricing";
import { buildQuickBookWhatsAppUrl } from "@/lib/utils";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Fares & Pricing — Umrah Taxi Routes | SAR Pricing Table",
  description:
    "Full Taxi Bhai pricing table for all Umrah routes: Jeddah Airport to Makkah from SAR 250, Makkah to Madinah from SAR 450, Madinah Airport from SAR 100. Fixed fares, no hidden charges.",
  alternates: { canonical: "https://www.taxibhai.com/pricing" },
};

export default function PricingPage() {
  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.taxibhai.com" },
    { name: "Pricing", url: "https://www.taxibhai.com/pricing" },
  ]);
  const serviceLdItems = generateServiceJsonLdItems();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {serviceLdItems.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      {/* Hero */}
      <div className="bg-brand-900 pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Transparent Pricing
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Fixed fares for every Umrah route
          </h1>
          <p className="text-brand-300 text-lg max-w-2xl leading-relaxed">
            All prices are in Saudi Riyals (SAR). Fixed fares — no meter, no surge pricing,
            no hidden charges. The fare you see is the fare you pay.
          </p>
        </div>
      </div>

      {/* Interactive fare finder */}
      <FareFinder />

      {/* Full pricing table */}
      <section
        className="py-16 lg:py-24 bg-parchment"
        aria-labelledby="full-pricing-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="full-pricing-heading"
            className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-3"
          >
            Full pricing table — all routes &amp; vehicles (SAR)
          </h2>
          <p className="text-brand-600 text-sm mb-8">
            Prices in Saudi Riyals (SAR). Click &quot;Book&quot; on any row to open WhatsApp with the route pre-filled.
          </p>

          {/* Desktop table */}
          <div
            className="hidden md:block overflow-x-auto rounded-2xl border border-sand shadow-sm"
            role="region"
            aria-label="Full pricing table"
          >
            <table className="pricing-table w-full" aria-label="Taxi Bhai pricing — all routes and vehicles">
              <thead>
                <tr>
                  <th scope="col" className="text-left min-w-[200px]">Route</th>
                  {vehicles.map((v) => (
                    <th key={v.id} scope="col" title={`${v.name} — ${v.capacity}`}>
                      {v.name.split(" ")[0]}
                    </th>
                  ))}
                  <th scope="col">Book</th>
                </tr>
              </thead>
              <tbody>
                {pricingTable.map((row) => {
                  const route = routes.find((r) => r.id === row.routeId);
                  if (!route) return null;
                  return (
                    <tr key={row.routeId} id={row.routeId}>
                      <td>
                        <span className="font-semibold text-brand-900">{route.label}</span>
                        <br />
                        <span className="text-brand-400 font-normal text-xs">
                          {route.approxDuration}
                        </span>
                      </td>
                      {vehicles.map((v) => {
                        const price = row.prices[v.id as VehicleId];
                        return (
                          <td
                            key={v.id}
                            className="text-center font-semibold text-brand-800"
                            aria-label={`${v.name}: SAR ${price}`}
                          >
                            {price.toLocaleString()}
                          </td>
                        );
                      })}
                      <td className="text-center">
                        <a
                          href={buildQuickBookWhatsAppUrl(
                            route.label,
                            "your preferred vehicle",
                            row.prices.camry
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-brand-800 hover:bg-brand-700 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                          aria-label={`Book ${route.label} on WhatsApp`}
                        >
                          Book
                          <ExternalLink size={10} aria-hidden="true" />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile: accordion route cards */}
          <div className="md:hidden flex flex-col gap-4" role="list" aria-label="Pricing by route">
            {pricingTable.map((row) => {
              const route = routes.find((r) => r.id === row.routeId);
              if (!route) return null;
              return (
                <div
                  key={row.routeId}
                  id={`mobile-${row.routeId}`}
                  className="bg-white border border-sand rounded-2xl overflow-hidden"
                  role="listitem"
                >
                  <div className="px-5 py-4 bg-brand-900">
                    <h3 className="font-display font-bold text-white text-base">
                      {route.label}
                    </h3>
                    <p className="text-brand-400 text-xs">{route.approxDuration} · {route.distanceKm}</p>
                  </div>
                  <div className="px-5 py-4">
                    <ul className="space-y-2">
                      {vehicles.map((v) => {
                        const price = row.prices[v.id as VehicleId];
                        return (
                          <li
                            key={v.id}
                            className="flex items-center justify-between py-1.5 border-b border-sand last:border-0"
                          >
                            <div>
                              <span className="text-brand-800 font-semibold text-sm">{v.name}</span>
                              <span className="text-brand-400 text-xs ml-2">{v.capacity}</span>
                            </div>
                            <span className="font-bold text-brand-900 tabular-nums">
                              SAR {price.toLocaleString()}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                    <a
                      href={buildQuickBookWhatsAppUrl(route.label, "your preferred vehicle", row.prices.camry)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center justify-center gap-2 bg-brand-800 hover:bg-brand-700 text-white font-semibold text-sm px-4 py-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                      aria-label={`Book ${route.label} on WhatsApp`}
                    >
                      Book this route on WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-brand-400 text-xs mt-6 text-center">
            All prices in Saudi Riyals (SAR). Prices are fixed and inclusive — no additional charges.
            Child seats available on request. Contact us for custom group quotes.
          </p>
        </div>
      </section>

      {/* Answer-first route descriptions — for SEO/AI extractability */}
      <section
        className="py-16 bg-white"
        aria-labelledby="route-answers-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="route-answers-heading"
            className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-10"
          >
            Route pricing — detailed answers
          </h2>
          <div className="space-y-10">
            {routes
              .filter((r) =>
                [
                  "jed-airport-makkah",
                  "makkah-madinah",
                  "madinah-makkah",
                  "makkah-jed-airport",
                  "med-airport-madinah",
                  "makkah-ziyarat",
                  "madinah-ziyarat",
                ].includes(r.id)
              )
              .map((route) => {
                const row = pricingTable.find((p) => p.routeId === route.id);
                if (!row) return null;
                return (
                  <article key={route.id} id={route.id} className="scroll-mt-24">
                    <h3 className="font-display text-xl font-bold text-brand-900 mb-2">
                      How much is a taxi from {route.from} to {route.to}?
                    </h3>
                    <p className="text-brand-700 leading-relaxed mb-3">
                      A private taxi from {route.from} to {route.to} with Taxi Bhai costs
                      SAR {row.prices.camry} in a Camry/Sonata sedan, SAR {row.prices.staria}{" "}
                      in a Hyundai Staria (7-seater), SAR {row.prices.gmc} in a GMC Yukon XL,
                      SAR {row.prices.hiace} in a Toyota Hiace, SAR {row.prices.coaster}{" "}
                      in a Coaster, or SAR {row.prices.bus} in a full-size bus. The journey
                      takes approximately {route.approxDuration}.
                    </p>
                    <p className="text-brand-700/70 text-sm leading-relaxed mb-3">
                      {route.description}
                    </p>
                    <ul className="space-y-1 mb-4">
                      {route.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-brand-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={buildQuickBookWhatsAppUrl(route.label, "sedan", row.prices.camry)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-brand-800 hover:bg-brand-700 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                    >
                      Book {route.label} on WhatsApp
                    </a>
                  </article>
                );
              })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
