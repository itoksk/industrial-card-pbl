'use client';

import TransitionLink from './TransitionLink';

const lessons = [
  { id: 1, title: 'TCG-PBLとは？', href: '/lessons/1' },
  { id: 2, title: '対象分野の分類', href: '/lessons/2' },
  { id: 3, title: 'パラメータ調査', href: '/lessons/3' },
  { id: 4, title: '規制と法令', href: '/lessons/4' },
  { id: 5, title: '防御/補助カード設計', href: '/lessons/5' },
  { id: 6, title: 'カードレイアウト設計', href: '/lessons/6' },
  { id: 7, title: 'AIカード生成', href: '/lessons/7' },
  { id: 8, title: '一括作成と改善', href: '/lessons/8' },
  { id: 9, title: 'テストプレイと評価', href: '/lessons/9' },
];

export default function Footer() {
  return (
    <footer className="bg-section-alt border-t border-theme mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-1">
            <TransitionLink href="/" className="inline-block mb-4">
              <div className="text-2xl font-bold gradient-text-orange">
                TCG-PBL
              </div>
            </TransitionLink>
            <p className="text-theme-muted text-sm leading-relaxed">
              カードゲーム制作を通じて学ぶPBLフレームワーク。産業保安分野の知識を実践的に習得します。
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4 text-[#f97316]">Lessons</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {lessons.map((lesson) => (
                <TransitionLink
                  key={lesson.id}
                  href={lesson.href}
                  className="text-sm text-theme-muted hover:text-[#f97316] transition-colors flex items-start space-x-2 group"
                >
                  <span className="text-[#f97316] font-bold shrink-0">
                    {lesson.id}.
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    {lesson.title}
                  </span>
                </TransitionLink>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#f97316]">Resources</h3>
            <div className="space-y-3">
              <TransitionLink
                href="/rules"
                className="block text-sm text-theme-muted hover:text-[#f97316] transition-colors hover:translate-x-1 transition-transform"
              >
                Game Rules
              </TransitionLink>
              <TransitionLink
                href="/resources"
                className="block text-sm text-theme-muted hover:text-[#f97316] transition-colors hover:translate-x-1 transition-transform"
              >
                Teaching Materials
              </TransitionLink>
            </div>
          </div>
        </div>

        <div className="border-t border-theme pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-theme-muted">
              &copy; {new Date().getFullYear()} TCG-PBL. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-sm text-theme-muted hover:text-[#f97316] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-theme-muted hover:text-[#f97316] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
