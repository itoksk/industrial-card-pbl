'use client';

import { motion } from 'framer-motion';
import TransitionLink from '@/components/TransitionLink';
import {
  DocumentArrowDownIcon,
  TableCellsIcon,
  LinkIcon,
  ChartBarIcon,
  CalendarIcon,
  PhotoIcon,
  PencilSquareIcon,
  BookOpenIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

export default function Resources() {
  const databaseColumns = [
    { name: '名称', description: 'カードの名前（実在する名称）' },
    { name: '分類', description: 'カテゴリやタイプ' },
    { name: 'パラメータ1', description: '主要な数値データ' },
    { name: 'パラメータ2', description: '副次的な数値データ' },
    { name: 'パラメータ3', description: '追加の数値データ' },
    { name: 'パラメータ4', description: '補助的な数値データ' },
    { name: '効果', description: 'カードの特殊効果やゲームメカニクス' }
  ];

  const externalTools = [
    {
      icon: PhotoIcon,
      title: 'AI画像生成ツール',
      description: 'カードイラストの生成に活用できる無料ツール',
      links: [
        { name: 'Stable Diffusion', url: 'https://stablediffusionweb.com/' },
        { name: 'Leonardo.ai', url: 'https://leonardo.ai/' },
        { name: 'Bing Image Creator', url: 'https://www.bing.com/images/create' }
      ]
    },
    {
      icon: PencilSquareIcon,
      title: 'デザインツール',
      description: 'カードレイアウトの作成に便利なツール',
      links: [
        { name: 'Canva', url: 'https://www.canva.com/' },
        { name: 'Figma', url: 'https://www.figma.com/' },
        { name: 'Google Slides', url: 'https://www.google.com/slides/about/' }
      ]
    },
    {
      icon: BookOpenIcon,
      title: '参考資料',
      description: 'TCGデザインや学習理論の参考文献',
      links: [
        { name: 'TCGデザインガイド', url: '#' },
        { name: 'PBL学習理論', url: '#' },
        { name: 'ゲームバランス調整', url: '#' }
      ]
    }
  ];

  const evaluationCriteria = [
    {
      aspect: '知識・理解',
      weight: 30,
      description: '対象分野の知識を正確に理解し、カードに反映できているか',
      points: [
        '事実に基づいたパラメータ設定',
        '正確な分類と体系化',
        '信頼できる情報源の活用'
      ]
    },
    {
      aspect: '思考・判断',
      weight: 25,
      description: '情報を分析し、ゲームメカニクスとして適切に変換できているか',
      points: [
        '論理的なゲーム効果の設計',
        'バランスを考慮した調整',
        '戦略性のある仕組みづくり'
      ]
    },
    {
      aspect: '主体性',
      weight: 25,
      description: '主体的に課題に取り組み、創造的なアイデアを生み出せているか',
      points: [
        '積極的な調査と情報収集',
        'オリジナリティのある設計',
        '継続的な改善への取り組み'
      ]
    },
    {
      aspect: '表現・創造',
      weight: 20,
      description: 'カードやルールを魅力的に表現し、他者に伝えられているか',
      points: [
        'わかりやすいカードデザイン',
        '視覚的に魅力的なレイアウト',
        'ルールの明確な説明'
      ]
    }
  ];

  const schedule = [
    {
      lesson: 1,
      phase: 'Phase 1',
      title: 'TCG-PBLとは？',
      time: '90分',
      deliverables: ['事実基盤制約の理解確認シート']
    },
    {
      lesson: 2,
      phase: 'Phase 1',
      title: '対象分野の分類',
      time: '90分',
      deliverables: ['分類マップ', 'カテゴリ一覧']
    },
    {
      lesson: 3,
      phase: 'Phase 2',
      title: 'パラメータ調査',
      time: '90分',
      deliverables: ['パラメータ一覧表', '調査レポート']
    },
    {
      lesson: 4,
      phase: 'Phase 2',
      title: '規制と法令',
      time: '90分',
      deliverables: ['法規制まとめシート']
    },
    {
      lesson: 5,
      phase: 'Phase 2',
      title: '防御/補助カード設計',
      time: '90分',
      deliverables: ['特殊カード設計書']
    },
    {
      lesson: 6,
      phase: 'Phase 3',
      title: 'カードレイアウト設計',
      time: '90分',
      deliverables: ['カードテンプレート', 'デザインガイド']
    },
    {
      lesson: 7,
      phase: 'Phase 3',
      title: 'AIカード生成',
      time: '90分',
      deliverables: ['生成画像サンプル', 'プロンプト集']
    },
    {
      lesson: 8,
      phase: 'Phase 3',
      title: '一括作成と改善',
      time: '90分',
      deliverables: ['完成カードセット（CSV）']
    },
    {
      lesson: 9,
      phase: 'Phase 4',
      title: 'テストプレイと評価',
      time: '90分',
      deliverables: ['プレイテストレポート', '最終成果物']
    }
  ];

  const downloadBaseRule = () => {
    const ruleText = `# TCG-PBL 基本ルールテンプレート

## ゲームの概要
- プレイ人数: 2人
- 推奨年齢: 12歳以上
- プレイ時間: 15-30分
- デッキ枚数: 20-30枚

## 準備
1. 各プレイヤーは自分のデッキ（20-30枚）を用意する
2. デッキをシャッフルし、手札として5枚引く
3. じゃんけんで先攻を決める

## ターンの流れ
### 1. ドローフェイズ
- デッキから1枚引く（先攻の最初のターンは引かない）

### 2. メインフェイズ
- 手札からカードを1枚場に出す

### 3. バトルフェイズ
- 双方のカードのパラメータを比較して勝敗を判定
- 勝利したプレイヤーは1ポイント獲得

### 4. エンドフェイズ
- 次のプレイヤーのターンへ

## 勝利条件
- 先に3ポイント獲得したプレイヤーがゲームに勝利
- または、デッキが尽きた時点でポイントの多い方が勝利

## 特殊カード（オプション）
### 防御カード
- 効果: 1回の敗北を無効化

### 強化カード
- 効果: 次のターンのパラメータを1.5倍にする

### 妨害カード
- 効果: 相手のパラメータを半減させる

## カスタマイズのヒント
- パラメータの種類を変更する
- 勝利条件を調整する（3ポイント → 5ポイントなど）
- 特殊カードの効果を変更・追加する
- ターン数制限を設ける
- 属性相性を追加する

## 学習目標の設定
このゲームを通じて、以下を学習します：
- [ ] 対象分野の基礎知識
- [ ] パラメータの意味と重要性
- [ ] 戦略的思考力
- [ ] 情報分析力

---
このテンプレートをベースに、対象分野に応じてカスタマイズしてください。
`;

    const blob = new Blob([ruleText], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tcg-pbl-base-rule.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="breadcrumb mb-8">
          <TransitionLink href="/">ホーム</TransitionLink>
          <span>/</span>
          <span>リソース</span>
        </div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Resources</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            リソース
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            TCG-PBLの実践に役立つテンプレート、ツール、評価基準などをまとめています。
          </p>
        </motion.div>

        {/* Template Download */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <DocumentArrowDownIcon className="w-8 h-8 text-orange-500" />
              テンプレートダウンロード
            </h2>

            <div className="glass-card bg-gradient-to-br from-orange-500/5 to-yellow-500/5">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">基本ルールテンプレート</h3>
                  <p className="text-foreground/70 mb-4">
                    シンプルで実践しやすい基本ルールのMarkdownファイルです。
                    このテンプレートをベースに、学習内容に合わせてカスタマイズできます。
                  </p>
                  <ul className="space-y-1 text-sm text-foreground/70">
                    <li>• ゲームの準備とターン構造</li>
                    <li>• 基本的な勝利条件</li>
                    <li>• 特殊カードの例</li>
                    <li>• カスタマイズのヒント</li>
                  </ul>
                </div>
                <button
                  onClick={downloadBaseRule}
                  className="btn-primary-orange whitespace-nowrap"
                >
                  <DocumentArrowDownIcon className="w-5 h-5 mr-2" />
                  ダウンロード
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Database Template */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <TableCellsIcon className="w-8 h-8 text-orange-500" />
              データベーステンプレート
            </h2>
            <p className="text-foreground/70 mb-8">
              カード情報を整理するためのスプレッドシート形式のテンプレートです。
              Google SheetsやExcelで使用できます。
            </p>

            <div className="glass-card overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>カラム名</th>
                    <th>説明</th>
                  </tr>
                </thead>
                <tbody>
                  {databaseColumns.map((column, index) => (
                    <tr key={index}>
                      <td className="font-semibold">{column.name}</td>
                      <td className="text-foreground/70">{column.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-6 p-4 bg-orange-500/10 rounded-lg">
                <h4 className="font-bold mb-2 text-orange-500">使い方のヒント</h4>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>• パラメータ名は対象分野に応じて変更してください</li>
                  <li>• 各パラメータには具体的な数値を設定します</li>
                  <li>• 効果欄には、事実に基づいたゲームメカニクスを記述します</li>
                  <li>• CSV形式でエクスポートすることで、一括カード生成に活用できます</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* External Links */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <LinkIcon className="w-8 h-8 text-orange-500" />
              外部ツール・参考資料
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {externalTools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card"
                >
                  <tool.icon className="w-10 h-10 text-orange-500 mb-3" />
                  <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    {tool.description}
                  </p>
                  <div className="space-y-2">
                    {tool.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-orange-500 hover:text-orange-600 transition-colors text-sm font-semibold"
                      >
                        {link.name} →
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Evaluation Criteria */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <ChartBarIcon className="w-8 h-8 text-orange-500" />
              評価基準
            </h2>
            <p className="text-foreground/70 mb-8">
              TCG-PBLの成果を評価する際の4つの観点と配点です。
              各観点で具体的なルーブリックを設定することで、公平で透明性の高い評価が可能になります。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {evaluationCriteria.map((criteria, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">{criteria.aspect}</h3>
                    <span className="text-3xl font-bold text-orange-500">
                      {criteria.weight}%
                    </span>
                  </div>
                  <p className="text-foreground/70 text-sm mb-4">
                    {criteria.description}
                  </p>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-sm mb-2">評価ポイント:</h4>
                    {criteria.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span className="text-sm text-foreground/70">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl border border-blue-500/20">
              <AcademicCapIcon className="w-10 h-10 text-blue-500 mb-3" />
              <h3 className="text-xl font-bold mb-2">評価のポイント</h3>
              <p className="text-foreground/70 mb-4">
                TCG-PBLでは、単なる知識の暗記ではなく、その知識を活用して創造的な成果物を
                生み出すプロセス全体を評価します。
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• 各フェーズでの成果物を段階的に評価</li>
                <li>• 個人の貢献とチームでの協働を両面から評価</li>
                <li>• 最終成果物だけでなく、改善プロセスも重視</li>
                <li>• 自己評価とピア評価を組み合わせた多面的評価</li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Schedule */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <CalendarIcon className="w-8 h-8 text-orange-500" />
              授業スケジュール
            </h2>
            <p className="text-foreground/70 mb-8">
              全9回の授業スケジュールと各回の成果物一覧です。
              クラスの状況に応じて、時間配分や内容を調整してください。
            </p>

            <div className="glass-card overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th className="w-20">回</th>
                    <th className="w-32">フェーズ</th>
                    <th>授業タイトル</th>
                    <th className="w-24">時間</th>
                    <th>成果物</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((item, index) => (
                    <tr key={index}>
                      <td className="font-bold text-center">{item.lesson}</td>
                      <td>
                        <span className={`tag tag-${
                          item.phase === 'Phase 1' ? 'orange' :
                          item.phase === 'Phase 2' ? 'yellow' :
                          item.phase === 'Phase 3' ? 'blue' : 'green'
                        }`}>
                          {item.phase}
                        </span>
                      </td>
                      <td className="font-semibold">{item.title}</td>
                      <td className="text-center text-foreground/70">{item.time}</td>
                      <td>
                        <div className="space-y-1">
                          {item.deliverables.map((deliverable, dIndex) => (
                            <div key={dIndex} className="text-sm text-foreground/70">
                              • {deliverable}
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-orange-500/10 rounded-lg">
                <h4 className="font-bold mb-2 text-orange-500">スケジュール調整のヒント</h4>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>• 各回90分を想定していますが、授業時間に応じて調整可能</li>
                  <li>• Phase 2とPhase 3は内容が多いため、時間を多めに確保</li>
                  <li>• 必要に応じて、授業間に課題時間を設けることも効果的</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-lg">
                <h4 className="font-bold mb-2 text-blue-500">成果物の活用</h4>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>• 各回の成果物を蓄積し、最終成果物に統合</li>
                  <li>• ポートフォリオとして学習の過程を可視化</li>
                  <li>• 中間発表で進捗を共有し、相互フィードバックを実施</li>
                </ul>
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
            準備ができたら、授業を始めましょう
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TransitionLink href="/lessons/1" className="btn-primary-orange">
              第1回授業へ進む
            </TransitionLink>
            <TransitionLink href="/rules" className="btn-secondary-outline">
              ルール設計ガイドを見る
            </TransitionLink>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
