export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  /** value used by the quote form / GHL */
  quoteKey: string;
  name: string;
  /** H1 + <title>, keyword + place */
  title: string;
  metaDescription: string;
  short: string;
  intro: string;
  includes: string[];
  forWho: string[];
  deduction: "RUT" | "ROT" | "RUT & ROT" | null;
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string }[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "tradgardsskotsel",
    quoteKey: "tradgard",
    name: "Trädgård & gräsklippning",
    title: "Trädgårdsskötsel & gräsklippning på Gotland",
    metaDescription:
      "Gräsklippning, häckklippning, rabatter och trädgårdsskötsel på hela Gotland. Stora ytor med åkgräsklippare. Säsongsavtal eller enstaka jobb – RUT-avdrag för privatpersoner.",
    short: "Gräsklippning, häckar, rabatter, lövkrattning och säsongsavtal.",
    intro:
      "Från villatomten i Visby till campingen och discgolfbanan – jag klipper, rensar, planterar och håller efter så att du slipper. Med en Husqvarna P525D åkgräsklippare tar jag även stora ytor snabbt och snyggt, och maskinen servas noggrant så att resultatet blir jämnt varje gång.",
    includes: [
      "Gräsklippning – enstaka tillfällen eller hela säsongen",
      "Klippning av stora ytor, parker, campingar och fritidsanläggningar",
      "Häckklippning och beskärning av buskar",
      "Ogräsrensning och skötsel av rabatter och planteringar",
      "Vårstädning och höststädning av trädgården",
      "Lövkrattning och bortforsling av trädgårdsavfall",
    ],
    forWho: ["Villaägare", "Fritidshusägare", "Företag & anläggningar", "BRF"],
    deduction: "RUT",
    image: "/img/work/mower-lavender.jpg",
    imageAlt: "Husqvarna åkgräsklippare på nyklippt gräsmatta vid lavendelrabatt på Gotland",
    gallery: [
      { src: "/img/work/discgolf-hopshed.jpg", alt: "Gräsklippning av discgolfbana vid Hästnäs, Visby" },
      { src: "/img/work/visby-plantering.jpg", alt: "Nyanlagd plantering som sköts i Visby" },
      { src: "/img/work/lawn-park.jpg", alt: "Nyklippt parkliknande gräsyta på Gotland" },
    ],
    faqs: [
      {
        q: "Hur ofta behöver gräset klippas?",
        a: "Under högsäsong (maj–juli) brukar en gång i veckan ge bäst resultat. Längre fram på sommaren räcker det ofta varannan vecka. Vi lägger upp ett schema som passar din tomt.",
      },
      {
        q: "Kan jag få gräsklippning hela sommaren medan jag är på fastlandet?",
        a: "Ja. Många fritidshusägare har ett säsongsavtal – gräset klipps löpande och du får gärna en bild när det är gjort.",
      },
      {
        q: "Gäller RUT-avdrag för trädgårdsarbete?",
        a: "Ja, gräsklippning, häckklippning, ogräsrensning och liknande trädgårdsarbete ger RUT-avdrag för privatpersoner. Avdraget dras direkt på fakturan.",
      },
    ],
  },
  {
    slug: "stadning-fonsterputs",
    quoteKey: "stad",
    name: "Städning & fönsterputs",
    title: "Städning & fönsterputs på Gotland",
    metaDescription:
      "Hemstäd, storstäd, flyttstäd, städning av fritidshus och fönsterputs (även takfönster) på hela Gotland. RUT-avdrag – du betalar halva arbetskostnaden.",
    short: "Hemstäd, storstäd, fritidshus, röjning och fönsterputs – även takfönster.",
    intro:
      "Rent hemma, rent i stugan och fönster du faktiskt ser igenom. Jag tar hand om allt från storstädning och flyttstäd till fönsterputs i besvärliga takfönster – med rätt utrustning och stege för jobbet.",
    includes: [
      "Hemstädning, storstädning och flyttstädning",
      "Städning av fritidshus inför och efter säsongen",
      "Fönsterputs – även takfönster och svåråtkomliga fönster",
      "Röjning av vindar, förråd och uthus",
      "Städning av lokaler och trapphus",
    ],
    forWho: ["Privatpersoner", "Fritidshusägare", "Uthyrare", "Företag"],
    deduction: "RUT",
    image: "/img/work/fonsterputs-velux.jpg",
    imageAlt: "Fönsterputs av takfönster i vardagsrum på Gotland",
    gallery: [
      { src: "/img/work/stad-tips.jpg", alt: "Golvsopning med oljespån för att binda damm" },
      { src: "/img/work/fonsterputs-velux.jpg", alt: "Putsning av takfönster med stege" },
    ],
    faqs: [
      {
        q: "Putsar du takfönster?",
        a: "Ja. Takfönster och högt placerade fönster är en vanlig förfrågan, och jag har utrustningen som krävs.",
      },
      {
        q: "Kan stugan städas innan vi kommer till Gotland?",
        a: "Absolut. Säg vilket datum ni kommer så är huset städat, vädrat och klart – och vill ni kan jag även fixa trädgården samma vecka.",
      },
      {
        q: "Hur fungerar RUT-avdraget för städning?",
        a: "Som privatperson betalar du bara halva arbetskostnaden. Jag drar av RUT direkt på fakturan och sköter ansökan hos Skatteverket.",
      },
    ],
  },
  {
    slug: "fastighetsskotsel",
    quoteKey: "fastighet",
    name: "Fastighetsskötsel & vaktmästeri",
    title: "Fastighetsskötsel & vaktmästeri på Gotland",
    metaDescription:
      "Fastighetsskötsel och vaktmästartjänster för företag, BRF, campingar och stugbyar på Gotland. En kontaktperson, säsongsavtal och snabb hjälp när något händer.",
    short: "Löpande skötsel för företag, BRF, campingar och stugbyar.",
    intro:
      "Ni behöver någon som ser vad som behöver göras – och gör det. Jag har bland annat skött utemiljön åt Visby Strandby Norderstrand under säsongen. En person, ett nummer, och jobbet blir gjort.",
    includes: [
      "Löpande skötsel av utemiljö och grönytor",
      "Vaktmästartjänster och mindre reparationer",
      "Säsongsöppning och säsongsstängning",
      "Snöskottning och halkbekämpning",
      "Kontroll, protokoll och fotodokumentation",
      "Samordning med andra hantverkare vid behov",
    ],
    forWho: ["Företag", "BRF", "Campingar & stugbyar", "Restauranger"],
    deduction: null,
    image: "/img/work/norderstrand.jpg",
    imageAlt: "Stugor på Visby Strandby Norderstrand där Antonsens skött utemiljön",
    gallery: [
      { src: "/img/work/norderstrand-season.jpg", alt: "Visby Strandby Norderstrand camping & stugor" },
      { src: "/img/work/discgolf-hopshed.jpg", alt: "Skötsel av discgolfbana åt Hop Shed Brew Pub" },
    ],
    faqs: [
      {
        q: "Jobbar du med företag och föreningar?",
        a: "Ja, både privatpersoner och företag över hela Gotland. Det går att teckna säsongsavtal eller ringa in vid behov.",
      },
      {
        q: "Vad händer om något akut händer?",
        a: "Ring direkt. Som lokal på ön kan jag ofta komma ut snabbt och göra en första åtgärd, och vid större jobb har jag ett brett nätverk av hantverkare.",
      },
    ],
  },
  {
    slug: "tillsyn-fritidshus",
    quoteKey: "tillsyn",
    name: "Tillsyn av fritidshus",
    title: "Tillsyn av fritidshus på Gotland – din egen hustomte",
    metaDescription:
      "Fastighetstillsyn med fast pris för fritidshus på Gotland. Kontinuerlig tillsyn enligt protokoll med foto, snöskottning, städning och allt klart inför er ankomst.",
    short: "Fast pris, protokoll med foto och huset klart när ni kommer.",
    intro:
      "Äger du ett hus på Gotland men bor på fastlandet? Tänk att veta att huset blir omhändertaget även när du inte är på plats – att någon ser efter det, åtgärdar det akuta och fixar det som gör ankomsten enkel. Din egen hustomte.",
    includes: [
      "Kontinuerlig tillsyn enligt ett fastställt protokoll",
      "Protokoll och fotografering efter varje besök",
      "Trädgårdsskötsel och gräsklippning",
      "Snöskottning",
      "Städning inför och efter vistelse",
      "Reparationer, renoveringar och förbättringar",
      "Alla tänkbara förberedelser inför er ankomst",
    ],
    forWho: ["Fritidshusägare", "Uthyrare", "Dödsbon", "Företag med fastigheter"],
    deduction: "RUT & ROT",
    image: "/img/work/lawn-park.jpg",
    imageAlt: "Välskött tomt med gräsmatta och träd på Gotland",
    gallery: [],
    faqs: [
      {
        q: "Vad kostar tillsyn av fritidshus?",
        a: "Tillsynen bygger på ett standardiserat koncept med fast pris. Det finns olika paket med olika innehåll – och du får rabatt på tilläggstjänster som städning eller trädgård.",
      },
      {
        q: "Hur vet jag att tillsynen faktiskt görs?",
        a: "Varje besök följer ett protokoll och dokumenteras med foton, så du ser hur huset ser ut även när du är på andra sidan Östersjön.",
      },
      {
        q: "Kan du förbereda huset inför vår ankomst?",
        a: "Ja – vädring, städning, klippt gräs, påslagen värme och vatten. Säg vad ni behöver så gör vi en plan.",
      },
    ],
  },
  {
    slug: "hantverk-reparationer",
    quoteKey: "hantverk",
    name: "Hantverk & renovering",
    title: "Hantverkstjänster & renovering på Gotland",
    metaDescription:
      "Snickeri, reparationer, renoveringar och fixartjänster på Gotland. Brett kontaktnät med andra hantverkare – en helhetslösning. ROT-avdrag för privatpersoner.",
    short: "Snickeri, reparationer, renovering och fixartjänster med ROT.",
    intro:
      "Brunnslocket som behöver bytas, trädäcket som behöver olja eller listen som släppt. Jag fixar det som ska fixas, och vid större projekt samarbetar jag med andra hantverkare på Gotland – så att du får en helhetslösning med en kontaktperson.",
    includes: [
      "Snickeri och mindre byggjobb",
      "Reparationer inne och ute",
      "Renovering och oljning av trä och möbler",
      "Renoveringar och förbättringsåtgärder",
      "Isoleringsjobb tillsammans med samarbetspartners",
      "Byte av delar, montering och allmänt fix",
    ],
    forWho: ["Villaägare", "Fritidshusägare", "Företag", "BRF"],
    deduction: "ROT",
    image: "/img/work/table-after.jpg",
    imageAlt: "Renoverat och oljat träbord efter slipning",
    gallery: [
      { src: "/img/work/table-before.jpg", alt: "Träbord under slipning – före" },
      { src: "/img/work/table-after.jpg", alt: "Träbord efter oljning – efter" },
      { src: "/img/work/brunnslock.jpg", alt: "Nybyggt brunnslock av trä med takpapp" },
      { src: "/img/work/ekoiso-visby.jpg", alt: "Isolering med Isocell tillsammans med Ekoiso Gotland i Visby" },
    ],
    faqs: [
      {
        q: "Tar du även större renoveringar?",
        a: "Ja, antingen själv eller tillsammans med andra hantverkare i mitt kontaktnät. Du har en kontaktperson genom hela projektet.",
      },
      {
        q: "Gäller ROT-avdrag?",
        a: "Ja, för reparation, underhåll och ombyggnad av bostad gäller ROT-avdrag på arbetskostnaden. Avdraget dras direkt på fakturan.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/** Options shown in step 1 of the quote form */
export const quoteServiceOptions = [
  { key: "grasklippning", label: "Gräsklippning", icon: "mower" },
  { key: "tradgard", label: "Trädgårdsskötsel", icon: "leaf" },
  { key: "stad", label: "Städning", icon: "broom" },
  { key: "fonsterputs", label: "Fönsterputs", icon: "window" },
  { key: "tillsyn", label: "Tillsyn av fritidshus", icon: "house" },
  { key: "fastighet", label: "Fastighetsskötsel", icon: "building" },
  { key: "hantverk", label: "Hantverk & reparation", icon: "hammer" },
  { key: "sno", label: "Snöskottning", icon: "snow" },
  { key: "annat", label: "Något annat", icon: "dots" },
] as const;

export type QuoteServiceKey = (typeof quoteServiceOptions)[number]["key"];
