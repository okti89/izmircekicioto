"use client";

import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { MAIN_PHONE, MAIN_PHONE_RAW } from "@/data/districts";

const services = [
  { slug: "oto-cekici", label: "Oto Çekici" },
  { slug: "aku-takviye", label: "Akü Takviye" },
  { slug: "oto-elektrik", label: "Oto Elektrik" },
  { slug: "agir-vasita-kurtarma", label: "Ağır Vasıta Kurtarma" },
  { slug: "agir-ticari-cekici", label: "Ağır Ticari Çekici" },
];

const featuredRegions = [
  { slug: "bornova", name: "Bornova" }, { slug: "buca", name: "Buca" }, { slug: "gaziemir", name: "Gaziemir" },
  { slug: "konak", name: "Konak" }, { slug: "karsiyaka", name: "Karşıyaka" }, { slug: "bayrakli", name: "Bayraklı" },
  { slug: "cigli", name: "Çiğli" }, { slug: "menderes", name: "Menderes" }, { slug: "menemen", name: "Menemen" },
  { slug: "torbali", name: "Torbalı" }, { slug: "urla", name: "Urla" }, { slug: "cesme", name: "Çeşme" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  return <header className="sticky top-0 z-50 border-b-4 border-amber-500 bg-slate-950 text-white">
    <div className="hidden border-b border-slate-800 bg-slate-900 md:block"><div className="container mx-auto flex justify-between px-4 py-2 text-xs text-slate-300"><span>İzmir Tüm Bölgeler • 7/24 Acil Yol Yardım</span><span>Konum gönderin, en yakın ekibi yönlendirelim.</span></div></div>
    <div className="container mx-auto flex items-center justify-between gap-5 px-4 py-4">
      <Link href="/" className="shrink-0 font-heading text-2xl font-black">İzmir <span className="text-amber-400">Çekici</span><span className="block text-[10px] tracking-[2px] text-slate-300">OTO KURTARMA • YOL YARDIM</span></Link>
      <nav className="relative hidden items-center gap-4 whitespace-nowrap text-[11px] font-extrabold xl:flex" aria-label="Ana navigasyon"><Link href="/">ANA SAYFA</Link>{services.map((service) => <div key={service.slug} className="group"><Link href={`/${service.slug}`} className="flex items-center gap-1 py-3 text-amber-300">{service.label.toLocaleUpperCase("tr-TR")}<ChevronDown className="h-3.5 w-3.5" /></Link><div className="absolute left-1/2 top-full z-[60] hidden w-[700px] max-w-[calc(100vw-2rem)] -translate-x-1/2 border-t-4 border-amber-500 bg-white p-6 text-slate-900 shadow-2xl group-hover:block"><p className="font-heading text-xl font-black">{service.label} Hizmet Bölgeleri</p><p className="mt-2 text-sm text-slate-600">Öne çıkan bölgelerden birini seçin veya tüm hizmet ağını inceleyin.</p><div className="mt-4 grid grid-cols-3 gap-x-5 gap-y-1">{featuredRegions.map((region) => <Link key={region.slug} href={`/${region.slug}-${service.slug}`} className="py-2 text-xs font-semibold hover:text-amber-700">{region.name} {service.label}</Link>)}</div><Link href={`/${service.slug}#bolgeler`} className="mt-5 inline-flex bg-slate-950 px-4 py-3 text-xs font-black text-white hover:bg-amber-500 hover:text-slate-950">Tüm {service.label} Bölgeleri</Link></div></div>)}<Link href="/hizmet-bolgeleri">TÜM BÖLGELER</Link><Link href="/iletisim">İLETİŞİM</Link></nav>
      <a href={`tel:${MAIN_PHONE_RAW}`} className="hidden shrink-0 bg-amber-500 px-4 py-3 text-sm font-bold text-slate-950 sm:flex"><Phone className="mr-2 h-4 w-4" />{MAIN_PHONE}</a><button type="button" className="grid h-11 w-11 place-items-center border border-slate-700 bg-slate-900 xl:hidden" onClick={() => setOpen(true)} aria-label="Menüyü aç" aria-expanded={open}><Menu className="h-6 w-6" /></button>
    </div>
    <div className={`fixed inset-0 z-[70] xl:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}><button type="button" onClick={close} aria-label="Menüyü kapat" className={`absolute inset-0 bg-slate-950/70 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`} /><nav aria-label="Mobil navigasyon" className={`absolute right-0 top-0 flex h-dvh w-[min(90vw,430px)] flex-col bg-slate-950 shadow-2xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}><div className="flex items-center justify-between border-b border-slate-800 px-6 py-5"><div><p className="font-heading text-xl font-black">İzmir <span className="text-amber-400">Çekici</span></p><p className="mt-1 text-[10px] font-bold tracking-[.16em] text-slate-400">7/24 YOL YARDIM</p></div><button type="button" onClick={close} aria-label="Menüyü kapat" className="grid h-10 w-10 place-items-center border border-slate-700"><X className="h-5 w-5" /></button></div><div className="flex-1 overflow-y-auto px-6 py-6"><Link href="/" onClick={close} className="block border-b border-slate-800 py-4 text-sm font-extrabold">ANA SAYFA</Link>{services.map((service) => <details key={service.slug} className="border-b border-slate-800"><summary className="flex cursor-pointer list-none items-center justify-between py-4 text-sm font-extrabold text-amber-300">{service.label.toLocaleUpperCase("tr-TR")}<ChevronDown className="h-4 w-4" /></summary><div className="grid gap-2 pb-4 pl-3 text-sm text-slate-300"><Link href={`/${service.slug}`} onClick={close} className="font-bold text-white">{service.label} ana sayfası</Link>{featuredRegions.map((region) => <Link key={region.slug} href={`/${region.slug}-${service.slug}`} onClick={close} className="py-1">{region.name} {service.label}</Link>)}<Link href={`/${service.slug}#bolgeler`} onClick={close} className="pt-2 font-bold text-amber-300">Tüm bölgeleri görüntüle</Link></div></details>)}<Link href="/hizmet-bolgeleri" onClick={close} className="block border-b border-slate-800 py-4 text-sm font-extrabold">TÜM BÖLGELER</Link><Link href="/iletisim" onClick={close} className="block border-b border-slate-800 py-4 text-sm font-extrabold">İLETİŞİM</Link></div><a href={`tel:${MAIN_PHONE_RAW}`} className="m-6 flex items-center justify-center gap-2 bg-amber-500 px-4 py-4 text-sm font-extrabold text-slate-950"><Phone className="h-4 w-4" />{MAIN_PHONE}</a></nav></div>
  </header>;
}
