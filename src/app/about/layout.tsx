import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BevSoc UNSW — Our Mission, Values & Team",
  description:
    "Learn about BevSoc UNSW — the Beverage Appreciation Society at the University of New South Wales. Discover the BevSoc mission, values, and executive team behind UNSW's official beverage society.",
  keywords: [
    "about BevSoc",
    "about BevSoc UNSW",
    "BevSoc UNSW about",
    "about bevsoc",
    "about BSoc",
    "about Bev Soc",
    "BevSoc team",
    "BevSoc UNSW team",
    "BSoc team",
    "BevSoc mission",
    "BevSoc UNSW mission",
    "BevSoc values",
    "UNSW Beverage Society about",
    "BevSoc executives",
    "BSoc executives",
    "Beverage Society UNSW about",
    "Beverage Appreciation Society about",
    "UNSW Beverage Appreciation Society team",
    "who is bevsoc",
    "what is bevsoc",
    "what is bevsoc unsw",
    "what is bsoc",
    "what is bev soc",
    "bevsoc team unsw",
    "unsw beverage society about",
    "UNSW society about",
    "UNSW club about",
    "bevsoc executive team",
    "bevsoc committee",
    "bevsoc unsw committee",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About BevSoc UNSW — Beverage Appreciation Society",
    description:
      "Learn about BevSoc UNSW — the Beverage Appreciation Society at UNSW Sydney. Our mission, values, and the executive team behind UNSW's beverage society.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About BevSoc UNSW — Beverage Appreciation Society",
    description:
      "Learn about BevSoc UNSW — the Beverage Appreciation Society at UNSW Sydney. Our mission, values, and team.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
