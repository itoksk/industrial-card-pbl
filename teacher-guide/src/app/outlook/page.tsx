'use client';

import { motion } from 'framer-motion';
import TransitionLink from '@/components/TransitionLink';

export default function OutlookPage() {
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
            <li className="text-[var(--text-primary)] font-medium">今後の展望</li>
          </ol>
        </motion.nav>

        {/* Hero */}
        <motion.header
          className="mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="section-label mb-4">Outlook</div>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-4 sm:text-4xl lg:text-5xl">
            今後の展望
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            危険物取扱者試験から始まったこのフレームワークは、他の資格試験や科目にも展開可能です。事実に基づくゲーム設計という普遍的なアプローチが、新たな学習体験を生み出します。
          </p>
        </motion.header>

        {/* Main Content */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-14 sm:space-y-16"
        >

          {/* Other Qualification Extensions */}
          <motion.section variants={fadeInUp}>
            <div className="glass-card">
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                    他資格への展開
                  </h2>
                  <p className="text-[var(--text-muted)]">
                    定量データを持つ資格試験なら、同じアプローチが適用できます
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* 第二種電気工事士 */}
                  <div className="glass-card bg-[rgba(245,158,11,0.06)] dark:bg-[rgba(245,158,11,0.08)] border-[color-mix(in_srgb,var(--warning)_24%,transparent)]">
                    <div className="mb-4">
                      <div className="inline-block bg-[var(--warning)] text-white px-4 py-2 rounded-full font-semibold text-sm mb-3">
                        電気系
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                        第二種電気工事士
                      </h3>
                      <p className="text-sm text-[var(--text-muted)]">
                        電気パラメータをカードステータスにマッピング
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-[var(--surface-glass)] rounded-lg p-4 border border-[color-mix(in_srgb,var(--warning)_24%,transparent)]">
                        <h4 className="font-semibold text-[var(--text-primary)] mb-3 text-sm">
                          パラメータとカード属性の対応
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between p-2 bg-[rgba(245,158,11,0.06)] dark:bg-[rgba(245,158,11,0.08)] rounded">
                            <span className="text-[var(--text-secondary)]">電圧 (V)</span>
                            <span className="text-[var(--text-secondary)] font-mono font-semibold">→ 攻撃力</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-[rgba(245,158,11,0.06)] dark:bg-[rgba(245,158,11,0.08)] rounded">
                            <span className="text-[var(--text-secondary)]">電流容量 (A)</span>
                            <span className="text-[var(--text-secondary)] font-mono font-semibold">→ 耐久力</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-[rgba(245,158,11,0.06)] dark:bg-[rgba(245,158,11,0.08)] rounded">
                            <span className="text-[var(--text-secondary)]">抵抗値 (Ω)</span>
                            <span className="text-[var(--text-secondary)] font-mono font-semibold">→ 防御力</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-[rgba(245,158,11,0.06)] dark:bg-[rgba(245,158,11,0.08)] rounded">
                            <span className="text-[var(--text-secondary)]">消費電力 (W)</span>
                            <span className="text-[var(--text-secondary)] font-mono font-semibold">→ コスト</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[rgba(245,158,11,0.06)] dark:bg-[rgba(245,158,11,0.08)] rounded-lg p-4">
                        <h4 className="font-semibold text-[var(--text-primary)] mb-2 text-sm">
                          学習効果
                        </h4>
                        <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--warning)]">▸</span>
                            <span>オームの法則の理解が深まる</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--warning)]">▸</span>
                            <span>配線図と実際の関係性を体感</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--warning)]">▸</span>
                            <span>器具の定格値の重要性を認識</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-r from-[var(--warning)] to-[var(--accent-tertiary)] rounded-lg p-4 text-white">
                        <p className="text-sm">
                          <strong className="block mb-1">カード例:</strong>
                          <span className="text-[rgba(255,255,255,0.85)] text-xs">
                            「100V回路」攻撃力10、「20A配線用遮断器」耐久20、「接地抵抗10Ω」防御10
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* プログラミング資格 */}
                  <div className="glass-card bg-[rgba(59,130,246,0.06)] dark:bg-[rgba(59,130,246,0.08)] border-[color-mix(in_srgb,var(--info)_24%,transparent)]">
                    <div className="mb-4">
                      <div className="inline-block bg-[var(--info)] text-white px-4 py-2 rounded-full font-semibold text-sm mb-3">
                        情報系
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                        プログラミング資格
                      </h3>
                      <p className="text-sm text-[var(--text-muted)]">
                        アルゴリズムの計算量をカードパワーに変換
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-[var(--surface-glass)] rounded-lg p-4 border border-[color-mix(in_srgb,var(--info)_24%,transparent)]">
                        <h4 className="font-semibold text-[var(--text-primary)] mb-3 text-sm">
                          計算量とカード属性の対応
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between p-2 bg-[rgba(59,130,246,0.06)] dark:bg-[rgba(59,130,246,0.08)] rounded">
                            <span className="text-[var(--text-secondary)] font-mono text-xs">O(1)</span>
                            <span className="text-[var(--text-secondary)] font-semibold">→ 速度MAX</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-[rgba(59,130,246,0.06)] dark:bg-[rgba(59,130,246,0.08)] rounded">
                            <span className="text-[var(--text-secondary)] font-mono text-xs">O(log n)</span>
                            <span className="text-[var(--text-secondary)] font-semibold">→ 速度高</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-[rgba(59,130,246,0.06)] dark:bg-[rgba(59,130,246,0.08)] rounded">
                            <span className="text-[var(--text-secondary)] font-mono text-xs">O(n)</span>
                            <span className="text-[var(--text-secondary)] font-semibold">→ 速度中</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-[rgba(59,130,246,0.06)] dark:bg-[rgba(59,130,246,0.08)] rounded">
                            <span className="text-[var(--text-secondary)] font-mono text-xs">O(n²)</span>
                            <span className="text-[var(--text-secondary)] font-semibold">→ 速度低</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[rgba(59,130,246,0.06)] dark:bg-[rgba(59,130,246,0.08)] rounded-lg p-4">
                        <h4 className="font-semibold text-[var(--text-primary)] mb-2 text-sm">
                          学習効果
                        </h4>
                        <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--info)]">▸</span>
                            <span>計算量の違いを体感的に理解</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--info)]">▸</span>
                            <span>最適なアルゴリズム選択の重要性</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--info)]">▸</span>
                            <span>データ構造とパフォーマンスの関係</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-r from-[var(--info)] to-[var(--accent-secondary)] rounded-lg p-4 text-white">
                        <p className="text-sm">
                          <strong className="block mb-1">カード例:</strong>
                          <span className="text-[rgba(255,255,255,0.85)] text-xs">
                            「バイナリサーチ」速度90、「クイックソート」速度80、「バブルソート」速度30
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 化学系資格 */}
                  <div className="glass-card bg-[rgba(168,85,247,0.06)] dark:bg-[rgba(168,85,247,0.08)] border-[color-mix(in_srgb,var(--accent-secondary)_24%,transparent)]">
                    <div className="mb-4">
                      <div className="inline-block bg-[var(--accent-secondary)] text-white px-4 py-2 rounded-full font-semibold text-sm mb-3">
                        化学系
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                        化学系資格
                      </h3>
                      <p className="text-sm text-[var(--text-muted)]">
                        元素の性質をカード属性として活用
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-[var(--surface-glass)] rounded-lg p-4 border border-[color-mix(in_srgb,var(--accent-secondary)_24%,transparent)]">
                        <h4 className="font-semibold text-[var(--text-primary)] mb-3 text-sm">
                          元素特性とカード属性の対応
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between p-2 bg-[rgba(168,85,247,0.06)] dark:bg-[rgba(168,85,247,0.08)] rounded">
                            <span className="text-[var(--text-secondary)]">原子番号</span>
                            <span className="text-[var(--text-secondary)] font-mono font-semibold">→ レベル</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-[rgba(168,85,247,0.06)] dark:bg-[rgba(168,85,247,0.08)] rounded">
                            <span className="text-[var(--text-secondary)]">反応性</span>
                            <span className="text-[var(--text-secondary)] font-mono font-semibold">→ 攻撃力</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-[rgba(168,85,247,0.06)] dark:bg-[rgba(168,85,247,0.08)] rounded">
                            <span className="text-[var(--text-secondary)]">安定性</span>
                            <span className="text-[var(--text-secondary)] font-mono font-semibold">→ 防御力</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-[rgba(168,85,247,0.06)] dark:bg-[rgba(168,85,247,0.08)] rounded">
                            <span className="text-[var(--text-secondary)]">結合エネルギー</span>
                            <span className="text-[var(--text-secondary)] font-mono font-semibold">→ HP</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[rgba(168,85,247,0.06)] dark:bg-[rgba(168,85,247,0.08)] rounded-lg p-4">
                        <h4 className="font-semibold text-[var(--text-primary)] mb-2 text-sm">
                          学習効果
                        </h4>
                        <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--accent-secondary)]">▸</span>
                            <span>周期表の理解が深まる</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--accent-secondary)]">▸</span>
                            <span>元素間の反応関係を体感</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--accent-secondary)]">▸</span>
                            <span>化学結合の強さの比較</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-tertiary)] rounded-lg p-4 text-white">
                        <p className="text-sm">
                          <strong className="block mb-1">カード例:</strong>
                          <span className="text-[rgba(255,255,255,0.85)] text-xs">
                            「ナトリウム」反応性95、「ヘリウム」安定性100、「酸素」汎用性90
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 建築系資格 */}
                  <div className="glass-card bg-[rgba(16,185,129,0.06)] dark:bg-[rgba(16,185,129,0.08)] border-[color-mix(in_srgb,var(--success)_24%,transparent)]">
                    <div className="mb-4">
                      <div className="inline-block bg-[var(--success)] text-white px-4 py-2 rounded-full font-semibold text-sm mb-3">
                        建築系
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                        建築士・施工管理技士
                      </h3>
                      <p className="text-sm text-[var(--text-muted)]">
                        建材の強度データをゲームに組み込む
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-[var(--surface-glass)] rounded-lg p-4 border border-[color-mix(in_srgb,var(--success)_24%,transparent)]">
                        <h4 className="font-semibold text-[var(--text-primary)] mb-3 text-sm">
                          建材特性とカード属性の対応
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between p-2 bg-[rgba(16,185,129,0.06)] dark:bg-[rgba(16,185,129,0.08)] rounded">
                            <span className="text-[var(--text-secondary)]">圧縮強度 (N/mm²)</span>
                            <span className="text-[var(--text-secondary)] font-mono font-semibold">→ 耐久力</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-[rgba(16,185,129,0.06)] dark:bg-[rgba(16,185,129,0.08)] rounded">
                            <span className="text-[var(--text-secondary)]">引張強度</span>
                            <span className="text-[var(--text-secondary)] font-mono font-semibold">→ 柔軟性</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-[rgba(16,185,129,0.06)] dark:bg-[rgba(16,185,129,0.08)] rounded">
                            <span className="text-[var(--text-secondary)]">熱伝導率</span>
                            <span className="text-[var(--text-secondary)] font-mono font-semibold">→ 断熱性</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-[rgba(16,185,129,0.06)] dark:bg-[rgba(16,185,129,0.08)] rounded">
                            <span className="text-[var(--text-secondary)]">施工コスト</span>
                            <span className="text-[var(--text-secondary)] font-mono font-semibold">→ カードコスト</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[rgba(16,185,129,0.06)] dark:bg-[rgba(16,185,129,0.08)] rounded-lg p-4">
                        <h4 className="font-semibold text-[var(--text-primary)] mb-2 text-sm">
                          学習効果
                        </h4>
                        <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--success)]">▸</span>
                            <span>建材の適材適所を理解</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--success)]">▸</span>
                            <span>コストとパフォーマンスの関係</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--success)]">▸</span>
                            <span>構造力学の基礎を体感</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-r from-[var(--success)] to-[#059669] rounded-lg p-4 text-white">
                        <p className="text-sm">
                          <strong className="block mb-1">カード例:</strong>
                          <span className="text-[rgba(255,255,255,0.85)] text-xs">
                            「コンクリート」耐久80、「木材」柔軟70、「鉄骨」強度95
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Universal Framework */}
          <motion.section variants={fadeInUp}>
            <div className="glass-card">
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--info)] to-[var(--accent-secondary)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                    汎用フレームワーク
                  </h2>
                  <p className="text-[var(--text-muted)]">
                    どんな科目にも適用できる普遍的な設計思想
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-[rgba(59,130,246,0.06)] dark:bg-[rgba(59,130,246,0.08)] border-l-4 border-[var(--info)] rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                    4要素モデル
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-6">
                    あらゆる教科に適用できる、カードゲーム設計の基本構造
                  </p>

                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-[var(--surface-glass)] rounded-lg p-6 text-center border-2 border-[color-mix(in_srgb,var(--accent-primary)_24%,transparent)]">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-[var(--text-primary)] mb-2">
                        名称
                      </h4>
                      <p className="text-xs text-[var(--text-muted)]">
                        学習対象の名前や概念
                      </p>
                    </div>

                    <div className="bg-[var(--surface-glass)] rounded-lg p-6 text-center border-2 border-[color-mix(in_srgb,var(--info)_24%,transparent)]">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--info)] to-[var(--accent-secondary)] flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-[var(--text-primary)] mb-2">
                        パラメータ
                      </h4>
                      <p className="text-xs text-[var(--text-muted)]">
                        定量的な数値データ
                      </p>
                    </div>

                    <div className="bg-[var(--surface-glass)] rounded-lg p-6 text-center border-2 border-[color-mix(in_srgb,var(--success)_24%,transparent)]">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--success)] to-[#059669] flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-[var(--text-primary)] mb-2">
                        事実根拠
                      </h4>
                      <p className="text-xs text-[var(--text-muted)]">
                        データの出典と信頼性
                      </p>
                    </div>

                    <div className="bg-[var(--surface-glass)] rounded-lg p-6 text-center border-2 border-[color-mix(in_srgb,var(--accent-secondary)_24%,transparent)]">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent-secondary)] to-[var(--accent-tertiary)] flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-[var(--text-primary)] mb-2">
                        ゲーム効果
                      </h4>
                      <p className="text-xs text-[var(--text-muted)]">
                        カード能力への変換
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-center">
                    <div className="bg-[var(--surface-glass)] rounded-lg p-4 border-2 border-[color-mix(in_srgb,var(--info)_30%,transparent)]">
                      <p className="text-sm font-mono text-center text-[var(--text-secondary)]">
                        <span className="text-[var(--accent-primary)] font-bold">名称</span>
                        {' + '}
                        <span className="text-[var(--info)] font-bold">パラメータ</span>
                        {' + '}
                        <span className="text-[var(--success)] font-bold">事実根拠</span>
                        {' = '}
                        <span className="text-[var(--accent-secondary)] font-bold">学習カード</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                    適用要件
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="glass-card bg-[rgba(20,184,166,0.06)] dark:bg-[rgba(20,184,166,0.08)] border-[color-mix(in_srgb,var(--accent-primary)_24%,transparent)]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-[var(--accent-primary)] text-white flex items-center justify-center font-bold">
                          1
                        </div>
                        <h4 className="font-bold text-[var(--text-primary)]">
                          測定可能性
                        </h4>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-3">
                        数値で表現できるパラメータが存在すること
                      </p>
                      <ul className="space-y-1 text-xs text-[var(--text-muted)]">
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--accent-primary)]">▸</span>
                          <span>温度、重さ、速度など物理量</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--accent-primary)]">▸</span>
                          <span>時間、コスト、効率などの指標</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--accent-primary)]">▸</span>
                          <span>評価スコア、ランクなど</span>
                        </li>
                      </ul>
                    </div>

                    <div className="glass-card bg-[rgba(59,130,246,0.06)] dark:bg-[rgba(59,130,246,0.08)] border-[color-mix(in_srgb,var(--info)_24%,transparent)]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-[var(--info)] text-white flex items-center justify-center font-bold">
                          2
                        </div>
                        <h4 className="font-bold text-[var(--text-primary)]">
                          比較可能性
                        </h4>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-3">
                        対象同士を定量的に比較できること
                      </p>
                      <ul className="space-y-1 text-xs text-[var(--text-muted)]">
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--info)]">▸</span>
                          <span>AよりBの方が大きい/強い</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--info)]">▸</span>
                          <span>相性や関係性がある</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--info)]">▸</span>
                          <span>ランキングや序列が成立</span>
                        </li>
                      </ul>
                    </div>

                    <div className="glass-card bg-[rgba(16,185,129,0.06)] dark:bg-[rgba(16,185,129,0.08)] border-[color-mix(in_srgb,var(--success)_24%,transparent)]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-[var(--success)] text-white flex items-center justify-center font-bold">
                          3
                        </div>
                        <h4 className="font-bold text-[var(--text-primary)]">
                          事実基盤性
                        </h4>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-3">
                        データに明確な出典と根拠があること
                      </p>
                      <ul className="space-y-1 text-xs text-[var(--text-muted)]">
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--success)]">▸</span>
                          <span>公式データや文献で確認可能</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--success)]">▸</span>
                          <span>実験や観測で検証できる</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--success)]">▸</span>
                          <span>業界標準や法規に基づく</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[var(--info)] to-[var(--accent-secondary)] rounded-lg p-6 text-white">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <p className="font-semibold mb-2">普遍性の秘密</p>
                      <p className="text-[rgba(255,255,255,0.85)] text-sm">
                        この3要件を満たす科目であれば、どんな分野でもカードゲーム化が可能です。重要なのは、事実に基づくという制約が学習の質を決定づけるという点です。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Industrial Human Resource Challenges */}
          <motion.section variants={fadeInUp}>
            <div className="glass-card">
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--warning)] to-[var(--accent-tertiary)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                    工業高校の課題
                  </h2>
                  <p className="text-[var(--text-muted)]">
                    PBLが解決しようとする産業人材育成の現実
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[rgba(245,158,11,0.06)] dark:bg-[rgba(245,158,11,0.08)] border-l-4 border-[var(--warning)] rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                    現状の課題
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    工業高校では、資格取得と実践的スキル育成の両立が求められていますが、従来の座学中心の教育では限界があります。
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass-card bg-[rgba(239,68,68,0.06)] dark:bg-[rgba(239,68,68,0.08)] border-[color-mix(in_srgb,var(--error)_24%,transparent)]">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-[var(--error)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      学習意欲の低下
                    </h3>
                    <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--error)] font-bold">▸</span>
                        <span>暗記中心の学習に飽きる</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--error)] font-bold">▸</span>
                        <span>実務との関連が見えない</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--error)] font-bold">▸</span>
                        <span>資格の価値を実感できない</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--error)] font-bold">▸</span>
                        <span>受動的な学習態度</span>
                      </li>
                    </ul>
                  </div>

                  <div className="glass-card bg-[rgba(59,130,246,0.06)] dark:bg-[rgba(59,130,246,0.08)] border-[color-mix(in_srgb,var(--info)_24%,transparent)]">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-[var(--info)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      合格率の伸び悩み
                    </h3>
                    <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--info)] font-bold">▸</span>
                        <span>知識の定着率が低い</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--info)] font-bold">▸</span>
                        <span>応用力が身につかない</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--info)] font-bold">▸</span>
                        <span>試験直前の詰め込み学習</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--info)] font-bold">▸</span>
                        <span>長期的な学習計画の欠如</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                    PBLによる解決アプローチ
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="glass-card bg-[rgba(16,185,129,0.06)] dark:bg-[rgba(16,185,129,0.08)] border-[color-mix(in_srgb,var(--success)_24%,transparent)]">
                      <div className="mb-4">
                        <div className="w-12 h-12 rounded-full bg-[var(--success)] text-white flex items-center justify-center mb-3">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-[var(--text-primary)] mb-2">
                          動機づけの向上
                        </h4>
                      </div>
                      <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--success)]">✓</span>
                          <span>ゲームで楽しく学べる</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--success)]">✓</span>
                          <span>主体的な学習姿勢</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--success)]">✓</span>
                          <span>仲間と協力する喜び</span>
                        </li>
                      </ul>
                    </div>

                    <div className="glass-card bg-[rgba(168,85,247,0.06)] dark:bg-[rgba(168,85,247,0.08)] border-[color-mix(in_srgb,var(--accent-secondary)_24%,transparent)]">
                      <div className="mb-4">
                        <div className="w-12 h-12 rounded-full bg-[var(--accent-secondary)] text-white flex items-center justify-center mb-3">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-[var(--text-primary)] mb-2">
                          深い理解の促進
                        </h4>
                      </div>
                      <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--accent-secondary)]">✓</span>
                          <span>データの関係性を体感</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--accent-secondary)]">✓</span>
                          <span>応用力が自然に身につく</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--accent-secondary)]">✓</span>
                          <span>記憶の定着率が高い</span>
                        </li>
                      </ul>
                    </div>

                    <div className="glass-card bg-[rgba(59,130,246,0.06)] dark:bg-[rgba(59,130,246,0.08)] border-[color-mix(in_srgb,var(--info)_24%,transparent)]">
                      <div className="mb-4">
                        <div className="w-12 h-12 rounded-full bg-[var(--info)] text-white flex items-center justify-center mb-3">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-[var(--text-primary)] mb-2">
                          実践力の育成
                        </h4>
                      </div>
                      <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--info)]">✓</span>
                          <span>問題解決能力の向上</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--info)]">✓</span>
                          <span>チームワークの経験</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--info)]">✓</span>
                          <span>創造性の発揮</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[var(--warning)] to-[var(--accent-tertiary)] rounded-lg p-6 text-white">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <div>
                      <p className="font-semibold mb-2">期待される成果</p>
                      <p className="text-[rgba(255,255,255,0.85)] text-sm">
                        カードゲームという手段を通じて、資格取得率の向上だけでなく、主体性、創造性、協働性といった、産業人材に不可欠な資質を育成します。楽しみながら学ぶことで、生涯学習の基盤を築きます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Cross-Disciplinary Possibilities */}
          <motion.section variants={fadeInUp}>
            <div className="glass-card">
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent-tertiary)] to-[#e11d48] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                    教科横断の可能性
                  </h2>
                  <p className="text-[var(--text-muted)]">
                    複数の科目を統合した、より高度な学習体験
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass-card bg-[rgba(20,184,166,0.06)] dark:bg-[rgba(20,184,166,0.08)] border-[color-mix(in_srgb,var(--accent-primary)_24%,transparent)]">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">
                      科目統合の例
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-[var(--surface-glass)] rounded-lg p-4 border border-[color-mix(in_srgb,var(--accent-primary)_24%,transparent)]">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold bg-[rgba(20,184,166,0.15)] dark:bg-[rgba(20,184,166,0.12)] text-[var(--accent-primary)] px-2 py-1 rounded">化学</span>
                          <span className="text-[var(--text-muted)]">+</span>
                          <span className="text-xs font-semibold bg-[rgba(34,211,238,0.15)] dark:bg-[rgba(34,211,238,0.12)] text-[var(--text-secondary)] px-2 py-1 rounded">法規</span>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)]">
                          危険物の化学的性質と、法律で定められた取扱い規制を組み合わせたカード設計
                        </p>
                      </div>
                      <div className="bg-[var(--surface-glass)] rounded-lg p-4 border border-[color-mix(in_srgb,var(--accent-primary)_24%,transparent)]">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold bg-[rgba(59,130,246,0.15)] dark:bg-[rgba(59,130,246,0.12)] text-[var(--text-secondary)] px-2 py-1 rounded">電気</span>
                          <span className="text-[var(--text-muted)]">+</span>
                          <span className="text-xs font-semibold bg-[rgba(16,185,129,0.15)] dark:bg-[rgba(16,185,129,0.12)] text-[var(--text-secondary)] px-2 py-1 rounded">環境</span>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)]">
                          電力消費量と環境負荷を考慮した、持続可能なエネルギー戦略ゲーム
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card bg-[rgba(236,72,153,0.06)] dark:bg-[rgba(236,72,153,0.08)] border-[color-mix(in_srgb,var(--accent-tertiary)_24%,transparent)]">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">
                      クラス間交流
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-[var(--surface-glass)] rounded-lg p-4 border border-[color-mix(in_srgb,var(--accent-tertiary)_24%,transparent)]">
                        <h4 className="font-semibold text-[var(--text-primary)] mb-2 text-sm">
                          トーナメント大会
                        </h4>
                        <p className="text-xs text-[var(--text-muted)]">
                          学年やクラスを超えた対戦で、知識の深さと戦略性を競う
                        </p>
                      </div>
                      <div className="bg-[var(--surface-glass)] rounded-lg p-4 border border-[color-mix(in_srgb,var(--accent-tertiary)_24%,transparent)]">
                        <h4 className="font-semibold text-[var(--text-primary)] mb-2 text-sm">
                          カード作成コンテスト
                        </h4>
                        <p className="text-xs text-[var(--text-muted)]">
                          最も正確で、バランスの取れたカードを作ったチームを表彰
                        </p>
                      </div>
                      <div className="bg-[var(--surface-glass)] rounded-lg p-4 border border-[color-mix(in_srgb,var(--accent-tertiary)_24%,transparent)]">
                        <h4 className="font-semibold text-[var(--text-primary)] mb-2 text-sm">
                          先輩から後輩へ
                        </h4>
                        <p className="text-xs text-[var(--text-muted)]">
                          3年生が作ったカードを1年生が使う、知識の継承システム
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card bg-[rgba(59,130,246,0.06)] dark:bg-[rgba(59,130,246,0.08)] border-[color-mix(in_srgb,var(--info)_24%,transparent)]">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">
                    学習リソースとしての活用
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-[var(--surface-glass)] rounded-lg p-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--info)] text-white flex items-center justify-center mb-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-[var(--text-primary)] mb-2 text-sm">
                        カードデータベース
                      </h4>
                      <p className="text-xs text-[var(--text-muted)]">
                        生徒が作成したカードを蓄積し、検索可能な学習リソースに
                      </p>
                    </div>
                    <div className="bg-[var(--surface-glass)] rounded-lg p-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--info)] text-white flex items-center justify-center mb-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-[var(--text-primary)] mb-2 text-sm">
                        試験対策問題集
                      </h4>
                      <p className="text-xs text-[var(--text-muted)]">
                        カードの情報から自動生成される練習問題
                      </p>
                    </div>
                    <div className="bg-[var(--surface-glass)] rounded-lg p-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--accent-primary)] text-white flex items-center justify-center mb-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-[var(--text-primary)] mb-2 text-sm">
                        他校との共有
                      </h4>
                      <p className="text-xs text-[var(--text-muted)]">
                        オープンデータとして公開し、全国の工業高校で活用
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[var(--accent-tertiary)] to-[#e11d48] rounded-lg p-6 text-white">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold mb-2">コミュニティの形成</p>
                      <p className="text-[rgba(255,255,255,0.85)] text-sm">
                        カードゲームを媒介として、生徒同士、学校間、さらには産業界との繋がりが生まれます。学習コミュニティが形成されることで、孤独な資格勉強ではなく、共に成長する仲間がいる環境が実現します。
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
                <p className="text-[var(--text-secondary)]">カードデータの構造とCSV一括発行の仕組みを確認する</p>
              </div>
              <TransitionLink href="/card-reference" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-primary)] hover:underline underline-offset-4 shrink-0">
                カードリファレンスへ
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
