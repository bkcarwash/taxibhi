"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, MapPin, Car, User, Phone, MessageSquare, CheckCircle, Loader2, ChevronDown } from "lucide-react";
import { routes } from "@/lib/data/routes";
import { vehicles } from "@/lib/data/vehicles";

type Step = "form" | "submitting" | "success" | "error";

export function BookingWidget() {
  const [step, setStep] = useState<Step>("form");
  const [form, setForm] = useState({
    route_id: "",
    vehicle_id: "",
    travel_date: "",
    passengers: "1",
    name: "",
    phone: "",
    notes: "",
  });

  const today = new Date().toISOString().split("T")[0];

  const selectedRoute = routes.find((r) => r.id === form.route_id);
  const selectedVehicle = vehicles.find((v) => v.id === form.vehicle_id);

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStep("submitting");

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          route_id: form.route_id,
          route_label: selectedRoute?.label ?? form.route_id,
          vehicle_id: form.vehicle_id,
          vehicle_name: selectedVehicle?.name ?? form.vehicle_id,
          travel_date: form.travel_date,
          passengers: Number(form.passengers),
          notes: form.notes,
        }),
      });

      if (!res.ok) throw new Error("Server error");
      setStep("success");
    } catch {
      setStep("error");
    }
  }

  const waText = encodeURIComponent(
    `Hello Taxi Bhai, I'd like to book:\n• Route: ${selectedRoute?.label ?? "—"}\n• Vehicle: ${selectedVehicle?.name ?? "—"}\n• Date: ${form.travel_date}\n• Passengers: ${form.passengers}\n• Name: ${form.name}\n• Phone: ${form.phone}${form.notes ? `\n• Notes: ${form.notes}` : ""}`
  );

  return (
    <section id="book" className="bg-sand-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_560px] gap-12 items-start">

          {/* Left: copy */}
          <div className="lg:sticky lg:top-28">
            <p className="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Instant Booking
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-900 mb-4 leading-tight">
              Book Your Transfer
              <br />
              <span className="text-brand-600">in 60 Seconds</span>
            </h2>
            <p className="text-brand-600 text-base leading-relaxed mb-6 max-w-md">
              Fill in the quick form and we confirm by WhatsApp within minutes — usually under 5. No payment needed now; pay on the day.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Fixed fares · no surge pricing",
                "WhatsApp confirmation in minutes",
                "Free cancellation 24 hrs before travel",
                "All vehicles air-conditioned",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-brand-700">
                  <CheckCircle size={15} className="text-brand-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-2xl px-5 py-4 border border-sand flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.117 1.533 5.849L.072 23.99l6.328-1.434A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.68-.513-5.214-1.41l-.374-.216-3.757.852.882-3.653-.24-.388A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-brand-900 text-sm">Prefer WhatsApp?</p>
                <a
                  href={`https://wa.me/966573067785?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-500 hover:text-brand-700 underline underline-offset-2"
                >
                  Message us directly →
                </a>
              </div>
            </div>
          </div>

          {/* Right: form card */}
          <div className="bg-white rounded-3xl shadow-xl border border-sand overflow-hidden">
            <AnimatePresence mode="wait">

              {/* FORM */}
              {step === "form" && (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="p-6 sm:p-8 space-y-5"
                >
                  <h3 className="font-display font-bold text-xl text-brand-900">Your booking details</h3>

                  {/* Route */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-500 uppercase tracking-wider mb-1.5">
                      <MapPin size={11} className="inline mr-1" />Route
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={form.route_id}
                        onChange={(e) => set("route_id", e.target.value)}
                        className="w-full appearance-none bg-brand-50 border border-brand-100 rounded-xl px-4 py-3 text-sm text-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent pr-9"
                      >
                        <option value="">Select your route…</option>
                        {routes.map((r) => (
                          <option key={r.id} value={r.id}>{r.label}</option>
                        ))}
                      </select>
                      <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Vehicle */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-500 uppercase tracking-wider mb-1.5">
                      <Car size={11} className="inline mr-1" />Vehicle
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={form.vehicle_id}
                        onChange={(e) => set("vehicle_id", e.target.value)}
                        className="w-full appearance-none bg-brand-50 border border-brand-100 rounded-xl px-4 py-3 text-sm text-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent pr-9"
                      >
                        <option value="">Select vehicle…</option>
                        {vehicles.map((v) => (
                          <option key={v.id} value={v.id}>{v.name} ({v.capacity})</option>
                        ))}
                      </select>
                      <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Date + Passengers row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-500 uppercase tracking-wider mb-1.5">
                        <Calendar size={11} className="inline mr-1" />Travel date
                      </label>
                      <input
                        type="date"
                        required
                        min={today}
                        value={form.travel_date}
                        onChange={(e) => set("travel_date", e.target.value)}
                        className="w-full bg-brand-50 border border-brand-100 rounded-xl px-4 py-3 text-sm text-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-brand-500 uppercase tracking-wider mb-1.5">
                        <Users size={11} className="inline mr-1" />Passengers
                      </label>
                      <input
                        type="number"
                        required
                        min={1}
                        max={50}
                        value={form.passengers}
                        onChange={(e) => set("passengers", e.target.value)}
                        className="w-full bg-brand-50 border border-brand-100 rounded-xl px-4 py-3 text-sm text-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Name + Phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-500 uppercase tracking-wider mb-1.5">
                        <User size={11} className="inline mr-1" />Your name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ahmed Ali"
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        className="w-full bg-brand-50 border border-brand-100 rounded-xl px-4 py-3 text-sm text-brand-900 placeholder:text-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-brand-500 uppercase tracking-wider mb-1.5">
                        <Phone size={11} className="inline mr-1" />WhatsApp / phone
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+966 5X XXX XXXX"
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        className="w-full bg-brand-50 border border-brand-100 rounded-xl px-4 py-3 text-sm text-brand-900 placeholder:text-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-500 uppercase tracking-wider mb-1.5">
                      <MessageSquare size={11} className="inline mr-1" />Notes (optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Flight number, hotel name, special requirements…"
                      value={form.notes}
                      onChange={(e) => set("notes", e.target.value)}
                      className="w-full bg-brand-50 border border-brand-100 rounded-xl px-4 py-3 text-sm text-brand-900 placeholder:text-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-800 hover:bg-brand-700 active:bg-brand-900 text-white font-bold py-4 rounded-full transition-all duration-200 active:scale-[0.98] text-base shadow-lg shadow-brand-900/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                  >
                    Request Booking
                  </button>

                  <p className="text-center text-xs text-brand-400">
                    We'll confirm via WhatsApp · No payment required now
                  </p>
                </motion.form>
              )}

              {/* SUBMITTING */}
              {step === "submitting" && (
                <motion.div
                  key="submitting"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 flex flex-col items-center justify-center min-h-[400px] gap-4"
                >
                  <Loader2 size={40} className="text-brand-500 animate-spin" />
                  <p className="text-brand-700 font-medium">Sending your request…</p>
                </motion.div>
              )}

              {/* SUCCESS */}
              {step === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 sm:p-10 flex flex-col items-center text-center min-h-[400px] justify-center gap-5"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-50 border-2 border-brand-200 flex items-center justify-center">
                    <CheckCircle size={32} className="text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-brand-900 mb-2">Booking received!</h3>
                    <p className="text-brand-600 text-sm max-w-xs">
                      We've got your request and will confirm via WhatsApp shortly. Usually within 5 minutes.
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/966573067785?text=${waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold px-6 py-3.5 rounded-full transition-colors shadow-lg shadow-black/15"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.117 1.533 5.849L.072 23.99l6.328-1.434A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.68-.513-5.214-1.41l-.374-.216-3.757.852.882-3.653-.24-.388A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    </svg>
                    Chat on WhatsApp now
                  </a>
                  <button
                    onClick={() => { setStep("form"); setForm({ route_id: "", vehicle_id: "", travel_date: "", passengers: "1", name: "", phone: "", notes: "" }); }}
                    className="text-sm text-brand-400 hover:text-brand-600 underline underline-offset-2"
                  >
                    Make another booking
                  </button>
                </motion.div>
              )}

              {/* ERROR */}
              {step === "error" && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-8 sm:p-10 flex flex-col items-center text-center min-h-[400px] justify-center gap-5"
                >
                  <div className="w-16 h-16 rounded-full bg-red-50 border-2 border-red-200 flex items-center justify-center text-red-500 text-2xl font-bold">!</div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-brand-900 mb-2">Couldn't send your request</h3>
                    <p className="text-brand-600 text-sm max-w-xs">
                      No worries — message us directly on WhatsApp and we'll sort it instantly.
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/966573067785?text=${waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold px-6 py-3.5 rounded-full transition-colors"
                  >
                    Book on WhatsApp instead
                  </a>
                  <button
                    onClick={() => setStep("form")}
                    className="text-sm text-brand-400 hover:text-brand-600 underline underline-offset-2"
                  >
                    Try again
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
