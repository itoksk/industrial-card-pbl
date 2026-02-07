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
    <footer className="mt-24 border-t" style={{ borderColor: 'var(--border-color)', background: 'var(--section-alt-bg)' }}>
      <div className="container-custom py-14">
        <div
          className="mb-8 rounded-3xl border p-6 sm:p-8"
          style={{
            borderColor: 'var(--border-color)',
            background:
              'linear-gradient(135deg, color-mix(in srgb, var(--accent) 10%, transparent), color-mix(in srgb, var(--accent-cool) 10%, transparent))',
          }}
        >
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">Card Game Project</p>
          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl text-[var(--foreground)]">
              学びを「遊び」から
              <br />
              「創造」へ変える
            </h2>
            <TransitionLink href="/lessons/1" className="btn-primary-orange">
              授業を始める
            </TransitionLink>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <TransitionLink href="/" className="inline-flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[linear-gradient(135deg,#f97316,#22d3ee)]" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">Industrial Learning</p>
                <p className="text-base font-semibold text-[var(--foreground)]">TCG-PBL Studio</p>
              </div>
            </TransitionLink>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--text-secondary)]">
              カードゲーム制作を軸に、調査・設計・制作・評価までを横断するPBL学習サイトです。
            </p>
          </div>

          <div className="lg:col-span-5">
            <p className="mb-3 text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">Lessons</p>
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              {lessons.map((lesson) => (
                <TransitionLink
                  key={lesson.id}
                  href={lesson.href}
                  className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)]"
                >
                  <span className="text-xs font-bold text-[var(--accent)]">{lesson.id.toString().padStart(2, '0')}</span>
                  <span>{lesson.title}</span>
                </TransitionLink>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-3 text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">Links</p>
            <div className="space-y-1">
              <TransitionLink href="/rules" className="block rounded-lg px-2 py-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)]">
                Game Rules
              </TransitionLink>
              <TransitionLink href="/resources" className="block rounded-lg px-2 py-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)]">
                Teaching Materials
              </TransitionLink>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t pt-5 text-xs sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: 'var(--border-color)' }}>
          <p className="text-[var(--text-muted)]">© {new Date().getFullYear()} TCG-PBL Studio</p>
          <p className="text-[var(--text-muted)]">Designed for project-based learning in technical education</p>
        </div>
      </div>
    </footer>
  );
}
