'use client';

import { LogOut } from 'lucide-react';
import { useSession } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import { logOut } from '@/lib/actions';

export default function Home() {
  console.log('🚀 ~ Home begin');
  const { data: session } = useSession();
  console.log('🚀 ~ page.tsx:8 ~ Home ~ session:', session);

  const handleSignOut = async () => {
    console.log('Logging out...');
    await logOut();
  };

  const username = session?.user?.name || 'null';

  console.log('🚀 ~ Home end');
  return (
    <main className="flex h-screen w-screen flex-col overflow-hidden">
      <p> user: {username} </p>
      <Button variant="ghost" size="sm" className="w-full justify-start text-left" onClick={handleSignOut}>
        <LogOut className="mr-2 size-4" />
        <span>Logout</span>
      </Button>
    </main>
  );
}
