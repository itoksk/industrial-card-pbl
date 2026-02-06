'use client';

import { motion } from 'framer-motion';
import TransitionLink from '@/components/TransitionLink';
import {
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  TrophyIcon,
  FireIcon,
  ShieldCheckIcon,
  BoltIcon,
  NoSymbolIcon,
  ChartBarIcon,
  ArrowsRightLeftIcon,
  UsersIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function Rules() {
  const coreElements = [
    {
      icon: ClipboardDocumentCheckIcon,
      title: 'カード枚数',
      description: 'デッキ構成や手札数など、ゲームのスケールを決定する要素'
    },
    {
      icon: TrophyIcon,
      title: '勝利条件',
      description: 'どのような状態になればゲームに勝利するかを明確に定義'
    },
    {
      icon: CheckCircleIcon,
      title: '学習成果',
      description: 'プレイを通じて何を学び、理解を深めるかを設計'
    },
    {
      icon: ChartBarIcon,
      title: 'バランス調整',
      description: '公平性を保ちつつ戦略性を生み出すパラメータ設定'
    }
  ];

  const battleTypes = [
    {
      title: '単純比較勝負',
      parameter: '数値パラメータ',
      logic: '高い方が勝利する最もシンプルな形式。初学者にも理解しやすい'
    },
    {
      title: '属性相性勝負',
      parameter: 'カテゴリ属性',
      logic: 'じゃんけんのような三すくみ関係で勝敗を決定'
    },
    {
      title: '条件達成勝負',
      parameter: '複合条件',
      logic: '特定の条件を満たすことで発動する効果で勝敗を左右'
    },
    {
      title: 'リソース消費勝負',
      parameter: 'コストとリターン',
      logic: 'リソースを消費して強力な効果を発動し、戦略的な駆け引きを生む'
    }
  ];

  const defenseCards = [
    '防御カード: 相手の攻撃を無効化または軽減する',
    '回避カード: 攻撃を回避し、反撃のチャンスを得る',
    'カウンターカード: 相手の攻撃を跳ね返す',
    '耐性カード: 特定の属性やタイプの攻撃に強い',
    'ダメージ軽減: 受けるダメージを一定割合カットする'
  ];

  const enhancementCards = [
    '強化カード: 自分のパラメータを一時的に上昇させる',
    'バフカード: 味方全体に恩恵を与える',
    'コンボカード: 特定の組み合わせで追加効果を発動',
    'チェインカード: 連続使用で効果が増幅',
    'リソース生成: 手札やエネルギーを追加で獲得'
  ];

  const disruptionCards = [
    '妨害カード: 相手の行動を制限する',
    'デバフカード: 相手のパラメータを低下させる',
    '手札破壊: 相手の手札を捨てさせる',
    'ターン制限: 相手の行動回数を減らす',
    'フィールド効果: 場全体に影響を与える継続効果'
  ];

  const turnStructures = [
    {
      title: '同時公開型',
      description: 'プレイヤーが同時にカードを選択し、公開してから解決する。心理戦の要素が強い'
    },
    {
      title: '交互行動型',
      description: 'ターン順に1枚ずつカードをプレイ。戦略的な読み合いが重要'
    },
    {
      title: 'リアルタイム型',
      description: 'ターン制限なく、素早い判断でカードをプレイ。瞬発力が試される'
    }
  ];

  const victoryConditions = [
    {
      title: 'ポイント制',
      description: '勝利回数や得点を積み重ね、規定値に達したプレイヤーが勝利'
    },
    {
      title: 'サドンデス',
      description: '一度の勝負で即座に勝敗が決まる緊張感のある形式'
    },
    {
      title: 'ベストオブ',
      description: '3回勝負や5回勝負など、複数回の対戦で総合的に判定'
    },
    {
      title: 'リソース枯渇',
      description: '手札やデッキが尽きたプレイヤーが敗北する形式'
    }
  ];

  const playerCounts = [
    {
      count: '1対1',
      description: '対戦型TCGの基本形式。戦略性と公平性を追求しやすい'
    },
    {
      count: '多人数戦',
      description: '3人以上での対戦。同盟や裏切りなど社会的要素が加わる'
    },
    {
      count: 'チーム戦',
      description: '2対2など、協力プレイの要素を取り入れた形式'
    },
    {
      count: '協力型',
      description: '全員で共通の目標に挑戦する形式。学習の共有に適している'
    }
  ];

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="breadcrumb mb-8">
          <TransitionLink href="/">ホーム</TransitionLink>
          <span>/</span>
          <span>ゲームルール設計</span>
        </div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Game Rules</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            ルール設計ガイド
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            TCGのルールを設計する際の考え方と、具体的なメカニクスの例を紹介します。
            対象分野に応じて自由にカスタマイズしてください。
          </p>
        </motion.div>

        {/* Core Elements */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <CheckCircleIcon className="w-8 h-8 text-orange-500" />
              必須要素
            </h2>
            <p className="text-foreground/70 mb-8">
              どのようなTCGを作る場合でも、以下の4つの要素を明確にする必要があります。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreElements.map((element, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card"
                >
                  <element.icon className="w-10 h-10 text-orange-500 mb-3" />
                  <h3 className="text-xl font-bold mb-2">{element.title}</h3>
                  <p className="text-foreground/70">{element.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Battle Types */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <ArrowsRightLeftIcon className="w-8 h-8 text-orange-500" />
              パラメータ勝負のバリエーション
            </h2>
            <p className="text-foreground/70 mb-8">
              カードのパラメータを使った勝負形式には、さまざまなパターンがあります。
              学習内容に適した形式を選びましょう。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {battleTypes.map((battle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card"
                >
                  <h3 className="text-xl font-bold mb-2">{battle.title}</h3>
                  <div className="inline-block bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {battle.parameter}
                  </div>
                  <p className="text-foreground/70">{battle.logic}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Special Cards */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <BoltIcon className="w-8 h-8 text-orange-500" />
              特殊カードの種類
            </h2>
            <p className="text-foreground/70 mb-8">
              基本的なパラメータ勝負に加えて、戦略性を高める特殊カードを設計できます。
              事実に基づいた効果を持たせることで、学習内容の理解が深まります。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Defense Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card"
              >
                <ShieldCheckIcon className="w-10 h-10 text-blue-500 mb-3" />
                <h3 className="text-xl font-bold mb-4">防御系カード</h3>
                <ul className="space-y-2">
                  {defenseCards.map((card, index) => (
                    <li key={index} className="text-foreground/70 text-sm flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{card}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Enhancement Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass-card"
              >
                <FireIcon className="w-10 h-10 text-orange-500 mb-3" />
                <h3 className="text-xl font-bold mb-4">強化系カード</h3>
                <ul className="space-y-2">
                  {enhancementCards.map((card, index) => (
                    <li key={index} className="text-foreground/70 text-sm flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>{card}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Disruption Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card"
              >
                <NoSymbolIcon className="w-10 h-10 text-purple-500 mb-3" />
                <h3 className="text-xl font-bold mb-4">妨害系カード</h3>
                <ul className="space-y-2">
                  {disruptionCards.map((card, index) => (
                    <li key={index} className="text-foreground/70 text-sm flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>{card}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Rule Variations */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <UserGroupIcon className="w-8 h-8 text-orange-500" />
              ルールのバリエーション
            </h2>
            <p className="text-foreground/70 mb-8">
              ターン構造、勝利条件、プレイ人数など、ゲームの基本ルールを調整することで、
              学習目的やクラスの特性に合わせた最適な形式を設計できます。
            </p>

            {/* Turn Structures */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <ClockIcon className="w-6 h-6 text-blue-500" />
                ターン構造
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {turnStructures.map((structure, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-card"
                  >
                    <h4 className="text-lg font-bold mb-2">{structure.title}</h4>
                    <p className="text-foreground/70 text-sm">{structure.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Victory Conditions */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <TrophyIcon className="w-6 h-6 text-yellow-500" />
                勝利条件
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {victoryConditions.map((condition, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-card"
                  >
                    <h4 className="text-lg font-bold mb-2">{condition.title}</h4>
                    <p className="text-foreground/70 text-sm">{condition.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Player Counts */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <UsersIcon className="w-6 h-6 text-green-500" />
                プレイ人数
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {playerCounts.map((player, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-card"
                  >
                    <h4 className="text-lg font-bold mb-2">{player.count}</h4>
                    <p className="text-foreground/70 text-sm">{player.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Example Rule Set */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <ClipboardDocumentCheckIcon className="w-8 h-8 text-orange-500" />
              ルールセット例
            </h2>
            <p className="text-foreground/70 mb-8">
              以下は、シンプルで実践しやすい基本ルールの一例です。
              この形式をベースに、学習内容に合わせてカスタマイズしてください。
            </p>

            <div className="glass-card bg-gradient-to-br from-orange-500/5 to-yellow-500/5">
              <h3 className="text-2xl font-bold mb-6">基本ルールセット</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-orange-500">準備</h4>
                  <ul className="space-y-1 text-foreground/70">
                    <li>• 各プレイヤーは自分のデッキ（20-30枚）を用意する</li>
                    <li>• デッキをシャッフルし、手札として5枚引く</li>
                    <li>• じゃんけんで先攻を決める</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-orange-500">ターンの流れ</h4>
                  <ul className="space-y-1 text-foreground/70">
                    <li>• ドローフェイズ: デッキから1枚引く（先攻の最初のターンは引かない）</li>
                    <li>• メインフェイズ: 手札からカードを1枚場に出す</li>
                    <li>• バトルフェイズ: 双方のカードのパラメータを比較して勝敗を判定</li>
                    <li>• エンドフェイズ: 次のプレイヤーのターンへ</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-orange-500">勝敗判定</h4>
                  <ul className="space-y-1 text-foreground/70">
                    <li>• 指定されたパラメータの値が高い方が勝利</li>
                    <li>• 勝利したプレイヤーは1ポイント獲得</li>
                    <li>• 先に3ポイント獲得したプレイヤーがゲームに勝利</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-orange-500">特殊カード</h4>
                  <ul className="space-y-1 text-foreground/70">
                    <li>• 防御カード: 1回の敗北を無効化</li>
                    <li>• 強化カード: 次のターンのパラメータを1.5倍にする</li>
                    <li>• 妨害カード: 相手のパラメータを半減させる</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-orange-500">ゲームの終了</h4>
                  <ul className="space-y-1 text-foreground/70">
                    <li>• いずれかのプレイヤーが3ポイント獲得</li>
                    <li>• または、デッキが尽きた時点でポイントの多い方が勝利</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            ルールが決まったら、カード作りを始めましょう
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TransitionLink href="/lessons/1" className="btn-primary-orange">
              授業を始める
            </TransitionLink>
            <TransitionLink href="/resources" className="btn-secondary-outline">
              リソースを見る
            </TransitionLink>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
