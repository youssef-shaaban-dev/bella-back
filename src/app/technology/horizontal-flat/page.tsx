import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Horizontal Flat Pouch Machines",
  description: "Bella Pack Tec horizontal flat pouch machines deliver accurate filling, reliable sealing, and efficient production for flexible packaging applications.",
  alternates: {
    canonical: "https://www.bellapacktec.com/technology/horizontal-flat",
  },
  openGraph: {
    title: "Horizontal Flat Pouch Machines | Bella Pack Tec",
    description: "Bella Pack Tec horizontal flat pouch machines deliver accurate filling, reliable sealing, and efficient production for flexible packaging applications.",
    url: "https://www.bellapacktec.com/technology/horizontal-flat",
  },
};

const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Horizontal Flat Pouch Packing Machine",
  "image": "https://www.bellapacktec.com/og-image.jpg",
  "description": "Bella Pack Tec horizontal flat pouch machines deliver accurate filling, reliable sealing, and efficient production for flexible packaging applications.",
  "brand": {
    "@type": "Brand",
    "name": "Bella Pack Tec"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "15000",
    "highPrice": "65000",
    "offerCount": "12",
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
