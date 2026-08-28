"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function IntroGate() {
  // Always greet the visitor and wait for a click before entering.
  const [show, setShow] = useState(true);

  // Lock scrolling while the gate is up.
  useEffect(() => {
    const el = document.documentElement;
    if (show) {
      el.style.overflow = "hidden";
    } else {
      el.style.overflow = "";
    }
    return () => {
      el.style.overflow = "";
    };
  }, [show]);

  const enter = () => setShow(false);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          role="button"
          tabIndex={0}
          aria-label="Enter the site"
          onClick={enter}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") enter();
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center overflow-hidden bg-[var(--background)] px-6 text-center"
        >
          {/* warm background wash */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/10 blur-3xl" />
            <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-[var(--primary)]/10 blur-3xl" />
            <div className="absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-[var(--secondary)]/10 blur-3xl" />
          </div>

          {/* spinning record */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-10"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
              className="h-44 w-44 rounded-full sm:h-52 sm:w-52"
              style={{
                background:
                  "repeating-radial-gradient(circle at center, #17130f 0 2.5px, #241d16 2.5px 5px)",
                boxShadow:
                  "0 20px 50px -20px rgba(0,0,0,0.5), inset 0 0 40px rgba(0,0,0,0.6)",
              }}
            >
              <div
                className="absolute left-1/2 top-1/2 flex h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
                style={{ backgroundColor: "var(--primary)" }}
              >
                <span className="text-xl text-white/90">♪</span>
              </div>
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--background)] ring-1 ring-black/30" />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xs uppercase tracking-[0.35em] text-[var(--foreground)]/50"
          >
            now spinning
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold text-[var(--foreground)] sm:text-6xl"
          >
            Welcome to Vivian&apos;s
            <br />
            Record Shop
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-5 max-w-md text-[var(--foreground)]/60"
          >
            A little crate of projects, places, and passing thoughts.
            Ready to drop the needle?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-10"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-7 py-3 font-[family-name:var(--font-heading)] font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]">
              Step inside →
            </span>
            <motion.p
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="mt-4 text-xs text-[var(--foreground)]/40"
            >
              click anywhere to enter
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
