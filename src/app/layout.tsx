import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Iker Torrico — Athlete, Performer, Builder",
  description:
    "Portfolio of Iker Torrico: competitive athlete, stage performer, community builder, and young entrepreneur from La Paz, Bolivia. Basketball captain, founder of Deporte por la Vida, Operation Smile president, and guitarist of The Spryngs.",
  keywords: [
    "Iker Torrico",
    "portfolio",
    "athlete",
    "basketball",
    "La Paz",
    "Bolivia",
    "community service",
    "guitarist",
    "entrepreneur",
    "ACS",
  ],
  authors: [{ name: "Iker Torrico" }],
  openGraph: {
    title: "Iker Torrico — Athlete, Performer, Builder",
    description:
      "Competitive athlete, stage performer, community builder, and young entrepreneur from La Paz, Bolivia.",
    siteName: "Iker Torrico Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${instrumentSerif.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
