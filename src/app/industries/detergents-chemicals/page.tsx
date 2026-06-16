import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Detergents & Chemical Packaging Machines | Bella Pack",
  description: "Explore Bella Pack detergents and chemicals packaging machines for liquid detergents, bleach, and corrosive products with reliable filling and sealing.",
};

export default function Page() {
  return <PageContent />;
}
