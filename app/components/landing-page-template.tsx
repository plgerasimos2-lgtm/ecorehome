import Link from "next/link";

import JsonLd from "@/app/components/json-ld";
import SiteFooter from "@/app/components/site-footer";
import SiteHeader from "@/app/components/site-header";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  serviceSchema,
} from "@/lib/seo/json-ld";
import type { LandingPageConfig } from "@/lib/seo/landing-pages";
import { LANDING_PAGES } from "@/lib/seo/landing-pages";
import { SERVICE_LINKS } from "@/lib/seo/site-config";

type LandingPageTemplateProps = {
  config: LandingPageConfig;
};

export default function LandingPageTemplate({ config }: LandingPageTemplateProps) {
  const breadcrumbs = breadcrumbSchema([
    { name: "Αρχική", path: "/" },
    { name: config.h1, path: config.path },
  ]);

  const relatedPages = config.relatedSlugs
    .map((slug) => LANDING_PAGES[slug])
    .filter(Boolean);

  return (
    <div className="min-h-full bg-white text-zinc-900">
      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbs,
          serviceSchema({
            name: config.h1,
            description: config.description,
            path: config.path,
          }),
          faqSchema(config.faqs),
        ]}
      />

      <SiteHeader currentPath={config.path} />

      <main>
        <section className="border-b border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-zinc-50">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700">
              {config.heroBadge}
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
              {config.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">{config.intro}</p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center rounded-full bg-emerald-600 px-7 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              {config.ctaText}
            </Link>
          </div>
        </section>

        {config.sections.map((section) => (
          <section
            key={section.h2}
            className="mx-auto w-full max-w-6xl px-6 py-14 lg:px-8 even:bg-zinc-50/60"
          >
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
              {section.h2}
            </h2>
            <div className="mt-5 max-w-3xl space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-lg leading-relaxed text-zinc-600">
                  {paragraph}
                </p>
              ))}
            </div>
            {section.h3 && (
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {section.h3.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600">{item.content}</p>
                  </article>
                ))}
              </div>
            )}
          </section>
        ))}

        <section className="mx-auto w-full max-w-6xl px-6 py-14 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
            Συχνές Ερωτήσεις
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {config.faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl border border-emerald-100 bg-white p-5"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-zinc-900">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {relatedPages.length > 0 && (
          <section className="border-t border-emerald-100 bg-emerald-50/50 py-14">
            <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                Σχετικές υπηρεσίες
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {relatedPages.map((page) => (
                  <Link
                    key={page.path}
                    href={page.path}
                    className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-800 transition hover:border-emerald-300 hover:bg-emerald-50"
                  >
                    {page.h1}
                  </Link>
                ))}
              </div>
              <h3 className="mt-10 text-lg font-semibold text-zinc-900">Όλες οι υπηρεσίες ανακαίνισης</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {SERVICE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition hover:border-emerald-300 hover:bg-emerald-50 ${
                      link.href === config.path
                        ? "border-emerald-400 bg-emerald-100 text-emerald-900"
                        : "border-emerald-200 bg-white text-emerald-800"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
          <div className="rounded-3xl bg-emerald-700 px-8 py-10 text-center text-white">
            <h2 className="text-2xl font-semibold md:text-3xl">{config.ctaText}</h2>
            <p className="mx-auto mt-3 max-w-xl text-emerald-100">
              Δωρεάν πρώτη εκτίμηση · Διαφανής προσφορά · 10+ χρόνια εμπειρίας στην Αθήνα
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex rounded-full bg-white px-7 py-3 text-base font-semibold text-emerald-700 transition hover:bg-emerald-50"
            >
              Επικοινωνήστε μαζί μας
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
