import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Spices & Coffee Packaging Machinery",
  description: "Aroma-preserving auger filling and airtight pouch sealing machines for ground coffee, tea, whole spices, seasonings, and powder packaging.",
  alternates: {
    canonical: "https://www.bellapacktec.com/industries/spices-coffee",
  },
  openGraph: {
    title: "Spices & Coffee Packaging Machinery | Bella Pack Tec",
    description: "Aroma-preserving auger filling and airtight pouch sealing machines for ground coffee, tea, whole spices, seasonings, and powder packaging.",
    url: "https://www.bellapacktec.com/industries/spices-coffee",
  },
};

export default function Page() {
  return <PageContent />;
}
