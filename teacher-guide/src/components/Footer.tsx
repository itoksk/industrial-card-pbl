'use client';

import TransitionLink from './TransitionLink';

const footerLinks = [
  { href: '/overview', label: 'PBL概要' },
  { href: '/guide', label: '実施ガイド' },
  { href: '/pedagogy', label: '教授法メモ' },
  { href: '/rules-evolution', label: 'ルール進化' },
  { href: '/outlook', label: '今後の展望' },
  { href: '/card-reference', label: 'カードリファレンス' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-section-alt border-t border-theme mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary blur-lg opacity-50" />
                <div className="relative w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold gradient-text">
                TCG-PBL Guide
              </h3>
            </div>
            <p className="text-theme-muted text-sm leading-relaxed max-w-md">
              トレーディングカードゲーム形式で学ぶ、工業系PBL教材の教員向けガイド。実践的な指導法と評価基準を提供します。
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-theme uppercase tracking-wider mb-4">
              コンテンツ
            </h4>
            <ul className="space-y-2">
              {footerLinks.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <TransitionLink
                    href={link.href}
                    className="text-sm text-theme-muted hover:text-accent-primary transition-colors"
                  >
                    {link.label}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-theme uppercase tracking-wider mb-4">
              リソース
            </h4>
            <ul className="space-y-2">
              {footerLinks.slice(3).map((link) => (
                <li key={link.href}>
                  <TransitionLink
                    href={link.href}
                    className="text-sm text-theme-muted hover:text-accent-primary transition-colors"
                  >
                    {link.label}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-theme">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-theme-muted">
              {currentYear} TCG-PBL 教員ガイド. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <TransitionLink
                href="/"
                className="text-sm text-theme-muted hover:text-accent-primary transition-colors"
              >
                ホーム
              </TransitionLink>
              <span className="text-theme-muted">|</span>
              <TransitionLink
                href="/overview"
                className="text-sm text-theme-muted hover:text-accent-primary transition-colors"
              >
                概要
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
