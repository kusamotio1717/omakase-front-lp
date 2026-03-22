"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "導入までどのくらいかかりますか？",
    answer:
      "ヒアリングから本番運用まで、最短4〜8週間です。施設の規模やカスタマイズ内容によって変動します。",
  },
  {
    question: "対応言語は何ですか？",
    answer:
      "日本語・英語・中国語・韓国語をはじめ、109言語に対応しています。インバウンドゲストにも安心です。",
  },
  {
    question: "既存のOTA（Airbnb等）との連携は可能ですか？",
    answer:
      "はい、主要OTA（Airbnb、Booking.com、じゃらん等）との連携に対応しています。ゲストからのメッセージをAIが自動で返信します。",
  },
  {
    question: "AIが間違った回答をしたらどうなりますか？",
    answer:
      "3段階の安全設計です。確信度の高い質問のみ自動回答し、判断が難しい質問は運営者に通知。運営者がワンクリックで承認・編集できます。",
  },
  {
    question: "IT導入補助金は使えますか？",
    answer:
      "はい、「デジタル化基盤導入枠」「AI導入補助枠」の対象となります。補助率1/2〜2/3（最大450万円）の活用が可能です。申請サポートもお任せください。",
  },
  {
    question: "他のチャットボットサービスとの違いは？",
    answer:
      "大手チャットボットはホテルチェーン向けのテンプレート型です。おまかせフロントは民泊・一棟貸しに特化し、施設専用にカスタム構築。さらに従業員マニュアルBot機能は競合にはない独自機能です。",
  },
  {
    question: "契約期間はありますか？",
    answer:
      "最低契約期間は6ヶ月です。その後は月単位での継続となります。",
  },
  {
    question: "自社でQAデータを用意する必要がありますか？",
    answer:
      "いいえ。ヒアリングをもとに弊社がQAデータを構築します。既にマニュアルやFAQがある場合は、それを基に効率的に構築できます。",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-warm last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="pr-4 font-medium text-text">{question}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-text-muted">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-warm py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold tracking-[0.3em] text-accent uppercase">
            FAQ
          </span>
          <h2 className="mb-4 font-serif text-3xl font-bold text-text md:text-4xl">
            よくあるご質問
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white/90 p-6 shadow-sm md:p-8"
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
