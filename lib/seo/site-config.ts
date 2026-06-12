export const SITE_URL = "https://ecorehomeconstructions.com";

export const SITE_DISPLAY_TITLE = "Ανακαινίσεις Αθήνα | Eco ReHome Constructions";

export const BUSINESS = {
  name: "Eco ReHome Constructions",
  legalName: "Eco ReHome Constructions",
  phone: "+306970652145",
  phoneDisplay: "6970652145",
  email: "info@ecorehomeconstructions.com",
  address: {
    streetAddress: "Αθήνα",
    addressLocality: "Αθήνα",
    addressRegion: "Αττική",
    postalCode: "10431",
    addressCountry: "GR",
  },
  geo: {
    latitude: 37.9838,
    longitude: 23.7275,
  },
  areaServed: ["Athens", "Αθήνα", "Αττική", "Γλυφάδα", "Κηφισιά", "Μαρούσι", "Πειραιάς"],
  serviceType: "Home Renovation",
  priceRange: "€€",
  foundingYear: 2014,
  projectsCompleted: 200,
  social: {
    instagram: "https://www.instagram.com/ecorehome",
    tiktok: "https://www.tiktok.com/@ecorehome",
    facebook: "https://www.facebook.com/people/Eco-ReHome/61590393044322/",
  },
} as const;

export const DEFAULT_OG_IMAGE = {
  url: "/ecorehome-logo.png",
  width: 512,
  height: 512,
  alt: "Eco ReHome – Εταιρεία ανακαινίσεων στην Αθήνα",
} as const;

export const SERVICE_LINKS = [
  {
    href: "/anakainiseis-athina",
    label: "Ανακαινίσεις Αθήνα",
  },
  {
    href: "/anakainisi-diamerismatos-athina",
    label: "Ανακαίνιση Διαμερίσματος Αθήνα",
  },
  {
    href: "/anakainisi-mpaniou-athina",
    label: "Ανακαίνιση Μπάνιου Αθήνα",
  },
  {
    href: "/anakainisi-kouzinas-athina",
    label: "Ανακαίνιση Κουζίνας Αθήνα",
  },
  {
    href: "/oliki-anakainisi-athina",
    label: "Ολική Ανακαίνιση Αθήνα",
  },
  {
    href: "/kostos-anakainisis-diamerismatos-athina",
    label: "Κόστος Ανακαίνισης Διαμερίσματος",
  },
  {
    href: "/odigos-anakainisis",
    label: "Οδηγός Ανακαίνισης (PDF)",
  },
] as const;
