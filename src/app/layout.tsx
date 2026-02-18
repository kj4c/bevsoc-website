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
    "BevSoc is UNSW's Beverage Appreciation Society. BevSoc UNSW hosts beverage tastings, socials, and drink appreciation events at UNSW Sydney. Join BevSoc — the official beverage society at the University of New South Wales.",
  keywords: [
    "BevSoc",
    "BevSoc UNSW",
    "UNSW BevSoc",
    "bevsoc",
    "bevsoc unsw",
    "unsw bevsoc",
    "Bev Soc",
    "bev soc",
    "bev-soc",
    "Bev Soc UNSW",
    "bev soc unsw",
    "unsw bev soc",
    "Bev-Soc UNSW",
    "BSoc",
    "BSoc UNSW",
    "bsoc",
    "bsoc unsw",
    "Beverage Society",
    "Beverage Appreciation Society",
    "UNSW Beverage Society",
    "UNSW Beverage Appreciation Society",
    "Beverage Society UNSW",
    "Beverage Appreciation Society UNSW",
    "beverage society unsw",
    "beverage appreciation society unsw",
    "unswbevsoc",
    "unsw bevsoc org",
    "unswbevsoc.org",
    "www.unswbevsoc.org",
    "bevsock",
    "bevsock unsw",
    "bevsocc",
    "bevsic",
    "bevsic unsw",
    "bevsc",
    "bevsox",
    "bevsociety",
    "bevsociety unsw",
    "bevsco",
    "besoc",
    "bvsoc",
    "bevdoc",
    "UNSW society",
    "UNSW clubs",
    "UNSW Sydney society",
    "UNSW clubs and societies",
    "UNSW Arc clubs",
    "UNSW student society",
    "beverage club",
    "drinks society UNSW",
    "coffee society UNSW",
    "tea society UNSW",
    "beverage club UNSW",
    "UNSW drinks club",
    "UNSW coffee club",
    "UNSW tea club",
    "UNSW matcha club",
    "UNSW beverage tasting",
    "UNSW beverage events",
    "beverage lovers UNSW",
    "craft drinks UNSW",
    "UNSW drink society",
  ],
  verification: {
    google: "jzpNqT957sqnY2DG3hien95yS3QWE2PwbJghqnYoJGs",
  },
  applicationName: "BevSoc UNSW",
  manifest: "/manifest.json",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
    languages: {
      "en-AU": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: "BevSoc UNSW",
    title: "BevSoc UNSW — Beverage Appreciation Society",
    description:
      "BevSoc is UNSW Sydney's Beverage Appreciation Society. BevSoc UNSW brings together beverage enthusiasts for tastings, socials, and drink appreciation events at the University of New South Wales.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@unswbevsoc",
    creator: "@unswbevsoc",
    title: "BevSoc UNSW — Beverage Appreciation Society",
    description:
      "BevSoc is UNSW's Beverage Appreciation Society. BevSoc UNSW hosts beverage tastings, socials, and drink events at the University of New South Wales.",
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
      legalName: "BevSoc UNSW — Beverage Appreciation Society",
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
        "Beverage Society",
        "unswbevsoc",
        "bevsoc unsw",
        "unsw bevsoc",
        "bsoc unsw",
        "bev soc unsw",
        "UNSW Beverage Club",
        "UNSW Drinks Society",
        "Beverage Appreciation UNSW",
      ],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon`,
        width: 64,
        height: 64,
      },
      image: `${SITE_URL}/opengraph-image`,
      description:
        "BevSoc UNSW is the Beverage Appreciation Society at the University of New South Wales (UNSW Sydney). BevSoc brings together beverage enthusiasts for tastings, socials, and drink appreciation events. BevSoc is a beverage and drinks society — not a developer or tech society.",
      foundingLocation: {
        "@type": "Place",
        name: "UNSW Sydney",
        address: {
          "@type": "PostalAddress",
          streetAddress: "High St",
          addressLocality: "Kensington",
          addressRegion: "NSW",
          postalCode: "2052",
          addressCountry: "AU",
        },
      },
      parentOrganization: {
        "@type": "CollegeOrUniversity",
        name: "University of New South Wales",
        alternateName: ["UNSW", "UNSW Sydney"],
        url: "https://www.unsw.edu.au",
      },
      memberOf: {
        "@type": "Organization",
        name: "Arc UNSW",
        url: "https://www.arc.unsw.edu.au",
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61581669824171",
        "https://www.instagram.com/unswbevsoc",
        "https://www.unswbevsoc.org",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        url: "https://www.instagram.com/unswbevsoc",
      },
      knowsAbout: [
        "Beverages",
        "Coffee",
        "Tea",
        "Boba",
        "Matcha",
        "Craft drinks",
        "Beverage tasting",
        "Drink appreciation",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "BevSoc UNSW",
      alternateName: [
        "BSoc UNSW",
        "Bev Soc UNSW",
        "UNSW Beverage Society",
        "Beverage Society UNSW",
        "BevSoc",
        "unswbevsoc.org",
      ],
      description:
        "BevSoc UNSW — the official Beverage Appreciation Society at UNSW Sydney. BevSoc hosts beverage events, tastings, and socials for UNSW students.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-AU",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/events`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "BevSoc UNSW | Beverage Appreciation Society",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      description:
        "BevSoc UNSW is the Beverage Appreciation Society at the University of New South Wales. Discover BevSoc events, meet fellow beverage enthusiasts, and explore the art of drinks at UNSW Sydney.",
      inLanguage: "en-AU",
      breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "BevSoc UNSW Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "BevSoc Events",
          item: `${SITE_URL}/events`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "About BevSoc",
          item: `${SITE_URL}/about`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "BevSoc Sponsors",
          item: `${SITE_URL}/sponsors`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is BevSoc UNSW?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BevSoc UNSW is the Beverage Appreciation Society at the University of New South Wales (UNSW Sydney). BevSoc is a student-run society dedicated to bringing together beverage enthusiasts through tastings, socials, and drink appreciation events. BevSoc is a beverage society, not a developer society.",
          },
        },
        {
          "@type": "Question",
          name: "What does BevSoc stand for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BevSoc stands for Beverage Society — short for Beverage Appreciation Society. BevSoc UNSW is also known as BSoc, Bev Soc, or the UNSW Beverage Society.",
          },
        },
        {
          "@type": "Question",
          name: "How do I join BevSoc UNSW?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can join BevSoc UNSW by signing up through Arc UNSW or by visiting the BevSoc website at unswbevsoc.org. Follow @unswbevsoc on Instagram and Facebook for the latest events and updates.",
          },
        },
        {
          "@type": "Question",
          name: "What events does BevSoc UNSW hold?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BevSoc UNSW hosts a wide range of beverage events including boba-building workshops, beverage tasting nights, themed socials, coffee meetups, and collaborative events with other UNSW societies. Check the BevSoc events page at unswbevsoc.org/events for upcoming events.",
          },
        },
        {
          "@type": "Question",
          name: "Is BevSoc the same as DevSoc?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. BevSoc and DevSoc are completely different UNSW societies. BevSoc (Beverage Appreciation Society) is about beverages and drinks. DevSoc (Developer Society) is about software development. BevSoc UNSW is at unswbevsoc.org.",
          },
        },
      ],
    },
    {
      "@type": "SiteNavigationElement",
      name: "BevSoc Events",
      url: `${SITE_URL}/events`,
      description:
        "Upcoming and past BevSoc UNSW events — beverage tastings, socials, and drink appreciation nights",
    },
    {
      "@type": "SiteNavigationElement",
      name: "About BevSoc",
      url: `${SITE_URL}/about`,
      description:
        "About BevSoc UNSW — the mission, values, and executive team of the Beverage Appreciation Society",
    },
    {
      "@type": "SiteNavigationElement",
      name: "BevSoc Sponsors",
      url: `${SITE_URL}/sponsors`,
      description:
        "BevSoc UNSW sponsors and partnership opportunities with the Beverage Appreciation Society",
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
