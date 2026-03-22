"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "💬",
    title: "施設専用AIが自動応答",
    description:
      "テンプレート回答ではありません。あなたの施設のルール・特徴を学習したAIが、24時間・多言語でゲストに即答します。",
  },
  {
    icon: "🔗",
    title: "OTA連携で即時返信",
    description:
      "Airbnb・Booking.com等のメッセージにAIが自動対応。初期費用なしでOTA連携。返信遅延による予約取りこぼしを防ぎます。",
  },
  {
    icon: "📋",
    title: "運営者ダッシュボード",
    description:
      "要対応・回答済み・全件を一元管理。AIが判断に迷う質問だけ運営者に通知。確認ワンクリックで承認。",
  },
  {
    icon: "📖",
    title: "従業員マニュアルBot",
    description:
      "競合にはない独自機能。スタッフもBotに質問OK。運営マニュアルをAIが記憶し、新人教育コスト削減・属人化を防止。",
  },
  {
    icon: "📈",
    title: "データ蓄積・分析",
    description:
      "全問い合わせを自動でデータ化。よくある質問やクレーム傾向を可視化し、運営改善に活用できます。",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-warm py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold tracking-[0.3em] text-accent uppercase">
            Features
          </span>
          <h2 className="mb-4 font-serif text-3xl font-bold text-text md:text-4xl">
            おまかせフロントの
            <span className="text-accent">5つの機能</span>
          </h2>
          <p className="mx-auto max-w-2xl text-text-muted">
            テンプレートではなく、あなたの施設に合わせてカスタマイズ。実際の運営に即したAIを構築します。
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl border border-warm bg-white/90 p-8 shadow-sm transition-all hover:border-accent/20 hover:shadow-md"
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-xl transition-colors group-hover:bg-accent/20">
                {feature.icon}
              </span>
              <h3 className="mb-3 text-lg font-bold text-text">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
