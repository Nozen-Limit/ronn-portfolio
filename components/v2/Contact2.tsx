import { BRAND } from "@/lib/content";
import { V2_CONTACT } from "@/lib/content-v2";
import Reveal from "../Reveal";
import Blob from "../Blob";
import ContactForm from "./ContactForm";
import { Sparkle } from "../Nav";

/* Asymmetric rather than centred — another break in the rhythm, and it puts
   the form beside the pitch instead of below it. */
export default function Contact2() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-[var(--edge)]">
      <Blob className="-left-24 top-10" size={440} opacity={0.3} />

      <div className="relative mx-auto max-w-[1200px] px-6 py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <h2 className="display text-[clamp(2.6rem,7vw,5rem)]">
              {V2_CONTACT.heading} <span className="accent">{V2_CONTACT.headingAccent}</span>
            </h2>
            <p className="mt-6 max-w-[36ch] text-[var(--muted)]">{V2_CONTACT.intro}</p>

            <div className="mt-10 flex flex-col gap-3 text-sm">
              <a href={`mailto:${BRAND.email}`} className="text-[var(--lavender)] hover:underline">
                {BRAND.email}
              </a>
              <a href={`tel:${BRAND.phone.replace(/[^\d+]/g, "")}`} className="text-[var(--muted)] hover:text-white">
                {BRAND.phone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col items-center gap-3 border-t border-[var(--edge)] pt-10 text-xs tracking-[0.3em] text-[var(--dim)]">
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
