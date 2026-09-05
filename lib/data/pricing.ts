import { vehicles } from "./vehicles";
import { routes } from "./routes";

export type VehicleId = "camry" | "staria" | "gmc" | "hiace" | "coaster" | "bus";

export interface PriceRow {
  routeId: string;
  prices: Record<VehicleId, number>;
}

export const pricingTable: PriceRow[] = [
  {
    routeId: "jed-airport-makkah",
    prices: { camry: 250, staria: 350, gmc: 550, hiace: 400, coaster: 800, bus: 800 },
  },
  {
    routeId: "makkah-jed-airport",
    prices: { camry: 200, staria: 300, gmc: 500, hiace: 400, coaster: 700, bus: 800 },
  },
  {
    routeId: "makkah-madinah",
    prices: { camry: 450, staria: 550, gmc: 1000, hiace: 650, coaster: 1100, bus: 1400 },
  },
  {
    routeId: "madinah-makkah",
    prices: { camry: 450, staria: 550, gmc: 1000, hiace: 650, coaster: 1100, bus: 1400 },
  },
  {
    routeId: "med-airport-madinah",
    prices: { camry: 150, staria: 200, gmc: 400, hiace: 350, coaster: 500, bus: 700 },
  },
  {
    routeId: "madinah-med-airport",
    prices: { camry: 100, staria: 150, gmc: 300, hiace: 300, coaster: 500, bus: 700 },
  },
  {
    routeId: "jed-airport-madinah",
    prices: { camry: 500, staria: 600, gmc: 1000, hiace: 750, coaster: 1100, bus: 1400 },
  },
  {
    routeId: "madinah-jed-airport",
    prices: { camry: 500, staria: 600, gmc: 1000, hiace: 750, coaster: 1100, bus: 1400 },
  },
  {
    routeId: "jeddah-ziyarat",
    prices: { camry: 600, staria: 700, gmc: 1300, hiace: 1300, coaster: 1500, bus: 1800 },
  },
  {
    routeId: "makkah-taif-ziyarat",
    prices: { camry: 450, staria: 600, gmc: 900, hiace: 700, coaster: 1000, bus: 1400 },
  },
  {
    routeId: "jed-airport-jed-hotel",
    prices: { camry: 200, staria: 250, gmc: 400, hiace: 300, coaster: 500, bus: 600 },
  },
  {
    routeId: "hotel-train-station",
    prices: { camry: 100, staria: 150, gmc: 300, hiace: 200, coaster: 400, bus: 500 },
  },
  {
    routeId: "train-station-hotel",
    prices: { camry: 100, staria: 150, gmc: 300, hiace: 200, coaster: 400, bus: 500 },
  },
  {
    routeId: "makkah-ziyarat",
    prices: { camry: 200, staria: 300, gmc: 500, hiace: 600, coaster: 600, bus: 800 },
  },
  {
    routeId: "madinah-ziyarat",
    prices: { camry: 200, staria: 250, gmc: 400, hiace: 550, coaster: 550, bus: 700 },
  },
  {
    routeId: "per-hour",
    prices: { camry: 100, staria: 120, gmc: 180, hiace: 200, coaster: 250, bus: 250 },
  },
];

export function getPriceForRoute(
  routeId: string,
  vehicleId: VehicleId
): number | null {
  const row = pricingTable.find((r) => r.routeId === routeId);
  return row ? row.prices[vehicleId] : null;
}

export function getPricingRowForRoute(routeId: string): PriceRow | null {
  return pricingTable.find((r) => r.routeId === routeId) ?? null;
}

export const vehicleIds = vehicles.map((v) => v.id) as VehicleId[];
export const routeIds = routes.map((r) => r.id);
