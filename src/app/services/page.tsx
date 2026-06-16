import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Packaging Machine Services | Bella Pack",
  description: "Bella Pack packaging machine services include technical support, custom engineering, spare parts supply, operator training, and production optimization.",
};

export default function Page() {
  return <PageContent />;
}
