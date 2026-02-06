'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TransitionLink from '@/components/TransitionLink';
import PromptCard from '@/components/PromptCard';
import { HomeIcon, ChevronRightIcon, CheckCircleIcon, ShieldExclamationIcon, SparklesIcon, BoltIcon } from '@heroicons/react/24/outline';

export default function Lesson5() {
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
      question: '防御/補助カードが必要な理由として最も重要なものはどれですか？',
      options: [
        'カードの種類を増やして見栄えを良くするため',
        'ゲームバランスを調整し、多様な戦略を生むため',
        '制作時間を延ばすため',
        '他のカードゲームと同じ構成にするため'
      ],
      correct: 1,
      explanation: '防御/補助カードは、ゲームに戦略性と多様性を与えるために不可欠です。攻撃だけのゲームは単調になりますが、防御や支援の要素があることで、様々な戦略が生まれます。'
    },
    {
      question: '防御/補助カードを設計する際に重要な原則は何ですか？',
      options: [
        '見た目がかっこよければ何でも良い',
        '効果は事実に基づいている必要がある',
        'できるだけ強力にする',
        '他のゲームから効果をコピーする'
      ],
      correct: 1,
      explanation: '通常のカードと同様、防御/補助カードも事実基盤制約の原則に従う必要があります。効果は現実のデータや法則に基づいて設計しましょう。'
    },
    {
      question: 'polishGameEffectText（効果文の整頓）の目的は何ですか？',
      options: [
        '効果を複雑にして理解しにくくする',
        '統一された形式で分かりやすく、一貫性のある効果文を作る',
        '効果文を削除する',
        '効果文を長くする'
      ],
      correct: 1,
      explanation: 'polishGameEffectTextは、学生が書いた効果文を統一されたフォーマットに整え、明確で一貫性のある表現にするためのプロセスです。これによりゲームの理解性が向上します。'
    }
  ];

  const specialCardTypes = [
    {
      type: '防御カード',
      purpose: '攻撃を防ぐ・軽減する',
      examples: [
        '消火カード：火災系攻撃を無効化',
        '防護具カード：ダメージを半減',
        '中和カード：特定タイプの攻撃を打ち消す'
      ],
      factBasis: '実際の防御手段・対策方法に基づく',
      icon: '🛡️',
      color: 'blue'
    },
    {
      type: '補助カード',
      purpose: '味方を強化する・能力を上げる',
      examples: [
        '設備強化カード：攻撃力+20',
        '訓練カード：全てのカードの効果+10%',
        '備蓄カード：手札を増やす'
      ],
      factBasis: '実際の設備や訓練の効果に基づく',
      icon: '⬆️',
      color: 'green'
    },
    {
      type: '妨害カード',
      purpose: '相手を弱体化する・行動を制限する',
      examples: [
        '規制強化カード：相手のカード使用を制限',
        '点検カード：相手のターンをスキップ',
        '警告カード：相手の攻撃力を下げる'
      ],
      factBasis: '実際の規制・点検・警告システムに基づく',
      icon: '⚠️',
      color: 'orange'
    },
    {
      type: 'リソースカード',
      purpose: 'ゲームの進行に必要な資源を管理',
      examples: [
        '予算カード：強力なカードを使うためのコスト',
        '時間カード：特定の行動に必要',
        '人員カード：複数のカードを同時使用するために必要'
      ],
      factBasis: '実際のリソース管理（予算、時間、人員）に基づく',
      icon: '💰',
      color: 'purple'
    },
    {
      type: '状況変化カード',
      purpose: 'ゲーム環境を変える・ルールを変更',
      examples: [
        '緊急事態カード：全員の攻撃力が変化',
        '気象カード：特定カードの効果が変わる',
        '法改正カード：ゲームルールの一部が変わる'
      ],
      factBasis: '実際の環境変化・制度変更に基づく',
      icon: '🌪️',
      color: 'pink'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
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
          <span>レッスン5</span>
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
            <span className="text-gray-500 dark:text-gray-400 text-sm">Lesson 5</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">防御/補助カード設計</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            ゲームに戦略性とバランスを与える、特殊カードの設計方法を学びましょう。
          </p>

          {/* Learning Objectives */}
          <div className="glass-card mt-8 max-w-3xl">
            <h3 className="section-label">学習目標</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>防御/補助カードの役割と重要性を理解する</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>特殊カードの種類と設計原則を学ぶ</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>効果文を整頓し、一貫性のあるルールを作る方法を習得する</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>AIを活用してバランスの取れた特殊カードを生成する</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Section 1: Why Special Cards */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">なぜ防御/補助カードが必要なのか？</h2>
          <div className="glass-card">
            <p className="text-lg leading-relaxed mb-6">
              攻撃カードだけのゲームは単調で戦略性に欠けます。<strong>防御/補助カード</strong>を加えることで、ゲームに深みと多様性が生まれます。
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="content-card border-l-4 border-red-500">
                <h4 className="font-bold text-lg mb-3 text-red-600 dark:text-red-400">✗ 攻撃のみのゲーム</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• 単純に強いカードを出すだけ</li>
                  <li>• 戦略の幅が狭い</li>
                  <li>• 先攻有利になりやすい</li>
                  <li>• 飽きやすい</li>
                </ul>
              </div>

              <div className="content-card border-l-4 border-green-500">
                <h4 className="font-bold text-lg mb-3 text-green-600 dark:text-green-400">✓ 防御/補助を含むゲーム</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• 多様な戦略が可能</li>
                  <li>• 読み合い・駆け引きが生まれる</li>
                  <li>• バランスが取れる</li>
                  <li>• 何度も楽しめる</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-xl p-6">
              <h4 className="font-bold text-xl mb-3">現実世界とのつながり</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                実際の現場では、「攻撃」だけでなく「防御」「準備」「対策」が重要です。例えば、危険物の管理では、事故を防ぐための<strong>保管設備</strong>、<strong>消火装置</strong>、<strong>訓練</strong>などが不可欠です。
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                防御/補助カードを通じて、これらの「守り」や「備え」の重要性を体験的に学ぶことができます。
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Special Card Types */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">特殊カードの種類</h2>
          <div className="glass-card">
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
              以下は代表的な特殊カードの種類です。学習分野に合わせて調整しましょう。
            </p>

            <div className="space-y-6">
              {specialCardTypes.map((cardType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`content-card category-card-${cardType.color}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{cardType.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{cardType.type}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        <strong>目的：</strong>{cardType.purpose}
                      </p>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-3">
                        <p className="text-sm font-semibold mb-2">具体例：</p>
                        <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                          {cardType.examples.map((example, i) => (
                            <li key={i}>• {example}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-3 rounded">
                        <p className="text-sm">
                          <strong>事実基盤：</strong>{cardType.factBasis}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 3: Design Principles */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">カード設計の原則</h2>
          <div className="glass-card">
            <div className="space-y-6">
              <div className="content-card bg-blue-50 dark:bg-blue-900/20">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldExclamationIcon className="w-8 h-8 text-blue-500" />
                  <h4 className="font-bold text-xl">1. 事実基盤制約の遵守</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  防御/補助カードであっても、効果は<strong>現実の事実</strong>に基づいている必要があります。
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">✓ 良い例</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      「スプリンクラー：水系の消火装置。火災攻撃を無効化する（実在する消火設備）」
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">✗ 悪い例</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      「魔法の盾：すべての攻撃を跳ね返す（現実に存在しない）」
                    </p>
                  </div>
                </div>
              </div>

              <div className="content-card bg-purple-50 dark:bg-purple-900/20">
                <div className="flex items-center gap-3 mb-3">
                  <SparklesIcon className="w-8 h-8 text-purple-500" />
                  <h4 className="font-bold text-xl">2. バランスの考慮</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  強すぎる防御/補助カードは、ゲームを壊してしまいます。<strong>適切なコスト</strong>や<strong>制約</strong>を設けましょう。
                </p>
                <div className="mt-3 bg-white dark:bg-gray-800 p-4 rounded">
                  <p className="text-sm mb-2"><strong>例：</strong></p>
                  <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• 強力な防御カードは1ターンに1枚しか使えない</li>
                    <li>• 補助効果は持続ターン数を制限する</li>
                    <li>• リソースカードを消費する必要がある</li>
                  </ul>
                </div>
              </div>

              <div className="content-card bg-orange-50 dark:bg-orange-900/20">
                <div className="flex items-center gap-3 mb-3">
                  <BoltIcon className="w-8 h-8 text-orange-500" />
                  <h4 className="font-bold text-xl">3. 戦略性の創出</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  単に「防御する」だけでなく、<strong>タイミング</strong>や<strong>組み合わせ</strong>で戦略が生まれるようにします。
                </p>
                <div className="mt-3 bg-white dark:bg-gray-800 p-4 rounded">
                  <p className="text-sm mb-2"><strong>戦略的な設計例：</strong></p>
                  <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• 特定のカードとの相性（シナジー）を持たせる</li>
                    <li>• 使用タイミングが重要になる効果を設計</li>
                    <li>• 相手の行動を予測して使うカードを作る</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 4: Polish Game Effect Text */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">効果文の整頓（polishGameEffectText）</h2>
          <div className="glass-card">
            <p className="text-lg leading-relaxed mb-6">
              学生が書いたカード効果は、表現がバラバラで分かりにくいことがあります。<strong>効果文を整頓</strong>することで、一貫性のあるルールを作りましょう。
            </p>

            <div className="space-y-6">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h4 className="font-bold text-lg mb-3">整頓の目的</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• <strong>統一されたフォーマット</strong>：すべてのカードで表現を統一</li>
                  <li>• <strong>明確な効果</strong>：曖昧な表現を具体的にする</li>
                  <li>• <strong>ルールの一貫性</strong>：矛盾がないようにする</li>
                  <li>• <strong>理解しやすさ</strong>：プレイヤーが直感的に理解できる</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="content-card border-l-4 border-red-500">
                  <h4 className="font-bold text-lg mb-3 text-red-600 dark:text-red-400">整頓前（バラバラ）</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <p className="text-gray-700 dark:text-gray-300">「火を消せます」</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <p className="text-gray-700 dark:text-gray-300">「攻撃を無効にする」</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <p className="text-gray-700 dark:text-gray-300">「相手のカードが使えなくなる」</p>
                    </div>
                  </div>
                </div>

                <div className="content-card border-l-4 border-green-500">
                  <h4 className="font-bold text-lg mb-3 text-green-600 dark:text-green-400">整頓後（統一）</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <p className="text-gray-700 dark:text-gray-300">「火災タイプの攻撃を無効化する」</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <p className="text-gray-700 dark:text-gray-300">「次の攻撃を無効化する」</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <p className="text-gray-700 dark:text-gray-300">「相手は次のターン、カードを1枚しか使用できない」</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-card bg-blue-50 dark:bg-blue-900/20">
                <h4 className="font-bold text-lg mb-3">整頓のポイント</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• <strong>動詞を統一</strong>：「無効化する」「増加する」「減少する」など</li>
                  <li>• <strong>対象を明確に</strong>：「すべて」「次の」「カテゴリXの」など</li>
                  <li>• <strong>数値を具体的に</strong>：「+20」「半減」「2倍」など</li>
                  <li>• <strong>条件を明記</strong>：「このターン」「フィールドにXがある場合」など</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 5: AI-Assisted Card Design */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">AIを活用した特殊カード生成</h2>
          <div className="glass-card">
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              AIを使って、バランスの取れた防御/補助カードのアイデアを生成できます。
            </p>

            <div className="space-y-6">
              <PromptCard
                title="防御カード生成プロンプト"
                description="学習分野に合わせた防御カードを生成"
                prompt={`以下の条件で、防御カードを5つ設計してください。

【学習分野】
（あなたの学習分野を記入）

【既存のカテゴリ】
（カテゴリ1、カテゴリ2...）

【条件】
1. 効果は現実の防御手段や対策に基づくこと
2. ゲームバランスを考慮した適度な強さにすること
3. 各カードの効果が重複しないこと

以下の形式で回答してください：
【カード名】：
【事実根拠】：（現実のどのような防御手段に基づいているか）
【ゲーム効果】：（統一されたフォーマットで）
【バランス調整】：（コストや制約）`}
                color="blue"
              />

              <PromptCard
                title="補助カード生成プロンプト"
                description="戦略性を高める補助カードを生成"
                prompt={`以下の条件で、補助カードを5つ設計してください。

【学習分野】
（あなたの学習分野を記入）

【既存のカテゴリ】
（カテゴリ1、カテゴリ2...）

【条件】
1. 効果は現実の設備・訓練・準備などに基づくこと
2. 味方を強化するが、強すぎないバランスにすること
3. 戦略的な使い方ができるデザインにすること

以下の形式で回答してください：
【カード名】：
【事実根拠】：（現実のどのような要素に基づいているか）
【ゲーム効果】：（統一されたフォーマットで）
【使用タイミング】：（どのような場面で有効か）`}
                color="green"
              />

              <PromptCard
                title="効果文整頓プロンプト"
                description="バラバラな効果文を統一フォーマットに"
                prompt={`以下のカード効果を、統一されたフォーマットで整頓してください。

【整頓前の効果】
1. （効果1）
2. （効果2）
3. （効果3）

【整頓の基準】
- 動詞を統一（無効化する、増加する、減少する、など）
- 対象を明確に（すべて、次の、カテゴリXの、など）
- 数値を具体的に（+20、半減、2倍、など）
- 条件を明記（このターン、フィールドにXがある場合、など）

整頓後の効果を、上記の基準に従って書き直してください。`}
                color="purple"
              />
            </div>

            <div className="mt-6 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">重要な注意</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                AIが生成した効果は<strong>必ず事実に基づいているか確認</strong>してください。また、実際にプレイして<strong>バランスをテスト</strong>することが重要です。
              </p>
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

        {/* Next Steps CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="glass-card bg-gradient-to-r from-green-500/10 to-blue-500/10 border-2 border-green-500/50">
            <h3 className="text-2xl font-bold mb-4">Phase 2 完了！</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              お疲れ様です。調査フェーズが完了しました。次は制作フェーズに進み、実際にカードを作成しましょう！
            </p>
            <TransitionLink href="/" className="btn-primary inline-flex items-center gap-2">
              ホームに戻る
              <HomeIcon className="w-5 h-5" />
            </TransitionLink>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
