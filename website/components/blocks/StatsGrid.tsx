import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export function StatsGrid() {
  return (
    <Section background="cream">
      <Container size="lg">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
            Reviews aren't optional anymore
          </h2>
        </div>

        <div className="mx-auto mb-8 max-w-2xl text-center">
          <p className="text-stone-700">
            Your competitors are getting reviews while you're not. Every day without a review
            strategy is a day they pull ahead. The businesses that invest now will have an
            increasingly difficult-to-close lead over those who wait.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-cream-200 bg-white p-8 text-center">
            <div className="mb-3 text-6xl font-extrabold leading-none tracking-tight text-amber-500">
              721%
            </div>
            <div className="text-sm leading-relaxed text-stone-700">
              Growth in AI search platform traffic, year over year
            </div>
          </div>

          <div className="rounded-xl border border-cream-200 bg-white p-8 text-center">
            <div className="mb-3 text-6xl font-extrabold leading-none tracking-tight text-amber-500">
              93%
            </div>
            <div className="text-sm leading-relaxed text-stone-700">
              of consumers read reviews before visiting a local business
            </div>
          </div>

          <div className="rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/8 to-amber-500/3 p-8 text-center">
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber-600">
              The #1 signal
            </div>
            <div className="mb-3 text-3xl font-extrabold leading-none tracking-tight text-stone-950">
              Reviews
            </div>
            <div className="text-sm leading-relaxed text-stone-700">
              AI uses to make local business recommendations
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
