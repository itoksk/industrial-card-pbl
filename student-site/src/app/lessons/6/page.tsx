'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TransitionLink from '@/components/TransitionLink';
import { ChevronRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function Lesson6() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
          <span className="text-gray-900 dark:text-gray-100">レッスン6</span>
        </motion.nav>

        {/* Hero Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="tag tag-phase-3 mb-4">Phase 3 - 制作</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">レッスン6</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            カードレイアウト設計
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            カードゲームの視覚デザインを設計します。情報の階層性と視認性を考慮した効果的なレイアウトを学びましょう。
          </p>

          {/* Learning Objectives */}
          <div className="glass-card mt-8">
            <h3 className="section-label">学習目標</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-200">
                  片面カードのメリットと制約を理解する
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-200">
                  カードの構成要素を理解し、情報の優先順位を決定する
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-200">
                  視認性とゲーム体験を考慮したレイアウトを設計する
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Content Section 1: Why Single-Sided */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass-card">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              なぜ片面カードなのか
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                今回のカードゲームでは、<strong>片面印刷のカードデザイン</strong>を採用します。これには以下の理由があります。
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="content-card category-card-blue">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600 dark:text-blue-400">
                    シンプルさ
                  </h4>
                  <p className="text-sm">
                    必要な情報を1面に集約することで、プレイ中の情報確認がスムーズになります。カードを裏返す手間がなく、ゲームの流れが途切れません。
                  </p>
                </div>
                <div className="content-card category-card-green">
                  <h4 className="font-semibold text-lg mb-2 text-green-600 dark:text-green-400">
                    印刷コスト
                  </h4>
                  <p className="text-sm">
                    片面印刷は両面印刷に比べてコストが低く、短期間で大量のカードを作成できます。試作とテストプレイを繰り返す際に有利です。
                  </p>
                </div>
                <div className="content-card category-card-purple">
                  <h4 className="font-semibold text-lg mb-2 text-purple-600 dark:text-purple-400">
                    デザインの制約
                  </h4>
                  <p className="text-sm">
                    限られたスペースにすべての情報を配置する必要があるため、情報の優先順位を明確にする訓練になります。デザイン思考の実践的な学びとなります。
                  </p>
                </div>
                <div className="content-card category-card-orange">
                  <h4 className="font-semibold text-lg mb-2 text-orange-600 dark:text-orange-400">
                    プロトタイピング
                  </h4>
                  <p className="text-sm">
                    印刷後すぐにテストプレイが可能です。改善点を発見したら、素早く修正して再印刷できます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Content Section 2: Card Anatomy */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="glass-card">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              カードの構成要素
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              カードは以下の要素で構成されます。各要素の役割を理解し、適切に配置することが重要です。
            </p>

            {/* Card Mockup */}
            <div className="max-w-md mx-auto my-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 border-4 border-blue-500">
                {/* Badge */}
                <div className="mb-4">
                  <div className="inline-block bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    カテゴリバッジ
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    カードの種類を一目で識別
                  </p>
                </div>

                {/* Title */}
                <div className="mb-4">
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    カード名称
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    カードの主題やアイテム名
                  </p>
                </div>

                {/* Illustration Area */}
                <div className="mb-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg aspect-video flex items-center justify-center">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    イラスト領域
                  </p>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                  視覚的な魅力を提供し、カードの内容を直感的に伝える
                </p>

                {/* Info Rows */}
                <div className="mb-4 space-y-2">
                  <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded">
                    <span className="text-sm font-medium">パラメータA</span>
                    <span className="text-sm font-bold">値</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded">
                    <span className="text-sm font-medium">パラメータB</span>
                    <span className="text-sm font-bold">値</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                  ゲーム上の数値情報（攻撃力、防御力など）
                </p>

                {/* Effect Text */}
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    効果テキスト: カードの特殊効果や使用条件を説明する文章。ゲームのルールやカード同士の相互作用を決定します。
                  </p>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  カードの効果や使用方法を説明
                </p>
              </div>
            </div>

            {/* Element Details */}
            <div className="space-y-4 mt-8">
              <div className="content-card">
                <h4 className="font-semibold text-lg mb-2 text-blue-600 dark:text-blue-400">
                  1. カテゴリバッジ
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  カードの種類（運搬、消火、規制など）を示すラベル。色分けすることで瞬時に識別できます。
                </p>
              </div>
              <div className="content-card">
                <h4 className="font-semibold text-lg mb-2 text-purple-600 dark:text-purple-400">
                  2. カード名称
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  危険物の名前や装備の名称。大きく読みやすいフォントで配置します。
                </p>
              </div>
              <div className="content-card">
                <h4 className="font-semibold text-lg mb-2 text-pink-600 dark:text-pink-400">
                  3. イラスト領域
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  カードの内容を視覚的に表現するエリア。AI生成イラストを配置します。カードの魅力を大きく左右する重要な要素です。
                </p>
              </div>
              <div className="content-card">
                <h4 className="font-semibold text-lg mb-2 text-orange-600 dark:text-orange-400">
                  4. 情報欄（パラメータ）
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  攻撃力、防御力、容量などの数値情報。ゲームバランスを決定する重要な要素です。
                </p>
              </div>
              <div className="content-card">
                <h4 className="font-semibold text-lg mb-2 text-green-600 dark:text-green-400">
                  5. 効果テキスト領域
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  カードの特殊効果やルールを説明するテキスト。簡潔で分かりやすい文章を心がけます。
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Content Section 3: Layout Tips */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="glass-card">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              レイアウト設計のポイント
            </h3>
            <div className="space-y-6">
              <div className="content-card category-card-blue">
                <h4 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
                  情報の階層性
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    最も重要な情報（カード名、イラスト）を大きく、目立つ位置に配置
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    数値情報は見やすくグループ化し、比較しやすいレイアウトに
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    効果テキストは読みやすいフォントサイズで、適切な行間を確保
                  </li>
                </ul>
              </div>

              <div className="content-card category-card-purple">
                <h4 className="font-semibold text-lg mb-3 text-purple-600 dark:text-purple-400">
                  視覚的な明瞭性
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">•</span>
                    十分な余白を設けて、情報が詰まりすぎないように
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">•</span>
                    コントラストを意識し、背景と文字の読みやすさを確保
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">•</span>
                    境界線や背景色で各セクションを明確に区別
                  </li>
                </ul>
              </div>

              <div className="content-card category-card-pink">
                <h4 className="font-semibold text-lg mb-3 text-pink-600 dark:text-pink-400">
                  カテゴリ別の色分け
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    運搬カード、消火カード、規制カードなど、種類ごとに色を統一
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    色覚多様性を考慮し、色だけでなく形状やアイコンも併用
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    一貫性を保ち、プレイヤーが直感的に理解できるデザインに
                  </li>
                </ul>
              </div>

              <div className="content-card category-card-green">
                <h4 className="font-semibold text-lg mb-3 text-green-600 dark:text-green-400">
                  ゲーム体験への配慮
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">•</span>
                    手に持ったときに重要な情報が隠れないレイアウト
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">•</span>
                    テーブル上に並べたときの視認性を考慮
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">•</span>
                    照明条件が悪い場所でも読みやすいデザイン
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Activity Section */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="worksheet-section">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              グループディスカッション: レイアウト設計
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              グループで以下のポイントについて話し合い、カードレイアウトの方針を決定しましょう。
            </p>
            <div className="space-y-4">
              <div className="content-card">
                <h4 className="font-semibold mb-2">ディスカッションポイント</h4>
                <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>カードサイズ</strong>: トレーディングカードサイズ（63mm × 88mm）を採用するか、別のサイズにするか
                  </li>
                  <li>
                    <strong>イラストの割合</strong>: カード全体のどれくらいをイラストに使うか（30%, 50%, 70%など）
                  </li>
                  <li>
                    <strong>色の使い方</strong>: カテゴリごとの色の割り当て方法と配色の方針
                  </li>
                  <li>
                    <strong>フォントの選択</strong>: 読みやすさと雰囲気のバランスをどう取るか
                  </li>
                  <li>
                    <strong>特殊効果の表現</strong>: アイコンを使うか、文章だけで説明するか
                  </li>
                </ol>
              </div>

              <div className="content-card bg-blue-50 dark:bg-blue-900/20">
                <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">
                  提出物
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    カードレイアウトのラフスケッチ（手描きまたはデジタル）
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    各要素の配置とサイズの比率を記載
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    カテゴリごとの色の定義（色名またはカラーコード）
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    デザインの意図と工夫点の説明（200字程度）
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Quiz Section */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="glass-card">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              理解度チェック
            </h3>

            {/* Quiz 1 */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">
                Q1. カードデザインにおいて最も優先すべき要素は何ですか？
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
                  <strong>A.</strong> 見た目の美しさ
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
                  <strong>B.</strong> 情報の視認性と階層性
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
                  <strong>C.</strong> できるだけ多くの情報を詰め込むこと
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
                  <strong>D.</strong> 印刷コストの最小化
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
                      正解です！情報の視認性と階層性は、プレイヤーがゲーム中にスムーズに情報を得るために最も重要な要素です。
                    </p>
                  ) : (
                    <p className="text-red-800 dark:text-red-200">
                      不正解です。正解は「B. 情報の視認性と階層性」です。美しさも重要ですが、まずプレイヤーが必要な情報を素早く正確に読み取れることが優先されます。
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Quiz 2 */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">
                Q2. カテゴリごとに色分けする際、色だけでなく他の要素も併用すべき理由は何ですか？
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
                  <strong>A.</strong> デザインをより複雑にするため
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
                  <strong>B.</strong> 印刷コストを増やすため
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
                  <strong>C.</strong> 色覚多様性への配慮と識別性の向上のため
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
                  <strong>D.</strong> トレンドに合わせるため
                </div>
              </div>
              {showQuiz2Result && (
                <div
                  className={`mt-4 p-4 rounded-lg ${
                    quiz2Answer === 'c'
                      ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500'
                      : 'bg-red-50 dark:bg-red-900/20 border-2 border-red-500'
                  }`}
                >
                  {quiz2Answer === 'c' ? (
                    <p className="text-green-800 dark:text-green-200">
                      正解です！色覚特性が異なる人でも識別できるよう、形状やアイコンなど複数の視覚的手がかりを組み合わせることが重要です。
                    </p>
                  ) : (
                    <p className="text-red-800 dark:text-red-200">
                      不正解です。正解は「C. 色覚多様性への配慮と識別性の向上のため」です。色だけに頼ると、一部のプレイヤーがカードを識別しにくくなる可能性があります。
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Quiz 3 */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">
                Q3. 片面カードのレイアウトを設計する上で特に注意すべき点は何ですか？
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
                  <strong>A.</strong> できるだけ多くの装飾を追加する
                </div>
                <div
                  className={`quiz-option ${
                    showQuiz3Result
                      ? quiz3Answer === 'b'
                        ? 'correct'
                        : ''
                      : ''
                  }`}
                  onClick={() => !showQuiz3Result && handleQuiz3('b')}
                >
                  <strong>B.</strong> 限られたスペースに必要な情報を優先順位をつけて配置する
                </div>
                <div
                  className={`quiz-option ${
                    showQuiz3Result
                      ? quiz3Answer === 'c'
                        ? 'incorrect'
                        : ''
                      : ''
                  }`}
                  onClick={() => !showQuiz3Result && handleQuiz3('c')}
                >
                  <strong>C.</strong> 全ての情報を同じサイズで配置する
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
                  <strong>D.</strong> 余白を可能な限り削除する
                </div>
              </div>
              {showQuiz3Result && (
                <div
                  className={`mt-4 p-4 rounded-lg ${
                    quiz3Answer === 'b'
                      ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500'
                      : 'bg-red-50 dark:bg-red-900/20 border-2 border-red-500'
                  }`}
                >
                  {quiz3Answer === 'b' ? (
                    <p className="text-green-800 dark:text-green-200">
                      正解です！片面カードでは、情報の優先順位を明確にし、最も重要な情報を強調して配置することが成功の鍵です。
                    </p>
                  ) : (
                    <p className="text-red-800 dark:text-red-200">
                      不正解です。正解は「B. 限られたスペースに必要な情報を優先順位をつけて配置する」です。スペースが限られているからこそ、情報の取捨選択と優先順位付けが重要になります。
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.section>

        {/* Next Lesson CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="glass-card text-center">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              次のステップ
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              レイアウト設計が完了したら、次はAIを使ってカードイラストを生成しましょう。
            </p>
            <TransitionLink href="/lessons/7" className="btn-primary inline-flex items-center gap-2">
              レッスン7: AIカード生成
              <ChevronRightIcon className="w-5 h-5" />
            </TransitionLink>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
