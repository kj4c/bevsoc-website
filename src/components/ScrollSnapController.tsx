'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollSnapController() {
  const pathname = usePathname();

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (pathname === '/sponsors') {
      html.classList.add('no-snap-page');
    } else {
      html.classList.remove('no-snap-page');
    }
    // Scroll after layout updates (class change can affect scroll position)
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    });
    return () => {
      cancelAnimationFrame(id);
      html.classList.remove('no-snap-page');
    };
  }, [pathname]);

  return null;
}
