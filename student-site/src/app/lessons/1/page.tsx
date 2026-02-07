'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TransitionLink from '@/components/TransitionLink';
import { HomeIcon, ChevronRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function Lesson1() {
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
      question: 'TCG-PBLの最も重要な原則は何ですか？',
      options: [
        'ゲームが面白ければ何でも良い',
        '事実に基づいた制約を設けること',
        'カードの枚数を多くすること',
        '複雑なルールを作ること'
      ],
      correct: 1,
      explanation: '事実基盤制約が最も重要です。現実のデータや法則に基づいてゲームルールを設計することで、学習効果が最大化されます。'
    },
    {
      question: 'TCG-PBLの4つの要素に含まれないものはどれですか？',
      options: [
        '名称',
        'パラメータ',
        'イラスト',
        'ゲーム効果'
      ],
      correct: 2,
      explanation: '4つの要素は「名称」「パラメータ」「事実根拠」「ゲーム効果」です。イラストは重要ですが、この4要素には含まれません。'
    },
    {
      question: 'PBL（プロジェクト型学習）の利点はどれですか？',
      options: [
        '教師が一方的に教えるので効率的',
        '試験のための暗記に集中できる',
        '能動的に学び、実践的なスキルが身につく',
        '短時間で多くの知識を詰め込める'
      ],
      correct: 2,
      explanation: 'PBLは学習者が能動的に学び、実践的なスキルを身につけることができる学習方法です。単なる知識の暗記ではなく、問題解決能力や協働スキルが育ちます。'
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
          <Link href="/" className="hover:text-blue-500 transition-colors">
            <HomeIcon className="w-4 h-4 inline" />
          </Link>
          <ChevronRightIcon className="w-4 h-4" />
          <span>Lesson 1</span>
        </motion.nav>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="tag tag-phase-1">Phase 1</span>
            <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Lesson 1</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span style={{ color: 'var(--accent)' }}>TCG-PBLとは？</span>
          </h1>
          <p className="text-lg max-w-3xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            トレーディングカードゲーム（TCG）を作りながら学ぶ、新しい学習方法について理解しましょう。
          </p>

          {/* Learning Objectives */}
          <div className="glass-card mt-8 max-w-3xl">
            <h3 className="section-label">学習目標</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                <span className="text-sm">TCG-PBLの基本概念と学習効果を理解する</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                <span className="text-sm">事実基盤制約の重要性を理解する</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                <span className="text-sm">カード設計の4つの要素を理解する</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                <span className="text-sm">4つのフェーズの全体像を把握する</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Section 1: What is TCG-PBL */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">TCG-PBLとは何か？</h2>
          <div className="glass-card">
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              <strong className="text-foreground">TCG-PBL</strong>とは、<strong className="text-foreground">トレーディングカードゲーム</strong>の制作を通じて専門知識を学ぶ、プロジェクト型学習（Project-Based Learning）の手法です。
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              従来の講義形式とは異なり、学習者自らが主体的にカードゲームを設計し、実際にプレイすることで、深い理解と実践的なスキルを身につけます。
            </p>
            <div className="p-5 rounded-lg border-l-3" style={{ background: 'var(--accent-subtle)', borderLeft: '3px solid var(--accent)' }}>
              <h4 className="font-bold mb-3">なぜカードゲームなのか？</h4>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li><strong className="text-foreground">視覚化</strong> -- 複雑な情報をカードという形で整理できる</li>
                <li><strong className="text-foreground">比較</strong> -- パラメータを通じて異なる要素を直接比較できる</li>
                <li><strong className="text-foreground">体験</strong> -- ゲームプレイを通じて知識を体感できる</li>
                <li><strong className="text-foreground">協働</strong> -- チームで制作・プレイすることで協働スキルが育つ</li>
                <li><strong className="text-foreground">楽しさ</strong> -- ゲーム性により学習のモチベーションが高まる</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Fact-Based Constraint */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">最重要原則：事実基盤制約</h2>
          <div className="glass-card">
            <div className="p-6 rounded-lg border mb-6" style={{ borderColor: 'var(--accent)', background: 'var(--accent-subtle)' }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--accent)' }}>
                事実基盤制約とは？
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                カードの<strong className="text-foreground">パラメータ</strong>や<strong className="text-foreground">ゲーム効果</strong>は、必ず<strong className="text-foreground">現実のデータ</strong>や<strong className="text-foreground">実在する法則</strong>に基づいて設計しなければならないという原則です。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="content-card border-l-3" style={{ borderLeftColor: '#10b981' }}>
                <h4 className="font-bold mb-2" style={{ color: '#10b981' }}>良い例</h4>
                <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                  「物質Aは引火点が-20度なので、攻撃力を高く設定する」
                </p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  実際のデータ（引火点）に基づいている
                </p>
              </div>
              <div className="content-card border-l-3" style={{ borderLeftColor: '#ef4444' }}>
                <h4 className="font-bold mb-2" style={{ color: '#ef4444' }}>悪い例</h4>
                <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                  「物質Aは名前がかっこいいから攻撃力を高く設定する」
                </p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  主観的で事実に基づいていない
                </p>
              </div>
            </div>

            <div className="mt-6 p-5 rounded-lg" style={{ background: 'var(--section-alt-bg)' }}>
              <h4 className="font-bold mb-3">なぜ事実基盤制約が重要なのか？</h4>
              <ol className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li><strong className="text-foreground">1. 学習の質が向上</strong> -- 事実を調べることで深い理解が得られる</li>
                <li><strong className="text-foreground">2. ゲームバランスの論理性</strong> -- 恣意的でない公平なゲーム設計ができる</li>
                <li><strong className="text-foreground">3. 知識の定着</strong> -- データとゲーム効果を結びつけることで記憶に残る</li>
                <li><strong className="text-foreground">4. 現実との接続</strong> -- 学んだ知識が実社会で活用できる</li>
              </ol>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Four Elements */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">カード設計の4つの要素</h2>
          <div className="glass-card">
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              すべてのカードは以下の<strong className="text-foreground">4つの要素</strong>で構成されます。
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="content-card category-card-blue"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white text-sm font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-bold">名称</h3>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  カードの対象となる物質や概念の正式名称。学習対象そのものを表します。
                </p>
                <div className="mt-3 p-2.5 rounded text-xs" style={{ background: 'var(--section-alt-bg)', color: 'var(--text-muted)' }}>
                  例：「エタノール」「硫酸」「消火器ABC」
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="content-card category-card-purple"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center text-white text-sm font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-bold">パラメータ</h3>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  対象の特性を数値化したデータ。比較や計算の基準となります。
                </p>
                <div className="mt-3 p-2.5 rounded text-xs" style={{ background: 'var(--section-alt-bg)', color: 'var(--text-muted)' }}>
                  例：引火点、沸点、危険等級、pH値
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="content-card category-card-pink"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-pink-500 rounded-md flex items-center justify-center text-white text-sm font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-bold">事実根拠</h3>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  パラメータやゲーム効果の根拠となる、実在するデータや法則。
                </p>
                <div className="mt-3 p-2.5 rounded text-xs" style={{ background: 'var(--section-alt-bg)', color: 'var(--text-muted)' }}>
                  例：「消防法で第4類危険物に分類」「水より軽く水に溶ける」
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="content-card category-card-orange"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-md flex items-center justify-center text-white text-sm font-bold" style={{ background: 'var(--accent)' }}>
                    4
                  </div>
                  <h3 className="text-lg font-bold">ゲーム効果</h3>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  事実根拠に基づいて設計された、ゲーム内での振る舞い。
                </p>
                <div className="mt-3 p-2.5 rounded text-xs" style={{ background: 'var(--section-alt-bg)', color: 'var(--text-muted)' }}>
                  例：「引火点が低いため、攻撃力+20」「水系消火カードを無効化」
                </div>
              </motion.div>
            </div>

            <div className="mt-6 p-5 rounded-lg border" style={{ background: 'var(--accent-subtle)', borderColor: 'var(--accent)' }}>
              <h4 className="font-bold mb-2">重要なポイント</h4>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                この4要素は互いに密接に関連しています。<strong className="text-foreground">事実根拠</strong>が<strong className="text-foreground">パラメータ</strong>を決定し、それが<strong className="text-foreground">ゲーム効果</strong>につながります。この連鎖が「事実基盤制約」を実現する仕組みです。
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 4: Four Phases */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">TCG-PBLの4つのフェーズ</h2>
          <div className="glass-card">
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              TCG-PBLは、計画的に進める<strong className="text-foreground">4つのフェーズ</strong>で構成されています。
            </p>

            <div className="space-y-4">
              {[
                { num: 1, title: '企画フェーズ', desc: '学習分野の選定、カード分類、基本ルールの策定を行います。', tags: ['対象分野の分類', 'カテゴリ設定', '基本構想'], color: '#3b82f6' },
                { num: 2, title: '調査フェーズ', desc: 'パラメータの調査、法令・規制の研究、特殊カードの設計を行います。', tags: ['パラメータ調査', '規制・法令', '特殊カード設計'], color: '#8b5cf6' },
                { num: 3, title: '制作フェーズ', desc: 'カードデザインの作成、イラスト生成、物理カードの印刷を行います。', tags: ['カードデザイン', 'イラスト生成', '印刷・製本'], color: '#ec4899' },
                { num: 4, title: 'プレイ・評価フェーズ', desc: '実際にゲームをプレイし、バランス調整、振り返りを行います。', tags: ['テストプレイ', 'バランス調整', '振り返り'], color: 'var(--accent)' },
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="content-card border-l-3"
                  style={{ borderLeftColor: phase.color }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-md flex items-center justify-center text-white text-sm font-bold shrink-0"
                      style={{ background: phase.color }}
                    >
                      P{phase.num}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1">{phase.title}</h3>
                      <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                        {phase.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {phase.tags.map((tag, j) => (
                          <span key={j} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 5: Why It Works */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">TCG-PBLはなぜ効果的なのか？</h2>
          <div className="glass-card">
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { num: 1, title: '能動的学習', desc: '受動的に聞くだけでなく、自ら調べ、設計し、創造することで深い理解が得られます。' },
                { num: 2, title: '体験的学習', desc: 'ゲームプレイを通じて、知識が「体験」として記憶に定着します。' },
                { num: 3, title: '協働的学習', desc: 'チームで制作・プレイすることで、コミュニケーション能力や協働スキルが育ちます。' },
              ].map((item, i) => (
                <div key={i} className="content-card text-center">
                  <div
                    className="w-10 h-10 rounded-md flex items-center justify-center text-sm font-bold mx-auto mb-3"
                    style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}
                  >
                    {item.num}
                  </div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-5 rounded-lg" style={{ background: 'var(--section-alt-bg)' }}>
              <h4 className="font-bold mb-2">学習科学の裏付け</h4>
              <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                TCG-PBLは、教育心理学の「構成主義」や「体験学習理論」に基づいています。学習者が知識を「受け取る」のではなく「構築する」プロセスを重視しており、記憶の定着率が従来の講義形式よりも高いことが研究で示されています。
              </p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                参考：エドガー・デールの「経験の円錐」によれば、「読む」「聞く」だけの学習の定着率は10-20%ですが、「実際にやってみる」ことで75%、「他者に教える」ことで90%まで向上します。
              </p>
            </div>
          </div>
        </motion.section>

        {/* Worksheet Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">振り返りワークシート</h2>
          <div className="worksheet-section">
            <div className="glass-card">
              <h3 className="text-lg font-bold mb-4">考えてみよう</h3>
              <div className="space-y-5">
                <div>
                  <p className="font-semibold text-sm mb-2">Q1. TCG-PBLで学びたい分野は何ですか？その理由も書いてください。</p>
                  <div className="border-2 border-dashed rounded-lg p-4 min-h-20" style={{ borderColor: 'var(--border-color)', background: 'var(--surface)' }}>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>（ここに記入）</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-sm mb-2">Q2. 「事実基盤制約」がなぜ重要だと思いますか？あなたの言葉で説明してください。</p>
                  <div className="border-2 border-dashed rounded-lg p-4 min-h-20" style={{ borderColor: 'var(--border-color)', background: 'var(--surface)' }}>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>（ここに記入）</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-sm mb-2">Q3. 4つのフェーズの中で、最も楽しみなフェーズはどれですか？その理由も書いてください。</p>
                  <div className="border-2 border-dashed rounded-lg p-4 min-h-20" style={{ borderColor: 'var(--border-color)', background: 'var(--surface)' }}>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>（ここに記入）</p>
                  </div>
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
          <h2 className="text-2xl font-bold mb-6">理解度チェッククイズ</h2>
          <div className="glass-card">
            <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
              このレッスンの内容を理解できたかチェックしましょう。各問題の選択肢をクリックして、「解答を表示」ボタンで答え合わせができます。
            </p>

            <div className="space-y-8">
              {quizData.map((quiz, qIndex) => (
                <div key={qIndex} className="border-t pt-6 first:border-t-0 first:pt-0" style={{ borderColor: 'var(--border-color)' }}>
                  <h4 className="font-bold mb-3">問題 {qIndex + 1}</h4>
                  <p className="mb-4 text-sm" style={{ color: 'var(--text-secondary)' }}>{quiz.question}</p>

                  <div className="space-y-2 mb-4">
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
                            ? 'border-blue-500 dark:border-blue-400'
                            : ''
                        }`}
                        style={
                          !quizRevealed.includes(qIndex) && quizAnswers[qIndex] === oIndex
                            ? { borderColor: 'var(--accent)', background: 'var(--accent-subtle)' }
                            : {}
                        }
                      >
                        <span className="font-medium mr-2 text-sm">{String.fromCharCode(65 + oIndex)}.</span>
                        <span className="text-sm">{option}</span>
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
                      className="p-4 rounded-lg border-l-3"
                      style={{ background: 'rgba(16, 185, 129, 0.06)', borderLeftColor: '#10b981' }}
                    >
                      <p className="font-bold text-sm mb-1" style={{ color: '#10b981' }}>
                        正解: {String.fromCharCode(65 + quiz.correct)}
                      </p>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{quiz.explanation}</p>
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
          <div className="glass-card border" style={{ borderColor: 'var(--accent)', background: 'var(--accent-subtle)' }}>
            <h3 className="text-xl font-bold mb-3">次のレッスンへ</h3>
            <p className="text-sm mb-5" style={{ color: 'var(--text-muted)' }}>
              TCG-PBLの基本を理解したら、次は「対象分野の分類」について学びましょう。
            </p>
            <TransitionLink href="/lessons/2" className="btn-primary-orange inline-flex items-center gap-2">
              Lesson 2: 対象分野の分類
              <ChevronRightIcon className="w-4 h-4" />
            </TransitionLink>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
