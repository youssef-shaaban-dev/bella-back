import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Vertical Packaging Machines | Bella Pack Tec",
  description: "Bella Pack vertical packaging machines deliver efficient filling and sealing for flexible pouches, helping manufacturers improve speed and consistency.",
  alternates: {
    canonical: "/technology/vertical",
  },
};

const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Vertical Form Fill Seal Packaging Machine",
  "image": "https://www.bellapacktec.com/logo.webp",
  "description": "Bella Pack vertical packaging machines deliver efficient filling and sealing for flexible pouches, helping manufacturers improve speed and consistency.",
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
