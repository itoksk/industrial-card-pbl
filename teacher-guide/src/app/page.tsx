'use client';

import { motion } from 'framer-motion';
import {
  BookOpenIcon,
  ClipboardDocumentCheckIcon,
  LightBulbIcon,
  ArrowPathIcon,
  RocketLaunchIcon,
  RectangleStackIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import TransitionLink from '@/components/TransitionLink';

const sections = [
  {
    id: 1,
    title: 'PBL概要',
    description: 'TCG-PBLの全体像と教育的根拠を理解する',
    icon: BookOpenIcon,
    href: '/overview',
    color: 'indigo',
  },
  {
    id: 2,
    title: '実施ガイド',
    description: '準備チェックリストとスケジュール管理',
    icon: ClipboardDocumentCheckIcon,
    href: '/guide',
    color: 'purple',
  },
  {
    id: 3,
    title: '教授法メモ',
    description: '事実基盤制約と効果的な教授テクニック',
    icon: LightBulbIcon,
    href: '/teaching',
    color: 'pink',
  },
  {
    id: 4,
    title: 'ルール進化',
    description: '教員設計 vs 生徒改訂の比較分析',
    icon: ArrowPathIcon,
    href: '/evolution',
    color: 'emerald',
  },
  {
    id: 5,
    title: '今後の展望',
    description: '他教科展開と産業人材育成への応用',
    icon: RocketLaunchIcon,
    href: '/future',
    color: 'amber',
  },
  {
    id: 6,
    title: 'カードリファレンス',
    description: 'カード種別とデータ形式の詳細仕様',
    icon: RectangleStackIcon,
    href: '/reference',
    color: 'cyan',
  },
];

const stats = [
  { label: 'レッスン', value: '9' },
  { label: 'フェーズ', value: '4' },
  { label: 'カード種別', value: '4' },
  { label: 'フレームワーク', value: '1' },
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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string }> = {
    indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-400' },
    purple: { bg: 'bg-purple-500/10', text: 'text-purple-400' },
    pink: { bg: 'bg-pink-500/10', text: 'text-pink-400' },
    emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400' },
    amber: { bg: 'bg-amber-500/10', text: 'text-amber-400' },
    cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400' },
  };
  return colors[color] || colors.indigo;
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl container-padding section-padding"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="flex justify-center">
              <span className="section-label">Teacher's Guide</span>
            </div>
            <h1 className="h1">
              <span className="gradient-text">TCG-PBL 教員ガイド</span>
            </h1>
            <p className="mx-auto max-w-2xl p text-[var(--text-secondary)]">
              トレーディングカードゲーム型PBLを実践する教員のための総合ガイド。
              <br />
              準備から実施、評価まで、成功に必要なすべての情報を提供します。
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="h2 text-center text-[var(--text-primary)]">
              ガイドコンテンツ
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sections.map((section) => {
                const Icon = section.icon;
                const colorClasses = getColorClasses(section.color);
                return (
                  <motion.div
                    key={section.id}
                    variants={cardVariants}
                    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <TransitionLink href={section.href}>
                      <div className="glass-card group relative h-full cursor-pointer">
                        <div className="space-y-4">
                          <div className={`inline-flex rounded-xl p-3 ${colorClasses.bg}`}>
                            <Icon className={`h-8 w-8 ${colorClasses.text}`} />
                          </div>
                          <div className="space-y-2">
                            <h3 className="h3 text-[var(--text-primary)]">
                              {section.title}
                            </h3>
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                              {section.description}
                            </p>
                          </div>
                          <div className="flex items-center text-sm font-medium text-[var(--accent-primary)]">
                            詳しく見る
                            <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </TransitionLink>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="h2 text-center text-[var(--text-primary)]">
              プログラム統計
            </h2>
            <div className="glass-card">
              <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    className="text-center space-y-2"
                  >
                    <div className="text-4xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-[var(--text-secondary)]">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card text-center space-y-4">
            <h3 className="h3 text-[var(--text-primary)]">はじめての方へ</h3>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              TCG-PBLの実施が初めての方は、まず「PBL概要」から始めることをお勧めします。
              プログラムの全体像を理解した上で、「実施ガイド」で具体的な準備を進めてください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <TransitionLink href="/overview">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  PBL概要を見る
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </motion.button>
              </TransitionLink>
              <TransitionLink href="/guide">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  実施ガイドを見る
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </motion.button>
              </TransitionLink>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center text-sm text-[var(--text-muted)] pb-8"
          >
            <p>このガイドは教員向けに最適化されています。生徒向けの資料は別途ご用意ください。</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
