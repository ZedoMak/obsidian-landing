import { Hero } from "@/components/landing/hero";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FeaturesSection } from "@/components/landing/features-section";
import { MarketingHowItWorks } from "@/components/landing/marketing-how-it-works";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="relative min-h-screen overflow-x-hidden">
        <Hero />
        <FeaturesSection />
        <MarketingHowItWorks />
      </main>
      <SiteFooter showCta />
    </>
  );
}
