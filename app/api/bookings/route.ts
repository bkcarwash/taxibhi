import { NextRequest, NextResponse } from "next/server";
import { createServerClient, BookingInsert } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  let body: BookingInsert;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, phone, route_id, route_label, vehicle_id, vehicle_name, travel_date, passengers } = body;

  if (!name || !phone || !route_id || !vehicle_id || !travel_date || !passengers) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 422 });
  }

  const db = createServerClient();

  const { error } = await db.from("bookings").insert({
    name: name.trim(),
    phone: phone.trim(),
    route_id,
    route_label,
    vehicle_id,
    vehicle_name,
    travel_date,
    passengers: Number(passengers),
    notes: body.notes?.trim() || null,
    status: "pending",
  });

  if (error) {
    console.error("Supabase insert error:", error.message);
    return NextResponse.json({ error: "Failed to save booking" }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
