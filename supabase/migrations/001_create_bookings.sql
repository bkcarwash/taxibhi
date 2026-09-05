-- Bookings table for Taxi Bhai website
CREATE TABLE IF NOT EXISTS bookings (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name          text NOT NULL,
  phone         text NOT NULL,
  route_id      text NOT NULL,
  route_label   text NOT NULL,
  vehicle_id    text NOT NULL,
  vehicle_name  text NOT NULL,
  travel_date   date NOT NULL,
  passengers    integer NOT NULL DEFAULT 1 CHECK (passengers >= 1 AND passengers <= 100),
  notes         text,
  status        text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at    timestamptz NOT NULL DEFAULT now()
);

-- Allow anyone (anon) to INSERT new bookings (website form submissions)
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create bookings"
  ON bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users (Supabase dashboard / service role) can read/update
CREATE POLICY "Authenticated can read bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated can update bookings"
  ON bookings FOR UPDATE
  TO authenticated
  USING (true);
