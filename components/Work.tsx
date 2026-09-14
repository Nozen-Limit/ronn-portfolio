import { WORK } from "@/lib/content";
import Reveal from "./Reveal";
import Blob from "./Blob";

/* Heading left, body right — the asymmetric split the reference uses, which
   also gives the long paragraphs a sane measure instead of running the full
   page width. */
export default function Work() {
  return (
    <section id="work" className="relative border-t border-[var(--edge)]">
      <Blob className="-left-32 top-10" size={380} opacity={0.22} delay={2} />

      <div className="relative mx-auto max-w-[1200px] px-6 py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal>
            <h2 className="display text-[clamp(2.4rem,6vw,4.5rem)]">
              {WORK.heading} <span className="accent">{WORK.headingAccent}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex flex-col gap-5">
              {WORK.paragraphs.map((p) => (
                <p key={p} className="text-[1.05rem] leading-relaxed text-[var(--muted)]">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <dl className="mt-20 grid grid-cols-3 gap-6 border-t border-[var(--edge)] pt-10">
            {WORK.stats.map((s) => (
              <div key={s.label}>
                <dt className="display text-[clamp(1.9rem,5vw,3.2rem)] tabular-nums">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs tracking-wider text-[var(--dim)] sm:text-sm">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
