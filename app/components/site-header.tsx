import Image from "next/image";
import Link from "next/link";

import { SERVICE_LINKS } from "@/lib/seo/site-config";

type SiteHeaderProps = {
  currentPath?: string;
};

export default function SiteHeader({ currentPath }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-emerald-100/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/ecorehome-logo.png"
            alt="Eco ReHome – Ανακαινίσεις Αθήνα"
            width={44}
            height={44}
            className="rounded-md border border-emerald-200"
            priority
          />
          <p className="text-lg font-semibold tracking-tight text-emerald-700">Eco ReHome</p>
        </Link>
        <nav className="hidden items-center gap-1 lg:gap-2 md:flex" aria-label="Κύρια πλοήγηση">
          <Link
            href="/"
            className={`rounded-full px-3 py-2 text-sm font-medium transition hover:bg-emerald-50 hover:text-emerald-700 ${
              currentPath === "/" ? "bg-emerald-50 text-emerald-700" : "text-zinc-700"
            }`}
          >
            Αρχική
          </Link>
          {SERVICE_LINKS.slice(0, 5).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-2 text-sm font-medium transition hover:bg-emerald-50 hover:text-emerald-700 ${
                currentPath === link.href ? "bg-emerald-50 text-emerald-700" : "text-zinc-700"
              }`}
            >
              {link.label
                .replace(" Αθήνα", "")
                .replace("Ανακαίνιση Διαμερίσματος", "Διαμέρισμα")
                .replace("Ανακαίνιση Μπάνιου", "Μπάνιο")
                .replace("Ανακαίνιση Κουζίνας", "Κουζίνα")
                .replace("Ολική Ανακαίνιση", "Ολική")
                .replace("Κόστος Ανακαίνισης Διαμερίσματος", "Κόστος")}
            </Link>
          ))}
          <Link
            href="/odigos-anakainisis"
            className={`rounded-full px-3 py-2 text-sm font-medium transition hover:bg-emerald-50 hover:text-emerald-700 ${
              currentPath === "/odigos-anakainisis"
                ? "bg-emerald-50 text-emerald-700"
                : "text-zinc-700"
            }`}
          >
            Οδηγός
          </Link>
        </nav>
        <Link
          href="/#contact"
          className="rounded-full border border-emerald-200 px-4 py-2 text-sm font-medium text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50"
        >
          Επικοινωνία
        </Link>
      </div>
    </header>
  );
}
