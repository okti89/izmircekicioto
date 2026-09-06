import Link from "next/link";
import { AlertTriangle, CarFront, ClipboardCheck, MapPinned, Wrench, ShieldAlert } from "lucide-react";

const guides = [
  [
    "Oto çekici ve kayar kasa",
    "Arıza yapan, kaza sonrası hareket edemeyen veya servise güvenle ulaştırılması gereken otomobil, SUV ve hafif ticari araçlar için kayar kasa tercih edilir. Yükleme öncesinde aracın yürür durumu, hasarı ve bulunduğu alan değerlendirilir.",
    "/oto-cekici",
  ],
  [
    "Akü takviye ve mobil oto elektrik",
    "Marş almama, şarj uyarısı veya akü bitmesi gibi durumlarda ilk adım güvenli bağlantı ve temel sistem kontrolüdür. Sorun yerinde çözülemiyorsa uygun servis transferi planlanır.",
    "/aku-takviye",
  ],
  [
    "Oto kurtarma ve ağır vasıta",
    "Kaza, zor zemin, şarampol veya ağır araç operasyonlarında tonaj, yol emniyeti ve ekipman ihtiyacı ayrıca planlanır. Vinçli kurtarma veya ağır hizmet tipi kurtarıcı seçimi bu bilgilerle yapılır.",
    "/agir-vasita-kurtarma",
  ],
];

const directLinks = [
  { name: "Bornova Çekici", href: "/bornova-oto-cekici" },
  { name: "Karşıyaka Çekici", href: "/karsiyaka-oto-cekici" },
  { name: "Konak Çekici", href: "/konak-oto-cekici" },
  { name: "Buca Çekici", href: "/buca-oto-cekici" },
  { name: "Gaziemir Çekici", href: "/gaziemir-oto-cekici" },
  { name: "Torbalı Çekici", href: "/torbali-oto-cekici" },
  { name: "Çeşme / Alaçatı Çekici", href: "/alacati-oto-cekici" },
  { name: "Menemen Çekici", href: "/menemen-oto-cekici" },
  { name: "İzmir Çevre Yolu Çekici", href: "/izmir-cevre-yolu-oto-cekici" },
  { name: "Sabuncubeli Tüneli Çekici", href: "/sabuncubeli-tuneli-oto-cekici" },
  { name: "Belkahve Rampası Çekici", href: "/belkahve-rampasi-oto-cekici" },
  { name: "1. Sanayi Çekici", href: "/1-sanayi-oto-cekici" },
  { name: "Kısıkköy Sanayi Çekici", href: "/kisikkoy-sanayi-sitesi-oto-cekici" },
  { name: "Bergama Çekici", href: "/bergama-oto-cekici" },
  { name: "Ödemiş Çekici", href: "/odemis-oto-cekici" },
  { name: "Çekici Fiyat Tarifesi", href: "/fiyatlar" },
];

export default function HomeLongformContent() {
  return (
    <>
      <section className="bg-white py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
            Kapsamlı hizmet rehberi
          </p>
          <h2 className="section-title mt-3">İzmir yol yardım hizmeti hangi durumlarda gerekir?</h2>
          <p className="mt-6 max-w-4xl leading-8 text-slate-600">
            Yolda kalma durumları tek bir sebepten oluşmaz. Araç arızası, trafik kazası, akünün bitmesi, lastik sorunu, elektrik arızası veya güvenli servis transferi ihtiyacı farklı ekipman gerektirir. İzmir Çekici, konum, araç tipi ve ihtiyaç bilgisini birlikte değerlendirerek doğru hizmet planının yapılmasına odaklanır.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {guides.map(([title, body, href], i) => {
              const Icon = [CarFront, Wrench, ClipboardCheck][i];
              return (
                <article key={href} className="border border-slate-200 p-7">
                  <Icon className="h-9 w-9 text-amber-500" />
                  <h3 className="mt-5 font-heading text-2xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
                  <Link href={href} className="mt-5 inline-flex font-bold text-amber-700 hover:underline">
                    Hizmet detayını inceleyin →
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="container mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-amber-300">
              Acil durumda yapılacaklar
            </p>
            <h2 className="mt-3 font-heading text-4xl font-black">
              Yolda kaldığınızda önce güvenliğinizi sağlayın
            </h2>
            <p className="mt-6 leading-8 text-slate-300">
              Mümkünse aracınızı trafiği tehlikeye atmayacak bir noktaya alın, dörtlü ikazları yakın ve konumunuzu paylaşmaya hazır olun. Araçta hasar, duman veya sıvı sızıntısı varsa aracın yakınında beklemeyin.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              [
                "Konumu belirleyin",
                "Mahalle, cadde, otoyol kilometresi veya yakınındaki görünür noktayı iletin.",
              ],
              [
                "Aracı tanımlayın",
                "Marka-model, yakıt türü, hasar durumu ve hareket edip etmediği bilgisini belirtin.",
              ],
              [
                "Teslim noktasını planlayın",
                "Servis, sanayi sitesi veya ikametgâh tercihinizi görüşme sırasında bildirin.",
              ],
            ].map(([a, b]) => (
              <div key={a} className="border border-slate-700 p-5">
                <AlertTriangle className="h-5 w-5 text-amber-300" />
                <h3 className="mt-3 font-bold">{a}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
            Yerel hizmet ağı
          </p>
          <h2 className="section-title mt-3">
            İzmir ilçeleri, ana yollar ve bağlantı noktalarında destek
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-slate-600">
            İzmir Çevre Yolu, Sabuncubeli, Belkahve, Ankara Caddesi, Altınyol, İzmir-Aydın ve İzmir-Çeşme otoyolları ile sanayi sitelerinde kesintisiz hazır ekipler. Doğrudan ilgili bölgeye ait hizmet sayfasını inceleyebilirsiniz:
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {directLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-800 transition hover:border-amber-500 hover:bg-amber-50 hover:text-amber-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
            Araç taşıma süreci
          </p>
          <h2 className="section-title mt-3">Güvenli çekici hizmetinde nelere dikkat edilir?</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              [
                "Doğru ekipman",
                "Kayar kasa, vinç veya kurtarıcı tercihi araç türü ve bulunduğu konuma göre yapılır.",
              ],
              [
                "Kontrollü yükleme",
                "Aracın yürür aksamı, yerden yüksekliği ve hasar durumu dikkate alınarak yükleme planlanır.",
              ],
              [
                "Açık iletişim",
                "Konum, hizmet kapsamı ve teslim bilgisi netleştirilerek süreç baştan sona takip edilir.",
              ],
            ].map(([h, p]) => (
              <article key={h} className="border-t-4 border-amber-400 bg-slate-50 p-6">
                <MapPinned className="h-6 w-6 text-amber-600" />
                <h3 className="mt-4 font-heading text-xl font-black">{h}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}