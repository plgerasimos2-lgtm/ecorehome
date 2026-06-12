import { BUSINESS, SITE_URL } from "./site-config";

export type FaqItem = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: `${SITE_URL}/ecorehome-logo.png`,
    email: BUSINESS.email,
    telephone: BUSINESS.phone,
    sameAs: [
      BUSINESS.social.instagram,
      BUSINESS.social.tiktok,
      BUSINESS.social.facebook,
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    serviceType: BUSINESS.serviceType,
    description:
      "Ανακαινίσεις Αθήνα — ολικές και μερικές ανακαινίσεις διαμερισμάτων, κουζινών, μπάνιων και επαγγελματικών χώρων.",
    url: SITE_URL,
    image: `${SITE_URL}/ecorehome-logo.png`,
    logo: `${SITE_URL}/ecorehome-logo.png`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    foundingDate: String(BUSINESS.foundingYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.streetAddress,
      addressLocality: BUSINESS.address.addressLocality,
      addressRegion: BUSINESS.address.addressRegion,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: BUSINESS.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      BUSINESS.social.instagram,
      BUSINESS.social.tiktok,
      BUSINESS.social.facebook,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Υπηρεσίες Ανακαίνισης Αθήνα",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ανακαίνιση Διαμερίσματος Αθήνα",
            url: `${SITE_URL}/anakainisi-diamerismatos-athina`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ανακαίνιση Μπάνιου Αθήνα",
            url: `${SITE_URL}/anakainisi-mpaniou-athina`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ανακαίνιση Κουζίνας Αθήνα",
            url: `${SITE_URL}/anakainisi-kouzinas-athina`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ολική Ανακαίνιση Αθήνα",
            url: `${SITE_URL}/oliki-anakainisi-athina`,
          },
        },
      ],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BUSINESS.name,
    url: SITE_URL,
    inLanguage: "el-GR",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: `${SITE_URL}${input.path}`,
    provider: {
      "@id": `${SITE_URL}/#localbusiness`,
    },
    areaServed: {
      "@type": "City",
      name: "Αθήνα",
    },
  };
}
