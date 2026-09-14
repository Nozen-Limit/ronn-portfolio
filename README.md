# Ronn Tristan — portfolio

Video editing & design portfolio. Built from the four Canva reference slides.

## Two versions, side by side

| Route | What it is |
|---|---|
| `/` | **v1** — a faithful build of the Canva deck. |
| `/v2` | **v2** — the deck's structure reworked around the fact that Ronn edits video. |

A switcher in the bottom-right toggles between them. It's a comparison aid —
delete `components/VersionSwitch.tsx` and its two usages before launch.

**What changed in v2, and why:**

- **Work is on the page at all.** v1 had no reel, no thumbnail, no still —
  a video editor's portfolio where you couldn't see any editing. v2 opens
  with work behind the hero and a reel as the second section.
- **The reel is scroll-linked.** Scrolling down moves the frames sideways,
  rather than the fade-up every other site uses. On a motion designer's own
  site, the motion is free proof.
- **Prices are "from".** A fixed published figure anchors the negotiation
  before anything is scoped and turns away clients who'd have paid more.
- **Tiers and Pricing merged.** In v1 they were the same three names listed
  twice in a row — an artifact of being two slides in a deck.
- **Section rhythm varies.** A pinned reel, a full-bleed statement, an
  asymmetric contact split, instead of seven identically-shaped sections.
- **A process section**, because freelancers lose work to uncertainty more
  than to price.
- **A four-field contact form** instead of a bare `mailto:`.

```
npm install
npm run dev      # http://localhost:3000
```

## Editing the site

**All copy lives in `lib/content.ts`.** Change it there — no component needs
opening for a text or price change.

## ⚠ Before this goes in front of clients

Three things in `lib/content.ts` came from the Canva template, not from
Ronn, and they make claims to visitors that aren't true yet:

| What | Where | Why it matters |
|---|---|---|
| **Testimonials** | `CLIENTS.items` | Six template names. They're written as visible empty slots rather than invented quotes, because fake social proof misleads whoever reads it. Replace with real ones, or delete the section until there are some. |
| **Prices** | `PRICING.items` | $1,000 / $5,000 / $10,000 are the template's figures. Publishing them commits Ronn to numbers he hasn't set. |
| **Phone & email** | `BRAND` | Still `(123) 456-7890` and `hello@reallygreatsite.com`. |

`WORK.paragraphs` and `WORK.stats` are also written-in placeholders — plausible,
but not verified facts about the business.

## Layout

```
app/
  layout.tsx      font + metadata
  page.tsx        section order
  globals.css     design tokens, type, surfaces, keyframes
lib/content.ts    every word on the page
components/
  Nav  Hero  Work  Services  Tiers  Pricing  Clients  Contact
  Reveal          scroll-in wrapper
  Blob            drifting gradient orb
  MagneticButton  pill that leans toward the cursor
  SpotlightCard   card with a cursor-tracking glow
```

## Notes

- **Single theme on purpose.** The reference is pure black; a light variant
  would be a different design, not this one inverted. Every colour is painted
  explicitly so the page holds on any host background.
- **The 3D blobs are CSS**, not images — layered radial gradients on a blurred,
  irregularly rounded element. Scales to any viewport, nothing to download.
- **Every animation has a resting state.** With `prefers-reduced-motion` the
  content arrives in place instead of sliding; nothing is ever left invisible.
