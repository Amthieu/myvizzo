import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Card } from '@/components/ui/Card';
import { UtensilsCrossed, Scissors, Wrench, MoreHorizontal, ArrowRight } from 'lucide-react';

export function IndustryGrid() {
  const industries = [
    {
      icon: UtensilsCrossed,
      name: 'Restaurants',
      href: '/restaurants',
    },
    {
      icon: Scissors,
      name: 'Salons',
      href: '/salons',
    },
    {
      icon: Wrench,
      name: 'Auto Repair',
      href: '/auto-repair',
    },
  ];

  return (
    <Section background="white" id="industries">
      <Container size="lg">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
            Built for local businesses
          </h2>
          <p className="text-stone-700">
            Reviews drive trust. Trust drives revenue. Vizzo drives reviews.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <Link key={industry.name} href={industry.href} className="group text-center rounded-xl border border-cream-200 bg-white p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 flex h-18 w-18 items-center justify-center rounded-2xl bg-cream-100 transition-all group-hover:scale-110 group-hover:bg-amber-500 mx-auto">
                <industry.icon className="h-8 w-8 stroke-stone-700 transition-colors group-hover:stroke-stone-950" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-lg font-semibold">{industry.name}</h3>
              <div className="inline-flex items-center gap-1 text-sm font-medium text-amber-500">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}

          {/* And More Card */}
          <Link href="/industries" className="group cursor-pointer rounded-xl border-2 border-dashed border-cream-200 bg-white p-6 text-center transition-all hover:border-amber-500 hover:bg-amber-500/5">
            <div className="mb-4 flex h-18 w-18 items-center justify-center rounded-2xl bg-transparent mx-auto">
              <MoreHorizontal className="h-8 w-8 stroke-stone-700" strokeWidth={1.5} />
            </div>
            <h3 className="mb-1 text-lg font-semibold">And more</h3>
            <p className="mb-3 text-xs text-warm-400">Dental, veterinary, fitness, hotels...</p>
            <div className="inline-flex items-center gap-1 text-sm font-medium text-amber-500">
              See all industries
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
