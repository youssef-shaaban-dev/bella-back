import type { Metadata } from "next";
import { Agdasima, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import SmoothScroll from "@/components/shared/SmoothScroll";

const agdasima = Agdasima({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-agdasima",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Horizontal Pouch Packing Machines | Bella Pack Tec",
  description: "Discover Bella Pack Tec horizontal pouch packing machines for food, cosmetics, liquids, powders, and custom packaging with reliable after-sales support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${agdasima.variable} ${montserrat.variable} font-body min-h-full flex flex-col bg-white text-charcoal`}>
        <SmoothScroll />
        <Header />
        <div className="grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

