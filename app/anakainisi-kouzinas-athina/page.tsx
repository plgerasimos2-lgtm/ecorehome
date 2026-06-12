import type { Metadata } from "next";

import LandingPageTemplate from "@/app/components/landing-page-template";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { LANDING_PAGES } from "@/lib/seo/landing-pages";

const config = LANDING_PAGES["anakainisi-kouzinas-athina"];

export const metadata: Metadata = buildPageMetadata({
  title: config.title,
  description: config.description,
  path: config.path,
  keywords: [...config.keywords],
});

export default function Page() {
  return <LandingPageTemplate config={config} />;
}
