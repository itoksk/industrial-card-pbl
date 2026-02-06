'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TransitionLink from '@/components/TransitionLink';
import { ChevronRightIcon, CheckCircleIcon, TableCellsIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

export default function Lesson8() {
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
          <span className="text-gray-900 dark:text-gray-100">レッスン8</span>
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
            <span className="gradient-text">レッスン8</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-3">
            <TableCellsIcon className="w-10 h-10 text-blue-500" />
            一括作成と改善
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            CSVファイルを使った効率的なカード一括生成と、品質向上のための改善プロセスを学びます。
          </p>

          {/* Learning Objectives */}
          <div className="glass-card mt-8">
            <h3 className="section-label">学習目標</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-200">
                  CSVを使った一括カード生成のワークフローを理解する
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-200">
                  生成されたカードの品質を評価し、改善点を特定する
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-200">
                  polishGameEffectTextの仕組みを理解し、効果テキストを洗練する
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Content Section 1: CSV Overview */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass-card">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              CSV一括作成の概要
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                数十枚のカードを個別に作成するのは時間がかかります。<strong>CSV（カンマ区切り値）ファイル</strong>を使うことで、
                複数のカードデータを一度に管理し、効率的に生成できます。
              </p>

              <div className="content-card bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                <h4 className="font-semibold text-lg mb-3">CSVファイルとは</h4>
                <p className="text-sm mb-3">
                  CSVは、表形式のデータをテキストファイルで保存する形式です。
                  ExcelやGoogleスプレッドシートで編集でき、データの一括管理に適しています。
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded font-mono text-xs overflow-x-auto">
                  <pre>
{`カテゴリ,カード名,攻撃力,防御力,効果テキスト
運搬,大型タンクローリー,30,40,危険物を大量に運搬できる
消火,化学消火器,50,20,特殊な化学物質の火災に有効
規制,立入禁止標識,10,60,エリアへのアクセスを制限する`}
                  </pre>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="content-card category-card-blue">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600 dark:text-blue-400">
                    効率性
                  </h4>
                  <p className="text-sm">
                    一度に数十枚、数百枚のカードデータを準備し、まとめて生成できます。
                  </p>
                </div>
                <div className="content-card category-card-purple">
                  <h4 className="font-semibold text-lg mb-2 text-purple-600 dark:text-purple-400">
                    一貫性
                  </h4>
                  <p className="text-sm">
                    データ形式が統一されているため、ミスが少なく、品質が安定します。
                  </p>
                </div>
                <div className="content-card category-card-pink">
                  <h4 className="font-semibold text-lg mb-2 text-pink-600 dark:text-pink-400">
                    修正容易性
                  </h4>
                  <p className="text-sm">
                    スプレッドシートで一括編集できるため、パラメータ調整が簡単です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Content Section 2: CSV Format */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="glass-card">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              CSVテンプレートの形式
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              カード生成ツールに対応したCSVファイルには、以下のカラム（列）を含める必要があります。
            </p>

            <div className="overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>カラム名</th>
                    <th>説明</th>
                    <th>例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-mono text-sm">category</td>
                    <td>カードのカテゴリ</td>
                    <td className="text-sm">運搬、消火、規制</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-sm">name</td>
                    <td>カード名称</td>
                    <td className="text-sm">大型タンクローリー</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-sm">attack</td>
                    <td>攻撃力（数値）</td>
                    <td className="text-sm">30</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-sm">defense</td>
                    <td>防御力（数値）</td>
                    <td className="text-sm">40</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-sm">effect</td>
                    <td>カード効果の説明文</td>
                    <td className="text-sm">危険物を大量に運搬できる</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-sm">illustration_url</td>
                    <td>イラスト画像のURL（オプション）</td>
                    <td className="text-sm">https://example.com/image.png</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 content-card bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500">
              <h4 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">
                データ入力のポイント
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  各セルに改行を含めないようにする（効果テキストは一行で記述）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  数値データ（攻撃力、防御力）は必ず半角数字で入力
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  カテゴリ名は統一する（「運搬」と「うんぱん」を混在させない）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  イラストURLは事前にAIで生成し、アップロードしたものを使用
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Content Section 3: Workflow */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="glass-card">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
              <ArrowPathIcon className="w-7 h-7 text-blue-500" />
              データ入力ワークフロー
            </h3>

            <div className="space-y-4">
              <div className="content-card flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">スプレッドシート作成</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    GoogleスプレッドシートまたはExcelで、CSVテンプレートに沿ったシートを作成します。
                    見出し行に「category, name, attack, defense, effect, illustration_url」を記入。
                  </p>
                </div>
              </div>

              <div className="content-card flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">カードデータ入力</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    各行にカード情報を入力します。チーム内で分担して効率化しましょう。
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs">
                    <strong>入力例:</strong>
                    <br />
                    運搬, ガソリン輸送車, 35, 30, 引火性液体を安全に運搬できる, https://...
                  </div>
                </div>
              </div>

              <div className="content-card flex items-start gap-4">
                <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">CSV形式でエクスポート</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    「ファイル」→「ダウンロード」→「カンマ区切り値（.csv）」を選択してエクスポートします。
                    文字コードは<strong>UTF-8</strong>を選択してください。
                  </p>
                </div>
              </div>

              <div className="content-card flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">カードジェネレーターにアップロード</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    card-generatorツールのCSVアップロード機能を使い、作成したCSVファイルを読み込ませます。
                    システムが自動的にすべてのカードを生成します。
                  </p>
                </div>
              </div>

              <div className="content-card flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">生成結果の確認と修正</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    生成されたカードをプレビューで確認し、問題があればCSVを修正して再アップロードします。
                    この反復プロセスで品質を向上させていきます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Content Section 4: Improvement Process */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="glass-card">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              カード改善プロセス
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              一括生成後、以下の観点からカードをレビューし、改善を繰り返しましょう。
            </p>

            <div className="space-y-6">
              <div className="content-card category-card-blue">
                <h4 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
                  正確性のチェック
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    危険物の分類や特性が正しく反映されているか
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    効果テキストが実際の危険物取扱の知識と一致しているか
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    数値パラメータが妥当な範囲に収まっているか
                  </li>
                </ul>
              </div>

              <div className="content-card category-card-purple">
                <h4 className="font-semibold text-lg mb-3 text-purple-600 dark:text-purple-400">
                  ゲームバランスの調整
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    特定のカードが強すぎたり弱すぎたりしないか
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    カテゴリ間のバランスが取れているか
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    すべてのカードに存在意義があるか（使われないカードがないか）
                  </li>
                </ul>
              </div>

              <div className="content-card category-card-pink">
                <h4 className="font-semibold text-lg mb-3 text-pink-600 dark:text-pink-400">
                  効果テキストの洗練
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  <strong>polishGameEffectText</strong>という機能が、学生が入力した効果テキストを整頓します。
                  これにより、表現が統一され、プレイヤーにとって理解しやすいテキストになります。
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                  <p className="text-xs font-semibold mb-2">変換例:</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                    <strong>入力:</strong> 危険物を大量に運搬できる
                  </p>
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    <strong>出力:</strong> 【運搬能力】危険物を大量に運搬できる。この効果は自ターンに1度だけ使用可能。
                  </p>
                </div>
              </div>

              <div className="content-card category-card-green">
                <h4 className="font-semibold text-lg mb-3 text-green-600 dark:text-green-400">
                  視覚的一貫性
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    イラストのスタイルが統一されているか
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    カテゴリごとの色分けが一貫しているか
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    フォントサイズや配置に統一感があるか
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Content Section 5: Quality Checklist */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="worksheet-section">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              品質チェックリスト
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              生成されたカードセット全体をチームでレビューする際に、以下のチェックリストを活用しましょう。
            </p>

            <div className="content-card">
              <h4 className="font-semibold mb-4">チェック項目</h4>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded transition-colors">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    すべてのカードに正確な危険物知識が反映されている
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded transition-colors">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    カードの攻撃力と防御力のバランスが適切である
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded transition-colors">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    効果テキストが簡潔で理解しやすい
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded transition-colors">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    イラストのスタイルがすべてのカードで統一されている
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded transition-colors">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    カテゴリごとの色分けが明確で識別しやすい
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded transition-colors">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    テキストが読みやすく、視認性が確保されている
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded transition-colors">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    すべてのカードに存在意義があり、ゲームで使われる可能性がある
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded transition-colors">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    印刷品質が十分で、解像度が適切である
                  </span>
                </label>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Team Review Exercise */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="glass-card">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              チームレビュー演習
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              グループ内で以下の手順に従ってカードセットをレビューし、改善案を出し合いましょう。
            </p>

            <div className="space-y-4">
              <div className="content-card">
                <h4 className="font-semibold mb-2">ステップ1: 個別レビュー（10分）</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  各メンバーが独立して全カードを確認し、気づいた問題点をメモします。
                </p>
              </div>

              <div className="content-card">
                <h4 className="font-semibold mb-2">ステップ2: 問題点の共有（15分）</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  各メンバーが見つけた問題点を共有し、ホワイトボードやスプレッドシートにリストアップします。
                </p>
              </div>

              <div className="content-card">
                <h4 className="font-semibold mb-2">ステップ3: 優先順位付け（10分）</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  問題点を「重要度」と「修正の難易度」で評価し、どれから取り組むか優先順位を決めます。
                </p>
              </div>

              <div className="content-card">
                <h4 className="font-semibold mb-2">ステップ4: 改善案の検討（20分）</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  優先度の高い問題について、具体的な改善案を議論します。数値調整、テキスト修正、イラスト再生成などの対応を決定します。
                </p>
              </div>

              <div className="content-card">
                <h4 className="font-semibold mb-2">ステップ5: 修正と再生成</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  CSVファイルを修正し、再度カードを生成します。この反復プロセスを経て、高品質なカードセットを完成させます。
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
                Q1. CSVファイルを使った一括作成の最大のメリットは何ですか？
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
                  <strong>A.</strong> カードのデザインが自動的に美しくなる
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
                  <strong>B.</strong> 複数のカードデータを効率的に管理し、一度に生成できる
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
                  <strong>C.</strong> プログラミング知識が不要になる
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
                  <strong>D.</strong> カードの印刷コストが削減される
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
                      正解です！CSVを使うことで、数十枚から数百枚のカードデータを一括管理し、効率的に生成できるのが最大のメリットです。
                    </p>
                  ) : (
                    <p className="text-red-800 dark:text-red-200">
                      不正解です。正解は「B」です。CSV形式は表形式のデータを扱いやすくし、大量のカードを効率的に作成できます。
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Quiz 2 */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">
                Q2. polishGameEffectTextの役割は何ですか？
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
                  <strong>A.</strong> イラストの品質を向上させる
                </div>
                <div
                  className={`quiz-option ${
                    showQuiz2Result
                      ? quiz2Answer === 'b'
                        ? 'correct'
                        : ''
                      : ''
                  }`}
                  onClick={() => !showQuiz2Result && handleQuiz2('b')}
                >
                  <strong>B.</strong> 学生が入力した効果テキストを統一された形式に整頓する
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
                  <strong>C.</strong> カードのレイアウトを自動調整する
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
                  <strong>D.</strong> プロンプトを自動生成する
                </div>
              </div>
              {showQuiz2Result && (
                <div
                  className={`mt-4 p-4 rounded-lg ${
                    quiz2Answer === 'b'
                      ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500'
                      : 'bg-red-50 dark:bg-red-900/20 border-2 border-red-500'
                  }`}
                >
                  {quiz2Answer === 'b' ? (
                    <p className="text-green-800 dark:text-green-200">
                      正解です！polishGameEffectTextは、学生が入力した効果テキストを統一された形式に整形し、ゲームとして読みやすくする機能です。
                    </p>
                  ) : (
                    <p className="text-red-800 dark:text-red-200">
                      不正解です。正解は「B」です。この機能は効果テキストの表現を統一し、プレイヤーにとって理解しやすい形に整えます。
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Quiz 3 */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">
                Q3. カード改善プロセスにおいて最も重要な観点はどれですか？
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
                  <strong>A.</strong> カードの枚数を増やすこと
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
                  <strong>B.</strong> 最も派手なイラストにすること
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
                  <strong>C.</strong> 正確性、ゲームバランス、視認性、一貫性を総合的に評価すること
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
                  <strong>D.</strong> できるだけ早く完成させること
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
                      正解です！カード改善では、正確性、ゲームバランス、視認性、一貫性などを総合的に評価し、バランスの取れた品質を目指すことが重要です。
                    </p>
                  ) : (
                    <p className="text-red-800 dark:text-red-200">
                      不正解です。正解は「C」です。多角的な評価と反復的な改善により、高品質なカードセットを実現できます。
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
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="glass-card text-center">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              次のステップ
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              カードセットが完成したら、いよいよテストプレイと評価に進みましょう。
            </p>
            <TransitionLink href="/lessons/9" className="btn-primary inline-flex items-center gap-2">
              レッスン9: テストプレイと評価
              <ChevronRightIcon className="w-5 h-5" />
            </TransitionLink>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
