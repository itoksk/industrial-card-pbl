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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
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
          <span>レッスン1</span>
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
            <span className="text-gray-500 dark:text-gray-400 text-sm">Lesson 1</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">TCG-PBLとは？</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            トレーディングカードゲーム（TCG）を作りながら学ぶ、新しい学習方法について理解しましょう。
          </p>

          {/* Learning Objectives */}
          <div className="glass-card mt-8 max-w-3xl">
            <h3 className="section-label">学習目標</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>TCG-PBLの基本概念と学習効果を理解する</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>事実基盤制約の重要性を理解する</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>カード設計の4つの要素を理解する</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>4つのフェーズの全体像を把握する</span>
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
          <h2 className="text-3xl font-bold mb-6">TCG-PBLとは何か？</h2>
          <div className="glass-card">
            <p className="text-lg leading-relaxed mb-6">
              <strong>TCG-PBL</strong>とは、<strong>トレーディングカードゲーム</strong>の制作を通じて専門知識を学ぶ、プロジェクト型学習（Project-Based Learning）の手法です。
            </p>
            <p className="text-lg leading-relaxed mb-6">
              従来の講義形式とは異なり、学習者自らが主体的にカードゲームを設計し、実際にプレイすることで、深い理解と実践的なスキルを身につけます。
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mt-6">
              <h4 className="font-bold text-lg mb-2">なぜカードゲームなのか？</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✓ <strong>視覚化</strong>：複雑な情報をカードという形で整理できる</li>
                <li>✓ <strong>比較</strong>：パラメータを通じて異なる要素を直接比較できる</li>
                <li>✓ <strong>体験</strong>：ゲームプレイを通じて知識を体感できる</li>
                <li>✓ <strong>協働</strong>：チームで制作・プレイすることで協働スキルが育つ</li>
                <li>✓ <strong>楽しさ</strong>：ゲーム性により学習のモチベーションが高まる</li>
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
          <h2 className="text-3xl font-bold mb-6">最重要原則：事実基盤制約</h2>
          <div className="glass-card">
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-2 border-purple-500 rounded-xl p-8 mb-6">
              <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                事実基盤制約とは？
              </h3>
              <p className="text-lg leading-relaxed">
                カードの<strong>パラメータ</strong>や<strong>ゲーム効果</strong>は、必ず<strong>現実のデータ</strong>や<strong>実在する法則</strong>に基づいて設計しなければならないという原則です。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="content-card border-l-4 border-green-500">
                <h4 className="font-bold text-lg mb-3 text-green-600 dark:text-green-400">✓ 良い例</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  「物質Aは引火点が-20℃なので、攻撃力を高く設定する」
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  → 実際のデータ（引火点）に基づいている
                </p>
              </div>
              <div className="content-card border-l-4 border-red-500">
                <h4 className="font-bold text-lg mb-3 text-red-600 dark:text-red-400">✗ 悪い例</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  「物質Aは名前がかっこいいから攻撃力を高く設定する」
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  → 主観的で事実に基づいていない
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <h4 className="font-bold text-lg mb-3">なぜ事実基盤制約が重要なのか？</h4>
              <ol className="space-y-3 text-gray-700 dark:text-gray-300">
                <li><strong>1. 学習の質が向上</strong>：事実を調べることで深い理解が得られる</li>
                <li><strong>2. ゲームバランスの論理性</strong>：恣意的でない公平なゲーム設計ができる</li>
                <li><strong>3. 知識の定着</strong>：データとゲーム効果を結びつけることで記憶に残る</li>
                <li><strong>4. 現実との接続</strong>：学んだ知識が実社会で活用できる</li>
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
          <h2 className="text-3xl font-bold mb-6">カード設計の4つの要素</h2>
          <div className="glass-card">
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
              すべてのカードは以下の<strong>4つの要素</strong>で構成されます。
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="content-card category-card-blue"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold">名称</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  カードの対象となる物質や概念の正式名称。学習対象そのものを表します。
                </p>
                <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded text-sm">
                  例：「エタノール」「硫酸」「消火器ABC」
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="content-card category-card-purple"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold">パラメータ</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  対象の特性を数値化したデータ。比較や計算の基準となります。
                </p>
                <div className="mt-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded text-sm">
                  例：引火点、沸点、危険等級、pH値
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="content-card category-card-pink"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold">事実根拠</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  パラメータやゲーム効果の根拠となる、実在するデータや法則。
                </p>
                <div className="mt-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded text-sm">
                  例：「消防法で第4類危険物に分類」「水より軽く水に溶ける」
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="content-card category-card-orange"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <h3 className="text-xl font-bold">ゲーム効果</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  事実根拠に基づいて設計された、ゲーム内での振る舞い。
                </p>
                <div className="mt-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded text-sm">
                  例：「引火点が低いため、攻撃力+20」「水系消火カードを無効化」
                </div>
              </motion.div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-lg mb-3">重要なポイント</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                この4要素は互いに密接に関連しています。<strong>事実根拠</strong>が<strong>パラメータ</strong>を決定し、それが<strong>ゲーム効果</strong>につながります。この連鎖が「事実基盤制約」を実現する仕組みです。
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
          <h2 className="text-3xl font-bold mb-6">TCG-PBLの4つのフェーズ</h2>
          <div className="glass-card">
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
              TCG-PBLは、計画的に進める<strong>4つのフェーズ</strong>で構成されています。
            </p>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="content-card bg-gradient-to-r from-blue-500/10 to-blue-500/5 border-l-4 border-blue-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    Phase<br/>1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">企画フェーズ</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      学習分野の選定、カード分類、基本ルールの策定を行います。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="tag">対象分野の分類</span>
                      <span className="tag">カテゴリ設定</span>
                      <span className="tag">基本構想</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="content-card bg-gradient-to-r from-purple-500/10 to-purple-500/5 border-l-4 border-purple-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    Phase<br/>2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">調査フェーズ</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      パラメータの調査、法令・規制の研究、特殊カードの設計を行います。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="tag">パラメータ調査</span>
                      <span className="tag">規制・法令</span>
                      <span className="tag">特殊カード設計</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="content-card bg-gradient-to-r from-pink-500/10 to-pink-500/5 border-l-4 border-pink-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    Phase<br/>3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">制作フェーズ</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      カードデザインの作成、イラスト生成、物理カードの印刷を行います。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="tag">カードデザイン</span>
                      <span className="tag">イラスト生成</span>
                      <span className="tag">印刷・製本</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="content-card bg-gradient-to-r from-orange-500/10 to-orange-500/5 border-l-4 border-orange-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    Phase<br/>4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">プレイ・評価フェーズ</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      実際にゲームをプレイし、バランス調整、振り返りを行います。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="tag">テストプレイ</span>
                      <span className="tag">バランス調整</span>
                      <span className="tag">振り返り</span>
                    </div>
                  </div>
                </div>
              </motion.div>
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
          <h2 className="text-3xl font-bold mb-6">TCG-PBLはなぜ効果的なのか？</h2>
          <div className="glass-card">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="content-card text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  1
                </div>
                <h4 className="font-bold text-lg mb-3">能動的学習</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  受動的に聞くだけでなく、自ら調べ、設計し、創造することで深い理解が得られます。
                </p>
              </div>

              <div className="content-card text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  2
                </div>
                <h4 className="font-bold text-lg mb-3">体験的学習</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  ゲームプレイを通じて、知識が「体験」として記憶に定着します。
                </p>
              </div>

              <div className="content-card text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  3
                </div>
                <h4 className="font-bold text-lg mb-3">協働的学習</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  チームで制作・プレイすることで、コミュニケーション能力や協働スキルが育ちます。
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg">
              <h4 className="font-bold text-lg mb-3">学習科学の裏付け</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                TCG-PBLは、教育心理学の「構成主義」や「体験学習理論」に基づいています。学習者が知識を「受け取る」のではなく「構築する」プロセスを重視しており、記憶の定着率が従来の講義形式よりも高いことが研究で示されています。
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
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
          <h2 className="text-3xl font-bold mb-6">振り返りワークシート</h2>
          <div className="worksheet-section">
            <div className="glass-card">
              <h3 className="text-xl font-bold mb-4">考えてみよう</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold mb-2">Q1. TCG-PBLで学びたい分野は何ですか？その理由も書いてください。</p>
                  <div className="bg-white dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded p-4 min-h-24">
                    <p className="text-sm text-gray-400">（ここに記入）</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">Q2. 「事実基盤制約」がなぜ重要だと思いますか？あなたの言葉で説明してください。</p>
                  <div className="bg-white dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded p-4 min-h-24">
                    <p className="text-sm text-gray-400">（ここに記入）</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">Q3. 4つのフェーズの中で、最も楽しみなフェーズはどれですか？その理由も書いてください。</p>
                  <div className="bg-white dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded p-4 min-h-24">
                    <p className="text-sm text-gray-400">（ここに記入）</p>
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
          <h2 className="text-3xl font-bold mb-6">理解度チェッククイズ</h2>
          <div className="glass-card">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              このレッスンの内容を理解できたかチェックしましょう。各問題の選択肢をクリックして、「解答を表示」ボタンで答え合わせができます。
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
          <div className="glass-card bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-blue-500/50">
            <h3 className="text-2xl font-bold mb-4">次のレッスンへ</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              TCG-PBLの基本を理解したら、次は「対象分野の分類」について学びましょう。
            </p>
            <TransitionLink href="/lessons/2" className="btn-primary inline-flex items-center gap-2">
              レッスン2: 対象分野の分類
              <ChevronRightIcon className="w-5 h-5" />
            </TransitionLink>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
