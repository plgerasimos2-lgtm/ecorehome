import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eco ReHome",
  description: "Η Eco ReHome προσφέρει επαγγελματικές ανακαινίσεις σπιτιών, κουζινών και μπάνιων στην Αθήνα με 10+ χρόνια εμπειρίας και 200+ ολοκληρωμένα έργα.",
  keywords: [
    "ανακαινίσεις Αθήνα",
    "ανακαίνιση σπιτιού",
    "ανακαίνιση κουζίνας",
    "ανακαίνιση μπάνιου",
    "επαγγελματικοί χώροι",
    "ενεργειακή αναβάθμιση",
    "Eco ReHome",
  ],
  openGraph: {
    title: "Eco ReHome",
    description:
      "Ανακαινίσεις σπιτιών και επαγγελματικών χώρων με ποιότητα, συνέπεια και σύγχρονο σχεδιασμό.",
    locale: "el_GR",
    type: "website",
    images: [
      {
        url: "/ecorehome-logo.png",
        width: 512,
        height: 512,
        alt: "Λογότυπο Eco ReHome",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eco ReHome",
    description: "Ανακαινίσεις με ποιότητα και στυλ.",
    images: ["/ecorehome-logo.png"],
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
