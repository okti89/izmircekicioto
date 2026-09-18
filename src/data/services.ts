export type ServiceFaq = { q: string; a: string };
export type ServiceDefinition = {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  intro: string;
  scope: string[];
  guidance: string;
  limit: string;
  scenario: { title: string; body: string };
  faqs: ServiceFaq[];
};

// Shared by routes, navigation and page content. Slugs are permanent public URLs.
export const SERVICES: ServiceDefinition[] = [
  {
    slug: "cekici", title: "Çekici", image: "/izmir-cekici-hero.png", imageAlt: "Kayar kasa oto çekici hizmetini temsil eden görsel",
    intro: "Arıza nedeniyle yürümeyen veya servise götürülmesi gereken otomobil, SUV ve hafif ticari araçlar için oto çekici ve araç transferi planlanır.",
    scope: ["Araç modeline ve ağırlığına uygun taşıma", "Tekerlek, direksiyon ve vites durumunun kontrolü", "Yükleme erişimi ve teslim adresinin planlanması"],
    guidance: "Otomatik vites, dört çeker sistem, düşük yerden yükseklik veya kilitli tekerlek varsa çağrıda belirtin. Taşıma yöntemi aracın üretici talimatlarına göre değerlendirilir; her araç aynı yöntemle çekilmez.",
    limit: "Kapalı otopark yüksekliği, dar sokak veya eğimli zemin yüklemeyi etkileyebilir. Ekipman ve erişim uygunluğu araç alınmadan önce netleştirilir.",
    scenario: { title: "Servise gidemeyen otomatik vitesli araç", body: "Araç çalışmıyor ve vites konumu değişmiyorsa bu bilgi ilk görüşmede iletilir. Tekerleklerin hareket durumu ve bulunduğu alan değerlendirilerek yükleme yöntemi seçilir; teslim alınacak servis ve kabul saati taşıma öncesinde belirlenir." },
    faqs: [
      { q: "Otomatik vitesli araç nasıl taşınır?", a: "Aktarma sistemi ve üretici taşıma talimatları kontrol edilir. Tekerlekleri zeminde sürüklemek her araç için uygun değildir; araç modeline göre platform taşıma veya yardımcı yükleme ekipmanı değerlendirilir." },
      { q: "Araç kapalı otoparktan alınabilir mi?", a: "Giriş yüksekliği, rampa eğimi, kat bilgisi ve aracın hareket durumu gerekir. Bu bilgilerle erişim değerlendirilir; her otoparka aynı çekici giremez." },
      { q: "Teslim edilecek servisi ben seçebilir miyim?", a: "Talep ettiğiniz servis veya adresi görüşmede paylaşabilirsiniz. Mesafe, güzergâh, kabul saati ve boşaltma alanı birlikte planlanır." },
    ],
  },
  {
    slug: "aku-takviye", title: "Akü Takviye", image: "/aku-takviye-izmir.png", imageAlt: "Akü desteği hizmetini temsil eden görsel",
    intro: "Akü zayıflığı şüphesinde araç modeli ve marş belirtileri değerlendirilir. Uygun koşullarda yerinde takviye desteği, sorun devam ederse elektrik kontrolü veya servis transferi planlanır.",
    scope: ["Marş sesi ve gösterge belirtilerinin değerlendirilmesi", "Araç sistemine uygun takviye yönteminin seçimi", "Tekrarlayan akü sorununda oto elektrik yönlendirmesi"],
    guidance: "Gösterge ışıklarının sönmesi, marşın yavaş dönmesi veya yalnızca tık sesi gelmesi gibi belirtileri aktarın. Akünün yaşı ve aracın ne kadar süredir kullanılmadığı da değerlendirmeye yardımcı olur; bu belirtiler tek başına kesin teşhis değildir.",
    limit: "Takviye, arızalı aküyü veya şarj sistemini onarmaz. Aküde şişme, sızıntı, yoğun koku ya da hasar varsa müdahale etmeyin ve ekibe bildirin. Hibrit ve elektrikli araçlarda üretici talimatları esas alınır.",
    scenario: { title: "Otoparkta marş almayan araç", body: "Uzun süre park etmiş araçta marş yavaş dönüyorsa konum, otopark erişimi ve araç modeli paylaşılır. Akü desteğine uygunluk kontrol edildikten sonra müdahale planlanır. Araç yeniden çalışsa da aynı belirti tekrarlıyorsa akü ve şarj sistemi kontrolü gerekir." },
    faqs: [
      { q: "Takviye sonrasında tekrar çalışmazsa ne olur?", a: "Sorun akü dışında marş veya şarj sisteminden kaynaklanabilir. Tekrarlayan denemeler yerine oto elektrik kontrolü, gerektiğinde servis transferi değerlendirilir." },
      { q: "Her çalışmama sorunu aküden mi kaynaklanır?", a: "Hayır. Marş motoru, bağlantılar, immobilizer veya başka sistemler benzer belirtiler verebilir. Gösterge uyarıları ve marş sesi ilk değerlendirmede önemlidir." },
      { q: "Hibrit veya elektrikli araç için takviye istenebilir mi?", a: "Marka, model ve kullanım kılavuzu bilgisi gerekir. Düşük voltajlı yardımcı akü ile yüksek voltajlı çekiş bataryası farklıdır; yüksek voltaj bileşenlerine yol kenarında müdahale edilmez." },
    ],
  },
  {
    slug: "oto-elektrik", title: "Oto Elektrik", image: "/aku-takviye-izmir.png", imageAlt: "Araç elektrik ve akü desteğini temsil eden görsel",
    intro: "Marş basmama, şarj uyarısı ve elektrik kesintisi gibi durumlarda belirtiler değerlendirilerek mobil kontrol veya servis yönlendirmesi yapılır.",
    scope: ["Marş ve şarj belirtilerine göre ön değerlendirme", "Araç modeli ve gösterge uyarılarının incelenmesi", "Yerinde müdahale sınırlarının ve servis ihtiyacının belirlenmesi"],
    guidance: "Hangi uyarı lambasının yandığını, motorun çalışıp çalışmadığını ve sorunun ne zaman başladığını bildirin. Sonradan takılan bir cihaz veya yakın zamanda yapılan akü değişimi varsa ekibe aktarın.",
    limit: "Her elektrik arızası yol kenarında giderilemez. Kapsamlı tesisat, elektronik kontrol ünitesi ve parça değişimi gerektiren işler için servis koşulları gerekebilir. Yanık kokusu veya duman varsa aracı tekrar çalıştırmayın.",
    scenario: { title: "Sürüş sırasında şarj uyarısı", body: "Şarj lambası yanıyorsa bunu yalnızca akü bitmesi olarak değerlendirmeyin. Güvenli konum ve gösterge bilgisi paylaşıldıktan sonra kontrol ihtiyacı belirlenir. Araç güvenle kullanılamıyorsa servise taşıma seçeneği konuşulur." },
    faqs: [
      { q: "Marş motoru arızası yerinde onarılır mı?", a: "Araç modeli, erişim, arıza ve parça ihtiyacına bağlıdır. Yerinde kontrol mümkün olsa da her onarım mobil koşullarda tamamlanamaz; servis ihtiyacı değerlendirme sonrası açıklanır." },
      { q: "Akü lambası yanarken yola devam edebilir miyim?", a: "Bu uyarı şarj sistemindeki bir soruna işaret edebilir. Güvenli şekilde durarak yardım talep edin; yalnızca akü takviyesiyle sorunun giderildiği varsayılmamalıdır." },
      { q: "Arıza kodunu paylaşmam faydalı olur mu?", a: "Evet. Gösterge fotoğrafı, biliniyorsa arıza kodu ve araç modeli ön değerlendirmeye yardımcı olur. Kesin teşhis için araç üzerinde kontrol gerekebilir." },
    ],
  },
  {
    slug: "agir-vasita-kurtarma", title: "Ağır Vasıta Kurtarma", image: "/agir-vasita-izmir.png", imageAlt: "Ağır araç kurtarma hizmetini temsil eden görsel",
    intro: "Tır, kamyon ve otobüsün arıza veya kaza sonrası alınmasında araç ağırlığı, yük ve yol koşulları birlikte değerlendirilerek ağır kurtarma planı oluşturulur.",
    scope: ["Araç ve yük ağırlığına göre ekipman değerlendirmesi", "Dingil, fren ve bağlantı durumunun aktarılması", "Yol güvenliği ve kurtarma alanının planlanması"],
    guidance: "Araç türünü, yaklaşık toplam ağırlığı, dorse bağlantısını, yükün niteliğini ve devrilme olup olmadığını bildirin. Yolun yönü ve kilometre bilgisi, büyük ekipmanın doğru noktaya ulaşması için özellikle önemlidir.",
    limit: "Tehlikeli yük, yakıt sızıntısı, yaralanma veya yolu kapatan kaza varsa önce 112 ve ilgili yol işletmecisine bilgi verin. Kurtarma kapasitesi ve saha uygunluğu değerlendirilmeden araç çekilmez.",
    scenario: { title: "Yüklü kamyonun hareket edememesi", body: "Yük ağırlığı ve dingil durumu bilinmeden standart çekici sevk edilmesi uygun değildir. Sürücü araç ve yük bilgilerini iletir; yol erişimi, gerekli ekipman ve teslim noktası birlikte değerlendirilir. Yük aktarma ihtiyacı varsa ayrıca planlanır." },
    faqs: [
      { q: "Yüklü tır için hangi bilgiler gerekir?", a: "Çekici ve dorse türü, toplam ağırlık, yükün niteliği, fren durumu ve yol konumu gerekir. Uygun kapasite bu bilgiler ve saha değerlendirmesiyle belirlenir." },
      { q: "Devrilen araç doğrudan çekilebilir mi?", a: "Devrilme durumunda zemin, yük dengesi ve çevre güvenliği incelenir. Önce kaldırma ve kurtarma planı yapılır; normal taşıma işlemiyle aynı şekilde ele alınmaz." },
      { q: "Otobüs için de kurtarma talebi alınır mı?", a: "Otobüsün ölçüleri, ağırlığı, arıza durumu ve bulunduğu konuma göre değerlendirme yapılır. Yolcu güvenliği ve araç tahliyesi ayrıca ele alınmalıdır." },
    ],
  },
  {
    slug: "agir-ticari-cekici", title: "Ağır Ticari Çekici", image: "/agir-vasita-izmir.png", imageAlt: "Ticari araç taşıma hizmetini temsil eden görsel",
    intro: "Kamyonet, panelvan, minibüs ve ticari araçların transferinde toplam ağırlık, ölçüler ve yük durumu esas alınarak uygun taşıma seçeneği belirlenir.",
    scope: ["Araç uzunluğu ve yüksekliğine göre erişim kontrolü", "Boş veya yüklü ağırlığa uygun taşıma planı", "İşletme, depo veya servis tesliminin koordine edilmesi"],
    guidance: "Aracın boş ağırlığı yerine mevcut yükle toplam ağırlığını belirtin. Uzun şasi, çift teker, soğutuculu kasa veya özel üstyapı bulunuyorsa çağrıda söyleyin; taşıma uygunluğunu bu ayrıntılar belirler.",
    limit: "Araç sınıfı tek başına yeterli değildir. Ekipmanın taşıma kapasitesi, yükün sabitliği ve boşaltma alanı kontrol edilir. Yük transferi gerektiğinde taşıma planından ayrı değerlendirilir.",
    scenario: { title: "Teslimat sırasında arızalanan panelvan", body: "Araçta yük olup olmadığı, yaklaşık ağırlığı ve teslim edileceği servis paylaşılır. Şasi uzunluğu ve tekerlek durumu uygun taşıma aracını belirler. Servisin çalışma saati ve aracın boşaltılacağı alan önceden netleştirilir." },
    faqs: [
      { q: "Uzun şasi panelvan taşınabilir mi?", a: "Araç uzunluğu, toplam ağırlığı ve yüksekliği paylaşılmalıdır. Uygun platform ve yükleme koşulları belirlendikten sonra taşıma planlanabilir." },
      { q: "Araçtaki yükü boşaltmak gerekir mi?", a: "Toplam ağırlık, yük dengesi ve ekipman kapasitesine göre karar verilir. Her yüklü araç mevcut yüküyle taşınamaz; gerekirse yük aktarma ayrıca planlanır." },
      { q: "Ticari araç hangi adrese teslim edilir?", a: "Talep edilen servis, işletme veya depoya uygunluk değerlendirilerek teslim planlanır. Giriş yüksekliği, kabul saati ve boşaltma alanını bildirin." },
    ],
  },
  {
    slug: "oto-kurtarma", title: "Oto Kurtarma", image: "/izmir-cekici-hero.png", imageAlt: "Oto kurtarma ve araç taşıma hizmetini temsil eden görsel",
    intro: "Kaza, yol dışına çıkma veya hareketi engelleyen konumlarda aracın güvenli şekilde alınabilmesi için zemin, hasar ve erişim koşulları değerlendirilir.",
    scope: ["Araç konumu ve zemine göre kurtarma değerlendirmesi", "Hasarlı tekerlek ve yükleme engellerinin belirlenmesi", "Kurtarma sonrasında servis transferinin planlanması"],
    guidance: "Araç şarampolda, yumuşak zeminde veya bariyere yakınsa konumun yanında güvenli mesafeden çekilmiş bir fotoğraf yardımcı olur. Fotoğraf almak için trafiğe ya da dengesiz aracın yanına yaklaşmayın.",
    limit: "Yaralanma, yangın veya tehlikeli sızıntı varsa önce 112'yi arayın. Yol güvenliği sağlanmadan ve aracın dengesi değerlendirilmeden kurtarma işlemine başlanmamalıdır.",
    scenario: { title: "Yol kenarında tekerleği hasarlı araç", body: "Sürücü hasarı ve bulunduğu noktayı bildirir. Araç doğrudan platforma yürütülemiyorsa uygun yükleme desteği değerlendirilir. Kurtarma tamamlandıktan sonra seçilen servise transfer ayrı bir adım olarak planlanır." },
    faqs: [
      { q: "Oto kurtarma ile çekici arasındaki fark nedir?", a: "Çekici taşıma hizmetidir; kurtarma ise aracın bulunduğu zor veya hasarlı konumdan alınmasını kapsar. Aynı talepte önce kurtarma, ardından taşıma gerekebilir." },
      { q: "Fotoğraf göndermek gerekir mi?", a: "Güvenli bir yerden gönderilebiliyorsa araç konumu, hasar ve zemini gösteren fotoğraf ekipman değerlendirmesine yardımcı olur. Fotoğraf çekmek için risk almayın." },
      { q: "Kazadan hemen sonra kimi aramalıyım?", a: "Yaralanma veya acil tehlike varsa önce 112'yi arayın. Olay yeri güvenliği ve gerekli resmi işlemlerden sonra aracın alınması koordine edilir." },
    ],
  },
  {
    slug: "lastik-yol-yardim", title: "Lastik ve Yol Yardım", image: "/izmir-cekici-hero.png", imageAlt: "Yol yardım hizmetini temsil eden görsel",
    intro: "Lastik sorunu nedeniyle yolda kaldığınızda güvenli çalışma alanı, uygun stepne ve araç donanımı değerlendirilir; yerinde destek veya lastik servisine transfer planlanır.",
    scope: ["Stepne ve kilitli bijon anahtarı bilgisinin alınması", "Zemin ve trafik açısından çalışma alanının kontrolü", "Yerinde değişim uygun değilse servis transferi"],
    guidance: "Patlayan lastiğin konumunu, stepnenin mevcut ve kullanılabilir olup olmadığını, kilitli bijon anahtarını ve araç modelini bildirin. Lastik ölçüsü biliniyorsa bunu da paylaşın.",
    limit: "Trafiğe açık dar bir alanda veya eğimli, yumuşak zeminde lastik değişimi güvenli olmayabilir. Her lastik onarılamaz; yanak hasarı ve diğer hasarlar lastik uzmanı tarafından değerlendirilmelidir.",
    scenario: { title: "Stepnesi olmayan araçta lastik hasarı", body: "Stepne yoksa yalnızca lastik değişimi için ekip yönlendirmek sorunu çözmeyebilir. Araç konumu ve lastiğin durumu paylaşılır; uygun lastik desteği veya servise taşıma ihtiyacı belirlenir." },
    faqs: [
      { q: "Stepne yoksa ne yapılır?", a: "Lastik ölçüsü, hasar ve konuma göre destek seçenekleri değerlendirilir. Yerinde çözüm uygun değilse lastik servisine transfer planlanır." },
      { q: "Kilitli bijon anahtarı gerekli mi?", a: "Araçta kilitli bijon varsa uygun anahtarın bulunması önemlidir. Anahtar yoksa bunu önceden söyleyin; zorlayarak sökme denemesi hasara neden olabilir." },
      { q: "Otoyolda lastik değişimi yapılabilir mi?", a: "Önce yol güvenliği ve çalışma alanı değerlendirilir. Güvenli alan sağlanamıyorsa araç daha uygun bir noktaya veya servise taşınmalıdır." },
    ],
  },
  {
    slug: "motorsiklet-cekici", title: "Motosiklet Çekici", image: "/motosiklet-cekici-izmir.jpg", imageAlt: "Motosiklet taşıma hizmeti görseli",
    intro: "Scooter ve motosikletlerin arıza veya hasar sonrası taşınmasında model, ağırlık ve tekerlek durumu değerlendirilerek uygun yükleme ve sabitleme planı yapılır.",
    scope: ["Motosiklet modeline uygun yükleme değerlendirmesi", "Tekerlek ve gidon hareket durumunun kontrolü", "Üreticiye uygun sabitleme noktalarının seçimi"],
    guidance: "Modeli, yaklaşık ağırlığı, gidon kilidini ve lastiklerin dönebilme durumunu bildirin. Alçak gövde, büyük çanta, ek aksesuar veya kaza hasarı varsa bunlar yükleme planını etkiler.",
    limit: "Her motosiklet aynı bağlantı noktalarından sabitlenmez. Grenaj, gidon ve aksesuarlar değerlendirilerek uygun yöntem seçilir. Yakıt sızıntısı veya dengesiz hasar varsa ekibe önceden bilgi verin.",
    scenario: { title: "Ön tekerleği hareket etmeyen scooter", body: "Scooter çalışsa bile kilitli veya hasarlı tekerlek yüklemeyi engelleyebilir. Model ve tekerlek durumu aktarılır; ek yükleme desteği ve uygun sabitleme yöntemi değerlendirilir. Teslim edilecek motosiklet servisi önceden belirlenir." },
    faqs: [
      { q: "Motosiklet nasıl sabitlenir?", a: "Model ve üretici talimatları dikkate alınarak uygun destek ve bağlantı noktaları seçilir. Taşıma öncesinde denge, bağlama ve aksesuarların durumu kontrol edilir." },
      { q: "Gidon kilitliyse taşıma yapılabilir mi?", a: "Kilit durumu ve tekerleklerin hareketi yükleme yöntemini etkiler. Anahtarın mevcut olup olmadığını ilk görüşmede belirtin; uygun ekipman değerlendirilir." },
      { q: "Hasarlı motosiklet servise götürülebilir mi?", a: "Hasarın konumu, sızıntı ve hareket durumu incelenerek taşıma uygunluğu belirlenir. Güvenli mesafeden çekilmiş fotoğraf değerlendirmeye yardımcı olabilir." },
    ],
  },
];
