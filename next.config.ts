import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
    dangerouslyAllowSVG: false,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  // Enable if deploying to Vercel
  // output: 'standalone',
};

export default nextConfig;
