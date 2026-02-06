# カスタマイズガイド -- 他教科への応用

このカード生成ツールは「危険物乙種第4類」を題材に構築されていますが、フレームワーク自体は他の教科・資格に応用可能です。本ガイドでは、別の教科に適応するための変更方法を解説します。

---

## 目次

1. [汎用フレームワーク](#汎用フレームワーク)
2. [応用例](#応用例)
3. [データ構造の変更(`hazmat-data.ts`)](#データ構造の変更)
4. [CSV テンプレートの変更(`bulk-csv.ts`)](#csv-テンプレートの変更)
5. [UI のカスタマイズ](#ui-のカスタマイズ)
6. [カードレンダリングパイプライン](#カードレンダリングパイプライン)
7. [API キー設定](#api-キー設定)

---

## 汎用フレームワーク

TCG-PBL の核となるカード設計パターンは以下の4要素です:

```
名称 + パラメータ + 事実根拠 + ゲーム効果
```

| 要素 | 役割 | 危険物乙4での例 |
|------|------|----------------|
| 名称 | 学習対象の識別子 | ガソリン、灯油、エタノール |
| パラメータ | 数値化されたデータ | 引火点 -40℃、比重 0.7、指定数量 200L |
| 事実根拠 | 教科書・法令に基づく事実 | 第1石油類(非水溶性)、消火: 泡/粉末/CO2 |
| ゲーム効果 | パラメータに基づくバトルルール | 引火点勝負: 低い方が勝ち |

### なぜこの構造が機能するか

- **名称**: 何を学ぶかの明確なフレーミング
- **パラメータ**: 数値は比較可能 → 自然にバトルルールが生まれる
- **事実根拠**: 「なぜそのルールか」を実データで裏付け → 暗記ではなく理解
- **ゲーム効果**: 遊びの中で繰り返し数値に触れる → 自然な定着

---

## 応用例

### 第二種電気工事士

| 要素 | マッピング |
|------|-----------|
| 名称 | 電線種別(VVF、IV、CV) / 器具(ブレーカー、コンセント) |
| パラメータ | 許容電流(A)、絶縁抵抗(MΩ)、定格電圧(V)、価格 |
| 事実根拠 | 電技解釈の条文、施工条件 |
| ゲーム効果 | 許容電流勝負: 高い方が勝ち |
| カード種別 | 電線カード(攻撃) / 保護装置カード(防御) / 施工方法カード(強化) / 法令カード(妨害) |

### プログラミング資格(基本情報技術者)

| 要素 | マッピング |
|------|-----------|
| 名称 | アルゴリズム(クイックソート、二分探索) / データ構造(配列、木) |
| パラメータ | 計算量 O(n log n)、メモリ使用量、実装難易度 |
| 事実根拠 | 理論的計算量、適用条件 |
| ゲーム効果 | 計算量勝負: 小さい方が勝ち |
| カード種別 | アルゴリズムカード(攻撃) / 最適化カード(防御) / ライブラリカード(強化) / バグカード(妨害) |

### 化学(元素・化合物)

| 要素 | マッピング |
|------|-----------|
| 名称 | 元素名(Na、Cl、Fe) / 化合物名 |
| パラメータ | 原子番号、電気陰性度、融点、沸点 |
| 事実根拠 | 周期表の位置、化学結合の種類 |
| ゲーム効果 | 電気陰性度勝負: 高い方が勝ち |
| カード種別 | 元素カード(攻撃) / 触媒カード(防御) / 化合物カード(強化) / 反応条件カード(妨害) |

---

## データ構造の変更

`src/lib/hazmat-data.ts` を新教科用に書き換えます。

### 1. 分類の定義

```typescript
// 現在 (危険物)
export type Classification =
  | '特殊引火物'
  | '第1石油類（非水溶性）'
  | '第1石油類（水溶性）'
  // ...

// 変更例 (電気工事)
export type Classification =
  | 'VVFケーブル'
  | 'IVケーブル'
  | 'CVケーブル'
  | 'EM-EEFケーブル'
  // ...
```

### 2. カードデータ型の定義

```typescript
// 現在 (危険物)
export interface DangerousGoodsCardData {
  name: string;
  classification: Classification;
  flashPoint: string;
  ignitionPoint: string;
  boilingPoint: string;
  specificGravity: string;
  vaporGravity: string;
  waterSoluble: '水溶性' | '非水溶性';
  designatedQuantity: string;
}

// 変更例 (電気工事)
export interface WireCableCardData {
  name: string;
  classification: Classification;
  allowableCurrent: string;       // 許容電流
  insulationResistance: string;   // 絶縁抵抗
  ratedVoltage: string;           // 定格電圧
  conductorSize: string;          // 導体断面積
  useEnvironment: '屋内' | '屋外' | '両用';
}
```

### 3. カラーパレットの定義

```typescript
// 分類ごとの色を定義
export const classificationStyles: Record<Classification, { bg: string; text: string; border: string }> = {
  'VVFケーブル':    { bg: 'bg-blue-500/10',   text: 'text-blue-400',   border: 'border-blue-500/30' },
  'IVケーブル':     { bg: 'bg-green-500/10',  text: 'text-green-400',  border: 'border-green-500/30' },
  // ...
};
```

### 4. イラストプロンプト生成関数

```typescript
// AI に渡すプロンプトを生成する関数を新教科用に書き換え
export function generateIllustrationPrompt(data: WireCableCardData): string {
  return `電気工事用ケーブル「${data.name}」のイラスト。
断面構造を美しく描き、${data.classification}の特徴を視覚的に表現。
青系の色調、技術的で精密な印象。カードゲーム用の高精細イラスト。`;
}
```

### 5. サンプルデータ

```typescript
export const sampleSubstances: WireCableCardData[] = [
  {
    name: 'VVF 2.0mm 2芯',
    classification: 'VVFケーブル',
    allowableCurrent: '24',
    insulationResistance: '0.4',
    ratedVoltage: '600',
    conductorSize: '2.0',
    useEnvironment: '屋内',
  },
  // ...
];
```

### 6. 学習事実データベース

`polishGameEffectText()` と同様に、カード効果テキストから不適切な表現を除去し、学習に役立つ事実を自動補足する辞書を定義します。

```typescript
// 分類ベースの学習事実
export const factByClassification: Record<string, string> = {
  'VVFケーブル': '屋内配線で最も一般的。600V以下の低圧回路に使用。',
  // ...
};

// 名称ベースの学習事実
export const factByName: Record<string, string> = {
  'VVF 2.0mm 2芯': '許容電流24A。20Aコンセント回路の幹線に使用。',
  // ...
};
```

---

## CSV テンプレートの変更

`src/lib/bulk-csv.ts` を新教科のカラム構成に合わせて変更します。

### ヘッダーマッピング

```typescript
// CSV のカラム名と内部プロパティの対応を定義
const headerAliases: Record<string, string> = {
  '名称': 'name',
  '分類': 'classification',
  '許容電流': 'allowableCurrent',
  '絶縁抵抗': 'insulationResistance',
  '定格電圧': 'ratedVoltage',
  '導体断面積': 'conductorSize',
  '使用環境': 'useEnvironment',
  '効果': 'effect',
  '効果テキスト': 'effect',
};
```

### テンプレート CSV 出力

```typescript
export function generateTemplateCsv(): string {
  const header = '名称,分類,許容電流(A),絶縁抵抗(MΩ),定格電圧(V),導体断面積(mm2),使用環境,効果テキスト';
  const example = 'VVF 2.0mm 2芯,VVFケーブル,24,0.4,600,2.0,屋内,安定した配線で防御力+2';
  return `${header}\n${example}\n`;
}
```

---

## UI のカスタマイズ

### タブ構成

`src/app/page.tsx` の `Tab` 型とタブ定義を変更します:

```typescript
type Tab = 'template' | 'wire' | 'breaker' | 'wiring' | 'regulation' | 'direct' | 'bulk';
```

### カラーパレット

`tailwind.config.ts` と `globals.css` のアクセントカラーを変更します:

```css
/* globals.css -- 例: 電気工事なら青系に */
:root {
  --accent: 59 130 246; /* blue-500 */
  --accent-hover: 37 99 235; /* blue-600 */
}
```

### カードレンダリングのカラー

`hazmat-data.ts` の `classificationRenderPalette` と `cardTypeRenderPalette` で Canvas に描画される色を定義します:

```typescript
export const classificationRenderPalette: Record<Classification, CardColorDef> = {
  'VVFケーブル': {
    headerBg: '#1e3a5f',
    headerText: '#93c5fd',
    borderColor: '#3b82f6',
    badgeBg: '#1e40af',
    badgeText: '#bfdbfe',
  },
  // ...
};
```

---

## カードレンダリングパイプライン

カード画像の生成は以下の2段階で行われます:

```
[段階1] AI がイラストのみを生成 (Gemini API)
    ↓
[段階2] Canvas API でカードフレーム + テキスト + イラストを合成
```

### 重要: AI が生成するのはイラストのみ

カードのフレーム、タイトル、パラメータテキスト、効果テキストなどは全て Canvas API でプログラム的に描画されます。AI にはカード中央のイラスト画像のみを依頼します。

### Canvas 描画フロー (`page.tsx` の `renderCardToDataUrl()`)

1. 1000x1500px の Canvas を作成
2. 背景グラデーションを描画(カード種別ごとのパレットから)
3. バッジ(分類名)を描画
4. タイトル(物質名)を描画
5. AI 生成イラストを中央にフィット描画
6. 情報行(パラメータ3行)を描画
7. 効果テキストを動的フォントサイズで描画
8. DataURL として出力

### テキストラッピング

`wrapTextAndCalcFontSize()` 関数が、最大幅と最大行数に基づいてフォントサイズを自動調整します。効果テキストが長い場合は自動的にフォントサイズが縮小されます。

---

## API キー設定

### Google AI Studio API キーの取得

1. [Google AI Studio](https://aistudio.google.com/) にアクセス
2. Google アカウントでログイン
3. 「Get API key」→「Create API key」

### 重要: 18 歳以上制限

Google AI Studio は利用規約上 18 歳以上が必要です。教育現場での運用方法:

- **推奨**: 教員が API キーを取得し、授業中に口頭またはプロジェクターで共有
- **注意**: API キーを Git リポジトリにコミットしない
- **代替**: 環境変数(`.env.local`)での管理も可能だが、本ツールはクライアントサイド入力方式を採用

### コスト

- Google AI Studio の無料枠で十分に運用可能(1日あたりの回数制限あり)
- 40人クラスで一括生成する場合は、時間帯を分散するか有料プランを検討

---

## クイックスタート: 新教科への移行チェックリスト

1. [ ] `hazmat-data.ts`: `Classification` 型を新教科の分類に変更
2. [ ] `hazmat-data.ts`: カードデータ型(`DangerousGoodsCardData` 等)を新パラメータに変更
3. [ ] `hazmat-data.ts`: `classificationStyles` を新分類に対応
4. [ ] `hazmat-data.ts`: `classificationRenderPalette` / `cardTypeRenderPalette` を新色に変更
5. [ ] `hazmat-data.ts`: イラストプロンプト生成関数を新教科用に書き換え
6. [ ] `hazmat-data.ts`: サンプルデータを新教科用に差し替え
7. [ ] `hazmat-data.ts`: 学習事実データベースを新教科用に構築
8. [ ] `hazmat-data.ts`: `polishGameEffectText()` のフィルタルールを調整
9. [ ] `bulk-csv.ts`: ヘッダーマッピングとテンプレート CSV を変更
10. [ ] `page.tsx`: タブ構成とラベルを変更
11. [ ] `page.tsx`: `renderCardToDataUrl()` の情報行レイアウトを調整
12. [ ] `globals.css` / `tailwind.config.ts`: アクセントカラーを変更
13. [ ] `README.md`: プロジェクト説明を更新

---

## 参考: ファイル一覧

| ファイル | 行数 | 変更が必要な箇所 |
|---------|------|----------------|
| `src/lib/hazmat-data.ts` | ~1300 | 型定義、データ、プロンプト生成、学習事実 |
| `src/lib/bulk-csv.ts` | ~310 | ヘッダーマッピング、テンプレート |
| `src/app/page.tsx` | ~1800 | タブ構成、入力フォーム、描画ロジック |
| `src/app/globals.css` | ~880 | カラーパレット |
| `tailwind.config.ts` | ~60 | アクセントカラー |
