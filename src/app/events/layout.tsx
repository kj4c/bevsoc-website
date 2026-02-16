import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Browse upcoming and past BevSoc (BSoc) events at UNSW Sydney. Join tastings, socials, and beverage appreciation nights hosted by UNSW's Beverage Society — the Beverage Appreciation Society at UNSW.",
  keywords: [
    "BevSoc events",
    "UNSW BevSoc events",
    "bevsoc events",
    "BSoc events",
    "bsoc events",
    "Bev Soc events",
    "bev soc events",
    "beverage events UNSW",
    "UNSW society events",
    "BevSoc tastings",
    "UNSW social events",
    "Beverage Society events",
    "Beverage Society events UNSW",
    "UNSW Beverage Society events",
    "beverage appreciation events UNSW",
    "UNSW drinks events",
    "UNSW beverage tasting",
    "UNSW coffee events",
    "UNSW tea events",
    "bevsock events",
    "bevsic events",
    "bev soc events unsw",
    "bsoc events unsw",
    "society beverage events",
    "unsw club events",
    "UNSW society socials",
  ],
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Events | BevSoc UNSW (BSoc)",
    description:
      "Browse upcoming and past BevSoc (BSoc / Bev Soc) events at UNSW. Join tastings, socials, and beverage appreciation nights hosted by UNSW's Beverage Society.",
    url: "/events",
    type: "website",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
