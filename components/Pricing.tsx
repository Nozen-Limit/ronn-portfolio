import { PRICING } from "@/lib/content";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-[var(--edge)]">
      <div className="mx-auto max-w-[1200px] px-6 py-28">
        <Reveal>
          <h2 className="display text-[clamp(2.4rem,6vw,4.5rem)]">
            <span className="accent">{PRICING.heading}</span> {PRICING.headingAccent}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-end">
          {PRICING.items.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <SpotlightCard
                lit={tier.featured}
                className={`flex h-full flex-col p-8 ${tier.featured ? "lg:min-h-[28rem]" : "lg:min-h-[24rem]"}`}
              >
                <h3 className="text-2xl font-medium">{tier.name}</h3>

                <ul className="mt-8 flex flex-col gap-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--muted)]">
                      <svg viewBox="0 0 24 24" className="mt-[3px] h-4 w-4 shrink-0 text-[var(--lavender)]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between border-t border-[var(--edge)] pt-6">
                  <span className="display text-3xl tabular-nums">{tier.price}</span>
                  <a
                    href="#contact"
                    aria-label={`Enquire about the ${tier.name} tier`}
                    className="grid h-9 w-9 place-items-center rounded-full border border-[var(--edge-lit)] text-[var(--lavender)] transition-all duration-300 hover:bg-[var(--grape)] hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
