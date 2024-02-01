import './globals.scss';

import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import LayoutClient from '@/components/layout/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Social network',
  description: 'A social network for easy communication',
  authors: [{ name: 'Vladislav Potapov', url: 'https://github.com/Nick8582' }],
  icons: '/logo.svg',
};

export const viewport: Viewport = {
  themeColor: '#0E0B18',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
