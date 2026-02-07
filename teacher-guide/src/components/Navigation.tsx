'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import TransitionLink from './TransitionLink';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { href: '/', label: 'ホーム' },
  { href: '/overview', label: 'PBL概要' },
  { href: '/guide', label: '実施ガイド' },
  { href: '/pedagogy', label: '教授法メモ' },
  { href: '/rules-evolution', label: 'ルール進化' },
  { href: '/outlook', label: '今後の展望' },
  { href: '/card-reference', label: 'カードリファレンス' },
];

export default function Navigation() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [mobilePath, setMobilePath] = useState<string | null>(null);

  const mobileMenuOpen = mobilePath === pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
        className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500"
        style={{
          borderColor: scrolled ? 'var(--border)' : 'transparent',
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px) saturate(140%)' : 'none',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between gap-3">
            <TransitionLink href="/" className="group flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-xl border overflow-hidden" style={{ borderColor: 'var(--surface-glass-border)' }}>
                <div className="absolute inset-0 bg-gradient-primary" />
                <div className="absolute inset-[1px] rounded-[10px]" style={{ background: 'var(--background)' }} />
                <div className="absolute inset-0 flex items-center justify-center text-xs font-black tracking-[0.12em] text-accent-primary">
                  EDU
                </div>
              </div>
              <div className="hidden sm:block">
                <p className="text-[10px] uppercase tracking-[0.16em] text-theme-muted">Teacher Console</p>
                <p className="text-base font-semibold text-theme">TCG-PBL Guide</p>
              </div>
            </TransitionLink>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <TransitionLink
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-3 py-2 text-sm font-semibold transition-all"
                    style={{
                      color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                      background: active ? 'var(--surface-hover)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </TransitionLink>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="hidden lg:flex h-10 w-10 items-center justify-center rounded-xl border bg-surface-glass border-surface-glass-border hover:bg-surface-hover"
                aria-label="テーマ切り替え"
              >
                {theme === 'light' ? (
                  <svg className="w-5 h-5 text-theme" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-theme" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>

              <button
                onClick={() => setMobilePath(mobileMenuOpen ? null : pathname)}
                className="lg:hidden h-10 w-10 rounded-xl border bg-surface-glass border-surface-glass-border"
                aria-label="メニューを開く"
              >
                {mobileMenuOpen ? (
                  <svg className="w-5 h-5 mx-auto text-theme" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 mx-auto text-theme" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              style={{ background: 'rgba(2, 6, 23, 0.66)' }}
              onClick={() => setMobilePath(null)}
              aria-label="メニューを閉じる"
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 24, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-[88vw] max-w-sm border-l p-6 overflow-y-auto"
              style={{ borderColor: 'var(--border)', background: 'var(--background)' }}
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-theme-muted">Teacher Console</p>
                  <p className="text-lg font-semibold text-theme">Navigation</p>
                </div>
                <button onClick={() => setMobilePath(null)} className="h-9 w-9 rounded-lg border border-theme" aria-label="閉じる">
                  <svg className="w-5 h-5 mx-auto text-theme" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-1">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <TransitionLink
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobilePath(null)}
                      className="block rounded-xl px-3 py-2.5 text-sm font-semibold"
                      style={{
                        color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                        background: active ? 'var(--surface-hover)' : 'transparent',
                      }}
                    >
                      {link.label}
                    </TransitionLink>
                  );
                })}
              </div>

              <button
                onClick={toggleTheme}
                className="mt-6 w-full rounded-xl border border-theme px-3 py-2.5 text-sm font-semibold text-theme"
              >
                {theme === 'dark' ? 'ライトモードへ' : 'ダークモードへ'}
              </button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
