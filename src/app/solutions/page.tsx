import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Packaging Solutions for Every Industry | Bella Pack",
  description: "Explore Bella Pack packaging solutions for food, cosmetics, chemicals, and more, with custom pouch machines built for speed, accuracy, and reliability.",
};

export default function Page() {
  return <PageContent />;
}
