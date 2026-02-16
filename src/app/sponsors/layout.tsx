import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Meet the sponsors who support BevSoc (BSoc / Bev Soc) at UNSW Sydney. Interested in partnering with UNSW's Beverage Appreciation Society? Sponsor the Beverage Society at UNSW — get in touch!",
  keywords: [
    "BevSoc sponsors",
    "UNSW BevSoc sponsors",
    "bevsoc sponsors",
    "BSoc sponsors",
    "bsoc sponsors",
    "Bev Soc sponsors",
    "bev soc sponsors",
    "BevSoc partners",
    "sponsor BevSoc",
    "sponsor BSoc",
    "UNSW society sponsorship",
    "Beverage Society sponsors",
    "Beverage Society sponsors UNSW",
    "UNSW Beverage Society sponsors",
    "Beverage Appreciation Society sponsors",
    "sponsor UNSW society",
    "UNSW club sponsorship",
    "bevsock sponsors",
    "bevsic sponsors",
    "society beverage sponsors",
    "partner beverage society unsw",
    "sponsor bev soc unsw",
    "UNSW beverage sponsorship",
  ],
  alternates: {
    canonical: "/sponsors",
  },
  openGraph: {
    title: "Sponsors | BevSoc UNSW (BSoc)",
    description:
      "Meet the sponsors who support BevSoc (BSoc / Bev Soc) at UNSW. Interested in partnering with UNSW's Beverage Society? Get in touch!",
    url: "/sponsors",
    type: "website",
  },
};

export default function SponsorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
