'use client';

import { motion } from 'framer-motion';
import {
  HomeIcon,
  ChevronRightIcon,
  AcademicCapIcon,
  LightBulbIcon,
  UserGroupIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import TransitionLink from '@/components/TransitionLink';

const phases = [
  {
    id: 1,
    phase: 'Phase 1',
    title: '基礎理解',
    lessons: 'Lessons 1-2',
    description: '対象分野の基礎知識を習得し、TCGの基本構造を理解する',
    activities: [
      '対象分野の基本概念学習',
      '既存TCGのルール分析',
      'カードゲームの要素研究',
    ],
    color: 'indigo',
  },
  {
    id: 2,
    phase: 'Phase 2',
    title: '設計',
    lessons: 'Lessons 3-5',
    description: '深い調査研究に基づいてカードとゲームシステムを設計する',
    activities: [
      '専門的な資料調査',
      'カードコンセプトの立案',
      'ゲームバランスの検討',
    ],
    color: 'purple',
  },
  {
    id: 3,
    phase: 'Phase 3',
    title: '制作',
    lessons: 'Lessons 6-8',
    description: 'AIツールを活用してカードを制作し、プロトタイプを完成させる',
    activities: [
      'カードデータの作成',
      'AIによるイラスト生成',
      'プロトタイプの印刷',
    ],
    color: 'pink',
  },
  {
    id: 4,
    phase: 'Phase 4',
    title: '実践・評価',
    lessons: 'Lesson 9',
    description: 'プレイテストを通じてゲームを評価し、改善点を発見する',
    activities: [
      'グループ間プレイテスト',
      'フィードバック収集',
      '振り返りと改善提案',
    ],
    color: 'emerald',
  },
];

const objectives = [
  {
    category: '知識',
    items: [
      '対象分野の専門用語と概念の理解',
      '事実とデータに基づいた情報収集',
      '資料の適切な引用と活用',
    ],
  },
  {
    category: '思考力',
    items: [
      '情報の分析と統合',
      'ゲームバランスの論理的設計',
      '問題解決のための創造的思考',
    ],
  },
  {
    category: '表現力',
    items: [
      'カードデザインによる視覚的表現',
      'ルールブックの論理的記述',
      'プレゼンテーションスキル',
    ],
  },
  {
    category: '主体性',
    items: [
      '自律的な調査研究',
      'グループ内での協働',
      '試行錯誤による改善',
    ],
  },
];

const reasons = [
  {
    title: '能動的学習',
    description: '受動的な講義ではなく、生徒自身が主体的に調査・設計・制作を行うことで、深い理解と記憶の定着を促進します。',
    icon: AcademicCapIcon,
  },
  {
    title: '内発的動機づけ',
    description: 'ゲーム制作という楽しい目標により、生徒は自然と学習に没頭し、高いエンゲージメントを維持できます。',
    icon: SparklesIcon,
  },
  {
    title: 'ピアラーニング',
    description: 'グループ作業とプレイテストを通じて、生徒同士が教え合い、多様な視点から学びを深めます。',
    icon: UserGroupIcon,
  },
  {
    title: '実践的スキル',
    description: 'AIツールの活用、情報収集、論理的思考など、21世紀型スキルを実践的に習得できます。',
    icon: LightBulbIcon,
  },
];

const applications = [
  {
    subject: '化学',
    example: '元素周期表TCG',
    framework: '元素名 + 原子番号・電子配置 + 発見年・用途 + 反応効果',
  },
  {
    subject: '歴史',
    example: '歴史人物TCG',
    framework: '人物名 + 生没年・地位 + 歴史的事実 + 影響力効果',
  },
  {
    subject: '生物',
    example: '生態系TCG',
    framework: '生物名 + 分類・生息地 + 生態データ + 食物連鎖効果',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const getPhaseColor = (color: string) => {
  const colors: Record<string, { text: string; tag: string }> = {
    indigo: { text: 'text-phase-1', tag: 'tag-indigo' },
    purple: { text: 'text-phase-2', tag: 'tag-purple' },
    pink: { text: 'text-phase-3', tag: 'tag-red' },
    emerald: { text: 'text-phase-4', tag: 'tag-green' },
  };
  return colors[color] || colors.indigo;
};

export default function OverviewPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="page-shell"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <nav className="flex items-center space-x-2 text-sm text-[var(--text-secondary)]">
              <TransitionLink href="/" className="hover:text-[var(--accent-primary)] transition-colors">
                <HomeIcon className="h-5 w-5" />
              </TransitionLink>
              <ChevronRightIcon className="h-4 w-4" />
              <span className="text-[var(--text-primary)] font-medium">PBL概要</span>
            </nav>

            <div className="space-y-4">
              <div className="flex justify-start">
                <span className="section-label">Overview</span>
              </div>
              <h1 className="h1 gradient-text">
                PBL概要
              </h1>
              <p className="max-w-3xl p text-[var(--text-secondary)]">
                TCG-PBLは、トレーディングカードゲーム制作を通じて専門分野を学ぶプロジェクト型学習プログラムです。
                生徒の主体性と創造性を引き出し、深い理解と実践的スキルの獲得を目指します。
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="h2 text-[var(--text-primary)]">
              TCG-PBLとは
            </h2>
            <div className="glass-card rounded-3xl p-8 space-y-6">
              <div className="space-y-4">
                <h3 className="h3 text-[var(--text-primary)]">
                  定義
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  TCG-PBL (Trading Card Game - Project Based Learning) は、専門分野の知識をトレーディングカードゲームの形式に落とし込むことで学習する、プロジェクト型学習手法です。
                  生徒は単なる暗記ではなく、調査・設計・制作・評価の全プロセスを通じて、対象分野への深い理解を獲得します。
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="h3 text-[var(--text-primary)]">
                  従来の学習との違い
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="content-card">
                    <h4 className="h4 text-[var(--text-primary)] mb-2">従来の学習</h4>
                    <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                      <li>• 教員から生徒への一方向的な知識伝達</li>
                      <li>• 暗記中心の学習スタイル</li>
                      <li>• テストによる評価</li>
                      <li>• 個人作業が中心</li>
                    </ul>
                  </div>
                  <div className="content-card" style={{background: 'rgba(20, 184, 166, 0.1)'}}>
                    <h4 className="h4 text-[var(--accent-primary)] mb-2">TCG-PBL</h4>
                    <ul className="space-y-2 text-sm text-[var(--accent-primary)]">
                      <li>• 生徒自身が主体的に調査・制作</li>
                      <li>• 理解と応用を重視</li>
                      <li>• 成果物とプロセスで評価</li>
                      <li>• グループワークで協働</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="h2 text-[var(--text-primary)]">
              なぜ効果的なのか
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="glass-card rounded-2xl p-6 space-y-4"
                  >
                    <div className="icon-badge icon-badge-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {reason.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="h2 text-[var(--text-primary)]">
              4フェーズ構造
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              TCG-PBLは9レッスンを4つのフェーズに分けて実施します。各フェーズは明確な目標を持ち、段階的に学習を深めていきます。
            </p>
            <div className="space-y-6">
              {phases.map((phase, index) => {
                const colors = getPhaseColor(phase.color);
                return (
                  <motion.div
                    key={phase.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.15 }}
                    className="glass-card rounded-2xl p-8"
                  >
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`tag ${colors.tag}`}>{phase.phase}</span>
                        <span className="text-sm text-[var(--text-muted)]">{phase.lessons}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                        {phase.title}
                      </h3>
                      <p className="text-[var(--text-secondary)]">
                        {phase.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-[var(--text-secondary)]">
                          主な活動
                        </h4>
                        <ul className="space-y-1">
                          {phase.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start text-sm text-[var(--text-secondary)]">
                              <CheckCircleIcon className={`h-5 w-5 mr-2 flex-shrink-0 ${colors.text}`} />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="h2 text-[var(--text-primary)]">
              学習目標マッピング
            </h2>
            <div className="glass-card rounded-3xl p-8">
              <div className="grid gap-8 md:grid-cols-2">
                {objectives.map((objective, index) => (
                  <motion.div
                    key={objective.category}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-bold gradient-text">
                      {objective.category}
                    </h3>
                    <ul className="space-y-2">
                      {objective.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-[var(--text-secondary)]">
                          <span className="mr-2 dot-primary">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="h2 text-[var(--text-primary)]">
              普遍的フレームワーク
            </h2>
            <div className="glass-card rounded-3xl p-8 space-y-6">
              <p className="text-[var(--text-secondary)] leading-relaxed">
                TCG-PBLの核心は、どの教科にも適用できる普遍的なカード構造です。
                このフレームワークにより、生徒は事実に基づいた学習とゲーム設計を両立できます。
              </p>
              <div className="rounded-2xl p-8 border" style={{ background: 'color-mix(in srgb, var(--accent-primary) 6%, var(--surface-glass))', borderColor: 'color-mix(in srgb, var(--accent-primary) 24%, transparent)' }}>
                <div className="flex flex-wrap items-center justify-center gap-4 text-center">
                  <div className="space-y-2">
                    <div className="text-lg font-bold text-phase-1">名称</div>
                    <div className="text-sm text-[var(--text-secondary)]">カード名</div>
                  </div>
                  <div className="text-2xl text-phase-1">+</div>
                  <div className="space-y-2">
                    <div className="text-lg font-bold text-phase-2">パラメータ</div>
                    <div className="text-sm text-[var(--text-secondary)]">数値情報</div>
                  </div>
                  <div className="text-2xl text-phase-2">+</div>
                  <div className="space-y-2">
                    <div className="text-lg font-bold text-phase-3">事実根拠</div>
                    <div className="text-sm text-[var(--text-secondary)]">情報欄</div>
                  </div>
                  <div className="text-2xl text-phase-3">+</div>
                  <div className="space-y-2">
                    <div className="text-lg font-bold text-phase-4">ゲーム効果</div>
                    <div className="text-sm text-[var(--text-secondary)]">効果テキスト</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="h3 text-[var(--text-primary)]">
                  なぜこのパターンは普遍的なのか
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  このフレームワークは、専門知識（名称・パラメータ・事実根拠）とゲーム設計（ゲーム効果）を明確に分離します。
                  これにより、生徒はまず正確な知識を調査し、次にそれをゲームメカニクスに変換するという二段階のプロセスを経験できます。
                  この構造は、対象が元素でも歴史人物でも生物でも、同様に機能します。
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="h2 text-[var(--text-primary)]">
              他教科への応用例
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {applications.map((app, index) => (
                <motion.div
                  key={app.subject}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  className="glass-card rounded-2xl p-6 space-y-4"
                >
                  <div className="space-y-2">
                    <span className="tag tag-primary">{app.subject}</span>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                      {app.example}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-[var(--text-secondary)]">
                      フレームワーク適用
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {app.framework}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-[var(--text-muted)] text-center">
              このフレームワークは、あらゆる教科の専門知識をゲーム化することができます
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 border-t border-[var(--border)] pt-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--text-muted)] mb-1">次のステップ</p>
                <p className="text-[var(--text-secondary)]">実施に向けた具体的な準備を始めましょう</p>
              </div>
              <TransitionLink href="/guide" className="btn-primary shrink-0">
                実施ガイドを見る
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </TransitionLink>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
