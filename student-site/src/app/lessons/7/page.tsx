'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TransitionLink from '@/components/TransitionLink';
import PromptCard from '@/components/PromptCard';
import { ChevronRightIcon, CheckCircleIcon, SparklesIcon, LightBulbIcon } from '@heroicons/react/24/outline';

export default function Lesson7() {
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
          <span className="text-gray-900 dark:text-gray-100">レッスン7</span>
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
            <span className="gradient-text">レッスン7</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-3">
            <SparklesIcon className="w-10 h-10 text-purple-500" />
            AIカード生成
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            AI画像生成技術を使って、カードイラストを作成します。効果的なプロンプトの書き方を学び、魅力的なカードデザインを実現しましょう。
          </p>

          {/* Learning Objectives */}
          <div className="glass-card mt-8">
            <h3 className="section-label">学習目標</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-200">
                  AI画像生成の基本概念とプロンプトエンジニアリングを理解する
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-200">
                  カードイラストに適したプロンプトを作成する技術を習得する
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-200">
                  生成ツールを使ってカード全体を構成し、品質を評価する
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Content Section 1: Introduction */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass-card">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              AI画像生成とは
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>AI画像生成</strong>は、テキストによる説明（プロンプト）をもとに、人工知能が自動的に画像を作成する技術です。
                この技術により、専門的な画力がなくても、アイデアを視覚化することが可能になります。
              </p>
              <div className="content-card bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
                <div className="flex items-start gap-4">
                  <SparklesIcon className="w-8 h-8 text-purple-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">カードゲームでのAI活用</h4>
                    <p className="text-sm">
                      カードゲーム制作において、AI画像生成は特に有用です。数十枚から数百枚のカードそれぞれに独自のイラストを用意するのは、
                      従来は膨大なコストと時間がかかりました。AIを使うことで、短時間で統一感のあるイラストセットを作成できます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Content Section 2: Prompt Structure */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="glass-card">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              プロンプトの基本構造
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              効果的なプロンプトは、AIに対する明確な指示書です。以下の要素を含めることで、期待通りの画像が生成されやすくなります。
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="content-card category-card-blue">
                <h4 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
                  1. 主題（Subject）
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  何を描くかを明確に指定します。
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs font-mono">
                  例: 消火器、防護服、消防車、化学物質の容器
                </div>
              </div>

              <div className="content-card category-card-purple">
                <h4 className="font-semibold text-lg mb-3 text-purple-600 dark:text-purple-400">
                  2. スタイル（Style）
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  画像の芸術的スタイルを指定します。
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs font-mono">
                  例: イラスト風、リアル、ミニマル、アニメ調、テクニカル
                </div>
              </div>

              <div className="content-card category-card-pink">
                <h4 className="font-semibold text-lg mb-3 text-pink-600 dark:text-pink-400">
                  3. 色調（Color Palette）
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  使用する色の雰囲気を指定します。
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs font-mono">
                  例: 鮮やかな色彩、パステルカラー、モノトーン、暖色系
                </div>
              </div>

              <div className="content-card category-card-green">
                <h4 className="font-semibold text-lg mb-3 text-green-600 dark:text-green-400">
                  4. 構図（Composition）
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  画像内の配置や視点を指定します。
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs font-mono">
                  例: 正面から、俯瞰、中心に配置、シンプルな背景
                </div>
              </div>
            </div>

            <div className="mt-6 content-card bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500">
              <div className="flex items-start gap-3">
                <LightBulbIcon className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">
                    カードゲーム用プロンプトのポイント
                  </h4>
                  <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• 「カードゲーム用」「トレーディングカード風」などのキーワードを含める</li>
                    <li>• 画像内にテキストが入らないように注意（テキストは後で追加）</li>
                    <li>• 背景はシンプルにし、主題を際立たせる</li>
                    <li>• カードサイズに合う縦長の構図を意識</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Content Section 3: Prompt Engineering Tips */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="glass-card">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              プロンプトエンジニアリングのコツ
            </h3>
            <div className="space-y-6">
              <div className="content-card category-card-blue">
                <h4 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
                  具体的に記述する
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">悪い例</p>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded text-sm">
                      消火器の絵
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">良い例</p>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded text-sm">
                      赤い大型消火器、中央に配置、白い背景、カードゲーム用イラスト、クリーンなデザイン
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-card category-card-purple">
                <h4 className="font-semibold text-lg mb-3 text-purple-600 dark:text-purple-400">
                  スタイルキーワードを活用する
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  以下のようなキーワードを追加することで、カードに適した統一感のあるビジュアルが得られます。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="tag">イラスト風</span>
                  <span className="tag">フラットデザイン</span>
                  <span className="tag">ベクター風</span>
                  <span className="tag">シンプル</span>
                  <span className="tag">クリーン</span>
                  <span className="tag">カードゲーム用</span>
                  <span className="tag">アイコニック</span>
                  <span className="tag">プロフェッショナル</span>
                </div>
              </div>

              <div className="content-card category-card-pink">
                <h4 className="font-semibold text-lg mb-3 text-pink-600 dark:text-pink-400">
                  テキストを避ける
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  AI生成画像内のテキストは読みにくいことが多いため、カード名や効果テキストは画像生成後にCanvas APIで追加します。
                  プロンプトには「テキストなし」「no text」などを明記すると良いでしょう。
                </p>
              </div>

              <div className="content-card category-card-green">
                <h4 className="font-semibold text-lg mb-3 text-green-600 dark:text-green-400">
                  反復と改善
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  最初の生成結果が完璧でなくても大丈夫です。プロンプトを微調整しながら何度か試すことで、
                  理想的な画像に近づけていきます。色味、構図、細部の表現などを段階的に調整しましょう。
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Content Section 4: Example Prompts */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="glass-card">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              プロンプト例
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              以下のプロンプト例を参考に、自分のカードに合ったプロンプトを作成しましょう。
              カードをクリックするとプロンプトがコピーされます。
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <PromptCard
                title="装備カード例"
                description="消火・防護装備"
                prompt="赤い大型消火器、中央に配置、白い背景、カードゲーム用イラスト風、クリーンでシンプルなデザイン、テキストなし、プロフェッショナルな質感、縦長構図"
              />

              <PromptCard
                title="物質カード例"
                description="化学物質"
                prompt="ガソリン缶、産業用コンテナ、メタリックな質感、淡い背景、カードゲーム用イラスト、リアルでありながらスタイライズされた表現、警告マークなし、テキストなし"
              />

              <PromptCard
                title="アクションカード例"
                description="規制・対応"
                prompt="ストップサインを持つ手、ダイナミックなポーズ、明るい背景、カードゲーム用、アニメ調イラスト、鮮やかな色彩、動きのある構図、テキストなし"
              />

              <PromptCard
                title="施設カード例"
                description="保管・施設"
                prompt="近代的な倉庫の外観、俯瞰視点、シンプルな背景、カードゲーム用イラスト、クリーンなライン、パステルカラー、建築的な正確さとスタイリッシュさの融合、テキストなし"
              />
            </div>

            <div className="mt-6 content-card bg-blue-50 dark:bg-blue-900/20">
              <h4 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">
                プロンプトのカスタマイズポイント
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  主題を自分のカードテーマに合わせて変更
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  色調をカードカテゴリの配色に合わせる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  スタイルキーワードでゲームの雰囲気を統一
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  構図を縦長に保ち、カードフォーマットに最適化
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Content Section 5: Workflow */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="glass-card">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              カード生成のワークフロー
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              AIイラスト生成からカード完成までの流れを確認しましょう。
            </p>

            <div className="space-y-4">
              <div className="content-card flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">プロンプト作成</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    カードの内容に合わせて、具体的で明確なプロンプトを作成します。
                    主題、スタイル、色調、構図の4要素を意識して記述しましょう。
                  </p>
                </div>
              </div>

              <div className="content-card flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">AIによるイラスト生成</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    プロンプトをAI画像生成ツールに入力し、イラストを生成します。
                    複数のバリエーションを生成して、最も適切なものを選びましょう。
                  </p>
                </div>
              </div>

              <div className="content-card flex items-start gap-4">
                <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">カードジェネレーターで合成</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    生成したイラストを「card-generator」ツールにアップロードし、カード名、効果テキスト、パラメータなどを追加して完全なカードを作成します。
                  </p>
                </div>
              </div>

              <div className="content-card flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">レビューと改善</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    完成したカードをチーム内でレビューします。視認性、デザインの一貫性、情報の正確性をチェックし、
                    必要に応じてプロンプトを調整して再生成します。
                  </p>
                </div>
              </div>

              <div className="content-card flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">エクスポートと印刷準備</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    最終的なカードデザインを画像ファイルとしてエクスポートし、印刷用のデータを準備します。
                    カードサイズや解像度を確認して、高品質な印刷ができるようにしましょう。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Content Section 6: Quality Tips */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="glass-card">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              品質向上のためのヒント
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="content-card category-card-blue">
                <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">
                  統一感を保つ
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  すべてのカードで同じスタイルキーワードを使用し、視覚的な一貫性を維持しましょう。
                </p>
              </div>
              <div className="content-card category-card-purple">
                <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">
                  シンプルな背景
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  背景は無地またはグラデーションにして、主題が際立つようにします。
                </p>
              </div>
              <div className="content-card category-card-pink">
                <h4 className="font-semibold mb-2 text-pink-600 dark:text-pink-400">
                  解像度を確認
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  印刷に適した解像度（300dpi以上推奨）で画像を生成しましょう。
                </p>
              </div>
              <div className="content-card category-card-green">
                <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">
                  複数バリエーション
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  同じプロンプトで複数回生成し、最適なバージョンを選択します。
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
                Q1. プロンプトに含めるべき基本的な要素として適切でないものはどれですか？
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
                  <strong>A.</strong> 主題（何を描くか）
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
                  <strong>B.</strong> スタイル（どのような芸術的スタイルか）
                </div>
                <div
                  className={`quiz-option ${
                    showQuiz1Result
                      ? quiz1Answer === 'c'
                        ? 'correct'
                        : ''
                      : ''
                  }`}
                  onClick={() => !showQuiz1Result && handleQuiz1('c')}
                >
                  <strong>C.</strong> カード効果の詳細なゲームルール
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
                  <strong>D.</strong> 色調（使用する色の雰囲気）
                </div>
              </div>
              {showQuiz1Result && (
                <div
                  className={`mt-4 p-4 rounded-lg ${
                    quiz1Answer === 'c'
                      ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500'
                      : 'bg-red-50 dark:bg-red-900/20 border-2 border-red-500'
                  }`}
                >
                  {quiz1Answer === 'c' ? (
                    <p className="text-green-800 dark:text-green-200">
                      正解です！プロンプトは画像生成のためのものなので、ゲームルールの詳細は不要です。視覚的要素に焦点を当てましょう。
                    </p>
                  ) : (
                    <p className="text-red-800 dark:text-red-200">
                      不正解です。正解は「C. カード効果の詳細なゲームルール」です。プロンプトは画像の視覚的側面を記述するもので、ゲームのメカニクスは含めません。
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Quiz 2 */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">
                Q2. カードゲーム用のイラスト生成において、なぜ「テキストなし」を指定すべきですか？
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
                  <strong>A.</strong> AI生成テキストは読みにくく、後からCanvas APIで追加する方が高品質だから
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
                  <strong>B.</strong> テキストがあるとAIの処理が遅くなるから
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
                  <strong>C.</strong> テキストは著作権の問題を引き起こすから
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
                  <strong>D.</strong> テキストがあるとカードが重くなるから
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
                      正解です！AI生成画像内のテキストは歪んだり読みにくいことが多いため、Canvas APIを使って後から正確に配置する方が効果的です。
                    </p>
                  ) : (
                    <p className="text-red-800 dark:text-red-200">
                      不正解です。正解は「A」です。AIが生成するテキストは読みづらいため、カード名や効果テキストは別途Canvas APIで綺麗に配置します。
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Quiz 3 */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">
                Q3. プロンプトエンジニアリングにおける「反復と改善」の重要性は何ですか？
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
                  <strong>A.</strong> 同じ画像を何度も生成することで、AIの学習を促進する
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
                  <strong>B.</strong> プロンプトを微調整しながら試すことで、理想的な結果に近づける
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
                  <strong>C.</strong> AIに負荷をかけて性能を最大化する
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
                  <strong>D.</strong> 他のプレイヤーよりも多くのカードを作成する
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
                      正解です！プロンプトは一度で完璧になることは稀です。色味、構図、スタイルなどを段階的に調整することで、望む結果に到達できます。
                    </p>
                  ) : (
                    <p className="text-red-800 dark:text-red-200">
                      不正解です。正解は「B」です。試行錯誤を通じてプロンプトを洗練させることが、高品質な画像を得るための鍵となります。
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
              AIイラスト生成の技術を習得したら、次は効率的な一括作成と改善プロセスを学びましょう。
            </p>
            <TransitionLink href="/lessons/8" className="btn-primary inline-flex items-center gap-2">
              レッスン8: 一括作成と改善
              <ChevronRightIcon className="w-5 h-5" />
            </TransitionLink>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
