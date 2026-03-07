import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import CompanyStory from "@/components/home/CompanyStory";
import ServicesPreview from "@/components/home/ServicesPreview";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import PricingPreview from "@/components/home/PricingPreview";
import LeadMagnetOffers from "@/components/home/LeadMagnetOffers";
import Testimonials from "@/components/home/Testimonials";
import LogoBar from "@/components/home/LogoBar";
import IndustriesPreview from "@/components/home/IndustriesPreview";
import DesignPreview from "@/components/home/DesignPreview";
import TeamPreview from "@/components/home/TeamPreview";
import WhyChooseUs from "@/components/home/revamp/WhyChooseUs";
import Process from "@/components/home/revamp/Process";
import ImpactMetrics from "@/components/home/phase3/ImpactMetrics";
import GlobalMap from "@/components/home/phase3/GlobalMap";
import SuccessStories from "@/components/home/phase3/SuccessStories";
import AiProductPreview from "@/components/home/AiProductPreview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digivixo | Affordable Custom SaaS Development & AI Automation Agency",
  description: "Scale your startup with Digivixo's affordable custom SaaS development, AI automation, and premium UI UX design. Expert digital solutions for modern businesses.",
  alternates: {
    canonical: 'https://digivixo.site',
  }
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <LogoBar />
      <StatsBar />
      <CompanyStory />
      <ImpactMetrics />
      <WhyChooseUs />
      <GlobalMap />
      <ServicesPreview />
      <CaseStudiesPreview />
      <PricingPreview />
      <LeadMagnetOffers />
      <Testimonials />
      <AiProductPreview />
      <Process />
      <SuccessStories />
      <IndustriesPreview />
      <DesignPreview />
      <TeamPreview />
    </main>
  );
}
