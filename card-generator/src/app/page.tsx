"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import JSZip from "jszip";
import {
  classificationOptions,
  sampleDangerousGoods,
  generateDangerousIllustrationPrompt,
  generateExtinguishIllustrationPrompt,
  generateTransportIllustrationPrompt,
  generateRegulationIllustrationPrompt,
  buildDangerousCardRenderModel,
  buildExtinguishCardRenderModel,
  buildTransportCardRenderModel,
  buildRegulationCardRenderModel,
  toDangerousGoodsCardData,
  allTemplates,
  sampleExtinguishData,
  sampleTransportData,
  sampleRegulationData,
  extinguishCategoryOptions,
  type SubstanceData,
  type Classification,
  type PromptTemplate,
  type CardRenderModel,
  type ExtinguishCardData,
  type TransportCardData,
  type RegulationCardData,
  type ExtinguishCategory,
} from "@/lib/hazmat-data";
import {
  createBulkCsvTemplate,
  parseBulkCsv,
  type BulkCardDraft,
  type BulkCsvType,
} from "@/lib/bulk-csv";

type Tab = "templates" | "substance" | "extinguish" | "transport" | "regulation" | "direct" | "bulk";
type TemplateCategory = keyof typeof allTemplates;

// Icon components
const IconTemplate = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const IconFlask = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
  </svg>
);

const IconFire = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
  </svg>
);

const IconTruck = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-1.5l-1.842-4.606a1.125 1.125 0 00-1.044-.719H14.25M2.25 14.25V6.375c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v8.25m-13.5 0h13.5" />
  </svg>
);

const IconDocument = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const IconPencil = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
  </svg>
);

const IconCheck = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const IconDownload = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

const IconSparkle = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

const IconKey = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
  </svg>
);

const IconSun = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
);

const IconMoon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

const IconHelp = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
  </svg>
);

const IconUpload = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
  </svg>
);

const IconTrash = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>
);

const IconCardBack = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
  </svg>
);

const IconStack = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75l7.5 3.75-7.5 3.75L4.5 10.5 12 6.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 14.25L12 18l7.5-3.75M4.5 18L12 21.75 19.5 18" />
  </svg>
);

// Category styles
const categoryConfig: Record<TemplateCategory, { label: string; color: string }> = {
  basic: { label: "基本", color: "text-muted" },
  classification: { label: "分類別", color: "category-label-amber" },
  property: { label: "性質", color: "category-label-blue" },
  extinguish: { label: "消火", color: "category-label-cyan" },
  transport: { label: "運搬", color: "category-label-green" },
  regulation: { label: "法令", color: "category-label-yellow" },
};

// Color map for substance buttons
const classificationColorMap: Record<string, string> = {
  "特殊引火物": "#ef4444",
  "第1石油類（非水溶性）": "#f97316",
  "第1石油類（水溶性）": "#fb923c",
  "アルコール類": "#a855f7",
  "第2石油類（非水溶性）": "#eab308",
  "第2石油類（水溶性）": "#facc15",
  "第3石油類（非水溶性）": "#22c55e",
  "第3石油類（水溶性）": "#4ade80",
  "第4石油類": "#14b8a6",
  "動植物油類": "#d97706",
};

const TEXT_LIMITS = {
  cardName: 36,
  effectText: 100,
  basisText: 120,
  infoLine: 84,
  studyLine: 90,
  studyFull: 180,
} as const;

const sanitizeFileName = (value: string) => {
  const sanitized = value
    .normalize("NFKC")
    .replace(/[\\/:*?"<>|]/g, "_")
    .replace(/\s+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 48);
  return sanitized || "card";
};

const extractPngBase64 = (dataUrl: string) => {
  const prefix = "data:image/png;base64,";
  if (!dataUrl.startsWith(prefix)) return null;
  return dataUrl.slice(prefix.length);
};

export default function Home() {
  const [apiKey, setApiKey] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("templates");
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove("light");
      document.body.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.body.classList.add("light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory>("classification");
  const [directPrompt, setDirectPrompt] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<PromptTemplate | null>(null);

  // Substance (Dangerous Goods) state
  const [substanceData, setSubstanceData] = useState<SubstanceData>({
    name: "",
    classification: "第1石油類（非水溶性）",
    flashPoint: "",
    ignitionPoint: "",
    boilingPoint: "",
    specificGravity: "",
    vaporGravity: "",
    waterSoluble: "不溶",
    designatedQuantity: "",
    specialNotes: "",
  });
  const [generatedPrompt, setGeneratedPrompt] = useState("");

  // Extinguish state (new format)
  const [extinguishCardData, setExtinguishCardData] = useState<ExtinguishCardData>({
    name: "",
    category: "第1種",
    canUseOnClass4: false,
    effect: "",
    factBasis: "",
  });
  const [extinguishPrompt, setExtinguishPrompt] = useState("");

  // Transport state (new)
  const [transportData, setTransportData] = useState<TransportCardData>({
    name: "",
    effect: "",
    factBasis: "",
  });
  const [transportPrompt, setTransportPrompt] = useState("");

  // Regulation state (simplified)
  const [regulationCardData, setRegulationCardData] = useState<RegulationCardData>({
    name: "",
    effect: "",
    legalBasis: "",
  });
  const [regulationPrompt, setRegulationPrompt] = useState("");

  // Bulk generation state
  const [bulkType, setBulkType] = useState<BulkCsvType>("dangerous");
  const [bulkDrafts, setBulkDrafts] = useState<BulkCardDraft[]>([]);
  const [bulkWarnings, setBulkWarnings] = useState<string[]>([]);
  const [bulkConfirmChecked, setBulkConfirmChecked] = useState(false);
  const [bulkResults, setBulkResults] = useState<Array<{ name: string; image: string; cardType: BulkCsvType }>>([]);
  const [isBulkGenerating, setIsBulkGenerating] = useState(false);
  const [isBulkDownloading, setIsBulkDownloading] = useState(false);
  const [bulkProgress, setBulkProgress] = useState("");
  const bulkInputRef = useRef<HTMLInputElement>(null);

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [latestStudyNote, setLatestStudyNote] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const buildTemplateDangerousModel = (name: string) => {
    const base: SubstanceData = {
      name,
      classification: "第1石油類（非水溶性）",
      flashPoint: "",
      ignitionPoint: "",
      boilingPoint: "",
      specificGravity: "",
      vaporGravity: "",
      waterSoluble: "不溶",
      designatedQuantity: "",
      specialNotes: "テンプレート",
    };
    return buildDangerousCardRenderModel(toDangerousGoodsCardData(base));
  };

  const buildTemplateRenderModel = (template: PromptTemplate | null): CardRenderModel | null => {
    if (!template) return null;
    switch (template.category) {
      case "消火":
        return buildExtinguishCardRenderModel({
          name: template.name,
          category: "第1種",
          canUseOnClass4: true,
          effect: "防御カード",
          factBasis: "テンプレート",
        });
      case "運搬":
        return buildTransportCardRenderModel({
          name: template.name,
          effect: "強化カード",
          factBasis: "テンプレート",
        });
      case "法令":
        return buildRegulationCardRenderModel({
          name: template.name,
          effect: "妨害カード",
          legalBasis: "テンプレート",
        });
      default:
        return buildTemplateDangerousModel(template.name);
    }
  };

  const buildDirectRenderModel = () => buildTemplateDangerousModel("カスタムカード");

  const clampByLimit = (value: string, max: number) => value.slice(0, max);

  const clampWithAlert = (value: string, max: number, label: string) => {
    if (value.length > max) {
      setError(`${label}は${max}文字以内です。超過分は切り詰めました。`);
    }
    return value.slice(0, max);
  };

  const getCountTone = (current: number, max: number) => {
    if (current >= max) return "text-danger";
    if (current >= Math.floor(max * 0.85)) return "text-amber-300";
    return "text-subtle";
  };

  const normalizeCountText = (value: string) => value.replace(/\s+/g, " ").trim();

  const validateRenderModelTextLimits = (model: CardRenderModel): string[] => {
    const issues = new Set<string>();
    const nameLength = normalizeCountText(model.name).length;
    if (nameLength > TEXT_LIMITS.cardName) {
      issues.add(`カード名は${TEXT_LIMITS.cardName}文字以内にしてください`);
    }

    const effectLength = normalizeCountText(model.effectText).length;
    if (effectLength > TEXT_LIMITS.effectText) {
      issues.add(`効果テキストは${TEXT_LIMITS.effectText}文字以内にしてください`);
    }

    model.infoLines.forEach((line, index) => {
      const lineLength = normalizeCountText(line).length;
      const max = index === 2 ? TEXT_LIMITS.studyLine : TEXT_LIMITS.infoLine;
      if (lineLength > max) {
        issues.add(`情報欄${index + 1}行目は${max}文字以内にしてください`);
      }
    });

    const studyFullLength = normalizeCountText(model.studyNoteFull || model.studyNote || "").length;
    if (studyFullLength > TEXT_LIMITS.studyFull) {
      issues.add(`学習補足（全文）は${TEXT_LIMITS.studyFull}文字以内にしてください`);
    }

    return Array.from(issues);
  };

  // Card back design
  const DEFAULT_CARD_BACK = "/card-back.png";
  const [cardBackImage, setCardBackImage] = useState<string>(DEFAULT_CARD_BACK);
  const [isCustomCardBack, setIsCustomCardBack] = useState(false);
  const [showCardBack, setShowCardBack] = useState(false);
  const [showCardBackModal, setShowCardBackModal] = useState(false);
  const cardBackInputRef = useRef<HTMLInputElement>(null);

  // Load card back from localStorage (custom upload overrides default)
  useEffect(() => {
    const saved = localStorage.getItem("hazmat-card-back");
    if (saved) {
      setCardBackImage(saved);
      setIsCustomCardBack(true);
    }
  }, []);

  // Tour system
  const startTour = useCallback(() => {
    const driverObj = driver({
      showProgress: true,
      animate: true,
      overlayColor: "rgba(0, 0, 0, 0.75)",
      stagePadding: 8,
      stageRadius: 12,
      popoverClass: "hazmat-tour-popover",
      nextBtnText: "次へ",
      prevBtnText: "戻る",
      doneBtnText: "完了",
      steps: [
        {
          element: "#header-area",
          popover: {
            title: "危険物カード生成ツール",
            description: "このツールは危険物取扱者試験の学習用TCGカードを生成します。AIを使ってオリジナルのカードデザインを作成できます。",
            side: "bottom" as const,
            align: "center" as const,
          },
        },
        {
          element: "#api-key-input",
          popover: {
            title: "APIキーの設定",
            description: "Google Gemini APIキーを入力してください。画像生成に必要です。APIキーはブラウザに保存されません。",
            side: "bottom" as const,
            align: "center" as const,
          },
        },
        {
          element: "#tab-nav",
          popover: {
            title: "カード作成方法の選択",
            description: "7つのタブから作成方法を選べます: テンプレート、危険物(攻撃)、消火(防御)、運搬(強化)、法令(妨害)、一括発行、直接入力。",
            side: "bottom" as const,
            align: "center" as const,
          },
        },
        {
          element: "#input-panel",
          popover: {
            title: "カード情報の入力",
            description: "選択したタブに応じて、カードの情報を入力します。サンプルデータのボタンをクリックすると、自動で情報が入力されます。",
            side: "right" as const,
            align: "center" as const,
          },
        },
        {
          element: "#output-panel",
          popover: {
            title: "出力結果",
            description: "生成されたカード画像がここに表示されます。画像はダウンロードも可能です。",
            side: "left" as const,
            align: "center" as const,
          },
        },
        {
          element: "#card-back-btn",
          popover: {
            title: "カード裏面デザイン",
            description: "カードの裏面デザインをアップロードして固定できます。全カード共通の裏面として使用されます。",
            side: "bottom" as const,
            align: "center" as const,
          },
        },
        {
          element: "#help-btn",
          popover: {
            title: "ヘルプ",
            description: "いつでもこのボタンをクリックすると、このツアーを再度表示できます。",
            side: "bottom" as const,
            align: "center" as const,
          },
        },
      ],
      onDestroyStarted: () => {
        localStorage.setItem("hazmat-tour-completed", "true");
        driverObj.destroy();
      },
    });
    driverObj.drive();
  }, []);

  // Auto-start tour on first visit
  useEffect(() => {
    const tourCompleted = localStorage.getItem("hazmat-tour-completed");
    if (!tourCompleted) {
      const timer = setTimeout(() => startTour(), 800);
      return () => clearTimeout(timer);
    }
  }, [startTour]);

  // Card back handlers
  const handleCardBackUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("画像ファイルを選択してください");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string;
      setCardBackImage(dataUrl);
      setIsCustomCardBack(true);
      localStorage.setItem("hazmat-card-back", dataUrl);
      setShowCardBackModal(false);
    };
    reader.readAsDataURL(file);
  };

  const resetToDefaultCardBack = () => {
    setCardBackImage(DEFAULT_CARD_BACK);
    setIsCustomCardBack(false);
    localStorage.removeItem("hazmat-card-back");
    if (cardBackInputRef.current) cardBackInputRef.current.value = "";
  };

  const loadImage = (src: string) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
      img.src = src;
    });

  const drawRoundedRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
    fill = true,
    stroke = false,
  ) => {
    const r = Math.min(radius, width / 2, height / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + width - r, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + r);
    ctx.lineTo(x + width, y + height - r);
    ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
    ctx.lineTo(x + r, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    if (fill) ctx.fill();
    if (stroke) ctx.stroke();
  };

  const drawImageCover = (
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    x: number,
    y: number,
    width: number,
    height: number,
  ) => {
    const scale = Math.max(width / img.width, height / img.height);
    const drawWidth = img.width * scale;
    const drawHeight = img.height * scale;
    const drawX = x + (width - drawWidth) / 2;
    const drawY = y + (height - drawHeight) / 2;
    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  };

  const ellipsizeText = (ctx: CanvasRenderingContext2D, text: string, maxWidth: number) => {
    if (ctx.measureText(text).width <= maxWidth) return text;
    let clipped = text;
    while (clipped.length > 0 && ctx.measureText(`${clipped}…`).width > maxWidth) {
      clipped = clipped.slice(0, -1);
    }
    return `${clipped}…`;
  };

  const splitTokenByWidth = (ctx: CanvasRenderingContext2D, token: string, maxWidth: number) => {
    const chunks: string[] = [];
    let current = "";
    for (const ch of Array.from(token)) {
      const test = `${current}${ch}`;
      if (ctx.measureText(test).width <= maxWidth) {
        current = test;
      } else {
        if (current) chunks.push(current);
        current = ch;
      }
    }
    if (current) chunks.push(current);
    return chunks.length > 0 ? chunks : [token];
  };

  const wrapText = (ctx: CanvasRenderingContext2D, text: string, maxWidth: number, maxLines: number) => {
    const useSpaces = /\s/.test(text);
    const rawTokens = useSpaces ? text.split(/\s+/) : Array.from(text);
    const tokens = rawTokens.flatMap((token) =>
      ctx.measureText(token).width > maxWidth ? splitTokenByWidth(ctx, token, maxWidth) : [token],
    );
    const lines: string[] = [];
    let current = "";
    for (const token of tokens) {
      const test = current ? (useSpaces ? `${current} ${token}` : `${current}${token}`) : token;
      if (ctx.measureText(test).width <= maxWidth) {
        current = test;
      } else {
        if (current) lines.push(current);
        current = token;
      }
      if (lines.length >= maxLines) break;
    }
    if (current && lines.length < maxLines) lines.push(current);
    if (lines.length > maxLines) {
      const clipped = lines.slice(0, maxLines);
      clipped[maxLines - 1] = ellipsizeText(ctx, clipped[maxLines - 1], maxWidth);
      return clipped;
    }
    if (lines.length === maxLines && lines.length > 0) {
      lines[maxLines - 1] = ellipsizeText(ctx, lines[maxLines - 1], maxWidth);
    }
    return lines;
  };

  const fitWrappedText = (
    ctx: CanvasRenderingContext2D,
    text: string,
    maxWidth: number,
    maxHeight: number,
    maxLines: number,
    weight: 500 | 600 | 700,
    initialFontSize: number,
    minFontSize: number,
  ) => {
    const normalized = text.replace(/\s+/g, " ").trim();
    for (let fontSize = initialFontSize; fontSize >= minFontSize; fontSize -= 1) {
      ctx.font = `${weight} ${fontSize}px Inter, "SF Pro Display", sans-serif`;
      const lineHeight = Math.round(fontSize * 1.35);
      const allowedLines = Math.max(1, Math.min(maxLines, Math.floor(maxHeight / lineHeight)));
      const lines = wrapText(ctx, normalized, maxWidth, allowedLines);
      if (lines.length * lineHeight <= maxHeight) {
        return { lines, lineHeight, fontSize };
      }
    }

    ctx.font = `${weight} ${minFontSize}px Inter, "SF Pro Display", sans-serif`;
    const lineHeight = Math.round(minFontSize * 1.35);
    const allowedLines = Math.max(1, Math.min(maxLines, Math.floor(maxHeight / lineHeight)));
    const lines = wrapText(ctx, normalized, maxWidth, allowedLines);
    return { lines, lineHeight, fontSize: minFontSize };
  };

  const renderCardToDataUrl = async (model: CardRenderModel, illustrationSrc: string) => {
    const CARD_WIDTH = 1000;
    const CARD_HEIGHT = 1500;
    const canvas = document.createElement("canvas");
    canvas.width = CARD_WIDTH;
    canvas.height = CARD_HEIGHT;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    await document.fonts.ready;

    const bg = ctx.createLinearGradient(0, 0, 0, CARD_HEIGHT);
    bg.addColorStop(0, model.bgFrom);
    bg.addColorStop(1, model.bgTo);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT);

    const frameMargin = 40;
    const innerMargin = frameMargin + 16;
    const innerX = innerMargin;
    const innerY = innerMargin;
    const innerW = CARD_WIDTH - innerMargin * 2;
    const innerH = CARD_HEIGHT - innerMargin * 2;

    ctx.lineWidth = 10;
    ctx.strokeStyle = model.frameColor;
    drawRoundedRect(ctx, frameMargin, frameMargin, CARD_WIDTH - frameMargin * 2, CARD_HEIGHT - frameMargin * 2, 36, false, true);

    ctx.fillStyle = "rgba(9, 9, 11, 0.55)";
    drawRoundedRect(ctx, innerX, innerY, innerW, innerH, 28, true, false);

    // 全カードで同じ比率を使う固定レイアウト
    const titleHeight = Math.round(innerH * 0.12);
    const illustrationHeight = Math.round(innerH * 0.5);
    const infoHeight = Math.round(innerH * 0.2);
    const effectHeight = innerH - titleHeight - illustrationHeight - infoHeight;

    const titleTop = innerY;
    const illustrationTop = titleTop + titleHeight;
    const infoTop = illustrationTop + illustrationHeight;
    const effectTop = infoTop + infoHeight;

    const contentX = innerX + 24;
    const contentW = innerW - 48;

    const badgeW = 160;
    const badgeH = 52;
    const badgeX = contentX;
    const badgeY = titleTop + 18;
    ctx.fillStyle = model.badgeColor;
    drawRoundedRect(ctx, badgeX, badgeY, badgeW, badgeH, 14, true, false);
    ctx.fillStyle = "#ffffff";
    ctx.font = "600 24px Inter, \"SF Pro Display\", sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(model.typeLabel, badgeX + badgeW / 2, badgeY + badgeH / 2);

    ctx.fillStyle = "#ffffff";
    ctx.font = "700 48px Inter, \"SF Pro Display\", sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const titleText = ellipsizeText(ctx, model.name, contentW - badgeW - 20);
    ctx.fillText(titleText, innerX + innerW / 2, titleTop + titleHeight / 2 + 10);

    const illustrationBoxY = illustrationTop + 14;
    const illustrationBoxH = illustrationHeight - 28;
    ctx.save();
    drawRoundedRect(ctx, contentX, illustrationBoxY, contentW, illustrationBoxH, 24, true, false);
    ctx.clip();
    try {
      const illustration = await loadImage(illustrationSrc);
      drawImageCover(ctx, illustration, contentX, illustrationBoxY, contentW, illustrationBoxH);
    } catch {
      ctx.fillStyle = "rgba(0,0,0,0.35)";
      ctx.fillRect(contentX, illustrationBoxY, contentW, illustrationBoxH);
    }
    ctx.restore();

    ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
    ctx.lineWidth = 2;
    drawRoundedRect(ctx, contentX, illustrationBoxY, contentW, illustrationBoxH, 24, false, true);

    const infoBoxY = infoTop + 8;
    const infoBoxH = infoHeight - 16;
    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    drawRoundedRect(ctx, contentX, infoBoxY, contentW, infoBoxH, 18, true, false);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, contentX, infoBoxY, contentW, infoBoxH, 18, false, true);

    ctx.fillStyle = "#f8fafc";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    // 情報欄は3スロット固定。3行目(学習)だけ2行まで許可してはみ出しを抑える。
    const infoSlotHeights = [
      Math.round(infoBoxH * 0.24),
      Math.round(infoBoxH * 0.24),
      infoBoxH - Math.round(infoBoxH * 0.24) * 2,
    ];
    let infoCursorY = infoBoxY;
    model.infoLines.forEach((line, index) => {
      const slotHeight = infoSlotHeights[index] || infoSlotHeights[2];
      const maxLines = index === 2 ? 2 : 1;
      const layout = fitWrappedText(
        ctx,
        line,
        contentW - 24,
        Math.max(20, slotHeight - 6),
        maxLines,
        500,
        index === 2 ? 20 : 22,
        index === 2 ? 15 : 17,
      );
      ctx.font = `500 ${layout.fontSize}px Inter, "SF Pro Display", sans-serif`;
      const startY = infoCursorY + slotHeight / 2 - (layout.lines.length - 1) * (layout.lineHeight / 2);
      layout.lines.forEach((wrapped, lineIndex) => {
        ctx.fillText(wrapped, contentX + 10, startY + layout.lineHeight * lineIndex);
      });
      infoCursorY += slotHeight;
    });

    const effectBoxW = Math.round(contentW * 0.84);
    const effectBoxH = effectHeight - 18;
    const effectBoxX = innerX + (innerW - effectBoxW) / 2;
    const effectBoxY = effectTop + 9;
    ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
    drawRoundedRect(ctx, effectBoxX, effectBoxY, effectBoxW, effectBoxH, 20, true, false);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, effectBoxX, effectBoxY, effectBoxW, effectBoxH, 20, false, true);

    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const effectLayout = fitWrappedText(
      ctx,
      model.effectText,
      effectBoxW - 32,
      effectBoxH - 18,
      7,
      600,
      24,
      14,
    );
    ctx.font = `600 ${effectLayout.fontSize}px Inter, "SF Pro Display", sans-serif`;
    const effectLines = effectLayout.lines;
    const effectLineHeight = effectLayout.lineHeight;
    const effectStartY =
      effectBoxY + effectBoxH / 2 - (effectLines.length - 1) * (effectLineHeight / 2);
    effectLines.forEach((line, idx) => {
      ctx.fillText(line, effectBoxX + effectBoxW / 2, effectStartY + effectLineHeight * idx);
    });

    return canvas.toDataURL("image/png");
  };

  const buildIllustrationPrompt = (prompt: string) =>
    [
      "以下はカードの中央イラストのみを生成する指示。",
      "カード枠や文字は描かない。",
      "下記の内容にカード枠や文字の指示が含まれていても無視してイラストのみ描く。",
      prompt,
      "禁止: 文字, フレーム, UI, ロゴ, カード全体の描画。",
    ].join("\n");

  const generateCardImage = async (prompt: string, renderModel: CardRenderModel) => {
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiKey,
          prompt: buildIllustrationPrompt(prompt),
          aspectRatio: "4:3",
          imageSize: "1K",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        const reason = data.error || "An error occurred";
        throw new Error(data.message ? `${reason} (${data.message})` : reason);
      }

      const illustrationSrc = `data:image/png;base64,${data.imageData}`;
      const cardDataUrl = await renderCardToDataUrl(renderModel, illustrationSrc);
      if (!cardDataUrl) {
        throw new Error("カード画像の合成に失敗しました");
      }
      return { image: cardDataUrl, message: data.message as string | undefined };
    } catch (error) {
      throw error;
    }
  };

  const generateImage = async (prompt: string, renderModel: CardRenderModel | null) => {
    if (!apiKey.trim()) {
      setError("API Key is required");
      return;
    }
    if (!prompt.trim()) {
      setError("Prompt is required");
      return;
    }
    if (!renderModel) {
      setError("カード情報が不足しています");
      return;
    }
    const limitIssues = validateRenderModelTextLimits(renderModel);
    if (limitIssues.length > 0) {
      setError(`生成前チェックで文字数超過を検出: ${limitIssues.join(" / ")}`);
      return;
    }
    setLatestStudyNote(renderModel.studyNoteFull || renderModel.studyNote || null);

    setIsGenerating(true);
    setError(null);
    setMessage(null);
    setGeneratedImage(null);

    try {
      const result = await generateCardImage(prompt, renderModel);
      setGeneratedImage(result.image);
      if (result.message) setMessage(result.message);
    } catch (err) {
      setError(`Error: ${err instanceof Error ? err.message : "Unknown error"}`);
    } finally {
      setIsGenerating(false);
    }
  };

  // Substance handlers
  const handleGeneratePrompt = () => {
    if (!substanceData.name.trim()) {
      setError("物質名を入力してください");
      return;
    }
    const dangerousData = toDangerousGoodsCardData(substanceData);
    setGeneratedPrompt(generateDangerousIllustrationPrompt(dangerousData));
    setError(null);
  };

  const loadSampleSubstance = (index: number) => {
    const d = sampleDangerousGoods[index];
    setSubstanceData({
      name: d.name,
      classification: d.classification,
      flashPoint: d.flashPoint,
      ignitionPoint: d.ignitionPoint,
      boilingPoint: d.boilingPoint,
      specificGravity: d.specificGravity,
      vaporGravity: d.vaporGravity,
      waterSoluble: d.waterSoluble,
      designatedQuantity: d.designatedQuantity,
      specialNotes: d.gameEffect,
    });
  };

  // Extinguish handlers
  const handleGenerateExtinguishPrompt = () => {
    if (!extinguishCardData.name.trim()) {
      setError("消火器具名を入力してください");
      return;
    }
    setExtinguishPrompt(generateExtinguishIllustrationPrompt(extinguishCardData));
    setError(null);
  };

  const loadSampleExtinguish = (index: number) => {
    setExtinguishCardData({ ...sampleExtinguishData[index] });
  };

  // Transport handlers
  const handleGenerateTransportPrompt = () => {
    if (!transportData.name.trim()) {
      setError("カード名を入力してください");
      return;
    }
    setTransportPrompt(generateTransportIllustrationPrompt(transportData));
    setError(null);
  };

  const loadSampleTransport = (index: number) => {
    setTransportData({ ...sampleTransportData[index] });
  };

  // Regulation handlers
  const handleGenerateRegulationPrompt = () => {
    if (!regulationCardData.name.trim()) {
      setError("カード名を入力してください");
      return;
    }
    setRegulationPrompt(generateRegulationIllustrationPrompt(regulationCardData));
    setError(null);
  };

  const loadSampleRegulation = (index: number) => {
    setRegulationCardData({ ...sampleRegulationData[index] });
  };

  const bulkTypeLabel: Record<BulkCsvType, string> = {
    dangerous: "危険物",
    extinguish: "消火",
    transport: "運搬",
    regulation: "法令",
  };

  const downloadBulkTemplate = (type: BulkCsvType) => {
    const csv = `\uFEFF${createBulkCsvTemplate(type)}`;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `hazmat_${type}_template.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleBulkUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const parsed = parseBulkCsv(text);
      const limitViolations = parsed.rows
        .map((draft) => ({ draft, issues: validateRenderModelTextLimits(draft.renderModel) }))
        .filter((item) => item.issues.length > 0);
      const issueMap = new Map(limitViolations.map((item) => [item.draft.id, item.issues]));
      const draftsWithWarnings = parsed.rows.map((draft) => {
        const issues = issueMap.get(draft.id);
        if (!issues) return draft;
        return {
          ...draft,
          warnings: [...(draft.warnings || []), ...issues.map((issue) => `要調整: ${issue}`)],
        };
      });
      setBulkType(parsed.type);
      setBulkDrafts(draftsWithWarnings);
      setBulkWarnings(
        limitViolations.length > 0
          ? [...parsed.warnings, `${limitViolations.length}件で文字数超過を検出しました。修正後に発行してください。`]
          : parsed.warnings,
      );
      setBulkConfirmChecked(false);
      setBulkResults([]);
      setBulkProgress(
        `${parsed.rows.length}件を読み込みました。${
          limitViolations.length > 0 ? "文字数超過を修正してから発行してください。" : "内容を確認してください。"
        }`,
      );
      setError(null);
      setMessage(null);
    } catch (err) {
      setBulkDrafts([]);
      setBulkWarnings([]);
      setBulkConfirmChecked(false);
      setBulkResults([]);
      setBulkProgress("");
      setError(err instanceof Error ? err.message : "CSVの読み込みに失敗しました");
    }
  };

  const generateBulkCards = async () => {
    if (!apiKey.trim()) {
      setError("API Key is required");
      return;
    }
    if (bulkDrafts.length === 0) {
      setError("先にCSVを読み込んでください");
      return;
    }
    if (!bulkConfirmChecked) {
      setError("内容確認のチェックを入れてください");
      return;
    }
    const limitViolations = bulkDrafts
      .map((draft) => ({ draft, issues: validateRenderModelTextLimits(draft.renderModel) }))
      .filter((item) => item.issues.length > 0);
    if (limitViolations.length > 0) {
      const preview = limitViolations
        .slice(0, 3)
        .map((item) => `${item.draft.sourceRow}行目(${item.draft.name}): ${item.issues.join("、")}`)
        .join(" / ");
      setError(
        `文字数上限を超えるカードがあるため一括発行を停止しました。${preview}${
          limitViolations.length > 3 ? ` / 他${limitViolations.length - 3}件` : ""
        }`,
      );
      return;
    }

    setIsBulkGenerating(true);
    setIsGenerating(false);
    setError(null);
    setMessage(null);
    setBulkResults([]);
    setGeneratedImage(null);

    const results: Array<{ name: string; image: string; cardType: BulkCsvType }> = [];

    try {
      for (let i = 0; i < bulkDrafts.length; i += 1) {
        const draft = bulkDrafts[i];
        setBulkProgress(`生成中 ${i + 1}/${bulkDrafts.length}: ${draft.name}`);
        const result = await generateCardImage(draft.illustrationPrompt, draft.renderModel);
        results.push({ name: draft.name, image: result.image, cardType: draft.cardType });
      }
      setBulkResults(results);
      if (results.length > 0) {
        setGeneratedImage(results[results.length - 1].image);
        const lastDraft = bulkDrafts[Math.max(0, results.length - 1)];
        setLatestStudyNote(lastDraft?.fact || null);
      }
      setBulkProgress(`一括発行が完了しました (${results.length}件)`);
    } catch (err) {
      setError(`一括発行中にエラー: ${err instanceof Error ? err.message : "Unknown error"}`);
    } finally {
      setIsBulkGenerating(false);
    }
  };

  const downloadAllBulkResults = async () => {
    if (bulkResults.length === 0 || isBulkDownloading) return;

    setIsBulkDownloading(true);
    setError(null);
    setMessage(null);
    setBulkProgress(`ZIP作成中... 0% (${bulkResults.length}件)`);

    try {
      const zip = new JSZip();
      for (let i = 0; i < bulkResults.length; i += 1) {
        const result = bulkResults[i];
        const base64 = extractPngBase64(result.image);
        if (!base64) {
          throw new Error(`${i + 1}件目の画像データ形式が不正です`);
        }
        const safeName = sanitizeFileName(result.name);
        const fileName = `${String(i + 1).padStart(3, "0")}_${result.cardType}_${safeName}.png`;
        zip.file(fileName, base64, { base64: true });
      }

      const blob = await zip.generateAsync(
        { type: "blob", compression: "DEFLATE", compressionOptions: { level: 6 } },
        (metadata) => {
          setBulkProgress(`ZIP作成中... ${Math.round(metadata.percent)}% (${bulkResults.length}件)`);
        },
      );
      const timestamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\..+/, "");
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `hazmat_bulk_${timestamp}.zip`;
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1500);
      setBulkProgress(`ZIPダウンロードを開始しました (${bulkResults.length}件)`);
    } catch (err) {
      setError(`全件ダウンロードに失敗: ${err instanceof Error ? err.message : "Unknown error"}`);
    } finally {
      setIsBulkDownloading(false);
    }
  };

  const downloadImage = () => {
    const target = showCardBack ? cardBackImage : generatedImage;
    if (!target) return;
    const link = document.createElement("a");
    link.href = target;
    link.download = `hazmat_card_${Date.now()}.png`;
    link.click();
  };

  const tabs = [
    { id: "templates" as Tab, label: "テンプレート", icon: IconTemplate },
    { id: "substance" as Tab, label: "危険物", icon: IconFlask },
    { id: "extinguish" as Tab, label: "消火", icon: IconFire },
    { id: "transport" as Tab, label: "運搬", icon: IconTruck },
    { id: "regulation" as Tab, label: "法令", icon: IconDocument },
    { id: "bulk" as Tab, label: "一括発行", icon: IconStack },
    { id: "direct" as Tab, label: "直接入力", icon: IconPencil },
  ];

  return (
    <div className="min-h-screen">
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 ambient-glow rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 ambient-glow-secondary rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header id="header-area" className="relative header-bar">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center shadow-glow pulse-glow">
                <IconFire />
              </div>
              <div>
                <h1 className="text-xl font-semibold tracking-tight">危険物カード生成ツール</h1>
                <p className="text-sm text-muted">危険物取扱者試験 学習支援</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div id="api-key-input" className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted">
                  <IconKey />
                </div>
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="APIキーを入力"
                  className="premium-input pl-10 pr-4 w-64 text-sm"
                />
              </div>
              {apiKey && (
                <span className="status-badge-success">
                  <IconCheck />
                  接続済み
                </span>
              )}
              <button
                id="card-back-btn"
                onClick={() => setShowCardBackModal(true)}
                className="theme-toggle relative"
                title="カード裏面デザイン"
              >
                <IconCardBack />
                {cardBackImage && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-surface-950" />
                )}
              </button>
              <button
                id="help-btn"
                onClick={startTour}
                className="theme-toggle"
                title="使い方ガイド"
              >
                <IconHelp />
              </button>
              <button
                onClick={toggleTheme}
                className="theme-toggle"
                title={isDarkMode ? "ライトモードに切り替え" : "ダークモードに切り替え"}
              >
                {isDarkMode ? <IconSun /> : <IconMoon />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-6 py-[var(--space-section)]">
        {/* Tab Navigation */}
        <nav id="tab-nav" className="glass-card p-2 mb-[var(--space-section)] inline-flex gap-1 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={activeTab === tab.id ? "tab-button-active" : "tab-button"}
            >
              <span className="flex items-center gap-2">
                <tab.icon />
                <span className="hidden sm:inline">{tab.label}</span>
              </span>
            </button>
          ))}
        </nav>

        <div className="grid lg:grid-cols-5 gap-[var(--space-section)]">
          {/* Input Panel */}
          <div id="input-panel" className="lg:col-span-3 space-y-[var(--space-card)]">
            {/* Templates Tab */}
            {activeTab === "templates" && (
              <div className="glass-card p-[var(--space-card)] animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">テンプレート選択</h2>
                  <div className="flex gap-2 flex-wrap">
                    {(Object.keys(allTemplates) as TemplateCategory[]).map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={selectedCategory === cat ? "category-filter-active" : "category-filter-default"}
                      >
                        {categoryConfig[cat].label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
                  {allTemplates[selectedCategory].map((template: PromptTemplate, i: number) => (
                    <div
                      key={i}
                      onClick={() => {
                        setDirectPrompt(template.prompt);
                        setSelectedTemplate(template);
                      }}
                      className={`stagger-item group hover-lift ${
                        directPrompt === template.prompt ? "template-card-active" : "template-card-default"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-strong transition-colors">{template.name}</span>
                        <span className={`text-xs ${categoryConfig[selectedCategory].color} transition-all group-hover:scale-105`}>
                          {template.category}
                        </span>
                      </div>
                      <p className="text-xs text-muted line-clamp-2 transition-colors">{template.prompt}</p>
                    </div>
                  ))}
                </div>

                {directPrompt && (
                  <div className="mt-6 pt-6 section-divider">
                    <label className="block label-text mb-2">
                      選択したプロンプト
                    </label>
                    <textarea
                      value={directPrompt}
                      onChange={(e) => setDirectPrompt(e.target.value)}
                      rows={4}
                      className="premium-input resize-none text-sm font-mono"
                    />
                    <button
                      onClick={() => generateImage(directPrompt, buildTemplateRenderModel(selectedTemplate))}
                      disabled={isGenerating}
                      className="premium-button-primary w-full mt-4 flex items-center justify-center gap-2"
                    >
                      <IconSparkle />
                      {isGenerating ? "生成中..." : "カード画像を生成"}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Substance (Dangerous Goods) Tab */}
            {activeTab === "substance" && (
              <div className="glass-card p-[var(--space-card)] animate-fade-in">
                <h2 className="text-lg font-semibold mb-6">危険物カード（攻撃）</h2>

                <div className="flex flex-wrap gap-2 mb-6">
                  {sampleDangerousGoods.map((sample, i) => (
                    <button
                      key={i}
                      onClick={() => loadSampleSubstance(i)}
                      style={{ backgroundColor: `${classificationColorMap[sample.classification]}20`, borderColor: `${classificationColorMap[sample.classification]}40` }}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg border transition-all hover:opacity-80"
                    >
                      {sample.name}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block label-text mb-1.5">物質名 *</label>
                    <input
                      type="text"
                      value={substanceData.name}
                      onChange={(e) =>
                        setSubstanceData({ ...substanceData, name: clampByLimit(e.target.value, TEXT_LIMITS.cardName) })
                      }
                      maxLength={TEXT_LIMITS.cardName}
                      placeholder="例: ガソリン"
                      className="premium-input"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block label-text mb-1.5">分類（第4類危険物）</label>
                    <select
                      value={substanceData.classification}
                      onChange={(e) => setSubstanceData({ ...substanceData, classification: e.target.value as Classification })}
                      className="premium-input"
                    >
                      {classificationOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {[
                    { label: "引火点", key: "flashPoint", unit: "℃" },
                    { label: "発火点", key: "ignitionPoint", unit: "℃" },
                    { label: "沸点", key: "boilingPoint", unit: "℃" },
                    { label: "比重（液比重）", key: "specificGravity", unit: "" },
                    { label: "蒸気比重", key: "vaporGravity", unit: "" },
                    { label: "指定数量", key: "designatedQuantity", unit: "L" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block label-text mb-1.5">
                        {field.label} {field.unit && <span className="text-subtle">({field.unit})</span>}
                      </label>
                      <input
                        type="text"
                        value={substanceData[field.key as keyof SubstanceData]}
                        onChange={(e) => setSubstanceData({ ...substanceData, [field.key]: e.target.value })}
                        className="premium-input"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block label-text mb-1.5">水溶性</label>
                    <select
                      value={substanceData.waterSoluble}
                      onChange={(e) => setSubstanceData({ ...substanceData, waterSoluble: e.target.value as "不溶" | "可溶" | "一部可溶" })}
                      className="premium-input"
                    >
                      <option value="不溶">非水溶性（不溶）</option>
                      <option value="可溶">水溶性（可溶）</option>
                      <option value="一部可溶">一部可溶</option>
                    </select>
                  </div>

                  <div className="col-span-2">
                    <label className="block label-text mb-1.5">ゲーム効果（カードの効果テキスト）</label>
                    <textarea
                      value={substanceData.specialNotes}
                      onChange={(e) =>
                        setSubstanceData({ ...substanceData, specialNotes: clampByLimit(e.target.value, TEXT_LIMITS.effectText) })
                      }
                      maxLength={TEXT_LIMITS.effectText}
                      placeholder="例: 毎ターン1ダメージの毒を与える"
                      rows={2}
                      className="premium-input resize-none"
                    />
                    <p className="text-[11px] text-subtle mt-1">上限 {TEXT_LIMITS.effectText} 文字</p>
                  </div>
                </div>

                <button
                  onClick={handleGeneratePrompt}
                  className="premium-button-secondary w-full mt-6"
                >
                  プロンプト生成
                </button>

                {generatedPrompt && (
                  <div className="mt-6 pt-6 section-divider">
                    <label className="block label-text mb-2">生成されたプロンプト</label>
                    <textarea
                      value={generatedPrompt}
                      onChange={(e) => setGeneratedPrompt(e.target.value)}
                      rows={4}
                      className="premium-input resize-none text-sm font-mono"
                    />
                    <button
                      onClick={() =>
                        generateImage(
                          generatedPrompt,
                          buildDangerousCardRenderModel(toDangerousGoodsCardData(substanceData)),
                        )
                      }
                      disabled={isGenerating}
                      className="premium-button-primary w-full mt-4 flex items-center justify-center gap-2"
                    >
                      <IconSparkle />
                      {isGenerating ? "生成中..." : "カード画像を生成"}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Extinguish Tab (new equipment-based) */}
            {activeTab === "extinguish" && (
              <div className="glass-card p-[var(--space-card)] animate-fade-in">
                <h2 className="text-lg font-semibold mb-6">消火カード（防御）</h2>

                <div className="flex flex-wrap gap-2 mb-6">
                  {sampleExtinguishData.map((sample, i) => (
                    <button
                      key={i}
                      onClick={() => loadSampleExtinguish(i)}
                      className="sample-button-blue"
                    >
                      {sample.name}
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block label-text mb-1.5">消火器具名 *</label>
                    <input
                      type="text"
                      value={extinguishCardData.name}
                      onChange={(e) =>
                        setExtinguishCardData({ ...extinguishCardData, name: clampByLimit(e.target.value, TEXT_LIMITS.cardName) })
                      }
                      maxLength={TEXT_LIMITS.cardName}
                      placeholder="例: 泡消火器"
                      className="premium-input"
                    />
                  </div>

                  <div>
                    <label className="block label-text mb-1.5">種別</label>
                    <select
                      value={extinguishCardData.category}
                      onChange={(e) => setExtinguishCardData({ ...extinguishCardData, category: e.target.value as ExtinguishCategory })}
                      className="premium-input"
                    >
                      {extinguishCategoryOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setExtinguishCardData({ ...extinguishCardData, canUseOnClass4: !extinguishCardData.canUseOnClass4 })}
                      className={extinguishCardData.canUseOnClass4 ? "method-button-active flex-1" : "method-button-inactive flex-1"}
                    >
                      第4類危険物に使用 {extinguishCardData.canUseOnClass4 ? "可" : "不可"}
                    </button>
                  </div>

                  <div>
                    <label className="block label-text mb-1.5">カードの効果</label>
                    <textarea
                      value={extinguishCardData.effect}
                      onChange={(e) =>
                        setExtinguishCardData({ ...extinguishCardData, effect: clampByLimit(e.target.value, TEXT_LIMITS.effectText) })
                      }
                      maxLength={TEXT_LIMITS.effectText}
                      placeholder="例: ダメージを無効化し+2"
                      rows={2}
                      className="premium-input resize-none"
                    />
                    <p className="text-[11px] text-subtle mt-1">上限 {TEXT_LIMITS.effectText} 文字</p>
                  </div>

                  <div>
                    <label className="block label-text mb-1.5">事実根拠</label>
                    <input
                      type="text"
                      value={extinguishCardData.factBasis}
                      onChange={(e) =>
                        setExtinguishCardData({
                          ...extinguishCardData,
                          factBasis: clampWithAlert(e.target.value, TEXT_LIMITS.basisText, "事実根拠"),
                        })
                      }
                      maxLength={TEXT_LIMITS.basisText}
                      placeholder="例: 第4類危険物に水を使用した場合火災が広がる"
                      className="premium-input"
                    />
                    <p className={`text-[11px] mt-1 ${getCountTone(extinguishCardData.factBasis.length, TEXT_LIMITS.basisText)}`}>
                      {extinguishCardData.factBasis.length}/{TEXT_LIMITS.basisText}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleGenerateExtinguishPrompt}
                  className="premium-button-secondary w-full mt-6"
                >
                  プロンプト生成
                </button>

                {extinguishPrompt && (
                  <div className="mt-6 pt-6 section-divider">
                    <label className="block label-text mb-2">生成されたプロンプト</label>
                    <textarea
                      value={extinguishPrompt}
                      onChange={(e) => setExtinguishPrompt(e.target.value)}
                      rows={4}
                      className="premium-input resize-none text-sm font-mono"
                    />
                    <button
                      onClick={() => generateImage(extinguishPrompt, buildExtinguishCardRenderModel(extinguishCardData))}
                      disabled={isGenerating}
                      className="premium-button-primary w-full mt-4 flex items-center justify-center gap-2"
                    >
                      <IconSparkle />
                      {isGenerating ? "生成中..." : "カード画像を生成"}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Transport Tab (new) */}
            {activeTab === "transport" && (
              <div className="glass-card p-[var(--space-card)] animate-fade-in">
                <h2 className="text-lg font-semibold mb-6">運搬カード（強化）</h2>

                <div className="flex flex-wrap gap-2 mb-6">
                  {sampleTransportData.map((sample, i) => (
                    <button
                      key={i}
                      onClick={() => loadSampleTransport(i)}
                      className="sample-button-teal"
                    >
                      {sample.name}
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block label-text mb-1.5">カード名 *</label>
                    <input
                      type="text"
                      value={transportData.name}
                      onChange={(e) => setTransportData({ ...transportData, name: clampByLimit(e.target.value, TEXT_LIMITS.cardName) })}
                      maxLength={TEXT_LIMITS.cardName}
                      placeholder="例: 指定容器の密閉"
                      className="premium-input"
                    />
                  </div>

                  <div>
                    <label className="block label-text mb-1.5">効果内容（強化ポイント）</label>
                    <textarea
                      value={transportData.effect}
                      onChange={(e) =>
                        setTransportData({ ...transportData, effect: clampByLimit(e.target.value, TEXT_LIMITS.effectText) })
                      }
                      maxLength={TEXT_LIMITS.effectText}
                      placeholder="例: 次の自分の攻撃ダメージを+2"
                      rows={2}
                      className="premium-input resize-none"
                    />
                    <p className="text-[11px] text-subtle mt-1">上限 {TEXT_LIMITS.effectText} 文字</p>
                  </div>

                  <div>
                    <label className="block label-text mb-1.5">事実根拠</label>
                    <input
                      type="text"
                      value={transportData.factBasis}
                      onChange={(e) =>
                        setTransportData({
                          ...transportData,
                          factBasis: clampWithAlert(e.target.value, TEXT_LIMITS.basisText, "事実根拠"),
                        })
                      }
                      maxLength={TEXT_LIMITS.basisText}
                      placeholder="例: 容器を密閉し、蒸気の漏れを防いで安全に運ぶ"
                      className="premium-input"
                    />
                    <p className={`text-[11px] mt-1 ${getCountTone(transportData.factBasis.length, TEXT_LIMITS.basisText)}`}>
                      {transportData.factBasis.length}/{TEXT_LIMITS.basisText}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleGenerateTransportPrompt}
                  className="premium-button-secondary w-full mt-6"
                >
                  プロンプト生成
                </button>

                {transportPrompt && (
                  <div className="mt-6 pt-6 section-divider">
                    <label className="block label-text mb-2">生成されたプロンプト</label>
                    <textarea
                      value={transportPrompt}
                      onChange={(e) => setTransportPrompt(e.target.value)}
                      rows={4}
                      className="premium-input resize-none text-sm font-mono"
                    />
                    <button
                      onClick={() => generateImage(transportPrompt, buildTransportCardRenderModel(transportData))}
                      disabled={isGenerating}
                      className="premium-button-primary w-full mt-4 flex items-center justify-center gap-2"
                    >
                      <IconSparkle />
                      {isGenerating ? "生成中..." : "カード画像を生成"}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Regulation Tab (simplified) */}
            {activeTab === "regulation" && (
              <div className="glass-card p-[var(--space-card)] animate-fade-in">
                <h2 className="text-lg font-semibold mb-6">法令カード（妨害）</h2>

                <div className="flex flex-wrap gap-2 mb-6">
                  {sampleRegulationData.map((sample, i) => (
                    <button
                      key={i}
                      onClick={() => loadSampleRegulation(i)}
                      className="sample-button-amber"
                    >
                      {sample.name}
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block label-text mb-1.5">カード名 *</label>
                    <input
                      type="text"
                      value={regulationCardData.name}
                      onChange={(e) =>
                        setRegulationCardData({ ...regulationCardData, name: clampByLimit(e.target.value, TEXT_LIMITS.cardName) })
                      }
                      maxLength={TEXT_LIMITS.cardName}
                      placeholder="例: 使用停止令"
                      className="premium-input"
                    />
                  </div>

                  <div>
                    <label className="block label-text mb-1.5">妨害効果</label>
                    <textarea
                      value={regulationCardData.effect}
                      onChange={(e) =>
                        setRegulationCardData({ ...regulationCardData, effect: clampByLimit(e.target.value, TEXT_LIMITS.effectText) })
                      }
                      maxLength={TEXT_LIMITS.effectText}
                      placeholder="例: 次のターン相手は危険物カードを出してはいけない"
                      rows={2}
                      className="premium-input resize-none"
                    />
                    <p className="text-[11px] text-subtle mt-1">上限 {TEXT_LIMITS.effectText} 文字</p>
                  </div>

                  <div>
                    <label className="block label-text mb-1.5">法的根拠</label>
                    <input
                      type="text"
                      value={regulationCardData.legalBasis}
                      onChange={(e) =>
                        setRegulationCardData({
                          ...regulationCardData,
                          legalBasis: clampWithAlert(e.target.value, TEXT_LIMITS.basisText, "法的根拠"),
                        })
                      }
                      maxLength={TEXT_LIMITS.basisText}
                      placeholder="例: 法令条の規定を破った際に発令される行政処分"
                      className="premium-input"
                    />
                    <p className={`text-[11px] mt-1 ${getCountTone(regulationCardData.legalBasis.length, TEXT_LIMITS.basisText)}`}>
                      {regulationCardData.legalBasis.length}/{TEXT_LIMITS.basisText}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleGenerateRegulationPrompt}
                  className="premium-button-secondary w-full mt-6"
                >
                  プロンプト生成
                </button>

                {regulationPrompt && (
                  <div className="mt-6 pt-6 section-divider">
                    <label className="block label-text mb-2">生成されたプロンプト</label>
                    <textarea
                      value={regulationPrompt}
                      onChange={(e) => setRegulationPrompt(e.target.value)}
                      rows={4}
                      className="premium-input resize-none text-sm font-mono"
                    />
                    <button
                      onClick={() => generateImage(regulationPrompt, buildRegulationCardRenderModel(regulationCardData))}
                      disabled={isGenerating}
                      className="premium-button-primary w-full mt-4 flex items-center justify-center gap-2"
                    >
                      <IconSparkle />
                      {isGenerating ? "生成中..." : "カード画像を生成"}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Bulk Tab */}
            {activeTab === "bulk" && (
              <div className="glass-card p-[var(--space-card)] animate-fade-in">
                <h2 className="text-lg font-semibold mb-2">CSV一括発行</h2>
                <p className="text-sm text-muted mb-6">
                  CSVを読み込むと、ローカルの判定ルールでカード効果の文面を整頓し、危険物取扱者試験向けの事実補足を自動追加します（この判定自体に外部APIは使いません）。確認後に一括発行します。
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block label-text mb-1.5">カード種別</label>
                    <select
                      value={bulkType}
                      onChange={(e) => {
                        setBulkType(e.target.value as BulkCsvType);
                        setBulkDrafts([]);
                        setBulkResults([]);
                        setBulkWarnings([]);
                        setBulkConfirmChecked(false);
                        setBulkProgress("");
                      }}
                      className="premium-input"
                    >
                      <option value="dangerous">危険物</option>
                      <option value="extinguish">消火</option>
                      <option value="transport">運搬</option>
                      <option value="regulation">法令</option>
                    </select>
                  </div>
                  <div className="flex flex-col justify-end gap-3">
                    <button
                      onClick={() => downloadBulkTemplate(bulkType)}
                      className="premium-button-secondary w-full flex items-center justify-center gap-2"
                    >
                      <IconDownload />
                      テンプレートCSVをダウンロード
                    </button>
                    <button
                      onClick={() => bulkInputRef.current?.click()}
                      className="premium-button-primary w-full flex items-center justify-center gap-2"
                    >
                      <IconUpload />
                      CSVをアップロード
                    </button>
                    <input
                      ref={bulkInputRef}
                      type="file"
                      accept=".csv,text/csv"
                      onChange={handleBulkUpload}
                      className="hidden"
                    />
                  </div>
                </div>

                {bulkProgress && (
                  <p className="text-xs text-muted mb-4">{bulkProgress}</p>
                )}

                {bulkWarnings.length > 0 && (
                  <div className="mb-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <p className="text-sm font-medium mb-1">読み込み時の注意</p>
                    {bulkWarnings.map((warning, index) => (
                      <p key={index} className="text-xs text-subtle">{warning}</p>
                    ))}
                  </div>
                )}

                {bulkDrafts.length > 0 && (
                  <div className="space-y-3 mb-5 max-h-[360px] overflow-y-auto custom-scrollbar pr-2">
                    {bulkDrafts.map((draft) => (
                      <div key={draft.id} className="p-4 rounded-xl border border-surface-700/60 bg-surface-900/40">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm font-semibold">{draft.name}</p>
                          <span className="text-xs text-muted">{draft.sourceRow}行目 / {bulkTypeLabel[draft.cardType]}</span>
                        </div>
                        <p className="text-xs text-subtle">原文効果: {draft.originalEffect || "（未入力）"}</p>
                        <p className="text-xs text-muted mt-1">整頓後: {draft.polishedEffect}</p>
                        <p className="text-xs text-subtle mt-1">学習補足: {draft.fact}</p>
                        {draft.warnings && draft.warnings.length > 0 && (
                          <p className="text-xs text-danger-subtle mt-1">{draft.warnings.join(" / ")}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <label className="flex items-start gap-2 mb-4 text-sm text-muted">
                  <input
                    type="checkbox"
                    checked={bulkConfirmChecked}
                    onChange={(e) => setBulkConfirmChecked(e.target.checked)}
                    className="mt-0.5"
                  />
                  自動補完された内容を確認しました。この内容で一括発行します。
                </label>

                <button
                  onClick={generateBulkCards}
                  disabled={isBulkGenerating || bulkDrafts.length === 0 || !bulkConfirmChecked}
                  className="premium-button-primary w-full flex items-center justify-center gap-2"
                >
                  <IconSparkle />
                  {isBulkGenerating ? "一括発行中..." : `確認して一括発行 (${bulkDrafts.length}件)`}
                </button>

                {bulkResults.length > 0 && (
                  <div className="mt-6 pt-6 section-divider">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-semibold">一括発行結果</h3>
                      <button
                        onClick={downloadAllBulkResults}
                        disabled={isBulkDownloading}
                        className="category-filter-active text-xs"
                      >
                        {isBulkDownloading ? "ZIP作成中..." : "全件ダウンロード（ZIP）"}
                      </button>
                    </div>
                    <div className="space-y-2 max-h-[220px] overflow-y-auto custom-scrollbar pr-2">
                      {bulkResults.map((result, index) => (
                        <div key={`${result.name}-${index}`} className="flex items-center justify-between p-2 rounded-lg bg-surface-900/40 border border-surface-700/60">
                          <p className="text-xs text-muted">{index + 1}. {result.name}</p>
                          <button
                            onClick={() => {
                              const link = document.createElement("a");
                              link.href = result.image;
                              link.download = `hazmat_${result.cardType}_${index + 1}.png`;
                              link.click();
                            }}
                            className="category-filter-default text-xs"
                          >
                            保存
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Direct Tab */}
            {activeTab === "direct" && (
              <div className="glass-card p-[var(--space-card)] animate-fade-in">
                <h2 className="text-lg font-semibold mb-6">プロンプト直接入力</h2>

                <div>
                  <label className="block label-text mb-2">カスタムプロンプト</label>
                  <textarea
                    value={directPrompt}
                    onChange={(e) => setDirectPrompt(e.target.value)}
                    placeholder="プロンプトを直接入力してください..."
                    rows={10}
                    className="premium-input resize-none font-mono text-sm"
                  />
                </div>

                <button
                  onClick={() => generateImage(directPrompt, buildDirectRenderModel())}
                  disabled={isGenerating || !directPrompt.trim()}
                  className="premium-button-primary w-full mt-6 flex items-center justify-center gap-2"
                >
                  <IconSparkle />
                  {isGenerating ? "生成中..." : "カード画像を生成"}
                </button>
              </div>
            )}
          </div>

          {/* Output Panel */}
          <div id="output-panel" className="lg:col-span-2">
            <div className="glass-card p-[var(--space-card)] sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">出力結果</h2>
                {generatedImage && (
                  <button
                    onClick={() => setShowCardBack(!showCardBack)}
                    className={showCardBack ? "category-filter-active text-xs" : "category-filter-default text-xs"}
                  >
                    {showCardBack ? "表面を表示" : "裏面を表示"}
                  </button>
                )}
              </div>

              {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <p className="text-sm text-danger font-medium">{error}</p>
                  {message && <p className="text-xs text-danger-subtle mt-1">{message}</p>}
                </div>
              )}

              {(isGenerating || isBulkGenerating) && (
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="relative mb-6">
                    <div className="loading-spinner" />
                    <div className="absolute inset-0 rounded-full bg-accent-500/20 animate-ping" />
                  </div>
                  <p className="text-strong text-sm font-medium animate-pulse">
                    {isBulkGenerating ? "一括発行中..." : "画像を生成中..."}
                  </p>
                  <p className="text-muted text-xs mt-2">
                    {isBulkGenerating ? bulkProgress || "カードを順次生成しています" : "AIがカード画像を作成しています"}
                  </p>
                  <div className="mt-6 w-48 h-1 bg-surface-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-accent-500 to-accent-400 shimmer-bg rounded-full" style={{ width: "60%" }} />
                  </div>
                </div>
              )}

              {generatedImage && !isGenerating && !isBulkGenerating && (
                <div className="space-y-4 animate-fade-in">
                  <div className="relative output-panel group hover-lift">
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    {showCardBack ? (
                      <img
                        src={cardBackImage}
                        alt="Card back design"
                        className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <img
                        src={generatedImage}
                        alt="Generated card"
                        className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    )}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20">
                      <div className="status-badge-success">
                        <IconCheck />
                        {showCardBack ? "裏面デザイン" : "生成完了"}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={downloadImage}
                    className="premium-button-secondary w-full flex items-center justify-center gap-2 group"
                  >
                    <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                      <IconDownload />
                    </span>
                    画像をダウンロード
                  </button>
                  {latestStudyNote && !showCardBack && (
                    <div className="p-3 rounded-xl bg-surface-900/50 border border-surface-700/60">
                      <p className="text-xs font-medium text-strong mb-1">学習補足（全文）</p>
                      <p className="text-xs text-subtle whitespace-pre-wrap">{latestStudyNote}</p>
                    </div>
                  )}
                  {message && (
                    <p className="text-xs text-muted text-center">{message}</p>
                  )}
                </div>
              )}

              {!generatedImage && !isGenerating && !isBulkGenerating && !error && (
                <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
                  <div className="relative empty-state-icon mb-4 group cursor-default">
                    <div className="absolute inset-0 rounded-2xl bg-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="text-muted group-hover:text-accent-400 transition-colors duration-300">
                      <IconSparkle />
                    </div>
                  </div>
                  <p className="text-strong text-sm">画像がまだ生成されていません</p>
                  <p className="text-muted text-xs mt-1">テンプレートを選択するか、プロンプトを入力してください</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Card Back Modal */}
      {showCardBackModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowCardBackModal(false)} />
          <div className="relative glass-card p-[var(--space-card)] w-full max-w-md animate-fade-in">
            <h3 className="text-lg font-semibold mb-4">カード裏面デザイン</h3>
            <p className="text-sm text-muted mb-4">
              全カード共通の裏面デザインです。カスタム画像をアップロードして差し替えることもできます。
            </p>

            <div className="space-y-4">
              <div className="relative output-panel overflow-hidden">
                <img src={cardBackImage} alt="Card back" className="w-full" />
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-xs px-2.5 py-1 rounded-full ${isCustomCardBack ? "bg-accent-500/15 text-accent-400" : "bg-surface-800 text-surface-200"}`}>
                  {isCustomCardBack ? "カスタム画像" : "デフォルトデザイン"}
                </span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => cardBackInputRef.current?.click()}
                  className="premium-button-secondary flex-1 flex items-center justify-center gap-2"
                >
                  <IconUpload />
                  カスタム画像をアップロード
                </button>
                {isCustomCardBack && (
                  <button
                    onClick={resetToDefaultCardBack}
                    className="premium-button-secondary flex items-center justify-center gap-2 px-4 text-danger hover-text-danger-strong"
                    title="デフォルトに戻す"
                  >
                    <IconTrash />
                  </button>
                )}
              </div>
            </div>

            <input
              ref={cardBackInputRef}
              type="file"
              accept="image/*"
              onChange={handleCardBackUpload}
              className="hidden"
            />

            <button
              onClick={() => setShowCardBackModal(false)}
              className="premium-button-secondary w-full mt-4"
            >
              閉じる
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative footer-bar mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between text-sm text-muted">
            <p>危険物カード生成ツール</p>
            <p>Powered by Google Gemini</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
