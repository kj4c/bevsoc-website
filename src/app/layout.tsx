import type { Metadata } from "next";
import localFont from "next/font/local";
import { Allura, Bodoni_Moda, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingOverlay from "@/components/LoadingOverlay";

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

const syne = localFont({
  src: "./fonts/Syne-VariableFont_wght.ttf",
  variable: "--font-syne",
  display: "swap",
});

const fredoka = localFont({
  src: "./fonts/Fredoka-VariableFont_wdth,wght.ttf",
  variable: "--font-fredoka",
  display: "swap",
});

const allura = Allura({
  weight: "400",
  variable: "--font-allura",
  subsets: ["latin"],
  display: "swap",
});

const bodoniModa = Bodoni_Moda({
  weight: ["400", "500", "600", "700"],
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["700", "800"],
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const amoresa = localFont({
  src: "./fonts/Amoresa.ttf",
  variable: "--font-amoresa",
  display: "swap",
});

const perandory = localFont({
  src: "./fonts/PerandorySemiCondensed.otf",
  variable: "--font-perandory",
  display: "swap",
});

const poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-poppins",
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
      <body className={`${superBubbly.variable} ${stayPixel.variable} ${syne.variable} ${fredoka.variable} ${allura.variable} ${bodoniModa.variable} ${montserrat.variable} ${amoresa.variable} ${perandory.variable} ${poppins.variable} antialiased`}>
        <LoadingOverlay />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
