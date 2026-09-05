import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Compress responses
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
