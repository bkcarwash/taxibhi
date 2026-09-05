"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { routes } from "@/lib/data/routes";
import { vehicles } from "@/lib/data/vehicles";
import { pricingTable } from "@/lib/data/pricing";
import { buildWhatsAppUrl, formatSAR } from "@/lib/utils";
import { CheckCircle, Loader2, ChevronDown } from "lucide-react";
import type { VehicleId } from "@/lib/data/pricing";

interface FormState {
  routeId: string;
  pickupLocation: string;
  dropoffLocation: string;
  date: string;
  time: string;
  passengers: string;
  vehicle: string;
  visaType: string;
  flightNumber: string;
  luggage: string;
  name: string;
  whatsappNumber: string;
}

const defaultForm: FormState = {
  routeId: "",
  pickupLocation: "",
  dropoffLocation: "",
  date: "",
  time: "",
  passengers: "",
  vehicle: "camry",
  visaType: "",
  flightNumber: "",
  luggage: "",
  name: "",
  whatsappNumber: "",
};

function Field({ label, required = false, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-brand-800 text-sm font-semibold">
        {label}{required && <span className="text-gold-600 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const cls = "w-full border border-sand bg-white rounded-xl px-4 py-3 text-sm text-brand-900 placeholder:text-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all";
const selectCls = `${cls} appearance-none`;

type Step = "form" | "submitting" | "success" | "error";

export function BookingForm() {
  const [form, setForm] = useState<FormState>(defaultForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [step, setStep] = useState<Step>("form");

  const priceRow = form.routeId ? pricingTable.find((r) => r.routeId === form.routeId) : null;
  const inlinePrice = priceRow && form.vehicle ? (priceRow.prices[form.vehicle as VehicleId] ?? null) : null;
  const selectedVehicle = vehicles.find((v) => v.id === form.vehicle);
  const selectedRoute = routes.find((r) => r.id === form.routeId);

  function set<K extends keyof FormState>(k: K, v: string) {
    setForm((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  }

  function validate() {
    const errs: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim())            errs.name = "Name is required";
    if (!form.whatsappNumber.trim())  errs.whatsappNumber = "WhatsApp number is required";
    if (!form.pickupLocation.trim())  errs.pickupLocation = "Pickup location is required";
    if (!form.dropoffLocation.trim()) errs.dropoffLocation = "Drop-off location is required";
    if (!form.date)                   errs.date = "Date is required";
    if (!form.passengers)             errs.passengers = "Passengers is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStep("submitting");

    const vehicleName = selectedVehicle?.name ?? form.vehicle;
    const routeLabel = selectedRoute?.label ?? `${form.pickupLocation} → ${form.dropoffLocation}`;

    const notes = [
      form.time ? `Time: ${form.time}` : "",
      form.visaType ? `Visa: ${form.visaType}` : "",
      form.flightNumber ? `Flight: ${form.flightNumber}` : "",
      form.luggage ? `Luggage: ${form.luggage}` : "",
      form.whatsappNumber ? `WhatsApp: ${form.whatsappNumber}` : "",
    ].filter(Boolean).join(" · ");

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.whatsappNumber.trim(),
          route_id: form.routeId || "custom",
          route_label: routeLabel,
          vehicle_id: form.vehicle,
          vehicle_name: vehicleName,
          travel_date: form.date,
          passengers: Number(form.passengers),
          notes: notes || null,
        }),
      });

      if (!res.ok) throw new Error("Server error");

      // Open WhatsApp with pre-filled message
      const waUrl = buildWhatsAppUrl({
        pickupLocation: form.pickupLocation || selectedRoute?.from,
        dropoffLocation: form.dropoffLocation || selectedRoute?.to,
        date: form.date,
        time: form.time,
        passengers: form.passengers,
        vehicle: vehicleName,
        visaType: form.visaType,
        flightNumber: form.flightNumber,
        luggage: form.luggage,
        whatsappNumber: form.whatsappNumber,
      });
      window.open(waUrl, "_blank", "noopener,noreferrer");

      setStep("success");
    } catch {
      setStep("error");
    }
  }

  if (step === "submitting") {
    return (
      <div className="bg-white border border-sand rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center min-h-[320px] gap-4">
        <Loader2 size={40} className="text-brand-500 animate-spin" />
        <p className="text-brand-700 font-medium">Saving your booking…</p>
      </div>
    );
  }

  if (step === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white border border-sand rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col items-center text-center gap-5"
      >
        <div className="w-16 h-16 rounded-full bg-brand-50 border-2 border-brand-200 flex items-center justify-center">
          <CheckCircle size={32} className="text-brand-600" />
        </div>
        <div>
          <h2 className="font-display font-bold text-2xl text-brand-900 mb-2">Booking received!</h2>
          <p className="text-brand-600 text-sm max-w-xs">
            Your request is saved — WhatsApp should have opened with your details. We'll confirm within minutes.
          </p>
        </div>
        <p className="text-brand-400 text-xs">Didn't see WhatsApp open?</p>
        <a
          href={buildWhatsAppUrl({
            pickupLocation: form.pickupLocation,
            dropoffLocation: form.dropoffLocation,
            date: form.date,
            time: form.time,
            passengers: form.passengers,
            vehicle: selectedVehicle?.name ?? form.vehicle,
            visaType: form.visaType,
            flightNumber: form.flightNumber,
            luggage: form.luggage,
            whatsappNumber: form.whatsappNumber,
          })}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold px-6 py-3.5 rounded-full transition-colors"
        >
          Open WhatsApp manually →
        </a>
        <button
          onClick={() => { setForm(defaultForm); setStep("form"); }}
          className="text-sm text-brand-400 hover:text-brand-600 underline underline-offset-2"
        >
          Make another booking
        </button>
      </motion.div>
    );
  }

  if (step === "error") {
    return (
      <div className="bg-white border border-sand rounded-3xl p-8 shadow-sm flex flex-col items-center text-center gap-5 min-h-[320px] justify-center">
        <div className="w-16 h-16 rounded-full bg-red-50 border-2 border-red-200 flex items-center justify-center text-red-500 font-bold text-2xl">!</div>
        <div>
          <h2 className="font-display font-bold text-xl text-brand-900 mb-2">Something went wrong</h2>
          <p className="text-brand-600 text-sm max-w-xs">Book directly on WhatsApp and we'll sort you out instantly.</p>
        </div>
        <a
          href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%27d%20like%20to%20book%20a%20transfer."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold px-6 py-3.5 rounded-full transition-colors"
        >
          Book on WhatsApp
        </a>
        <button onClick={() => setStep("form")} className="text-sm text-brand-400 hover:text-brand-600 underline underline-offset-2">
          Try again
        </button>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.form
        key="form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onSubmit={handleSubmit}
        noValidate
        aria-label="Taxi booking form"
        className="bg-white border border-sand rounded-3xl p-6 sm:p-8 shadow-sm"
      >
        <h2 className="font-display text-2xl font-bold text-brand-950 mb-1">Book your transfer</h2>
        <p className="text-brand-600 text-sm mb-7">
          Fill in your details — we save your booking and open WhatsApp for instant confirmation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {/* Route selector */}
          <div className="sm:col-span-2">
            <Field label="Route (pick one or type below)">
              <div className="relative">
                <select
                  value={form.routeId}
                  onChange={(e) => {
                    const r = routes.find((x) => x.id === e.target.value);
                    set("routeId", e.target.value);
                    if (r) { set("pickupLocation", r.from); set("dropoffLocation", r.to); }
                  }}
                  className={selectCls}
                >
                  <option value="">— Select a standard route —</option>
                  {routes.map((r) => <option key={r.id} value={r.id}>{r.label}</option>)}
                </select>
                <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-400 pointer-events-none" />
              </div>
            </Field>
          </div>

          {/* Pickup */}
          <Field label="Pickup location" required>
            <input
              type="text"
              value={form.pickupLocation}
              onChange={(e) => set("pickupLocation", e.target.value)}
              placeholder="e.g. King Abdulaziz Airport, Jeddah"
              className={cls}
            />
            {errors.pickupLocation && <p className="text-red-600 text-xs">{errors.pickupLocation}</p>}
          </Field>

          {/* Drop-off */}
          <Field label="Drop-off location" required>
            <input
              type="text"
              value={form.dropoffLocation}
              onChange={(e) => set("dropoffLocation", e.target.value)}
              placeholder="e.g. Pullman Zamzam Hotel, Makkah"
              className={cls}
            />
            {errors.dropoffLocation && <p className="text-red-600 text-xs">{errors.dropoffLocation}</p>}
          </Field>

          {/* Date */}
          <Field label="Travel date" required>
            <input
              type="date"
              value={form.date}
              onChange={(e) => set("date", e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className={cls}
            />
            {errors.date && <p className="text-red-600 text-xs">{errors.date}</p>}
          </Field>

          {/* Time */}
          <Field label="Pickup time">
            <input
              type="time"
              value={form.time}
              onChange={(e) => set("time", e.target.value)}
              className={cls}
            />
          </Field>

          {/* Passengers */}
          <Field label="Passengers" required>
            <div className="relative">
              <select
                value={form.passengers}
                onChange={(e) => set("passengers", e.target.value)}
                className={selectCls}
              >
                <option value="">Select passengers</option>
                {[...Array(30)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? "passenger" : "passengers"}</option>
                ))}
              </select>
              <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-400 pointer-events-none" />
            </div>
            {errors.passengers && <p className="text-red-600 text-xs">{errors.passengers}</p>}
          </Field>

          {/* Vehicle */}
          <Field label="Vehicle">
            <div className="relative">
              <select
                value={form.vehicle}
                onChange={(e) => set("vehicle", e.target.value)}
                className={selectCls}
              >
                {vehicles.map((v) => (
                  <option key={v.id} value={v.id}>{v.name} — {v.capacity}</option>
                ))}
              </select>
              <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-400 pointer-events-none" />
            </div>
          </Field>

          {/* Name */}
          <Field label="Your name" required>
            <input
              type="text"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="e.g. Ahmed Ali"
              className={cls}
            />
            {errors.name && <p className="text-red-600 text-xs">{errors.name}</p>}
          </Field>

          {/* WhatsApp */}
          <Field label="Your WhatsApp number" required>
            <input
              type="tel"
              value={form.whatsappNumber}
              onChange={(e) => set("whatsappNumber", e.target.value)}
              placeholder="+44 7000 000000"
              className={cls}
            />
            {errors.whatsappNumber && <p className="text-red-600 text-xs">{errors.whatsappNumber}</p>}
          </Field>

          {/* Visa type */}
          <Field label="Visa type">
            <div className="relative">
              <select value={form.visaType} onChange={(e) => set("visaType", e.target.value)} className={selectCls}>
                <option value="">Select visa type</option>
                <option value="Umrah Visa">Umrah Visa</option>
                <option value="Hajj Visa">Hajj Visa</option>
                <option value="Tourist Visa">Tourist Visa</option>
                <option value="Resident (Iqama)">Resident (Iqama)</option>
                <option value="Other">Other</option>
              </select>
              <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-400 pointer-events-none" />
            </div>
          </Field>

          {/* Flight number */}
          <Field label="Flight number (airport pickups)">
            <input
              type="text"
              value={form.flightNumber}
              onChange={(e) => set("flightNumber", e.target.value)}
              placeholder="e.g. PK 783"
              className={cls}
            />
          </Field>

          {/* Luggage */}
          <div className="sm:col-span-2">
            <Field label="Luggage">
              <div className="relative">
                <select value={form.luggage} onChange={(e) => set("luggage", e.target.value)} className={selectCls}>
                  <option value="">Select luggage</option>
                  <option value="1 bag">1 bag</option>
                  <option value="2 bags">2 bags</option>
                  <option value="3 bags">3 bags</option>
                  <option value="4 bags">4 bags</option>
                  <option value="5+ bags">5+ bags</option>
                  <option value="Heavy luggage">Heavy / large luggage</option>
                </select>
                <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-400 pointer-events-none" />
              </div>
            </Field>
          </div>
        </div>

        {/* Inline price preview */}
        {inlinePrice !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-6 bg-brand-50 border border-brand-200 rounded-2xl px-5 py-4 flex items-center justify-between"
            aria-live="polite"
          >
            <div>
              <p className="text-brand-600 text-xs font-semibold uppercase tracking-widest">Estimated fare</p>
              <p className="font-display text-3xl font-bold text-brand-900 tabular-nums">{formatSAR(inlinePrice)}</p>
              {selectedVehicle && (
                <p className="text-brand-500 text-xs mt-0.5">{selectedVehicle.name} · {selectedVehicle.capacity}</p>
              )}
            </div>
            <div className="text-right">
              <p className="text-brand-500 text-xs">Fixed fare</p>
              <p className="text-brand-400 text-xs">No hidden charges</p>
            </div>
          </motion.div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="mt-6 w-full flex items-center justify-center gap-2.5 bg-brand-800 hover:bg-brand-700 active:bg-brand-900 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 shadow-lg shadow-brand-900/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.117 1.533 5.849L.072 23.99l6.328-1.434A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.68-.513-5.214-1.41l-.374-.216-3.757.852.882-3.653-.24-.388A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          Send booking request on WhatsApp
        </button>

        <p className="text-center text-brand-400 text-xs mt-3">
          Saves to our system &amp; opens WhatsApp instantly · No payment required
        </p>
      </motion.form>
    </AnimatePresence>
  );
}
