import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const routeLinks = [
  { label: "Jeddah Airport → Makkah", href: "/pricing#jed-airport-makkah" },
  { label: "Makkah → Madinah", href: "/pricing#makkah-madinah" },
  { label: "Madinah → Makkah", href: "/pricing#madinah-makkah" },
  { label: "Madinah Airport → Hotel", href: "/pricing#med-airport-madinah" },
  { label: "Makkah Ziyarat", href: "/pricing#makkah-ziyarat" },
  { label: "Madinah Ziyarat", href: "/pricing#madinah-ziyarat" },
  { label: "Makkah → Taif", href: "/pricing#makkah-taif-ziyarat" },
  { label: "View All Pricing", href: "/pricing" },
];

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "About Taxi Bhai", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Pricing & Routes", href: "/pricing" },
  { label: "Book a Ride", href: "/book-ride" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/18gKWJ2csX/?mibextid=wwXIfr",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/taxibhai_",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@taxi_bhai",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@taxi_bhai",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.88a8.2 8.2 0 004.79 1.52V6.95a4.85 4.85 0 01-1.02-.26z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/taxibhai/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-950 text-white" aria-label="Site footer">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-700 text-white text-sm font-bold font-display">
                TB
              </span>
              <span className="font-display font-bold text-xl text-white leading-none">
                Taxi<span className="text-gold-400">Bhai</span>
              </span>
            </Link>
            <p className="text-brand-300 text-sm leading-relaxed mb-6">
              Professional 24/7 private Umrah taxi service across Makkah (Mecca),
              Madinah, and Jeddah. Airport transfers, hotel-to-hotel, and Ziyarah tours.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Taxi Bhai on ${s.name}`}
                  className="text-brand-400 hover:text-gold-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Routes */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Popular Routes
            </h3>
            <ul className="space-y-2">
              {routeLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-300 hover:text-gold-400 text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-300 hover:text-gold-400 text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+966573067785"
                  className="flex items-start gap-2 text-brand-300 hover:text-gold-400 text-sm transition-colors"
                >
                  <Phone size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span>+966 57 306 7785 (Saudi Arabia)</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+447413467638"
                  className="flex items-start gap-2 text-brand-300 hover:text-gold-400 text-sm transition-colors"
                >
                  <Phone size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span>+44 7413 467638 (UK)</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+923712300606"
                  className="flex items-start gap-2 text-brand-300 hover:text-gold-400 text-sm transition-colors"
                >
                  <Phone size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span>+92 371 2300606 (Pakistan)</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@taxibhai.com"
                  className="flex items-start gap-2 text-brand-300 hover:text-gold-400 text-sm transition-colors"
                >
                  <Mail size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span>info@taxibhai.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-brand-300 text-sm">
                <MapPin size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>Makkah · Madinah · Jeddah · Taif · Badr</span>
              </li>
              <li className="flex items-start gap-2 text-brand-300 text-sm">
                <Clock size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>Available 24 hours, 7 days a week</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service areas strip */}
      <div className="border-t border-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-brand-400 text-xs text-center">
            <strong className="text-brand-300">Service Area:</strong>{" "}
            Makkah (Mecca) · Madinah · Jeddah · Taif · Badr · Makkah Airport ·
            Madinah Airport (MED) · King Abdulaziz International Airport (JED) ·
            Haramain Train Station · Saudi Arabia
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-brand-400 text-xs">
            &copy; {new Date().getFullYear()} Taxi Bhai. All rights reserved.
          </p>
          <p className="text-brand-500 text-xs">
            Reliable Umrah Taxi Service · Makkah · Madinah · Jeddah
          </p>
        </div>
      </div>
    </footer>
  );
}
