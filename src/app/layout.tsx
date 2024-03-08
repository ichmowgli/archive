import React from 'react';

import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Next app',
  description: 'Next app',
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
    <html lang="en" className={GeistSans.className}>
      <body className="bg-stone-200">{children}</body>
    </html>
  );
}
