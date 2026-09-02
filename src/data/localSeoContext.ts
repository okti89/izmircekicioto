type LocalContext = {
  label: string;
  heading: string;
  description: string;
  guidance: string[];
};

const coastalLocations = new Set([
  "alacati", "ahmetbeyli", "balikli-ova", "cesme", "gorece", "gulbahce",
  "gumuldur", "guzelbahce", "guzelyali", "ilica", "icmeler", "inciralti",
  "karaburun", "liman-reis", "ozdere", "sigacik", "urla", "urla-iskele", "urkmez",
]);

function contextType(slug: string, name: string) {
  if (slug.includes("otoban") || slug.includes("otoyolu") || slug.includes("beton-yol")) return "route";
  if (slug.includes("havalimani") || slug.includes("iskele") || slug.includes("teleferik")) return "transfer";
  if (name.includes("Mahallesi") || slug.includes("mahalle")) return "neighborhood";
  if (coastalLocations.has(slug)) return "coastal";
  return "local";
}

export function getLocalSeoContext(slug: string, name: string, serviceTitle: string): LocalContext {
  const type = contextType(slug, name);

  if (type === "route") {
    return {
      label: "Ana güzergâh hizmet rehberi",
      heading: `${name} çevresinde ${serviceTitle} talebinde güvenli ilk adımlar`,
      description: `${name} çevresinde araç güvenliği, görünürlük ve bulunduğunuz yön bilgisinin paylaşılması doğru yardım planını hızlandırır.`,
      guidance: ["Aracı mümkünse güvenli bir noktaya alın ve dörtlüleri yakın.", "Gidiş yönünü, en yakın kavşağı veya belirgin tabelayı iletin.", "Araç tipi ile arıza ya da hasar durumunu kısaca belirtin."],
    };
  }

  if (type === "transfer") {
    return {
      label: "Transfer noktası hizmet rehberi",
      heading: `${name} için ${serviceTitle} planlaması`,
      description: `${name} gibi yoğun giriş-çıkış noktalarında konumun açık paylaşılması, ekibin doğru buluşma alanına yönlendirilmesine yardımcı olur.`,
      guidance: ["Giriş, çıkış veya bekleme alanı bilgisini paylaşın.", "Araç plakası yerine araç tipi ve görünen arıza belirtisini iletin.", "Teslim edilecek adresi çağrı başında netleştirin."],
    };
  }

  if (type === "coastal") {
    return {
      label: "Kıyı ve tatil bölgesi hizmet rehberi",
      heading: `${name} bölgesinde ${serviceTitle} için doğru konum bilgisi`,
      description: `${name} çevresindeki taleplerde sokak, tesis girişi, sahil yolu veya yakın bilinen noktanın belirtilmesi daha kontrollü bir yönlendirme sağlar.`,
      guidance: ["Konum paylaşımına ek olarak en yakın bilinen noktayı yazın.", "Araç hareket etmiyorsa güvenli bekleme alanını belirtin.", "Talebin çekici, takviye, elektrik veya kurtarma ihtiyacı olduğunu açıkça seçin."],
    };
  }

  if (type === "neighborhood") {
    return {
      label: "Mahalle bazlı yol yardım rehberi",
      heading: `${name} içinde ${serviceTitle} talebi oluştururken`,
      description: `${name} içindeki dar sokaklar, apartman önü veya kapalı otopark gibi noktalar için araç tipi ve erişim bilgisinin paylaşılması uygun ekipman seçimini destekler.`,
      guidance: ["Sokak adı, bina numarası veya yakın işletme bilgisini paylaşın.", "Kapalı alan, eğim veya erişim kısıtı varsa önceden belirtin.", "Teslim adresini ve araç durumunu birlikte iletin."],
    };
  }

  return {
    label: "Bölgesel hizmet rehberi",
    heading: `${name} için ${serviceTitle} yönlendirmesi`,
    description: `${name} bölgesinde doğru hizmet planı; aracın tipi, bulunduğu konum, arıza veya hasar durumu ve teslim adresi birlikte değerlendirilerek oluşturulur.`,
    guidance: ["Konumunuzu WhatsApp üzerinden paylaşın.", "Araç tipi ile mevcut durumu kısaca aktarın.", "Servis, iş yeri veya tercih edilen teslim adresini belirtin."],
  };
}
