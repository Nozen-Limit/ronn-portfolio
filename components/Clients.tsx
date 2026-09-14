"use client";

/* Two rows of quotes drifting in opposite directions, paused on hover so
   they can actually be read.

   The list is rendered twice and the track translates exactly -50%, which
   is what makes the loop seamless — at the halfway point the second copy
   sits precisely where the first started. The duplicate is aria-hidden so
   assistive tech reads each quote once, not twice. */

import { useState } from "react";
import { CLIENTS } from "@/lib/content";
import Reveal from "./Reveal";
import Blob from "./Blob";

type Quote = (typeof CLIENTS.items)[number];

export default function Clients() {
  const half = Math.ceil(CLIENTS.items.length / 2);
  const rowA = CLIENTS.items.slice(0, half);
  const rowB = CLIENTS.items.slice(half);

  return (
    <section id="clients" className="relative overflow-hidden border-t border-[var(--edge)] py-28">
      <Blob className="right-[4%] top-4" size={360} opacity={0.3} delay={1} />

      <div className="relative mx-auto mb-14 max-w-[1200px] px-6">
        <Reveal>
          <h2 className="display text-[clamp(2.4rem,6vw,4.5rem)]">
            {CLIENTS.heading} <span className="accent">{CLIENTS.headingAccent}</span>{" "}
            {CLIENTS.headingTail}
          </h2>
        </Reveal>
      </div>

      <div className="flex flex-col gap-5">
        <Marquee items={rowA} duration={46} />
        <Marquee items={rowB} duration={58} reverse />
      </div>
    </section>
  );
}

function Marquee({
  items,
  duration,
  reverse = false,
}: {
  items: Quote[];
  duration: number;
  reverse?: boolean;
}) {
  /* Pause is React state rather than a group-hover class, and it has to be:
     the animation is set with the `animation` shorthand inline, and that
     shorthand resets animation-play-state to running. An inline style beats
     a class, so a class-based pause could never take effect. */
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="relative flex overflow-hidden"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      {/* Fades the rows into the page edges instead of letting cards get
          guillotined by the viewport. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

      <div
        className="flex shrink-0 gap-5 pr-5"
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-5 pr-5" aria-hidden={copy === 1}>
            {items.map((q) => (
              <figure
                key={`${copy}-${q.quote}`}
                className="card flex w-[19rem] shrink-0 flex-col justify-between p-6 sm:w-[22rem]"
              >
                <blockquote className="text-sm leading-relaxed text-[var(--muted)]">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-8">
                  <div className="text-lg font-medium">{q.name}</div>
                  <div className="text-xs text-[var(--dim)]">{q.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
