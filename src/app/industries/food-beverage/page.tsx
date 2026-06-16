import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Food & Beverage Packaging Machines | Bella Pack",
  description: "Bella Pack food and beverage packaging machines deliver accurate filling and reliable sealing for juices, oils, ghee, grains, and tomato paste.",
};

export default function Page() {
  return <PageContent />;
}
