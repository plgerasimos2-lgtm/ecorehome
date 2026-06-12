import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import ChatBot from "./components/chat-bot";
import JsonLd from "./components/json-ld";
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo/json-ld";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  verification: {
    google: "ollNgK6Idvkh-utroB0XBROYOtw8PhhAFgKsZmexdDw",
  },
  title: {
    default: "Ανακαινίσεις Αθήνα | Εταιρεία Ανακαινίσεων – Eco ReHome",
    template: "%s",
  },
  description:
    "Ανακαινίσεις Αθήνα & ανακαίνιση διαμερίσματος από εταιρεία ανακαινίσεων. Ολικές & μερικές ανακαινίσεις, δωρεάν εκτίμηση, 200+ έργα.",
  openGraph: {
    siteName: "Eco ReHome",
    locale: "el_GR",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="el"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        <JsonLd
          data={[organizationSchema(), localBusinessSchema(), websiteSchema()]}
        />
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
