import Link from "next/link";
import { MapPin, Navigation } from "lucide-react";
import { getDistrictLinks, getRegionalServiceGuidance, getRegionOverview, type RegionProfile } from "@/data/regionContent";
import type { ServiceDefinition } from "@/data/services";

export default function RegionalServiceGuide({ profile, service, showOverview = false }: { profile: RegionProfile; service: ServiceDefinition; showOverview?: boolean }) {
  const guidance = getRegionalServiceGuidance(profile, service);
  const districtLinks = getDistrictLinks(profile, service.slug);
  return <section className="border-y border-slate-200 bg-amber-50/50 py-16">
    <div className="container mx-auto max-w-6xl px-4">
      <p className="text-sm font-bold text-amber-700">Yerel konum ve hizmet planı</p>
      <h2 className="section-title mt-3">{profile.name} {service.title}: konum ve erişim</h2>
      {showOverview && <p className="mt-5 max-w-4xl leading-8 text-slate-700">{getRegionOverview(profile)}</p>}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="border border-slate-200 bg-white p-7">
          <Navigation className="h-7 w-7 text-amber-600" />
          <h3 className="mt-4 font-heading text-xl font-black">Araca erişim nasıl planlanır?</h3>
          <p className="mt-4 leading-7 text-slate-600">{guidance.access}</p>
          <p className="mt-4 leading-7 text-slate-600">{guidance.serviceNote}</p>
        </article>
        <article className="border border-slate-200 bg-white p-7">
          <MapPin className="h-7 w-7 text-amber-600" />
          <h3 className="mt-4 font-heading text-xl font-black">{profile.status === "ambiguous" ? "İlçeyi netleştirin" : "Çağrı sırasında paylaşın"}</h3>
          <p className="mt-4 leading-7 text-slate-600">{guidance.location} için konum bağlantısına araç modeli, mevcut sorun ve güvenli bekleme noktası bilgisini ekleyin. Bir tesisteyseniz aracın ana girişe göre yerini belirtin.</p>
          {districtLinks.length > 0 && <ul className="mt-5 flex flex-wrap gap-3">{districtLinks.map((link) => <li key={link.href}><Link prefetch={false} href={link.href} className="font-bold text-amber-700 underline">{link.name} {service.title}</Link></li>)}</ul>}
        </article>
      </div>
      {profile.places.length > 0 && <div className="mt-10">
        <h3 className="font-heading text-xl font-black">Konum tarifinde kullanılabilecek yerel kayıtlar</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">Aşağıdaki ilçe, mahalle ve yol adları kamuya açık yerel kayıtlardan alınmıştır. Bunlar işletmemizin şubesi veya ekibimizin bekleme adresi değildir. Bulunduğunuz gerçek konumu ayrıca paylaşın.</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{profile.places.map((place, index) => <li key={`${place.district}-${place.neighborhood}-${index}`} className="border border-amber-200 bg-white p-4 text-sm">
          <span className="block font-bold">{place.district} / {place.neighborhood}</span>
          {place.referenceStreet && <span className="mt-2 block text-slate-600">Yerel adres kaydındaki yol adı: {place.referenceStreet}</span>}
        </li>)}</ul>
      </div>}
      {profile.sources.length > 0 && <div className="mt-7 text-xs leading-6 text-slate-500">
        <p>Yer bilgisi kaynakları:</p>
        <ul className="flex flex-wrap gap-x-5">{profile.sources.map((source, index) => <li key={source}><a href={source} className="underline">{source.includes("acikveri") ? "İzmir Büyükşehir Belediyesi Açık Veri — Muhtarlıklar" : `Resmî yerel bilgi kaynağı ${index + 1}`}</a></li>)}</ul>
      </div>}
    </div>
  </section>;
}
