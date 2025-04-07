"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";

// プロジェクトデータのモックアップ
const projectsData = [
  {
    id: "1",
    title: "ポートフォリオサイト",
    category: "Webデザイン",
    description:
      "自身のスキルやプロジェクトを紹介するためのポートフォリオサイトです。Framer Motionを使用したアニメーションや、Three.jsによる3D表現を実装しています。",
    technologies: [
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Three.js",
      "Tailwind CSS",
    ],
    image: "/adrien-olichon-RCAhiGJsUUE-unsplash.jpg",
    images: [
      "/adrien-olichon-RCAhiGJsUUE-unsplash.jpg",
      "/adrien-olichon-RCAhiGJsUUE-unsplash.jpg",
      "/adrien-olichon-RCAhiGJsUUE-unsplash.jpg",
    ],
  },
];

const ProjectPage = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto py-20 px-4 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
      >
        <h1 className="text-3xl font-bold mb-6 text-[var(--color-header)]">
          プロジェクトが見つかりません
        </h1>
        <Link
          href="/"
          className="text-[var(--color-link)] hover:text-[var(--color-link-hover)] hover:underline transition-colors"
        >
          ← ホームに戻る
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-12 px-4 md:py-20 relative z-10 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
    >
      {/* ヘッダー */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-12"
      >
        <Link href="/#projects">
          <span className="inline-flex items-center text-[var(--color-link)] hover:text-[var(--color-link-hover)] hover:underline transition-colors mb-4">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            全プロジェクトに戻る
          </span>
        </Link>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[var(--color-header)]">
          {project.title}
        </h1>
        <div className="inline-block bg-[var(--color-accent)] text-white px-3 py-1 rounded-full text-sm font-medium">
          {project.category}
        </div>
      </motion.header>

      {/* メイン画像 */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12 overflow-hidden rounded-xl shadow-lg"
      >
        <motion.img
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5 }}
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* プロジェクト詳細 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* 左カラム - 説明文 */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-2"
        >
          <h2 className="text-2xl font-bold mb-4 text-[var(--color-header)]">
            概要
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed text-lg">
            {project.description}
          </p>

          <h2 className="text-2xl font-bold mb-4 text-[var(--color-header)]">
            詳細
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
            このプロジェクトでは、ユーザーエクスペリエンスを重視した設計を行いました。
            モダンなデザインと直感的なインターフェースにより、ユーザーがストレスなく操作できるように実装しています。
            また、パフォーマンスの最適化にも注力し、高速な読み込みと応答性の高い操作感を実現しています。
          </p>

          <h2 className="text-2xl font-bold mb-4 text-[var(--color-header)]">
            ギャラリー
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg shadow-md"
              >
                <Image
                  src={image}
                  alt={`${project.title} image ${index + 1}`}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 右カラム - 技術情報 */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-1"
        >
          <div className="bg-[var(--color-bg-secondary)] rounded-xl p-6 shadow-md mb-8">
            <h2 className="text-xl font-bold mb-4 border-b border-[var(--color-border)] pb-2 text-[var(--color-header)]">
              使用技術
            </h2>
            <ul className="space-y-2">
              {project.technologies.map((tech, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="flex items-center"
                >
                  <svg
                    className="w-5 h-5 text-[var(--color-accent)] mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {tech}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="bg-[var(--color-bg-primary-rgb)] bg-opacity-10 rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4 text-[var(--color-header)]">
              プロジェクト情報
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[var(--color-text-secondary)]">
                  期間
                </h3>
                <p>2023年4月 - 2023年7月</p>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-text-secondary)]">
                  役割
                </h3>
                <p>フロントエンド開発 / UI/UXデザイン</p>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-text-secondary)]">
                  クライアント
                </h3>
                <p>自主制作プロジェクト</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <Link href="/#contact">
          <span className="inline-block px-8 py-4 bg-[var(--color-accent)] text-white rounded-full shadow-lg hover:bg-[var(--color-accent-hover)] transition-colors text-lg font-medium">
            お問い合わせする
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProjectPage;
