'use client';

import { motion } from 'framer-motion';
import TransitionLink from '@/components/TransitionLink';
import {
  BookOpenIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const conceptCards = [
    {
      icon: BookOpenIcon,
      title: '名称',
      description: '対象分野の実在する名称を使用し、学習内容と結びつける'
    },
    {
      icon: ChartBarIcon,
      title: 'パラメータ',
      description: '実際のデータに基づいた数値や属性を設定'
    },
    {
      icon: ShieldCheckIcon,
      title: '事実根拠',
      description: '信頼できる情報源から得た事実をカードに反映'
    },
    {
      icon: SparklesIcon,
      title: 'ゲーム効果',
      description: '事実に基づいた特性をゲームメカニクスに変換'
    }
  ];

  const phases = [
    {
      number: 1,
      title: '基礎理解',
      lessons: '第1-2回',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-400'
    },
    {
      number: 2,
      title: '設計',
      lessons: '第3-5回',
      color: 'yellow',
      gradient: 'from-yellow-500 to-yellow-400'
    },
    {
      number: 3,
      title: '制作',
      lessons: '第6-8回',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-400'
    },
    {
      number: 4,
      title: '実践・評価',
      lessons: '第9回',
      color: 'green',
      gradient: 'from-green-500 to-green-400'
    }
  ];

  const lessons = [
    {
      number: 1,
      phase: 1,
      phaseColor: 'orange',
      title: 'TCG-PBLとは？',
      description: '事実基盤制約の原則とPBL型学習アプローチの紹介'
    },
    {
      number: 2,
      phase: 1,
      phaseColor: 'orange',
      title: '対象分野の分類',
      description: '学習ドメインのカテゴリ分類と体系的整理'
    },
    {
      number: 3,
      phase: 2,
      phaseColor: 'yellow',
      title: 'パラメータ調査',
      description: 'カードに載せるパラメータの調査・データ収集ワークショップ'
    },
    {
      number: 4,
      phase: 2,
      phaseColor: 'yellow',
      title: '規制と法令',
      description: '対象分野に関連する法規制の理解'
    },
    {
      number: 5,
      phase: 2,
      phaseColor: 'yellow',
      title: '防御/補助カード設計',
      description: '防御・補助カードの設計原則と事実に基づく効果設計'
    },
    {
      number: 6,
      phase: 3,
      phaseColor: 'blue',
      title: 'カードレイアウト設計',
      description: 'カードのレイアウト決定、情報階層、テンプレート作成'
    },
    {
      number: 7,
      phase: 3,
      phaseColor: 'blue',
      title: 'AIカード生成',
      description: 'AI画像生成とプロンプトエンジニアリング実践'
    },
    {
      number: 8,
      phase: 3,
      phaseColor: 'blue',
      title: '一括作成と改善',
      description: 'CSV一括作成と改善プロセス'
    },
    {
      number: 9,
      phase: 4,
      phaseColor: 'green',
      title: 'テストプレイと評価',
      description: 'プレイテスト、評価、反復改善サイクル'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-70"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-70"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern" />

        <div className="container-custom relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Project-Based Learning</span>

            <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-6 leading-tight">
              カードゲームを<br />
              <span className="gradient-text-orange">作りながら学ぶ</span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              ゲームをプレイする側から、ゲームを作る側へ。<br />
              主体的な学びで知識を深める新しい教育アプローチ
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <TransitionLink href="/lessons/1" className="btn-primary-orange">
                授業を始める
              </TransitionLink>
              <TransitionLink href="/rules" className="btn-secondary-outline">
                ゲームルールを見る
              </TransitionLink>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <ChevronDownIcon className="w-8 h-8 text-foreground/50 animate-bounce-down" />
          </motion.div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-label">TCG-PBL Framework</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
              事実基盤制約のアプローチ
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conceptCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card"
              >
                <card.icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-foreground/70">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase Overview Section */}
      <section className="py-20 px-4 bg-section-alt relative">
        <div className="absolute inset-0 grid-pattern" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-label">Course Structure</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
              全9回の授業構成
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${phase.gradient}`} />
                <div className="text-6xl font-bold text-foreground/10 mb-2">
                  {phase.number}
                </div>
                <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
                <p className="text-foreground/70 mb-4">{phase.lessons}</p>
                <span className={`tag tag-${phase.color}`}>Phase {phase.number}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lesson Timeline */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="relative">
            {/* Timeline line - desktop only */}
            <div className="hidden md:block timeline-line" />

            <div className="space-y-12">
              {lessons.map((lesson, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className="glass-card relative">
                      {/* Lesson number overlay */}
                      <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {lesson.number}
                      </div>

                      <div className="pt-6">
                        <span className={`tag tag-${lesson.phaseColor}`}>
                          Phase {lesson.phase}
                        </span>
                        <h3 className="text-2xl font-bold mt-4 mb-2">
                          {lesson.title}
                        </h3>
                        <p className="text-foreground/70 mb-4">
                          {lesson.description}
                        </p>
                        <TransitionLink
                          href={`/lessons/${lesson.number}`}
                          className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                        >
                          詳細を見る →
                        </TransitionLink>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for desktop alignment */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-section-alt">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              さあ、<span className="gradient-text-orange">授業を始めよう</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <TransitionLink href="/lessons/1" className="btn-primary-orange">
                第1回授業へ進む
              </TransitionLink>
              <TransitionLink href="/resources" className="btn-secondary-outline">
                リソースを見る
              </TransitionLink>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
