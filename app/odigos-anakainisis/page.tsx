import type { Metadata } from "next";
import Link from "next/link";

import JsonLd from "@/app/components/json-ld";
import SiteFooter from "@/app/components/site-footer";
import SiteHeader from "@/app/components/site-header";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { breadcrumbSchema } from "@/lib/seo/json-ld";

export const metadata: Metadata = buildPageMetadata({
  title: "Οδηγός Ανακαίνισης PDF | Eco ReHome",
  description:
    "Δωρεάν οδηγός ανακαίνισης PDF από την Eco ReHome: βήματα, συμβουλές και χρήσιμες πληροφορίες πριν ξεκινήσετε το έργο σας στην Αθήνα.",
  path: "/odigos-anakainisis",
  keywords: ["Οδηγός Ανακαίνισης", "Ανακαινίσεις Αθήνα", "Eco ReHome"],
  ogType: "article",
});

const PDF_PATH = "/odigos-anakainisis.pdf";
const PDF_FILENAME = "Eco-ReHome-Odigos-Anakainisis.pdf";

const highlights = [
  "Πώς να οργανώσετε μια ανακαίνιση από την αρχή",
  "Τι να προσέξετε σε κόστος, χρόνο και υλικά",
  "Βήματα συνεργασίας με επαγγελματική ομάδα",
  "Συχνά λάθη που αξίζει να αποφύγετε",
];

export default function RenovationGuidePage() {
  return (
    <div className="min-h-full bg-white text-zinc-900">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Αρχική", path: "/" },
          { name: "Οδηγός Ανακαίνισης", path: "/odigos-anakainisis" },
        ])}
      />

      <SiteHeader currentPath="/odigos-anakainisis" />

      <main>
        <section className="border-b border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-zinc-50">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700">
              Δωρεάν οδηγός PDF
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
              Οδηγός Ανακαίνισης
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
              Ένας πρακτικός οδηγός από την Eco ReHome για όσους σχεδιάζουν ανακαίνιση σπιτιού ή
              επαγγελματικού χώρου στην Αθήνα. Διαβάστε τον online ή κατεβάστε τον για να τον έχετε πάντα
              μαζί σας.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={PDF_PATH}
                download={PDF_FILENAME}
                className="inline-flex items-center rounded-full bg-emerald-600 px-7 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Κατέβασμα PDF
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center rounded-full border border-emerald-200 px-7 py-3 text-base font-semibold text-emerald-700 transition hover:bg-emerald-50"
              >
                Ζητήστε προσφορά
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-12 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm">
              <div className="border-b border-emerald-100 bg-emerald-50/60 px-5 py-3">
                <h2 className="text-sm font-medium text-emerald-800">Προεπισκόπηση οδηγού</h2>
              </div>
              <iframe
                src={PDF_PATH}
                title="Οδηγός Ανακαίνισης Eco ReHome – PDF"
                className="h-[min(80vh,900px)] w-full bg-zinc-100"
                loading="lazy"
              />
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-zinc-900">Τι περιλαμβάνει</h2>
                <ul className="mt-4 space-y-3">
                  {highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-600">
                      <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-emerald-100 bg-emerald-50/70 p-6">
                <h2 className="text-lg font-semibold text-zinc-900">Χρειάζεστε βοήθεια;</h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  Η ομάδα μας μπορεί να σας καθοδηγήσει από την πρώτη ιδέα μέχρι την παράδοση του
                  έργου, με δωρεάν αρχική εκτίμηση.
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <a href="tel:6970652145" className="block font-medium text-emerald-700 hover:underline">
                    6970652145
                  </a>
                  <a
                    href="mailto:info@ecorehomeconstructions.com"
                    className="block font-medium text-emerald-700 hover:underline"
                  >
                    info@ecorehomeconstructions.com
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
