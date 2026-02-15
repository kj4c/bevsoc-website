import type { Metadata } from "next";
import localFont from "next/font/local";
import { Allura, Bodoni_Moda, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollSnapController from "@/components/ScrollSnapController";

const SITE_URL = "https://www.unswbevsoc.org";

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
  title: {
    default: "BevSoc UNSW | Beverage Appreciation Society",
    template: "%s | BevSoc UNSW",
  },
  description:
    "BevSoc is UNSW's Beverage Appreciation Society. Join BevSoc to discover events, meet fellow beverage enthusiasts, and explore the art of drinks at UNSW Sydney.",
  keywords: [
    "BevSoc",
    "UNSW BevSoc",
    "BevSoc UNSW",
    "Beverage Society",
    "Beverage Appreciation Society",
    "UNSW Beverage Society",
    "UNSW society",
    "UNSW clubs",
    "UNSW Sydney society",
    "beverage club",
    "drinks society UNSW",
    "coffee society UNSW",
    "UNSW social club",
  ],
  verification: {
    google: "jzpNqT957sqnY2DG3hien95yS3QWE2PwbJghqnYoJGs",
  },
  applicationName: "BevSoc UNSW",
  icons: {
    icon: [{ url: "/bevsoclogo_maroon.png", type: "image/png" }],
    apple: [{ url: "/bevsoclogo_maroon.png" }],
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: "BevSoc UNSW",
    title: "BevSoc UNSW | Beverage Appreciation Society",
    description:
      "BevSoc is UNSW's Beverage Appreciation Society. Discover events, meet fellow enthusiasts, and explore the art of drinks at UNSW Sydney.",
    images: [
      {
        url: "/bevsoclogo_maroon.png",
        width: 512,
        height: 512,
        alt: "BevSoc UNSW Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "BevSoc UNSW | Beverage Appreciation Society",
    description:
      "BevSoc is UNSW's Beverage Appreciation Society. Discover events, meet fellow enthusiasts, and explore the art of drinks.",
    images: ["/bevsoclogo_maroon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "google-site-verification": "jzpNqT957sqnY2DG3hien95yS3QWE2PwbJghqnYoJGs",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "BevSoc UNSW",
      alternateName: ["BevSoc", "UNSW Beverage Appreciation Society", "Beverage Society UNSW"],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/bevsoclogo_maroon.png`,
      },
      description:
        "BevSoc is UNSW's Beverage Appreciation Society. An inclusive community for beverage enthusiasts at UNSW Sydney.",
      sameAs: ["https://discord.gg/bevsoc"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "BevSoc UNSW",
      description: "BevSoc — UNSW's Beverage Appreciation Society",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-AU",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "BevSoc UNSW | Beverage Appreciation Society",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      description:
        "BevSoc is UNSW's Beverage Appreciation Society. Discover events, meet fellow enthusiasts, and explore the art of drinks at UNSW Sydney.",
      inLanguage: "en-AU",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Events",
      url: `${SITE_URL}/events`,
      description: "Upcoming and past BevSoc events at UNSW",
    },
    {
      "@type": "SiteNavigationElement",
      name: "About",
      url: `${SITE_URL}/about`,
      description: "About BevSoc UNSW — our mission, values, and team",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Sponsors",
      url: `${SITE_URL}/sponsors`,
      description: "BevSoc UNSW sponsors and partnership opportunities",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${superBubbly.variable} ${stayPixel.variable} ${syne.variable} ${fredoka.variable} ${allura.variable} ${bodoniModa.variable} ${montserrat.variable} ${amoresa.variable} ${perandory.variable} ${poppins.variable} antialiased`}>
        <ScrollSnapController />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
