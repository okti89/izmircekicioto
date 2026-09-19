import Image from "next/image";
import { getVerifiedOperations } from "@/data/verifiedOperations";

export default function VerifiedOperations({ regionSlug, serviceSlug }: { regionSlug: string; serviceSlug: string }) {
  const operations = getVerifiedOperations(regionSlug, serviceSlug);
  if (!operations.length) return null;
  return <section className="container mx-auto max-w-6xl px-4 py-16">
    <h2 className="section-title">Bu bölgedeki hizmet çalışmalarımız</h2>
    <div className="mt-8 grid gap-8 md:grid-cols-2">{operations.map((operation) => <article key={operation.id} className="border border-slate-200 p-6">
      <Image src={operation.photo.src} alt={operation.photo.alt} width={800} height={600} sizes="(max-width: 768px) 100vw, 50vw" className="aspect-[4/3] w-full object-cover" />
      <p className="mt-4 text-sm text-slate-500"><time dateTime={operation.date}>{operation.date}</time> • {operation.vehicleType}</p>
      <h3 className="mt-3 font-heading text-xl font-bold">{operation.issue}</h3>
      <p className="mt-3 leading-7">{operation.action}</p><p className="mt-3 leading-7 text-slate-600">{operation.outcome}</p>
    </article>)}</div>
  </section>;
}
