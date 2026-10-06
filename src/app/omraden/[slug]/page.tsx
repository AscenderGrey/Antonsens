import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { areas, getArea } from "@/lib/areas";
import { services } from "@/lib/services";
import { proofPosts } from "@/lib/proof";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { QuoteForm } from "@/components/QuoteForm";
import { ArrowIcon, CheckIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { Breadcrumbs, CtaBand } from "@/components/sections";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getArea((await params).slug);
  if (!a) return {};
  const title = `Trädgård, städ & fastighetsskötsel i ${a.name}`;
  const description = `Gräsklippning, trädgårdsskötsel, städning, fönsterputs och tillsyn av fritidshus i ${a.name} på Gotland. Lokal i Roma – ring ${site.phoneDisplay} eller få gratis offert.`;
  return { title, description, alternates: { canonical: `/omraden/${a.slug}` }, openGraph: { title, description } };
}

export default async function AreaPage({ params }: Props) {
  const a = getArea((await params).slug);
  if (!a) notFound();

  const crumbs = [
    { name: "Hem", path: "/" },
    { name: "Områden", path: "/omraden" },
    { name: a.name, path: `/omraden/${a.slug}` },
  ];
  const localProof = proofPosts.filter((p) => p.place.includes(a.name));
  const proof = (localProof.length ? localProof : proofPosts.filter((p) => p.featured)).slice(0, 3);

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />

      <section className="container-x py-8 md:py-12">
        <p className="inline-flex items-center gap-2 rounded-full bg-lime-100 px-3 py-1.5 text-sm font-semibold text-forest">
          <PinIcon className="size-4" /> {a.distanceKm === 0 ? "Här bor jag" : `ca ${a.distanceKm} km från Roma`}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-forest-950 text-balance sm:text-5xl">
          Trädgård, städ & fastighetsskötsel i {a.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted text-pretty">{a.intro}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link href="/offert" data-cta={`quote-area-${a.slug}`} className="btn-primary">Få gratis offert</Link>
          <a href={site.phoneHref} data-cta={`call-area-${a.slug}`} className="btn-ghost"><PhoneIcon className="size-5" /> {site.phoneDisplay}</a>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="h2">Vanliga uppdrag i {a.name}</h2>
            <ul className="mt-6 space-y-3">
              {a.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-lg"><CheckIcon className="mt-1 size-5 shrink-0 text-forest-700" /> {h}</li>
              ))}
            </ul>
            <p className="mt-8 text-sm font-semibold text-forest-950">Jag jobbar även i närliggande</p>
            <p className="mt-1 text-muted">{a.nearby.join(" · ")}</p>
          </div>
          <div>
            <h2 className="h2">Tjänster i {a.name}</h2>
            <ul className="mt-6 grid gap-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/tjanster/${s.slug}`} className="group flex items-center justify-between rounded-xl bg-cream px-4 py-3 font-semibold text-forest-950 ring-1 ring-line hover:ring-forest">
                    {s.name}
                    <ArrowIcon className="size-4 text-forest-700 transition group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x py-14">
        <h2 className="h2">{localProof.length ? `Jobb i ${a.name}` : "Senaste jobben på Gotland"}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {proof.map((p) => (
            <article key={p.id} className="overflow-hidden rounded-2xl bg-white ring-1 ring-line">
              <div className="relative aspect-[4/3]">
                <Image src={p.images[0].src} alt={p.images[0].alt} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold text-forest-700">{p.service} · {p.place}</p>
                {p.client && <h3 className="mt-1 font-bold text-forest-950">{p.client}</h3>}
                <p className="mt-2 text-sm text-muted">“{p.caption}”</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand/60 py-14 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h2 className="h2">Få en offert i {a.name}</h2>
            <p className="lead mt-4">Berätta vad du behöver så återkommer Fred personligen.</p>
          </div>
          <QuoteForm source={`area-${a.slug}`} />
        </div>
      </section>

      <CtaBand title={`Behöver du hjälp i ${a.name}?`} />
    </>
  );
}
