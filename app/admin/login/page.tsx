"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lock, Loader2 } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      setError("Wrong password — try again.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-brand-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl px-4 py-2 shadow-lg">
            <Image
              src="/images/logo/taxibhai-logo-header.webp"
              alt="Taxi Bhai"
              width={712}
              height={256}
              style={{ height: "36px", width: "auto" }}
            />
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gold-400/20 flex items-center justify-center">
              <Lock size={18} className="text-gold-400" />
            </div>
            <div>
              <h1 className="font-display font-bold text-white text-lg">Admin Panel</h1>
              <p className="text-white/40 text-xs">Taxi Bhai · Bookings</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              required
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
            />

            {error && (
              <p className="text-red-400 text-xs">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold-400 hover:bg-gold-300 text-brand-950 font-bold py-3 rounded-full transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading && <Loader2 size={16} className="animate-spin" />}
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
