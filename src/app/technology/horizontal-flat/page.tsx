import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Horizontal Flat Pouch Machines | Bella Pack Tec",
  description: "Bella Pack horizontal flat pouch machines deliver accurate filling, reliable sealing, and efficient production for flexible packaging applications.",
  alternates: {
    canonical: "/technology/horizontal-flat",
  },
};

const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Horizontal Flat Pouch Packing Machine",
  "image": "https://www.bellapacktec.com/logo.webp",
  "description": "Bella Pack horizontal flat pouch machines deliver accurate filling, reliable sealing, and efficient production for flexible packaging applications.",
  "brand": {
    "@type": "Brand",
    "name": "Bella Pack Tec"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
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
