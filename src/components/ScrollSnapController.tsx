'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollSnapController() {
  const pathname = usePathname();

  useEffect(() => {
    const html = document.documentElement;
    if (pathname === '/sponsors') {
      html.classList.add('no-snap-page');
    } else {
      html.classList.remove('no-snap-page');
    }
    return () => html.classList.remove('no-snap-page');
  }, [pathname]);

  return null;
}
