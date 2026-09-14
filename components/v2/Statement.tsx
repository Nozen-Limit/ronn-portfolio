import { V2_STATEMENT } from "@/lib/content-v2";
import Reveal from "../Reveal";

/* The one section that is nothing but a claim — no card, no grid, no
   columns. In v1 every section had the same shape and the scroll read as a
   list; this is the pause that gives the rhythm somewhere to land. */
export default function Statement() {
  return (
    <section className="border-t border-[var(--edge)] px-6 py-36">
      <Reveal>
        <p className="display mx-auto max-w-[20ch] text-center text-[clamp(2.2rem,6.5vw,5rem)] font-light leading-[1.05]">
          {V2_STATEMENT.line}{" "}
          <span className="accent font-extrabold">{V2_STATEMENT.lineAccent}</span>
        </p>
      </Reveal>
    </section>
  );
}
