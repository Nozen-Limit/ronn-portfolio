import { V2_PROCESS } from "@/lib/content-v2";
import Reveal from "../Reveal";

/* Four steps with turnaround times against each.

   Numbered markers are appropriate here and nowhere else on the page: this
   is an actual sequence, and the order carries information the reader
   needs. */
export default function Process() {
  return (
    <section id="process" className="border-t border-[var(--edge)]">
      <div className="mx-auto max-w-[1200px] px-6 py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal>
            <h2 className="display text-[clamp(2.4rem,6vw,4.5rem)]">
              {V2_PROCESS.heading} <span className="accent">{V2_PROCESS.headingAccent}</span>
            </h2>
            <p className="mt-6 max-w-[38ch] text-[var(--muted)]">{V2_PROCESS.intro}</p>
          </Reveal>

          <ol className="flex flex-col">
            {V2_PROCESS.steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.07}>
                <li className="grid grid-cols-[auto_1fr] gap-x-5 border-t border-[var(--edge)] py-6 first:border-t-0 sm:grid-cols-[auto_1fr_auto] lg:first:border-t lg:first:pt-6">
                  <span className="font-mono text-sm text-[var(--lavender)]">{s.n}</span>
                  <div>
                    <h3 className="text-xl">{s.title}</h3>
                    <p className="mt-1.5 max-w-[46ch] text-sm text-[var(--muted)]">{s.detail}</p>
                  </div>
                  <span className="col-start-2 mt-2 text-xs tracking-wider text-[var(--dim)] sm:col-start-3 sm:mt-0 sm:text-right">
                    {s.time}
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
