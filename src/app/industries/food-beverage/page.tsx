import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Food & Beverage Packaging Machines",
  description: "Bella Pack Tec food and beverage packaging machines deliver accurate filling and reliable sealing for juices, oils, ghee, grains, and tomato paste.",
  alternates: {
    canonical: "https://www.bellapacktec.com/industries/food-beverage",
  },
  openGraph: {
    title: "Food & Beverage Packaging Machines | Bella Pack Tec",
    description: "Bella Pack Tec food and beverage packaging machines deliver accurate filling and reliable sealing for juices, oils, ghee, grains, and tomato paste.",
    url: "https://www.bellapacktec.com/industries/food-beverage",
  },
};

export default function Page() {
  return <PageContent />;
}
