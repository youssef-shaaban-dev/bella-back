import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability & Operational Excellence | Bella Pack Tec",
  description: "Learn about Bella Pack Tec commitment to eco-friendly packaging machines, energy-efficient operations, and sustainable manufacturing practices.",
  alternates: {
    canonical: "/sustainability",
  },
  openGraph: {
    title: "Sustainability & Operational Excellence | Bella Pack Tec",
    description: "Learn about Bella Pack Tec commitment to eco-friendly packaging machines, energy-efficient operations, and sustainable manufacturing practices.",
    url: "https://www.bellapacktec.com/sustainability",
  },
};

export default function SustainabilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
