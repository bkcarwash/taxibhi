import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { generateBreadcrumbJsonLd, generateWebPageJsonLd } from "@/lib/schema/jsonLd";

export const metadata: Metadata = {
  title: "Sitemap — All Pages on Taxi Bhai",
  description:
    "Complete list of all pages on taxibhai.com — services, routes, locations, blog guides, and company information.",
  alternates: { canonical: "https://www.taxibhai.com/sitemap" },
  openGraph: {
    title: "Sitemap — Taxi Bhai",
    description: "Every page on taxibhai.com, organised by section.",
    url: "https://www.taxibhai.com/sitemap",
  },
};

const sections = [
  {
    heading: "Core pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Pricing", href: "/pricing" },
      { label: "Book a Ride", href: "/book-ride" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "All Services", href: "/services" },
      { label: "Airport Transfers", href: "/services/airport-transfers" },
      { label: "Intercity Transfers", href: "/services/intercity-transfers" },
      { label: "Umrah & Ziyarat Transport", href: "/services/umrah-ziyarat-transport" },
      { label: "Group & Family Transport", href: "/services/group-family-transport" },
      { label: "Executive Chauffeur", href: "/services/executive-chauffeur" },
      { label: "Local City Rides", href: "/services/local-city-rides" },
    ],
  },
  {
    heading: "Routes",
    links: [
      { label: "All Routes", href: "/routes" },
      { label: "Jeddah Airport → Makkah", href: "/routes/jeddah-airport-to-makkah" },
      { label: "Makkah → Madinah", href: "/routes/makkah-to-madinah" },
      { label: "Madinah → Makkah", href: "/routes/madinah-to-makkah" },
      { label: "Jeddah Airport → Madinah", href: "/routes/jeddah-airport-to-madinah" },
      { label: "Madinah Airport → Madinah Hotel", href: "/routes/madinah-airport-to-madinah-hotel" },
      { label: "Madinah Airport → Makkah", href: "/routes/madinah-airport-to-makkah" },
    ],
  },
  {
    heading: "Locations",
    links: [
      { label: "All Locations", href: "/locations" },
      { label: "Taxi in Makkah", href: "/locations/makkah" },
      { label: "Taxi in Madinah", href: "/locations/madinah" },
      { label: "Taxi in Jeddah", href: "/locations/jeddah" },
    ],
  },
  {
    heading: "Blog & Guides",
    links: [
      { label: "All Guides", href: "/blog" },
      { label: "Jeddah Airport to Makkah Taxi Guide", href: "/blog/jeddah-airport-to-makkah-taxi-guide" },
      { label: "Makkah to Madinah: Taxi vs Train", href: "/blog/makkah-madinah-taxi-vs-train" },
      { label: "How to Book an Umrah Taxi", href: "/blog/umrah-taxi-booking-guide" },
      { label: "Makkah Ziyarat Sacred Sites Guide", href: "/blog/makkah-ziyarat-sacred-sites-taxi" },
      { label: "Umrah Taxi Prices 2026", href: "/blog/umrah-taxi-prices-2026" },
    ],
  },
  {
    heading: "Company & Legal",
    links: [
      { label: "About", href: "/about" },
      { label: "Our Fleet", href: "/fleet" },
      { label: "Reviews", href: "/reviews" },
      { label: "Safety & Standards", href: "/safety" },
      { label: "Booking Policy", href: "/policies/booking" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export default function SitemapPage() {
  const webPageLd = generateWebPageJsonLd({
    type: "WebPage",
    name: "Sitemap — All Pages on Taxi Bhai",
    description:
      "Complete list of all pages on taxibhai.com — services, routes, locations, blog guides, and company information.",
    url: "https://www.taxibhai.com/sitemap",
    breadcrumb: [
      { name: "Home", url: "https://www.taxibhai.com" },
      { name: "Sitemap", url: "https://www.taxibhai.com/sitemap" },
    ],
  });

  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.taxibhai.com" },
    { name: "Sitemap", url: "https://www.taxibhai.com/sitemap" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero */}
      <div className="bg-brand-900 pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-brand-400 text-xs mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span className="text-brand-300">Sitemap</span>
          </nav>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Sitemap
          </h1>
          <p className="text-brand-300 text-lg">
            Every page on taxibhai.com, organised by section.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {sections.map((section) => (
              <div key={section.heading} className="bg-white border border-sand rounded-2xl p-6">
                <h2 className="font-display text-lg font-bold text-brand-900 mb-4 pb-3 border-b border-sand">
                  {section.heading}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-brand-700 hover:text-brand-900 transition-colors group"
                      >
                        <ChevronRight
                          size={12}
                          className="text-brand-300 group-hover:text-brand-600 transition-colors"
                          aria-hidden="true"
                        />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
