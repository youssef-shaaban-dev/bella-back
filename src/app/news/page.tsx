import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Latest News & Exhibition Events | Bella Pack Tec",
  description: "Stay updated with Bella Pack Tec latest industry news, packaging exhibition events, company milestones, and technological innovations.",
  alternates: {
    canonical: "/news",
  },
  openGraph: {
    title: "Latest News & Exhibition Events | Bella Pack Tec",
    description: "Stay updated with Bella Pack Tec latest industry news, packaging exhibition events, company milestones, and technological innovations.",
    url: "https://www.bellapacktec.com/news",
  },
};

export default function Page() {
  return <PageContent />;
}
