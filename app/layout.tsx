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
  keywords:
    "ανακαινίσεις Αθήνα, ανακαίνιση σπιτιού, ανακαίνιση κουζίνας, ανακαίνιση μπάνιου, Eco ReHome",
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
