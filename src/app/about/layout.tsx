import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about BevSoc (BSoc / Bev Soc) — UNSW Sydney's Beverage Appreciation Society. Discover the mission, values, and executive team behind the Beverage Society at UNSW.",
  keywords: [
    "about BevSoc",
    "BevSoc UNSW about",
    "about bevsoc",
    "about BSoc",
    "about bsoc",
    "about Bev Soc",
    "about bev soc",
    "BevSoc team",
    "BSoc team",
    "BevSoc mission",
    "UNSW Beverage Society about",
    "BevSoc executives",
    "BSoc executives",
    "Beverage Society UNSW about",
    "Beverage Appreciation Society about",
    "UNSW Beverage Appreciation Society team",
    "who is bevsoc",
    "what is bevsoc",
    "what is bsoc",
    "what is bev soc",
    "bevsoc team unsw",
    "bsoc team unsw",
    "society beverage about",
    "unsw beverage society about",
    "bevsock about",
    "bevsic about",
    "UNSW society about",
    "UNSW club about",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | BevSoc UNSW (BSoc)",
    description:
      "Learn about BevSoc (BSoc / Bev Soc) — UNSW Sydney's Beverage Appreciation Society. Our mission, values, and the team behind the Beverage Society at UNSW.",
    url: "/about",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
