import { MetadataRoute } from "next";
import { getAllStaticSlugs } from "@/data/districts";

const baseUrl = "https://izmircekicioto.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/hizmet-bolgeleri`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fiyatlar`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/iletisim`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...getAllStaticSlugs().map(({ slug }) => ({
      url: `${baseUrl}/${slug}`,
      changeFrequency: "weekly" as const,
      priority: slug.endsWith("-cekici") || slug === "cekici" ? 0.8 : 0.6,
    })),
  ];
}
