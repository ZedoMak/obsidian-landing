import { Hero } from "@/components/landing/hero";
import { Navigation } from "@/components/landing/navigation";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { CapabilitiesSection } from "@/components/landing/capabilities-section";
import { GettingStartedSection } from "@/components/landing/getting-started-section";
import { TroubleshootingSection } from "@/components/landing/troubleshooting-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <FeaturesSection />
      <HowItWorksSection />
      <CapabilitiesSection />
      <GettingStartedSection />
      <TroubleshootingSection />
      <FooterSection />
    </main>
  );
}
