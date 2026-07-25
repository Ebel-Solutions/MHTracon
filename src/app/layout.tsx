import type { Metadata, Viewport } from 'next';
import { Lexend, Lato } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};


const lexend = Lexend({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-lexend',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mhtracon.com'),
  title: {
    default:
      'MHtracon | Engineering, MEP, Security & Digital Solutions Company in Riyadh',
    template: '%s | MHtracon',
  },
  description:
    'MHtracon is a leading multi-solutions company based in Riyadh, Saudi Arabia, providing Engineering, MEP, Security Solutions, Fire & Safety, AI & Software Development, Networking, Interior & Exterior Design, Heavy Machinery, Corporate Supplies, and Business Solutions.',

  keywords: [
    'MHtracon',
    'Engineering Company Riyadh',
    'MEP Services Saudi Arabia',
    'Security Solutions Riyadh',
    'Fire Safety Solutions',
    'Networking Infrastructure',
    'AI Software Development',
    'Interior Exterior Design',
    'Corporate Gifts Saudi Arabia',
    'Industrial Uniform Supplier',
    'Heavy Machinery Services',
    'Automotive Services',
    'Digital Transformation',
    'Business Solutions Riyadh',
    'Saudi Arabia Engineering Company',
  ],
  authors: [{ name: 'MHtracon' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mhtracon.com',
    siteName: 'MHtracon',
    title: 'MHtracon | Engineering, MEP, Security & Digital Solutions Company',
    description:
      'Delivering integrated engineering, MEP, security, networking, fire & safety, AI, software, interior solutions, corporate supplies, and industrial services across Saudi Arabia.',
    images: [
      {
        url: '/images/banner/banner-1.jpg',
        width: 1200,
        height: 630,
        alt: 'MHtracon - Engineering, MEP, Security & Digital Solutions Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MHtracon | Engineering, MEP, Security & Digital Solutions Company',
    description:
      'Delivering integrated engineering, MEP, security, networking, fire & safety, AI, software, interior solutions, corporate supplies, and industrial services across Saudi Arabia.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://mhtracon.com',
  },
  icons: {
    icon: '/images/logos/favicon.png',
    apple: '/images/logos/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.variable} ${lato.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
