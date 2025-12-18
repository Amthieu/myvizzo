'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { buttonVariants } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-stone-950/95 backdrop-blur-sm">
        <Container size="xl">
          {/* Desktop Layout */}
          <div className="hidden h-20 items-center justify-between md:flex">
            <Link href="/" className="flex items-center">
              <Image
                src="/vizzo-logo-white-205x80.png"
                alt="Vizzo"
                width={102.5}
                height={40}
                priority
              />
            </Link>

            <nav className="flex items-center gap-8">
              <Link
                href="/#how-it-works"
                className="text-sm font-medium text-cream-200 transition-colors hover:text-cream-50"
              >
                How It Works
              </Link>
              <Link
                href="/#industries"
                className="text-sm font-medium text-cream-200 transition-colors hover:text-cream-50"
              >
                Industries
              </Link>
              <Link
                href="/#"
                className="text-sm font-medium text-cream-200 transition-colors hover:text-cream-50"
              >
                Pricing
              </Link>
              <Link
                href="/#"
                className="text-sm font-medium text-cream-200 transition-colors hover:text-cream-50"
              >
                About
              </Link>
            </nav>

            <Link href="#waitlist" className={buttonVariants({ size: "sm" })}>
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Layout */}
          <div className="flex h-20 items-center gap-4 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center justify-center text-cream-50"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            <Link href="/" className="flex items-center">
              <Image
                src="/vizzo-logo-white-205x80.png"
                alt="Vizzo"
                width={82}
                height={32}
                priority
              />
            </Link>

            <Link href="#waitlist" className={`ml-auto ${buttonVariants({ size: "sm" })}`}>
              Join Waitlist
            </Link>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="flex h-full w-full min-w-[320px] flex-col bg-stone-950">
            {/* Menu Header */}
            <div className="flex h-20 w-full items-center justify-between border-b border-white/10 px-6">
              <Image
                src="/vizzo-logo-white-205x80.png"
                alt="Vizzo"
                width={82}
                height={32}
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center text-cream-50"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex w-full flex-col p-6">
              <Link
                href="/#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-white/10 py-4 text-lg font-medium text-cream-50"
              >
                How It Works
              </Link>
              <Link
                href="/#industries"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-white/10 py-4 text-lg font-medium text-cream-50"
              >
                Industries
              </Link>
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-white/10 py-4 text-lg font-medium text-cream-50"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-white/10 py-4 text-lg font-medium text-cream-50"
              >
                About
              </Link>
            </nav>

            {/* Menu CTA */}
            <div className="mt-auto p-6">
              <Link
                href="#waitlist"
                onClick={() => setMobileMenuOpen(false)}
                className={buttonVariants({ size: "lg", className: "w-full" })}
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
