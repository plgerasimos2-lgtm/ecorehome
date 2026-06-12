import type { Metadata } from "next";

import { DEFAULT_OG_IMAGE, SITE_DISPLAY_TITLE, SITE_URL } from "./site-config";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: "website" | "article";
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogType = "website",
}: PageSeoInput): Metadata {
  const canonical = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_DISPLAY_TITLE,
      locale: "el_GR",
      type: ogType,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}
