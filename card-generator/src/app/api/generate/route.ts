import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { apiKey, prompt, aspectRatio, imageSize } = await request.json();

    if (!apiKey) {
      return NextResponse.json(
        { error: "APIキーが必要です" },
        { status: 400 }
      );
    }

    if (!prompt) {
      return NextResponse.json(
        { error: "プロンプトが必要です" },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenAI({ apiKey });

    const response = await genAI.models.generateContent({
      model: "gemini-3-pro-image-preview",
      contents: prompt,
      config: {
        responseModalities: ["Text", "Image"],
        imageConfig: {
          aspectRatio: aspectRatio || "2:3",
          imageSize: imageSize || "1K",
        },
      },
    });

    // 画像データを探す
    const candidates = response.candidates;
    if (!candidates || candidates.length === 0) {
      return NextResponse.json(
        { error: "画像を生成できませんでした。プロンプトを変えて試してみてください。" },
        { status: 400 }
      );
    }

    const parts = candidates[0].content?.parts;
    if (!parts) {
      return NextResponse.json(
        { error: "レスポンスにコンテンツがありません" },
        { status: 400 }
      );
    }

    let imageData: string | null = null;
    let textResponse: string | null = null;

    for (const part of parts) {
      if (part.inlineData) {
        imageData = part.inlineData.data ?? null;
      } else if (part.text) {
        textResponse = part.text;
      }
    }

    if (!imageData) {
      return NextResponse.json(
        {
          error: textResponse || "画像が生成されませんでした。プロンプトの内容を変えてみてください。",
          message: textResponse
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      imageData: imageData,
      message: textResponse,
    });
  } catch (error: unknown) {
    console.error("Error generating image:", error);

    // エラーメッセージを解析してわかりやすく表示
    let errorMessage = "不明なエラーが発生しました";
    let retryInfo = "";

    if (error instanceof Error) {
      const message = error.message;

      // クォータ制限エラー
      if (message.includes("429") || message.includes("RESOURCE_EXHAUSTED") || message.includes("quota")) {
        // リトライ時間を抽出
        const retryMatch = message.match(/retry in (\d+)/i);
        if (retryMatch) {
          retryInfo = `${retryMatch[1]}秒後に再試行してください。`;
        }

        errorMessage = "API利用制限に達しました。少し待ってからもう一度試してください。" +
          (retryInfo ? ` (${retryInfo})` : "");
      }
      // 認証エラー
      else if (message.includes("401") || message.includes("API_KEY") || message.includes("UNAUTHENTICATED")) {
        errorMessage = "APIキーが無効です。正しいAPIキーを入力してください。";
      }
      // 権限エラー
      else if (message.includes("403") || message.includes("PERMISSION_DENIED")) {
        errorMessage = "このAPIキーには画像生成の権限がありません。";
      }
      // 安全性フィルター
      else if (message.includes("SAFETY") || message.includes("blocked")) {
        errorMessage = "安全上の理由で画像を生成できませんでした。プロンプトの内容を変えてみてください。";
      }
      // その他のエラー
      else {
        errorMessage = `エラーが発生しました: ${message.substring(0, 200)}`;
      }
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
