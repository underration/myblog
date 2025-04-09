import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import AnimatedLayout from "@/components/AnimatedLayout";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iwamoto Naoto | Portfolio",
  description: "Iwamoto Naoto's Portfolio, Software Engineer based in Japan. ",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <main className="flex-grow pt-16">
          <AnimatedLayout>{children}</AnimatedLayout>
        </main>
        <Footer />
      </body>
    </html>
  );
}
