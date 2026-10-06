import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { localBusinessSchema } from "@/lib/schema";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { JsonLd } from "@/components/JsonLd";

const figtree = Figtree({ variable: "--font-figtree", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Trädgård, städ & fastighetsskötsel på Gotland | Antonsens",
    template: "%s | Antonsens Gotland",
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: site.name,
    url: site.url,
  },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#145324",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv" className={figtree.variable}>
      <body className="min-h-dvh pb-20 md:pb-0">
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCtaBar />
        {/* GoHighLevel: paste the tracking/chat widget <Script> here when ready */}
      </body>
    </html>
  );
}
