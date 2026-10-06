import type { Metadata } from "next";
import Link from "next/link";
import { areas } from "@/lib/areas";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { ArrowIcon, PinIcon } from "@/components/Icons";
import { Breadcrumbs, CtaBand } from "@/components/sections";

export const metadata: Metadata = {
  title: "Områden – hela Gotland",
  description:
    "Antonsens Trädgård & Fastighet utgår från Roma och jobbar på hela Gotland: Visby, Tofta, Klintehamn, Ljugarn, Slite, Hemse, Fårö och fler orter.",
  alternates: { canonical: "/omraden" },
};

export default function OmradenPage() {
  const crumbs = [{ name: "Hem", path: "/" }, { name: "Områden", path: "/omraden" }];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <section className="container-x py-8 md:py-12">
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-forest-950 sm:text-5xl">Utgår från Roma – jobbar på hela Gotland</h1>
        <p className="lead mt-5 max-w-2xl">
          Roma ligger mitt på ön, så avståndet är kort åt alla håll. Jag planerar uppdragen geografiskt så att du slipper betala
          för onödig restid – oavsett om du bor i Visby eller har sommarhus på Fårö.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a) => (
            <li key={a.slug}>
              <Link href={`/omraden/${a.slug}`} className="group flex h-full flex-col rounded-2xl bg-white p-5 ring-1 ring-line transition hover:ring-forest">
                <span className="flex items-center gap-2 text-lg font-bold text-forest-950"><PinIcon className="size-5 text-forest-700" /> {a.name}</span>
                <span className="mt-1 text-sm text-muted">{a.distanceKm === 0 ? "Hemmabas" : `ca ${a.distanceKm} km från Roma`}</span>
                <span className="mt-3 flex-1 text-sm text-muted">{a.nearby.slice(0, 4).join(", ")}…</span>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-forest-700">Läs mer <ArrowIcon className="size-4" /></span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-muted">Hittar du inte din ort? Jag jobbar på hela Gotland – <Link href="/offert" className="font-semibold text-forest underline">skicka en förfrågan</Link>.</p>
      </section>
      <CtaBand />
    </>
  );
}
