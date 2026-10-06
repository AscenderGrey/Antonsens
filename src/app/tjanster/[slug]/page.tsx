import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/services";
import { areas } from "@/lib/areas";
import { site } from "@/lib/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { QuoteForm } from "@/components/QuoteForm";
import { CheckIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { Breadcrumbs, CtaBand, FaqList } from "@/components/sections";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.metaDescription,
    alternates: { canonical: `/tjanster/${s.slug}` },
    openGraph: { title: s.title, description: s.metaDescription, images: [s.image] },
  };
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) notFound();

  const crumbs = [
    { name: "Hem", path: "/" },
    { name: s.name, path: `/tjanster/${s.slug}` },
  ];
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <JsonLd data={serviceSchema(s)} />
      <JsonLd data={faqSchema(s.faqs)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />

      <section className="container-x grid gap-10 py-8 md:py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-lime-100 px-3 py-1.5 text-sm font-semibold text-forest">
            <PinIcon className="size-4" /> Hela Gotland · utgår från Roma
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-forest-950 text-balance sm:text-5xl">{s.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted text-pretty">{s.intro}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href={`/offert?tjanst=${s.quoteKey}`} data-cta={`quote-service-${s.slug}`} className="btn-primary">Få gratis offert</Link>
            <a href={site.phoneHref} data-cta={`call-service-${s.slug}`} className="btn-ghost"><PhoneIcon className="size-5" /> {site.phoneDisplay}</a>
          </div>
          {s.deduction && (
            <p className="mt-5 text-sm font-medium text-forest-700">✓ {s.deduction}-avdrag för privatpersoner – dras direkt på fakturan</p>
          )}
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
          <Image src={s.image} alt={s.imageAlt} fill priority sizes="(min-width:1024px) 480px, 100vw" className="object-cover" />
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="h2">Det här ingår</h2>
            <ul className="mt-6 space-y-3">
              {s.includes.map((i) => (
                <li key={i} className="flex gap-3 text-lg"><CheckIcon className="mt-1 size-5 shrink-0 text-forest-700" /> {i}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="h2">Passar för</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {s.forWho.map((w) => (
                <span key={w} className="rounded-full bg-lime-100 px-4 py-2 font-semibold text-forest">{w}</span>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-cream p-6 ring-1 ring-line">
              <div className="flex items-center gap-4">
                <Image src="/img/brand/fred.jpg" alt="Fred Antonsen" width={64} height={64} className="size-14 rounded-full object-cover object-top" />
                <p className="text-sm leading-relaxed">
                  <strong className="text-forest-950">”Det är jag som kommer.”</strong> Du pratar med mig, och jag gör jobbet – så du vet vem som är på din tomt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {s.gallery.length > 0 && (
        <section className="container-x py-14 md:py-20">
          <h2 className="h2">Från riktiga uppdrag</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {s.gallery.map((g) => (
              <div key={g.src} className="relative aspect-square overflow-hidden rounded-2xl">
                <Image src={g.src} alt={g.alt} fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
          <Link href="/#jobb" className="mt-6 inline-block font-semibold text-forest underline">Se fler jobb</Link>
        </section>
      )}

      <section className="bg-sand/60 py-14 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h2 className="h2">{s.name} – var på Gotland?</h2>
            <p className="lead mt-4">Jag tar uppdrag på hela ön. Några av orterna där jag ofta jobbar:</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/omraden/${a.slug}`} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-sm font-semibold ring-1 ring-line hover:ring-forest">
                    <PinIcon className="size-4 text-forest-700" /> {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <QuoteForm initialService={s.quoteKey} source={`service-${s.slug}`} />
        </div>
      </section>

      <FaqList faqs={s.faqs} title={`Frågor om ${s.name.toLowerCase()}`} />

      <section className="container-x pb-14">
        <h2 className="text-xl font-bold text-forest-950">Andra tjänster</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {others.map((o) => (
            <li key={o.slug}><Link href={`/tjanster/${o.slug}`} className="inline-block rounded-full bg-white px-4 py-2 font-semibold ring-1 ring-line hover:ring-forest">{o.name}</Link></li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
