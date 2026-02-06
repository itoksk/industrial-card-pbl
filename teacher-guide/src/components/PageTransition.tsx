'use client';

import { useEffect, useState } from 'react';

export default function PageTransition() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-transition-overlay ${loaded ? 'loaded' : ''}`} />
  );
}
