'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function TransitionLink({
  href,
  children,
  className = '',
  onClick,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) {
      return;
    }

    if (href.startsWith('http') || href.startsWith('mailto:')) {
      return;
    }

    e.preventDefault();
    setIsExiting(true);

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

type TransitionLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & Omit<React.ComponentProps<typeof Link>, 'href' | 'children' | 'className' | 'onClick'>;
