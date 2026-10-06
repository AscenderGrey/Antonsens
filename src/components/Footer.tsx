import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-forest-950 text-white/80">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-white">{site.name}</p>
          <p className="mt-3 text-sm leading-relaxed">{site.tagline}. Privatpersoner och företag – RUT & ROT.</p>
          {/* NAP block — must match Google Business Profile exactly */}
          <address className="mt-5 space-y-2 text-sm not-italic">
            <p className="flex items-start gap-2">
              <PinIcon className="mt-0.5 size-4 shrink-0 text-lime" />
              {site.address.street}, {site.address.locality}, Gotland
            </p>
            <a href={site.phoneHref} className="flex items-center gap-2 hover:text-white">
              <PhoneIcon className="size-4 text-lime" /> {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white">
              <MailIcon className="size-4 text-lime" /> {site.email}
            </a>
          </address>
          <div className="mt-5 flex gap-3">
            <a href={site.social.facebook} aria-label="Antonsens på Facebook" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <FacebookIcon className="size-5" />
            </a>
            <a href={site.social.instagram} aria-label="Antonsens på Instagram" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <InstagramIcon className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Tjänster</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/tjanster/${s.slug}`} className="hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Områden på Gotland</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link href={`/omraden/${a.slug}`} className="hover:text-white">
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Kom igång</p>
          <p className="mt-3 text-sm">Ring, sms:a eller skicka en förfrågan – du pratar alltid direkt med Fred.</p>
          <Link href="/offert" className="btn-primary mt-4">
            Få gratis offert
          </Link>
          <ul className="mt-5 space-y-2 text-sm">
            <li><Link href="/om-fred" className="hover:text-white">Om Fred</Link></li>
            <li><Link href="/integritetspolicy" className="hover:text-white">Integritetspolicy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-x py-5 text-xs text-white/60">
          © {new Date().getFullYear()} {site.name} · {site.owner}
        </p>
      </div>
    </footer>
  );
}
