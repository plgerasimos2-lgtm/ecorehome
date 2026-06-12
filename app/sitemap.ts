import type { MetadataRoute } from "next";

import { ALL_LANDING_SLUGS, LANDING_PAGES } from "@/lib/seo/landing-pages";
import { SITE_URL } from "@/lib/seo/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/odigos-anakainisis`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const landingPages: MetadataRoute.Sitemap = ALL_LANDING_SLUGS.map((slug) => ({
    url: `${SITE_URL}${LANDING_PAGES[slug].path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...landingPages];
}
