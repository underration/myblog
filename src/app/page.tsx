"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { projectsData } from "@/components/projectData";
import Threads from "@/components/Threads";
import Navbar from "@/components/navbar";
import CircularGallery from "@/components/CircularGallery";

// image mapping
const skillImages: Record<string, string> = {
  "React & Next.js": "/next-js.webp",
  TypeScript: "/Typescript_logo_2020.png",
  "Tailwind CSS": "/Tailwind_CSS_Logo.png",
  Python: "/Python-logo-notext.png",
  Go: "/Go-Logo_Blue.png",
  "Dart & Flutter": "/c823e53b3a1a7b0d36a9.png",
  GCP: "/cloud_build.png",
  MySQL: "/logo-mysql-170x115.png",
};

// ロードマップセクションのデータ
const roadmapData = [
  {
    title: "2003年12月24日",
    description: "大阪府で生まれる",
  },
  {
    title: "2022年3月",
    description: "桃山学院高等学校卒業",
  },
  {
    title: "2022年4月",
    description: "大阪公立大学情報工学科入学、オーケストラ部に所属",
  },
  {
    title: "2022年10月",
    description: "地元のイオンでアルバイト",
  },
  {
    title: "2024年6月",
    description:
      "株式会社Affectifyでエンジニアとして入社、フルスタック開発に従事",
  },
];

const Blog = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    });

    // スムーズスクロール機能を追加
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (this: HTMLAnchorElement, e) {
        e.preventDefault();

        const href = this.getAttribute("href");
        if (!href) return;

        const targetId = href.split("#")[1];
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  }, [controls]);

  return (
    <>
      {/* ヒーローセクション */}
      <Navbar />
      <motion.div
        id="home"
        className="relative min-h-[100dvh] flex items-center justify-center bg-[var(--color-bg-primary)] snap-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <Threads
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={2000}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* 🔹 ゆっくりスケールするアニメーション（背景効果） */}
        <motion.div
          className="absolute w-full h-full z-0"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* 🔹 コンテンツ部分（上に重ねる） */}
        <motion.div style={{ opacity, y }} className="text-center z-10 px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-[var(--color-text-primary)] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
          >
            Naoya Iwamoto
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-[var(--color-text-secondary)] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ delay: 0.2 }}
          >
            Software Engineer & Trombone Player
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="#projects"
              className="px-6 py-3 bg-[var(--color-accent)] text-[var(--color-text-primary)] rounded-full hover:bg-[var(--color-accent-hover)] transition-colors cursor-pointer"
            >
              プロジェクトを見る
            </Link>
          </motion.div>
          {/*ここにSNSリンクを追加*/}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="https://github.com/underration"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-[var(--color-link)] hover:text-[var(--color-link-hover)] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
            <Link
              href="https://twitter.com/_roru_roru"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-[var(--color-link)] hover:text-[var(--color-link-hover)] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 48 48"
              >
                <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/in/naoya-iwamoto-3415a8315?"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-[var(--color-link)] hover:text-[var(--color-link-hover)] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 48 48"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
            </Link>
            <Link
              href="https://facebook.com/underration"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-[var(--color-link)] hover:text-[var(--color-link-hover)] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.736-.9 10.126-5.864 10.126-11.854z" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/_naoya_posaune/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-[var(--color-link)] hover:text-[var(--color-link-hover)] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/*ロードマップセクション*/}
      <motion.div
        id="roadmap"
        className="min-h-[100dvh] flex flex-col justify-center items-center py-16 snap-start bg-[var(--color-bg-primary)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-[var(--color-header)]">
            ロードマップ
          </h2>
          <p className="mt-1 text-[var(--color-text-secondary)]">
            私のキャリアの歩み
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          {roadmapData.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex-grow border-l border-[var(--color-border)] pl-4">
                <h3 className="text-lg font-semibold text-[var(--color-header)]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[var(--color-text-secondary)]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* About me セクション */}
      <motion.div
        className="min-h-[100dvh] flex flex-col justify-center py-10 snap-start bg-[var(--color-bg-secondary)] overflow-y-auto"
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-[var(--color-header)]">
            自己紹介
          </h2>
          <p className="mt-1 text-[var(--color-text-secondary)]">
            私の経歴や趣味について
          </p>
        </div>

        <div className="max-w-2xl mx-auto px-4">
          <motion.div
            className="text-lg text-[var(--color-text-primary)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>所属</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              2025年現在、大阪公立大学情報工学科４回生、オーケストラ部に所属しています。
            </p>
            <h2 className="mt-6">趣味</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              部活動で、トロンボーンを演奏しています。トロンボーン歴は8年で、コンクールや演奏会に参加しています。また、個人でプログラミングでアプリを作成したりします。
            </p>
            <h2 className="mt-6">特技</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              トロンボーン、英語(高校二年生で英検準一級を取得)、プログラミング(フロントエンドとときどきバックエンド)です。
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* プロジェクトセクション */}
      <motion.div
        className="min-h-[100dvh] flex flex-col justify-center py-10 snap-start bg-[var(--color-bg-primary)]"
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-[var(--color-header)]">
            プロジェクト一覧
          </h2>
          <p className="mt-1 text-[var(--color-text-secondary)]">
            取り組んだプロジェクトを紹介します
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[85rem] px-4 mx-auto">
          {/* Card */}
          {projectsData.map((item, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col h-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] shadow-sm rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="h-52 overflow-hidden rounded-t-xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt={`プロジェクト ${index + 1}`}
                />
              </div>
              <div className="p-4 md:p-6">
                <span className="block mb-1 text-xs font-semibold uppercase text-[var(--color-accent)]"></span>
                <h3 className="text-xl font-semibold text-[var(--color-header)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[var(--color-text-secondary)]">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.description,
                    }}
                  ></span>
                </p>
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 1 }}
                >
                  <Link
                    href={`/projects/${item.id}`}
                    className="inline-flex items-center gap-x-1 text-[var(--color-link)] decoration-2 hover:underline font-medium hover:text-[var(--color-link-hover)]"
                  >
                    詳細を見る
                    <svg
                      className="w-2.5 h-2.5"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* スキルセクション */}
      <motion.div
        id="skills"
        className="min-h-[100dvh] flex flex-col justify-center py-16 snap-start bg-[var(--color-bg-secondary)] overflow-y-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-[var(--color-header)]">
            スキル＆テクノロジー
          </h2>
          <p className="mt-1 text-[var(--color-text-secondary)]">
            使用している技術スタック
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 max-w-[85rem] px-4 mx-auto">
          {[
            "React & Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Python",
            "Go",
            "Dart & Flutter",
            "GCP",
            "MySQL",
          ].map((skill, index) => (
            <motion.div
              key={skill}
              className="text-center flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-2">
                <Image
                  src={skillImages[skill]}
                  alt={skill}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-header)] leading-tight">
                {skill}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* コンタクトセクション */}
      <motion.div
        className="min-h-[100dvh] flex flex-col justify-center py-10 snap-start bg-[var(--color-bg-primary)]"
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-[var(--color-header)]">
              お問い合わせ
            </h2>
            <p className="mt-1 text-[var(--color-text-secondary)]">
              プロジェクトについてのご質問やご連絡はこちらからどうぞ
            </p>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-xl shadow-sm">
            <div className="p-4 sm:p-7">
              <motion.form
                ref={formRef} // フォーム要素をrefに登録
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0 }}
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  const formData = new FormData(formRef.current!);

                  const formUrl =
                    "https://docs.google.com/forms/u/1/d/e/1FAIpQLSe-veMb84H5axCO6bFiJAi4Y-3zTOe3XDbkU4u8HrDLdBErDQ/formResponse";

                  fetch(formUrl, {
                    method: "POST",
                    mode: "no-cors",
                    body: formData,
                  }).then(() => {
                    formRef.current?.reset(); // 入力リセット
                    setIsModalOpen(true); // モーダルを表示
                  });
                }}
              >
                <div className="grid gap-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm mb-2 text-[var(--color-text-primary)]"
                      >
                        お名前
                      </label>
                      <div className="relative border border-[var(--color-border)] rounded-md ">
                        <input
                          type="text"
                          id="name"
                          name="entry.433586871"
                          className="py-3 px-4 block w-full border-[var(--color-border)] rounded-md text-sm focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm mb-2 text-[var(--color-text-primary)]"
                      >
                        メールアドレス
                      </label>
                      <div className="relative border border-[var(--color-border)] rounded-md ">
                        <input
                          type="email"
                          id="email"
                          name="emailAddress"
                          className="py-3 px-4 block w-full border-[var(--color-border)] rounded-md text-sm focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm mb-2 text-[var(--color-text-primary)]"
                    >
                      件名
                    </label>
                    <div className="relative border border-[var(--color-border)] rounded-md ">
                      <input
                        type="text"
                        id="subject"
                        name="entry.1765326767"
                        className="py-3 px-4 block w-full border-[var(--color-border)] rounded-md text-sm focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm mb-2 text-[var(--color-text-primary)]"
                    >
                      メッセージ
                    </label>
                    <div className="relative border border-[var(--color-border)] rounded-md ">
                      <textarea
                        id="message"
                        name="entry.1888794515"
                        rows={6}
                        className="py-3 px-4 block w-full border-[var(--color-border)] rounded-md text-sm focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className="py-3 px-4 w-full bg-[var(--color-accent)] text-white font-medium rounded-md hover:bg-[var(--color-accent-hover)] transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    送信する
                  </motion.button>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </motion.div>

      {/* モーダル */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[var(--color-bg-primary)] rounded-lg shadow-lg p-6 max-w-md w-full text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <h3 className="text-xl font-semibold text-[var(--color-header)] mb-4">
              送信完了しました
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-6">
              メッセージを受け付けました。ご連絡ありがとうございます！
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 bg-[var(--color-accent)] text-white rounded hover:bg-[var(--color-accent-hover)] transition"
            >
              閉じる
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Blog;
