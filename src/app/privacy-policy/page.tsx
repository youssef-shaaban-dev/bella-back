import type { Metadata } from "next";
import PrivacyPolicyHero from "@/components/privacy-policy/PrivacyPolicyHero";
import PrivacyPolicyContent from "@/components/privacy-policy/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Bella Pack",
  description: "Privacy Policy of Bella Pack Machinery Corp.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-charcoal">
      <PrivacyPolicyHero />
      <PrivacyPolicyContent />
    </main>
  );
}
