'use client';

import { useState, FormEvent } from 'react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export function CTASection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement waitlist signup
    console.log('Signing up:', email);

    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      alert('Thanks for joining the waitlist!');
    }, 1000);
  };

  return (
    <Section background="dark" spacing="spacious" id="waitlist">
      <Container size="md">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
            Turn your happy customers into reviewers
          </h2>
          <p className="mb-10 text-cream-200">
            Join the waitlist to get notified when we launch. Early supporters get the best
            pricing.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" size="lg" disabled={isSubmitting}>
              {isSubmitting ? 'Joining...' : 'Join Waitlist'}
            </Button>
          </form>

          <p className="mt-4 text-sm text-warm-400">
            No spam. Just launch updates and early access.
          </p>
        </div>
      </Container>
    </Section>
  );
}
