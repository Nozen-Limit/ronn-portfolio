"use client";

import { motion, useReducedMotion } from "motion/react";
import { BRAND, HERO } from "@/lib/content";
import Blob from "./Blob";
import MagneticButton from "./MagneticButton";
import { Sparkle } from "./Nav";

/* Page-load sequence: the name lockup, then the blob, then each line of the
   headline, then the button. One orchestrated arrival reads as deliberate;
   the same elements animating independently reads as noise. */
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const reduced = useReducedMotion();
  const stagger = reduced ? 0 : 0.13;

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20 text-center"
    >
      <Blob className="left-1/2 top-[12%] -translate-x-1/2" size={560} opacity={0.5} />
      <Blob className="right-[6%] bottom-[8%]" size={320} delay={4} opacity={0.3} />

      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: stagger, delayChildren: 0.1 }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.div
          variants={rise}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="mb-10 flex items-center gap-3 text-xs tracking-[0.42em] text-[var(--muted)]"
        >
          <span>{BRAND.first}</span>
          <Sparkle className="h-3.5 w-3.5 text-white" />
          <span>{BRAND.last}</span>
        </motion.div>

        <motion.h1
          variants={rise}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className="display max-w-[16ch] text-[clamp(2.9rem,10vw,7.5rem)]"
        >
          {HERO.headline}
          <br />
          <span className="accent">{HERO.headlineAccent}</span>
        </motion.h1>

        <motion.p
          variants={rise}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-7 text-lg text-[var(--muted)]"
        >
          {HERO.tagline}
        </motion.p>

        <motion.div
          variants={rise}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-12"
        >
          <MagneticButton href="#work">
            READ MORE
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </span>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
