import type { Metadata } from "next";
import Image from "next/image";
import { site, yearsInBusiness } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PhoneIcon } from "@/components/Icons";
import { Breadcrumbs, ClientStrip, CtaBand, ProofWall } from "@/components/sections";

export const metadata: Metadata = {
  title: "Om Fred Antonsen – ditt lokala allserviceföretag på Gotland",
  description:
    "Fred Antonsen driver Antonsens Trädgård & Fastighet från Roma på Gotland. Trädgård, städ, fönsterputs, fastighetsskötsel och hantverk – med en kontaktperson för allt.",
  alternates: { canonical: "/om-fred" },
};

export default function OmFredPage() {
  const crumbs = [{ name: "Hem", path: "/" }, { name: "Om Fred", path: "/om-fred" }];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: site.owner,
          jobTitle: "Ägare",
          worksFor: { "@id": `${site.url}/#business` },
          image: `${site.url}/img/brand/fred.jpg`,
          homeLocation: { "@type": "Place", name: "Roma, Gotland" },
          sameAs: [site.social.facebook, site.social.instagram],
        }}
      />
      <Breadcrumbs items={crumbs} />

      <section className="container-x grid gap-10 py-8 md:py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl shadow-xl">
          <Image src="/img/brand/fred.jpg" alt="Fred Antonsen" fill priority sizes="(min-width:1024px) 380px, 90vw" className="object-cover object-top" />
        </div>
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-forest-950 sm:text-5xl">Hej, jag heter Fred</h1>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Jag driver Antonsens Trädgård & Fastighet från Roma, och har i {yearsInBusiness()} år hjälpt gotlänningar,
              fritidshusägare och företag med det mesta som rör hus och trädgård.
            </p>
            <p>
              Tanken är enkel: <strong className="text-forest-950">Gotlands bästa allserviceföretag</strong> – det allra mesta,
              på samma ställe. Gräset, städningen, fönstren, tillsynen av sommarhuset och listen som släppt. Du ringer ett
              nummer, och det är jag som svarar.
            </p>
            <p>
              Jag har ett brett kontaktnät och samarbetar med andra hantverkare och företag på ön, som Ekoiso Gotland och
              Växthuset Linds. Det gör att jag kan ta helheten, även när jobbet växer.
            </p>
            <p>Med ett stort personligt engagemang får du snabba, effektiva och prisvärda lösningar.</p>
          </div>
          <a href={site.phoneHref} data-cta="call-om" className="btn-dark mt-8"><PhoneIcon className="size-5" /> Ring mig på {site.phoneDisplay}</a>
        </div>
      </section>

      <ClientStrip />
      <ProofWall limit={4} />
      <div className="pt-16" />
      <CtaBand />
    </>
  );
}
