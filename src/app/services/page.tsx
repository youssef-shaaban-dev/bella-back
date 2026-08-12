import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "After-Sales Support & Technical Services",
  description: "Comprehensive after-sales support including machine installation, operator training, preventive maintenance, and rapid spare parts delivery.",
  alternates: {
    canonical: "https://www.bellapacktec.com/services",
  },
  openGraph: {
    title: "After-Sales Support & Technical Services | Bella Pack Tec",
    description: "Comprehensive after-sales support including machine installation, operator training, preventive maintenance, and rapid spare parts delivery.",
    url: "https://www.bellapacktec.com/services",
  },
};

export default function Page() {
  return <PageContent />;
}
