import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Card } from '@/components/ui/Card';
import { Star, Zap, MessageCircle, Clock } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Star,
      title: 'More reviews from happy customers',
      description:
        "Your satisfied customers become your advocates. Vizzo prompts them at the moment they're most likely to share, not hours later via email.",
    },
    {
      icon: Zap,
      title: 'Generate momentum',
      description:
        'Reviews compound. More reviews lead to better visibility, which leads to more customers, which leads to more reviews. Vizzo helps you start the flywheel.',
    },
    {
      icon: MessageCircle,
      title: "Show you're listening",
      description:
        "Customers see a business that cares about feedback. Whether you're maintaining a 4.8 or rebuilding from a rough patch, Vizzo signals commitment to your customers.",
    },
    {
      icon: Clock,
      title: 'Works in the background',
      description:
        'No scripts for staff to memorize. No email sequences to manage. Vizzo works automatically while you focus on what you do best.',
    },
  ];

  return (
    <Section background="cream">
      <Container size="lg">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
            Why businesses choose Vizzo
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit) => (
            <Card key={benefit.title} variant="elevated" className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
                <benefit.icon className="h-5 w-5 stroke-amber-500" strokeWidth={2} />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-stone-700">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
