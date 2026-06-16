import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Snacks & Granules Packaging Machines | Bella Pack",
  description: "Bella Pack snacks and granules packaging machines deliver fast, reliable pouch packing for nuts, candies, snacks, and granular products.",
};

export default function Page() {
  return <PageContent />;
}
