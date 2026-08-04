import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import LocalServiceJourney from "@/components/LocalServiceJourney";
import ServiceSeoContent from "@/components/ServiceSeoContent";
import StickyCallBar from "@/components/StickyCallBar";
import { getAllStaticSlugs, MAIN_PHONE, MAIN_PHONE_RAW } from "@/data/districts";
import { REFERENCE_REGIONS } from "@/data/referenceRegions";

export const dynamicParams = false;

const services = [
  { slug: "oto-cekici", title: "Oto Çekici", intro: "Kayar kasa ile otomobil, SUV ve hafif ticari araç taşıma.", image: "/izmir-cekici-hero.png" },
  { slug: "aku-takviye", title: "Akü Takviye", intro: "Biten akünüz için bulunduğunuz noktada güvenli takviye desteği.", image: "/aku-takviye-izmir.png" },
  { slug: "oto-elektrik", title: "Mobil Oto Elektrik", intro: "Marş, şarj ve temel elektrik arızalarında yerinde destek.", image: "/aku-takviye-izmir.png" },
  { slug: "agir-vasita-kurtarma", title: "Ağır Vasıta Kurtarma", intro: "Tır, kamyon ve otobüs için kurtarma planlaması.", image: "/agir-vasita-izmir.png" },
  { slug: "oto-kurtarma", title: "Oto Kurtarma", intro: "Kaza ve zor konumlar için vinçli kurtarma desteği.", image: "/izmir-cekici-hero.png" },
  { slug: "lastik-yol-yardim", title: "Lastik ve Yol Yardım", intro: "Lastik ve temel yol yardım ihtiyaçları için destek.", image: "/izmir-cekici-hero.png" },
  { slug: "motorsiklet-cekici", title: "Motosiklet Çekici", intro: "Motosiklet için kontrollü ve güvenli taşıma.", image: "/izmir-cekici-hero.png" },
];

const knownDistricts: Record<string, string> = { bornova: "Bornova", karsiyaka: "Karşıyaka", buca: "Buca", konak: "Konak", bayrakli: "Bayraklı", cigli: "Çiğli", gaziemir: "Gaziemir", cesme: "Çeşme", urla: "Urla" };

function pageData(slug: string) {
  const service = services.find((item) => slug === item.slug || slug.endsWith(`-${item.slug}`)) ?? services[0];
  const key = slug === service.slug ? "izmir" : slug.slice(0, -service.slug.length - 1);
  const district = key === "izmir" ? "İzmir" : knownDistricts[key] ?? REFERENCE_REGIONS.find((region) => region.slug === key)?.name ?? "İzmir";
  const isTowing = service.slug === "oto-cekici";
  const searchQuery = isTowing ? `${district} \u00c7ekici` : `${district} ${service.title}`;
  const title = isTowing ? `${searchQuery} | 7/24 ${district} Oto \u00c7ekici` : `${district} ${service.title}`;
  const heading = isTowing ? `${searchQuery} ve ${district} Oto \u00c7ekici` : title;
  return { service, district, title, heading, searchQuery, isTowing };
}

export async function generateStaticParams() {
  return getAllStaticSlugs();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { service, district, title, searchQuery, isTowing } = pageData(slug);
  const description = isTowing
    ? `${searchQuery} arayanlar i\u00e7in 7/24 ${district} oto \u00e7ekici, kayar kasa ve g\u00fcvenli ara\u00e7 transfer deste\u011fi.`
    : `${district} ${service.title} hizmeti. ${service.intro} \u0130zmir genelinde 7/24 destek.`;

  return {
    title: `${title} | 7/24 Acil Destek`,
    description,
    alternates: { canonical: `/${slug}` },
    openGraph: { title: `${title} | İzmir Çekici`, description, url: `/${slug}`, images: [{ url: service.image, alt: title }] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { service, district, title, heading, searchQuery, isTowing } = pageData(slug);
  const description = isTowing
    ? `${searchQuery} arayanlar i\u00e7in 7/24 ${district} oto \u00e7ekici, kayar kasa ve g\u00fcvenli ara\u00e7 transfer deste\u011fi.`
    : `${district} ${service.title} hizmeti. ${service.intro} \u0130zmir genelinde 7/24 destek.`;

  return (
    <>
      <Header />
      <JsonLd name={title} description={description} path={`/${slug}`} serviceName={isTowing ? searchQuery : service.title} district={district} />
      <main>
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <Image src={service.image} alt={title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-slate-950/80" />
          <div className="relative container mx-auto max-w-6xl px-4 py-24">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-300">{district} • 7/24 acil destek</p>
            <h1 className="mt-5 max-w-3xl font-heading text-5xl font-black">{heading}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">{service.intro} {district} merkez, ana yollar ve çevre bölgelerde konumunuza uygun ekip yönlendirilir.</p>
            <a href={`tel:${MAIN_PHONE_RAW}`} className="mt-8 inline-flex items-center gap-2 bg-amber-400 px-7 py-4 font-bold text-slate-950"><Phone className="h-5 w-5" />{MAIN_PHONE}</a>
          </div>
        </section>
        <section className="container mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-amber-600">{district} hizmet bilgisi</p>
            <h2 className="section-title mt-3">{district} için profesyonel çözüm</h2>
            <p className="mt-6 leading-8 text-slate-600">Araç bilgisi, konum ve ihtiyaç değerlendirilerek doğru ekipman seçilir. Güvenli yükleme, açık bilgilendirme ve talep edilen adrese kontrollü transfer hizmet sürecinin temelidir.</p>
          </div>
          <div className="bg-slate-950 p-8 text-white">
            <h2 className="font-heading text-3xl font-black">Hizmet kapsamı</h2>
            {["Konuma göre ekip yönlendirmesi", "Araca uygun ekipman planlaması", "Güvenli taşıma ve teslim süreci"].map((item) => <p key={item} className="mt-5 flex gap-3 text-slate-200"><CheckCircle2 className="h-5 w-5 text-amber-300" />{item}</p>)}
          </div>
        </section>
        <ServiceSeoContent district={district} serviceSlug={service.slug} serviceTitle={isTowing ? `${searchQuery} / ${district} Oto \u00c7ekici` : service.title} />
        <LocalServiceJourney district={district} serviceSlug={service.slug} serviceTitle={service.title} />
        <section className="bg-slate-100 py-16"><div className="container mx-auto max-w-6xl px-4"><h2 className="section-title">Diğer hizmet bölgeleri</h2><Link href="/hizmet-bolgeleri" className="mt-5 inline-flex font-bold text-amber-700">Tüm İzmir hizmet bölgelerini inceleyin</Link></div></section>
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
