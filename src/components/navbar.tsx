"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

// 各セクションの情報を配列で管理
const sections = [
  { id: "home", link: "/#home", label: "ホーム" },
  { id: "roadmap", link: "/#roadmap", label: "ロードマップ" },
  { id: "about", link: "/#about", label: "自己紹介" },
  { id: "projects", link: "/#projects", label: "プロジェクト" },
  { id: "skills", link: "/#skills", label: "スキル" },
  { id: "contact", link: "/#contact", label: "お問い合わせ" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // スクロール位置に基づいて影を追加
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // 現在のスクロール位置と画面の高さを取得
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // 各セクションを取得
      const sections = {
        home: document.getElementById("home"),
        roadmap: document.getElementById("roadmap"),
        about: document.getElementById("about"),
        projects: document.getElementById("projects"),
        skills: document.getElementById("skills"),
        contact: document.getElementById("contact"),
      };

      // 現在表示されているセクションを特定
      let currentSection = "home";

      Object.entries(sections).forEach(([id, element]) => {
        if (!element) return;

        const sectionTop = element.offsetTop;
        const sectionBottom = sectionTop + element.offsetHeight;

        // セクションの中央が画面内にある場合、そのセクションをアクティブに
        if (
          scrollPosition >= sectionTop - windowHeight / 3 &&
          scrollPosition < sectionBottom - windowHeight / 3
        ) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    // 初期ロード時にも実行
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ナビゲーションリンククリック時のスクロール処理
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
    // モバイルメニューを閉じる
    setIsMenuOpen(false);
  };

  const navLinkClass = (section: string) =>
    `inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${
      activeSection === section
        ? "text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]"
        : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
    }`;

  // モバイル用のナビリンククラス
  const mobileNavLinkClass = (section: string) =>
    `block py-2 px-4 text-base font-medium ${
      activeSection === section
        ? "text-[var(--color-accent)] bg-[var(--color-bg-secondary)]"
        : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-primary)]"
    }`;

  return (
    <nav
      className={`bg-[var(--color-bg-primary)] ${
        scrolled ? "shadow-md" : ""
      } fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* デスクトップ用メニュー */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {sections.map((section) => (
                <a
                  key={section.id}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                  className={`cursor-pointer ${navLinkClass(section.id)}`}
                >
                  {section.label}
                </a>
              ))}
            </div>
          </div>

          {/* モバイル用メニューボタン */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-accent)]"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">メニューを開く</span>
              {/* ハンバーガーアイコン */}
              {!isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
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
              )}
            </button>
          </div>
        </div>
      </div>

      {/* モバイル用メニュー */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1 bg-[var(--color-bg-primary)] shadow-lg">
            {sections.map((section) => (
              <a
                key={section.id}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
                className={`cursor-pointer ${mobileNavLinkClass(section.id)}`}
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
