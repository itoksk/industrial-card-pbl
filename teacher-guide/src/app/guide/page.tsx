'use client';

import { motion } from 'framer-motion';
import {
  HomeIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon,
  ComputerDesktopIcon,
  PrinterIcon,
  KeyIcon,
  ExclamationTriangleIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import TransitionLink from '@/components/TransitionLink';
import { useState } from 'react';

const checklist = [
  {
    id: 1,
    title: 'カード生成ツールのデプロイ',
    description: 'Vercelにカード生成ツールをデプロイし、生徒がアクセスできる状態にする',
    category: 'digital',
    icon: ComputerDesktopIcon,
  },
  {
    id: 2,
    title: 'Google AI Studio APIキーの取得',
    description: '18歳以上制限に注意。教員が代表してキーを取得することを推奨',
    category: 'digital',
    icon: KeyIcon,
  },
  {
    id: 3,
    title: '印刷用材料の準備',
    description: '厚紙、カッター、ラミネーター等の物理的な材料を用意',
    category: 'physical',
    icon: PrinterIcon,
  },
  {
    id: 4,
    title: 'グループ編成の決定',
    description: '4-5人/グループを推奨。多様なスキルが混在するように配慮',
    category: 'organization',
    icon: UserGroupIcon,
  },
  {
    id: 5,
    title: '評価フォームの準備',
    description: 'Google Formsなどでプレイテスト評価用のフォームを作成',
    category: 'organization',
    icon: DocumentTextIcon,
  },
  {
    id: 6,
    title: '参考資料の準備',
    description: '対象分野の教科書、データシート、論文等を準備',
    category: 'resources',
    icon: DocumentTextIcon,
  },
];

const schedule = [
  {
    lesson: 1,
    phase: 'Phase 1',
    title: 'PBL導入とTCG基礎',
    activities: [
      'プロジェクト概要説明',
      '既存TCGの分析',
      'グループ編成',
    ],
    deliverables: '分析レポート',
    duration: '90分',
    color: 'indigo',
  },
  {
    lesson: 2,
    phase: 'Phase 1',
    title: '対象分野の基礎学習',
    activities: [
      '基本概念の学習',
      'カード化する対象の選定',
      '初期リサーチ',
    ],
    deliverables: '対象リスト',
    duration: '90分',
    color: 'indigo',
  },
  {
    lesson: 3,
    phase: 'Phase 2',
    title: '深い調査研究',
    activities: [
      '専門資料の調査',
      'データ収集',
      '情報の整理',
    ],
    deliverables: '調査ノート',
    duration: '90分',
    color: 'purple',
  },
  {
    lesson: 4,
    phase: 'Phase 2',
    title: 'カードコンセプト設計',
    activities: [
      'パラメータ設計',
      '効果設計',
      'バランス検討',
    ],
    deliverables: '設計書',
    duration: '90分',
    color: 'purple',
  },
  {
    lesson: 5,
    phase: 'Phase 2',
    title: 'ゲームシステム設計',
    activities: [
      'ルール策定',
      '勝利条件設定',
      'カードタイプ分類',
    ],
    deliverables: 'ルールブック初稿',
    duration: '90分',
    color: 'purple',
  },
  {
    lesson: 6,
    phase: 'Phase 3',
    title: 'カードデータ作成',
    activities: [
      'カード情報の入力',
      'イラストプロンプト作成',
      'データ検証',
    ],
    deliverables: 'カードデータ',
    duration: '90分',
    color: 'pink',
  },
  {
    lesson: 7,
    phase: 'Phase 3',
    title: 'AI生成とデザイン調整',
    activities: [
      'AIイラスト生成',
      'デザイン微調整',
      'カード出力',
    ],
    deliverables: 'デジタルカード',
    duration: '90分',
    color: 'pink',
  },
  {
    lesson: 8,
    phase: 'Phase 3',
    title: 'プロトタイプ制作',
    activities: [
      'カード印刷',
      'カットとラミネート',
      'デッキ構築',
    ],
    deliverables: '物理プロトタイプ',
    duration: '90分',
    color: 'pink',
  },
  {
    lesson: 9,
    phase: 'Phase 4',
    title: 'プレイテストと評価',
    activities: [
      'グループ間プレイテスト',
      'フィードバック収集',
      '振り返り発表',
    ],
    deliverables: '評価レポート',
    duration: '90分',
    color: 'emerald',
  },
];

const materials = {
  digital: [
    { name: 'PC または タブレット', note: '1人1台推奨' },
    { name: 'インターネット接続', note: '安定した通信環境' },
    { name: 'Google AI Studio アカウント', note: '18歳以上制限あり' },
    { name: 'カード生成ツール', note: 'Vercelにデプロイ済み' },
  ],
  physical: [
    { name: '厚紙（A4サイズ）', note: '1グループあたり10枚程度' },
    { name: 'カッター / はさみ', note: '安全に配慮' },
    { name: 'カードスリーブ', note: '63mm×88mm標準サイズ' },
    { name: 'ラミネーター（任意）', note: '耐久性向上のため' },
  ],
  software: [
    { name: 'カード生成ツール', note: 'Next.js製Webアプリ' },
    { name: 'Google Sheets / Excel', note: 'データ管理用' },
    { name: 'Canva / Figma（任意）', note: '追加デザイン用' },
    { name: 'Google Forms', note: '評価フォーム作成' },
  ],
};

const apiKeyInfo = [
  {
    title: '18歳以上制限について',
    description: 'Google AI Studioは利用規約上、18歳以上のユーザーのみが利用可能です。高校生の多くはこの制限に該当するため、教員が代表してAPIキーを取得し、生徒に共有する運用を推奨します。',
    icon: ExclamationTriangleIcon,
    color: 'amber',
  },
  {
    title: '推奨運用方法',
    description: '教員アカウントでAPIキーを取得し、環境変数として設定した状態でツールをデプロイします。生徒は直接APIキーを扱わず、デプロイ済みのツールを使用する形が安全です。',
    icon: ShieldCheckIcon,
    color: 'emerald',
  },
  {
    title: 'セキュリティ注意事項',
    description: 'APIキーは秘密情報です。GitHubなどの公開リポジトリにコミットしないよう注意してください。Vercelの環境変数機能を使用し、コード内には直接記述しないでください。',
    icon: KeyIcon,
    color: 'red',
  },
  {
    title: 'コスト管理',
    description: 'Gemini APIは無料枠が提供されていますが、大量のリクエストを行うと課金される可能性があります。使用量をモニタリングし、必要に応じてレート制限を設定してください。',
    icon: CurrencyDollarIcon,
    color: 'blue',
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
  const colors: Record<string, string> = {
    indigo: 'tag-primary',
    purple: 'tag-secondary',
    pink: 'tag-tertiary',
    emerald: 'tag-quaternary',
  };
  return colors[color] || 'tag-primary';
};

const getIconColor = (color: string) => {
  const colors: Record<string, { bg: string; border: string; text: string }> = {
    amber: {
      bg: 'bg-amber-50 dark:bg-amber-950/30',
      border: 'border-amber-200 dark:border-amber-800',
      text: 'text-amber-600 dark:text-amber-400',
    },
    emerald: {
      bg: 'bg-emerald-50 dark:bg-emerald-950/30',
      border: 'border-emerald-200 dark:border-emerald-800',
      text: 'text-emerald-600 dark:text-emerald-400',
    },
    red: {
      bg: 'bg-red-50 dark:bg-red-950/30',
      border: 'border-red-200 dark:border-red-800',
      text: 'text-red-600 dark:text-red-400',
    },
    blue: {
      bg: 'bg-blue-50 dark:bg-blue-950/30',
      border: 'border-blue-200 dark:border-blue-800',
      text: 'text-blue-600 dark:text-blue-400',
    },
  };
  return colors[color] || colors.amber;
};

export default function GuidePage() {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  const toggleCheck = (id: number) => {
    setCheckedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <TransitionLink href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <HomeIcon className="h-5 w-5" />
              </TransitionLink>
              <ChevronRightIcon className="h-4 w-4" />
              <span className="text-gray-900 dark:text-white font-medium">実施ガイド</span>
            </nav>

            <div className="space-y-4">
              <div className="flex justify-start">
                <span className="section-label">Implementation</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl gradient-text">
                実施ガイド
              </h1>
              <p className="max-w-3xl text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                TCG-PBLを成功させるための実践的なガイドです。
                準備チェックリスト、推奨スケジュール、必要な材料、APIキー管理まで、実施に必要なすべての情報を提供します。
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              準備チェックリスト
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              プロジェクト開始前に、以下の項目を確認してください。チェックボックスをクリックして進捗を管理できます。
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {checklist.map((item, index) => {
                const Icon = item.icon;
                const isChecked = checkedItems.has(item.id);
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    onClick={() => toggleCheck(item.id)}
                    className={`glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                      isChecked
                        ? 'bg-indigo-50/70 dark:bg-indigo-950/50 border-indigo-300 dark:border-indigo-700'
                        : 'hover:shadow-xl'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
                          isChecked
                            ? 'bg-indigo-600 border-indigo-600'
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                      >
                        {isChecked && (
                          <CheckCircleIcon className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center space-x-2">
                          <Icon
                            className={`h-5 w-5 ${
                              isChecked
                                ? 'text-indigo-600 dark:text-indigo-400'
                                : 'text-gray-500 dark:text-gray-400'
                            }`}
                          />
                          <h3
                            className={`font-semibold ${
                              isChecked
                                ? 'text-indigo-900 dark:text-indigo-300'
                                : 'text-gray-900 dark:text-white'
                            }`}
                          >
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="glass-card rounded-2xl p-6 bg-indigo-50/50 dark:bg-indigo-950/30">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                  {checkedItems.size}
                </div>
                <div>
                  <p className="text-sm font-medium text-indigo-900 dark:text-indigo-300">
                    {checkedItems.size} / {checklist.length} 項目完了
                  </p>
                  <div className="mt-2 h-2 w-48 bg-indigo-200 dark:bg-indigo-900 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-indigo-600"
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(checkedItems.size / checklist.length) * 100}%`,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              推奨スケジュール
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              9レッスン（各90分）を4フェーズに分けて実施します。
              学校のカリキュラムに合わせて柔軟に調整してください。
            </p>
            <div className="glass-card rounded-3xl p-4 sm:p-8">
              {/* Desktop: table layout */}
              <div className="hidden lg:block">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-indigo-200 dark:border-indigo-800">
                        <th className="text-left p-3 font-semibold text-[var(--text-secondary)]">L</th>
                        <th className="text-left p-3 font-semibold text-[var(--text-secondary)]">フェーズ</th>
                        <th className="text-left p-3 font-semibold text-[var(--text-secondary)]">タイトル</th>
                        <th className="text-left p-3 font-semibold text-[var(--text-secondary)]">主な活動</th>
                        <th className="text-left p-3 font-semibold text-[var(--text-secondary)]">成果物</th>
                        <th className="text-left p-3 font-semibold text-[var(--text-secondary)]">時間</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schedule.map((lesson, index) => (
                        <motion.tr
                          key={lesson.lesson}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 + index * 0.05 }}
                          className="border-b border-[var(--border)] hover:bg-[var(--surface-hover)] transition-colors"
                        >
                          <td className="p-3">
                            <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-sm">
                              {lesson.lesson}
                            </div>
                          </td>
                          <td className="p-3">
                            <span className={`tag ${getPhaseColor(lesson.color)} text-xs`}>
                              {lesson.phase}
                            </span>
                          </td>
                          <td className="p-3">
                            <span className="font-semibold text-[var(--text-primary)] text-sm">
                              {lesson.title}
                            </span>
                          </td>
                          <td className="p-3">
                            <ul className="space-y-1">
                              {lesson.activities.map((activity, idx) => (
                                <li key={idx} className="text-xs text-[var(--text-secondary)]">
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </td>
                          <td className="p-3">
                            <span className="text-xs text-[var(--text-secondary)]">
                              {lesson.deliverables}
                            </span>
                          </td>
                          <td className="p-3">
                            <div className="flex items-center text-xs text-[var(--text-muted)]">
                              <ClockIcon className="h-3 w-3 mr-1" />
                              {lesson.duration}
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mobile/Tablet: card layout */}
              <div className="lg:hidden space-y-3">
                {schedule.map((lesson, index) => (
                  <motion.div
                    key={lesson.lesson}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.05 }}
                    className="content-card rounded-xl p-4"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {lesson.lesson}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-[var(--text-primary)] text-sm truncate">
                          {lesson.title}
                        </h3>
                        <span className={`tag ${getPhaseColor(lesson.color)} text-xs mt-1`}>
                          {lesson.phase}
                        </span>
                      </div>
                      <div className="flex items-center text-xs text-[var(--text-muted)] flex-shrink-0">
                        <ClockIcon className="h-3 w-3 mr-1" />
                        {lesson.duration}
                      </div>
                    </div>
                    <ul className="space-y-1 mb-2">
                      {lesson.activities.map((activity, idx) => (
                        <li key={idx} className="text-xs text-[var(--text-secondary)]">
                          {activity}
                        </li>
                      ))}
                    </ul>
                    <div className="text-xs text-[var(--accent-primary)] font-medium">
                      {lesson.deliverables}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500 text-center">
              スケジュールは目安です。生徒の進捗や学校のカリキュラムに合わせて調整してください
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              必要な材料
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="glass-card rounded-2xl p-6 space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="inline-flex rounded-xl p-3 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800">
                    <ComputerDesktopIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    デジタル環境
                  </h3>
                </div>
                <ul className="space-y-3">
                  {materials.digital.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircleIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {item.note}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="glass-card rounded-2xl p-6 space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="inline-flex rounded-xl p-3 bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800">
                    <PrinterIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    物理材料
                  </h3>
                </div>
                <ul className="space-y-3">
                  {materials.physical.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircleIcon className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {item.note}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="glass-card rounded-2xl p-6 space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="inline-flex rounded-xl p-3 bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800">
                    <DocumentTextIcon className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    ソフトウェア
                  </h3>
                </div>
                <ul className="space-y-3">
                  {materials.software.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircleIcon className="h-5 w-5 text-pink-600 dark:text-pink-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {item.note}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              APIキー管理
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Google AI Studio APIキーの管理は、プロジェクトの成功において重要な要素です。
              18歳以上制限への対応とセキュリティ管理について、以下の情報を確認してください。
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {apiKeyInfo.map((info, index) => {
                const Icon = info.icon;
                const colors = getIconColor(info.color);
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 + index * 0.1 }}
                    className="glass-card rounded-2xl p-6 space-y-4"
                  >
                    <div className={`inline-flex rounded-xl p-3 ${colors.bg} border ${colors.border}`}>
                      <Icon className={`h-6 w-6 ${colors.text}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {info.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
            <div className="glass-card rounded-2xl p-6 bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
              <div className="flex items-start space-x-4">
                <ExclamationTriangleIcon className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                <div className="space-y-2">
                  <h4 className="font-semibold text-amber-900 dark:text-amber-300">
                    重要な注意事項
                  </h4>
                  <p className="text-sm text-amber-800 dark:text-amber-400 leading-relaxed">
                    APIキーは絶対に公開リポジトリにコミットしないでください。
                    また、生徒にAPIキーを直接共有する場合は、使用後に必ずキーをローテーション（再生成）することを推奨します。
                    Vercelの環境変数機能を使用することで、より安全な運用が可能です。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 border-t border-[var(--border)] pt-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--text-muted)] mb-1">次のステップ</p>
                <p className="text-[var(--text-secondary)]">教授法メモで効果的な指導テクニックを学ぶ</p>
              </div>
              <TransitionLink href="/pedagogy" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-primary)] hover:underline underline-offset-4 shrink-0">
                教授法メモを見る
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </TransitionLink>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
