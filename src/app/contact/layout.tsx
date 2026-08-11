import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Horizontal Pouch Machine Supplier | Bella Pack Tec",
  description: "Get in touch with Bella Pack Tec for inquiries about horizontal pouch packing machines, quotes, custom packaging solutions, and technical support.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Bella Pack Tec",
    description: "Get in touch with Bella Pack Tec for inquiries about horizontal pouch packing machines, quotes, custom packaging solutions, and technical support.",
    url: "https://www.bellapacktec.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
