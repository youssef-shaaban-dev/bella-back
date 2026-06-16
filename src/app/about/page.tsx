import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "About Bella Pack Tec | Packaging Machine Manufacturer",
  description: "Learn about Bella Pack Tec, an Egyptian packaging machine manufacturer since 2000, delivering quality machines, custom parts, and after-sales support.",
};

export default function Page() {
  return <PageContent />;
}
