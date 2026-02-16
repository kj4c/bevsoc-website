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
    "BevSoc (also known as BSoc) is UNSW's Beverage Appreciation Society — the Beverage Society at UNSW Sydney. Whether you search for BevSoc, Bev Soc, UNSW Beverage Society, Society Beverage UNSW, or UNSW BSoc, you'll find us here. Join BevSoc to discover events, meet fellow beverage enthusiasts, and explore the art of drinks at UNSW.",
  keywords: [
    // Primary brand
    "BevSoc",
    "bevsoc",
    "BevSoc UNSW",
    "UNSW BevSoc",
    "bevsoc unsw",
    "unsw bevsoc",
    // Abbreviations
    "BSoc",
    "bsoc",
    "BSoc UNSW",
    "UNSW BSoc",
    "bsoc unsw",
    "unsw bsoc",
    "b soc",
    "b-soc",
    "b soc unsw",
    // Spaced / hyphenated
    "Bev Soc",
    "bev soc",
    "bev-soc",
    "Bev Soc UNSW",
    "bev soc unsw",
    "unsw bev soc",
    "Bev-Soc UNSW",
    // Full names
    "Beverage Society",
    "Beverage Appreciation Society",
    "UNSW Beverage Society",
    "UNSW Beverage Appreciation Society",
    "Beverage Society UNSW",
    "Beverage Appreciation Society UNSW",
    "Society Beverage UNSW",
    "Society Beverage",
    "beverage society unsw",
    "beverage appreciation society unsw",
    // Reversed / reordered
    "society beverage",
    "society beverage unsw",
    "unsw society beverage",
    "appreciation beverage society",
    "beverage unsw society",
    // Domain name / handle
    "unswbevsoc",
    "unsw bevsoc org",
    "unswbevsoc.org",
    // Common misspellings & typos
    "bevsock",
    "bevsock unsw",
    "bevsocc",
    "bevsic",
    "bevsic unsw",
    "bevsc",
    "bevsc unsw",
    "bevsox",
    "bevsox unsw",
    "bevsociety",
    "bevsociety unsw",
    "bev sock",
    "bevsco",
    "bevsco unsw",
    "bevso",
    "bevso unsw",
    "bevsov",
    "bevsov unsw",
    "besoc",
    "besoc unsw",
    "bvsoc",
    "bvsoc unsw",
    "bevspc",
    "bevspc unsw",
    "bevdoc",
    "bevdoc unsw",
    "bevsog",
    "bevsog unsw",
    // Typos on full name
    "beverge society",
    "bevrage society",
    "beveraage society",
    "beverage socety",
    "beverage soceity",
    "beverage socity",
    "beverage sciety",
    "beverage socciety",
    "bevrage society unsw",
    "beverge society unsw",
    "beverage sociey unsw",
    // UNSW-centric
    "UNSW society",
    "UNSW clubs",
    "UNSW Sydney society",
    "UNSW clubs and societies",
    "UNSW Arc clubs",
    "UNSW student society",
    "UNSW uni society",
    "uni beverage club",
    "university beverage society",
    "UNSW university society",
    "UNSW social club",
    "UNSW Sydney clubs",
    "UNSW Kensington society",
    // Drink-related keywords
    "beverage club",
    "drinks society UNSW",
    "coffee society UNSW",
    "tea society UNSW",
    "beverage club UNSW",
    "drinking society UNSW",
    "UNSW drinks club",
    "UNSW coffee club",
    "UNSW tea club",
    "UNSW matcha club",
    "UNSW beverage tasting",
    "UNSW beverage events",
    "bev appreciation UNSW",
    "beverage lovers UNSW",
    "craft drinks UNSW",
    "UNSW drink society",
  ],
  verification: {
    google: "jzpNqT957sqnY2DG3hien95yS3QWE2PwbJghqnYoJGs",
  },
  applicationName: "BevSoc UNSW",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: "BevSoc UNSW",
    title: "BevSoc UNSW | BSoc | Beverage Appreciation Society",
    description:
      "BevSoc (BSoc / Bev Soc) is UNSW Sydney's Beverage Appreciation Society. The Beverage Society at UNSW — discover events, meet fellow enthusiasts, and explore the art of drinks.",
    images: [
      {
        url: "/bevsoclogo_maroon.png",
        width: 512,
        height: 512,
        alt: "BevSoc UNSW — Beverage Appreciation Society Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "BevSoc UNSW | BSoc | Beverage Appreciation Society",
    description:
      "BevSoc (BSoc / Bev Soc) is UNSW's Beverage Appreciation Society. The Beverage Society at UNSW — discover events, meet enthusiasts, and explore the art of drinks.",
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
      alternateName: [
        "BevSoc",
        "BSoc",
        "BSoc UNSW",
        "UNSW BSoc",
        "Bev Soc",
        "Bev Soc UNSW",
        "UNSW Beverage Appreciation Society",
        "Beverage Appreciation Society UNSW",
        "Beverage Society UNSW",
        "UNSW Beverage Society",
        "Society Beverage UNSW",
        "Beverage Society",
        "unswbevsoc",
        "bevsoc unsw",
        "unsw bevsoc",
        "bsoc unsw",
        "bev soc unsw",
        "bevsock",
        "bevsic",
        "bevsocc",
        "bevsco",
        "besoc",
        "bvsoc",
        "bevsociety",
        "UNSW Beverage Club",
        "UNSW Drinks Society",
        "Beverage Appreciation UNSW",
      ],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/bevsoclogo_maroon.png`,
      },
      description:
        "BevSoc (BSoc) is UNSW Sydney's Beverage Appreciation Society. Also known as Bev Soc, Beverage Society UNSW, and UNSW Beverage Society — an inclusive community for beverage enthusiasts.",
      sameAs: [
        "https://www.facebook.com/profile.php?id=61581669824171",
        "https://instagram.com/unswbevsoc",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "BevSoc UNSW",
      alternateName: ["BSoc UNSW", "Bev Soc UNSW", "UNSW Beverage Society", "Beverage Society UNSW"],
      description: "BevSoc (BSoc) — UNSW Sydney's Beverage Appreciation Society. The official Beverage Society at UNSW.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-AU",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "BevSoc UNSW | BSoc | Beverage Appreciation Society",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      description:
        "BevSoc (BSoc / Bev Soc) is UNSW Sydney's Beverage Appreciation Society. Also known as the Beverage Society or Society Beverage at UNSW. Discover events, meet fellow enthusiasts, and explore the art of drinks.",
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
