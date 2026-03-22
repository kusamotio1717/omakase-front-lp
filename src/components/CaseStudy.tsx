"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "380+", label: "QAデータ件数" },
  { value: "2施設", label: "導入施設数" },
  { value: "90%+", label: "自動応答率" },
  { value: "30秒", label: "平均応答時間" },
];

const highlights = [
  "施設固有のQAデータ380件+を学習済み",
  "日本語・英語のゲスト対応を24時間自動化",
  "3ステップAI処理（分類→検索→回答生成）",
  "運営者ダッシュボードで確認・承認がワンクリック",
  "判断が必要な質問だけ運営者に通知",
  "Webサイト・ブランディングも一貫して構築",
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="bg-dark py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold tracking-[0.3em] text-accent-light uppercase">
            Case Study
          </span>
          <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
            導入事例 :{" "}
            <span className="text-warm-gold">KOME / TSUKIYONE</span>
          </h2>
          <p className="mx-auto max-w-2xl text-text-light">
            山梨県の宿泊施設2棟に導入。ゲスト対応の自動化とブランド構築を実現しました。
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-dark-light p-6 text-center"
            >
              <p className="text-3xl font-bold text-warm-gold">{stat.value}</p>
              <p className="mt-1 text-sm text-text-light">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          {/* Highlights */}
          <div className="rounded-2xl border border-white/10 bg-dark-light p-8">
            <h3 className="mb-6 text-lg font-bold text-white">導入内容</h3>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-xs text-accent-light">
                    ✓
                  </span>
                  <span className="text-sm text-text-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-dark-light p-8">
            <div>
              <h3 className="mb-6 text-lg font-bold text-white">導入成果</h3>
              <div className="space-y-4">
                <div className="rounded-xl bg-dark/50 p-4">
                  <p className="text-sm font-medium text-accent-light">
                    夜間対応の自動化
                  </p>
                  <p className="mt-1 text-sm text-text-light">
                    22時〜翌8時のゲスト問い合わせを完全自動化。運営者の深夜対応が不要に。
                  </p>
                </div>
                <div className="rounded-xl bg-dark/50 p-4">
                  <p className="text-sm font-medium text-accent-light">
                    多言語対応の実現
                  </p>
                  <p className="mt-1 text-sm text-text-light">
                    英語での問い合わせにもAIが即座に回答。インバウンドゲストの満足度が向上。
                  </p>
                </div>
                <div className="rounded-xl bg-dark/50 p-4">
                  <p className="text-sm font-medium text-accent-light">
                    運営データの資産化
                  </p>
                  <p className="mt-1 text-sm text-text-light">
                    全問い合わせを自動記録。よくある質問の分析から運営改善につなげる体制を構築。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Demo Bot CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-sm text-text-light">
            実際のBotを体験してみませんか？
          </p>
          <a
            href="https://kome-bot.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent/10 px-8 py-3 text-sm font-semibold text-accent-light transition-colors hover:bg-accent/20"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
              />
            </svg>
            デモBotを体験する
          </a>
        </motion.div>
      </div>
    </section>
  );
}
