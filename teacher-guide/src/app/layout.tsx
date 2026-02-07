import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import PageTransition from "@/components/PageTransition";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TCG-PBL 教員ガイド",
  description: "トレーディングカードゲーム形式で学ぶ工業系PBL教材の教員向けガイド。実践的な指導法、評価基準、教授法メモを提供します。",
  keywords: ["PBL", "プロジェクト型学習", "トレーディングカードゲーム", "工業教育", "教員ガイド"],
  authors: [{ name: "TCG-PBL プロジェクト" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="antialiased noise-overlay">
        <ThemeProvider>
          <PageTransition />
          <Navigation />
          <main className="min-h-screen pt-16 lg:pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
