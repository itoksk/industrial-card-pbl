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
          <span className="text-[var(--foreground)]">レッスン6</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">
            カードレイアウト設計
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl">
            カードゲームの視覚デザインを設計します。情報の階層性と視認性を考慮した効果的なレイアウトを学びましょう。
          </p>

          {/* Learning Objectives */}
          <div className="glass-card mt-8">
            <h3 className="section-label">学習目標</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--text-secondary)]">
                  片面カードのメリットと制約を理解する
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--text-secondary)]">
                  カードの構成要素を理解し、情報の優先順位を決定する
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--text-secondary)]">
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
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">
              なぜ片面カードなのか
            </h3>
            <div className="space-y-4 text-[var(--text-secondary)]">
              <p>
                今回のカードゲームでは、<strong>片面印刷のカードデザイン</strong>を採用します。これには以下の理由があります。
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="content-card category-card-blue">
                  <h4 className="font-semibold text-lg mb-2 text-[var(--color-info)]">
                    シンプルさ
                  </h4>
                  <p className="text-sm">
                    必要な情報を1面に集約することで、プレイ中の情報確認がスムーズになります。カードを裏返す手間がなく、ゲームの流れが途切れません。
                  </p>
                </div>
                <div className="content-card category-card-green">
                  <h4 className="font-semibold text-lg mb-2 text-[var(--color-success)]">
                    印刷コスト
                  </h4>
                  <p className="text-sm">
                    片面印刷は両面印刷に比べてコストが低く、短期間で大量のカードを作成できます。試作とテストプレイを繰り返す際に有利です。
                  </p>
                </div>
                <div className="content-card category-card-purple">
                  <h4 className="font-semibold text-lg mb-2 text-[var(--color-purple)]">
                    デザインの制約
                  </h4>
                  <p className="text-sm">
                    限られたスペースにすべての情報を配置する必要があるため、情報の優先順位を明確にする訓練になります。デザイン思考の実践的な学びとなります。
                  </p>
                </div>
                <div className="content-card category-card-orange">
                  <h4 className="font-semibold text-lg mb-2 text-[var(--accent)]">
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
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">
              カードの構成要素
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              カードは以下の要素で構成されます。各要素の役割を理解し、適切に配置することが重要です。
            </p>

            {/* Card Mockup: ガソリンカード */}
            <div className="max-w-md mx-auto my-8">
              <div className="bg-[var(--surface)] rounded-xl shadow-2xl p-6 border-4 border-[var(--accent)]">
                {/* Badge + Water Solubility */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-block bg-[var(--accent)] text-white text-xs font-bold px-3 py-1 rounded-full">
                    第1石油類
                  </div>
                  <div className="inline-block bg-[var(--section-alt-bg)] text-[var(--text-secondary)] text-xs font-bold px-3 py-1 rounded-full">
                    非水溶性
                  </div>
                </div>

                {/* Title */}
                <div className="mb-4">
                  <h4 className="text-2xl font-bold text-[var(--foreground)]">
                    ガソリン
                  </h4>
                </div>

                {/* Illustration Area */}
                <div className="mb-4 bg-[var(--accent-muted)] rounded-lg aspect-video flex items-center justify-center">
                  <p className="text-sm font-semibold text-[var(--text-secondary)]">
                    AI生成イラスト領域
                  </p>
                </div>

                {/* Info Rows - Hazmat Parameters */}
                <div className="mb-4 space-y-2">
                  <div className="flex justify-between items-center bg-[var(--accent-subtle)] px-3 py-2 rounded">
                    <span className="text-sm font-medium">引火点</span>
                    <span className="text-sm font-bold text-[var(--color-danger)]">-40&#8451;</span>
                  </div>
                  <div className="flex justify-between items-center bg-[var(--section-alt-bg)] px-3 py-2 rounded">
                    <span className="text-sm font-medium">比重</span>
                    <span className="text-sm font-bold">0.65-0.75</span>
                  </div>
                  <div className="flex justify-between items-center bg-[var(--accent-subtle)] px-3 py-2 rounded">
                    <span className="text-sm font-medium">蒸気比重</span>
                    <span className="text-sm font-bold">3.0-4.0</span>
                  </div>
                  <div className="flex justify-between items-center bg-[var(--section-alt-bg)] px-3 py-2 rounded">
                    <span className="text-sm font-medium">指定数量</span>
                    <span className="text-sm font-bold">200L</span>
                  </div>
                </div>

                {/* Extinguishing Methods */}
                <div className="bg-[var(--color-info-subtle)] p-3 rounded-lg mb-2">
                  <p className="text-xs font-semibold text-[var(--color-info)] mb-1">消火方法</p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-[var(--color-info-muted)] px-2 py-0.5 rounded">泡</span>
                    <span className="text-xs bg-[var(--color-success-muted)] px-2 py-0.5 rounded">粉末</span>
                    <span className="text-xs bg-[var(--accent-muted)] px-2 py-0.5 rounded">CO2</span>
                  </div>
                </div>

                {/* Effect Text */}
                <div className="bg-[var(--section-alt-bg)] p-3 rounded-lg">
                  <p className="text-xs text-[var(--text-secondary)]">
                    効果テキスト：「引火点が極めて低く、常温で引火する。蒸気比重が大きく床に滞留するため、離れた火源でも引火の危険がある」
                  </p>
                </div>
              </div>
            </div>

            {/* Element Details */}
            <div className="space-y-4 mt-8">
              <h4 className="font-bold text-lg">危険物カードの構成要素</h4>
              <div className="content-card">
                <h4 className="font-semibold text-lg mb-2 text-[var(--accent)]">
                  1. 分類タグ（上部左）
                </h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  第4類の7分類（特殊引火物/第1石油類/アルコール類/第2石油類/第3石油類/第4石油類/動植物油類）を色分け表示。一目でカードの分類がわかります。
                </p>
              </div>
              <div className="content-card">
                <h4 className="font-semibold text-lg mb-2 text-[var(--color-info)]">
                  2. 水溶性アイコン（上部右）
                </h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  「水溶性」か「非水溶性」かを示すタグ。消火方法の選択に直結する重要な情報のため、常に見える位置に配置します。
                </p>
              </div>
              <div className="content-card">
                <h4 className="font-semibold text-lg mb-2 text-[var(--color-purple)]">
                  3. 物質名（上部）+ イラスト（中央）
                </h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  物質名を大きく表示し、中央にAI生成イラストを配置。イラストは物質の特徴（色、状態、危険性）を視覚的に表現します。
                </p>
              </div>
              <div className="content-card">
                <h4 className="font-semibold text-lg mb-2 text-[var(--color-danger)]">
                  4. パラメータ欄（左下）
                </h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong>引火点</strong>（ゲームの攻撃力に対応）、<strong>比重</strong>（水に浮くか沈むか）、<strong>蒸気比重</strong>（蒸気が滞留する度合い）を数値で表示。バトルの勝敗判定に使用します。
                </p>
              </div>
              <div className="content-card">
                <h4 className="font-semibold text-lg mb-2 text-[var(--color-success)]">
                  5. 指定数量（右下）+ 消火方法バー（下部）
                </h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  指定数量はカードのレアリティに対応。消火方法バーには使用可能な消火器を<strong>アイコンで表示</strong>し、防御カードとの相性を直感的に確認できます。
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
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">
              レイアウト設計のポイント
            </h3>
            <div className="space-y-6">
              <div className="content-card category-card-blue">
                <h4 className="font-semibold text-lg mb-3 text-[var(--color-info)]">
                  情報の階層性
                </h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-info)] font-bold">•</span>
                    最も重要な情報（カード名、イラスト）を大きく、目立つ位置に配置
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-info)] font-bold">•</span>
                    数値情報は見やすくグループ化し、比較しやすいレイアウトに
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-info)] font-bold">•</span>
                    効果テキストは読みやすいフォントサイズで、適切な行間を確保
                  </li>
                </ul>
              </div>

              <div className="content-card category-card-purple">
                <h4 className="font-semibold text-lg mb-3 text-[var(--color-purple)]">
                  視覚的な明瞭性
                </h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-purple)] font-bold">•</span>
                    十分な余白を設けて、情報が詰まりすぎないように
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-purple)] font-bold">•</span>
                    コントラストを意識し、背景と文字の読みやすさを確保
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-purple)] font-bold">•</span>
                    境界線や背景色で各セクションを明確に区別
                  </li>
                </ul>
              </div>

              <div className="content-card category-card-pink">
                <h4 className="font-semibold text-lg mb-3 text-[var(--color-pink)]">
                  カテゴリ別の色分け
                </h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-pink)] font-bold">•</span>
                    運搬カード、消火カード、規制カードなど、種類ごとに色を統一
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-pink)] font-bold">•</span>
                    色覚多様性を考慮し、色だけでなく形状やアイコンも併用
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-pink)] font-bold">•</span>
                    一貫性を保ち、プレイヤーが直感的に理解できるデザインに
                  </li>
                </ul>
              </div>

              <div className="content-card category-card-green">
                <h4 className="font-semibold text-lg mb-3 text-[var(--color-success)]">
                  ゲーム体験への配慮
                </h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-success)] font-bold">•</span>
                    手に持ったときに重要な情報が隠れないレイアウト
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-success)] font-bold">•</span>
                    テーブル上に並べたときの視認性を考慮
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-success)] font-bold">•</span>
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
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">
              グループディスカッション: レイアウト設計
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              グループで以下のポイントについて話し合い、カードレイアウトの方針を決定しましょう。
            </p>
            <div className="space-y-4">
              <div className="content-card">
                <h4 className="font-semibold mb-2">ディスカッションポイント</h4>
                <ol className="list-decimal list-inside space-y-3 text-sm text-[var(--text-secondary)]">
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

              <div className="content-card bg-[var(--color-info-subtle)]">
                <h4 className="font-semibold mb-2 text-[var(--color-info)]">
                  提出物
                </h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                    カードレイアウトのラフスケッチ（手描きまたはデジタル）
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                    各要素の配置とサイズの比率を記載
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                    カテゴリごとの色の定義（色名またはカラーコード）
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
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
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">
              理解度チェック
            </h3>

            {/* Quiz 1 */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">
                Q1. 上のガソリンカードに記載されている引火点の値はいくつですか？
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
                  <strong>A.</strong> -40&#8451;
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
                  <strong>B.</strong> 40&#8451;以上
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
                  <strong>C.</strong> 約300&#8451;
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
                  <strong>D.</strong> 13&#8451;
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
                      正解です！ガソリンの引火点は-40&#8451;で、常温でも容易に引火します。この値はカードの攻撃力に直結する最重要パラメータです。ちなみに40&#8451;以上は灯油、13&#8451;はエタノール、約300&#8451;はガソリンの「発火点」です。
                    </p>
                  ) : (
                    <p className="text-[var(--color-danger)]">
                      不正解です。正解は「A. -40&#8451;」です。ガソリンの引火点は-40&#8451;と極めて低く、常温でも引火の危険があります。カードの引火点欄をよく確認しましょう。
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
                      ? 'bg-[var(--color-success-subtle)] border-2 border-[var(--color-success)]'
                      : 'bg-[var(--color-danger-subtle)] border-2 border-[var(--color-danger)]'
                  }`}
                >
                  {quiz2Answer === 'c' ? (
                    <p className="text-[var(--color-success)]">
                      正解です！色覚特性が異なる人でも識別できるよう、形状やアイコンなど複数の視覚的手がかりを組み合わせることが重要です。
                    </p>
                  ) : (
                    <p className="text-[var(--color-danger)]">
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
                      ? 'bg-[var(--color-success-subtle)] border-2 border-[var(--color-success)]'
                      : 'bg-[var(--color-danger-subtle)] border-2 border-[var(--color-danger)]'
                  }`}
                >
                  {quiz3Answer === 'b' ? (
                    <p className="text-[var(--color-success)]">
                      正解です！片面カードでは、情報の優先順位を明確にし、最も重要な情報を強調して配置することが成功の鍵です。
                    </p>
                  ) : (
                    <p className="text-[var(--color-danger)]">
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
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">
              次のステップ
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
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
