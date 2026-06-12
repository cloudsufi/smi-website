# MWS-003 — Estimate · Projects Dashboard (Project Landing Page)

**Type:** Story  
**Epic:** MWS — Estimate App  
**Priority:** P0 — Blocker  
**Labels:** frontend, estimate, projects, UX  
**Story Points:** 13

---

## User Story

> As an estimator or company admin, I want to see all my company's projects in one place so that I can quickly find, filter, and open a project to begin or continue estimating work.

---

## Design Reference

Open `millworksuite_ux.html` → click **Estimate** app card from the Hub → navigates to `#dashboard`.

```
Route: /estimate/projects
Breadcrumb: Home / Estimate
```

---

## Page Layout

```
┌─────────────────────────────────────────────────────────────────────────┐
│  [TopBar — see MWS-007]                                                 │
├─────────────────────────────────────────────────────────────────────────┤
│  Home / Estimate                                                        │
│  Projects                              [+ New project]                  │
│  14 active · 3 due this week · $4.2M in pipeline                        │
├─────────────────────────────────────────────────────────────────────────┤
│  [🔍 Search…]  Status▾  Owner▾  Bid date▾  GC▾   [Grid][List][Board]   │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  [Project cards / List table / Kanban board — view-dependent]           │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Component 1 — Page Header

### 1a. Breadcrumb
- `Home` (clickable link → navigates to `#hub`) `/` `Estimate` (plain text, current location).
- Font: `11px`, muted color (`--ink-3`).
- Separator: `/` character.

### 1b. Title Row
- **H1:** `Projects` — bold, `22px`.
- **Sub-line:** Dynamic summary text: `14 active · 3 due this week · $4.2M in pipeline`
  - "active", "due this week", and pipeline value are all live-computed from project data.
  - Muted secondary text, `12.5px`.
- **Right side:** `+ New project` primary blue button. Triggers the New Project Wizard (`#newproject`).

---

## Component 2 — Toolbar

A single horizontal row of filters and view controls, positioned below the page header.

### 2a. Search Input
- Left-most element, ~280px wide.
- Placeholder: `Search projects, GCs, addresses…`
- Magnifying glass icon on the left inside the field.
- Real-time filters the project list as the user types (debounced ~300ms).
- Matches against: project name, GC name, address, status.

### 2b. Filter Dropdowns (4)
Each filter is a compact pill-shaped dropdown:

| Filter | Default | Options |
|---|---|---|
| **Status** | `All` | Not Started, In Progress, Bid Placed, Won, Lost |
| **Owner** | `Anyone` | List of team members |
| **Bid date** | `Last 60d` | Last 7d, Last 30d, Last 60d, Last 90d, Custom range |
| **GC** | `Any` | Dropdown of all GCs in the company workspace |

- Each pill shows label + current value in bold + chevron down icon.
- On click: opens a compact dropdown panel.
- Active filter (non-default) is highlighted in `--blue-100` background with `--blue-700` text.
- Filters are cumulative (AND logic across all active filters).

### 2c. View Toggle (3 views)
Segmented control at the far right of the toolbar:

| Button | Icon | Label | Behavior |
|---|---|---|---|
| Grid | 4-square icon | `Grid` | Shows project cards in a responsive grid |
| List | 3-line icon | `List` | Shows project table (default active state) |
| Board | 3-column bars icon | `Board` | Shows Kanban board by stage |

- Active view button: `--blue-100` background, `--blue-700` text.
- Toggling view is instant — no page reload.
- Selected view should persist in `localStorage` per user.

---

## Component 3 — Grid View

Responsive card grid (`auto-fill`, min card width `258px`, 12px gap).

Each project card contains:

```
┌──────────────────────────────┐
│  [document icon]             │
│  [● In Progress tag]  14 pgs │
├──────────────────────────────┤
│  BayCare Manatee —           │
│  Pediatric Cardiology        │
│  SMI · Bid 04/07/2026        │
│                              │
│  Items   Rooms   Bid         │
│  142      8      $284k       │
│                              │
│  [RP][JM][SK]      Due Fri   │
└──────────────────────────────┘
```

### Card sub-components:

#### Thumbnail area (top ~90px)
- **Document icon:** SVG, centered, muted blue.
- **Status tag** (bottom-left of thumb): Colored pill with dot indicator.
  - `Not Started` — grey
  - `In Progress` — amber dot + text
  - `Bid Placed` — blue dot + text
  - `Won` — green dot + text
  - `Lost` — red dot + text
- **Page count** (bottom-right of thumb): `14 pages` in small monospace text.

#### Body
- **Project name:** Bold, `13px`, up to 2 lines then ellipsis.
- **Client · GC line:** `SMI · Bid 04/07/2026` — muted, `11.5px`.
- **Stats row (3 metrics):**
  - Items: total detected line items
  - Rooms: number of rooms/spaces
  - Bid: estimated total value (blue text if non-zero, `—` if not yet estimated)
- **Footer row:**
  - **Team avatars:** Stacked overlapping circles (initials), max 4 shown then `+N` overflow.
  - **Due / Outcome:** Right-aligned. `Due Fri`, `Submitted 04/03`, `Won 04/15`, `Lost 04/02`.

#### Interactions
- **Click anywhere on card** → navigate to the project workspace (`#workspace`).
- **Hover:** card lifts slightly (`translateY(-2px)`) with increased shadow.

---

## Component 4 — List View (default)

Full-width table with sticky header.

### Columns

| Column | Width | Notes |
|---|---|---|
| Status | 110px | Colored status tag with dot |
| Project | Flex-grow | Project name, bold; clickable row |
| GC | 140px | General contractor name |
| Bid Date | 100px | `MM/DD/YYYY` format; sortable |
| Pages | 60px | Right-aligned number |
| Items | 60px | Right-aligned; `—` if not started |
| Rooms | 60px | Right-aligned; `—` if not started |
| Total | 90px | Right-aligned; blue if active, red strikethrough if lost |
| Team | 90px | Stacked avatar circles |
| Due / Outcome | 120px | `Due Fri MM/DD`, `Won MM/DD`, `Lost MM/DD`, etc. |
| Actions | 36px | `⋯` icon button for context menu |

### Table Header
- Sticky positioned (stays visible on scroll).
- Background: subtle gradient from `--blue-50` to white.
- Text: uppercase, `10.5px`, `--ink-3`.
- Bottom border: `2px solid --blue-700` (strong separator).
- **Sortable columns:** `Project` and `Bid Date` show sort arrows (`▼`/`▾`). Click cycles: asc → desc → default.
- Active sort column text color shifts to `--blue-700`.

### Table Rows
- Row height: `~44px`.
- Hover: `--hover` background.
- Click on row body: navigate to `#workspace`.
- `⋯` button click: opens context menu with actions: Open, Duplicate, Archive, Delete.
  - `event.stopPropagation()` prevents row navigation on `⋯` click.

### Status Tag Color System

| Status | Dot Color | Text Color | Background |
|---|---|---|---|
| Not Started | `--ink-3` grey | `--ink-2` | `--panel` |
| In Progress | `--amber` | `--amber` | `--amber-bg` |
| Bid Placed | `--blue-500` | `--blue-700` | `--blue-100` |
| Won | `--green` | `--green` | `--green-bg` |
| Lost | `--red` | `--red` | `--red-bg` |

### Due / Outcome Cell Styling

| State | Text style |
|---|---|
| Due (future, >3 days) | Normal `--ink-2` |
| Due (urgent, ≤2 days) | Red bold, `--red` color |
| Submitted | Normal, with date |
| Won | Green text + date |
| Lost | Red text + date |

---

## Component 5 — Board (Kanban) View

Horizontal scroll of 5 stage columns. Each column is `230px` wide, with `14px` gap.

### Columns (in order)

| Stage | Header Count Badge | Accent Color |
|---|---|---|
| Not Started | Count on grey background | `--border` grey |
| In Progress | Count on amber background | `--amber` |
| Bid Placed | Count on blue background | `--blue-500` |
| Won | Count on green background | `--green` |
| Lost | Count on red background | `--red` |

### Column Header Structure
```
┌──────────────────────────────┐
│  IN PROGRESS           [2]  │  ← title + count badge
│  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  │  ← 3px color accent bar
└──────────────────────────────┘
```

- Column title: `10.5px`, `700` weight, uppercase, `--ink-2`.
- Count badge: pill, color-matched to stage.
- Accent bar: `3px` height strip at the bottom of the header in the stage's color.

### Kanban Card

```
┌──────────────────────────────┐
│  BayCare Manatee —           │
│  Pediatric Cardiology        │
│  Brasfield & Gorrie · 14 pgs │
│                              │
│  $284k          [RP][JM][SK] │
│  Due Fri                     │
└──────────────────────────────┘
```

- White background, `1px` border, `var(--r-md)` border-radius.
- **Project name:** Bold, `12px`, max 2 lines.
- **GC + pages:** Muted, `10.5px`.
- **Footer row:** Bid value (left, blue bold) + team avatars (right, `20px` each, `-4px` overlap).
- **Due line:** `10px`, color-coded by urgency (normal / amber urgent / green won / red lost / red-strikethrough lost bid).
- **Hover:** `translateY(-1px)` + increased shadow.
- **Click:** Navigate to `#workspace`.

### Multi-card collision
- When two or more projects share the same deadline pin, a `×N` badge appears on the grouped pin (as shown in the 30-day bid strip on the Hub).

---

## Component 6 — Empty States

| Scenario | Message |
|---|---|
| No projects exist | `"No projects yet. Create your first project to get started."` + primary `+ New project` button |
| Search returns no results | `"No projects match your search."` + link to clear filters |
| All projects filtered out | `"No projects match the active filters."` + `Clear filters` link |

---

## Sample Data (for implementation reference)

| Project | GC | Status | Bid Date | Pages | Items | Rooms | Total | Team |
|---|---|---|---|---|---|---|---|---|
| BayCare Manatee — Pediatric Cardiology | Brasfield & Gorrie | In Progress | 04/07/2026 | 14 | 142 | 8 | $284k | RP, JM, SK |
| St. Joe's Children's — 8th Floor Reno | Suffolk | Bid Placed | 04/03/2026 | 22 | 218 | 12 | $412k | RP, DT |
| OH ORMC 5th Floor EP & Cath Lab | Brasfield & Gorrie | Won | 04/01/2026 | 38 | 486 | 24 | $1.2M | RP, JM, SK, DT |
| AH Punta Gorda HBED — Reno | DPR | Not Started | 03/20/2026 | 9 | — | — | — | RP |
| Baptist Health MD Anderson | Skanska | In Progress | 03/09/2026 | 17 | 96 | 5 | $176k | RP, SK |
| Nemours Viera MOB SD Build-out | Robins & Morton | Lost | 03/24/2026 | 28 | 312 | 14 | $668k | RP, JM |

---

## Navigation & Routing

| Action | Destination |
|---|---|
| Click `Home` breadcrumb | `#hub` / `/` |
| Click any project (grid, list, or board) | `#workspace` / `/estimate/projects/:id` |
| Click `+ New project` | `#newproject` / `/estimate/projects/new` |
| Click `⋯` → `Duplicate` | Confirm modal → duplicate project → reload list |
| Click `⋯` → `Archive` | Confirm modal → remove from active list |
| Click `⋯` → `Delete` | Confirm modal with warning → soft-delete (90-day recovery) |

---

## Permissions

| Role | Can see projects | Can create | Can delete | Can see financials |
|---|---|---|---|---|
| Company Admin | All | ✓ | ✓ | ✓ |
| Estimator | All | ✓ | Own only | ✓ |
| Drafter | All | ✗ | ✗ | ✗ |
| Viewer | All (read-only) | ✗ | ✗ | ✗ |

---

## Accessibility Requirements

- Table columns must use `<th scope="col">` with descriptive text.
- Sort state must be communicated via `aria-sort="ascending"` / `"descending"` on `<th>`.
- Status tags must not rely on color alone — include text label.
- All avatar stacks must have `aria-label` with the list of team member names.
- Context menu (`⋯`) must be keyboard-openable and have proper `role="menu"` with `role="menuitem"` children.
- Kanban columns must have `role="list"` with cards as `role="listitem"`.

---

## Responsive Behaviour

| Breakpoint | Grid | List | Board |
|---|---|---|---|
| Desktop (≥1200px) | 4 cards/row | Full table | 5 columns visible |
| Tablet (768–1199px) | 2–3 cards/row | Horizontal scroll | Horizontal scroll |
| Mobile (<768px) | 1 card/row | Horizontal scroll | Horizontal scroll |

---

## Acceptance Criteria

- [ ] Breadcrumb `Home / Estimate` renders; `Home` navigates to Hub.
- [ ] Page H1 reads `Projects` with live summary sub-line.
- [ ] `+ New project` button navigates to new project wizard.
- [ ] Search input filters list in real-time by name, GC, and address.
- [ ] All 4 filter dropdowns render with correct default labels and option lists.
- [ ] Active (non-default) filters are visually highlighted.
- [ ] Multiple filters combine with AND logic.
- [ ] Grid, List, and Board view toggle buttons switch the view correctly.
- [ ] Active view button is highlighted in blue.
- [ ] **Grid view:** All 6 sample project cards render with correct thumbnail, status tag, page count, stats, team avatars, and due date.
- [ ] Clicking a card navigates to the workspace.
- [ ] **List view:** Table renders with sticky header, all 10 columns, correct data, and sort indicators on Project and Bid Date columns.
- [ ] Clicking a row navigates to the workspace; clicking `⋯` does not.
- [ ] **Board view:** 5 columns render in correct stage order with correct color coding, count badges, and accent bars.
- [ ] Kanban cards show name, GC, pages, bid value, team avatars, and due line.
- [ ] All three empty states render correctly.
- [ ] All status tag color variants render correctly across all three views.
- [ ] Page is fully responsive at all three breakpoints.
- [ ] Role-based visibility rules are enforced (financials hidden for Drafters/Viewers).
- [ ] Page passes WCAG 2.1 AA audit.

---

## Out of Scope for This Story

- Project detail / Workspace screen (MWS-008)
- New Project Wizard (MWS-009)
- Bulk actions (multi-select + bulk archive/delete)
- Export to CSV
- Column reordering in list view
- Drag-to-reorder in board view
