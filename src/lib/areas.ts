export type Area = {
  slug: string;
  name: string;
  /** approx. driving distance from Roma */
  distanceKm: number;
  intro: string;
  highlights: string[];
  nearby: string[];
};

// Each page gets unique, genuinely local copy — avoid thin "city-swap" pages.
export const areas: Area[] = [
  {
    slug: "visby",
    name: "Visby",
    distanceKm: 20,
    intro:
      "Visby är där många av mina uppdrag finns – från villaträdgårdar och nyanlagda planteringar till campingar och fritidsanläggningar längs Norderstrand och Hästnäs. Jag är i stan flera gånger i veckan.",
    highlights: [
      "Skötsel av planteringar och trädgårdar i Visby",
      "Utemiljö åt Visby Strandby Norderstrand",
      "Gräsklippning av discgolfbanan vid Hästnäs",
      "Fönsterputs och städning i lägenheter och villor",
    ],
    nearby: ["Innerstaden", "Norderstrand", "Hästnäs", "Gråbo", "Terra Nova", "Snäckgärdsbaden", "Västerhejde"],
  },
  {
    slug: "roma",
    name: "Roma",
    distanceKm: 0,
    intro:
      "Roma är hemma. Härifrån utgår jag varje dag, och för grannar i Roma, Romakloster och Björke är det sällan långt till nästa uppdrag – oftast kan jag komma ut samma vecka.",
    highlights: [
      "Kortast restid – ofta hjälp samma vecka",
      "Gräsklippning och trädgård för villor och gårdar",
      "Fastighetsskötsel och fix för grannar och företag",
    ],
    nearby: ["Romakloster", "Björke", "Dalhem", "Vänge", "Follingbo", "Halla"],
  },
  {
    slug: "tofta",
    name: "Tofta",
    distanceKm: 25,
    intro:
      "Tofta och västkusten är fullt av fritidshus som står tomma stora delar av året. Här är tillsyn, gräsklippning och städning inför säsongen de vanligaste uppdragen.",
    highlights: [
      "Tillsyn av fritidshus med protokoll och foto",
      "Städning och vädring inför er ankomst",
      "Gräsklippning hela säsongen medan ni är på fastlandet",
    ],
    nearby: ["Tofta strand", "Gnisvärd", "Västergarn", "Eksta", "Klintehamn"],
  },
  {
    slug: "ljugarn",
    name: "Ljugarn",
    distanceKm: 35,
    intro:
      "Ljugarn och östra Gotland har många sommarhus nära havet. Salt luft och vind sliter på hus och trädgård – regelbunden tillsyn och skötsel gör att allt är i ordning när ni kommer.",
    highlights: [
      "Fritidshustillsyn och säsongsöppning",
      "Fönsterputs och storstädning av sommarhus",
      "Trädgårdsskötsel och röjning",
    ],
    nearby: ["Ardre", "Alva", "Gammelgarn", "Östergarn", "Kräklingbo"],
  },
  {
    slug: "slite",
    name: "Slite",
    distanceKm: 35,
    intro:
      "I Slite och på norra östkusten hjälper jag både villaägare och företag med gräsklippning, fastighetsskötsel och hantverksjobb.",
    highlights: [
      "Gräsklippning och trädgårdsskötsel",
      "Fastighetsskötsel för företag och föreningar",
      "Reparationer och fixartjänster",
    ],
    nearby: ["Boge", "Othem", "Hangvar", "Lärbro", "Kappelshamn"],
  },
  {
    slug: "hemse",
    name: "Hemse",
    distanceKm: 45,
    intro:
      "Södra Gotland – Hemse, Burgsvik och kusten runt – är en del av mitt område. Jag planerar gärna in flera uppdrag i söder samma dag så att resan blir effektiv.",
    highlights: [
      "Trädgårdsskötsel och säsongsavtal",
      "Tillsyn av fritidshus på sydön",
      "Hantverk och renovering",
    ],
    nearby: ["Burgsvik", "Havdhem", "Ronehamn", "Närs", "Fide"],
  },
  {
    slug: "klintehamn",
    name: "Klintehamn",
    distanceKm: 30,
    intro:
      "Klintehamn och mellersta västkusten ligger nära Roma. Här hjälper jag villaägare och fritidshusägare med det mesta som rör hus och trädgård.",
    highlights: [
      "Gräsklippning och häckklippning",
      "Städning och fönsterputs",
      "Tillsyn och förberedelser inför ankomst",
    ],
    nearby: ["Fröjel", "Sanda", "Mästerby", "Hejde", "Västergarn"],
  },
  {
    slug: "faro-farosund",
    name: "Fårö & Fårösund",
    distanceKm: 75,
    intro:
      "Fårö är sommarhusens ö. För dig som har hus på Fårö eller i Fårösund erbjuder jag tillsyn, städning och trädgård med planerade besök – så att huset är klart när färjan lägger till.",
    highlights: [
      "Planerad tillsyn av sommarhus",
      "Städning inför och efter säsongen",
      "Gräsklippning och röjning",
    ],
    nearby: ["Fårösund", "Bunge", "Fleringe", "Rute", "Lärbro"],
  },
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);

export const quoteAreaOptions = [...areas.map((a) => a.name), "Annan ort på Gotland"];
