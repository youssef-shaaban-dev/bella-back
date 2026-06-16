import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Cosmetics & Pharma Packaging Machines | Bella Pack",
  description: "Bella Pack cosmetics and pharma packaging machines deliver hygienic pouch filling and sealing for creams, gels, and pharmaceutical liquids.",
};

export default function Page() {
  return <PageContent />;
}
