'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import TransitionLink from './TransitionLink';
import { useTheme } from './ThemeProvider';

const lessons = [
  { id: 1, title: 'TCG-PBLとは？', phase: 'Phase 1', color: 'orange', href: '/lessons/1' },
  { id: 2, title: '対象分野の分類', phase: 'Phase 1', color: 'orange', href: '/lessons/2' },
  { id: 3, title: 'パラメータ調査', phase: 'Phase 2', color: 'yellow', href: '/lessons/3' },
  { id: 4, title: '規制と法令', phase: 'Phase 2', color: 'yellow', href: '/lessons/4' },
  { id: 5, title: '防御/補助カード設計', phase: 'Phase 2', color: 'yellow', href: '/lessons/5' },
  { id: 6, title: 'カードレイアウト設計', phase: 'Phase 3', color: 'blue', href: '/lessons/6' },
  { id: 7, title: 'AIカード生成', phase: 'Phase 3', color: 'blue', href: '/lessons/7' },
  { id: 8, title: '一括作成と改善', phase: 'Phase 3', color: 'blue', href: '/lessons/8' },
  { id: 9, title: 'テストプレイと評価', phase: 'Phase 4', color: 'green', href: '/lessons/9' },
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/rules', label: 'Rules' },
  { href: '/resources', label: 'Resources' },
];

export default function Navigation() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuPath, setMobileMenuPath] = useState<string | null>(null);
  const [lessonsOpenPath, setLessonsOpenPath] = useState<string | null>(null);

  const isMobileMenuOpen = mobileMenuPath === pathname;
  const isLessonsOpen = lessonsOpenPath === pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
        className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500"
        style={{
          borderColor: scrolled ? 'var(--nav-border)' : 'transparent',
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(18px) saturate(140%)' : 'none',
        }}
      >
        <div className="container-custom">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            <TransitionLink href="/" className="group flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/20 bg-black/5 dark:bg-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.5),transparent_55%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#f97316,#22d3ee)] opacity-90" />
                <div className="absolute inset-[1px] rounded-[10px] bg-[var(--card-bg)]" />
                <div className="absolute inset-0 flex items-center justify-center text-xs font-black tracking-[0.12em] text-[var(--accent)]">
                  PBL
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">Industrial Learning</p>
                <p className="text-sm font-semibold tracking-wide text-[var(--foreground)]">TCG-PBL Studio</p>
              </div>
            </TransitionLink>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <TransitionLink
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-4 py-2 text-sm font-semibold transition-all"
                    style={{
                      color: active ? 'var(--foreground)' : 'var(--text-secondary)',
                      background: active ? 'var(--accent-subtle)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </TransitionLink>
                );
              })}

              <div
                className="relative"
                onMouseEnter={() => setLessonsOpenPath(pathname)}
                onMouseLeave={() => setLessonsOpenPath(null)}
              >
                <button
                  className="flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-semibold transition-all"
                  style={{
                    color: pathname.startsWith('/lessons') ? 'var(--foreground)' : 'var(--text-secondary)',
                    background: pathname.startsWith('/lessons') ? 'var(--accent-subtle)' : 'transparent',
                  }}
                >
                  Lessons
                  <svg
                    className={`h-4 w-4 transition-transform duration-300 ${isLessonsOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {isLessonsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="absolute right-0 top-full mt-3 w-[27rem] rounded-2xl border p-3 shadow-2xl"
                      style={{
                        borderColor: 'var(--border-color)',
                        background: 'var(--card-bg)',
                        boxShadow: '0 26px 60px rgba(0, 0, 0, 0.18)',
                      }}
                    >
                      <div className="grid grid-cols-2 gap-2">
                        {lessons.map((lesson) => (
                          <TransitionLink
                            key={lesson.id}
                            href={lesson.href}
                            className="group rounded-xl border px-3 py-2.5 transition-all"
                            style={{ borderColor: 'var(--border-color)' }}
                          >
                            <div className="mb-1 flex items-center justify-between">
                              <span className="text-[11px] font-bold tracking-wide text-[var(--accent)]">Lesson {lesson.id}</span>
                              <span className={`tag tag-${lesson.color} text-[10px]`}>{lesson.phase}</span>
                            </div>
                            <p className="text-xs font-medium text-[var(--foreground)] group-hover:text-[var(--accent)]">{lesson.title}</p>
                          </TransitionLink>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="hidden lg:flex h-10 w-10 items-center justify-center rounded-xl border transition-colors"
                style={{
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-secondary)',
                  background: 'var(--card-bg)',
                }}
                aria-label="テーマ切替"
              >
                {theme === 'dark' ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              <button
                className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl border"
                style={{
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-secondary)',
                  background: 'var(--card-bg)',
                }}
                onClick={() => setMobileMenuPath(isMobileMenuOpen ? null : pathname)}
                aria-label="モバイルメニュー"
              >
                {isMobileMenuOpen ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              style={{ background: 'var(--overlay-bg)' }}
              onClick={() => setMobileMenuPath(null)}
              aria-label="メニューを閉じる"
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-[85vw] max-w-sm border-l px-5 pt-5 pb-8 overflow-y-auto"
              style={{
                borderColor: 'var(--border-color)',
                background: 'var(--card-bg)',
              }}
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">Navigation</p>
                  <p className="text-base font-semibold text-[var(--foreground)]">TCG-PBL Studio</p>
                </div>
                <button
                  onClick={() => setMobileMenuPath(null)}
                  className="h-9 w-9 rounded-lg border"
                  style={{ borderColor: 'var(--border-color)' }}
                  aria-label="閉じる"
                >
                  <svg className="mx-auto h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-1">
                {navLinks.map((link) => (
                  <TransitionLink
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuPath(null)}
                    className="block rounded-xl px-3 py-2.5 text-sm font-semibold"
                    style={{
                      color: pathname === link.href ? 'var(--foreground)' : 'var(--text-secondary)',
                      background: pathname === link.href ? 'var(--accent-subtle)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </TransitionLink>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border p-3" style={{ borderColor: 'var(--border-color)' }}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">Lessons</p>
                <div className="space-y-1.5">
                  {lessons.map((lesson) => (
                    <TransitionLink
                      key={lesson.id}
                      href={lesson.href}
                      onClick={() => setMobileMenuPath(null)}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-xs"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span className="font-medium">{lesson.id}. {lesson.title}</span>
                      <span className={`tag tag-${lesson.color} text-[10px]`}>{lesson.phase}</span>
                    </TransitionLink>
                  ))}
                </div>
              </div>

              <button
                onClick={toggleTheme}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-semibold"
                style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
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
