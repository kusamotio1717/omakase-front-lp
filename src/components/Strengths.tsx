"use client";

import { motion } from "framer-motion";

const strengths = [
  {
    icon: "🏠",
    title: "民泊・一棟貸し特化",
    description:
      "大手チャットボットはホテルチェーン向け。おまかせフロントは民泊・一棟貸し・コテージに特化。フロントスタッフ不在の運営を前提に設計されています。",
    highlight: "ホテルチェーン向けではない唯一の選択肢",
  },
  {
    icon: "🔧",
    title: "施設専用にカスタム構築",
    description:
      "テンプレート型ではありません。施設のルール・FAQ・マニュアルを個別に学習し、あなたの施設だけの専用AIを構築。的確な回答精度を実現します。",
    highlight: "テンプレート型との決定的な差",
  },
  {
    icon: "📖",
    title: "従業員マニュアルBotを標準搭載",
    description:
      "競合サービスにはない独自機能。スタッフもBotに質問できるから、新人教育コストを大幅削減。属人化を防ぎ、運営品質を均一化します。",
    highlight: "競合にはない独自機能",
  },
];

const comparisonRows = [
  {
    label: "対象施設",
    competitor: "ホテルチェーン",
    ours: "民泊・一棟貸し",
  },
  {
    label: "カスタマイズ",
    competitor: "テンプレート型",
    ours: "施設専用に構築",
  },
  {
    label: "従業員マニュアル",
    competitor: "✕",
    ours: "◎ 標準搭載",
  },
  {
    label: "OTA + 自社チャット統合",
    competitor: "どちらか片方",
    ours: "◎ 両方対応",
  },
  {
    label: "IT導入補助金",
    competitor: "記載なし",
    ours: "◎ 最大2/3補助",
  },
];

export default function Strengths() {
  return (
    <section id="strengths" className="bg-warm py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold tracking-[0.3em] text-accent uppercase">
            Strengths
          </span>
          <h2 className="mb-4 font-serif text-3xl font-bold text-text md:text-4xl">
            おまかせフロントの
            <span className="text-accent">3つの強み</span>
          </h2>
          <p className="mx-auto max-w-2xl text-text-muted">
            単なるチャットボットではありません。民泊・一棟貸しに特化した唯一のソリューションです。
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {strengths.map((strength, i) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-white/90 p-8 shadow-sm"
            >
              <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-3xl">
                {strength.icon}
              </span>
              <h3 className="mb-3 text-xl font-bold text-text">
                {strength.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-text-muted">
                {strength.description}
              </p>
              <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
                {strength.highlight}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-2xl border border-warm"
        >
          {/* Header */}
          <div className="grid grid-cols-3 bg-dark text-white">
            <div className="px-6 py-4 text-sm font-semibold" />
            <div className="px-6 py-4 text-center text-sm font-semibold text-text-light">
              大手チャットボット
            </div>
            <div className="px-6 py-4 text-center text-sm font-semibold text-accent-light">
              おまかせフロント
            </div>
          </div>
          {/* Rows */}
          {comparisonRows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 ${
                i % 2 === 0 ? "bg-white" : "bg-warm/50"
              }`}
            >
              <div className="px-6 py-4 text-sm font-medium text-text">
                {row.label}
              </div>
              <div className="px-6 py-4 text-center text-sm text-text-muted">
                {row.competitor}
              </div>
              <div className="px-6 py-4 text-center text-sm font-semibold text-accent">
                {row.ours}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
