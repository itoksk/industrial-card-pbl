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
          <span className="text-[var(--foreground)]">レッスン8</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-3">
            <TableCellsIcon className="w-10 h-10 text-[var(--color-info)]" />
            一括作成と改善
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl">
            CSVファイルを使った効率的なカード一括生成と、品質向上のための改善プロセスを学びます。
          </p>

          {/* Learning Objectives */}
          <div className="glass-card mt-8">
            <h3 className="section-label">学習目標</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--text-secondary)]">
                  CSVを使った一括カード生成のワークフローを理解する
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--text-secondary)]">
                  生成されたカードの品質を評価し、改善点を特定する
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--text-secondary)]">
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
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">
              CSV一括作成の概要
            </h3>
            <div className="space-y-4 text-[var(--text-secondary)]">
              <p>
                数十枚のカードを個別に作成するのは時間がかかります。<strong>CSV（カンマ区切り値）ファイル</strong>を使うことで、
                複数のカードデータを一度に管理し、効率的に生成できます。
              </p>

              <div className="content-card bg-[var(--color-info-subtle)]">
                <h4 className="font-semibold text-lg mb-3">CSVファイルとは</h4>
                <p className="text-sm mb-3">
                  CSVは、表形式のデータをテキストファイルで保存する形式です。
                  ExcelやGoogleスプレッドシートで編集でき、データの一括管理に適しています。
                </p>
                <div className="bg-[var(--surface)] p-4 rounded font-mono text-xs overflow-x-auto">
                  <pre>
{`分類,物質名,引火点,発火点,比重,蒸気比重,指定数量,水溶性,消火方法
第1石油類,ガソリン,-40,約300,0.65-0.75,3-4,200,非水溶,泡/粉末/CO2
第2石油類,灯油,40以上,220,0.8,4.5,1000,非水溶,泡/粉末/CO2
アルコール類,エタノール,13,363,0.79,1.6,400,水溶,耐アルコール泡/霧状水`}
                  </pre>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="content-card category-card-blue">
                  <h4 className="font-semibold text-lg mb-2 text-[var(--color-info)]">
                    効率性
                  </h4>
                  <p className="text-sm">
                    一度に数十枚、数百枚のカードデータを準備し、まとめて生成できます。
                  </p>
                </div>
                <div className="content-card category-card-purple">
                  <h4 className="font-semibold text-lg mb-2 text-[var(--color-purple)]">
                    一貫性
                  </h4>
                  <p className="text-sm">
                    データ形式が統一されているため、ミスが少なく、品質が安定します。
                  </p>
                </div>
                <div className="content-card category-card-pink">
                  <h4 className="font-semibold text-lg mb-2 text-[var(--color-pink)]">
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
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">
              CSVテンプレートの形式
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
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
                    <td className="font-mono text-sm">分類</td>
                    <td>第4類の7分類名</td>
                    <td className="text-sm">第1石油類、アルコール類</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-sm">物質名</td>
                    <td>危険物の名称</td>
                    <td className="text-sm">ガソリン、エタノール</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-sm">引火点</td>
                    <td>引火点（度C）</td>
                    <td className="text-sm">-40、13、40以上</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-sm">発火点</td>
                    <td>発火点（度C）</td>
                    <td className="text-sm">約300、363</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-sm">比重</td>
                    <td>液体の比重（水=1）</td>
                    <td className="text-sm">0.65-0.75、0.79</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-sm">蒸気比重</td>
                    <td>蒸気の比重（空気=1）</td>
                    <td className="text-sm">3-4、1.6</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-sm">指定数量</td>
                    <td>指定数量（L）</td>
                    <td className="text-sm">200、400、1000</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-sm">水溶性</td>
                    <td>水溶性/非水溶性</td>
                    <td className="text-sm">水溶、非水溶</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-sm">消火方法</td>
                    <td>有効な消火方法</td>
                    <td className="text-sm">泡/粉末/CO2</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 content-card bg-[var(--color-warning-subtle)] border-l-4 border-[var(--color-warning)]">
              <h4 className="font-semibold mb-2 text-[var(--color-warning)]">
                データ入力のポイント
              </h4>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-warning)] font-bold">•</span>
                  引火点・発火点の数値は教科書やMSDSで確認してから入力する
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-warning)] font-bold">•</span>
                  数値データ（引火点、比重、蒸気比重）は必ず半角数字で入力
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-warning)] font-bold">•</span>
                  分類名は正式名称で統一する（「第1石油類」と「1石」を混在させない）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-warning)] font-bold">•</span>
                  水溶性/非水溶性は消火方法と整合性があるか必ず確認
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
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-2">
              <ArrowPathIcon className="w-7 h-7 text-[var(--color-info)]" />
              データ入力ワークフロー
            </h3>

            <div className="space-y-4">
              <div className="content-card flex items-start gap-4">
                <div className="bg-[var(--color-info)] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">スプレッドシート作成</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    GoogleスプレッドシートまたはExcelで、CSVテンプレートに沿ったシートを作成します。
                    見出し行に「category, name, attack, defense, effect, illustration_url」を記入。
                  </p>
                </div>
              </div>

              <div className="content-card flex items-start gap-4">
                <div className="bg-[var(--color-purple)] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">カードデータ入力</h4>
                  <p className="text-sm text-[var(--text-secondary)] mb-2">
                    各行にカード情報を入力します。チーム内で分担して効率化しましょう。
                  </p>
                  <div className="bg-[var(--section-alt-bg)] p-3 rounded text-xs">
                    <strong>入力例:</strong>
                    <br />
                    特殊引火物, ジエチルエーテル, -45, 160, 0.71, 2.6, 50, 非水溶, 泡/粉末/CO2
                  </div>
                </div>
              </div>

              <div className="content-card flex items-start gap-4">
                <div className="bg-[var(--color-pink)] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">CSV形式でエクスポート</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    「ファイル」→「ダウンロード」→「カンマ区切り値（.csv）」を選択してエクスポートします。
                    文字コードは<strong>UTF-8</strong>を選択してください。
                  </p>
                </div>
              </div>

              <div className="content-card flex items-start gap-4">
                <div className="bg-[var(--accent)] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">カードジェネレーターにアップロード</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    card-generatorツールのCSVアップロード機能を使い、作成したCSVファイルを読み込ませます。
                    システムが自動的にすべてのカードを生成します。
                  </p>
                </div>
              </div>

              <div className="content-card flex items-start gap-4">
                <div className="bg-[var(--color-success)] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">生成結果の確認と修正</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
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
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">
              カード改善プロセス
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              一括生成後、以下の観点からカードをレビューし、改善を繰り返しましょう。
            </p>

            <div className="space-y-6">
              <div className="content-card category-card-blue">
                <h4 className="font-semibold text-lg mb-3 text-[var(--color-info)]">
                  正確性のチェック
                </h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-[var(--color-info)] flex-shrink-0" />
                    危険物の分類や特性が正しく反映されているか
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-[var(--color-info)] flex-shrink-0" />
                    効果テキストが実際の危険物取扱の知識と一致しているか
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-[var(--color-info)] flex-shrink-0" />
                    数値パラメータが妥当な範囲に収まっているか
                  </li>
                </ul>
              </div>

              <div className="content-card category-card-purple">
                <h4 className="font-semibold text-lg mb-3 text-[var(--color-purple)]">
                  ゲームバランスの調整
                </h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-[var(--color-purple)] flex-shrink-0" />
                    特定のカードが強すぎたり弱すぎたりしないか
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-[var(--color-purple)] flex-shrink-0" />
                    カテゴリ間のバランスが取れているか
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-[var(--color-purple)] flex-shrink-0" />
                    すべてのカードに存在意義があるか（使われないカードがないか）
                  </li>
                </ul>
              </div>

              <div className="content-card category-card-pink">
                <h4 className="font-semibold text-lg mb-3 text-[var(--color-pink)]">
                  効果テキストの洗練
                </h4>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  <strong>polishGameEffectText</strong>という機能が、学生が入力した効果テキストを整頓します。
                  これにより、表現が統一され、プレイヤーにとって理解しやすいテキストになります。
                </p>
                <div className="bg-[var(--section-alt-bg)] p-4 rounded">
                  <p className="text-xs font-semibold mb-2">変換例:</p>
                  <p className="text-xs text-[var(--text-muted)] mb-1">
                    <strong>入力:</strong> 危険物を大量に運搬できる
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    <strong>出力:</strong> 【運搬能力】危険物を大量に運搬できる。この効果は自ターンに1度だけ使用可能。
                  </p>
                </div>
              </div>

              <div className="content-card category-card-green">
                <h4 className="font-semibold text-lg mb-3 text-[var(--color-success)]">
                  視覚的一貫性
                </h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-[var(--color-success)] flex-shrink-0" />
                    イラストのスタイルが統一されているか
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-[var(--color-success)] flex-shrink-0" />
                    カテゴリごとの色分けが一貫しているか
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-[var(--color-success)] flex-shrink-0" />
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
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">
              品質チェックリスト
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              生成されたカードセット全体をチームでレビューする際に、以下のチェックリストを活用しましょう。
            </p>

            <div className="content-card">
              <h4 className="font-semibold mb-4">専門知識チェック</h4>
              <div className="space-y-3 mb-6">
                <label className="flex items-start gap-3 cursor-pointer hover:bg-[var(--section-alt-bg)] p-2 rounded transition-colors">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-[var(--text-secondary)]">
                    引火点データは教科書/MSDSの値と一致しているか
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer hover:bg-[var(--section-alt-bg)] p-2 rounded transition-colors">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-[var(--text-secondary)]">
                    水溶性/非水溶性の記載は正しいか（エタノール=水溶、ガソリン=非水溶）
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer hover:bg-[var(--section-alt-bg)] p-2 rounded transition-colors">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-[var(--text-secondary)]">
                    消火方法は水溶性区分と整合しているか（非水溶性に霧状水を指定していないか）
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer hover:bg-[var(--section-alt-bg)] p-2 rounded transition-colors">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-[var(--text-secondary)]">
                    蒸気比重はすべて1以上か（第4類はほぼ全て空気より重い）
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer hover:bg-[var(--section-alt-bg)] p-2 rounded transition-colors">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-[var(--text-secondary)]">
                    指定数量が分類に応じた正しい値か（特殊引火物50L、第1石油類200L等）
                  </span>
                </label>
              </div>

              <h4 className="font-semibold mb-4">デザイン・ゲームバランスチェック</h4>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer hover:bg-[var(--section-alt-bg)] p-2 rounded transition-colors">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-[var(--text-secondary)]">
                    イラストのスタイルがすべてのカードで統一されている
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer hover:bg-[var(--section-alt-bg)] p-2 rounded transition-colors">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-[var(--text-secondary)]">
                    7分類のカラーシステムが正しく適用されている
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer hover:bg-[var(--section-alt-bg)] p-2 rounded transition-colors">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-[var(--text-secondary)]">
                    効果テキストが簡潔で理解しやすい
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer hover:bg-[var(--section-alt-bg)] p-2 rounded transition-colors">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-[var(--text-secondary)]">
                    すべてのカードに存在意義があり、ゲームで使われる可能性がある
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer hover:bg-[var(--section-alt-bg)] p-2 rounded transition-colors">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-[var(--text-secondary)]">
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
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">
              チームレビュー演習
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              グループ内で以下の手順に従ってカードセットをレビューし、改善案を出し合いましょう。
            </p>

            <div className="space-y-4">
              <div className="content-card">
                <h4 className="font-semibold mb-2">ステップ1: 個別レビュー（10分）</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  各メンバーが独立して全カードを確認し、気づいた問題点をメモします。
                </p>
              </div>

              <div className="content-card">
                <h4 className="font-semibold mb-2">ステップ2: 問題点の共有（15分）</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  各メンバーが見つけた問題点を共有し、ホワイトボードやスプレッドシートにリストアップします。
                </p>
              </div>

              <div className="content-card">
                <h4 className="font-semibold mb-2">ステップ3: 優先順位付け（10分）</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  問題点を「重要度」と「修正の難易度」で評価し、どれから取り組むか優先順位を決めます。
                </p>
              </div>

              <div className="content-card">
                <h4 className="font-semibold mb-2">ステップ4: 改善案の検討（20分）</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  優先度の高い問題について、具体的な改善案を議論します。数値調整、テキスト修正、イラスト再生成などの対応を決定します。
                </p>
              </div>

              <div className="content-card">
                <h4 className="font-semibold mb-2">ステップ5: 修正と再生成</h4>
                <p className="text-sm text-[var(--text-secondary)]">
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
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">
              理解度チェック
            </h3>

            {/* Quiz 1 */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">
                Q1. CSVデータで引火点が-40と記載されている物質は何ですか？
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
                  <strong>A.</strong> ガソリン
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
                  <strong>B.</strong> 灯油
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
                  <strong>C.</strong> エタノール
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
                  <strong>D.</strong> ジエチルエーテル
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
                      正解です！ガソリンの引火点は-40度Cです。ジエチルエーテルは-45度Cでさらに低く、灯油は40度C以上、エタノールは13度Cです。CSVデータを正確に覚えることが品質の基本です。
                    </p>
                  ) : (
                    <p className="text-[var(--color-danger)]">
                      不正解です。正解は「A. ガソリン」です。引火点-40度Cはガソリンの値です。CSVテンプレートのデータを確認しましょう。
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Quiz 2 */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">
                Q2. 水溶性/非水溶性の違いで指定数量が異なる分類はどれですか？
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
                  <strong>A.</strong> 特殊引火物とアルコール類
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
                  <strong>B.</strong> 第1石油類、第2石油類、第3石油類
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
                  <strong>C.</strong> 第4石油類と動植物油類
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
                  <strong>D.</strong> すべての分類
                </div>
              </div>
              {showQuiz2Result && (
                <div
                  className={`mt-4 p-4 rounded-lg ${
                    quiz2Answer === 'b'
                      ? 'bg-[var(--color-success-subtle)] border-2 border-[var(--color-success)]'
                      : 'bg-[var(--color-danger-subtle)] border-2 border-[var(--color-danger)]'
                  }`}
                >
                  {quiz2Answer === 'b' ? (
                    <p className="text-[var(--color-success)]">
                      正解です！第1石油類（非水溶200L/水溶400L）、第2石油類（非水溶1,000L/水溶2,000L）、第3石油類（非水溶2,000L/水溶4,000L）は水溶性の有無で指定数量が2倍異なります。CSVに入力する際は水溶性区分を正確に記載しましょう。
                    </p>
                  ) : (
                    <p className="text-[var(--color-danger)]">
                      不正解です。正解は「B. 第1石油類、第2石油類、第3石油類」です。これら3分類は水溶性の方が指定数量が2倍（規制が緩い）になります。
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
                      ? 'bg-[var(--color-success-subtle)] border-2 border-[var(--color-success)]'
                      : 'bg-[var(--color-danger-subtle)] border-2 border-[var(--color-danger)]'
                  }`}
                >
                  {quiz3Answer === 'c' ? (
                    <p className="text-[var(--color-success)]">
                      正解です！カード改善では、正確性、ゲームバランス、視認性、一貫性などを総合的に評価し、バランスの取れた品質を目指すことが重要です。
                    </p>
                  ) : (
                    <p className="text-[var(--color-danger)]">
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
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">
              次のステップ
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
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
