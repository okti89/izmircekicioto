import { MapPinCheck, MessageCircleMore, ShieldCheck } from "lucide-react";
import { getLocalSeoContext } from "@/data/localSeoContext";

type Props = { slug: string; district: string; serviceTitle: string };

export default function LocalAreaGuide({ slug, district, serviceTitle }: Props) {
  const context = getLocalSeoContext(slug, district, serviceTitle);
  const icons = [MapPinCheck, MessageCircleMore, ShieldCheck];

  return (
    <section className="border-y border-slate-200 bg-white py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <p className="text-sm font-bold uppercase tracking-widest text-amber-600">{context.label}</p>
        <h2 className="section-title mt-3">{context.heading}</h2>
        <p className="mt-5 max-w-3xl leading-8 text-slate-600">{context.description}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {context.guidance.map((item, index) => {
            const Icon = icons[index];
            return <article key={item} className="border border-slate-200 bg-slate-50 p-6"><Icon className="h-7 w-7 text-amber-600" /><p className="mt-4 font-semibold leading-7 text-slate-800">{item}</p></article>;
          })}
        </div>
      </div>
    </section>
  );
}
