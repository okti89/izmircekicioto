import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
