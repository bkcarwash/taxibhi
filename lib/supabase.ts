import { createClient } from "@supabase/supabase-js";

export interface BookingInsert {
  name: string;
  phone: string;
  route_id: string;
  route_label: string;
  vehicle_id: string;
  vehicle_name: string;
  travel_date: string;
  passengers: number;
  notes?: string;
}

// Server-only — service role bypasses RLS, never sent to browser
export function createServerClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

// Browser / client components — anon key, limited permissions
export function createBrowserClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
