"use client";

/* A card with a soft light that tracks the cursor across it.

   The glow is a separate absolutely-positioned layer rather than a
   background on the card itself, so it can sit above the card's own
   gradient but below its content without fighting either. Opacity is
   driven by hover so it fades in rather than snapping on. */

import { useRef, useState, type ReactNode } from "react";

export default function SpotlightCard({
  children,
  className = "",
  lit = false,
}: {
  children: ReactNode;
  className?: string;
  lit?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [on, setOn] = useState(false);

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerEnter={() => setOn(true)}
      onPointerLeave={() => setOn(false)}
      className={`card overflow-hidden ${lit ? "card-lit" : ""} ${className}`}
      style={{ transform: on ? "translateY(-4px)" : undefined }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: on ? 1 : 0,
          background: `radial-gradient(340px circle at ${pos.x}% ${pos.y}%, rgb(168 85 247 / 0.16), transparent 70%)`,
        }}
      />
      {/* The content wrapper — not the outer card — is the flex column.
          The glow layer above is absolutely positioned, so the wrapper is
          the card's only in-flow child — and a flex child sizes to its
          content on the main axis unless told to grow, which is why this
          is flex-1 and not h-full. Without it any mt-auto inside has
          nothing to push against and the card bottoms out early. */}
      <div className="relative flex flex-1 flex-col">{children}</div>
    </div>
  );
}
