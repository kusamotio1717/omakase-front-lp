"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

/* ─── Chat sequence data ─── */
type ChatStep =
  | { type: "guest"; text: string; lang: "ja" | "en" }
  | { type: "typing" }
  | { type: "ai"; text: string; badge: "auto" | "operator_check"; classification?: string };

const chatSequence: ChatStep[] = [
  { type: "guest", text: "チェックインは何時からですか？", lang: "ja" },
  { type: "typing" },
  {
    type: "ai",
    text: "チェックインは15:00からです。キーボックスの暗証番号を事前にお送りします。",
    badge: "auto",
  },
  { type: "guest", text: "Is there a shuttle to the station?", lang: "en" },
  { type: "typing" },
  {
    type: "ai",
    text: "There is no shuttle service, but the station is a 5-minute walk. I can share directions!",
    badge: "auto",
  },
  { type: "guest", text: "暖房が壊れています。至急お願いします。", lang: "ja" },
  { type: "typing" },
  {
    type: "ai",
    text: "ご不便をおかけし申し訳ございません。運営者に緊急連絡いたします。",
    badge: "operator_check",
    classification: "設備トラブル | 緊急度: 高",
  },
];

/* Timing per step (ms) */
const stepDelay = (step: ChatStep) => {
  switch (step.type) {
    case "guest":
      return 1200;
    case "typing":
      return 1400;
    case "ai":
      return 2200;
  }
};

/* ─── Typing dots component ─── */
function TypingIndicator() {
  return (
    <div className="flex items-start gap-2">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs">
        🤖
      </div>
      <div className="rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm">
        <span className="flex items-center gap-1">
          <span
            className="h-1.5 w-1.5 animate-bounce rounded-full bg-text-muted"
            style={{ animationDelay: "0ms" }}
          />
          <span
            className="h-1.5 w-1.5 animate-bounce rounded-full bg-text-muted"
            style={{ animationDelay: "150ms" }}
          />
          <span
            className="h-1.5 w-1.5 animate-bounce rounded-full bg-text-muted"
            style={{ animationDelay: "300ms" }}
          />
        </span>
      </div>
    </div>
  );
}

/* ─── Count-up hook ─── */
function useCountUp(target: number, duration = 2000, active = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      setValue(start);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, active]);
  return value;
}

/* ─── Stats item ─── */
function StatItem({
  value,
  suffix,
  label,
  inView,
}: {
  value: number;
  suffix: string;
  label: string;
  inView: boolean;
}) {
  const count = useCountUp(value, 2000, inView);
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-accent md:text-3xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-text-muted">{label}</p>
    </div>
  );
}

/* ─── Main Hero ─── */
export default function Hero() {
  const [visibleMessages, setVisibleMessages] = useState<ChatStep[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [cycleKey, setCycleKey] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 });

  const clearAllTimeouts = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  /* Chat animation loop */
  useEffect(() => {
    let stepIndex = 0;
    const messages: ChatStep[] = [];

    function processStep() {
      if (stepIndex >= chatSequence.length) {
        // Hold final state, then reset
        timeoutRef.current = setTimeout(() => {
          setVisibleMessages([]);
          setShowTyping(false);
          setCycleKey((k) => k + 1);
        }, 3000);
        return;
      }

      const step = chatSequence[stepIndex];

      if (step.type === "typing") {
        setShowTyping(true);
        stepIndex++;
        timeoutRef.current = setTimeout(processStep, stepDelay(step));
      } else {
        setShowTyping(false);
        messages.push(step);
        setVisibleMessages([...messages]);
        stepIndex++;
        timeoutRef.current = setTimeout(processStep, stepDelay(step));
      }
    }

    // Small initial delay before starting
    timeoutRef.current = setTimeout(processStep, 800);

    return clearAllTimeouts;
  }, [cycleKey, clearAllTimeouts]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-cream pt-24">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent/[0.07] blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-warm-gold/[0.08] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Left: Copy ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-6 inline-block rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
                民泊・一棟貸し専用 AIフロント
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 font-serif text-4xl font-bold leading-tight text-text md:text-5xl lg:text-[3.5rem]"
            >
              ゲスト対応を、
              <br />
              <span className="text-accent">AIにおまかせ。</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 max-w-lg text-lg leading-relaxed text-text-muted"
            >
              24時間多言語対応。OTA自動返信。運営データの資産化。
              <br className="hidden sm:block" />
              あなたの施設専用に構築したAIが、
              <br className="hidden sm:block" />
              フロント業務をまるごとサポートします。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#contact"
                className="rounded-lg bg-accent px-8 py-4 text-center text-lg font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25"
              >
                無料で相談する
              </a>
              <a
                href="#case-study"
                className="rounded-lg border border-text/15 px-8 py-4 text-center text-lg font-medium text-text transition-colors hover:border-accent/30 hover:bg-accent/5 hover:text-accent"
              >
                導入事例を見る
              </a>
            </motion.div>
          </div>

          {/* ── Right: Phone Mockup with Live Chat ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-[300px] sm:w-[320px]">
              {/* Phone frame */}
              <div className="rounded-[2.5rem] border-[6px] border-dark bg-white shadow-2xl shadow-dark/20">
                {/* Notch */}
                <div className="relative flex justify-center">
                  <div className="absolute top-0 z-10 h-6 w-28 rounded-b-2xl bg-dark" />
                </div>

                {/* Screen content */}
                <div className="rounded-[2rem] bg-gradient-to-b from-cream to-white">
                  {/* Chat header */}
                  <div className="flex items-center gap-3 border-b border-warm px-5 pb-3 pt-10">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15">
                      <span className="text-sm">🏠</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-text">
                        おまかせフロント
                      </p>
                      <p className="text-[10px] text-accent">オンライン</p>
                    </div>
                    <div className="flex h-2 w-2 items-center">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                      </span>
                    </div>
                  </div>

                  {/* Chat messages area */}
                  <div className="flex h-[380px] flex-col gap-3 overflow-hidden px-4 py-4 sm:h-[420px]">
                    <AnimatePresence mode="popLayout">
                      {visibleMessages.map((msg, i) => {
                        if (msg.type === "guest") {
                          return (
                            <motion.div
                              key={`${cycleKey}-guest-${i}`}
                              initial={{ opacity: 0, y: 12, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{ duration: 0.3 }}
                              className="flex justify-end"
                            >
                              <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-accent px-3.5 py-2.5 text-[13px] leading-relaxed text-white shadow-sm">
                                {msg.text}
                              </div>
                            </motion.div>
                          );
                        }
                        if (msg.type === "ai") {
                          return (
                            <motion.div
                              key={`${cycleKey}-ai-${i}`}
                              initial={{ opacity: 0, y: 12, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{ duration: 0.3 }}
                              className="flex flex-col gap-1"
                            >
                              {msg.classification && (
                                <div className="flex items-center gap-1 px-1">
                                  <span className="rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-medium text-red-600">
                                    {msg.classification}
                                  </span>
                                </div>
                              )}
                              <div className="flex items-start gap-2">
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-[10px]">
                                  🤖
                                </div>
                                <div className="max-w-[80%]">
                                  <div className="rounded-2xl rounded-bl-sm bg-white px-3.5 py-2.5 text-[13px] leading-relaxed text-text shadow-sm ring-1 ring-warm">
                                    {msg.text}
                                  </div>
                                  <span
                                    className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${
                                      msg.badge === "auto"
                                        ? "bg-accent/10 text-accent"
                                        : "bg-warm-gold/20 text-warm-gold"
                                    }`}
                                  >
                                    {msg.badge === "auto"
                                      ? "✓ 自動応答"
                                      : "⚡ 運営者確認"}
                                  </span>
                                </div>
                              </div>
                            </motion.div>
                          );
                        }
                        return null;
                      })}
                    </AnimatePresence>

                    {/* Typing indicator */}
                    <AnimatePresence>
                      {showTyping && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <TypingIndicator />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Input bar mock */}
                  <div className="border-t border-warm px-4 py-3">
                    <div className="flex items-center gap-2 rounded-full bg-warm/60 px-4 py-2">
                      <span className="text-[12px] text-text-light">
                        メッセージを入力...
                      </span>
                      <div className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-accent">
                        <svg
                          className="h-3 w-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Home indicator */}
                <div className="flex justify-center py-2">
                  <div className="h-1 w-24 rounded-full bg-text/20" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats bar ── */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-warm bg-white/80 p-8 shadow-sm backdrop-blur-sm md:mt-24 md:grid-cols-4"
        >
          <StatItem value={30} suffix="秒" label="平均応答時間" inView={statsInView} />
          <StatItem value={109} suffix="言語" label="多言語対応" inView={statsInView} />
          <div className="text-center">
            <p className="text-2xl font-bold text-accent md:text-3xl">24/7</p>
            <p className="mt-1 text-sm text-text-muted">365日稼働</p>
          </div>
          <StatItem value={90} suffix="%+" label="自動応答率" inView={statsInView} />
        </motion.div>
      </div>
    </section>
  );
}
