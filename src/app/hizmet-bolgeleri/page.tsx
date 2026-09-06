/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { ShieldAlert, Wrench, Compass, DollarSign, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import JsonLd from "@/components/JsonLd";
import { REFERENCE_REGIONS } from "@/data/referenceRegions";
import {
  HIGHWAY_TUNNEL_LINKS,
  INDUSTRIAL_SITES_LINKS,
  CESME_PENINSULA_LINKS,
  TORBALI_REGION_LINKS,
  SURROUNDING_DISTRICTS_LINKS,
} from "@/data/navigationCategories";
import { MAIN_PHONE, MAIN_PHONE_RAW } from "@/data/districts";

const services = [
  ["cekici", "Çekici"],
  ["aku-takviye", "Akü Takviye"],
  ["oto-elektrik", "Oto Elektrik"],
  ["agir-vasita-kurtarma", "Ağır Vasıta Kurtarma"],
  ["agir-ticari-cekici", "Ağır Ticari Çekici"],
  ["oto-kurtarma", "Oto Kurtarma"],
  ["lastik-yol-yardim", "Lastik ve Yol Yardım"],
  ["motorsiklet-cekici", "Motosiklet Çekici"],
];

export const metadata = {
  title: { absolute: "İzmir Hizmet Bölgeleri | Otoyol, Sanayi ve İlçe Çekici Noktaları" },
  description:
    "İzmir'in tüm ilçe, otoyol, tünel ve sanayi sitelerinde 7/24 oto çekici, akü takviye, oto elektrik ve kurtarıcı hizmet bölgeleri.",
  alternates: { canonical: "/hizmet-bolgeleri" },
};

export default function ServiceRegionsPage() {
  return (
    <>
      <Header />
      <JsonLd
        path="/hizmet-bolgeleri"
        name="İzmir Çekici Hizmet Bölgeleri"
        description="İzmir'in tüm ilçelerinde, otoyollarında ve sanayi sitelerinde 7/24 oto çekici ve acil yol yardım hizmet bölgeleri."
        serviceName="Oto Çekici ve Yol Yardım Bölgeleri"
        breadcrumbs={[
          { name: "Ana Sayfa", url: "/" },
          { name: "Hizmet Bölgeleri", url: "/hizmet-bolgeleri" },
        ]}
      />

      <main className="bg-slate-50">
        {/* Başlık Bölümü */}
        <section className="border-b-4 border-amber-500 bg-slate-950 py-16 text-white md:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
              7/24 İZMİR GENELİ HİZMET AĞI
            </p>
            <h1 className="mt-4 font-heading text-4xl font-black md:text-6xl">
              İzmir Çekici Hizmet Bölgeleri
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
              İzmir Çevre Yolu, otoyollar, tüneller, 1-7. Sanayi Siteleri, Çeşme Yarımadası, Torbalı ve tüm ilçelerde en yakın kayar kasa çekici ekibi dakikalar içinde yönlendirilir.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${MAIN_PHONE_RAW}`}
                className="inline-flex items-center gap-2 bg-amber-500 px-6 py-3.5 font-heading text-sm font-black text-slate-950 hover:bg-amber-400 transition"
              >
                <Phone className="h-4 w-4" />
                ACİL ÇEKİCİ ÇAĞIR: {MAIN_PHONE}
              </a>
              <Link
                href="/fiyatlar"
                className="inline-flex items-center gap-2 border border-amber-400/40 bg-slate-900 px-6 py-3.5 text-sm font-bold text-amber-300 hover:bg-amber-400 hover:text-slate-950 transition"
              >
                <DollarSign className="h-4 w-4" />
                2026 Çekici Fiyat Tarifesi
              </Link>
            </div>
          </div>
        </section>

        {/* Öne Çıkan Kategoriler */}
        <div className="container mx-auto max-w-6xl px-4 py-12 space-y-12">
          {/* 1. OTOYOL, ÇEVRE YOLU VE TÜNELLER */}
          <section className="border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-600">
                  <ShieldAlert className="h-4 w-4" />
                  Kritik Güzergâhlar & Tüneller
                </span>
                <h2 className="mt-1 font-heading text-2xl font-black text-slate-950">
                  Otoyol, Çevre Yolu ve Tünel Çekici Hatları
                </h2>
              </div>
              <span className="text-xs font-semibold text-slate-500">
                Emniyet şeridi ve tünel çıkışlarında 15 dk varış
              </span>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {HIGHWAY_TUNNEL_LINKS.map((item) => (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="flex items-center justify-between border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-amber-400 hover:bg-amber-50 hover:text-amber-900"
                >
                  <span>{item.name} Çekici</span>
                  {item.badge ? (
                    <span className="rounded bg-amber-500/20 px-2 py-0.5 text-[10px] font-black text-amber-800">
                      {item.badge}
                    </span>
                  ) : (
                    <MapPin className="h-4 w-4 text-amber-500" />
                  )}
                </Link>
              ))}
            </div>
          </section>

          {/* 2. SANAYİ SİTELERİ */}
          <section className="border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-600">
                  <Wrench className="h-4 w-4" />
                  Servis & Tamirhane Transferleri
                </span>
                <h2 className="mt-1 font-heading text-2xl font-black text-slate-950">
                  Oto Sanayi Siteleri Çekici
                </h2>
              </div>
              <span className="text-xs font-semibold text-slate-500">
                1 - 7. Sanayi ve Kısıkköy sanayi transferi
              </span>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {INDUSTRIAL_SITES_LINKS.map((item) => (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="flex items-center justify-between border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-amber-400 hover:bg-amber-50 hover:text-amber-900"
                >
                  <span>{item.name} Çekici</span>
                  <MapPin className="h-4 w-4 text-amber-500" />
                </Link>
              ))}
            </div>
          </section>

          {/* 3. ÇEŞME & YARIMADA */}
          <section className="border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-600">
                  <Compass className="h-4 w-4" />
                  Yazlık & Turistik Güzergâhlar
                </span>
                <h2 className="mt-1 font-heading text-2xl font-black text-slate-950">
                  Çeşme, Urla ve Yarımada Çekici
                </h2>
              </div>
              <span className="text-xs font-semibold text-slate-500">
                Alaçatı, Ilıca, Dalyan, Yelki, Çamlı
              </span>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {CESME_PENINSULA_LINKS.map((item) => (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="flex items-center justify-between border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-amber-400 hover:bg-amber-50 hover:text-amber-900"
                >
                  <span>{item.name}</span>
                  <MapPin className="h-4 w-4 text-amber-500" />
                </Link>
              ))}
            </div>
          </section>

          {/* 4. TORBALI BÖLGESİ */}
          <section className="border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-600">
                  <MapPin className="h-4 w-4" />
                  Güney Hattı & Sanayi Bölgesi
                </span>
                <h2 className="mt-1 font-heading text-2xl font-black text-slate-950">
                  Torbalı ve Çevre Mahalleleri Çekici
                </h2>
              </div>
              <span className="text-xs font-semibold text-slate-500">
                Ayrancılar, Pancar, Yazıbaşı, Çaybaşı, Subaşı
              </span>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {TORBALI_REGION_LINKS.map((item) => (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="flex items-center justify-between border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-amber-400 hover:bg-amber-50 hover:text-amber-900"
                >
                  <span>{item.name}</span>
                  <MapPin className="h-4 w-4 text-amber-500" />
                </Link>
              ))}
            </div>
          </section>

          {/* 5. ÇEVRE İLÇELER & ÖZEL NOKTALAR */}
          <section className="border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-black uppercase tracking-wider text-amber-600">
                İzmir Çevre İlçeler
              </span>
              <h2 className="mt-1 font-heading text-2xl font-black text-slate-950">
                Menemen, Bergama, Ödemiş, Tire ve Çevre Bölgeler
              </h2>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {SURROUNDING_DISTRICTS_LINKS.map((item) => (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="flex items-center justify-between border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-amber-400 hover:bg-amber-50 hover:text-amber-900"
                >
                  <span>{item.name}</span>
                  <MapPin className="h-4 w-4 text-amber-500" />
                </Link>
              ))}
            </div>
          </section>

          {/* Fiyat Bannerı */}
          <section className="border-l-4 border-amber-500 bg-slate-950 p-8 text-white">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  Şeffaf Fiyat Politikası
                </p>
                <h3 className="mt-1 font-heading text-2xl font-black">
                  İzmir Çekici Fiyatları ve Hesaplama Rehberi
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Açılış ücreti, km başına mesafe tarifesi ve araç sınıfına göre net fiyat tablosunu inceleyin.
                </p>
              </div>
              <Link
                href="/fiyatlar"
                className="shrink-0 bg-amber-500 px-6 py-3 font-heading text-sm font-black text-slate-950 hover:bg-amber-400 transition"
              >
                Fiyat Tablosunu Gör →
              </Link>
            </div>
          </section>

          {/* Tüm Bölgeler Tam Dizin (SEO için) */}
          <div className="pt-8">
            <h2 className="font-heading text-2xl font-black text-slate-950">
              Tüm Hizmetler ve Bölgeler Dizini
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Aşağıdaki listeden dilediğiniz hizmet ve bölge kombinasyonunu seçebilirsiniz:
            </p>

            <div className="mt-8 space-y-8">
              {services.map(([slug, label]) => (
                <article key={slug} className="border border-slate-200 bg-white p-6 md:p-8">
                  <div className="flex items-end justify-between gap-3 border-b border-slate-100 pb-4">
                    <h3 className="font-heading text-xl font-black text-slate-950">
                      {label} Bölgeleri
                    </h3>
                    <Link href={`/${slug}`} className="text-xs font-bold text-amber-700 hover:underline">
                      Genel {label} Sayfası →
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {REFERENCE_REGIONS.map((region) => (
                      <Link
                        key={`${slug}-${region.slug}`}
                        href={`/${region.slug}-${slug}`}
                        className="border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs text-slate-700 transition hover:bg-slate-950 hover:text-white"
                      >
                        {region.name} {slug === "cekici" ? "Çekici" : label}
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <StickyCallBar />
    </>
  );
}