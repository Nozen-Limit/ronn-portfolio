import { BRAND, CTA } from "@/lib/content";
import Reveal from "./Reveal";
import Blob from "./Blob";
import MagneticButton from "./MagneticButton";
import { Sparkle } from "./Nav";

/* The closing slide from the reference: big statement, then the three ways
   to reach him laid across the bottom. */
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[var(--edge)] px-6 pt-32 pb-14 text-center"
    >
      <Blob className="left-1/2 top-0 -translate-x-1/2" size={520} opacity={0.42} />

      <div className="relative mx-auto max-w-[1200px]">
        <Reveal>
          <h2 className="display mx-auto max-w-[14ch] text-[clamp(2.8rem,9vw,6.5rem)]">
            {CTA.heading} <span className="accent">{CTA.headingAccent}</span>
          </h2>
          <p className="mt-7 text-lg text-[var(--muted)]">{CTA.tagline}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-[var(--edge)] pt-10 md:flex-row">
            <MagneticButton href={`tel:${BRAND.phone.replace(/[^\d+]/g, "")}`} ghost>
              {BRAND.phone}
            </MagneticButton>

            <MagneticButton href={`mailto:${BRAND.email}`}>
              {BRAND.email.toUpperCase()}
            </MagneticButton>

            <div className="flex gap-3">
              {BRAND.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-[var(--edge-lit)] text-[var(--muted)] transition-all duration-300 hover:border-[var(--violet)] hover:text-white"
                >
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col items-center gap-3 text-xs tracking-[0.3em] text-[var(--dim)]">
          <div className="flex items-center gap-2">
            <span>{BRAND.first}</span>
            <Sparkle className="h-2.5 w-2.5" />
            <span>{BRAND.last}</span>
          </div>
          <span className="tracking-normal">
            &copy; {new Date().getFullYear()} — {BRAND.role}
          </span>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ name }: { name: "facebook" | "instagram" }) {
  if (name === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M14.5 8.5H16V5.8h-1.9c-2 0-3.1 1.2-3.1 3.2v1.6H9v2.7h2v7.1h2.8v-7.1h2l.4-2.7h-2.4V9.4c0-.6.3-.9.7-.9z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
