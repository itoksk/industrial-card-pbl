'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TransitionLink from '@/components/TransitionLink';
import PromptCard from '@/components/PromptCard';
import { HomeIcon, ChevronRightIcon, CheckCircleIcon, MagnifyingGlassIcon, TableCellsIcon, DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Lesson3() {
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
      question: '比重が0.7の液体（ガソリンなど）は水に浮きますか、沈みますか？',
      options: [
        '浮く（比重が1より小さいため）',
        '沈む（比重が1より小さいため）',
        '浮くか沈むかは温度による',
        '水と混ざって均一になる'
      ],
      correct: 0,
      explanation: '比重が1より小さい液体は水に浮きます。ガソリン（比重0.7）を水で消火しようとすると、ガソリンが水の上に浮いて燃え広がるため、水での消火は危険です。'
    },
    {
      question: '蒸気比重が大きい物質の蒸気はどこに溜まりやすいですか？',
      options: [
        '天井付近',
        '部屋の中央',
        '床付近（低い場所）',
        '均一に拡散する'
      ],
      correct: 2,
      explanation: '蒸気比重が1より大きい蒸気は空気より重いため、床付近の低い場所に溜まります。第4類危険物の蒸気はほぼすべて蒸気比重>1なので、地下室やピットなど低所での引火に特に注意が必要です。'
    },
    {
      question: '二硫化炭素の発火点が約90℃と極めて低いことは、何を意味しますか？',
      options: [
        '燃えにくいということ',
        '点火源がなくても低温で自然発火する危険がある',
        '水で安全に消火できる',
        '蒸気が軽いということ'
      ],
      correct: 1,
      explanation: '発火点とは点火源がなくても自然に発火する温度です。二硫化炭素は90℃という極めて低い発火点を持ち、蒸気配管の熱や摩擦熱でも発火する危険があります。通常の物質（ガソリン約300℃）と比べてその危険度がわかります。'
    }
  ];

  const parameterTypes = [
    {
      name: '引火点（℃）',
      description: '液体から発生する蒸気に火を近づけたとき、引火する最低温度。低いほど危険。',
      examples: ['ガソリン: -40℃', '灯油: 40℃以上', 'ジエチルエーテル: -45℃', '重油: 60-150℃'],
      color: 'orange',
      cssVar: 'var(--accent)',
      cardClass: 'category-card-orange'
    },
    {
      name: '発火点（℃）',
      description: '点火源がなくても、空気中で自然に発火する温度。低いほど自然発火の危険が高い。',
      examples: ['ガソリン: 約300℃', '二硫化炭素: 90℃（極めて低い）', '灯油: 220℃', 'エタノール: 363℃'],
      color: 'pink',
      cssVar: 'var(--color-pink)',
      cardClass: 'category-card-pink'
    },
    {
      name: '沸点（℃）',
      description: '液体が気体に変わる温度。低いほど蒸発しやすく、蒸気が大量に発生して危険。',
      examples: ['ジエチルエーテル: 35℃（常温で蒸発）', 'エタノール: 78℃', '重油: 300℃以上'],
      color: 'blue',
      cssVar: 'var(--color-info)',
      cardClass: 'category-card-blue'
    },
    {
      name: '比重',
      description: '水を1とした液体の重さの比。1未満なら水に浮き、1以上なら水に沈む。',
      examples: ['ガソリン: 0.7（水に浮く）', '二硫化炭素: 1.26（水に沈む）', 'エタノール: 0.79'],
      color: 'purple',
      cssVar: 'var(--color-purple)',
      cardClass: 'category-card-purple'
    },
    {
      name: '蒸気比重',
      description: '空気を1としたときの蒸気の重さ。第4類はほぼすべて>1で、蒸気が床に溜まる。',
      examples: ['ガソリン: 3-4', 'ジエチルエーテル: 2.6', '灯油: 4.5', 'エタノール: 1.6'],
      color: 'green',
      cssVar: 'var(--color-success)',
      cardClass: 'category-card-green'
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
          <span>レッスン3</span>
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
            <span className="text-[var(--text-muted)] text-sm">Lesson 3</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">パラメータ調査</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            カードに記載する数値データを調査し、ゲーム設計の基礎を固めましょう。
          </p>

          {/* Learning Objectives */}
          <div className="glass-card mt-8 max-w-3xl">
            <h3 className="section-label">学習目標</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                <span>カードに適したパラメータの種類を理解する</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                <span>信頼できる情報源からデータを収集する方法を学ぶ</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                <span>グループで効率的に調査を進める手法を身につける</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
                <span>収集したデータを整理・検証する力を養う</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Section 1: What are Parameters */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">パラメータとは何か？</h2>
          <div className="glass-card">
            <p className="text-lg leading-relaxed mb-6">
              <strong>パラメータ</strong>とは、カードの対象（物質や概念）の<strong>特性を数値化</strong>したものです。パラメータにより、異なるカード同士を<strong>客観的に比較</strong>し、ゲームルールに組み込むことができます。
            </p>

            <div className="bg-[var(--section-alt-bg)] border-2 border-[var(--color-info-muted)] rounded-xl p-6 mb-6">
              <h4 className="font-bold text-xl mb-3">パラメータの3つの役割</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[var(--surface)] p-4 rounded-lg">
                  <div className="text-2xl mb-2">📊</div>
                  <h5 className="font-bold mb-2">比較</h5>
                  <p className="text-sm text-[var(--text-muted)]">
                    どちらが強い？どちらが危険？を数値で判断
                  </p>
                </div>
                <div className="bg-[var(--surface)] p-4 rounded-lg">
                  <div className="text-2xl mb-2">⚙️</div>
                  <h5 className="font-bold mb-2">ゲームバランス</h5>
                  <p className="text-sm text-[var(--text-muted)]">
                    攻撃力・防御力などのゲーム効果を決定
                  </p>
                </div>
                <div className="bg-[var(--surface)] p-4 rounded-lg">
                  <div className="text-2xl mb-2">📚</div>
                  <h5 className="font-bold mb-2">学習</h5>
                  <p className="text-sm text-[var(--text-muted)]">
                    データを調べ、記憶することで知識が定着
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-warning-subtle)] border-l-4 border-[var(--color-warning)] p-6 rounded-r-lg">
              <h4 className="font-bold text-lg mb-2">重要な原則</h4>
              <p className="text-[var(--text-secondary)]">
                パラメータは必ず<strong>客観的に測定可能</strong>な数値でなければなりません。「なんとなく強そう」「見た目がかっこいい」といった主観的な印象ではなく、<strong>事実に基づいたデータ</strong>を使用します。
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Parameter Types */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">パラメータの種類</h2>
          <div className="glass-card">
            <p className="text-lg mb-8 text-[var(--text-secondary)]">
              学習分野によって、カードに記載すべきパラメータは異なります。以下は代表的な種類です。
            </p>

            <div className="space-y-4">
              {parameterTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`content-card ${type.cardClass}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl flex-shrink-0" style={{ background: type.cssVar }}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                      <p className="text-[var(--text-secondary)] mb-3">
                        {type.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {type.examples.map((example, i) => (
                          <span key={i} className="tag">{example}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 3: Group Research Assignment */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">グループ調査の進め方</h2>
          <div className="glass-card">
            <p className="text-lg mb-6 text-[var(--text-secondary)]">
              効率的に調査を進めるため、グループで<strong>役割分担</strong>をしましょう。
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="content-card bg-[var(--color-info-subtle)] border-l-4 border-[var(--color-info)]">
                <div className="flex items-center gap-2 mb-3">
                  <MagnifyingGlassIcon className="w-6 h-6 text-[var(--color-info)]" />
                  <h4 className="font-bold">ステップ1</h4>
                </div>
                <h5 className="font-semibold mb-2">項目の割り当て</h5>
                <p className="text-sm text-[var(--text-secondary)]">
                  各メンバーが調査する項目（カード）を決定します。カテゴリごとに担当を分けるのも効果的です。
                </p>
              </div>

              <div className="content-card bg-[var(--color-purple-subtle)] border-l-4 border-[var(--color-purple)]">
                <div className="flex items-center gap-2 mb-3">
                  <DocumentMagnifyingGlassIcon className="w-6 h-6 text-[var(--color-purple)]" />
                  <h4 className="font-bold">ステップ2</h4>
                </div>
                <h5 className="font-semibold mb-2">データ収集</h5>
                <p className="text-sm text-[var(--text-secondary)]">
                  各自が担当する項目について、必要なパラメータを調査します。情報源を必ず記録しましょう。
                </p>
              </div>

              <div className="content-card bg-[var(--color-pink-subtle)] border-l-4 border-[var(--color-pink)]">
                <div className="flex items-center gap-2 mb-3">
                  <TableCellsIcon className="w-6 h-6 text-[var(--color-pink)]" />
                  <h4 className="font-bold">ステップ3</h4>
                </div>
                <h5 className="font-semibold mb-2">データ統合</h5>
                <p className="text-sm text-[var(--text-secondary)]">
                  スプレッドシートに全員のデータを集約し、相互チェックで正確性を確保します。
                </p>
              </div>
            </div>

            <div className="bg-[var(--color-success-subtle)] border-2 border-[var(--color-success)] rounded-lg p-6">
              <h4 className="font-bold text-lg mb-3 text-[var(--color-success)]">調査のコツ</h4>
              <ul className="space-y-2 text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)] mt-2 shrink-0"></span>
                  <span><strong>公的機関のデータを優先</strong> -- 政府機関、研究機関の公開データは信頼性が高い</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)] mt-2 shrink-0"></span>
                  <span><strong>複数の情報源で検証</strong> -- 1つの情報源だけでなく、複数で確認すると正確性が向上</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)] mt-2 shrink-0"></span>
                  <span><strong>出典を明記</strong> -- 後で確認できるよう、URLや文献情報を記録</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)] mt-2 shrink-0"></span>
                  <span><strong>単位を統一</strong> -- 同じパラメータは同じ単位で揃える（℃なら全て℃）</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Section 4: Data Collection Template */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">データ収集テンプレート</h2>
          <div className="glass-card">
            <p className="text-lg mb-6 text-[var(--text-secondary)]">
              以下のようなスプレッドシートで、グループ全体のデータを管理しましょう。
            </p>

            <div className="overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>物質名</th>
                    <th>分類</th>
                    <th>引火点(℃)</th>
                    <th>発火点(℃)</th>
                    <th>沸点(℃)</th>
                    <th>比重</th>
                    <th>蒸気比重</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="font-semibold">
                    <td>ガソリン</td>
                    <td>第1石油類</td>
                    <td>-40</td>
                    <td>約300</td>
                    <td>30-220</td>
                    <td>0.65-0.75</td>
                    <td>3-4</td>
                  </tr>
                  <tr className="text-[var(--text-muted)]">
                    <td>灯油</td>
                    <td>第2石油類</td>
                    <td className="italic">調査しよう</td>
                    <td className="italic">調査しよう</td>
                    <td className="italic">調査しよう</td>
                    <td className="italic">調査しよう</td>
                    <td className="italic">調査しよう</td>
                  </tr>
                  <tr className="text-[var(--text-muted)]">
                    <td>エタノール</td>
                    <td>アルコール類</td>
                    <td className="italic">調査しよう</td>
                    <td className="italic">調査しよう</td>
                    <td className="italic">調査しよう</td>
                    <td className="italic">調査しよう</td>
                    <td className="italic">調査しよう</td>
                  </tr>
                  <tr className="text-[var(--text-muted)]">
                    <td>ジエチルエーテル</td>
                    <td>特殊引火物</td>
                    <td className="italic">調査しよう</td>
                    <td className="italic">調査しよう</td>
                    <td className="italic">調査しよう</td>
                    <td className="italic">調査しよう</td>
                    <td className="italic">調査しよう</td>
                  </tr>
                  <tr className="text-[var(--text-muted)]">
                    <td>重油</td>
                    <td>第3石油類</td>
                    <td className="italic">調査しよう</td>
                    <td className="italic">調査しよう</td>
                    <td className="italic">調査しよう</td>
                    <td className="italic">調査しよう</td>
                    <td className="italic">調査しよう</td>
                  </tr>
                  <tr className="text-[var(--text-muted)]">
                    <td>アセトン</td>
                    <td>第1石油類</td>
                    <td className="italic">調査しよう</td>
                    <td className="italic">調査しよう</td>
                    <td className="italic">調査しよう</td>
                    <td className="italic">調査しよう</td>
                    <td className="italic">調査しよう</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-[var(--color-info-subtle)] p-4 rounded-lg">
              <p className="text-sm text-[var(--text-secondary)]">
                <strong>ヒント：</strong>「物質名 + MSDS（安全データシート）」で検索すると詳細な物性データが見つかります。教科書の巻末資料も確認しましょう。
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 5: AI-Assisted Research */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">AIを活用した調査</h2>
          <div className="glass-card">
            <p className="text-lg mb-6 text-[var(--text-secondary)]">
              ChatGPTなどのAIツールを使うと、調査を効率化できます。ただし、<strong>必ず公式な情報源で検証</strong>してください。
            </p>

            <div className="space-y-6">
              <PromptCard
                title="物質のパラメータ調査"
                description="危険物の物性データをAIで調査"
                prompt={`以下の危険物について、カードゲーム用のパラメータを調査してください。

【物質名】ガソリン

以下の5項目を教えてください：
1. 引火点（℃）
2. 発火点（℃）
3. 沸点（℃）
4. 比重（水=1）
5. 蒸気比重（空気=1）

また、以下も教えてください：
- 水溶性かどうか
- 適切な消火方法
- 特に注意すべき性質

注：回答の正確性を必ず教科書やMSDSで確認してください。`}
                color="blue"
              />

              <PromptCard
                title="物質の比較データ作成"
                description="複数の物質を比較する表を生成"
                prompt={`以下の3つの危険物の物性データを比較表にしてください。

【物質】ガソリン、灯油、エタノール

比較項目：引火点、発火点、沸点、比重、蒸気比重、水溶性、指定数量

表形式で回答し、各物質の特徴的な違いを3行で簡潔にまとめてください。
特にカードゲームの強さ設定に活かせるポイントも教えてください。`}
                color="purple"
              />
            </div>

            <div className="mt-6 bg-[var(--color-danger-subtle)] border-l-4 border-[var(--color-danger)] p-4 rounded-r-lg">
              <h4 className="font-bold text-[var(--color-danger)] mb-2">注意</h4>
              <p className="text-sm text-[var(--text-secondary)]">
                AIの回答をそのまま使用するのではなく、必ず<strong>公的機関のデータベースや学術論文で確認</strong>してください。AIは誤った情報を提供することがあります。
              </p>
            </div>
          </div>
        </motion.section>

        {/* Data Verification Tips */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">データ検証のポイント</h2>
          <div className="glass-card">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="content-card bg-[var(--color-success-subtle)]">
                <h4 className="font-bold text-lg mb-3 text-[var(--color-success)]">信頼できる情報源</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>• 政府機関の公式データベース</li>
                  <li>• 学術論文・研究機関の報告書</li>
                  <li>• 業界団体の公開情報</li>
                  <li>• 専門書・教科書</li>
                  <li>• 公的な統計資料</li>
                </ul>
              </div>

              <div className="content-card bg-[var(--color-danger-subtle)]">
                <h4 className="font-bold text-lg mb-3 text-[var(--color-danger)]">避けるべき情報源</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>• 出典不明のブログ記事</li>
                  <li>• 編集可能なWiki（検証なし）</li>
                  <li>• 個人の意見・感想</li>
                  <li>• 広告目的のサイト</li>
                  <li>• 古すぎるデータ（更新されていない）</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-6 bg-[var(--section-alt-bg)] rounded-lg border-2 border-[var(--color-info-muted)]">
              <h4 className="font-bold text-lg mb-3">クロスチェックの重要性</h4>
              <p className="text-[var(--text-secondary)] mb-3">
                同じパラメータを<strong>複数の情報源</strong>で確認することで、データの信頼性を高めることができます。異なる値が出てきた場合は、最も信頼できる情報源（公的機関など）を優先しましょう。
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                例：引火点が-20℃と記載されている場合、他のサイトでも同じ値か確認する。異なる値（例：-18℃）が出てきたら、公的データベースで最終確認。
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
          <div className="glass-card border-2" style={{ background: 'var(--color-pink-subtle)', borderColor: 'var(--color-pink)' }}>
            <h3 className="text-2xl font-bold mb-4">次のレッスンへ</h3>
            <p className="text-[var(--text-secondary)] mb-6">
              パラメータの調査ができたら、次は「規制と法令」について学びましょう。
            </p>
            <TransitionLink href="/lessons/4" className="btn-primary inline-flex items-center gap-2">
              レッスン4: 規制と法令
              <ChevronRightIcon className="w-5 h-5" />
            </TransitionLink>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
