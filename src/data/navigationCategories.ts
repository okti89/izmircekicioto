export interface QuickLinkItem {
  name: string;
  slug: string;
  href: string;
  badge?: string;
}

export const HIGHWAY_TUNNEL_LINKS: QuickLinkItem[] = [
  { name: "İzmir Çevre Yolu", slug: "izmir-cevre-yolu", href: "/izmir-cevre-yolu-oto-cekici", badge: "7/24 Devriye" },
  { name: "İzmir - Aydın Otoyolu", slug: "izmir-aydin-otoyolu", href: "/izmir-aydin-otoyolu-oto-cekici" },
  { name: "İzmir - Çeşme Otoyolu", slug: "izmir-cesme-otoyolu", href: "/izmir-cesme-otoyolu-oto-cekici" },
  { name: "Sabuncubeli Tüneli & Yolu", slug: "sabuncubeli-tuneli", href: "/sabuncubeli-tuneli-oto-cekici", badge: "Kritik Geçiş" },
  { name: "Belkahve Rampası & Tünelleri", slug: "belkahve-rampasi", href: "/belkahve-rampasi-oto-cekici", badge: "Acil Hat" },
  { name: "Bayraklı Tünelleri", slug: "bayrakli-tunelleri", href: "/bayrakli-tunelleri-oto-cekici" },
  { name: "Konak Tüneli", slug: "konak-tuneli", href: "/konak-tuneli-oto-cekici" },
  { name: "Kuzey Çevre Yolu", slug: "kuzey-cevre-yolu", href: "/kuzey-cevre-yolu-oto-cekici" },
  { name: "Güney Çevre Yolu", slug: "guney-cevre-yolu", href: "/guney-cevre-yolu-oto-cekici" },
  { name: "Bornova Çevre Yolu", slug: "bornova-cevre-yolu", href: "/bornova-cevre-yolu-oto-cekici" },
  { name: "Karşıyaka Çevre Yolu", slug: "karsiyaka-cevre-yolu", href: "/karsiyaka-cevre-yolu-oto-cekici" },
  { name: "Altınyol Sahil Yolu", slug: "altinyol-sahil-yolu", href: "/altinyol-sahil-yolu-oto-cekici" },
  { name: "İstanbul - İzmir Otoyolu", slug: "istanbul-otoyolu", href: "/istanbul-otoyolu-oto-cekici" },
  { name: "Ankara Yolu & Otoyolu", slug: "ankara-yolu", href: "/ankara-yolu-oto-cekici" },
  { name: "Bursa Yolu & Otoyolu", slug: "bursa-yolu", href: "/bursa-yolu-oto-cekici" },
  { name: "Torbalı Otoyolu", slug: "torbali-otoyolu", href: "/torbali-otoyolu-oto-cekici" },
  { name: "Liman & Otogar Otoyolu", slug: "liman-yolu", href: "/liman-yolu-oto-cekici" },
];

export const INDUSTRIAL_SITES_LINKS: QuickLinkItem[] = [
  { name: "1. Sanayi Sitesi", slug: "1-sanayi", href: "/1-sanayi-oto-cekici", badge: "Hızlı Çekici" },
  { name: "2. Sanayi Sitesi", slug: "2-sanayi", href: "/2-sanayi-oto-cekici" },
  { name: "3. Sanayi Sitesi", slug: "3-sanayi", href: "/3-sanayi-oto-cekici" },
  { name: "4. Sanayi Sitesi", slug: "4-sanayi", href: "/4-sanayi-oto-cekici" },
  { name: "5. Sanayi Sitesi", slug: "5-sanayi", href: "/5-sanayi-oto-cekici" },
  { name: "6. Sanayi Sitesi", slug: "6-sanayi", href: "/6-sanayi-oto-cekici" },
  { name: "7. Sanayi Sitesi", slug: "7-sanayi", href: "/7-sanayi-oto-cekici" },
  { name: "Kısıkköy Sanayi Sitesi", slug: "kisikkoy-sanayi-sitesi", href: "/kisikkoy-sanayi-sitesi-oto-cekici", badge: "Mobilya Şehri" },
];

export const CESME_PENINSULA_LINKS: QuickLinkItem[] = [
  { name: "Alaçatı Çekici", slug: "alacati", href: "/alacati-oto-cekici" },
  { name: "Ilıca Çekici", slug: "ilica", href: "/ilica-oto-cekici" },
  { name: "Boyalık Çekici", slug: "boyalik", href: "/boyalik-oto-cekici" },
  { name: "Altınkum Çekici", slug: "altinkum", href: "/altinkum-oto-cekici" },
  { name: "Dalyan Çekici", slug: "dalyan", href: "/dalyan-oto-cekici" },
  { name: "Ildır Çekici", slug: "ildir", href: "/ildir-oto-cekici" },
  { name: "Şifne Çekici", slug: "sifne", href: "/sifne-oto-cekici" },
  { name: "16 Eylül Çekici", slug: "16-eylul", href: "/16-eylul-oto-cekici" },
  { name: "Ovacık Çekici", slug: "ovacik", href: "/ovacik-oto-cekici" },
  { name: "Yelki Çekici", slug: "yelki", href: "/yelki-oto-cekici" },
  { name: "Kahramandere Çekici", slug: "kahramandere", href: "/kahramandere-oto-cekici" },
  { name: "Çamlı Çekici", slug: "camli", href: "/camli-oto-cekici" },
];

export const TORBALI_REGION_LINKS: QuickLinkItem[] = [
  { name: "Torbalı Merkez Çekici", slug: "torbali", href: "/torbali-oto-cekici" },
  { name: "Ayrancılar Çekici", slug: "torbali-ayrancilar", href: "/torbali-ayrancilar-oto-cekici" },
  { name: "Pancar Çekici", slug: "torbali-pancar", href: "/torbali-pancar-oto-cekici" },
  { name: "Yazıbaşı Çekici", slug: "torbali-yazibasi", href: "/torbali-yazibasi-oto-cekici" },
  { name: "Çaybaşı Çekici", slug: "torbali-caybasi", href: "/torbali-caybasi-oto-cekici" },
  { name: "Subaşı Çekici", slug: "torbali-subasi", href: "/torbali-subasi-oto-cekici" },
  { name: "Çapak Çekici", slug: "torbali-capak", href: "/torbali-capak-oto-cekici" },
  { name: "Karakızlar Çekici", slug: "torbali-karakizlar", href: "/torbali-karakizlar-oto-cekici" },
  { name: "Ahmetli Çekici", slug: "torbali-ahmetli", href: "/torbali-ahmetli-oto-cekici" },
  { name: "Kuşçuburun Çekici", slug: "torbali-kuscuburun", href: "/torbali-kuscuburun-oto-cekici" },
];

export const SURROUNDING_DISTRICTS_LINKS: QuickLinkItem[] = [
  { name: "Menemen Çekici", slug: "menemen", href: "/menemen-oto-cekici" },
  { name: "Bergama Çekici", slug: "bergama", href: "/bergama-oto-cekici" },
  { name: "Ödemiş Çekici", slug: "odemis", href: "/odemis-oto-cekici" },
  { name: "Tire Çekici", slug: "tire", href: "/tire-oto-cekici" },
  { name: "Bayındır Çekici", slug: "bayindir", href: "/bayindir-oto-cekici" },
  { name: "Selçuk Çekici", slug: "selcuk", href: "/selcuk-oto-cekici" },
  { name: "Kınık Çekici", slug: "kinik", href: "/kinik-oto-cekici" },
  { name: "Kiraz Çekici", slug: "kiraz", href: "/kiraz-oto-cekici" },
  { name: "Nazilli Çekici", slug: "nazilli", href: "/nazilli-oto-cekici" },
  { name: "Buca Gölet Çekici", slug: "buca-golet", href: "/buca-golet-oto-cekici" },
  { name: "Belenbaşı Çekici", slug: "belenbasi", href: "/belenbasi-oto-cekici" },
  { name: "Pınarbaşı Çekici", slug: "pinarbasi", href: "/pinarbasi-oto-cekici" },
];
