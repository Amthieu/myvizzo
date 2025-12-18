/**
 * Central site configuration
 * All SEO, metadata, and site-wide constants in one place
 */

export const siteConfig = {
  // Core
  name: 'Vizzo',
  tagline: 'Turn Happy Customers Into Reviewers',
  description:
    'Premium devices that turn happy customers into reviewers. Paired with a dashboard to track, analyze, and respond.',
  url: 'https://myvizzo.com',

  // Locale
  locale: 'en_US',
  // Add alternate locales when you support other languages
  // alternateLocales: ['fr_FR', 'es_ES'],

  // Social Images
  images: {
    // Primary Open Graph (Facebook, LinkedIn, Discord, Slack)
    og: {
      url: '/OpenGraph-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'Vizzo - Turn Happy Customers Into Reviewers',
      type: 'image/png',
    },
    // Twitter (summary_large_image)
    twitter: {
      url: '/OpenGraph-1200x675.png',
      width: 1200,
      height: 675,
      alt: 'Vizzo - Turn Happy Customers Into Reviewers',
    },
    // Pinterest (vertical)
    pinterest: {
      url: '/OpenGraph-1000x1500.png',
      width: 1000,
      height: 1500,
    },
    // WhatsApp / small previews
    small: {
      url: '/OpenGraph-300x200.png',
      width: 300,
      height: 200,
    },
    // Twitter summary (square)
    square: {
      url: '/OpenGraph-120x120.png',
      width: 120,
      height: 120,
    },
  },

  // Organization / Authorship
  creator: 'Vizzo',
  publisher: 'Vizzo',
  authors: [{ name: 'Vizzo', url: 'https://myvizzo.com' }],

  // Theme
  themeColor: '#1C1917',
  backgroundColor: '#FAF9F7',

  // Social handles and links
  social: {
    twitter: {
      handle: '@vizzo',        // With @
      site: '@vizzo',          // Company handle
      url: 'https://twitter.com/vizzo',
    },
    linkedin: {
      url: 'https://linkedin.com/company/vizzo',
    },
    instagram: {
      url: 'https://instagram.com/vizzo',
    },
  },

  // Verification (add your IDs when you have them)
  verification: {
    google: '', // Google Search Console verification
    // facebook: '', // Facebook domain verification
    // yandex: '',
    // bing: '',
  },

  // Facebook App (optional - for FB insights)
  // facebookAppId: '',

  // Keywords for SEO
  keywords: [
    'google reviews',
    'review management',
    'customer reviews',
    'local business',
    'reputation management',
    'review generation',
    'NFC review stand',
    'QR code reviews',
    'review kiosk',
    'customer feedback',
    'online reputation',
    'google business reviews',
  ],

  // Category (for structured data)
  category: 'Technology',
} as const;

export type SiteConfig = typeof siteConfig;
