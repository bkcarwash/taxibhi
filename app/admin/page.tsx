import { createServerClient } from "@/lib/supabase";
import { AdminClient, Booking } from "./AdminClient";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const db = createServerClient();

  const { data, error } = await db
    .from("bookings")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-red-500 font-medium">Failed to load bookings: {error.message}</p>
      </div>
    );
  }

  return <AdminClient bookings={(data ?? []) as Booking[]} total={data?.length ?? 0} />;
}
