"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/book-ride", label: "Book Ride" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-sand"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">

          {/* Logo — same image on every page and scroll state */}
          <Link
            href="/"
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-xl"
            aria-label="Taxi Bhai — home"
          >
            <div
              className={cn(
                "transition-all duration-300 rounded-xl px-2 py-1",
                scrolled ? "" : "bg-white/95 shadow-md"
              )}
            >
              <Image
                src="/images/logo/taxibhai-logo-header.webp"
                alt="Taxi Bhai — Umrah Taxi Service"
                width={712}
                height={256}
                priority
                style={{ height: "36px", width: "auto" }}
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500",
                  scrolled
                    ? "text-brand-900/80 hover:text-brand-800 hover:bg-brand-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+966573067785"
              className={cn(
                "flex items-center gap-1.5 text-sm font-medium transition-colors duration-200",
                scrolled ? "text-brand-800 hover:text-brand-600" : "text-white/80 hover:text-white"
              )}
              aria-label="Call Taxi Bhai Saudi number"
            >
              <Phone size={14} aria-hidden="true" />
              +966 57 306 7785
            </a>
            <a
              href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%27d%20like%20to%20book%20a%20transfer."
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2",
                scrolled
                  ? "bg-brand-800 hover:bg-brand-700 text-white"
                  : "bg-white/15 hover:bg-white/25 text-white border border-white/30"
              )}
              aria-label="Book on WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.117 1.533 5.849L.072 23.99l6.328-1.434A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.68-.513-5.214-1.41l-.374-.216-3.757.852.882-3.653-.24-.388A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Book on WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className={cn(
              "lg:hidden p-2 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500",
              scrolled
                ? "text-brand-900 hover:bg-brand-50"
                : "text-white hover:bg-white/10"
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden bg-white border-t border-sand overflow-hidden transition-all duration-300",
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
        aria-hidden={!open}
      >
        <nav
          className="px-4 py-4 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3 rounded-lg text-base font-medium text-brand-900 hover:bg-brand-50 hover:text-brand-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 mt-3 border-t border-sand flex flex-col gap-2">
            <a
              href="tel:+966573067785"
              className="flex items-center gap-2 px-3 py-2 text-brand-800 font-medium text-sm"
            >
              <Phone size={16} aria-hidden="true" />
              +966 57 306 7785 (Saudi)
            </a>
            <a
              href="tel:+447413467638"
              className="flex items-center gap-2 px-3 py-2 text-brand-800 font-medium text-sm"
            >
              <Phone size={16} aria-hidden="true" />
              +44 7413 467638 (UK)
            </a>
            <a
              href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%27d%20like%20to%20book%20a%20transfer."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-center gap-2 bg-brand-800 text-white text-sm font-semibold px-4 py-3 rounded-full transition-colors active:scale-95"
            >
              Book on WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
