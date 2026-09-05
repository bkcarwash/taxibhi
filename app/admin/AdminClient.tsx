"use client";

import { useState, useTransition } from "react";
import { Copy, Check, Trash2, RefreshCw, LogOut, Phone } from "lucide-react";
import { deleteBooking, updateStatus } from "./actions";
import { useRouter } from "next/navigation";

export type Booking = {
  id: string;
  name: string;
  phone: string;
  route_label: string;
  vehicle_name: string;
  travel_date: string;
  passengers: number;
  notes: string | null;
  status: "pending" | "confirmed" | "cancelled";
  created_at: string;
};

const STATUS_STYLES = {
  pending:   "bg-amber-100 text-amber-800 border-amber-200",
  confirmed: "bg-green-100 text-green-800 border-green-200",
  cancelled: "bg-red-100 text-red-800 border-red-200",
};

const NEXT_STATUS: Record<string, "pending" | "confirmed" | "cancelled"> = {
  pending:   "confirmed",
  confirmed: "cancelled",
  cancelled: "pending",
};

function copyText(booking: Booking) {
  const date = new Date(booking.travel_date).toLocaleDateString("en-GB", {
    weekday: "short", day: "numeric", month: "long", year: "numeric",
  });
  return [
    `🚕 TAXI BHAI BOOKING`,
    ``,
    `👤 Name: ${booking.name}`,
    `📱 Phone: ${booking.phone}`,
    `🗺️ Route: ${booking.route_label}`,
    `🚗 Vehicle: ${booking.vehicle_name}`,
    `📅 Date: ${date}`,
    `👥 Passengers: ${booking.passengers}`,
    booking.notes ? `📝 Notes: ${booking.notes}` : null,
    `✅ Status: ${booking.status.toUpperCase()}`,
  ].filter(Boolean).join("\n");
}

function BookingCard({ booking }: { booking: Booking }) {
  const [copied, setCopied] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleCopy() {
    navigator.clipboard.writeText(copyText(booking));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleStatus() {
    startTransition(() => updateStatus(booking.id, NEXT_STATUS[booking.status]));
  }

  function handleDelete() {
    if (!confirm(`Delete booking for ${booking.name}?`)) return;
    startTransition(() => deleteBooking(booking.id));
  }

  const date = new Date(booking.travel_date).toLocaleDateString("en-GB", {
    day: "numeric", month: "short", year: "numeric",
  });
  const created = new Date(booking.created_at).toLocaleDateString("en-GB", {
    day: "numeric", month: "short", hour: "2-digit", minute: "2-digit",
  });

  return (
    <div className={`bg-white rounded-2xl border p-5 transition-opacity ${isPending ? "opacity-50" : ""}`}>
      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <h3 className="font-bold text-brand-900 text-base">{booking.name}</h3>
          <a
            href={`tel:${booking.phone}`}
            className="flex items-center gap-1 text-sm text-brand-500 hover:text-brand-700 mt-0.5"
          >
            <Phone size={12} />
            {booking.phone}
          </a>
        </div>
        <button
          onClick={handleStatus}
          className={`shrink-0 text-xs font-semibold px-3 py-1 rounded-full border cursor-pointer transition-all hover:opacity-80 ${STATUS_STYLES[booking.status]}`}
          title="Click to change status"
        >
          {booking.status}
        </button>
      </div>

      {/* Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
        <Detail label="Route" value={booking.route_label} />
        <Detail label="Vehicle" value={booking.vehicle_name} />
        <Detail label="Date" value={date} />
        <Detail label="Passengers" value={String(booking.passengers)} />
        {booking.notes && <Detail label="Notes" value={booking.notes} className="sm:col-span-2" />}
      </div>

      <p className="text-brand-300 text-xs mb-4">Received: {created}</p>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={handleCopy}
          className="flex-1 flex items-center justify-center gap-2 bg-brand-50 hover:bg-brand-100 text-brand-800 font-semibold text-sm py-2.5 rounded-xl transition-colors"
        >
          {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
          {copied ? "Copied!" : "Copy"}
        </button>
        <a
          href={`https://wa.me/${booking.phone.replace(/\D/g, "")}?text=${encodeURIComponent(`Hi ${booking.name}, your Taxi Bhai booking is confirmed! Route: ${booking.route_label} · Date: ${date} · Vehicle: ${booking.vehicle_name}. See you soon! 🚕`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors"
          title="WhatsApp customer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.117 1.533 5.849L.072 23.99l6.328-1.434A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.68-.513-5.214-1.41l-.374-.216-3.757.852.882-3.653-.24-.388A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          WA
        </a>
        <button
          onClick={handleDelete}
          className="flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors"
          title="Delete booking"
        >
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
}

function Detail({ label, value, className = "" }: { label: string; value: string; className?: string }) {
  return (
    <div className={className}>
      <p className="text-xs text-brand-400 font-medium uppercase tracking-wider">{label}</p>
      <p className="text-sm text-brand-800 font-medium mt-0.5">{value}</p>
    </div>
  );
}

export function AdminClient({ bookings, total }: { bookings: Booking[]; total: number }) {
  const router = useRouter();
  const [filter, setFilter] = useState<"all" | "pending" | "confirmed" | "cancelled">("all");

  const filtered = filter === "all" ? bookings : bookings.filter((b) => b.status === filter);

  const counts = {
    pending:   bookings.filter((b) => b.status === "pending").length,
    confirmed: bookings.filter((b) => b.status === "confirmed").length,
    cancelled: bookings.filter((b) => b.status === "cancelled").length,
  };

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-brand-950 text-white px-4 sm:px-6 py-4 flex items-center justify-between sticky top-0 z-30">
        <div>
          <h1 className="font-display font-bold text-lg">Taxi Bhai Admin</h1>
          <p className="text-white/40 text-xs">{total} total bookings</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.refresh()}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            title="Refresh"
          >
            <RefreshCw size={16} />
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
          >
            <LogOut size={14} />
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {(["pending", "confirmed", "cancelled"] as const).map((s) => (
            <div
              key={s}
              className={`bg-white rounded-2xl p-4 border text-center cursor-pointer transition-all ${filter === s ? "ring-2 ring-brand-500" : "hover:border-brand-200"}`}
              onClick={() => setFilter(filter === s ? "all" : s)}
            >
              <p className={`text-2xl font-bold font-display ${s === "pending" ? "text-amber-600" : s === "confirmed" ? "text-green-600" : "text-red-500"}`}>
                {counts[s]}
              </p>
              <p className="text-xs text-brand-500 font-medium capitalize mt-0.5">{s}</p>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-5 flex-wrap">
          {(["all", "pending", "confirmed", "cancelled"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-sm px-4 py-1.5 rounded-full font-medium transition-colors capitalize ${filter === f ? "bg-brand-800 text-white" : "bg-white text-brand-600 border border-sand hover:border-brand-300"}`}
            >
              {f} {f !== "all" && `(${counts[f as keyof typeof counts]})`}
            </button>
          ))}
        </div>

        {/* Cards */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-brand-400">
            <p className="text-4xl mb-3">📋</p>
            <p className="font-medium">No {filter === "all" ? "" : filter} bookings yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filtered.map((b) => (
              <BookingCard key={b.id} booking={b} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
