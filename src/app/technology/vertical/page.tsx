import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Vertical Packaging Machines | Bella Pack",
  description: "Bella Pack vertical packaging machines deliver efficient filling and sealing for flexible pouches, helping manufacturers improve speed and consistency.",
};

export default function Page() {
  return <PageContent />;
}
