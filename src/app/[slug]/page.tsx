import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import RegionalServiceGuide from "@/components/RegionalServiceGuide";
import StickyCallBar from "@/components/StickyCallBar";
import VerifiedOperations from "@/components/VerifiedOperations";
import { getAllStaticSlugs, MAIN_PHONE, MAIN_PHONE_RAW, WHATSAPP_NUMBER } from "@/data/districts";
import { getDistrictDetail } from "@/data/districtDetails";
import { REFERENCE_REGIONS } from "@/data/referenceRegions";
import { getRegionalFaq, getRegionOverview, getRegionProfile } from "@/data/regionContent";
import { SERVICES } from "@/data/services";

export const dynamicParams = false;
const sortedServices = [...SERVICES].sort((a, b) => b.slug.length - a.slug.length);

function pageData(slug: string) {
  const service = sortedServices.find((item) => slug === item.slug || slug.endsWith(`-${item.slug}`));
  if (!service) notFound();
  const isHub = slug === service.slug;
  const regionSlug = isHub ? "izmir" : slug.slice(0, -service.slug.length - 1);
  const region = REFERENCE_REGIONS.find((item) => item.slug === regionSlug);
  if (!isHub && !region) notFound();
  const district = region?.name ?? "İzmir";
  const profile = getRegionProfile(regionSlug);
  if (!profile) notFound();
  const detail = getDistrictDetail(regionSlug);
  const heading = `${district} ${service.title}`;
  const title = isHub ? `${heading} | Hizmet Kapsamı ve Bölgeler` : `${heading} | 7/24 ${service.slug === "cekici" ? "Oto Çekici ve Yol Yardım" : "Yol Yardım"}`;
  const description = isHub
    ? `İzmir ${service.title.toLocaleLowerCase("tr-TR")} rehberi: hizmet kapsamı, müdahale koşulları ve bölge sayfaları. Konumunuzu seçerek ilgili hizmet bilgilerine ulaşın.`
    : `${heading} hizmeti. ${profile.status === "sourced" && profile.districts.length === 1 && profile.districts[0] !== "İzmir" ? `${profile.districts[0]} ilçesinde konum ve erişim rehberi. ` : ""}${service.intro} Konum ve araç bilgisiyle destek isteyin.`;
  const faqs = [
    ...service.faqs,
    getRegionalFaq(profile, service),
    {
      q: `${district} için varış süresi nasıl belirlenir?`,
      a: "Uygun ekibin konumu, trafik, yol erişimi ve gereken ekipman değerlendirildikten sonra tahmini süre görüşmede paylaşılır. Her konum için geçerli sabit bir varış süresi yoktur.",
    },
  ];
  return { service, isHub, regionSlug, district, detail, profile, heading, title, description, faqs };
}

export function generateStaticParams() { return getAllStaticSlugs(); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { service, title, description, isHub, profile } = pageData(slug);
  const shouldIndex = isHub || profile.status !== "needs-review";
  return {
    title: { absolute: title }, description, alternates: { canonical: `/${slug}` },
    robots: { index: shouldIndex, follow: true },
    openGraph: { type: "website", locale: "tr_TR", title, description, url: `/${slug}`, images: [{ url: service.image, alt: service.imageAlt }] },
    twitter: { card: "summary_large_image", title, description, images: [service.image] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { service, isHub, regionSlug, district, detail, profile, heading, description, faqs } = pageData(slug);
  const breadcrumbs = [
    { name: "Ana Sayfa", url: "/" },
    ...(isHub ? [] : [{ name: `İzmir ${service.title}`, url: `/${service.slug}` }]),
    { name: heading, url: `/${slug}` },
  ];
  const message = encodeURIComponent(`${district} ${service.title} için destek istiyorum. Konumum ve araç bilgilerim: `);
  return <>
    <Header />
    <JsonLd name={heading} description={description} path={`/${slug}`} serviceName={service.title} district={district} faqs={isHub ? faqs : undefined} breadcrumbs={breadcrumbs} />
    <main>
      <nav aria-label="Sayfa yolu" className="border-b border-slate-800 bg-slate-900 py-3 text-xs text-slate-300">
        <ol className="container mx-auto flex max-w-6xl flex-wrap gap-2 px-4">
          {breadcrumbs.map((item, index) => <li key={item.url} className="flex gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {index === breadcrumbs.length - 1 ? <span aria-current="page" className="text-amber-300">{item.name}</span> : <Link href={item.url}>{item.name}</Link>}
          </li>)}
        </ol>
      </nav>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <Image src={service.image} alt={service.imageAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-slate-950/85" />
        <div className="relative container mx-auto max-w-6xl px-4 py-24">
          <p className="text-sm font-bold text-amber-300">{district} • 7/24 destek hattı</p>
          <h1 className="mt-5 max-w-3xl font-heading text-4xl font-black md:text-6xl">{heading}{isHub ? " Hizmet Rehberi" : ""}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">{service.intro}</p>
          {!isHub && <p className="mt-4 max-w-2xl leading-7 text-slate-300">{getRegionOverview(profile)}</p>}
          {isHub && <p className="mt-4 max-w-2xl leading-8 text-slate-300">Bu rehberde hizmetin kapsamını ve müdahale koşullarını inceleyebilir, aşağıdaki bölge listesinden bulunduğunuz konuma ait sayfaya geçebilirsiniz.</p>}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`tel:${MAIN_PHONE_RAW}`} className="inline-flex items-center gap-2 bg-amber-400 px-7 py-4 font-black text-slate-950"><Phone className="h-5 w-5" />{MAIN_PHONE}</a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`} className="border border-amber-300 px-7 py-4 font-bold text-amber-300">WhatsApp ile konum gönder</a>
          </div>
        </div>
      </section>
      <section className="container mx-auto grid max-w-6xl gap-10 px-4 py-20 lg:grid-cols-2">
        <div>
          <h2 className="section-title">{heading} için gerekli bilgiler</h2>
          <p className="mt-6 leading-8 text-slate-600">{service.guidance}</p>
          <h3 className="mt-8 font-heading text-2xl font-black">Yerinde müdahalenin sınırları</h3>
          <p className="mt-4 leading-8 text-slate-600">{service.limit}</p>
        </div>
        <aside className="bg-slate-950 p-8 text-white">
          <h2 className="font-heading text-3xl font-black">Hizmet nasıl planlanır?</h2>
          <ul className="mt-6 space-y-5">{service.scope.map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-amber-300" />{item}</li>)}</ul>
          <p className="mt-6 text-sm leading-7 text-slate-300">Konum ve araç bilgisi alındıktan sonra uygun ekipman, tahmini varış ve işlem kapsamı görüşmede netleştirilir.</p>
        </aside>
      </section>
      <RegionalServiceGuide profile={profile} service={service} showOverview={isHub} />
      {detail && <section className="bg-amber-50 py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="section-title">{district} konum ve erişim rehberi</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">{heading} talebinde yalnızca bölge adı yerine cadde, yön ve giriş bilgisini paylaşın. Aşağıdaki güzergâh ve çevre yerleşim adları konumunuzu tarif etmenize yardımcı olabilir.</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div><h3 className="font-heading text-xl font-black">Ana güzergâhlar</h3><ul className="mt-4 space-y-2">{detail.popularArteries.map((name) => <li key={name}>{name}</li>)}</ul></div>
            <div><h3 className="font-heading text-xl font-black">Çevre yerleşimler ve referans noktaları</h3><ul className="mt-4 space-y-2">{detail.neighborhoods.map((name) => <li key={name}>{name}</li>)}</ul></div>
          </div>
        </div>
      </section>}
      <VerifiedOperations regionSlug={regionSlug} serviceSlug={service.slug} />
      <section className="bg-slate-100 py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="text-sm font-bold text-amber-700">Örnek durum • Gerçek operasyon kaydı değildir</p>
          <h2 className="section-title mt-3">{service.scenario.title}</h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-600">{service.scenario.body}</p>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">{district} için benzer bir talepte konumu paylaşmanız, yol ve erişim koşullarının ayrıca değerlendirilmesini sağlar.</p>
        </div>
      </section>
      <section className="container mx-auto max-w-6xl px-4 py-20">
        <h2 className="section-title">{heading} hakkında sık sorulan sorular</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">{faqs.map((faq) => <article key={faq.q} className="border border-slate-200 bg-slate-50 p-6">
          <h3 className="font-heading text-xl font-black">{faq.q}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
        </article>)}</div>
      </section>
      <section className="bg-slate-100 py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="section-title">{isHub ? `İzmir ${service.title} hizmet bölgeleri` : `${district} için diğer hizmetler`}</h2>
          <p className="mt-4 text-slate-600">İhtiyacınıza uygun hizmeti ve konumu seçerek ilgili sayfanın açıklamalarını inceleyebilirsiniz.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {isHub ? REFERENCE_REGIONS.map((region) => <Link prefetch={false} key={region.slug} href={`/${region.slug}-${service.slug}`} className="border border-slate-200 bg-white p-4 text-sm font-bold hover:text-amber-700">{region.name} {service.title}</Link>)
              : SERVICES.filter((item) => item.slug !== service.slug).map((item) => <Link prefetch={false} key={item.slug} href={`/${regionSlug}-${item.slug}`} className="border border-slate-200 bg-white p-4 text-sm font-bold hover:text-amber-700">{district} {item.title}</Link>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-6 font-bold text-amber-700">
            {!isHub && <Link href={`/${service.slug}`}>Tüm {service.title} bölgeleri →</Link>}
            <Link href="/hizmet-bolgeleri">Tüm hizmetler ve bölgeler →</Link><Link href="/iletisim">İletişim ve konum paylaşımı →</Link>
          </div>
        </div>
      </section>
    </main>
    <Footer /><StickyCallBar />
  </>;
}
