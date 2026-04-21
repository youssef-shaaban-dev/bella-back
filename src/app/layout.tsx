import type { Metadata } from "next";
import { Agdasima, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const agdasima = Agdasima({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-agdasima",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Bella Pack | Industrial Packaging Solutions",
  description: "Ultra-modern, high-end industrial packaging solutions by Bella Pack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${agdasima.variable} ${montserrat.variable} font-body min-h-full flex flex-col bg-white text-charcoal`}>
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

