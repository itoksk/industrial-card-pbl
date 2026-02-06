# 運用者マニュアル

危険物カード画像生成ツールの管理・運用ガイドです。

---

## 目次

1. [システム概要](#システム概要)
2. [デプロイ方法](#デプロイ方法)
3. [APIキーの管理](#apiキーの管理)
4. [カスタマイズ](#カスタマイズ)
5. [トラブルシューティング](#トラブルシューティング)
6. [セキュリティ考慮事項](#セキュリティ考慮事項)
7. [コスト管理](#コスト管理)

---

## システム概要

### アーキテクチャ

```
┌─────────────────────────────────────────────────────────────┐
│                        ブラウザ                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                  React Frontend                       │   │
│  │   - APIキー入力                                       │   │
│  │   - 7つの入力モード（タブ）                           │   │
│  │   - イラスト用プロンプト生成・編集                    │   │
│  │   - 固定テンプレート合成（Canvas描画）                │   │
│  │   - CSV一括読み込み・確認・一括発行                   │   │
│  │   - 画像表示・ダウンロード                            │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Vercel (Next.js)                         │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              API Route: /api/generate                 │   │
│  │   - リクエスト検証                                    │   │
│  │   - Google GenAI SDK呼び出し（中央イラストのみ）      │   │
│  │   - エラーハンドリング                                │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   Google AI Studio                          │
│   Gemini 3 Pro Image Preview API                           │
│   - 中央イラスト生成（4:3比率、1Kサイズ）                 │
└─────────────────────────────────────────────────────────────┘
```

### 技術スタック

| 項目 | 技術 | バージョン |
|------|------|-----------|
| フレームワーク | Next.js | 15.5.9 |
| 言語 | TypeScript | 5.x |
| スタイリング | Tailwind CSS | 3.4.x |
| AI SDK | @google/genai | 1.35.0 |
| デプロイ | Vercel | - |

### ファイル構成

```
hazmat-image-generator/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── generate/
│   │   │       └── route.ts      # 画像生成APIエンドポイント
│   │   ├── page.tsx              # メインUI（7タブ）
│   │   ├── layout.tsx            # ルートレイアウト
│   │   └── globals.css           # グローバルスタイル
│   └── lib/
│       ├── hazmat-data.ts        # データ定義・補完ロジック・描画モデル
│       └── bulk-csv.ts           # CSVパース・テンプレ出力・一括下書き生成
├── docs/
│   ├── USER_MANUAL.md            # ユーザーマニュアル
│   └── ADMIN_MANUAL.md           # 本ドキュメント
├── public/                        # 静的ファイル
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── eslint.config.mjs
└── README.md
```

---

## デプロイ方法

### Vercelへのデプロイ（推奨）

1. **GitHubリポジトリの準備**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Vercelでのプロジェクト作成**
   - [Vercel](https://vercel.com)にログイン
   - 「New Project」→ GitHubリポジトリを選択
   - フレームワークは自動検出（Next.js）
   - 「Deploy」をクリック

3. **デプロイ完了**
   - 自動的にビルド・デプロイされる
   - 発行されたURLを学生に共有

### ローカル環境での実行

```bash
# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build
npm start
```

### 環境変数

このアプリケーションは環境変数を使用しません。APIキーはクライアントサイドで入力し、APIリクエストに直接含めます（教育用途のため）。

---

## APIキーの管理

### Google AI Studio APIキーの取得

1. [Google AI Studio](https://aistudio.google.com/)にアクセス
2. Googleアカウントでログイン
3. 「Get API key」→「Create API key」
4. 生成されたキーをコピー

### APIキー配布の推奨方法

**方法1: 共有APIキー（小規模クラス向け）**
- 1つのAPIキーをクラス全体で共有
- 授業中に口頭またはプロジェクターで表示
- 利用制限に注意

**方法2: 個人APIキー（大規模または長期利用向け）**
- 各学生にGoogle AI Studioアカウントを作成させる
- 各自のAPIキーを使用
- 利用量を分散できる

### APIキーのセキュリティ

- **絶対にGitHubなどにコミットしない**
- 授業終了後は必要に応じてキーを再生成
- 不審な利用があればキーを無効化

---

## カスタマイズ

### テンプレートの追加・編集

`src/lib/hazmat-data.ts` を編集します。

#### 新しいテンプレートの追加

```typescript
// basicTemplates, classificationTemplates などに追加
export const classificationTemplates: PromptTemplate[] = [
  // 既存のテンプレート...
  {
    name: "新しい物質名",
    emoji: "🔥",
    prompt: "【危険物カード】縦向き、比率2:3、タイトル「新しい物質名」...",
    category: "分類",
    color: "orange",
  },
];
```

#### サンプル物質の追加

```typescript
export const sampleSubstances = [
  // 既存のサンプル...
  {
    name: "新しい物質",
    classification: "第1石油類（非水溶性）" as Classification,
    flashPoint: "-40",
    ignitionPoint: "300",
    boilingPoint: "100",
    specificGravity: "0.8",
    vaporGravity: "3.0",
    waterSoluble: "不溶" as const,
    designatedQuantity: "200",
  },
];
```

### 分類オプションの変更

```typescript
export const classificationOptions = [
  "特殊引火物",
  "第1石油類（非水溶性）",
  // ...追加・変更
] as const;
```

### UIのカスタマイズ

- **色の変更**: `page.tsx`のTailwind CSSクラスを編集
- **レイアウト変更**: JSXの構造を編集
- **新しいタブの追加**: `Tab`型と対応するUIを追加
- **カードテンプレート描画**: `src/app/page.tsx` の `renderCardToDataUrl` を編集
- **イラストプロンプト**: `src/lib/hazmat-data.ts` の `generate*IllustrationPrompt` を編集
- **CSV列マッピング**: `src/lib/bulk-csv.ts` の `build*Draft` を編集

### CSV一括発行の運用

1. まず種別ごとのテンプレートCSVを配布
2. 生徒がCSVを入力してアップロード
3. 読み込み時に以下を自動処理
   - カード効果文の整頓
   - 国家試験学習向けの事実補足
4. プレビュー確認後に一括発行

---

## トラブルシューティング

### ビルドエラー

#### ESLint関連のエラー

```bash
# ESLintの設定を確認
cat eslint.config.mjs
```

ESLint 9のフラットコンフィグを使用しています。`@eslint/eslintrc`のFlatCompatで従来の設定を変換しています。

#### TypeScriptエラー

```bash
# 型チェック
npx tsc --noEmit
```

### ランタイムエラー

#### 「API利用制限に達しました」

- **原因**: Google AI Studioの無料枠制限
- **対策**:
  - 時間を置いて再試行
  - 有料プランへのアップグレード
  - 複数のAPIキーで分散

#### 「APIキーが無効です」

- **原因**: APIキーの入力ミスまたは無効化
- **対策**:
  - APIキーを再確認
  - Google AI Studioで新しいキーを生成

#### 「安全上の理由で画像を生成できませんでした」

- **原因**: Geminiのセーフティフィルター
- **対策**:
  - プロンプトの内容を変更
  - 危険を連想させる表現を避ける

### デプロイエラー

#### Vercelでビルドが失敗する

1. ローカルでビルドを確認
   ```bash
   npm run build
   ```

2. 依存関係の問題
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. Next.jsバージョンの互換性
   - `package.json`のNext.jsバージョンを確認
   - 15.5.x以上を推奨

---

## セキュリティ考慮事項

### APIキーの取り扱い

| リスク | 対策 |
|--------|------|
| キーの漏洩 | 授業ごとにキーを再生成、GitHub等にコミットしない |
| 不正利用 | 利用状況をGoogle AI Studioで監視 |
| 過剰利用 | クォータ設定、利用ガイドラインの周知 |

### データの取り扱い

- **ユーザー入力**: サーバーに保存されない（ステートレス）
- **生成画像**: ユーザーのブラウザでのみ表示
- **APIキー**: クライアントサイドで一時的に保持、サーバーに保存しない

### XSS対策

- ReactのJSXエスケープにより自動対策
- `dangerouslySetInnerHTML`は使用していない

---

## コスト管理

### Google AI Studio料金体系

（2024年時点の情報。最新は公式ドキュメントを確認）

| プラン | 画像生成 | 備考 |
|--------|----------|------|
| 無料枠 | 制限あり | 1日あたりの回数制限 |
| 有料 | 従量課金 | 生成回数に応じた課金 |

### コスト削減のヒント

1. **テンプレートの活用**: 生成回数を減らす
2. **プレビュー機能**: プロンプトを十分に確認してから生成
3. **グループワーク**: 複数人で1枚を生成してシェア

### 利用量の監視

Google AI Studioのダッシュボードで確認：
- API呼び出し回数
- エラー率
- レイテンシ

---

## メンテナンス

### 定期的な更新

```bash
# 依存関係の更新確認
npm outdated

# 更新
npm update

# セキュリティ脆弱性の確認
npm audit
```

### バックアップ

- GitHubリポジトリでコード管理
- カスタマイズした`hazmat-data.ts`は特に重要

### ログの確認

Vercelダッシュボード → Functions → Logs で確認

---

## サポート

### 技術的な問題

- Next.js: [公式ドキュメント](https://nextjs.org/docs)
- Google GenAI: [公式ドキュメント](https://ai.google.dev/docs)
- Vercel: [公式ドキュメント](https://vercel.com/docs)

### このプロジェクトについて

- GitHubリポジトリのIssuesで報告
- Pull Requestによる改善提案歓迎
