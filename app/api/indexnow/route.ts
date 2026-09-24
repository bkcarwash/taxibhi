import { NextResponse } from "next/server";

const INDEXNOW_KEY = "a1b2c3d4e5f6789012345678901234ab";
const SITE_URL = "https://www.taxibhai.com";

const URLS = [
  `${SITE_URL}/`,
  `${SITE_URL}/services`,
  `${SITE_URL}/services/airport-transfers`,
  `${SITE_URL}/services/intercity-transfers`,
  `${SITE_URL}/services/umrah-ziyarat-transport`,
  `${SITE_URL}/services/group-family-transport`,
  `${SITE_URL}/services/executive-chauffeur`,
  `${SITE_URL}/services/local-city-rides`,
  `${SITE_URL}/routes`,
  `${SITE_URL}/routes/jeddah-airport-to-makkah`,
  `${SITE_URL}/routes/makkah-to-madinah`,
  `${SITE_URL}/routes/madinah-to-makkah`,
  `${SITE_URL}/routes/jeddah-airport-to-madinah`,
  `${SITE_URL}/routes/madinah-airport-to-madinah-hotel`,
  `${SITE_URL}/routes/madinah-airport-to-makkah`,
  `${SITE_URL}/locations`,
  `${SITE_URL}/locations/makkah`,
  `${SITE_URL}/locations/madinah`,
  `${SITE_URL}/locations/jeddah`,
  `${SITE_URL}/fleet`,
  `${SITE_URL}/pricing`,
  `${SITE_URL}/faq`,
  `${SITE_URL}/book-ride`,
  `${SITE_URL}/about`,
  `${SITE_URL}/contact`,
  `${SITE_URL}/reviews`,
  `${SITE_URL}/safety`,
  `${SITE_URL}/policies/booking`,
  `${SITE_URL}/faq/jeddah-airport-makkah-price`,
  `${SITE_URL}/faq/makkah-madinah-price`,
  `${SITE_URL}/faq/makkah-madinah-duration`,
  `${SITE_URL}/faq/how-to-book`,
  `${SITE_URL}/faq/airport-pickup`,
  `${SITE_URL}/blog`,
  `${SITE_URL}/blog/jeddah-airport-to-makkah-taxi-guide`,
  `${SITE_URL}/blog/makkah-madinah-taxi-vs-train`,
  `${SITE_URL}/blog/umrah-taxi-booking-guide`,
  `${SITE_URL}/blog/makkah-ziyarat-sacred-sites-taxi`,
  `${SITE_URL}/blog/umrah-taxi-prices-2026`,
];

export async function GET() {
  try {
    const payload = {
      host: "www.taxibhai.com",
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: URLS,
    };

    const [bingRes, indexnowRes] = await Promise.allSettled([
      fetch("https://www.bing.com/indexnow", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      }),
      fetch("https://api.indexnow.org/indexnow", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      }),
    ]);

    return NextResponse.json({
      success: true,
      urls: URLS.length,
      bing: bingRes.status === "fulfilled" ? bingRes.value.status : "error",
      indexnow: indexnowRes.status === "fulfilled" ? indexnowRes.value.status : "error",
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
