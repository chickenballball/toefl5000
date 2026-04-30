import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VOCAB 5000 單字大師 - 掌握 5000+ 學術英語詞彙",
  description: "精選超過 5000 個學術英語核心詞彙，分級學習，科學記憶，助你高效掌握每一個單字。適合 TOEFL / IELTS / GRE 考生。",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
