"use client";

/* A pill that leans toward the cursor as it gets close, then springs back.

   The pull is capped well below the button's own size — past that it stops
   reading as responsiveness and starts feeling like the control is dodging
   you. Touch devices never fire pointermove, so they simply get a normal
   button with no extra handling needed. */

import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { useRef } from "react";

const PULL = 0.28;
const MAX = 14;

export default function MagneticButton({
  children,
  href,
  className = "",
  ghost = false,
}: {
  children: ReactNode;
  href: string;
  className?: string;
  ghost?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 260, damping: 18, mass: 0.5 });
  const y = useSpring(my, { stiffness: 260, damping: 18, mass: 0.5 });

  function onMove(e: React.PointerEvent<HTMLAnchorElement>) {
    if (reduced || e.pointerType !== "mouse") return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    mx.set(Math.max(-MAX, Math.min(MAX, dx * PULL)));
    my.set(Math.max(-MAX, Math.min(MAX, dy * PULL)));
  }

  function reset() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={`pill ${ghost ? "pill-ghost" : ""} ${className}`}
    >
      {children}
    </motion.a>
  );
}
