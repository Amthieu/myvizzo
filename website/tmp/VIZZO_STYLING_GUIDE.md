# Vizzo Design System & Styling Guide

**Version:** 1.0  
**For:** NextJS + Tailwind CSS  
**Audience:** Claude Code, Developers, Designers

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Color System](#2-color-system)
3. [Typography System](#3-typography-system)
4. [Spacing & Layout System](#4-spacing--layout-system)
5. [Component Architecture](#5-component-architecture)
6. [UI Library & Dependencies](#6-ui-library--dependencies)
7. [Imagery & Visual Guidelines](#7-imagery--visual-guidelines)
8. [Motion & Interaction](#8-motion--interaction)
9. [Accessibility Standards](#9-accessibility-standards)
10. [Tailwind Configuration](#10-tailwind-configuration)
11. [Component Specifications](#11-component-specifications)
12. [Page Templates](#12-page-templates)

---

## 1. Design Philosophy

### Core Principle: "Earned Confidence"

Every design element must earn its place—mirroring the copywriting principle that "every word must earn its place." This means:

- **No decorative fluff**: If an element doesn't serve communication or usability, remove it
- **Purposeful whitespace**: Space is used intentionally to create hierarchy and breathing room
- **Quiet confidence**: The design should feel assured without shouting
- **Premium restraint**: Sophistication through simplicity, not ornamentation

### Brand-to-Visual Translation

| Brand Attribute | Visual Expression |
|----------------|-------------------|
| Confident but not arrogant | Bold typography, generous spacing, no desperate visual tricks |
| Premium but not pretentious | Rich colors, quality typography, clean execution—not gold gradients or excessive effects |
| Smart but not condescending | Clear hierarchy, intuitive layouts, information respects reader's intelligence |
| Warm but not sycophantic | Warm color undertones, approachable imagery, human-centered design |
| Direct but not aggressive | Strong CTAs with appropriate visual weight, clear paths forward |

### Design Personality Keywords

- **Editorial**: Like a well-designed business magazine—confident typographic hierarchy, generous margins
- **Refined**: Every detail considered, nothing arbitrary
- **Grounded**: Trustworthy, established, professional
- **Contemporary**: Modern without being trendy, will age well

### What We Avoid

- Startup-bro aesthetics (neon accents, "disruptive" angles, excessive animations)
- Generic SaaS patterns (hero with laptop mockup, three-column features, testimonial carousel)
- Desperate conversion tactics (countdown timers, flashing CTAs, popup overlays)
- Overdesign (gradients for their own sake, shadows everywhere, decorative icons)

---

## 2. Color System

### Philosophy: Warm Sophistication

The palette is built around a deep, confident primary color with warm neutral tones. This creates trust (depth) while remaining approachable (warmth). We avoid cool grays which feel sterile and corporate.

### Color Palette

#### Primary Colors

```
Stone (Primary Dark)
- Name: stone-950
- Hex: #1C1917
- RGB: 28, 25, 23
- Usage: Primary text, dark backgrounds, footer

Stone Dark
- Name: stone-900
- Hex: #292524
- RGB: 41, 37, 36
- Usage: Secondary dark surfaces, hover states on dark

Stone Mid
- Name: stone-800
- Hex: #44403C
- RGB: 68, 64, 60
- Usage: Tertiary text, borders on dark backgrounds
```

#### Neutral Colors (Warm Base)

```
Cream (Background Primary)
- Name: cream-50
- Hex: #FAF9F7
- RGB: 250, 249, 247
- Usage: Page background, card backgrounds

Cream Dark
- Name: cream-100
- Hex: #F5F4F0
- RGB: 245, 244, 240
- Usage: Secondary backgrounds, subtle differentiation

Cream Border
- Name: cream-200
- Hex: #E8E6E1
- RGB: 232, 230, 225
- Usage: Borders, dividers, subtle backgrounds

Warm Gray
- Name: warm-400
- Hex: #A39E93
- RGB: 163, 158, 147
- Usage: Placeholder text, disabled states, secondary icons
```

#### Accent Color

```
Amber (Primary Accent)
- Name: amber-500
- Hex: #D97706
- RGB: 217, 119, 6
- Usage: Primary CTAs, links, highlights, stars/ratings

Amber Light
- Name: amber-400
- Hex: #F59E0B
- RGB: 245, 158, 11
- Usage: Hover states on amber elements, secondary accents

Amber Dark
- Name: amber-600
- Hex: #B45309
- RGB: 180, 83, 9
- Usage: Active states, pressed buttons
```

#### Semantic Colors

```
Success
- Name: success
- Hex: #059669
- Usage: Success states, positive indicators, rating improvements

Warning
- Name: warning
- Hex: #D97706
- Usage: Warning states (uses amber)

Error
- Name: error
- Hex: #DC2626
- Usage: Error states, negative indicators, critical alerts

Info
- Name: info
- Hex: #2563EB
- Usage: Informational callouts, links in content
```

### Color Usage Rules

1. **Background Hierarchy**
   - Page background: `cream-50`
   - Card/Section background: `white` or `cream-100`
   - Elevated elements: `white` with subtle shadow
   - Dark sections: `stone-950` or `stone-900`

2. **Text Hierarchy**
   - Primary text: `stone-950`
   - Secondary text: `stone-800`
   - Tertiary/muted text: `warm-400`
   - Text on dark: `cream-50` (primary), `cream-200` (secondary)

3. **Accent Usage**
   - Amber is reserved for interactive elements and emphasis
   - Never use amber for large background areas
   - Maximum one amber accent element per viewport to maintain hierarchy

4. **Dark Sections**
   - Use dark sections sparingly for emphasis (hero, testimonials, final CTA)
   - Maximum 2-3 dark sections per page
   - Dark sections should contain high-impact content

### CSS Custom Properties

```css
:root {
  /* Primary */
  --color-stone-950: #1C1917;
  --color-stone-900: #292524;
  --color-stone-800: #44403C;
  
  /* Neutrals */
  --color-cream-50: #FAF9F7;
  --color-cream-100: #F5F4F0;
  --color-cream-200: #E8E6E1;
  --color-warm-400: #A39E93;
  
  /* Accent */
  --color-amber-400: #F59E0B;
  --color-amber-500: #D97706;
  --color-amber-600: #B45309;
  
  /* Semantic */
  --color-success: #059669;
  --color-warning: #D97706;
  --color-error: #DC2626;
  --color-info: #2563EB;
  
  /* Surfaces */
  --surface-primary: var(--color-cream-50);
  --surface-secondary: var(--color-cream-100);
  --surface-elevated: #FFFFFF;
  --surface-dark: var(--color-stone-950);
  
  /* Text */
  --text-primary: var(--color-stone-950);
  --text-secondary: var(--color-stone-800);
  --text-muted: var(--color-warm-400);
  --text-inverse: var(--color-cream-50);
}
```

---

## 3. Typography System

### Philosophy: Confident Clarity

Typography is the primary carrier of brand personality. We use a deliberate type system that feels contemporary and professional without being generic or trendy.

### Font Selection

#### Primary Font: Plus Jakarta Sans

**Why Plus Jakarta Sans:**
- Geometric foundation with humanist touches—matches "confident but approachable"
- Excellent readability at all sizes
- Distinctive without being quirky
- Strong weight range (200-800)
- Excellent performance via Google Fonts
- Less overused than Inter, Poppins, or DM Sans
- OpenType features for professional typography

```css
font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
```

**Google Fonts Import:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### Type Scale

Based on a 1.25 ratio (Major Third) for balanced hierarchy.

| Name | Size (px) | Size (rem) | Line Height | Letter Spacing | Weight | Usage |
|------|-----------|------------|-------------|----------------|--------|-------|
| display-xl | 72 | 4.5rem | 1.0 | -0.025em | 800 | Hero headlines only |
| display-lg | 60 | 3.75rem | 1.05 | -0.025em | 800 | Major section headlines |
| display-md | 48 | 3rem | 1.1 | -0.02em | 700 | Section headlines |
| heading-xl | 36 | 2.25rem | 1.15 | -0.02em | 700 | Page titles, major headings |
| heading-lg | 30 | 1.875rem | 1.2 | -0.015em | 700 | Section subheadings |
| heading-md | 24 | 1.5rem | 1.3 | -0.01em | 600 | Card titles, feature headings |
| heading-sm | 20 | 1.25rem | 1.35 | -0.01em | 600 | Smaller headings, labels |
| body-lg | 18 | 1.125rem | 1.6 | 0 | 400 | Lead paragraphs, important body |
| body-md | 16 | 1rem | 1.6 | 0 | 400 | Primary body text |
| body-sm | 14 | 0.875rem | 1.5 | 0 | 400 | Secondary body, captions |
| caption | 12 | 0.75rem | 1.4 | 0.01em | 500 | Labels, fine print, metadata |
| overline | 12 | 0.75rem | 1.4 | 0.1em | 600 | Section labels, categories |

### Responsive Typography

Headlines scale down on mobile to maintain readability and prevent overflow.

| Name | Desktop | Tablet (≤1024px) | Mobile (≤640px) |
|------|---------|------------------|-----------------|
| display-xl | 72px | 56px | 40px |
| display-lg | 60px | 48px | 36px |
| display-md | 48px | 40px | 32px |
| heading-xl | 36px | 32px | 28px |
| heading-lg | 30px | 26px | 24px |
| heading-md | 24px | 22px | 20px |
| heading-sm | 20px | 18px | 18px |

Body text remains consistent across breakpoints.

### Typography Rules

1. **Headlines**
   - Always use negative letter-spacing on display and heading sizes
   - Headlines use `font-weight: 700` or `800` for display sizes
   - Maximum 2 lines for headlines (use `line-clamp-2` if dynamic)

2. **Body Text**
   - Maximum line length: 65-75 characters (use `max-w-prose` or explicit max-width)
   - Paragraphs: `body-md` (16px) for general content
   - Lead paragraphs: `body-lg` (18px) with `text-secondary` color
   - Line height of 1.6 for optimal readability

3. **Hierarchy**
   - Only one `display-xl` per page (hero headline)
   - Clear jump between hierarchy levels (skip sizes if needed)
   - Don't use more than 3 type sizes in a single component

4. **Special Treatments**
   - Overlines: Always uppercase, `letter-spacing: 0.1em`, `font-weight: 600`
   - Links in body: `text-amber-500` with underline on hover
   - Emphasis: Use `font-weight: 600` rather than italic for emphasis

### CSS Implementation

```css
/* Typography utilities */
.text-display-xl {
  font-size: 4.5rem;
  line-height: 1.0;
  letter-spacing: -0.025em;
  font-weight: 800;
}

.text-display-lg {
  font-size: 3.75rem;
  line-height: 1.05;
  letter-spacing: -0.025em;
  font-weight: 800;
}

.text-display-md {
  font-size: 3rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
  font-weight: 700;
}

.text-heading-xl {
  font-size: 2.25rem;
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-weight: 700;
}

.text-heading-lg {
  font-size: 1.875rem;
  line-height: 1.2;
  letter-spacing: -0.015em;
  font-weight: 700;
}

.text-heading-md {
  font-size: 1.5rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
  font-weight: 600;
}

.text-heading-sm {
  font-size: 1.25rem;
  line-height: 1.35;
  letter-spacing: -0.01em;
  font-weight: 600;
}

.text-body-lg {
  font-size: 1.125rem;
  line-height: 1.6;
  font-weight: 400;
}

.text-body-md {
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 400;
}

.text-body-sm {
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 400;
}

.text-caption {
  font-size: 0.75rem;
  line-height: 1.4;
  letter-spacing: 0.01em;
  font-weight: 500;
}

.text-overline {
  font-size: 0.75rem;
  line-height: 1.4;
  letter-spacing: 0.1em;
  font-weight: 600;
  text-transform: uppercase;
}
```

---

## 4. Spacing & Layout System

### Philosophy: Generous Breathing Room

Premium brands use space confidently. Vizzo's layouts should feel open and considered—never cramped or cluttered. White space is a design element, not wasted space.

### Base Unit

All spacing is based on a **4px base unit**. This provides enough granularity for fine adjustments while maintaining consistency.

### Spacing Scale

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| space-0 | 0px | `0` | Reset |
| space-1 | 4px | `1` | Hairline spacing, icon gaps |
| space-2 | 8px | `2` | Tight element spacing |
| space-3 | 12px | `3` | Related element spacing |
| space-4 | 16px | `4` | Default element spacing |
| space-5 | 20px | `5` | Comfortable element spacing |
| space-6 | 24px | `6` | Component internal padding |
| space-8 | 32px | `8` | Component separation |
| space-10 | 40px | `10` | Section internal spacing |
| space-12 | 48px | `12` | Mobile section padding |
| space-16 | 64px | `16` | Desktop section padding |
| space-20 | 80px | `20` | Large section padding |
| space-24 | 96px | `24` | Major section breaks |
| space-32 | 128px | `32` | Hero/footer padding |
| space-40 | 160px | `40` | Maximum section padding |

### Container System

#### Max Widths

| Container | Max Width | Usage |
|-----------|-----------|-------|
| `container-xs` | 512px (32rem) | Narrow content, forms, modals |
| `container-sm` | 640px (40rem) | Blog content, focused reading |
| `container-md` | 768px (48rem) | Medium content sections |
| `container-lg` | 1024px (64rem) | Standard content width |
| `container-xl` | 1280px (80rem) | **Default page container** |
| `container-2xl` | 1440px (90rem) | Full-width sections |
| `container-full` | 100% | Edge-to-edge (with padding) |

#### Container Padding

Containers have responsive horizontal padding:

```css
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;  /* 24px mobile */
  padding-right: 1.5rem;
}

@media (min-width: 640px) {
  .container {
    padding-left: 2rem;  /* 32px tablet */
    padding-right: 2rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: 4rem;  /* 64px desktop */
    padding-right: 4rem;
  }
}
```

### Section Spacing

Sections are major page divisions. They have consistent vertical rhythm.

| Section Type | Mobile Padding (Y) | Desktop Padding (Y) |
|--------------|-------------------|---------------------|
| Standard | 64px (py-16) | 96px (py-24) |
| Compact | 48px (py-12) | 64px (py-16) |
| Spacious | 80px (py-20) | 128px (py-32) |
| Hero | 96px (py-24) | 160px (py-40) |

#### Section Component

```tsx
interface SectionProps {
  children: React.ReactNode;
  spacing?: 'compact' | 'standard' | 'spacious' | 'hero';
  background?: 'light' | 'cream' | 'dark';
  container?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

const spacingClasses = {
  compact: 'py-12 lg:py-16',
  standard: 'py-16 lg:py-24',
  spacious: 'py-20 lg:py-32',
  hero: 'py-24 lg:py-40',
};

const backgroundClasses = {
  light: 'bg-white',
  cream: 'bg-cream-50',
  dark: 'bg-stone-950 text-cream-50',
};

const containerClasses = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
};
```

### Grid System

Use CSS Grid for layouts. Base grid is 12 columns.

#### Standard Grid

```css
.grid-layout {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem; /* 32px default gap */
}

@media (max-width: 1024px) {
  .grid-layout {
    gap: 1.5rem; /* 24px on tablet */
  }
}

@media (max-width: 640px) {
  .grid-layout {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
```

#### Common Grid Patterns

```tsx
// Two columns (equal)
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

// Two columns (content + sidebar)
<div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-16">

// Three columns (features)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

// Four columns (logos, small items)
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">

// Asymmetric (text + image)
<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
```

### Component Spacing Patterns

#### Cards

```css
.card {
  padding: 1.5rem; /* 24px */
}

@media (min-width: 768px) {
  .card {
    padding: 2rem; /* 32px */
  }
}

.card-lg {
  padding: 2rem; /* 32px */
}

@media (min-width: 768px) {
  .card-lg {
    padding: 2.5rem; /* 40px */
  }
}
```

#### Content Stacks

Vertical spacing between elements within a component:

```tsx
// Tight stack (related elements)
<div className="space-y-2">

// Standard stack (default)
<div className="space-y-4">

// Comfortable stack
<div className="space-y-6">

// Section stack (major divisions within component)
<div className="space-y-8 lg:space-y-12">
```

### Breakpoints

| Name | Width | Tailwind Prefix | Usage |
|------|-------|-----------------|-------|
| Mobile | < 640px | (default) | Single column, stacked |
| Tablet | ≥ 640px | `sm:` | Two columns begin |
| Desktop | ≥ 1024px | `lg:` | Full desktop layout |
| Wide | ≥ 1280px | `xl:` | Expanded containers |
| Ultra-wide | ≥ 1536px | `2xl:` | Maximum widths |

**Mobile-first approach**: Always write mobile styles first, then add breakpoint modifiers.

---

## 5. Component Architecture

### Philosophy: Composable Consistency

Components should be building blocks that combine predictably. Each component has a single responsibility and clear API.

### Component Categories

#### 1. Primitives
Low-level building blocks with no business logic.

- `Button`
- `Input`
- `Textarea`
- `Select`
- `Checkbox`
- `Radio`
- `Badge`
- `Avatar`
- `Icon`
- `Divider`
- `Skeleton`

#### 2. Components
Composed primitives with specific UI patterns.

- `Card`
- `Modal`
- `Dropdown`
- `Tooltip`
- `Toast`
- `Accordion`
- `Tabs`
- `Table`
- `Pagination`
- `Breadcrumb`

#### 3. Blocks
Pre-composed sections for common page patterns.

- `Hero`
- `FeatureGrid`
- `FeatureRow`
- `Testimonial`
- `TestimonialCarousel`
- `PricingCard`
- `PricingTable`
- `FAQ`
- `CTA`
- `Stats`
- `LogoCloud`
- `NewsletterSignup`

#### 4. Layout Components
Structure and containment.

- `Container`
- `Section`
- `Grid`
- `Stack`
- `Header`
- `Footer`
- `Sidebar`

### Component File Structure

```
src/
├── components/
│   ├── primitives/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.types.ts
│   │   │   └── index.ts
│   │   └── ...
│   ├── components/
│   │   ├── Card/
│   │   └── ...
│   ├── blocks/
│   │   ├── Hero/
│   │   └── ...
│   └── layout/
│       ├── Container/
│       ├── Section/
│       └── ...
├── styles/
│   └── globals.css
└── lib/
    └── utils.ts
```

### Component Naming Conventions

- **PascalCase** for component names: `FeatureGrid`, `PricingCard`
- **kebab-case** for files if not using folder structure: `feature-grid.tsx`
- **Descriptive suffixes**: `*Card`, `*Row`, `*Grid`, `*Section`, `*Modal`

### Props Patterns

```tsx
// Standard variant pattern
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  // ... rest
}

// Composition pattern for blocks
interface HeroProps {
  overline?: string;
  headline: string;
  subheadline?: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  image?: {
    src: string;
    alt: string;
  };
  background?: 'light' | 'dark';
}
```

---

## 6. UI Library & Dependencies

### Primary Recommendation: shadcn/ui + Radix Primitives

#### Why shadcn/ui

1. **Full ownership**: Components are copied into your codebase, not imported from a package. You can modify anything.

2. **Built on Radix**: Radix UI primitives have excellent accessibility out of the box—keyboard navigation, screen reader support, focus management.

3. **Tailwind-native**: Designed specifically for Tailwind CSS, matching our tech stack.

4. **Customizable**: Since you own the code, every component can be styled to match Vizzo's brand exactly.

5. **No vendor lock-in**: No breaking changes from package updates since it's your code.

6. **Production-tested patterns**: Components follow best practices that would take significant time to develop from scratch.

#### Implementation Approach

1. Install shadcn/ui CLI and initialize with Tailwind
2. Cherry-pick only needed components (don't install everything)
3. Customize each component to match Vizzo design tokens
4. Extend with custom components as needed

### Required Dependencies

```json
{
  "dependencies": {
    "next": "^14.x",
    "react": "^18.x",
    "react-dom": "^18.x",
    "tailwindcss": "^3.4.x",
    "@radix-ui/react-dialog": "^1.x",
    "@radix-ui/react-dropdown-menu": "^2.x",
    "@radix-ui/react-accordion": "^1.x",
    "@radix-ui/react-tabs": "^1.x",
    "@radix-ui/react-tooltip": "^1.x",
    "@radix-ui/react-toast": "^1.x",
    "class-variance-authority": "^0.7.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x",
    "lucide-react": "^0.x"
  }
}
```

### Component Library Setup

```tsx
// lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Icons: Lucide React

**Why Lucide:**
- Clean, consistent stroke-based icons
- Tree-shakeable (only imports used icons)
- Well-maintained, comprehensive library
- Matches our minimal aesthetic

```tsx
import { Star, ArrowRight, Check, X } from 'lucide-react';

// Usage
<Star className="w-5 h-5 text-amber-500" />
```

### Animation: Framer Motion (Optional)

For page transitions and complex animations:

```json
{
  "dependencies": {
    "framer-motion": "^11.x"
  }
}
```

Use sparingly—most animations should be CSS-based for performance.

### Forms: React Hook Form + Zod

```json
{
  "dependencies": {
    "react-hook-form": "^7.x",
    "zod": "^3.x",
    "@hookform/resolvers": "^3.x"
  }
}
```

---

## 7. Imagery & Visual Guidelines

### Photography Style

Since we're using stock or AI-generated images, guidelines ensure consistency:

#### Style Keywords
- **Warm**: Slightly warm color temperature, natural lighting
- **Authentic**: Real-looking moments, not overly staged
- **Professional**: Clean, well-composed, not amateur
- **Diverse**: Representative of various business types and people
- **Context-rich**: Show real business environments

#### Technical Requirements
- Minimum resolution: 1920px on longest edge
- Aspect ratios: 16:9 (heroes), 4:3 (features), 1:1 (testimonials)
- Color treatment: Slight warmth, avoid blue/cool casts
- No heavy filters or stylization

#### Subject Matter

**DO use:**
- Business owners in their environment (not behind desks)
- Customer interactions at point-of-sale/checkout
- Close-ups of hands, devices, screens
- Restaurant, salon, clinic, garage interiors
- Real-looking Google review displays
- Happy but natural expressions

**DON'T use:**
- Generic corporate handshakes
- People pointing at screens/charts
- Obvious stock photo poses
- Overly perfect/sterile environments
- Images with text overlays
- Low quality or watermarked images

### Device Renders

When 3D device mockups are ready:

#### Placement Guidelines
- Device should be shown in context (on counter, in environment)
- Multiple angles: hero (3/4 view), detail (screen focus), environment (wide)
- Screen should show actual UI, not placeholder

#### Lighting
- Match warm, natural lighting of photography
- Soft shadows, not harsh
- Subtle reflections for premium feel

### Illustrations

If used, illustrations should be:

#### Style
- **Line-based**: Clean single-weight or dual-weight lines
- **Minimal**: Essential elements only, no decoration
- **Geometric**: Based on circles, rectangles, clean curves
- **Monochromatic**: Stone-950 lines on light, cream-50 on dark
- **With accent**: Amber-500 for key elements

#### Usage
- Icons (custom, beyond Lucide)
- Empty states
- Process/how-it-works diagrams
- Error states

### Background Treatments

#### Subtle Patterns

For visual interest without distraction:

```css
/* Subtle dot pattern */
.bg-pattern-dots {
  background-image: radial-gradient(
    var(--color-cream-200) 1px,
    transparent 1px
  );
  background-size: 24px 24px;
}

/* Subtle grid */
.bg-pattern-grid {
  background-image: 
    linear-gradient(var(--color-cream-200) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-cream-200) 1px, transparent 1px);
  background-size: 48px 48px;
}
```

#### Gradient Overlays

For dark sections with images:

```css
.bg-gradient-overlay {
  background: linear-gradient(
    to bottom,
    rgba(28, 25, 23, 0.9),
    rgba(28, 25, 23, 0.7)
  );
}
```

### Image Optimization

Use Next.js Image component for all images:

```tsx
import Image from 'next/image';

<Image
  src="/images/hero-device.jpg"
  alt="Vizzo device displaying a 4.8 star rating on a restaurant counter"
  width={1200}
  height={800}
  priority // for above-fold images
  className="object-cover"
/>
```

---

## 8. Motion & Interaction

### Philosophy: Purposeful Subtlety

Animation should enhance understanding and provide feedback—never distract or delay. Every animation must have a reason.

### Timing Standards

| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Instant | 0ms | - | Toggle states, immediate feedback |
| Fast | 150ms | ease-out | Button hovers, small UI changes |
| Normal | 200ms | ease-out | Dropdowns, tooltips, fades |
| Slow | 300ms | ease-in-out | Page transitions, modals |
| Gentle | 500ms | ease-in-out | Large reveals, scroll animations |

### CSS Timing Functions

```css
:root {
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Standard Transitions

#### Button Hover

```css
.button {
  transition: 
    background-color 150ms ease-out,
    transform 150ms ease-out,
    box-shadow 150ms ease-out;
}

.button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(28, 25, 23, 0.08);
}

.button:active {
  transform: translateY(0);
}
```

#### Link Hover

```css
.link {
  position: relative;
}

.link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 200ms ease-out;
}

.link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
```

#### Card Hover

```css
.card-interactive {
  transition: 
    transform 200ms ease-out,
    box-shadow 200ms ease-out;
}

.card-interactive:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(28, 25, 23, 0.1);
}
```

### Scroll Animations

Use CSS animations triggered by Intersection Observer:

```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: 
    opacity 500ms ease-out,
    transform 500ms ease-out;
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

#### Stagger Pattern

For lists and grids, stagger entrance:

```tsx
// Component with stagger
{items.map((item, index) => (
  <div
    key={item.id}
    className="animate-on-scroll"
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    {/* content */}
  </div>
))}
```

### Loading States

#### Skeleton Loading

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-cream-100) 25%,
    var(--color-cream-200) 50%,
    var(--color-cream-100) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s ease-in-out infinite;
}

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

#### Button Loading

```tsx
<Button disabled={isLoading}>
  {isLoading ? (
    <span className="flex items-center gap-2">
      <Loader className="w-4 h-4 animate-spin" />
      Processing...
    </span>
  ) : (
    'Submit'
  )}
</Button>
```

### Reduced Motion

Always respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. Accessibility Standards

### Compliance Level: WCAG 2.1 AA

All pages must meet WCAG 2.1 Level AA criteria.

### Color Contrast

| Element Type | Minimum Ratio | Our Implementation |
|--------------|---------------|-------------------|
| Normal text (< 18px) | 4.5:1 | Stone-950 on Cream-50 = 16.7:1 ✓ |
| Large text (≥ 18px bold or ≥ 24px) | 3:1 | Stone-800 on Cream-50 = 8.5:1 ✓ |
| UI Components | 3:1 | Amber-500 on Cream-50 = 3.2:1 ✓ |
| Inverse text | 4.5:1 | Cream-50 on Stone-950 = 16.7:1 ✓ |

### Keyboard Navigation

All interactive elements must be:
- Focusable via Tab key
- Activatable via Enter/Space
- Have visible focus indicators

#### Focus Styles

```css
:focus-visible {
  outline: 2px solid var(--color-amber-500);
  outline-offset: 2px;
}

/* Remove default outline when custom is applied */
:focus {
  outline: none;
}
```

### Screen Reader Support

#### Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3)
- Use landmark elements (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Use `<button>` for actions, `<a>` for navigation

#### ARIA Labels
```tsx
// Icon-only buttons
<button aria-label="Close menu">
  <X className="w-6 h-6" />
</button>

// Decorative images
<Image alt="" aria-hidden="true" />

// Meaningful images
<Image alt="Vizzo device displaying a 4.8 star Google rating" />

// Current page in nav
<a href="/pricing" aria-current="page">Pricing</a>
```

### Form Accessibility

```tsx
// Always associate labels
<label htmlFor="email" className="text-body-sm font-medium">
  Email address
</label>
<input
  id="email"
  type="email"
  aria-describedby="email-hint email-error"
/>
<p id="email-hint" className="text-caption text-muted">
  We'll never share your email.
</p>
<p id="email-error" className="text-caption text-error" role="alert">
  Please enter a valid email address.
</p>
```

### Skip Links

```tsx
// At top of page
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-amber-500 text-stone-950 px-4 py-2 rounded"
>
  Skip to main content
</a>

// Target
<main id="main-content">
```

### Testing Requirements

Before deployment, verify:
- [ ] Color contrast passes (use WebAIM Contrast Checker)
- [ ] All pages navigable by keyboard
- [ ] Screen reader announces content correctly (test with VoiceOver/NVDA)
- [ ] No content depends solely on color
- [ ] All forms have proper labels
- [ ] Error messages are announced to screen readers
- [ ] Page has proper heading hierarchy

---

## 10. Tailwind Configuration

### tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // Override default font
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
    },
    
    extend: {
      // Custom colors
      colors: {
        // Stone (primary dark)
        stone: {
          800: '#44403C',
          900: '#292524',
          950: '#1C1917',
        },
        // Cream (neutrals)
        cream: {
          50: '#FAF9F7',
          100: '#F5F4F0',
          200: '#E8E6E1',
        },
        // Warm gray
        warm: {
          400: '#A39E93',
        },
        // Amber (accent)
        amber: {
          400: '#F59E0B',
          500: '#D97706',
          600: '#B45309',
        },
        // Semantic
        success: '#059669',
        warning: '#D97706',
        error: '#DC2626',
        info: '#2563EB',
      },
      
      // Custom spacing (extending defaults)
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Container
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '4rem',
        },
      },
      
      // Typography
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-md': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-xl': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'heading-lg': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'heading-md': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.35', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
        'overline': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
      },
      
      // Shadows
      boxShadow: {
        'sm': '0 1px 2px rgba(28, 25, 23, 0.04)',
        'DEFAULT': '0 2px 8px rgba(28, 25, 23, 0.06)',
        'md': '0 4px 16px rgba(28, 25, 23, 0.08)',
        'lg': '0 8px 32px rgba(28, 25, 23, 0.1)',
        'xl': '0 16px 48px rgba(28, 25, 23, 0.12)',
        'inner': 'inset 0 1px 2px rgba(28, 25, 23, 0.06)',
      },
      
      // Border radius
      borderRadius: {
        'sm': '4px',
        'DEFAULT': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px',
      },
      
      // Transitions
      transitionDuration: {
        'fast': '150ms',
        'normal': '200ms',
        'slow': '300ms',
        'gentle': '500ms',
      },
      
      // Easing
      transitionTimingFunction: {
        'out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      
      // Max widths for containers
      maxWidth: {
        'prose': '65ch',
        'container-xs': '32rem',
        'container-sm': '40rem',
        'container-md': '48rem',
        'container-lg': '64rem',
        'container-xl': '80rem',
        'container-2xl': '90rem',
      },
      
      // Keyframes
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'skeleton': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      
      // Animations
      animation: {
        'fade-in': 'fade-in 500ms ease-out',
        'fade-up': 'fade-up 500ms ease-out',
        'skeleton': 'skeleton 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};

export default config;
```

### globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Font imports handled in _document or layout */
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-cream-50 text-stone-950 antialiased;
    font-feature-settings: 'ss01' on, 'ss02' on;
  }
  
  /* Focus styles */
  :focus-visible {
    @apply outline-2 outline-amber-500 outline-offset-2;
  }
  
  :focus {
    @apply outline-none;
  }
  
  /* Selection */
  ::selection {
    @apply bg-amber-500/20 text-stone-950;
  }
  
  /* Smooth anchor scrolling with offset for fixed header */
  html {
    scroll-padding-top: 5rem;
  }
}

@layer components {
  /* Container variants */
  .container-xs { @apply max-w-container-xs mx-auto px-6 sm:px-8 lg:px-16; }
  .container-sm { @apply max-w-container-sm mx-auto px-6 sm:px-8 lg:px-16; }
  .container-md { @apply max-w-container-md mx-auto px-6 sm:px-8 lg:px-16; }
  .container-lg { @apply max-w-container-lg mx-auto px-6 sm:px-8 lg:px-16; }
  .container-xl { @apply max-w-container-xl mx-auto px-6 sm:px-8 lg:px-16; }
  .container-2xl { @apply max-w-container-2xl mx-auto px-6 sm:px-8 lg:px-16; }
  
  /* Section spacing */
  .section-compact { @apply py-12 lg:py-16; }
  .section-standard { @apply py-16 lg:py-24; }
  .section-spacious { @apply py-20 lg:py-32; }
  .section-hero { @apply py-24 lg:py-40; }
  
  /* Text utilities */
  .text-balance { text-wrap: balance; }
  .text-pretty { text-wrap: pretty; }
  
  /* Backgrounds */
  .bg-pattern-dots {
    background-image: radial-gradient(#E8E6E1 1px, transparent 1px);
    background-size: 24px 24px;
  }
  
  .bg-pattern-grid {
    background-image: 
      linear-gradient(#E8E6E1 1px, transparent 1px),
      linear-gradient(90deg, #E8E6E1 1px, transparent 1px);
    background-size: 48px 48px;
  }
}

@layer utilities {
  /* Animation utilities */
  .animate-delay-100 { animation-delay: 100ms; }
  .animate-delay-200 { animation-delay: 200ms; }
  .animate-delay-300 { animation-delay: 300ms; }
  .animate-delay-400 { animation-delay: 400ms; }
  .animate-delay-500 { animation-delay: 500ms; }
  
  /* Scroll animation base */
  .animate-on-scroll {
    @apply opacity-0 translate-y-5 transition-all duration-gentle ease-out;
  }
  
  .animate-on-scroll.is-visible {
    @apply opacity-100 translate-y-0;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 11. Component Specifications

### Buttons

#### Variants

| Variant | Background | Text | Border | Usage |
|---------|------------|------|--------|-------|
| Primary | amber-500 | stone-950 | none | Primary CTAs |
| Secondary | transparent | stone-950 | stone-950 | Secondary actions |
| Ghost | transparent | stone-950 | none | Tertiary actions |
| Link | transparent | amber-500 | none | Inline links |
| Inverse | cream-50 | stone-950 | none | CTAs on dark |

#### Sizes

| Size | Height | Padding X | Font Size | Icon Size |
|------|--------|-----------|-----------|-----------|
| sm | 36px | 16px | 14px | 16px |
| md | 44px | 24px | 16px | 20px |
| lg | 52px | 32px | 18px | 24px |

#### Component

```tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all duration-fast ease-out focus-visible:outline-2 focus-visible:outline-amber-500 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-amber-500 text-stone-950 hover:bg-amber-400 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0',
        secondary: 'border-2 border-stone-950 text-stone-950 hover:bg-stone-950 hover:text-cream-50',
        ghost: 'text-stone-950 hover:bg-stone-950/5',
        link: 'text-amber-500 hover:underline underline-offset-4',
        inverse: 'bg-cream-50 text-stone-950 hover:bg-white hover:-translate-y-0.5 hover:shadow-md',
      },
      size: {
        sm: 'h-9 px-4 text-body-sm',
        md: 'h-11 px-6 text-body-md',
        lg: 'h-13 px-8 text-body-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
```

### Cards

#### Variants

| Variant | Background | Border | Shadow | Usage |
|---------|------------|--------|--------|-------|
| Default | white | cream-200 | none | Static content |
| Elevated | white | none | md | Important content |
| Interactive | white | cream-200 | none→lg | Clickable cards |
| Feature | cream-100 | none | none | Feature highlights |
| Dark | stone-900 | none | none | Contrast sections |

#### Component

```tsx
const cardVariants = cva(
  'rounded-lg overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-white border border-cream-200',
        elevated: 'bg-white shadow-md',
        interactive: 'bg-white border border-cream-200 transition-all duration-normal hover:-translate-y-1 hover:shadow-lg cursor-pointer',
        feature: 'bg-cream-100',
        dark: 'bg-stone-900 text-cream-50',
      },
      padding: {
        none: '',
        sm: 'p-4 md:p-5',
        md: 'p-6 md:p-8',
        lg: 'p-8 md:p-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
    },
  }
);
```

### Forms

#### Input

```tsx
const inputVariants = cva(
  'w-full rounded-md border bg-white text-stone-950 placeholder:text-warm-400 transition-colors duration-fast',
  {
    variants: {
      size: {
        sm: 'h-9 px-3 text-body-sm',
        md: 'h-11 px-4 text-body-md',
        lg: 'h-13 px-5 text-body-lg',
      },
      state: {
        default: 'border-cream-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500',
        error: 'border-error focus:border-error focus:ring-1 focus:ring-error',
        success: 'border-success focus:border-success focus:ring-1 focus:ring-success',
      },
    },
    defaultVariants: {
      size: 'md',
      state: 'default',
    },
  }
);
```

#### Form Field Pattern

```tsx
interface FormFieldProps {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

export function FormField({
  label,
  htmlFor,
  hint,
  error,
  required,
  children,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="block text-body-sm font-medium text-stone-950"
      >
        {label}
        {required && <span className="text-error ml-1">*</span>}
      </label>
      {children}
      {hint && !error && (
        <p className="text-caption text-warm-400">{hint}</p>
      )}
      {error && (
        <p className="text-caption text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
```

### Badges

```tsx
const badgeVariants = cva(
  'inline-flex items-center rounded-full font-medium',
  {
    variants: {
      variant: {
        default: 'bg-cream-100 text-stone-800',
        amber: 'bg-amber-500/10 text-amber-600',
        success: 'bg-success/10 text-success',
        error: 'bg-error/10 text-error',
        info: 'bg-info/10 text-info',
      },
      size: {
        sm: 'px-2 py-0.5 text-caption',
        md: 'px-3 py-1 text-body-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);
```

---

## 12. Page Templates

### Homepage Structure

```tsx
<main>
  {/* Hero - Dark or Light */}
  <Section background="dark" spacing="hero">
    <Container size="xl">
      <Hero
        overline="For local businesses"
        headline="Your happy customers leave without reviewing. Vizzo changes that."
        subheadline="A premium countertop device that displays your live Google rating and turns satisfied customers into reviewers—at the perfect moment."
        primaryCTA={{ label: "Join the Waitlist", href: "/waitlist" }}
        secondaryCTA={{ label: "How it Works", href: "#how-it-works" }}
      />
    </Container>
  </Section>

  {/* Problem - Light */}
  <Section background="cream" spacing="standard">
    <Container size="lg">
      {/* Problem statement content */}
    </Container>
  </Section>

  {/* Solution - Light */}
  <Section background="light" spacing="standard">
    <Container size="xl">
      {/* Product introduction */}
    </Container>
  </Section>

  {/* How it Works - Cream */}
  <Section id="how-it-works" background="cream" spacing="standard">
    <Container size="xl">
      {/* Step-by-step */}
    </Container>
  </Section>

  {/* Benefits - Light */}
  <Section background="light" spacing="standard">
    <Container size="xl">
      {/* Feature grid */}
    </Container>
  </Section>

  {/* Social Proof - Light */}
  <Section background="cream" spacing="standard">
    <Container size="xl">
      {/* Testimonials or stats */}
    </Container>
  </Section>

  {/* Industries - Light */}
  <Section background="light" spacing="standard">
    <Container size="xl">
      {/* Industry cards */}
    </Container>
  </Section>

  {/* Final CTA - Dark */}
  <Section background="dark" spacing="spacious">
    <Container size="md">
      {/* CTA block */}
    </Container>
  </Section>
</main>
```

### Industry Page Structure

```tsx
<main>
  {/* Hero - Industry specific */}
  <Section background="dark" spacing="hero">
    <Container size="xl">
      <Hero
        overline="For [Industry]"
        headline="[Industry-specific headline]"
        subheadline="[Industry-specific value prop]"
        primaryCTA={{ label: "Join the Waitlist", href: "/waitlist" }}
      />
    </Container>
  </Section>

  {/* Pain Points */}
  <Section background="cream" spacing="standard">
    <Container size="lg">
      {/* Industry-specific pain points */}
    </Container>
  </Section>

  {/* Solution */}
  <Section background="light" spacing="standard">
    <Container size="xl">
      {/* How Vizzo solves these specific problems */}
    </Container>
  </Section>

  {/* ROI */}
  <Section background="cream" spacing="standard">
    <Container size="lg">
      {/* Industry-specific ROI calculation */}
    </Container>
  </Section>

  {/* Testimonial */}
  <Section background="light" spacing="standard">
    <Container size="md">
      {/* Industry testimonial if available */}
    </Container>
  </Section>

  {/* CTA */}
  <Section background="dark" spacing="spacious">
    <Container size="md">
      {/* CTA block */}
    </Container>
  </Section>
</main>
```

### Pricing Page Structure

```tsx
<main>
  {/* Header - Light */}
  <Section background="cream" spacing="standard">
    <Container size="lg">
      <div className="text-center space-y-4">
        <h1 className="text-display-md font-extrabold">
          One device. Unlimited reviews.
        </h1>
        <p className="text-body-lg text-stone-800 max-w-prose mx-auto">
          Clear pricing, real value. One new customer covers the cost.
        </p>
      </div>
    </Container>
  </Section>

  {/* Pricing Cards */}
  <Section background="light" spacing="standard">
    <Container size="xl">
      {/* Pricing card grid */}
    </Container>
  </Section>

  {/* What's Included */}
  <Section background="cream" spacing="standard">
    <Container size="lg">
      {/* Feature comparison table */}
    </Container>
  </Section>

  {/* FAQ */}
  <Section background="light" spacing="standard">
    <Container size="md">
      {/* Accordion FAQ */}
    </Container>
  </Section>

  {/* CTA */}
  <Section background="dark" spacing="spacious">
    <Container size="md">
      {/* Final CTA */}
    </Container>
  </Section>
</main>
```

---

## Appendix A: Quick Reference

### Spacing

| Use Case | Mobile | Desktop |
|----------|--------|---------|
| Between elements (tight) | 8px | 8px |
| Between elements (standard) | 16px | 16px |
| Component padding | 24px | 32px |
| Between components | 32px | 48px |
| Section padding (Y) | 64px | 96px |
| Hero padding (Y) | 96px | 160px |

### Colors (Hex)

| Token | Hex |
|-------|-----|
| stone-950 | #1C1917 |
| stone-900 | #292524 |
| stone-800 | #44403C |
| cream-50 | #FAF9F7 |
| cream-100 | #F5F4F0 |
| cream-200 | #E8E6E1 |
| warm-400 | #A39E93 |
| amber-500 | #D97706 |
| amber-400 | #F59E0B |

### Typography

| Element | Size | Weight |
|---------|------|--------|
| Hero headline | 72px / 40px mobile | 800 |
| Section headline | 48px / 32px mobile | 700 |
| Card title | 24px | 600 |
| Body text | 16px | 400 |
| Lead text | 18px | 400 |
| Caption | 12px | 500 |

### Z-Index Scale

| Element | Z-Index |
|---------|---------|
| Base | 0 |
| Elevated | 10 |
| Dropdown | 20 |
| Sticky header | 30 |
| Modal backdrop | 40 |
| Modal | 50 |
| Toast | 60 |
| Tooltip | 70 |

---

## Appendix B: Do's and Don'ts

### Do's

- ✓ Use generous whitespace
- ✓ Maintain consistent spacing multiples
- ✓ Lead with benefits, not features
- ✓ Use amber accent sparingly
- ✓ Write alt text for all images
- ✓ Test keyboard navigation
- ✓ Keep animations subtle
- ✓ Use semantic HTML elements

### Don'ts

- ✗ Use more than 3 type sizes per component
- ✗ Center-align body text
- ✗ Use pure black (#000000)
- ✗ Use pure white (#FFFFFF) as main background
- ✗ Animate everything
- ✗ Use generic stock photos
- ✗ Forget mobile responsive testing
- ✗ Rely on color alone to convey meaning

---

*This guide version: 1.0*
*Last updated: Initial creation*
*For questions: Reference BRAND.md for copywriting guidelines*
