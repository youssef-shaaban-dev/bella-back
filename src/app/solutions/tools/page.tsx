import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Packaging Performance Tools | Bella Pack",
  description: "Bella Pack technical and performance tools help optimize packaging speed, dosing accuracy, sealing quality, and production reliability.",
};

export default function Page() {
  return <PageContent />;
}
