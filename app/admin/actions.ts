"use server";

import { revalidatePath } from "next/cache";
import { createServerClient } from "@/lib/supabase";

export async function deleteBooking(id: string) {
  const db = createServerClient();
  await db.from("bookings").delete().eq("id", id);
  revalidatePath("/admin");
}

export async function updateStatus(id: string, status: "pending" | "confirmed" | "cancelled") {
  const db = createServerClient();
  await db.from("bookings").update({ status }).eq("id", id);
  revalidatePath("/admin");
}
