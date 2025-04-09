export const projectsData = [
  {
    id: "1",
    title: "ポートフォリオサイト",
    category: ["フロントエンド"],
    description: "過去に行ってきたことをまとめたポートフォリオです。",
    detail: `このポートフォリオは、過去に取り組んできたプロジェクトや経験をまとめたものです。これまでの活動を通じて得たスキルや経験を自分自身で振り返り、今後の成長に繋げるために作成しました。`,
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "vercel"],
    period: "2025年4月 - 現在",
    role: "フロントエンドエンジニア",
    client: "自主制作",
    image: "/portfolio.png",
    images: ["/roadmap.png", "/skils.png"],
    link: "https://github.com/underration/myblog",
  },

  {
    id: "3",
    title: "大阪公立大学交響楽団公式サイト",
    category: ["フロントエンド"],
    description: "大阪公立大学交響楽団の公式サイトを制作しました。",
    detail: `大阪公立大学交響楽団の公式サイトを制作しました。デザインはFigmaで作成し、Next.jsとTailwind CSSを使用して実装しました。また、保守性を考慮し、Headless CMSとしてNewtを使用しました。これによりSSGを活用したSEO対策も行いました。さらに、Vercelを利用してデプロイを行い、パフォーマンスの最適化にも取り組みました。
    今までGoogle siteによる運用でしたが、、より自由度の高いデザインと機能を実現するために、Next.jsを使用して新たにサイトを構築しました。これにより、団員が簡単に情報を更新できるようになり、より多くの人々に公立大学の交響楽団を知ってもらえることを目指しています。
    `,
    period: "2025年2月 - 2025年3月",
    role: "フロントエンドエンジニア",
    client: "大阪公立大学交響楽団",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "FireStore",
      "Vercel",
      "Figma",
    ],
    image: "/omutop.png",
    images: ["/omutop2.png", "/omuabout.png"],
    link: "https://orchestraproject.vercel.app/",
  },
  {
    id: "4",
    title: "ビーコンセンシングによる滞在空間同定手法",
    category: ["研究"],
    description:
      "BLE(Bluetooth Low Energy)ビーコンを利用して、スマートフォンの空間同定手法を研究しました。",
    detail: `
    本研究では、屋内空間における滞在場所の同定精度を向上させることを目的として、Bluetooth Low Energy（BLE）ビーコンと受信信号強度指示（RSSI）を用いた新たな滞在場所同定手法を提案しました。
    BLEビーコンは比較的簡易な手段として利用可能ですが、RSSIは多重経路伝播などの影響を受けやすく、推定精度に課題があります。
    そこで本研究では、複数のBLEビーコンから得られたRSSI値に対してファジィ推論を適用することで、RSSIの不確実性を考慮した高精度な滞在場所の同定を目指しました。
    実験を通じて提案手法の空間推定精度を評価し、既存手法との比較を行うことで、その有効性を検証しました。本研究により、屋内環境におけるより信頼性の高い位置情報サービスの実現に貢献できる可能性を示すことができました。
    また、実験を進めるにあたって、Flutterを用いてBLEビーコンの受信アプリを開発しました。これにより、社会実装に向けた検証を行うことができました。
    レジュメはこちらからダウンロードできます。
    <a href="/ble_resume.pdf">ble_resume.pdf</a>
    
`,
    period: "2024年9月 - 2025年2月",
    role: "研究",
    client: "",
    technologies: ["Flutter", "Bluetooth Low Energy"],
    image: "/ble.png",
    images: ["/IMG_9379 2.JPG", "/IMG_9380 2.JPG", "/app.png"],
    link: "https://www.docswell.com/s/naoya_iwamoto/ZYD6LD-2025-04-09-150451",
  },
];
