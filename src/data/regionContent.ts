import profiles from "./regionProfiles.json";
import { REFERENCE_REGIONS } from "./referenceRegions";
import type { ServiceDefinition } from "./services";

export type RegionProfile = (typeof profiles)[number];
const bySlug = new Map(profiles.map((profile) => [profile.slug, profile]));
export function getRegionProfile(slug: string) { return bySlug.get(slug); }

export function getRegionOverview(profile: RegionProfile) {
  if (profile.note) return profile.note;
  if (profile.status === "ambiguous") {
    const examples = profile.districts.slice(0, 5).join(", ");
    const more = profile.districts.length > 5 ? ` ve başka ${profile.districts.length - 5} ilçe` : "";
    return `${profile.name} adı belediyenin mahalle kayıtlarında ${examples}${more} için geçiyor. Ekibin yanlış ilçeye yönlenmemesi için ilçe adını, mahalleyi ve konum bağlantısını birlikte paylaşın.`;
  }
  if (profile.kind === "district" && profile.places.length) return `${profile.name} içindeki ${profile.places.slice(0, 5).map((p) => p.neighborhood).join(", ")} belediye kayıtlarında yer alan mahallelerden bazılarıdır. İlçe merkezi ile farklı bir mahalleye erişim aynı olmayabilir; çağrıda mahalle ve cadde bilgisini belirtin.`;
  if (profile.places.length) return `${profile.name} için belediye kayıtlarında ${profile.districts.join(", ")} ilçe bilgisi yer alıyor. ${profile.places.map((p) => p.neighborhood).filter((v, i, all) => all.indexOf(v) === i).join(", ")} konumunu tarif ederken cadde veya sokak ve giriş bilgisini ekleyin.`;
  if (profile.kind === "route") return `${profile.name} talebinde yolun tabela üzerindeki adı veya numarası, gidiş yönü ve en yakın çıkış önemlidir. Şehir adı ya da genel güzergâh adı tek başına aracın yerini belirlemez. Otoyol, devlet yolu ve bağlantı yolundan hangisinde bulunduğunuzu belirtin.`;
  if (profile.kind === "industrial") return `${profile.name} için site adıyla birlikte ilçe, blok, işletme kapısı ve giriş yolu bilgisini paylaşın. Benzer isimli sanayi alanlarının karışmaması ve araca uygun erişimin planlanması için konum bağlantısı gerekir.`;
  return `${profile.name} adıyla yardım isterken ilçe, resmi mahalle adı ve konum bağlantısını birlikte paylaşın. Semt, site veya tesis adı ile resmi adres farklı olabilir; yalnızca yer adıyla ekip yönlendirmesi yapılmadan konum netleştirilir.`;
}

export function getRegionalServiceGuidance(profile: RegionProfile, service: ServiceDefinition) {
  const location = profile.places.length && profile.status !== "ambiguous"
    ? `${profile.places[0].district} / ${profile.places[0].neighborhood}` : profile.name;
  const access = profile.kind === "route"
    ? "Gidiş yönü, kilometre ve en yakın çıkışı iletin. Güvenli çalışma alanı bulunmuyorsa yerinde müdahale yerine güvenli noktaya taşıma değerlendirilir."
    : profile.kind === "industrial"
    ? "İşletme girişini, kapı yüksekliğini ve kabul saatini paylaşın. Yüklü araçta mevcut toplam ağırlık ve yükün niteliği ekipman seçimini etkiler."
    : profile.kind === "transfer"
    ? "Terminal veya otopark girişini, katı ve yükseklik sınırını bildirin. Güvenlik ya da giriş izni koşulları varsa görüşmede netleştirin."
    : "Aracın sokakta mı, bina önünde mi yoksa otoparkta mı olduğunu belirtin. Dar giriş, eğim veya yükseklik sınırı varsa önceden paylaşın.";
  const serviceNotes: Record<string, string> = {
    "cekici": "Tekerlekler kilitliyse veya vites boşa alınamıyorsa bunu çağrıda bildirin; standart platform yüklemesi dışında destek gerekebilir.",
    "aku-takviye": "Aracın parkta kalma süresini, marş sesini ve gösterge durumunu bildirin. Şarj sistemi arızası varsa yalnızca takviye kalıcı çözüm olmayabilir.",
    "oto-elektrik": "Marşın dönüp dönmediğini ve görünen uyarıyı paylaşın. Yerinde kontrol ile serviste parça değişimi gerektiren işlerin kapsamı farklıdır.",
    "agir-vasita-kurtarma": "Dorse, yük, toplam ağırlık ve zemini bildirin. Kurtarma alanının güvenliği ve uygun kapasite değerlendirilmeden çekme işlemi planlanmaz.",
    "agir-ticari-cekici": "Panelvan veya kamyonun mevcut yükünü, şasi uzunluğunu ve toplam ağırlığını belirtin. Teslim işletmesinin boşaltma alanı da planlanmalıdır.",
    "oto-kurtarma": "Aracın dengesi, hasar ve zemin durumu önemlidir. Konumu göstermek için tehlikeli alana girmeyin; güvenli yerden bilgi paylaşın.",
    "lastik-yol-yardim": "Stepne ve kilitli bijon anahtarının durumunu bildirin. Çalışma alanı uygun değilse lastik değişimi için daha güvenli bir konum gerekebilir.",
    "motorsiklet-cekici": "Motosiklet modelini, gidon kilidini ve tekerleklerin hareket durumunu belirtin. Gövde ve aksesuarlar yükleme yöntemini etkiler.",
  };
  return { location, access, serviceNote: serviceNotes[service.slug] };
}

export function getRegionalFaq(profile: RegionProfile, service: ServiceDefinition) {
  const guidance = getRegionalServiceGuidance(profile, service);
  return {
    q: `${profile.name} için ${service.title.toLocaleLowerCase("tr-TR")} çağrısında hangi konum ayrıntıları gerekir?`,
    a: `${profile.status === "ambiguous" ? "Bu ad birden fazla ilçede kullanıldığı için önce doğru ilçeyi ve mahalleyi belirtin. " : "İlçeyi, mahallenizi ve canlı konum bağlantısını paylaşın. "}${guidance.access} ${guidance.serviceNote}`,
  };
}

export function getDistrictLinks(profile: RegionProfile, serviceSlug: string) {
  return REFERENCE_REGIONS.filter((region) => profile.districts.includes(region.name) && region.slug !== profile.slug)
    .map((region) => ({ href: `/${region.slug}-${serviceSlug}`, name: region.name }));
}
