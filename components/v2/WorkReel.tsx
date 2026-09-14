"use client";

/* The work reel: scroll down, the frames travel sideways.

   The section is deliberately tall and the panel inside it sticks, so
   vertical scroll distance becomes horizontal travel. That's the
   scroll-linked motion recommendation — a motion designer's own site
   shouldn't animate with the same fade-up as everyone else's.

   The heading lives inside the pinned panel rather than above it. Pinned
   outside, it scrolled away and left the tiles floating in an empty
   viewport with no context for what they were.

   Below lg this degrades to an ordinary swipe rail: pinning on a phone
   fights the native scroll and tends to feel broken. */

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { V2_WORK } from "@/lib/content-v2";
import WorkTile from "./WorkTile";
import Reveal from "../Reveal";

export default function WorkReel() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  /* The track runs wider than the viewport by roughly this much, so -62%
     lands the final tile at the right edge instead of dragging it off. */
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);

  const heading = (
    <>
      <h2 className="display text-[clamp(2.6rem,6vw,4.5rem)]">
        {V2_WORK.heading} <span className="accent">{V2_WORK.headingAccent}</span>
      </h2>
      <p className="mt-4 max-w-[44ch] text-[var(--muted)]">{V2_WORK.intro}</p>
    </>
  );

  return (
    <section id="work" className="border-t border-[var(--edge)]">
      {/* Desktop: pinned, scroll-driven */}
      <div ref={ref} className="relative hidden h-[300vh] lg:block">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="mx-auto w-full max-w-[1200px] px-6 pb-10">{heading}</div>

          <motion.div
            style={reduced ? undefined : { x }}
            className="flex gap-6 pl-[max(1.5rem,calc((100vw-1200px)/2))] pr-[12vw]"
          >
            {V2_WORK.tiles.map((t, i) => (
              <WorkTile key={i} tile={t} />
            ))}
          </motion.div>

          {/* Tells people the sideways movement is deliberate, not a stuck page. */}
          <div className="mx-auto mt-8 flex w-full max-w-[1200px] items-center gap-3 px-6 text-xs tracking-[0.2em] text-[var(--dim)]">
            <span>SCROLL</span>
            <span className="h-px flex-1 bg-[var(--edge)]" />
            <span>{V2_WORK.tiles.length} PIECES</span>
          </div>
        </div>
      </div>

      {/* Phone / tablet: a normal swipe rail */}
      <div className="lg:hidden">
        <div className="mx-auto max-w-[1200px] px-6 pt-24">
          <Reveal>{heading}</Reveal>
        </div>
        <div className="flex gap-4 overflow-x-auto px-6 py-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {V2_WORK.tiles.map((t, i) => (
            <WorkTile key={i} tile={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
