import Image from "next/image";
import { QuoteForm } from "@/components/QuoteForm";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { CheckIcon, PhoneIcon } from "@/components/Icons";
import {
  AreasServed, ClientStrip, FaqList, Hero, HowItWorks, MeetFred, ProofWall,
  Seasons, ServiceGrid, TillsynFeature, WhatWhereWhen, homeFaqs,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <WhatWhereWhen />
      <ServiceGrid />
      <ProofWall />
      <ClientStrip />
      <MeetFred />
      <TillsynFeature />
      <Seasons />
      <HowItWorks />
      <AreasServed />

      <section id="offert" className="bg-sand/60 py-16 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">Gratis offert</p>
            <h2 className="h2 mt-2">Berätta vad du behöver – Fred återkommer personligen</h2>
            <p className="lead mt-4">Tar under en minut. Ingen förpliktelse, inga callcenter.</p>
            <ul className="mt-6 space-y-3">
              {["Kostnadsfri offert", "RUT & ROT dras direkt på fakturan", "Privatpersoner och företag", "Hela Gotland"].map((t) => (
                <li key={t} className="flex items-center gap-2 font-medium"><CheckIcon className="size-5 text-forest-700" /> {t}</li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-line">
              <Image src="/img/brand/fred.jpg" alt="Fred Antonsen" width={64} height={64} className="size-14 rounded-full object-cover object-top" />
              <div>
                <p className="font-bold text-forest-950">Hellre ringa?</p>
                <a href={site.phoneHref} data-cta="call-offert-section" className="inline-flex items-center gap-1.5 text-lg font-bold text-forest">
                  <PhoneIcon className="size-5" /> {site.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
          <QuoteForm source="home" />
        </div>
      </section>

      <FaqList faqs={homeFaqs} />
    </>
  );
}
