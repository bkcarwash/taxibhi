import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/", "/api/", "/ABGFWYB/", "/ABGFWYB"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin", "/admin/", "/api/", "/ABGFWYB/", "/ABGFWYB"],
      },
    ],
    sitemap: "https://www.taxibhai.com/sitemap.xml",
    host: "https://www.taxibhai.com",
  };
}
