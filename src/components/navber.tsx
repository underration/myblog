"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import path from "path";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [concertInfo, setConcertInfo] = useState("");
  const [loading, setLoading] = useState(true);
  const [isNoticeVisible, setIsNoticeVisible] = useState(true);
  const [noticeId, setNoticeId] = useState("");
  const pathname = usePathname();

  // お知らせID生成用関数
  const generateNoticeId = (content: string) => {
    // 単純な文字列ハッシュ関数
    let hash = 0;
    if (content.length === 0) return hash.toString();
    for (let i = 0; i < content.length; i++) {
      const char = content.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // メニューが開いているときに画面スクロールを防止
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // スクロール監視
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ウィンドウサイズの監視（モバイル判定）
  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // メニュー項目の定義（アイコン付き）
  const menuItems = [
    {
      path: "/",
      label: "ホーム",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      path: "/#contact",
      label: "お問い合わせ",
    },
  ];

  return (
    <>
      <header
        className={` border-b border-[color:var(--color-border)]  transition-all duration-300 `}
      >
        <nav
          className={`container mx-auto px-4 transition-all duration-300 ${
            isScrolled ? "py-2" : "py-3"
          } flex justify-between items-center`}
        >
          {/* 検索＆ハンバーガーメニュー */}
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={toggleMenu}
              className="md:hidden size-12 flex justify-center items-center rounded-full   hover:text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]"
              aria-controls="navbar-collapse-with-animation"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <div className="relative w-6 h-6 ">
                <span
                  className={`absolute block h-0.5 w-6 bg-[color:var(--color-text-primary)] transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 translate-y-2.5" : "translate-y-2"
                  }`}
                ></span>
                <span
                  className={`absolute block h-0.5 bg-[color:var(--color-text-primary)] transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-0 w-0" : "opacity-100 w-6"
                  }`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-6 bg-[color:var(--color-text-primary)] transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 translate-y-2.5" : "translate-y-4"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* メニュー本体 */}
          <div
            className={`fixed md:static top-0 left-0 w-full h-full md:h-auto md:w-auto bg-[color:var(--color-bg-primary)] md:bg-transparent ${
              isMenuOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full md:opacity-100 md:translate-x-0"
            } transition-all duration-300 ease-in-out z-40 md:z-auto overflow-y-auto`}
            id="navbar-collapse-with-animation"
          >
            {isMobile && (
              <div className="flex justify-between items-center p-4 border-b border-[color:var(--color-border)] sticky top-0 bg-[color:var(--color-bg-primary)] z-10">
                <h2 className="font-bold text-xl">メニュー</h2>
                <button
                  onClick={toggleMenu}
                  className="size-10 flex justify-center items-center rounded-full hover:bg-[color:var(--color-text-secondary)] hover:text-secondary transition-all duration-300 ease-in-out focus:outline-none"
                  aria-label="メニューを閉じる"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            )}
            <div className="flex flex-col md:flex-row md:items-center md:justify-end md:ps-7 px-6 md:px-0 pt-4 md:pt-0 md:py-0 pb-20 md:pb-0">
              {menuItems.map((item) => {
                const isActive = pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`flex items-center py-4 md:py-3 border-b md:border-0 border-[color:var(--color-border)] ps-px md:px-3 text-base ${
                      isActive
                        ? "text-[color:var(--color-accent)]"
                        : "text-[color:var(--color-text-primary)]"
                    } hover:text-[color:var(--color-text-secondary)] transition-all duration-200`}
                    onClick={isMobile ? toggleMenu : undefined}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className="md:hidden mr-3">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={item.icon}
                        ></path>
                      </svg>
                    </span>
                    {item.label}
                    {isActive && (
                      <span className="ml-2 md:ml-1 md:h-1 md:w-1 rounded-full bg-[color:var(--color-accent)] inline-block"></span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-20 z-30 md:hidden"
            onClick={toggleMenu}
            aria-hidden="true"
          ></div>
        )}
      </header>
    </>
  );
}
