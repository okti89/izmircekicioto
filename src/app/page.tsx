import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, ShieldCheck, Truck, Wrench, Zap, type LucideIcon } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeLongformContent from "@/components/HomeLongformContent";
import HomeSeoContent from "@/components/HomeSeoContent";
import JsonLd from "@/components/JsonLd";
import OperationGallery from "@/components/OperationGallery";
import ServiceAssurance from "@/components/ServiceAssurance";
import StickyCallBar from "@/components/StickyCallBar";
import { MAIN_PHONE, MAIN_PHONE_RAW } from "@/data/districts";
const homeFaqs = [
  {
    q: "İzmir'de en yakın oto çekici ne kadar sürede gelir?",
    a: "İzmir genelinde stratejik noktalarda bekleyen nöbetçi ekiplerimizle çağrınızdan itibaren ortalama 15-25 dakika içinde konumunuza ulaşıyoruz.",
  },
  {
    q: "Oto çekici çağırmak için hangi bilgiler gerekir?",
    a: "Aracınızın tam konumu (WhatsApp canlı konum), marka-modeli, hareket edip edemediği ve arıza/hasar durumu hakkında kısa bilgi vermeniz yeterlidir.",
  },
  {
    q: "Kayar kasa çekici hangi araçlar için uygundur?",
    a: "Binek otomobil, SUV, alçak spor araçlar ve hafif ticari araçlar için kayar kasa hidrolik çekiciler güvenli yükleme sağlar.",
  },
  {
    q: "Gaziemir, Bornova, Karşıyaka ve çevre ilçelerde 7/24 çekici var mı?",
    a: "Evet, İzmir'in tüm merkez ve çevre ilçelerinde, otoyollarında 7 gün 24 saat kesintisiz oto kurtarma ve çekici hizmeti sağlıyoruz.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "İzmir Çekici | 7/24 En Yakın Oto Çekici ve Yol Yardım" },
  description:
    "İzmir çekici ve 7/24 oto kurtarma hizmeti. Gaziemir, Bornova, Karşıyaka, Buca ve tüm ilçelerde 15 dakikada en yakın kayar kasa çekici. Hemen arayın!",
  alternates: { canonical: "/" },
};

const services: [string, string, string, LucideIcon][] = [
  ["Çekici", "Kayar kasa ile güvenli araç taşıma", "/cekici", Truck],
  ["Akü Takviye", "Yerinde akü ve marş desteği", "/aku-takviye", Zap],
  ["Mobil Oto Elektrik", "Şarj ve elektrik arızalarında destek", "/oto-elektrik", Wrench],
];

export default function HomePage() {
  return (
    <>
      <Header />
      <JsonLd
        name="İzmir Çekici - 7/24 Oto Çekici ve Kurtarıcı"
        description="İzmir genelinde 7/24 oto çekici, oto kurtarma, akü takviye ve acil yol yardım servisi."
        path="/"
        serviceName="İzmir Oto Çekici"
        district="İzmir"
        faqs={homeFaqs}
        breadcrumbs={[{ name: "Ana Sayfa", url: "/" }]}
      />
      <main>
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <Image
            src="/izmir-cekici-hero.png"
            alt="İzmir oto çekici ve yol yardım hizmeti"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/75" />
          <div className="relative container mx-auto max-w-6xl px-4 py-28">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-300">
              7/24 İZMİR OTO ÇEKİCİ & ACİL YOL YARDIM
            </p>
            <h1 className="mt-5 max-w-3xl font-heading text-5xl font-black leading-tight md:text-7xl">
              İzmir Oto Çekici | 7/24 En Yakın Acil Çekici ve Yol Yardım
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Oto çekici, akü takviye, mobil oto elektrik ve oto kurtarma hizmetleri için İzmir genelinde konumunuza en yakın kayar kasa ekibi anında yönlendiriyoruz.
            </p>
            <a
              href={`tel:${MAIN_PHONE_RAW}`}
              className="mt-8 inline-flex items-center gap-2 bg-amber-400 px-7 py-4 font-black text-slate-950 hover:bg-amber-300 transition"
            >
              <Phone className="h-5 w-5" />
              {MAIN_PHONE}
            </a>
          </div>
        </section>

        <section className="container mx-auto max-w-6xl px-4 py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
            Hizmetlerimiz
          </p>
          <h2 className="section-title mt-3">
            İzmir Genelinde Profesyonel Oto Çekici ve Yol Yardım
          </h2>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {services.map(([title, text, href, Icon]) => (
              <Link
                key={href}
                href={href}
                className="border border-slate-200 p-7 transition hover:border-amber-400 hover:shadow-lg"
              >
                <Icon className="h-9 w-9 text-amber-500" />
                <h3 className="mt-5 font-heading text-2xl font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 py-16 text-white">
          <div className="container mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
            <p className="flex gap-3 items-center">
              <ShieldCheck className="h-6 w-6 text-amber-300 shrink-0" />
              Aracınıza uygun kayar kasa ve vinçli ekipman seçimi
            </p>
            <p className="flex gap-3 items-center">
              <MapPin className="h-6 w-6 text-amber-300 shrink-0" />
              Gaziemir, Bornova, Buca dahil tüm İzmir ilçelerinde 15 dk ortalama varış
            </p>
            <p className="flex gap-3 items-center">
              <Truck className="h-6 w-6 text-amber-300 shrink-0" />
              Kaskolu, sigortalı ve faturalı profesyonel araç taşıma
            </p>
          </div>
        </section>

        <HomeSeoContent />
        <ServiceAssurance />
        <OperationGallery />
        <HomeLongformContent />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}