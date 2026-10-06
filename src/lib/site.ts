// Single source of truth for business facts (NAP). Google compares these
// against the Google Business Profile — keep them identical everywhere.
export const site = {
  name: "Antonsens Trädgård & Fastighet",
  shortName: "Antonsens",
  owner: "Fred Antonsen",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://antonsens.se",
  phoneDisplay: "070-509 49 59",
  phoneHref: "tel:+46705094959",
  smsHref: "sms:+46705094959",
  email: "fred.antonsen@telia.com",
  address: {
    street: "Sockerparken 3",
    locality: "Romakloster",
    region: "Gotlands län",
    country: "SE",
  },
  // Roma, Gotland (approximate centre point used for map/schema)
  geo: { lat: 57.5065, lng: 18.4625 },
  // TODO: confirm with Fred — used to render "X år på Gotland"
  foundedYear: 2021,
  social: {
    facebook: "https://www.facebook.com/antonsens/",
    instagram: "https://www.instagram.com/antonsenshem/",
  },
  tagline: "Trädgård, städ och fastighetsskötsel på hela Gotland",
  description:
    "Fred Antonsen hjälper privatpersoner, fritidshusägare och företag på Gotland med gräsklippning, trädgårdsskötsel, städning, fönsterputs, fastighetsskötsel, tillsyn av fritidshus och hantverk. Utgår från Roma – jobbar på hela ön. RUT & ROT.",
} as const;

export const yearsInBusiness = () => new Date().getFullYear() - site.foundedYear;
