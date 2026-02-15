import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about BevSoc — UNSW's Beverage Appreciation Society. Discover our mission, values, and meet the executive team behind BevSoc at UNSW Sydney.",
  keywords: [
    "about BevSoc",
    "BevSoc UNSW about",
    "BevSoc team",
    "BevSoc mission",
    "UNSW Beverage Society about",
    "BevSoc executives",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | BevSoc UNSW",
    description:
      "Learn about BevSoc — UNSW's Beverage Appreciation Society. Our mission, values, and the team behind BevSoc.",
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
