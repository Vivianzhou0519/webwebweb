"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function TypewriterName() {
  const fullName = "Vivian Zhou";
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(fullName.slice(0, i));
      if (i >= fullName.length) {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 1500);
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {displayed}
      <span
        className={`inline-block w-[3px] h-[0.85em] bg-[var(--primary)] ml-1 align-baseline ${
          showCursor ? "animate-[blink_0.8s_steps(1)_infinite]" : "opacity-0"
        }`}
      />
    </>
  );
}

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[var(--primary)]/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[var(--secondary)]/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--accent)]/5 blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center max-w-3xl"
      >
        <motion.h1
          variants={item}
          className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl font-bold text-[var(--foreground)] mb-6"
        >
          <TypewriterName />
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-[var(--foreground)]/60 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Full-stack developer who builds playful, thoughtful software.
          I like warm colors, clean code, and making things that feel good to use.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          variants={item}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-[var(--foreground)]/20 mx-auto flex justify-center pt-1.5"
          >
            <motion.div className="w-1 h-1.5 rounded-full bg-[var(--foreground)]/30" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
