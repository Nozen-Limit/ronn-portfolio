/* ==========================================================================
   V2 COPY — only what differs from v1. Everything else is imported from
   lib/content.ts so the two versions can't drift apart on shared text.

   ⚠  Same rule as v1: anything marked PLACEHOLDER is template filler, not
      Ronn's. The work tiles are the important one — four of the six are
      deliberately empty, because inventing a portfolio is worse than
      showing an unfinished one.
   ========================================================================== */

export const V2_HERO = {
  eyebrow: "Video editing & design",
  headline: "Cut for",
  headlineAccent: "attention",
  sub: "Edits that hold the first three seconds — and the thirty after them.",
  primary: { label: "See the work", href: "#work" },
  secondary: { label: "Start a project", href: "#contact" },
  /* Drop a real reel at /public/work/reel.mp4 and the hero plays it instead
     of the still. Nothing else needs changing — see components/v2/Hero2. */
  video: "/work/reel.mp4",
  poster: "/work/hero-still.webp",
};

export type WorkTile = {
  title: string;
  tag: string;
  /** Optional. With no clip the tile animates its still instead. */
  video?: string;
  poster?: string;
  year?: string;
};

/* Two real frames from Ronn's own deck, then four empty slots. The empty
   ones render as labelled placeholders rather than being hidden, so the
   grid reads as "four more to add" instead of quietly looking finished. */
export const V2_WORK: {
  heading: string;
  headingAccent: string;
  intro: string;
  tiles: WorkTile[];
} = {
  heading: "Selected",
  headingAccent: "work",
  intro: "Hover any frame to preview it. Six pieces, most recent first.",
  tiles: [
    { title: "Product launch film", tag: "Commercial", year: "2026", poster: "/work/reel-01.webp" },
    { title: "Wearables campaign", tag: "Brand", year: "2026", poster: "/work/reel-02.webp" },
    { title: "Add a project", tag: "Empty slot" },
    { title: "Add a project", tag: "Empty slot" },
    { title: "Add a project", tag: "Empty slot" },
    { title: "Add a project", tag: "Empty slot" },
  ],
};

export const V2_STATEMENT = {
  /* The one full-bleed pause in the scroll — no card, no grid, just a claim. */
  line: "Anyone can hold a camera.",
  lineAccent: "Almost nobody can hold attention.",
};

export const V2_PROCESS = {
  heading: "How it",
  headingAccent: "works",
  intro:
    "Four steps, with the turnaround you can expect at each. No surprises, no waiting on an email.",
  /* PLACEHOLDER TURNAROUNDS — these are plausible, not Ronn's committed
     timings. Confirm them before publishing; they read as a promise. */
  steps: [
    { n: "01", title: "Brief", time: "Same day", detail: "A short call or form. What it's for, who it's aimed at, when you need it." },
    { n: "02", title: "Rough cut", time: "3–5 days", detail: "Structure, pacing and selects — before any polish goes in, so changes are cheap." },
    { n: "03", title: "Revisions", time: "48h per round", detail: "Timestamped notes, not vague ones. Two rounds included on every tier." },
    { n: "04", title: "Delivery", time: "24h", detail: "Master plus every cut-down and aspect ratio the platforms need." },
  ],
};

/* Tiers and pricing merged — in v1 they were the same three names listed
   twice, one section after the other. Prices are "from", because a fixed
   published figure anchors the negotiation before anything is scoped. */
export const V2_OFFER = {
  heading: "Ways to",
  headingAccent: "work together",
  intro: "Every project is quoted on scope. These are starting points, not a menu.",
  items: [
    {
      name: "Deluxe",
      from: "From $1,000",
      blurb: "A single deliverable, handled properly. Best for a launch film or a one-off campaign cut.",
      features: ["One finished edit", "Two revision rounds", "Source files included"],
      featured: false,
    },
    {
      name: "Professional",
      from: "From $5,000",
      blurb: "An ongoing run of content with a consistent look, on a predictable schedule.",
      features: ["Monthly content run", "Unlimited revisions", "Motion graphics package", "Priority turnaround"],
      featured: false,
    },
    {
      name: "Elite",
      from: "Let's talk",
      blurb: "Full creative direction across everything you ship — strategy, production, edit and the site it lands on.",
      features: ["Everything in Professional", "Full creative direction", "Brand + web design", "Dedicated availability"],
      featured: true,
    },
  ],
};

export const V2_CONTACT = {
  heading: "Start a",
  headingAccent: "project",
  intro:
    "Four fields. Enough for a real answer back, rather than asking you to write an email from nothing.",
  projectTypes: ["Commercial", "Social / short-form", "Music video", "Event", "Something else"],
  budgets: ["Under $1k", "$1k – $5k", "$5k – $10k", "$10k+", "Not sure yet"],
};
