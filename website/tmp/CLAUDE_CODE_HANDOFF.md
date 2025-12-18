# Vizzo Website - Claude Code Handoff

## Overview

You are building the marketing website for **Vizzo** - a premium countertop device that displays a business's live Google rating and encourages satisfied customers to leave reviews, paired with a SaaS dashboard.

This document is your master guide. Read it completely before writing any code.

---

## Project Structure

Create the following NextJS 14+ App Router structure:

```
vizzo-website/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata
│   ├── page.tsx                # Homepage
│   ├── pricing/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── restaurants/
│   │   └── page.tsx
│   ├── salons/
│   │   └── page.tsx
│   ├── auto-repair/
│   │   └── page.tsx
│   ├── industries/
│   │   └── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Section.tsx
│   │   └── Container.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── EmailForm.tsx
│   └── blocks/
│       ├── Hero.tsx
│       ├── SilentMajority.tsx
│       ├── AIComparison.tsx
│       ├── SolutionCards.tsx
│       ├── HowItWorks.tsx
│       ├── Benefits.tsx
│       ├── ROISection.tsx
│       ├── StatsGrid.tsx
│       ├── IndustryGrid.tsx
│       ├── ComplianceBanner.tsx
│       └── CTASection.tsx
├── lib/
│   └── utils.ts                # cn() helper for Tailwind
├── public/
│   ├── logo.svg
│   ├── og-image.png
│   └── ...
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## Source Files

You have access to these source files:

| File | Purpose | Location |
|------|---------|----------|
| `VIZZO_STYLING_GUIDE.md` | Design system, colors, typography, spacing, Tailwind config | Project files |
| `VIZZO_COPYWRITING_GUIDE.md` | Brand voice, terminology, messaging guidelines | Project files |
| `vizzo-homepage-v2.html` | **THE SOURCE OF TRUTH** for homepage structure and copy | Provided separately |
| Brand assets (logos, cover images) | Visual assets | Project files |

### Critical Reading Order

1. **First**: Read `VIZZO_STYLING_GUIDE.md` completely - it contains the exact Tailwind config, colors, typography, and component patterns
2. **Second**: Read `VIZZO_COPYWRITING_GUIDE.md` sections 2.1-2.3 (Brand Voice) and Appendix A (Terminology)
3. **Third**: Study `vizzo-homepage-v2.html` - this is your implementation reference

---

## Design System Summary

### Colors (from Styling Guide)

```typescript
// tailwind.config.ts colors
colors: {
  stone: {
    800: '#44403C',
    900: '#292524', 
    950: '#1C1917',  // Primary dark
  },
  cream: {
    50: '#FAF9F7',   // Page background
    100: '#F5F4F0',
    200: '#E8E6E1',  // Borders
  },
  warm: {
    400: '#A39E93',  // Muted text
  },
  amber: {
    400: '#F59E0B',
    500: '#D97706',  // Primary accent
    600: '#B45309',
  },
}
```

### Typography

- **Font**: Plus Jakarta Sans (Google Fonts)
- **Display XL**: 4.5rem, weight 800, letter-spacing -0.025em
- **Display MD**: 3rem, weight 700, letter-spacing -0.02em
- **Body**: 1rem, weight 400, line-height 1.6

### Key CSS Variables

```css
:root {
  --stone-950: #1C1917;
  --stone-900: #292524;
  --stone-800: #44403C;
  --cream-50: #FAF9F7;
  --cream-100: #F5F4F0;
  --cream-200: #E8E6E1;
  --warm-400: #A39E93;
  --amber-500: #D97706;
  --amber-400: #F59E0B;
}
```

---

## Component Specifications

### Layout Components

#### `Section.tsx`
Wraps page sections with consistent padding and backgrounds.

```tsx
interface SectionProps {
  children: React.ReactNode;
  background?: 'white' | 'cream' | 'dark';
  spacing?: 'standard' | 'compact' | 'spacious';
  id?: string;
  className?: string;
}
```

**Usage patterns from HTML:**
- `bg-white` → `background="white"`
- `bg-cream` → `background="cream"` (uses cream-50)
- `bg-dark` → `background="dark"` (uses stone-950, inverts text)
- `section-standard` → 4rem padding mobile, 6rem desktop

#### `Container.tsx`
Controls max-width and horizontal padding.

```tsx
interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}
```

**Sizes:**
- `sm`: max-w-2xl (672px)
- `md`: max-w-3xl (768px)  
- `lg`: max-w-5xl (1024px)
- `xl`: max-w-7xl (1280px) - default

---

### UI Components

#### `Button.tsx`
```tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  href?: string;  // If provided, renders as <a>
  className?: string;
}
```

**Styles from HTML:**
- Primary: `bg-amber-500 text-stone-950 hover:bg-amber-400`
- Secondary: `border-2 border-current` (adapts to light/dark)
- On dark backgrounds, primary stays amber, secondary uses cream border

#### `Badge.tsx`
```tsx
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'amber';
}
```

**From HTML:**
- Default (light bg): `bg-amber-500/15 text-amber-600`
- On dark: `bg-amber-500/20 text-amber-400`

#### `Card.tsx`
```tsx
interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'interactive' | 'dark';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
}
```

---

### Block Components

These are the major page sections. Each should be a self-contained component.

#### `Hero.tsx`
The dark hero section with grid background pattern.

**Props:**
```tsx
interface HeroProps {
  badge?: string;
  headline: React.ReactNode;  // Allows spans for styling
  subheadline: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}
```

**Key elements from HTML:**
- Dark background (stone-950)
- Subtle grid pattern overlay (CSS pseudo-element)
- Amber glow effect (radial gradient)
- Badge, H1, subheadline, two CTAs

#### `SilentMajority.tsx`
The "98% leave without reviewing" visualization.

**Key elements:**
- Badge: "The problem"
- Headline: "The silent majority"
- White card containing:
  - Large "98%" in amber
  - "of satisfied customers leave without reviewing"
  - 100-dot grid (5 rows × 20 dots, 98 gray + 2 amber)
  - Legend
- Contrast text below card
- Highlighted result box

**Note:** The dot grid uses a fixed width (314px for 20 dots with 6px gaps). On very small screens (<400px), dots shrink to 8px with 4px gaps.

#### `AIComparison.tsx`
Side-by-side comparison of old Google search vs new AI search.

**Key elements:**
- Badge: "The new reality"
- Headline: "AI is changing how customers find you"
- Intro paragraph
- Two cards:
  - Left: "Yesterday's Search" with Google logo, list of results
  - Right: "Today's Search" with ChatGPT logo, AI recommendation format
  - Right card highlights "Your Business" with amber accent

#### `SolutionCards.tsx`
The device + dashboard two-card section.

**Key elements:**
- Badge: "The solution"
- Headline: "Capture reviews at the perfect moment"
- Two-column grid (1.1fr / 0.9fr)
- **Device card (dark):**
  - Label: "Hardware" (but we call it "device" in body copy)
  - Title: "A review-generating device"
  - Intro paragraph with form factor messaging
  - Device preview mockup (rating, stars, copy, QR+NFC icons)
  - 5 feature items with icons
- **Dashboard card (white):**
  - Label: "Software" (but we call it "dashboard" in body copy)
  - Title: "Your reputation, managed"
  - 5 feature items with icons

#### `HowItWorks.tsx`
5-step numbered process.

**Props:**
```tsx
interface Step {
  number: number;
  title: string;
  description: string;
}
```

**From HTML:** Steps are displayed in a vertical timeline with numbered circles.

#### `Benefits.tsx`
4-card grid explaining why businesses choose Vizzo.

**Key elements:**
- Horizontal card layout (icon left, content right)
- Icons in amber-tinted containers
- Each card: icon, title, description

#### `ROISection.tsx`
The math/payback section.

**Key elements:**
- Chain visualization: 3-5× → +0.1★ → ∞
- Example box with payback explanation
- Comparison grid (ads, email tools, staff time vs Vizzo)

#### `StatsGrid.tsx`
3 large stat cards.

**Key elements:**
- First two: large number + description
- Third: highlighted with amber gradient, shows "Reviews" as the #1 signal

#### `IndustryGrid.tsx`
4-card grid of industries with hover effects.

**Key elements:**
- Each card: large icon, name, "Learn more →"
- Last card is "And more" with dashed border style
- Hover: icon background turns amber, card lifts

#### `ComplianceBanner.tsx`
Simple inline banner with shield icon.

**Content:** "100% compliant with Google's Terms of Service"

#### `CTASection.tsx`
Final dark section with email signup.

**Key elements:**
- Declarative headline (not a question)
- Email input + button
- Hint text below

---

## Reusability Map

### Use Across Multiple Pages

| Component | Homepage | Industry Pages | Pricing | About |
|-----------|----------|----------------|---------|-------|
| Header | ✓ | ✓ | ✓ | ✓ |
| Footer | ✓ | ✓ | ✓ | ✓ |
| Section | ✓ | ✓ | ✓ | ✓ |
| Container | ✓ | ✓ | ✓ | ✓ |
| Button | ✓ | ✓ | ✓ | ✓ |
| Badge | ✓ | ✓ | ✓ | ✓ |
| Card | ✓ | ✓ | ✓ | ✓ |
| EmailForm | ✓ | ✓ | ✓ | - |
| Hero | ✓ | ✓ (adapted) | ✓ (adapted) | ✓ (adapted) |
| ComplianceBanner | ✓ | ✓ | ✓ | - |
| CTASection | ✓ | ✓ | - | - |
| IndustryGrid | ✓ | - | - | - |
| Benefits | ✓ | ✓ (adapted) | - | - |

### Homepage-Specific Blocks

These are primarily for the homepage but may be adapted:
- `SilentMajority` - Homepage only
- `AIComparison` - Homepage only (could appear on blog)
- `SolutionCards` - Homepage only
- `HowItWorks` - Homepage, possibly simplified on industry pages
- `ROISection` - Homepage, industry pages get industry-specific versions
- `StatsGrid` - Homepage only

---

## Implementation Order

Build in this order to establish foundations first:

### Phase 1: Setup & Foundations
1. Initialize NextJS project with TypeScript
2. Configure Tailwind with exact colors/typography from Styling Guide
3. Set up globals.css with CSS variables
4. Add Plus Jakarta Sans font

### Phase 2: Layout Components
5. Create `lib/utils.ts` with `cn()` helper
6. Build `Container.tsx`
7. Build `Section.tsx`
8. Build `Header.tsx`
9. Build `Footer.tsx`
10. Create `app/layout.tsx` with Header/Footer

### Phase 3: UI Primitives
11. Build `Button.tsx`
12. Build `Badge.tsx`
13. Build `Card.tsx`
14. Build `Input.tsx`
15. Build `EmailForm.tsx`

### Phase 4: Homepage Blocks
16. Build `Hero.tsx`
17. Build `SilentMajority.tsx`
18. Build `AIComparison.tsx`
19. Build `SolutionCards.tsx`
20. Build `HowItWorks.tsx`
21. Build `Benefits.tsx`
22. Build `ROISection.tsx`
23. Build `StatsGrid.tsx`
24. Build `IndustryGrid.tsx`
25. Build `ComplianceBanner.tsx`
26. Build `CTASection.tsx`

### Phase 5: Homepage Assembly
27. Assemble `app/page.tsx` using all blocks

### Phase 6: Additional Pages
28. Industry landing pages
29. Pricing page
30. About page

---

## Code Quality Guidelines

### TypeScript
- Use proper interfaces for all component props
- Export prop interfaces for reuse
- Use `React.FC` or function declarations consistently

### Styling
- Use Tailwind utilities primarily
- Use CSS variables for colors that need to be referenced in JS
- No inline styles except for truly dynamic values
- Use `cn()` helper for conditional classes

### Component Patterns

```tsx
// Example component structure
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  href,
  className 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition-all';
  
  const variants = {
    primary: 'bg-amber-500 text-stone-950 hover:bg-amber-400',
    secondary: 'border-2 border-stone-950 text-stone-950 hover:bg-stone-950 hover:text-cream-50',
  };
  
  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-base',
    lg: 'h-13 px-8 text-lg',
  };
  
  const classes = cn(baseStyles, variants[variant], sizes[size], className);
  
  if (href) {
    return <a href={href} className={classes}>{children}</a>;
  }
  
  return <button className={classes}>{children}</button>;
}
```

### Accessibility
- All interactive elements must be keyboard accessible
- Use semantic HTML (section, article, nav, etc.)
- Include proper aria-labels for icon-only buttons
- Ensure color contrast meets WCAG AA

---

## Terminology Rules (CRITICAL)

From the Copywriting Guide - use these terms consistently:

| ✓ Use | ✗ Don't Use |
|-------|-------------|
| Device | Unit, hardware, display, screen |
| Dashboard | Platform, portal, app, software |
| Google rating | Star rating, review score |
| Reviews | Testimonials (for Google reviews) |
| Business owner | Entrepreneur, merchant, client |
| Customers | Guests, patrons |
| Join the waitlist | Sign up, subscribe, register |
| Google TOS compliant | Legal, allowed, permitted |

**Note:** In the Solution section, we use "Hardware" and "Software" as category labels, but the body copy says "device" and "dashboard."

---

## Testing Checklist

Before considering a component complete:

- [ ] Renders correctly on mobile (375px)
- [ ] Renders correctly on tablet (768px)
- [ ] Renders correctly on desktop (1280px)
- [ ] Dark/light variants work correctly
- [ ] Hover states are implemented
- [ ] Focus states are visible
- [ ] No TypeScript errors
- [ ] No console errors
- [ ] Matches HTML wireframe exactly

---

## Files to Request

When starting, ask for:
1. The `vizzo-homepage-v2.html` file - your primary reference
2. Access to project files for styling guide and copywriting guide
3. Logo SVG and brand assets

---

## Questions to Clarify

If anything is unclear:
1. Reference the HTML wireframe first
2. Reference the Styling Guide for visual decisions
3. Reference the Copywriting Guide for text/terminology decisions
4. Ask the user only if the answer isn't in these documents

---

*This handoff document version: 1.0*
*Created for: Claude Code (Sonnet 4.5)*
*Source of truth: vizzo-homepage-v2.html*
