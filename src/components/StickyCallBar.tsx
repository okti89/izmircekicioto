import { MessageCircle, Phone } from "lucide-react";
import { MAIN_PHONE, MAIN_PHONE_RAW, WHATSAPP_NUMBER } from "@/data/districts";

const whatsappLabel = "Konum Gönder";
const whatsappMessage = "Merhaba, konumumu paylaşarak çekici ve yol yardım desteği almak istiyorum.";

export default function StickyCallBar() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 sm:flex-row">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`WhatsApp ile ${whatsappLabel.toLocaleLowerCase("tr-TR")}`}
        className="flex items-center justify-center gap-2 bg-emerald-500 px-5 py-4 font-black text-white shadow-xl transition hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <MessageCircle className="h-5 w-5" />
        <span>{whatsappLabel}</span>
      </a>
      <a
        href={`tel:${MAIN_PHONE_RAW}`}
        aria-label={`${MAIN_PHONE} numarasını ara`}
        className="flex items-center justify-center gap-2 bg-amber-500 px-5 py-4 font-black text-slate-950 shadow-xl transition hover:bg-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-200"
      >
        <Phone className="h-5 w-5" />
        <span>{MAIN_PHONE}</span>
      </a>
    </div>
  );
}
