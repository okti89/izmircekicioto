import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, MessageCircle, Phone, Truck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import JsonLd from "@/components/JsonLd";
import { MAIN_PHONE, MAIN_PHONE_RAW, WHATSAPP_NUMBER } from "@/data/districts";

export const metadata: Metadata = {
  title: { absolute: "İzmir Çekici Hizmet Planlama | Teklif İçin Gerekli Bilgiler" },
  description: "İzmir çekici talebinde konum, araç, erişim ve teslim bilgilerini nasıl paylaşacağınızı öğrenin. İşlem kapsamı görüşmede netleştirilir.",
  alternates: { canonical: "/fiyatlar" },
};

const factors = [
  ["Başlangıç ve teslim konumu", "Aracın bulunduğu nokta, gidilecek servis veya adres ve kullanılacak güzergâh birlikte değerlendirilir."],
  ["Araç ve mevcut durum", "Araç sınıfı, tekerleklerin hareketi, vites durumu ve görünen hasar uygun ekipmanın belirlenmesini sağlar."],
  ["Erişim koşulları", "Kapalı otopark, dar sokak, eğim, otoyol emniyet şeridi veya yumuşak zemin gibi koşullar işlem planını değiştirir."],
];

const faqs = [
  { q: "Hizmet kapsamı nasıl belirlenir?", a: "Konum, araç tipi, mevcut sorun, yol ve teslim bilgileri görüşmede değerlendirilir. Eksik bilgi varsa işlem başlamadan önce ayrıntı istenir." },
  { q: "Telefonda hangi bilgileri paylaşmalıyım?", a: "Canlı konum bağlantısını, araç marka ve modelini, tekerleklerin hareket edip etmediğini ve teslim noktasını paylaşın." },
  { q: "Otoyolda konum nasıl tarif edilir?", a: "Yolun adını, gidiş yönünü, mümkünse kilometre veya çıkış bilgisini ve güvenli bekleme noktasını bildirin." },
  { q: "Kesin varış süresi veriliyor mu?", a: "Trafik, ekibin mevcut konumu, yol erişimi ve gereken ekipman değişebildiği için tahmini süre bilgiler alındıktan sonra paylaşılır." },
];

export default function ServicePlanningPage() {
  const message = encodeURIComponent("Merhaba, çekici hizmeti için konum ve araç bilgilerimi paylaşmak istiyorum.");
  return <>
    <Header />
    <JsonLd name="İzmir çekici hizmet planlama" description="Çekici talebi öncesinde gerekli konum, araç ve teslim bilgileri." path="/fiyatlar" breadcrumbs={[{ name: "Ana Sayfa", url: "/" }, { name: "Hizmet Planlama", url: "/fiyatlar" }]} />
    <main>
      <nav aria-label="Sayfa yolu" className="border-b border-slate-800 bg-slate-900 py-3 text-xs text-slate-300"><div className="container mx-auto flex max-w-6xl gap-2 px-4"><Link href="/">Ana Sayfa</Link><span>/</span><span className="text-amber-300">Hizmet Planlama</span></div></nav>
      <section className="border-b-4 border-amber-500 bg-slate-950 py-20 text-white"><div className="container mx-auto max-w-6xl px-4">
        <p className="text-sm font-bold uppercase tracking-widest text-amber-300">Konum • Araç • Erişim • Teslim</p>
        <h1 className="mt-5 max-w-4xl font-heading text-4xl font-black md:text-6xl">Çekici talebinden önce hangi bilgiler gerekir?</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">Her talebin mesafesi, araç durumu ve erişim koşulu farklıdır. Bu nedenle sabit veya gerçeği yansıtmayan bir tarife yayımlamak yerine hizmet kapsamını verdiğiniz bilgilere göre netleştiriyoruz.</p>
        <div className="mt-8 flex flex-wrap gap-4"><a href={`tel:${MAIN_PHONE_RAW}`} className="inline-flex items-center gap-2 bg-amber-400 px-7 py-4 font-black text-slate-950"><Phone className="h-5 w-5" />{MAIN_PHONE}</a><a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`} className="inline-flex items-center gap-2 border border-emerald-400 px-7 py-4 font-bold text-emerald-300"><MessageCircle className="h-5 w-5" />Konum ve araç bilgisi gönder</a></div>
      </div></section>
      <section className="container mx-auto max-w-6xl px-4 py-20"><h2 className="section-title">Hizmet planını etkileyen bilgiler</h2><div className="mt-9 grid gap-6 md:grid-cols-3">{factors.map(([title, body], index) => <article key={title} className="border border-slate-200 bg-white p-7"><span className="font-heading text-xl font-black text-amber-600">0{index + 1}</span><h3 className="mt-4 font-heading text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{body}</p></article>)}</div></section>
      <section className="bg-slate-100 py-16"><div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2"><div><MapPin className="h-9 w-9 text-amber-600"/><h2 className="section-title mt-4">Konumu doğru paylaşın</h2><p className="mt-5 leading-8 text-slate-600">Canlı konuma ek olarak yolun yönünü, yakın çıkışı, otopark katını veya tesis girişini yazın. Yalnızca semt adı, özellikle aynı adın birden fazla ilçede bulunduğu yerlerde yeterli olmayabilir.</p></div><div className="bg-slate-950 p-8 text-white"><Truck className="h-9 w-9 text-amber-300"/><h2 className="mt-4 font-heading text-2xl font-black">Araç durumunu açıklayın</h2><ul className="mt-6 space-y-4 text-sm text-slate-200">{["Araç türü, marka ve model", "Arıza, kaza veya taşıma ihtiyacı", "Tekerlek, direksiyon ve vites durumu", "Teslim edilecek servis veya adres"].map(item => <li key={item} className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-amber-300" />{item}</li>)}</ul></div></div></section>
      <section className="container mx-auto max-w-6xl px-4 py-20"><h2 className="section-title">Hizmet planlama hakkında sorular</h2><div className="mt-8 grid gap-5 md:grid-cols-2">{faqs.map(faq => <article key={faq.q} className="border border-slate-200 bg-slate-50 p-6"><h3 className="font-heading text-xl font-black">{faq.q}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p></article>)}</div></section>
    </main>
    <Footer /><StickyCallBar />
  </>;
}
