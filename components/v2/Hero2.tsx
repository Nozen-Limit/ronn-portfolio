"use client";

/* Reel-first hero. The work plays behind the type instead of a gradient.

   Whether a reel exists is decided at build time by the page (a server
   component can just look at the filesystem) and passed in. Probing for it
   from the browser also worked, but a missing file logged a 404 on every
   single page load, which reads as a bug even though it isn't.

   Until Ronn drops a reel in, the still does the job with a slow push-in,
   which is close enough to judge the design by. */

import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { BRAND } from "@/lib/content";
import { V2_HERO } from "@/lib/content-v2";
import MagneticButton from "../MagneticButton";
import { Sparkle } from "../Nav";

const rise = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0 } };

export default function Hero2({ hasVideo = false }: { hasVideo?: boolean }) {
  const reduced = useReducedMotion();
  const vid = useRef<HTMLVideoElement>(null);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden px-6 pb-16 pt-32"
    >
      <div className="absolute inset-0">
        {hasVideo ? (
          <video
            ref={vid}
            src={V2_HERO.video}
            poster={V2_HERO.poster}
            autoPlay={!reduced}
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element --
             full-bleed background; next/image's wrapper fights the
             object-position and the slow scale animation. */
          <img
            src={V2_HERO.poster}
            alt=""
            className="h-full w-full object-cover"
            style={reduced ? undefined : { animation: "heroPush 24s ease-in-out infinite alternate" }}
          />
        )}

        {/* Two scrims: one to sit the type on, one to seat the section into
            the black page beneath it. */}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/45" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: reduced ? 0 : 0.12, delayChildren: 0.15 }}
        className="relative z-10 mx-auto w-full max-w-[1200px]"
      >
        <motion.div
          variants={rise}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="mb-7 flex items-center gap-3 text-xs tracking-[0.42em] text-[var(--muted)]"
        >
          <span>{BRAND.first}</span>
          <Sparkle className="h-3.5 w-3.5 text-white" />
          <span>{BRAND.last}</span>
        </motion.div>

        {/* Wider type contrast than v1: a light line against an extrabold
            one, rather than everything at a single weight. */}
        <motion.h1
          variants={rise}
          transition={{ duration: 0.85, ease: [0.22, 0.61, 0.36, 1] }}
          className="display max-w-[13ch] text-[clamp(3rem,11vw,9rem)] font-light"
        >
          {V2_HERO.headline}{" "}
          <span className="accent font-extrabold">{V2_HERO.headlineAccent}</span>
        </motion.h1>

        <motion.p
          variants={rise}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-6 max-w-[42ch] text-lg text-[var(--muted)]"
        >
          {V2_HERO.sub}
        </motion.p>

        <motion.div
          variants={rise}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-11 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href={V2_HERO.primary.href}>
            {V2_HERO.primary.label}
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </span>
          </MagneticButton>
          <MagneticButton href={V2_HERO.secondary.href} ghost>
            {V2_HERO.secondary.label}
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
