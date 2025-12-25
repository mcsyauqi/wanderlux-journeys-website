import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wanderlux Journeys",
  description: "Luxury Travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
