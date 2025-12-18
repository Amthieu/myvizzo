import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Set up your device',
      description: 'Position Vizzo where customers naturally pause. At checkout, by the door, or wherever satisfaction peaks.',
    },
    {
      number: 2,
      title: 'Capture the moment',
      description: 'When customers are happy, they see Vizzo. Thoughtfully designed prompts encourage them to share, no hard sell required.',
    },
    {
      number: 3,
      title: 'Review in seconds',
      description: 'A quick QR scan or NFC tap takes them straight to your Google review page. No friction, no apps, no accounts to create.',
    },
    {
      number: 4,
      title: 'Monitor and respond',
      description: 'Track new reviews from the dashboard. Get alerts. See trends. Respond quickly with suggested replies.',
    },
    {
      number: 5,
      title: 'Get discovered',
      description: 'More reviews mean better visibility. When AI assistants recommend local businesses, strong review profiles rise to the top.',
    },
  ];

  return (
    <Section background="white" id="how-it-works">
      <Container size="lg">
        <div className="text-center">
          <Badge className="mb-6">How it works</Badge>
          <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
            Simple setup. Continuous results.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-stone-700">
            Vizzo works 24/7. No scripts for your staff. No follow-up emails to send. Just happy customers and more reviews.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-1 gap-4 lg:flex-col lg:gap-0">
                {/* Mobile/Tablet: Horizontal layout with connecting line on left */}
                <div className="lg:hidden">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-xl font-bold text-white shadow-lg shadow-amber-500/30">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-12 h-full w-0.5 bg-gradient-to-b from-amber-500 to-cream-200" />
                  )}
                </div>

                {/* Desktop: Vertical layout with connecting line on top */}
                <div className="hidden lg:block">
                  <div className="relative mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-xl font-bold text-white shadow-lg shadow-amber-500/30">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-[calc(50%+24px)] top-6 h-0.5 w-[calc(100%-48px)] bg-gradient-to-r from-amber-500 to-cream-200" />
                  )}
                </div>

                <div className="lg:text-center">
                  <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
                  <p className="text-sm text-stone-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
