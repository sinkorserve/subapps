'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootSubdomainPage() {
  const router = useRouter();

  useEffect(() => {
    const host = window.location.host; // e.g., us.75001.mydomain.com
    const parts = host.split('.');
    const country = parts[0]; // 'us'
    const zip = parts[1];     // '75001'
    
    router.push(`/${country}/${zip}`); // redirect to your dynamic route
  }, [router]);

  return <div>Redirecting...</div>;
}
