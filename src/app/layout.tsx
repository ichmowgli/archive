import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';

import { ReactQueryClientProvider } from './ReactQueryClientProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Archive',
  description: 'A simple archive of items.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/archive-logo.svg',
        href: '/archive-logo.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/archive-logo_dark.svg',
        href: '/archive-logo_dark.svg',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryClientProvider>
      <html lang="en" className={GeistSans.className}>
        <body>
          {children}
          <SpeedInsights />
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
