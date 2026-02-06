'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function TransitionLink({
  href,
  children,
  className = '',
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // External links
    if (href.startsWith('http') || href.startsWith('mailto:')) {
      return;
    }

    e.preventDefault();
    setIsExiting(true);

    // Wait for exit animation
    setTimeout(() => {
      router.push(href);
    }, 600);
  };

  useEffect(() => {
    if (isExiting) {
      document.body.classList.add('page-exiting');
    }
    return () => {
      document.body.classList.remove('page-exiting');
    };
  }, [isExiting]);

  return (
    <Link href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
}
