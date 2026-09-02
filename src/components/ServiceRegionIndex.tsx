import Link from "next/link";
import { MapPinned } from "lucide-react";
import { REFERENCE_REGIONS } from "@/data/referenceRegions";

type Props = { serviceSlug: string; serviceTitle: string };

export default function ServiceRegionIndex({ serviceSlug, serviceTitle }: Props) {
  return <section id="bolgeler" className="scroll-mt-28 bg-slate-100 py-20"><div className="container mx-auto max-w-6xl px-4"><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-widest text-amber-600">İzmir hizmet ağı</p><h2 className="section-title mt-3">{serviceTitle} hizmet verdiğimiz tüm bölgeler</h2><p className="mt-5 leading-8 text-slate-600">Bölgenizi seçerek hizmet kapsamı, güvenli yönlendirme adımları ve iletişim seçeneklerine ulaşabilirsiniz.</p></div><div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{REFERENCE_REGIONS.map((region) => <Link key={region.slug} href={`/${region.slug}-${serviceSlug}`} className="flex items-center gap-3 border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-amber-400 hover:bg-amber-50"><MapPinned className="h-4 w-4 shrink-0 text-amber-600" />{region.name} {serviceTitle}</Link>)}</div></div></section>;
}
