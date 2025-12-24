import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Wanderlux Journeys | Luxury Travel Experiences",
    template: "%s | Wanderlux Journeys",
  },
  description:
    "Journey Beyond the Ordinary. We craft bespoke, curated travel experiences, private tours, and exclusive destinations for discerning travelers.",
  keywords: [
    "luxury travel",
    "bespoke travel",
    "private tours",
    "exclusive destinations",
    "honeymoon packages",
    "curated experiences",
    "travel agency",
  ],
  authors: [{ name: "Wanderlux Journeys" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Wanderlux Journeys",
    title: "Wanderlux Journeys | Luxury Travel Experiences",
    description:
      "Journey Beyond the Ordinary. We craft bespoke, curated travel experiences for discerning travelers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wanderlux Journeys | Luxury Travel Experiences",
    description:
      "Journey Beyond the Ordinary. We craft bespoke, curated travel experiences for discerning travelers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Source+Sans+3:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
