'use client';

import { motion } from 'framer-motion';
import {
  BookOpenIcon,
  ClipboardDocumentCheckIcon,
  LightBulbIcon,
  ArrowPathIcon,
  RocketLaunchIcon,
  RectangleStackIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import TransitionLink from '@/components/TransitionLink';

const primarySections = [
  {
    number: '01',
    title: 'PBL概要',
    description: 'TCG-PBLの狙い、学習成果、導入効果を短時間で把握できます。',
    icon: BookOpenIcon,
    href: '/overview',
  },
  {
    number: '02',
    title: '実施ガイド',
    description: '準備チェックリスト、授業進行、評価運用までを実務ベースで整理。',
    icon: ClipboardDocumentCheckIcon,
    href: '/guide',
  },
];

const secondarySections = [
  {
    number: '03',
    title: '教授法メモ',
    description: '授業中の問いかけと介入の設計',
    icon: LightBulbIcon,
    href: '/pedagogy',
  },
  {
    number: '04',
    title: 'ルール進化',
    description: '設計変更の比較分析',
    icon: ArrowPathIcon,
    href: '/rules-evolution',
  },
  {
    number: '05',
    title: '今後の展望',
    description: '他教科・他校展開の視点',
    icon: RocketLaunchIcon,
    href: '/outlook',
  },
  {
    number: '06',
    title: 'カードリファレンス',
    description: 'カード仕様とデータ設計',
    icon: RectangleStackIcon,
    href: '/card-reference',
  },
];

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.58, ease: [0.25, 1, 0.5, 1] as const },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full blur-3xl bg-[var(--surface-hover)]" />
          <div className="grid-pattern h-full opacity-60" />
        </div>

        <div className="relative mx-auto max-w-[1200px] px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
          <motion.span {...reveal} className="section-label mb-6 inline-flex">Teacher Guide</motion.span>
          <motion.h1 {...reveal} className="max-w-4xl text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl leading-[1.08]">
            授業を回すための
            <br />
            <span className="gradient-text">実践ドキュメント基盤</span>
          </motion.h1>
          <motion.p {...reveal} className="mt-6 max-w-2xl text-base leading-relaxed text-theme-muted sm:text-lg">
            TCG-PBL 教員ガイドは、準備・実施・評価の情報を一箇所に集約した運用ハブです。
            授業設計の判断を速くし、チーム指導の再現性を高めます。
          </motion.p>

          <motion.div {...reveal} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <TransitionLink href="/overview" className="btn-primary">PBL概要から始める</TransitionLink>
            <TransitionLink href="/guide" className="btn-secondary">実施ガイドを開く</TransitionLink>
          </motion.div>

          <motion.div {...reveal} className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { value: '6', label: 'Guide Sections' },
              { value: '9', label: 'Student Lessons Covered' },
              { value: '1', label: 'Unified Teaching Flow' },
            ].map((item) => (
              <div key={item.label} className="glass-card p-5">
                <p className="text-3xl font-black text-accent-primary">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-theme-muted">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 pb-24 sm:px-6 lg:px-8">
        <motion.div {...reveal} className="mb-8 flex items-end justify-between">
          <div>
            <p className="section-label mb-3">Core Entry</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-theme tracking-tight">最初に見るべき2つのページ</h2>
          </div>
        </motion.div>

        <div className="mb-6 grid gap-6 md:grid-cols-2">
          {primarySections.map((section, i) => {
            const Icon = section.icon;
            return (
              <motion.div key={section.number} {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }}>
                <TransitionLink href={section.href}>
                  <div className="glass-card group relative h-full overflow-hidden">
                    <span
                      className="pointer-events-none absolute -right-4 -top-7 text-[7rem] font-black leading-none"
                      style={{ color: 'color-mix(in srgb, var(--accent-primary) 16%, transparent)' }}
                    >
                      {section.number}
                    </span>
                    <div className="relative space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold tracking-[0.12em] text-accent-primary">{section.number}</span>
                        <Icon className="h-5 w-5 text-theme-muted" />
                      </div>
                      <h3 className="text-2xl font-bold text-theme">{section.title}</h3>
                      <p className="text-sm leading-relaxed text-theme-muted">{section.description}</p>
                      <div className="inline-flex items-center text-sm font-semibold text-accent-primary">
                        詳しく見る
                        <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </TransitionLink>
              </motion.div>
            );
          })}
        </div>

        <motion.div {...reveal} className="mb-8">
          <p className="section-label mb-3">Supporting Sections</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-theme tracking-tight">授業改善を支える4コンテンツ</h3>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {secondarySections.map((section, i) => {
            const Icon = section.icon;
            return (
              <motion.div key={section.number} {...reveal} transition={{ ...reveal.transition, delay: i * 0.06 }}>
                <TransitionLink href={section.href}>
                  <div className="content-card group h-full">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-[0.12em] text-theme-muted">{section.number}</span>
                      <Icon className="h-4 w-4 text-theme-muted group-hover:text-accent-primary transition-colors" />
                    </div>
                    <h4 className="text-base font-semibold text-theme">{section.title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-theme-muted">{section.description}</p>
                  </div>
                </TransitionLink>
              </motion.div>
            );
          })}
        </div>

        <motion.p {...reveal} className="mt-12 text-center text-sm text-theme-muted">
          初めての導入は
          <TransitionLink href="/overview" className="mx-1 text-accent-primary hover:underline underline-offset-4">
            PBL概要
          </TransitionLink>
          から確認してください。
        </motion.p>
      </div>
    </div>
  );
}
