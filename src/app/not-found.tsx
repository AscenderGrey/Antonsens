import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="container-x max-w-xl py-24 text-center">
      <h1 className="text-3xl font-extrabold text-forest-950">Sidan finns inte</h1>
      <p className="mt-3 text-muted">Men Fred finns – ring {site.phoneDisplay} eller gå tillbaka till startsidan.</p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/" className="btn-ghost">Startsidan</Link>
        <Link href="/offert" className="btn-primary">Få offert</Link>
      </div>
    </section>
  );
}
