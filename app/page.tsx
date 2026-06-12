import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import JsonLd from "./components/json-ld";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";
import BeforeAfterCard from "./components/before-after-card";
import ContactForm from "./components/contact-form";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { faqSchema, localBusinessSchema } from "@/lib/seo/json-ld";
import { HOMEPAGE_SEO_SECTION } from "@/lib/seo/homepage-seo-content";
import { SERVICE_LINKS } from "@/lib/seo/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: "Ανακαινίσεις Αθήνα | Εταιρεία Ανακαινίσεων – Eco ReHome",
  description:
    "Ανακαινίσεις Αθήνα & ανακαίνιση διαμερίσματος από εταιρεία ανακαινίσεων με 10+ χρόνια εμπειρίας. Ολικές & μερικές ανακαινίσεις, δωρεάν εκτίμηση, 200+ έργα.",
  path: "/",
  keywords: [
    "Ανακαινίσεις Αθήνα",
    "Ανακαίνιση Διαμερίσματος Αθήνα",
    "Εταιρεία Ανακαινίσεων Αθήνα",
    "Συνεργείο Ανακαινίσεων Αθήνα",
    "Ανακαινίσεις Κατοικιών Αθήνα",
  ],
});

const services = [
  {
    title: "Ανακαίνιση Διαμερίσματος",
    description:
      "Ολοκληρωμένες λύσεις για ανακαίνιση διαμερίσματος στην Αθήνα με έμφαση στην αισθητική και τη λειτουργικότητα.",
    href: "/anakainisi-diamerismatos-athina",
  },
  {
    title: "Ανακαίνιση Μπάνιου",
    description:
      "Σύγχρονη ανακαίνιση μπάνιου με στεγάνωση, ποιοτικά υλικά και προσεγμένη τοποθέτηση.",
    href: "/anakainisi-mpaniou-athina",
  },
  {
    title: "Ανακαίνιση Κουζίνας",
    description:
      "Σχεδιάζουμε λειτουργικές κουζίνες με έξυπνο layout, αποθήκευση και σύγχρονο design.",
    href: "/anakainisi-kouzinas-athina",
  },
  {
    title: "Ολική Ανακαίνιση",
    description:
      "Πλήρης ανανέωση κατοικίας με ενιαίο χρονοδιάγραμμα, συντονισμό επαγγελμάτων και συνεπές αποτέλεσμα.",
    href: "/oliki-anakainisi-athina",
  },
  {
    title: "Ανακαινίσεις Κατοικιών",
    description:
      "Ολικές και μερικές ανακαινίσεις στην Αθήνα — από στοχευμένες παρεμβάσεις μέχρι πλήρη ανανέωση.",
    href: "/anakainiseis-athina",
  },
  {
    title: "Κόστος Ανακαίνισης",
    description:
      "Τι επηρεάζει το κόστος ανακαίνισης διαμερίσματος; Διαφανής εκτίμηση και δωρεάν πρώτη προσφορά.",
    href: "/kostos-anakainisis-diamerismatos-athina",
  },
];

const stats = [
  { value: "10+", label: "Χρόνια Εμπειρίας" },
  { value: "200+", label: "Ολοκληρωμένα Έργα" },
  { value: "100%", label: "Ικανοποίηση Πελατών" },
];

const testimonials = [
  {
    name: "Μαρία Κ.",
    text: "Η ομάδα της Eco ReHome παρέδωσε άψογο αποτέλεσμα, με επαγγελματισμό και συνέπεια σε κάθε στάδιο.",
  },
  {
    name: "Νίκος Π.",
    text: "Ανακαίνισαν την κουζίνα μας με εξαιρετική ποιότητα και προσοχή στη λεπτομέρεια. Τους συστήνω ανεπιφύλακτα.",
  },
  {
    name: "Ελένη Σ.",
    text: "Άμεση επικοινωνία, καθαρές συμφωνίες και πραγματικά εντυπωσιακό τελικό αποτέλεσμα στον επαγγελματικό μας χώρο.",
  },
];

const contactDetails = [
  { label: "Τηλέφωνο", value: "6970652145" },
  { label: "Email", value: "info@ecorehomeconstructions.com" },
  { label: "Διεύθυνση", value: "Αθήνα, Ελλάδα" },
];

const projectImages = [
  {
    title: "Μπάνιο με ψηλά ντουλάπια αποθήκευσης",
    image: "/project-bathroom-storage.png",
    alt: "Ανακαίνιση μπάνιου με ντουλάπια αποθήκευσης – Eco ReHome Αθήνα",
  },
  {
    title: "Τοίχος τηλεόρασης & ειδική κατασκευή",
    image: "/project-tv-wall.png",
    alt: "Ειδική κατασκευή τοίχου τηλεόρασης – ανακαίνιση κατοικίας Αθήνα",
  },
  {
    title: "Καθιστικό με parquet και μπαλκόνι",
    image: "/project-living-parquet.png",
    alt: "Ανακαίνιση καθιστικού με parquet – Eco ReHome",
  },
  {
    title: "Περίφραξη & είσοδος κατοικίας",
    image: "/project-exterior-fence.png",
    alt: "Εξωτερική ανακαίνιση εισόδου κατοικίας – Αθήνα",
  },
  {
    title: "Μπάνιο minimal με έπιπλο νιπτήρα",
    image: "/project-bathroom-minimal.png",
    alt: "Minimal ανακαίνιση μπάνιου με έπιπλο νιπτήρα – Αθήνα",
  },
  {
    title: "Κουζίνα σε σχήμα Γ",
    image: "/project-kitchen-corner.png",
    alt: "Ανακαίνιση κουζίνας σε σχήμα Γ – Eco ReHome Αθήνα",
  },
];

const beforeAfterProjects = [
  {
    title: "Διαγράμμιση διαβάτη — επαγγελματικός χώρος",
    beforeImage: "/before-pedestrian-crossing.png",
    afterImage: "/after-pedestrian-crossing.png",
  },
  {
    title: "Ανακαίνιση μπάνιου",
    beforeImage: "/before-bathroom-renovation.png",
    afterImage: "/after-bathroom-renovation.png",
  },
];

const reasons = [
  {
    title: "Εμπειρία & Τεχνογνωσία",
    description:
      "Με περισσότερα από 10 χρόνια εμπειρίας, γνωρίζουμε πώς να οργανώνουμε και να υλοποιούμε κάθε έργο με συνέπεια.",
    icon: "experience",
  },
  {
    title: "Ποιοτικά Υλικά",
    description:
      "Επιλέγουμε υλικά και λύσεις που προσφέρουν αντοχή, αισθητική και μακροχρόνια αξία στον χώρο σας.",
    icon: "materials",
  },
  {
    title: "Συνέπεια στους Χρόνους",
    description:
      "Σεβόμαστε τα χρονοδιαγράμματα και φροντίζουμε κάθε στάδιο του έργου να εξελίσσεται ομαλά και οργανωμένα.",
    icon: "timeline",
  },
  {
    title: "Προσωποποιημένη Προσέγγιση",
    description:
      "Κάθε ανακαίνιση σχεδιάζεται με βάση τις ανάγκες, το budget και το στυλ του κάθε πελάτη ξεχωριστά.",
    icon: "custom",
  },
];

const trustItems = [
  "Δωρεάν πρώτη εκτίμηση έργου",
  "Πλήρης διαφάνεια σε κόστος και χρονοδιάγραμμα",
  "Ποιοτικά υλικά και προσεγμένη κατασκευή",
  "Υποστήριξη πριν, κατά τη διάρκεια και μετά το έργο",
];

const faqs = [
  {
    question: "Πόσο χρόνο χρειάζεται μια ανακαίνιση στην Αθήνα;",
    answer:
      "Ο χρόνος εξαρτάται από το μέγεθος και τις απαιτήσεις του έργου. Πριν την έναρξη παρέχουμε σαφές χρονοδιάγραμμα με όλα τα στάδια.",
  },
  {
    question: "Παρέχετε δωρεάν εκτίμηση κόστους;",
    answer:
      "Ναι. Μετά από σύντομη καταγραφή των αναγκών σας, ετοιμάζουμε αναλυτική προσφορά χωρίς χρέωση για την αρχική εκτίμηση.",
  },
  {
    question: "Αναλαμβάνετε και μερικές επεμβάσεις;",
    answer:
      "Φυσικά. Αναλαμβάνουμε τόσο ολικές ανακαινίσεις όσο και μερικές παρεμβάσεις, ανάλογα με τον χώρο και το διαθέσιμο budget.",
  },
  {
    question: "Δίνετε εγγύηση για τις εργασίες;",
    answer:
      "Ναι, παρέχουμε εγγύηση για τις εργασίες που υλοποιούμε, με έμφαση στην ποιότητα και τη σωστή τεχνική εφαρμογή.",
  },
  {
    question: "Σε ποιες περιοχές της Αθήνας εξυπηρετείτε;",
    answer:
      "Εξυπηρετούμε κυρίως Αθήνα και γύρω περιοχές. Για έργα εκτός Αττικής, η ομάδα μας ενημερώνει για διαθεσιμότητα και διαδικασία.",
  },
  {
    question: "Πώς ξεκινάμε τη συνεργασία;",
    answer:
      "Συμπληρώνετε τη φόρμα επικοινωνίας ή καλείτε στο τηλέφωνο, γίνεται αρχική συζήτηση αναγκών και ορίζουμε επίσκεψη στον χώρο.",
  },
];

function ReasonIcon({ icon }: { icon: string }) {
  if (icon === "experience") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
        <path d="M12 3v4m0 10v4M3 12h4m10 0h4M6.34 6.34l2.83 2.83m5.66 5.66 2.83 2.83m0-11.32-2.83 2.83m-5.66 5.66-2.83 2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    );
  }

  if (icon === "materials") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
        <path d="M3 7.5 12 3l9 4.5-9 4.5L3 7.5Z" />
        <path d="M3 12l9 4.5 9-4.5M3 16.5 12 21l9-4.5" />
      </svg>
    );
  }

  if (icon === "timeline") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
        <path d="M5 5v14m14-14v14M5 8h14M5 16h14" />
        <circle cx="9" cy="12" r="1.5" />
        <circle cx="15" cy="12" r="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
      <path d="M12 21s-6-3.75-6-10a6 6 0 1 1 12 0c0 6.25-6 10-6 10Z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="bg-white text-zinc-900 scroll-smooth">
      <JsonLd data={[localBusinessSchema(), faqSchema(faqs)]} />

      <SiteHeader currentPath="/" />

      <main>
        <section className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <div className="space-y-8">
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700 transition-transform duration-300 hover:scale-105">
              Εταιρεία ανακαινίσεων στην Αθήνα · 10+ χρόνια εμπειρίας
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-900 md:text-5xl">
              Ανακαινίσεις Αθήνα – Ολικές &amp; Μερικές Ανακαινίσεις Κατοικιών
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-600">
              Η Eco ReHome είναι συνεργείο ανακαινίσεων στην Αθήνα με ολοκληρωμένες λύσεις για
              διαμερίσματα, κουζίνες, μπάνια και επαγγελματικούς χώρους. Δημιουργούμε χώρους που
              συνδυάζουν αισθητική, λειτουργικότητα και αντοχή στον χρόνο.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-emerald-600 px-7 py-3 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-emerald-700 hover:shadow-lg active:scale-95"
            >
              Ζητήστε Προσφορά
            </a>
          </div>
          <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-zinc-100 p-8 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-emerald-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-md"
                >
                  <p className="text-3xl font-semibold text-emerald-700">{item.value}</p>
                  <p className="mt-1 text-sm text-zinc-600">{item.label}</p>
                </div>
              ))}
              <div className="rounded-2xl border border-emerald-100 bg-white p-5">
                <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">Eco ReHome</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Ποιότητα κατασκευής και premium αποτέλεσμα σε κάθε έργο.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="seo-content"
          aria-label="Ανακαινίσεις Αθήνα – πληροφορίες"
          className="border-b border-emerald-100 bg-zinc-50/80 py-16"
        >
          <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
              {HOMEPAGE_SEO_SECTION.h2}
            </h2>
            <div className="mt-6 max-w-4xl space-y-5">
              {HOMEPAGE_SEO_SECTION.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 50)} className="text-lg leading-relaxed text-zinc-600">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {HOMEPAGE_SEO_SECTION.h3Sections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-zinc-900">{section.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-zinc-600">{section.content}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/anakainiseis-athina"
                className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-800 transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                Ανακαινίσεις Αθήνα
              </Link>
              <Link
                href="/anakainisi-diamerismatos-athina"
                className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-800 transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                Ανακαίνιση Διαμερίσματος Αθήνα
              </Link>
              <Link
                href="/anakainisi-mpaniou-athina"
                className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-800 transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                Ανακαίνιση Μπάνιου Αθήνα
              </Link>
              <Link
                href="/anakainisi-kouzinas-athina"
                className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-800 transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                Ανακαίνιση Κουζίνας Αθήνα
              </Link>
              <Link
                href="/oliki-anakainisi-athina"
                className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-800 transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                Ολική Ανακαίνιση Αθήνα
              </Link>
            </div>
          </div>
        </section>

        <section aria-label="Σημεία εμπιστοσύνης" className="border-y border-emerald-100 bg-emerald-50/70 py-6">
          <div className="mx-auto grid w-full max-w-6xl gap-3 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {trustItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-emerald-100 bg-white/80 px-4 py-3 text-sm font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="bg-zinc-50/80 py-20">
          <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
                Εταιρεία ανακαινίσεων στην Αθήνα με επαγγελματισμό
              </h2>
              <p className="text-lg leading-relaxed text-zinc-600">
                Στην Eco ReHome επενδύουμε σε σύγχρονες τεχνικές, ποιοτικά υλικά και αυστηρή επίβλεψη έργων. Με περισσότερα από
                10 χρόνια εμπειρίας, προσφέρουμε λύσεις που ανταποκρίνονται πλήρως στις ανάγκες κάθε πελάτη.
              </p>
              <p className="text-lg leading-relaxed text-zinc-600">
                Η φιλοσοφία μας βασίζεται στην αξιοπιστία, τη διαφάνεια και τη συνέπεια, ώστε κάθε συνεργασία να ολοκληρώνεται
                με απόλυτη ασφάλεια και άριστο αποτέλεσμα.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <div className="mb-10 max-w-2xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">Υπηρεσίες Ανακαίνισης</h2>
            <p className="text-lg text-zinc-600">
              Παρέχουμε ολοκληρωμένες υπηρεσίες με υψηλά πρότυπα ποιότητας για οικιακούς και επαγγελματικούς χώρους στην Αθήνα.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-3xl border border-emerald-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-emerald-200 hover:shadow-lg"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
                  <Link href={service.href} className="hover:text-emerald-700">
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-3 text-base leading-relaxed text-zinc-600">{service.description}</p>
                <Link
                  href={service.href}
                  className="mt-4 inline-block text-sm font-medium text-emerald-700 hover:underline"
                >
                  Μάθετε περισσότερα →
                </Link>
                <div className="mt-6 h-1 w-12 rounded-full bg-emerald-200 transition-all duration-300 group-hover:w-20 group-hover:bg-emerald-500" />
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-emerald-100 bg-emerald-50/40 py-14">
          <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
              Εξειδικευμένες υπηρεσίες ανακαίνισης
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-600">
              Εξερευνήστε τις εξειδικευμένες σελίδες μας για κάθε τύπο έργου στην Αθήνα.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {SERVICE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-800 transition hover:border-emerald-300 hover:bg-emerald-50"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-emerald-700 py-16 text-white">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 text-center sm:grid-cols-3 lg:px-8">
            {stats.map((item) => (
              <div key={item.label} className="space-y-2">
                <p className="text-4xl font-semibold tracking-tight">{item.value}</p>
                <p className="text-sm uppercase tracking-wide text-emerald-100">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <div className="mb-10 max-w-2xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">Έργα &amp; Φωτογραφίες</h2>
            <p className="text-lg text-zinc-600">Ενδεικτικά έργα ανακαινίσεων με προσεγμένο design και σύγχρονη αισθητική.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projectImages.map((project) => (
              <div
                key={project.title}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-emerald-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="text-sm font-semibold text-white">{project.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="before-after" className="bg-zinc-50/80 py-20">
          <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
            <div className="mb-10 max-w-2xl space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">Πριν &amp; Μετά</h2>
              <p className="text-lg text-zinc-600">
                Σύρετε τον δείκτη σε κάθε έργο για να δείτε τη διαφορά πριν και μετά την ανακαίνιση.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {beforeAfterProjects.map((project) => (
                <BeforeAfterCard
                  key={project.title}
                  title={project.title}
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <div className="mb-10 max-w-2xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
              Γιατί να μας επιλέξετε
            </h2>
            <p className="text-lg text-zinc-600">
              Δημιουργούμε ανακαινίσεις που ξεχωρίζουν για την ποιότητα, τη συνέπεια και τη σωστή εξυπηρέτηση σε κάθε βήμα.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-3xl border border-emerald-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <ReasonIcon icon={reason.icon} />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-zinc-900">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{reason.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="testimonials" className="bg-emerald-700 py-20">
          <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
            <div className="mb-10 max-w-2xl space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Τι λένε οι πελάτες μας</h2>
              <p className="text-lg text-emerald-100">
                Η εμπιστοσύνη των πελατών μας είναι το πιο σημαντικό αποτέλεσμα κάθε έργου.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <blockquote
                  key={item.name}
                  className="rounded-3xl border border-emerald-300 bg-emerald-50 p-7 text-zinc-700 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-md"
                >
                  <div className="mb-3 flex gap-1 text-amber-400" aria-label="5 αστέρια αξιολόγηση">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span key={starIndex} aria-hidden="true">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="leading-relaxed">&ldquo;{item.text}&rdquo;</p>
                  <footer className="mt-5 text-sm font-semibold text-emerald-700">{item.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">Επικοινωνήστε μαζί μας</h2>
              <p className="text-lg leading-relaxed text-zinc-600">
                Συμπληρώστε τη φόρμα και η ομάδα μας θα επικοινωνήσει άμεσα μαζί σας για να συζητήσουμε το έργο σας.
              </p>
              <div className="space-y-3">
                {contactDetails.map((detail) => (
                  <p key={detail.label} className="text-zinc-700">
                    <span className="font-semibold text-zinc-900">{detail.label}: </span>
                    {detail.label === "Τηλέφωνο" ? (
                      <a
                        href={`tel:${detail.value}`}
                        className="inline-flex items-center rounded-full border border-emerald-200 px-3 py-1 text-emerald-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-sm"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </p>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        <section id="faq" className="bg-zinc-50/80 py-20">
          <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
            <div className="mb-10 max-w-2xl space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
                Συχνές Ερωτήσεις
              </h2>
              <p className="text-lg text-zinc-600">
                Απαντήσεις στις πιο συχνές απορίες για τη διαδικασία, το κόστος και τον χρόνο υλοποίησης.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-emerald-100 bg-white p-5 transition-all duration-300 hover:shadow-sm"
                >
                  <summary className="cursor-pointer list-none pr-6 text-base font-semibold text-zinc-900">
                    {faq.question}
                    <span className="ml-2 inline-block text-emerald-600 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="privacy" className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
          <div className="rounded-3xl border border-emerald-100 bg-white p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Πολιτική Απορρήτου &amp; Νομικά</h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              Τα στοιχεία που υποβάλλετε μέσω της φόρμας επικοινωνίας χρησιμοποιούνται αποκλειστικά για την εξυπηρέτηση του
              αιτήματός σας. Η Eco ReHome δεν διαμοιράζει προσωπικά δεδομένα σε τρίτους χωρίς νόμιμη βάση. Με τη χρήση της
              ιστοσελίδας αποδέχεστε τους βασικούς όρους χρήσης και την επεξεργασία δεδομένων σύμφωνα με την ισχύουσα νομοθεσία.
            </p>
            <p id="terms" className="mt-3 text-sm leading-relaxed text-zinc-600">
              Για αιτήματα σχετικά με προσωπικά δεδομένα, μπορείτε να επικοινωνήσετε στο
              {" "}
              <a href="mailto:info@ecorehomeconstructions.com" className="font-medium text-emerald-700 hover:underline">
                info@ecorehomeconstructions.com
              </a>
              {" "}
              ή τηλεφωνικά στο
              {" "}
              <a href="tel:6970652145" className="font-medium text-emerald-700 hover:underline">
                6970652145
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
