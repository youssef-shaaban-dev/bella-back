import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Job Opportunities | Bella Pack Tec",
  description: "Join the Bella Pack Tec team. Explore engineering, technical, and sales career opportunities in industrial packaging machinery.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers & Job Opportunities | Bella Pack Tec",
    description: "Join the Bella Pack Tec team. Explore engineering, technical, and sales career opportunities in industrial packaging machinery.",
    url: "https://www.bellapacktec.com/careers",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
