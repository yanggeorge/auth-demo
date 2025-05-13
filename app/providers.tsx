'use client';

import { SessionProvider } from 'next-auth/react';
import type React from 'react';

export function Providers({ children, session }: { children: React.ReactNode; session: any }) {
  console.log('🚀 ~ providers.tsx:7 ~ Providers ~ session:', session);

  return (
    <SessionProvider session={session} key={session?.user?.email}>
      {children}
    </SessionProvider>
  );
}
