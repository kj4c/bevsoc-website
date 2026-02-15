import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Browse upcoming and past BevSoc events at UNSW. Join tastings, socials, and beverage appreciation nights hosted by UNSW's Beverage Society.",
  keywords: [
    "BevSoc events",
    "UNSW BevSoc events",
    "beverage events UNSW",
    "UNSW society events",
    "BevSoc tastings",
    "UNSW social events",
  ],
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Events | BevSoc UNSW",
    description:
      "Browse upcoming and past BevSoc events at UNSW. Join tastings, socials, and beverage appreciation nights.",
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
