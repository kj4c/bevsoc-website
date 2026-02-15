import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Meet the sponsors who support BevSoc at UNSW. Interested in partnering with UNSW's Beverage Appreciation Society? Get in touch!",
  keywords: [
    "BevSoc sponsors",
    "UNSW BevSoc sponsors",
    "BevSoc partners",
    "sponsor BevSoc",
    "UNSW society sponsorship",
  ],
  alternates: {
    canonical: "/sponsors",
  },
  openGraph: {
    title: "Sponsors | BevSoc UNSW",
    description:
      "Meet the sponsors who support BevSoc at UNSW. Interested in partnering? Get in touch!",
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
