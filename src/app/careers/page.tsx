import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Careers & Job Opportunities",
  description: "Join the Bella Pack Tec team. Explore engineering, technical, and sales career opportunities in industrial packaging machinery.",
  alternates: {
    canonical: "https://www.bellapacktec.com/careers",
  },
  openGraph: {
    title: "Careers & Job Opportunities | Bella Pack Tec",
    description: "Join the Bella Pack Tec team. Explore engineering, technical, and sales career opportunities in industrial packaging machinery.",
    url: "https://www.bellapacktec.com/careers",
  },
};

export default function Page() {
  return <PageContent />;
}
