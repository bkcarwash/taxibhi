import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, MapPin, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found — Taxi Bhai",
  description: "This page could not be found. Use the links below to find what you need.",
  robots: { index: false, follow: true },
};

const helpLinks = [
  { label: "Home", href: "/", icon: <Home size={15} aria-hidden="true" /> },
  { label: "All Services", href: "/services", icon: <ArrowRight size={15} aria-hidden="true" /> },
  { label: "All Routes", href: "/routes", icon: <ArrowRight size={15} aria-hidden="true" /> },
  { label: "Taxi in Makkah", href: "/locations/makkah", icon: <MapPin size={15} aria-hidden="true" /> },
  { label: "Taxi in Madinah", href: "/locations/madinah", icon: <MapPin size={15} aria-hidden="true" /> },
  { label: "Taxi in Jeddah", href: "/locations/jeddah", icon: <MapPin size={15} aria-hidden="true" /> },
  { label: "Pricing", href: "/pricing", icon: <ArrowRight size={15} aria-hidden="true" /> },
  { label: "FAQ", href: "/faq", icon: <HelpCircle size={15} aria-hidden="true" /> },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-parchment flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-24">
        <div className="max-w-lg w-full text-center">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-4">404</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-brand-950 mb-4">
            Page not found
          </h1>
          <p className="text-brand-600 text-lg mb-10 leading-relaxed">
            This page does not exist or may have moved.
            Use the links below to find what you need.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-10">
            {helpLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between gap-1.5 bg-white border border-sand hover:border-brand-300 rounded-xl px-3 py-2.5 text-sm font-medium text-brand-800 hover:text-brand-900 transition-colors"
              >
                <span>{link.label}</span>
                {link.icon}
              </Link>
            ))}
          </div>

          <a
            href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%27d%20like%20to%20book%20a%20transfer."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-800 hover:bg-brand-700 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
          >
            Book on WhatsApp
            <ArrowRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
