import { MetadataRoute } from "next";
import { getAllStaticSlugs } from "@/data/districts";
import { getRegionProfile } from "@/data/regionContent";
import { SERVICES } from "@/data/services";

const baseUrl = "https://izmircekicioto.com";
const serviceSlugs = [...SERVICES].sort((a, b) => b.slug.length - a.slug.length).map((service) => service.slug);

function isIndexableServiceSlug(slug: string) {
  const serviceSlug = serviceSlugs.find((service) => slug === service || slug.endsWith(`-${service}`));
  if (!serviceSlug || slug === serviceSlug) return true;
  const regionSlug = slug.slice(0, -serviceSlug.length - 1);
  return getRegionProfile(regionSlug)?.status !== "needs-review";
}

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
    ...getAllStaticSlugs().filter(({ slug }) => isIndexableServiceSlug(slug)).map(({ slug }) => ({
      url: `${baseUrl}/${slug}`,
      changeFrequency: "weekly" as const,
      priority: slug.endsWith("-cekici") || slug === "cekici" ? 0.8 : 0.6,
    })),
  ];
}
