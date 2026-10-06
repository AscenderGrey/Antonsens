import { site } from "./site";
import { areas } from "./areas";
import { services, type Faq, type Service } from "./services";

const businessId = `${site.url}/#business`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": businessId,
    name: site.name,
    alternateName: site.shortName,
    description: site.description,
    url: site.url,
    telephone: "+46705094959",
    email: site.email,
    image: `${site.url}/img/work/mower-lavender.jpg`,
    logo: `${site.url}/img/brand/logo.png`,
    founder: { "@type": "Person", name: site.owner },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Gotland" },
      ...areas.map((a) => ({ "@type": "Place", name: `${a.name}, Gotland` })),
    ],
    priceRange: "$$",
    sameAs: [site.social.facebook, site.social.instagram],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tjänster",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: `${site.url}/tjanster/${s.slug}` },
      })),
    },
  };
}

export function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    serviceType: s.name,
    description: s.metaDescription,
    url: `${site.url}/tjanster/${s.slug}`,
    provider: { "@id": businessId },
    areaServed: { "@type": "AdministrativeArea", name: "Gotland" },
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}
