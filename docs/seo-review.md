# SEO çalışması — 18 Eylül 2026

## Düzeltilen kaynak sorunları

- Bölgeye ait çekici SSS'lerinin akü, oto elektrik ve diğer hizmetlere taşınması kaldırıldı. Her hizmet kendi açıklama, kapsam, sınır, örnek durum ve SSS verisini kullanır.
- Bölge sayfalarında tekrar eden işletme adresi ve varsayılan merkez koordinatı kaldırıldı. Tek Organization kimliği ve sayfa özelinde Service/areaServed kullanılır. Gerçek işletme adresi doğrulanmadan yerel şube işaretlemesi eklenmez.
- Ana sayfada görünmeyen SSS'nin şemada yayımlanması giderildi. Görünen sorular ve JSON-LD aynı kaynağı kullanır.
- Hizmet ana sayfaları bütün ilgili bölgelere sunucuda üretilen bağlantılar verir. Bölge sayfaları aynı bölgedeki diğer hizmetlere bağlanır. Navbar açılması keşif için gerekli değildir.
- Bölge bağlamı seçimine hizmet eki taşıyan tam URL yerine yalnızca bölge anahtarı gönderilir. Sanayi ve otoyol bağlamları ayrılır.
- Mevcut URL'ler, eski adreslerin kalıcı yönlendirmeleri ve sitemap kapsamı korunur. Yeni URL göçü yapılmaz.

## Doğrulama

`npm run build` üretim sayfalarını oluşturur. Ardından `npm run audit:seo` tüm sitemap URL'leri için üretilmiş HTML'i inceler; canonical, H1, dil, açıklama, noindex, görünen Unicode kaçışları, JSON-LD/SSS eşleşmesi, dahili link hedefleri ve ana sayfadan erişimi kontrol eder. Sonuç `artifacts/seo-audit.json` dosyasına yazılır. Bu denetim Google indeks durumu veya sıralama ölçümü değildir.

## Tamamlanmış sayılmaması gereken işler

Hizmet bazlı açıklamalar ortak olabilir. Bu çalışma her bölgeye doğrulanmış özgün saha kaydı kazandırmış değildir. Bölge adı değişen metinler ve örnek senaryolar, gerçek iş kanıtı yerine geçmez. Aynı konumu ifade eden URL'ler ayrıca editoryal olarak incelenmelidir; kullanıcı tercihi gereği bu çalışmada URL birleştirmesi yapılmaz.

Her gerçek iş kaydı için işletmeden şu bilgiler gerekir: hizmet türü, bölge, operasyon tarihi veya ayı, anonim araç bilgisi, gözlenen sorun, yapılan işlem, teslim türü ve bu işe ait kullanımı onaylı fotoğraf. Plaka, müşteri adı ve hassas konum yayımlanmamalıdır. Yapay üretilmiş veya genel hizmet görseli, ilgili bölgede gerçekleşmiş operasyonun fotoğrafı gibi etiketlenmemelidir.

İşletme unvanı, gerçek adres veya hizmet alanı, Google İşletme Profili bağlantısı, ekipman ve sigorta kapsamı doğrulanmalıdır. Gerçek olmayan şube, müşteri yorumu, puan, yetki belgesi veya çalışma kaydı eklenmemelidir.

## Yayından sonra ölçüm

Search Console'da aynı tarih aralıklarını karşılaştırın: indekslenen URL sayısı, keşfedildi/tarandı fakat indekslenmedi ayrımı, Google'ın seçtiği canonical, son tarama tarihi, sorgu ve sayfa bazında gösterim/tıklama. Yeni ve eski URL'leri birlikte izleyin. En son performans verisine erişmeden iyileşme iddia edilmemelidir.

Sitemap'in başarılı alındığını kontrol edin; temsilî hizmet ve bölge sayfalarında URL denetimi canlı testini kullanın. Sitemap veya indeksleme isteği kabul garantisi değildir. Gerçek Googlebot taramalarını Vercel erişim kayıtları ve Search Console tarama istatistikleriyle doğrulayın. Kullanıcı deneyimi için Search Console Core Web Vitals ve mobil PageSpeed ölçümü ayrıca gerekir.

Kaynaklar:
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- https://developers.google.com/search/docs/appearance/structured-data/local-business
