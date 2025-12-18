import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';

export function ROISection() {
  return (
    <Section background="white">
      <Container size="lg">
        <div className="text-center">
          <Badge className="mb-6">The math</Badge>
          <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
            Reviews drive visibility. Visibility drives customers.
          </h2>
        </div>

        {/* The Chain */}
        <div className="mt-12 flex flex-col items-center gap-4 lg:flex-row lg:justify-center lg:gap-6">
          <div className="w-full max-w-xs rounded-xl bg-cream-100 p-6 text-center lg:flex-1">
            <div className="mb-2 text-4xl font-extrabold text-amber-500">3-5×</div>
            <div className="text-sm text-stone-700">
              <strong>more reviews</strong> with in-store prompting vs. no prompting
            </div>
          </div>

          <div className="hidden text-2xl text-warm-400 lg:block">→</div>

          <div className="w-full max-w-xs rounded-xl bg-cream-100 p-6 text-center lg:flex-1">
            <div className="mb-2 text-4xl font-extrabold text-amber-500">+0.1★</div>
            <div className="text-sm text-stone-700">
              rating improvement = <strong>25% more conversions</strong>
            </div>
          </div>

          <div className="hidden text-2xl text-warm-400 lg:block">→</div>

          <div className="w-full max-w-xs rounded-xl bg-cream-100 p-6 text-center lg:flex-1">
            <div className="mb-2 text-4xl font-extrabold text-amber-500">∞</div>
            <div className="text-sm text-stone-700">
              reviews <strong>compound forever</strong>, unlike ads that disappear
            </div>
          </div>
        </div>

        {/* The Example */}
        <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-cream-200 bg-white p-8">
          <h3 className="mb-4 text-xl font-bold">The payback math</h3>
          <div className="space-y-3 text-sm text-stone-700">
            <p>
              Without prompting, only 1-2% of happy customers leave reviews. With Vizzo, that
              jumps to 5-8%. That's <strong className="text-stone-950">3-5× more reviews</strong> than you'd get otherwise.
            </p>
            <p>
              More reviews means better visibility. Better visibility means more customers finding
              you instead of your competitors.
            </p>
            <p className="mt-4 rounded-lg border-l-4 border-amber-500 bg-gradient-to-r from-amber-500/10 to-amber-500/5 px-4 py-3 font-bold text-stone-950">
              One device. <strong>Pays for itself in weeks.</strong> Keeps working for years.
            </p>
          </div>
        </div>

        {/* Comparison */}
        <div className="mx-auto mt-8 max-w-3xl">
          <p className="mb-6 text-center font-semibold text-stone-700">
            Compare that to what you're already spending:
          </p>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <div className="rounded-lg bg-cream-100 p-4 text-center">
              <div className="mb-1 text-sm font-semibold">Monthly ads</div>
              <div className="text-xs text-stone-700">Disappear when you stop paying</div>
            </div>
            <div className="rounded-lg bg-cream-100 p-4 text-center">
              <div className="mb-1 text-sm font-semibold">Email tools</div>
              <div className="text-xs text-stone-700">$20-50/month, low open rates</div>
            </div>
            <div className="rounded-lg bg-cream-100 p-4 text-center">
              <div className="mb-1 text-sm font-semibold">Staff time</div>
              <div className="text-xs text-stone-700">Inconsistent, awkward, forgotten</div>
            </div>
            <div className="rounded-lg border border-amber-500 bg-amber-500/10 p-4 text-center">
              <div className="mb-1 text-sm font-semibold">Vizzo</div>
              <div className="text-xs text-amber-600">One-time investment that compounds</div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center">
          <Link href="#waitlist" className="font-semibold text-amber-500 hover:underline">
            Join the waitlist →
          </Link>
        </p>
      </Container>
    </Section>
  );
}
