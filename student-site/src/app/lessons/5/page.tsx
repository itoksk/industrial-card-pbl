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
      question: 'ガソリンが燃えている火災に水をかけるとどうなりますか？',
      options: [
        '火が消える',
        '火災が拡大する',
        '何も変化しない',
        '爆発が起きる'
      ],
      correct: 1,
      explanation: 'ガソリンは比重が約0.7で水より軽いため、水をかけると油が水の上に浮き、燃えながら広がります。さらに水が急激に蒸発して油を飛散させ、火災が拡大します。非水溶性の引火性液体には水での消火は厳禁です。'
    },
    {
      question: 'アルコール（エタノール）の火災に最も適した消火方法はどれですか？',
      options: [
        '普通の泡消火器',
        '耐アルコール泡消火剤または霧状の水',
        'CO2消火器',
        '乾燥砂'
      ],
      correct: 1,
      explanation: 'アルコールは水溶性のため、普通の泡消火剤では泡が溶けてしまいます。耐アルコール泡（水成膜泡）や霧状の水が効果的です。CO2は屋内では有効ですが、アルコール火災には耐アルコール泡が最適です。'
    },
    {
      question: '二硫化炭素の火災にCO2（二酸化炭素）消火器を使ってはいけない理由は何ですか？',
      options: [
        'CO2が二硫化炭素と化学反応を起こすため',
        '二硫化炭素の発火点が極めて低く（90度C）、CO2では冷却が不十分なため',
        'CO2が爆発するため',
        '二硫化炭素がCO2を吸収するため'
      ],
      correct: 1,
      explanation: '二硫化炭素の発火点は約90度Cと極めて低く、CO2消火器による冷却だけでは発火点以下まで温度を下げることが困難です。再発火の危険が高いため、泡や粉末消火器が推奨されます。'
    }
  ];

  const extinguisherTypes = [
    {
      type: '泡消火器',
      principle: '窒息 + 冷却',
      suitable: '非水溶性液体全般（ガソリン、灯油、重油など）',
      unsuitable: 'アルコール類（泡が溶ける）、電気火災（感電の危険）',
      icon: '🛡️',
      color: 'blue'
    },
    {
      type: '粉末消火器（ABC）',
      principle: '窒息 + 抑制（負触媒効果）',
      suitable: 'ほぼすべての火災に対応可能（最も汎用的）',
      unsuitable: '精密機器（粉末が内部に侵入）、再燃しやすい',
      icon: '⬆️',
      color: 'green'
    },
    {
      type: 'CO2消火器',
      principle: '窒息（酸素濃度を下げる）',
      suitable: '電気火災、精密機器、密閉空間',
      unsuitable: '屋外（拡散して効果薄）、二硫化炭素（発火点90度Cで再燃）',
      icon: '⚠️',
      color: 'orange'
    },
    {
      type: '霧状の水',
      principle: '冷却 + 窒息（微細な水滴）',
      suitable: 'アルコール類（水溶性液体）',
      unsuitable: 'ガソリン等の非水溶性液体（油が浮いて拡大）',
      icon: '💧',
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
            <span className="text-[var(--text-muted)] text-sm">Lesson 5</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">防御/補助カード設計</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            ゲームに戦略性とバランスを与える、特殊カードの設計方法を学びましょう。
          </p>

          {/* Learning Objectives */}
          <div className="glass-card mt-8 max-w-3xl">
            <h3 className="section-label">学習目標</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                <span>消火の3原理（冷却・窒息・抑制）を理解する</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                <span>引火性液体に水をかけてはいけない理由を説明できる</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                <span>消火器の種類と適用場面を覚え、消火カードを設計する</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                <span>AIを活用してバランスの取れた消火・防御カードを生成する</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Section 1: 消火の3原理 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">消火の3原理</h2>
          <div className="glass-card">
            <p className="text-lg leading-relaxed mb-6">
              火災を消すには、燃焼の3要素（<strong>可燃物</strong>・<strong>酸素</strong>・<strong>熱</strong>）のいずれかを取り除く必要があります。これが消火の3原理です。
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="content-card category-card-blue">
                <h4 className="font-bold text-lg mb-3 text-[var(--color-info)]">冷却消火</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  <strong>熱を取り除く</strong>：温度を引火点以下まで下げることで消火する。
                </p>
                <div className="bg-[var(--surface)] p-3 rounded text-sm">
                  <p className="text-[var(--text-secondary)]">例：水をかける（木材火災など）</p>
                </div>
              </div>

              <div className="content-card category-card-purple">
                <h4 className="font-bold text-lg mb-3 text-[var(--color-purple)]">窒息消火</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  <strong>酸素を遮断する</strong>：空気（酸素）の供給を断つことで消火する。
                </p>
                <div className="bg-[var(--surface)] p-3 rounded text-sm">
                  <p className="text-[var(--text-secondary)]">例：泡で覆う、CO2を噴射、砂をかける</p>
                </div>
              </div>

              <div className="content-card category-card-orange">
                <h4 className="font-bold text-lg mb-3 text-[var(--accent)]">抑制消火（負触媒消火）</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  <strong>化学反応を阻害する</strong>：燃焼の連鎖反応を化学的に遮断する。
                </p>
                <div className="bg-[var(--surface)] p-3 rounded text-sm">
                  <p className="text-[var(--text-secondary)]">例：ハロゲン化物消火剤、粉末消火剤</p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-info-subtle)] border-2 border-[var(--color-info)] rounded-xl p-6">
              <h4 className="font-bold text-xl mb-3">カードゲームとの対応</h4>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                消火の3原理は、そのまま<strong>防御カードの3タイプ</strong>として設計できます。「冷却タイプ」「窒息タイプ」「抑制タイプ」の消火カードを作り、物質カード（攻撃カード）に対する<strong>相性</strong>を設定することで、戦略性のあるゲームが生まれます。
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 1.5: なぜ水で消火できないのか */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">なぜ水で消火できないのか？</h2>
          <div className="glass-card">
            <p className="text-lg leading-relaxed mb-6">
              第4類危険物（引火性液体）の火災では、<strong>水での消火が原則として禁止</strong>されています。その理由を理解しましょう。
            </p>

            <div className="space-y-4 mb-8">
              <div className="content-card border-l-4 border-[var(--color-danger)]">
                <h4 className="font-bold text-lg mb-2 text-[var(--color-danger)]">理由1：油は水に浮く</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  ガソリン（比重0.7）や灯油（比重0.8）は水より軽いため、水の上に浮かびます。水をかけると<strong>燃えている油が水面に広がり、火災面積が拡大</strong>します。
                </p>
              </div>

              <div className="content-card border-l-4 border-[var(--color-danger)]">
                <h4 className="font-bold text-lg mb-2 text-[var(--color-danger)]">理由2：水蒸気爆発</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  高温の油に水が触れると、水が急激に蒸発して体積が約1,700倍に膨張します。これにより<strong>燃えている油が飛散</strong>し、火災が周囲に拡大します。
                </p>
              </div>

              <div className="content-card border-l-4 border-[var(--color-danger)]">
                <h4 className="font-bold text-lg mb-2 text-[var(--color-danger)]">理由3：水と油は混ざらない</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  水と油は互いに溶け合わないため、水をかけても油の表面を覆えず、<strong>冷却効果がほとんどありません</strong>。
                </p>
              </div>
            </div>

            <div className="bg-[var(--color-success-subtle)] border-2 border-[var(--color-success)] rounded-xl p-6">
              <h4 className="font-bold text-xl mb-3 text-[var(--color-success)]">例外：水溶性液体（アルコール類）</h4>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                エタノールやメタノールなどの<strong>水溶性</strong>の引火性液体には、<strong>霧状の水</strong>で消火が可能です。水と混ざることで濃度が下がり、引火点以下になるためです。ただし、棒状の水（ストレート放水）では効果がありません。必ず<strong>霧状</strong>にして使います。
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 2: 消火器の種類 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">消火器の種類と消火カード設計</h2>
          <div className="glass-card">
            <p className="text-lg mb-8 text-[var(--text-secondary)]">
              第4類危険物の火災に使用できる消火器を学び、それぞれを<strong>消火カード</strong>として設計しましょう。
            </p>

            <div className="space-y-6">
              {extinguisherTypes.map((ext, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`content-card category-card-${ext.color}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{ext.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{ext.type}</h3>
                      <p className="text-[var(--text-muted)] mb-4">
                        <strong>消火原理：</strong>{ext.principle}
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-[var(--color-success-subtle)] p-3 rounded">
                          <p className="text-xs font-semibold text-[var(--color-success)] mb-1">適用（効く）</p>
                          <p className="text-sm text-[var(--text-secondary)]">{ext.suitable}</p>
                        </div>
                        <div className="bg-[var(--color-danger-subtle)] p-3 rounded">
                          <p className="text-xs font-semibold text-[var(--color-danger)] mb-1">不適用（効かない/危険）</p>
                          <p className="text-sm text-[var(--text-secondary)]">{ext.unsuitable}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 overflow-x-auto">
              <h4 className="font-bold text-lg mb-4">消火器 × 物質 対応表</h4>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[var(--section-alt-bg)]">
                    <th className="border border-[var(--border-color)] px-3 py-2 text-left">物質</th>
                    <th className="border border-[var(--border-color)] px-3 py-2 text-center">泡</th>
                    <th className="border border-[var(--border-color)] px-3 py-2 text-center">粉末</th>
                    <th className="border border-[var(--border-color)] px-3 py-2 text-center">CO2</th>
                    <th className="border border-[var(--border-color)] px-3 py-2 text-center">霧状水</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'ガソリン（非水溶性）', foam: true, powder: true, co2: true, mist: false },
                    { name: '灯油（非水溶性）', foam: true, powder: true, co2: true, mist: false },
                    { name: 'エタノール（水溶性）', foam: false, powder: true, co2: true, mist: true },
                    { name: '重油（非水溶性）', foam: true, powder: true, co2: true, mist: false },
                    { name: '二硫化炭素', foam: true, powder: true, co2: false, mist: false },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-[var(--surface)]' : 'bg-[var(--section-alt-bg)]'}>
                      <td className="border border-[var(--border-color)] px-3 py-2 font-medium">{row.name}</td>
                      <td className="border border-[var(--border-color)] px-3 py-2 text-center">{row.foam ? 'O' : 'X'}</td>
                      <td className="border border-[var(--border-color)] px-3 py-2 text-center">{row.powder ? 'O' : 'X'}</td>
                      <td className="border border-[var(--border-color)] px-3 py-2 text-center">{row.co2 ? 'O' : 'X'}</td>
                      <td className="border border-[var(--border-color)] px-3 py-2 text-center">{row.mist ? 'O' : 'X'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-[var(--text-muted)] mt-2">O = 使用可、X = 使用不可/不適切</p>
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
              <div className="content-card bg-[var(--color-info-subtle)]">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldExclamationIcon className="w-8 h-8 text-[var(--color-info)]" />
                  <h4 className="font-bold text-xl">1. 消火原理と物質の相性を反映する</h4>
                </div>
                <p className="text-[var(--text-secondary)] mb-3">
                  消火カードの効果は、<strong>現実の消火原理と物質の相性</strong>に基づいている必要があります。
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[var(--surface)] p-3 rounded">
                    <p className="text-sm font-semibold text-[var(--color-success)] mb-2">良い例</p>
                    <p className="text-sm text-[var(--text-secondary)]">
                      「泡消火カード：非水溶性の物質カードの攻撃を無効化する。ただしアルコール類には効果がない」
                    </p>
                  </div>
                  <div className="bg-[var(--surface)] p-3 rounded">
                    <p className="text-sm font-semibold text-[var(--color-danger)] mb-2">悪い例</p>
                    <p className="text-sm text-[var(--text-secondary)]">
                      「水消火カード：ガソリンカードの攻撃を無効化する」（現実では火災が拡大する）
                    </p>
                  </div>
                </div>
              </div>

              <div className="content-card bg-[var(--color-purple-subtle)]">
                <div className="flex items-center gap-3 mb-3">
                  <SparklesIcon className="w-8 h-8 text-[var(--color-purple)]" />
                  <h4 className="font-bold text-xl">2. バランスの考慮</h4>
                </div>
                <p className="text-[var(--text-secondary)]">
                  強すぎる防御/補助カードは、ゲームを壊してしまいます。<strong>適切なコスト</strong>や<strong>制約</strong>を設けましょう。
                </p>
                <div className="mt-3 bg-[var(--surface)] p-4 rounded">
                  <p className="text-sm mb-2"><strong>例：</strong></p>
                  <ul className="text-sm space-y-1 text-[var(--text-secondary)]">
                    <li>• 強力な防御カードは1ターンに1枚しか使えない</li>
                    <li>• 補助効果は持続ターン数を制限する</li>
                    <li>• リソースカードを消費する必要がある</li>
                  </ul>
                </div>
              </div>

              <div className="content-card bg-[var(--accent-subtle)]">
                <div className="flex items-center gap-3 mb-3">
                  <BoltIcon className="w-8 h-8 text-[var(--accent)]" />
                  <h4 className="font-bold text-xl">3. 戦略性の創出</h4>
                </div>
                <p className="text-[var(--text-secondary)]">
                  単に「防御する」だけでなく、<strong>タイミング</strong>や<strong>組み合わせ</strong>で戦略が生まれるようにします。
                </p>
                <div className="mt-3 bg-[var(--surface)] p-4 rounded">
                  <p className="text-sm mb-2"><strong>戦略的な設計例：</strong></p>
                  <ul className="text-sm space-y-1 text-[var(--text-secondary)]">
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
              <div className="bg-[var(--color-warning-subtle)] border-l-4 border-[var(--color-warning)] p-6 rounded-r-lg">
                <h4 className="font-bold text-lg mb-3">整頓の目的</h4>
                <ul className="space-y-2 text-[var(--text-secondary)]">
                  <li>• <strong>統一されたフォーマット</strong>：すべてのカードで表現を統一</li>
                  <li>• <strong>明確な効果</strong>：曖昧な表現を具体的にする</li>
                  <li>• <strong>ルールの一貫性</strong>：矛盾がないようにする</li>
                  <li>• <strong>理解しやすさ</strong>：プレイヤーが直感的に理解できる</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="content-card border-l-4 border-[var(--color-danger)]">
                  <h4 className="font-bold text-lg mb-3 text-[var(--color-danger)]">整頓前（バラバラ）</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-[var(--surface)] p-3 rounded">
                      <p className="text-[var(--text-secondary)]">「火を消せます」</p>
                    </div>
                    <div className="bg-[var(--surface)] p-3 rounded">
                      <p className="text-[var(--text-secondary)]">「攻撃を無効にする」</p>
                    </div>
                    <div className="bg-[var(--surface)] p-3 rounded">
                      <p className="text-[var(--text-secondary)]">「相手のカードが使えなくなる」</p>
                    </div>
                  </div>
                </div>

                <div className="content-card border-l-4 border-[var(--color-success)]">
                  <h4 className="font-bold text-lg mb-3 text-[var(--color-success)]">整頓後（統一）</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-[var(--surface)] p-3 rounded">
                      <p className="text-[var(--text-secondary)]">「火災タイプの攻撃を無効化する」</p>
                    </div>
                    <div className="bg-[var(--surface)] p-3 rounded">
                      <p className="text-[var(--text-secondary)]">「次の攻撃を無効化する」</p>
                    </div>
                    <div className="bg-[var(--surface)] p-3 rounded">
                      <p className="text-[var(--text-secondary)]">「相手は次のターン、カードを1枚しか使用できない」</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-card bg-[var(--color-info-subtle)]">
                <h4 className="font-bold text-lg mb-3">整頓のポイント</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
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
            <p className="text-lg mb-6 text-[var(--text-secondary)]">
              AIを使って、バランスの取れた防御/補助カードのアイデアを生成できます。
            </p>

            <div className="space-y-6">
              <PromptCard
                title="消火カード生成プロンプト"
                description="消火原理に基づいた防御カードを生成"
                prompt={`以下の条件で、第4類危険物に対応する消火カードを設計してください。

【消火器の種類】
泡消火器、粉末消火器（ABC）、CO2消火器、霧状の水

【消火の3原理】
冷却消火、窒息消火、抑制消火（負触媒消火）

【条件】
1. 各消火カードは消火原理に基づいた効果にすること
2. 物質カード（ガソリン、エタノール、二硫化炭素等）との相性を正確に反映すること
3. 非水溶性と水溶性で効果が異なること

以下の形式で回答してください：
【カード名】：（例：泡消火カード）
【消火原理】：（窒息+冷却 など）
【ゲーム効果】：（どの物質カードに対して有効/無効か）
【バランス調整】：（コストや使用制限）`}
                color="blue"
              />

              <PromptCard
                title="消火シナリオ問題の生成"
                description="物質と消火方法の組み合わせ問題を生成"
                prompt={`第4類危険物の火災シナリオ問題を5問作成してください。

【出題形式】
- 火災が発生した状況を設定
- 使用可能な消火器の選択肢を4つ提示
- 正解と、なぜ他の選択肢が不適切かを解説

【物質の例】
ガソリン（非水溶性、比重0.7）、エタノール（水溶性）、二硫化炭素（発火点90度C）、灯油（非水溶性）、重油（非水溶性）

【消火器の例】
泡消火器、粉末消火器、CO2消火器、霧状の水、棒状の水

各問題には「なぜその消火方法が正しい/間違いか」の科学的根拠を含めてください。`}
                color="green"
              />

              <PromptCard
                title="効果文整頓プロンプト"
                description="消火カードの効果文を統一フォーマットに"
                prompt={`以下の消火カード効果文を、統一されたフォーマットで整頓してください。

【整頓前の効果】
1. （効果1）
2. （効果2）
3. （効果3）

【整頓の基準】
- 「〇〇タイプの物質カードの攻撃を無効化する」形式に統一
- 相性（有効/無効/危険）を明記
- 消火原理を括弧書きで併記（例：「[窒息+冷却]」）
- 使用条件を明記（例：「アルコール類には使用不可」）

整頓後の効果を、上記の基準に従って書き直してください。`}
                color="purple"
              />
            </div>

            <div className="mt-6 bg-[var(--color-danger-subtle)] border-l-4 border-[var(--color-danger)] p-4 rounded-r-lg">
              <h4 className="font-bold text-[var(--color-danger)] mb-2">重要な注意</h4>
              <p className="text-sm text-[var(--text-secondary)]">
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

        {/* Next Steps CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="glass-card bg-[var(--color-success-subtle)] border-2 border-[var(--color-success)]">
            <h3 className="text-2xl font-bold mb-4">Phase 2 完了！</h3>
            <p className="text-[var(--text-secondary)] mb-6">
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
