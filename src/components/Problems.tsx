"use client";

import { motion } from "framer-motion";

const problems = [
  {
    icon: "🌙",
    title: "人がいない時間帯のゲスト対応",
    description:
      "民泊・一棟貸しにフロントスタッフはいない。深夜のチェックイン方法の質問、Wi-Fiトラブル。放置すれば低評価に直結します。",
  },
  {
    icon: "🌏",
    title: "インバウンド対応に追われる日々",
    description:
      "訪日ゲストの急増で英語・中国語・韓国語の問い合わせが激増。翻訳ツールでは限界。即レスできず予約を逃していませんか。",
  },
  {
    icon: "📊",
    title: "施設が増えるほど、管理が破綻",
    description:
      "OTAごとにバラバラの対応、属人的なマニュアル、記録の散逸。施設数が増えるほど品質維持が難しくなっていきます。",
  },
];

export default function Problems() {
  return (
    <section id="problems" className="bg-cream py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold tracking-[0.3em] text-accent uppercase">
            Problems
          </span>
          <h2 className="mb-4 font-serif text-3xl font-bold text-text md:text-4xl">
            民泊・一棟貸しが抱える
            <span className="text-accent">3つの課題</span>
          </h2>
          <p className="mx-auto max-w-2xl text-text-muted">
            人手不足・インバウンド対応・データ管理。現場の課題はどんどん複雑になっています。
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-warm bg-white/80 p-8 transition-shadow hover:shadow-lg"
            >
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-2xl">
                {problem.icon}
              </span>
              <h3 className="mb-3 text-xl font-bold text-text">
                {problem.title}
              </h3>
              <p className="leading-relaxed text-text-muted">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
