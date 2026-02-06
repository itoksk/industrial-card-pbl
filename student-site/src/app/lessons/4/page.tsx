'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TransitionLink from '@/components/TransitionLink';
import { HomeIcon, ChevronRightIcon, CheckCircleIcon, ScaleIcon, ShieldCheckIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function Lesson4() {
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
      question: '規制や法令をカードゲームに組み込む最大の利点は何ですか？',
      options: [
        'カードの見た目が良くなる',
        '現実世界との接続が強まり、実践的な学習ができる',
        'ゲームが複雑になって面白い',
        'カードの枚数を増やせる'
      ],
      correct: 1,
      explanation: '規制・法令を組み込むことで、学習内容が現実世界で実際に役立つ知識となります。ゲームを通じて、実務で必要な規制理解が深まります。'
    },
    {
      question: '規制をゲーム効果に変換する際に重要なことは何ですか？',
      options: [
        '規制の厳しさを無視して面白さを優先する',
        '規制の内容を正確に反映しつつ、ゲーム性を持たせる',
        '規制を全て攻撃効果に変換する',
        '規制は無視してオリジナル効果を作る'
      ],
      correct: 1,
      explanation: '規制の内容を正確に理解し、それをゲーム内で意味のある効果として表現することが重要です。教育的価値とゲーム性の両立を目指します。'
    },
    {
      question: '法的枠組みを調査する際に適切でないものはどれですか？',
      options: [
        '政府の公式サイトを確認する',
        '専門書や解説書を参考にする',
        '友人の推測を信じる',
        '業界団体のガイドラインを調べる'
      ],
      correct: 2,
      explanation: '法令・規制は正確な情報が必須です。公式な情報源を使用し、個人の推測や不確実な情報は避けましょう。'
    }
  ];

  const regulationExamples = [
    {
      title: '保管規制',
      regulation: '一定量以上の保管には届出が必要',
      effect: '「指定数量超過：このカードは単独では使用できない。特別な保管カードと組み合わせる必要がある」',
      icon: '🏢',
      color: 'blue'
    },
    {
      title: '運搬規制',
      regulation: '特定容器での運搬が義務付けられている',
      effect: '「運搬制限：このカードを移動させる際は、運搬カードが必要」',
      icon: '🚛',
      color: 'purple'
    },
    {
      title: '混合禁止',
      regulation: '特定の物質との混合が法令で禁止されている',
      effect: '「反応禁止：カテゴリXのカードとは同時に使用できない」',
      icon: '⚠️',
      color: 'pink'
    },
    {
      title: '取扱資格',
      regulation: '専門資格を持つ者のみが取り扱い可能',
      effect: '「資格必要：資格カードがフィールドにある場合のみ使用可能」',
      icon: '📜',
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
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
          <span>レッスン4</span>
        </motion.nav>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="tag tag-phase-2">Phase 2: 調査</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">Lesson 4</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">規制と法令</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            現実世界の規制や法令をカードゲームに取り入れ、実践的な学習を実現しましょう。
          </p>

          {/* Learning Objectives */}
          <div className="glass-card mt-8 max-w-3xl">
            <h3 className="section-label">学習目標</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>規制・法令がカードゲームに与える価値を理解する</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>調査すべき規制の種類を知る</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>規制をゲーム効果に変換する方法を学ぶ</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>法的枠組みを調査する実践スキルを身につける</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Section 1: Why Regulations Matter */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">なぜ規制・法令が重要なのか？</h2>
          <div className="glass-card">
            <p className="text-lg leading-relaxed mb-6">
              多くの専門分野では、<strong>法律や規制</strong>が実務の基盤となっています。これらをカードゲームに取り入れることで、以下のメリットがあります。
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="content-card category-card-blue">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheckIcon className="w-8 h-8 text-blue-500" />
                  <h4 className="font-bold text-lg">リアリティの向上</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  現実世界のルールをゲームに反映することで、より実践的で説得力のある学習体験が得られます。
                </p>
              </div>

              <div className="content-card category-card-purple">
                <div className="flex items-center gap-3 mb-3">
                  <ScaleIcon className="w-8 h-8 text-purple-500" />
                  <h4 className="font-bold text-lg">実務スキルの習得</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  ゲームを通じて規制を学ぶことで、実際の業務で必要な法的知識が自然と身につきます。
                </p>
              </div>

              <div className="content-card category-card-pink">
                <div className="flex items-center gap-3 mb-3">
                  <DocumentTextIcon className="w-8 h-8 text-pink-500" />
                  <h4 className="font-bold text-lg">深い理解</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  「なぜこの規制があるのか」を考えることで、単なる暗記ではなく、背景や理由まで理解できます。
                </p>
              </div>

              <div className="content-card category-card-orange">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircleIcon className="w-8 h-8 text-orange-500" />
                  <h4 className="font-bold text-lg">ゲームバランス</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  規制という「制約」を加えることで、戦略性が増し、よりバランスの取れたゲームになります。
                </p>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-xl p-6">
              <h4 className="font-bold text-xl mb-3">具体例：規制が学習を深める</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                例えば、「この物質は一定量以上保管する場合、特別な届出が必要」という規制を学ぶとき、単に暗記するだけでは退屈です。しかし、カードゲームで「このカードを複数枚デッキに入れるには特別な許可カードが必要」というルールにすると、<strong>実際に制約を体験</strong>しながら学べます。
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Types of Regulations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">調査すべき規制の種類</h2>
          <div className="glass-card">
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
              学習分野に応じて、以下のような規制を調査しましょう。
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="font-bold text-xl mb-2">1. 分類・等級に関する規制</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  法令上の分類や危険等級など、公的な基準による分類。
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    例：危険物の類別、医薬品の分類、化学物質の規制クラス
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="font-bold text-xl mb-2">2. 保管・管理に関する規制</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  どのように保管すべきか、どのような設備が必要かに関するルール。
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    例：保管容器の規定、温度管理の要件、届出義務の有無
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-pink-500 pl-6">
                <h4 className="font-bold text-xl mb-2">3. 取扱・運搬に関する規制</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  どのように扱うべきか、運搬時の注意事項など。
                </p>
                <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    例：運搬容器の規格、運搬時の表示義務、取扱資格の要件
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="font-bold text-xl mb-2">4. 混合・使用に関する規制</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  他の物質との混合禁止、使用制限など。
                </p>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    例：混触禁止物質、使用場所の制限、換気要件
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="font-bold text-xl mb-2">5. 廃棄・処理に関する規制</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  廃棄方法、処理業者への委託義務など。
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    例：特別管理が必要な廃棄物、中和処理の義務、マニフェスト制度
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Regulation to Effect Mapping */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">規制からゲーム効果への変換</h2>
          <div className="glass-card">
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
              現実の規制を、ゲーム内の「効果」や「制約」として表現する例を見てみましょう。
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {regulationExamples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`content-card category-card-${example.color}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{example.icon}</div>
                    <h3 className="text-xl font-bold">{example.title}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">現実の規制</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{example.regulation}</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-3 rounded">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">ゲーム効果</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{example.effect}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-bold text-lg mb-3">変換のポイント</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>制約を忠実に</strong>：規制の内容を正確に反映する</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>ゲーム性を持たせる</strong>：単なる不利益ではなく、戦略的な要素にする</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>理由を理解</strong>：「なぜその規制があるのか」を考えると、より良い効果に変換できる</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Section 4: Legal Framework Research */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">法的枠組み調査ワークシート</h2>
          <div className="worksheet-section">
            <div className="glass-card">
              <h3 className="text-xl font-bold mb-4">グループで調査しよう</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                あなたのチームが扱う分野の規制・法令を調査し、ゲーム効果に変換しましょう。
              </p>

              <div className="space-y-6">
                <div>
                  <p className="font-semibold mb-3">ステップ1：主要な法令の特定</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    あなたの学習分野に関連する主な法律・規制を挙げてください
                  </p>
                  <div className="bg-white dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded p-4 min-h-24">
                    <p className="text-sm text-gray-400">（例：消防法、労働安全衛生法、化学物質管理法など）</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-3">ステップ2：具体的な規制内容の調査</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    各カードに関連する具体的な規制を調べてください（最低3つ）
                  </p>
                  <div className="grid gap-4">
                    {[1, 2, 3].map((num) => (
                      <div key={num} className="bg-white dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded p-4">
                        <p className="text-sm font-semibold mb-2">規制{num}</p>
                        <div className="space-y-2">
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">対象カード：</p>
                            <p className="text-sm text-gray-400">（記入）</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">規制内容：</p>
                            <p className="text-sm text-gray-400">（記入）</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">情報源：</p>
                            <p className="text-sm text-gray-400">（記入）</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-3">ステップ3：ゲーム効果への変換</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    調査した規制を、どのようなゲーム効果にするか考えてください
                  </p>
                  <div className="bg-white dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded p-4 min-h-32">
                    <p className="text-sm text-gray-400">
                      （例：「指定数量超過のため、このカードは単独では使用できない。保管カードと組み合わせる必要がある」）
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r">
                  <h4 className="font-bold mb-2">チェックポイント</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>□ すべての規制に信頼できる情報源がある</li>
                    <li>□ 規制の内容を正確に理解している</li>
                    <li>□ ゲーム効果が規制の内容を忠実に反映している</li>
                    <li>□ ゲーム効果が実際にプレイ可能なルールになっている</li>
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
          <div className="glass-card bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border-2 border-orange-500/50">
            <h3 className="text-2xl font-bold mb-4">次のレッスンへ</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              規制を理解したら、次は「防御/補助カードの設計」について学びましょう。
            </p>
            <TransitionLink href="/lessons/5" className="btn-primary inline-flex items-center gap-2">
              レッスン5: 防御/補助カード設計
              <ChevronRightIcon className="w-5 h-5" />
            </TransitionLink>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
