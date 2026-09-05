import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;

// Browser / client components — limited anon permissions
export const supabase = createClient(
  supabaseUrl,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Server-only — service role bypasses RLS, never sent to browser
export function createServerClient() {
  return createClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY!);
}

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
