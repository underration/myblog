"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { projectsData } from "@/components/projectData";
import Threads from "@/components/Threads";
import Navbar from "@/components/navbar";
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
    title: "2022年3月",
    description: "桃山学院高等学校卒業",
  },
  {
    title: "2022年4月",
    description:
      "大阪公立大学情報工学科入学、同時にオーケストラ部で音楽活動に従事",
  },
  {
    title: "2022年10月",
    description: "地元のイオンでアルバイト開始、携帯販売業務や接客を経験",
  },
  {
    title: "2024年6月",
    description:
      "株式会社Affectifyでエンジニアとして入社、フルスタック開発に従事",
  },
  {
    title: "2025年3月",
    description:
      "友人が立ち上げた松尾研発スタートアップ®︎、株式会社KLDainamixでエンジニアとして従事",
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
        className="relative h-screen flex items-center justify-center bg-[var(--color-bg-primary)] overflow-hidden snap-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute  inset-0">
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
        <motion.div style={{ opacity, y }} className="text-center z-10">
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
        </motion.div>
      </motion.div>

      {/*ロードマップセクション*/}
      <motion.div
        id="roadmap"
        className="h-screen flex flex-col justify-center items-center py-16 snap-start bg-[var(--color-bg-primary)]"
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

        <div className="max-w-2xl mx-auto mb-16 overflow-y-auto max-h-[60vh]">
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
        className="h-screen flex flex-col justify-center py-10 snap-start bg-[var(--color-bg-secondary)]"
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
          <motion.p
            className="text-lg text-[var(--color-text-  )]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            大阪公立大学情報工学科に在学中のエンジニアです。フルスタック開発を得意としており、特にReactやNext.jsを使用したWebアプリケーションの開発に力を入れています。
          </motion.p>
        </div>
      </motion.div>

      {/* プロジェクトセクション */}
      <motion.div
        className="h-screen flex flex-col justify-center py-10 snap-start bg-[var(--color-bg-primary)]"
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[85rem] px-4 mx-auto overflow-y-auto max-h-[60vh]">
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
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.description,
                    }}
                  ></div>
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
        className="h-screen flex flex-col justify-center py-16 snap-start bg-[var(--color-bg-secondary)]"
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
        className="h-screen flex flex-col justify-center py-10 snap-start bg-[var(--color-bg-primary)]"
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
