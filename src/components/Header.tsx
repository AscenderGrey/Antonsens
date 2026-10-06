import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { PhoneIcon } from "./Icons";

const nav = [
  { href: "/#tjanster", label: "Tjänster" },
  { href: "/#jobb", label: "Tidigare jobb" },
  { href: "/omraden", label: "Områden" },
  { href: "/om-fred", label: "Om Fred" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" aria-label={`${site.name} – startsida`} className="shrink-0">
          <Image
            src="/img/brand/logo.png"
            alt={site.name}
            width={776}
            height={206}
            priority
            className="h-9 w-auto md:h-11"
          />
        </Link>

        <nav aria-label="Huvudmeny" className="hidden items-center gap-7 text-[15px] font-medium text-ink lg:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-forest-700">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            data-cta="call-header"
            className="hidden items-center gap-2 rounded-full px-3 py-2 font-semibold text-forest hover:bg-lime-100 sm:inline-flex"
          >
            <PhoneIcon className="size-5" />
            {site.phoneDisplay}
          </a>
          <Link href="/offert" data-cta="quote-header" className="btn-primary hidden !px-5 !py-2.5 md:inline-flex">
            Få gratis offert
          </Link>

          <details className="group relative lg:hidden">
            <summary
              className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full text-forest hover:bg-lime-100 [&::-webkit-details-marker]:hidden"
              aria-label="Öppna meny"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" className="group-open:hidden" />
                <path d="M6 6l12 12M18 6 6 18" className="hidden group-open:block" />
              </svg>
            </summary>
            <div className="absolute right-0 top-13 w-72 rounded-2xl border border-line bg-white p-3 shadow-xl">
              <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-muted">Tjänster</p>
              {services.map((s) => (
                <Link key={s.slug} href={`/tjanster/${s.slug}`} className="block rounded-lg px-3 py-2.5 font-medium hover:bg-cream">
                  {s.name}
                </Link>
              ))}
              <hr className="my-2 border-line" />
              {nav.slice(1).map((n) => (
                <Link key={n.href} href={n.href} className="block rounded-lg px-3 py-2.5 font-medium hover:bg-cream">
                  {n.label}
                </Link>
              ))}
              <Link href="/offert" className="btn-primary mt-2 w-full">
                Få gratis offert
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
