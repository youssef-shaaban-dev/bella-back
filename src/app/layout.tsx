import type { Metadata } from "next";
import { Agdasima, Montserrat } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://www.bellapacktec.com"),
  title: {
    default: "Horizontal Pouch Packing Machines | Bella Pack Tec",
    template: "%s | Bella Pack Tec",
  },
  description: "Discover Bella Pack Tec horizontal pouch packing machines for food, cosmetics, liquids, powders, and custom packaging with reliable after-sales support.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Horizontal Pouch Packing Machines | Bella Pack Tec",
    description: "Discover Bella Pack Tec horizontal pouch packing machines for food, cosmetics, liquids, powders, and custom packaging with reliable after-sales support.",
    url: "https://www.bellapacktec.com",
    siteName: "Bella Pack Tec",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bella Pack Tec Industrial Packaging Machines",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Horizontal Pouch Packing Machines | Bella Pack Tec",
    description: "Discover Bella Pack Tec horizontal pouch packing machines for food, cosmetics, liquids, powders, and custom packaging.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Bella Pack Tec",
  "alternateName": "BellaPack",
  "url": "https://www.bellapacktec.com/",
  "logo": "https://www.bellapacktec.com/logo.webp",
  "description": "Manufacturer of horizontal pouch packing machines for food, cosmetics, liquids, powders, and custom packaging solutions.",
  "foundingDate": "2015",
  "email": "Info@bellapacktec.com",
  "telephone": "+201019222211",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "EG",
    "addressRegion": "Cairo"
  },
  "sameAs": [
    "https://www.facebook.com/bellapacktec",
    "https://www.instagram.com/bellapacktec",
    "https://www.linkedin.com/company/bellapacktec"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+201019222211",
    "contactType": "sales",
    "availableLanguage": ["English", "Arabic"]
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Bella Pack Tec",
  "image": "https://www.bellapacktec.com/logo.webp",
  "url": "https://www.bellapacktec.com/",
  "telephone": "+201019222211",
  "email": "Info@bellapacktec.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "EG",
    "addressRegion": "Cairo"
  },
  "priceRange": "$$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W6MNCZ4H');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${agdasima.variable} ${montserrat.variable} font-body min-h-full flex flex-col bg-white text-charcoal`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W6MNCZ4H"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
