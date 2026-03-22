"use client";

import { motion } from "framer-motion";

const comparisons = [
  {
    category: "夜間・早朝の問い合わせ",
    before: "翌朝まで放置 → 不満・低評価",
    after: "30秒以内に自動回答",
  },
  {
    category: "多言語対応",
    before: "スタッフの語学力に依存",
    after: "109言語をAIが一次対応",
  },
  {
    category: "OTA返信遅延",
    before: "返信1時間以上 → 予約取りこぼし",
    after: "即時自動返信で失注回収",
  },
  {
    category: "新人教育",
    before: "マニュアル読み込みに数週間",
    after: "Botに聞けばすぐ回答",
  },
  {
    category: "問い合わせデータ",
    before: "散逸・未記録",
    after: "全件自動記録 → 改善に活用",
  },
];

export default function BeforeAfter() {
  return (
    <section className="bg-cream py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold tracking-[0.3em] text-accent uppercase">
            Before / After
          </span>
          <h2 className="mb-4 font-serif text-3xl font-bold text-text md:text-4xl">
            導入で<span className="text-accent">こう変わる</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-warm"
        >
          {/* Header row */}
          <div className="grid grid-cols-3 bg-dark text-white">
            <div className="px-6 py-4 text-sm font-semibold">課題</div>
            <div className="px-6 py-4 text-sm font-semibold">Before</div>
            <div className="px-6 py-4 text-sm font-semibold text-accent-light">
              After
            </div>
          </div>

          {/* Data rows */}
          {comparisons.map((item, i) => (
            <div
              key={item.category}
              className={`grid grid-cols-3 ${
                i % 2 === 0 ? "bg-warm" : "bg-white"
              }`}
            >
              <div className="px-6 py-4 text-sm font-medium text-text">
                {item.category}
              </div>
              <div className="px-6 py-4 text-sm text-text-muted">
                {item.before}
              </div>
              <div className="px-6 py-4 text-sm font-semibold text-accent">
                {item.after}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
