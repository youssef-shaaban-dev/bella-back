import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "About Us | Packaging Machine Manufacturer",
  description: "Learn about Bella Pack Tec, an Egyptian packaging machine manufacturer delivering quality machines, custom parts, and reliable after-sales support.",
  alternates: {
    canonical: "https://www.bellapacktec.com/about",
  },
  openGraph: {
    title: "About Us | Packaging Machine Manufacturer | Bella Pack Tec",
    description: "Learn about Bella Pack Tec, an Egyptian packaging machine manufacturer delivering quality machines, custom parts, and reliable after-sales support.",
    url: "https://www.bellapacktec.com/about",
  },
};

export default function Page() {
  return <PageContent />;
}
