"use client";

/* A comparison aid, not part of the design — delete this component and its
   two usages before launch. */

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function VersionSwitch() {
  const path = usePathname();
  const onV2 = path === "/v2";

  return (
    <div className="fixed bottom-4 right-4 z-[60]">
      <div className="flex items-center gap-1 rounded-full border border-[var(--edge-lit)] bg-black/80 p-1 backdrop-blur-xl">
        {[
          { href: "/", label: "v1 · template" },
          { href: "/v2", label: "v2 · reworked" },
        ].map((v) => {
          const active = (v.href === "/v2") === onV2;
          return (
            <Link
              key={v.href}
              href={v.href}
              className={`rounded-full px-4 py-1.5 text-xs transition-colors ${
                active ? "bg-[var(--grape)] text-white" : "text-[var(--muted)] hover:text-white"
              }`}
            >
              {v.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
