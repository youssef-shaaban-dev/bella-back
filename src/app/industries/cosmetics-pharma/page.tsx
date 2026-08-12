import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Cosmetics & Pharma Filling Machinery",
  description: "Sanitary stainless-steel pouch filling and sealing equipment for creams, lotions, gels, shampoos, and pharmaceutical liquid products.",
  alternates: {
    canonical: "https://www.bellapacktec.com/industries/cosmetics-pharma",
  },
  openGraph: {
    title: "Cosmetics & Pharma Filling Machinery | Bella Pack Tec",
    description: "Sanitary stainless-steel pouch filling and sealing equipment for creams, lotions, gels, shampoos, and pharmaceutical liquid products.",
    url: "https://www.bellapacktec.com/industries/cosmetics-pharma",
  },
};

export default function Page() {
  return <PageContent />;
}
