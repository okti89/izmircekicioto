type JsonLdProps = { name?: string; description?: string; path?: string; serviceName?: string; district?: string; };
const siteUrl = "https://izmircekicioto.com";
export default function JsonLd({ name = "İzmir Çekici", description = "İzmir genelinde 7/24 oto çekici, yol yardım, akü takviye ve oto kurtarma hizmeti.", path = "/", serviceName = "Oto çekici ve yol yardım", district = "İzmir" }: JsonLdProps) {
  const pageUrl = new URL(path, siteUrl).toString();
  const business = { "@context": "https://schema.org", "@type": "AutomotiveBusiness", name, url: pageUrl, image: new URL("/og.png", siteUrl).toString(), telephone: "+905366762866", description, areaServed: { "@type": "City", name: district }, openingHours: "Mo-Su 00:00-23:59", hasOfferCatalog: { "@type": "OfferCatalog", name: "Yol yardım hizmetleri", itemListElement: [{ "@type": "Offer", itemOffered: { "@type": "Service", name: serviceName, areaServed: district } }] } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />;
}
