import { Hero } from '@/components/blocks/Hero';
import { SilentMajority } from '@/components/blocks/SilentMajority';
import { AIComparison } from '@/components/blocks/AIComparison';
import { SolutionCards } from '@/components/blocks/SolutionCards';
import { HowItWorks } from '@/components/blocks/HowItWorks';
import { Benefits } from '@/components/blocks/Benefits';
import { ROISection } from '@/components/blocks/ROISection';
import { StatsGrid } from '@/components/blocks/StatsGrid';
import { IndustryGrid } from '@/components/blocks/IndustryGrid';
import { ComplianceBanner } from '@/components/blocks/ComplianceBanner';
import { CTASection } from '@/components/blocks/CTASection';
import { JsonLd, getOrganizationSchema, getWebsiteSchema } from '@/lib/seo';

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd data={getOrganizationSchema()} />
      <JsonLd data={getWebsiteSchema()} />

      <main>
        <Hero />
        <SilentMajority />
        <AIComparison />
        <SolutionCards />
        <HowItWorks />
        <Benefits />
        <ROISection />
        <StatsGrid />
        <IndustryGrid />
        <ComplianceBanner />
        <CTASection />
      </main>
    </>
  );
}
