// 危険物の分類データ
export const classificationOptions = [
  "特殊引火物",
  "第1石油類（非水溶性）",
  "第1石油類（水溶性）",
  "アルコール類",
  "第2石油類（非水溶性）",
  "第2石油類（水溶性）",
  "第3石油類（非水溶性）",
  "第3石油類（水溶性）",
  "第4石油類",
  "動植物油類",
] as const;

export type Classification = (typeof classificationOptions)[number];

// 分類ごとのスタイル設定
export const classificationStyles: Record<
  Classification,
  {
    color: string;
    gradient: string;
    danger: string;
    icon: string;
    tailwindBg: string;
    tailwindText: string;
  }
> = {
  特殊引火物: {
    color: "赤",
    gradient: "赤から黒",
    danger: "極高",
    icon: "稲妻と揮発する液体",
    tailwindBg: "bg-red-500",
    tailwindText: "text-red-700",
  },
  "第1石油類（非水溶性）": {
    color: "オレンジ",
    gradient: "オレンジ",
    danger: "高",
    icon: "炎と燃料缶",
    tailwindBg: "bg-orange-500",
    tailwindText: "text-orange-700",
  },
  "第1石油類（水溶性）": {
    color: "オレンジ",
    gradient: "オレンジと青",
    danger: "高",
    icon: "炎と水滴",
    tailwindBg: "bg-orange-400",
    tailwindText: "text-orange-600",
  },
  アルコール類: {
    color: "紫",
    gradient: "紫",
    danger: "中高",
    icon: "三角フラスコと青白い炎",
    tailwindBg: "bg-purple-500",
    tailwindText: "text-purple-700",
  },
  "第2石油類（非水溶性）": {
    color: "黄色",
    gradient: "黄色",
    danger: "中",
    icon: "石油ストーブ",
    tailwindBg: "bg-yellow-500",
    tailwindText: "text-yellow-700",
  },
  "第2石油類（水溶性）": {
    color: "黄色",
    gradient: "黄色と青",
    danger: "中",
    icon: "燃料缶と水滴",
    tailwindBg: "bg-yellow-400",
    tailwindText: "text-yellow-600",
  },
  "第3石油類（非水溶性）": {
    color: "緑",
    gradient: "緑",
    danger: "低中",
    icon: "工業用オイル缶",
    tailwindBg: "bg-green-500",
    tailwindText: "text-green-700",
  },
  "第3石油類（水溶性）": {
    color: "緑",
    gradient: "緑と青",
    danger: "低中",
    icon: "オイル缶と水滴",
    tailwindBg: "bg-green-400",
    tailwindText: "text-green-600",
  },
  第4石油類: {
    color: "青緑",
    gradient: "青緑",
    danger: "低",
    icon: "機械油缶",
    tailwindBg: "bg-teal-500",
    tailwindText: "text-teal-700",
  },
  動植物油類: {
    color: "茶色",
    gradient: "茶色からベージュ",
    danger: "低",
    icon: "オリーブオイル瓶",
    tailwindBg: "bg-amber-600",
    tailwindText: "text-amber-800",
  },
};

export interface RenderPalette {
  badge: string;
  frame: string;
  bgFrom: string;
  bgTo: string;
}

export const classificationRenderPalette: Record<Classification, RenderPalette> = {
  特殊引火物: {
    badge: "#ef4444",
    frame: "#b91c1c",
    bgFrom: "#ef4444",
    bgTo: "#7f1d1d",
  },
  "第1石油類（非水溶性）": {
    badge: "#f97316",
    frame: "#c2410c",
    bgFrom: "#f97316",
    bgTo: "#7c2d12",
  },
  "第1石油類（水溶性）": {
    badge: "#fb923c",
    frame: "#ea580c",
    bgFrom: "#fb923c",
    bgTo: "#7c2d12",
  },
  アルコール類: {
    badge: "#a855f7",
    frame: "#7e22ce",
    bgFrom: "#a855f7",
    bgTo: "#3b0764",
  },
  "第2石油類（非水溶性）": {
    badge: "#eab308",
    frame: "#a16207",
    bgFrom: "#eab308",
    bgTo: "#713f12",
  },
  "第2石油類（水溶性）": {
    badge: "#facc15",
    frame: "#a16207",
    bgFrom: "#facc15",
    bgTo: "#713f12",
  },
  "第3石油類（非水溶性）": {
    badge: "#22c55e",
    frame: "#15803d",
    bgFrom: "#22c55e",
    bgTo: "#14532d",
  },
  "第3石油類（水溶性）": {
    badge: "#4ade80",
    frame: "#15803d",
    bgFrom: "#4ade80",
    bgTo: "#14532d",
  },
  第4石油類: {
    badge: "#14b8a6",
    frame: "#0f766e",
    bgFrom: "#14b8a6",
    bgTo: "#134e4a",
  },
  動植物油類: {
    badge: "#d97706",
    frame: "#92400e",
    bgFrom: "#d97706",
    bgTo: "#451a03",
  },
};

// ========================================
// 統一カードタイプシステム
// ========================================

export type CardType = "dangerous" | "extinguish" | "transport" | "regulation";

export interface CardTypeConfig {
  label: string;
  role: string;
  badgeColor: string;
  frameColor: string;
  bgGradient: string;
  decorStyle: string;
}

export const cardTypeConfigs: Record<CardType, CardTypeConfig> = {
  dangerous: {
    label: "危険物",
    role: "攻撃",
    badgeColor: "分類準拠",
    frameColor: "分類準拠メタリック",
    bgGradient: "分類準拠グラデーション",
    decorStyle: "炎と化学記号の装飾パターン",
  },
  extinguish: {
    label: "消火",
    role: "防御",
    badgeColor: "シアン(#06B6D4)",
    frameColor: "青メタリック(#3B82F6)",
    bgGradient: "青(#3B82F6)からダークブルー(#1E3A5F)",
    decorStyle: "水と泡の装飾パターン",
  },
  transport: {
    label: "運搬",
    role: "強化",
    badgeColor: "緑(#22C55E)",
    frameColor: "緑メタリック(#16A34A)",
    bgGradient: "緑(#22C55E)からダークグリーン(#14532D)",
    decorStyle: "道路と車両の装飾パターン",
  },
  regulation: {
    label: "法令",
    role: "妨害",
    badgeColor: "金色(#EAB308)",
    frameColor: "金色メタリック(#CA8A04)",
    bgGradient: "金(#EAB308)からダークアンバー(#78350F)",
    decorStyle: "法律書と天秤の装飾パターン",
  },
};

export const cardTypeRenderPalette: Record<CardType, RenderPalette> = {
  dangerous: {
    badge: "#f97316",
    frame: "#c2410c",
    bgFrom: "#f97316",
    bgTo: "#7c2d12",
  },
  extinguish: {
    badge: "#06b6d4",
    frame: "#3b82f6",
    bgFrom: "#3b82f6",
    bgTo: "#1e3a5f",
  },
  transport: {
    badge: "#22c55e",
    frame: "#16a34a",
    bgFrom: "#22c55e",
    bgTo: "#14532d",
  },
  regulation: {
    badge: "#eab308",
    frame: "#ca8a04",
    bgFrom: "#eab308",
    bgTo: "#78350f",
  },
};

// ========================================
// カードデータ型定義
// ========================================

export interface DangerousGoodsCardData {
  name: string;
  classification: Classification;
  flashPoint: string;
  ignitionPoint: string;
  boilingPoint: string;
  specificGravity: string;
  vaporGravity: string;
  waterSoluble: "不溶" | "可溶" | "一部可溶";
  designatedQuantity: string;
  gameEffect: string;
  illustHint?: string;
}

export interface ExtinguishCardData {
  name: string;
  category: string;
  canUseOnClass4: boolean;
  effect: string;
  factBasis: string;
  illustHint?: string;
}

export interface TransportCardData {
  name: string;
  effect: string;
  factBasis: string;
  illustHint?: string;
}

export interface RegulationCardData {
  name: string;
  effect: string;
  legalBasis: string;
  illustHint?: string;
}

export interface CardRenderModel {
  type: CardType;
  name: string;
  typeLabel: string;
  badgeColor: string;
  frameColor: string;
  bgFrom: string;
  bgTo: string;
  infoLines: string[];
  effectText: string;
  illustrationPrompt: string;
  studyNote?: string;
  studyNoteFull?: string;
  warnings?: string[];
}

const normalizeInfoLines = (lines: string[]): string[] => {
  const placeholder = "—";
  const normalized = lines.map((line) => (line && line.trim() ? line.trim() : placeholder));
  while (normalized.length < 3) {
    normalized.push(placeholder);
  }
  return normalized.slice(0, 3);
};

const normalizeText = (value: string | undefined | null) =>
  (value || "")
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/　/g, " ")
    .replace(/\n+/g, " ")
    .trim();

const dangerousFactByClassification: Record<Classification, string> = {
  特殊引火物: "特殊引火物は引火点が極めて低く、静電気火花でも着火しやすい分類です。",
  "第1石油類（非水溶性）": "第1石油類は引火性が高く、蒸気が滞留しやすいため火気管理が重要です。",
  "第1石油類（水溶性）": "第1石油類は引火性が高く、水溶性でも換気と密閉管理が必要です。",
  アルコール類: "アルコール類は可燃性蒸気に注意し、消火では耐アルコール泡を検討します。",
  "第2石油類（非水溶性）": "第2石油類は第1石油類より引火点は高いが、加熱で危険性が上がります。",
  "第2石油類（水溶性）": "第2石油類は漏えい時の拡散管理と着火源管理が重要です。",
  "第3石油類（非水溶性）": "第3石油類は高温・蓄熱条件で発火するおそれがあり温度管理が必要です。",
  "第3石油類（水溶性）": "第3石油類でも加熱時は可燃性蒸気が発生し得るため温度管理が必要です。",
  第4石油類: "第4石油類は引火点が比較的高いが、高温時は可燃性蒸気への注意が必要です。",
  動植物油類: "動植物油類は酸化熱がこもると自然発熱し得るため蓄熱管理が必要です。",
};

const dangerousFactByName: Record<string, string> = {
  ガソリン: "ガソリンは引火点-40℃以下で、常温でも可燃性蒸気が発生しやすい危険物です。",
  エタノール: "エタノールは可燃性蒸気が発生するため、火源から離して換気を確保します。",
  メタノール: "メタノールは可燃性液体で、密閉・換気・保護具によるばく露低減が基本です。",
  アセトン: "アセトンは第1石油類に分類され、低引火点のため着火源管理が重要です。",
  "n-ヘキサン": "n-ヘキサンは第1石油類として引火性が高く、換気と火気管理が必要です。",
  ベンゼン: "ベンゼンは第1石油類で、引火防止とばく露防止を同時に管理します。",
  灯油: "灯油はガソリンより引火しにくいが、加熱時には可燃性蒸気への注意が必要です。",
  軽油: "軽油はガソリンより引火しにくいが、霧状や加熱条件では着火しやすくなります。",
  重油: "重油は加熱貯蔵時に可燃性蒸気が発生し得るため温度管理が重要です。",
  ジエチルエーテル: "ジエチルエーテルは特殊引火物で、蒸気が拡散しやすく着火源管理が最重要です。",
  "二硫化炭素": "二硫化炭素は特殊引火物で、極めて引火しやすいため厳格な火気管理が必要です。",
  "2硫化炭素": "二硫化炭素は特殊引火物で、極めて引火しやすいため厳格な火気管理が必要です。",
  テトラヒドロフラン: "テトラヒドロフランは低引火点の第1石油類で、静電気を含む着火源対策が必要です。",
};

interface FactRule {
  keywords: string[];
  fact: string;
}

const extinguishFactRules: FactRule[] = [
  {
    keywords: ["消火栓", "スプリンクラー", "水噴射", "水蒸気"],
    fact: "油火災へ水を直接放射すると突沸で燃焼液が飛散し、延焼する危険があります。",
  },
  {
    keywords: ["泡消火", "泡消火設備", "泡消火器"],
    fact: "泡は液面を被覆して空気を遮断するため、第4類の液面火災で有効です。",
  },
  {
    keywords: ["アルコール", "耐アルコール"],
    fact: "アルコール類火災では耐アルコール泡の選定が重要です。",
  },
  {
    keywords: ["不活性ガス", "二酸化炭素", "co2"],
    fact: "不活性ガス・二酸化炭素は窒息効果で消火するため、閉鎖空間では酸欠対策が必要です。",
  },
  {
    keywords: ["粉末", "りん酸塩", "炭酸水素塩"],
    fact: "粉末消火は連鎖反応抑制に有効だが、適応火災区分を確認して使用します。",
  },
];

const transportFactRules: FactRule[] = [
  {
    keywords: ["指定容器", "密閉", "漏えい", "漏洩"],
    fact: "運搬時は容器密閉と漏えい防止を徹底し、積載前点検を行うのが基本です。",
  },
  {
    keywords: ["制限外", "許可証", "許可"],
    fact: "積載制限を超える場合は出発地管轄の警察署長による制限外積載許可が必要です。",
  },
  {
    keywords: ["過積載", "最大積載量"],
    fact: "最大積載量は自動車検査証の値を超えてはならず、過積載は重大違反です。",
  },
  {
    keywords: ["長尺", "突出", "高さ", "3.8", "4.1"],
    fact: "積載物の長さ・幅・高さ・突出量には道路交通法上の制限があります。",
  },
  {
    keywords: ["荷台", "看守", "乗車"],
    fact: "荷台乗車は原則禁止だが、積載物看守のため必要最小限の人員は例外です。",
  },
  {
    keywords: ["危", "標識"],
    fact: "危険物運搬では標識・表示・携行書類を事前に確認して運行します。",
  },
];

const regulationFactRules: FactRule[] = [
  {
    keywords: ["立入検査", "資料提出", "報告徴収"],
    fact: "消防法第4条では、消防機関が立入検査や資料提出を求める権限を定めています。",
  },
  {
    keywords: ["使用停止", "改修命令", "措置命令", "修理", "移転", "除去"],
    fact: "消防法第5条・第5条の2・第5条の3に基づき、危険状態の是正命令が可能です。",
  },
  {
    keywords: ["市町村条例", "指定数量未満"],
    fact: "指定数量未満の危険物でも、市町村火災予防条例の規制対象です。",
  },
  {
    keywords: ["取扱所", "製造所", "貯蔵所"],
    fact: "指定数量以上の製造所等では、危険物取扱者の立会いが必要になります。",
  },
  {
    keywords: ["混載"],
    fact: "危険物の混載は危険性に応じて制限され、相互反応リスクの確認が必要です。",
  },
  {
    keywords: ["報告の義務", "通報", "事故"],
    fact: "事故時は被害拡大防止を優先し、法令で定める通報・報告を速やかに行います。",
  },
];

const normalizeClassificationLabel = (value: string) =>
  normalizeText(value)
    .replace(/[（(].*?[)）]/g, "")
    .replace(/[第一第１]/g, "第1")
    .replace(/[第二第２]/g, "第2")
    .replace(/[第三第３]/g, "第3")
    .replace(/[第四第４]/g, "第4")
    .replace(/石油類/g, "石油類")
    .replace(/\s+/g, "");

export const resolveClassification = (
  rawClassification: string,
  rawWaterSolubility?: string,
): Classification => {
  const value = normalizeClassificationLabel(rawClassification);
  const water = normalizeText(rawWaterSolubility).toLowerCase();
  const isWaterSoluble = /水溶|溶ける|可溶/.test(water) && !/不溶|溶けない/.test(water);

  if (value.includes("特殊引火物")) return "特殊引火物";
  if (value.includes("アルコール類")) return "アルコール類";
  if (value.includes("第4石油類")) return "第4石油類";
  if (value.includes("動植物油類")) return "動植物油類";
  if (value.includes("第3石油類")) return isWaterSoluble ? "第3石油類（水溶性）" : "第3石油類（非水溶性）";
  if (value.includes("第2石油類")) return isWaterSoluble ? "第2石油類（水溶性）" : "第2石油類（非水溶性）";
  return isWaterSoluble ? "第1石油類（水溶性）" : "第1石油類（非水溶性）";
};

export const resolveWaterSolubility = (rawValue: string): DangerousGoodsCardData["waterSoluble"] => {
  const value = normalizeText(rawValue).toLowerCase();
  if (/一部|少し/.test(value)) return "一部可溶";
  if (/可溶|水溶|溶ける/.test(value) && !/不溶|溶けない/.test(value)) return "可溶";
  return "不溶";
};

const findFactByName = (name: string, map: Record<string, string>) => {
  const target = normalizeText(name);
  if (!target) return "";
  for (const [key, value] of Object.entries(map)) {
    if (target.includes(key) || key.includes(target)) return value;
  }
  return "";
};

const findFactByRules = (text: string, rules: FactRule[]) => {
  const target = normalizeText(text).toLowerCase();
  if (!target) return "";
  for (const rule of rules) {
    if (rule.keywords.some((keyword) => target.includes(keyword.toLowerCase()))) {
      return rule.fact;
    }
  }
  return "";
};

const compactStudyText = (raw: string) => {
  let text = normalizeText(raw)
    .replace(/消化/g, "消火")
    .replace(/[。．]{2,}/g, "。");
  if (!text) return "";
  if (!/[。.!！]$/.test(text)) text = `${text}。`;
  return text;
};

const summarizeStudyText = (raw: string, maxLength = 84) => {
  const text = compactStudyText(raw);
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1)}…`;
};

const clampStudyNoteFull = (raw: string, maxLength = 180) => {
  const text = compactStudyText(raw);
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1)}…`;
};

const sanitizePrimaryFact = (raw: string) => {
  const text = compactStudyText(raw);
  if (!text) return "";
  if (/^(テンプレート|未入力|なし|不明|n\/a|na|-)。?$/i.test(text)) return "";
  return text;
};

const mergeStudyFact = (primaryFact: string, supplementFact: string, fallbackDefault: string) => {
  const primary = sanitizePrimaryFact(primaryFact);
  const supplement = compactStudyText(supplementFact);
  if (primary && supplement && primary !== supplement) return clampStudyNoteFull(`${primary} 補足: ${supplement}`);
  if (primary) return clampStudyNoteFull(primary);
  if (supplement) return clampStudyNoteFull(supplement);
  return clampStudyNoteFull(fallbackDefault);
};

export const getDangerousStudyFact = (name: string, classification: Classification) =>
  findFactByName(name, dangerousFactByName) ||
  dangerousFactByClassification[classification] ||
  "第4類危険物は引火性液体で、指定数量を基準に規制が変わります。";

export const getExtinguishStudyFact = (name: string, fallbackFact: string, effectText = "") =>
  mergeStudyFact(
    fallbackFact,
    findFactByRules(`${name} ${effectText} ${fallbackFact}`, extinguishFactRules),
    "適応火災と不適応火災を区別して選択することが重要です。",
  );

export const getTransportStudyFact = (name: string, fallbackFact: string, effectText = "") =>
  mergeStudyFact(
    fallbackFact,
    findFactByRules(`${name} ${effectText} ${fallbackFact}`, transportFactRules),
    "容器・積載・表示の遵守が安全運搬の基本です。",
  );

export const getRegulationStudyFact = (name: string, fallbackFact: string, effectText = "") =>
  mergeStudyFact(
    fallbackFact,
    findFactByRules(`${name} ${effectText} ${fallbackFact}`, regulationFactRules),
    "法令カードは行政処分・届出・点検義務を軸に整理すると学習しやすいです。",
  );

export interface EffectPolishResult {
  effect: string;
  warnings: string[];
}

export const polishGameEffectText = (rawEffect: string, cardType: CardType): EffectPolishResult => {
  const warnings = new Set<string>();
  let effect = normalizeText(rawEffect);

  if (!effect) {
    const defaults: Record<CardType, string> = {
      dangerous: "相手に2ダメージを与える。",
      extinguish: "受けるダメージを無効化する。",
      transport: "次の自分の行動を強化する。",
      regulation: "次の相手ターンに制限を与える。",
    };
    return { effect: defaults[cardType], warnings: Array.from(warnings) };
  }

  const replacementRules: Array<{
    pattern: RegExp;
    replacement: string | ((substring: string) => string);
    warning: string;
  }> = [
    {
      pattern: /消化カード|消化器|消化設備|消化剤/g,
      replacement: (match) => match.replace(/消化/g, "消火"),
      warning: "表記ゆれ（消化/消火）を統一しました",
    },
    {
      pattern: /歓喜/g,
      replacement: "換気",
      warning: "誤字を補正しました",
    },
    {
      pattern: /現実|実生活|今日|昨日|明日|家の|学校で|学校の|友達|家族|2週間以内|1週間以内|水道水|水道に混入|飲んでいた|飲んだことにする/g,
      replacement: "",
      warning: "実生活に紐づく条件表現を削除しました",
    },
    {
      pattern: /飲ませる|飲む|吸わせる|吸入させる|食べさせる|触れさせる|注射する|注入する|混入させる|摂取させる/g,
      replacement: "作用を与える",
      warning: "危険行為を想起させる文面をゲーム表現へ置換しました",
    },
    {
      pattern: /失明|死亡|死に至る|致死|殺す|殺害|自殺|麻薬|中毒死|窒息死/g,
      replacement: "行動不能",
      warning: "過度な被害表現を抑制しました",
    },
    {
      pattern: /頭痛|吐き気|めまい|チアノーゼ|痙攣|腐食|皮膚炎|急性中毒|猛毒|毒状態/g,
      replacement: "状態異常",
      warning: "医学的症状の直接表現を状態異常に統一しました",
    },
  ];

  replacementRules.forEach((rule) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const next = effect.replace(rule.pattern, rule.replacement as any);
    if (next !== effect) {
      warnings.add(rule.warning);
      effect = next;
    }
  });

  if (cardType === "extinguish") {
    effect = effect
      .replace(/第[４4]類危険物に使用した場合/g, "第4類使用時")
      .replace(/第[４4]類危険物には?使用できない/g, "第4類は使用不可")
      .replace(/第[４4]類危険物に使用できない/g, "第4類は使用不可")
      .replace(/第[４4]類危険物に使用できる/g, "第4類は使用可")
      .replace(/但し/g, "ただし");
  }

  effect = effect
    .replace(/[（(][^）)]*(失明|死亡|死に至る|麻薬|中毒|有害|症状|吸入|摂取)[^）)]*[）)]/g, "")
    .replace(/、\s*、/g, "、")
    .replace(/[。.!！]{2,}/g, "。")
    .replace(/　+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/^[-,、。・\s]+/g, "")
    .replace(/[-,、。・\s]+$/g, "")
    .trim();

  if (!effect) {
    const defaults: Record<CardType, string> = {
      dangerous: "相手に2ダメージを与える。",
      extinguish: "受けるダメージを無効化する。",
      transport: "次の自分の行動を強化する。",
      regulation: "次の相手ターンに制限を与える。",
    };
    warnings.add("入力文面が不適切だったため効果を安全な定型に置き換えました");
    return { effect: defaults[cardType], warnings: Array.from(warnings) };
  }

  if (!/[。.!！]$/.test(effect)) {
    effect = `${effect}。`;
  }

  if (effect.length > 100) {
    effect = `${effect.slice(0, 97)}…`;
    warnings.add("カード効果テキストが100文字を超えるため要約しました");
  }

  return { effect, warnings: Array.from(warnings) };
};

const buildIllustrationPromptBase = (description: string, colorTone: string, extra?: string) =>
  [
    "TCGカード用の中央イラストのみを生成する。",
    "縦向き、比率4:3。カード枠・文字・UI・ロゴは描かない。",
    "中央に主題、背景は控えめで主役を邪魔しない。",
    `色調: ${colorTone}.`,
    description,
    extra ? extra : "",
    "高精細、絵画調、カードゲームのアートに適した仕上がり。",
  ]
    .filter((line) => line)
    .join("\n");

export const toDangerousGoodsCardData = (data: SubstanceData): DangerousGoodsCardData => ({
  name: data.name,
  classification: resolveClassification(data.classification, data.waterSoluble),
  flashPoint: data.flashPoint,
  ignitionPoint: data.ignitionPoint,
  boilingPoint: data.boilingPoint,
  specificGravity: data.specificGravity,
  vaporGravity: data.vaporGravity,
  waterSoluble: resolveWaterSolubility(data.waterSoluble),
  designatedQuantity: data.designatedQuantity,
  gameEffect: data.specialNotes || "攻撃カード",
});

export const generateDangerousIllustrationPrompt = (data: DangerousGoodsCardData): string => {
  const style = classificationStyles[data.classification];
  const fact = getDangerousStudyFact(data.name, data.classification);
  const illustDesc = data.illustHint || `${style.icon}をモチーフにした危険物のシンボル`;
  return buildIllustrationPromptBase(
    illustDesc,
    `${style.color}系`,
    `雰囲気: ${style.gradient}の色彩。学習要点: ${fact}`,
  );
};

export const generateExtinguishIllustrationPrompt = (data: ExtinguishCardData): string => {
  const fact = getExtinguishStudyFact(data.name, data.factBasis, data.effect);
  const illustDesc = data.illustHint || `${data.name}の消火シーン, 水や泡や粉末が火を消し止めるイラスト`;
  return buildIllustrationPromptBase(illustDesc, "青系/シアン系", `防御的で落ち着いた雰囲気。学習要点: ${fact}`);
};

export const generateTransportIllustrationPrompt = (data: TransportCardData): string => {
  const fact = getTransportStudyFact(data.name, data.factBasis, data.effect);
  const illustDesc = data.illustHint || `${data.name}に関連する運搬シーン, トラックやコンテナ, 安全装備の描写`;
  return buildIllustrationPromptBase(illustDesc, "緑系", `安全性や整然さを感じる雰囲気。学習要点: ${fact}`);
};

export const generateRegulationIllustrationPrompt = (data: RegulationCardData): string => {
  const fact = getRegulationStudyFact(data.name, data.legalBasis, data.effect);
  const illustDesc = data.illustHint || `${data.name}を象徴する法律・規制のイメージ, 天秤や法令書類の描写`;
  return buildIllustrationPromptBase(illustDesc, "金系/アンバー系", `厳格で権威的な雰囲気。学習要点: ${fact}`);
};

export const buildDangerousCardRenderModel = (data: DangerousGoodsCardData): CardRenderModel => {
  const palette = classificationRenderPalette[data.classification];
  const fact = getDangerousStudyFact(data.name, data.classification);
  const factSummary = summarizeStudyText(fact, 84);
  const polished = polishGameEffectText(data.gameEffect, "dangerous");
  const stats: string[] = [];
  if (data.flashPoint.trim()) stats.push(`引火点${data.flashPoint}℃`);
  if (data.specificGravity.trim()) stats.push(`比重${data.specificGravity}`);
  if (data.designatedQuantity.trim()) stats.push(`指定数量${data.designatedQuantity}L`);
  if (data.vaporGravity.trim() && data.vaporGravity !== "-") stats.push(`蒸気比重${data.vaporGravity}`);

  return {
    type: "dangerous",
    name: data.name,
    typeLabel: cardTypeConfigs.dangerous.label,
    badgeColor: palette.badge,
    frameColor: palette.frame,
    bgFrom: palette.bgFrom,
    bgTo: palette.bgTo,
    infoLines: normalizeInfoLines([
      `分類: ${data.classification}`,
      [stats.join(" / "), `水溶性: ${data.waterSoluble}`].filter(Boolean).join(" / "),
      `学習: ${factSummary}`,
    ]),
    effectText: polished.effect,
    illustrationPrompt: generateDangerousIllustrationPrompt(data),
    studyNote: factSummary,
    studyNoteFull: fact,
    warnings: polished.warnings,
  };
};

export const buildExtinguishCardRenderModel = (data: ExtinguishCardData): CardRenderModel => {
  const palette = cardTypeRenderPalette.extinguish;
  const fact = getExtinguishStudyFact(data.name, data.factBasis, data.effect);
  const factSummary = summarizeStudyText(fact, 84);
  const polished = polishGameEffectText(data.effect, "extinguish");
  return {
    type: "extinguish",
    name: data.name,
    typeLabel: cardTypeConfigs.extinguish.label,
    badgeColor: palette.badge,
    frameColor: palette.frame,
    bgFrom: palette.bgFrom,
    bgTo: palette.bgTo,
    infoLines: normalizeInfoLines([
      `種別:${data.category}`,
      data.canUseOnClass4 ? "第4類:使用可" : "第4類:使用不可",
      `学習: ${factSummary}`,
    ]),
    effectText: polished.effect,
    illustrationPrompt: generateExtinguishIllustrationPrompt(data),
    studyNote: factSummary,
    studyNoteFull: fact,
    warnings: polished.warnings,
  };
};

export const buildTransportCardRenderModel = (data: TransportCardData): CardRenderModel => {
  const palette = cardTypeRenderPalette.transport;
  const fact = getTransportStudyFact(data.name, data.factBasis, data.effect);
  const factSummary = summarizeStudyText(fact, 84);
  const polished = polishGameEffectText(data.effect, "transport");
  return {
    type: "transport",
    name: data.name,
    typeLabel: cardTypeConfigs.transport.label,
    badgeColor: palette.badge,
    frameColor: palette.frame,
    bgFrom: palette.bgFrom,
    bgTo: palette.bgTo,
    infoLines: normalizeInfoLines(["運搬要点", `学習: ${factSummary}`, ""]),
    effectText: polished.effect,
    illustrationPrompt: generateTransportIllustrationPrompt(data),
    studyNote: factSummary,
    studyNoteFull: fact,
    warnings: polished.warnings,
  };
};

export const buildRegulationCardRenderModel = (data: RegulationCardData): CardRenderModel => {
  const palette = cardTypeRenderPalette.regulation;
  const fact = getRegulationStudyFact(data.name, data.legalBasis, data.effect);
  const factSummary = summarizeStudyText(fact, 84);
  const polished = polishGameEffectText(data.effect, "regulation");
  return {
    type: "regulation",
    name: data.name,
    typeLabel: cardTypeConfigs.regulation.label,
    badgeColor: palette.badge,
    frameColor: palette.frame,
    bgFrom: palette.bgFrom,
    bgTo: palette.bgTo,
    infoLines: normalizeInfoLines(["法的根拠", `学習: ${factSummary}`, ""]),
    effectText: polished.effect,
    illustrationPrompt: generateRegulationIllustrationPrompt(data),
    studyNote: factSummary,
    studyNoteFull: fact,
    warnings: polished.warnings,
  };
};

export type AnyCardData =
  | ({ type: "dangerous" } & DangerousGoodsCardData)
  | ({ type: "extinguish" } & ExtinguishCardData)
  | ({ type: "transport" } & TransportCardData)
  | ({ type: "regulation" } & RegulationCardData);

// ========================================
// 統一プロンプトビルダー
// ========================================

function buildBasePrompt(
  cardType: CardType,
  cardName: string,
  illustDescription: string,
  infoLines: string[],
  effectText: string,
  extraDecor?: string,
): string {
  const config = cardTypeConfigs[cardType];
  const normalizedInfoLines = (() => {
    const placeholder = "—";
    const targetLines = 3;
    const normalized = infoLines.map((line) => (line && line.trim() ? line.trim() : placeholder));
    while (normalized.length < targetLines) {
      normalized.push(placeholder);
    }
    return normalized.slice(0, targetLines);
  })();
  const infoStr = normalizedInfoLines
    .map((line, index) => `第${index + 1}行「${line}」`)
    .join(", ");
  const safeEffectText = effectText && effectText.trim() ? effectText.trim() : "—";

  return [
    `TCGカード, 縦向き, 比率2:3, すべてのカードで同一テンプレートを使用しレイアウトは絶対に変更しない.`,
    `レイアウト固定: 上から順に (1) 左上のタイプバッジ, (2) 上部中央のカード名, (3) 中央のイラストエリア, (4) イラスト下の情報欄(3行固定), (5) 最下部の効果テキストボックス.`,
    `サイズ比率固定(目安): 上部タイトル帯12%, イラストエリア55%, 情報欄18%, 効果テキスト15%. 余白と位置は全カード共通.`,
    `タイポグラフィ固定: カード名は1行、情報欄は3行均等、効果テキストは2行以内.`,
    `フレーム: 上部左に「${config.label}」タイプバッジ(${config.badgeColor}), 上部中央にカード名「${cardName}」を白文字で大きく表示, 外枠は${config.frameColor}の光沢フレーム.`,
    `イラスト: カード中央の大きなイラストエリア内だけに ${illustDescription}. 文字やロゴは入れない. テキスト領域には侵入しない.`,
    `情報欄: 3行の固定テーブル。${infoStr}. 各行は左揃えで同じフォントサイズ.`,
    `効果テキスト: カード下部の黒背景テキストボックス(角丸, 横幅80%程度, 中央配置)に「${safeEffectText}」を白文字で表示.`,
    `背景: ${config.bgGradient}のグラデーション. 装飾: ${config.decorStyle}${extraDecor ? `, ${extraDecor}` : ""}. 装飾は背景のみで控えめにする.`,
    `禁止: レイアウト変更、要素移動、文字の省略、装飾の過剰化.`,
    `高品質なTCGカードデザイン, プロフェッショナルな仕上がり, 美しいカードアート.`,
  ]
    .filter((l) => l)
    .join("\n");
}

// ========================================
// 危険物カード プロンプト生成
// ========================================

export function generateDangerousGoodsPrompt(data: DangerousGoodsCardData): string {
  const style = classificationStyles[data.classification];

  const stats: string[] = [];
  if (data.flashPoint.trim()) stats.push(`引火点${data.flashPoint}℃`);
  if (data.specificGravity.trim()) stats.push(`比重${data.specificGravity}`);
  if (data.designatedQuantity.trim()) stats.push(`指定数量${data.designatedQuantity}L`);
  if (data.vaporGravity.trim() && data.vaporGravity !== "-") stats.push(`蒸気比重${data.vaporGravity}`);

  const illustDesc = data.illustHint || `${style.icon}をモチーフにした危険物のシンボル, ${style.color}系の色調`;

  return buildBasePrompt(
    "dangerous",
    data.name,
    illustDesc,
    [
      `分類「${data.classification}」(${style.color}色バッジ)`,
      stats.join(" / "),
      `水溶性:${data.waterSoluble}`,
    ],
    data.gameEffect || "攻撃カード",
    `分類カラー: ${style.gradient}のグラデーション`,
  );
}

// ========================================
// 消火カード プロンプト生成
// ========================================

export function generateExtinguishCardPrompt(data: ExtinguishCardData): string {
  const illustDesc = data.illustHint || `${data.name}の消火シーン, 水や泡や粉末が火を消し止めるダイナミックなイラスト`;

  return buildBasePrompt(
    "extinguish",
    data.name,
    illustDesc,
    [
      `種別「${data.category}」`,
      data.canUseOnClass4 ? "第4類使用可" : "第4類使用不可(赤い×マーク)",
    ],
    data.effect,
    "青い防御モチーフの控えめなエフェクト",
  );
}

// ========================================
// 運搬カード プロンプト生成
// ========================================

export function generateTransportCardPrompt(data: TransportCardData): string {
  const illustDesc = data.illustHint || `${data.name}に関連する運搬シーン, トラックやコンテナ, 安全装備のイラスト`;

  return buildBasePrompt(
    "transport",
    data.name,
    illustDesc,
    ["運搬要点", data.factBasis],
    data.effect,
    "緑の強化モチーフの控えめなエフェクト",
  );
}

// ========================================
// 法令カード プロンプト生成
// ========================================

export function generateRegulationCardPrompt(data: RegulationCardData): string {
  const illustDesc = data.illustHint || `${data.name}を象徴する法律・規制のイメージ, 天秤や法令書類, 権威的なシンボル`;

  return buildBasePrompt(
    "regulation",
    data.name,
    illustDesc,
    ["法的根拠", data.legalBasis],
    data.effect,
    "金色の封印モチーフの控えめなエフェクト",
  );
}

// ========================================
// 統一ディスパッチャ
// ========================================

export function generateCardPrompt(card: AnyCardData): string {
  switch (card.type) {
    case "dangerous":
      return generateDangerousGoodsPrompt(card);
    case "extinguish":
      return generateExtinguishCardPrompt(card);
    case "transport":
      return generateTransportCardPrompt(card);
    case "regulation":
      return generateRegulationCardPrompt(card);
  }
}

// ========================================
// サンプルデータ（調査シートから抜粋）
// ========================================

export const sampleDangerousGoods: DangerousGoodsCardData[] = [
  {
    name: "ジエチルエーテル",
    classification: "特殊引火物",
    flashPoint: "-45",
    ignitionPoint: "160",
    boilingPoint: "35",
    specificGravity: "0.71",
    vaporGravity: "2.6",
    waterSoluble: "一部可溶",
    designatedQuantity: "50",
    gameEffect: "出してから2ターン後に相手を1ターン行動不能にする（吸入すると有害で、麻酔作用がある）",
  },
  {
    name: "二硫化炭素",
    classification: "特殊引火物",
    flashPoint: "-30",
    ignitionPoint: "90",
    boilingPoint: "46",
    specificGravity: "1.27",
    vaporGravity: "2.62",
    waterSoluble: "不溶",
    designatedQuantity: "50",
    gameEffect: "相手が食らっている状態異常のダメージを2倍にする。なにもない場合爆発し両方に4ダメージ",
  },
  {
    name: "ガソリン",
    classification: "第1石油類（非水溶性）",
    flashPoint: "-40以下",
    ignitionPoint: "300",
    boilingPoint: "40-200",
    specificGravity: "0.7-0.8",
    vaporGravity: "3.4",
    waterSoluble: "不溶",
    designatedQuantity: "200",
    gameEffect: "引火点が-40℃より低いカードが出されたとき爆発し相手に5ダメージ（静電気でも爆発する危険性）",
  },
  {
    name: "アセトン",
    classification: "第1石油類（水溶性）",
    flashPoint: "-20",
    ignitionPoint: "465",
    boilingPoint: "57",
    specificGravity: "0.79",
    vaporGravity: "2",
    waterSoluble: "可溶",
    designatedQuantity: "400",
    gameEffect: "毎ターン1ダメージの毒を与える（毒性があるため）",
  },
  {
    name: "エタノール",
    classification: "アルコール類",
    flashPoint: "13",
    ignitionPoint: "363",
    boilingPoint: "78",
    specificGravity: "0.79",
    vaporGravity: "1.6",
    waterSoluble: "可溶",
    designatedQuantity: "400",
    gameEffect: "出して2ターン相手に3ダメージの毒を与える（大量摂取すると急性中毒になるため）",
  },
  {
    name: "灯油",
    classification: "第2石油類（非水溶性）",
    flashPoint: "40以上",
    ignitionPoint: "220",
    boilingPoint: "150-300",
    specificGravity: "0.8",
    vaporGravity: "4.5",
    waterSoluble: "不溶",
    designatedQuantity: "1000",
    gameEffect: "相手が2週間以内に頭痛・吐き気・めまいが発生していた場合2ダメージを3ターン付与する中毒状態",
  },
  {
    name: "重油",
    classification: "第3石油類（非水溶性）",
    flashPoint: "60-150",
    ignitionPoint: "250-380",
    boilingPoint: "300",
    specificGravity: "0.9-1.0",
    vaporGravity: "5以上",
    waterSoluble: "不溶",
    designatedQuantity: "2000",
    gameEffect: "自分の手札を1枚捨てた場合、このターンの引火点勝負の判定を「高い方が勝ち」に変更する",
  },
  {
    name: "アマニ油",
    classification: "動植物油類",
    flashPoint: "200以上",
    ignitionPoint: "343",
    boilingPoint: "194",
    specificGravity: "0.93",
    vaporGravity: "10",
    waterSoluble: "不溶",
    designatedQuantity: "10000",
    gameEffect: "勝利時、通常10ダメージ+次の相手ターン終了時に追加3ダメージ（不飽和脂肪酸の酸化で熱が蓄積）",
  },
];

export const sampleExtinguishData: ExtinguishCardData[] = [
  {
    name: "消火栓",
    category: "第1種",
    canUseOnClass4: false,
    effect: "ダメージを無効化し+2。但し第4類に使用した場合火災が広がり-2",
    factBasis: "第4類危険物に水を使用した場合火災が広がる",
  },
  {
    name: "スプリンクラー",
    category: "第2種",
    canUseOnClass4: false,
    effect: "ダメージを無効化。但し第4類に使用した場合爆発し-5",
    factBasis: "第4類危険物に水を使用した場合火災が広がる",
  },
  {
    name: "不活性ガス消火設備",
    category: "第3種",
    canUseOnClass4: true,
    effect: "消化できて歓喜+2",
    factBasis: "窒息効果と冷却効果で消火。消火後の汚損が少ない",
  },
  {
    name: "二酸化炭素消火器",
    category: "第4種・第5種",
    canUseOnClass4: true,
    effect: "すべての効果を無効化。但しじゃんけんに負けると二酸化炭素を吸い-10",
    factBasis: "窒息消火。汚損がないが、大量吸引の危険性がある",
  },
  {
    name: "乾燥砂",
    category: "第5種",
    canUseOnClass4: true,
    effect: "ダメージ-2免れる",
    factBasis: "砂で覆い窒息消火。確実だが効果範囲が限定的",
  },
];

export const sampleTransportData: TransportCardData[] = [
  {
    name: "指定容器の密閉",
    effect: "次の自分の攻撃ダメージを+2",
    factBasis: "容器を密閉し、蒸気の漏れを防いで安全に運ぶ",
  },
  {
    name: "遮光性の被覆",
    effect: "このターン相手は消火カードを使えない",
    factBasis: "日光の直射を避けるため被覆を覆わなければならない",
  },
  {
    name: "過積載の重圧",
    effect: "自分の攻撃ダメージ+5与えるが次のターン自分は運搬カードを使えない",
    factBasis: "最大積載量の規定",
  },
  {
    name: "制限外許可証",
    effect: "山札から5枚引いてその中で好きなカードを1枚選び手札に加える",
    factBasis: "警察署長の許可と、赤い布（または灯火）の装着義務",
  },
  {
    name: "危・標識掲示",
    effect: "このカードを使うとHP+10",
    factBasis: "危険物を運搬する場合、車両の前後に「危」の標識を掲げなければならない",
  },
];

export const sampleRegulationData: RegulationCardData[] = [
  {
    name: "使用停止令",
    effect: "次のターン相手は危険物カードを出してはいけない",
    legalBasis: "法令条の規定を破った際に発令される行政処分",
  },
  {
    name: "改修命令",
    effect: "相手の手札から危険物カードを選び、そのカードを相手に使用させる",
    legalBasis: "消防法に基づき消防機関が火災予防上の危険や法令違反に対し改修を義務付ける行政処分",
  },
  {
    name: "立入検査",
    effect: "相手の手札をすべて見ることが可能",
    legalBasis: "消防長や消防署長は必要があるときに製造所等に立ち入り抜き打ち検査を行う",
  },
  {
    name: "混載の制限",
    effect: "自分が出す危険物カードの種類を宣言し相手はその種類の危険物カードで勝負する",
    legalBasis: "類の異なる危険物を一緒に運搬することは制限されている",
  },
  {
    name: "定期点検",
    effect: "3ターンの間、相手は法令カードを毎ターン出さなければならない。怠った場合HPを半分削る",
    legalBasis: "施設の安全維持のための義務。点検記録を作成し3年間保存しなければならない",
  },
];

// ========================================
// 後方互換: 旧sampleSubstances
// ========================================

export const sampleSubstances = sampleDangerousGoods.map((d) => ({
  name: d.name,
  classification: d.classification,
  flashPoint: d.flashPoint,
  ignitionPoint: d.ignitionPoint,
  boilingPoint: d.boilingPoint,
  specificGravity: d.specificGravity,
  vaporGravity: d.vaporGravity,
  waterSoluble: d.waterSoluble,
  designatedQuantity: d.designatedQuantity,
}));

// ========================================
// テンプレート
// ========================================

export interface PromptTemplate {
  name: string;
  emoji: string;
  prompt: string;
  category: string;
  color: string;
}

// 基本テンプレート（カードデザイン）
export const basicTemplates: PromptTemplate[] = [
  {
    name: "カード裏面デザイン",
    emoji: "",
    prompt: "【カードゲーム裏面デザイン】縦向き、比率2:3、中央に炎と液体を組み合わせたエンブレム、「乙4」の文字を大きく配置、背景はオレンジから赤のグラデーション、幾何学模様の装飾、高級感のあるカードゲームデザイン、縁取りあり",
    category: "基本",
    color: "orange",
  },
  {
    name: "カードフレーム",
    emoji: "",
    prompt: "【カードゲームフレーム】縦向き、比率2:3、上部にタイトル枠、中央に正方形のイラスト枠、下部にステータス表示エリア（引火点・比重・指定数量の3つの数値枠）、オレンジ色の縁取り、黒背景、メタリックな質感",
    category: "基本",
    color: "red",
  },
];

// 分類別テンプレート
export const classificationTemplates: PromptTemplate[] = [
  {
    name: "特殊引火物（ジエチルエーテル）",
    emoji: "",
    prompt: generateDangerousGoodsPrompt(sampleDangerousGoods[0]),
    category: "分類",
    color: "red",
  },
  {
    name: "第1石油類（ガソリン）",
    emoji: "",
    prompt: generateDangerousGoodsPrompt(sampleDangerousGoods[2]),
    category: "分類",
    color: "orange",
  },
  {
    name: "アルコール類（エタノール）",
    emoji: "",
    prompt: generateDangerousGoodsPrompt(sampleDangerousGoods[4]),
    category: "分類",
    color: "purple",
  },
  {
    name: "第2石油類（灯油）",
    emoji: "",
    prompt: generateDangerousGoodsPrompt(sampleDangerousGoods[5]),
    category: "分類",
    color: "yellow",
  },
];

// 性質別テンプレート
export const propertyTemplates: PromptTemplate[] = [
  {
    name: "引火点カード（ガソリン）",
    emoji: "",
    prompt: "【危険物カード】縦向き、比率2:3、タイトル「ガソリン」大きく表示、中央イラスト：氷点下の温度計と炎が同時に描かれる、メインステータス「引火点 -40℃」を特大フォントで強調、サブ情報：比重0.7/蒸気比重3.0を小さく、背景は青（冷たい）からオレンジ（炎）へのグラデーション",
    category: "性質",
    color: "blue",
  },
  {
    name: "比重カード（二硫化炭素）",
    emoji: "",
    prompt: "【危険物カード】縦向き、比率2:3、タイトル「二硫化炭素」、中央イラスト：水の中に沈む液体の図解、メインステータス「比重 1.27」を強調、特殊効果テキスト「水に沈む！消火に水が使える」、背景は深い青のグラデーション、レアカード風の光沢",
    category: "性質",
    color: "blue",
  },
  {
    name: "蒸気比重カード（アセトン）",
    emoji: "",
    prompt: "【危険物カード】縦向き、比率2:3、タイトル「アセトン」、中央イラスト：床に溜まる紫色の蒸気と警告マーク、メインステータス「蒸気比重 2.0」、効果テキスト「蒸気は床に滞留する」、背景は紫のグラデーション、危険度表示バー付き",
    category: "性質",
    color: "purple",
  },
  {
    name: "沸点カード（ジエチルエーテル）",
    emoji: "",
    prompt: "【危険物カード】縦向き、比率2:3、タイトル「ジエチルエーテル」、中央イラスト：沸騰して蒸発する液体、メインステータス「沸点 35℃」を強調、効果テキスト「常温で蒸発！取扱い注意」、背景は緑からオレンジへの警告色グラデーション",
    category: "性質",
    color: "green",
  },
];

// 消火テンプレート（新統一フォーマット）
export const extinguishTemplates: PromptTemplate[] = [
  {
    name: "消火栓（第1種）",
    emoji: "",
    prompt: generateExtinguishCardPrompt(sampleExtinguishData[0]),
    category: "消火",
    color: "blue",
  },
  {
    name: "スプリンクラー（第2種）",
    emoji: "",
    prompt: generateExtinguishCardPrompt(sampleExtinguishData[1]),
    category: "消火",
    color: "blue",
  },
  {
    name: "不活性ガス消火設備（第3種）",
    emoji: "",
    prompt: generateExtinguishCardPrompt(sampleExtinguishData[2]),
    category: "消火",
    color: "blue",
  },
  {
    name: "二酸化炭素消火器",
    emoji: "",
    prompt: generateExtinguishCardPrompt(sampleExtinguishData[3]),
    category: "消火",
    color: "blue",
  },
];

// 運搬テンプレート（新規）
export const transportTemplates: PromptTemplate[] = [
  {
    name: "指定容器の密閉",
    emoji: "",
    prompt: generateTransportCardPrompt(sampleTransportData[0]),
    category: "運搬",
    color: "green",
  },
  {
    name: "遮光性の被覆",
    emoji: "",
    prompt: generateTransportCardPrompt(sampleTransportData[1]),
    category: "運搬",
    color: "green",
  },
  {
    name: "過積載の重圧",
    emoji: "",
    prompt: generateTransportCardPrompt(sampleTransportData[2]),
    category: "運搬",
    color: "green",
  },
  {
    name: "危・標識掲示",
    emoji: "",
    prompt: generateTransportCardPrompt(sampleTransportData[4]),
    category: "運搬",
    color: "green",
  },
];

// 法令テンプレート（新統一フォーマット）
export const regulationTemplates: PromptTemplate[] = [
  {
    name: "使用停止令",
    emoji: "",
    prompt: generateRegulationCardPrompt(sampleRegulationData[0]),
    category: "法令",
    color: "yellow",
  },
  {
    name: "改修命令",
    emoji: "",
    prompt: generateRegulationCardPrompt(sampleRegulationData[1]),
    category: "法令",
    color: "yellow",
  },
  {
    name: "立入検査",
    emoji: "",
    prompt: generateRegulationCardPrompt(sampleRegulationData[2]),
    category: "法令",
    color: "yellow",
  },
  {
    name: "定期点検",
    emoji: "",
    prompt: generateRegulationCardPrompt(sampleRegulationData[4]),
    category: "法令",
    color: "yellow",
  },
];

// 全テンプレートをまとめる
export const allTemplates = {
  basic: basicTemplates,
  classification: classificationTemplates,
  property: propertyTemplates,
  extinguish: extinguishTemplates,
  transport: transportTemplates,
  regulation: regulationTemplates,
};

// ========================================
// 後方互換: 旧インターフェース・旧関数
// ========================================

export interface SubstanceData {
  name: string;
  classification: Classification;
  flashPoint: string;
  ignitionPoint: string;
  boilingPoint: string;
  specificGravity: string;
  vaporGravity: string;
  waterSoluble: "不溶" | "可溶" | "一部可溶";
  designatedQuantity: string;
  specialNotes: string;
}

export function generatePromptFromData(data: SubstanceData): string {
  return generateDangerousGoodsPrompt({
    ...data,
    gameEffect: data.specialNotes || "攻撃カード",
  });
}

export const extinguishMethods = ["泡", "粉末", "CO2", "水", "霧状水", "耐アルコール泡"] as const;
export type ExtinguishMethod = (typeof extinguishMethods)[number];

export interface ExtinguishData {
  name: string;
  classification: Classification;
  methods: { method: ExtinguishMethod; effective: boolean }[];
  specialNote: string;
}

export function generateExtinguishPrompt(data: ExtinguishData): string {
  const methodsStr = data.methods
    .map((m) => `${m.method}${m.effective ? "○" : "×"}`)
    .join("/");

  return generateExtinguishCardPrompt({
    name: data.name,
    category: "旧形式",
    canUseOnClass4: true,
    effect: `消火方法: ${methodsStr}${data.specialNote ? ` / ${data.specialNote}` : ""}`,
    factBasis: data.specialNote || "",
  });
}

export const regulationTypes = ["指定数量", "貯蔵基準", "運搬基準", "取扱基準"] as const;
export type RegulationType = (typeof regulationTypes)[number];

export interface RegulationData {
  type: RegulationType;
  substanceName: string;
  classification: Classification;
  designatedQuantity: string;
  storageRules: string[];
  transportRules: string[];
  handlingRules: string[];
  specialNote: string;
}

export function generateRegulationPrompt(data: RegulationData): string {
  let effect = "";
  switch (data.type) {
    case "指定数量":
      effect = `指定数量 ${data.designatedQuantity}L。この量以上は許可が必要`;
      break;
    case "貯蔵基準":
      effect = data.storageRules.join("、");
      break;
    case "運搬基準":
      effect = data.transportRules.join("、");
      break;
    case "取扱基準":
      effect = data.handlingRules.join("、");
      break;
  }

  return generateRegulationCardPrompt({
    name: `${data.substanceName} - ${data.type}`,
    effect: effect || "法令カード",
    legalBasis: data.specialNote || `${data.type}に関する規定`,
  });
}

// 消火カード種別オプション
export const extinguishCategoryOptions = [
  "第1種",
  "第2種",
  "第3種",
  "第4種・第5種",
  "第5種",
] as const;
export type ExtinguishCategory = (typeof extinguishCategoryOptions)[number];
