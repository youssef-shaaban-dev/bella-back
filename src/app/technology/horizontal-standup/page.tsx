import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Horizontal Stand-Up Pouch Machines",
  description: "Bella Pack Tec horizontal stand-up pouch machines deliver precise filling, secure sealing, and flexible packaging for liquids, powders, and granular products.",
  alternates: {
    canonical: "https://www.bellapacktec.com/technology/horizontal-standup",
  },
  openGraph: {
    title: "Horizontal Stand-Up Pouch Machines | Bella Pack Tec",
    description: "Bella Pack Tec horizontal stand-up pouch machines deliver precise filling, secure sealing, and flexible packaging for liquids, powders, and granular products.",
    url: "https://www.bellapacktec.com/technology/horizontal-standup",
  },
};

const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Horizontal Stand-Up Pouch Packing Machine",
  "image": "https://www.bellapacktec.com/og-image.jpg",
  "description": "Bella Pack Tec horizontal stand-up pouch machines deliver precise filling, secure sealing, and flexible packaging for liquids, powders, and granular products.",
  "brand": {
    "@type": "Brand",
    "name": "Bella Pack Tec"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "18000",
    "highPrice": "85000",
    "offerCount": "10",
    "availability": "https://schema.org/InStock"
  }
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <PageContent />
    </>
  );
}
