import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "危険物カード画像生成ツール",
  description: "AIを使って乙4危険物カードのイラストを作ろう",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
