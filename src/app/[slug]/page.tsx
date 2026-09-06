import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Navigation, Phone, ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import LocalAreaGuide from "@/components/LocalAreaGuide";
import LocalServiceJourney from "@/components/LocalServiceJourney";
import ServiceSeoContent from "@/components/ServiceSeoContent";
import StickyCallBar from "@/components/StickyCallBar";
import { getAllStaticSlugs, MAIN_PHONE, MAIN_PHONE_RAW } from "@/data/districts";
import { DISTRICT_DETAILS, getDistrictDetail } from "@/data/districtDetails";
import { REFERENCE_REGIONS } from "@/data/referenceRegions";

export const dynamicParams = false;

const services = [
  { slug: "oto-cekici", title: "Oto Çekici", intro: "Kayar kasa ile otomobil, SUV ve hafif ticari araç taşıma.", image: "/izmir-cekici-hero.png" },
  { slug: "aku-takviye", title: "Akü Takviye", intro: "Biten akünüz için bulunduğunuz noktada güvenli takviye desteği.", image: "/aku-takviye-izmir.png" },
  { slug: "oto-elektrik", title: "Mobil Oto Elektrik", intro: "Marş, şarj ve temel elektrik arızalarında yerinde destek.", image: "/aku-takviye-izmir.png" },
  { slug: "agir-vasita-kurtarma", title: "Ağır Vasıta Kurtarma", intro: "Tır, kamyon ve otobüs için kurtarma planlaması.", image: "/agir-vasita-izmir.png" },
  { slug: "agir-ticari-cekici", title: "Ağır Ticari Çekici", intro: "Kamyon, panelvan ve ticari araçlar için güvenli çekici ve transfer planlaması.", image: "/agir-vasita-izmir.png" },
  { slug: "oto-kurtarma", title: "Oto Kurtarma", intro: "Kaza ve zor konumlar için vinçli kurtarma desteği.", image: "/izmir-cekici-hero.png" },
  { slug: "lastik-yol-yardim", title: "Lastik ve Yol Yardım", intro: "Lastik ve temel yol yardım ihtiyaçları için destek.", image: "/izmir-cekici-hero.png" },
  { slug: "motorsiklet-cekici", title: "Motosiklet Çekici", intro: "Motosiklet için kontrollü ve güvenli taşıma.", image: "/izmir-cekici-hero.png" },
];

const knownDistricts: Record<string, string> = {
  bornova: "Bornova",
  karsiyaka: "Karşıyaka",
  buca: "Buca",
  konak: "Konak",
  bayrakli: "Bayraklı",
  cigli: "Çiğli",
  gaziemir: "Gaziemir",
  cesme: "Çeşme",
  urla: "Urla",
  karabaglar: "Karabağlar",
  balcova: "Balçova",
  narlidere: "Narlıdere",
  guzelbahce: "Güzelbahçe",
  menemen: "Menemen",
  torbali: "Torbalı",
  kemalpasa: "Kemalpaşa",
  seferihisar: "Seferihisar",
  menderes: "Menderes",
  aliaga: "Aliağa",
  ucyol: "Üçyol",
  kisik: "Kısık",
  kisikkoy: "Kısıkköy",
};

function pageData(slug: string) {
  const service = services.find((item) => slug === item.slug || slug.endsWith(`-${item.slug}`)) ?? services[0];
  const key = slug === service.slug ? "izmir" : slug.slice(0, -service.slug.length - 1);
  const district = key === "izmir" ? "İzmir" : knownDistricts[key] ?? REFERENCE_REGIONS.find((region) => region.slug === key)?.name ?? "İzmir";
  const detail = getDistrictDetail(key);
  const isTowing = service.slug === "oto-cekici";

  const searchQuery = isTowing ? `${district} Çekici` : `${district} ${service.title}`;
  const seoTitle = isTowing
    ? `${district} Çekici | 7/24 En Yakın ${district} Oto Çekici`
    : `${district} ${service.title} | 7/24 Acil Yol Yardım`;

  const heading = isTowing
    ? `${district} Çekici - 7/24 En Yakın ${district} Oto Çekici`
    : `${district} ${service.title}`;

  let description: string;
  if (detail && isTowing) {
    description = `${district} çekici ve 7/24 oto kurtarma. ${detail.popularArteries.slice(0, 3).join(", ")} çevresinde ${detail.estimatedTime} içinde en yakın kayar kasa çekici. Hemen arayın!`;
  } else if (detail) {
    description = `${district} ${service.title} hizmeti. ${detail.popularArteries.slice(0, 2).join(", ")} bölgesinde 7/24 acil mobil destek. Hemen arayın!`;
  } else if (isTowing) {
    description = `${district} çekici ve ${district} oto kurtarma hizmeti. 7/24 kayar kasa araç taşıma, kaza ve arıza sonrası acil yol yardım desteği.`;
  } else {
    description = `${district} ${service.title} hizmeti. ${service.intro} İzmir genelinde 7/24 güvenilir destek.`;
  }

  const faqs = detail?.faqs ?? [
    {
      q: `${district} çekici ne kadar sürede gelir?`,
      a: `${district} ve çevresindeki ana arterlerde bekleyen nöbetçi ekiplerimiz çağrınız sonrası ortalama 15-20 dakika içinde konumunuza ulaşır.`,
    },
    {
      q: `${district} çekici fiyatları nasıl hesaplanır?`,
      a: `${district} çekici ücreti; aracın bulunduğu nokta, gideceği servis mesafesi ve araç türü dikkate alınarak telefonda şeffaf ve sabit fiyat prensibiyle belirlenir.`,
    },
    {
      q: `${district} en yakın çekici telefon numarası nedir?`,
      a: `7 gün 24 saat ${MAIN_PHONE} numarasını arayarak veya WhatsApp üzerinden konum ileterek en yakın ${district} çekici ekibini hemen çağırabilirsiniz.`,
    },
  ];

  return { service, district, detail, seoTitle, heading, searchQuery, isTowing, description, faqs };
}

export async function generateStaticParams() {
  return getAllStaticSlugs();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { service, seoTitle, description } = pageData(slug);

  return {
    title: { absolute: seoTitle },
    description,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: `${seoTitle} | İzmir Çekici`,
      description,
      url: `/${slug}`,
      images: [{ url: service.image, alt: seoTitle }],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { service, district, detail, seoTitle, heading, searchQuery, isTowing, description, faqs } = pageData(slug);

  const breadcrumbs = [
    { name: "Ana Sayfa", url: "/" },
    { name: "Hizmet Bölgeleri", url: "/hizmet-bolgeleri" },
    { name: isTowing ? `${district} Çekici` : `${district} ${service.title}`, url: `/${slug}` },
  ];

  return (
    <>
      <Header />
      <JsonLd
        name={`${district} ${service.title} - İzmir Çekici`}
        description={description}
        path={`/${slug}`}
        serviceName={isTowing ? searchQuery : service.title}
        district={district}
        lat={detail?.lat ?? 38.4237}
        lng={detail?.lng ?? 27.1428}
        faqs={faqs}
        breadcrumbs={breadcrumbs}
      />
      <main>
        {/* Breadcrumb Bar */}
        <nav aria-label="Breadcrumb" className="border-b border-slate-800 bg-slate-900 py-3 text-xs text-slate-300">
          <div className="container mx-auto flex max-w-6xl items-center gap-2 px-4">
            <Link href="/" className="hover:text-amber-400 transition">Ana Sayfa</Link>
            <span className="text-slate-500">/</span>
            <Link href="/hizmet-bolgeleri" className="hover:text-amber-400 transition">Hizmet Bölgeleri</Link>
            <span className="text-slate-500">/</span>
            <span className="font-bold text-amber-300">{isTowing ? `${district} Çekici` : `${district} ${service.title}`}</span>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <Image
            src={service.image}
            alt={isTowing ? `${district} çekici ve oto kurtarma` : `${district} ${service.title}`}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/85" />
          <div className="relative container mx-auto max-w-6xl px-4 py-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-amber-300">
              <Clock className="h-3.5 w-3.5" />
              {detail ? `Ortalama Varış: ${detail.estimatedTime}` : `${district} • 7/24 Acil Destek`}
            </div>
            <h1 className="mt-5 max-w-3xl font-heading text-4xl font-black md:text-6xl">{heading}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              {isTowing ? (
                <>
                  <strong className="text-amber-300 font-bold">{district} çekici</strong> ve{" "}
                  <strong className="text-white font-bold">{district} oto çekici</strong> arayışınızda 7/24 yanınızdayız.{" "}
                  {detail
                    ? detail.localOverview
                    : `${district} merkez, mahalleler ve bağlantı yollarında yolda kalan binek, SUV ve hafif ticari araçlarınız için en yakın kayar kasa kurtarıcımız dakikalar içinde konumunuza yönlendirilir.`}
                </>
              ) : detail ? (
                `${detail.localOverview}`
              ) : (
                `${service.intro} ${district} merkez, ana yollar ve çevre bölgelerde konumunuza en uygun kurtarıcı anında yönlendirilir.`
              )}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${MAIN_PHONE_RAW}`}
                className="inline-flex items-center gap-2 bg-amber-400 px-7 py-4 font-black text-slate-950 hover:bg-amber-300 transition"
              >
                <Phone className="h-5 w-5" />
                {MAIN_PHONE}
              </a>
              <span className="text-sm font-semibold text-slate-300">7/24 Nöbetçi Çekici Ekibi</span>
            </div>
          </div>
        </section>

        {/* Local Area Details Section for Districts */}
        {detail && (
          <section className="border-b border-slate-200 bg-amber-50/50 py-16">
            <div className="container mx-auto max-w-6xl px-4">
              <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
                {district} Bölge Bilgisi & Güzergâhlar
              </p>
              <h2 className="section-title mt-2">
                {district} Çevresinde Hizmet Verilen Kritik Noktalar
              </h2>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div className="border border-amber-200 bg-white p-7 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Navigation className="h-6 w-6 text-amber-600" />
                    <h3 className="font-heading text-xl font-black">Önemli Arterler ve Bağlantı Yolları</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">
                    Aşağıdaki ana güzergâhlarda aracınız arızalandığında veya kaza yaptığında en yakın çekicimiz dakikalar içinde yanınızdadır:
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {detail.popularArteries.map((artery) => (
                      <span
                        key={artery}
                        className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-800"
                      >
                        {artery}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border border-amber-200 bg-white p-7 shadow-sm">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-amber-600" />
                    <h3 className="font-heading text-xl font-black">{district} Mahalleleri</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">
                    {district} sınırları içerisindeki tüm mahallelere ve sanayi sitelerine kesintisiz ulaşım sağlıyoruz:
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {detail.neighborhoods.map((neighborhood) => (
                      <span
                        key={neighborhood}
                        className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                      >
                        {neighborhood}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Standard Service Intro */}
        <section className="container mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-amber-600">{district} hizmet bilgisi</p>
            <h2 className="section-title mt-3">
              {isTowing ? `${district} Çekici ve 7/24 Yol Yardım` : `${district} için profesyonel yol yardım çözümü`}
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              {isTowing ? (
                <>
                  <strong>{district} çekici</strong> ekibimiz; arıza, kaza, akü bitmesi veya lastik patlaması durumlarında günün her saati bir telefon uzağınızdadır. <strong>{district} en yakın çekici</strong> ekibimiz aracınızı bulunduğu noktadan hidrolik kayar kasaya hasarsız yükleyerek dilediğiniz servise ya da adrese güvenle ulaştırır.
                </>
              ) : (
                `Araç bilgisi, tam konum ve ihtiyaç değerlendirilerek doğru ekipman seçilir. Güvenli yükleme, açık bilgilendirme ve talep edilen adrese kontrollü transfer hizmet sürecimizin temelidir.`
              )}
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              {isTowing
                ? `${district} çekici fiyatları için aradığınız anda net ve sabit fiyat teklifi verilir. Sürpriz ücret olmadan şeffaf ve güvenilir kurtarma hizmeti alırsınız.`
                : `Binek araçlardan ticari araçlara kadar her tondan araç için hidrolik kayar kasa ve vinçli kurtarma alternatifleri sunuyoruz.`}
            </p>
          </div>
          <div className="bg-slate-950 p-8 text-white">
            <h2 className="font-heading text-3xl font-black">Hizmet Kapsamımız</h2>
            {[
              `${district} çekici ile ortalama 15-20 dakikada adrese ulaşım`,
              "Kayar kasa, vinç veya ahtapot kurtarıcı donanımı",
              "Kaskolu, sigortalı ve faturalı araç transferi",
              "Gece, gündüz ve tatil günleri 7/24 nöbetçi kurtarma hattı",
            ].map((item) => (
              <p key={item} className="mt-5 flex gap-3 text-slate-200">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-300" />
                {item}
              </p>
            ))}
          </div>
        </section>

        {/* Service SEO Content */}
        <ServiceSeoContent
          district={district}
          serviceSlug={service.slug}
          serviceTitle={isTowing ? `${searchQuery} / ${district} Oto Çekici` : service.title}
        />

        {/* Local Area Guide */}
        <LocalAreaGuide slug={slug} district={district} serviceTitle={service.title} />

        {/* Localized FAQ Section */}
        <section className="border-t border-slate-200 bg-white py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
              {district} Sıkça Sorulan Sorular
            </p>
            <h2 className="section-title mt-3">
              {district} {isTowing ? "Çekici ve Oto Kurtarma" : service.title} Hakkında Merak Edilenler
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {faqs.map((faq) => (
                <article key={faq.q} className="border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-amber-600" />
                    <div>
                      <h3 className="font-heading text-lg font-black text-slate-900">{faq.q}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <LocalServiceJourney district={district} serviceSlug={service.slug} serviceTitle={service.title} />

        <section className="bg-slate-100 py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="section-title">Diğer hizmet bölgeleri</h2>
            <Link href="/hizmet-bolgeleri" className="mt-5 inline-flex font-bold text-amber-700 hover:text-amber-800">
              Tüm İzmir hizmet bölgelerini inceleyin →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}

