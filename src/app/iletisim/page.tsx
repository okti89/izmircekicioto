import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock3, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyCallBar from "@/components/StickyCallBar";
import JsonLd from "@/components/JsonLd";
import { MAIN_PHONE, MAIN_PHONE_RAW, WHATSAPP_NUMBER } from "@/data/districts";

export const metadata: Metadata = {
  title: "İletişim | İzmir Çekici",
  description: "İzmir Çekici iletişim bilgileri. 7/24 oto çekici, yol yardım, akü takviye ve oto kurtarma desteği için hemen arayın veya WhatsApp'tan konumunuzu gönderin.",
};

const content = {
  eyebrow: "İzmir çekici iletişim",
  title: "Yolda mı kaldınız? Konumunuzu paylaşın, doğru ekibi yönlendirelim.",
  intro: "Oto çekici, akü takviye, oto elektrik, oto kurtarma ve ağır vasıta desteği için 7/24 ulaşabilirsiniz. Aracınızın konumunu ve ihtiyacınızı paylaşmanız yeterlidir.",
  whatsapp: "WhatsApp'tan konum gönder",
  call: "Hemen ara",
  stepsTitle: "Hızlı yönlendirme için",
  steps: [
    "Konumunuzu veya bulunduğunuz yolu paylaşın.",
    "Araç tipi ile arıza ya da hasar durumunu kısaca belirtin.",
    "Teslim adresini iletin; uygun ekipmanı planlayalım.",
  ],
  coverageTitle: "Hizmet bölgemiz",
  coverage: "İzmir merkez, ilçeler, ana arterler, çevre yolu ve yakın güzergâhlarda 7/24 yol yardım desteği.",
  regionLink: "Tüm hizmet bölgelerini inceleyin",
  serviceTitle: "Size nasıl destek olabiliriz?",
  services: ["Oto çekici ve kayar kasa taşıma", "Akü takviye ve mobil oto elektrik", "Kaza, arıza ve oto kurtarma", "Ağır vasıta kurtarma ve transfer"],
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Merhaba, konumumu paylaşarak çekici ve yol yardım desteği almak istiyorum.")}`;

  return (
    <>
      <Header />`n      <JsonLd path="/iletisim" name="İzmir Çekici İletişim" serviceName="Oto çekici ve yol yardım" district="İzmir" />
      <main>
        <section className="bg-slate-950 py-20 text-white">
          <div className="container mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-amber-300">{content.eyebrow}</p>
              <h1 className="mt-5 max-w-3xl font-heading text-5xl font-black leading-tight md:text-6xl">{content.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">{content.intro}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 bg-emerald-500 px-6 py-4 font-black text-white transition hover:bg-emerald-600">
                  <MessageCircle className="h-5 w-5" />{content.whatsapp}
                </a>
                <a href={`tel:${MAIN_PHONE_RAW}`} className="inline-flex items-center justify-center gap-3 bg-amber-400 px-6 py-4 font-black text-slate-950 transition hover:bg-amber-300">
                  <Phone className="h-5 w-5" />{content.call}: {MAIN_PHONE}
                </a>
              </div>
            </div>
            <aside className="border border-slate-700 bg-slate-900 p-7">
              <p className="text-sm font-bold uppercase tracking-widest text-amber-300">7/24 acil destek</p>
              <a href={`tel:${MAIN_PHONE_RAW}`} className="mt-5 flex items-center gap-3 text-3xl font-black text-white"><Phone className="h-7 w-7 text-amber-300" />{MAIN_PHONE}</a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-6 flex items-center gap-3 font-bold text-emerald-300"><Send className="h-5 w-5" />{content.whatsapp}</a>
              <p className="mt-6 border-t border-slate-700 pt-6 text-sm leading-7 text-slate-300">Telefonla arayabilir ya da WhatsApp üzerinden konumunuzu iletebilirsiniz. Hizmet ihtiyacınıza göre uygun ekip yönlendirilir.</p>
            </aside>
          </div>
        </section>

        <section className="container mx-auto grid max-w-6xl gap-8 px-4 py-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-amber-600">{content.stepsTitle}</p>
            <h2 className="section-title mt-3">Yol yardım talebinizi birkaç bilgiyle başlatın.</h2>
            <div className="mt-8 space-y-5">
              {content.steps.map((step, index) => <p key={step} className="flex gap-4 border-b border-slate-200 pb-5 text-slate-700"><span className="grid h-8 w-8 shrink-0 place-items-center bg-amber-400 font-black text-slate-950">0{index + 1}</span>{step}</p>)}
            </div>
          </div>
          <div className="bg-slate-100 p-8">
            <MapPin className="h-9 w-9 text-amber-600" />
            <h2 className="mt-5 font-heading text-3xl font-black text-slate-950">{content.coverageTitle}</h2>
            <p className="mt-4 leading-8 text-slate-600">{content.coverage}</p>
            <Link href="/hizmet-bolgeleri" className="mt-7 inline-flex items-center gap-2 font-bold text-amber-700"><MapPin className="h-5 w-5" />{content.regionLink}</Link>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex items-center gap-3 text-amber-300"><Clock3 className="h-5 w-5" /><p className="text-sm font-bold uppercase tracking-widest">Doğru ekipman, kontrollü hizmet</p></div>
            <h2 className="mt-4 max-w-3xl font-heading text-4xl font-black">{content.serviceTitle}</h2>
            <div className="mt-9 grid gap-4 md:grid-cols-2">
              {content.services.map((service) => <p key={service} className="flex items-center gap-3 border border-slate-700 p-5 text-slate-200"><CheckCircle2 className="h-5 w-5 shrink-0 text-amber-300" />{service}</p>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
