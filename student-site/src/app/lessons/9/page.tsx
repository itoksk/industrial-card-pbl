'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TransitionLink from '@/components/TransitionLink';
import {
  ChevronRightIcon,
  CheckCircleIcon,
  TrophyIcon,
  PlayIcon,
  ClipboardDocumentCheckIcon,
  SparklesIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export default function Lesson9() {
  const [quiz1Answer, setQuiz1Answer] = useState<string | null>(null);
  const [quiz2Answer, setQuiz2Answer] = useState<string | null>(null);
  const [quiz3Answer, setQuiz3Answer] = useState<string | null>(null);
  const [showQuiz1Result, setShowQuiz1Result] = useState(false);
  const [showQuiz2Result, setShowQuiz2Result] = useState(false);
  const [showQuiz3Result, setShowQuiz3Result] = useState(false);

  const handleQuiz1 = (answer: string) => {
    setQuiz1Answer(answer);
    setShowQuiz1Result(true);
  };

  const handleQuiz2 = (answer: string) => {
    setQuiz2Answer(answer);
    setShowQuiz2Result(true);
  };

  const handleQuiz3 = (answer: string) => {
    setQuiz3Answer(answer);
    setShowQuiz3Result(true);
  };

  return (
    <div className="min-h-screen lesson-page-bg">
      <div className="container-custom py-12">
        {/* Breadcrumb */}
        <motion.nav
          className="breadcrumb mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/" className="hover:text-[var(--accent)] transition-colors">
            ホーム
          </Link>
          <ChevronRightIcon className="w-4 h-4" />
          <span className="text-[var(--foreground)]">レッスン9</span>
        </motion.nav>

        {/* Hero Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="tag tag-phase-4 mb-4">Phase 4 - 評価</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">レッスン9</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-3">
            <TrophyIcon className="w-10 h-10 text-[var(--color-success)]" />
            テストプレイと評価
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl">
            作成したカードゲームを実際にプレイし、ゲーム性や学習効果を評価します。
            実プレイから得られる気づきを通じて、最終的な完成度を高めましょう。
          </p>

          {/* Learning Objectives */}
          <div className="glass-card mt-8">
            <h3 className="section-label">学習目標</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--text-secondary)]">
                  危険物の数値データを使ったバトルルールを理解する
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--text-secondary)]">
                  消火方法・運搬基準・指定数量計算の知識をゲームで活用する
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--text-secondary)]">
                  テストプレイを通じて危険物知識の定着度を評価する
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Content Section 1: Game Rules Recap */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass-card">
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-2">
              <PlayIcon className="w-7 h-7 text-[var(--color-info)]" />
              ゲームルールの再確認
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              テストプレイを始める前に、基本的なゲームルールを確認しておきましょう。
            </p>

            <div className="space-y-4">
              <div className="content-card category-card-blue">
                <h4 className="font-semibold text-lg mb-3 text-[var(--color-info)]">
                  基本の流れ
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>各プレイヤーは初期デッキから5枚のカードを手札に引く</li>
                  <li>ターン開始時に1枚ドロー</li>
                  <li>手札からカードをプレイし、アクションを実行</li>
                  <li>ターン終了を宣言し、次のプレイヤーへ</li>
                  <li>勝利条件を満たしたプレイヤーが勝利</li>
                </ol>
              </div>

              <div className="content-card category-card-purple">
                <h4 className="font-semibold text-lg mb-3 text-[var(--color-purple)]">
                  危険物バトルの種類
                </h4>
                <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <p>
                    <strong>引火点勝負:</strong> 引火点が低い方が勝ち。より低い温度で引火する=より危険=より強い。例: ガソリン(-40&#8451;) vs 灯油(40&#8451;以上) → ガソリンの勝ち
                  </p>
                  <p>
                    <strong>比重勝負:</strong> 比重が1より小さいほど水に浮きやすく消火困難。1から遠い方が勝ち。例: ガソリン(0.65-0.75) vs 二硫化炭素(1.26) → 二硫化炭素の勝ち（水に沈む特殊性）
                  </p>
                  <p>
                    <strong>指定数量勝負:</strong> 指定数量が少ない方が勝ち。規制が厳しい=より危険=より強い。例: 特殊引火物(50L) vs 第4石油類(6000L) → 特殊引火物の勝ち
                  </p>
                  <p>
                    <strong>蒸気比重勝負:</strong> 蒸気比重が大きい方が勝ち。蒸気が床に溜まりやすく爆発リスクが高い。例: エタノール(1.6) vs ガソリン(3-4) → ガソリンの勝ち
                  </p>
                </div>
              </div>

              <div className="content-card category-card-pink">
                <h4 className="font-semibold text-lg mb-3 text-[var(--color-pink)]">
                  知識が問われる特殊ルール
                </h4>
                <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <p>
                    <strong>火災カード:</strong> 場に出された危険物カードに対して、正しい消火方法を宣言できれば勝ち。例: 「ガソリン火災に泡消火器！」→ 正解で勝利。「ガソリン火災に水！」→ 不正解で敗北。
                  </p>
                  <p>
                    <strong>運搬カード:</strong> 危険物の運搬時の注意点を1つ正しく答えられれば勝ち。例: 「容器の漏れ確認」「消火器携行」「危の標識掲示」など。
                  </p>
                  <p>
                    <strong>違反カード:</strong> 指定数量の計算問題を出題。正しく計算できれば勝ち。例: 「ガソリン100L + 灯油500L の倍数は？」→ 0.5 + 0.5 = 1.0倍。
                  </p>
                </div>
              </div>

              <div className="content-card category-card-green">
                <h4 className="font-semibold text-lg mb-3 text-[var(--color-success)]">
                  勝利条件
                </h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-[var(--color-success)] flex-shrink-0" />
                    パラメータ勝負で規定回数勝利する（バトル勝利）
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-[var(--color-success)] flex-shrink-0" />
                    7分類すべてのカードを集める（コンプリート勝利）
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-[var(--color-success)] flex-shrink-0" />
                    知識問題（消火・運搬・計算）に連続正解する（知識勝利）
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 content-card bg-[var(--color-info-subtle)]">
              <p className="text-sm text-[var(--text-secondary)]">
                <strong>詳細なルールブック:</strong> より詳しいルールは
                <TransitionLink href="/rules" className="text-[var(--color-info)] hover:underline ml-1">
                  ルールページ
                </TransitionLink>
                を参照してください。
              </p>
            </div>
          </div>
        </motion.section>

        {/* Content Section 2: Test Play Procedures */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="glass-card">
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-2">
              <ClipboardDocumentCheckIcon className="w-7 h-7 text-[var(--color-purple)]" />
              テストプレイの手順
            </h3>

            <div className="space-y-4">
              <div className="content-card flex items-start gap-4">
                <div className="bg-[var(--color-info)] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">準備（5分）</h4>
                  <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                    <li>• プレイ人数: 2〜4人を推奨</li>
                    <li>• ゲーム時間: 1ゲーム約20分</li>
                    <li>• カードをシャッフルし、各プレイヤーにデッキを配布</li>
                    <li>• 評価用紙とペンを用意</li>
                  </ul>
                </div>
              </div>

              <div className="content-card flex items-start gap-4">
                <div className="bg-[var(--color-purple)] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">プレイ中の観察（20分）</h4>
                  <p className="text-sm text-[var(--text-secondary)] mb-2">
                    以下の観点を意識しながらプレイします。一人が記録係として観察するのも効果的です。
                  </p>
                  <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                    <li>• ルールは理解しやすいか</li>
                    <li>• カードの効果テキストは明確か</li>
                    <li>• ゲームバランスは適切か（一方的な展開にならないか）</li>
                    <li>• プレイ時間は適切か（長すぎず短すぎず）</li>
                    <li>• 物理的な操作性に問題はないか</li>
                  </ul>
                </div>
              </div>

              <div className="content-card flex items-start gap-4">
                <div className="bg-[var(--color-pink)] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">フィードバック記録（10分）</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    プレイ終了後、各プレイヤーが気づいた点を評価フォームに記入します。
                    良かった点と改善すべき点をバランスよく書き出しましょう。
                  </p>
                </div>
              </div>

              <div className="content-card flex items-start gap-4">
                <div className="bg-[var(--color-success)] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">ディスカッション（15分）</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    チーム全体でフィードバックを共有し、改善の優先順位を決定します。
                    すぐに修正できる点と、次回のイテレーションで対応する点を分けて整理しましょう。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Content Section 3: Physical UX Discoveries */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="glass-card">
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">
              実プレイで発見される物理的UX
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              デジタルツールでは気づかない、物理カードならではの気づきがあります。
              過去のテストプレイセッションで実際に発見された事例を紹介します。
            </p>

            <div className="space-y-6">
              <div className="content-card category-card-blue">
                <h4 className="font-semibold text-lg mb-3 text-[var(--color-info)]">
                  効果カードはフィールドに残る
                </h4>
                <p className="text-sm text-[var(--text-secondary)] mb-2">
                  <strong>発見:</strong> 効果カードを使用後に捨て札にすると、その効果が持続しているのか分かりにくくなる問題が発覚。
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong>対応:</strong> 効果カードは発動後もフィールドに残し、効果が終了するまで視覚的に確認できるようにルールを変更。
                </p>
              </div>

              <div className="content-card category-card-purple">
                <h4 className="font-semibold text-lg mb-3 text-[var(--color-purple)]">
                  指定された配置エリアの重要性
                </h4>
                <p className="text-sm text-[var(--text-secondary)] mb-2">
                  <strong>発見:</strong> カードを適当にテーブル上に置くと、どのカードがどの状態（手札、フィールド、捨て札）なのか混乱する。
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong>対応:</strong> プレイマット上に「手札エリア」「フィールドエリア」「捨て札エリア」を明示し、
                  カードの配置ルールを明確化。
                </p>
              </div>

              <div className="content-card category-card-pink">
                <h4 className="font-semibold text-lg mb-3 text-[var(--color-pink)]">
                  デッキの種類分け
                </h4>
                <p className="text-sm text-[var(--text-secondary)] mb-2">
                  <strong>発見:</strong> 運搬、消火、規制カードを1つのデッキに混ぜると、
                  特定のカードタイプが引けず戦略が立てられないことがある。
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong>対応:</strong> カテゴリごとに別々のデッキを用意し、
                  各ターンで引くデッキを選択できるルールに変更。
                </p>
              </div>

              <div className="content-card category-card-green">
                <h4 className="font-semibold text-lg mb-3 text-[var(--color-success)]">
                  カードの視認性
                </h4>
                <p className="text-sm text-[var(--text-secondary)] mb-2">
                  <strong>発見:</strong> フォントサイズが小さすぎて、離れた位置から相手のカードが読めない。
                  特に効果テキストが長いカードで顕著。
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong>対応:</strong> 効果テキストを簡潔にし、フォントサイズを最低10pt以上に統一。
                  重要な数値は大きく太字で表示。
                </p>
              </div>
            </div>

            <div className="mt-6 content-card bg-[var(--color-warning-subtle)] border-l-4 border-[var(--color-warning)]">
              <h4 className="font-semibold mb-2 text-[var(--color-warning)]">
                あなたのチームでも新しい発見があるかもしれません
              </h4>
              <p className="text-sm text-[var(--text-secondary)]">
                これらの事例は一例です。実際にプレイすることで、自分たちのゲームならではの改善点が見えてくるはずです。
                発見した課題は必ず記録し、次の改善サイクルに活かしましょう。
              </p>
            </div>
          </div>
        </motion.section>

        {/* Content Section 4: Evaluation Form */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="glass-card">
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">
              評価フォームの項目
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              テストプレイ後、以下の観点で評価を行います。
              実際の評価はGoogleフォームやスプレッドシートを使って記録するとデータ分析が容易です。
            </p>

            <div className="space-y-6">
              <div className="content-card">
                <h4 className="font-semibold mb-3">ゲーム性の評価（5段階評価）</h4>
                <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <div className="flex justify-between items-center p-2 bg-[var(--section-alt-bg)] rounded">
                    <span>面白さ・エンゲージメント</span>
                    <span className="text-xs text-[var(--text-muted)]">1（低い）〜 5（高い）</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-[var(--section-alt-bg)] rounded">
                    <span>ルールの分かりやすさ</span>
                    <span className="text-xs text-[var(--text-muted)]">1（低い）〜 5（高い）</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-[var(--section-alt-bg)] rounded">
                    <span>ゲームバランス</span>
                    <span className="text-xs text-[var(--text-muted)]">1（低い）〜 5（高い）</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-[var(--section-alt-bg)] rounded">
                    <span>戦略性の深さ</span>
                    <span className="text-xs text-[var(--text-muted)]">1（低い）〜 5（高い）</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-[var(--section-alt-bg)] rounded">
                    <span>プレイ時間の適切さ</span>
                    <span className="text-xs text-[var(--text-muted)]">1（低い）〜 5（高い）</span>
                  </div>
                </div>
              </div>

              <div className="content-card">
                <h4 className="font-semibold mb-3">学習効果の評価（5段階評価）</h4>
                <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <div className="flex justify-between items-center p-2 bg-[var(--section-alt-bg)] rounded">
                    <span>危険物知識の定着</span>
                    <span className="text-xs text-[var(--text-muted)]">1（低い）〜 5（高い）</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-[var(--section-alt-bg)] rounded">
                    <span>安全管理の理解</span>
                    <span className="text-xs text-[var(--text-muted)]">1（低い）〜 5（高い）</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-[var(--section-alt-bg)] rounded">
                    <span>実務への応用可能性</span>
                    <span className="text-xs text-[var(--text-muted)]">1（低い）〜 5（高い）</span>
                  </div>
                </div>
              </div>

              <div className="content-card">
                <h4 className="font-semibold mb-3">自由記述欄</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-[var(--section-alt-bg)] rounded">
                    <p className="text-sm font-medium mb-1">良かった点</p>
                    <p className="text-xs text-[var(--text-muted)]">
                      特に楽しかった要素、よく機能していたメカニクスなど
                    </p>
                  </div>
                  <div className="p-3 bg-[var(--section-alt-bg)] rounded">
                    <p className="text-sm font-medium mb-1">改善すべき点</p>
                    <p className="text-xs text-[var(--text-muted)]">
                      分かりにくかったルール、バランスの問題、物理的な操作性の課題など
                    </p>
                  </div>
                  <div className="p-3 bg-[var(--section-alt-bg)] rounded">
                    <p className="text-sm font-medium mb-1">学んだこと</p>
                    <p className="text-xs text-[var(--text-muted)]">
                      プレイを通じて新たに理解した危険物の知識や安全管理の概念
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Content Section 5: Iterative Improvement */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="glass-card">
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-2">
              <SparklesIcon className="w-7 h-7 text-[var(--accent)]" />
              反復改善サイクル
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              テストプレイと改善は1回で終わりではありません。
              以下のサイクルを繰り返すことで、ゲームの完成度を高めていきます。
            </p>

            <div className="relative">
              <div className="flex items-center justify-center mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
                  <div className="content-card text-center category-card-blue">
                    <div className="bg-[var(--color-info)] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-3">
                      1
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Play</h4>
                    <p className="text-xs text-[var(--text-muted)]">
                      実際にプレイ
                    </p>
                  </div>

                  <div className="content-card text-center category-card-purple">
                    <div className="bg-[var(--color-purple)] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-3">
                      2
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Evaluate</h4>
                    <p className="text-xs text-[var(--text-muted)]">
                      評価・分析
                    </p>
                  </div>

                  <div className="content-card text-center category-card-pink">
                    <div className="bg-[var(--color-pink)] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-3">
                      3
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Adjust</h4>
                    <p className="text-xs text-[var(--text-muted)]">
                      カード調整
                    </p>
                  </div>

                  <div className="content-card text-center category-card-green">
                    <div className="bg-[var(--color-success)] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-3">
                      4
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Replay</h4>
                    <p className="text-xs text-[var(--text-muted)]">
                      再プレイ
                    </p>
                  </div>
                </div>
              </div>

              <div className="content-card bg-[var(--color-info-subtle)]">
                <h4 className="font-semibold mb-3">推奨イテレーション回数</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-[var(--color-info)] flex-shrink-0" />
                    <span>
                      <strong>初回テスト:</strong> 基本的なゲーム性とルールの確認（大きな問題点の洗い出し）
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-[var(--color-purple)] flex-shrink-0" />
                    <span>
                      <strong>2回目:</strong> バランス調整と細部のブラッシュアップ
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-[var(--color-success)] flex-shrink-0" />
                    <span>
                      <strong>3回目以降:</strong> 最終調整と他チームとのクロステスト
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Reflection Questions */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="worksheet-section">
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-2">
              <UserGroupIcon className="w-7 h-7 text-[var(--color-info)]" />
              振り返りの質問
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              プロジェクト全体を振り返り、以下の質問について考えてみましょう。
              チーム内でディスカッションすることで、学びがさらに深まります。
            </p>

            <div className="space-y-4">
              <div className="content-card">
                <h4 className="font-semibold mb-2 text-[var(--color-info)]">
                  Q1. ゲームで最も印象に残った危険物の数値データは何ですか？
                </h4>
                <p className="text-sm text-[var(--text-muted)] italic">
                  例: ガソリンの引火点-40&#8451;、二硫化炭素の発火点90&#8451;、特殊引火物の指定数量50Lなど
                </p>
              </div>

              <div className="content-card">
                <h4 className="font-semibold mb-2 text-[var(--color-purple)]">
                  Q2. カード作りを通じて覚えた危険物の知識を3つ挙げてください。
                </h4>
                <p className="text-sm text-[var(--text-muted)] italic">
                  例: 第4類は引火点で7分類される、油火災に水は厳禁、蒸気比重が大きいと床に溜まるなど
                </p>
              </div>

              <div className="content-card">
                <h4 className="font-semibold mb-2 text-[var(--color-pink)]">
                  Q3. バトルやクイズで間違えた問題はありましたか？何を学びましたか？
                </h4>
                <p className="text-sm text-[var(--text-muted)] italic">
                  例: アルコール火災に泡消火器を宣言したが耐アルコール泡でないとダメだった、指定数量の計算を間違えたなど
                </p>
              </div>

              <div className="content-card">
                <h4 className="font-semibold mb-2 text-[var(--color-success)]">
                  Q4. 乙4（危険物取扱者 乙種第4類）の資格試験に挑戦してみたいですか？
                </h4>
                <p className="text-sm text-[var(--text-muted)] italic">
                  このプロジェクトで学んだ知識は、乙4試験の「性質・消火」分野の基礎になります。興味があれば挑戦してみましょう。
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Quiz Section */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="glass-card">
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">
              理解度チェック
            </h3>

            {/* Quiz 1 */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">
                Q1. 引火点勝負: ガソリン(-40&#8451;) vs エタノール(13&#8451;)。勝者はどちらですか？
              </h4>
              <div className="space-y-3">
                <div
                  className={`quiz-option ${
                    showQuiz1Result
                      ? quiz1Answer === 'a'
                        ? 'correct'
                        : ''
                      : ''
                  }`}
                  onClick={() => !showQuiz1Result && handleQuiz1('a')}
                >
                  <strong>A.</strong> ガソリンの勝ち（引火点が低い方が強い）
                </div>
                <div
                  className={`quiz-option ${
                    showQuiz1Result
                      ? quiz1Answer === 'b'
                        ? 'incorrect'
                        : ''
                      : ''
                  }`}
                  onClick={() => !showQuiz1Result && handleQuiz1('b')}
                >
                  <strong>B.</strong> エタノールの勝ち（引火点が高い方が強い）
                </div>
                <div
                  className={`quiz-option ${
                    showQuiz1Result
                      ? quiz1Answer === 'c'
                        ? 'incorrect'
                        : ''
                      : ''
                  }`}
                  onClick={() => !showQuiz1Result && handleQuiz1('c')}
                >
                  <strong>C.</strong> 引き分け（同じ分類のため）
                </div>
                <div
                  className={`quiz-option ${
                    showQuiz1Result
                      ? quiz1Answer === 'd'
                        ? 'incorrect'
                        : ''
                      : ''
                  }`}
                  onClick={() => !showQuiz1Result && handleQuiz1('d')}
                >
                  <strong>D.</strong> 比較できない（引火点では勝負できない）
                </div>
              </div>
              {showQuiz1Result && (
                <div
                  className={`mt-4 p-4 rounded-lg ${
                    quiz1Answer === 'a'
                      ? 'bg-[var(--color-success-subtle)] border-2 border-[var(--color-success)]'
                      : 'bg-[var(--color-danger-subtle)] border-2 border-[var(--color-danger)]'
                  }`}
                >
                  {quiz1Answer === 'a' ? (
                    <p className="text-[var(--color-success)]">
                      正解です！引火点勝負では「低い方が勝ち」です。ガソリン(-40&#8451;)はエタノール(13&#8451;)よりはるかに低い温度で引火するため、より危険=より強いカードとなります。ガソリンは第1石油類、エタノールはアルコール類に分類されます。
                    </p>
                  ) : (
                    <p className="text-[var(--color-danger)]">
                      不正解です。正解は「A」です。引火点勝負では引火点が低い方が強いカードです。ガソリン(-40&#8451;)はエタノール(13&#8451;)より53&#8451;も低い温度で引火するため、ガソリンの勝ちです。
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Quiz 2 */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">
                Q2. 火災カード: エタノール（アルコール類）が燃えています。「水で消火！」と宣言しました。結果は？
              </h4>
              <div className="space-y-3">
                <div
                  className={`quiz-option ${
                    showQuiz2Result
                      ? quiz2Answer === 'a'
                        ? 'incorrect'
                        : ''
                      : ''
                  }`}
                  onClick={() => !showQuiz2Result && handleQuiz2('a')}
                >
                  <strong>A.</strong> 正解 -- エタノールは水溶性なので水で消火できる
                </div>
                <div
                  className={`quiz-option ${
                    showQuiz2Result
                      ? quiz2Answer === 'b'
                        ? 'incorrect'
                        : ''
                      : ''
                  }`}
                  onClick={() => !showQuiz2Result && handleQuiz2('b')}
                >
                  <strong>B.</strong> 正解 -- すべての火災に水は有効
                </div>
                <div
                  className={`quiz-option ${
                    showQuiz2Result
                      ? quiz2Answer === 'c'
                        ? 'correct'
                        : ''
                      : ''
                  }`}
                  onClick={() => !showQuiz2Result && handleQuiz2('c')}
                >
                  <strong>C.</strong> 不正解 -- 耐アルコール泡または霧状の水が正しい
                </div>
                <div
                  className={`quiz-option ${
                    showQuiz2Result
                      ? quiz2Answer === 'd'
                        ? 'incorrect'
                        : ''
                      : ''
                  }`}
                  onClick={() => !showQuiz2Result && handleQuiz2('d')}
                >
                  <strong>D.</strong> 不正解 -- アルコール火災は消火不可能
                </div>
              </div>
              {showQuiz2Result && (
                <div
                  className={`mt-4 p-4 rounded-lg ${
                    quiz2Answer === 'c'
                      ? 'bg-[var(--color-success-subtle)] border-2 border-[var(--color-success)]'
                      : 'bg-[var(--color-danger-subtle)] border-2 border-[var(--color-danger)]'
                  }`}
                >
                  {quiz2Answer === 'c' ? (
                    <p className="text-[var(--color-success)]">
                      正解です！エタノールは水溶性ですが、棒状の水では消火できません。耐アルコール泡消火器または霧状の水が正しい消火方法です。普通の泡消火器では泡がアルコールに溶けて消えてしまいます。
                    </p>
                  ) : (
                    <p className="text-[var(--color-danger)]">
                      不正解です。正解は「C」です。エタノールは水溶性ですが、「水で消火」は不正解です。耐アルコール泡消火器か霧状の水が正しい消火方法です。棒状の水では火が消えず、むしろ飛散のリスクがあります。
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Quiz 3 */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">
                Q3. 違反カード: ガソリン100L + 灯油500L + 重油1000L を貯蔵しています。指定数量の倍数は？
              </h4>
              <div className="space-y-3">
                <div
                  className={`quiz-option ${
                    showQuiz3Result
                      ? quiz3Answer === 'a'
                        ? 'incorrect'
                        : ''
                      : ''
                  }`}
                  onClick={() => !showQuiz3Result && handleQuiz3('a')}
                >
                  <strong>A.</strong> 0.5倍（許可不要）
                </div>
                <div
                  className={`quiz-option ${
                    showQuiz3Result
                      ? quiz3Answer === 'b'
                        ? 'incorrect'
                        : ''
                      : ''
                  }`}
                  onClick={() => !showQuiz3Result && handleQuiz3('b')}
                >
                  <strong>B.</strong> 1.0倍（許可不要の上限）
                </div>
                <div
                  className={`quiz-option ${
                    showQuiz3Result
                      ? quiz3Answer === 'c'
                        ? 'correct'
                        : ''
                      : ''
                  }`}
                  onClick={() => !showQuiz3Result && handleQuiz3('c')}
                >
                  <strong>C.</strong> 1.5倍（許可が必要）
                </div>
                <div
                  className={`quiz-option ${
                    showQuiz3Result
                      ? quiz3Answer === 'd'
                        ? 'incorrect'
                        : ''
                      : ''
                  }`}
                  onClick={() => !showQuiz3Result && handleQuiz3('d')}
                >
                  <strong>D.</strong> 3.0倍（重大な違反）
                </div>
              </div>
              {showQuiz3Result && (
                <div
                  className={`mt-4 p-4 rounded-lg ${
                    quiz3Answer === 'c'
                      ? 'bg-[var(--color-success-subtle)] border-2 border-[var(--color-success)]'
                      : 'bg-[var(--color-danger-subtle)] border-2 border-[var(--color-danger)]'
                  }`}
                >
                  {quiz3Answer === 'c' ? (
                    <p className="text-[var(--color-success)]">
                      正解です！ガソリン(第1石油類非水溶)100L/200L = 0.5 + 灯油(第2石油類非水溶)500L/1000L = 0.5 + 重油(第3石油類非水溶)1000L/2000L = 0.5。合計1.5倍で、1.0以上のため危険物施設の許可が必要です。
                    </p>
                  ) : (
                    <p className="text-[var(--color-danger)]">
                      不正解です。正解は「C」の1.5倍です。計算: ガソリン100/200 + 灯油500/1000 + 重油1000/2000 = 0.5 + 0.5 + 0.5 = 1.5倍。倍数が1.0以上なので許可が必要です。
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.section>

        {/* Completion Section */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="glass-card text-center bg-[var(--color-success-subtle)]">
            <TrophyIcon className="w-16 h-16 text-[var(--color-success)] mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-[var(--foreground)] mb-4">
              おめでとうございます
            </h3>
            <p className="text-lg text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
              全9レッスンを完了しました。危険物の知識とゲームデザイン、AI技術を組み合わせた
              オリジナルカードゲームの制作プロジェクトは大きな学びの機会だったはずです。
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
              <div className="content-card category-card-blue">
                <CheckCircleIcon className="w-8 h-8 text-[var(--color-info)] mx-auto mb-2" />
                <h4 className="font-semibold text-sm">危険物の知識</h4>
                <p className="text-xs text-[var(--text-muted)]">
                  実践的な学習
                </p>
              </div>
              <div className="content-card category-card-purple">
                <CheckCircleIcon className="w-8 h-8 text-[var(--color-purple)] mx-auto mb-2" />
                <h4 className="font-semibold text-sm">AI技術の活用</h4>
                <p className="text-xs text-[var(--text-muted)]">
                  画像生成とデザイン
                </p>
              </div>
              <div className="content-card category-card-green">
                <CheckCircleIcon className="w-8 h-8 text-[var(--color-success)] mx-auto mb-2" />
                <h4 className="font-semibold text-sm">チームワーク</h4>
                <p className="text-xs text-[var(--text-muted)]">
                  協働制作の経験
                </p>
              </div>
            </div>

            <p className="text-sm text-[var(--text-muted)] mb-6">
              この経験を今後の学習や実務に活かしてください。
            </p>
          </div>
        </motion.section>

        {/* Final CTAs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <div className="glass-card">
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6 text-center">
              次のアクション
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TransitionLink href="/rules" className="btn-primary inline-flex items-center gap-2">
                <ClipboardDocumentCheckIcon className="w-5 h-5" />
                詳細ルールを確認
              </TransitionLink>
              <TransitionLink href="/" className="btn-secondary inline-flex items-center gap-2">
                ホームに戻る
                <ChevronRightIcon className="w-5 h-5" />
              </TransitionLink>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
