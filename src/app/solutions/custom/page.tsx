import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Custom Engineering & Packaging Systems",
  description: "Bella Pack Tec designs tailor-made packaging machinery and custom production line solutions built for unique industrial requirements.",
  alternates: {
    canonical: "https://www.bellapacktec.com/solutions/custom",
  },
  openGraph: {
    title: "Custom Engineering & Packaging Systems | Bella Pack Tec",
    description: "Bella Pack Tec designs tailor-made packaging machinery and custom production line solutions built for unique industrial requirements.",
    url: "https://www.bellapacktec.com/solutions/custom",
  },
};

export default function Page() {
  return <PageContent />;
}
