import { TIERS } from "@/lib/content";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

/* The featured tier sits taller than its neighbours on wide screens, which
   is how the reference singles out "Elite" — the size difference does the
   work, so it needs no badge shouting "most popular". */
export default function Tiers() {
  return (
    <section id="tiers" className="border-t border-[var(--edge)]">
      <div className="mx-auto max-w-[1200px] px-6 py-28">
        <Reveal>
          <h2 className="display text-[clamp(2.4rem,6vw,4.5rem)]">
            {TIERS.heading} <span className="accent">{TIERS.headingAccent}</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-end">
          {TIERS.items.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <SpotlightCard
                lit={tier.featured}
                className={`flex h-full flex-col p-8 ${tier.featured ? "lg:min-h-[26rem]" : "lg:min-h-[22rem]"}`}
              >
                <h3 className="text-2xl font-medium">{tier.name}</h3>
                {tier.featured && <Ribbon />}
                <p className="mt-auto pt-10 text-[var(--muted)]">{tier.blurb}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* The little stepped ribbon that sits in the corner of the reference's
   featured card. Drawn rather than imported so it inherits the palette. */
function Ribbon() {
  return (
    <svg
      viewBox="0 0 120 80"
      aria-hidden="true"
      className="pointer-events-none absolute right-4 top-4 h-20 w-28 opacity-90"
    >
      <defs>
        <linearGradient id="ribbon" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--mint)" />
          <stop offset="55%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="var(--violet)" />
        </linearGradient>
      </defs>
      <path
        d="M8 62c14 0 14-18 28-18s14-18 28-18 14-14 28-14"
        fill="none"
        stroke="url(#ribbon)"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
