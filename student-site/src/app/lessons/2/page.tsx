'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TransitionLink from '@/components/TransitionLink';
import { HomeIcon, ChevronRightIcon, CheckCircleIcon, TagIcon, Squares2X2Icon, ListBulletIcon } from '@heroicons/react/24/outline';

export default function Lesson2() {
  const [quizRevealed, setQuizRevealed] = useState<number[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});

  const toggleQuizReveal = (questionIndex: number) => {
    if (quizRevealed.includes(questionIndex)) {
      setQuizRevealed(quizRevealed.filter(i => i !== questionIndex));
    } else {
      setQuizRevealed([...quizRevealed, questionIndex]);
    }
  };

  const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
    setQuizAnswers({ ...quizAnswers, [questionIndex]: answerIndex });
  };

  const quizData = [
    {
      question: '対象分野を分類する主な目的は何ですか？',
      options: [
        'カードの枚数を増やすため',
        '学習内容を整理し、体系的に理解するため',
        'カードのイラストを描きやすくするため',
        'ゲームのルールを複雑にするため'
      ],
      correct: 1,
      explanation: '分類の主な目的は、学習内容を体系的に整理し、全体像を把握することです。これにより、知識の抜け漏れを防ぎ、効率的な学習が可能になります。'
    },
    {
      question: 'カテゴリを設定する際に考慮すべきポイントはどれですか？',
      options: [
        '見た目がかっこいいかどうか',
        '事実に基づいた明確な分類基準があるか',
        '他のゲームで人気のあるカテゴリか',
        'カテゴリ名が短いかどうか'
      ],
      correct: 1,
      explanation: 'カテゴリは事実基盤制約の原則に基づき、明確な分類基準を持つ必要があります。主観的・恣意的な分類は避けるべきです。'
    },
    {
      question: '各カテゴリに何枚程度のカードを用意するのが適切ですか？',
      options: [
        '1-2枚',
        '5-10枚',
        '50-100枚',
        '制限なし'
      ],
      correct: 1,
      explanation: '1カテゴリあたり5-10枚程度が適切です。多すぎると制作が大変になり、少なすぎるとゲーム性が損なわれます。バランスが重要です。'
    }
  ];

  const categories = [
    {
      name: 'カテゴリA',
      color: 'blue',
      description: '特性Xを持つグループ',
      examples: '項目1、項目2、項目3',
      icon: '🔵'
    },
    {
      name: 'カテゴリB',
      color: 'purple',
      description: '特性Yを持つグループ',
      examples: '項目4、項目5、項目6',
      icon: '🟣'
    },
    {
      name: 'カテゴリC',
      color: 'pink',
      description: '特性Zを持つグループ',
      examples: '項目7、項目8、項目9',
      icon: '🔴'
    },
    {
      name: 'カテゴリD',
      color: 'orange',
      description: '特別な条件を満たすグループ',
      examples: '項目10、項目11、項目12',
      icon: '🟠'
    },
    {
      name: 'カテゴリE',
      color: 'green',
      description: '共通の機能を持つグループ',
      examples: '項目13、項目14、項目15',
      icon: '🟢'
    },
    {
      name: 'カテゴリF',
      color: 'cyan',
      description: '関連する用途のグループ',
      examples: '項目16、項目17、項目18',
      icon: '🔷'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom py-12">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="breadcrumb mb-8"
        >
          <Link href="/" className="hover:text-blue-500 transition-colors">
            <HomeIcon className="w-4 h-4 inline" />
          </Link>
          <ChevronRightIcon className="w-4 h-4" />
          <span>レッスン2</span>
        </motion.nav>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="tag tag-phase-1">Phase 1: 企画</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">Lesson 2</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">対象分野の分類</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            学習対象を整理し、カードゲームに適した分類体系を構築しましょう。
          </p>

          {/* Learning Objectives */}
          <div className="glass-card mt-8 max-w-3xl">
            <h3 className="section-label">学習目標</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>学習対象を体系的に分類する方法を理解する</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>カテゴリ設定の原則と基準を学ぶ</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>指定数量や重要な閾値の概念を理解する</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>分類演習を通じて実践的なスキルを身につける</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Section 1: Why Categorization Matters */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">なぜ分類が重要なのか？</h2>
          <div className="glass-card">
            <p className="text-lg leading-relaxed mb-6">
              学習対象をカードゲーム化する前に、まず<strong>体系的な分類</strong>が必要です。分類することで、以下のようなメリットがあります。
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="content-card category-card-blue">
                <div className="flex items-center gap-3 mb-3">
                  <Squares2X2Icon className="w-8 h-8 text-blue-500" />
                  <h4 className="font-bold text-lg">全体像の把握</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  学習対象の全体を俯瞰し、どのような種類があるのか、どう関連しているのかを理解できます。
                </p>
              </div>

              <div className="content-card category-card-purple">
                <div className="flex items-center gap-3 mb-3">
                  <TagIcon className="w-8 h-8 text-purple-500" />
                  <h4 className="font-bold text-lg">効率的な学習</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  似た特性を持つものをまとめることで、共通点・相違点を理解しやすくなり、記憶に残りやすくなります。
                </p>
              </div>

              <div className="content-card category-card-pink">
                <div className="flex items-center gap-3 mb-3">
                  <ListBulletIcon className="w-8 h-8 text-pink-500" />
                  <h4 className="font-bold text-lg">抜け漏れ防止</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  体系的に整理することで、学習すべき内容の抜け漏れを防ぎ、網羅的な理解ができます。
                </p>
              </div>

              <div className="content-card category-card-orange">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircleIcon className="w-8 h-8 text-orange-500" />
                  <h4 className="font-bold text-lg">ゲームバランス</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  各カテゴリのカード枚数やパワーバランスを調整しやすくなり、公平なゲーム設計ができます。
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Categorization Principles */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">カテゴリ設定の原則</h2>
          <div className="glass-card">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="font-bold text-xl mb-2">1. 事実に基づく分類</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  カテゴリは主観的な印象ではなく、<strong>客観的な事実</strong>に基づいて設定します。
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                    <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">良い例</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      「法令上の分類」「物理特性（固体/液体/気体）」「用途別分類」
                    </p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
                    <p className="text-sm font-semibold text-red-700 dark:text-red-300 mb-2">悪い例</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      「かっこいいもの」「人気があるもの」「面白そうなもの」
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="font-bold text-xl mb-2">2. 明確な境界線</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  どのカテゴリに属するか<strong>明確に判断できる基準</strong>が必要です。曖昧な分類は混乱を招きます。
                </p>
              </div>

              <div className="border-l-4 border-pink-500 pl-6">
                <h4 className="font-bold text-xl mb-2">3. 適切な粒度</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  カテゴリが多すぎると複雑になり、少なすぎると大雑把すぎます。<strong>5-7カテゴリ程度</strong>が適切です。
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="font-bold text-xl mb-2">4. ゲーム性の考慮</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  各カテゴリが<strong>ゲーム内で独自の役割</strong>を持つように設計します。すべてのカテゴリが似た性能では面白くありません。
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Example Categories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">カテゴリの例</h2>
          <div className="glass-card">
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
              以下は、一般的な分類の例です。実際の学習分野に合わせて調整してください。
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`content-card category-card-${category.color}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-3xl">{category.icon}</div>
                    <h3 className="text-xl font-bold">{category.name}</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    {category.description}
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded text-sm">
                    <p className="font-semibold mb-1">具体例：</p>
                    <p className="text-gray-600 dark:text-gray-400">{category.examples}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 4: Designated Quantities */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">指定数量・重要な閾値</h2>
          <div className="glass-card">
            <p className="text-lg leading-relaxed mb-6">
              多くの分野では、<strong>重要な数値基準</strong>や<strong>閾値</strong>が存在します。これらをカテゴリ分けやパラメータ設定に活用しましょう。
            </p>

            <div className="space-y-6">
              <div className="content-card bg-blue-50 dark:bg-blue-900/20">
                <h4 className="font-bold text-lg mb-3">閾値とは？</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  ある値を境に、性質や扱いが大きく変わる数値のことです。この境界を知ることで、より実践的な知識が身につきます。
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded">
                  <p className="text-sm font-semibold mb-2">例：</p>
                  <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• 温度：0℃（水の凍結点）、100℃（沸点）</li>
                    <li>• 濃度：特定濃度以上で規制対象になる</li>
                    <li>• 量：一定量を超えると保管方法が変わる</li>
                    <li>• pH：7を境に酸性/アルカリ性が分かれる</li>
                  </ul>
                </div>
              </div>

              <div className="content-card bg-purple-50 dark:bg-purple-900/20">
                <h4 className="font-bold text-lg mb-3">ゲームへの応用</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  閾値をゲームルールに取り入れることで、リアリティと教育効果が高まります。
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="text-sm font-semibold mb-2 text-purple-600 dark:text-purple-400">
                      カテゴリ分けに活用
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      閾値を超えるか否かで異なるカテゴリに分類
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="text-sm font-semibold mb-2 text-purple-600 dark:text-purple-400">
                      特殊効果のトリガー
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      閾値を超えると特別な効果が発動
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 5: Sorting Activity */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">分類演習ワークシート</h2>
          <div className="worksheet-section">
            <div className="glass-card">
              <h3 className="text-xl font-bold mb-4">グループで取り組もう</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                あなたのチームが扱う学習分野について、カテゴリ分類を考えてみましょう。
              </p>

              <div className="space-y-6">
                <div>
                  <p className="font-semibold mb-3">ステップ1：学習対象のリストアップ</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    カードにしたい項目をできるだけ多く挙げてください（最低15個）
                  </p>
                  <div className="bg-white dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded p-4 min-h-32">
                    <p className="text-sm text-gray-400">（ここに記入）</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-3">ステップ2：分類基準の設定</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    どのような基準でカテゴリを分けますか？（事実に基づいた基準であることを確認）
                  </p>
                  <div className="bg-white dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded p-4 min-h-24">
                    <p className="text-sm text-gray-400">（ここに記入）</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-3">ステップ3：カテゴリ名の決定</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    5-7個のカテゴリ名を考えてください
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <div key={num} className="bg-white dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded p-3">
                        <p className="text-sm font-semibold mb-2">カテゴリ{num}</p>
                        <p className="text-xs text-gray-400">（名称）</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-3">ステップ4：各カテゴリへの項目割り当て</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    ステップ1でリストアップした項目を、それぞれのカテゴリに分類してください
                  </p>
                  <div className="bg-white dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded p-4 min-h-32">
                    <p className="text-sm text-gray-400">（カテゴリ名：項目1、項目2...の形式で記入）</p>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r">
                  <h4 className="font-bold mb-2">チェックポイント</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>□ すべてのカテゴリに事実に基づいた明確な定義がある</li>
                    <li>□ どの項目も1つのカテゴリに明確に分類できる</li>
                    <li>□ 各カテゴリのカード枚数がバランスよく分散している</li>
                    <li>□ 各カテゴリがゲーム内で独自の役割を持つように設計されている</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Quiz Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">理解度チェッククイズ</h2>
          <div className="glass-card">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              このレッスンの内容を理解できたかチェックしましょう。
            </p>

            <div className="space-y-8">
              {quizData.map((quiz, qIndex) => (
                <div key={qIndex} className="border-t pt-6 first:border-t-0 first:pt-0">
                  <h4 className="font-bold text-lg mb-4">問題 {qIndex + 1}</h4>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">{quiz.question}</p>

                  <div className="space-y-3 mb-4">
                    {quiz.options.map((option, oIndex) => (
                      <div
                        key={oIndex}
                        onClick={() => handleQuizAnswer(qIndex, oIndex)}
                        className={`quiz-option ${
                          quizRevealed.includes(qIndex)
                            ? oIndex === quiz.correct
                              ? 'correct'
                              : quizAnswers[qIndex] === oIndex
                              ? 'incorrect'
                              : ''
                            : quizAnswers[qIndex] === oIndex
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                            : ''
                        }`}
                      >
                        <span className="font-medium mr-2">{String.fromCharCode(65 + oIndex)}.</span>
                        {option}
                      </div>
                    ))}
                  </div>

                  {!quizRevealed.includes(qIndex) ? (
                    <button
                      onClick={() => toggleQuizReveal(qIndex)}
                      className="btn-primary"
                      disabled={quizAnswers[qIndex] === undefined}
                    >
                      解答を表示
                    </button>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r"
                    >
                      <p className="font-bold text-green-700 dark:text-green-300 mb-2">
                        正解: {String.fromCharCode(65 + quiz.correct)}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">{quiz.explanation}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Next Lesson CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="glass-card bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-2 border-purple-500/50">
            <h3 className="text-2xl font-bold mb-4">次のレッスンへ</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              分類ができたら、次は各カードの「パラメータ」を調査しましょう。
            </p>
            <TransitionLink href="/lessons/3" className="btn-primary inline-flex items-center gap-2">
              レッスン3: パラメータ調査
              <ChevronRightIcon className="w-5 h-5" />
            </TransitionLink>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
