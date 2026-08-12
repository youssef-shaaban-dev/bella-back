import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Packaging Solutions for Every Industry",
  description: "Explore Bella Pack Tec packaging solutions for food, cosmetics, chemicals, and more, with custom pouch machines built for speed, accuracy, and reliability.",
  alternates: {
    canonical: "https://www.bellapacktec.com/solutions",
  },
  openGraph: {
    title: "Packaging Solutions for Every Industry | Bella Pack Tec",
    description: "Explore Bella Pack Tec packaging solutions for food, cosmetics, chemicals, and more, with custom pouch machines built for speed, accuracy, and reliability.",
    url: "https://www.bellapacktec.com/solutions",
  },
};

export default function Page() {
  return <PageContent />;
}
