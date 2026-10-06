import { NextResponse } from "next/server";

/**
 * Receives quote requests and forwards them to GoHighLevel.
 *
 * Setup in GHL: Automation → Workflow → trigger "Inbound Webhook" → copy URL into
 * GHL_WEBHOOK_URL. Map the fields below to contact fields, then add actions
 * (e.g. "Send SMS" confirmation to the lead + internal notification to Fred).
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success, drop silently.
  if (typeof body.company === "string" && body.company.trim()) {
    return NextResponse.json({ ok: true });
  }

  const str = (v: unknown, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const name = str(body.name, 120);
  const phoneRaw = str(body.phone, 40);
  const digits = phoneRaw.replace(/\D/g, "");

  if (name.length < 2 || digits.length < 8) {
    return NextResponse.json({ ok: false, error: "missing_contact" }, { status: 422 });
  }

  // Normalise Swedish mobile numbers to E.164 so GHL can SMS them.
  const phone = digits.startsWith("46") ? `+${digits}` : digits.startsWith("0") ? `+46${digits.slice(1)}` : phoneRaw;
  const [firstName, ...rest] = name.split(/\s+/);
  const services = Array.isArray(body.services) ? body.services.map((s) => str(s, 60)).filter(Boolean) : [];

  const payload = {
    first_name: firstName,
    last_name: rest.join(" "),
    full_name: name,
    phone,
    email: str(body.email, 200),
    services: services.join(", "),
    area: str(body.area, 80),
    property_type: str(body.propertyType, 80),
    timing: str(body.timing, 80),
    message: str(body.message, 2000),
    rut_rot: body.deduction ? "Ja" : "Nej",
    source: str(body.source, 60) || "website",
    page: str(body.page, 200),
    referrer: str(body.referrer, 300),
    utm: typeof body.utm === "object" && body.utm ? body.utm : {},
    tags: ["webb-offert", ...services.map((s) => `tjänst:${s.toLowerCase()}`)],
    submitted_at: new Date().toISOString(),
  };

  const webhook = process.env.GHL_WEBHOOK_URL;
  if (!webhook) {
    console.warn("[quote] GHL_WEBHOOK_URL not set — lead not forwarded:", payload);
    // Never silently lose a real lead on the live site (previews may run without GHL).
    if (process.env.VERCEL_ENV === "production") {
      return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
    }
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`GHL responded ${res.status}`);
  } catch (err) {
    console.error("[quote] forward failed", err);
    return NextResponse.json({ ok: false, error: "forward_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, forwarded: true });
}
