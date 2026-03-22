import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://stayflow-lp.vercel.app";

export const metadata: Metadata = {
  title: "おまかせフロント | 民泊・一棟貸し専用AIチャットボット",
  description:
    "24時間多言語対応・OTA自動返信・データ資産化。あなたの施設専用に構築したAIが、フロント業務をまるごとサポート。",
  openGraph: {
    title: "おまかせフロント | 民泊・一棟貸し専用AIチャットボット",
    description:
      "24時間多言語対応・OTA自動返信・データ資産化。あなたの施設専用に構築したAIが、フロント業務をまるごとサポート。",
    url: siteUrl,
    siteName: "おまかせフロント",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "おまかせフロント | 民泊・一棟貸し専用AIチャットボット",
    description:
      "24時間多言語対応・OTA自動返信・データ資産化。施設専用AIがフロント業務をまるごとサポート。",
  },
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} antialiased`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
