export interface Vehicle {
  id: string;
  name: string;
  capacity: string;
  description: string;
  icon: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "camry",
    name: "Camry / Sonata",
    capacity: "1–3 passengers",
    description: "Comfortable sedan — ideal for couples or small families.",
    icon: "car",
  },
  {
    id: "staria",
    name: "Hyundai Staria",
    capacity: "Up to 7 passengers",
    description: "Premium 7-seater MPV with ample luggage space.",
    icon: "van",
  },
  {
    id: "gmc",
    name: "GMC Yukon XL",
    capacity: "Up to 7 passengers",
    description: "New-model full-size SUV — luxury and space for families.",
    icon: "suv",
  },
  {
    id: "hiace",
    name: "Toyota Hiace",
    capacity: "Up to 12 passengers",
    description: "Spacious minibus for larger groups with luggage.",
    icon: "minibus",
  },
  {
    id: "coaster",
    name: "Coaster",
    capacity: "Up to 30 passengers",
    description: "Mid-size coach — the choice for group Ziyarah tours.",
    icon: "bus",
  },
  {
    id: "bus",
    name: "Bus",
    capacity: "30+ passengers",
    description: "Full-size coach for large pilgrim groups and delegations.",
    icon: "bus",
  },
];
