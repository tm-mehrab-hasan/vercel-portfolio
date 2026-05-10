import { seoData } from '@/lib/content/seo';
import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Alex_Brush } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from '@/components/ScrollToTop';
import ClientOnly from '@/components/ClientOnly';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

const signature = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-signature',
});

export const metadata: Metadata = {
  title: seoData.title,
  authors: [{ name: seoData.author }],
  description: seoData.description,
  keywords: seoData.keywords.join(','),
  metadataBase: new URL(seoData.url),
  alternates: {
    canonical: seoData.url,
  },
  openGraph: {
    type: 'website',
    url: seoData.url,
    title: seoData.title,
    description: seoData.description,
    images: seoData.image,
    siteName: seoData.title,
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.title,
    description: seoData.description,
    images: seoData.image,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable} ${signature.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ClientOnly>
          <Toaster position="bottom-right" />
          <SmoothScroll>
            <ScrollToTop />
            {children}
          </SmoothScroll>
        </ClientOnly>
      </body>
    </html>
  );
}
