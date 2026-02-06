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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container-custom py-12">
        {/* Breadcrumb */}
        <motion.nav
          className="breadcrumb mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/" className="hover:text-blue-500 transition-colors">
            ホーム
          </Link>
          <ChevronRightIcon className="w-4 h-4" />
          <span className="text-gray-900 dark:text-gray-100">レッスン9</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-3">
            <TrophyIcon className="w-10 h-10 text-green-500" />
            テストプレイと評価
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            作成したカードゲームを実際にプレイし、ゲーム性や学習効果を評価します。
            実プレイから得られる気づきを通じて、最終的な完成度を高めましょう。
          </p>

          {/* Learning Objectives */}
          <div className="glass-card mt-8">
            <h3 className="section-label">学習目標</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-200">
                  テストプレイの手順と評価観点を理解する
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-200">
                  実際のプレイから物理的なUXの課題を発見する
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-200">
                  学習効果とゲームバランスを評価し、最終改善につなげる
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
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
              <PlayIcon className="w-7 h-7 text-blue-500" />
              ゲームルールの再確認
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              テストプレイを始める前に、基本的なゲームルールを確認しておきましょう。
            </p>

            <div className="space-y-4">
              <div className="content-card category-card-blue">
                <h4 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
                  基本の流れ
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>各プレイヤーは初期デッキから5枚のカードを手札に引く</li>
                  <li>ターン開始時に1枚ドロー</li>
                  <li>手札からカードをプレイし、アクションを実行</li>
                  <li>ターン終了を宣言し、次のプレイヤーへ</li>
                  <li>勝利条件を満たしたプレイヤーが勝利</li>
                </ol>
              </div>

              <div className="content-card category-card-purple">
                <h4 className="font-semibold text-lg mb-3 text-purple-600 dark:text-purple-400">
                  バトルの種類
                </h4>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>運搬バトル:</strong> 攻撃力を比較し、高い方が勝利。勝者は相手カードを獲得または除外。
                  </p>
                  <p>
                    <strong>消火バトル:</strong> 消火カードの効果値と危険物カードの防御力を比較。効果が上回れば成功。
                  </p>
                  <p>
                    <strong>規制適用:</strong> 規制カードをプレイし、特定の行動を制限または無効化。
                  </p>
                </div>
              </div>

              <div className="content-card category-card-pink">
                <h4 className="font-semibold text-lg mb-3 text-pink-600 dark:text-pink-400">
                  特殊ルール
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    効果カードは発動後もフィールドに残り、継続的に効果を発揮
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    一部のカードは組み合わせることで追加効果を発動（コンボシステム）
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    危険物の特性（引火性、腐食性など）による特殊な相互作用
                  </li>
                </ul>
              </div>

              <div className="content-card category-card-green">
                <h4 className="font-semibold text-lg mb-3 text-green-600 dark:text-green-400">
                  勝利条件
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    相手のデッキを0枚にする（デッキアウト勝利）
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    特定の枚数の危険物カードを安全に保管する（目標達成勝利）
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    特殊な勝利条件カードの効果を満たす（特殊勝利）
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 content-card bg-blue-50 dark:bg-blue-900/20">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>詳細なルールブック:</strong> より詳しいルールは
                <TransitionLink href="/rules" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
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
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
              <ClipboardDocumentCheckIcon className="w-7 h-7 text-purple-500" />
              テストプレイの手順
            </h3>

            <div className="space-y-4">
              <div className="content-card flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">準備（5分）</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• プレイ人数: 2〜4人を推奨</li>
                    <li>• ゲーム時間: 1ゲーム約20分</li>
                    <li>• カードをシャッフルし、各プレイヤーにデッキを配布</li>
                    <li>• 評価用紙とペンを用意</li>
                  </ul>
                </div>
              </div>

              <div className="content-card flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">プレイ中の観察（20分）</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    以下の観点を意識しながらプレイします。一人が記録係として観察するのも効果的です。
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• ルールは理解しやすいか</li>
                    <li>• カードの効果テキストは明確か</li>
                    <li>• ゲームバランスは適切か（一方的な展開にならないか）</li>
                    <li>• プレイ時間は適切か（長すぎず短すぎず）</li>
                    <li>• 物理的な操作性に問題はないか</li>
                  </ul>
                </div>
              </div>

              <div className="content-card flex items-start gap-4">
                <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">フィードバック記録（10分）</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    プレイ終了後、各プレイヤーが気づいた点を評価フォームに記入します。
                    良かった点と改善すべき点をバランスよく書き出しましょう。
                  </p>
                </div>
              </div>

              <div className="content-card flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">ディスカッション（15分）</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
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
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              実プレイで発見される物理的UX
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              デジタルツールでは気づかない、物理カードならではの気づきがあります。
              過去のテストプレイセッションで実際に発見された事例を紹介します。
            </p>

            <div className="space-y-6">
              <div className="content-card category-card-blue">
                <h4 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
                  効果カードはフィールドに残る
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>発見:</strong> 効果カードを使用後に捨て札にすると、その効果が持続しているのか分かりにくくなる問題が発覚。
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>対応:</strong> 効果カードは発動後もフィールドに残し、効果が終了するまで視覚的に確認できるようにルールを変更。
                </p>
              </div>

              <div className="content-card category-card-purple">
                <h4 className="font-semibold text-lg mb-3 text-purple-600 dark:text-purple-400">
                  指定された配置エリアの重要性
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>発見:</strong> カードを適当にテーブル上に置くと、どのカードがどの状態（手札、フィールド、捨て札）なのか混乱する。
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>対応:</strong> プレイマット上に「手札エリア」「フィールドエリア」「捨て札エリア」を明示し、
                  カードの配置ルールを明確化。
                </p>
              </div>

              <div className="content-card category-card-pink">
                <h4 className="font-semibold text-lg mb-3 text-pink-600 dark:text-pink-400">
                  デッキの種類分け
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>発見:</strong> 運搬、消火、規制カードを1つのデッキに混ぜると、
                  特定のカードタイプが引けず戦略が立てられないことがある。
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>対応:</strong> カテゴリごとに別々のデッキを用意し、
                  各ターンで引くデッキを選択できるルールに変更。
                </p>
              </div>

              <div className="content-card category-card-green">
                <h4 className="font-semibold text-lg mb-3 text-green-600 dark:text-green-400">
                  カードの視認性
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>発見:</strong> フォントサイズが小さすぎて、離れた位置から相手のカードが読めない。
                  特に効果テキストが長いカードで顕著。
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>対応:</strong> 効果テキストを簡潔にし、フォントサイズを最低10pt以上に統一。
                  重要な数値は大きく太字で表示。
                </p>
              </div>
            </div>

            <div className="mt-6 content-card bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500">
              <h4 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">
                あなたのチームでも新しい発見があるかもしれません
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
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
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              評価フォームの項目
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              テストプレイ後、以下の観点で評価を行います。
              実際の評価はGoogleフォームやスプレッドシートを使って記録するとデータ分析が容易です。
            </p>

            <div className="space-y-6">
              <div className="content-card">
                <h4 className="font-semibold mb-3">ゲーム性の評価（5段階評価）</h4>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                    <span>面白さ・エンゲージメント</span>
                    <span className="text-xs text-gray-500">1（低い）〜 5（高い）</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                    <span>ルールの分かりやすさ</span>
                    <span className="text-xs text-gray-500">1（低い）〜 5（高い）</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                    <span>ゲームバランス</span>
                    <span className="text-xs text-gray-500">1（低い）〜 5（高い）</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                    <span>戦略性の深さ</span>
                    <span className="text-xs text-gray-500">1（低い）〜 5（高い）</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                    <span>プレイ時間の適切さ</span>
                    <span className="text-xs text-gray-500">1（低い）〜 5（高い）</span>
                  </div>
                </div>
              </div>

              <div className="content-card">
                <h4 className="font-semibold mb-3">学習効果の評価（5段階評価）</h4>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                    <span>危険物知識の定着</span>
                    <span className="text-xs text-gray-500">1（低い）〜 5（高い）</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                    <span>安全管理の理解</span>
                    <span className="text-xs text-gray-500">1（低い）〜 5（高い）</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                    <span>実務への応用可能性</span>
                    <span className="text-xs text-gray-500">1（低い）〜 5（高い）</span>
                  </div>
                </div>
              </div>

              <div className="content-card">
                <h4 className="font-semibold mb-3">自由記述欄</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                    <p className="text-sm font-medium mb-1">良かった点</p>
                    <p className="text-xs text-gray-500">
                      特に楽しかった要素、よく機能していたメカニクスなど
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                    <p className="text-sm font-medium mb-1">改善すべき点</p>
                    <p className="text-xs text-gray-500">
                      分かりにくかったルール、バランスの問題、物理的な操作性の課題など
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                    <p className="text-sm font-medium mb-1">学んだこと</p>
                    <p className="text-xs text-gray-500">
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
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
              <SparklesIcon className="w-7 h-7 text-orange-500" />
              反復改善サイクル
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              テストプレイと改善は1回で終わりではありません。
              以下のサイクルを繰り返すことで、ゲームの完成度を高めていきます。
            </p>

            <div className="relative">
              <div className="flex items-center justify-center mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
                  <div className="content-card text-center category-card-blue">
                    <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-3">
                      1
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Play</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      実際にプレイ
                    </p>
                  </div>

                  <div className="content-card text-center category-card-purple">
                    <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-3">
                      2
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Evaluate</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      評価・分析
                    </p>
                  </div>

                  <div className="content-card text-center category-card-pink">
                    <div className="bg-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-3">
                      3
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Adjust</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      カード調整
                    </p>
                  </div>

                  <div className="content-card text-center category-card-green">
                    <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-3">
                      4
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Replay</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      再プレイ
                    </p>
                  </div>
                </div>
              </div>

              <div className="content-card bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20">
                <h4 className="font-semibold mb-3">推奨イテレーション回数</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span>
                      <strong>初回テスト:</strong> 基本的なゲーム性とルールの確認（大きな問題点の洗い出し）
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span>
                      <strong>2回目:</strong> バランス調整と細部のブラッシュアップ
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
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
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
              <UserGroupIcon className="w-7 h-7 text-blue-500" />
              振り返りの質問
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              プロジェクト全体を振り返り、以下の質問について考えてみましょう。
              チーム内でディスカッションすることで、学びがさらに深まります。
            </p>

            <div className="space-y-4">
              <div className="content-card">
                <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">
                  Q1. カード作成を通じて、どのような危険物の知識を学びましたか？
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  例: 引火性液体の分類、消火方法の選択基準、保管時の注意点など
                </p>
              </div>

              <div className="content-card">
                <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">
                  Q2. ゲームバランスの調整で最も難しかった点は何ですか？
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  例: 特定のカードが強すぎる、ゲーム展開が単調になる、勝利条件が達成しにくいなど
                </p>
              </div>

              <div className="content-card">
                <h4 className="font-semibold mb-2 text-pink-600 dark:text-pink-400">
                  Q3. もし次にカードを作るとしたら、どのように改善しますか？
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  例: より多様なカードタイプ、複雑な相互作用、新しいメカニクスの導入など
                </p>
              </div>

              <div className="content-card">
                <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">
                  Q4. このプロジェクトで最も価値のあった経験は何ですか？
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  例: チームワーク、問題解決能力、創造的思考、技術スキルの習得など
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
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              理解度チェック
            </h3>

            {/* Quiz 1 */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">
                Q1. テストプレイで最も重要な観点は何ですか？
              </h4>
              <div className="space-y-3">
                <div
                  className={`quiz-option ${
                    showQuiz1Result
                      ? quiz1Answer === 'a'
                        ? 'incorrect'
                        : ''
                      : ''
                  }`}
                  onClick={() => !showQuiz1Result && handleQuiz1('a')}
                >
                  <strong>A.</strong> できるだけ早くゲームを終わらせること
                </div>
                <div
                  className={`quiz-option ${
                    showQuiz1Result
                      ? quiz1Answer === 'b'
                        ? 'correct'
                        : ''
                      : ''
                  }`}
                  onClick={() => !showQuiz1Result && handleQuiz1('b')}
                >
                  <strong>B.</strong> ゲーム性、学習効果、物理的UXを多角的に評価すること
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
                  <strong>C.</strong> 勝者を決定すること
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
                  <strong>D.</strong> ルールを完全に理解すること
                </div>
              </div>
              {showQuiz1Result && (
                <div
                  className={`mt-4 p-4 rounded-lg ${
                    quiz1Answer === 'b'
                      ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500'
                      : 'bg-red-50 dark:bg-red-900/20 border-2 border-red-500'
                  }`}
                >
                  {quiz1Answer === 'b' ? (
                    <p className="text-green-800 dark:text-green-200">
                      正解です！テストプレイは単にゲームをプレイするだけでなく、ゲームデザイン、学習効果、実際の使用感など多面的に評価することが重要です。
                    </p>
                  ) : (
                    <p className="text-red-800 dark:text-red-200">
                      不正解です。正解は「B」です。テストプレイの目的は、ゲームの包括的な品質評価と改善点の発見にあります。
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Quiz 2 */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">
                Q2. 実プレイで発見された「効果カードはフィールドに残る」というルール変更の理由は何ですか？
              </h4>
              <div className="space-y-3">
                <div
                  className={`quiz-option ${
                    showQuiz2Result
                      ? quiz2Answer === 'a'
                        ? 'correct'
                        : ''
                      : ''
                  }`}
                  onClick={() => !showQuiz2Result && handleQuiz2('a')}
                >
                  <strong>A.</strong> 効果が持続しているかを視覚的に確認できるようにするため
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
                  <strong>B.</strong> カードの枚数を減らすため
                </div>
                <div
                  className={`quiz-option ${
                    showQuiz2Result
                      ? quiz2Answer === 'c'
                        ? 'incorrect'
                        : ''
                      : ''
                  }`}
                  onClick={() => !showQuiz2Result && handleQuiz2('c')}
                >
                  <strong>C.</strong> ゲームを複雑にするため
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
                  <strong>D.</strong> 印刷コストを削減するため
                </div>
              </div>
              {showQuiz2Result && (
                <div
                  className={`mt-4 p-4 rounded-lg ${
                    quiz2Answer === 'a'
                      ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500'
                      : 'bg-red-50 dark:bg-red-900/20 border-2 border-red-500'
                  }`}
                >
                  {quiz2Answer === 'a' ? (
                    <p className="text-green-800 dark:text-green-200">
                      正解です！物理カードでは、効果が発動中であることを視覚的に示すことが重要です。フィールドに残すことで、プレイヤーが状態を把握しやすくなります。
                    </p>
                  ) : (
                    <p className="text-red-800 dark:text-red-200">
                      不正解です。正解は「A」です。実プレイでは視覚的なフィードバックがゲーム体験に大きく影響することが分かりました。
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Quiz 3 */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">
                Q3. 反復改善サイクルで推奨されるイテレーション回数の最低回数は？
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
                  <strong>A.</strong> 1回（一度テストすれば十分）
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
                  <strong>B.</strong> 2回（初回と最終確認）
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
                  <strong>C.</strong> 3回以上（初回、バランス調整、最終調整）
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
                  <strong>D.</strong> 10回以上（完璧になるまで）
                </div>
              </div>
              {showQuiz3Result && (
                <div
                  className={`mt-4 p-4 rounded-lg ${
                    quiz3Answer === 'c'
                      ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500'
                      : 'bg-red-50 dark:bg-red-900/20 border-2 border-red-500'
                  }`}
                >
                  {quiz3Answer === 'c' ? (
                    <p className="text-green-800 dark:text-green-200">
                      正解です！最低3回のイテレーションを推奨します。初回で大きな問題を発見し、2回目でバランス調整、3回目で最終調整を行うのが効果的です。
                    </p>
                  ) : (
                    <p className="text-red-800 dark:text-red-200">
                      不正解です。正解は「C」です。複数回のテストプレイと改善を繰り返すことで、ゲームの完成度が高まります。
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
          <div className="glass-card text-center bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
            <TrophyIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              おめでとうございます
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              全9レッスンを完了しました。危険物の知識とゲームデザイン、AI技術を組み合わせた
              オリジナルカードゲームの制作プロジェクトは大きな学びの機会だったはずです。
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
              <div className="content-card category-card-blue">
                <CheckCircleIcon className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h4 className="font-semibold text-sm">危険物の知識</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  実践的な学習
                </p>
              </div>
              <div className="content-card category-card-purple">
                <CheckCircleIcon className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <h4 className="font-semibold text-sm">AI技術の活用</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  画像生成とデザイン
                </p>
              </div>
              <div className="content-card category-card-green">
                <CheckCircleIcon className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h4 className="font-semibold text-sm">チームワーク</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  協働制作の経験
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
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
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
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
