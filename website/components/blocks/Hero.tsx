import Link from 'next/link';
import { buttonVariants } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export function Hero() {
  return (
    <Section background="dark" spacing="hero" className="relative overflow-hidden pt-32">
      {/* Background Pattern */}
      <div
        className="pointer-events-none absolute inset-0 bg-pattern-grid opacity-[0.03]"
        aria-hidden="true"
      />

      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-amber-500/8 to-transparent"
        aria-hidden="true"
      />

      <Container size="lg" className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="dark" className="mb-6">For local businesses</Badge>

          <h1 className="mb-6 text-5xl font-extrabold leading-none tracking-tight lg:text-7xl">
            Your happy customers leave without a review.
            <span className="mt-2 block font-semibold italic text-amber-500">
              Vizzo changes that.
            </span>
          </h1>

          <p className="mb-10 text-lg leading-relaxed text-cream-200 lg:text-xl">
            Premium devices designed to blend into your space and prompt reviews at the
            moment of satisfaction. Paired with a dashboard to track, analyze, and respond.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#waitlist" className={buttonVariants({ size: "lg" })}>
              Join the Waitlist
            </Link>
            <Link href="#how-it-works" className={buttonVariants({ variant: "secondary", size: "lg" })}>
              See How It Works
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
