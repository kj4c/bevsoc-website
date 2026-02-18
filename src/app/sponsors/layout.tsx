import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BevSoc UNSW Sponsors — Partner With Us",
  description:
    "Meet the sponsors who support BevSoc UNSW — the Beverage Appreciation Society at UNSW Sydney. Interested in partnering with BevSoc? Sponsor UNSW's official beverage society and reach beverage enthusiasts across campus.",
  keywords: [
    "BevSoc sponsors",
    "BevSoc UNSW sponsors",
    "UNSW BevSoc sponsors",
    "bevsoc sponsors",
    "BSoc sponsors",
    "Bev Soc sponsors",
    "BevSoc partners",
    "BevSoc UNSW partners",
    "sponsor BevSoc",
    "sponsor BevSoc UNSW",
    "sponsor BSoc",
    "UNSW society sponsorship",
    "Beverage Society sponsors",
    "Beverage Society sponsors UNSW",
    "UNSW Beverage Society sponsors",
    "Beverage Appreciation Society sponsors",
    "sponsor UNSW society",
    "UNSW club sponsorship",
    "partner beverage society UNSW",
    "UNSW beverage sponsorship",
    "bevsoc partnership",
    "bevsoc unsw sponsorship opportunities",
  ],
  alternates: {
    canonical: "/sponsors",
  },
  openGraph: {
    title: "BevSoc UNSW Sponsors — Partner With the Beverage Society",
    description:
      "Meet the sponsors who support BevSoc UNSW. Interested in partnering with UNSW's Beverage Appreciation Society? Get in touch!",
    url: "/sponsors",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BevSoc UNSW Sponsors — Partner With Us",
    description:
      "Sponsor BevSoc UNSW — the Beverage Appreciation Society at UNSW Sydney.",
  },
};

export default function SponsorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
