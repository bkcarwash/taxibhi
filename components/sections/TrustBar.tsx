import { Star, Clock, Phone, Shield, Users } from "lucide-react";

const items = [
  {
    icon: <Star className="w-4 h-4 text-gold-500 fill-gold-500" aria-hidden="true" />,
    text: "5.0 Google Rating",
    sub: "8 verified reviews",
  },
  {
    icon: <Clock className="w-4 h-4 text-brand-400" aria-hidden="true" />,
    text: "Available 24/7",
    sub: "Including Ramadan & Hajj",
  },
  {
    icon: <Shield className="w-4 h-4 text-brand-400" aria-hidden="true" />,
    text: "100% Private",
    sub: "No shared passengers",
  },
  {
    icon: <Users className="w-4 h-4 text-brand-400" aria-hidden="true" />,
    text: "All group sizes",
    sub: "Sedan to full-size bus",
  },
  {
    icon: <Phone className="w-4 h-4 text-brand-400" aria-hidden="true" />,
    text: "WhatsApp booking",
    sub: "Instant confirmation",
  },
];

export function TrustBar() {
  return (
    <div
      className="bg-brand-900 text-white py-4 overflow-hidden"
      aria-label="Trust signals"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto pb-1 scrollbar-hide">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 shrink-0"
            >
              {item.icon}
              <div>
                <div className="text-sm font-semibold text-white leading-tight">
                  {item.text}
                </div>
                <div className="text-xs text-brand-300 leading-tight">
                  {item.sub}
                </div>
              </div>
              {i < items.length - 1 && (
                <div
                  className="ml-4 sm:ml-6 w-px h-8 bg-brand-700 shrink-0"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
