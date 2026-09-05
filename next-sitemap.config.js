/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.taxibhai.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
    ],
    additionalSitemaps: [],
  },
  changefreq: "weekly",
  priority: 0.7,
  exclude: [],
  additionalPaths: async () => [
    { loc: "/", changefreq: "weekly", priority: 1.0 },
    { loc: "/about", changefreq: "monthly", priority: 0.8 },
    { loc: "/services", changefreq: "weekly", priority: 0.9 },
    { loc: "/pricing", changefreq: "weekly", priority: 0.95 },
    { loc: "/book-ride", changefreq: "weekly", priority: 0.9 },
    { loc: "/contact", changefreq: "monthly", priority: 0.7 },
  ],
};
