import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/lib/site.config';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
};

export const metadata: Metadata = {
  // Base URL for resolving relative URLs
  metadataBase: new URL(siteConfig.url),

  // Title with template for child pages
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  category: siteConfig.category,

  // Authorship
  authors: [...siteConfig.authors],
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,

  // Generator
  generator: 'Next.js',
  applicationName: siteConfig.name,
  referrer: 'origin-when-cross-origin',

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph - Complete
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.images.og.url,
        secureUrl: siteConfig.images.og.url,
        width: siteConfig.images.og.width,
        height: siteConfig.images.og.height,
        alt: siteConfig.images.og.alt,
        type: siteConfig.images.og.type,
      },
    ],
    // Add when supporting multiple languages:
    // alternateLocale: siteConfig.alternateLocales,
  },

  // Twitter - Complete
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.social.twitter.site,
    creator: siteConfig.social.twitter.handle,
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: {
      url: siteConfig.images.twitter.url,
      width: siteConfig.images.twitter.width,
      height: siteConfig.images.twitter.height,
      alt: siteConfig.images.twitter.alt,
    },
  },

  // Verification
  verification: {
    google: siteConfig.verification.google || undefined,
    // yandex: siteConfig.verification.yandex,
    // other: { 'facebook-domain-verification': siteConfig.verification.facebook },
  },

  // Icons - Next.js auto-discovers from app/ folder:
  // app/favicon.ico, app/icon.svg, app/apple-icon.png

  // Manifest for PWA
  manifest: '/manifest.webmanifest',

  // Canonical & Alternates
  alternates: {
    canonical: '/',
    // languages: {
    //   'en-US': '/en-US',
    //   'fr-FR': '/fr-FR',
    // },
  },

  // App Links (for mobile deep linking - uncomment when you have apps)
  // appLinks: {
  //   ios: {
  //     url: 'vizzo://home',
  //     app_store_id: 'your-app-id',
  //   },
  //   android: {
  //     package: 'com.vizzo.app',
  //     app_name: 'Vizzo',
  //   },
  // },

  // Other
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Facebook App ID (uncomment when you have one)
  // other: {
  //   'fb:app_id': siteConfig.facebookAppId,
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
