import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, DollarSign, HelpCircle, Phone, ShieldCheck, Truck, MapPin, ShieldAlert, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import JsonLd from "@/components/JsonLd";
import { MAIN_PHONE, MAIN_PHONE_RAW, WHATSAPP_NUMBER } from "@/data/districts";
import {
  HIGHWAY_TUNNEL_LINKS,
  INDUSTRIAL_SITES_LINKS,
  CESME_PENINSULA_LINKS,
  TORBALI_REGION_LINKS,
} from "@/data/navigationCategories";

export const metadata: Metadata = {
  title: { absolute: "İzmir Çekici Fiyatları 2026 | Sabit ve Şeffaf Çekici Ücreti" },
  description:
    "İzmir oto çekici fiyatları ve kilometre başına araç kurtarma ücretleri. Sürpriz ek maliyet olmadan şeffaf, sabit ve faturalı çekici hizmeti. 7/24 anında fiyat öğrenin.",
  alternates: { canonical: "/fiyatlar" },
};

const priceFaqs = [
  {
    q: "İzmir çekici fiyatları neye göre hesaplanır?",
    a: "Çekici ücreti; aracınızın bulunduğu konum, götürüleceği servis veya adres mesafesi (km) ve aracın tipine (binek, SUV, hafif ticari, minibüs) göre belirlenir. Telefonda teyit edilen fiyat sabittir.",
  },
  {
    q: "Telefonda verilen çekici fiyatı sonradan değişir mi?",
    a: "Hayır. İzmir Çekici olarak şeffaf fiyat politikası uygularız. Konum ve araç durumunu paylaştığınızda belirtilen ücret ne ise sadece o ücreti ödersiniz; sonradan sürpriz ek masraf talep edilmez.",
  },
  {
    q: "Gece veya pazar günü ekstra çekici ücreti alınıyor mu?",
    a: "7 gün 24 saat aynı dürüst ve ekonomik fiyat tarifesiyle hizmet veriyoruz. Gece yarısı veya resmi tatillerde fahiş fiyat artışı uygulanmaz.",
  },
  {
    q: "Şehirlerarası veya ilçeler arası çekici fiyatı nasıl öğrenilir?",
    a: "İzmir'den Çeşme, Urla, Aydın, Manisa veya İstanbul gibi şehirlere araç nakliyesi için mesafeye özel indirimli kilometre tarifelerimiz mevcuttur. 0536 676 28 66 numaramızdan anında teklif alabilirsiniz.",
  },
];

const pricingFactors = [
  {
    title: "Mesafe (Kilometre)",
    desc: "Aracın teslim alınacağı nokta ile varış adresi arasındaki gerçek karayolu mesafesi hesaplanır.",
  },
  {
    title: "Araç Türü ve Tonajı",
    desc: "Standart binek otomobil, yerden yüksek SUV, alçak spor araba veya ticari panelvan araçların taşıma ekipmanı farklılık gösterir.",
  },
  {
    title: "Yürür Aksam Durumu",
    desc: "Kaza sonrası tekeri kilitlenen, şarampolde kalan veya elektrik arızası olan araçlar için vinç veya özel aparatlı kayar kasa yönlendirilir.",
  },
];

const sampleRoutes = [
  { route: "Gaziemir - Bornova Sanayi", time: "15-20 Dk", note: "Sabit ekonomik mesafe tarifesi" },
  { route: "Buca - Karşıyaka / Çiğli", time: "20-25 Dk", note: "Çevre yolu üzerinden kontrollü transfer" },
  { route: "Konak / Alsancak - 3. Sanayi", time: "15 Dk", note: "Merkez bölge hızlı servis teslimatı" },
  { route: "Çeşme / Alaçatı - İzmir Merkez", time: "45 Dk", note: "Otoyol şehirlerarası indirimli tarife" },
  { route: "Torbalı / Kısıkköy - İzmir Sanayi", time: "20 Dk", note: "Sanayi ve ticari araç taşıma" },
];

export default function PricingPage() {
  const breadcrumbs = [
    { name: "Ana Sayfa", url: "/" },
    { name: "Çekici Fiyatları", url: "/fiyatlar" },
  ];

  return (
    <>
      <Header />
      <JsonLd
        name="İzmir Çekici Fiyatları - Şeffaf ve Sabit Çekici Ücreti"
        description="İzmir genelinde 7/24 sabit, şeffaf ve ekonomik oto çekici fiyatlandırması."
        path="/fiyatlar"
        serviceName="İzmir Çekici Fiyatları"
        district="İzmir"
        faqs={priceFaqs}
        breadcrumbs={breadcrumbs}
      />
      <main>
        {/* Breadcrumb Bar */}
        <nav aria-label="Breadcrumb" className="border-b border-slate-800 bg-slate-900 py-3 text-xs text-slate-300">
          <div className="container mx-auto flex max-w-6xl items-center gap-2 px-4">
            <Link href="/" className="hover:text-amber-400 transition">Ana Sayfa</Link>
            <span className="text-slate-500">/</span>
            <span className="font-bold text-amber-300">İzmir Çekici Fiyatları</span>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-slate-950 py-20 text-white border-b-4 border-amber-500">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-amber-300">
              <DollarSign className="h-4 w-4" />
              Şeffaf • Sabit • Sürprizsiz Fiyat Garantisi
            </div>
            <h1 className="mt-5 max-w-3xl font-heading text-4xl font-black md:text-6xl">
              İzmir Çekici Fiyatları & 7/24 Sabit Çekici Ücreti
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Yolda kaldığınızda sürpriz faturalarla karşılaşmayın. Konumunuzu ve aracınızı bildirin, telefonda net çekici fiyatınızı öğrenin ve onayınız sonrası ekibimiz hemen yola çıksın.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${MAIN_PHONE_RAW}`}
                className="inline-flex items-center gap-2 bg-amber-400 px-7 py-4 font-black text-slate-950 hover:bg-amber-300 transition"
              >
                <Phone className="h-5 w-5" />
                Hemen Fiyat Öğren: {MAIN_PHONE}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Merhaba, çekici fiyatı öğrenmek istiyorum.")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-emerald-400 px-7 py-4 font-bold text-emerald-300 hover:bg-emerald-950/40 transition"
              >
                WhatsApp’tan Fiyat Al
              </a>
            </div>
          </div>
        </section>

        {/* Price Calculation Factors */}
        <section className="container mx-auto max-w-6xl px-4 py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-600">Fiyatlandırma Kriterleri</p>
          <h2 className="section-title mt-2">Çekici Ücreti Nasıl Belirlenir?</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            İzmir çekici ücreti belirlenirken üç temel değişken göz önüne alınır. Bu sayede her müşterimize hakkaniyetli, sabit ve en uygun fiyat sunulur:
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricingFactors.map((item, idx) => (
              <div key={item.title} className="border border-slate-200 bg-white p-7 shadow-sm">
                <span className="inline-block rounded-md bg-amber-400 px-3 py-1 font-heading text-lg font-black text-slate-950">
                  0{idx + 1}
                </span>
                <h3 className="mt-4 font-heading text-xl font-black text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sample Routes Table */}
        <section className="bg-slate-50 border-y border-slate-200 py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-600">Örnek Güzergâhlar</p>
            <h2 className="section-title mt-2">Popüler Çekici Hatlarında Ortalama Süreler</h2>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-left border-collapse border border-slate-200 bg-white text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 font-bold">Güzergâh / Hat</th>
                    <th className="p-4 font-bold">Ortalama Varış</th>
                    <th className="p-4 font-bold">Hizmet Kapsamı</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {sampleRoutes.map((row) => (
                    <tr key={row.route} className="hover:bg-amber-50/50 transition">
                      <td className="p-4 font-bold text-slate-900 flex items-center gap-2">
                        <Truck className="h-4 w-4 text-amber-600 shrink-0" />
                        {row.route}
                      </td>
                      <td className="p-4 text-slate-700 font-semibold">{row.time}</td>
                      <td className="p-4 text-slate-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              * Kesin fiyat bilgisi için WhatsApp veya telefonla bulunduğunuz konumu ve teslim noktasını iletiniz.
            </p>
          </div>
        </section>

        {/* Bölgesel Çekici Hatları Bağlantıları */}
        <section className="container mx-auto max-w-6xl px-4 py-16">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-600">Bölgesel Çekici Hatları</p>
          <h2 className="section-title mt-2">Otoyol, Sanayi ve İlçe Çekici Sayfalarımız</h2>
          
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {/* Otoyol & Tüneller */}
            <div className="border border-slate-200 p-6 bg-white shadow-sm">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-4">
                <ShieldAlert className="h-5 w-5" />
                <h3 className="font-heading text-lg font-black text-slate-950">Otoyol & Tüneller</h3>
              </div>
              <div className="grid gap-2 text-xs">
                {HIGHWAY_TUNNEL_LINKS.slice(0, 6).map((item) => (
                  <Link key={item.slug} href={item.href} className="text-slate-700 hover:text-amber-600 font-semibold flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 text-amber-500 shrink-0" />
                    {item.name} Çekici
                  </Link>
                ))}
              </div>
            </div>

            {/* Sanayi Siteleri */}
            <div className="border border-slate-200 p-6 bg-white shadow-sm">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-4">
                <Wrench className="h-5 w-5" />
                <h3 className="font-heading text-lg font-black text-slate-950">Sanayi Siteleri</h3>
              </div>
              <div className="grid gap-2 text-xs">
                {INDUSTRIAL_SITES_LINKS.map((item) => (
                  <Link key={item.slug} href={item.href} className="text-slate-700 hover:text-amber-600 font-semibold flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 text-amber-500 shrink-0" />
                    {item.name} Çekici
                  </Link>
                ))}
              </div>
            </div>

            {/* Popüler İlçeler & Çeşme & Torbalı */}
            <div className="border border-slate-200 p-6 bg-white shadow-sm">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-4">
                <MapPin className="h-5 w-5" />
                <h3 className="font-heading text-lg font-black text-slate-950">Çeşme & Torbalı</h3>
              </div>
              <div className="grid gap-2 text-xs">
                {CESME_PENINSULA_LINKS.slice(0, 4).map((item) => (
                  <Link key={item.slug} href={item.href} className="text-slate-700 hover:text-amber-600 font-semibold flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 text-amber-500 shrink-0" />
                    {item.name}
                  </Link>
                ))}
                {TORBALI_REGION_LINKS.slice(0, 4).map((item) => (
                  <Link key={item.slug} href={item.href} className="text-slate-700 hover:text-amber-600 font-semibold flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 text-amber-500 shrink-0" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Assurance Cards */}
        <section className="bg-slate-950 py-16 text-white">
          <div className="container mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
            <div className="flex gap-4 items-start">
              <ShieldCheck className="h-8 w-8 text-amber-300 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg">Kaskolu Taşıma Güvencesi</h3>
                <p className="text-sm text-slate-300 mt-1">Aracınız yükleme anından teslime kadar taşıma sigortası kapsamındadır.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <CheckCircle2 className="h-8 w-8 text-amber-300 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg">Sabit Fiyat Taahhüdü</h3>
                <p className="text-sm text-slate-300 mt-1">Telefonda anlaşılan ücret dışında ekstra hiçbir gizli maliyet çıkarılmaz.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Truck className="h-8 w-8 text-amber-300 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg">7/24 Kesintisiz Hizmet</h3>
                <p className="text-sm text-slate-300 mt-1">Gece, gündüz ve tatil günleri nöbetçi kurtarıcı filomuz her an hazırdır.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="container mx-auto max-w-6xl px-4 py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-600">Sıkça Sorulan Sorular</p>
          <h2 className="section-title mt-2">Çekici Fiyatları Hakkında Merak Edilenler</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {priceFaqs.map((faq) => (
              <article key={faq.q} className="border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-amber-600" />
                  <div>
                    <h3 className="font-heading text-lg font-black text-slate-900">{faq.q}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
