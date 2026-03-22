"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      {/* CTA Section */}
      <section id="contact" className="bg-dark py-20 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
              まずは
              <span className="text-accent-light">無料相談</span>
              から
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-text-light">
              「うちの施設でも使える？」「補助金は対象になる？」など、
              お気軽にご相談ください。オンラインでのご説明も可能です。
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:info@and-interplay.com"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25"
              >
                <span>✉</span>
                メールで相談する
              </a>
            </div>

            <p className="mt-6 text-sm text-text-light">
              info@and-interplay.com
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <p className="font-bold text-white">おまかせフロント</p>
              <p className="text-xs text-text-light">by INTERPLAY</p>
            </div>
            <p className="text-xs text-text-light">
              &copy; {new Date().getFullYear()} INTERPLAY Inc. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
