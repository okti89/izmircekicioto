import { REFERENCE_REGIONS } from "./referenceRegions";

export const MAIN_PHONE = "0536 676 28 66";
export const MAIN_PHONE_RAW = "05366762866";
export const WHATSAPP_NUMBER = "905366762866";
export const COMPANY_NAME = "İzmir Çekici";

const serviceSlugs = ["oto-cekici", "aku-takviye", "oto-elektrik", "agir-vasita-kurtarma", "oto-kurtarma", "lastik-yol-yardim", "motorsiklet-cekici"];

export interface DistrictData {
  slug: string; name: string; district: string; estimatedTime: string; neighborhoods: string[];
  description: string; highlights: string[]; popularQueries: string[]; lat: number; lng: number;
}

export const IZMR_DISTRICTS: DistrictData[] = REFERENCE_REGIONS.map((region) => ({
  slug: `${region.slug}-oto-cekici`, name: `${region.name} Oto Çekici`, district: region.name,
  estimatedTime: "Konuma göre planlanır", neighborhoods: [], description: `${region.name} için oto çekici ve yol yardım desteği.`,
  highlights: [], popularQueries: [`${region.name} oto çekici`], lat: 38.4237, lng: 27.1428,
}));

export const FAQS_LIST = [
  { q: "Çekici talebi için hangi bilgiler gerekir?", a: "Konum, araç tipi, arıza veya hasar durumu ile teslim adresi; uygun ekipmanın yönlendirilmesini hızlandırır." },
  { q: "İzmir genelinde hizmet veriyor musunuz?", a: "İzmir merkez, ilçe ve ana güzergâhlarda oto çekici, yol yardım ve araç transferi için destek sağlanır." },
];

export function getAllStaticSlugs(): { slug: string }[] {
  const slugs = serviceSlugs.flatMap((service) => [{ slug: service }, ...REFERENCE_REGIONS.map((region) => ({ slug: `${region.slug}-${service}` }))]);
  return Array.from(new Map(slugs.map((item) => [item.slug, item])).values());
}
