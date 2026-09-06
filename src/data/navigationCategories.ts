export interface QuickLinkItem {
  name: string;
  slug: string;
  href: string;
  badge?: string;
}

export const HIGHWAY_TUNNEL_LINKS: QuickLinkItem[] = [
  { name: "İzmir Çevre Yolu", slug: "izmir-cevre-yolu", href: "/izmir-cevre-yolu-cekici", badge: "7/24 Devriye" },
  { name: "İzmir - Aydın Otoyolu", slug: "izmir-aydin-otoyolu", href: "/izmir-aydin-otoyolu-cekici" },
  { name: "İzmir - Çeşme Otoyolu", slug: "izmir-cesme-otoyolu", href: "/izmir-cesme-otoyolu-cekici" },
  { name: "Sabuncubeli Tüneli & Yolu", slug: "sabuncubeli-tuneli", href: "/sabuncubeli-tuneli-cekici", badge: "Kritik Geçiş" },
  { name: "Belkahve Rampası & Tünelleri", slug: "belkahve-rampasi", href: "/belkahve-rampasi-cekici", badge: "Acil Hat" },
  { name: "Bayraklı Tünelleri", slug: "bayrakli-tunelleri", href: "/bayrakli-tunelleri-cekici" },
  { name: "Konak Tüneli", slug: "konak-tuneli", href: "/konak-tuneli-cekici" },
  { name: "Kuzey Çevre Yolu", slug: "kuzey-cevre-yolu", href: "/kuzey-cevre-yolu-cekici" },
  { name: "Güney Çevre Yolu", slug: "guney-cevre-yolu", href: "/guney-cevre-yolu-cekici" },
  { name: "Bornova Çevre Yolu", slug: "bornova-cevre-yolu", href: "/bornova-cevre-yolu-cekici" },
  { name: "Karşıyaka Çevre Yolu", slug: "karsiyaka-cevre-yolu", href: "/karsiyaka-cevre-yolu-cekici" },
  { name: "Altınyol Sahil Yolu", slug: "altinyol-sahil-yolu", href: "/altinyol-sahil-yolu-cekici" },
  { name: "İstanbul - İzmir Otoyolu", slug: "istanbul-otoyolu", href: "/istanbul-otoyolu-cekici" },
  { name: "Ankara Yolu & Otoyolu", slug: "ankara-yolu", href: "/ankara-yolu-cekici" },
  { name: "Bursa Yolu & Otoyolu", slug: "bursa-yolu", href: "/bursa-yolu-cekici" },
  { name: "Torbalı Otoyolu", slug: "torbali-otoyolu", href: "/torbali-otoyolu-cekici" },
  { name: "Liman & Otogar Otoyolu", slug: "liman-yolu", href: "/liman-yolu-cekici" },
];

export const INDUSTRIAL_SITES_LINKS: QuickLinkItem[] = [
  { name: "1. Sanayi Sitesi", slug: "1-sanayi", href: "/1-sanayi-cekici", badge: "Hızlı Çekici" },
  { name: "2. Sanayi Sitesi", slug: "2-sanayi", href: "/2-sanayi-cekici" },
  { name: "3. Sanayi Sitesi", slug: "3-sanayi", href: "/3-sanayi-cekici" },
  { name: "4. Sanayi Sitesi", slug: "4-sanayi", href: "/4-sanayi-cekici" },
  { name: "5. Sanayi Sitesi", slug: "5-sanayi", href: "/5-sanayi-cekici" },
  { name: "6. Sanayi Sitesi", slug: "6-sanayi", href: "/6-sanayi-cekici" },
  { name: "7. Sanayi Sitesi", slug: "7-sanayi", href: "/7-sanayi-cekici" },
  { name: "Kısıkköy Sanayi Sitesi", slug: "kisikkoy-sanayi-sitesi", href: "/kisikkoy-sanayi-sitesi-cekici", badge: "Mobilya Şehri" },
];

export const CESME_PENINSULA_LINKS: QuickLinkItem[] = [
  { name: "Alaçatı Çekici", slug: "alacati", href: "/alacati-cekici" },
  { name: "Ilıca Çekici", slug: "ilica", href: "/ilica-cekici" },
  { name: "Boyalık Çekici", slug: "boyalik", href: "/boyalik-cekici" },
  { name: "Altınkum Çekici", slug: "altinkum", href: "/altinkum-cekici" },
  { name: "Dalyan Çekici", slug: "dalyan", href: "/dalyan-cekici" },
  { name: "Ildır Çekici", slug: "ildir", href: "/ildir-cekici" },
  { name: "Şifne Çekici", slug: "sifne", href: "/sifne-cekici" },
  { name: "16 Eylül Çekici", slug: "16-eylul", href: "/16-eylul-cekici" },
  { name: "Ovacık Çekici", slug: "ovacik", href: "/ovacik-cekici" },
  { name: "Yelki Çekici", slug: "yelki", href: "/yelki-cekici" },
  { name: "Kahramandere Çekici", slug: "kahramandere", href: "/kahramandere-cekici" },
  { name: "Çamlı Çekici", slug: "camli", href: "/camli-cekici" },
];

export const TORBALI_REGION_LINKS: QuickLinkItem[] = [
  { name: "Torbalı Merkez Çekici", slug: "torbali", href: "/torbali-cekici" },
  { name: "Ayrancılar Çekici", slug: "torbali-ayrancilar", href: "/torbali-ayrancilar-cekici" },
  { name: "Pancar Çekici", slug: "torbali-pancar", href: "/torbali-pancar-cekici" },
  { name: "Yazıbaşı Çekici", slug: "torbali-yazibasi", href: "/torbali-yazibasi-cekici" },
  { name: "Çaybaşı Çekici", slug: "torbali-caybasi", href: "/torbali-caybasi-cekici" },
  { name: "Subaşı Çekici", slug: "torbali-subasi", href: "/torbali-subasi-cekici" },
  { name: "Çapak Çekici", slug: "torbali-capak", href: "/torbali-capak-cekici" },
  { name: "Karakızlar Çekici", slug: "torbali-karakizlar", href: "/torbali-karakizlar-cekici" },
  { name: "Ahmetli Çekici", slug: "torbali-ahmetli", href: "/torbali-ahmetli-cekici" },
  { name: "Kuşçuburun Çekici", slug: "torbali-kuscuburun", href: "/torbali-kuscuburun-cekici" },
];

export const SURROUNDING_DISTRICTS_LINKS: QuickLinkItem[] = [
  { name: "Menemen Çekici", slug: "menemen", href: "/menemen-cekici" },
  { name: "Bergama Çekici", slug: "bergama", href: "/bergama-cekici" },
  { name: "Ödemiş Çekici", slug: "odemis", href: "/odemis-cekici" },
  { name: "Tire Çekici", slug: "tire", href: "/tire-cekici" },
  { name: "Bayındır Çekici", slug: "bayindir", href: "/bayindir-cekici" },
  { name: "Selçuk Çekici", slug: "selcuk", href: "/selcuk-cekici" },
  { name: "Kınık Çekici", slug: "kinik", href: "/kinik-cekici" },
  { name: "Kiraz Çekici", slug: "kiraz", href: "/kiraz-cekici" },
  { name: "Nazilli Çekici", slug: "nazilli", href: "/nazilli-cekici" },
  { name: "Buca Gölet Çekici", slug: "buca-golet", href: "/buca-golet-cekici" },
  { name: "Belenbaşı Çekici", slug: "belenbasi", href: "/belenbasi-cekici" },
  { name: "Pınarbaşı Çekici", slug: "pinarbasi", href: "/pinarbasi-cekici" },
];
