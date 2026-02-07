'use client';

import { motion } from 'framer-motion';
import TransitionLink from '@/components/TransitionLink';

export default function CardReferencePage() {
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
            <li className="text-[var(--text-primary)] font-medium">カードデータリファレンス</li>
          </ol>
        </motion.nav>

        {/* Hero */}
        <motion.header
          className="mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="section-label mb-4">Reference</div>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-4 sm:text-4xl lg:text-5xl">
            カードデータリファレンス
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            4種類のカードタイプ、データフォーマット、CSV一括発行の方法、そしてゲームバランスの考え方まで、カード作成に必要な全ての情報をまとめています。
          </p>
        </motion.header>

        {/* Main Content */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-14 sm:space-y-16"
        >

          {/* 4 Card Types Overview */}
          <motion.section variants={fadeInUp}>
            <div className="glass-card">
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                    4種類のカードタイプ
                  </h2>
                  <p className="text-[var(--text-muted)]">
                    それぞれ異なる役割と戦略的価値を持つカード
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Attack Cards */}
                <div className="glass-card bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 border-red-200 dark:border-red-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="tag tag-tertiary mb-1">危険物</div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)]">
                        攻撃カード
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-[var(--text-secondary)]">
                      危険物そのものを表現したカード。引火点や発火点などの物理的特性が攻撃力として機能します。
                    </p>
                    <div className="bg-[var(--surface-glass)] rounded-lg p-4 border border-red-200 dark:border-red-800">
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                        主要パラメータ
                      </h4>
                      <ul className="space-y-1 text-xs text-[var(--text-muted)]">
                        <li className="flex items-center justify-between">
                          <span>引火点</span>
                          <span className="font-mono text-red-600 dark:text-red-400">→ 攻撃力</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>発火点</span>
                          <span className="font-mono text-red-600 dark:text-red-400">→ 特殊効果</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>蒸気圧</span>
                          <span className="font-mono text-red-600 dark:text-red-400">→ 範囲</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-red-100 dark:bg-red-950/30 rounded-lg p-3">
                      <p className="text-xs text-red-900 dark:text-red-200">
                        <strong>戦略的役割:</strong> ゲームの主軸となるカード。相手のHPを削る主要手段。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Defense Cards */}
                <div className="glass-card bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="tag tag-primary mb-1">消火</div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)]">
                        防御カード
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-[var(--text-secondary)]">
                      消火方法や防御手段を表現。攻撃を無効化したり、HPを回復する効果を持ちます。
                    </p>
                    <div className="bg-[var(--surface-glass)] rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                        主要パラメータ
                      </h4>
                      <ul className="space-y-1 text-xs text-[var(--text-muted)]">
                        <li className="flex items-center justify-between">
                          <span>消火能力</span>
                          <span className="font-mono text-blue-600 dark:text-blue-400">→ 防御力</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>適応性</span>
                          <span className="font-mono text-blue-600 dark:text-blue-400">→ 汎用性</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>回復量</span>
                          <span className="font-mono text-blue-600 dark:text-blue-400">→ HP回復</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-950/30 rounded-lg p-3">
                      <p className="text-xs text-blue-900 dark:text-blue-200">
                        <strong>戦略的役割:</strong> 防御とHP回復の両方を担う。長期戦での重要性が高い。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enhancement Cards */}
                <div className="glass-card bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <div className="tag tag-quaternary mb-1">運搬</div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)]">
                        強化カード
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-[var(--text-secondary)]">
                      運搬方法や貯蔵容器を表現。他のカードの能力を強化するサポート型カードです。
                    </p>
                    <div className="bg-[var(--surface-glass)] rounded-lg p-4 border border-green-200 dark:border-green-800">
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                        主要パラメータ
                      </h4>
                      <ul className="space-y-1 text-xs text-[var(--text-muted)]">
                        <li className="flex items-center justify-between">
                          <span>容量</span>
                          <span className="font-mono text-green-600 dark:text-green-400">→ 強化倍率</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>安全性</span>
                          <span className="font-mono text-green-600 dark:text-green-400">→ 持続ターン</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>効率</span>
                          <span className="font-mono text-green-600 dark:text-green-400">→ コスト</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-100 dark:bg-green-950/30 rounded-lg p-3">
                      <p className="text-xs text-green-900 dark:text-green-200">
                        <strong>戦略的役割:</strong> コンボの起点となる。タイミングが勝敗を分ける。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Disruption Cards */}
                <div className="glass-card bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                      </svg>
                    </div>
                    <div>
                      <div className="tag tag-secondary mb-1">規制</div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)]">
                        妨害カード
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-[var(--text-secondary)]">
                      法規制や禁止事項を表現。相手の行動を制限し、戦略を崩すトリッキーなカードです。
                    </p>
                    <div className="bg-[var(--surface-glass)] rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                        主要パラメータ
                      </h4>
                      <ul className="space-y-1 text-xs text-[var(--text-muted)]">
                        <li className="flex items-center justify-between">
                          <span>規制強度</span>
                          <span className="font-mono text-purple-600 dark:text-purple-400">→ 妨害力</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>適用範囲</span>
                          <span className="font-mono text-purple-600 dark:text-purple-400">→ 対象数</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>罰則</span>
                          <span className="font-mono text-purple-600 dark:text-purple-400">→ ペナルティ</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-purple-100 dark:bg-purple-950/30 rounded-lg p-3">
                      <p className="text-xs text-purple-900 dark:text-purple-200">
                        <strong>戦略的役割:</strong> 逆転の鍵。使いどころを見極める判断力が試される。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Card Example */}
          <motion.section variants={fadeInUp}>
            <div className="glass-card">
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                    カード構成要素
                  </h2>
                  <p className="text-[var(--text-muted)]">
                    実際のカードに含まれる全ての要素とレイアウト
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Visual Card Mockup */}
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                    カードレイアウト
                  </h3>
                  <div className="relative">
                    <div className="glass-card bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 border-2 border-red-300 dark:border-red-700 p-6 aspect-[2/3] flex flex-col">
                      {/* Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          第1石油類
                        </div>
                        <div className="absolute -right-2 -top-2 w-6 h-6 bg-yellow-400 rounded-full border-2 border-white  flex items-center justify-center">
                          <span className="text-xs font-bold text-red-900">1</span>
                        </div>
                      </div>

                      {/* Title */}
                      <div className="mb-4">
                        <h4 className="text-2xl font-bold text-[var(--text-primary)]">
                          ガソリン
                        </h4>
                        <p className="text-xs text-[var(--text-muted)] mt-1">
                          Gasoline
                        </p>
                      </div>

                      {/* Illustration Area */}
                      <div className="flex-1 bg-[var(--surface-glass)] rounded-lg flex items-center justify-center mb-4 border-2 border-dashed border-red-300 dark:border-red-700">
                        <div className="text-center text-[var(--text-muted)]">
                          <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <p className="text-xs">イラストエリア</p>
                        </div>
                      </div>

                      {/* Info Rows */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between bg-[var(--surface-glass)] rounded px-3 py-2">
                          <span className="text-xs font-semibold text-[var(--text-muted)]">引火点</span>
                          <span className="text-sm font-bold text-red-600 dark:text-red-400">-40°C</span>
                        </div>
                        <div className="flex items-center justify-between bg-[var(--surface-glass)] rounded px-3 py-2">
                          <span className="text-xs font-semibold text-[var(--text-muted)]">発火点</span>
                          <span className="text-sm font-bold text-orange-600 dark:text-orange-400">300°C</span>
                        </div>
                        <div className="flex items-center justify-between bg-[var(--surface-glass)] rounded px-3 py-2">
                          <span className="text-xs font-semibold text-[var(--text-muted)]">攻撃力</span>
                          <span className="text-sm font-bold text-[var(--text-primary)]">95</span>
                        </div>
                      </div>

                      {/* Effect Text */}
                      <div className="bg-[var(--background-alt)]  rounded-lg p-3">
                        <p className="text-xs text-[var(--text-secondary)] text-center">
                          相手のHPを10削り、さらに次のターン開始時に5ダメージ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Element Labels */}
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                    各要素の説明
                  </h3>
                  <div className="space-y-4">
                    <div className="glass-card border-l-4 border-red-500">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-sm">
                          1
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                            バッジ (右上)
                          </h4>
                          <p className="text-xs text-[var(--text-muted)]">
                            カードの分類を示すラベル。類番号を含む場合もある。
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card border-l-4 border-blue-500">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                          2
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                            タイトル
                          </h4>
                          <p className="text-xs text-[var(--text-muted)]">
                            カード名と英語表記。視認性を重視した大きなフォント。
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card border-l-4 border-green-500">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">
                          3
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                            イラストエリア
                          </h4>
                          <p className="text-xs text-[var(--text-muted)]">
                            AI生成された視覚的イメージ。カードの識別性を高める。
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card border-l-4 border-purple-500">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">
                          4
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                            情報欄
                          </h4>
                          <p className="text-xs text-[var(--text-muted)]">
                            定量データの一覧。引火点、発火点、攻撃力など。
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card border-l-4 border-amber-500">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm">
                          5
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                            効果テキスト
                          </h4>
                          <p className="text-xs text-[var(--text-muted)]">
                            ゲーム内での効果説明。簡潔で明確な記述。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg p-4">
                    <p className="text-sm text-[var(--text-secondary)]">
                      <strong className="text-blue-900 dark:text-blue-200">デザイン原則:</strong> 全てのカードは統一されたレイアウトに従います。情報の配置が固定されることで、プレイ中の認識速度が向上します。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* CSV Template Format */}
          <motion.section variants={fadeInUp}>
            <div className="glass-card">
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                    CSVテンプレート形式
                  </h2>
                  <p className="text-[var(--text-muted)]">
                    一括発行のためのデータフォーマット定義
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-l-4 border-green-500 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                    CSV形式について
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">
                    Comma-Separated Values形式は、表計算ソフトで簡単に編集でき、大量のカードを効率的に作成できます。
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-[var(--surface-glass)] rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h4 className="font-semibold text-[var(--text-primary)] text-sm">
                          Excel / Sheets
                        </h4>
                      </div>
                      <p className="text-xs text-[var(--text-muted)]">
                        表計算ソフトで編集可能
                      </p>
                    </div>
                    <div className="bg-[var(--surface-glass)] rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <h4 className="font-semibold text-[var(--text-primary)] text-sm">
                          一括処理
                        </h4>
                      </div>
                      <p className="text-xs text-[var(--text-muted)]">
                        複数カードを同時生成
                      </p>
                    </div>
                    <div className="bg-[var(--surface-glass)] rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                        </svg>
                        <h4 className="font-semibold text-[var(--text-primary)] text-sm">
                          エクスポート
                        </h4>
                      </div>
                      <p className="text-xs text-[var(--text-muted)]">
                        他のツールとデータ共有
                      </p>
                    </div>
                  </div>
                </div>

                {/* Attack Card CSV Template */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                    4タイプ別テンプレート
                  </h3>

                  <div className="glass-card bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 border-red-200 dark:border-red-800">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-[var(--text-primary)]">
                        攻撃カード (危険物)
                      </h4>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs border-collapse">
                        <thead>
                          <tr className="border-b-2 border-red-300 dark:border-red-700">
                            <th className="text-left p-2 font-semibold bg-red-100 dark:bg-red-950/30">カラム名</th>
                            <th className="text-left p-2 font-semibold bg-red-100 dark:bg-red-950/30">型</th>
                            <th className="text-left p-2 font-semibold bg-red-100 dark:bg-red-950/30">説明</th>
                            <th className="text-left p-2 font-semibold bg-red-100 dark:bg-red-950/30">例</th>
                          </tr>
                        </thead>
                        <tbody className="text-[var(--text-secondary)]">
                          <tr className="border-b border-red-200 dark:border-red-800">
                            <td className="p-2 font-mono">名称</td>
                            <td className="p-2">テキスト</td>
                            <td className="p-2">危険物の名前</td>
                            <td className="p-2 font-mono text-red-600 dark:text-red-400">ガソリン</td>
                          </tr>
                          <tr className="border-b border-red-200 dark:border-red-800">
                            <td className="p-2 font-mono">分類</td>
                            <td className="p-2">テキスト</td>
                            <td className="p-2">第何類、第何石油類など</td>
                            <td className="p-2 font-mono text-red-600 dark:text-red-400">第1石油類</td>
                          </tr>
                          <tr className="border-b border-red-200 dark:border-red-800">
                            <td className="p-2 font-mono">引火点</td>
                            <td className="p-2">数値</td>
                            <td className="p-2">引火点 (℃)</td>
                            <td className="p-2 font-mono text-red-600 dark:text-red-400">-40</td>
                          </tr>
                          <tr className="border-b border-red-200 dark:border-red-800">
                            <td className="p-2 font-mono">発火点</td>
                            <td className="p-2">数値</td>
                            <td className="p-2">発火点 (℃)</td>
                            <td className="p-2 font-mono text-red-600 dark:text-red-400">300</td>
                          </tr>
                          <tr className="border-b border-red-200 dark:border-red-800">
                            <td className="p-2 font-mono">比重</td>
                            <td className="p-2">数値</td>
                            <td className="p-2">水を1とした比重</td>
                            <td className="p-2 font-mono text-red-600 dark:text-red-400">0.7</td>
                          </tr>
                          <tr className="border-b border-red-200 dark:border-red-800">
                            <td className="p-2 font-mono">水溶性</td>
                            <td className="p-2">真偽値</td>
                            <td className="p-2">水に溶けるか</td>
                            <td className="p-2 font-mono text-red-600 dark:text-red-400">FALSE</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-mono">効果</td>
                            <td className="p-2">テキスト</td>
                            <td className="p-2">ゲーム内効果</td>
                            <td className="p-2 font-mono text-red-600 dark:text-red-400">相手HPを10削る</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="glass-card bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-[var(--text-primary)]">
                        防御カード (消火)
                      </h4>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs border-collapse">
                        <thead>
                          <tr className="border-b-2 border-blue-300 dark:border-blue-700">
                            <th className="text-left p-2 font-semibold bg-blue-100 dark:bg-blue-950/30">カラム名</th>
                            <th className="text-left p-2 font-semibold bg-blue-100 dark:bg-blue-950/30">型</th>
                            <th className="text-left p-2 font-semibold bg-blue-100 dark:bg-blue-950/30">説明</th>
                            <th className="text-left p-2 font-semibold bg-blue-100 dark:bg-blue-950/30">例</th>
                          </tr>
                        </thead>
                        <tbody className="text-[var(--text-secondary)]">
                          <tr className="border-b border-blue-200 dark:border-blue-800">
                            <td className="p-2 font-mono">名称</td>
                            <td className="p-2">テキスト</td>
                            <td className="p-2">消火方法・設備の名前</td>
                            <td className="p-2 font-mono text-blue-600 dark:text-blue-400">泡消火器</td>
                          </tr>
                          <tr className="border-b border-blue-200 dark:border-blue-800">
                            <td className="p-2 font-mono">種別</td>
                            <td className="p-2">テキスト</td>
                            <td className="p-2">消火設備の種類</td>
                            <td className="p-2 font-mono text-blue-600 dark:text-blue-400">消火器</td>
                          </tr>
                          <tr className="border-b border-blue-200 dark:border-blue-800">
                            <td className="p-2 font-mono">消火能力</td>
                            <td className="p-2">数値</td>
                            <td className="p-2">防御力を決定する数値</td>
                            <td className="p-2 font-mono text-blue-600 dark:text-blue-400">75</td>
                          </tr>
                          <tr className="border-b border-blue-200 dark:border-blue-800">
                            <td className="p-2 font-mono">適用類</td>
                            <td className="p-2">テキスト</td>
                            <td className="p-2">対応する危険物の類</td>
                            <td className="p-2 font-mono text-blue-600 dark:text-blue-400">第4類全般</td>
                          </tr>
                          <tr className="border-b border-blue-200 dark:border-blue-800">
                            <td className="p-2 font-mono">回復量</td>
                            <td className="p-2">数値</td>
                            <td className="p-2">HP回復量</td>
                            <td className="p-2 font-mono text-blue-600 dark:text-blue-400">5</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-mono">効果</td>
                            <td className="p-2">テキスト</td>
                            <td className="p-2">ゲーム内効果</td>
                            <td className="p-2 font-mono text-blue-600 dark:text-blue-400">攻撃を無効化</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="glass-card bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-[var(--text-primary)]">
                          強化カード (運搬)
                        </h4>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="bg-[var(--surface-glass)] rounded p-2 flex justify-between">
                          <span className="font-mono text-[var(--text-secondary)]">名称</span>
                          <span className="text-green-600 dark:text-green-400">携行缶</span>
                        </div>
                        <div className="bg-[var(--surface-glass)] rounded p-2 flex justify-between">
                          <span className="font-mono text-[var(--text-secondary)]">容量</span>
                          <span className="text-green-600 dark:text-green-400">20L</span>
                        </div>
                        <div className="bg-[var(--surface-glass)] rounded p-2 flex justify-between">
                          <span className="font-mono text-[var(--text-secondary)]">強化倍率</span>
                          <span className="text-green-600 dark:text-green-400">1.5</span>
                        </div>
                        <div className="bg-[var(--surface-glass)] rounded p-2 flex justify-between">
                          <span className="font-mono text-[var(--text-secondary)]">効果</span>
                          <span className="text-green-600 dark:text-green-400">攻撃力1.5倍</span>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200 dark:border-purple-800">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-[var(--text-primary)]">
                          妨害カード (規制)
                        </h4>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="bg-[var(--surface-glass)] rounded p-2 flex justify-between">
                          <span className="font-mono text-[var(--text-secondary)]">名称</span>
                          <span className="text-purple-600 dark:text-purple-400">禁水性物質規制</span>
                        </div>
                        <div className="bg-[var(--surface-glass)] rounded p-2 flex justify-between">
                          <span className="font-mono text-[var(--text-secondary)]">対象</span>
                          <span className="text-purple-600 dark:text-purple-400">第3類</span>
                        </div>
                        <div className="bg-[var(--surface-glass)] rounded p-2 flex justify-between">
                          <span className="font-mono text-[var(--text-secondary)]">ペナルティ</span>
                          <span className="text-purple-600 dark:text-purple-400">-10</span>
                        </div>
                        <div className="bg-[var(--surface-glass)] rounded p-2 flex justify-between">
                          <span className="font-mono text-[var(--text-secondary)]">効果</span>
                          <span className="text-purple-600 dark:text-purple-400">行動制限</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Game Balance Considerations */}
          <motion.section variants={fadeInUp}>
            <div className="glass-card">
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                    ゲームバランスの考え方
                  </h2>
                  <p className="text-[var(--text-muted)]">
                    公平で戦略的なゲームを実現するための設計指針
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="glass-card bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-200 dark:border-blue-800">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      パラメータ分布
                    </h3>
                    <div className="space-y-3">
                      <p className="text-sm text-[var(--text-secondary)]">
                        カードの強さに極端な偏りがないよう、パラメータの分布を確認します。
                      </p>
                      <div className="bg-[var(--surface-glass)] rounded-lg p-3">
                        <h4 className="text-xs font-semibold text-[var(--text-primary)] mb-2">
                          確認ポイント
                        </h4>
                        <ul className="space-y-1 text-xs text-[var(--text-muted)]">
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400">•</span>
                            <span>最強カードが突出していないか</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400">•</span>
                            <span>使えないカードがないか</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400">•</span>
                            <span>平均値付近に集中しすぎていないか</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200 dark:border-purple-800">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      相性関係
                    </h3>
                    <div className="space-y-3">
                      <p className="text-sm text-[var(--text-secondary)]">
                        じゃんけんのような三すくみ関係があると、戦略性が生まれます。
                      </p>
                      <div className="bg-[var(--surface-glass)] rounded-lg p-3">
                        <h4 className="text-xs font-semibold text-[var(--text-primary)] mb-2">
                          相性の例
                        </h4>
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center gap-2">
                            <span className="text-red-600 dark:text-red-400 font-bold">攻撃</span>
                            <span className="text-[var(--text-muted)]">→</span>
                            <span className="text-blue-600 dark:text-blue-400 font-bold">防御</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-blue-600 dark:text-blue-400 font-bold">防御</span>
                            <span className="text-[var(--text-muted)]">→</span>
                            <span className="text-purple-600 dark:text-purple-400 font-bold">妨害</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-purple-600 dark:text-purple-400 font-bold">妨害</span>
                            <span className="text-[var(--text-muted)]">→</span>
                            <span className="text-red-600 dark:text-red-400 font-bold">攻撃</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200 dark:border-green-800">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      プレイ時間
                    </h3>
                    <div className="space-y-3">
                      <p className="text-sm text-[var(--text-secondary)]">
                        1ゲームの長さが適切かどうかを調整します。
                      </p>
                      <div className="bg-[var(--surface-glass)] rounded-lg p-3">
                        <h4 className="text-xs font-semibold text-[var(--text-primary)] mb-2">
                          目安
                        </h4>
                        <ul className="space-y-1 text-xs text-[var(--text-muted)]">
                          <li className="flex items-center justify-between">
                            <span>理想的な時間</span>
                            <span className="font-mono text-green-600 dark:text-green-400">20〜30分</span>
                          </li>
                          <li className="flex items-center justify-between">
                            <span>最短</span>
                            <span className="font-mono text-green-600 dark:text-green-400">10分</span>
                          </li>
                          <li className="flex items-center justify-between">
                            <span>最長</span>
                            <span className="font-mono text-green-600 dark:text-green-400">45分</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                    テスト方法
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="glass-card bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border-indigo-200 dark:border-indigo-800">
                      <h4 className="text-lg font-bold text-[var(--text-primary)] mb-4">
                        定量的テスト
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm">
                            1
                          </div>
                          <div>
                            <h5 className="font-semibold text-[var(--text-primary)] text-sm mb-1">
                              勝率の記録
                            </h5>
                            <p className="text-xs text-[var(--text-muted)]">
                              同じデッキで複数回プレイし、勝率を計測。50%付近が理想。
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">
                            2
                          </div>
                          <div>
                            <h5 className="font-semibold text-[var(--text-primary)] text-sm mb-1">
                              プレイ時間計測
                            </h5>
                            <p className="text-xs text-[var(--text-muted)]">
                              平均ゲーム時間を記録し、長すぎないか確認。
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-sm">
                            3
                          </div>
                          <div>
                            <h5 className="font-semibold text-[var(--text-primary)] text-sm mb-1">
                              使用率分析
                            </h5>
                            <p className="text-xs text-[var(--text-muted)]">
                              全く使われないカード、使われすぎるカードを特定。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-amber-200 dark:border-amber-800">
                      <h4 className="text-lg font-bold text-[var(--text-primary)] mb-4">
                        定性的テスト
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm">
                            1
                          </div>
                          <div>
                            <h5 className="font-semibold text-[var(--text-primary)] text-sm mb-1">
                              面白さの評価
                            </h5>
                            <p className="text-xs text-[var(--text-muted)]">
                              プレイヤーに5段階で楽しさを評価してもらう。
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">
                            2
                          </div>
                          <div>
                            <h5 className="font-semibold text-[var(--text-primary)] text-sm mb-1">
                              問題点の収集
                            </h5>
                            <p className="text-xs text-[var(--text-muted)]">
                              「ここが不満」「こうしたい」という意見を集める。
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-sm">
                            3
                          </div>
                          <div>
                            <h5 className="font-semibold text-[var(--text-primary)] text-sm mb-1">
                              改善案の議論
                            </h5>
                            <p className="text-xs text-[var(--text-muted)]">
                              問題を解決するルール変更を生徒と一緒に考える。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg p-6 text-white">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold mb-2">バランス調整の哲学</p>
                      <p className="text-purple-100 text-sm">
                        完璧なバランスは存在しません。重要なのは、継続的な改善プロセスです。生徒の意見を聞き、データを集め、調整し、また試す。この繰り返しが、ゲームだけでなく、生徒の問題解決能力も育てます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Navigation */}
          <motion.div variants={fadeInUp} className="mt-16 border-t border-[var(--border)] pt-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--text-muted)] mb-1">関連ページ</p>
                <p className="text-[var(--text-secondary)]">教授法の基本に立ち返り、全体の流れを再確認する</p>
              </div>
              <div className="flex gap-4 shrink-0">
                <TransitionLink href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  ホームへ
                </TransitionLink>
                <TransitionLink href="/pedagogy" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-primary)] hover:underline underline-offset-4">
                  教授法メモへ
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </TransitionLink>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
