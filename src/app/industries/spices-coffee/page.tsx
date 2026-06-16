import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Spices & Coffee Packaging Machines | Bella Pack",
  description: "Bella Pack spices and coffee packaging machines ensure accurate powder filling, aroma protection, and efficient pouch packing with minimal waste.",
};

export default function Page() {
  return <PageContent />;
}
