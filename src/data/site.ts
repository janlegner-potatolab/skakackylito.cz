export const site = {
  name: "Skákačky Lito",
  tagline: "Pronájem skákacích hradů z Litoměřic",
  url: "https://skakackylito.cz",
  description:
    "Zábava pro děti na každou akci. Přivezeme, postavíme a po akci odvezeme — vy si jen užíváte.",
  phones: {
    primary: {
      raw: "+420725866028",
      display: "+420 725 866 028",
      label: "Telefon",
    },
    secondary: {
      raw: "+420775144469",
      display: "+420 775 144 469",
      label: "Rezervace",
    },
  },
  email: "skakackylito@seznam.cz",
  city: "Litoměřice",
  serviceArea: "Litoměřice a okolí",
  hours: "Všední dny i víkendy",
  socials: {
    facebook: null as string | null,
    instagram: "https://instagram.com/skakackylito",
    instagramHandle: "@skakackylito",
  },
  legal: {
    owner: "Doplnit",
    ico: "Doplnit",
    dic: null as string | null,
  },
  certification: "EN 14960",
  weekendPackage: "Víkendový balíček (pátek–neděle) +1 500 Kč",
  geo: {
    latitude: 50.5343,
    longitude: 14.131,
  },
  seo: {
    title: "Skákačky Lito · Pronájem skákacích hradů Litoměřice",
    description:
      "Pronájem skákacích hradů v Litoměřicích a okolí. Skluzavka Rytíř a Mořský svět. Doprava, stavba i pojištění odpovědnosti v ceně. Norma EN 14960.",
    keywords:
      "pronájem skákacích hradů, Litoměřice, skákací hrad, půjčovna atrakcí, zábava pro děti, narozeniny, dětský den, oslava, Skákačky Lito",
    ogImage: "/photos/logo.png",
    ogImageWidth: 1200,
    ogImageHeight: 1200,
  },
  priceRange: "3 700 Kč – 5 700 Kč",
} as const;
