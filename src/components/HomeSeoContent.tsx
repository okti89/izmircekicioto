/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, ShieldCheck, ShieldAlert, Wrench, DollarSign } from "lucide-react";
import { MAIN_PHONE, MAIN_PHONE_RAW } from "@/data/districts";
import {
  HIGHWAY_TUNNEL_LINKS,
  INDUSTRIAL_SITES_LINKS,
} from "@/data/navigationCategories";

const coreAreas = [
  ["Bornova Çekici", "/bornova-cekici"],
  ["Karşıyaka Çekici", "/karsiyaka-cekici"],
  ["Konak Çekici", "/konak-cekici"],
  ["Buca Çekici", "/buca-cekici"],
  ["Gaziemir Çekici", "/gaziemir-cekici"],
  ["Çiğli Çekici", "/cigli-cekici"],
  ["Çeşme Alaçatı Çekici", "/alacati-cekici"],
  ["Torbalı Ayrancılar Çekici", "/torbali-ayrancilar-cekici"],
  ["Buca Gölet Çekici", "/buca-golet-cekici"],
];

const faqs = [
  [
    "İzmir'de oto çekici ne zaman gerekir?",
    "Araç arızası, kaza, akü bitmesi, lastik sorunu veya güvenli servis transferi gereken durumlarda uygun ekipmanla çekici yönlendirilir.",
  ],
  [
    "Otoyol ve çevre yollarında çekici ne kadar sürede gelir?",
    "İzmir Çevre Yolu, İzmir-Aydın ve İzmir-Çeşme otoyolu ile Sabuncubeli ve Belkahve güzergâhlarında nöbetçi ekiplerimiz ortalama 15-20 dakikada emniyet şeridine ulaşır.",
  ],
  [
    "Oto sanayi sitelerine araç transferi yapıyor musunuz?",
    "Evet, 1., 2., 3., 4., 5., 6., 7. Sanayi Siteleri ve Kısıkköy Sanayi Sitesi'ndeki yetkili ve özel servislere güvenli araç nakli sağlıyoruz.",
  ],
  [
    "İzmir çekici fiyatları nasıl hesaplanır?",
    "Şehir içi çekici fiyatları aracın tipi (binek, SUV, hafif ticari), arıza durumu ve kat edilen mesafeye (km) göre şeffaf tarifeyle belirlenir. Fiyatlar sayfamızdan güncel tarifeyi inceleyebilirsiniz.",
  ],
];

export default function HomeSeoContent() {
  return (
    <>
      {/* Rehber ve Süreç Bölümü */}
      <section className="border-y border-slate-200 bg-white py-20">
        <div className="container mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
              İzmir oto çekici rehberi
            </p>
            <h2 className="section-title mt-3">Aracınız için doğru çekici ve yol yardım çözümü</h2>
            <p className="mt-6 leading-8 text-slate-600">
              İzmir'de çekici ihtiyacı yalnızca aracın çalışmamasıyla ortaya çıkmaz. Kaza sonrası taşıma, akü bitmesi, marş ve şarj arızaları, lastik sorunu ya da güvenli servis transferi için aracın durumuna uygun ekipman gerekir. İzmir Çekici, ilk görüşmede konum ve araç bilgisini değerlendirerek ihtiyaç duyulan hizmeti planlar.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Kayar kasa hidrolik çekicilerimiz binek araç, SUV, spor araç ve hafif ticari araçların hasarsız yüklenmesini sağlar. İzmir Çevre Yolu, otoyollar, dağ geçitleri ve sanayi sitelerinde 7/24 teyakkuzdayız.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/fiyatlar"
                className="inline-flex items-center gap-2 rounded bg-amber-500 px-5 py-3 text-sm font-black text-slate-950 hover:bg-amber-400 transition"
              >
                <DollarSign className="h-4 w-4" />
                2026 Çekici Fiyatlarını Gör
              </Link>
              <Link
                href="/hizmet-bolgeleri"
                className="inline-flex items-center gap-2 rounded border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 hover:border-amber-500 hover:text-amber-700 transition"
              >
                Tüm Hizmet Bölgelerimiz →
              </Link>
            </div>
          </div>

          <aside className="border-l-4 border-amber-400 bg-slate-950 p-8 text-white">
            <ShieldCheck className="h-9 w-9 text-amber-300" />
            <h3 className="mt-5 font-heading text-3xl font-black">Çağrıdan yönlendirmeye net süreç</h3>
            <ol className="mt-6 space-y-5 text-sm leading-6 text-slate-200">
              <li>
                <strong className="mr-2 text-amber-300">01.</strong>
                Konumunuzu ve aracınızdaki sorunu paylaşın.
              </li>
              <li>
                <strong className="mr-2 text-amber-300">02.</strong>
                Araca uygun çekici veya yol yardım hizmeti belirlensin.
              </li>
              <li>
                <strong className="mr-2 text-amber-300">03.</strong>
                Ekip güvenli yükleme ve teslim için yönlendirilsin.
              </li>
            </ol>
            <a
              href={`tel:${MAIN_PHONE_RAW}`}
              className="mt-8 inline-flex items-center gap-2 border border-amber-300 px-5 py-3 text-sm font-extrabold text-amber-300 hover:bg-amber-300 hover:text-slate-950 transition"
            >
              <Phone className="h-4 w-4" />
              {MAIN_PHONE}
            </a>
          </aside>
        </div>
      </section>

      {/* Ana Güzergahlar & Otoyol Hatları */}
      <section className="bg-slate-100 py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
                Stratejik Güzergâhlar
              </p>
              <h2 className="section-title mt-2">
                Otoyol, Çevre Yolu ve Tünel Çekici Hatları
              </h2>
            </div>
            <Link href="/hizmet-bolgeleri" className="text-sm font-bold text-amber-700 hover:underline">
              Tüm Noktalar →
            </Link>
          </div>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600 text-sm">
            İzmir Çevre Yolu, Sabuncubeli Tüneli, Belkahve Rampası, Çeşme Otoyolu ve Aydın Otoyolu üzerinde arıza veya kaza halinde emniyet şeridine hızlı yönlendirme sağlıyoruz.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {HIGHWAY_TUNNEL_LINKS.slice(0, 6).map((item) => (
              <Link
                key={item.slug}
                href={item.href}
                className="flex items-center justify-between border border-slate-200 bg-white px-5 py-4 font-bold text-slate-900 transition hover:border-amber-400 hover:text-amber-700"
              >
                <span>{item.name} Çekici</span>
                <ShieldAlert className="h-4 w-4 text-amber-500" />
              </Link>
            ))}
          </div>

          {/* Sanayi Siteleri Çekici Hatları */}
          <div className="mt-14 pt-10 border-t border-slate-200">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
                  Tamirhane & Servisler
                </p>
                <h3 className="font-heading text-2xl font-black text-slate-900 mt-1">
                  1-7. Sanayi Siteleri ve Kısıkköy Çekici
                </h3>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {INDUSTRIAL_SITES_LINKS.map((item) => (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="flex items-center justify-between border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-amber-400 hover:text-amber-700"
                >
                  <span>{item.name}</span>
                  <Wrench className="h-4 w-4 text-amber-500" />
                </Link>
              ))}
            </div>
          </div>

          {/* Popüler Merkez İlçeler */}
          <div className="mt-14 pt-10 border-t border-slate-200">
            <h3 className="font-heading text-2xl font-black text-slate-900">
              Popüler İlçe ve Merkez Çekici Noktaları
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {coreAreas.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center justify-between border border-slate-200 bg-white px-5 py-4 font-bold text-slate-800 transition hover:border-amber-400 hover:text-amber-700"
                >
                  <span>{label}</span>
                  <MapPin className="h-4 w-4 text-amber-500" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sıkça Sorulan Sorular */}
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
            Sıkça sorulan sorular
          </p>
          <h2 className="section-title mt-3">İzmir çekici hizmeti hakkında merak edilenler</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {faqs.map(([q, a]) => (
              <article key={q} className="border border-slate-200 p-7">
                <CheckCircle2 className="h-6 w-6 text-amber-500" />
                <h3 className="mt-4 font-heading text-xl font-black">{q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}