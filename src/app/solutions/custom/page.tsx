import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Custom Packaging Solutions | Bella Pack",
  description: "Bella Pack custom packaging solutions combine tailored machine engineering, line integration, and reliable support for efficient production.",
};

export default function Page() {
  return <PageContent />;
}
