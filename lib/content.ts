/* ==========================================================================
   SITE COPY — everything written on the page lives here.

   Edit this file to change the site. No component below needs opening.

   ⚠  ANYTHING MARKED "PLACEHOLDER" CAME FROM THE CANVA TEMPLATE, NOT FROM
      RONN. Replace it before this goes in front of clients — the
      testimonials and the prices in particular, since those two make
      claims to visitors that aren't true yet.
   ========================================================================== */

export const BRAND = {
  first: "RONN",
  last: "TRISTAN",
  role: "Video Editing & Design",
  /* PLACEHOLDER — from the template. Swap for real contact details. */
  phone: "(123) 456-7890",
  email: "hello@reallygreatsite.com",
  socials: [
    { label: "Facebook", href: "#", icon: "facebook" as const },
    { label: "Instagram", href: "#", icon: "instagram" as const },
  ],
};

export const NAV = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Tiers", href: "#tiers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Clients", href: "#clients" },
];

export const HERO = {
  headline: "Video Editing",
  headlineAccent: "& Design",
  tagline: "Design the future now",
};

export const WORK = {
  heading: "Our",
  headingAccent: "work",
  /* PLACEHOLDER — the template's studio blurb. Rewrite in Ronn's voice. */
  paragraphs: [
    "Since its founding, the studio has been the go-to for brands that need their story cut, coloured and shipped — not just filmed.",
    "Work spans a global client base across music, fashion and product. Every edit is handled end to end: concept, cut, motion, grade and delivery in whatever format the platform demands.",
  ],
  stats: [
    { value: "120+", label: "Projects delivered" },
    { value: "8", label: "Years editing" },
    { value: "40+", label: "Brands served" },
  ],
};

/* The reference shows these as a row of cards with a "+" affordance and one
   card open. `detail` is what that expansion reveals. */
export const SERVICES = {
  heading: "What we",
  headingAccent: "offer",
  intro:
    "Offerings range from graphic design and branding strategy to website development and video production.",
  items: [
    {
      title: "Brand strategy",
      detail:
        "Positioning, tone and the visual rules everything else follows — so the work still looks like you three campaigns from now.",
    },
    {
      title: "Digital marketing",
      detail:
        "Cut-downs, hooks and platform-native edits built for the feed they're posted to, not resized after the fact.",
    },
    {
      title: "Content development",
      detail:
        "Concept through delivery: what to shoot, how it gets cut, and the calendar that keeps it going out.",
    },
    {
      title: "Graphic design",
      detail:
        "Thumbnails, titles, lower-thirds and the print pieces that have to sit beside the video without clashing.",
    },
    {
      title: "Web design",
      detail:
        "The page the work actually lives on — fast, responsive and built so you can update it yourself.",
    },
  ],
};

export const TIERS = {
  heading: "Our service",
  headingAccent: "tiers",
  items: [
    {
      name: "Deluxe",
      blurb:
        "A single deliverable, handled properly. Best for a one-off launch video or a short campaign cut.",
      featured: false,
    },
    {
      name: "Professional",
      blurb:
        "An ongoing run of content with a consistent look, turned around on a predictable schedule.",
      featured: false,
    },
    {
      name: "Elite",
      blurb:
        "Full creative direction across everything you ship — strategy, production, edit and the site it lands on.",
      featured: true,
    },
  ],
};

export const PRICING = {
  heading: "Pricing",
  headingAccent: "per tier",
  /* PLACEHOLDER PRICES — these three figures are the Canva template's, not
     Ronn's. Quoting them publicly commits him to numbers he hasn't set. */
  items: [
    {
      name: "Deluxe",
      price: "$1,000",
      features: ["One finished edit", "Two revision rounds", "Source files included"],
      featured: false,
    },
    {
      name: "Professional",
      price: "$5,000",
      features: [
        "Monthly content run",
        "Unlimited revisions",
        "Motion graphics package",
        "Priority turnaround",
      ],
      featured: false,
    },
    {
      name: "Elite",
      price: "$10,000",
      features: [
        "Everything in Professional",
        "Full creative direction",
        "Brand + web design",
        "Dedicated availability",
      ],
      featured: true,
    },
  ],
};

export const CLIENTS = {
  heading: "What our",
  headingAccent: "clients",
  headingTail: "say",
  /* ⚠ PLACEHOLDER TESTIMONIALS — these are template names, not real people.
     They are written to read as unfilled slots rather than as invented
     endorsements, because fake social proof misleads whoever reads it.
     Replace every one with a real quote before launch, or delete the
     section until there are real ones. */
  items: [
    { quote: "Add a real client quote here — what they needed, and what changed after.", name: "Client name", role: "Company / role" },
    { quote: "A second quote. Specific beats glowing: name the deliverable and the result.", name: "Client name", role: "Company / role" },
    { quote: "A third. Short quotes read better in a row than long ones.", name: "Client name", role: "Company / role" },
    { quote: "Keep these to two lines each so the row stays scannable.", name: "Client name", role: "Company / role" },
    { quote: "Six is plenty. Three real ones beat six invented ones.", name: "Client name", role: "Company / role" },
    { quote: "Delete this section entirely until there are real quotes to put in it.", name: "Client name", role: "Company / role" },
  ],
};

export const CTA = {
  heading: "Partner with the",
  headingAccent: "best",
  tagline: "Design the future now",
};
