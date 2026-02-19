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
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">Teacher Guide</p>
          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl text-[var(--foreground)]">
              授業設計から評価まで、
              <br />
              一貫して支える教員向けドキュメント
            </h2>
            <TransitionLink href="/guide" className="btn-primary-orange">
              実施ガイドを開く
            </TransitionLink>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <TransitionLink href="/" className="inline-flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[linear-gradient(135deg,#f97316,#22d3ee)]" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">Teacher Console</p>
                <p className="text-base font-semibold text-[var(--foreground)]">TCG-PBL Guide</p>
              </div>
            </TransitionLink>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--text-secondary)]">
              トレーディングカードゲーム型PBLを実践する教員向けに、準備、授業運営、評価、改善の指針を統合しています。
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">Main Contents</p>
              <div className="space-y-1">
                {footerLinks.slice(0, 3).map((link) => (
                  <TransitionLink
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-2 py-1.5 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)]"
                  >
                    {link.label}
                  </TransitionLink>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">Extended Resources</p>
              <div className="space-y-1">
                {footerLinks.slice(3).map((link) => (
                  <TransitionLink
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-2 py-1.5 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)]"
                  >
                    {link.label}
                  </TransitionLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t pt-5 text-xs sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: 'var(--border-color)' }}>
          <p className="text-[var(--text-muted)]">© {currentYear} TCG-PBL Teacher Guide</p>
          <p className="text-[var(--text-muted)]">Designed for project-based learning in technical education</p>
        </div>
      </div>
    </footer>
  );
}
