"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function StickyWhatsAppBar() {
  const [visible, setVisible] = useState(false);
  const [pulsed, setPulsed] = useState(false);

  useEffect(() => {
    // Show after 1.5s, pulse once
    const showTimer = setTimeout(() => {
      setVisible(true);
      const pulseTimer = setTimeout(() => setPulsed(true), 400);
      return () => clearTimeout(pulseTimer);
    }, 1500);
    return () => clearTimeout(showTimer);
  }, []);

  return (
    <div
      aria-label="Quick WhatsApp booking bar"
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 lg:hidden",
        "transition-transform duration-500 ease-out",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      {/* Safe area bottom padding */}
      <div className="bg-brand-900 pb-[env(safe-area-inset-bottom)]">
        <a
          href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%27d%20like%20to%20book%20a%20transfer."
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center justify-center gap-3 w-full py-4 px-6",
            "text-white font-semibold text-base",
            "active:bg-brand-700 transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold-400"
          )}
          aria-label="Book Taxi Bhai on WhatsApp"
        >
          <span
            className={cn(
              "relative flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366] shrink-0",
              pulsed && "animate-[pulse_0.6s_ease-out_1]"
            )}
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-5 h-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.117 1.533 5.849L.072 23.99l6.328-1.434A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.68-.513-5.214-1.41l-.374-.216-3.757.852.882-3.653-.24-.388A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
          </span>
          <div className="text-left">
            <div className="text-sm font-bold">Book on WhatsApp</div>
            <div className="text-xs text-brand-300 font-normal">
              24/7 · Instant confirmation
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 ml-auto opacity-70"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
