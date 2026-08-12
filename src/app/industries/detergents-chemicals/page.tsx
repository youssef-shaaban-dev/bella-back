import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Detergents & Chemical Liquid Packaging",
  description: "Corrosion-resistant liquid dosing and pouch sealing machines for liquid detergents, hand soaps, bleach, and household chemical products.",
  alternates: {
    canonical: "https://www.bellapacktec.com/industries/detergents-chemicals",
  },
  openGraph: {
    title: "Detergents & Chemical Liquid Packaging | Bella Pack Tec",
    description: "Corrosion-resistant liquid dosing and pouch sealing machines for liquid detergents, hand soaps, bleach, and household chemical products.",
    url: "https://www.bellapacktec.com/industries/detergents-chemicals",
  },
};

export default function Page() {
  return <PageContent />;
}
