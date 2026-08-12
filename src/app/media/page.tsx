import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Media & Video Library",
  description: "Watch Bella Pack Tec packaging machines in action. High-speed horizontal pouch filling, sealing demonstrations, and operational videos.",
  alternates: {
    canonical: "https://www.bellapacktec.com/media",
  },
  openGraph: {
    title: "Media & Video Library | Bella Pack Tec",
    description: "Watch Bella Pack Tec packaging machines in action. High-speed horizontal pouch filling, sealing demonstrations, and operational videos.",
    url: "https://www.bellapacktec.com/media",
  },
};

export default function Page() {
  return <PageContent />;
}
