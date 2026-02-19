'use client';

import { motion } from 'framer-motion';
import TransitionLink from '@/components/TransitionLink';

export default function RulesEvolutionPage() {
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
            <li className="text-[var(--text-primary)] font-medium">ルール進化の記録</li>
          </ol>
        </motion.nav>

        {/* Hero */}
        <motion.header
          className="mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="section-label mb-4">Rules Evolution</div>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-4 sm:text-4xl lg:text-5xl">
            ルール進化の記録
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            教員が設計した初期ルールから、生徒たちの提案により進化したルールまで。実際のプレイを通じて発見された問題点と、その解決プロセスを記録します。
          </p>
        </motion.header>

        {/* Main Content */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-14 sm:space-y-16"
        >

          {/* Introduction */}
          <motion.section variants={fadeInUp}>
            <div className="glass-card">
              <div className="space-y-4 text-[var(--text-secondary)]">
                <p className="text-lg leading-relaxed">
                  このゲームのルールは、教員が一方的に決めたものではありません。生徒たちが実際にプレイし、問題を発見し、議論を重ね、より良いゲームにするために改訂を提案してきました。
                </p>
                <p className="text-lg leading-relaxed">
                  ここでは、バージョン1(教員設計)からバージョン2(生徒改訂)への変遷を詳しく記録します。それぞれの変更には、発見された問題と、なぜその解決策が選ばれたのかという理由が込められています。
                </p>
                <div className="bg-[rgba(20,184,166,0.06)] dark:bg-[rgba(20,184,166,0.08)] border-l-4 border-[var(--accent-primary)] rounded-lg p-6 mt-6">
                  <p className="font-semibold text-[var(--text-primary)] mb-2">
                    重要な視点
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    これらの改訂は、生徒の主体性と問題解決能力の証です。教員の役割は完璧なルールを提供することではなく、生徒が自ら改善できる環境を整えることでした。
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Comparison Table */}
          <motion.section variants={fadeInUp}>
            <div className="glass-card">
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                    バージョン比較表
                  </h2>
                  <p className="text-[var(--text-muted)]">
                    各項目における変更点と、その背景にある理由
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[color-mix(in_srgb,var(--accent-primary)_24%,transparent)]">
                      <th className="text-left p-4 font-semibold text-[var(--text-primary)] bg-[var(--background-alt)]">
                        項目
                      </th>
                      <th className="text-left p-4 font-semibold text-[var(--text-primary)] bg-[rgba(59,130,246,0.06)] dark:bg-[rgba(59,130,246,0.08)]">
                        教員設計 (v1)
                      </th>
                      <th className="text-left p-4 font-semibold text-[var(--text-primary)] bg-[rgba(168,85,247,0.06)] dark:bg-[rgba(168,85,247,0.08)]">
                        生徒改訂 (v2)
                      </th>
                      <th className="text-left p-4 font-semibold text-[var(--text-primary)] bg-[rgba(16,185,129,0.06)] dark:bg-[rgba(16,185,129,0.08)]">
                        変更理由
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--background-alt)] transition-colors">
                      <td className="p-4 font-medium text-[var(--text-primary)]">
                        初期手札
                      </td>
                      <td className="p-4 text-[var(--text-secondary)]">
                        <div className="tag tag-primary mb-2">v1</div>
                        <p>全員一律5枚</p>
                      </td>
                      <td className="p-4 text-[var(--text-secondary)]">
                        <div className="tag tag-secondary mb-2">v2</div>
                        <p>カード種別ごとに配分</p>
                        <p className="text-xs text-[var(--text-muted)] mt-1">攻撃2枚、防御1枚、強化1枚、妨害1枚</p>
                      </td>
                      <td className="p-4 text-[var(--text-muted)]">
                        ランダムだと特定種別に偏り、戦略が立てられない。均等配分で公平性向上。
                      </td>
                    </tr>
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--background-alt)] transition-colors">
                      <td className="p-4 font-medium text-[var(--text-primary)]">
                        デッキ構成
                      </td>
                      <td className="p-4 text-[var(--text-secondary)]">
                        <div className="tag tag-primary mb-2">v1</div>
                        <p>全カード種別を混合した1つのデッキ</p>
                      </td>
                      <td className="p-4 text-[var(--text-secondary)]">
                        <div className="tag tag-secondary mb-2">v2</div>
                        <p>カード種別ごとに分離</p>
                        <p className="text-xs text-[var(--text-muted)] mt-1">攻撃、防御、強化、妨害で別デッキ</p>
                      </td>
                      <td className="p-4 text-[var(--text-muted)]">
                        必要な種類が引けず、ゲームが一方的に。分離することで戦略的選択が可能に。
                      </td>
                    </tr>
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--background-alt)] transition-colors">
                      <td className="p-4 font-medium text-[var(--text-primary)]">
                        HP制
                      </td>
                      <td className="p-4 text-[var(--text-secondary)]">
                        <div className="tag tag-primary mb-2">v1</div>
                        <p>なし</p>
                        <p className="text-xs text-[var(--text-muted)] mt-1">カード枚数のみで勝敗</p>
                      </td>
                      <td className="p-4 text-[var(--text-secondary)]">
                        <div className="tag tag-secondary mb-2">v2</div>
                        <p>HP制導入</p>
                        <p className="text-xs text-[var(--text-muted)] mt-1">初期HP: 50</p>
                      </td>
                      <td className="p-4 text-[var(--text-muted)]">
                        カード枚数だけでは勝敗が分かりにくく、ゲームが長引きすぎる。HP制で明確な勝利条件を設定。
                      </td>
                    </tr>
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--background-alt)] transition-colors">
                      <td className="p-4 font-medium text-[var(--text-primary)]">
                        回復メカニズム
                      </td>
                      <td className="p-4 text-[var(--text-secondary)]">
                        <div className="tag tag-primary mb-2">v1</div>
                        <p>なし</p>
                      </td>
                      <td className="p-4 text-[var(--text-secondary)]">
                        <div className="tag tag-secondary mb-2">v2</div>
                        <p>防御カードで回復可能</p>
                        <p className="text-xs text-[var(--text-muted)] mt-1">防御成功時にHP回復</p>
                      </td>
                      <td className="p-4 text-[var(--text-muted)]">
                        攻撃が強すぎて防御の価値が低い。回復要素で防御カードの戦略的価値が向上。
                      </td>
                    </tr>
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--background-alt)] transition-colors">
                      <td className="p-4 font-medium text-[var(--text-primary)]">
                        行動経済
                      </td>
                      <td className="p-4 text-[var(--text-secondary)]">
                        <div className="tag tag-primary mb-2">v1</div>
                        <p>1ターン1行動</p>
                      </td>
                      <td className="p-4 text-[var(--text-secondary)]">
                        <div className="tag tag-secondary mb-2">v2</div>
                        <p>行動ポイント制</p>
                        <p className="text-xs text-[var(--text-muted)] mt-1">3ポイント/ターン</p>
                      </td>
                      <td className="p-4 text-[var(--text-muted)]">
                        単純すぎて戦略性が乏しい。ポイント制で複数行動やコンボが可能に。
                      </td>
                    </tr>
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--background-alt)] transition-colors">
                      <td className="p-4 font-medium text-[var(--text-primary)]">
                        勝利条件
                      </td>
                      <td className="p-4 text-[var(--text-secondary)]">
                        <div className="tag tag-primary mb-2">v1</div>
                        <p>相手のカード枚数が0</p>
                      </td>
                      <td className="p-4 text-[var(--text-secondary)]">
                        <div className="tag tag-secondary mb-2">v2</div>
                        <p>複数の勝利条件</p>
                        <p className="text-xs text-[var(--text-muted)] mt-1">
                          ①相手HP=0<br />
                          ②相手デッキ=0<br />
                          ③特殊勝利条件
                        </p>
                      </td>
                      <td className="p-4 text-[var(--text-muted)]">
                        勝ち筋が1つだと単調。複数の勝利条件で戦略の幅が広がる。
                      </td>
                    </tr>
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--background-alt)] transition-colors">
                      <td className="p-4 font-medium text-[var(--text-primary)]">
                        効果カード
                      </td>
                      <td className="p-4 text-[var(--text-secondary)]">
                        <div className="tag tag-primary mb-2">v1</div>
                        <p>使い捨て</p>
                        <p className="text-xs text-[var(--text-muted)] mt-1">使用後すぐ捨て札へ</p>
                      </td>
                      <td className="p-4 text-[var(--text-secondary)]">
                        <div className="tag tag-secondary mb-2">v2</div>
                        <p>場に残して持続</p>
                        <p className="text-xs text-[var(--text-muted)] mt-1">効果が続く限り場に配置</p>
                      </td>
                      <td className="p-4 text-[var(--text-muted)]">
                        一瞬で終わると戦略性が低い。場に残すことで配置の重要性が生まれる。
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-[rgba(20,184,166,0.06)] dark:bg-[rgba(20,184,166,0.08)] rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--accent-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)] mb-1">
                      データから見える傾向
                    </p>
                    <p className="text-sm text-[var(--text-secondary)]">
                      全ての変更において共通するのは、「戦略性の向上」「公平性の確保」「プレイ時間の適正化」という3つの軸です。生徒たちは、ゲームバランスを体感的に理解し、論理的な改善案を提示しました。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Key Changes Analysis */}
          <motion.section variants={fadeInUp}>
            <div className="glass-card">
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent-secondary)] to-[var(--accent-tertiary)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                    主要変更の深堀り分析
                  </h2>
                  <p className="text-[var(--text-muted)]">
                    特に重要な3つの変更について、詳細なビフォーアフターを見ていきます
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Change 1: HP System */}
                <div className="glass-card bg-[rgba(239,68,68,0.06)] dark:bg-[rgba(239,68,68,0.08)] border-[color-mix(in_srgb,var(--error)_24%,transparent)]">
                  <div className="mb-6">
                    <div className="inline-block bg-[var(--error)] text-white px-4 py-2 rounded-full font-semibold text-sm mb-3">
                      主要変更 1
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                      HP制の導入
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">
                      勝敗を明確にし、ゲーム時間を適正化
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-[var(--surface-glass)] rounded-lg p-6 border-2 border-[color-mix(in_srgb,var(--error)_24%,transparent)]">
                      <div className="flex items-center gap-2 mb-4">
                        <svg className="w-5 h-5 text-[var(--error)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <h4 className="font-bold text-[var(--text-primary)]">変更前の問題</h4>
                      </div>
                      <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--error)] font-bold">▸</span>
                          <span>
                            <strong>不明確な勝敗:</strong> カード枚数だけでは、いつ終わるか分からない
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--error)] font-bold">▸</span>
                          <span>
                            <strong>ゲームが長引く:</strong> 50分の授業時間内に終わらないケースが頻発
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--error)] font-bold">▸</span>
                          <span>
                            <strong>戦略が立たない:</strong> どのカードを使えば有利か判断しづらい
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--error)] font-bold">▸</span>
                          <span>
                            <strong>終盤が単調:</strong> カードが減るだけで、駆け引きがない
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-[var(--surface-glass)] rounded-lg p-6 border-2 border-[color-mix(in_srgb,var(--success)_24%,transparent)]">
                      <div className="flex items-center gap-2 mb-4">
                        <svg className="w-5 h-5 text-[var(--success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <h4 className="font-bold text-[var(--text-primary)]">変更後の改善</h4>
                      </div>
                      <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--success)] font-bold">▸</span>
                          <span>
                            <strong>明確な目標:</strong> HP=0という分かりやすい勝利条件
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--success)] font-bold">▸</span>
                          <span>
                            <strong>適切な時間:</strong> 平均25〜30分で決着、授業時間内に収まる
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--success)] font-bold">▸</span>
                          <span>
                            <strong>戦略的判断:</strong> ダメージ計算により、カード選択が重要に
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[var(--success)] font-bold">▸</span>
                          <span>
                            <strong>逆転要素:</strong> HPが少なくても、戦略次第で逆転可能
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-[rgba(239,68,68,0.1)] dark:bg-[rgba(239,68,68,0.08)] rounded-lg p-4">
                    <p className="text-sm text-[var(--text-secondary)] font-medium">
                      <strong>生徒のコメント:</strong> 「HPがあると、あとどれくらいで勝てるか分かるから戦略が立てやすい。最後まで緊張感があって面白い。」
                    </p>
                  </div>
                </div>

                {/* Change 2: Deck Separation */}
                <div className="glass-card bg-[rgba(59,130,246,0.06)] dark:bg-[rgba(59,130,246,0.08)] border-[color-mix(in_srgb,var(--info)_24%,transparent)]">
                  <div className="mb-6">
                    <div className="inline-block bg-[var(--info)] text-white px-4 py-2 rounded-full font-semibold text-sm mb-3">
                      主要変更 2
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                      デッキの種別分離
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">
                      戦略的なカード選択を可能にする
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-[var(--surface-glass)] rounded-lg p-6 border-2 border-[color-mix(in_srgb,var(--info)_24%,transparent)]">
                      <div className="flex items-center gap-2 mb-4">
                        <svg className="w-5 h-5 text-[var(--info)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <h4 className="font-bold text-[var(--text-primary)]">混合デッキの問題</h4>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-[rgba(59,130,246,0.06)] dark:bg-[rgba(59,130,246,0.08)] rounded p-3">
                          <p className="text-xs font-semibold text-[var(--text-secondary)] mb-2">典型的な問題シナリオ</p>
                          <p className="text-xs text-[var(--text-secondary)]">
                            攻撃されているのに、引いたカードが全て攻撃カード。防御カードが1枚も来ず、一方的に負ける。
                          </p>
                        </div>
                        <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--info)] font-bold">▸</span>
                            <span>運要素が強すぎる</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--info)] font-bold">▸</span>
                            <span>必要なカードが引けない</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--info)] font-bold">▸</span>
                            <span>状況に応じた対応ができない</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-[var(--surface-glass)] rounded-lg p-6 border-2 border-[color-mix(in_srgb,var(--success)_24%,transparent)]">
                      <div className="flex items-center gap-2 mb-4">
                        <svg className="w-5 h-5 text-[var(--success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <h4 className="font-bold text-[var(--text-primary)]">分離デッキの利点</h4>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-[rgba(16,185,129,0.06)] dark:bg-[rgba(16,185,129,0.08)] rounded p-3">
                          <p className="text-xs font-semibold text-[var(--text-secondary)] mb-2">改善されたシナリオ</p>
                          <p className="text-xs text-[var(--text-secondary)]">
                            攻撃されている→防御デッキから引く→適切に防御できる。状況に応じた戦略的なプレイが可能に。
                          </p>
                        </div>
                        <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--success)] font-bold">▸</span>
                            <span>戦略的なカード選択</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--success)] font-bold">▸</span>
                            <span>状況判断が重要に</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--success)] font-bold">▸</span>
                            <span>技術で運をカバーできる</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-4">デッキ構成例</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="bg-[rgba(239,68,68,0.1)] dark:bg-[rgba(239,68,68,0.08)] rounded-lg p-4 text-center border-2 border-[color-mix(in_srgb,var(--error)_30%,transparent)] dark:border-[color-mix(in_srgb,var(--error)_40%,transparent)]">
                        <div className="w-12 h-12 rounded-full bg-[var(--error)] text-white flex items-center justify-center mx-auto mb-2 font-bold text-lg">
                          攻
                        </div>
                        <p className="font-semibold text-[var(--text-primary)] text-sm">攻撃デッキ</p>
                        <p className="text-xs text-[var(--text-muted)] mt-1">15枚</p>
                      </div>
                      <div className="bg-[rgba(59,130,246,0.1)] dark:bg-[rgba(59,130,246,0.08)] rounded-lg p-4 text-center border-2 border-[color-mix(in_srgb,var(--info)_30%,transparent)] dark:border-[color-mix(in_srgb,var(--info)_40%,transparent)]">
                        <div className="w-12 h-12 rounded-full bg-[var(--info)] text-white flex items-center justify-center mx-auto mb-2 font-bold text-lg">
                          防
                        </div>
                        <p className="font-semibold text-[var(--text-primary)] text-sm">防御デッキ</p>
                        <p className="text-xs text-[var(--text-muted)] mt-1">12枚</p>
                      </div>
                      <div className="bg-[rgba(16,185,129,0.1)] dark:bg-[rgba(16,185,129,0.08)] rounded-lg p-4 text-center border-2 border-[color-mix(in_srgb,var(--success)_30%,transparent)] dark:border-[color-mix(in_srgb,var(--success)_40%,transparent)]">
                        <div className="w-12 h-12 rounded-full bg-[var(--success)] text-white flex items-center justify-center mx-auto mb-2 font-bold text-lg">
                          強
                        </div>
                        <p className="font-semibold text-[var(--text-primary)] text-sm">強化デッキ</p>
                        <p className="text-xs text-[var(--text-muted)] mt-1">10枚</p>
                      </div>
                      <div className="bg-[rgba(168,85,247,0.1)] dark:bg-[rgba(168,85,247,0.08)] rounded-lg p-4 text-center border-2 border-[color-mix(in_srgb,var(--accent-secondary)_30%,transparent)] dark:border-[color-mix(in_srgb,var(--accent-secondary)_40%,transparent)]">
                        <div className="w-12 h-12 rounded-full bg-[var(--accent-secondary)] text-white flex items-center justify-center mx-auto mb-2 font-bold text-lg">
                          妨
                        </div>
                        <p className="font-semibold text-[var(--text-primary)] text-sm">妨害デッキ</p>
                        <p className="text-xs text-[var(--text-muted)] mt-1">8枚</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-[rgba(59,130,246,0.1)] dark:bg-[rgba(59,130,246,0.08)] rounded-lg p-4">
                    <p className="text-sm text-[var(--text-secondary)] font-medium">
                      <strong>生徒のコメント:</strong> 「デッキを分けたら、状況に合わせてどれを引くか選べるから、すごく頭を使うようになった。運だけじゃなくて実力も必要になって面白い。」
                    </p>
                  </div>
                </div>

                {/* Change 3: Action Points */}
                <div className="glass-card bg-[rgba(168,85,247,0.06)] dark:bg-[rgba(168,85,247,0.08)] border-[color-mix(in_srgb,var(--accent-secondary)_24%,transparent)]">
                  <div className="mb-6">
                    <div className="inline-block bg-[var(--accent-secondary)] text-white px-4 py-2 rounded-full font-semibold text-sm mb-3">
                      主要変更 3
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                      行動ポイント制の導入
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">
                      複雑な戦略とコンボを可能にする
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-[var(--surface-glass)] rounded-lg p-6 border-2 border-[color-mix(in_srgb,var(--accent-secondary)_24%,transparent)]">
                      <div className="flex items-center gap-2 mb-4">
                        <svg className="w-5 h-5 text-[var(--accent-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <h4 className="font-bold text-[var(--text-primary)]">1行動制の限界</h4>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-[rgba(168,85,247,0.06)] dark:bg-[rgba(168,85,247,0.08)] rounded p-4">
                          <p className="text-xs font-mono text-[var(--text-secondary)] mb-3">
                            プレイヤーのターン
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-xs">
                              <div className="w-6 h-6 rounded-full bg-[var(--accent-secondary)] text-white flex items-center justify-center font-bold">
                                1
                              </div>
                              <span className="text-[var(--text-secondary)]">カードを1枚使う</span>
                            </div>
                            <div className="text-center text-xs text-[var(--text-muted)] py-2">
                              ↓ ターン終了
                            </div>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--accent-secondary)] font-bold">▸</span>
                            <span>選択肢が少なすぎる</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--accent-secondary)] font-bold">▸</span>
                            <span>コンボが組めない</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--accent-secondary)] font-bold">▸</span>
                            <span>戦略の幅が狭い</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-[var(--surface-glass)] rounded-lg p-6 border-2 border-[color-mix(in_srgb,var(--success)_24%,transparent)]">
                      <div className="flex items-center gap-2 mb-4">
                        <svg className="w-5 h-5 text-[var(--success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <h4 className="font-bold text-[var(--text-primary)]">ポイント制の可能性</h4>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-[rgba(16,185,129,0.06)] dark:bg-[rgba(16,185,129,0.08)] rounded p-4">
                          <p className="text-xs font-mono text-[var(--text-secondary)] mb-3">
                            プレイヤーのターン (3ポイント)
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-xs">
                              <div className="w-6 h-6 rounded-full bg-[var(--success)] text-white flex items-center justify-center font-bold">
                                1
                              </div>
                              <span className="text-[var(--text-secondary)]">攻撃カード (2pt)</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                              <div className="w-6 h-6 rounded-full bg-[var(--success)] text-white flex items-center justify-center font-bold">
                                2
                              </div>
                              <span className="text-[var(--text-secondary)]">強化カード (1pt)</span>
                            </div>
                            <div className="text-center text-xs text-[var(--text-muted)] py-2">
                              ↓ ターン終了
                            </div>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--success)] font-bold">▸</span>
                            <span>複数の行動が可能</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--success)] font-bold">▸</span>
                            <span>コンボ戦略が生まれる</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[var(--success)] font-bold">▸</span>
                            <span>深い戦略性が実現</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-4">カードのコスト設定例</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="bg-[var(--surface-glass)] rounded-lg p-3 border border-[var(--border)] ">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-[var(--text-muted)]">強力な攻撃</span>
                          <span className="bg-[var(--error)] text-white px-2 py-1 rounded text-xs font-bold">3pt</span>
                        </div>
                        <p className="text-xs text-[var(--text-muted)]">1ターン全消費</p>
                      </div>
                      <div className="bg-[var(--surface-glass)] rounded-lg p-3 border border-[var(--border)] ">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-[var(--text-muted)]">通常攻撃</span>
                          <span className="bg-[var(--info)] text-white px-2 py-1 rounded text-xs font-bold">2pt</span>
                        </div>
                        <p className="text-xs text-[var(--text-muted)]">もう1行動可能</p>
                      </div>
                      <div className="bg-[var(--surface-glass)] rounded-lg p-3 border border-[var(--border)] ">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-[var(--text-muted)]">小技</span>
                          <span className="bg-[var(--success)] text-white px-2 py-1 rounded text-xs font-bold">1pt</span>
                        </div>
                        <p className="text-xs text-[var(--text-muted)]">複数回可能</p>
                      </div>
                      <div className="bg-[var(--surface-glass)] rounded-lg p-3 border border-[var(--border)] ">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-[var(--text-muted)]">ドロー</span>
                          <span className="bg-[var(--accent-secondary)] text-white px-2 py-1 rounded text-xs font-bold">0pt</span>
                        </div>
                        <p className="text-xs text-[var(--text-muted)]">無料行動</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-[rgba(168,85,247,0.1)] dark:bg-[rgba(168,85,247,0.08)] rounded-lg p-4">
                    <p className="text-sm text-[var(--text-secondary)] font-medium">
                      <strong>生徒のコメント:</strong> 「ポイント制になってから、どの順番でカードを使うか考えるのが楽しい。強いカード1枚か、弱いカード3枚か、状況で判断するのが面白い。」
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Facilitation Tips */}
          <motion.section variants={fadeInUp}>
            <div className="glass-card">
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--warning)] to-[var(--accent-tertiary)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                    ファシリテーションのコツ
                  </h2>
                  <p className="text-[var(--text-muted)]">
                    生徒主導のルール改訂を成功させるための指導ポイント
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass-card bg-[rgba(16,185,129,0.06)] dark:bg-[rgba(16,185,129,0.08)] border-[color-mix(in_srgb,var(--success)_24%,transparent)]">
                    <div className="flex items-start gap-3 mb-4">
                      <svg className="w-6 h-6 text-[var(--success)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                          推奨アプローチ
                        </h3>
                        <p className="text-sm text-[var(--text-muted)] mb-3">
                          生徒の主体性を引き出す効果的な方法
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                      <li className="flex items-start gap-2 bg-[var(--surface-glass)] rounded-lg p-3">
                        <span className="text-[var(--success)] font-bold flex-shrink-0">▸</span>
                        <div>
                          <strong className="text-[var(--text-primary)]">オープンな問いかけ</strong>
                          <p className="text-xs text-[var(--text-muted)] mt-1">
                            「このルールで困ったことはない?」「もっと面白くするにはどうする?」
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2 bg-[var(--surface-glass)] rounded-lg p-3">
                        <span className="text-[var(--success)] font-bold flex-shrink-0">▸</span>
                        <div>
                          <strong className="text-[var(--text-primary)]">十分な時間確保</strong>
                          <p className="text-xs text-[var(--text-muted)] mt-1">
                            議論とテストプレイに最低2〜3コマ分の時間を割く
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2 bg-[var(--surface-glass)] rounded-lg p-3">
                        <span className="text-[var(--success)] font-bold flex-shrink-0">▸</span>
                        <div>
                          <strong className="text-[var(--text-primary)]">提案を記録</strong>
                          <p className="text-xs text-[var(--text-muted)] mt-1">
                            全ての意見を書き留め、可視化することで議論を深める
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2 bg-[var(--surface-glass)] rounded-lg p-3">
                        <span className="text-[var(--success)] font-bold flex-shrink-0">▸</span>
                        <div>
                          <strong className="text-[var(--text-primary)]">実験的試行を促す</strong>
                          <p className="text-xs text-[var(--text-muted)] mt-1">
                            「試しにこのルールでやってみよう」と気軽にテストさせる
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2 bg-[var(--surface-glass)] rounded-lg p-3">
                        <span className="text-[var(--success)] font-bold flex-shrink-0">▸</span>
                        <div>
                          <strong className="text-[var(--text-primary)]">対立を建設的に</strong>
                          <p className="text-xs text-[var(--text-muted)] mt-1">
                            意見の対立は成長の機会。両方試してデータで判断させる
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="glass-card bg-[rgba(239,68,68,0.06)] dark:bg-[rgba(239,68,68,0.08)] border-[color-mix(in_srgb,var(--error)_24%,transparent)]">
                    <div className="flex items-start gap-3 mb-4">
                      <svg className="w-6 h-6 text-[var(--error)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <div>
                        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                          避けるべきアプローチ
                        </h3>
                        <p className="text-sm text-[var(--text-muted)] mb-3">
                          生徒の主体性を奪ってしまう行為
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                      <li className="flex items-start gap-2 bg-[var(--surface-glass)] rounded-lg p-3">
                        <span className="text-[var(--error)] font-bold flex-shrink-0">▸</span>
                        <div>
                          <strong className="text-[var(--text-primary)]">答えを与える</strong>
                          <p className="text-xs text-[var(--text-muted)] mt-1">
                            「正解はこれだよ」と教員が解決策を提示してしまう
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2 bg-[var(--surface-glass)] rounded-lg p-3">
                        <span className="text-[var(--error)] font-bold flex-shrink-0">▸</span>
                        <div>
                          <strong className="text-[var(--text-primary)]">時間を急かす</strong>
                          <p className="text-xs text-[var(--text-muted)] mt-1">
                            「早く決めて」と議論を打ち切ってしまう
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2 bg-[var(--surface-glass)] rounded-lg p-3">
                        <span className="text-[var(--error)] font-bold flex-shrink-0">▸</span>
                        <div>
                          <strong className="text-[var(--text-primary)]">意見を否定</strong>
                          <p className="text-xs text-[var(--text-muted)] mt-1">
                            「それは無理」と最初から可能性を閉ざす
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2 bg-[var(--surface-glass)] rounded-lg p-3">
                        <span className="text-[var(--error)] font-bold flex-shrink-0">▸</span>
                        <div>
                          <strong className="text-[var(--text-primary)]">完璧を求める</strong>
                          <p className="text-xs text-[var(--text-muted)] mt-1">
                            最初から完璧なルールを期待し、試行錯誤を認めない
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2 bg-[var(--surface-glass)] rounded-lg p-3">
                        <span className="text-[var(--error)] font-bold flex-shrink-0">▸</span>
                        <div>
                          <strong className="text-[var(--text-primary)]">声の大きい生徒優先</strong>
                          <p className="text-xs text-[var(--text-muted)] mt-1">
                            積極的な生徒の意見だけで決めてしまう
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="glass-card bg-[rgba(59,130,246,0.06)] dark:bg-[rgba(59,130,246,0.08)] border-[color-mix(in_srgb,var(--info)_24%,transparent)]">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                    介入が必要なタイミング
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">
                    基本的には生徒に任せますが、以下の場合は教員の介入が必要です。
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-[var(--surface-glass)] rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-[var(--warning)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <h4 className="font-semibold text-[var(--text-primary)] text-sm">安全性の問題</h4>
                      </div>
                      <p className="text-xs text-[var(--text-muted)]">
                        現実の危険物取扱いに関する誤解が生じそうな場合は修正が必要
                      </p>
                    </div>
                    <div className="bg-[var(--surface-glass)] rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-[var(--accent-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <h4 className="font-semibold text-[var(--text-primary)] text-sm">議論の停滞</h4>
                      </div>
                      <p className="text-xs text-[var(--text-muted)]">
                        同じ議論が繰り返され、前に進まない場合は新しい視点を提示
                      </p>
                    </div>
                    <div className="bg-[var(--surface-glass)] rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-[var(--error)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h4 className="font-semibold text-[var(--text-primary)] text-sm">事実誤認</h4>
                      </div>
                      <p className="text-xs text-[var(--text-muted)]">
                        危険物の性質について明らかな事実誤認がある場合は訂正が必要
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card bg-[rgba(20,184,166,0.06)] dark:bg-[rgba(20,184,166,0.08)] border-[color-mix(in_srgb,var(--accent-primary)_24%,transparent)]">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                    変更の記録方法
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">
                    ルールの進化過程を記録することで、学習の軌跡を可視化します。
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 bg-[var(--surface-glass)] rounded-lg p-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--accent-primary)] text-white flex items-center justify-center font-bold">
                        1
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[var(--text-primary)] mb-1">変更提案シート</h4>
                        <p className="text-xs text-[var(--text-muted)]">
                          提案者名、現状の問題点、改善案、期待される効果を記入
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-[var(--surface-glass)] rounded-lg p-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--accent-secondary)] text-white flex items-center justify-center font-bold">
                        2
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[var(--text-primary)] mb-1">テストプレイログ</h4>
                        <p className="text-xs text-[var(--text-muted)]">
                          新ルールでのプレイ結果、気づいた点、さらなる改善案を記録
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-[var(--surface-glass)] rounded-lg p-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--accent-tertiary)] text-white flex items-center justify-center font-bold">
                        3
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[var(--text-primary)] mb-1">バージョン管理</h4>
                        <p className="text-xs text-[var(--text-muted)]">
                          変更日時、バージョン番号、変更内容、変更理由を体系的に管理
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-[var(--warning)] to-[var(--accent-tertiary)] rounded-lg p-6 text-white">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <div>
                    <p className="font-semibold mb-2">教員の役割</p>
                    <p className="text-[rgba(255,255,255,0.85)] text-sm">
                      完璧なルールを最初から提供するのではなく、生徒が自ら問題を発見し、解決策を考え、試行錯誤できる環境を整えることが教員の最も重要な役割です。失敗も含めて、そのプロセス全体が学びです。
                    </p>
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
                <p className="text-[var(--text-secondary)]">他の資格試験や科目への展開の可能性を探る</p>
              </div>
              <TransitionLink href="/outlook" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-primary)] hover:underline underline-offset-4 shrink-0">
                今後の展望へ
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
