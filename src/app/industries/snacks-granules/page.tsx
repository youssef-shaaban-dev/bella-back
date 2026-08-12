import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Snacks & Granules Packaging Machinery",
  description: "High-speed multihead weigher pouch machines for nuts, potato chips, dried fruits, confectionery, and granular product packaging.",
  alternates: {
    canonical: "https://www.bellapacktec.com/industries/snacks-granules",
  },
  openGraph: {
    title: "Snacks & Granules Packaging Machinery | Bella Pack Tec",
    description: "High-speed multihead weigher pouch machines for nuts, potato chips, dried fruits, confectionery, and granular product packaging.",
    url: "https://www.bellapacktec.com/industries/snacks-granules",
  },
};

export default function Page() {
  return <PageContent />;
}
