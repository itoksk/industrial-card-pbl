'use client';

import { motion } from 'framer-motion';
import TransitionLink from '@/components/TransitionLink';
import {
  ArrowRightIcon,
  BeakerIcon,
  BookOpenIcon,
  SparklesIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const conceptCards = [
  {
    icon: BookOpenIcon,
    title: '名称',
    description: '実在する対象をカード化し、学習内容と結びつける。',
  },
  {
    icon: BeakerIcon,
    title: 'パラメータ',
    description: '事実データに基づいた数値・属性で比較可能にする。',
  },
  {
    icon: ShieldCheckIcon,
    title: '事実根拠',
    description: '信頼できる情報源を前提に、誤情報の混入を防ぐ。',
  },
  {
    icon: SparklesIcon,
    title: 'ゲーム効果',
    description: '学習した特性を、戦略性のある効果へ翻訳する。',
  },
];

const phases = [
  { number: 1, title: '基礎理解', lessons: '第1-2回', color: 'orange' },
  { number: 2, title: '設計', lessons: '第3-5回', color: 'yellow' },
  { number: 3, title: '制作', lessons: '第6-8回', color: 'blue' },
  { number: 4, title: '実践・評価', lessons: '第9回', color: 'green' },
];

const lessons = [
  { number: 1, phase: 1, phaseColor: 'orange', title: 'TCG-PBLとは？', description: '事実基盤制約の原則とPBL型アプローチの導入' },
  { number: 2, phase: 1, phaseColor: 'orange', title: '対象分野の分類', description: 'カテゴリ整理とドメインの体系化' },
  { number: 3, phase: 2, phaseColor: 'yellow', title: 'パラメータ調査', description: 'データ収集と比較軸の設計' },
  { number: 4, phase: 2, phaseColor: 'yellow', title: '規制と法令', description: 'ルール設計につながる法規制の理解' },
  { number: 5, phase: 2, phaseColor: 'yellow', title: '防御/補助カード設計', description: '効果設計とバランス調整' },
  { number: 6, phase: 3, phaseColor: 'blue', title: 'カードレイアウト設計', description: '情報階層と視認性を意識したUI設計' },
  { number: 7, phase: 3, phaseColor: 'blue', title: 'AIカード生成', description: 'プロンプト設計と画像生成実践' },
  { number: 8, phase: 3, phaseColor: 'blue', title: '一括作成と改善', description: 'CSV運用と改善サイクルの実装' },
  { number: 9, phase: 4, phaseColor: 'green', title: 'テストプレイと評価', description: 'プレイテストと振り返りによる改善' },
];

const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.58, ease: [0.25, 1, 0.5, 1] as const },
};

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      <section className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pt-40">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute left-1/2 top-[-8rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full blur-3xl"
            style={{ background: 'var(--hero-orb)' }}
          />
          <div className="absolute inset-0 grid-pattern opacity-70" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
            <span className="section-label">Project-Based Learning</span>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              作って学ぶ。
              <br />
              <span className="gradient-text">戦って理解する。</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg text-[var(--text-secondary)]">
              TCG-PBLは、カードゲーム制作を通して調査力・設計力・表現力を統合的に伸ばす授業フレームです。
              生徒はプレイヤーではなく、学びを設計するクリエイターになります。
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <TransitionLink href="/lessons/1" className="btn-primary-orange">
                第1回を始める
              </TransitionLink>
              <TransitionLink href="/rules" className="btn-secondary-outline">
                ゲームルールを見る
              </TransitionLink>
            </div>
          </motion.div>

          <motion.div
            {...reveal}
            className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { value: '9', label: 'Lessons' },
              { value: '4', label: 'Phases' },
              { value: '1', label: 'Shared Rule System' },
              { value: '∞', label: 'Design Iterations' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-5">
                <p className="text-3xl font-black text-[var(--accent)]">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <motion.div {...reveal} className="mb-10">
            <span className="section-label">Framework</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">事実基盤制約の4要素</h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {conceptCards.map((card, index) => (
              <motion.div key={card.title} {...reveal} transition={{ ...reveal.transition, delay: index * 0.06 }} className="glass-card">
                <card.icon className="mb-4 h-8 w-8 text-[var(--accent)]" />
                <h3 className="text-lg font-bold text-[var(--foreground)]">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section-alt py-20">
        <div className="container-custom">
          <motion.div {...reveal} className="mb-10 text-center">
            <span className="section-label">Course Blueprint</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">4フェーズで進む授業設計</h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {phases.map((phase, index) => (
              <motion.div key={phase.number} {...reveal} transition={{ ...reveal.transition, delay: index * 0.05 }} className="glass-card p-6">
                <p
                  className="text-5xl font-black leading-none"
                  style={{ color: 'color-mix(in srgb, var(--accent) 26%, var(--foreground))' }}
                >
                  {phase.number}
                </p>
                <p className="mt-4 text-xl font-bold">{phase.title}</p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">{phase.lessons}</p>
                <div className="mt-4">
                  <span className={`tag tag-${phase.color}`}>Phase {phase.number}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <motion.div {...reveal} className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-label">Lessons</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">全9回の学習ロードマップ</h2>
            </div>
            <p className="max-w-md text-sm text-[var(--text-secondary)]">各回は独立しつつ連動する設計です。調査結果が次回のカード設計へ直接つながります。</p>
          </motion.div>

          <div className="space-y-3">
            {lessons.map((lesson, index) => (
              <motion.div key={lesson.number} {...reveal} transition={{ ...reveal.transition, delay: index * 0.03 }}>
                <TransitionLink href={`/lessons/${lesson.number}`} className="group block">
                  <div className="glass-card flex items-center gap-4 px-4 py-3 sm:px-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)] text-sm font-black text-[var(--accent-fg)]">
                      {lesson.number}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-0.5 flex items-center gap-2">
                        <h3 className="truncate text-sm font-bold sm:text-base">{lesson.title}</h3>
                        <span className={`tag tag-${lesson.phaseColor} text-[10px]`}>Phase {lesson.phase}</span>
                      </div>
                      <p className="truncate text-xs sm:text-sm text-[var(--text-secondary)]">{lesson.description}</p>
                    </div>
                    <ArrowRightIcon className="h-4 w-4 shrink-0 text-[var(--accent)] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                  </div>
                </TransitionLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section-alt py-20">
        <div className="container-custom">
          <motion.div {...reveal} className="glass-card p-8 text-center sm:p-10">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">Ready To Launch</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              最初の1枚を作るところから始めよう
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              まずは Lesson 1 で設計思想を理解し、Lesson 2 以降で調査と制作を積み上げていきます。
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TransitionLink href="/lessons/1" className="btn-primary-orange">
                第1回へ進む
              </TransitionLink>
              <TransitionLink href="/resources" className="btn-secondary-outline">
                リソースを見る
              </TransitionLink>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
