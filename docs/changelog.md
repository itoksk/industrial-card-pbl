# industrial-card-pbl 変更履歴

## 2026-02-17: テーマトークン化 & パフォーマンス改善

### 概要

vercel-react-best-practices による評価を実施し、ui-ux-pro-max / liftkit-design-principles に基づいてUI/UXを改善。全3サイトでハードコードされた Tailwind カラークラスを CSS 変数トークンに置換し、ダーク/ライトモードの一貫した切り替えを実現した。

### 評価スコア（改善前）

| サイト | スコア | 主な課題 |
|---|---|---|
| card-generator | 48/100 | バンドルサイズ、ハードコード色、phi spacing 未適用 |
| student-site | 65/100 | 全ページ `'use client'`、ハードコード色 ~740箇所 |
| teacher-guide | 51/100 | ハードコード色 ~392箇所、phi spacing 未適用 |

---

### card-generator

**globals.css**
- Golden Ratio スケール導入（`--scale: 1.618`, `--size-xs` ~ `--size-2xl`）
- phi spacing トークン（`--space-section`, `--space-card`, `--space-inner`, `--space-tight`）
- ライトモードのコントラスト改善

**page.tsx**
- phi spacing 適用（`py-[var(--space-section)]`, `p-[var(--space-card)]` 等）

---

### student-site

#### globals.css 変更
- Golden Ratio スケール導入（`--scale: 1.618`, `--size-xs` ~ `--size-2xl`）
- phi spacing トークン（`--space-section`, `--space-block`）
- セマンティックカラートークン追加:
  - `--color-info` / `--color-info-subtle` / `--color-info-muted`（青系）
  - `--color-success` / `--color-success-subtle` / `--color-success-muted`（緑系）
  - `--color-warning` / `--color-warning-subtle` / `--color-warning-muted`（黄系）
  - `--color-danger` / `--color-danger-subtle` / `--color-danger-muted`（赤系）
  - `--color-purple` / `--color-pink` / `--color-cyan`（各 subtle/muted 付き）
- ユーティリティクラス: `.callout-info`, `.callout-success`, `.callout-warning`, `.callout-danger`
- `.quiz-option.selected` クラス追加
- `.section-gap`, `.lesson-page-bg`, `.code-block` クラス追加
- ライト/ダーク両モードで全トークン定義

#### 全9レッスン カラートークン化

| レッスン | 変換数（概算） | 主な変更内容 |
|---|---|---|
| Lesson 1 | ~5 | breadcrumb hover、カード番号バッジ、quiz selected |
| Lesson 2 | ~19 | アイコン色、border 色、CTA グラデーション |
| Lesson 3 | ~26 | パラメータカード、ステップ番号、グラデーション |
| Lesson 4 | ~131 | ページ背景、テーブル、全 text/bg/border 色 |
| Lesson 5 | ~109 | ページ背景、テーブル、交互行背景 |
| Lesson 6 | ~99 | ページ背景、消火タグ、カードモックアップ |
| Lesson 7 | ~100 | ワークフローステップ、警告 callout、紹介カード |
| Lesson 8 | ~112 | ステップ円、警告ボックス、hover 状態 |
| Lesson 9 | ~139 | カテゴリカード、評価フォーム、完了セクション |

**合計: ~740 箇所の raw Tailwind カラークラス → 0**

変換パターン:
```
text-gray-600 dark:text-gray-300  →  text-[var(--text-secondary)]
text-gray-500 dark:text-gray-400  →  text-[var(--text-muted)]
bg-blue-50 dark:bg-blue-900/20   →  bg-[var(--color-info-subtle)]
border-red-500                    →  border-[var(--color-danger)]
bg-gradient-to-b from-X to-white →  lesson-page-bg クラス
```

---

### teacher-guide

#### globals.css 変更
- phi spacing トークン 11 種追加、12+ CSS クラスに適用

#### 全6ページ カラートークン化

| ページ | 変換数 |
|---|---|
| overview | 多数 |
| guide | 多数 |
| pedagogy | 多数 |
| rules-evolution | 多数 |
| outlook | 多数 |
| card-reference | 多数 |

**合計: ~392 箇所のハードコード Tailwind カラー → CSS 変数トークン（color-mix() 使用）**

---

### カラートークン設計方針

| 用途 | ライトモード | ダークモード |
|---|---|---|
| 情報（info） | `#2563eb` | `#60a5fa` |
| 成功（success） | `#059669` | `#34d399` |
| 警告（warning） | `#d97706` | `#fbbf24` |
| 危険（danger） | `#dc2626` | `#f87171` |
| 紫（purple） | `#7c3aed` | `#a78bfa` |
| ピンク（pink） | `#db2777` | `#f472b6` |
| シアン（cyan） | `#0891b2` | `#22d3ee` |

各色に3段階:
- **メイン**: テキスト・ボーダー用（`--color-info`）
- **subtle**: 薄い背景用（`--color-info-subtle`）— 不透明度 6-8%
- **muted**: やや濃い背景用（`--color-info-muted`）— 不透明度 10-14%

---

### ビルド検証

| サイト | ビルド結果 |
|---|---|
| card-generator | 成功 |
| student-site | 成功（全15ページ静的生成） |
| teacher-guide | 成功（全10ページ静的生成） |
