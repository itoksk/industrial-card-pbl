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
      question: '第4類危険物の分類で、最も重要な基準となるパラメータは何ですか？',
      options: [
        '比重',
        '引火点',
        '沸点',
        '蒸気比重'
      ],
      correct: 1,
      explanation: '第4類危険物は「引火点」の違いによって7つに分類されます。引火点が低いほど引火しやすく危険度が高いため、分類の最も重要な基準となっています。'
    },
    {
      question: 'ガソリン（引火点-40℃）と灯油（引火点40℃以上）の分類が異なる理由は？',
      options: [
        '色が違うから',
        '用途が違うから',
        '引火点21℃の境界を挟んでいるから',
        '比重が違うから'
      ],
      correct: 2,
      explanation: '第1石油類と第2石油類の境界は「引火点21℃」です。ガソリンは引火点-40℃で21℃未満なので第1石油類、灯油は引火点40℃以上で21℃以上なので第2石油類に分類されます。'
    },
    {
      question: '指定数量が最も少ない（＝最も厳しく規制されている）分類はどれですか？',
      options: [
        '第1石油類（200L）',
        'アルコール類（400L）',
        '特殊引火物（50L）',
        '第2石油類（1000L）'
      ],
      correct: 2,
      explanation: '特殊引火物の指定数量は50Lで、7分類中最も少なく厳しい規制がかけられています。それだけ危険度が高いということです。発火点100℃以下、または引火点-20℃以下かつ沸点40℃以下という条件を満たす物質が該当します。'
    }
  ];

  const categories = [
    {
      name: '特殊引火物',
      color: 'red',
      description: '発火点100℃以下、または引火点-20℃以下かつ沸点40℃以下',
      quantity: '50L',
      examples: 'ジエチルエーテル、二硫化炭素、アセトアルデヒド',
      icon: '⚡'
    },
    {
      name: '第1石油類',
      color: 'orange',
      description: '引火点が21℃未満',
      quantity: '非水溶性200L / 水溶性400L',
      examples: 'ガソリン、アセトン、ベンゼン、トルエン',
      icon: '⛽'
    },
    {
      name: 'アルコール類',
      color: 'purple',
      description: '炭素数1〜3の飽和一価アルコール',
      quantity: '400L',
      examples: 'メタノール、エタノール、プロパノール',
      icon: '🧪'
    },
    {
      name: '第2石油類',
      color: 'blue',
      description: '引火点が21℃以上70℃未満',
      quantity: '非水溶性1000L / 水溶性2000L',
      examples: '灯油、軽油、キシレン',
      icon: '🛢️'
    },
    {
      name: '第3石油類',
      color: 'green',
      description: '引火点が70℃以上200℃未満',
      quantity: '非水溶性2000L / 水溶性4000L',
      examples: '重油、グリセリン、クレオソート油',
      icon: '🏭'
    },
    {
      name: '第4石油類',
      color: 'cyan',
      description: '引火点が200℃以上250℃未満',
      quantity: '6000L',
      examples: 'ギヤー油、シリンダー油、潤滑油',
      icon: '⚙️'
    },
    {
      name: '動植物油類',
      color: 'pink',
      description: '動植物から抽出した油で引火点250℃未満',
      quantity: '10000L',
      examples: 'アマニ油、ヤシ油、オリーブ油',
      icon: '🫒'
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      <div className="container-custom py-12">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="breadcrumb mb-8"
        >
          <Link href="/" className="hover:text-[var(--accent)] transition-colors">
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
            <span className="text-[var(--text-muted)] text-sm">Lesson 2</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">第4類危険物の分類</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            第4類「引火性液体」の7分類を理解し、カードゲームに適した分類体系を構築しましょう。
          </p>

          {/* Learning Objectives */}
          <div className="glass-card mt-8 max-w-3xl">
            <h3 className="section-label">学習目標</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                <span>第4類危険物の7つの分類と引火点の基準を覚える</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                <span>各分類の代表的な物質と指定数量を理解する</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                <span>指定数量の倍数計算ができるようになる</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                <span>分類演習を通じて実践的な知識を身につける</span>
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
              第4類危険物は「引火性液体」の総称ですが、ガソリンと潤滑油では危険度が全く異なります。<strong>引火点の違い</strong>で7つに分類することで、適切な規制と安全管理ができるのです。
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="content-card category-card-blue">
                <div className="flex items-center gap-3 mb-3">
                  <Squares2X2Icon className="w-8 h-8 text-[var(--color-info)]" />
                  <h4 className="font-bold text-lg">危険度の序列化</h4>
                </div>
                <p className="text-[var(--text-secondary)]">
                  引火点が低いほど引火しやすく危険です。分類を知ることで、どの物質により注意が必要かが一目でわかります。
                </p>
              </div>

              <div className="content-card category-card-purple">
                <div className="flex items-center gap-3 mb-3">
                  <TagIcon className="w-8 h-8 text-[var(--color-purple)]" />
                  <h4 className="font-bold text-lg">指定数量による規制</h4>
                </div>
                <p className="text-[var(--text-secondary)]">
                  分類ごとに「指定数量」が決められており、この量を超えて貯蔵・取扱いする場合は許可が必要になります。
                </p>
              </div>

              <div className="content-card category-card-pink">
                <div className="flex items-center gap-3 mb-3">
                  <ListBulletIcon className="w-8 h-8 text-[var(--color-pink)]" />
                  <h4 className="font-bold text-lg">消火方法の選択</h4>
                </div>
                <p className="text-[var(--text-secondary)]">
                  分類によって適切な消火方法が異なります。水溶性か非水溶性かで使える消火器も変わります。
                </p>
              </div>

              <div className="content-card category-card-orange">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircleIcon className="w-8 h-8 text-[var(--accent)]" />
                  <h4 className="font-bold text-lg">カードのゲームバランス</h4>
                </div>
                <p className="text-[var(--text-secondary)]">
                  危険度が高い物質ほどカードの攻撃力が高い、など分類を活かしたゲーム設計ができます。
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Categorization Principles - 引火点 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">分類の基準：引火点</h2>
          <div className="glass-card">
            <div className="space-y-6">
              <div className="border-l-4 border-[var(--color-danger)] pl-6">
                <h4 className="font-bold text-xl mb-2">引火点とは？</h4>
                <p className="text-[var(--text-secondary)] mb-3">
                  液体が蒸発して、その蒸気に火を近づけたときに<strong>引火する最低温度</strong>のことです。引火点が低いほど、常温でも引火しやすく危険です。
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[var(--color-danger-subtle)] p-4 rounded">
                    <p className="text-sm font-semibold text-[var(--color-danger)] mb-2">非常に危険</p>
                    <p className="text-sm text-[var(--text-secondary)]">
                      ガソリン：引火点 -40℃ -- 冬の屋外でも引火する
                    </p>
                  </div>
                  <div className="bg-[var(--color-success-subtle)] p-4 rounded">
                    <p className="text-sm font-semibold text-[var(--color-success)] mb-2">比較的安全</p>
                    <p className="text-sm text-[var(--text-secondary)]">
                      重油：引火点 60-150℃ -- 加熱しないと引火しない
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-[var(--accent)] pl-6">
                <h4 className="font-bold text-xl mb-2">境界値を覚えよう</h4>
                <p className="text-[var(--text-secondary)]">
                  第4類の分類は、以下の<strong>引火点の境界値</strong>で決まります。特に「21℃」は第1石油類と第2石油類を分ける最重要ラインです。
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-purple)] pl-6">
                <h4 className="font-bold text-xl mb-2">特殊な分類条件</h4>
                <p className="text-[var(--text-secondary)]">
                  「特殊引火物」と「アルコール類」は引火点だけでなく、特別な条件で定義されています。特殊引火物は発火点100℃以下、アルコール類は炭素数1〜3の飽和一価アルコールです。
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-info)] pl-6">
                <h4 className="font-bold text-xl mb-2">水溶性で指定数量が変わる</h4>
                <p className="text-[var(--text-secondary)]">
                  第1・第2・第3石油類は、<strong>水溶性か非水溶性か</strong>で指定数量が2倍異なります。水溶性の方が消火しやすいため、指定数量が大きく（規制が緩く）なっています。
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 3: 7 Categories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">第4類危険物の7分類</h2>
          <div className="glass-card">
            <p className="text-lg mb-8 text-[var(--text-secondary)]">
              引火点が低い順（危険度が高い順）に並んでいます。指定数量が少ないほど、厳しく規制されています。
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
                    <div>
                      <h3 className="text-xl font-bold">{category.name}</h3>
                      <p className="text-sm text-[var(--text-muted)]">指定数量: {category.quantity}</p>
                    </div>
                  </div>
                  <p className="text-[var(--text-secondary)] mb-3">
                    {category.description}
                  </p>
                  <div className="bg-[var(--section-alt-bg)] p-3 rounded text-sm">
                    <p className="font-semibold mb-1">代表物質：</p>
                    <p className="text-[var(--text-muted)]">{category.examples}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 4: Designated Quantities & Threshold */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">指定数量と引火点の境界値</h2>
          <div className="glass-card">
            <p className="text-lg leading-relaxed mb-6">
              第4類危険物の分類は<strong>引火点の境界値</strong>で決まります。この数値を覚えることが、分類を理解する鍵です。
            </p>

            <div className="space-y-6">
              <div className="content-card bg-[var(--color-info-subtle)]">
                <h4 className="font-bold text-lg mb-3">引火点の境界値</h4>
                <p className="text-[var(--text-secondary)] mb-3">
                  以下の温度を境に分類が変わります。特に21℃は最重要です。
                </p>
                <div className="bg-[var(--surface)] p-4 rounded">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-[var(--border-color)]">
                          <th className="text-left py-2 pr-4">分類</th>
                          <th className="text-left py-2 pr-4">引火点の基準</th>
                          <th className="text-left py-2 pr-4">指定数量</th>
                        </tr>
                      </thead>
                      <tbody className="text-[var(--text-secondary)]">
                        <tr className="border-b border-[var(--border-color)]">
                          <td className="py-2 pr-4 font-semibold text-[var(--color-danger)]">特殊引火物</td>
                          <td className="py-2 pr-4">発火点100℃以下 or 引火点-20℃以下&沸点40℃以下</td>
                          <td className="py-2 pr-4 font-bold">50L</td>
                        </tr>
                        <tr className="border-b border-[var(--border-color)]">
                          <td className="py-2 pr-4 font-semibold text-[var(--accent)]">第1石油類</td>
                          <td className="py-2 pr-4">21℃未満</td>
                          <td className="py-2 pr-4 font-bold">200L / 400L</td>
                        </tr>
                        <tr className="border-b border-[var(--border-color)]">
                          <td className="py-2 pr-4 font-semibold text-[var(--color-purple)]">アルコール類</td>
                          <td className="py-2 pr-4">C1-3の飽和一価アルコール</td>
                          <td className="py-2 pr-4 font-bold">400L</td>
                        </tr>
                        <tr className="border-b border-[var(--border-color)]">
                          <td className="py-2 pr-4 font-semibold text-[var(--color-info)]">第2石油類</td>
                          <td className="py-2 pr-4">21℃以上 70℃未満</td>
                          <td className="py-2 pr-4 font-bold">1000L / 2000L</td>
                        </tr>
                        <tr className="border-b border-[var(--border-color)]">
                          <td className="py-2 pr-4 font-semibold text-[var(--color-success)]">第3石油類</td>
                          <td className="py-2 pr-4">70℃以上 200℃未満</td>
                          <td className="py-2 pr-4 font-bold">2000L / 4000L</td>
                        </tr>
                        <tr className="border-b border-[var(--border-color)]">
                          <td className="py-2 pr-4 font-semibold text-[var(--color-cyan)]">第4石油類</td>
                          <td className="py-2 pr-4">200℃以上 250℃未満</td>
                          <td className="py-2 pr-4 font-bold">6000L</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 font-semibold text-[var(--color-pink)]">動植物油類</td>
                          <td className="py-2 pr-4">250℃未満（動植物由来）</td>
                          <td className="py-2 pr-4 font-bold">10000L</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="content-card bg-[var(--color-purple-subtle)]">
                <h4 className="font-bold text-lg mb-3">指定数量の倍数計算</h4>
                <p className="text-[var(--text-secondary)] mb-3">
                  複数の危険物を同じ場所で貯蔵する場合、<strong>指定数量の倍数</strong>を計算して合計が1以上なら許可が必要です。
                </p>
                <div className="bg-[var(--surface)] p-4 rounded mb-4">
                  <p className="text-sm font-semibold mb-2 text-[var(--color-purple)]">
                    公式：倍数 = 各物質の（貯蔵量 / 指定数量）の合計
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[var(--surface)] p-3 rounded">
                    <p className="text-sm font-semibold mb-2 text-[var(--color-purple)]">
                      例題
                    </p>
                    <p className="text-sm text-[var(--text-secondary)]">
                      ガソリン100L + 灯油500L を貯蔵する場合
                    </p>
                  </div>
                  <div className="bg-[var(--surface)] p-3 rounded">
                    <p className="text-sm font-semibold mb-2 text-[var(--color-purple)]">
                      計算
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] font-mono">
                      100/200 + 500/1000 = 0.5 + 0.5 = <strong>1.0倍</strong>
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">
                      1.0倍以上なので許可が必要
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
              <p className="text-[var(--text-muted)] mb-6">
                第4類危険物の分類について、実際に手を動かして確認しましょう。
              </p>

              <div className="space-y-6">
                <div>
                  <p className="font-semibold mb-3">ステップ1：物質の分類</p>
                  <p className="text-sm text-[var(--text-muted)] mb-2">
                    以下の物質をそれぞれ正しい分類に振り分けてください：ガソリン、灯油、エタノール、ジエチルエーテル、重油、潤滑油、アマニ油、軽油
                  </p>
                  <div className="bg-[var(--surface)] border-2 border-dashed border-[var(--border-color)] rounded p-4 min-h-32">
                    <p className="text-sm text-[var(--text-muted)]">（分類名：物質名 の形式で記入）</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-3">ステップ2：引火点の境界値</p>
                  <p className="text-sm text-[var(--text-muted)] mb-2">
                    第1石油類と第2石油類の境界は何℃？ 第2石油類と第3石油類の境界は何℃？
                  </p>
                  <div className="bg-[var(--surface)] border-2 border-dashed border-[var(--border-color)] rounded p-4 min-h-24">
                    <p className="text-sm text-[var(--text-muted)]">（ここに記入）</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-3">ステップ3：指定数量の倍数計算</p>
                  <p className="text-sm text-[var(--text-muted)] mb-2">
                    次の場合の倍数を計算してください：ガソリン60L + 灯油800L + 重油1000L
                  </p>
                  <div className="bg-[var(--surface)] border-2 border-dashed border-[var(--border-color)] rounded p-4 min-h-24">
                    <p className="text-sm text-[var(--text-muted)]">（計算式と答えを記入）</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-3">ステップ4：カードへの応用を考える</p>
                  <p className="text-sm text-[var(--text-muted)] mb-2">
                    7分類をカードゲームにどう活かせるか、アイデアを出してください
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {['分類ごとの色分け', 'レアリティへの反映', 'ゲーム効果の違い'].map((hint, num) => (
                      <div key={num} className="bg-[var(--surface)] border-2 border-dashed border-[var(--border-color)] rounded p-3">
                        <p className="text-sm font-semibold mb-2">{hint}</p>
                        <p className="text-xs text-[var(--text-muted)]">（アイデアを記入）</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[var(--color-warning-subtle)] border-l-4 border-[var(--color-warning)] p-4 rounded-r">
                  <h4 className="font-bold mb-2">チェックポイント</h4>
                  <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
                    <li>□ 7分類の名称と順番を覚えた</li>
                    <li>□ 引火点21℃の境界の意味を理解した</li>
                    <li>□ 指定数量の倍数計算ができるようになった</li>
                    <li>□ 各分類の代表物質を最低1つ挙げられる</li>
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
            <p className="text-[var(--text-muted)] mb-6">
              このレッスンの内容を理解できたかチェックしましょう。
            </p>

            <div className="space-y-8">
              {quizData.map((quiz, qIndex) => (
                <div key={qIndex} className="border-t pt-6 first:border-t-0 first:pt-0">
                  <h4 className="font-bold text-lg mb-4">問題 {qIndex + 1}</h4>
                  <p className="mb-4 text-[var(--text-secondary)]">{quiz.question}</p>

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
                            ? 'selected'
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
                      className="callout-success"
                    >
                      <p className="font-bold text-[var(--color-success)] mb-2">
                        正解: {String.fromCharCode(65 + quiz.correct)}
                      </p>
                      <p className="text-[var(--text-secondary)]">{quiz.explanation}</p>
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
          <div className="glass-card border-2" style={{ background: 'var(--color-purple-subtle)', borderColor: 'var(--color-purple)' }}>
            <h3 className="text-2xl font-bold mb-4">次のレッスンへ</h3>
            <p className="text-[var(--text-secondary)] mb-6">
              7分類を理解したら、次は各物質の「パラメータ」を調査しましょう。引火点・発火点・比重など、カード作りに必要な数値データを集めます。
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
