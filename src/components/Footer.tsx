import Link from "next/link";
import { Clock3, MapPin, MessageCircle, Phone, ShieldCheck, ShieldAlert, Wrench, DollarSign } from "lucide-react";
import { MAIN_PHONE, MAIN_PHONE_RAW, WHATSAPP_NUMBER } from "@/data/districts";
import {
  HIGHWAY_TUNNEL_LINKS,
  INDUSTRIAL_SITES_LINKS,
  CESME_PENINSULA_LINKS,
  TORBALI_REGION_LINKS,
  SURROUNDING_DISTRICTS_LINKS,
} from "@/data/navigationCategories";

const SERVICES = [
  { name: "Oto Çekici", href: "/oto-cekici" },
  { name: "Çekici Fiyat Tarifesi", href: "/fiyatlar", badge: "2026" },
  { name: "Akü Takviye", href: "/aku-takviye" },
  { name: "Mobil Oto Elektrik", href: "/oto-elektrik" },
  { name: "Ağır Vasıta Kurtarma", href: "/agir-vasita-kurtarma" },
  { name: "Ağır Ticari Çekici", href: "/agir-ticari-cekici" },
  { name: "Oto Kurtarma", href: "/oto-kurtarma" },
  { name: "Motosiklet Çekici", href: "/motorsiklet-cekici" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Üst Güvence Rozetleri */}
      <div className="border-b border-slate-800/80 bg-slate-900/50">
        <div className="container mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:grid-cols-2 md:grid-cols-4">
          <p className="flex items-center gap-3 text-sm font-medium">
            <Clock3 className="h-5 w-5 text-amber-400 shrink-0" />
            7/24 Kesintisiz Nöbetçi Çekici
          </p>
          <p className="flex items-center gap-3 text-sm font-medium">
            <ShieldCheck className="h-5 w-5 text-amber-400 shrink-0" />
            Sigortalı ve Kaskolu Araç Nakli
          </p>
          <p className="flex items-center gap-3 text-sm font-medium">
            <ShieldAlert className="h-5 w-5 text-amber-400 shrink-0" />
            Otoyol ve Tünellerde Hızlı Müdahale
          </p>
          <p className="flex items-center gap-3 text-sm font-medium">
            <Wrench className="h-5 w-5 text-amber-400 shrink-0" />
            1-7. Sanayi ve Kısıkköy Servis Transferi
          </p>
        </div>
      </div>

      {/* Ana Footer Kolonları */}
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* 1. Kolon: Şirket ve İletişim */}
          <div className="lg:col-span-1">
            <h2 className="font-heading text-2xl font-black text-white">
              İzmir <span className="text-amber-400">Çekici</span>
            </h2>
            <p className="mt-4 text-xs leading-6 text-slate-400">
              İzmir genelinde otoyollar, tüneller, çevre yolları, sanayi siteleri ve tüm ilçelerde 7/24 oto kurtarma, akü takviye ve yol yardım ağı.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={`tel:${MAIN_PHONE_RAW}`}
                className="flex items-center gap-2 text-base font-black text-amber-300 hover:text-amber-400 transition"
              >
                <Phone className="h-4 w-4" />
                {MAIN_PHONE}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp ile Konum Gönder
              </a>
              <p className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0" />
                İzmir geneli 30 ilçe ve arterler
              </p>
            </div>
            <Link
              href="/fiyatlar"
              className="mt-6 inline-flex items-center gap-1.5 rounded bg-amber-400/10 border border-amber-400/30 px-3 py-2 text-xs font-bold text-amber-300 hover:bg-amber-400 hover:text-slate-950 transition"
            >
              <DollarSign className="h-3.5 w-3.5" />
              Çekici Fiyatlarını İncele
            </Link>
          </div>

          {/* 2. Kolon: Hizmetlerimiz */}
          <div>
            <h3 className="font-heading text-sm font-black uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Hizmetlerimiz
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="flex items-center justify-between text-slate-300 transition hover:text-amber-400"
                  >
                    <span>{s.name}</span>
                    {s.badge && (
                      <span className="rounded bg-amber-500/20 px-1 py-0.5 text-[9px] font-bold text-amber-300">
                        {s.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Kolon: Otoyol & Tünel Çekici Hatları */}
          <div>
            <h3 className="font-heading text-sm font-black uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Otoyol & Tünel Çekici
            </h3>
            <ul className="mt-4 space-y-2 text-xs">
              {HIGHWAY_TUNNEL_LINKS.slice(0, 9).map((item) => (
                <li key={item.slug}>
                  <Link
                    href={item.href}
                    className="text-slate-300 transition hover:text-amber-400 block truncate"
                    title={`${item.name} Çekici`}
                  >
                    {item.name} Çekici
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Kolon: Sanayi Siteleri Çekici */}
          <div>
            <h3 className="font-heading text-sm font-black uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Sanayi Siteleri Çekici
            </h3>
            <ul className="mt-4 space-y-2 text-xs">
              {INDUSTRIAL_SITES_LINKS.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={item.href}
                    className="text-slate-300 transition hover:text-amber-400 block"
                    title={`${item.name} Çekici`}
                  >
                    {item.name} Çekici
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/buca-golet-oto-cekici"
                  className="text-slate-300 transition hover:text-amber-400 block"
                >
                  Buca Gölet Çekici
                </Link>
              </li>
              <li>
                <Link
                  href="/pinarbasi-oto-cekici"
                  className="text-slate-300 transition hover:text-amber-400 block"
                >
                  Pınarbaşı Çekici
                </Link>
              </li>
            </ul>
          </div>

          {/* 5. Kolon: Popüler İlçeler & Bölgeler */}
          <div>
            <h3 className="font-heading text-sm font-black uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Popüler Bölgeler
            </h3>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/bornova-oto-cekici" className="text-slate-300 transition hover:text-amber-400">
                  Bornova Oto Çekici
                </Link>
              </li>
              <li>
                <Link href="/karsiyaka-oto-cekici" className="text-slate-300 transition hover:text-amber-400">
                  Karşıyaka Oto Çekici
                </Link>
              </li>
              <li>
                <Link href="/konak-oto-cekici" className="text-slate-300 transition hover:text-amber-400">
                  Konak Oto Çekici
                </Link>
              </li>
              <li>
                <Link href="/buca-oto-cekici" className="text-slate-300 transition hover:text-amber-400">
                  Buca Oto Çekici
                </Link>
              </li>
              <li>
                <Link href="/gaziemir-oto-cekici" className="text-slate-300 transition hover:text-amber-400">
                  Gaziemir Oto Çekici
                </Link>
              </li>
              <li>
                <Link href="/alacati-oto-cekici" className="text-slate-300 transition hover:text-amber-400">
                  Çeşme / Alaçatı Çekici
                </Link>
              </li>
              <li>
                <Link href="/torbali-oto-cekici" className="text-slate-300 transition hover:text-amber-400">
                  Torbalı Çekici
                </Link>
              </li>
              <li>
                <Link href="/menemen-oto-cekici" className="text-slate-300 transition hover:text-amber-400">
                  Menemen Çekici
                </Link>
              </li>
              <li>
                <Link href="/bergama-oto-cekici" className="text-slate-300 transition hover:text-amber-400">
                  Bergama Çekici
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Hızlı Erişim Etiketleri: Çeşme, Torbalı, Çevre Yolu & Sanayi */}
        <div className="mt-12 border-t border-slate-800/80 pt-8">
          <p className="mb-3 font-heading text-xs font-black uppercase tracking-wider text-slate-400">
            Hızlı Çekici & Kurtarıcı Noktaları
          </p>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {CESME_PENINSULA_LINKS.slice(0, 6).map((c) => (
              <Link
                key={c.slug}
                href={c.href}
                className="rounded bg-slate-900 border border-slate-800 px-2.5 py-1 text-slate-400 hover:text-amber-400 hover:border-amber-400/50 transition"
              >
                {c.name}
              </Link>
            ))}
            {TORBALI_REGION_LINKS.slice(0, 5).map((t) => (
              <Link
                key={t.slug}
                href={t.href}
                className="rounded bg-slate-900 border border-slate-800 px-2.5 py-1 text-slate-400 hover:text-amber-400 hover:border-amber-400/50 transition"
              >
                {t.name}
              </Link>
            ))}
            {SURROUNDING_DISTRICTS_LINKS.slice(0, 6).map((d) => (
              <Link
                key={d.slug}
                href={d.href}
                className="rounded bg-slate-900 border border-slate-800 px-2.5 py-1 text-slate-400 hover:text-amber-400 hover:border-amber-400/50 transition"
              >
                {d.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Alt Telif ve Yasal Bar */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 İzmir Çekici • 7/24 Kesintisiz Oto Kurtarma & Yol Yardım Ağı. Tüm hakları saklıdır.</span>
          <div className="flex flex-wrap gap-5 font-semibold">
            <Link href="/" className="hover:text-amber-400">
              Ana Sayfa
            </Link>
            <Link href="/fiyatlar" className="text-amber-300 hover:text-white">
              Çekici Fiyatları
            </Link>
            <Link href="/hizmet-bolgeleri" className="hover:text-amber-400">
              Tüm Hizmet Bölgeleri
            </Link>
            <Link href="/iletisim" className="hover:text-amber-400">
              İletişim & Konum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}