"use client";

import { useEffect, useId, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { quoteServiceOptions } from "@/lib/services";
import { quoteAreaOptions } from "@/lib/areas";
import { site } from "@/lib/site";
import { ArrowIcon, CheckIcon, PhoneIcon, serviceIcons } from "./Icons";

const propertyTypes = ["Villa / hus", "Fritidshus", "Lägenhet", "Företag", "BRF / förening"];
const timings = [
  "Så snart som möjligt",
  "Inom en månad",
  "Återkommande / hela säsongen",
  "Vill bara veta priset",
];

const steps = ["Vad", "Var & när", "Kontakt"];

type Props = { initialService?: string; source?: string };

export function QuoteForm({ initialService, source = "website" }: Props) {
  const router = useRouter();
  const uid = useId();
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string[]>(initialService ? [initialService] : []);
  const [area, setArea] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [timing, setTiming] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [deduction, setDeduction] = useState(true);
  const [company, setCompany] = useState(""); // honeypot
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Pre-select a service from ?tjanst=… (links from service pages / hero chips)
  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("tjanst");
    if (t && quoteServiceOptions.some((o) => o.key === t)) {
      setSelected((s) => (s.includes(t) ? s : [...s, t]));
    }
  }, []);

  const toggle = (key: string) =>
    setSelected((s) => (s.includes(key) ? s.filter((k) => k !== key) : [...s, key]));

  const phoneOk = phone.replace(/\D/g, "").length >= 8;
  const canNext = [selected.length > 0, !!area && !!timing, name.trim().length > 1 && phoneOk][step];

  function next() {
    setError(null);
    if (!canNext) {
      setError(
        step === 0
          ? "Välj minst en tjänst."
          : step === 1
            ? "Välj ort och när du behöver hjälp."
            : "Fyll i namn och ett telefonnummer så Fred kan nå dig.",
      );
      return;
    }
    if (step < 2) setStep(step + 1);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (step < 2) return next();
    if (!canNext) return next();
    setSubmitting(true);
    setError(null);
    const params = new URLSearchParams(window.location.search);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          services: selected.map((k) => quoteServiceOptions.find((o) => o.key === k)?.label ?? k),
          area,
          propertyType,
          timing,
          name,
          phone,
          email,
          message,
          deduction,
          company,
          source,
          page: window.location.pathname,
          referrer: document.referrer,
          utm: Object.fromEntries(
            ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"]
              .map((k) => [k, params.get(k)])
              .filter(([, v]) => v),
          ),
        }),
      });
      if (!res.ok) throw new Error();
      (window as unknown as { dataLayer?: object[] }).dataLayer?.push({ event: "quote_submitted", services: selected });
      router.push("/tack");
    } catch {
      setError(`Något gick fel. Ring eller sms:a Fred direkt på ${site.phoneDisplay} så löser vi det.`);
      setSubmitting(false);
    }
  }

  const chip = (active: boolean) =>
    `flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-left font-medium transition ${
      active ? "border-forest bg-lime-100 text-forest-950" : "border-line bg-white hover:border-forest/40"
    }`;

  return (
    <form onSubmit={submit} noValidate className="rounded-3xl bg-white p-5 shadow-xl ring-1 ring-line sm:p-8">
      {/* progress */}
      <ol className="mb-6 grid grid-cols-3 gap-2" aria-label="Steg">
        {steps.map((label, i) => (
          <li key={label} className="text-xs font-semibold sm:text-sm">
            <div className={`mb-1.5 h-1.5 rounded-full ${i <= step ? "bg-lime" : "bg-line"}`} />
            <span className={i === step ? "text-forest-950" : "text-muted"}>
              {i + 1}. {label}
            </span>
          </li>
        ))}
      </ol>

      {step === 0 && (
        <fieldset>
          <legend className="text-xl font-bold text-forest-950">Vad behöver du hjälp med?</legend>
          <p className="mt-1 text-sm text-muted">Välj en eller flera.</p>
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {quoteServiceOptions.map((o) => {
              const Icon = serviceIcons[o.icon];
              const active = selected.includes(o.key);
              return (
                <button type="button" key={o.key} onClick={() => toggle(o.key)} aria-pressed={active} className={chip(active)}>
                  <Icon className={`size-5 shrink-0 ${active ? "text-forest" : "text-forest-700"}`} />
                  <span className="flex-1">{o.label}</span>
                  {active && <CheckIcon className="size-5 text-forest" />}
                </button>
              );
            })}
          </div>
        </fieldset>
      )}

      {step === 1 && (
        <div className="space-y-6">
          <fieldset>
            <legend className="text-xl font-bold text-forest-950">Var på Gotland?</legend>
            <label htmlFor={`${uid}-area`} className="sr-only">Ort</label>
            <select
              id={`${uid}-area`}
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="mt-3 w-full rounded-xl border-2 border-line bg-white px-4 py-3 font-medium focus:border-forest focus:outline-none"
            >
              <option value="">Välj ort…</option>
              {quoteAreaOptions.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>
          </fieldset>
          <fieldset>
            <legend className="font-semibold text-forest-950">Typ av fastighet</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {propertyTypes.map((p) => (
                <button type="button" key={p} onClick={() => setPropertyType(p)} aria-pressed={propertyType === p}
                  className={`rounded-full border-2 px-4 py-2 text-sm font-medium ${propertyType === p ? "border-forest bg-lime-100" : "border-line bg-white hover:border-forest/40"}`}>
                  {p}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="font-semibold text-forest-950">När behöver du hjälp?</legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {timings.map((t) => (
                <button type="button" key={t} onClick={() => setTiming(t)} aria-pressed={timing === t} className={chip(timing === t)}>
                  {t}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      )}

      {step === 2 && (
        <fieldset className="space-y-4">
          <legend className="text-xl font-bold text-forest-950">Vart ska Fred skicka offerten?</legend>
          <p className="!mt-1 text-sm text-muted">Du får svar personligen – inga säljsamtal från callcenter.</p>
          <Field id={`${uid}-name`} label="Namn" required>
            <input id={`${uid}-name`} autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className="input" />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id={`${uid}-phone`} label="Telefon" required>
              <input id={`${uid}-phone`} type="tel" inputMode="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="input" placeholder="07X-XXX XX XX" />
            </Field>
            <Field id={`${uid}-email`} label="E-post (valfritt)">
              <input id={`${uid}-email`} type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" />
            </Field>
          </div>
          <Field id={`${uid}-msg`} label="Beskriv jobbet (valfritt)">
            <textarea id={`${uid}-msg`} rows={3} value={message} onChange={(e) => setMessage(e.target.value)} className="input resize-y"
              placeholder="T.ex. ca 1500 kvm gräs, klippning varannan vecka maj–sept." />
          </Field>
          <label className="flex items-start gap-3 rounded-xl bg-cream p-3 text-sm">
            <input type="checkbox" checked={deduction} onChange={(e) => setDeduction(e.target.checked)} className="mt-0.5 size-4 accent-forest" />
            <span>Jag vill använda <strong>RUT- eller ROT-avdrag</strong> (privatperson)</span>
          </label>
          {/* honeypot */}
          <div aria-hidden className="absolute -left-[9999px]">
            <label>Företag<input tabIndex={-1} autoComplete="off" value={company} onChange={(e) => setCompany(e.target.value)} /></label>
          </div>
          <p className="text-xs text-muted">
            Genom att skicka godkänner du att vi kontaktar dig via telefon, sms eller e-post om din förfrågan. Läs vår{" "}
            <Link href="/integritetspolicy" className="underline">integritetspolicy</Link>.
          </p>
        </fieldset>
      )}

      {error && (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
          {error}
        </p>
      )}

      <div className="mt-6 flex items-center gap-3">
        {step > 0 && (
          <button type="button" onClick={() => { setError(null); setStep(step - 1); }} className="btn-ghost !px-5">
            Tillbaka
          </button>
        )}
        {step < 2 ? (
          <button type="button" onClick={next} className="btn-dark flex-1">
            Nästa <ArrowIcon className="size-5" />
          </button>
        ) : (
          <button type="submit" disabled={submitting} data-cta="quote-submit" className="btn-primary flex-1 disabled:opacity-60">
            {submitting ? "Skickar…" : "Skicka – få gratis offert"}
          </button>
        )}
      </div>

      <p className="mt-5 flex items-center justify-center gap-2 border-t border-line pt-4 text-sm text-muted">
        Hellre prata direkt?
        <a href={site.phoneHref} data-cta="call-form" className="inline-flex items-center gap-1 font-semibold text-forest">
          <PhoneIcon className="size-4" /> {site.phoneDisplay}
        </a>
      </p>
    </form>
  );
}

function Field({ id, label, required, children }: { id: string; label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-forest-950">
        {label} {required && <span className="text-red-700">*</span>}
      </label>
      {children}
    </div>
  );
}
