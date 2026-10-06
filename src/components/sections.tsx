import Image from "next/image";
import Link from "next/link";
import { site, yearsInBusiness } from "@/lib/site";
import { services, quoteServiceOptions, type Faq } from "@/lib/services";
import { areas } from "@/lib/areas";
import { proofPosts, clientNames, type ProofPost } from "@/lib/proof";
import {
  ArrowIcon, CalendarIcon, CameraIcon, CheckIcon, FacebookIcon, InstagramIcon,
  LeafIcon, PhoneIcon, PinIcon, ShieldIcon, SnowIcon, UserIcon, serviceIcons,
} from "./Icons";

/* ───────────────────────── HERO ───────────────────────── */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-cream">
      <div className="container-x grid items-center gap-10 py-10 md:py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-lime-100 px-3 py-1.5 text-sm font-semibold text-forest">
            <PinIcon className="size-4" /> Roma · hela Gotland · {yearsInBusiness()} år i branschen
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-forest-950 text-balance sm:text-5xl lg:text-[3.4rem]">
            Trädgård, städ & fastighetsskötsel på Gotland
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted text-pretty">
            En person, ett nummer. Jag klipper gräset, putsar fönstren, ser efter ditt fritidshus och fixar det som behöver
            fixas – för privatpersoner och företag över hela ön.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/offert" data-cta="quote-hero" className="btn-primary text-lg">
              Få gratis offert <ArrowIcon className="size-5" />
            </Link>
            <a href={site.phoneHref} data-cta="call-hero" className="btn-ghost text-lg">
              <PhoneIcon className="size-5" /> Ring {site.phoneDisplay}
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-ink">
            {["RUT & ROT dras direkt", "Privat & företag", "Svar direkt från Fred"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <CheckIcon className="size-4 text-forest-700" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
            <Image
              src="/img/work/mower-lavender.jpg"
              alt="Fred Antonsens Husqvarna åkgräsklippare på nyklippt gräsmatta på Gotland"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          {/* the face — trust */}
          <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-xl ring-1 ring-line sm:left-6">
            <Image src="/img/brand/fred.jpg" alt="Fred Antonsen" width={64} height={64} className="size-14 rounded-full object-cover object-top" />
            <div>
              <p className="font-bold leading-tight text-forest-950">Hej, jag heter Fred!</p>
              <p className="text-sm text-muted">Du pratar alltid direkt med mig.</p>
            </div>
          </div>
        </div>
      </div>

      {/* quick service picker → pre-filled quote */}
      <div className="container-x pb-12 pt-6">
        <p className="mb-3 text-sm font-semibold text-forest-950">Vad behöver du hjälp med?</p>
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
          {quoteServiceOptions.filter((o) => o.key !== "annat").map((o) => {
            const Icon = serviceIcons[o.icon];
            return (
              <Link
                key={o.key}
                href={`/offert?tjanst=${o.key}`}
                className="flex shrink-0 items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-sm font-semibold text-ink shadow-sm transition hover:border-forest hover:bg-lime-100"
              >
                <Icon className="size-4 text-forest-700" /> {o.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── WHAT / WHERE / WHEN ─────────────────── */
export function WhatWhereWhen() {
  const items = [
    { icon: LeafIcon, title: "Vad", text: "Gräsklippning, trädgård, städ, fönsterputs, fastighetsskötsel, tillsyn av fritidshus och hantverk." },
    { icon: PinIcon, title: "Var", text: "Hela Gotland – Visby, Roma, Tofta, Ljugarn, Slite, Hemse, Fårö och allt däremellan." },
    { icon: CalendarIcon, title: "När", text: "Året runt. Enstaka jobb, återkommande besök eller säsongsavtal – du väljer." },
  ];
  return (
    <section className="border-y border-line bg-white">
      <div className="container-x grid gap-6 py-8 md:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-forest text-lime">
              <Icon className="size-5" />
            </span>
            <div>
              <p className="font-bold text-forest-950">{title}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-muted">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── SERVICES ───────────────────────── */
export function ServiceGrid() {
  return (
    <section id="tjanster" className="container-x py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="eyebrow">Tjänster</p>
        <h2 className="h2 mt-2">Det mesta för hus och trädgård – på samma ställe</h2>
        <p className="lead mt-4">
          Slipp jaga fem olika firmor. Jag tar hand om helheten, och vid större jobb samarbetar jag med andra lokala hantverkare.
        </p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/tjanster/${s.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-line transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width:1024px) 370px, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
              {s.deduction && (
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-forest">
                  {s.deduction}-avdrag
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-bold text-forest-950">{s.name}</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{s.short}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-forest-700">
                Läs mer <ArrowIcon className="size-4 transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
        <Link
          href="/offert"
          className="flex flex-col justify-between rounded-2xl bg-forest p-6 text-white shadow-sm transition hover:bg-forest-700"
        >
          <div>
            <p className="text-lg font-bold">Något annat?</p>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              Snöskottning, röjning, dödsbon, flytthjälp med städ… Beskriv vad du behöver så hittar vi en lösning.
            </p>
          </div>
          <span className="mt-6 inline-flex items-center gap-1 font-semibold text-lime">
            Berätta vad du behöver <ArrowIcon className="size-4" />
          </span>
        </Link>
      </div>
    </section>
  );
}

/* ─────────────────────── PROOF / POSTS ─────────────────────── */
const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("sv-SE", { month: "long", year: "numeric" });

function SourceBadge({ post }: { post: ProofPost }) {
  const Icon = post.source === "instagram" ? InstagramIcon : FacebookIcon;
  return (
    <a href={post.href} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-forest">
      <Icon className="size-4" /> Se inlägget på {post.source === "instagram" ? "Instagram" : "Facebook"}
    </a>
  );
}

function ProofCard({ post, large }: { post: ProofPost; large?: boolean }) {
  const pair = post.images.length === 2 && post.id === "bord";
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-line">
      <div className={`relative grid ${pair ? "grid-cols-2 gap-0.5" : ""} ${large ? "aspect-[4/3]" : "aspect-square"}`}>
        {(pair ? post.images : post.images.slice(0, 1)).map((img, i) => (
          <div key={img.src} className="relative">
            <Image src={img.src} alt={img.alt} fill sizes={large ? "(min-width:1024px) 380px, 100vw" : "(min-width:1024px) 280px, 50vw"} className="object-cover" />
            {pair && (
              <span className="absolute bottom-2 left-2 rounded-full bg-black/70 px-2 py-0.5 text-xs font-bold text-white">
                {i === 0 ? "Före" : "Efter"}
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="rounded-full bg-lime-100 px-2.5 py-1 text-forest">{post.service}</span>
          <span className="text-muted">{post.place} · {fmtDate(post.date)}</span>
        </div>
        {post.client && <h3 className="mt-3 text-lg font-bold text-forest-950">{post.client}</h3>}
        <p className={`mt-2 flex-1 leading-relaxed text-ink ${large ? "" : "text-sm"}`}>“{post.caption}”</p>
        <div className="mt-4">
          <SourceBadge post={post} />
        </div>
      </div>
    </article>
  );
}

export function ProofWall({ limit }: { limit?: number }) {
  const featured = proofPosts.filter((p) => p.featured);
  const rest = proofPosts.filter((p) => !p.featured).slice(0, limit);
  return (
    <section id="jobb" className="bg-sand/60 py-16 md:py-24">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Tidigare jobb</p>
            <h2 className="h2 mt-2">Riktiga uppdrag på Gotland – inte stockbilder</h2>
            <p className="lead mt-4">Allt här är hämtat direkt från mina egna inlägg. Från campingar och bryggpubar till villaträdgårdar i Visby.</p>
          </div>
          <div className="flex gap-2">
            <a href={site.social.instagram} target="_blank" rel="noopener" className="btn-ghost !py-2.5 !px-4 text-sm"><InstagramIcon className="size-4" /> Instagram</a>
            <a href={site.social.facebook} target="_blank" rel="noopener" className="btn-ghost !py-2.5 !px-4 text-sm"><FacebookIcon className="size-4" /> Facebook</a>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featured.map((p) => <ProofCard key={p.id} post={p} large />)}
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((p) => <ProofCard key={p.id} post={p} />)}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── CLIENT STRIP ─────────────────────── */
export function ClientStrip() {
  return (
    <section aria-label="Kunder och samarbetspartners" className="border-y border-line bg-white">
      <div className="container-x py-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted">Har jobbat för och tillsammans med</p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clientNames.map((c) => (
            <li key={c.name} className="text-center">
              {/* Swap for real logo files (with permission) — keep alt = company name */}
              <span className="block text-lg font-extrabold tracking-tight text-forest-950/80">{c.name}</span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-muted">{c.kind}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────────────────────── MEET FRED ───────────────────────── */
export function MeetFred() {
  const points = [
    { icon: UserIcon, t: "Samma person varje gång", d: "Ingen ny okänd på din tomt. Jag lär mig ditt hus och dina önskemål." },
    { icon: PhoneIcon, t: "Ett nummer för allt", d: "Gräs, städ, fönster eller ett trasigt staket – ring mig så löser vi det." },
    { icon: ShieldIcon, t: "Ordentligt utfört", d: "Väl underhållna maskiner, rätt utrustning och stolthet i jobbet." },
    { icon: PinIcon, t: "Lokal i Roma", d: "Jag bor här, kunderna är mina grannar. Ryktet är allt på en ö." },
  ];
  return (
    <section className="container-x py-16 md:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
            <Image src="/img/brand/fred.jpg" alt="Fred Antonsen, ägare av Antonsens Trädgård & Fastighet" fill sizes="(min-width:1024px) 440px, 90vw" className="object-cover object-top" />
          </div>
          <div className="absolute -right-3 bottom-8 rounded-2xl bg-forest px-5 py-4 text-white shadow-xl sm:-right-6">
            <p className="text-3xl font-extrabold text-lime">{yearsInBusiness()} år</p>
            <p className="text-sm text-white/80">som ditt lokala allservice&shy;företag</p>
          </div>
        </div>
        <div>
          <p className="eyebrow">Vem är jag?</p>
          <h2 className="h2 mt-2">Hej! Jag heter Fred Antonsen</h2>
          <p className="lead mt-4">
            Jag driver Antonsens Trädgård & Fastighet från Roma och jobbar över hela Gotland. Med ett stort personligt
            engagemang får du snabba, effektiva och prisvärda lösningar – oavsett om du är privatperson eller företagare.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Jag har ett brett kontaktnät och samarbetar med andra hantverkare, så du får en helhetslösning med en enda kontaktperson.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {points.map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex gap-3">
                <Icon className="mt-0.5 size-6 shrink-0 text-forest-700" />
                <div>
                  <p className="font-bold text-forest-950">{t}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.phoneHref} data-cta="call-about" className="btn-dark"><PhoneIcon className="size-5" /> Ring Fred</a>
            <Link href="/om-fred" className="btn-ghost">Mer om mig</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── HUSTOMTE / TILLSYN ──────────────────── */
export function TillsynFeature() {
  const list = [
    "Fast pris – olika paket efter behov",
    "Tillsyn enligt protokoll, med foton",
    "Rabatt på tilläggstjänster",
    "Snöskottning, städ och trädgård",
    "Akuta åtgärder när ni inte är på plats",
    "Huset klart och varmt när ni kommer",
  ];
  return (
    <section className="bg-forest-950 text-white">
      <div className="container-x grid items-center gap-10 py-16 md:py-20 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-lime">För dig med fritidshus på Gotland</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-balance sm:text-4xl">Din egen hustomte medan du är på fastlandet</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80 text-pretty">
            Skönt att veta att huset blir omhändertaget även när du inte kan vara på plats. Jag ser efter det, åtgärdar det
            akuta och fixar allt som gör er ankomst enkel.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/offert?tjanst=tillsyn" data-cta="quote-tillsyn" className="btn-primary">Gör en plan med Fred</Link>
            <Link href="/tjanster/tillsyn-fritidshus" className="btn border border-white/25 text-white hover:bg-white/10">Så funkar tillsynen</Link>
          </div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {list.map((t, i) => (
            <li key={t} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              {i === 1 ? <CameraIcon className="size-5 shrink-0 text-lime" /> : <CheckIcon className="size-5 shrink-0 text-lime" />}
              <span className="font-medium">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────────────────────── SEASONS ───────────────────────── */
export function Seasons() {
  const s = [
    { name: "Vår", tone: "bg-lime-100", items: ["Vårstädning av trädgård", "Fönsterputs", "Säsongsöppning av fritidshus"] },
    { name: "Sommar", tone: "bg-lime-300/50", items: ["Gräsklippning varje vecka", "Rabatter & häckar", "Tillsyn & städ mellan gäster"] },
    { name: "Höst", tone: "bg-sand", items: ["Lövkrattning", "Höststäd & röjning", "Stängning inför vintern"] },
    { name: "Vinter", tone: "bg-white", items: ["Snöskottning", "Tillsyn av tomma hus", "Renovering & fix inomhus"], icon: true },
  ];
  return (
    <section className="container-x py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="eyebrow">Året runt</p>
        <h2 className="h2 mt-2">Hjälp i alla årstider</h2>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {s.map((x) => (
          <div key={x.name} className={`rounded-2xl p-6 ring-1 ring-line ${x.tone}`}>
            <p className="flex items-center gap-2 text-xl font-bold text-forest-950">
              {x.icon ? <SnowIcon className="size-5" /> : <LeafIcon className="size-5" />} {x.name}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {x.items.map((i) => (
                <li key={i} className="flex gap-2"><CheckIcon className="mt-0.5 size-4 shrink-0 text-forest-700" />{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────── HOW IT WORKS ─────────────────────── */
export function HowItWorks() {
  const steps = [
    { t: "Berätta vad du behöver", d: "Fyll i formuläret på en minut eller ring direkt." },
    { t: "Fred hör av sig", d: "Personligen – med frågor, ett besök eller ett pris." },
    { t: "Du får en tydlig offert", d: "Inga överraskningar. RUT/ROT är redan avdraget." },
    { t: "Jobbet blir gjort", d: "Ordentligt, i tid och med bilder om du inte är på plats." },
  ];
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-x">
        <p className="eyebrow text-center">Så går det till</p>
        <h2 className="h2 mt-2 text-center">Enkelt från förfrågan till färdigt jobb</h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.t} className="relative text-center">
              <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-lime text-lg font-extrabold text-forest-950">{i + 1}</span>
              <p className="mt-4 font-bold text-forest-950">{s.t}</p>
              <p className="mt-1 text-sm text-muted">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─────────────────────── AREAS SERVED ─────────────────────── */
export function AreasServed() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Områden</p>
          <h2 className="h2 mt-2">Utgår från Roma – jobbar på hela Gotland</h2>
          <p className="lead mt-4">
            Mitt på ön betyder korta avstånd åt alla håll. Visby ligger 20 minuter bort, och jag planerar rutter så att även
            sydön och Fårö får hjälp utan onödiga resekostnader.
          </p>
          <Link href="/omraden" className="btn-ghost mt-6">Se alla områden</Link>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {areas.map((a) => (
            <li key={a.slug}>
              <Link href={`/omraden/${a.slug}`} className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 font-semibold text-forest-950 shadow-sm ring-1 ring-line hover:ring-forest">
                <PinIcon className="size-4 text-forest-700" /> {a.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────────────────────── FAQ ───────────────────────── */
export const homeFaqs: Faq[] = [
  { q: "Vilka områden på Gotland jobbar du i?", a: "Hela Gotland. Jag utgår från Roma och har uppdrag i bland annat Visby, Tofta, Klintehamn, Ljugarn, Slite, Hemse och på Fårö." },
  { q: "Kan jag få RUT- eller ROT-avdrag?", a: "Ja. Trädgårdsarbete, städning och fönsterputs ger RUT-avdrag, och reparationer och renovering av bostad ger ROT-avdrag. Avdraget dras direkt på fakturan." },
  { q: "Kostar det något att få en offert?", a: "Nej, offerten är kostnadsfri och helt utan förpliktelser." },
  { q: "Jobbar du med företag och föreningar?", a: "Ja, både privatpersoner och företag – till exempel campingar, restauranger, BRF:er och fastighetsägare. Säsongsavtal finns." },
  { q: "Kan du hjälpa till med mitt fritidshus när jag inte är på Gotland?", a: "Absolut. Med tillsyn av fritidshus får du fast pris, besök enligt protokoll med foton och hjälp med allt från snöskottning till städning inför ankomst." },
  { q: "Är det verkligen du som kommer?", a: "Ja. Jag driver företaget själv, så det är jag du pratar med och jag som gör jobbet. Vid större projekt tar jag in hantverkare ur mitt kontaktnät och samordnar allt." },
];

export function FaqList({ faqs, title = "Vanliga frågor" }: { faqs: Faq[]; title?: string }) {
  return (
    <section className="container-x max-w-3xl py-16 md:py-24">
      <h2 className="h2 text-center">{title}</h2>
      <div className="mt-8 divide-y divide-line rounded-2xl bg-white ring-1 ring-line">
        {faqs.map((f) => (
          <details key={f.q} className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-forest-950 [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="text-2xl leading-none text-forest-700 transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── CTA BAND ───────────────────────── */
export function CtaBand({ title = "Redo att slippa jobbet?", text = "Ring Fred eller skicka en förfrågan – offerten är gratis." }: { title?: string; text?: string }) {
  return (
    <section className="container-x pb-16 md:pb-24">
      <div className="flex flex-col items-center gap-6 rounded-3xl bg-lime px-6 py-12 text-center md:flex-row md:justify-between md:px-12 md:text-left">
        <div className="flex items-center gap-4">
          <Image src="/img/brand/fred.jpg" alt="Fred Antonsen" width={72} height={72} className="hidden size-16 rounded-full object-cover object-top ring-4 ring-white/60 sm:block" />
          <div>
            <h2 className="text-2xl font-extrabold text-forest-950 sm:text-3xl">{title}</h2>
            <p className="mt-1 text-forest-950/80">{text}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={site.phoneHref} data-cta="call-band" className="btn-dark"><PhoneIcon className="size-5" /> {site.phoneDisplay}</a>
          <Link href="/offert" data-cta="quote-band" className="btn bg-white text-forest hover:bg-cream">Få gratis offert</Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── BREADCRUMBS ───────────────────────── */
export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Brödsmulor" className="container-x pt-6 text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden>/</span>}
            {i === items.length - 1 ? <span className="text-ink">{it.name}</span> : <Link href={it.path} className="hover:text-forest">{it.name}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
