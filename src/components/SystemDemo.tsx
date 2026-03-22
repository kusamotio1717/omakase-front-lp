"use client";

import { motion } from "framer-motion";

export default function SystemDemo() {
  return (
    <section className="bg-dark py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold tracking-[0.3em] text-accent-light uppercase">
            How It Works
          </span>
          <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
            AIが<span className="text-accent-light">3ステップ</span>で対応
          </h2>
          <p className="mx-auto max-w-2xl text-text-light">
            ゲストの質問を分類し、施設固有のナレッジから最適な回答を生成。
            判断が難しい質問だけ運営者に通知します。
          </p>
        </motion.div>

        {/* 3-Step Flow */}
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "質問を分類",
              description:
                "AIがゲストの意図を理解し、14カテゴリに自動分類。緊急度も判定します。",
              detail: "チェックイン / 設備 / 周辺情報 / クレーム etc.",
            },
            {
              step: "02",
              title: "ナレッジ検索",
              description:
                "施設専用のQAデータベース（380件+）と運営マニュアルから、最適な情報を取得。",
              detail: "施設固有の回答で的確に対応",
            },
            {
              step: "03",
              title: "回答生成 or 通知",
              description:
                "確信度が高い質問は即回答。判断が必要な質問は運営者に通知し、ワンクリックで承認。",
              detail: "自動応答 / 確認依頼 / 運営者対応の3段階",
            },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative rounded-2xl border border-white/10 bg-dark-light p-8"
            >
              <span className="mb-4 block text-4xl font-bold text-accent/30">
                {item.step}
              </span>
              <h3 className="mb-3 text-xl font-bold text-white">
                {item.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-text-light">
                {item.description}
              </p>
              <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs text-accent-light">
                {item.detail}
              </span>

              {/* Connector arrow (not on last item) */}
              {i < 2 && (
                <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-2xl text-accent/40 md:block">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-white/10 bg-dark-light/50 p-6 md:p-8"
        >
          <p className="mb-6 text-center text-sm font-medium text-text-light">
            運営者ダッシュボード イメージ
          </p>
          <div className="rounded-xl border border-white/5 bg-dark p-4 md:p-6">
            {/* Tab bar */}
            <div className="mb-4 flex gap-4 border-b border-white/10 pb-3">
              <span className="border-b-2 border-accent pb-3 text-sm font-medium text-accent-light">
                要対応 (3)
              </span>
              <span className="pb-3 text-sm text-text-light">回答済み</span>
              <span className="pb-3 text-sm text-text-light">全件</span>
            </div>

            {/* Message items */}
            {[
              {
                time: "14:23",
                guest: "田中様",
                message: "チェックアウトの時間を延長できますか？",
                urgency: "中",
                urgencyColor: "bg-yellow-500/20 text-yellow-400",
                action: "確認依頼",
              },
              {
                time: "13:45",
                guest: "Smith様",
                message: "Is there a shuttle service to the station?",
                urgency: "低",
                urgencyColor: "bg-green-500/20 text-green-400",
                action: "確認依頼",
              },
              {
                time: "12:10",
                guest: "李様",
                message: "暖房が動かないです。至急お願いします。",
                urgency: "高",
                urgencyColor: "bg-red-500/20 text-red-400",
                action: "要対応",
              },
            ].map((item) => (
              <div
                key={item.time}
                className="flex flex-col gap-3 border-b border-white/5 py-3 last:border-0 md:flex-row md:items-center"
              >
                <span className="text-xs text-text-light">{item.time}</span>
                <span className="text-sm font-medium text-white">
                  {item.guest}
                </span>
                <span className="flex-1 text-sm text-text-light">
                  {item.message}
                </span>
                <span
                  className={`inline-block w-fit rounded-full px-2 py-0.5 text-xs ${item.urgencyColor}`}
                >
                  {item.urgency}
                </span>
                <span className="rounded bg-accent/20 px-2 py-1 text-xs text-accent-light">
                  {item.action}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
