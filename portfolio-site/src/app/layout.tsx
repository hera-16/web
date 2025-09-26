import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio | hera-16",
    template: "%s | hera-16 Portfolio"
  },
  description: "Web開発者のポートフォリオサイト。かなむすび公式サイト、ポケモン図鑑、勤怠管理システムなど、実際のプロジェクトを紹介しています。",
  keywords: ["Web開発", "フロントエンド", "JavaScript", "HTML", "CSS", "ポートフォリオ", "hera-16"],
  authors: [{ name: "hera-16" }],
  creator: "hera-16",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    title: "Portfolio | hera-16",
    description: "Web開発者のポートフォリオサイト。実際のプロジェクトとスキルを紹介しています。",
    siteName: "hera-16 Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | hera-16",
    description: "Web開発者のポートフォリオサイト。実際のプロジェクトとスキルを紹介しています。"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
