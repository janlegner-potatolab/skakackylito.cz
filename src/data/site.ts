export const site = {
  name: "Skákačky Lito",
  tagline: "Pronájem skákacích hradů z Litoměřic",
  url: "https://skakackylito.cz",
  description:
    "Půjčovna skákacích hradů a nafukovacích atrakcí pro dětské oslavy, školky, firemní akce i obecní slavnosti — Litoměřice, Lovosice, Roudnice nad Labem a okolí. Přivezeme, postavíme a po akci odvezeme.",
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
  email: "info@skakackylito.cz",
  city: "Litoměřice",
  serviceArea: "Litoměřice, Lovosice, Roudnice nad Labem, Ústí nad Labem a okolí",
  hours: "Všední dny i víkendy",
  socials: {
    facebook: null as string | null,
    instagram: "https://instagram.com/skakackylito",
    instagramHandle: "@skakackylito",
  },
  legal: {
    owner: "Michaela Ježková",
    ico: "00991619",
    dic: null as string | null,
  },
  certification: "EN 14960",
  weekendPackage: "Víkendový balíček (pátek–neděle) +1 500 Kč",
  geo: {
    latitude: 50.5343,
    longitude: 14.131,
  },
  analytics: {
    gaId: "G-V37HECS5Z5",
  },
  seo: {
    title: "Skákačky Lito · Pronájem skákacích hradů Litoměřice",
    description:
      "Pronájem a půjčovna skákacích hradů a nafukovacích atrakcí v Litoměřicích, Lovosicích, Roudnici nad Labem a okolí. Cena včetně dopravy, stavby a pojištění odpovědnosti. Norma EN 14960.",
    ogImage: "/photos/og-image.jpg",
    ogImageWidth: 1200,
    ogImageHeight: 630,
  },
  priceRange: "3 500 Kč – 5 200 Kč",
} as const;
