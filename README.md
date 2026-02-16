# Industrial Card PBL

トレーディングカードゲーム（TCG）制作を通じて資格知識を学ぶ、実践型PBL（Project Based Learning）教材リポジトリです。

工業高校での授業実践をベースに、以下3つのWebアプリを独立運用できる形で公開しています。

## 公開URL

- 生徒向けサイト: https://otu4-mbna.vercel.app/
- 教員向けガイド: https://otu4-zv8p.vercel.app/
- カード生成ツール: https://otu4-5c8j.vercel.app/

## ソース情報

- GitHub: https://github.com/itoksk/industrial-card-pbl
- ライセンス: MIT

## リポジトリ構成

```text
industrial-card-pbl/
├── student-site/      # 生徒向け授業サイト（Next.js 16）
├── teacher-guide/     # 教員向け実施ガイド（Next.js 16）
├── card-generator/    # AIカード画像生成ツール（Next.js 15）
└── docs/              # 変更履歴・補足資料
```

## 各アプリの役割

### 1. `student-site`

- 授業の主教材として使う生徒向けサイト
- 4フェーズ・全9レッスンで、調査→設計→制作→評価を段階的に進行
- 教科知識を「カード効果」に変換するための思考フレームを提供

### 2. `teacher-guide`

- 教員向けの運用・設計ドキュメント
- PBL概要、授業設計、評価観点、教授法メモ、ルール改善記録を整理
- 授業準備と再現運用のための参照ハブ

### 3. `card-generator`

- Google Gemini APIを使ったカード画像生成ツール
- 危険物/消火/運搬/法令のカード種別に対応
- 授業で使うカード制作を高速化

## 技術スタック

- `student-site`: Next.js 16, React 19, TypeScript, Tailwind CSS 4
- `teacher-guide`: Next.js 16, React 19, TypeScript, Tailwind CSS 4
- `card-generator`: Next.js 15, React 18, TypeScript, Tailwind CSS 3

## ローカル開発

このリポジトリはワークスペース管理を使わず、各アプリを個別に起動します。

### 前提

- Node.js 18+
- npm

### 起動手順

1. 生徒向けサイト

```bash
cd student-site
npm install
npm run dev -- -p 3001
```

2. 教員向けガイド

```bash
cd teacher-guide
npm install
npm run dev -- -p 3002
```

3. カード生成ツール

```bash
cd card-generator
npm install
npm run dev -- -p 3000
```

## 本番ビルド

各アプリ配下で実行:

```bash
npm run build
npm run start
```

## Vercelデプロイ設定

1つのGitHubリポジトリから、3プロジェクトを分けてデプロイします。

- Student Site
  - Root Directory: `student-site`
- Teacher Guide
  - Root Directory: `teacher-guide`
- Card Generator
  - Root Directory: `card-generator`

## 教材としての設計思想

本プロジェクトの中核は、次の変換フレームです。

```text
名称 + パラメータ + 事実根拠 + ゲーム効果
```

この構造により、生徒は「覚える」だけでなく「設計する」学習に移行し、知識の定着と活用を同時に進めます。

## 関連ドキュメント

- `card-generator/docs/USER_MANUAL.md`
- `card-generator/docs/ADMIN_MANUAL.md`
- `card-generator/docs/CUSTOMIZATION_GUIDE.md`
- `docs/changelog.md`

## 備考

- APIキー運用や授業導入時の注意点は、`teacher-guide` と `card-generator` のREADMEを参照してください。
