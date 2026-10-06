import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile in ~/dev confuses workspace-root detection
  outputFileTracingRoot: __dirname,
  images: { formats: ["image/avif", "image/webp"] },
  poweredByHeader: false,
};

export default nextConfig;
