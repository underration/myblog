import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/navber';
import Footer from './components/footer';

export const metadata: Metadata = {
  title: "Posaune Blog",
  description: "トロンボーン吹きのブログ、ぼちぼち更新します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>

    </html>
  );
}
