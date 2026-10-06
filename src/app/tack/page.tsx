import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { CheckIcon, FacebookIcon, InstagramIcon, PhoneIcon } from "@/components/Icons";

// Conversion page — fire ad/analytics conversion events here. Kept out of the index.
export const metadata: Metadata = {
  title: "Tack för din förfrågan",
  robots: { index: false, follow: false },
};

export default function TackPage() {
  return (
    <section className="container-x max-w-2xl py-16 text-center md:py-24">
      <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-lime">
        <CheckIcon className="size-8 text-forest-950" />
      </span>
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-forest-950 sm:text-4xl">Tack! Din förfrågan är skickad.</h1>
      <p className="mt-4 text-lg text-muted">
        Fred har fått din förfrågan och hör av sig personligen. Du får även ett sms med en bekräftelse.
      </p>

      <div className="mx-auto mt-10 flex max-w-md items-center gap-4 rounded-2xl bg-white p-5 text-left ring-1 ring-line">
        <Image src="/img/brand/fred.jpg" alt="Fred Antonsen" width={64} height={64} className="size-14 rounded-full object-cover object-top" />
        <div>
          <p className="font-bold text-forest-950">Bråttom?</p>
          <a href={site.phoneHref} data-cta="call-thanks" className="inline-flex items-center gap-1.5 font-bold text-forest">
            <PhoneIcon className="size-5" /> Ring {site.phoneDisplay}
          </a>
        </div>
      </div>

      <p className="mt-10 text-sm font-semibold text-forest-950">Se fler jobb medan du väntar</p>
      <div className="mt-3 flex justify-center gap-3">
        <a href={site.social.instagram} target="_blank" rel="noopener" className="btn-ghost !py-2.5 text-sm"><InstagramIcon className="size-4" /> Instagram</a>
        <a href={site.social.facebook} target="_blank" rel="noopener" className="btn-ghost !py-2.5 text-sm"><FacebookIcon className="size-4" /> Facebook</a>
      </div>
      <Link href="/" className="mt-8 inline-block text-sm font-semibold text-forest underline">Tillbaka till startsidan</Link>
    </section>
  );
}
