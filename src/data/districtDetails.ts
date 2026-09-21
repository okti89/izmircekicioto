export interface LocalAreaDetail {
  slug: string;
  name: string;
  titleName: string;
  lat: number;
  lng: number;
  estimatedTime: string;
  popularArteries: string[];
  neighborhoods: string[];
  localOverview: string;
  faqs: { q: string; a: string }[];
}

export const DISTRICT_DETAILS: Record<string, LocalAreaDetail> = {
  gaziemir: {
    slug: "gaziemir",
    name: "Gaziemir",
    titleName: "Gaziemir",
    lat: 38.3229,
    lng: 27.1333,
    estimatedTime: "15 - 20 Dakika",
    popularArteries: [
      "Akçay Caddesi",
      "Optimum AVM Çevresi",
      "ESBAŞ (Ege Serbest Bölgesi)",
      "İzmir-Aydın Otoyolu Gaziemir Bağlantısı",
      "Adnan Menderes Havalimanı Güzergâhı",
      "Sarnıç Yolu ve Sanayi Bölgesi",
      "Hava Teknik Okulları Çevresi",
    ],
    neighborhoods: [
      "Aktepe",
      "Aydın",
      "Beyazevler",
      "Dokuz Eylül",
      "Emrez",
      "Fatih",
      "Gazi",
      "Gazikent",
      "Hürriyet",
      "Irmak",
      "Menderes",
      "Sevgi",
      "Yeşiltepe",
      "Zafer",
      "Sarnıç (Cumhuriyet, Hürriyet, Fatih)",
    ],
    localOverview:
      "Gaziemir, Adnan Menderes Havalimanı ile sanayi alanlarının bağlantı güzergâhındadır. Akçay Caddesi ve İzmir-Aydın otoyol bağlantısındaki taleplerde yol yönü, araç durumu ve güvenli bekleme noktası birlikte değerlendirilir.",
    faqs: [
      {
        q: "Gaziemir'de çekici ortalama ne kadar sürede gelir?",
        a: "Tahmini süre; ekibin mevcut konumu, trafik, yol erişimi ve gereken ekipman öğrenildikten sonra paylaşılır.",
      },
      {
        q: "Adnan Menderes Havalimanı ve otoyolda çekici hizmetiniz var mı?",
        a: "Havalimanı veya otoyol bağlantısındaki taleplerde otopark girişi, yol yönü ve güvenli bekleme noktası paylaşılmalıdır. Hizmet uygunluğu bu bilgilerle görüşmede netleştirilir.",
      },
      {
        q: "Gaziemir çekici talebinde hangi bilgiler gerekir?",
        a: "Sarnıç Sanayi veya havalimanı gibi başlangıç noktası, teslim adresi, araç tipi ve erişim koşulları görüşmede paylaşılmalıdır.",
      },
      {
        q: "Sarnıç Sanayi Sitesi ve kapalı otoparklardan araç çekimi yapıyor musunuz?",
        a: "Kapalı otoparkın tavan yüksekliği, rampa ve araç çıkış koşulları paylaşılmalıdır. Uygun ekipman ve işlem yöntemi bu bilgilerden sonra değerlendirilir.",
      },
    ],
  },
  bornova: {
    slug: "bornova",
    name: "Bornova",
    titleName: "Bornova",
    lat: 38.4682,
    lng: 27.2184,
    estimatedTime: "15 - 25 Dakika",
    popularArteries: [
      "Ankara Caddesi",
      "İzmir Çevre Yolu Bornova Bağlantısı",
      "Manisa Yolu (Süvari Caddesi)",
      "Ege Üniversitesi ve Çevresi",
      "Küçükpark & Büyükpark",
      "Işıkkent Ayakkabıcılar Sitesi",
      "Pınarbaşı Sanayi Bölgesi",
    ],
    neighborhoods: [
      "Kazımdirik",
      "Erzene",
      "Özkanlar",
      "Yeşilova",
      "Çamdibi",
      "Işıkkent",
      "Pınarbaşı",
      "Doğanlar",
      "Mevlana",
      "Evka 3",
      "Evka 4",
    ],
    localOverview:
      "Bornova, İzmir-İstanbul ve İzmir-Ankara yol bağlantıları üzerindedir. Ankara Caddesi, sanayi siteleri ve kampüs çevresindeki taleplerde yol yönü ile güvenli bekleme noktası önemlidir.",
    faqs: [
      {
        q: "Bornova oto çekici ne kadar sürede ulaşır?",
        a: "Ankara Caddesi, Özkanlar ve Çiçekliköy-Manisa yolu taleplerinde tahmini süre trafik, erişim ve ekipman durumuna göre görüşmede belirlenir.",
      },
      {
        q: "Işıkkent ve Pınarbaşı sanayi bölgesinde ağır vasıta çekici var mı?",
        a: "Işıkkent ve Pınarbaşı sanayi taleplerinde aracın tipi, ölçüsü, yükü ve tesis girişi paylaşılır; ekipman uygunluğu görüşmede değerlendirilir.",
      },
    ],
  },
  buca: {
    slug: "buca",
    name: "Buca",
    titleName: "Buca",
    lat: 38.3888,
    lng: 27.1764,
    estimatedTime: "15 - 20 Dakika",
    popularArteries: [
      "Menderes Caddesi",
      "Buca Koop ve Otoyol Çıkışı",
      "Şirinyer Forbes Caddesi",
      "Tınaztepe Kampüs Yolu",
      "Doğuş Caddesi",
      "Kaynaklar Bağlantı Yolu",
    ],
    neighborhoods: [
      "Şirinyer",
      "Buca Koop",
      "Çamlıkule",
      "Yıldız",
      "Kozağaç",
      "Efeler",
      "Kuruçeşme",
      "Gediz",
      "Kaynaklar",
    ],
    localOverview:
      "Buca'nın kalabalık caddeleri, Şirinyer ve otoyol bağlantılarındaki taleplerde dar sokak, eğim ve aracın hareket durumu hizmet planında dikkate alınır.",
    faqs: [
      {
        q: "Buca dar sokaklarında araç çekimi mümkün mü?",
        a: "Dar sokakta yol genişliği, park durumu ve aracın yürür bilgisi paylaşılır; erişim ile uygun yükleme yöntemi görüşmede netleştirilir.",
      },
    ],
  },
  karsiyaka: {
    slug: "karsiyaka",
    name: "Karşıyaka",
    titleName: "Karşıyaka",
    lat: 38.4559,
    lng: 27.1106,
    estimatedTime: "15 - 20 Dakika",
    popularArteries: [
      "Cemal Gürsel Sahil Bulvarı",
      "Girne Bulvarı",
      "Anadolu Caddesi Karşıyaka Etabı",
      "Bostanlı İskele Çevresi",
      "Örnekköy Yolu",
      "Mavişehir Kavşağı",
    ],
    neighborhoods: [
      "Bostanlı",
      "Mavişehir",
      "Alaybey",
      "Bahçelievler",
      "Aksoy",
      "Donanmacı",
      "Tuna",
      "Şemikler",
      "Yalı",
      "Nergiz",
    ],
    localOverview:
      "Karşıyaka sahil boyu, Girne Caddesi ve Anadolu Caddesi taleplerinde trafik, yol yönü ve aracın bulunduğu şerit bilgisi değerlendirilir. Bostanlı, Mavişehir ve Alaybey için tam konum istenir.",
    faqs: [
      {
        q: "Karşıyaka sahil yolunda araç çekici çağırma süresi nedir?",
        a: "Sahil şeridi ve Girne Bulvarı için konum, trafik ve uygun ekipman değerlendirildikten sonra tahmini süre paylaşılır.",
      },
    ],
  },
  konak: {
    slug: "konak",
    name: "Konak",
    titleName: "Konak",
    lat: 38.4192,
    lng: 27.1287,
    estimatedTime: "15 - 20 Dakika",
    popularArteries: [
      "Mustafa Kemal Sahil Bulvarı",
      "Yeşildere Caddesi",
      "Mithatpaşa Caddesi",
      "Alsancak Gar ve Liman Çevresi",
      "Basmane ve Çankaya Hattı",
      "Göztepe Sahil",
    ],
    neighborhoods: [
      "Alsancak",
      "Göztepe",
      "Küçükyalı",
      "Basmane",
      "Çankaya",
      "Hatay",
      "Güzelyalı",
      "Kahramanlar",
      "Eşrefpaşa",
    ],
    localOverview:
      "İzmir kent merkezinde Yeşildere, Alsancak Liman yolu ve sahil bulvarındaki taleplerde yol yönü, aracın konumu ve trafiği etkileyen koşullar birlikte değerlendirilir.",
    faqs: [
      {
        q: "Yeşildere ve Konak Tüneli çıkışında arıza durumunda ne yapmalıyım?",
        a: "Mümkünse güvenli bekleme alanına geçip dörtlüleri yakın. Yol yönü ve konum paylaşıldıktan sonra uygun hizmet ile tahmini süre görüşmede değerlendirilir.",
      },
    ],
  },
  cigli: {
    slug: "cigli",
    name: "Çiğli",
    titleName: "Çiğli",
    lat: 38.4975,
    lng: 27.0583,
    estimatedTime: "15 - 20 Dakika",
    popularArteries: [
      "Anadolu Caddesi",
      "İzmir Atatürk Organize Sanayi Bölgesi (İAOSB)",
      "Ata Sanayi",
      "Çiğli Bölge Hastanesi Çevresi",
      "Sasalı Bağlantı Yolu",
    ],
    neighborhoods: [
      "Ataşehir",
      "Balatçık",
      "Evka 5",
      "İzkent",
      "Sasalı",
      "Egekent",
      "Harmandalı",
      "Köyiçi",
    ],
    localOverview:
      "Çiğli Atatürk Organize Sanayi, Ata Sanayi ve Anadolu Caddesi taleplerinde binek veya ticari aracın ölçüsü, yükü ve tesis girişi birlikte değerlendirilir.",
    faqs: [
      {
        q: "İAOSB veya Ata Sanayi içine çekici yönlendiriliyor mu?",
        a: "Evet, sanayi sitelerindeki dükkanlar veya fabrikalara arızalı araç teslimatı için sürekli bölgedeyiz.",
      },
    ],
  },
  bayrakli: {
    slug: "bayrakli",
    name: "Bayraklı",
    titleName: "Bayraklı",
    lat: 38.4622,
    lng: 27.1644,
    estimatedTime: "15 - 20 Dakika",
    popularArteries: [
      "Altınyol",
      "Ankara Asfaltı Bayraklı Kavşağı",
      "Manas Bulvarı",
      "Adliye ve Şehir Hastanesi Çevresi",
      "Cengizhan Caddesi",
    ],
    neighborhoods: [
      "Manavkuyu",
      "Mansuroğlu",
      "Adalet",
      "Osmangazi",
      "Soğukkuyu",
      "Postacılar",
      "Yamanlar",
      "Cengizhan",
    ],
    localOverview:
      "Bayraklı yeni kent merkezi, Şehir Hastanesi yolları, Manas Bulvarı ve Altınyol üzerinde arızalanan veya kazaya karışan araçlar için acil oto çekici desteği veriyoruz.",
    faqs: [
      {
        q: "Altınyol ve Adliye bölgesinde çekici bekleme süresi nedir?",
        a: "Altınyol güzergâhında tahmini süre, trafik yoğunluğu, yol yönü ve uygun ekipman belirlendikten sonra paylaşılır.",
      },
    ],
  },
  cesme: {
    slug: "cesme",
    name: "Çeşme",
    titleName: "Çeşme",
    lat: 38.3236,
    lng: 26.3045,
    estimatedTime: "15 - 25 Dakika",
    popularArteries: [
      "İzmir-Çeşme Otoyolu",
      "Alaçatı Girişi",
      "Ilıca Plaj Yolu",
      "Dalyan Yolu",
      "Çiftlikköy Hattı",
    ],
    neighborhoods: [
      "Alaçatı",
      "Ilıca",
      "Dalyan",
      "Çiftlik",
      "Ovacık",
      "Reisdere",
      "Germiyan",
    ],
    localOverview:
      "Çeşme Otoyolu, Alaçatı ve Ilıca bölgelerinde tatil veya seyahat esnasında yolda kalan araçlar için güvenilir çekici ve İzmir sanayilerine transfer desteği sunuyoruz.",
    faqs: [
      {
        q: "Çeşme'den İzmir merkez sanayilerine araç çekimi yapıyor musunuz?",
        a: "Çeşme çıkış noktası, teslim edilecek servis ve aracın durumu paylaşıldığında güzergâh ile ekipman uygunluğu değerlendirilir.",
      },
    ],
  },
  urla: {
    slug: "urla",
    name: "Urla",
    titleName: "Urla",
    lat: 38.3231,
    lng: 26.7642,
    estimatedTime: "15 - 25 Dakika",
    popularArteries: [
      "Çeşme Otoyolu Urla Çıkışı",
      "Urla İskele Yolu",
      "Zeytinalanı Hattı",
      "İçmeler Sahil Yolu",
      "Kuşçular - Demircili Yolu",
    ],
    neighborhoods: [
      "İskele",
      "Zeytinalanı",
      "Kalabak",
      "Kuşçular",
      "Torasan",
      "Gülbahçe",
      "Çamlıçay",
    ],
    localOverview:
      "Urla merkez, İskele, Kalabak ve Gülbahçe hattında tatilciler ve yerel sakinler için 7/24 kayar kasa oto kurtarıcı hizmeti veriyoruz.",
    faqs: [
      {
        q: "Urla İskele ve sahil köylerine çekici geliyor mu?",
        a: "Urla kırsalı veya sahil bölgesinde mahalle, yol durumu ve canlı konum paylaşılmalıdır; erişim uygunluğu görüşmede değerlendirilir.",
      },
    ],
  },
  karabaglar: {
    slug: "karabaglar",
    name: "Karabağlar",
    titleName: "Karabağlar",
    lat: 38.3734,
    lng: 27.1264,
    estimatedTime: "15 - 20 Dakika",
    popularArteries: [
      "Yeşillik Caddesi",
      "Halide Edip Adıvar Bulvarı",
      "İnönü Caddesi Karabağlar Hattı",
      "Karabağlar Sanayi Sitesi",
      "Uzundere Kavşağı",
    ],
    neighborhoods: [
      "Bozyaka",
      "Yeşilyurt",
      "Uzundere",
      "Poligon",
      "Basın Sitesi",
      "Eskiizmir",
      "Limontepe",
      "Cennetçeşme",
    ],
    localOverview:
      "Karabağlar Yeşillik Caddesi, mobilyacılar sitesi ve sanayi bölgesindeki taleplerde yoğun trafik, tesis girişi ve aracın yürür durumu hizmet planına dâhil edilir.",
    faqs: [
      {
        q: "Yeşillik Caddesi ve sanayi bölgesinde çekici ne kadar sürede gelir?",
        a: "Tahmini süre, konum ve trafik ile ihtiyaç duyulan ekipman değerlendirildikten sonra görüşmede paylaşılır.",
      },
    ],
  },
  balcova: {
    slug: "balcova",
    name: "Balçova",
    titleName: "Balçova",
    lat: 38.3892,
    lng: 27.0543,
    estimatedTime: "15 - 20 Dakika",
    popularArteries: [
      "Mithatpaşa Caddesi Balçova Etabı",
      "Ata Caddesi",
      "İnciraltı Caddesi",
      "Çeşme Otoyolu Balçova Girişi",
    ],
    neighborhoods: ["Teleferik", "İnciraltı", "Bahçelerarası", "Korutürk", "Eğitim", "Çetin Emeç"],
    localOverview:
      "Balçova AVM’ler bölgesi, İnciraltı sahili ve otoban bağlantısında yolda kalan sürücüler için 7/24 hızlı yol yardım desteği sunuyoruz.",
    faqs: [
      {
        q: "Balçova otoyol çıkışı ve İnciraltı'na çekici hizmeti var mı?",
        a: "Otoyol giriş-çıkışı veya İnciraltı sahil hattında yol yönünü ve güvenli bekleme noktasını paylaşın; hizmet kapsamı görüşmede netleştirilir.",
      },
    ],
  },
  narlidere: {
    slug: "narlidere",
    name: "Narlıdere",
    titleName: "Narlıdere",
    lat: 38.3968,
    lng: 27.0125,
    estimatedTime: "15 - 20 Dakika",
    popularArteries: ["Mithatpaşa Caddesi Narlıdere Hattı", "Sahilevleri Yolu", "Otoyol Narlıdere Gişeleri"],
    neighborhoods: ["Sahilevleri", "Ilıca", "Huzur", "Limanreis", "Çatalkaya", "Yenikale"],
    localOverview:
      "Narlıdere merkez ve Sahilevleri güzergâhındaki binek araç taleplerinde aracın yerden yüksekliği, yürür durumu ve yükleme alanı önceden değerlendirilir.",
    faqs: [
      {
        q: "Sahilevleri ve sahil şeridine çekici yönlendiriliyor mu?",
        a: "Evet, Narlıdere'nin tüm mahalle ve sahil yollarına acil çekici yönlendiriyoruz.",
      },
    ],
  },
  guzelbahce: {
    slug: "guzelbahce",
    name: "Güzelbahçe",
    titleName: "Güzelbahçe",
    lat: 38.3712,
    lng: 26.8924,
    estimatedTime: "15 - 25 Dakika",
    popularArteries: ["Mithatpaşa Caddesi Güzelbahçe Etabı", "Çeşme Otoyolu Güzelbahçe Çıkışı", "Seferihisar Yolu"],
    neighborhoods: ["Yalı", "Siteler", "Maltepe", "Kahramandere", "Yelki", "Çamlı"],
    localOverview:
      "Güzelbahçe sahil yolu ve Yelki-Seferihisar bağlantısındaki taleplerde yön, yakın kavşak ve aracın hareket durumu paylaşılmalıdır.",
    faqs: [
      {
        q: "Yelki ve Çamlı köylerine çekici geliyor mu?",
        a: "Evet, Güzelbahçe'nin kırsal ve tepe mahallelerine de tam donanımlı kurtarıcılarımız ulaşır.",
      },
    ],
  },
  menemen: {
    slug: "menemen",
    name: "Menemen",
    titleName: "Menemen",
    lat: 38.6083,
    lng: 27.0694,
    estimatedTime: "15 - 25 Dakika",
    popularArteries: ["Çanakkale Asfaltı (İzmir-Çanakkale Yolu)", "Menemen Çevre Yolu", "Ulukent Bağlantısı", "Menemen Sanayi Yolu"],
    neighborhoods: ["Ulukent", "Koyundere", "Seyrek", "Asarlık", "Kasımpaşa", "İsmet İnönü"],
    localOverview:
      "Menemen Çanakkale Asfaltı, Ulukent ve Seyrek çevresindeki taleplerde otomobil, kamyonet veya ticari aracın tipi ile yol yönü birlikte değerlendirilir.",
    faqs: [
      {
        q: "Çanakkale Asfaltı Menemen kesiminde çekici bekleme süresi nedir?",
        a: "Ana arterdeki konum, trafik ve gereken ekipman netleştirildikten sonra tahmini süre görüşmede paylaşılır.",
      },
    ],
  },
  torbali: {
    slug: "torbali",
    name: "Torbalı",
    titleName: "Torbalı",
    lat: 38.1517,
    lng: 27.3617,
    estimatedTime: "15 - 25 Dakika",
    popularArteries: ["İzmir-Aydın Asfaltı", "Torbalı Otoyol Çıkışı", "Ayrancılar Hattı", "Pancar OSB Yolu"],
    neighborhoods: ["Ayrancılar", "Çaybaşı", "Muratbey", "Tepeköy", "Torbalı Merkez", "Pancar"],
    localOverview:
      "Torbalı fabrikalar bölgesi, Ayrancılar ve İzmir-Aydın karayolu üzerinde her türlü binek ve ticari araç için profesyonel oto kurtarma hizmeti veriyoruz.",
    faqs: [
      {
        q: "Ayrancılar ve Pancar OSB sanayi bölgesine çekici yönlendirilir mi?",
        a: "Ayrancılar ve organize sanayi alanında tesis girişi, araç türü ve yük durumu paylaşılır; uygunluk görüşmede değerlendirilir.",
      },
    ],
  },
  kemalpasa: {
    slug: "kemalpasa",
    name: "Kemalpaşa",
    titleName: "Kemalpaşa",
    lat: 38.4283,
    lng: 27.4183,
    estimatedTime: "15 - 25 Dakika",
    popularArteries: ["İzmir-İstanbul Otoyolu Kemalpaşa Etabı", "Kemalpaşa OSB (KOSBİ) Yolu", "Ankara Asfaltı Bağlantısı"],
    neighborhoods: ["Ulucak", "Ören", "Bağyurdu", "Armutlu", "Yukarı Kızılca", "Sekiz Eylül"],
    localOverview:
      "Kemalpaşa Organize Sanayi (KOSBİ), Ulucak ve İzmir-İstanbul otoyolunda arızalanan otomobil, tır ve ağır vasıtalar için donanımlı kurtarma desteği.",
    faqs: [
      {
        q: "Kemalpaşa OSB sanayi alanında ağır vasıta çekici var mı?",
        a: "Sanayi alanında araç sınıfı, toplam ağırlık, yük ve çalışma alanı bilgileri alınarak gereken ekipman değerlendirilir.",
      },
    ],
  },
  seferihisar: {
    slug: "seferihisar",
    name: "Seferihisar",
    titleName: "Seferihisar",
    lat: 38.1975,
    lng: 26.8389,
    estimatedTime: "15 - 25 Dakika",
    popularArteries: ["İzmir-Seferihisar Yolu", "Sığacık Yolu", "Kuşadası-Seferihisar Sahil Yolu"],
    neighborhoods: ["Sığacık", "Ürkmez", "Doğanbey", "Tepecik", "Hıdırlık", "Camikebir"],
    localOverview:
      "Sığacık Marina, Ürkmez sahili ve Seferihisar merkezinde yolda kalan sürücüler için 7/24 kayar kasa oto çekici desteği.",
    faqs: [
      {
        q: "Sığacık ve Ürkmez sahil beldelerine çekici geliyor mu?",
        a: "Seferihisar kıyı veya site taleplerinde mahalle, site girişi ve canlı konum paylaşılır; erişim uygunluğu ayrıca değerlendirilir.",
      },
    ],
  },
  menderes: {
    slug: "menderes",
    name: "Menderes",
    titleName: "Menderes",
    lat: 38.2522,
    lng: 27.1342,
    estimatedTime: "15 - 25 Dakika",
    popularArteries: ["İzmir-Gümüldür Yolu", "Havalimanı Çevre Yolu", "Özdere Sahil Yolu", "Tekeli Sanayi Hattı"],
    neighborhoods: ["Gümüldür", "Özdere", "Tekeli", "Görece", "Oğlananası", "Kasımpaşa"],
    localOverview:
      "Menderes tarım alanları, Gümüldür-Özdere tatil rotası ve Tekeli sanayisinde 7/24 profesyonel çekici ve yol yardım hizmeti.",
    faqs: [
      {
        q: "Özdere ve Gümüldür sahillerinde çekici hizmeti var mı?",
        a: "Menderes sahil şeridinde mahalle, yol ve site girişi bilgilerini paylaşın; hizmet uygunluğu ve tahmini süre görüşmede belirlenir.",
      },
    ],
  },
  aliaga: {
    slug: "aliaga",
    name: "Aliağa",
    titleName: "Aliağa",
    lat: 38.7986,
    lng: 26.9725,
    estimatedTime: "15 - 25 Dakika",
    popularArteries: ["Çanakkale Asfaltı Aliağa Etabı", "Tüpraş - Petkim Rafineri Yolu", "Yeni Şakran Hattı", "Aliağa Liman Yolu"],
    neighborhoods: ["Yeni Şakran", "Siteler", "Kurtuluş", "Kazım Dirik", "Helvacı", "Bozköy"],
    localOverview:
      "Aliağa sanayi ve liman tesisleri, Petkim-Tüpraş güzergahı ve Çanakkale Asfaltı üzerinde her tonajda araç için 7/24 güvenli çekici desteği.",
    faqs: [
      {
        q: "Aliağa sanayi ve liman bölgesine ağır vasıta çekici sağlanıyor mu?",
        a: "Sanayi tesisi veya tır parkında araç tonajı, yük, dorse ve çalışma alanı bilgileriyle ağır vasıta ekipmanı değerlendirilir.",
      },
    ],
  },
  ucyol: {
    slug: "ucyol",
    name: "Üçyol",
    titleName: "Üçyol",
    lat: 38.4025,
    lng: 27.1186,
    estimatedTime: "10 - 15 Dakika",
    popularArteries: [
      "İnönü Caddesi",
      "Betonyol (Halil Rıfat Paşa Caddesi)",
      "Üçyol Metro Kavşağı",
      "Yeşilyurt Bağlantısı",
      "Eskiizmir Caddesi",
      "Hatay Caddesi",
    ],
    neighborhoods: ["Bahçelievler", "Basın Sitesi", "Murat Reis", "Kılıç Reis", "Poligon", "Göztepe"],
    localOverview:
      "Üçyol Meydanı, İnönü Caddesi ve Betonyol hattındaki taleplerde dar sokak, eğim, trafik ve aracın yükleme alanına erişimi birlikte değerlendirilir.",
    faqs: [
      {
        q: "Üçyol çekici ne kadar sürede gelir?",
        a: "Üçyol Meydanı ve İnönü Caddesi çevresinde tahmini süre, çağrı anındaki trafik ve ekipman uygunluğuna göre paylaşılır.",
      },
      {
        q: "Üçyol çekici talebinde hangi bilgiler gerekir?",
        a: "Aracın bulunduğu sokak, yol eğimi, araç durumu ve teslim edilecek tamirhane veya servis bilgisi paylaşılmalıdır.",
      },
      {
        q: "Betonyol ve dar sokaklarda araç çekimi yapılıyor mu?",
        a: "Üçyol'daki dik veya dar sokaklarda yol genişliği, eğim ve aracın konumu paylaşılır; yükleme imkânı bu bilgilere göre değerlendirilir.",
      },
    ],
  },
  kisik: {
    slug: "kisik",
    name: "Kısık",
    titleName: "Kısık",
    lat: 38.2912,
    lng: 27.1583,
    estimatedTime: "15 - 20 Dakika",
    popularArteries: [
      "İzmir-Aydın Asfaltı Kısık Mevkii",
      "Kısıkköy Sanayi Sitesi İçi",
      "Menderes Bağlantı Kavşağı",
      "Görece Yolu",
    ],
    neighborhoods: ["Kısıkköy Sanayi", "Görece", "Oğlananası", "Menderes Girişi"],
    localOverview:
      "Kısık ve Kısıkköy sanayi bölgesi ile İzmir-Aydın karayolu üzerinde arızalanan binek otomobil, kamyonet ve ticari araçlar için 7/24 hızlı kayar kasa kurtarıcı hizmeti sunuyoruz.",
    faqs: [
      {
        q: "Kısık çekici için tahmini süre nasıl belirlenir?",
        a: "İzmir-Aydın yolu ve Kısıkköy sanayi çevresinde trafik, tesis girişi ve uygun ekipman değerlendirilerek tahmini süre görüşmede paylaşılır.",
      },
      {
        q: "Kısıkköy Mobilya Şehri ve sanayi sitelerine çekici yönlendiriliyor mu?",
        a: "Kısıkköy sanayi içinde işletme adı, kapı veya sokak bilgisi; otoyolda ise yön ve çıkış bilgisi paylaşılmalıdır. Hizmet uygunluğu görüşmede netleştirilir.",
      },
    ],
  },
  kisikkoy: {
    slug: "kisikkoy",
    name: "Kısıkköy",
    titleName: "Kısıkköy",
    lat: 38.2912,
    lng: 27.1583,
    estimatedTime: "15 - 20 Dakika",
    popularArteries: [
      "Kısıkköy Metal İşleri Sanayi Sitesi",
      "Kısıkköy Mobilya Şehri",
      "İzmir-Aydın Karayolu Kısıkköy Kavşağı",
    ],
    neighborhoods: ["Kısıkköy Sanayi", "Menderes Sanayi", "Görece", "Tekeli"],
    localOverview:
      "Kısıkköy sanayi siteleri, mobilya çarşısı ve İzmir-Aydın yolu taleplerinde ticari veya binek aracın tipi, tesis girişi ve yol yönü paylaşılmalıdır.",
    faqs: [
      {
        q: "Kısıkköy çekici çağırmak için ne yapmalıyım?",
        a: "0536 676 28 66 numaramızı arayarak veya WhatsApp'tan konum, araç ve tesis girişi bilgilerini paylaşarak hizmet talebi oluşturabilirsiniz.",
      },
    ],
  },
};

export function getDistrictDetail(key: string): LocalAreaDetail | undefined {
  return DISTRICT_DETAILS[key.toLowerCase()];
}
