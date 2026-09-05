import type { Metadata } from "next";
import { generateBreadcrumbJsonLd } from "@/lib/schema/jsonLd";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Taxi Bhai — Phone, WhatsApp & Email",
  description:
    "Contact Taxi Bhai: Saudi Arabia +966 57 306 7785, UK +44 7413 467638, Pakistan +92 371 2300606, or email info@taxibhai.com. Available 24/7 across Makkah, Madinah, and Jeddah.",
  alternates: { canonical: "https://www.taxibhai.com/contact" },
};

const contacts = [
  {
    icon: <MessageCircle className="w-6 h-6" aria-hidden="true" />,
    label: "WhatsApp (fastest)",
    value: "+966 57 306 7785",
    href: "https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%27d%20like%20to%20book%20a%20transfer.",
    sub: "Instant booking — recommended",
    external: true,
  },
  {
    icon: <Phone className="w-6 h-6" aria-hidden="true" />,
    label: "Saudi Arabia",
    value: "+966 57 306 7785",
    href: "tel:+966573067785",
    sub: "Available 24/7",
    external: false,
  },
  {
    icon: <Phone className="w-6 h-6" aria-hidden="true" />,
    label: "UK",
    value: "+44 7413 467638",
    href: "tel:+447413467638",
    sub: "For UK-based pilgrims",
    external: false,
  },
  {
    icon: <Phone className="w-6 h-6" aria-hidden="true" />,
    label: "Pakistan",
    value: "+92 371 2300606",
    href: "tel:+923712300606",
    sub: "For Pakistan-based pilgrims",
    external: false,
  },
  {
    icon: <Mail className="w-6 h-6" aria-hidden="true" />,
    label: "Email",
    value: "info@taxibhai.com",
    href: "mailto:info@taxibhai.com",
    sub: "For enquiries and group bookings",
    external: false,
  },
];

export default function ContactPage() {
  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.taxibhai.com" },
    { name: "Contact", url: "https://www.taxibhai.com/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero */}
      <div className="bg-brand-900 pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Contact Us
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Get in touch with Taxi Bhai
          </h1>
          <p className="text-brand-300 text-lg max-w-2xl leading-relaxed">
            Available 24/7 across Makkah, Madinah, and Jeddah. WhatsApp is the fastest
            way to book — we typically confirm within minutes.
          </p>
        </div>
      </div>

      <div className="py-16 lg:py-24 bg-parchment">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact cards */}
            <div>
              <h2 className="font-display text-2xl font-bold text-brand-950 mb-7">
                Contact details
              </h2>
              <div className="flex flex-col gap-4">
                {contacts.map((c) => (
                  <a
                    key={c.value}
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 bg-white border border-sand hover:border-brand-300 rounded-2xl px-5 py-4 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-700 group-hover:bg-brand-100 transition-colors shrink-0">
                      {c.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-brand-500 text-xs font-semibold uppercase tracking-widest mb-0.5">
                        {c.label}
                      </p>
                      <p className="font-bold text-brand-900 text-base">{c.value}</p>
                      <p className="text-brand-400 text-xs">{c.sub}</p>
                    </div>
                  </a>
                ))}

                {/* Hours + location */}
                <div className="bg-white border border-sand rounded-2xl px-5 py-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-700 shrink-0">
                      <Clock className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-brand-500 text-xs font-semibold uppercase tracking-widest mb-0.5">Hours</p>
                      <p className="font-bold text-brand-900">24 hours, 7 days a week</p>
                      <p className="text-brand-400 text-xs">Including Ramadan, Hajj &amp; Umrah season</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-sand rounded-2xl px-5 py-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-700 shrink-0">
                      <MapPin className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-brand-500 text-xs font-semibold uppercase tracking-widest mb-0.5">Service Area</p>
                      <p className="font-bold text-brand-900">Makkah · Madinah · Jeddah · Taif · Badr</p>
                      <p className="text-brand-400 text-xs">Saudi Arabia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="font-display text-2xl font-bold text-brand-950 mb-7">
                Find us on Google Maps
              </h2>
              <div
                className="rounded-2xl overflow-hidden border border-sand shadow-sm"
                style={{ height: 420 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d950648.0440662403!2d38.5516310370137!3d21.45010982520586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42437b73c6f2ce29%3A0x875c6edaf11a50ac!2sTaxi%20Bhai!5e0!3m2!1sen!2s!4v1788606380116!5m2!1sen!2s"
                  width="100%"
                  height="420"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Taxi Bhai on Google Maps — Makkah, Madinah, and Jeddah"
                  aria-label="Google Maps showing Taxi Bhai service area across Makkah, Madinah, and Jeddah"
                />
              </div>
              <p className="text-brand-400 text-xs mt-3 text-center">
                Taxi Bhai — serving Makkah, Madinah, Jeddah, Taif, and Badr
              </p>

              {/* Quick WhatsApp CTA */}
              <a
                href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%27d%20like%20to%20book%20a%20transfer."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2.5 bg-brand-800 hover:bg-brand-700 text-white font-bold px-6 py-3.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
                aria-label="Message Taxi Bhai on WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.117 1.533 5.849L.072 23.99l6.328-1.434A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.68-.513-5.214-1.41l-.374-.216-3.757.852.882-3.653-.24-.388A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Message us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
