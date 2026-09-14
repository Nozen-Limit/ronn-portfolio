import { V2_OFFER } from "@/lib/content-v2";
import Reveal from "../Reveal";
import SpotlightCard from "../SpotlightCard";

/* Tiers and pricing as one section.

   In v1 these were two sections listing the same three names in the same
   order with the same card featured — which came straight from the deck,
   where they were two slides with someone talking over them. On a page you
   scroll, the second one just reads as padding.

   Prices are "from". A fixed published figure anchors the negotiation
   before anything has been scoped, and quietly turns away the clients who
   would have paid more. */
export default function Offer() {
  return (
    <section id="offer" className="border-t border-[var(--edge)]">
      <div className="mx-auto max-w-[1200px] px-6 py-28">
        <Reveal>
          <h2 className="display text-[clamp(2.4rem,6vw,4.5rem)]">
            {V2_OFFER.heading} <span className="accent">{V2_OFFER.headingAccent}</span>
          </h2>
          <p className="mt-6 max-w-[46ch] text-[var(--muted)]">{V2_OFFER.intro}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-end">
          {V2_OFFER.items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <SpotlightCard
                lit={t.featured}
                className={`flex h-full flex-col p-8 ${t.featured ? "lg:min-h-[31rem]" : "lg:min-h-[27rem]"}`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-2xl font-medium">{t.name}</h3>
                  <span className="text-sm text-[var(--lavender)]">{t.from}</span>
                </div>

                <p className="mt-4 text-sm text-[var(--muted)]">{t.blurb}</p>

                <ul className="mt-7 flex flex-col gap-2.5">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--muted)]">
                      <svg viewBox="0 0 24 24" className="mt-[3px] h-4 w-4 shrink-0 text-[var(--lavender)]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-auto flex items-center justify-between gap-3 rounded-full border px-5 py-3 text-sm transition-all duration-300 ${
                    t.featured
                      ? "border-transparent bg-[var(--grape)] text-white hover:bg-[var(--violet)]"
                      : "border-[var(--edge-lit)] text-[var(--ink)] hover:bg-[rgb(168_85_247/0.08)]"
                  }`}
                >
                  Enquire about {t.name}
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
