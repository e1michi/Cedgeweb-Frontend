import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const font = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "サイバーエッジ株式会社",
  description: "IT製品・リソューションやサービスに関する新規事業開発支援、ITシステムやサービスに関する企画・コンサルティング・システム開発・保守運用、リユース事業について、持続可能なビジネスへとご支援いたします。"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`
        ${font.className}
        text-base
        text-gray-700
      `}>
        <div id="header" className="relative z-20 h-20">
          <div className="fixed top-0 w-full bg-white">
            <Header />
          </div>
        </div>
        <div id="body" className="relative z-10">
          {children}
        </div>
        <div id="footer" className="relative z-20">
          <div className="">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
