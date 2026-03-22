"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "ヒアリング",
    duration: "1〜2週間",
    description:
      "施設の特徴・運営課題・ゲスト層をヒアリング。最適なプランと機能構成をご提案します。",
  },
  {
    step: "02",
    title: "構築・カスタマイズ",
    duration: "2〜4週間",
    description:
      "施設専用のQAデータ・マニュアルを整備し、AIチャットボットを構築。ブランドに合わせたUIに。",
  },
  {
    step: "03",
    title: "テスト運用",
    duration: "1〜2週間",
    description:
      "実際のゲスト対応でテスト。回答精度の調整・QAの追加・運営者の操作研修を実施。",
  },
  {
    step: "04",
    title: "本番運用開始",
    duration: "継続サポート",
    description:
      "本番運用を開始。月次レポート・QA追加・精度改善を継続的にサポートします。",
  },
];

export default function Flow() {
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
            Flow
          </span>
          <h2 className="mb-4 font-serif text-3xl font-bold text-text md:text-4xl">
            導入の流れ
          </h2>
          <p className="mx-auto max-w-2xl text-text-muted">
            最短4週間で運用開始。ヒアリングからテスト運用まで、一貫してサポートします。
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-accent/20 md:block" />

          <div className="space-y-8">
            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex gap-6 md:gap-8"
              >
                {/* Step number */}
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white shadow-lg shadow-accent/25">
                  {item.step}
                </div>

                {/* Content */}
                <div className="flex-1 rounded-2xl border border-warm bg-white/80 p-6">
                  <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <h3 className="text-lg font-bold text-text">
                      {item.title}
                    </h3>
                    <span className="inline-block w-fit rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
