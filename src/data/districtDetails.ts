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
      "Gaziemir, İzmir’in güney kapısı ve Adnan Menderes Havalimanı ile sanayi merkezlerinin kesişim noktasıdır. Akçay Caddesi, Optimum AVM çevresi ve İzmir-Aydın otoyol bağlantısında meydana gelen araç arızaları veya kaza durumlarında kayar kasa çekicilerimizle 15-20 dakika içinde yanınızdayız.",
    faqs: [
      {
        q: "Gaziemir'de çekici ortalama ne kadar sürede gelir?",
        a: "Gaziemir merkez, Akçay Caddesi, Optimum AVM ve ESBAŞ bölgesinde hazır bekleyen nöbetçi ekiplerimizle çağrınızdan itibaren ortalama 15-20 dakika içerisinde konumunuza ulaşıyoruz.",
      },
      {
        q: "Adnan Menderes Havalimanı ve otoyolda çekici hizmetiniz var mı?",
        a: "Evet, Adnan Menderes Havalimanı otoparkları, iç-dış hatlar bağlantı yolları ve İzmir-Aydın Çevre Yolu Gaziemir kavşağında 7/24 kesintisiz çekici ve yol yardım sağlıyoruz.",
      },
      {
        q: "Gaziemir oto çekici fiyatları neye göre hesaplanır?",
        a: "Çekici ücreti; aracınızın bulunduğu nokta (örneğin Sarnıç Sanayi veya Havalimanı), taşınacağı servis/adres mesafesi ve araç tipine (binek, SUV, minibüs) göre şeffaf bir şekilde telefonda belirlenir.",
      },
      {
        q: "Sarnıç Sanayi Sitesi ve kapalı otoparklardan araç çekimi yapıyor musunuz?",
        a: "Evet, alçak tavanlı kapalı otoparklar ve sanayi içi dar sokaklar için tekerlek kilidi açma ve özel aparatlı kurtarma araçlarımızla güvenle transfer yapıyoruz.",
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
      "Bornova, İzmir-İstanbul ve İzmir-Ankara otoyol çıkışlarının merkezinde yer alır. Ankara Asfaltı, sanayi siteleri ve üniversite kampüs bölgesinde yaşanan arızalarda acil nöbetçi çekicilerimiz hızla konumunuza yönlendirilir.",
    faqs: [
      {
        q: "Bornova oto çekici ne kadar sürede ulaşır?",
        a: "Ankara Caddesi, Özkanlar ve Çiçekliköy-Manisa yolu güzergahında bekleyen araçlarımızla ortalama 15-25 dakika içinde yanınızdayız.",
      },
      {
        q: "Işıkkent ve Pınarbaşı sanayi bölgesinde ağır vasıta çekici var mı?",
        a: "Evet, Işıkkent ve Pınarbaşı sanayi alanlarında minibüs, kamyonet ve ticari araçlar için özel aparatlı çekicilerimiz mevcuttur.",
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
      "Buca'nın kalabalık caddeleri, Şirinyer ve otoyol bağlantı noktalarında yaşanan debriyaj, akü veya motor arızalarında dar sokaklara uygun donanımlı kayar kasa araçlarımızla 7/24 hizmet veriyoruz.",
    faqs: [
      {
        q: "Buca dar sokaklarında araç çekimi mümkün mü?",
        a: "Evet, Buca’nın tarihi ve dar sokaklarına girebilen kompakt çekicilerimizle aracınıza zarar vermeden yükleme yapıyoruz.",
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
      "Karşıyaka sahil boyu, Girne Caddesi ve Anadolu Caddesi üzerinde güvenli oto kurtarma ve çekici çözümleri sağlıyoruz. Bostanlı, Mavişehir ve Alaybey bölgelerinde aralıksız nöbetçi kurtarıcı ekibimiz bulunmaktadır.",
    faqs: [
      {
        q: "Karşıyaka sahil yolunda araç çekici çağırma süresi nedir?",
        a: "Sahil şeridi ve Girne Bulvarı hattında bulunan araçlarımız ortalama 15-20 dakikada yanınızda olur.",
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
      "İzmir kent merkezinde Yeşildere, Alsancak Liman yolu ve sahil bulvarındaki arızalarda trafiği aksatmadan hızlı müdahale eden çekici filomuzla hizmetinizdeyiz.",
    faqs: [
      {
        q: "Yeşildere ve Konak Tüneli çıkışında arıza durumunda ne yapmalıyım?",
        a: "Aracınızı güvenli emniyet şeridine çekip dörtlülerinizi yakın. Bize konum attığınızda nöbetçi acil çekici ekibimiz süratle yönlendirilir.",
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
      "Çiğli Atatürk Organize Sanayi (İAOSB), Ata Sanayi ve Anadolu Caddesi boyunca binek ve ticari araçlar için 7/24 kayar kasa ve vinçli kurtarma hizmeti sağlıyoruz.",
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
        a: "Altınyol güzergahında hazır bekleyen ekibimiz yoğun saatlerde dahi en kısa sürede ulaşır.",
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
        a: "Evet, Çeşme'den Bornova 3. Sanayi, Gaziemir veya yetkili servislere şehirlerarası standartta güvenli taşıma sağlıyoruz.",
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
        a: "Evet, Urla'nın tüm köyleri ve sahil bölgelerine tam donanımlı araçlarımız ulaşmaktadır.",
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
      "Karabağlar Yeşillik Caddesi, mobilyacılar sitesi ve sanayi bölgesinde yoğun araç trafiğinde yaşanan arıza ve kazalarda kayar kasa çekicilerimiz dakikalar içinde yardıma hazır.",
    faqs: [
      {
        q: "Yeşillik Caddesi ve sanayi bölgesinde çekici ne kadar sürede gelir?",
        a: "Bölgedeki hazır ekiplerimizle ortalama 15-20 dakika içinde yanınızdayız.",
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
        a: "Evet, otoyol giriş-çıkışları ve İnciraltı sahil hattında 7/24 kesintisiz hizmet veriyoruz.",
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
      "Narlıdere merkez ve Sahilevleri güzergahında arızalanan binek ve lüks araçlar için hasarsız yükleme garantili kayar kasa çekicilerimizle hizmetinizdeyiz.",
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
      "Güzelbahçe sahil yolu ve Yelki-Seferihisar bağlantısında güvenli çekici ve araç taşıma hizmeti sağlıyoruz.",
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
      "Menemen Çanakkale Asfaltı, Ulukent ve Seyrek çevresinde arıza veya kaza yapan otomobil, kamyonet ve ticari araçlar için 7/24 nöbetçi çekici hizmeti.",
    faqs: [
      {
        q: "Çanakkale Asfaltı Menemen kesiminde çekici bekleme süresi nedir?",
        a: "Ana arter üzerinde bekleyen ekiplerimizle ortalama 15-20 dakikada yanınızdayız.",
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
        a: "Evet, Ayrancılar ve organize sanayi bölgesindeki araçlar için günün her saati hazır çekicilerimiz mevcuttur.",
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
        a: "Evet, sanayi alanlarında kamyon, tır ve binek araçlar için özel aparatlı kurtarıcılarımız mevcuttur.",
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
        a: "Evet, Seferihisar'ın tüm turizm noktaları ve sahil sitelerine kesintisiz ulaşıyoruz.",
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
        a: "Evet, Menderes sahil şeridinde tatilciler ve yerel halk için sürekli nöbetçi araçlarımız bulunmaktadır.",
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
        a: "Evet, sanayi tesisleri ve tır parkları için ağır vasıta kurtarma araçlarımız yönlendirilir.",
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
      "Üçyol Meydanı, İnönü Caddesi ve Betonyol hattında yaşanan arıza veya kaza durumlarında dar sokaklara ve yoğun trafiğe uygun kompakt kayar kasa çekicilerimizle ortalama 10-15 dakikada yanınızdayız.",
    faqs: [
      {
        q: "Üçyol çekici ne kadar sürede gelir?",
        a: "Üçyol Meydanı ve İnönü Caddesi çevresinde hazır nöbetçi çekicimizle çağrınızdan itibaren ortalama 10-15 dakika içinde konumunuza ulaşıyoruz.",
      },
      {
        q: "Üçyol çekici fiyatları nasıl belirlenir?",
        a: "Üçyol çekici ücreti; aracınızın bulunduğu nokta ve taşınacağı tamirhane veya yetkili servis mesafesine göre telefonda şeffaf olarak belirtilir.",
      },
      {
        q: "Betonyol ve dar sokaklarda araç çekimi yapılıyor mu?",
        a: "Evet, Üçyol'un dik yokuşlu ve dar sokaklarına girebilen manevra kabiliyeti yüksek hidrolik çekicilerimizle hasarsız yükleme yapıyoruz.",
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
        q: "Kısık çekici kaç dakikada gelir?",
        a: "İzmir-Aydın yolu ve Kısıkköy sanayi çevresinde hazır bekleyen ekiplerimizle ortalama 15-20 dakika içinde yanınızdayız.",
      },
      {
        q: "Kısıkköy Mobilya Şehri ve sanayi sitelerine çekici yönlendiriliyor mu?",
        a: "Evet, Kısıkköy sanayi içerisindeki tüm dükkanlar ve otoyol güzergahına 7/24 nöbetçi çekici yönlendiriyoruz.",
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
      "Kısıkköy sanayi siteleri, mobilya çarşısı ve İzmir-Aydın yolu üzerinde ticari ve binek araçlar için acil oto kurtarma ve çekici desteği sağlıyoruz.",
    faqs: [
      {
        q: "Kısıkköy çekici çağırmak için ne yapmalıyım?",
        a: "0536 676 28 66 numaramızı arayarak veya WhatsApp'tan konumunuzu paylaşarak en yakın Kısıkköy çekici ekibimizi çağırabilirsiniz.",
      },
    ],
  },
};

export function getDistrictDetail(key: string): LocalAreaDetail | undefined {
  return DISTRICT_DETAILS[key.toLowerCase()];
}

