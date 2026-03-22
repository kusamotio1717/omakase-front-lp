"use client";

import { motion } from "framer-motion";

const options = [
  {
    icon: "🌐",
    title: "OTA開設・最適化支援",
    description:
      "Airbnb・Booking.com等のリスティング作成、写真選定、説明文の最適化をサポート。OTA掲載から集客までをワンストップで。",
  },
  {
    icon: "🎨",
    title: "ブランディング支援",
    description:
      "ロゴ制作・プロ撮影・Webサイト制作・OTAデザイン統一など、施設のブランド構築をトータルで支援します。",
  },
  {
    icon: "⭐",
    title: "レビュー管理",
    description:
      "各OTAのレビューにAIが返信案を自動生成。感情分析・月次レポートでゲスト満足度の傾向を把握。",
  },
];

export default function Options() {
  return (
    <section className="bg-warm py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold tracking-[0.3em] text-accent uppercase">
            Options
          </span>
          <h2 className="mb-4 font-serif text-3xl font-bold text-text md:text-4xl">
            チャットボット導入の
            <span className="text-accent">その先へ</span>
          </h2>
          <p className="mx-auto max-w-2xl text-text-muted">
            チャットボットの導入を起点に、OTA運用・ブランディング・レビュー管理まで一貫してサポート。
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {options.map((option, i) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-warm bg-white/90 p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-2xl">
                {option.icon}
              </span>
              <h3 className="mb-3 text-lg font-bold text-text">
                {option.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {option.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
