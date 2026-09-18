type JsonLdProps = {
  name?: string;
  description?: string;
  path?: string;
  serviceName?: string;
  district?: string;
  faqs?: { q: string; a: string }[];
  breadcrumbs?: { name: string; url: string }[];
};

const siteUrl = "https://izmircekicioto.com";

export default function JsonLd({
  name = "İzmir Çekici",
  description = "İzmir genelinde 7/24 oto çekici, yol yardım, akü takviye ve oto kurtarma hizmeti.",
  path = "/", serviceName, district = "İzmir", faqs, breadcrumbs,
}: JsonLdProps) {
  const pageUrl = new URL(path, siteUrl).toString();
  const providerId = `${siteUrl}/#organization`;
  // A service area is not a branch address. Do not invent a physical location.
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization", "@id": providerId, name: "İzmir Çekici",
      url: `${siteUrl}/`, telephone: "+905366762866",
      logo: `${siteUrl}/izmir-cekici-logo.png`,
      contactPoint: { "@type": "ContactPoint", telephone: "+905366762866", contactType: "customer service", availableLanguage: "Turkish" },
    },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: `${siteUrl}/`, name: "İzmir Çekici", inLanguage: "tr-TR", publisher: { "@id": providerId } },
    {
      "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name, description, inLanguage: "tr-TR",
      isPartOf: { "@id": `${siteUrl}/#website` },
      ...(serviceName ? { mainEntity: { "@id": `${pageUrl}#service` } } : {}),
    },
  ];
  if (serviceName) graph.push({
    "@type": "Service", "@id": `${pageUrl}#service`, name, serviceType: serviceName,
    description, url: pageUrl, provider: { "@id": providerId },
    areaServed: { "@type": "Place", name: district },
  });
  if (breadcrumbs?.length) graph.push({
    "@type": "BreadcrumbList", "@id": `${pageUrl}#breadcrumb`,
    itemListElement: breadcrumbs.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: new URL(item.url, siteUrl).toString() })),
  });
  if (faqs?.length) graph.push({
    "@type": "FAQPage", "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
  });
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c") }} />;
}
