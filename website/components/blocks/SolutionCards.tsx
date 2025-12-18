import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { Clock, Star, Settings, MessageSquare, BarChart3, Bell, Edit3, Users, Globe } from 'lucide-react';

export function SolutionCards() {
  return (
    <Section background="cream" id="solution">
      <Container size="xl">
        <div className="text-center">
          <Badge className="mb-6">The solution</Badge>
          <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
            Capture reviews at the perfect moment
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-stone-700">
            Satisfied customers rarely go home and leave a review. But while they're still in your space, enjoying that post-meal glow or admiring their fresh haircut, a well-placed prompt turns satisfaction into action.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Device Card */}
          <div className="overflow-hidden rounded-2xl border border-cream-200 bg-stone-950 text-cream-50">
            <div className="p-6 lg:p-8">
              <span className="mb-3 inline-block rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-500">
                Hardware
              </span>
              <h3 className="mb-4 text-3xl font-bold">A review-generating device</h3>
              <p className="mb-6 text-cream-100 opacity-85">
                Vizzo sits at your counter, register, or waiting area. Wherever satisfaction peaks. Multiple form factors designed to fit naturally into different business environments. Not a screen bolted onto your space, but a device that belongs there. It displays your live Google rating alongside messaging designed to inspire action.
              </p>

              {/* Device Preview */}
              <div className="mb-6 rounded-xl bg-stone-900 p-6 text-center">
                <div className="mx-auto max-w-xs">
                  <div className="mb-3 text-6xl font-extrabold leading-none tracking-tighter text-amber-500">
                    4.9
                  </div>
                  <div className="mb-3 text-xl tracking-widest text-amber-500">
                    ★★★★★
                  </div>
                  <div className="mb-4 text-sm leading-relaxed text-cream-100">
                    Loved your visit? Join 847 customers who shared their experience.
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white">
                      <svg className="h-5 w-5 fill-stone-800" viewBox="0 0 24 24">
                        <path d="M3 11h2v2H3v-2zm0-4h2v2H3V7zm0 8h2v2H3v-2zm4-4h2v2H7v-2zm0-4h2v2H7V7zm0 8h2v2H7v-2zm4-4h2v2h-2v-2zm0-4h2v2h-2V7zm0 8h2v2h-2v-2zm4 0h2v2h-2v-2zm0-4h2v2h-2v-2zm0-4h2v2h-2V7zm4 8h2v2h-2v-2zm0-4h2v2h-2v-2zm0-4h2v2h-2V7z"/>
                      </svg>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white">
                      <svg className="h-5 w-5 fill-stone-800" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16z"/>
                      </svg>
                    </div>
                    <span className="ml-1 text-xs text-cream-200">Scan or tap to review</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                    <Clock className="h-5 w-5 stroke-amber-500" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-semibold">Perfect timing</div>
                    <div className="text-sm text-cream-200">
                      Prompts customers at peak satisfaction, before they walk out and forget
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                    <Star className="h-5 w-5 stroke-amber-500" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-semibold">Social proof that converts</div>
                    <div className="text-sm text-cream-200">
                      Seeing your strong rating makes customers want to add their voice
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                    <Settings className="h-5 w-5 stroke-amber-500" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-semibold">Fully customizable</div>
                    <div className="text-sm text-cream-200">
                      Adapt the display to your brand tone. Hide ratings during recovery periods. You control the message.
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                    <MessageSquare className="h-5 w-5 stroke-amber-500" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-semibold">Copy that converts</div>
                    <div className="text-sm text-cream-200">
                      No "Please review us!" here. Messaging that makes action feel natural.
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                    <BarChart3 className="h-5 w-5 stroke-amber-500" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-semibold">Works 24/7</div>
                    <div className="text-sm text-cream-200">
                      No scripts for staff, no follow-up emails. Just continuous results.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Card */}
          <div className="overflow-hidden rounded-2xl border border-cream-200 bg-white">
            <div className="p-6 lg:p-8">
              <span className="mb-3 inline-block rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-500">
                Software
              </span>
              <h3 className="mb-4 text-3xl font-bold">Your reputation, managed</h3>
              <p className="mb-6 text-stone-700">
                The device generates reviews. The dashboard helps you manage them, respond faster, and stay ahead of problems.
              </p>

              <div className="space-y-5">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
                    <Bell className="h-5 w-5 stroke-amber-500" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="mb-0.5 text-sm font-semibold text-stone-950">Instant alerts</div>
                    <div className="text-sm text-stone-700">
                      Know the moment a new review comes in, good or bad
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
                    <Edit3 className="h-5 w-5 stroke-amber-500" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="mb-0.5 text-sm font-semibold text-stone-950">Suggested responses</div>
                    <div className="text-sm text-stone-700">
                      Professional reply drafts you can send in seconds
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
                    <BarChart3 className="h-5 w-5 stroke-amber-500" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="mb-0.5 text-sm font-semibold text-stone-950">Trend analysis</div>
                    <div className="text-sm text-stone-700">
                      See if ratings are climbing or slipping before it's too late
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
                    <Users className="h-5 w-5 stroke-amber-500" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="mb-0.5 text-sm font-semibold text-stone-950">Competitive insights</div>
                    <div className="text-sm text-stone-700">
                      See how you stack up against nearby businesses
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
                    <Globe className="h-5 w-5 stroke-amber-500" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="mb-0.5 text-sm font-semibold text-stone-950">Always current</div>
                    <div className="text-sm text-stone-700">
                      Automatic updates, Google TOS compliance, and new features included
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
