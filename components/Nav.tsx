"use client";

/* Fixed nav that stays invisible over the hero and fades its backdrop in
   once you've scrolled past it — so the hero reads full-bleed, but the nav
   never sits unreadable on top of section content further down. */

import { useEffect, useState } from "react";
import { BRAND, NAV } from "@/lib/content";

/* links defaults to the v1 nav, so v1 renders exactly as before and v2 can
   pass its own section list without a second copy of this component. */
export default function Nav({ links = NAV }: { links?: readonly { label: string; href: string }[] } = {}) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    /* rAF-throttled: scroll fires far more often than the screen repaints. */
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setSolid(window.scrollY > 60);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid
          ? "border-b border-[var(--edge)] bg-black/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-[1200px] items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 text-sm tracking-[0.3em]">
          <span className="font-medium">{BRAND.first}</span>
          <Sparkle />
          <span className="font-medium">{BRAND.last}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-[var(--muted)] transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="pill px-5 py-2 text-sm">
              Get in touch
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-px w-5 bg-white transition-transform duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span className={`h-px w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-px w-5 bg-white transition-transform duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile sheet. Rendered always so it can animate, hidden from the
          tab order and screen readers while closed. */}
      <div
        className={`overflow-hidden border-t border-[var(--edge)] bg-black/95 backdrop-blur-xl transition-[max-height] duration-400 md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-transparent"
        }`}
        /* React 19 takes inert as a real boolean. While closed the sheet is
           still in the DOM so it can animate, so this is what keeps its
           links out of the tab order and the accessibility tree. */
        inert={!open}
      >
        <ul className="flex flex-col px-6 py-2">
          {[...links, { label: "Get in touch", href: "#contact" }].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-[var(--edge)] py-4 text-[var(--muted)] transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

/* The four-point star between the two names in the reference lockup. */
export function Sparkle({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 0c.6 6.3 5.1 10.8 12 12-6.9 1.2-11.4 5.7-12 12-.6-6.3-5.1-10.8-12-12C6.9 10.8 11.4 6.3 12 0Z" />
    </svg>
  );
}
