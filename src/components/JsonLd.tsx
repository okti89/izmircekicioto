type FaqItem = { q: string; a: string };
type BreadcrumbItem = { name: string; url: string };

type JsonLdProps = {
  name?: string;
  description?: string;
  path?: string;
  serviceName?: string;
  district?: string;
  lat?: number;
  lng?: number;
  faqs?: FaqItem[];
  breadcrumbs?: BreadcrumbItem[];
};

const siteUrl = "https://izmircekicioto.com";

export default function JsonLd({
  name = "İzmir Çekici",
  description = "İzmir genelinde 7/24 oto çekici, yol yardım, akü takviye ve oto kurtarma hizmeti.",
  path = "/",
  serviceName = "Oto çekici ve yol yardım",
  district = "İzmir",
  lat = 38.4237,
  lng = 27.1428,
  faqs,
  breadcrumbs,
}: JsonLdProps) {
  const pageUrl = new URL(path, siteUrl).toString();

  const businessSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["AutomotiveBusiness", "EmergencyService"],
    name,
    url: pageUrl,
    image: new URL("/og.png", siteUrl).toString(),
    telephone: "+905366762866",
    priceRange: "₺₺",
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: district,
      addressRegion: "İzmir",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: lat,
      longitude: lng,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: district === "İzmir" ? "İzmir" : `${district}, İzmir`,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Yol yardım ve oto çekici hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: serviceName,
            areaServed: district,
          },
        },
      ],
    },
  };

  const schemas: Record<string, unknown>[] = [businessSchema];

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url.startsWith("http") ? item.url : new URL(item.url, siteUrl).toString(),
      })),
    });
  }

  if (faqs && faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    });
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

