import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatSAR(amount: number): string {
  return `SAR ${amount.toLocaleString()}`;
}

export interface WhatsAppBookingParams {
  pickupLocation: string;
  dropoffLocation: string;
  date: string;
  time: string;
  passengers: string;
  vehicle: string;
  visaType: string;
  flightNumber: string;
  luggage: string;
  whatsappNumber: string;
}

export function buildWhatsAppUrl(params: Partial<WhatsAppBookingParams>): string {
  const lines = [
    "Hello Taxi Bhai, I'd like to book a transfer:",
    params.pickupLocation ? `📍 Pickup: ${params.pickupLocation}` : null,
    params.dropoffLocation ? `🏁 Drop-off: ${params.dropoffLocation}` : null,
    params.date ? `📅 Date: ${params.date}` : null,
    params.time ? `🕐 Time: ${params.time}` : null,
    params.passengers ? `👥 Passengers: ${params.passengers}` : null,
    params.vehicle ? `🚗 Vehicle: ${params.vehicle}` : null,
    params.visaType ? `🛂 Visa type: ${params.visaType}` : null,
    params.flightNumber ? `✈️ Flight: ${params.flightNumber}` : null,
    params.luggage ? `🧳 Luggage: ${params.luggage}` : null,
    params.whatsappNumber ? `📱 My WhatsApp: ${params.whatsappNumber}` : null,
    "",
    "Please confirm availability and pricing. JazakAllah khair.",
  ]
    .filter(Boolean)
    .join("\n");

  const encoded = encodeURIComponent(lines);
  return `https://wa.me/966573067785?text=${encoded}`;
}

export function buildQuickBookWhatsAppUrl(
  route: string,
  vehicle: string,
  price: number
): string {
  const text = `Hello Taxi Bhai, I'd like to book:\n🚕 Route: ${route}\n🚗 Vehicle: ${vehicle}\n💰 Price shown: SAR ${price}\n\nPlease confirm availability. JazakAllah khair.`;
  return `https://wa.me/966573067785?text=${encodeURIComponent(text)}`;
}
