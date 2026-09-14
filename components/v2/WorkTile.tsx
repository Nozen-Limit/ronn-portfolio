"use client";

/* One frame in the reel. Plays its clip on hover and rewinds on leave.

   Falls back to a slow push-in on the still when there's no clip yet, so
   the interaction is demonstrable before Ronn supplies footage — and a tile
   with neither clip nor still renders as a labelled empty slot rather than
   being hidden, because a grid that quietly looks full is worse than one
   that shows what's missing.

   preload="none" matters here: six autoplaying-on-hover clips would
   otherwise all download on page load. */

import { useRef, useState } from "react";
import type { WorkTile as Tile } from "@/lib/content-v2";

export default function WorkTile({ tile }: { tile: Tile }) {
  const vid = useRef<HTMLVideoElement>(null);
  const [hot, setHot] = useState(false);
  const empty = !tile.poster && !tile.video;

  function enter() {
    setHot(true);
    /* play() rejects if the browser blocks it — ignore rather than throw,
       the poster is already showing and nothing is broken. */
    vid.current?.play().catch(() => {});
  }

  function leave() {
    setHot(false);
    const v = vid.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  }

  return (
    <article
      onPointerEnter={enter}
      onPointerLeave={leave}
      className={`group relative aspect-video w-[78vw] shrink-0 overflow-hidden rounded-2xl border sm:w-[46vw] lg:w-[38vw] ${
        empty
          ? "border-dashed border-[var(--rule-lit,#2c2c38)] border-[var(--edge)]"
          : "border-[var(--edge)]"
      }`}
      style={empty ? { background: "var(--surface)" } : undefined}
    >
      {tile.video && (
        <video
          ref={vid}
          src={tile.video}
          poster={tile.poster}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {!tile.video && tile.poster && (
        /* eslint-disable-next-line @next/next/no-img-element --
           a decorative fill behind an overlay, not content: next/image's
           wrapper fights the transform used for the push-in. */
        <img
          src={tile.poster}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out"
          style={{ transform: hot ? "scale(1.07)" : "scale(1)" }}
        />
      )}

      {empty && (
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-sm text-[var(--dim)]">＋</span>
        </div>
      )}

      {/* Scrim so the caption stays legible over any frame. */}
      {!empty && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"
        />
      )}

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
        <div>
          <div className={`text-xs tracking-[0.2em] ${empty ? "text-[var(--dim)]" : "text-[var(--lavender)]"}`}>
            {tile.tag.toUpperCase()}
          </div>
          <h3 className={`mt-1 text-lg leading-tight ${empty ? "text-[var(--muted)]" : ""}`}>
            {tile.title}
          </h3>
        </div>
        {tile.year && <span className="text-xs text-[var(--muted)]">{tile.year}</span>}
      </div>

      {/* Play affordance — only where there's something to play. */}
      {!empty && (
        <div
          aria-hidden="true"
          className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-black/40 backdrop-blur transition-all duration-400 group-hover:scale-110 group-hover:border-[var(--lavender)]"
        >
          <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}
    </article>
  );
}
