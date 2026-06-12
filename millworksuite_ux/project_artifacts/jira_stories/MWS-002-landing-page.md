# MWS-002 — Marketing Landing Page

**Type:** Story  
**Epic:** MWS — Public & Auth Pages  
**Priority:** P0 — Blocker  
**Labels:** frontend, marketing, UX  
**Story Points:** 8

---

## User Story

> As a prospective millwork estimating company, I want to visit the MillworkSuite landing page so that I can understand what the product does, see proof of its value, and take action to sign in or book a demo.

---

## Design Reference

Open `millworksuite_ux.html` — the landing page is the first screen (`#landing`).

---

## Page Sections — Top to Bottom

---

### SECTION 1 — Top Navigation Bar

```
┌──────────────────────────────────────────────────────────────────────────┐
│  [MillworkSuite Logo]   Platform   Pricing   Customers   Resources        │
│                                                           [Sign in] [Book a demo ▶] │
└──────────────────────────────────────────────────────────────────────────┘
```

**Components:**
- **Logo:** MillworkSuite SVG logo, `height: 28px`. Clicking navigates to `#landing` (same page, scroll-to-top).
- **Nav links (4):** `Platform`, `Pricing`, `Customers`, `Resources` — plain text links, `12.5px`, hover underline.
- **Sign in button:** Secondary/ghost style. Navigates to `#login` (the sign-in screen).
- **Book a demo button:** Primary blue, filled. Opens demo booking flow (out of scope for this story — placeholder).
- Nav is sticky at top of the viewport on scroll.
- On mobile: nav links collapse into a hamburger menu.

---

### SECTION 2 — Hero

```
┌──────────────────────────────────────────────────────────────────────────┐
│  [● App #1 · Estimate · Now in pilot]                                    │
│                                                                          │
│  Stop estimating manually.                                               │
│  Start closing faster.                                                   │
│                                                                          │
│  The AI-powered estimating platform built specifically for U.S.          │
│  architectural millwork. From PDF intake to Microvellum and Cabinet      │
│  Vision — without retyping a single thing.                               │
│                                                                          │
│  [ Try it now → ]    [ Watch 90-second demo ]                            │
│                                                                          │
│  93%              11x           $2.4M           0                        │
│  Faster takeoffs  More bids/wk  Avg rev lift/yr Re-typing into CAD       │
└──────────────────────────────────────────────────────────────────────────┘
```

**Components:**

#### 2a. Pilot Badge
- Small pill with a pulsing green dot + text: `App #1 · Estimate · Now in pilot`
- Green dot animates with a subtle pulse/glow.
- Positioned above the headline.

#### 2b. Headline
- Two-line H1: **"Stop estimating manually."** / *"Start closing faster."*
- Second line is in a colored/italic style (brand accent) to create visual contrast.
- Font: Display weight, `~44–52px`, dark ink.

#### 2c. Sub-headline
- One paragraph, ~2 lines: explains the core value proposition.
- Color: secondary ink (`--ink-2`), `14–15px`.

#### 2d. CTA Row
- **Primary button:** `Try it now →` — blue filled, `→` arrow SVG icon. On click: navigates to `#hub` (the App Hub / demo workspace).
- **Secondary button:** `Watch 90-second demo` — ghost/outline style. Placeholder for demo video modal.
- Buttons are side-by-side on desktop, stacked on mobile.

#### 2e. Stats Strip (4 metrics)
- Horizontal row of 4 stat blocks, separated by a thin vertical divider:

| Metric | Value | Label |
|---|---|---|
| 1 | 93% | Faster takeoffs |
| 2 | 11x | More bids per week |
| 3 | $2.4M | Avg revenue lift / yr |
| 4 | 0 | Re-typing into CAD |

- Values in large bold display font (`~28–32px`), labels in small muted text below.

---

### SECTION 3 — App Preview Window

```
┌─────────────────────────────────────────────────────────────────────────┐
│  ● ● ●   app.millworksuite.com / projects / baycare-manatee             │
├──────────────────┬─────────────────────────┬───────────────────────────┤
│  Active Projects │   [PDF canvas with       │  Detected Items  [AI]    │
│  ─────────────── │    detection boxes       │  ─────────────────────── │
│  BayCare Manatee │    overlaid]             │  01  2 Door Upper  $845  │
│  Bid · 04/07     │                          │  02  1 Door Sink   $1,210│
│  St. Joe's 8th Fl│    [2 Door Upper]        │  03  2 Door Tall   $1,985│
│  In Progress     │    [1 Door Sink Base]    │  04  FRP Panel     $420  │
│  OH South Lake   │    [2 Door Tall]         │  ───────────────────────  │
│  OH ORMC 5th     │                          │  Reception · Sub $4,460  │
└──────────────────┴─────────────────────────┴───────────────────────────┘
```

**Components:**

#### 3a. Browser Chrome
- Faux browser frame with three dots (red/yellow/green) on the left.
- Address bar text: `app.millworksuite.com / projects / baycare-manatee` — monospaced.

#### 3b. Left Sidebar — Active Projects list
- Header: `Active Projects`
- 4 project rows, each with:
  - Project name (bold)
  - Status · Date (muted smaller text)
- First row is highlighted/active (selected state).

#### 3c. Center — PDF Canvas
- Simulated PDF drawing background (blueprint-style or light grey).
- Three AI detection bounding boxes overlaid:
  - `2 Door Upper` — with label chip
  - `1 Door Sink Base` — with label chip
  - `2 Door Tall` — with label chip
- Detection boxes are colored outlines (blue) with a small label tag.

#### 3d. Right Panel — Detected Items
- Header: `Detected Items` with a blue `AI` badge pill.
- 4 line items, each row:
  - Line number (01, 02, 03, 04)
  - Item name + spec in smaller text below
  - Price right-aligned
- Subtotal row at bottom: `Reception · Sub` / `$4,460` — bold.

---

### SECTION 4 — Features Grid

**Headline:** `Everything automated. *Nothing missed.*`  
**Sub-headline:** `Built by millwork people, for millwork people. The same workflow your team already runs — minus the busywork.`

6 feature cards in a 3×2 grid (2×3 on tablet, 1-col on mobile):

| # | Icon | Title | Description |
|---|---|---|---|
| 1 | Document-check | **PDF intake → detection** | Forward bid emails or drag-and-drop. Detection runs in under 90 seconds. |
| 2 | Clock | **Estimating & Drafting modes** | Toggle modes with a click. Estimators see margin; drafters see CAD export type. |
| 3 | Checkmark | **Direct-to-Microvellum** | Detected items map straight to the Company Product Catalogue and export natively. |
| 4 | Grid | **Your catalog. Your prices.** | Linear, sqft, tiered, formula-based, flat + add-ons. Map once, reuse forever. |
| 5 | Upload | **Versioned bids, immutable wins** | Every revision is its own version. Won bids locked as production source of truth. |
| 6 | User-plus | **Granular role permissions** | Roles tied to features. Grant consultant access without exposing pricing. |

**Each card contains:**
- Icon (SVG, ~24px, inside a colored circle or square with tinted bg).
- `H3` title.
- `P` description text (~2–3 sentences).
- Cards have white background, subtle border, hover lift (box-shadow increase).

---

### SECTION 5 — CTA Band (Bottom Banner)

```
┌──────────────────────────────────────────────────────────────────────────┐
│         Your team estimates in days. We do it in minutes.                │
│                                                                          │
│         [ Open the demo workspace ]    [ Book onboarding call ]          │
└──────────────────────────────────────────────────────────────────────────┘
```

- Dark/navy full-width band with white text.
- H2 headline with italicized second clause.
- Two buttons: Primary (`Open the demo workspace` → navigates to `#hub`) and secondary ghost (`Book onboarding call`).

---

### SECTION 6 — Footer

```
© 2026 MillworkSuite · Orlando, Florida          v3.2.1.60.3 · pilot release
```

- Single-line footer, split left (copyright) and right (version string in monospace).
- Muted color, small text.
- Minimal — no link columns for the pilot phase.

---

## Behaviour & Interactions

| Interaction | Behaviour |
|---|---|
| Click `Sign in` (nav) | Navigate to `#login` |
| Click `Try it now →` (hero) | Navigate to `#hub` (demo workspace) |
| Click `Open the demo workspace` (CTA band) | Navigate to `#hub` |
| Click `Book a demo` or `Book onboarding call` | Placeholder — opens booking modal (future story) |
| Click `Watch 90-second demo` | Placeholder — opens video modal (future story) |
| Hover on nav links | Underline / color shift to `--blue-700` |
| Hover on feature cards | Slight `translateY(-2px)` + increased box-shadow |
| Scroll past nav | Nav becomes sticky with subtle shadow |

---

## Responsive Behaviour

| Breakpoint | Behaviour |
|---|---|
| Desktop (≥1200px) | Full 3-column feature grid; hero and preview side-by-side |
| Tablet (768–1199px) | 2-column feature grid; preview stacks below hero |
| Mobile (<768px) | 1-column everything; nav collapses to hamburger; CTA buttons stack |

---

## Accessibility Requirements

- Nav links must be keyboard-navigable with visible focus ring.
- All SVG icons must have `aria-hidden="true"` since they are decorative.
- Stats strip numbers must not rely on color alone to convey meaning.
- CTA buttons must have descriptive labels (not just "click here").
- Heading hierarchy: one `H1` (hero headline), `H2` for section titles, `H3` for feature cards.

---

## Acceptance Criteria

- [ ] Sticky nav renders with logo, 4 nav links, Sign in and Book a demo buttons.
- [ ] Clicking `Sign in` navigates to the login screen.
- [ ] Hero headline renders with two-tone styling (plain + accent italic).
- [ ] Pilot badge animates with a pulsing dot.
- [ ] 4 stats render in a horizontal row with correct values.
- [ ] CTA buttons (`Try it now`, `Open the demo workspace`) navigate to App Hub.
- [ ] App preview window renders with faux browser chrome, left rail, PDF canvas with 3 detection boxes, and right-rail line items.
- [ ] 6 feature cards render in a 3×2 grid on desktop.
- [ ] CTA band renders dark with correct headline and two buttons.
- [ ] Footer renders with copyright and version string.
- [ ] Page is fully responsive across desktop, tablet, and mobile.
- [ ] Page passes WCAG 2.1 AA audit.

---

## Out of Scope

- Demo video modal
- Booking modal / Calendly integration
- Animated scroll transitions (nice-to-have post-v1)
- Multi-language support
