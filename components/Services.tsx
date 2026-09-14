"use client";

/* The "+" cards from the reference deck.

   One card is open at a time. On wide screens the open card takes extra
   horizontal space and the others shrink — that flex-basis change is the
   whole interaction, and it maps directly to the reference, where one card
   sits wider and lit while its neighbours stay narrow. Below xl they stack and expand downward instead, because five cards sharing a
   phone's width would leave nothing legible. */

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { SERVICES } from "@/lib/content";
import Reveal from "./Reveal";

export default function Services() {
  const [open, setOpen] = useState(SERVICES.items.length - 1);
  const reduced = useReducedMotion();

  return (
    <section id="services" className="relative mx-auto max-w-[1200px] px-6 py-28">
      <Reveal>
        <h2 className="display text-[clamp(2.4rem,6vw,4.5rem)]">
          {SERVICES.heading} <span className="accent">{SERVICES.headingAccent}</span>
        </h2>
        <p className="mt-6 max-w-[46ch] text-[var(--muted)]">{SERVICES.intro}</p>
        <p className="mt-12 text-lg">Explore our solutions</p>
      </Reveal>

      <Reveal delay={0.1}>
        {/* Row layout starts at xl, not lg. At exactly 1024 five collapsed
            cards get about 130px each — too narrow for the longest service
            name, which clipped. iPad landscape stacks instead. */}
        <div className="mt-8 flex flex-col gap-3 xl:h-[300px] xl:flex-row">
          {SERVICES.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.button
                key={item.title}
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                animate={{ flexGrow: isOpen ? 2.6 : 1 }}
                transition={
                  reduced
                    ? { duration: 0 }
                    : { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }
                }
                className={`card group relative flex flex-1 flex-col justify-end overflow-hidden p-6 text-left ${
                  isOpen ? "card-lit" : "hover:border-[var(--edge-lit)]"
                }`}
              >
                <span
                  className={`absolute right-5 top-5 grid h-7 w-7 place-items-center rounded-full border transition-all duration-500 ${
                    isOpen
                      ? "rotate-45 border-[var(--lavender)] text-[var(--lavender)]"
                      : "border-[var(--edge-lit)] text-[var(--muted)]"
                  }`}
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>

                {/* No width cap: below lg these cards stack full-width, so an 8ch
                    limit clipped any word longer than it — "development" was
                    being cut off. At xl the column is narrow enough to wrap
                    the text on its own. */}
                <h3 className="text-xl leading-tight">
                  {item.title}
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.p
                      initial={reduced ? false : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={reduced ? undefined : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                      className="overflow-hidden text-sm text-[var(--muted)]"
                    >
                      <span className="mt-3 block max-w-[44ch]">{item.detail}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
