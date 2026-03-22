"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "ライト",
    target: "小規模施設向け",
    price: "要相談",
    features: [
      "1施設対応",
      "2言語対応（日・英）",
      "QAデータ構築",
      "ゲスト自動応答",
      "運営者ダッシュボード",
    ],
    highlight: false,
  },
  {
    name: "スタンダード",
    target: "中規模施設向け",
    price: "要相談",
    features: [
      "1施設対応",
      "4言語対応（日・英・中・韓）",
      "QAデータ構築",
      "ゲスト自動応答",
      "OTA連携自動返信",
      "運営者ダッシュボード",
      "従業員マニュアルBot",
    ],
    highlight: true,
  },
  {
    name: "プレミアム",
    target: "複数施設・大規模向け",
    price: "要相談",
    features: [
      "複数施設対応",
      "4言語対応（日・英・中・韓）",
      "QAデータ構築",
      "ゲスト自動応答",
      "OTA連携自動返信",
      "運営者ダッシュボード",
      "従業員マニュアルBot",
      "データ分析レポート",
      "優先サポート",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-cream py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Subsidy banner — top position */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-2xl border border-accent/20 bg-accent/5 p-6 md:p-8"
        >
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-2xl">
              🏛️
            </span>
            <div>
              <h4 className="mb-1 font-bold text-text">
                IT導入補助金で最大2/3を補助
              </h4>
              <p className="text-sm text-text-muted">
                「デジタル化基盤導入枠」「AI導入補助枠」の活用で、導入費用の1/2〜2/3（最大450万円）が補助対象に。
                申請サポートもお任せください。
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold tracking-[0.3em] text-accent uppercase">
            Pricing
          </span>
          <h2 className="mb-4 font-serif text-3xl font-bold text-text md:text-4xl">
            料金プラン
          </h2>
          <p className="mx-auto max-w-2xl text-text-muted">
            施設の規模・ニーズに合わせて3つのプランをご用意。
            IT導入補助金の活用で、実質負担を大幅に軽減できます。
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlight
                  ? "border-2 border-accent bg-accent/5 shadow-lg"
                  : "border border-warm bg-white/80"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
                  おすすめ
                </span>
              )}

              <h3 className="mb-1 text-xl font-bold text-text">{plan.name}</h3>
              <p className="mb-6 text-sm text-text-muted">{plan.target}</p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-text">
                  {plan.price}
                </span>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs text-accent">
                      ✓
                    </span>
                    <span className="text-text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block rounded-lg py-3 text-center text-sm font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-accent text-white hover:bg-accent-dark"
                    : "bg-dark text-white hover:bg-dark-light"
                }`}
              >
                詳しく相談する
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
