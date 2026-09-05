import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/layout/ClientLayout";
import {
  generateOrganizationJsonLd,
  generateLocalBusinessJsonLd,
} from "@/lib/schema/jsonLd";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.taxibhai.com"),
  title: {
    default: "Taxi Bhai — Umrah Taxi Service | Makkah, Madinah & Jeddah",
    template: "%s | Taxi Bhai",
  },
  description:
    "Affordable 24/7 private Umrah taxi in Makkah, Madinah & Jeddah. Airport transfers, hotel-to-hotel, Ziyarah tours. Book instantly on WhatsApp. 5.0 ★ Google Reviews.",
  keywords: [
    "Umrah taxi",
    "Makkah taxi",
    "Madinah taxi",
    "Jeddah airport transfer",
    "Jeddah to Makkah taxi",
    "Makkah to Madinah taxi",
    "Saudi Arabia private taxi",
    "Ziyarah tour",
    "Umrah transport",
    "24/7 taxi Makkah",
    "airport pickup Jeddah",
    "Taxi Bhai",
  ],
  authors: [{ name: "Taxi Bhai", url: "https://www.taxibhai.com" }],
  creator: "Taxi Bhai",
  publisher: "Taxi Bhai",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.taxibhai.com",
    siteName: "Taxi Bhai",
    title: "Taxi Bhai — Reliable Umrah Taxi Service | Makkah · Madinah · Jeddah",
    description:
      "24/7 private Umrah taxi service with airport transfers, hotel-to-hotel transfers and Ziyarah tours. Book on WhatsApp. 5.0 ★ Google rating.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Taxi Bhai — Umrah Taxi Service in Makkah, Madinah and Jeddah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Bhai — Umrah Taxi Service",
    description:
      "24/7 private transfers in Makkah, Madinah & Jeddah. Book on WhatsApp.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: { canonical: "https://www.taxibhai.com" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = generateOrganizationJsonLd();
  const localBizJsonLd = generateLocalBusinessJsonLd();

  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizJsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
