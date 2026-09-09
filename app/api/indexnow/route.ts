import { NextResponse } from "next/server";

const INDEXNOW_KEY = "a1b2c3d4e5f6789012345678901234ab";
const SITE_URL = "https://www.taxibhai.com";

const URLS = [
  `${SITE_URL}/`,
  `${SITE_URL}/services`,
  `${SITE_URL}/pricing`,
  `${SITE_URL}/faq`,
  `${SITE_URL}/book-ride`,
  `${SITE_URL}/about`,
  `${SITE_URL}/contact`,
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
