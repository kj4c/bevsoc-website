import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BevSoc UNSW Events — Tastings, Socials & More",
  description:
    "Browse upcoming and past BevSoc UNSW events. BevSoc — the Beverage Appreciation Society at UNSW Sydney — hosts beverage tastings, socials, boba workshops, and drink appreciation nights for UNSW students.",
  keywords: [
    "BevSoc events",
    "BevSoc UNSW events",
    "UNSW BevSoc events",
    "bevsoc events",
    "BSoc events",
    "bsoc events",
    "Bev Soc events",
    "beverage events UNSW",
    "UNSW society events",
    "BevSoc tastings",
    "BevSoc UNSW tastings",
    "UNSW social events",
    "Beverage Society events",
    "Beverage Society events UNSW",
    "UNSW Beverage Society events",
    "beverage appreciation events UNSW",
    "UNSW drinks events",
    "UNSW beverage tasting",
    "UNSW coffee events",
    "UNSW tea events",
    "UNSW boba events",
    "bevsoc socials",
    "bevsoc workshops",
    "bevsoc unsw socials",
    "UNSW club events",
    "UNSW society socials",
    "beverage tasting night UNSW",
    "boba workshop UNSW",
  ],
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "BevSoc UNSW Events — Beverage Tastings & Socials",
    description:
      "Browse upcoming and past BevSoc UNSW events — beverage tastings, socials, boba workshops, and drink appreciation nights at UNSW Sydney.",
    url: "/events",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BevSoc UNSW Events — Beverage Tastings & Socials",
    description:
      "Browse upcoming and past BevSoc UNSW events at the University of New South Wales.",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
