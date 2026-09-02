import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.izmircekicioto.com" }],
        destination: "https://izmircekicioto.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
