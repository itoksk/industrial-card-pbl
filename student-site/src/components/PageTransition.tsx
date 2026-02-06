'use client';

import { useEffect, useState } from 'react';

export default function PageTransition() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`page-transition-overlay ${loaded ? 'loaded' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9998,
        background: '#f97316',
        transformOrigin: loaded ? 'top' : 'bottom',
        transform: loaded ? 'scaleY(0)' : 'scaleY(1)',
        transition: 'transform 0.6s cubic-bezier(0.87, 0, 0.13, 1)',
        pointerEvents: 'none',
      }}
    />
  );
}
