import Image from "next/image";
import Link from "next/link";

import { BUSINESS, SERVICE_LINKS } from "@/lib/seo/site-config";

export default function SiteFooter() {
  return (
    <footer className="border-t border-emerald-100 bg-white py-10">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/ecorehome-logo.png"
                alt="Eco ReHome – Εταιρεία ανακαινίσεων Αθήνα"
                width={40}
                height={40}
                className="rounded-md border border-emerald-200"
              />
              <p className="text-xl font-semibold tracking-tight text-emerald-700">Eco ReHome</p>
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              Εταιρεία ανακαινίσεων στην Αθήνα. Ποιότητα, συνέπεια και premium αισθητική.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
              Υπηρεσίες
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-zinc-600 transition hover:text-emerald-700">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
              Επικοινωνία
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>
                <a href={`tel:${BUSINESS.phoneDisplay}`} className="hover:text-emerald-700">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-emerald-700">
                  {BUSINESS.email}
                </a>
              </li>
              <li>{BUSINESS.address.addressLocality}, Ελλάδα</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={BUSINESS.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-emerald-100 px-3 py-1.5 text-xs text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700"
              >
                TikTok
              </a>
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-emerald-100 px-3 py-1.5 text-xs text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700"
              >
                Instagram
              </a>
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-emerald-100 px-3 py-1.5 text-xs text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 border-t border-emerald-100 pt-6 text-xs text-zinc-500">
          <Link href="/#privacy" className="hover:text-emerald-700">
            Πολιτική Απορρήτου
          </Link>
          <Link href="/#terms" className="hover:text-emerald-700">
            Όροι Χρήσης
          </Link>
          <p>© {new Date().getFullYear()} Eco ReHome. Με επιφύλαξη παντός δικαιώματος.</p>
        </div>
      </div>
    </footer>
  );
}
