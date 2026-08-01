import { MetadataRoute } from "next";
import { getAllStaticSlugs } from "@/data/districts";
const baseUrl = "https://izmircekicioto.com";
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/iletisim`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/hizmet-bolgeleri`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    ...getAllStaticSlugs().map(({ slug }) => ({ url: `${baseUrl}/${slug}`, lastModified, changeFrequency: "monthly" as const, priority: slug.includes("-") ? 0.7 : 0.9 })),
  ];
}
