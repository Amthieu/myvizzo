# Vizzo Website - Handoff Package

## What's In This Package

```
vizzo-handoff/
├── README.md                      ← You are here
├── CLAUDE_CODE_HANDOFF.md         ← MAIN INSTRUCTIONS (read first)
├── VIZZO_STYLING_GUIDE.md         ← Design system & Tailwind config
├── VIZZO_COPYWRITING_GUIDE.md     ← Brand voice & terminology
├── vizzo-homepage-v2.html         ← Homepage wireframe (source of truth)
└── assets/
    ├── vizzoappicon512x512.png    ← App icon
    ├── vizzologodark1920x600.png  ← Logo on dark background
    └── vizzocover1920x500.png     ← Cover/hero image
```

---

## For Claude Code: Start Here

### Step 1: Add These Files to Your Project

Create a Claude Project in Claude Code and add these files to the project knowledge:
- `CLAUDE_CODE_HANDOFF.md`
- `VIZZO_STYLING_GUIDE.md`
- `VIZZO_COPYWRITING_GUIDE.md`
- `vizzo-homepage-v2.html`

### Step 2: First Prompt

Copy and paste this as your first message to Claude Code:

```
I need to build the Vizzo marketing website using NextJS 14+ with App Router and Tailwind CSS.

Please read all the project files in this order:
1. CLAUDE_CODE_HANDOFF.md - Your master instruction guide
2. VIZZO_STYLING_GUIDE.md - Design system (has exact Tailwind config)
3. VIZZO_COPYWRITING_GUIDE.md - Brand voice (sections 2.1-2.3 and Appendix A)
4. vizzo-homepage-v2.html - The homepage wireframe to implement

After reading, please:
1. Confirm you understand the project
2. Create the NextJS project with the correct folder structure
3. Set up Tailwind with the exact colors and typography from the styling guide
4. Begin building components in the order specified in the handoff document

Start with Phase 1: Setup & Foundations.
```

### Step 3: Build Incrementally

Follow the phases in `CLAUDE_CODE_HANDOFF.md`:
- Phase 1: Setup & Foundations
- Phase 2: Layout Components
- Phase 3: UI Primitives
- Phase 4: Homepage Blocks
- Phase 5: Homepage Assembly
- Phase 6: Additional Pages

---

## File Purposes

| File | What It Contains |
|------|------------------|
| `CLAUDE_CODE_HANDOFF.md` | Complete implementation guide: project structure, component specs, TypeScript interfaces, build order, reusability map |
| `VIZZO_STYLING_GUIDE.md` | Colors, typography, spacing, Tailwind config, component variants, accessibility standards |
| `VIZZO_COPYWRITING_GUIDE.md` | Brand personality, tone, terminology rules, messaging guidelines |
| `vizzo-homepage-v2.html` | Fully styled HTML wireframe - the exact structure and copy to implement |

---

## Key Things Claude Code Must Know

### Terminology (from Copywriting Guide)

| ✓ Always Use | ✗ Never Use |
|--------------|-------------|
| Device | Hardware, display, screen, unit |
| Dashboard | Platform, portal, app, software |
| Google rating | Star rating, review score |
| Join the waitlist | Sign up, subscribe, register |

### Colors (from Styling Guide)

- **Primary Dark**: `#1C1917` (stone-950)
- **Background**: `#FAF9F7` (cream-50)
- **Accent**: `#D97706` (amber-500)
- **Borders**: `#E8E6E1` (cream-200)

### Font

Plus Jakarta Sans from Google Fonts - weights 400, 500, 600, 700, 800

---

## Verification Checklist

After Claude Code builds the homepage, verify:

- [ ] Header has logo + nav + "Join Waitlist" button
- [ ] Hero has dark background with grid pattern and amber glow
- [ ] Silent Majority shows 98% with dot visualization
- [ ] AI Comparison shows Google vs ChatGPT side-by-side
- [ ] Solution Cards: dark device card (left), white dashboard card (right)
- [ ] Device preview shows rating, stars, QR/NFC icons
- [ ] How It Works has 5 numbered steps
- [ ] Benefits has 4 cards in grid
- [ ] ROI section shows the chain (3-5× → +0.1★ → ∞)
- [ ] Stats grid shows 721%, 93%, and Reviews as #1 signal
- [ ] Industry grid has 4 cards with hover effects
- [ ] Compliance banner says "100% compliant with Google's Terms of Service"
- [ ] CTA section has email signup with "Turn your happy customers into reviewers"
- [ ] Footer has 5-column layout with proper links

---

## Need Help?

If Claude Code gets stuck:
1. Point it to the specific section in `vizzo-homepage-v2.html`
2. Reference the relevant component spec in `CLAUDE_CODE_HANDOFF.md`
3. For styling questions, reference `VIZZO_STYLING_GUIDE.md`
4. For copy/terminology, reference `VIZZO_COPYWRITING_GUIDE.md`

The HTML wireframe is the source of truth. If there's any conflict, the HTML wins.
