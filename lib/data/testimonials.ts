export interface Testimonial {
  id: string;
  name: string;
  label: string;
  timeAgo: string;
  rating: 5;
  route: string;
  body: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Muhammad A.",
    label: "Umrah Traveller",
    timeAgo: "2 weeks ago",
    rating: 5,
    route: "Jeddah Airport → Makkah",
    body: "Booked airport transfer to Makkah — easy booking, driver on time, smooth journey.",
  },
  {
    id: "t2",
    name: "Ahmed H.",
    label: "Google Review",
    timeAgo: "3 weeks ago",
    rating: 5,
    route: "Makkah → Madinah",
    body: "Driver helpful, vehicle comfortable. Highly recommended for the Makkah to Madinah transfer.",
  },
  {
    id: "t3",
    name: "Syed Abdullah",
    label: "Google Review",
    timeAgo: "1 month ago",
    rating: 5,
    route: "Family Private Transfer",
    body: "Family trip, private taxi, clear pickup arrangements, punctual driver. Everything went as planned.",
  },
  {
    id: "t4",
    name: "Faisal Khan",
    label: "Google Review",
    timeAgo: "1 month ago",
    rating: 5,
    route: "Jeddah Airport → Makkah Hotel",
    body: "Clear communication, driver knew the way well. Arrived at the Makkah hotel without any stress.",
  },
  {
    id: "t5",
    name: "Omar M.",
    label: "Google Review",
    timeAgo: "2 months ago",
    rating: 5,
    route: "Madinah Airport Transfer",
    body: "Simple booking, clean car, driver on time. Exactly what you need after a long flight.",
  },
  {
    id: "t6",
    name: "Yasir Ahmed",
    label: "Google Review",
    timeAgo: "2 months ago",
    rating: 5,
    route: "Madinah → Makkah",
    body: "Polite driver, suitable for family. The vehicle was comfortable for the long drive to Makkah.",
  },
  {
    id: "t7",
    name: "Rashid A.",
    label: "Google Review",
    timeAgo: "3 months ago",
    rating: 5,
    route: "Private Transfer",
    body: "Driver on time, helped with luggage. Stress-free experience from start to finish.",
  },
  {
    id: "t8",
    name: "Ibrahim B.",
    label: "Google Review",
    timeAgo: "4 months ago",
    rating: 5,
    route: "Jeddah / Makkah / Madinah Transfers",
    body: "Jeddah, Makkah, and Madinah transfers — easy to arrange for the whole family. Will use again.",
  },
];

export const aggregateRating = {
  ratingValue: 5.0,
  reviewCount: testimonials.length,
  source: "Google Reviews",
};
