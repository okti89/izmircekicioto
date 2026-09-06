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
      {
        source: "/oto-cekici",
        destination: "/cekici",
        permanent: true,
      },
      {
        source: "/:slug-oto-cekici",
        destination: "/:slug-cekici",
        permanent: true,
      },
      {
        source: "/motosiklet-cekici",
        destination: "/motorsiklet-cekici",
        permanent: true,
      },
      {
        source: "/:slug-motosiklet-cekici",
        destination: "/:slug-motorsiklet-cekici",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
