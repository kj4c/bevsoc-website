'use client';
import { useState, useEffect } from 'react';
import Loading from './Loading';

export default function LoadingOverlay() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('visited');
    
    if (!hasLoaded) {
      setIsVisible(true);
      
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      <Loading />
    </div>
  );
}
