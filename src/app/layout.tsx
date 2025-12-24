import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const superBubbly = localFont({
  src: "./fonts/SuperBubbly-G35nA.ttf",
  variable: "--font-bubbly",
  display: "swap",
});

const stayPixel = localFont({
  src: "./fonts/StayPixelRegular-EaOxl.ttf",
  variable: "--font-pixel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BevSoc | Beverage Appreciation Society",
  description: "Join BevSoc - the premier beverage appreciation society. Discover events, meet fellow enthusiasts, and explore the art of drinks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${superBubbly.variable} ${stayPixel.variable} antialiased`}>
        <Navbar />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
