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
      question: 'パラメータを調査する際に最も重要なことは何ですか？',
      options: [
        '見栄えの良い数値を選ぶこと',
        '信頼できる情報源から正確なデータを得ること',
        'できるだけ大きな数値を集めること',
        '他のカードゲームと同じ数値を使うこと'
      ],
      correct: 1,
      explanation: '信頼できる情報源から正確なデータを収集することが最も重要です。事実基盤制約の原則に従い、公的機関のデータや学術論文など、信頼性の高い情報源を使用しましょう。'
    },
    {
      question: 'パラメータとして適切でないものはどれですか？',
      options: [
        '引火点（℃）',
        'かっこよさ（主観評価）',
        '密度（g/cm³）',
        '沸点（℃）'
      ],
      correct: 1,
      explanation: '主観的な評価はパラメータとして不適切です。パラメータは客観的に測定可能で、比較可能な数値である必要があります。'
    },
    {
      question: 'グループでパラメータ調査を行う利点は何ですか？',
      options: [
        '作業を分担して効率化できる',
        '異なる視点で情報を検証できる',
        '調査の抜け漏れを防げる',
        'すべて'
      ],
      correct: 3,
      explanation: 'グループ調査にはすべてのメリットがあります。作業の効率化、多角的な視点、相互チェックによる品質向上が期待できます。'
    }
  ];

  const parameterTypes = [
    {
      name: '物理的パラメータ',
      description: '物質の物理的特性を表す数値',
      examples: ['温度（℃）', '圧力（Pa）', '密度（g/cm³）', '粘度（Pa・s）'],
      color: 'blue'
    },
    {
      name: '化学的パラメータ',
      description: '化学的性質や反応性を表す数値',
      examples: ['pH値', 'モル質量（g/mol）', '濃度（%）', '反応速度定数'],
      color: 'purple'
    },
    {
      name: '危険性パラメータ',
      description: '安全性やリスクに関する数値',
      examples: ['引火点（℃）', '爆発範囲（%）', '毒性（LD50）', '腐食性'],
      color: 'pink'
    },
    {
      name: '規制パラメータ',
      description: '法令や規制に基づく数値・等級',
      examples: ['危険等級', '指定数量（kg）', '規制クラス', '保管基準'],
      color: 'orange'
    },
    {
      name: '性能パラメータ',
      description: '機能や効果を表す数値',
      examples: ['効率（%）', '耐久性（時間）', '容量（L）', '出力（W）'],
      color: 'green'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800">
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
            <span className="text-gray-500 dark:text-gray-400 text-sm">Lesson 3</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">パラメータ調査</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            カードに記載する数値データを調査し、ゲーム設計の基礎を固めましょう。
          </p>

          {/* Learning Objectives */}
          <div className="glass-card mt-8 max-w-3xl">
            <h3 className="section-label">学習目標</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>カードに適したパラメータの種類を理解する</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>信頼できる情報源からデータを収集する方法を学ぶ</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>グループで効率的に調査を進める手法を身につける</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
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

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-xl mb-3">パラメータの3つの役割</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl mb-2">📊</div>
                  <h5 className="font-bold mb-2">比較</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    どちらが強い？どちらが危険？を数値で判断
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl mb-2">⚙️</div>
                  <h5 className="font-bold mb-2">ゲームバランス</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    攻撃力・防御力などのゲーム効果を決定
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl mb-2">📚</div>
                  <h5 className="font-bold mb-2">学習</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    データを調べ、記憶することで知識が定着
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h4 className="font-bold text-lg mb-2">重要な原則</h4>
              <p className="text-gray-700 dark:text-gray-300">
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
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
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
                  className={`content-card category-card-${type.color}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-${type.color}-500 rounded-lg flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
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
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              効率的に調査を進めるため、グループで<strong>役割分担</strong>をしましょう。
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="content-card bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500">
                <div className="flex items-center gap-2 mb-3">
                  <MagnifyingGlassIcon className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold">ステップ1</h4>
                </div>
                <h5 className="font-semibold mb-2">項目の割り当て</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  各メンバーが調査する項目（カード）を決定します。カテゴリごとに担当を分けるのも効果的です。
                </p>
              </div>

              <div className="content-card bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500">
                <div className="flex items-center gap-2 mb-3">
                  <DocumentMagnifyingGlassIcon className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold">ステップ2</h4>
                </div>
                <h5 className="font-semibold mb-2">データ収集</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  各自が担当する項目について、必要なパラメータを調査します。情報源を必ず記録しましょう。
                </p>
              </div>

              <div className="content-card bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500">
                <div className="flex items-center gap-2 mb-3">
                  <TableCellsIcon className="w-6 h-6 text-pink-500" />
                  <h4 className="font-bold">ステップ3</h4>
                </div>
                <h5 className="font-semibold mb-2">データ統合</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  スプレッドシートに全員のデータを集約し、相互チェックで正確性を確保します。
                </p>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-3 text-green-700 dark:text-green-300">調査のコツ</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></span>
                  <span><strong>公的機関のデータを優先</strong> -- 政府機関、研究機関の公開データは信頼性が高い</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></span>
                  <span><strong>複数の情報源で検証</strong> -- 1つの情報源だけでなく、複数で確認すると正確性が向上</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></span>
                  <span><strong>出典を明記</strong> -- 後で確認できるよう、URLや文献情報を記録</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></span>
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
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              以下のようなスプレッドシートで、グループ全体のデータを管理しましょう。
            </p>

            <div className="overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>項目名</th>
                    <th>カテゴリ</th>
                    <th>パラメータA</th>
                    <th>パラメータB</th>
                    <th>パラメータC</th>
                    <th>情報源</th>
                    <th>担当者</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>項目1</td>
                    <td>カテゴリA</td>
                    <td>120</td>
                    <td>-20</td>
                    <td>0.85</td>
                    <td>公的サイトURL</td>
                    <td>山田</td>
                  </tr>
                  <tr>
                    <td>項目2</td>
                    <td>カテゴリA</td>
                    <td>95</td>
                    <td>15</td>
                    <td>1.20</td>
                    <td>公的サイトURL</td>
                    <td>田中</td>
                  </tr>
                  <tr>
                    <td>項目3</td>
                    <td>カテゴリB</td>
                    <td>200</td>
                    <td>-30</td>
                    <td>0.65</td>
                    <td>学術論文</td>
                    <td>佐藤</td>
                  </tr>
                  <tr>
                    <td>項目4</td>
                    <td>カテゴリB</td>
                    <td>180</td>
                    <td>10</td>
                    <td>0.92</td>
                    <td>公的サイトURL</td>
                    <td>鈴木</td>
                  </tr>
                  <tr>
                    <td>項目5</td>
                    <td>カテゴリC</td>
                    <td>78</td>
                    <td>5</td>
                    <td>1.05</td>
                    <td>専門書</td>
                    <td>高橋</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>ヒント：</strong>Google SpreadsheetやExcelを使えば、グループ全員でリアルタイムに共同編集できます。
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
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              ChatGPTなどのAIツールを使うと、調査を効率化できます。ただし、<strong>必ず公式な情報源で検証</strong>してください。
            </p>

            <div className="space-y-6">
              <PromptCard
                title="パラメータ調査プロンプト"
                description="項目名を指定して、必要なパラメータを調査"
                prompt={`以下の項目について、カードゲームに記載するパラメータを調査してください。

【項目名】
（ここに調査したい項目名を記入）

【収集したいパラメータ】
- パラメータA：
- パラメータB：
- パラメータC：

以下の形式で回答してください：
1. 各パラメータの数値
2. 単位
3. 信頼できる情報源（URL推奨）
4. その数値の意味や重要性

注：回答の正確性を確認するため、必ず公式な情報源で検証してください。`}
                color="blue"
              />

              <PromptCard
                title="データ検証プロンプト"
                description="収集したデータの妥当性をチェック"
                prompt={`以下のパラメータデータが妥当かどうか、検証してください。

【項目名】（記入）
【パラメータA】（記入）
【パラメータB】（記入）
【パラメータC】（記入）

以下の観点で検証してください：
1. 数値の範囲は現実的か
2. 単位は正しいか
3. 他の類似項目と比較して矛盾がないか
4. より信頼できる情報源があるか`}
                color="purple"
              />
            </div>

            <div className="mt-6 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">注意</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
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
              <div className="content-card bg-green-50 dark:bg-green-900/20">
                <h4 className="font-bold text-lg mb-3 text-green-700 dark:text-green-300">信頼できる情報源</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• 政府機関の公式データベース</li>
                  <li>• 学術論文・研究機関の報告書</li>
                  <li>• 業界団体の公開情報</li>
                  <li>• 専門書・教科書</li>
                  <li>• 公的な統計資料</li>
                </ul>
              </div>

              <div className="content-card bg-red-50 dark:bg-red-900/20">
                <h4 className="font-bold text-lg mb-3 text-red-700 dark:text-red-300">避けるべき情報源</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• 出典不明のブログ記事</li>
                  <li>• 編集可能なWiki（検証なし）</li>
                  <li>• 個人の意見・感想</li>
                  <li>• 広告目的のサイト</li>
                  <li>• 古すぎるデータ（更新されていない）</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-lg mb-3">クロスチェックの重要性</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                同じパラメータを<strong>複数の情報源</strong>で確認することで、データの信頼性を高めることができます。異なる値が出てきた場合は、最も信頼できる情報源（公的機関など）を優先しましょう。
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
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
          <div className="glass-card bg-gradient-to-r from-pink-500/10 to-orange-500/10 border-2 border-pink-500/50">
            <h3 className="text-2xl font-bold mb-4">次のレッスンへ</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
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
