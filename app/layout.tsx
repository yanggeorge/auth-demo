import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type React from 'react';

import { Providers } from './providers';
import { auth } from '@/auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'auth demo',
  generator: 'v0.dev',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  console.log('🚀 ~ layout.tsx:23 ~ session:', session);
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
