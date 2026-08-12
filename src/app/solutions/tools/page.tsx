import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Spare Parts & Packaging Machine Tools",
  description: "High-precision replacement tooling, forming plows, sealing jaws, and genuine spare parts for horizontal and vertical pouch packaging machines.",
  alternates: {
    canonical: "https://www.bellapacktec.com/solutions/tools",
  },
  openGraph: {
    title: "Spare Parts & Packaging Machine Tools | Bella Pack Tec",
    description: "High-precision replacement tooling, forming plows, sealing jaws, and genuine spare parts for horizontal and vertical pouch packaging machines.",
    url: "https://www.bellapacktec.com/solutions/tools",
  },
};

export default function Page() {
  return <PageContent />;
}
