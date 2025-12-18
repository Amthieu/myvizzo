import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Shield } from 'lucide-react';

export function ComplianceBanner() {
  return (
    <Section background="cream" spacing="compact">
      <Container size="lg">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-success/10">
            <Shield className="h-6 w-6 stroke-success" strokeWidth={2} />
          </div>
          <div>
            <h3 className="mb-1 font-bold">100% compliant with Google's Terms of Service</h3>
            <p className="text-sm text-stone-700">
              We encourage authentic reviews. Never incentivized, never gated, never fake. Just
              real feedback from real customers.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
