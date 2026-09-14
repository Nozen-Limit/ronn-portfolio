import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero2 from "@/components/v2/Hero2";
import WorkReel from "@/components/v2/WorkReel";
import Statement from "@/components/v2/Statement";
import Services from "@/components/Services";
import Process from "@/components/v2/Process";
import Offer from "@/components/v2/Offer";
import Clients from "@/components/Clients";
import Contact2 from "@/components/v2/Contact2";

export const metadata: Metadata = {
  title: "Ronn Tristan — Video Editing & Design",
};

const V2_NAV = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Rates", href: "#offer" },
  { label: "Clients", href: "#clients" },
];

/* Section order is the argument: work comes second, straight after the
   hero, because it is what decides whether anyone keeps reading. In v1 it
   did not appear anywhere. */
export default function V2() {
  /* Checked here rather than from the browser: this is a server component,
     so it can just look. A client-side probe for a file that isn't there
     logged a 404 on every page load. Drop a reel at public/work/reel.mp4
     and the hero plays it — nothing else changes. */
  const hasVideo = existsSync(join(process.cwd(), "public", "work", "reel.mp4"));

  return (
    <>
      <Nav links={V2_NAV} />
      <main>
        <Hero2 hasVideo={hasVideo} />
        <WorkReel />
        <Statement />
        <Services />
        <Process />
        <Offer />
        <Clients />
        <Contact2 />
      </main>
    </>
  );
}
