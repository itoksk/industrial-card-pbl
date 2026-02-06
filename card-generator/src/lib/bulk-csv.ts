import {
  buildDangerousCardRenderModel,
  buildExtinguishCardRenderModel,
  buildRegulationCardRenderModel,
  buildTransportCardRenderModel,
  generateDangerousIllustrationPrompt,
  generateExtinguishIllustrationPrompt,
  generateRegulationIllustrationPrompt,
  generateTransportIllustrationPrompt,
  resolveClassification,
  resolveWaterSolubility,
  type CardRenderModel,
  type CardType,
  type DangerousGoodsCardData,
  type ExtinguishCardData,
  type RegulationCardData,
  type TransportCardData,
} from "@/lib/hazmat-data";

export type BulkCsvType = CardType;

export interface BulkCardDraft {
  id: string;
  sourceRow: number;
  cardType: BulkCsvType;
  name: string;
  originalEffect: string;
  polishedEffect: string;
  fact: string;
  illustrationPrompt: string;
  renderModel: CardRenderModel;
  warnings: string[];
}

export interface BulkParseResult {
  type: BulkCsvType;
  rows: BulkCardDraft[];
  warnings: string[];
}

type CsvRow = Record<string, string>;

const normalizeHeader = (value: string) =>
  (value || "")
    .replace(/^\uFEFF/, "")
    .replace(/\s+/g, "")
    .replace(/[（）]/g, "")
    .toLowerCase();

const findHeaderKey = (headers: string[], aliases: string[]) => {
  const normalizedAliases = aliases.map((alias) => normalizeHeader(alias));
  return headers.find((header) => normalizedAliases.includes(normalizeHeader(header))) || "";
};

const getCell = (row: CsvRow, headers: string[], aliases: string[], fallback = "") => {
  const key = findHeaderKey(headers, aliases);
  if (!key) return fallback;
  return (row[key] || fallback).trim();
};

const toBooleanMark = (value: string) => {
  const normalized = value.replace(/\s+/g, "");
  if (/[〇○◯]/.test(normalized)) return true;
  if (/可|yes|true|1/i.test(normalized)) return true;
  return false;
};

export const parseCsvText = (text: string): string[][] => {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === "\"") {
      if (inQuotes && next === "\"") {
        field += "\"";
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (!inQuotes && char === ",") {
      row.push(field);
      field = "";
      continue;
    }

    if (!inQuotes && (char === "\n" || char === "\r")) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(field);
      const hasValue = row.some((cell) => cell.trim().length > 0);
      if (hasValue) rows.push(row);
      row = [];
      field = "";
      continue;
    }

    field += char;
  }

  row.push(field);
  if (row.some((cell) => cell.trim().length > 0)) rows.push(row);
  return rows;
};

const toRowObjects = (csvRows: string[][]): { headers: string[]; rows: CsvRow[] } => {
  if (csvRows.length === 0) return { headers: [], rows: [] };
  const headers = csvRows[0].map((header) => header.replace(/^\uFEFF/, ""));
  const rows = csvRows.slice(1).map((cells) => {
    const row: CsvRow = {};
    headers.forEach((header, index) => {
      row[header] = cells[index] || "";
    });
    return row;
  });
  return { headers, rows };
};

export const detectBulkCsvType = (headers: string[]): BulkCsvType | null => {
  const normalized = headers.map((header) => normalizeHeader(header));
  if (normalized.some((header) => header.includes("引火点") || header.includes("分類第4類"))) return "dangerous";
  if (normalized.some((header) => header.includes("消化名") || header.includes("消火名"))) return "extinguish";
  if (normalized.some((header) => header.includes("妨害の効果内容") || header.includes("現実の根拠"))) return "regulation";
  if (normalized.some((header) => header.includes("強化ポイント") || header.includes("基づいた事実"))) return "transport";
  return null;
};

const buildDangerousDraft = (row: CsvRow, headers: string[], sourceRow: number): BulkCardDraft => {
  const name = getCell(row, headers, ["物質名", "カード名"]);
  const rawClassification = getCell(row, headers, ["分類（第4類）", "分類第4類", "分類"]);
  const rawWater = getCell(row, headers, ["水溶性"]);
  const dangerousData: DangerousGoodsCardData = {
    name,
    classification: resolveClassification(rawClassification, rawWater),
    flashPoint: getCell(row, headers, ["引火点 (℃)", "引火点"]),
    ignitionPoint: getCell(row, headers, ["発火点 (℃)", "発火点"]),
    boilingPoint: getCell(row, headers, ["沸点 (℃)", "沸点"]),
    specificGravity: getCell(row, headers, ["比重 (水=1)", "比重"]),
    vaporGravity: getCell(row, headers, ["蒸気比重 (空気=1)", "蒸気比重"]),
    waterSoluble: resolveWaterSolubility(rawWater),
    designatedQuantity: getCell(row, headers, ["指定数量 (L)", "指定数量"]),
    gameEffect: getCell(row, headers, ["効果の内容（事実に基づく）", "カードの効果", "効果"]),
  };
  const renderModel = buildDangerousCardRenderModel(dangerousData);
  return {
    id: `dangerous-${sourceRow}-${name}`,
    sourceRow,
    cardType: "dangerous",
    name: name || `危険物カード${sourceRow}`,
    originalEffect: dangerousData.gameEffect,
    polishedEffect: renderModel.effectText,
    fact: renderModel.studyNoteFull || renderModel.studyNote || "",
    illustrationPrompt: generateDangerousIllustrationPrompt(dangerousData),
    renderModel,
    warnings: renderModel.warnings || [],
  };
};

const buildExtinguishDraft = (row: CsvRow, headers: string[], sourceRow: number): BulkCardDraft => {
  const name = getCell(row, headers, ["消化名", "消火名", "カード名"]);
  const category = getCell(row, headers, ["種別", "第1種", "第２種", "第3種", ""], "第1種");
  const extinguishData: ExtinguishCardData = {
    name,
    category: category || "第1種",
    canUseOnClass4: toBooleanMark(getCell(row, headers, ["第４類危険物に使用できるか", "第4類危険物に使用できるか"])),
    effect: getCell(row, headers, ["カードの効果", "効果"]),
    factBasis: getCell(row, headers, ["基づいた事実", "現実の根拠"]),
  };
  const renderModel = buildExtinguishCardRenderModel(extinguishData);
  return {
    id: `extinguish-${sourceRow}-${name}`,
    sourceRow,
    cardType: "extinguish",
    name: name || `消火カード${sourceRow}`,
    originalEffect: extinguishData.effect,
    polishedEffect: renderModel.effectText,
    fact: renderModel.studyNoteFull || renderModel.studyNote || "",
    illustrationPrompt: generateExtinguishIllustrationPrompt(extinguishData),
    renderModel,
    warnings: renderModel.warnings || [],
  };
};

const buildTransportDraft = (row: CsvRow, headers: string[], sourceRow: number): BulkCardDraft => {
  const name = getCell(row, headers, ["カード名"]);
  const transportData: TransportCardData = {
    name,
    effect: getCell(row, headers, ["効果内容（強化ポイント）", "効果内容強化ポイント", "効果"]),
    factBasis: getCell(row, headers, ["基づいた事実", "現実の根拠"]),
  };
  const renderModel = buildTransportCardRenderModel(transportData);
  return {
    id: `transport-${sourceRow}-${name}`,
    sourceRow,
    cardType: "transport",
    name: name || `運搬カード${sourceRow}`,
    originalEffect: transportData.effect,
    polishedEffect: renderModel.effectText,
    fact: renderModel.studyNoteFull || renderModel.studyNote || "",
    illustrationPrompt: generateTransportIllustrationPrompt(transportData),
    renderModel,
    warnings: renderModel.warnings || [],
  };
};

const buildRegulationDraft = (row: CsvRow, headers: string[], sourceRow: number): BulkCardDraft => {
  const name = getCell(row, headers, ["カード名"]);
  const regulationData: RegulationCardData = {
    name,
    effect: getCell(row, headers, ["妨害の効果内容（ゲーム上の処理）", "妨害の効果内容ゲーム上の処理", "効果"]),
    legalBasis: getCell(row, headers, ["現実の根拠", "法的根拠"]),
  };
  const renderModel = buildRegulationCardRenderModel(regulationData);
  return {
    id: `regulation-${sourceRow}-${name}`,
    sourceRow,
    cardType: "regulation",
    name: name || `法令カード${sourceRow}`,
    originalEffect: regulationData.effect,
    polishedEffect: renderModel.effectText,
    fact: renderModel.studyNoteFull || renderModel.studyNote || "",
    illustrationPrompt: generateRegulationIllustrationPrompt(regulationData),
    renderModel,
    warnings: renderModel.warnings || [],
  };
};

export const parseBulkCsv = (text: string, forcedType?: BulkCsvType): BulkParseResult => {
  const csvRows = parseCsvText(text);
  const { headers, rows } = toRowObjects(csvRows);
  const warnings: string[] = [];
  const detectedType = forcedType || detectBulkCsvType(headers);

  if (!detectedType) {
    throw new Error("CSVの列からカード種別を判定できませんでした。");
  }

  const drafts: BulkCardDraft[] = [];
  rows.forEach((row, index) => {
    const sourceRow = index + 2;
    let draft: BulkCardDraft | null = null;
    if (detectedType === "dangerous") draft = buildDangerousDraft(row, headers, sourceRow);
    if (detectedType === "extinguish") draft = buildExtinguishDraft(row, headers, sourceRow);
    if (detectedType === "transport") draft = buildTransportDraft(row, headers, sourceRow);
    if (detectedType === "regulation") draft = buildRegulationDraft(row, headers, sourceRow);
    if (!draft) return;
    if (!draft.name.trim()) {
      warnings.push(`${sourceRow}行目: カード名が空のためスキップしました`);
      return;
    }
    drafts.push(draft);
  });

  return {
    type: detectedType,
    rows: drafts,
    warnings,
  };
};

const toCsvLine = (cells: string[]) =>
  cells
    .map((cell) => {
      const escaped = (cell || "").replace(/"/g, "\"\"");
      if (/[",\n\r]/.test(escaped)) return `"${escaped}"`;
      return escaped;
    })
    .join(",");

export const createBulkCsvTemplate = (type: BulkCsvType): string => {
  if (type === "dangerous") {
    return [
      toCsvLine([
        "番号",
        "分類（第4類）",
        "引火点 (℃)",
        "発火点 (℃)",
        "沸点 (℃)",
        "比重 (水=1)",
        "蒸気比重 (空気=1)",
        "水溶性",
        "指定数量 (L)",
        "効果の内容（事実に基づく）",
        "物質名",
      ]),
      toCsvLine(["1", "第1石油類", "-40以下", "300", "40-200", "0.7", "3.4", "不溶", "200", "次のターン追加で2ダメージ。", "ガソリン"]),
    ].join("\n");
  }

  if (type === "extinguish") {
    return [
      toCsvLine(["番号", "種別", "消化名", "第４類危険物に使用できるか", "カードの効果", "基づいた事実"]),
      toCsvLine(["1", "第3種", "泡消火設備", "◯", "受けるダメージを無効化し、次ターン防御+1。", "液面を覆って窒息消火する。"]),
    ].join("\n");
  }

  if (type === "transport") {
    return [
      toCsvLine(["番号", "カード名", "効果内容（強化ポイント）", "基づいた事実"]),
      toCsvLine(["1", "指定容器の密閉", "次の自分の攻撃ダメージを+2。", "容器を密閉し蒸気漏えいを防止する。"]),
    ].join("\n");
  }

  return [
    toCsvLine(["番号", "カード名", "妨害の効果内容（ゲーム上の処理）", "現実の根拠"]),
    toCsvLine(["1", "使用停止令", "次のターン相手は危険物カードを出せない。", "法令違反時に発令される行政処分。"]),
  ].join("\n");
};
