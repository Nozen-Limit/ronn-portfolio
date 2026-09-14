"use client";

/* Four fields instead of a bare mailto:.

   No backend here, so submit composes a prefilled mail — the fields still
   do the real work, which is telling the sender what to include and
   arriving already qualified. Wiring this to an API route or a form
   service later means changing one function.

   Intentionally not marked required: a half-filled enquiry is worth more
   than a bounced one. */

import { useState } from "react";
import { BRAND } from "@/lib/content";
import { V2_CONTACT } from "@/lib/content-v2";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get("name") || "—"}`,
      `Project: ${f.get("type") || "—"}`,
      `Budget: ${f.get("budget") || "—"}`,
      "",
      String(f.get("detail") || ""),
    ].join("\n");

    window.location.href =
      `mailto:${BRAND.email}?subject=${encodeURIComponent("Project enquiry")}` +
      `&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "w-full rounded-xl border border-[var(--edge)] bg-[var(--surface)] px-4 py-3 text-[var(--ink)] outline-none transition-colors focus:border-[var(--edge-lit)]";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm text-[var(--muted)]">Your name</span>
          <input name="name" autoComplete="name" className={field} />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm text-[var(--muted)]">Project type</span>
          <select name="type" className={`${field} [color-scheme:dark]`} defaultValue="">
            <option value="" disabled>Choose one</option>
            {V2_CONTACT.projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm text-[var(--muted)]">Rough budget</span>
        <select name="budget" className={`${field} [color-scheme:dark]`} defaultValue="">
          <option value="" disabled>Choose a range</option>
          {V2_CONTACT.budgets.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm text-[var(--muted)]">What are you making?</span>
        <textarea name="detail" rows={4} className={field} placeholder="A sentence is plenty to start." />
      </label>

      <button type="submit" className="pill mt-2 justify-center">
        {sent ? "Opening your mail app…" : "Send enquiry"}
      </button>

      <p className="text-xs text-[var(--dim)]">
        This opens your mail app with the details filled in — nothing is sent
        anywhere until you press send there.
      </p>
    </form>
  );
}
