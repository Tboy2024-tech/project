import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Navigation from '@/components/Navigation';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ojo Oluwatimileyin - Graphic Designer & UI/UX Designer',
  description: 'Transforming ideas into visually stunning and user-friendly experiences. Portfolio of Ojo Oluwatimileyin, a passionate graphic designer and UI/UX designer.',
  keywords: 'graphic design, UI/UX design, branding, portfolio, Ojo Oluwatimileyin, Nigeria, Lagos, designer, creative',
  authors: [{ name: 'Ojo Oluwatimileyin' }],
  creator: 'Ojo Oluwatimileyin',
  publisher: 'Ojo Oluwatimileyin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Ojo Oluwatimileyin - Graphic Designer & UI/UX Designer',
    description: 'Transforming ideas into visually stunning and user-friendly experiences.',
    type: 'website',
    locale: 'en_US',
    url: 'https://ojodesigns.com',
    siteName: 'Ojo Oluwatimileyin Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ojo Oluwatimileyin - Graphic Designer & UI/UX Designer',
    description: 'Transforming ideas into visually stunning and user-friendly experiences.',
    creator: '@ojodesigns',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#00ADB5" />
        <meta name="msapplication-TileColor" content="#00ADB5" />
      </head>
      <body className="font-inter bg-gray-900 text-gray-50 antialiased">
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <footer className="bg-gray-800 py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © 2024 Ojo Oluwatimileyin. All rights reserved.
            </p>
          </div>
        </footer>
  {/* Server-rendered modal root for portals (keeps body attrs consistent) */}
  <div id="modal-root" />
      </body>
    </html>
  );
}