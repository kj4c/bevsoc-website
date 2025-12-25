'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading';

export default function LoadingPage() {
  const router = useRouter();

  useEffect(() => {
    // Mark that we've shown the loading page
    sessionStorage.setItem('visited', 'true');
    
    // Redirect to home after 2 seconds
    const timer = setTimeout(() => {
      router.push('/home');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return <Loading />;
}
