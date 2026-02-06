'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lessonsDropdownOpen, setLessonsDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-nav backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      style={{
        background: scrolled
          ? 'rgba(10, 10, 12, 0.8)'
          : 'transparent',
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <TransitionLink href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="gradient-text-orange">TCG-PBL</span>
            </div>
          </TransitionLink>

          <div className="hidden lg:flex items-center space-x-8">
            <TransitionLink
              href="/"
              className="text-foreground hover:text-[#f97316] transition-colors font-medium"
            >
              Home
            </TransitionLink>

            <div
              className="relative"
              onMouseEnter={() => setLessonsDropdownOpen(true)}
              onMouseLeave={() => setLessonsDropdownOpen(false)}
            >
              <button className="text-foreground hover:text-[#f97316] transition-colors font-medium flex items-center space-x-1">
                <span>Lessons</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    lessonsDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {lessonsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-card backdrop-blur-md border border-theme rounded-2xl shadow-2xl overflow-hidden"
                    style={{
                      background: 'rgba(20, 20, 24, 0.95)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    <div className="p-2 max-h-96 overflow-y-auto">
                      {lessons.map((lesson) => (
                        <TransitionLink
                          key={lesson.id}
                          href={lesson.href}
                          className="block px-4 py-3 rounded-lg hover:bg-section-alt transition-colors group"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="text-sm font-bold text-[#f97316]">
                                  Lesson {lesson.id}
                                </span>
                                <span
                                  className={`tag tag-${lesson.color} text-xs`}
                                >
                                  {lesson.phase}
                                </span>
                              </div>
                              <div className="text-sm font-medium text-theme group-hover:text-[#f97316] transition-colors">
                                {lesson.title}
                              </div>
                            </div>
                          </div>
                        </TransitionLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <TransitionLink
              href="/rules"
              className="text-foreground hover:text-[#f97316] transition-colors font-medium"
            >
              Rules
            </TransitionLink>

            <TransitionLink
              href="/resources"
              className="text-foreground hover:text-[#f97316] transition-colors font-medium"
            >
              Resources
            </TransitionLink>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-section-alt transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-section-alt transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-card z-50 lg:hidden overflow-y-auto"
              style={{
                background: 'rgba(10, 10, 12, 0.98)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xl font-bold gradient-text-orange">
                    TCG-PBL
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-section-alt transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="space-y-6">
                  <TransitionLink
                    href="/"
                    className="block text-lg font-medium hover:text-[#f97316] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </TransitionLink>

                  <div>
                    <div className="text-lg font-medium mb-3 text-[#f97316]">
                      Lessons
                    </div>
                    <div className="space-y-2 pl-4">
                      {lessons.map((lesson) => (
                        <TransitionLink
                          key={lesson.id}
                          href={lesson.href}
                          className="block py-2 hover:text-[#f97316] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-sm font-bold">
                              L{lesson.id}
                            </span>
                            <span className={`tag tag-${lesson.color} text-xs`}>
                              {lesson.phase}
                            </span>
                          </div>
                          <div className="text-sm">{lesson.title}</div>
                        </TransitionLink>
                      ))}
                    </div>
                  </div>

                  <TransitionLink
                    href="/rules"
                    className="block text-lg font-medium hover:text-[#f97316] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Rules
                  </TransitionLink>

                  <TransitionLink
                    href="/resources"
                    className="block text-lg font-medium hover:text-[#f97316] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Resources
                  </TransitionLink>

                  <button
                    onClick={toggleTheme}
                    className="flex items-center space-x-3 text-lg font-medium hover:text-[#f97316] transition-colors"
                  >
                    {theme === 'dark' ? (
                      <>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        <span>Light Mode</span>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                          />
                        </svg>
                        <span>Dark Mode</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
