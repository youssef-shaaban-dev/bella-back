import type { Metadata } from "next";
import PrivacyPolicyHero from "@/components/privacy-policy/PrivacyPolicyHero";
import PrivacyPolicyContent from "@/components/privacy-policy/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Bella Pack Tec privacy policy regarding data collection, client confidentiality, cookie usage, and website security.",
  alternates: {
    canonical: "https://www.bellapacktec.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Bella Pack Tec",
    description: "Read Bella Pack Tec privacy policy regarding data collection, client confidentiality, cookie usage, and website security.",
    url: "https://www.bellapacktec.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-charcoal relative">
      <PrivacyPolicyHero />
      <section className="bg-white relative z-20 pb-24 -mt-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto pt-12">
            <PrivacyPolicyContent />
          </div>
        </div>
      </section>
    </main>
  );
}
