'use client';

import { motion } from 'framer-motion';
import TransitionLink from '@/components/TransitionLink';

export default function PedagogyPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };


  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="page-shell">

        {/* Breadcrumb */}
        <motion.nav
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <TransitionLink href="/" className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors">
                ホーム
              </TransitionLink>
            </li>
            <li className="text-[var(--text-muted)]">/</li>
            <li className="text-[var(--text-primary)] font-medium">教授法メモ</li>
          </ol>
        </motion.nav>

        {/* Hero */}
        <motion.header
          className="mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="section-label mb-4">Pedagogy</div>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-4 sm:text-4xl lg:text-5xl">
            教授法メモ
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            カードゲームを通じた危険物取扱者試験の学習において、実践から得られた教育的知見と指導上のポイントをまとめています。
          </p>
        </motion.header>

        {/* Main Content */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-14 sm:space-y-16"
        >

          {/* Section 1: 事実基盤制約 */}
          <motion.section variants={fadeInUp}>
            <div className="glass-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                    事実基盤制約
                  </h2>
                  <p className="text-sm text-[var(--accent-primary)] font-medium">
                    Fact-Based Constraint
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-[var(--text-secondary)]">
                <div className="border-l-4 border-[var(--accent-primary)] pl-6 py-2">
                  <p className="text-lg font-medium text-[var(--text-primary)] mb-3">
                    核心的洞察
                  </p>
                  <p className="leading-relaxed">
                    ゲームルールが実際のデータから導出されるとき、生徒は調査を真剣に受け止めます。これは教育設計における最も重要な発見の一つです。
                  </p>
                </div>

                <div className="bg-[var(--background-alt)] rounded-lg p-6 border border-[var(--border)]">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                    具体例: 引火点と攻撃力の関係
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgba(16,185,129,0.12)] dark:bg-[rgba(16,185,129,0.15)] flex items-center justify-center">
                        <svg className="w-4 h-4 text-[var(--success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-[var(--text-primary)]">事実に基づくルール</p>
                        <p className="text-sm text-[var(--text-muted)] mt-1">
                          「引火点が低いほど攻撃力が高い」というルールにより、生徒は正確な引火点データを探し求めるようになります。
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgba(239,68,68,0.12)] dark:bg-[rgba(239,68,68,0.15)] flex items-center justify-center">
                        <svg className="w-4 h-4 text-[var(--error)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-[var(--text-primary)]">恣意的なルール</p>
                        <p className="text-sm text-[var(--text-muted)] mt-1">
                          「好きな数字を決めていいよ」では、表面的な関わりしか生まれず、深い学びに到達しません。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass-card border-[color-mix(in_srgb,var(--accent-primary)_24%,transparent)]" style={{background: 'color-mix(in srgb, var(--accent-primary) 6%, var(--surface-glass))'}}>
                    <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                      制約の教育的価値
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--accent-primary)] mt-1">▸</span>
                        <span>調査への真剣な動機づけ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--accent-primary)] mt-1">▸</span>
                        <span>データの正確性への意識向上</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--accent-primary)] mt-1">▸</span>
                        <span>事実と推論の区別を学ぶ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--accent-primary)] mt-1">▸</span>
                        <span>現実世界との有意義な接続</span>
                      </li>
                    </ul>
                  </div>

                  <div className="glass-card border-[color-mix(in_srgb,var(--warning)_24%,transparent)] border-[color-mix(in_srgb,var(--warning)_24%,transparent)]">
                    <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                      指導上の注意点
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--warning)] mt-1">▸</span>
                        <span>事実に基づくことを繰り返し強調</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--warning)] mt-1">▸</span>
                        <span>信頼できる情報源の提示</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--warning)] mt-1">▸</span>
                        <span>データの出典記録を習慣化</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--warning)] mt-1">▸</span>
                        <span>不確かな情報への対処法を指導</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg p-6 text-white">
                  <p className="text-lg font-medium mb-2">重要な原則</p>
                  <p className="text-[rgba(255,255,255,0.85)]">
                    事実に基づく制約こそが、深い学びを駆動するエンジンです。この制約がなければ、単なる娯楽に過ぎなくなります。
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 2: Iterative Test Play */}
          <motion.section variants={fadeInUp}>
            <div className="glass-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent-secondary)] to-[var(--accent-tertiary)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                    反復テストプレイ
                  </h2>
                  <p className="text-sm text-[var(--accent-secondary)] font-medium">
                    Iterative Test Play
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-[var(--text-secondary)]">
                <p className="text-lg leading-relaxed">
                  繰り返しプレイすることで、バランス問題が明らかになり、データ間の関係性についての深い思考が促されます。
                </p>

                <div className="bg-[var(--background-alt)] rounded-lg p-6 border border-[var(--border)]">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-6">
                    学習サイクル
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="relative">
                      <div className="glass-card border-[color-mix(in_srgb,var(--info)_24%,transparent)] text-center p-4">
                        <div className="w-10 h-10 rounded-full bg-[var(--info)] text-white flex items-center justify-center mx-auto mb-2 font-bold">
                          1
                        </div>
                        <p className="font-semibold text-[var(--text-primary)] text-sm">
                          プレイ
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center">
                      <svg className="w-6 h-6 text-[var(--text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    <div className="relative">
                      <div className="glass-card border-[color-mix(in_srgb,var(--accent-secondary)_24%,transparent)] text-center p-4">
                        <div className="w-10 h-10 rounded-full bg-[var(--accent-secondary)] text-white flex items-center justify-center mx-auto mb-2 font-bold">
                          2
                        </div>
                        <p className="font-semibold text-[var(--text-primary)] text-sm">
                          問題発見
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center">
                      <svg className="w-6 h-6 text-[var(--text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    <div className="relative">
                      <div className="glass-card border-[color-mix(in_srgb,var(--accent-tertiary)_24%,transparent)] text-center p-4">
                        <div className="w-10 h-10 rounded-full bg-[var(--accent-tertiary)] text-white flex items-center justify-center mx-auto mb-2 font-bold">
                          3
                        </div>
                        <p className="font-semibold text-[var(--text-primary)] text-sm">
                          調査
                        </p>
                      </div>
                    </div>
                    <div className="md:col-start-2 relative">
                      <div className="glass-card border-[color-mix(in_srgb,var(--warning)_24%,transparent)] text-center p-4">
                        <div className="w-10 h-10 rounded-full bg-[var(--warning)] text-white flex items-center justify-center mx-auto mb-2 font-bold">
                          4
                        </div>
                        <p className="font-semibold text-[var(--text-primary)] text-sm">
                          調整
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center md:col-start-3">
                      <svg className="w-6 h-6 text-[var(--text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    <div className="md:col-start-4 relative">
                      <div className="glass-card border-[color-mix(in_srgb,var(--success)_24%,transparent)] text-center p-4">
                        <div className="w-10 h-10 rounded-full bg-[var(--success)] text-white flex items-center justify-center mx-auto mb-2 font-bold">
                          5
                        </div>
                        <p className="font-semibold text-[var(--text-primary)] text-sm">
                          再プレイ
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)]">
                      <svg className="w-5 h-5 text-[var(--accent-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span className="font-medium">このサイクルを繰り返すことで理解が深まる</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    自然発生する学習行動
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="glass-card border-l-4 border-[var(--accent-primary)]">
                      <h4 className="font-semibold text-[var(--text-primary)] mb-2">
                        データの正確性議論
                      </h4>
                      <p className="text-sm text-[var(--text-muted)]">
                        「この数値は本当に正しい?」という疑問が生徒間で自然に起こります。
                      </p>
                    </div>
                    <div className="glass-card border-l-4 border-[var(--accent-secondary)]">
                      <h4 className="font-semibold text-[var(--text-primary)] mb-2">
                        バランス調整の提案
                      </h4>
                      <p className="text-sm text-[var(--text-muted)]">
                        「もっとこうしたら面白くなる」という建設的な意見が出ます。
                      </p>
                    </div>
                    <div className="glass-card border-l-4 border-[var(--accent-tertiary)]">
                      <h4 className="font-semibold text-[var(--text-primary)] mb-2">
                        知識の主体的探求
                      </h4>
                      <p className="text-sm text-[var(--text-muted)]">
                        教えられる前に、自ら調べて理解しようとします。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-tertiary)] rounded-lg p-6 text-white">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold mb-2">教員の役割</p>
                      <p className="text-[rgba(255,255,255,0.85)] text-sm">
                        十分な時間を確保し、生徒が自らサイクルを回せるようサポートします。答えを与えるのではなく、考えるための問いを投げかけることが重要です。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 3: Physical UX Discoveries */}
          <motion.section variants={fadeInUp}>
            <div className="glass-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--success)] to-[var(--accent-primary)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                    物理的UXの発見
                  </h2>
                  <p className="text-sm text-[var(--success)] font-medium">
                    Physical UX Discoveries
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-[var(--text-secondary)]">
                <p className="text-lg leading-relaxed">
                  実際にプレイする中で、生徒たち自身が発見したユーザビリティの改善点。教員が事前に設計するよりも、使う人の視点から生まれたアイデアの方が優れています。
                </p>

                <div className="bg-[rgba(16,185,129,0.06)] dark:bg-[rgba(16,185,129,0.08)] border-l-4 border-[var(--success)] rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                    重要な原則
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    これらのUX改善は生徒から生まれたものであり、教員から押し付けられたものではありません。実際の使用体験から得られた知見こそが、最も価値のあるデザイン指針となります。
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                    生徒が発見した3つの改善点
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="glass-card border-[color-mix(in_srgb,var(--info)_24%,transparent)]">
                      <div className="mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--info)] to-[var(--accent-secondary)] flex items-center justify-center mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="tag tag-primary mb-2">発見 1</div>
                        <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                          効果カードは場に残す
                        </h4>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-2">
                          <span className="text-[var(--info)] font-bold">課題</span>
                          <p className="text-[var(--text-muted)]">
                            使い捨てだと効果が一瞬で終わり、戦略性が生まれない
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[var(--info)] font-bold">解決</span>
                          <p className="text-[var(--text-muted)]">
                            場に残して持続効果を持たせることで、配置の戦略性が生まれた
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[var(--info)] font-bold">効果</span>
                          <p className="text-[var(--text-muted)]">
                            いつ使うか、どこに置くかという判断が重要になった
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card border-[color-mix(in_srgb,var(--accent-secondary)_24%,transparent)]">
                      <div className="mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent-secondary)] to-[var(--accent-tertiary)] flex items-center justify-center mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div className="tag tag-secondary mb-2">発見 2</div>
                        <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                          置き場所が重要
                        </h4>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-2">
                          <span className="text-[var(--accent-secondary)] font-bold">課題</span>
                          <p className="text-[var(--text-muted)]">
                            カードが混在して、どれがどの状態か分からなくなる
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[var(--accent-secondary)] font-bold">解決</span>
                          <p className="text-[var(--text-muted)]">
                            手札、場、捨て札、デッキなど、明確なエリア分けが必要
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[var(--accent-secondary)] font-bold">効果</span>
                          <p className="text-[var(--text-muted)]">
                            ゲーム状態の把握が容易になり、プレイがスムーズに
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card border-[color-mix(in_srgb,var(--warning)_24%,transparent)] border-[color-mix(in_srgb,var(--warning)_24%,transparent)]">
                      <div className="mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--warning)] to-[var(--accent-tertiary)] flex items-center justify-center mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <div className="tag tag-tertiary mb-2">発見 3</div>
                        <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                          デッキを種別で分離
                        </h4>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-2">
                          <span className="text-[var(--warning)] font-bold">課題</span>
                          <p className="text-[var(--text-muted)]">
                            全カードが混ざっていると、必要な種類が引けない
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[var(--warning)] font-bold">解決</span>
                          <p className="text-[var(--text-muted)]">
                            攻撃、防御、強化、妨害で別デッキにすることを提案
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[var(--warning)] font-bold">効果</span>
                          <p className="text-[var(--text-muted)]">
                            戦略的な手札管理が可能になり、ゲーム性が向上
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--background-alt)] rounded-lg p-6 border border-[var(--border)]">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-[var(--success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    教訓: プレイを通じて発見させる
                  </h3>
                  <div className="space-y-3">
                    <p className="text-[var(--text-secondary)]">
                      これらの改善点は、教員が事前に設計して与えたものではありません。実際にプレイする中で生徒自身が問題を感じ、解決策を考え出しました。
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgba(16,185,129,0.12)] dark:bg-[rgba(16,185,129,0.15)] flex items-center justify-center">
                          <svg className="w-4 h-4 text-[var(--success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-[var(--text-primary)]">推奨アプローチ</p>
                          <p className="text-sm text-[var(--text-muted)] mt-1">
                            最小限のルールでスタートし、生徒の発見を待つ
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgba(239,68,68,0.12)] dark:bg-[rgba(239,68,68,0.15)] flex items-center justify-center">
                          <svg className="w-4 h-4 text-[var(--error)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-[var(--text-primary)]">避けるべきアプローチ</p>
                          <p className="text-sm text-[var(--text-muted)] mt-1">
                            完璧なルールを事前に用意して指示する
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[var(--success)] to-[var(--accent-primary)] rounded-lg p-6 text-white">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div>
                      <p className="font-semibold mb-2">教育哲学</p>
                      <p className="text-[rgba(255,255,255,0.85)] text-sm">
                        過度に規定しないこと。生徒が自ら発見し、改善していく余地を残すことで、より深い学びと主体性が生まれます。教員の役割は、完璧な設計を提供することではなく、発見のための環境を整えることです。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 4: Google Forms Evaluation */}
          <motion.section variants={fadeInUp}>
            <div className="glass-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--info)] to-[var(--accent-secondary)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                    Google Forms評価
                  </h2>
                  <p className="text-sm text-[var(--info)] font-medium">
                    Google Forms Evaluation
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-[var(--text-secondary)]">
                <p className="text-lg leading-relaxed">
                  構造化された評価フォームを使用することで、生徒からの定量的・定性的フィードバックを効率的に収集し、授業改善に活用できます。
                </p>

                <div className="bg-[rgba(59,130,246,0.06)] dark:bg-[rgba(59,130,246,0.08)] border-l-4 border-[var(--info)] rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                    評価システムの目的
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[var(--info)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>生徒の学習体験を定量化し、改善点を明確にする</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[var(--info)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>継続的な授業改善のためのデータ基盤を構築する</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[var(--info)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>生徒の声を授業設計に反映させる仕組みを作る</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                    7つの評価カテゴリ
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="glass-card border-[color-mix(in_srgb,var(--accent-primary)_24%,transparent)]">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-[var(--accent-primary)] text-white flex items-center justify-center font-bold text-lg">
                          1
                        </div>
                        <h4 className="font-bold text-[var(--text-primary)]">
                          学習目標
                        </h4>
                      </div>
                      <p className="text-sm text-[var(--text-muted)]">
                        危険物の性質や取扱いについて理解が深まったか
                      </p>
                    </div>

                    <div className="glass-card border-[color-mix(in_srgb,var(--accent-secondary)_24%,transparent)]">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-[var(--accent-secondary)] text-white flex items-center justify-center font-bold text-lg">
                          2
                        </div>
                        <h4 className="font-bold text-[var(--text-primary)]">
                          カード内容
                        </h4>
                      </div>
                      <p className="text-sm text-[var(--text-muted)]">
                        カードの情報は正確で、学習に役立ったか
                      </p>
                    </div>

                    <div className="glass-card border-[color-mix(in_srgb,var(--accent-tertiary)_24%,transparent)]">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-[var(--accent-tertiary)] text-white flex items-center justify-center font-bold text-lg">
                          3
                        </div>
                        <h4 className="font-bold text-[var(--text-primary)]">
                          ゲームバランス
                        </h4>
                      </div>
                      <p className="text-sm text-[var(--text-muted)]">
                        カードの強さや戦略性のバランスは適切だったか
                      </p>
                    </div>

                    <div className="glass-card border-[color-mix(in_srgb,var(--info)_24%,transparent)]">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-[var(--info)] text-white flex items-center justify-center font-bold text-lg">
                          4
                        </div>
                        <h4 className="font-bold text-[var(--text-primary)]">
                          ルール明確性
                        </h4>
                      </div>
                      <p className="text-sm text-[var(--text-muted)]">
                        ルールは分かりやすく、迷わずプレイできたか
                      </p>
                    </div>

                    <div className="glass-card border-[color-mix(in_srgb,var(--success)_24%,transparent)]">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-[var(--success)] text-white flex items-center justify-center font-bold text-lg">
                          5
                        </div>
                        <h4 className="font-bold text-[var(--text-primary)]">
                          テストプレイ
                        </h4>
                      </div>
                      <p className="text-sm text-[var(--text-muted)]">
                        実際にプレイして楽しめたか、改善点はあったか
                      </p>
                    </div>

                    <div className="glass-card border-[color-mix(in_srgb,var(--warning)_24%,transparent)]">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-[var(--warning)] text-white flex items-center justify-center font-bold text-lg">
                          6
                        </div>
                        <h4 className="font-bold text-[var(--text-primary)]">
                          総合評価
                        </h4>
                      </div>
                      <p className="text-sm text-[var(--text-muted)]">
                        全体的な満足度と、他者への推薦度
                      </p>
                    </div>
                  </div>
                  <div className="glass-card border-[color-mix(in_srgb,var(--error)_24%,transparent)]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--error)] text-white flex items-center justify-center font-bold text-lg">
                        7
                      </div>
                      <h4 className="font-bold text-[var(--text-primary)]">
                        自由記述
                      </h4>
                    </div>
                    <p className="text-sm text-[var(--text-muted)]">
                      改善提案、感想、その他気づいたことを自由に記入
                    </p>
                  </div>
                </div>

                <div className="bg-[var(--background-alt)] rounded-lg p-6 border border-[var(--border)]">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-[var(--info)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Google Apps Scriptによる自動化
                  </h3>
                  <div className="space-y-4">
                    <p className="text-[var(--text-secondary)]">
                      GASを使用することで、フォームの作成からスプレッドシートへのデータ集約まで自動化できます。
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-[var(--text-primary)] text-sm">
                          フォーム自動生成
                        </h4>
                        <ul className="space-y-1 text-sm text-[var(--text-muted)]">
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--info)]">•</span>
                            <span>テンプレートから一括作成</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--info)]">•</span>
                            <span>質問項目の統一</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--info)]">•</span>
                            <span>回答形式の標準化</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-[var(--text-primary)] text-sm">
                          データ分析支援
                        </h4>
                        <ul className="space-y-1 text-sm text-[var(--text-muted)]">
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--info)]">•</span>
                            <span>回答の自動集計</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--info)]">•</span>
                            <span>統計データの可視化</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--info)]">•</span>
                            <span>傾向分析レポート生成</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--background-alt)] rounded-lg p-6 border border-[var(--border)]">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-[var(--success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    スプレッドシートとの連携
                  </h3>
                  <div className="space-y-3">
                    <p className="text-[var(--text-secondary)]">
                      Google Formsの回答は自動的にスプレッドシートに集約され、リアルタイムで分析可能です。
                    </p>
                    <div className="glass-card bg-[var(--surface-glass)] p-4">
                      <div className="space-y-2 text-sm font-mono">
                        <div className="text-[var(--text-muted)]">
                          <span className="text-[var(--info)]">フォーム回答</span> →
                          <span className="text-[var(--accent-secondary)]"> スプレッドシート</span> →
                          <span className="text-[var(--success)]"> 分析・可視化</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-3 mt-3">
                      <div className="text-center p-3 bg-[rgba(59,130,246,0.08)] dark:bg-[rgba(59,130,246,0.1)] rounded-lg">
                        <p className="text-2xl font-bold text-[var(--info)]">即時</p>
                        <p className="text-xs text-[var(--text-muted)] mt-1">データ反映</p>
                      </div>
                      <div className="text-center p-3 bg-[rgba(34,211,238,0.08)] dark:bg-[rgba(34,211,238,0.1)] rounded-lg">
                        <p className="text-2xl font-bold text-[var(--accent-secondary)]">自動</p>
                        <p className="text-xs text-[var(--text-muted)] mt-1">集計処理</p>
                      </div>
                      <div className="text-center p-3 bg-[rgba(16,185,129,0.08)] dark:bg-[rgba(16,185,129,0.1)] rounded-lg">
                        <p className="text-2xl font-bold text-[var(--success)]">容易</p>
                        <p className="text-xs text-[var(--text-muted)] mt-1">共有・活用</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[var(--info)] to-[var(--accent-secondary)] rounded-lg p-6 text-white">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <p className="font-semibold mb-2">データ駆動型改善</p>
                      <p className="text-[rgba(255,255,255,0.85)] text-sm">
                        構造化された評価データを継続的に収集することで、感覚ではなく事実に基づいた授業改善が可能になります。生徒の声を定量化し、エビデンスベースで教育の質を向上させていきましょう。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 5: polishGameEffectText() Approach */}
          <motion.section variants={fadeInUp}>
            <div className="glass-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--warning)] to-[var(--accent-tertiary)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                    効果テキスト整頓アプローチ
                  </h2>
                  <p className="text-sm text-[var(--warning)] font-medium">
                    polishGameEffectText() Approach
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-[var(--text-secondary)]">
                <p className="text-lg leading-relaxed">
                  カードジェネレーターには、生徒が書いた効果テキストを自動的に整える機能があります。これは単なる技術的処理ではなく、教育的な意図を持った設計です。
                </p>

                <div className="bg-[rgba(245,158,11,0.06)] dark:bg-[rgba(245,158,11,0.08)] border-l-4 border-[var(--warning)] rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                    機能の目的
                  </h3>
                  <div className="space-y-2">
                    <p className="text-[var(--text-secondary)]">
                      生徒が考えた効果を尊重しながら、ゲームとして適切な形に整形することで、創造性と規律のバランスを取ります。
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                    4つの処理プロセス
                  </h3>

                  <div className="space-y-4">
                    <div className="glass-card border-[color-mix(in_srgb,var(--error)_24%,transparent)]">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--error)] to-[var(--accent-tertiary)] flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="tag tag-tertiary mb-2">処理 1</div>
                          <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                            現実の危険表現の除去
                          </h4>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm text-[var(--text-secondary)]">
                          ゲームテキストから現実世界の危険性に関する直接的な言及を削除します。
                        </p>
                        <div className="bg-[var(--surface-glass)] rounded-lg p-4 border border-[color-mix(in_srgb,var(--error)_24%,transparent)]">
                          <div className="space-y-3">
                            <div>
                              <p className="text-xs font-semibold text-[var(--error)] mb-1">変更前</p>
                              <p className="text-sm font-mono bg-[rgba(239,68,68,0.08)] dark:bg-[rgba(239,68,68,0.1)] p-2 rounded">
                                「引火の危険性があるため、相手のHPを10削る」
                              </p>
                            </div>
                            <div className="flex justify-center">
                              <svg className="w-5 h-5 text-[var(--text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-[var(--success)] mb-1">変更後</p>
                              <p className="text-sm font-mono bg-[rgba(16,185,129,0.08)] dark:bg-[rgba(16,185,129,0.1)] p-2 rounded">
                                「相手のHPを10削る」
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[rgba(239,68,68,0.08)] dark:bg-[rgba(239,68,68,0.1)] rounded p-3">
                          <p className="text-xs text-[var(--text-secondary)]">
                            <strong>教育的意図:</strong> 危険物の知識は持ちつつ、ゲーム内では抽象化された表現を使うことで、現実とゲームの区別を明確にします。
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card border-[color-mix(in_srgb,var(--info)_24%,transparent)]">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--info)] to-[var(--accent-secondary)] flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="tag tag-primary mb-2">処理 2</div>
                          <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                            句読点の統一
                          </h4>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm text-[var(--text-secondary)]">
                          カード全体で句読点の使い方を統一し、読みやすさを向上させます。
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="bg-[var(--surface-glass)] rounded-lg p-3 border border-[color-mix(in_srgb,var(--info)_24%,transparent)]">
                            <p className="text-xs font-semibold text-[var(--text-muted)] mb-2">不統一な例</p>
                            <ul className="space-y-1 text-xs font-mono">
                              <li className="text-[var(--error)]">• HPを5減らす</li>
                              <li className="text-[var(--error)]">• HPを5減らす。</li>
                              <li className="text-[var(--error)]">• HPを5減らす!</li>
                            </ul>
                          </div>
                          <div className="bg-[var(--surface-glass)] rounded-lg p-3 border border-[color-mix(in_srgb,var(--success)_24%,transparent)]">
                            <p className="text-xs font-semibold text-[var(--text-muted)] mb-2">統一後</p>
                            <ul className="space-y-1 text-xs font-mono">
                              <li className="text-[var(--success)]">• HPを5減らす</li>
                              <li className="text-[var(--success)]">• HPを5減らす</li>
                              <li className="text-[var(--success)]">• HPを5減らす</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-[rgba(59,130,246,0.08)] dark:bg-[rgba(59,130,246,0.1)] rounded p-3">
                          <p className="text-xs text-[var(--text-secondary)]">
                            <strong>教育的意図:</strong> 一貫性のある表現を身につけることで、技術文書作成の基礎を学びます。
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card border-[color-mix(in_srgb,var(--accent-secondary)_24%,transparent)]">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent-secondary)] to-[var(--accent-tertiary)] flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="tag tag-secondary mb-2">処理 3</div>
                          <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                            文字数制限の調整
                          </h4>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm text-[var(--text-secondary)]">
                          長すぎるテキストを適切な長さに調整し、カードデザインに収まるようにします。
                        </p>
                        <div className="bg-[var(--surface-glass)] rounded-lg p-4 border border-[color-mix(in_srgb,var(--accent-secondary)_24%,transparent)]">
                          <div className="space-y-3">
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <p className="text-xs font-semibold text-[var(--error)]">長すぎる例 (72文字)</p>
                                <span className="text-xs text-[var(--error)] font-mono">72/50</span>
                              </div>
                              <p className="text-xs font-mono bg-[rgba(239,68,68,0.08)] dark:bg-[rgba(239,68,68,0.1)] p-2 rounded leading-relaxed">
                                このカードを使用すると、相手のフィールド上にある全てのカードの攻撃力を半分に減少させることができます
                              </p>
                            </div>
                            <div className="flex justify-center">
                              <svg className="w-5 h-5 text-[var(--text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                              </svg>
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <p className="text-xs font-semibold text-[var(--success)]">調整後 (28文字)</p>
                                <span className="text-xs text-[var(--success)] font-mono">28/50</span>
                              </div>
                              <p className="text-xs font-mono bg-[rgba(16,185,129,0.08)] dark:bg-[rgba(16,185,129,0.1)] p-2 rounded">
                                相手の全カードの攻撃力を半減
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[rgba(34,211,238,0.08)] dark:bg-[rgba(34,211,238,0.1)] rounded p-3">
                          <p className="text-xs text-[var(--text-secondary)]">
                            <strong>教育的意図:</strong> 簡潔で明確な表現力を養います。本質を損なわず、無駄を削ぎ落とす訓練になります。
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card border-[color-mix(in_srgb,var(--success)_24%,transparent)]">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--success)] to-[var(--accent-primary)] flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="tag tag-quaternary mb-2">処理 4</div>
                          <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                            フォーマットの標準化
                          </h4>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm text-[var(--text-secondary)]">
                          カード効果の記述形式を統一し、プレイヤーが理解しやすくします。
                        </p>
                        <div className="space-y-2">
                          <div className="bg-[var(--surface-glass)] rounded-lg p-3 border border-[color-mix(in_srgb,var(--success)_24%,transparent)]">
                            <p className="text-xs font-semibold text-[var(--text-muted)] mb-2">標準フォーマット</p>
                            <div className="space-y-1 text-xs">
                              <p className="font-mono bg-[rgba(16,185,129,0.08)] dark:bg-[rgba(16,185,129,0.1)] p-2 rounded">
                                [対象] を [数値] [単位] [動詞]
                              </p>
                              <div className="grid grid-cols-2 gap-2 mt-2">
                                <p className="text-[var(--text-muted)]">• 相手のHPを10減らす</p>
                                <p className="text-[var(--text-muted)]">• 自分の攻撃力を5増やす</p>
                                <p className="text-[var(--text-muted)]">• 相手の防御力を半減する</p>
                                <p className="text-[var(--text-muted)]">• 全カードを無効化する</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[rgba(16,185,129,0.08)] dark:bg-[rgba(16,185,129,0.1)] rounded p-3">
                          <p className="text-xs text-[var(--text-secondary)]">
                            <strong>教育的意図:</strong> 技術仕様書のような構造化された文章を書く練習になります。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--background-alt)] rounded-lg p-6 border border-[var(--border)]">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-[var(--warning)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    教育的価値
                  </h3>
                  <div className="space-y-4">
                    <p className="text-[var(--text-secondary)]">
                      この自動整形機能は、単なる技術的処理以上の意味を持ちます。
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-[var(--text-primary)] text-sm flex items-center gap-2">
                          <svg className="w-4 h-4 text-[var(--accent-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          ライティングスキル向上
                        </h4>
                        <p className="text-xs text-[var(--text-muted)] pl-6">
                          簡潔で明確な文章を書く重要性を、実践を通じて学びます。
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-[var(--text-primary)] text-sm flex items-center gap-2">
                          <svg className="w-4 h-4 text-[var(--accent-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          安全意識の育成
                        </h4>
                        <p className="text-xs text-[var(--text-muted)] pl-6">
                          現実の危険性とゲームの区別を明確にする習慣が身につきます。
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-[var(--text-primary)] text-sm flex items-center gap-2">
                          <svg className="w-4 h-4 text-[var(--accent-tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          一貫性の重要性理解
                        </h4>
                        <p className="text-xs text-[var(--text-muted)] pl-6">
                          表現の統一がユーザビリティに与える影響を体感します。
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-[var(--text-primary)] text-sm flex items-center gap-2">
                          <svg className="w-4 h-4 text-[var(--success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          制約内での創造性
                        </h4>
                        <p className="text-xs text-[var(--text-muted)] pl-6">
                          ルールの中で最大限の工夫をする力が養われます。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[var(--warning)] to-[var(--accent-tertiary)] rounded-lg p-6 text-white">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div>
                      <p className="font-semibold mb-2">技術と教育の融合</p>
                      <p className="text-[rgba(255,255,255,0.85)] text-sm">
                        テキスト整形という技術的プロセスの中に、ライティングスキル、安全意識、一貫性といった重要な教育要素を組み込むことで、自然な学びを実現しています。生徒は「正しい書き方」を教えられるのではなく、システムを通じて体験的に学んでいきます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Next Step */}
          <motion.div variants={fadeInUp} className="mt-16 border-t border-[var(--border)] pt-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--text-muted)] mb-1">次のステップ</p>
                <p className="text-[var(--text-secondary)]">ルールがどのように進化したか、生徒の改訂プロセスを見る</p>
              </div>
              <TransitionLink href="/rules-evolution" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-primary)] hover:underline underline-offset-4 shrink-0">
                ルール進化の記録へ
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </TransitionLink>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
