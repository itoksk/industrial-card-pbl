# Industrial Card PBL

**TCG(トレーディングカードゲーム)制作を通じて資格知識を学ぶ PBL 授業フレームワーク**

工業高校の授業で実践された「カードゲーム制作型 PBL」を、他の教員が再現・応用できる形にまとめたモノレポです。元の実践は危険物乙種第4類の資格学習ですが、フレームワークは他の教科・資格にも応用可能です。

---

## プロジェクト構成

```
industrial-card-pbl/
├── card-generator/   ... AIカード画像生成ツール (Next.js 15 / React 18)
├── student-site/     ... 生徒向け授業サイト 全9レッスン (Next.js 15)
└── teacher-guide/    ... 教員向け補足サイト 全6セクション (Next.js 15)
```

### card-generator

AI(Google Gemini)を活用した TCG カード画像の生成ツール。4種類のカード(攻撃/防御/強化/妨害)を、Canvas API によるテンプレート合成 + AI イラスト生成で作成します。CSV 一括生成にも対応。

### student-site

生徒が授業で使用する Web サイト。4フェーズ・全9レッスンで構成され、「事実基盤制約」の原則に基づいてカードゲーム制作を通じた知識習得を導きます。

### teacher-guide

教員向けの補足資料サイト。PBL の概要、実施ガイド、教授法メモ、ルール進化の記録、今後の展望、カードデータリファレンスの6セクションで構成されます。

---

## 前提条件

- **Node.js** 18 以上
- **Google AI Studio** の API キー ([取得方法](https://aistudio.google.com/))
  - API キーの取得には 18 歳以上の Google アカウントが必要です
  - 教員が取得し、授業中に生徒へ共有する運用を推奨します

---

## セットアップ

各サブプロジェクトは独立した Next.js アプリです。それぞれ個別にセットアップしてください。

### card-generator

```bash
cd card-generator
npm install
npm run dev
# http://localhost:3000 でアクセス
```

### student-site

```bash
cd student-site
npm install
npm run dev
# http://localhost:3001 でアクセス (ポートが空いていない場合は自動で別ポートが使われます)
```

### teacher-guide

```bash
cd teacher-guide
npm install
npm run dev
# http://localhost:3002 でアクセス
```

---

## デプロイ

各サブプロジェクトを個別に Vercel へデプロイすることを推奨します。

1. GitHub にリポジトリを作成し push
2. [Vercel](https://vercel.com) で「New Project」
3. Root Directory に各サブプロジェクトのパスを指定(例: `card-generator`)
4. Deploy

---

## TCG-PBL フレームワーク概要

このプロジェクトの核となる教育的アプローチ:

```
名称 + パラメータ + 事実根拠 + ゲーム効果
```

| 要素 | 説明 | 例(危険物乙4) |
|------|------|--------------|
| 名称 | 学習対象の項目名 | ガソリン |
| パラメータ | 数値化されたデータ | 引火点 -40℃、比重 0.7 |
| 事実根拠 | 教科書・法令に基づく事実 | 第1石油類(非水溶性)、指定数量200L |
| ゲーム効果 | パラメータに基づくルール | 引火点勝負: 低い方が勝ち |

この構造により、生徒は「ゲームを作る側」として能動的にデータを調査・整理し、遊びながら自然と知識を定着させます。

---

## 他教科への応用例

- **第二種電気工事士**: 電線の許容電流、遮断器の定格、配線方法
- **プログラミング資格**: アルゴリズム、データ構造、計算量
- **化学**: 元素の性質、化学反応式、モル計算

詳細は `card-generator/docs/CUSTOMIZATION_GUIDE.md` を参照してください。

---

## ライセンス

MIT License
