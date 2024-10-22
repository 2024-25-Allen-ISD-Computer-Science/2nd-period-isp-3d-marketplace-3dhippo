// app/page.tsx
"use client"; // This makes the component a client component

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the marketplace page on the client side
    router.push('/marketplace');
  }, [router]);

  return null; // Render nothing since it's redirected
}