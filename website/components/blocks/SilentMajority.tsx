import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';

export function SilentMajority() {
  // Generate 100 dots: 98 silent, 2 active
  const dots = Array.from({ length: 100 }, (_, i) => i < 98);

  return (
    <Section background="cream">
      <Container size="md">
        <div className="text-center">
          <Badge className="mb-6">The problem</Badge>
          <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
            The silent majority
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-stone-700">
            Your happy customers loved the experience. They just didn't tell anyone. By the
            time they walk out, the moment has passed.
          </p>
        </div>

        {/* The Gap Visual */}
        <div className="mx-auto mt-12 max-w-lg">
          <div className="inline-block rounded-2xl border border-cream-200 bg-white p-8 sm:p-12">
            {/* Stat */}
            <div className="mb-6 text-center">
              <div className="mb-2 text-7xl font-extrabold leading-none tracking-tighter text-amber-500 sm:text-8xl">
                98%
              </div>
              <div className="text-lg font-medium text-stone-700">
                of satisfied customers leave{' '}
                <span className="whitespace-nowrap">without reviewing</span>
              </div>
            </div>

            {/* Dots Grid */}
            <div className="mb-4">
              <div className="mx-auto grid w-fit grid-cols-20 gap-1.5">
                {dots.map((isSilent, index) => (
                  <div
                    key={index}
                    className={`h-2.5 w-2.5 rounded-full ${
                      isSilent
                        ? 'bg-cream-200'
                        : 'bg-amber-500 shadow-[0_0_8px_rgba(217,119,6,0.4)]'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-6 text-xs text-stone-600">
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-cream-200" />
                <span>Silent</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-amber-500" />
                <span>Left a review</span>
              </div>
            </div>
          </div>

          {/* Contrast */}
          <div className="mx-auto mt-8 max-w-md space-y-4">
            <p className="text-center text-stone-600">
              Meanwhile, unhappy customers almost always find time to complain.
            </p>
            <p className="rounded-lg border-l-4 border-amber-500 bg-gradient-to-r from-amber-500/10 to-amber-500/5 px-6 py-4 text-center font-bold text-stone-950">
              Your reviews don't reflect your reality.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
