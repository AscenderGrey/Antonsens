import type { Metadata } from "next";
import Image from "next/image";
import { QuoteForm } from "@/components/QuoteForm";
import { CheckIcon, PhoneIcon } from "@/components/Icons";
import { site } from "@/lib/site";
import { proofPosts } from "@/lib/proof";

export const metadata: Metadata = {
  title: "Få gratis offert – trädgård, städ & fastighet på Gotland",
  description:
    "Begär en kostnadsfri offert på gräsklippning, trädgårdsskötsel, städning, fönsterputs, fastighetsskötsel eller tillsyn av fritidshus på Gotland. Fred återkommer personligen.",
  alternates: { canonical: "/offert" },
};

export default function OffertPage() {
  const featured = proofPosts.filter((p) => p.featured);
  return (
    <section className="bg-gradient-to-b from-white to-cream">
      <div className="container-x grid gap-10 py-10 md:py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-forest-950 sm:text-4xl">Få en gratis offert</h1>
          <p className="mt-3 text-lg text-muted">Tre snabba steg. Fred återkommer personligen med pris eller förslag på besök.</p>
          <div className="mt-6">
            <QuoteForm source="offert-page" />
          </div>
        </div>

        <aside className="space-y-6 lg:pt-20">
          <div className="rounded-2xl bg-white p-6 ring-1 ring-line">
            <div className="flex items-center gap-4">
              <Image src="/img/brand/fred.jpg" alt="Fred Antonsen" width={72} height={72} className="size-16 rounded-full object-cover object-top" />
              <div>
                <p className="font-bold text-forest-950">{site.owner}</p>
                <p className="text-sm text-muted">Ägare · Roma, Gotland</p>
              </div>
            </div>
            <ul className="mt-5 space-y-2.5 text-sm">
              {["Du pratar direkt med mig – ingen mellanhand", "Offerten är gratis och utan förpliktelser", "RUT & ROT dras direkt på fakturan", "Privatpersoner och företag på hela Gotland"].map((t) => (
                <li key={t} className="flex gap-2"><CheckIcon className="size-5 shrink-0 text-forest-700" /> {t}</li>
              ))}
            </ul>
            <a href={site.phoneHref} data-cta="call-offert-aside" className="btn-dark mt-5 w-full">
              <PhoneIcon className="size-5" /> Ring {site.phoneDisplay}
            </a>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-forest-950">Senaste uppdragen</p>
            <ul className="space-y-3">
              {featured.map((p) => (
                <li key={p.id} className="flex gap-3 rounded-xl bg-white p-3 ring-1 ring-line">
                  <Image src={p.images[0].src} alt={p.images[0].alt} width={72} height={72} className="size-16 shrink-0 rounded-lg object-cover" />
                  <div className="text-sm">
                    <p className="font-bold text-forest-950">{p.client}</p>
                    <p className="text-muted">{p.service} · {p.place}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
