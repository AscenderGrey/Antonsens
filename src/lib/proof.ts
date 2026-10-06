// Real posts from Fred's Instagram (@antonsenshem) and Facebook (/antonsens).
// Captions are his own words (lightly shortened for some). Add new jobs at the top.
export type ProofPost = {
  id: string;
  client?: string;
  service: string;
  place: string;
  date: string; // ISO
  caption: string;
  images: { src: string; alt: string }[];
  source: "instagram" | "facebook";
  href: string;
  featured?: boolean;
};

export const proofPosts: ProofPost[] = [
  {
    id: "norderstrand",
    client: "Visby Strandby Norderstrand",
    service: "Fastighetsskötsel",
    place: "Visby",
    date: "2025-08-01", // FB post from end of season 2025
    caption:
      "Tack för i år Visby strandby – Norderstrands camping & stugor. Det har varit grymt att jobba hos er!",
    images: [
      { src: "/img/work/norderstrand-season.jpg", alt: "Visby Strandby Norderstrand camping med tält och husvagnar" },
      { src: "/img/work/norderstrand.jpg", alt: "Stugraden på Visby Strandby Norderstrand" },
    ],
    source: "facebook",
    href: "https://www.facebook.com/photo.php?fbid=1353414440118619",
    featured: true,
  },
  {
    id: "hopshed",
    client: "Hop Shed Brew Pub",
    service: "Gräsklippning",
    place: "Hästnäs, Visby",
    date: "2025-06-03",
    caption:
      "Klippning av Hop Shed Brew Pubs discgolfbana. En riktigt oas vid Hästnäs i Visby – kom hit och kasta lite vetja och ta en öl och en bit mat!",
    images: [{ src: "/img/work/discgolf-hopshed.jpg", alt: "Husqvarna åkgräsklippare bredvid discgolfkorg vid Hop Shed Brew Pub" }],
    source: "instagram",
    href: "https://www.instagram.com/antonsenshem/",
    featured: true,
  },
  {
    id: "visby-plantering",
    client: "Bostadsadress i Visby",
    service: "Trädgårdsskötsel",
    place: "Visby",
    date: "2025-07-07",
    caption:
      "Fått det stora förtroendet att sköta nyanlagda planteringar på en adress i Visby. Stort tack till Växthuset Linds för genomgång och tips!",
    images: [{ src: "/img/work/visby-plantering.jpg", alt: "Nyanlagd rabatt med perenner vid entré i Visby" }],
    source: "instagram",
    href: "https://www.instagram.com/antonsenshem/p/DL0ZT-uA1r_/",
    featured: true,
  },
  {
    id: "bord",
    service: "Renovering",
    place: "Gotland",
    date: "2026-05-06",
    caption: "Det blev lite skillnad 😊",
    images: [
      { src: "/img/work/table-before.jpg", alt: "Gråat träbord under slipning – före" },
      { src: "/img/work/table-after.jpg", alt: "Samma bord efter tungolja – efter" },
    ],
    source: "instagram",
    href: "https://www.instagram.com/antonsenshem/p/DX_4KA8FyMv/",
  },
  {
    id: "takfonster",
    service: "Fönsterputs",
    place: "Gotland",
    date: "2025-06-18",
    caption: "Fönsterputs med takfönster inblandade. Rätt utrustning gör jobbet – även när fönstren sitter högt.",
    images: [{ src: "/img/work/fonsterputs-velux.jpg", alt: "Stege under takfönster i ljust vardagsrum" }],
    source: "instagram",
    href: "https://www.instagram.com/antonsenshem/p/DLCTVtiI6Da/",
  },
  {
    id: "ekoiso",
    client: "Tillsammans med Ekoiso Gotland",
    service: "Isolering",
    place: "Visby",
    date: "2026-02-17",
    caption: "Krispig morgon i Visby tillsammans med Ekoiso Gotland. Varmt inne!",
    images: [{ src: "/img/work/ekoiso-visby.jpg", alt: "Säckar med Isocell-isolering inför isoleringsjobb i Visby" }],
    source: "instagram",
    href: "https://www.instagram.com/antonsenshem/p/DU2_DzmCIKL/",
  },
  {
    id: "brunnslock",
    service: "Snickeri",
    place: "Gotland",
    date: "2026-04-20",
    caption: "Byggt ett brunnslock av enklare sort till kund. Blev rätt nöjd.",
    images: [{ src: "/img/work/brunnslock.jpg", alt: "Nybyggt brunnslock i trä med takpapp på gräsmatta" }],
    source: "instagram",
    href: "https://www.instagram.com/antonsenshem/p/DXWR1eagkiX/",
  },
  {
    id: "service",
    service: "Maskinvård",
    place: "Roma",
    date: "2026-08-04",
    caption:
      "En gräsklippare kostar som en mindre bil – och kräver service som en. Idag har jag över 40 smörj- och kontrollpunkter att gå igenom. Det är därför klippningen blir jämn varje gång.",
    images: [{ src: "/img/work/mower-service.jpg", alt: "Klippaggregat på Husqvarna P525D under service" }],
    source: "instagram",
    href: "https://www.instagram.com/antonsenshem/p/Dbn-FA7lwua/",
  },
];

/** Clients / partners shown in the "worked with" strip. Get permission before adding logo files. */
export const clientNames = [
  { name: "Visby Strandby Norderstrand", kind: "Kund" },
  { name: "Hop Shed Brew Pub", kind: "Kund" },
  { name: "Ekoiso Gotland", kind: "Samarbetspartner" },
  { name: "Växthuset Linds", kind: "Samarbetspartner" },
  { name: "Husqvarna", kind: "Utrustning" },
];
