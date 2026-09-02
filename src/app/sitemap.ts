import { MetadataRoute } from "next";
import { getAllStaticSlugs } from "@/data/districts";
const baseUrl = "https://izmircekicioto.com";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl },
    { url: `${baseUrl}/iletisim` },
    { url: `${baseUrl}/hizmet-bolgeleri` },
    ...getAllStaticSlugs().map(({ slug }) => ({ url: `${baseUrl}/${slug}` })),
  ];
}
