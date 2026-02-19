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
      question: '指定数量の倍数が1以上になると、何が必要になりますか？',
      options: [
        '特別な容器の購入',
        '危険物施設としての許可',
        '保険への加入',
        '消防署への通報'
      ],
      correct: 1,
      explanation: '指定数量の倍数が1以上になると、消防法に基づく「危険物施設」としての許可が必要になります。つまり、ガソリン200L以上を貯蔵する場合は許可なしには貯蔵できません。'
    },
    {
      question: 'ガソリン80Lを貯蔵する場合、指定数量の倍数はいくつですか？',
      options: [
        '0.2倍',
        '0.4倍',
        '0.8倍',
        '1.0倍'
      ],
      correct: 1,
      explanation: 'ガソリンの指定数量は200Lです。80L / 200L = 0.4倍となります。1未満なので許可は不要ですが、市町村条例に基づく届出が必要な場合があります。'
    },
    {
      question: '危険物の運搬時に車両に必ず携行しなければならないものは何ですか？',
      options: [
        '取扱者の資格証',
        '消火器',
        '防毒マスク',
        '温度計'
      ],
      correct: 1,
      explanation: '危険物を運搬する車両には消火器の携行が義務付けられています。また「危」の標識を掲示し、容器の漏れがないか確認し、混載禁止物質がないか確認する必要があります。'
    }
  ];

  const regulationExamples = [
    {
      title: '貯蔵基準違反',
      regulation: '密栓冷暗所保管、火気厳禁表示、換気確保、静電気対策を怠った',
      effect: '「ペナルティ効果：貯蔵基準に違反した物質カードは攻撃力が半減する。次のターン終了まで使用不可」',
      icon: '🏢',
      color: 'blue'
    },
    {
      title: '混載禁止',
      regulation: '第1類（酸化性固体）と第4類（引火性液体）は混載運搬禁止',
      effect: '「併用不可：酸化性カードと引火性カードは同時にフィールドに出せない」',
      icon: '⚠️',
      color: 'pink'
    },
    {
      title: '指定数量超過',
      regulation: '指定数量の倍数が1以上で危険物施設としての許可が必要',
      effect: '「レアリティ制限：指定数量が少ない（=危険度が高い）カードほどレア。デッキに入れられる枚数が少ない」',
      icon: '📜',
      color: 'orange'
    },
    {
      title: '運搬基準違反',
      regulation: '「危」標識未掲示、消火器未携行、容器の漏れ確認を怠った',
      effect: '「運搬失敗：運搬カードなしで物質カードを移動すると、移動先でダメージを受ける」',
      icon: '🚛',
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen lesson-page-bg">
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
            <span className="text-[var(--text-muted)] text-sm">Lesson 4</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">規制と法令</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            現実世界の規制や法令をカードゲームに取り入れ、実践的な学習を実現しましょう。
          </p>

          {/* Learning Objectives */}
          <div className="glass-card mt-8 max-w-3xl">
            <h3 className="section-label">学習目標</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                <span>消防法の3本柱（貯蔵・取扱い・運搬の基準）を理解する</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                <span>指定数量の倍数計算ができるようになる</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                <span>消防法の規制をゲーム効果に変換する方法を学ぶ</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                <span>規制カード・ペナルティカードを設計するスキルを身につける</span>
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
                  <ShieldCheckIcon className="w-8 h-8 text-[var(--color-info)]" />
                  <h4 className="font-bold text-lg">リアリティの向上</h4>
                </div>
                <p className="text-[var(--text-secondary)]">
                  現実世界のルールをゲームに反映することで、より実践的で説得力のある学習体験が得られます。
                </p>
              </div>

              <div className="content-card category-card-purple">
                <div className="flex items-center gap-3 mb-3">
                  <ScaleIcon className="w-8 h-8 text-[var(--color-purple)]" />
                  <h4 className="font-bold text-lg">実務スキルの習得</h4>
                </div>
                <p className="text-[var(--text-secondary)]">
                  ゲームを通じて規制を学ぶことで、実際の業務で必要な法的知識が自然と身につきます。
                </p>
              </div>

              <div className="content-card category-card-pink">
                <div className="flex items-center gap-3 mb-3">
                  <DocumentTextIcon className="w-8 h-8 text-[var(--color-pink)]" />
                  <h4 className="font-bold text-lg">深い理解</h4>
                </div>
                <p className="text-[var(--text-secondary)]">
                  「なぜこの規制があるのか」を考えることで、単なる暗記ではなく、背景や理由まで理解できます。
                </p>
              </div>

              <div className="content-card category-card-orange">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircleIcon className="w-8 h-8 text-[var(--accent)]" />
                  <h4 className="font-bold text-lg">ゲームバランス</h4>
                </div>
                <p className="text-[var(--text-secondary)]">
                  規制という「制約」を加えることで、戦略性が増し、よりバランスの取れたゲームになります。
                </p>
              </div>
            </div>

            <div className="mt-6 bg-[var(--color-info-subtle)] border-2 border-[var(--color-info)] rounded-xl p-6">
              <h4 className="font-bold text-xl mb-3">具体例：指定数量がゲームバランスを生む</h4>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                特殊引火物（ジエチルエーテルなど）の指定数量は50L、第4石油類（潤滑油など）は6,000Lです。指定数量が少ない＝規制が厳しい＝それだけ危険な物質。カードゲームでは「指定数量が少ないほどレアで強いカード」「ただしデッキに入れられる枚数が少ない」というルールにすると、<strong>規制の厳しさがそのままゲームバランス</strong>になります。
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 2: 消防法の3本柱 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">消防法の3本柱：貯蔵・取扱い・運搬</h2>
          <div className="glass-card">
            <p className="text-lg mb-8 text-[var(--text-secondary)]">
              第4類危険物を安全に扱うために、消防法は<strong>貯蔵</strong>・<strong>取扱い</strong>・<strong>運搬</strong>の3つの基準を定めています。これらの基準を理解し、カードゲームのルールに活かしましょう。
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-[var(--color-info)] pl-6">
                <h4 className="font-bold text-xl mb-2">1. 貯蔵の基準</h4>
                <p className="text-[var(--text-secondary)] mb-3">
                  危険物を安全に保管するための基準。引火性液体は蒸気が発生しやすいため、特に厳格です。
                </p>
                <div className="bg-[var(--color-info-subtle)] p-4 rounded space-y-2">
                  <p className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                    <span className="text-[var(--color-info)] font-bold">1</span>
                    <span><strong>密栓・冷暗所保管</strong>：蒸気の漏洩を防ぎ、高温を避ける</span>
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                    <span className="text-[var(--color-info)] font-bold">2</span>
                    <span><strong>火気厳禁表示</strong>：貯蔵所の見やすい位置に掲示</span>
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                    <span className="text-[var(--color-info)] font-bold">3</span>
                    <span><strong>換気の確保</strong>：可燃性蒸気が滞留しないよう、常時換気</span>
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                    <span className="text-[var(--color-info)] font-bold">4</span>
                    <span><strong>静電気対策</strong>：接地（アース）により静電気の蓄積を防止</span>
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-[var(--color-purple)] pl-6">
                <h4 className="font-bold text-xl mb-2">2. 取扱いの基準</h4>
                <p className="text-[var(--text-secondary)] mb-3">
                  危険物を実際に使用・作業する際の基準。引火・爆発を防ぐことが最大の目的です。
                </p>
                <div className="bg-[var(--color-purple-subtle)] p-4 rounded space-y-2">
                  <p className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                    <span className="text-[var(--color-purple)] font-bold">1</span>
                    <span><strong>火気の使用禁止</strong>：危険物の付近で火気を使用しない</span>
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                    <span className="text-[var(--color-purple)] font-bold">2</span>
                    <span><strong>蒸気発生の抑制</strong>：容器を不必要に開放しない、温度上昇を避ける</span>
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                    <span className="text-[var(--color-purple)] font-bold">3</span>
                    <span><strong>容器の転倒防止</strong>：容器を安定した場所に置き、転倒・落下を防ぐ</span>
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-[var(--color-pink)] pl-6">
                <h4 className="font-bold text-xl mb-2">3. 運搬の基準</h4>
                <p className="text-[var(--text-secondary)] mb-3">
                  危険物を車両で運搬する際の基準。事故時の被害拡大を防ぐための規定です。
                </p>
                <div className="bg-[var(--color-pink-subtle)] p-4 rounded space-y-2">
                  <p className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                    <span className="text-[var(--color-pink)] font-bold">1</span>
                    <span><strong>容器の漏れ確認</strong>：出発前に容器の密閉状態を確認</span>
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                    <span className="text-[var(--color-pink)] font-bold">2</span>
                    <span><strong>混載禁止の確認</strong>：第1類（酸化性固体）と第4類は混載不可</span>
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                    <span className="text-[var(--color-pink)] font-bold">3</span>
                    <span><strong>「危」標識の掲示</strong>：車両の前後に0.3m四方以上の「危」標識</span>
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                    <span className="text-[var(--color-pink)] font-bold">4</span>
                    <span><strong>消火器の携行</strong>：車両には対応する消火器を必ず携行</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 2.5: 指定数量の計算練習 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">指定数量の計算練習</h2>
          <div className="glass-card">
            <p className="text-lg mb-6 text-[var(--text-secondary)]">
              異なる種類の危険物を同じ場所に貯蔵する場合、<strong>指定数量の倍数</strong>を計算して許可の要否を判断します。
            </p>

            <div className="bg-[var(--color-info-subtle)] border-2 border-[var(--color-info)] rounded-xl p-6 mb-6">
              <h4 className="font-bold text-xl mb-3">計算公式</h4>
              <div className="bg-[var(--surface)] rounded-lg p-4 text-center">
                <p className="text-lg font-mono">
                  倍数 = 各物質の（貯蔵量 / 指定数量）の合計
                </p>
                <p className="text-sm text-[var(--text-muted)] mt-2">
                  倍数が <strong>1以上</strong> → 危険物施設としての許可が必要
                </p>
              </div>
            </div>

            <div className="content-card category-card-orange mb-6">
              <h4 className="font-bold text-lg mb-4">例題：倍数を計算しよう</h4>
              <p className="text-[var(--text-secondary)] mb-4">
                以下の3物質を同じ場所に貯蔵する場合、指定数量の倍数はいくつになるか？
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[var(--accent-muted)]">
                      <th className="border border-[var(--accent)] px-4 py-2 text-left">物質名</th>
                      <th className="border border-[var(--accent)] px-4 py-2 text-center">分類</th>
                      <th className="border border-[var(--accent)] px-4 py-2 text-center">貯蔵量</th>
                      <th className="border border-[var(--accent)] px-4 py-2 text-center">指定数量</th>
                      <th className="border border-[var(--accent)] px-4 py-2 text-center">倍数</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-[var(--surface)]">
                      <td className="border border-[var(--accent)] px-4 py-2">ガソリン</td>
                      <td className="border border-[var(--accent)] px-4 py-2 text-center">第1石油類</td>
                      <td className="border border-[var(--accent)] px-4 py-2 text-center">100L</td>
                      <td className="border border-[var(--accent)] px-4 py-2 text-center">200L</td>
                      <td className="border border-[var(--accent)] px-4 py-2 text-center">0.5</td>
                    </tr>
                    <tr className="bg-[var(--accent-subtle)]">
                      <td className="border border-[var(--accent)] px-4 py-2">灯油</td>
                      <td className="border border-[var(--accent)] px-4 py-2 text-center">第2石油類</td>
                      <td className="border border-[var(--accent)] px-4 py-2 text-center">500L</td>
                      <td className="border border-[var(--accent)] px-4 py-2 text-center">1,000L</td>
                      <td className="border border-[var(--accent)] px-4 py-2 text-center">0.5</td>
                    </tr>
                    <tr className="bg-[var(--surface)]">
                      <td className="border border-[var(--accent)] px-4 py-2">重油</td>
                      <td className="border border-[var(--accent)] px-4 py-2 text-center">第3石油類</td>
                      <td className="border border-[var(--accent)] px-4 py-2 text-center">1,000L</td>
                      <td className="border border-[var(--accent)] px-4 py-2 text-center">2,000L</td>
                      <td className="border border-[var(--accent)] px-4 py-2 text-center">0.5</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="bg-[var(--accent-muted)] font-bold">
                      <td colSpan={4} className="border border-[var(--accent)] px-4 py-2 text-right">合計倍数</td>
                      <td className="border border-[var(--accent)] px-4 py-2 text-center text-[var(--accent)]">1.5</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="mt-4 bg-[var(--color-danger-subtle)] border-l-4 border-[var(--color-danger)] p-4 rounded-r">
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong>結果：1.5倍 &gt; 1.0</strong> → 指定数量以上のため、危険物施設としての<strong>許可が必要</strong>です。
                </p>
              </div>
            </div>

            <div className="content-card category-card-blue">
              <h4 className="font-bold text-lg mb-4">練習問題</h4>
              <p className="text-[var(--text-secondary)] mb-3">
                以下の場合、倍数はいくつになるか計算してみましょう。許可は必要？
              </p>
              <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-info)] font-bold">Q1</span>
                  <span>ガソリン60L + エタノール200L（指定数量400L）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-info)] font-bold">Q2</span>
                  <span>灯油800L + 軽油600L（どちらも第2石油類・非水溶性、指定数量1,000L）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-info)] font-bold">Q3</span>
                  <span>ジエチルエーテル30L（特殊引火物、指定数量50L）+ ガソリン150L</span>
                </li>
              </ul>
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
            <p className="text-lg mb-8 text-[var(--text-secondary)]">
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
                    <div className="bg-[var(--surface)] p-3 rounded">
                      <p className="text-xs font-semibold text-[var(--text-muted)] mb-1">現実の規制</p>
                      <p className="text-sm text-[var(--text-secondary)]">{example.regulation}</p>
                    </div>
                    <div className="bg-[var(--color-info-subtle)] p-3 rounded">
                      <p className="text-xs font-semibold text-[var(--text-muted)] mb-1">ゲーム効果</p>
                      <p className="text-sm text-[var(--text-secondary)]">{example.effect}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-[var(--color-warning-subtle)] rounded-lg border-l-4 border-[var(--color-warning)]">
              <h4 className="font-bold text-lg mb-3">変換のポイント</h4>
              <ul className="space-y-2 text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-warning)] font-bold">•</span>
                  <span><strong>指定数量 → レアリティ</strong>：指定数量が少ない（＝規制が厳しい）ほどレアカードにする</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-warning)] font-bold">•</span>
                  <span><strong>混載禁止 → 併用不可</strong>：現実で一緒に運べない物質は、ゲームでも同時使用不可にする</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-warning)] font-bold">•</span>
                  <span><strong>貯蔵基準 → 維持コスト</strong>：特殊な保管が必要な物質は、フィールドに出し続けるコストが高い</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-warning)] font-bold">•</span>
                  <span><strong>運搬基準 → 移動条件</strong>：運搬ルールが厳しい物質は、ゲーム内での移動にも条件がつく</span>
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
              <h3 className="text-xl font-bold mb-4">消防法の規制をゲームに変換しよう</h3>
              <p className="text-[var(--text-muted)] mb-6">
                消防法の貯蔵・取扱い・運搬基準を活かして、規制カードやペナルティカードを設計しましょう。
              </p>

              <div className="space-y-6">
                <div>
                  <p className="font-semibold mb-3">ステップ1：規制カードの設計（3枚以上）</p>
                  <p className="text-sm text-[var(--text-muted)] mb-2">
                    貯蔵・取扱い・運搬の基準から、それぞれ1枚以上の規制カードを考えてください
                  </p>
                  <div className="grid gap-4">
                    {['貯蔵基準から', '取扱い基準から', '運搬基準から'].map((label, num) => (
                      <div key={num} className="bg-[var(--surface)] border-2 border-dashed border-[var(--border-color)] rounded p-4">
                        <p className="text-sm font-semibold mb-2">{label}</p>
                        <div className="space-y-2">
                          <div>
                            <p className="text-xs text-[var(--text-muted)]">規制内容：</p>
                            <p className="text-sm text-[var(--text-muted)]">（例：「火気厳禁を無視した」「密栓を怠った」など）</p>
                          </div>
                          <div>
                            <p className="text-xs text-[var(--text-muted)]">ゲーム効果：</p>
                            <p className="text-sm text-[var(--text-muted)]">（例：「蒸気が漏洩し、全員1ダメージ」）</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-3">ステップ2：指定数量とレアリティの対応表</p>
                  <p className="text-sm text-[var(--text-muted)] mb-2">
                    各分類の指定数量に基づいて、カードのレアリティを決めてください
                  </p>
                  <div className="bg-[var(--surface)] border-2 border-dashed border-[var(--border-color)] rounded p-4">
                    <p className="text-sm text-[var(--text-muted)]">
                      （例：特殊引火物50L → UR、第1石油類200L → SR、第2石油類1,000L → R ...）
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-3">ステップ3：混載禁止ルールの設計</p>
                  <p className="text-sm text-[var(--text-muted)] mb-2">
                    現実の混載禁止をゲームルールに変換してください
                  </p>
                  <div className="bg-[var(--surface)] border-2 border-dashed border-[var(--border-color)] rounded p-4 min-h-24">
                    <p className="text-sm text-[var(--text-muted)]">
                      （例：「酸化性カードと引火性カードが同時に場にあると爆発イベント発生」）
                    </p>
                  </div>
                </div>

                <div className="bg-[var(--color-info-subtle)] border-l-4 border-[var(--color-info)] p-4 rounded-r">
                  <h4 className="font-bold mb-2">チェックポイント</h4>
                  <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
                    <li>□ 3本柱（貯蔵・取扱い・運搬）それぞれの規制カードがある</li>
                    <li>□ 指定数量とレアリティの対応に根拠がある</li>
                    <li>□ 混載禁止ルールが消防法の実際の規定に基づいている</li>
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
                      className="bg-[var(--color-success-subtle)] border-l-4 border-[var(--color-success)] p-4 rounded-r"
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
          <div className="glass-card bg-[var(--accent-subtle)] border-2 border-[var(--accent)]">
            <h3 className="text-2xl font-bold mb-4">次のレッスンへ</h3>
            <p className="text-[var(--text-secondary)] mb-6">
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
