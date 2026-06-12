# MillworkSuite — Design System Specification
## Material Design 3 & IBM Carbon Design System Variants

**Prepared by:** Principal Product Designer / Design Systems Architect  
**Date:** June 2026  
**Version:** 1.0  
**Scope:** Full product redesign specification — 12 screens, 60+ components, 3 design systems

---

# PART 1 — CURRENT PRODUCT ANALYSIS

---

## 1.1 Product Purpose

MillworkSuite is an AI-powered estimating SaaS platform built exclusively for U.S. architectural millwork companies. Its core value proposition is eliminating the manual, error-prone, multi-day workflow of reading architectural PDFs, identifying cabinet specifications, and transcribing them into estimating and CAD tools (Microvellum, Cabinet Vision).

The platform ingests architectural drawings (PDFs) via email or drag-and-drop, runs AI-powered detection to identify millwork items (cabinet types, dimensions, quantities), maps them to the company's product catalog with pricing, and produces bid-ready estimates and CAD export files — in under 90 seconds per drawing set, versus 2–3 days manually.

**Business context:** This is a pilot-stage product being evaluated by millwork estimating companies, with direct commercial and revenue implications per project. It handles millions of dollars in bid pipeline per company. Every UX failure is a direct financial risk.

---

## 1.2 User Types / Personas

### Persona 1: The Estimator (Primary)
- **Role:** Millwork estimating professional, handles 5–15 bids/week
- **Goal:** Speed — reduce bid preparation from days to minutes; maximize bid volume
- **Pain:** Manual PDF reading is tedious, error-prone, requires expertise to avoid missed items
- **Behavior:** Power user, keyboard-comfortable, data-dense views preferred, no tolerance for slow interactions
- **Key screens:** Projects Dashboard, Project Workspace, Product Catalog
- **Mental model:** Spreadsheet-native, column-scanning, numbers-first

### Persona 2: The Company Admin (Secondary)
- **Role:** Owner/manager of the millwork company
- **Goal:** Oversight — track pipeline value, team productivity, win/loss ratios
- **Pain:** No single view of all active bids and pipeline health
- **Behavior:** Occasional user, relies on summaries and dashboards, less technical
- **Key screens:** App Hub, Analytics, User Management, Settings
- **Mental model:** Dashboard-native, trend-oriented, approval-focused

### Persona 3: The Drafter (Tertiary)
- **Role:** CAD specialist who takes won bids and produces shop drawings
- **Goal:** Access production-ready BOM from estimating for CAD export
- **Pain:** Must wait for estimator handoff; pricing visibility is unnecessary noise
- **Behavior:** Read-only usage, focused on CAD Output tab only
- **Key screens:** Project Workspace (CAD Output tab only)
- **Mental model:** Part-number/SKU oriented, catalog-first

### Persona 4: The Viewer (Quaternary)
- **Role:** GC liaison, executive, or auditor
- **Goal:** Review bid details without modifying them
- **Behavior:** Infrequent, read-only, review-focused
- **Key screens:** Project Workspace (read-only), Analytics

---

## 1.3 Information Architecture

```
MillworkSuite
├── Public Zone (unauthenticated)
│   ├── Landing Page (marketing)
│   └── Login Page
│       └── EULA Modal (first login)
│
└── App Zone (authenticated)
    ├── App Hub (home — application launcher + dashboard)
    │   ├── Application Cards
    │   ├── 30-Day Bid Timeline
    │   ├── Recent Activity Feed
    │   ├── Quick Project List
    │   ├── Calendar Widget
    │   ├── Stats Overview
    │   └── Team Activity
    │
    ├── Estimate Application
    │   ├── Projects Dashboard
    │   │   ├── Grid View
    │   │   ├── List View (default)
    │   │   └── Board View (Kanban)
    │   │
    │   ├── New Project Wizard (4 steps)
    │   │   ├── Step 1: Project Details
    │   │   ├── Step 2: Upload Drawings
    │   │   ├── Step 3: Team & Role Assignment
    │   │   └── Step 4: Review & Create
    │   │
    │   ├── Project Workspace
    │   │   ├── Mode Bar (Estimate / Draft / Manage)
    │   │   ├── Pages Rail (left)
    │   │   ├── PDF Canvas (center)
    │   │   │   └── AI Detection Overlay
    │   │   └── Items Panel (right)
    │   │       ├── Estimate Tab
    │   │       ├── Rooms Tab
    │   │       └── CAD Output Tab
    │   │
    │   └── Product Catalog
    │       ├── AI Catalog Tab
    │       ├── Company Catalogue Tab
    │       ├── Templates Tab
    │       └── Defaults & AI Rules Tab
    │
    ├── Administration
    │   ├── User Management
    │   ├── User Roles & Permissions
    │   ├── Settings
    │   │   ├── Workspace settings
    │   │   ├── Appearance (theme)
    │   │   ├── Integrations
    │   │   ├── Notifications
    │   │   └── Security
    │   └── Analytics
    │       ├── Pipeline overview
    │       ├── Win/loss analysis
    │       ├── Team performance
    │       └── Revenue trends
    │
    └── Global
        ├── Top Bar (always visible)
        ├── Navigation Drawer (hamburger)
        └── Notification Panel
```

**Navigation Depth:** Maximum 3 levels. No orphan screens.  
**Primary routes:** Hub → App selection → Dashboard → Workspace  
**Cross-cutting:** User settings, notifications, and role switching accessible globally from top bar

---

## 1.4 Existing Component Inventory

### Layout Primitives
| Component | Description | Count |
|-----------|-------------|-------|
| App Shell | `display:grid; grid-template-rows:46px 1fr` | 1 |
| Top Bar | 46px fixed height, navy gradient | 1 |
| Canvas | Full remaining viewport area | 1 |
| Screen | Full-canvas overlay, `position:absolute` | 12 |
| Two-column layout | Sidebar + main, `grid-template-columns` | 4 |
| Three-column layout | Left rail + canvas + right panel | 2 |

### Navigation Components
| Component | Description |
|-----------|-------------|
| Brand mark + wordmark | Logo in top bar |
| Hamburger menu button | 44px touch target, opens drawer |
| Navigation Drawer | 248px sliding overlay drawer, `translateX(-100%)` → 0 |
| Nav Group Label | Uppercase micro-label section headers |
| Nav Item | 12.5px font, active state with blue-100 bg |
| Nav Sub-item | Expandable children, `max-height` animation |
| Nav User Card | Avatar + name + role + chevron, dropdown menu |
| User Chip (top bar) | Pill-shaped user indicator with dropdown |
| Breadcrumb | Slash-separated path links |
| Tab Bar | Underline-style tabs, 2px active border |
| Page Header | Title + subtitle + action area |

### Data Display
| Component | Description |
|-----------|-------------|
| Data Table | Full-width, sticky header, sortable columns, row hover |
| Project Card | Thumbnail + stats + team avatars + status |
| Kanban Column | Stage header + card stack |
| Kanban Card | Project summary in column |
| App Card | Icon + name + desc + live/coming state |
| Stat Box | 2×2 grid stat tile |
| Calendar Widget | 7-column grid calendar with event pips |
| Bid Timeline Strip | 30-day horizontal timeline with pins |
| Activity List | Icon + text + meta activity feed |
| Project List | Quick project table in hub sidebar |
| Pricing Tag | Pill badge for pricing model type |
| Status Tag | Colored dot + text status pill |
| Role Pill | Colored pill for user role |
| Tag/Badge | Generic colored pill |

### Form Components
| Component | Description |
|-----------|-------------|
| Text Input | `.input` class, focus ring via box-shadow |
| Label | Uppercase micro-label, `10.5px` |
| Select | Native HTML select |
| Radio Group | Custom styled radio with blue dot |
| Toggle Switch | Custom CSS toggle |
| Dropzone | Dashed border upload area |
| Formula Builder | Visual formula constructor with token buttons |
| Tier Table | Dynamic pricing tier input table |
| Add-on Row | Dynamic add-on charge rows |
| Contact Suggest | Quick-fill chips below a field |
| Owner Picker | Avatar + name + role display |

### Actions & Controls
| Component | Description |
|-----------|-------------|
| Primary Button | Blue filled, `.btn-primary` |
| Secondary Button | White outlined, `.btn` |
| Ghost Button | Transparent, `.btn-ghost` |
| Small Button | `.btn-sm`, 11px |
| Icon Button | `.icon-btn`, 26×26px |
| Tool Button | `.work-tool`, 28×28px in toolbar |
| View Toggle | Segmented control (Grid/List/Board) |
| Mode Bar | Active mode tabs in workspace |
| Zoom Controls | +/- with value display |

### Overlays & Feedback
| Component | Description |
|-----------|-------------|
| Modal | Centered overlay, max 720px |
| EULA Modal | Full-screen overlay with scroll + accept/decline |
| Product Side Panel | Slide-in modal for catalog item editing |
| Nav Overlay | Dark scrim behind navigation drawer |
| Confirm Dialog | Destructive action confirmation modal |
| Notification Panel | Right-side notification list |
| AI Status Panel | Glassmorphism floating panel on canvas |
| AI Spinner | Rotating border animation |
| Pulse Dot | Animated status indicator |

### Workspace-Specific
| Component | Description |
|-----------|-------------|
| PDF Canvas | White A4 simulation on grey grid background |
| Detection Box | Blue bordered bounding box overlay |
| Detection Label | Dark blue chip above bounding box |
| Page Thumbnail | 38×48px mini PDF preview |
| Page Rail | Scrollable left panel of page thumbnails |
| Item Row | Detected item with AI/flag tags + pricing |
| Category Row | Expandable estimate category in panel |
| Room Item | Room/space with icon + value |
| CAD Item | CAD-mapped item with ID or error state |
| Footer Totals | Subtotal/markup/total summary strip |
| Info Strip | Horizontal metadata chips below header |

---

## 1.5 UX Problems (Current State Audit)

### P1 — Critical

**UX-001: Navigation is hidden by default**
The hamburger-triggered navigation drawer is the only way to navigate the app. There is no persistent navigation rail or sidebar. Users must open a drawer to get anywhere. This creates excessive interaction cost for frequent navigation actions.

**UX-002: 46px top bar is cognitively overloaded**
The top bar carries brand identity, hamburger nav, app-level actions, user account, and implicit context all in 46px. There is no secondary header or contextual action zone. When inside a workspace, the top bar gives no indication of which app is active or where the user is in the hierarchy.

**UX-003: Three-panel workspace layout breaks on screens under 1280px**
The workspace has three fixed panels (230px left rail + flex canvas + 400px right panel). On 1280px screens the canvas becomes unusable — under 650px wide for a PDF that needs to be legible. No responsive adaptation exists.

**UX-004: Wizard progress indicator is fragile**
The New Project Wizard step indicator uses bottom-border underline tabs. Active/done states are clear, but there is no visual connection between steps, no indication of total steps on mobile, and no non-color indicator for step completion.

**UX-005: AI interaction has no discoverability**
The AI detection overlay on the PDF canvas appears as a floating panel. There is no onboarding, no empty state guidance, no affordance for what happens when detection is running vs. complete. First-time users have no mental model.

### P2 — Major

**UX-006: Filter state is not persistently visible**
Active filters are styled differently (blue highlight) but there is no "active filters" summary or easy "clear all" control. Users scanning the toolbar cannot quickly tell how many/which filters are active.

**UX-007: Kanban board lacks DnD**
The board view shows projects in stage columns but has no drag-and-drop to change stage. Users must open a project to change its status — defeating the purpose of a board view.

**UX-008: No empty states for first-time users**
The analytics dashboard, product catalog, and user management screens have no empty state design. New companies get blank tables with headers — alarming and confusing.

**UX-009: Font size is too small for sustained work**
The application defaults to `13px` body text and `12px` component text. For estimators spending 6–8 hours/day in the workspace, this will cause eye strain. WCAG requires adequate contrast at all sizes, but ergonomics requires larger default sizes for data-dense work.

**UX-010: Notification system is incomplete**
Notifications exist as a bell icon in the top bar but the notification panel CSS is incomplete. There is no notification count badge, no notification grouping, and no read/unread state beyond presence.

### P3 — Minor

**UX-011: Inconsistent border-radius system**
Three radius tokens exist (`--r:3px`, `--r-md:4px`, `--r-lg:6px`) but usage is inconsistent. Modals use `8px` inline, the EULA modal uses `8px`, the product panel uses `8px` — none of these use the defined tokens.

**UX-012: Shadow system is underutilized**
Three shadow tokens exist but only `--shadow-1` and `--shadow-2` are used consistently. `--shadow-3` appears only in modals. Cards, tables, and nav elements use inconsistent shadow applications.

**UX-013: Color-only status communication**
Project status tags use colored dots + text, which is good. However, the Kanban column accent bars, bid timeline pin colors, and filter highlights use color as the primary (often only) differentiator.

**UX-014: The landing page and app share no design language**
The marketing landing page (`#landing`) is styled completely differently from the authenticated app. Different font sizing, different layout, different spacing. Users who move from landing to app experience a jarring visual discontinuity.

---

## 1.6 Accessibility Issues

| ID | Severity | Issue | WCAG Criterion |
|----|----------|-------|----------------|
| A-001 | Critical | Top bar user chip and all icon buttons lack visible focus ring in the default CSS | 2.4.7 Focus Visible |
| A-002 | Critical | Navigation drawer items do not implement `role="navigation"` or `aria-label` | 4.1.2 Name, Role, Value |
| A-003 | Critical | Data table in projects dashboard is not a semantic `<table>` (uses CSS grid in some places) | 1.3.1 Info and Relationships |
| A-004 | High | Kanban columns are not announced as regions; cards lack `role="listitem"` | 1.3.1 Info and Relationships |
| A-005 | High | Color contrast ratio for `--ink-3` (#6B778C) on `--bg` (#F2F4F7) is 3.8:1 — fails AA for normal text | 1.4.3 Contrast (Minimum) |
| A-006 | High | Color contrast ratio for `--ink-4` (#7A8499) on white is 3.4:1 — fails AA | 1.4.3 Contrast (Minimum) |
| A-007 | High | PDF Canvas detection boxes have no accessible label or keyboard navigation | 2.1.1 Keyboard |
| A-008 | Medium | Toggle switches have no accessible text; rely on visual position only | 4.1.2 Name, Role, Value |
| A-009 | Medium | Formula builder tokens have no accessible keyboard workflow | 2.1.1 Keyboard |
| A-010 | Medium | Modal focus trap is not implemented — Tab key can escape open modals | 2.1.2 No Keyboard Trap |
| A-011 | Medium | Error messages appear visually but have no `aria-live` region | 4.1.3 Status Messages |
| A-012 | Low | Decorative SVG icons are not marked `aria-hidden="true"` consistently | 1.1.1 Non-text Content |
| A-013 | Low | Sort state on table headers is not communicated via `aria-sort` | 1.3.1 Info and Relationships |
| A-014 | Low | `14px` micro-labels on form fields can be problematic for cognitive accessibility | Best practice |

---

## 1.7 Scalability Issues

**SC-001: Single-file HTML architecture**
The entire application (6,912 lines) is a monolithic HTML file. CSS is not modular. As new screens, components, and interactions are added, specificity conflicts will increase exponentially. This is a prototype-grade architecture that cannot scale to production.

**SC-002: No design token discipline in CSS**
The `--blue-*` color tokens are the strongest part of the token system, but typography, spacing, shadow, and radius are inconsistently tokenized. Spacing is all hardcoded px values in padding/margin declarations. A design token overhaul is needed.

**SC-003: No component state machine documentation**
Interactive states (default, hover, focus, active, disabled, loading, error) are partially implemented but not systematically documented. Adding a new interactive component requires reverse-engineering the pattern each time.

**SC-004: The Emerald theme override only covers color**
The `[data-theme="emerald"]` block only overrides `--blue-*` tokens. Typography, spacing, shadow, and semantic tokens are unchanged. A proper theming system must override semantic tokens (primary, secondary, surface, on-surface) not raw palette tokens.

**SC-005: Navigation pattern does not scale to more applications**
The App Hub has 4 live app cards today. If MillworkSuite expands to 8–12 applications (estimating, project management, procurement, etc.), the current hamburger-drawer navigation will not be able to represent multi-app context effectively.

---

## 1.8 Consistency Issues

**CN-001: Two versions of almost every component exist**
`SCREEN 5` and `SCREEN 5b` (workspace), `SCREEN 6` and `SCREEN 6b` (catalog) — there are two CSS implementations of the same screen. This represents unresolved design iteration that left dead code in the codebase.

**CN-002: Typography scale is ad hoc**
Font sizes in use: 9px, 9.5px, 10px, 10.5px, 11px, 11.5px, 12px, 12.5px, 13px, 13.5px, 14px, 15px, 16px, 17px, 18px, 20px, 22px, 24px, 26px, 34px. That is 19 distinct font sizes without a defined type scale.

**CN-003: Spacing is not tokenized**
Padding and margin values in use: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 20, 22, 24, 26, 28, 32, 36, 38, 40, 48, 50, 52, 60, 80px. No spacing scale exists.

**CN-004: Inconsistent heading hierarchy**
The `page-h h1` style is used for page titles (22px). But workspace headers use `h2` for the same visual level. Settings headers use `h1` at 24px. Catalog uses no semantic heading elements in some sections.

**CN-005: Button hierarchy is ambiguous**
Ghost buttons and secondary buttons look visually identical in many contexts. The distinction between `.btn` (outlined) and `.btn-ghost` (transparent) is not clearly communicated, leading to misuse.

---

## 1.9 Design Debt Register

| ID | Type | Description | Effort to Fix |
|----|------|-------------|---------------|
| DD-001 | Architecture | Single-file monolith must become component system | 3 weeks |
| DD-002 | Tokens | Full design token system must be defined and applied | 1 week |
| DD-003 | Typography | Ad hoc 19-size scale must become a 10-step defined scale | 3 days |
| DD-004 | Spacing | Hardcoded spacing must become 8px-grid tokens | 1 week |
| DD-005 | Accessibility | 14 accessibility issues listed above | 2 weeks |
| DD-006 | Navigation | Drawer-only nav must become persistent rail or sidebar | 1 week |
| DD-007 | Responsiveness | No mobile/tablet layouts exist | 3 weeks |
| DD-008 | States | Component states not systematically defined | 1 week |
| DD-009 | Theming | Token architecture must support proper multi-theme | 3 days |
| DD-010 | Dead code | Two versions of workspace/catalog CSS | 1 day |

**Total estimated design debt remediation: ~12 developer-weeks**

---

---

# PART 2 — DESIGN SYSTEM COMPONENT MAPPING

---

## 2.1 Complete Component Mapping Matrix

| Current Component | Current Behavior | Material Design 3 Equivalent | IBM Carbon Equivalent |
|-------------------|-----------------|-------------------------------|----------------------|
| **NAVIGATION** | | | |
| Top Bar (46px) | Fixed header, navy gradient, brand + hamburger + user chip | Top App Bar (Medium, 64px) with Navigation Icon + Title + Action Items | UI Shell Header with product logo, navigation hamburger, and header actions |
| Hamburger Menu Button | Opens overlay drawer | Navigation Icon Button (leading icon in Top App Bar) | Header Hamburger Menu |
| Navigation Drawer | Sliding 248px overlay drawer | Modal Navigation Drawer (standard MD3 nav drawer) | Left Panel Navigation (Side Navigation) |
| Nav Group Label | Uppercase micro-label | Section divider with label text | Navigation group label |
| Nav Item | Icon + text, active state | Navigation Drawer Item with leading icon | Side Nav Item |
| Nav Sub-item | Expandable children | Navigation Drawer with nested items | Side Nav Menu (expandable) |
| Nav User Card | Avatar + name + role | Navigation Drawer User Account (account section) | Header Action Button with User Profile |
| User Chip (top bar) | Pill-shaped user indicator | Icon Button → Account Modal or Bottom Sheet | HeaderGlobalAction with overflow panel |
| Breadcrumb | Slash-separated | Breadcrumb (not standard MD3 — use path chip row) | Breadcrumb component |
| Underline Tab Bar | 2px bottom active | Tab (Primary) with `md-tabs` | Tabs (default Carbon tabs) |
| Page Header | Title + sub + actions | `MediumTopAppBar` + sub-heading | Page Header (custom Carbon pattern) |
| **DATA DISPLAY** | | | |
| Data Table | Sticky header, sortable | Data Grid (MD3 doesn't have tables — use custom) | DataTable (Carbon canonical) |
| Project Card | Thumb + stats | Card (Elevated, medium) | Tile (Clickable Tile) |
| App Card | Icon + name + desc | Card (Outlined/Filled) | Feature Tile |
| Kanban Column | Stage header + stack | Not native — custom Column component | Not native — custom Column |
| Kanban Card | Project summary | Card (Elevated, small) | Tile (Clickable Tile, compact) |
| Stat Box | Number + label + delta | `StatCard` using Card (Filled, tonal) | Metric Tile / Stat |
| Calendar Widget | 7-col grid | DatePicker calendar view (adapted) | DatePicker (inline) |
| Bid Timeline Strip | 30-day pin timeline | Custom — use `LinearProgressIndicator` + markers | Custom timeline (Carbon slider adapted) |
| Activity Feed | Icon + text rows | List (one-line) with leading icon | StructuredList |
| Status Tag | Colored dot + text pill | Chip (Filter) with colored icon | Tag |
| Role Pill | Colored pill | Chip (Assist) | Tag |
| Generic Badge/Tag | Pill | Badge (MD3) | Tag |
| Pricing Tag | Pill with pricing model | Chip (Filter) | Tag |
| Avatar | Initials circle | Avatar (MD3) | Avatar |
| **FORMS** | | | |
| Text Input | Custom border, focus ring | `TextField` (Filled or Outlined) | TextInput |
| Label | Uppercase micro-label | Label (from TextField) | Label |
| Select/Dropdown | Native HTML select | `ExposedDropdownMenu` | Select / Dropdown |
| Radio Group | Custom CSS radio | `RadioButton` | RadioButton |
| Toggle Switch | Custom CSS toggle | `Switch` | Toggle |
| Dropzone | Dashed border area | Custom (MD3 has no dropzone) | FileUploader |
| Formula Builder | Token button UI | Custom chip-input area | Custom (no Carbon equivalent) |
| Tier Table | Dynamic row input | Dynamic list (DataGrid pattern) | InlineEdit on DataTable |
| Contact Suggest | Quick-fill chips | Chip Input Field | Tag (dismissible) + TextInput combo |
| **ACTIONS & CONTROLS** | | | |
| Primary Button | Blue filled | `FilledButton` | Button (Primary) |
| Secondary Button | White outlined | `OutlinedButton` | Button (Secondary) |
| Ghost Button | Transparent text | `TextButton` | Button (Ghost) |
| Small Button | Smaller variant | Same — size prop on Button | Button (`sm` size) |
| Icon Button | 26×26px | `IconButton` (standard) | IconButton |
| Tool Button | 28×28 workspace | `IconButton` (toggle variant) | IconButton |
| View Toggle (Grid/List/Board) | Segmented control | `SegmentedButton` | ContentSwitcher |
| Mode Bar (workspace modes) | Underline tab | `Tab` (Primary) | Tabs |
| Zoom Controls | +/- with value | `IconButton` group with `Text` | NumberInput |
| Filter Dropdown/Pill | Dropdown trigger | `FilterChip` or `DropdownMenu` | Dropdown (multi-select) |
| Sort Header | Th with arrow | Custom + `IconButton` | DataTable sortable column |
| Context Menu (⋯) | Custom popup | `DropdownMenu` | OverflowMenu |
| **OVERLAYS** | | | |
| Modal | Centered overlay | `Dialog` (Basic) | Modal |
| EULA Modal | Full-screen w/ scroll | `Dialog` (Full-screen) | Modal (full-width) |
| Product Side Panel | Slide-in overlay | `NavigationDrawer` (modal, right) | SidePanel |
| Confirm Dialog | Destructive confirm | `AlertDialog` | Modal (danger variant) |
| Notification Panel | Right side list | `NavigationDrawer` (right) + `List` | Notification Panel (Carbon pattern) |
| AI Status Floating Panel | Glassmorphism card | `Card` (Elevated) with `LinearProgress` | InlineNotification |
| Nav Overlay / Scrim | Dark overlay | `Scrim` (MD3 standard) | Overlay |
| **WORKSPACE-SPECIFIC** | | | |
| PDF Canvas | White PDF on grey grid | Custom Surface with `Card` | Custom tile |
| Detection Box | Blue border overlay | Custom absolute positioned `Surface` | Custom with Carbon blue |
| Detection Label | Chip on box | `SuggestionChip` | Tag |
| Page Thumbnail | Mini PDF preview | Custom `Card` (small) | Tile (compact) |
| Page Rail | Scrollable left panel | `NavigationRail` (vertical) | Side Navigation (compact) |
| Item Row | Detected item | `ListItem` (three-line) | StructuredList row |
| Category Row | Expandable category | `ListItem` with expand | Accordion |
| Room Item | Room with icon | `ListItem` (two-line, leading icon) | StructuredList row |
| CAD Item | ID mapped item | `ListItem` with badge | StructuredList row |
| Footer Totals | Summary strip | Custom `Surface` | Definition List |
| Info Strip | Metadata chips | `ChipGroup` row | ContentSwitcher or inline Tags |
| **WIZARD** | | | |
| Wizard Step Header | Tab-style steps | `Stepper` (horizontal) | ProgressIndicator |
| Wizard Card | White card container | `Card` (Outlined) | Tile (white) |
| Wizard Footer | Prev/Next actions | Bottom App Bar (or inline) | Modal footer / sticky footer |

---

---

# PART 3 — MATERIAL DESIGN 3 REDESIGN SPECIFICATION

---

## 3.1 Design Philosophy

Material Design 3 (Material You) is built on three pillars: **personalization**, **expressiveness**, and **accessibility at scale**. For MillworkSuite, these manifest as:

**Personalization:** Dynamic Color from the brand's emerald-green seed color means every surface, container, and interactive element shares a harmonious tonal relationship. The system generates a full 13-tone palette from a single seed, making coherent theming effortless.

**Expressiveness:** MD3 uses rich surface hierarchy — primary, secondary, tertiary containers with distinct tonal values — to communicate information hierarchy without relying on borders alone. For a data-dense estimating tool, this means the workspace canvas, the items panel, and the page rail will each occupy a distinct surface level, making spatial relationships immediately legible.

**Accessibility at scale:** MD3's color system guarantees minimum 4.5:1 contrast for all on-surface pairings by design. All touch targets are 48dp minimum. Motion is purposeful and respects `prefers-reduced-motion`.

**For MillworkSuite specifically:** MD3 is a deliberate choice to modernize the current Office/DevExpress aesthetic into something that communicates "premium AI-native SaaS" — approachable enough to win enterprise buyers accustomed to Google Workspace, expressive enough to stand apart from generic B2B tools.

---

## 3.2 MD3 User Experience Principles

1. **Surface over borders:** Use tonal surface colors (containers) rather than 1px borders to define regions. Reserve borders for interactive inputs only.

2. **Motion as communication:** Every screen transition, panel open, and state change uses a purposeful motion curve. The workspace AI detection result appears via a container-transform pattern — the detection box expands from the scanned area.

3. **Adaptive layouts, not responsive hacks:** Use MD3's canonical breakpoints (Compact/Medium/Expanded) with explicit layout changes — not just scaled versions of desktop.

4. **Role-aware surfaces:** The three-panel workspace uses three distinct surface tones — `SurfaceVariant` for page rail (cooler), `Surface` for canvas (neutral), and `SurfaceContainer` for items panel — creating depth without shadows.

5. **FAB for primary actions:** Each screen has exactly one Floating Action Button for the most frequent action — `+ New Project` on the Dashboard, `Export / Finalize` in the Workspace.

---

## 3.3 MD3 Navigation Structure

### Navigation Architecture by Form Factor

| Breakpoint | Width | Navigation Pattern |
|------------|-------|-------------------|
| Compact | < 600dp | Bottom Navigation Bar (5 destinations max) |
| Medium | 600–839dp | Navigation Rail (left, icon-only or icon+label) |
| Expanded | ≥ 840dp | Navigation Drawer (persistent, 360px) |

### Top-Level Destinations (max 5 for Bottom Nav compliance)

```
1. Home (App Hub)          — icon: home_outlined / home (active)
2. Estimate (Projects)     — icon: folder_outlined / folder (active)
3. Catalog                 — icon: inventory_2_outlined / inventory_2 (active)
4. People (Users)          — icon: group_outlined / group (active)
5. Settings                — icon: settings_outlined / settings (active)
```

### MD3 Navigation Drawer Content (Expanded)

```
┌─────────────────────────────────────┐
│  MillworkSuite              [close] │
│  ─────────────────────────────────  │
│  Rob Pryor                          │
│  Estimator · SMI Cabinetry          │
│  ─────────────────────────────────  │
│  [Home icon]    Home                │
│  ─────────────────────────────────  │
│  ESTIMATE                           │
│  [folder]       Projects            │
│  [add_circle]   New Project         │
│  ─────────────────────────────────  │
│  CATALOG                            │
│  [inventory]    Company Catalog     │
│  [auto_awesome] AI Catalog          │
│  [layers]       Templates           │
│  ─────────────────────────────────  │
│  ADMIN                              │
│  [group]        Users               │
│  [bar_chart]    Analytics           │
│  [settings]     Settings            │
│  ─────────────────────────────────  │
│  [help_outline] Support             │
│  [logout]       Sign out            │
└─────────────────────────────────────┘
```

---

## 3.4 MD3 Page Layout Standards

### Standard Page Layout (Expanded)
```
┌────────────────────────────────────────────────────────────────┐
│  Navigation Drawer (360px)  │  Content Area (flex)             │
│                             │  ┌──────────────────────────────┐│
│                             │  │ Top App Bar (64px, sticky)   ││
│                             │  ├──────────────────────────────┤│
│                             │  │ Page Content                 ││
│                             │  │ (max-width: 1040px, centered)││
│                             │  └──────────────────────────────┘│
└────────────────────────────────────────────────────────────────┘
```

### Workspace Layout (Expanded — special case)
```
┌────────────────────────────────────────────────────────────────┐
│  Nav Rail (72px)  │  Page Rail (248dp)  │  Canvas  │  Items   │
│                   │  SurfaceVariant     │  Surface  │  Surface  │
│                   │                    │           │  Container│
└────────────────────────────────────────────────────────────────┘
```

### Content Width Standards
- Body content: max 1040px, centered
- Wide tables: max 1240px
- Workspace: full-width, no max
- Dialog: 560px (medium), 840px (large)
- Navigation Drawer: 360dp persistent, 320dp modal

---

## 3.5 MD3 Design Tokens

```json
{
  "md3": {
    "spacing": {
      "xs": "4dp",
      "sm": "8dp",
      "md": "12dp",
      "lg": "16dp",
      "xl": "24dp",
      "2xl": "32dp",
      "3xl": "48dp",
      "4xl": "64dp",
      "page-margin-compact": "16dp",
      "page-margin-medium": "24dp",
      "page-margin-expanded": "24dp",
      "column-gap": "8dp",
      "touch-target-min": "48dp"
    },

    "colors": {
      "seed": "#1A8870",
      "primary": "#006A52",
      "on-primary": "#FFFFFF",
      "primary-container": "#80F8D7",
      "on-primary-container": "#002117",
      "secondary": "#4B635B",
      "on-secondary": "#FFFFFF",
      "secondary-container": "#CDE8DC",
      "on-secondary-container": "#071E17",
      "tertiary": "#3B6373",
      "on-tertiary": "#FFFFFF",
      "tertiary-container": "#BDE9FA",
      "on-tertiary-container": "#001F2B",
      "error": "#BA1A1A",
      "on-error": "#FFFFFF",
      "error-container": "#FFDAD6",
      "on-error-container": "#410002",
      "background": "#F5FBF8",
      "on-background": "#171D1A",
      "surface": "#F5FBF8",
      "on-surface": "#171D1A",
      "surface-variant": "#DBE5DF",
      "on-surface-variant": "#3F4945",
      "surface-container-lowest": "#FFFFFF",
      "surface-container-low": "#EFF5F1",
      "surface-container": "#E9EFEb",
      "surface-container-high": "#E3E9E5",
      "surface-container-highest": "#DEE4E0",
      "outline": "#6F7974",
      "outline-variant": "#BFC9C3",
      "inverse-surface": "#2B3330",
      "inverse-on-surface": "#ECF2EE",
      "inverse-primary": "#5DDBB8"
    },

    "colors-dark": {
      "primary": "#5DDBB8",
      "on-primary": "#00382A",
      "primary-container": "#00513D",
      "on-primary-container": "#80F8D7",
      "secondary": "#B2CCC2",
      "on-secondary": "#1D352D",
      "secondary-container": "#334B43",
      "on-secondary-container": "#CDE8DC",
      "tertiary": "#A2CDD9",
      "on-tertiary": "#023445",
      "tertiary-container": "#214B5B",
      "on-tertiary-container": "#BDE9FA",
      "error": "#FFB4AB",
      "on-error": "#690005",
      "background": "#0E1512",
      "on-background": "#DEE4E0",
      "surface": "#0E1512",
      "on-surface": "#DEE4E0",
      "surface-variant": "#3F4945",
      "on-surface-variant": "#BFC9C3",
      "surface-container-lowest": "#091210",
      "surface-container-low": "#171D1A",
      "surface-container": "#1B211E",
      "surface-container-high": "#252C28",
      "surface-container-highest": "#303733"
    },

    "typography": {
      "display-large": { "family": "Google Sans Display", "size": "57sp", "weight": 400, "line-height": "64sp", "tracking": "-0.25px" },
      "display-medium": { "family": "Google Sans Display", "size": "45sp", "weight": 400, "line-height": "52sp", "tracking": "0" },
      "display-small": { "family": "Google Sans Display", "size": "36sp", "weight": 400, "line-height": "44sp", "tracking": "0" },
      "headline-large": { "family": "Google Sans", "size": "32sp", "weight": 400, "line-height": "40sp", "tracking": "0" },
      "headline-medium": { "family": "Google Sans", "size": "28sp", "weight": 400, "line-height": "36sp", "tracking": "0" },
      "headline-small": { "family": "Google Sans", "size": "24sp", "weight": 400, "line-height": "32sp", "tracking": "0" },
      "title-large": { "family": "Google Sans", "size": "22sp", "weight": 400, "line-height": "28sp", "tracking": "0" },
      "title-medium": { "family": "Google Sans", "size": "16sp", "weight": 500, "line-height": "24sp", "tracking": "0.15px" },
      "title-small": { "family": "Google Sans", "size": "14sp", "weight": 500, "line-height": "20sp", "tracking": "0.1px" },
      "label-large": { "family": "Google Sans", "size": "14sp", "weight": 500, "line-height": "20sp", "tracking": "0.1px" },
      "label-medium": { "family": "Google Sans", "size": "12sp", "weight": 500, "line-height": "16sp", "tracking": "0.5px" },
      "label-small": { "family": "Google Sans", "size": "11sp", "weight": 500, "line-height": "16sp", "tracking": "0.5px" },
      "body-large": { "family": "Google Sans Text", "size": "16sp", "weight": 400, "line-height": "24sp", "tracking": "0.5px" },
      "body-medium": { "family": "Google Sans Text", "size": "14sp", "weight": 400, "line-height": "20sp", "tracking": "0.25px" },
      "body-small": { "family": "Google Sans Text", "size": "12sp", "weight": 400, "line-height": "16sp", "tracking": "0.4px" }
    },

    "radius": {
      "none": "0dp",
      "extra-small": "4dp",
      "small": "8dp",
      "medium": "12dp",
      "large": "16dp",
      "extra-large": "28dp",
      "full": "9999dp"
    },

    "elevation": {
      "level-0": "0dp",
      "level-1": "1dp (surface tint: 5%)",
      "level-2": "3dp (surface tint: 8%)",
      "level-3": "6dp (surface tint: 11%)",
      "level-4": "8dp (surface tint: 12%)",
      "level-5": "12dp (surface tint: 14%)"
    },

    "motion": {
      "duration-short-1": "50ms",
      "duration-short-2": "100ms",
      "duration-short-3": "150ms",
      "duration-short-4": "200ms",
      "duration-medium-1": "250ms",
      "duration-medium-2": "300ms",
      "duration-medium-3": "350ms",
      "duration-medium-4": "400ms",
      "duration-long-1": "450ms",
      "duration-long-2": "500ms",
      "easing-standard": "cubic-bezier(0.2, 0, 0, 1.0)",
      "easing-standard-accelerate": "cubic-bezier(0.3, 0, 1, 1)",
      "easing-standard-decelerate": "cubic-bezier(0, 0, 0, 1)",
      "easing-emphasized": "cubic-bezier(0.2, 0, 0, 1.0)",
      "easing-emphasized-accelerate": "cubic-bezier(0.3, 0.0, 0.8, 0.15)",
      "easing-emphasized-decelerate": "cubic-bezier(0.05, 0.7, 0.1, 1.0)"
    }
  }
}
```

---

## 3.6 MD3 Accessibility Standards

- All interactive elements: minimum 48×48dp touch target
- Color contrast: guaranteed by MD3 color system (on-X pairs with X always ≥4.5:1)
- Focus indicators: MD3 uses a 3dp offset ring in `on-surface` color — visible on all surfaces
- Motion: all transitions respect `prefers-reduced-motion: reduce` — instant state changes, no transforms
- Screen reader: all navigation drawer items carry `role="menuitem"`, tabs carry `role="tab"`, dialog carries `role="dialog"` with `aria-modal="true"`
- Keyboard: all interactive elements reachable via Tab, Shift+Tab; dialogs trap focus; drawers close on Escape
- Live regions: status changes (AI detection progress, filter updates) announced via `aria-live="polite"` regions

---

## 3.7 MD3 Screen Specifications

---

### SCREEN MD3-01: Landing Page

#### Layout Structure
- Full-width marketing layout
- Navigation: `SmallTopAppBar` with transparent background, transitions to filled on scroll
- Hero section: 2-column on expanded (text left, animated preview right), single-column on compact
- Feature cards: 3-column grid → 2-column → 1-column
- CTA band: Full-width, Primary Container background
- Footer: 2-column

#### Component Tree
```
<body surface="background">
  <TopAppBar variant="small" scrollBehavior="elevate">
    <Brand: logo + wordmark>
    <NavItems: Platform, Pricing, Customers, Resources>
    <Actions: TextButton("Sign in"), FilledButton("Book Demo")>
  </TopAppBar>
  <HeroSection surface="surface">
    <AssistChip label="App #1 · Estimate · Now in pilot" icon="radio_button_checked"/>
    <Display.Large>Stop estimating manually.</Display.Large>
    <Display.Large color="primary">Start closing faster.</Display.Large>
    <Body.Large>AI-powered estimating…</Body.Large>
    <ButtonRow>
      <FilledButton>Try it now</FilledButton>
      <OutlinedButton>Watch 90-sec demo</OutlinedButton>
    </ButtonRow>
    <StatsRow: 4x StatTile with Headline.Large numbers>
  </HeroSection>
  <PreviewSection surface="surface-container-low">
    <BrowserChrome elevation="level-3">
      <ProjectRailMock/>
      <PDFCanvasMock>
        <DetectionBoxes: 3x chips + outlines/>
      </PDFCanvasMock>
      <ItemsPanelMock/>
    </BrowserChrome>
  </PreviewSection>
  <FeatureSection surface="surface">
    <Headline.Large>Everything automated…</Headline.Large>
    <Grid cols="3 → 2 → 1">
      <Card variant="outlined" x6>
        <CardHeader: icon in primary-container, title-medium>
        <CardContent: body-medium>
      </Card>
    </Grid>
  </FeatureSection>
  <CTABand surface="primary-container">
    <Headline.Medium color="on-primary-container">…</Headline.Medium>
    <FilledButton>Open demo workspace</FilledButton>
    <OutlinedButton>Book onboarding call</OutlinedButton>
  </CTABand>
  <Footer surface="surface-container">
    <Label.Medium color="on-surface-variant">© 2026 MillworkSuite</Label.Medium>
    <Label.Medium font="mono">v3.2.1.60.3</Label.Medium>
  </Footer>
</body>
```

#### Responsive Behavior
- **Compact (<600dp):** Nav collapses to hamburger → `ModalNavigationDrawer`. Hero: single column. Stats: 2×2 grid. Features: 1 column.
- **Medium (600–839dp):** Nav: inline links. Hero: single column with preview below. Features: 2 columns.
- **Expanded (≥840dp):** Full layout as described above. Hero: 2-column.

#### Motion
- Top bar background: `duration-short-4` standard easing on scroll
- Detection boxes on preview: staggered `duration-medium-2` fade-in loop
- Feature card hover: `elevation-level-2` transition in `duration-short-3`
- CTA band entry: `duration-medium-4` slide-up on viewport intersection

#### Accessibility Notes
- H1 on `Display.Large` hero headline, H2 on all section titles, H3 on feature card titles
- All SVG icons in nav are `aria-hidden="true"`; navigation links have descriptive `aria-label`
- Stats: each number + label wrapped in `<figure>` with `<figcaption>`

---

### SCREEN MD3-02: Login Page

#### Layout Structure
- Split layout (Expanded): Left 55% = full-bleed image/illustration; Right 45% = `Surface` white panel
- Single column (Compact/Medium): Full-screen card centered on `primary-container` background

#### Component Tree
```
<body surface="background">
  <LoginSplit>
    <LeftPanel: background-image + gradient overlay>
      <FloatingCard surface="surface" elevation="level-3">
        <ValueProposition: headline + bullets>
      </FloatingCard>
    </LeftPanel>
    <RightPanel surface="surface-container-lowest" elevation="level-1">
      <Logo height="32dp"/>
      <Headline.Small>Welcome back</Headline.Small>
      <Body.Large color="on-surface-variant">Continue where you left off.</Body.Large>
      <TextField variant="outlined" label="Email address" type="email"/>
      <TextField variant="outlined" label="Password" type="password" trailingIcon="visibility"/>
      <FilledButton fullWidth>Sign in</FilledButton>
      <TextButton>Forgot password?</TextButton>
    </RightPanel>
  </LoginSplit>
</body>
```

#### Interaction Model
- Email + Password → Sign In button active (validation)
- Loading state: `FilledButton` with `CircularProgressIndicator` (indeterminate, white)
- Error state: `TextField` error variant with `error-container` below-field message
- Password visibility: `IconButton` trailing icon toggles `type` attribute
- EULA trigger: `Dialog` (Full-screen) after successful auth on first login

#### Accessibility Notes
- Form wrapped in `<form>` with `action` and `method` for fallback
- `TextField` label is the accessible name — no `placeholder` reliance
- Error messages in `aria-describedby` on the field
- Keyboard: Enter in either field submits form

---

### SCREEN MD3-03: App Hub

#### Layout Structure
- `NavigationDrawer` persistent (expanded) / rail (medium) / bottom bar (compact)
- Content area: max 1240px centered, 24dp page margins
- Top section: greeting + actions row
- Body: 2-column grid (content 1fr + sidebar 340dp)
- Compact: single column, sidebar stacks below

#### Component Tree
```
<NavigationDrawer persistent>
  <AccountSection: avatar + name + role + company>
  <NavItems: Home, Projects, Catalog, Users, Analytics, Settings>
</NavigationDrawer>
<TopAppBar variant="medium">
  <Title.Large>Good morning, Rob</Title.Large>
  <Actions: IconButton(notifications), IconButton(settings)>
</TopAppBar>
<ContentArea>
  <MainColumn>
    <BidTimelineStrip surface="surface-container-high">
      <Title.Medium>Upcoming Bid Deadlines</Title.Medium>
      <TimelineTrack: 30-day, colored pins by urgency>
    </BidTimelineStrip>
    <Section label="Applications">
      <Grid cols="4 → 2 → 1" gap="md">
        <Card variant="elevated" x4-active>
          <CardHeader: icon in colored container>
          <Title.Medium>Estimate</Title.Medium>
          <Body.Small color="on-surface-variant">AI-powered…</Body.Small>
          <CardFooter: status chip + arrow>
        </Card>
        <Card variant="outlined" opacity=0.7 x4-coming/>
      </Grid>
    </Section>
    <Section label="Recent Projects">
      <List>
        <ListItem x6 leading="icon" trailing="chip + date">
          <Title.Medium>BayCare Manatee…</Title.Medium>
          <Body.Small>Brasfield & Gorrie · $284k</Body.Small>
        </ListItem>
      </List>
    </Section>
  </MainColumn>
  <SidebarColumn>
    <Card variant="outlined">
      <CardHeader>Calendar — June 2026</CardHeader>
      <InlineCalendar/>
    </Card>
    <Card variant="outlined">
      <CardHeader>Pipeline Overview</CardHeader>
      <StatGrid: 4x FilledCard tiles>
    </Card>
    <Card variant="outlined">
      <CardHeader>Recent Activity</CardHeader>
      <List: activity items>
    </Card>
  </SidebarColumn>
</ContentArea>
<FAB position="bottom-right" icon="add" label="New Project" extended/>
```

#### Navigation Behavior
- App card click → route to respective app; non-live cards show `Snackbar` ("Coming soon")
- Notification bell → `ModalNavigationDrawer` from right edge with notification list
- FAB → navigate to New Project Wizard

---

### SCREEN MD3-04: Projects Dashboard

#### Layout Structure
- Full-height content below `TopAppBar`
- Toolbar: `FilterChip` row with `SearchBar` leading
- Content: swappable Grid/List/Board with `ContentSwitcher`

#### Component Tree
```
<TopAppBar variant="small">
  <NavigationIcon/>
  <Title.Large>Projects</Title.Large>
  <Actions: FilledButton("+ New Project")>
</TopAppBar>
<SubHeader surface="surface-container-low">
  <Body.Medium color="on-surface-variant">14 active · 3 due this week · $4.2M in pipeline</Body.Medium>
</SubHeader>
<Toolbar surface="surface-container-lowest" sticky>
  <SearchBar leading="search" placeholder="Search projects, GCs…" fullWidth="false" width="280dp"/>
  <FilterChips: Status, Owner, Bid Date, GC>
  <SegmentedButton group="view" options="Grid|List|Board" trailing/>
</Toolbar>
<ContentArea>
  <!-- Grid View -->
  <MasonryGrid cols="4→3→2→1" gap="sm" v-if="view=grid">
    <Card variant="elevated" x6 clickable>
      <CardMedia: thumbnail with status chip + page count badge>
      <CardContent>
        <Title.Small>Project name</Title.Small>
        <Body.Small font="mono" color="on-surface-variant">Client · Date</Body.Small>
        <StatRow: Items / Rooms / Bid in Label.Medium>
      </CardContent>
      <CardActions surface="surface-container-low">
        <AvatarStack: team>
        <Label.Small color="on-surface-variant">Due Fri</Label.Small>
      </CardActions>
    </Card>
  </MasonryGrid>
  <!-- List View -->
  <DataTable sticky-header v-if="view=list">
    <Th sortable: Status, Project, GC, Bid Date, Pages, Items, Rooms, Total, Team, Due>
    <Tr x6 clickable>
      <Td: StatusChip>
      <Td: Title.Small + Body.Small client>
      <Td: Body.Small>
      <Td: Label.Medium font="mono">
      <Td: Label.Small right-aligned>
      <Td: Title.Small color="primary">
      <Td: AvatarStack>
      <Td: Label.Small>
      <Td: IconButton overflow-menu>
    </Tr>
  </DataTable>
  <!-- Board View -->
  <KanbanBoard h-scroll v-if="view=board">
    <KanbanColumn x5: Not Started, In Progress, Bid Placed, Won, Lost>
      <ColumnHeader: Title.Small uppercase + count Badge>
      <LinearColorBar height="4dp" full-width>
      <CardStack gap="sm">
        <Card variant="elevated" small clickable>
          <Title.Small>Project name</Title.Small>
          <Body.Small>GC · pages</Body.Small>
          <Divider/>
          <Row: Title.Small color="primary" + AvatarStack>
          <Label.Small color="on-surface-variant">Due</Label.Small>
        </Card>
      </CardStack>
      <Button variant="text" icon="add">Add project</Button>
    </KanbanColumn>
  </KanbanBoard>
</ContentArea>
<FAB icon="add" label="New project" extended position="bottom-right"/>
```

#### Filter Interaction
- `FilterChip` selected state: `primary-container` fill, `on-primary-container` text
- Active filter count: `Badge` on a summary chip "3 active" → opens `BottomSheet` (compact) or `Dropdown` (expanded) with all filter states
- Clear all: `TextButton` that appears when any filter is active

---

### SCREEN MD3-05: New Project Wizard

#### Layout Structure
- `ProgressIndicator` (horizontal stepper) replaces current tab-style steps
- Single centered `Card` (outlined, max 840dp) for each step
- Sticky bottom action bar (prev/next/save draft)

#### Component Tree
```
<TopAppBar variant="small">
  <NavigationIcon: close>
  <Title.Large>New Project</Title.Large>
</TopAppBar>
<ProgressIndicator steps="4" activeStep="{n}" type="horizontal"/>
<ContentArea padding="xl">
  <Card variant="outlined" maxWidth="840dp">
    <!-- Step 1: Project Details -->
    <CardContent>
      <Headline.Small>Project Details</Headline.Small>
      <Body.Medium color="on-surface-variant">…</Body.Medium>
      <Grid cols="2→1" gap="md">
        <TextField outlined label="Project name" required/>
        <Select label="Sector" options="Healthcare, Commercial, …"/>
        <TextField outlined label="General Contractor"/>
        <TextField outlined label="Bid Due Date" type="date"/>
        <TextField outlined label="Project Address"/>
        <Select label="Project Owner"/>
      </Grid>
    </CardContent>
    <!-- Step 2: Upload Drawings -->
    <CardContent>
      <Headline.Small>Upload Drawings</Headline.Small>
      <DropZone icon="upload_file" primary="Drag & drop PDFs" secondary="or browse files · PDF, max 50MB each"/>
      <FileList: uploaded files with progress bars>
    </CardContent>
    <!-- Step 3: Team -->
    <CardContent>
      <Headline.Small>Assign Team</Headline.Small>
      <TeamBuilder: owner + collaborators with role selects>
    </CardContent>
    <!-- Step 4: Review -->
    <CardContent>
      <Headline.Small>Review & Create</Headline.Small>
      <ReviewSummary: all entered data>
    </CardContent>
  </Card>
</ContentArea>
<StickyFooter surface="surface-container" elevation="level-2">
  <TextButton>Cancel</TextButton>
  <Spacer/>
  <Label.Medium color="on-surface-variant">Step {n} of 4</Label.Medium>
  <OutlinedButton>Save draft</OutlinedButton>
  <FilledButton>Continue</FilledButton>
</StickyFooter>
```

---

### SCREEN MD3-06: Project Workspace

#### Layout Structure
```
┌──────────────────────────────────────────────────────────────────┐
│ TopAppBar (64dp): back + project name + version + actions        │
│ TabBar (48dp): Estimate | Draft | Manage                         │
├───────────┬──────────────────────────────────┬───────────────────┤
│ Page Rail │ PDF Canvas                       │ Items Panel       │
│ 248dp     │ SurfaceVariant bg                │ 400dp             │
│ Surface-  │ White PDF with detection overlay │ SurfaceContainer  │
│ Container │                                  │                   │
│   -High   │                                  │                   │
└───────────┴──────────────────────────────────┴───────────────────┘
│ StatusBar (32dp): metadata chips                                  │
```

#### Component Tree
```
<TopAppBar variant="small">
  <BackButton/>
  <Title.Large>BayCare Manatee — Pediatric Cardiology</Title.Large>
  <Actions: version chip, FilledButton("Export"), OverflowMenu>
</TopAppBar>
<TabRow primaryTabs>
  <Tab icon="calculate" label="Estimate" active/>
  <Tab icon="architecture" label="Draft"/>
  <Tab icon="manage_accounts" label="Manage"/>
</TabRow>
<WorkspaceBody threeColumn>
  <PageRail surface="surface-container-high">
    <RailHeader>
      <Label.Medium uppercase>Pages</Label.Medium>
      <Badge>14</Badge>
      <ContentSwitcher: All / Detected / Review>
    </RailHeader>
    <PageList scrollable>
      <PageTile x14 active="{n}">
        <Thumbnail surface="surface-container-lowest"/>
        <Body.Small font="mono">A-201</Body.Small>
        <Caption>Reception Elevation</Caption>
        <StatusChips: det count + skip/review>
      </PageTile>
    </PageList>
  </PageRail>
  <Canvas surface="surface-variant">
    <GridBackground/>
    <PDFDocument surface="surface-container-lowest" elevation="level-4">
      <PDFHeader font="mono">…</PDFHeader>
      <PDFContent: blueprint grid>
      <DetectionOverlay>
        <DetectionBox x3: border primary, bg primary-container opacity-20>
          <SuggestionChip surface="primary" label="2 Door Upper"/>
        </DetectionBox>
      </DetectionOverlay>
    </PDFDocument>
    <ZoomControls surface="surface" elevation="level-2" position="bottom-center">
      <IconButton icon="remove"/>
      <Label.Medium>100%</Label.Medium>
      <IconButton icon="add"/>
    </ZoomControls>
    <AIStatusCard surface="surface" elevation="level-3" position="top-left">
      <CircularProgress indeterminate size="16dp"/>
      <Label.Medium color="primary">Detection running…</Label.Medium>
      <Body.Small>Identified 142 items</Body.Small>
    </AIStatusCard>
  </Canvas>
  <ItemsPanel surface="surface-container-low">
    <PanelHeader>
      <Title.Medium>Detected Items</Title.Medium>
      <IconButton icon="filter_list"/>
      <IconButton icon="more_vert"/>
    </PanelHeader>
    <TabRow secondaryTabs>
      <Tab label="Estimate" badge="142"/>
      <Tab label="Rooms" badge="8"/>
      <Tab label="CAD Output"/>
    </TabRow>
    <PanelContent scrollable>
      <List>
        <ListItem x-per-tab>
          <ListItemLeading: sequence number in Label.Small>
          <ListItemContent>
            <Title.Small>2 Door Upper Cabinet</Title.Small>
            <Body.Small font="mono">AWI-UC-36x30 · Confidence: 94%</Body.Small>
            <ChipRow: AI tag, confidence chip, catalog status>
          </ListItemContent>
          <ListItemTrailing>
            <Title.Small font="mono">$845</Title.Small>
            <Label.Small color="on-surface-variant">$28/LF</Label.Small>
          </ListItemTrailing>
        </ListItem>
      </List>
    </PanelContent>
    <PanelFooter surface="surface-container" elevation="level-2">
      <Row: Label + mono value x3 subtotals>
      <Divider/>
      <Row: Title.Large color="primary" = Total>
    </PanelFooter>
  </ItemsPanel>
</WorkspaceBody>
<StatusBar surface="surface-container-lowest">
  <ChipRow: Project, GC, Sector, Revision, Status>
</StatusBar>
```

#### Responsive Behavior
- **Compact:** Page rail hidden; access via `BottomSheet`. Items panel hidden; access via `FAB` or bottom sheet. Only canvas visible.
- **Medium:** Navigation rail replaces drawer. Items panel shown as persistent bottom sheet (draggable). Page rail as collapsible left panel.
- **Expanded:** Full 3-panel as described.

---

### SCREEN MD3-07: Product Catalog

#### Layout Structure
- `TabRow` (secondary) across top: AI Catalog / Company Catalog / Templates / Defaults
- Each tab has its own layout — Catalog uses 2-column sidebar/main, Templates uses card grid

#### Component Tree (Company Catalog tab)
```
<TopAppBar>Catalog</TopAppBar>
<TabRow secondary: AI Catalog, Company Catalog, Templates, Defaults>
<TabContent: Company Catalog>
  <TwoColumn>
    <Sidebar surface="surface-container-high" width="200dp">
      <Label.Medium uppercase>Categories</Label.Medium>
      <List dense>
        <ListItem x8: category name + count>
      </List>
    </Sidebar>
    <Main>
      <Toolbar>
        <SearchBar/>
        <FilterChips>
        <FilledButton icon="add">Add item</FilledButton>
      </Toolbar>
      <DataTable>
        <Th: SKU, Name, Pricing Type, Base Price, Unit, Actions>
        <Tr x-per-category>
          <Td font="mono">MWS-UC-3630</Td>
          <Td>2 Door Upper Cabinet 36"×30"</Td>
          <Td><FilterChip label="Linear" color="primary"/></Td>
          <Td font="mono" right>$28.00/LF</Td>
          <Td>Linear ft</Td>
          <Td><IconButton overflow/></Td>
        </Tr>
      </DataTable>
    </Main>
  </TwoColumn>
</TabContent>
```

#### Product Edit — Side Sheet (MD3 Modal Drawer)
```
<ModalNavigationDrawer side="right" width="480dp">
  <DrawerHeader surface="primary" color="on-primary">
    <Title.Large>Edit Product</Title.Large>
    <Body.Small font="mono">MWS-UC-3630</Body.Small>
  </DrawerHeader>
  <TabRow: Details, Pricing, Drafting>
  <DrawerContent scrollable>
    <TextField: Product name>
    <TextField: SKU>
    <Select: Category>
    <SegmentedButton: pricing model>
    <DynamicPricingForm: conditionally rendered>
  </DrawerContent>
  <DrawerFooter>
    <TextButton>Cancel</TextButton>
    <FilledButton>Save changes</FilledButton>
  </DrawerFooter>
</ModalNavigationDrawer>
```

---

### SCREEN MD3-08: User Management

#### Layout Structure
- Standard page layout
- Users `DataTable` (full width, left-heavy)
- Right-side `Card` summary of role distribution

#### Interaction Model
- Row click → right `SideSheet` opens with user detail / role assignment
- Bulk select → `TopAppBar` transforms to selection action bar (MD3 pattern)
- Role assignment → `ExposedDropdownMenu`

---

### SCREEN MD3-09: Settings

#### Layout Structure
- 2-column: left nav rail (settings sections) + right content
- On compact: full-screen list → drill into section

#### Component Specifications
- Theme selector: `RadioButton` cards with visual preview
- Toggle settings: `Switch` with `ListItem` layout
- API keys: `TextField` with `ContentDescription` + copy `IconButton`
- Integration cards: `Card (outlined)` with `Switch` + status `AssistChip`

---

### SCREEN MD3-10: Analytics

#### Layout Structure
- `MediumTopAppBar` with time range `SegmentedButton`
- KPI strip: 4× `Card (filled, tonal)` in a row
- Charts: `Card (elevated)` containers
- Data table: pipeline breakdown

#### Component Tree
```
<TopAppBar>Analytics</TopAppBar>
<FilterRow>
  <SegmentedButton: Last 7d, Last 30d, Last 90d, YTD>
</FilterRow>
<ContentArea>
  <KPIRow>
    <StatCard color="primary-container" x4>
      <Headline.Medium>$4.2M</Headline.Medium>
      <Body.Small>Pipeline Value</Body.Small>
      <TrendChip: delta>
    </StatCard>
  </KPIRow>
  <ChartGrid cols="2→1">
    <Card elevated: WinRate line chart>
    <Card elevated: Revenue by category bar chart>
    <Card elevated: Bid volume timeline>
    <Card elevated: Team performance table>
  </ChartGrid>
</ContentArea>
```

---

### SCREEN MD3-11: EULA

#### Component Tree
```
<Dialog fullscreen surface="surface">
  <DialogHeader surface="primary" color="on-primary">
    <Logo/>
    <Headline.Small>License Agreement</Headline.Small>
    <Body.Small>Effective 01 Jan 2026</Body.Small>
  </DialogHeader>
  <Divider/>
  <ScrollableContent maxHeight="calc(100vh - 220dp)">
    <EULAText: body-medium, line-height 1.75>
  </ScrollableContent>
  <LinearProgressIndicator: scroll-based 0→100%>
  <DialogActions surface="surface-container-low">
    <TextButton>Decline</TextButton>
    <FilledButton disabled-until-scroll-complete>Accept Agreement</FilledButton>
  </DialogActions>
</Dialog>
```

#### Interaction
- Accept button: disabled (tonal, `surface-container`) until user scrolls to bottom
- Scroll progress: `LinearProgressIndicator` fills as user scrolls
- Decline: triggers `AlertDialog` confirmation before sign-out
- Accept: `Snackbar` "Agreement accepted" + route to App Hub

---

## 3.8 MD3 Dark Theme

MillworkSuite's dark theme uses the MD3 dark color scheme generated from the same emerald seed. Key principles:
- Background: `#0E1512` (very dark forest green-tinted black)
- Surface containers: step up from `#171D1A` (low) to `#303733` (highest)
- Primary in dark: `#5DDBB8` (bright teal, high contrast on dark surfaces)
- All shadows: replaced by surface tint (MD3 dark mode doesn't use shadows — elevation is communicated through tonal surface values alone)
- Charts and canvas: maintain sufficient contrast via `primary-container` or `tertiary-container` overlays

---

---

# PART 4 — IBM CARBON DESIGN SYSTEM SPECIFICATION

---

## 4.1 Carbon Design Philosophy

Carbon is IBM's enterprise design system, built for scale, density, and the complexity of professional software. Where MD3 is expressive and personalized, Carbon is precise, systematic, and deferential to data.

For MillworkSuite, Carbon's philosophy manifests as:

**Data density first:** Carbon's typography scale goes down to 12px (`$label-01`) without breaking accessibility. Every pixel of the workspace is used to show more data, not more chrome. The estimator persona needs this — they're reading tables, not admiring interface.

**Enterprise credibility:** MillworkSuite competes in the millwork ERP space against tools like Microvellum and Cabinet Vision — both data-dense, utility-first tools. A Carbon-designed MillworkSuite visually signals enterprise-grade reliability to buyers accustomed to these tools.

**Systematic consistency:** Carbon's token system (`$text-primary`, `$background`, `$layer-01`) maps directly to a production React codebase via `@carbon/react`. Every component is spec'd, coded, and tested.

**AI-native patterns:** Carbon has explicit AI patterns and components (AI Label, AI skeleton, Slug components) that are directly relevant to MillworkSuite's detection and confidence-scoring features.

---

## 4.2 Carbon Enterprise UX Principles

1. **Respect the data:** Tables are the primary content type. Never sacrifice column density for visual decoration. A data table with 11 columns is a feature, not a problem to solve by hiding columns.

2. **Keyboard-first interaction:** Carbon is built for keyboard power users. Every action — sort, filter, select, expand — is reachable via keyboard without mouse.

3. **Progressive disclosure:** Complex forms and configurations use wizard patterns, section accordions, and flyout panels — not all-at-once overwhelming forms.

4. **Predictable patterns:** Every page follows the same structural grammar — header + toolbar + content. No surprises. No custom layouts.

5. **Status as information:** Status indicators, AI labels, and confidence scores are data points, not decorative elements. Carbon's AI label component explicitly communicates "this was generated by AI" — critical for an AI-estimating tool where accuracy is financially consequential.

---

## 4.3 Carbon Navigation Model

### Shell Navigation
Carbon's UI Shell defines the outer chrome:

```
┌────────────────────────────────────────────────────────────────┐
│ Header (48px)                                                   │
│ [☰] [MillworkSuite logo] [Platform nav items] [Global actions] │
├──────┬─────────────────────────────────────────────────────────┤
│ Side │ Content Area                                            │
│ Nav  │                                                          │
│(256px│                                                          │
│     │                                                          │
└──────┴─────────────────────────────────────────────────────────┘
```

**Header (48px fixed):**
- Left: Hamburger + Product logo + Product name
- Center: Platform-level navigation links (for multi-product expansion)
- Right: Global action icons (search, notifications, help, user avatar)

**SideNav (256px, persistent on desktop):**
- Collapsible to rail (48px) via header hamburger
- Section headers with group collapsing
- Active item: solid 4px left border in `$interactive`

### Carbon Left Panel Navigation Structure

```
SideNav
├── Header: MillworkSuite [Estimate App]
├── Divider
├── SideNavLink: Home                    icon: home
├── Divider
├── SideNavMenu: Estimate               icon: document
│   ├── SideNavMenuItem: Projects
│   ├── SideNavMenuItem: New Project
│   └── SideNavMenuItem: Analytics
├── SideNavMenu: Catalog                icon: catalog
│   ├── SideNavMenuItem: Company Catalog
│   ├── SideNavMenuItem: AI Catalog
│   └── SideNavMenuItem: Templates
├── SideNavMenu: Administration         icon: settings
│   ├── SideNavMenuItem: Users
│   ├── SideNavMenuItem: Roles
│   └── SideNavMenuItem: Settings
└── Divider
└── SideNavLink: Help
```

---

## 4.4 Carbon Layout Model

### Grid System
Carbon uses a 16-column grid with standardized responsive rules:

| Breakpoint | Columns | Gutter | Margin |
|------------|---------|--------|--------|
| sm (<672px) | 4 | 16px | 0 |
| md (672–1056px) | 8 | 16px | 16px |
| lg (1056–1312px) | 16 | 16px | 16px |
| xlg (1312–1584px) | 16 | 16px | 16px |
| max (>1584px) | 16 | 16px | auto |

### Vertical Spacing
- All spacing uses Carbon's `$spacing` scale: 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 160px
- No arbitrary px values permitted

### White Space / Layout Shell
- Content area starts at `256px` left (side nav) + `48px` top (header)
- Page header: `$spacing-07` (32px) horizontal padding
- Content: `$spacing-05` (16px) horizontal padding on content

---

## 4.5 Carbon Design Tokens

```json
{
  "carbon": {
    "colors": {
      "background": "$background: #f4f4f4",
      "background-hover": "$background-hover: #e8e8e8",
      "background-active": "$background-active: #c6c6c6",
      "background-selected": "$background-selected: #e0e0e0",
      "layer-01": "$layer-01: #f4f4f4",
      "layer-02": "$layer-02: #ffffff",
      "layer-03": "$layer-03: #f4f4f4",
      "layer-accent-01": "$layer-accent-01: #e0e0e0",
      "layer-accent-02": "$layer-accent-02: #e0e0e0",
      "field-01": "$field-01: #f4f4f4",
      "field-02": "$field-02: #ffffff",
      "interactive": "$interactive: #0f62fe",
      "border-strong-01": "$border-strong-01: #8d8d8d",
      "border-subtle-01": "$border-subtle-01: #e0e0e0",
      "border-interactive": "$border-interactive: #0f62fe",
      "focus": "$focus: #0f62fe",
      "text-primary": "$text-primary: #161616",
      "text-secondary": "$text-secondary: #525252",
      "text-placeholder": "$text-placeholder: #a8a8a8",
      "text-on-color": "$text-on-color: #ffffff",
      "text-disabled": "$text-disabled: #c6c6c6",
      "link-primary": "$link-primary: #0f62fe",
      "support-error": "$support-error: #da1e28",
      "support-success": "$support-success: #198038",
      "support-warning": "$support-warning: #f1c21b",
      "support-info": "$support-info: #0043ce",
      "icon-primary": "$icon-primary: #161616",
      "icon-secondary": "$icon-secondary: #525252",
      "icon-on-color": "$icon-on-color: #ffffff",
      "ai-border-start": "$ai-border-start: #001141",
      "ai-border-end": "$ai-border-end: #a56eff",
      "ai-inner-shadow": "$ai-inner-shadow: #a56eff",
      "ai-label": "$ai-label: #4589ff"
    },

    "colors-dark-g100": {
      "background": "#161616",
      "layer-01": "#262626",
      "layer-02": "#393939",
      "layer-03": "#525252",
      "field-01": "#262626",
      "interactive": "#4589ff",
      "text-primary": "#f4f4f4",
      "text-secondary": "#c6c6c6",
      "border-subtle-01": "#393939",
      "border-strong-01": "#6f6f6f"
    },

    "typography": {
      "productive-heading-01": { "size": "14px", "weight": 600, "line-height": "18px", "tracking": "0.16px" },
      "productive-heading-02": { "size": "16px", "weight": 600, "line-height": "22px", "tracking": "0" },
      "productive-heading-03": { "size": "20px", "weight": 400, "line-height": "28px", "tracking": "0" },
      "productive-heading-04": { "size": "28px", "weight": 400, "line-height": "36px", "tracking": "0" },
      "productive-heading-05": { "size": "32px", "weight": 300, "line-height": "40px", "tracking": "0" },
      "productive-heading-06": { "size": "42px", "weight": 300, "line-height": "50px", "tracking": "0" },
      "productive-heading-07": { "size": "54px", "weight": 300, "line-height": "64px", "tracking": "0" },
      "expressive-heading-01": { "size": "14px", "weight": 600, "line-height": "20px", "tracking": "0.16px" },
      "expressive-heading-02": { "size": "16px", "weight": 600, "line-height": "24px", "tracking": "0" },
      "expressive-heading-03": { "size": "20px", "weight": 400, "line-height": "28px", "tracking": "0" },
      "body-long-01": { "size": "14px", "weight": 400, "line-height": "20px", "tracking": "0.16px" },
      "body-long-02": { "size": "16px", "weight": 400, "line-height": "24px", "tracking": "0" },
      "body-short-01": { "size": "14px", "weight": 400, "line-height": "18px", "tracking": "0.16px" },
      "body-short-02": { "size": "16px", "weight": 400, "line-height": "22px", "tracking": "0" },
      "label-01": { "size": "12px", "weight": 400, "line-height": "16px", "tracking": "0.32px" },
      "label-02": { "size": "14px", "weight": 400, "line-height": "18px", "tracking": "0.16px" },
      "code-01": { "size": "12px", "weight": 400, "line-height": "20px", "tracking": "0.32px", "family": "IBM Plex Mono" },
      "code-02": { "size": "14px", "weight": 400, "line-height": "24px", "tracking": "0.32px", "family": "IBM Plex Mono" }
    },

    "spacing": {
      "spacing-01": "2px",
      "spacing-02": "4px",
      "spacing-03": "8px",
      "spacing-04": "12px",
      "spacing-05": "16px",
      "spacing-06": "24px",
      "spacing-07": "32px",
      "spacing-08": "40px",
      "spacing-09": "48px",
      "spacing-10": "64px",
      "spacing-11": "80px",
      "spacing-12": "96px",
      "spacing-13": "160px"
    },

    "motion": {
      "duration-fast-01": "70ms",
      "duration-fast-02": "110ms",
      "duration-moderate-01": "150ms",
      "duration-moderate-02": "240ms",
      "duration-slow-01": "400ms",
      "duration-slow-02": "700ms",
      "easing-standard": "cubic-bezier(0.2, 0, 0.38, 0.9)",
      "easing-entrance": "cubic-bezier(0, 0, 0.38, 0.9)",
      "easing-exit": "cubic-bezier(0.2, 0, 1, 0.9)",
      "easing-expressive": "cubic-bezier(0.4, 0.14, 0.3, 1)"
    }
  }
}
```

---

## 4.6 Carbon Accessibility Standards

Carbon is WCAG 2.1 AA compliant by design:
- All text: minimum 4.5:1 contrast (normal), 3:1 (large)
- Focus indicator: 1px solid `$focus` (#0f62fe) + 1px offset — visible on all backgrounds
- Touch targets: minimum 44×44px
- Screen reader: all interactive components use WAI-ARIA 1.1 patterns
- Keyboard: complete keyboard operability; all modals trap focus
- Data tables: `<th scope="col">`, `aria-sort`, `role="row"`, `role="gridcell"`
- Forms: associated `<label>` for every input; error states via `aria-describedby`
- Color: never used as the only means of conveying information

---

## 4.7 Carbon Screen Specifications

---

### SCREEN C-01: Landing Page

#### Carbon Layout
- 16-column grid, `$spacing-07` horizontal margin
- Full-bleed hero with dark background (`$background: #161616`)
- Navigation: standard header with `$layer-02` background

#### Component Tree
```
<UIShell>
  <Header aria-label="MillworkSuite">
    <SkipToContent/>
    <HeaderName prefix="Millwork">Suite</HeaderName>
    <HeaderNavigation>
      <HeaderMenuItem: Platform, Pricing, Customers, Resources>
    </HeaderNavigation>
    <HeaderGlobalBar>
      <Button kind="ghost">Sign in</Button>
      <Button kind="primary">Book a demo</Button>
    </HeaderGlobalBar>
  </Header>
</UIShell>
<HeroSection background="$background">
  <Grid>
    <Column lg=8 md=8 sm=4>
      <Tag type="green" icon={<RadioButton/>}>App #1 · Estimate · Now in pilot</Tag>
      <h1 style="productive-heading-07">Stop estimating manually.<br/>Start closing faster.</h1>
      <p style="body-long-02">The AI-powered estimating platform…</p>
      <ButtonSet>
        <Button kind="primary" size="lg">Try it now</Button>
        <Button kind="tertiary" size="lg">Watch 90-sec demo</Button>
      </ButtonSet>
    </Column>
    <Column lg=8 md=8 sm=4>
      <StatGrid: 4x Tile with $label-01 and productive-heading-05>
    </Column>
  </Grid>
</HeroSection>
<PreviewSection background="$layer-01">
  <Grid>
    <Column lg=16>
      <Tile elevation-shadow: app preview mock>
        <ProjectRailMock surface="$layer-02"/>
        <PDFCanvasMock surface="$layer-01">
          <DetectionBoxes/>
        </PDFCanvasMock>
        <ItemsPanelMock surface="$layer-02"/>
      </Tile>
    </Column>
  </Grid>
</PreviewSection>
<FeaturesSection background="$background: white">
  <Grid>
    <Column lg=16>
      <h2 style="productive-heading-05">Everything automated. Nothing missed.</h2>
    </Column>
    <Column lg=4 md=4 sm=4 x6>
      <ClickableTile>
        <PrefixedIcon color="$support-info"/>
        <h3 style="productive-heading-01">PDF intake → detection</h3>
        <p style="body-long-01">…</p>
      </ClickableTile>
    </Column>
  </Grid>
</FeaturesSection>
<CTABand background="$interactive">
  <Grid>
    <Column lg=10 offset-lg=3>
      <h2 style="productive-heading-05" color="$text-on-color">Your team estimates in days. We do it in minutes.</h2>
      <ButtonSet>
        <Button kind="primary" background="white" color="$interactive">Open demo workspace</Button>
        <Button kind="tertiary" color="white">Book onboarding call</Button>
      </ButtonSet>
    </Column>
  </Grid>
</CTABand>
<Footer background="$layer-01">
  <p style="label-01" color="$text-secondary">© 2026 MillworkSuite · Orlando, Florida</p>
  <p style="code-01" color="$text-secondary">v3.2.1.60.3 · pilot release</p>
</Footer>
```

---

### SCREEN C-02: Login Page

#### Carbon Layout
- Split layout: Left 60% = dark branded panel; Right 40% = `$layer-01` form area
- Form within 400px max-width container centered in right panel

#### Component Tree
```
<LoginLayout>
  <BrandPanel background="$background: #161616">
    <Logo/>
    <h1 style="expressive-heading-04" color="$text-on-color">AI-powered estimating for architectural millwork.</h1>
    <UnorderedList color="$text-on-color">
      <ListItem>90-second PDF analysis</ListItem>
      <ListItem>Direct Microvellum export</ListItem>
      <ListItem>Your catalog, your prices</ListItem>
    </UnorderedList>
  </BrandPanel>
  <FormPanel background="$layer-01">
    <Logo size="compact"/>
    <h2 style="productive-heading-04">Welcome back</h2>
    <p style="body-long-01" color="$text-secondary">Continue where you left off.</p>
    <Form>
      <TextInput
        id="email"
        labelText="Email address"
        type="email"
        size="lg"
        placeholder="you@company.com"
      />
      <PasswordInput
        id="password"
        labelText="Password"
        size="lg"
      />
      <Button kind="primary" size="lg" fullWidth>Sign in</Button>
      <Button kind="ghost" size="sm">Forgot password?</Button>
    </Form>
  </FormPanel>
</LoginLayout>
```

#### Data Hierarchy
- Security-first: password input uses Carbon `PasswordInput` with built-in show/hide (Carbon handles the a11y pattern)
- Errors: `InlineNotification` kind="error" appears at form level for auth failures; field-level `TextInput` invalid state for format errors
- Loading: `Button` with `InlineLoading` embedded during auth request

---

### SCREEN C-03: App Hub

#### Carbon Layout
- Full Shell with side nav + header
- Content: 16-column grid
- Top: greeting row spanning 16 columns
- Bid strip: 16 columns
- Apps: 4-across (4 columns each, lg=4)
- Bottom: left-heavy split (recent projects lg=10 + sidebar lg=6)

#### Component Tree
```
<UIShell>
  <SideNav>
    <SideNavLink to="/home" icon={<Home/>}>Home</SideNavLink>
    <SideNavMenu title="Estimate" icon={<Document/>}>
      <SideNavMenuItem>Projects</SideNavMenuItem>
    </SideNavMenu>
    [additional nav groups…]
  </SideNav>
  <Header>…</Header>
</UIShell>
<Content>
  <Grid fullWidth>
    <Column lg=16>
      <PageHeader title="Good morning, Rob" description="Monday, 8 Jun 2026 · SMI Cabinetry"/>
      <Divider/>
    </Column>
    <Column lg=16>
      <!-- Bid Timeline -->
      <Tile background="$layer-02">
        <h4 style="label-01">UPCOMING BID DEADLINES — 30 DAYS</h4>
        <BidTimeline: custom horizontal timeline>
      </Tile>
    </Column>
    <!-- App cards -->
    <Column lg=4 md=4 sm=4 x4>
      <ClickableTile href="/estimate">
        <Tag type="blue" icon={<Checkmark/>}>Live</Tag>
        <h3 style="productive-heading-02">Estimate</h3>
        <p style="body-long-01" color="$text-secondary">AI-powered bid estimation…</p>
        <Divider/>
        <p style="label-01">12 active projects</p>
      </ClickableTile>
    </Column>
    <!-- Recent projects -->
    <Column lg=10 md=8 sm=4>
      <h3 style="productive-heading-02">Recent Projects</h3>
      <DataTable size="sm" zebra>
        <TableHead>
          <TableRow>
            <TableHeader>Project</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Bid Date</TableHeader>
            <TableHeader>Value</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow x6 clickable/>
        </TableBody>
      </DataTable>
    </Column>
    <!-- Sidebar cards -->
    <Column lg=6 md=8 sm=4>
      <Tile: Pipeline stats>
      <Tile: Calendar>
      <Tile: Team activity>
    </Column>
  </Grid>
</Content>
```

---

### SCREEN C-04: Projects Dashboard

#### Carbon Layout
- Full Shell
- Page header with action
- Toolbar row: `Search` + `MultiSelect` (filters) + `ContentSwitcher` (views)
- Table/Grid/Board content fills available height with `overflow:auto`

#### Data Table Standards (Carbon canonical)
```
<DataTable
  size="md"
  isSortable
  useZebraStyles
  stickyHeader
>
  <TableToolbar>
    <TableToolbarSearch
      placeholder="Search projects, GCs, addresses…"
      persistent
    />
    <TableToolbarContent>
      <Dropdown label="Status" items={statusOptions}/>
      <Dropdown label="Owner" items={teamOptions}/>
      <DatePicker type="range"><DatePickerInput label="Bid Date"/></DatePicker>
      <Dropdown label="GC" items={gcOptions}/>
      <ContentSwitcher>
        <Switch icon={<Grid/>} text="Grid"/>
        <Switch icon={<List/>} text="List" selected/>
        <Switch icon={<Kanban/>} text="Board"/>
      </ContentSwitcher>
      <Button kind="primary" renderIcon={Add}>New project</Button>
    </TableToolbarContent>
  </TableToolbar>
  <Table>
    <TableHead>
      <TableRow>
        <TableSelectAll/>
        <TableHeader sortDirection="ASC" isSortHeader>Project</TableHeader>
        <TableHeader>Status</TableHeader>
        <TableHeader>GC</TableHeader>
        <TableHeader isSortHeader>Bid Date</TableHeader>
        <TableHeader>Pages</TableHeader>
        <TableHeader>Items</TableHeader>
        <TableHeader>Rooms</TableHeader>
        <TableHeader>Total</TableHeader>
        <TableHeader>Team</TableHeader>
        <TableHeader>Due / Outcome</TableHeader>
        <TableHeader>{/* overflow actions */}</TableHeader>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow x6>
        <TableSelectRow/>
        <TableCell>
          <strong style="productive-heading-01">BayCare Manatee…</strong>
          <br/><span style="label-01" color="$text-secondary">Pediatric Cardiology</span>
        </TableCell>
        <TableCell><Tag type="warm-gray">In Progress</Tag></TableCell>
        <TableCell>Brasfield & Gorrie</TableCell>
        <TableCell style="code-01">04/07/2026</TableCell>
        <TableCell right>14</TableCell>
        <TableCell right>142</TableCell>
        <TableCell right>8</TableCell>
        <TableCell right style="code-01"><strong>$284k</strong></TableCell>
        <TableCell><AvatarGroup: RP, JM, SK></TableCell>
        <TableCell>Due Fri</TableCell>
        <TableCell><OverflowMenu: Open, Duplicate, Archive, Delete/></TableCell>
      </TableRow>
    </TableBody>
  </Table>
  <TableBatchActions>
    <Button kind="ghost">Assign</Button>
    <Button kind="ghost">Archive</Button>
    <Button kind="danger--ghost">Delete</Button>
  </TableBatchActions>
</DataTable>
```

#### Carbon Kanban Board
```
<Grid: 5 columns, hScroll>
  <Column: Not Started, In Progress, Bid Placed, Won, Lost>
    <Tile surface="$layer-02">
      <Row: Tag(status) + count Badge>
      <Divider/>
      <ClickableTile x-per-card surface="$layer-01">
        <strong style="productive-heading-01">Project name</strong>
        <p style="label-01" color="$text-secondary">GC · pages</p>
        <hr/>
        <Row: strong style="code-01" + AvatarGroup>
        <Tag type="warm-gray" style="label-01">Due Fri</Tag>
      </ClickableTile>
      <Button kind="ghost" renderIcon={Add} size="sm">Add project</Button>
    </Tile>
  </Column>
</Grid>
```

---

### SCREEN C-05: New Project Wizard

#### Component Tree
```
<ProgressIndicator spaceEqually>
  <ProgressStep label="Project Details" complete/>
  <ProgressStep label="Upload Drawings" current/>
  <ProgressStep label="Team" incomplete/>
  <ProgressStep label="Review" incomplete/>
</ProgressIndicator>
<Grid>
  <Column lg=12 offset-lg=2>
    <Tile background="$layer-02">
      <h2 style="productive-heading-03">Upload Drawings</h2>
      <p style="body-long-01" color="$text-secondary">…</p>
      <FileUploader
        labelTitle="Upload architectural drawings"
        labelDescription="Drag and drop files here or click to upload. Supports PDF only. Max 50MB per file."
        buttonLabel="Add files"
        accept={['.pdf']}
        multiple
        filenameStatus="uploading"
      />
      <FileUploaderItem: file list with progress>
    </Tile>
  </Column>
</Grid>
<ActionBar>
  <Grid>
    <Column lg=6>
      <Button kind="ghost">Cancel</Button>
    </Column>
    <Column lg=6 rightAlign>
      <Button kind="secondary">Back</Button>
      <Button kind="primary" renderIcon={ArrowRight}>Continue</Button>
    </Column>
  </Grid>
</ActionBar>
```

---

### SCREEN C-06: Project Workspace

#### Carbon Layout
```
┌─────────────────────────────────────────────────────────────────┐
│ UIShell Header (48px)                                           │
│ Workspace SubHeader (40px): project name, version, mode tabs   │
│ Info Strip (32px): metadata chips row                          │
├──────────────┬──────────────────────────────┬──────────────────┤
│ Pages Panel  │ PDF Canvas                   │ Items Panel      │
│ $layer-02    │ $layer-01 (grey)             │ $layer-02        │
│ 248px        │ flex                         │ 400px            │
│              │                              │                  │
└──────────────┴──────────────────────────────┴──────────────────┘
│ Status Bar (32px): project stats                                │
```

#### Component Tree (Workspace)
```
<WorkspaceHeader background="$layer-02">
  <Button kind="ghost" renderIcon={ArrowLeft} size="sm">Projects</Button>
  <Divider vertical/>
  <h2 style="productive-heading-02">BayCare Manatee — Pediatric Cardiology</h2>
  <Tag type="blue" style="code-01">v2.1</Tag>
  <StatusBadge color="$support-success">AI Active</StatusBadge>
  <Spacer/>
  <Button kind="tertiary" size="sm">Export BOM</Button>
  <Button kind="primary" size="sm">Finalize Bid</Button>
</WorkspaceHeader>
<Tabs>
  <Tab label="Estimate"/>
  <Tab label="Draft"/>
  <Tab label="Manage"/>
</Tabs>
<InfoStrip background="$layer-01">
  <Tag: project, GC, sector, revision, status>
</InfoStrip>
<WorkspaceBody threePanel>
  <!-- LEFT: Pages Panel -->
  <PagePanel background="$layer-02" width="248px">
    <PanelHeader>
      <p style="label-01">PAGES</p>
      <Tag type="blue">14</Tag>
      <ContentSwitcher compact: All, Detected, Review>
    </PanelHeader>
    <List>
      <ListItem x14 active="{n}">
        <Thumbnail: mini PDF preview surface="$layer-01"/>
        <div>
          <p style="code-01">A-201</p>
          <p style="label-01" color="$text-secondary">Reception Elevation</p>
          <Row: Tag(detected count), Tag(review) if needed>
        </div>
      </ListItem>
    </List>
  </PagePanel>
  <!-- CENTER: Canvas -->
  <Canvas background="$layer-01">
    <Grid background: subtle dots>
    <PDFDocument background="$background: white" shadow>
      <PDFHeader style="code-01"/>
      <PDFContent: blueprint grid/>
      <AIDetectionOverlay>
        <!-- Carbon AI pattern: border gradient purple→blue -->
        <DetectionBox x3: AI-decorated borders>
          <AILabel: "2 Door Upper" size="sm"/>
        </DetectionBox>
      </AIDetectionOverlay>
    </PDFDocument>
    <ZoomBar background="$layer-02" shadow position="bottom-center">
      <Button kind="ghost" renderIcon={ZoomOut} hasIconOnly size="sm"/>
      <p style="code-01">100%</p>
      <Button kind="ghost" renderIcon={ZoomIn} hasIconOnly size="sm"/>
    </ZoomBar>
    <!-- AI Status Panel -->
    <InlineNotification
      kind="info"
      title="Detection running"
      subtitle="Identified 142 items across 14 pages"
      lowContrast
      position="absolute top-left"
      icon={<AILabel/>}
    />
  </Canvas>
  <!-- RIGHT: Items Panel -->
  <ItemsPanel background="$layer-02" width="400px">
    <PanelHeader>
      <h3 style="productive-heading-01">Detected Items</h3>
      <Button kind="ghost" renderIcon={Filter} hasIconOnly size="sm"/>
      <OverflowMenu/>
    </PanelHeader>
    <Tabs contained size="sm">
      <Tab label="Estimate (142)"/>
      <Tab label="Rooms (8)"/>
      <Tab label="CAD Output"/>
    </Tabs>
    <StructuredList>
      <StructuredListHead>
        <StructuredListRow head>
          <StructuredListCell>#</StructuredListCell>
          <StructuredListCell>Item</StructuredListCell>
          <StructuredListCell right>Price</StructuredListCell>
        </StructuredListRow>
      </StructuredListHead>
      <StructuredListBody>
        <StructuredListRow x142>
          <StructuredListCell style="code-01" color="$text-secondary">01</StructuredListCell>
          <StructuredListCell>
            <AILabel size="sm"/>
            <strong style="productive-heading-01">2 Door Upper Cabinet</strong>
            <p style="code-01" color="$text-secondary">AWI-UC-36x30</p>
            <Row:
              <Tag type="blue" size="sm">AI</Tag>
              <Tag type="green" size="sm">94% conf.</Tag>
              <Tag type="teal" size="sm">Catalog: OK</Tag>
            >
          </StructuredListCell>
          <StructuredListCell right>
            <strong style="code-02">$845</strong>
            <p style="code-01" color="$text-secondary">$28/LF</p>
          </StructuredListCell>
        </StructuredListRow>
      </StructuredListBody>
    </StructuredList>
    <PanelFooter background="$layer-01" borderTop>
      <DefinitionList>
        <dt style="label-01">Items Sub</dt><dd style="code-01">$18,240</dd>
        <dt style="label-01">Markup (15%)</dt><dd style="code-01">$2,736</dd>
        <dt style="label-01">Material + Labor</dt><dd style="code-01">$48,000</dd>
      </DefinitionList>
      <Divider/>
      <Row bold>
        <p style="label-01" uppercase>TOTAL BID</p>
        <strong style="productive-heading-03">$284,000</strong>
      </Row>
    </PanelFooter>
  </ItemsPanel>
</WorkspaceBody>
<StatusBar background="$layer-01" borderTop>
  <InlineTag x5: project metadata>
</StatusBar>
```

#### Enterprise Workflow Optimizations
1. **AI Label component** on every AI-generated item — Carbon's dedicated AI affordance signals which data was machine-generated vs. human-reviewed
2. **Bulk select on items list** — `StructuredList` → `DataTable` with `TableSelectRow` enables bulk override, flag, or delete
3. **Keyboard navigation:** Page rail navigable with arrow keys; Tab/Shift+Tab between panel zones; Space to select item
4. **Conflict indicators:** Catalog mapping gaps shown with `Tag type="warm-gray"` + tooltip — no color-only reliance

---

### SCREEN C-07: Product Catalog

#### Carbon Layout
- Standard page with `Tabs` (contained)
- Company Catalog tab: 2-column with narrow category nav + main DataTable

#### Data Table Standards
```
<DataTable isSortable useZebraStyles stickyHeader>
  <TableToolbar>
    <TableToolbarSearch persistent placeholder="Search catalog…"/>
    <TableToolbarContent>
      <Dropdown label="Category"/>
      <Dropdown label="Pricing Type"/>
      <Button kind="primary" renderIcon={Add}>Add Product</Button>
      <Button kind="tertiary" renderIcon={Upload}>Import CSV</Button>
    </TableToolbarContent>
  </TableToolbar>
  <Table>
    <TableHead>
      <TableRow>
        <TableSelectAll/>
        <TableHeader isSortHeader>SKU</TableHeader>
        <TableHeader isSortHeader>Product Name</TableHeader>
        <TableHeader>Category</TableHeader>
        <TableHeader>Pricing Type</TableHeader>
        <TableHeader isSortHeader rightAlign>Base Price</TableHeader>
        <TableHeader>Unit</TableHeader>
        <TableHeader>Status</TableHeader>
        <TableHeader>{/* actions */}</TableHeader>
      </TableRow>
    </TableHead>
    [rows…]
  </Table>
</DataTable>
```

#### Product Edit — Carbon SidePanel
```
<SidePanel
  title="Edit Product"
  subtitle="MWS-UC-3630"
  size="lg"
  open={isPanelOpen}
  primaryActionButtonText="Save changes"
  secondaryActionButtonText="Cancel"
  animateTitle
>
  <Tabs>
    <Tab label="Details"/>
    <Tab label="Pricing"/>
    <Tab label="Drafting"/>
  </Tabs>
  <TabContent: Details>
    <TextInput labelText="Product name"/>
    <TextInput labelText="SKU" helperText="Auto-generated from name if empty"/>
    <Select labelText="Category"/>
    <TextArea labelText="Description"/>
  </TabContent>
  <TabContent: Pricing>
    <ContentSwitcher: Linear, SqFt, Tiered, Flat, Formula>
    <DynamicPricingForm conditional on switcher value>
  </TabContent>
</SidePanel>
```

---

### SCREEN C-08: User Management

#### Component Tree
```
<DataTable>
  <TableToolbar>
    <TableToolbarSearch/>
    <Dropdown label="Role"/>
    <Dropdown label="Status"/>
    <Button kind="primary" renderIcon={Add}>Invite user</Button>
  </TableToolbar>
  <Table>
    <Th: User, Email, Role, Last Active, EULA Status, Actions>
    <Tr x-per-user>
      <Td>
        <UserAvatar initials="RP" size="md"/>
        <div>
          <strong>Rob Pryor</strong>
          <p style="label-01" color="$text-secondary">Estimator</p>
        </div>
      </Td>
      <Td style="code-01">rob@smicabinetry.com</Td>
      <Td><Tag type="blue">Estimator</Tag></Td>
      <Td style="code-01" color="$text-secondary">2 hours ago</Td>
      <Td><Tag type="green">Accepted</Tag></Td>
      <Td><OverflowMenu: Edit, Resend Invite, Remove User/></Td>
    </Tr>
  </Table>
</DataTable>
```

---

### SCREEN C-09: Settings

#### Carbon Layout
- Two-panel: left `SideNav` (settings sections) + right content form
- Each section: `Tile (background=$layer-02)` container
- Consistent `$spacing-06` gap between cards

#### Form Standards
```
<Grid>
  <Column lg=12>
    <h1 style="productive-heading-04">Workspace Settings</h1>
    <p style="body-long-01" color="$text-secondary">…</p>
    <Tile surface="$layer-02">
      <h2 style="productive-heading-02">Appearance</h2>
      <p style="body-long-01">Theme</p>
      <RadioButtonGroup orientation="horizontal">
        <RadioButton labelText="Classic Blue"/>
        <RadioButton labelText="Emerald Green" checked/>
      </RadioButtonGroup>
    </Tile>
    <Tile surface="$layer-02">
      <h2 style="productive-heading-02">Notifications</h2>
      <Toggle labelText="Email notifications" checked/>
      <Toggle labelText="In-app notifications" checked/>
      <Toggle labelText="Bid deadline alerts"/>
    </Tile>
    <Tile surface="$layer-02">
      <h2 style="productive-heading-02">Integrations</h2>
      [Integration rows…]
    </Tile>
  </Column>
</Grid>
```

---

### SCREEN C-10: Analytics

#### Dashboard Standards
```
<Grid>
  <Column lg=16>
    <PageHeader title="Analytics" description="SMI Cabinetry · YTD 2026"/>
    <ContentSwitcher: Last 7d, Last 30d, Last 90d, YTD>
  </Column>
  <!-- KPI row -->
  <Column lg=4 x4>
    <Tile background="$layer-02">
      <p style="label-01" color="$text-secondary">PIPELINE VALUE</p>
      <h2 style="productive-heading-06">$4.2M</h2>
      <Tag type="green" renderIcon={CaretUp}>+12% vs last period</Tag>
    </Tile>
  </Column>
  <!-- Charts -->
  <Column lg=8>
    <Tile: Win Rate over Time — line chart>
  </Column>
  <Column lg=8>
    <Tile: Revenue by Category — bar chart>
  </Column>
  <Column lg=16>
    <DataTable: full pipeline breakdown table, sortable>
  </Column>
</Grid>
```

---

### SCREEN C-11: EULA Modal

#### Component Tree
```
<Modal
  open={eulaOpen}
  size="lg"
  modalHeading="MillworkSuite License Agreement"
  modalLabel="v1.0 · Effective 01 Jan 2026"
  passiveModal={false}
  preventCloseOnClickOutside
  primaryButtonText="Accept Agreement"
  primaryButtonDisabled={!hasScrolledToBottom}
  secondaryButtonText="Decline"
  onRequestSubmit={handleAccept}
  onSecondarySubmit={handleDeclineConfirm}
>
  <p style="label-01" color="$text-secondary">Please read the full agreement before accepting.</p>
  <ProgressBar value={scrollProgress} max={100} label="Reading progress" hideLabel/>
  <ScrollableContent onScroll={updateProgress}>
    <EULAText style="body-long-01" lineHeight="1.75">…</EULAText>
  </ScrollableContent>
</Modal>
<!-- Decline confirmation -->
<Modal
  kind="danger"
  open={declineConfirmOpen}
  modalHeading="Decline agreement?"
  primaryButtonText="Yes, decline and sign out"
  secondaryButtonText="Go back"
>
  <p>You cannot access MillworkSuite without accepting the EULA. You will be signed out.</p>
</Modal>
```

---

---

# PART 5 — DESIGN SYSTEM COMPARISON

---

## 5.1 Side-by-Side Comparison Matrix

| Design Area | Current State | Material Design 3 | IBM Carbon |
|-------------|--------------|-------------------|------------|
| **Navigation** | Hamburger-only overlay drawer. No persistent nav. High friction for frequent navigation. | Bottom Nav Bar (compact), Navigation Rail (medium), Persistent Drawer (expanded). Full MD3 navigation spectrum — adaptive by form factor. | UI Shell Header + persistent SideNav (collapsible). Enterprise standard. Left-panel navigation with multi-level expansion. |
| **Top Bar** | 46px navy gradient, minimal content | 64px Top App Bar. Multiple scroll variants. Context-aware title. Surface color adapts to scroll. | 48px Header. Fixed. Product name + global actions only. Info moved to page-level headers. |
| **Data Tables** | Custom CSS grid + occasional `<table>`. Inconsistent. | Custom DataGrid (MD3 has no table spec). Requires bespoke implementation. Material chips and cards supplement tables. | Carbon `DataTable` — canonical enterprise table. Sorting, selection, toolbar, batch actions, inline actions all specified. Production-ready via `@carbon/react`. |
| **Forms** | Native HTML inputs with custom CSS. Inconsistent labels. | `TextField` (Filled/Outlined). Comprehensive states. Leading/trailing icons. Helper text. Character count. Error. | `TextInput`, `Select`, `Dropdown`, `NumberInput`, `DatePicker`, `FileUploader`. Every form primitive specified and accessible. Consistent label+field+helper pattern. |
| **Search** | Static `<input>` in toolbar, no suggestions. | `SearchBar` (MD3) with expansion animation. Suggestions via `Menu`. | `Search` component with kind variants (active/inactive). `TableToolbarSearch` for data contexts. |
| **Dashboards** | Ad-hoc card layouts. Inconsistent spacing. No grid system. | Cards (Elevated/Filled/Outlined) in responsive grid. Expressive, uses tonal color hierarchy. Strong visual hierarchy. | `Tile`, `ClickableTile` in Carbon 16-column grid. Data-dense. Clean, systematic. Analytics page benefits from Carbon's structured density. |
| **Filters** | Pill dropdowns + custom CSS. No badge on active count. | `FilterChip` row. `DropdownMenu`. Active state via tonal container. Chip count badge. | `Dropdown`, `MultiSelect`, `DatePicker`. `TableToolbarContent` as canonical filter zone. Consistent placement and behavior. |
| **Status Indicators** | Colored dot + text pill. Custom CSS. | `Chip` (Assist) or `Badge`. Color-semantic. Tonal containers signal urgency. | `Tag` component — 12 color types. Consistent size. Dismissible variant. `InlineNotification` for status messages. |
| **Modals/Dialogs** | Custom CSS modal. No focus trap. Non-standard close behavior. | `Dialog` (Basic/Full-screen/Alert). MD3 standard. Focus trap built in. | `Modal` component. 4 sizes (xs/sm/md/lg). Danger variant. Passive variant. Full keyboard/focus management. Production-tested. |
| **AI Interactions** | Floating glassmorphism card. No standard affordance for AI-generated content. | `Card (Elevated)` with `LinearProgressIndicator`. No dedicated AI component — custom composition needed. | **Carbon AI patterns** — `AILabel`, `Slug`, AI border gradient, AI skeleton. Specifically designed for LLM and ML-generated content. Direct fit for MillworkSuite's detection confidence scoring. |
| **Notifications** | Incomplete. Bell icon with no badge or panel. | `Snackbar` (transient) + Navigation Drawer (persistent). Material-standard. | `Notification` family — `InlineNotification`, `ToastNotification`, `ActionableNotification`. Carbon Global Header Notification panel. Well-specified enterprise notification model. |
| **Mobile** | No mobile design exists. App body is `overflow:hidden`. | First-class mobile. Compact layout, Bottom Nav, touch targets 48dp, adaptive panels via BottomSheet. | Carbon is primarily desktop-optimized. Mobile is possible but not the priority. Responsive breakpoints supported but less opinionated than MD3. |
| **Accessibility** | 14 issues identified. Color contrast failures. No focus rings on many elements. | Built-in: color system guarantees contrast, 48dp touch targets, focus rings, `prefers-reduced-motion` support. | Built-in: WCAG 2.1 AA by design. Every component has WAI-ARIA 1.1 spec. Keyboard operability standard. `@carbon/react` ships with tested accessible components. |
| **Enterprise Readiness** | Prototype grade. Single HTML file. No component system. | Good. Broad ecosystem. Google-backed. Well-adopted in enterprise consumer-facing software (Google Workspace, Android apps). | Excellent. IBM-scale enterprise. Used in IBM Cloud, Watson, and hundreds of B2B SaaS products. Specifically designed for complex enterprise workflows. |
| **Design Token System** | Partial. Color tokens strong. Typography/spacing/radius ad hoc. | Comprehensive. 13-step tonal palettes. Full semantic token layer. Dynamic color generation from seed. | Comprehensive. `@carbon/themes` package. White/Gray10/Gray90/Gray100 themes. Full token reference. Sass and CSS custom property support. |
| **Scalability** | Poor. Monolithic. Two versions of same screens. | Good. MD3 scales well across applications with consistent token system. Navigation scales to multi-app via NavigationDrawer groups. | Excellent. IBM uses Carbon across 200+ products. Multi-product theming via Carbon themes. Tokens allow brand overrides. |
| **React Implementation** | None (HTML prototype). | `material-web` (web components) or `@mui/material` v6 (React). Mature ecosystem. Large community. | `@carbon/react` — the canonical implementation. IBM-maintained. `@carbon/styles` for CSS. Direct 1:1 component mapping to spec. Best-in-class implementation path. |
| **Dark Theme** | Not implemented. Emerald theme only overrides color tokens. | Full dark theme via MD3 dark color scheme. Same tokens, different values. Smooth system theme following. | Carbon `g100` theme is a production dark theme. Well-tested. 1-line theme switch via CSS custom properties. |
| **Motion/Animation** | Basic: opacity fadeIn, `translateY(-2px)` hover lifts, CSS transitions. | MD3 Expressive motion. Container Transform (workspace transitions). Shared Axis (page navigation). Purposeful and brand-differentiating. | Carbon motion: precise, fast, professional. No decorative animations. Purposeful only. `duration-fast-01: 70ms` for micro-interactions. |

---

---

# PART 6 — FRONTEND IMPLEMENTATION PLAN

---

## 6.1 Assumptions

- **Framework:** React 18+ with TypeScript
- **Styling:** Tailwind CSS v4 (for utility layer) + design system tokens as CSS custom properties
- **Component library:** New component library replacing current HTML prototype
- **Design tooling:** Figma with token plugin (Token Studio or Figma Variables)
- **Testing:** Jest + React Testing Library; Chromatic/Storybook for visual regression
- **Target:** Production-ready in 16–20 weeks

---

## 6.2 Material Design 3 Migration Plan

### Components to Create (net-new)
| Component | Complexity | Effort (days) |
|-----------|------------|---------------|
| MD3 Color System (token file + Tailwind config) | Medium | 3d |
| TopAppBar (Small/Medium/Large variants, scroll behavior) | Medium | 3d |
| NavigationDrawer (Modal + Persistent, user account section) | High | 5d |
| NavigationRail (icon+label, active state) | Medium | 2d |
| BottomNavigationBar (5 destinations, badge support) | Medium | 2d |
| Tab (Primary + Secondary, badge support) | Low | 2d |
| FilledButton / OutlinedButton / TextButton / TonalButton | Low | 2d |
| IconButton (standard + toggle variants) | Low | 1d |
| FAB (Standard + Extended, position management) | Low | 2d |
| Card (Elevated + Filled + Outlined, clickable) | Low | 2d |
| TextField (Filled + Outlined, all states) | Medium | 4d |
| ExposedDropdownMenu | Medium | 3d |
| Switch (with label) | Low | 1d |
| RadioButton / CheckBox | Low | 1d |
| Dialog (Basic + Alert + FullScreen) | Medium | 3d |
| Snackbar | Low | 1d |
| Chip (Filter + Assist + Input + Suggestion) | Medium | 3d |
| SegmentedButton | Medium | 2d |
| Badge | Low | 1d |
| List + ListItem (1/2/3 line, leading/trailing) | Medium | 3d |
| LinearProgressIndicator / CircularProgress | Low | 2d |
| ProgressIndicator (Stepper) | Medium | 3d |
| SearchBar (expansion behavior) | Medium | 3d |
| DataTable (MD3 custom — MD3 has no table component) | High | 8d |
| BidTimeline (custom, MD3 styled) | High | 5d |
| PDFCanvas + DetectionOverlay | High | 5d |
| AI Status Card (custom composition) | Medium | 2d |
| NavigationDrawer (right-side side sheet for item edit) | Medium | 2d |
| FileUploader (drag & drop, progress) | Medium | 3d |
| Analytics Charts (recharts + MD3 styled) | High | 8d |
| **Total (net-new)** | | **~87 days (~17 weeks)** |

### Components to Modify (migrate from current)
| Current Component | MD3 Migration | Effort |
|------------------|---------------|--------|
| Top bar → TopAppBar | Full redesign — nav, user, actions rearchitected | 2d |
| Nav drawer CSS → NavigationDrawer | Mostly structural; item states migrate cleanly | 2d |
| `.btn` classes → MD3 Buttons | Token mapping + touch target increase | 1d |
| `.tag` → Chip | Semantic mapping: filter chips, assist chips | 1d |
| `.modal` → Dialog | Focus trap, animation, sizing variants | 2d |
| Form inputs → TextField | Label positioning change (floating), state management | 3d |
| Project cards → Card (Elevated) | Elevation system replaces borders | 2d |
| Wizard steps → ProgressIndicator | Visual redesign only | 1d |
| Kanban → MD3 Kanban (custom) | Card system maps; column structure stays | 2d |

### Components to Remove
- All `.screen` / `.canvas` absolute-positioning shell (replaced by React Router + layout components)
- `.topbar` / `.brand` / `.menu-btn` (replaced by TopAppBar)
- `.nav-drawer` / `.nav-overlay` CSS (replaced by NavigationDrawer component)
- `.land-*` landing page classes (rebuilt with MD3 primitives)
- All inline `style` attributes in HTML (replaced by token-driven component styles)
- Duplicate CSS blocks (Screen 5 vs 5b, Screen 6 vs 6b)

### Estimated Effort
| Phase | Description | Weeks |
|-------|-------------|-------|
| Foundation | Token system, theme config, Tailwind integration | 2 |
| Navigation shell | TopAppBar, NavigationDrawer, rail, bottom nav | 3 |
| Core components | Buttons, inputs, chips, cards, dialogs | 4 |
| Page builds | Landing, Login, Hub, Dashboard, Workspace | 5 |
| Catalog + Admin | Catalog, Users, Settings, Analytics | 3 |
| Polish + a11y | Motion, dark theme, accessibility audit | 2 |
| Testing | Visual regression, component tests, E2E smoke | 1 |
| **Total** | | **~20 weeks** |

### MD3 Migration Risks
| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| `material-web` web components + React integration friction | High | Medium | Use `@mui/material` v6 (MUI has best MD3 parity in React) |
| MD3 DataTable doesn't exist — must build from scratch | High | High | Allocate 2 weeks for custom DataTable; use MUI DataGrid as base |
| Dynamic Color requires runtime CSS generation | Medium | Low | Pre-generate both light/dark token files; skip true dynamic color for v1 |
| Google Sans font license | Low | Low | Use Inter or Public Sans as substitute |
| Estimator persona resistance to "too modern" aesthetic | Medium | Medium | Conduct 3 user interviews before finalizing design direction |
| FAB pattern conflicts with dense desktop workflow | Medium | Medium | Use inline primary actions for desktop; FAB only on compact |

---

## 6.3 Carbon Design System Migration Plan

### Components to Create (net-new)
| Component | Complexity | Effort (days) |
|-----------|------------|---------------|
| Carbon token file + Tailwind config mapping | Medium | 2d |
| UIShell wrapper (Header + SideNav + Content) | Medium | 3d |
| Custom BidTimeline (Carbon-styled) | High | 4d |
| Custom PDFCanvas + DetectionOverlay (Carbon-styled) | High | 5d |
| Custom AILabel integration in workspace items | Medium | 2d |
| Custom KanbanBoard (Carbon Tile-based) | Medium | 3d |
| Custom AvatarGroup (no Carbon equivalent) | Low | 1d |
| Custom PageRail (using Carbon List) | Medium | 2d |
| Analytics Charts (recharts + Carbon styled) | High | 6d |
| Custom FormulaBuilder (no Carbon equivalent) | High | 4d |
| **Total (net-new custom)** | | **~32 days** |

### `@carbon/react` Components Used Directly
(No implementation effort — configure, wrap, and theme)
| Component | Usage |
|-----------|-------|
| `DataTable` | Projects dashboard list, catalog table, user management |
| `Modal` | EULA, confirm dialogs, notifications |
| `SidePanel` | Product catalog edit, item detail |
| `TextInput` / `PasswordInput` | All forms |
| `Select` / `Dropdown` / `MultiSelect` | All selects and filters |
| `DatePicker` | Bid date filter, project creation |
| `FileUploader` | Drawing upload in wizard |
| `ProgressIndicator` | Wizard steps |
| `Tabs` | Workspace modes, catalog sections |
| `Tag` | All status indicators, role pills |
| `Button` | All CTA types |
| `Search` | All search inputs |
| `Toggle` | Settings toggles |
| `RadioButton` | Settings selections |
| `ContentSwitcher` | View toggles (Grid/List/Board) |
| `Notification` family | All system feedback |
| `Breadcrumb` | Page navigation path |
| `OverflowMenu` | Row actions |
| `StructuredList` | Items panel in workspace |
| `ProgressBar` | EULA scroll progress |
| `InlineNotification` | AI status in workspace |
| `Accordion` | Category expand/collapse |

### Estimated Effort
| Phase | Description | Weeks |
|-------|-------------|-------|
| Foundation | `@carbon/react` install, token config, Tailwind integration | 1.5 |
| Navigation shell | UIShell, SideNav, Header integration | 2 |
| Core pages | Landing, Login (Carbon-styled) | 2 |
| App Hub + Dashboard | Hub, Projects dashboard (DataTable) | 2.5 |
| Workspace | Full 3-panel workspace, catalog panel, AI labels | 4 |
| Catalog + Admin | Catalog DataTable, user mgmt, settings | 2.5 |
| Analytics | Dashboard + charts | 2 |
| Polish + a11y | Carbon theme tokens, dark theme, a11y audit | 1.5 |
| Testing | Visual regression, Carbon a11y testing | 1 |
| **Total** | | **~19 weeks** |

### Carbon Migration Risks
| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Carbon's visual density may be too "IBM" / cold for millwork buyers | Medium | Medium | Customize with brand colors via Carbon's theme token system; add warmth via emerald theme |
| `@carbon/react` bundle size (large, comprehensive) | Low | Low | Tree-shake unused components; accept full bundle for enterprise app |
| Custom components (Formula Builder, Bid Timeline, PDF Canvas) lack Carbon specs | High | Medium | Use Carbon tokens + grid in custom components — they'll blend seamlessly |
| Carbon has no animation library — transitions must be custom | Low | Low | Apply Carbon motion tokens (`duration-fast-02: 110ms`) in CSS transitions |
| Tailwind + Carbon CSS custom properties can conflict | Medium | Medium | Layer Tailwind as utility-only; don't override Carbon's component styles |
| `DataTable` batch actions UI is opinionated — may not match current workflow | Low | Low | Use Carbon's pattern exactly — it's well-tested and users adapt |

---

---

# PART 7 — FIGMA DESIGN SYSTEM STRUCTURE

---

## 7.1 MD3 Figma Design System Structure

```
MillworkSuite Design System — MD3/
├── 📁 00_Foundation/
│   ├── 🎨 Color Palettes
│   │   ├── Page: Primary Tonal Palette (Emerald Seed)
│   │   ├── Page: Secondary Tonal Palette
│   │   ├── Page: Tertiary Tonal Palette
│   │   ├── Page: Error Palette
│   │   ├── Page: Neutral Palette
│   │   └── Page: Neutral Variant Palette
│   ├── 🎯 Color Roles
│   │   ├── Page: Light Theme Color Roles (all 30 roles)
│   │   └── Page: Dark Theme Color Roles (all 30 roles)
│   ├── ✏️ Typography
│   │   ├── Page: Type Scale (15 styles × 2 themes)
│   │   ├── Page: Display styles
│   │   ├── Page: Headline styles
│   │   ├── Page: Title styles
│   │   ├── Page: Label styles
│   │   └── Page: Body styles
│   ├── 📐 Spacing & Layout
│   │   ├── Page: 8dp spacing scale
│   │   ├── Page: Breakpoints (Compact/Medium/Expanded)
│   │   └── Page: Grid documentation
│   └── 🔵 Elevation
│       └── Page: Levels 0–5 (shadow + tint combinations)
│
├── 📁 01_Tokens/
│   ├── Page: Color tokens (semantic → reference)
│   ├── Page: Typography tokens
│   ├── Page: Spacing tokens
│   ├── Page: Radius tokens
│   ├── Page: Motion tokens
│   └── Page: Elevation tokens
│
├── 📁 02_Components/
│   ├── 📁 Navigation/
│   │   ├── Top App Bar (Small / Medium / Large)
│   │   ├── Navigation Drawer (Modal / Persistent)
│   │   ├── Navigation Rail
│   │   ├── Bottom Navigation Bar
│   │   └── Breadcrumb (custom)
│   ├── 📁 Actions/
│   │   ├── Buttons (Filled / Outlined / Text / Tonal / Elevated)
│   │   ├── Icon Buttons (Standard / Filled / Tonal / Outlined)
│   │   ├── FAB (Standard / Extended / Small / Large)
│   │   └── Segmented Button
│   ├── 📁 Selection/
│   │   ├── Checkbox
│   │   ├── Radio Button
│   │   ├── Switch
│   │   ├── Chip (Filter / Assist / Input / Suggestion)
│   │   └── Slider
│   ├── 📁 Text Inputs/
│   │   ├── Text Field (Filled)
│   │   ├── Text Field (Outlined)
│   │   ├── Text Area
│   │   ├── Exposed Dropdown Menu
│   │   └── Search Bar
│   ├── 📁 Data Display/
│   │   ├── Card (Elevated / Filled / Outlined)
│   │   ├── List (1-line / 2-line / 3-line)
│   │   ├── Data Table (custom MD3-styled)
│   │   ├── Badge
│   │   └── Avatar
│   ├── 📁 Feedback/
│   │   ├── Dialog (Basic / Alert / Full-Screen)
│   │   ├── Snackbar
│   │   ├── Progress Indicators (Linear / Circular)
│   │   ├── Stepper (custom)
│   │   └── Tooltip
│   ├── 📁 Navigation Tabs/
│   │   ├── Tabs (Primary)
│   │   └── Tabs (Secondary)
│   └── 📁 MillworkSuite Custom/
│       ├── Status Chip (5 project states)
│       ├── Role Chip (4 user roles)
│       ├── Pricing Type Chip
│       ├── Bid Timeline Pin
│       ├── AI Detection Box
│       ├── AI Status Card
│       ├── PDF Canvas
│       ├── Page Thumbnail
│       ├── Avatar Stack
│       ├── Confidence Score Chip
│       └── Catalog Mapping Chip
│
├── 📁 03_Patterns/
│   ├── Page: Navigation patterns (per breakpoint)
│   ├── Page: Form patterns (field groups, validation)
│   ├── Page: Table patterns (sort, filter, select)
│   ├── Page: Modal patterns (basic, danger, full-screen)
│   ├── Page: Empty state patterns
│   ├── Page: Loading state patterns
│   ├── Page: Error state patterns
│   └── Page: AI interaction patterns
│
├── 📁 04_Templates/
│   ├── Page: Standard page layout (nav + header + content)
│   ├── Page: Dashboard layout (2-column)
│   ├── Page: Workspace layout (3-column)
│   ├── Page: Wizard layout (centered card + stepper)
│   ├── Page: Settings layout (2-column nav)
│   └── Page: Analytics layout (chart grid)
│
├── 📁 05_Pages_Desktop/
│   ├── 01_Landing
│   ├── 02_Login
│   ├── 03_App_Hub
│   ├── 04_Projects_Grid
│   ├── 04_Projects_List
│   ├── 04_Projects_Board
│   ├── 05_New_Project_Wizard (4 steps)
│   ├── 06_Workspace_Estimate
│   ├── 06_Workspace_Draft
│   ├── 07_Catalog_AI
│   ├── 07_Catalog_Company
│   ├── 07_Catalog_Templates
│   ├── 08_User_Management
│   ├── 09_User_Roles
│   ├── 10_Settings
│   ├── 11_Analytics
│   └── 12_EULA
│
├── 📁 06_Pages_Tablet/
│   └── (Medium breakpoint versions of all 12 screens)
│
└── 📁 07_Pages_Mobile/
    └── (Compact breakpoint versions of all 12 screens)
```

---

## 7.2 Carbon Figma Design System Structure

```
MillworkSuite Design System — Carbon/
├── 📁 00_Foundation/
│   ├── 🎨 Color
│   │   ├── Page: Carbon palette reference (all swatches)
│   │   ├── Page: White theme tokens
│   │   ├── Page: Gray10 theme tokens
│   │   ├── Page: MillworkSuite brand overlay
│   │   └── Page: Dark (g100) theme tokens
│   ├── ✏️ Typography
│   │   ├── Page: Productive type scale
│   │   ├── Page: Expressive type scale
│   │   ├── Page: IBM Plex Sans specimens
│   │   └── Page: IBM Plex Mono specimens
│   ├── 📐 Grid
│   │   ├── Page: 16-column grid (all breakpoints)
│   │   ├── Page: Carbon spacing scale ($spacing-01 → $spacing-13)
│   │   └── Page: Layout examples
│   └── 🌊 Motion
│       └── Page: Duration + easing documentation
│
├── 📁 01_Tokens/
│   ├── Page: Background tokens
│   ├── Page: Layer tokens (01–03)
│   ├── Page: Text tokens
│   ├── Page: Icon tokens
│   ├── Page: Border tokens
│   ├── Page: Focus token
│   ├── Page: Support tokens (error/success/warning/info)
│   └── Page: AI tokens
│
├── 📁 02_Components/
│   ├── 📁 UI Shell/
│   │   ├── Header
│   │   ├── SideNav (full + rail)
│   │   ├── HeaderGlobalAction
│   │   └── HeaderPanel (notification)
│   ├── 📁 Data Tables/
│   │   ├── DataTable (all variants)
│   │   ├── TableToolbar
│   │   ├── TableBatchActions
│   │   ├── TableToolbarSearch
│   │   └── StructuredList
│   ├── 📁 Forms/
│   │   ├── TextInput
│   │   ├── PasswordInput
│   │   ├── TextArea
│   │   ├── Select
│   │   ├── Dropdown
│   │   ├── MultiSelect
│   │   ├── ComboBox
│   │   ├── DatePicker
│   │   ├── NumberInput
│   │   ├── Toggle
│   │   ├── RadioButton
│   │   ├── Checkbox
│   │   ├── FileUploader
│   │   └── Slider
│   ├── 📁 Navigation/
│   │   ├── Breadcrumb
│   │   ├── Tabs (line / contained)
│   │   ├── ContentSwitcher
│   │   ├── Pagination
│   │   └── ProgressIndicator
│   ├── 📁 Buttons/
│   │   ├── Button (all kinds + sizes)
│   │   ├── IconButton
│   │   └── OverflowMenu
│   ├── 📁 Notifications/
│   │   ├── InlineNotification
│   │   ├── ToastNotification
│   │   └── ActionableNotification
│   ├── 📁 Overlays/
│   │   ├── Modal (all sizes + kinds)
│   │   ├── SidePanel
│   │   └── Tooltip
│   ├── 📁 Data Display/
│   │   ├── Tile (all variants)
│   │   ├── Tag (all types)
│   │   ├── ProgressBar
│   │   └── Accordion
│   └── 📁 MillworkSuite Custom (Carbon-styled)/
│       ├── BidTimeline
│       ├── PDFCanvas + AIDetectionBox
│       ├── PageRail Thumbnail
│       ├── AvatarGroup
│       ├── ConfidenceScore
│       ├── CatalogMappingBadge
│       └── FormulaBuilder
│
├── 📁 03_Patterns/
│   ├── Page: UI Shell (full layout with nav states)
│   ├── Page: Data table patterns (all toolbar states)
│   ├── Page: Form patterns (create, edit, validate)
│   ├── Page: Notification patterns
│   ├── Page: Modal patterns
│   ├── Page: AI content patterns (with AI labels)
│   └── Page: Empty state patterns
│
├── 📁 04_Templates/
│   ├── Standard page (header + content)
│   ├── DataTable page (full toolbar pattern)
│   ├── Dashboard page (tile grid)
│   ├── Workspace (3-panel shell)
│   ├── Wizard (progress indicator + form)
│   └── Settings (2-column nav)
│
├── 📁 05_Pages_Desktop/
│   └── (All 12 screens in Carbon spec)
│
├── 📁 06_Pages_Mobile/
│   └── (Carbon responsive — md/sm breakpoints)
│
└── 📁 07_Dark_Theme/
    └── (All 12 screens in g100 dark theme)
```

---

---

# PART 8 — DESIGN CRITIQUE

---

## 8.1 Google Material Design 3 Reviewer Critique

**Reviewing application as a Material Design 3 compliance audit.**

---

**CRITIQUE MD3-001**
**Issue:** Navigation is entirely drawer-based with no persistent navigation affordance.
**Why it violates MD3:** Material Design 3 specifies three canonical navigation components for different form factors. On expanded viewports (desktop), a persistent Navigation Drawer is required. On medium viewports, a Navigation Rail is standard. Using only a modal overlay drawer violates the "provide meaningful destinations" navigation principle and fails to communicate the application's structure.
**Impact:** High. Users cannot see where they are in the application without opening the drawer. This increases cognitive load and creates navigation debt on every interaction.
**Recommended fix:** Implement the full MD3 navigation spectrum: Persistent Drawer on ≥1240px, Navigation Rail on 840–1239px, Bottom Navigation Bar on <840px.
**Priority:** P0

---

**CRITIQUE MD3-002**
**Issue:** 46px top bar height does not conform to any MD3 Top App Bar specification.
**Why it violates MD3:** MD3 defines Small (64dp), Medium (112dp), and Large (152dp) Top App Bars. The current 46px implementation is below the minimum and creates insufficient touch target size for the user chip and icon buttons.
**Impact:** Medium. Accessibility violation (touch targets), visual non-compliance.
**Recommended fix:** Use `SmallTopAppBar` at 64dp. Move project context information to a secondary sub-header row.
**Priority:** P1

---

**CRITIQUE MD3-003**
**Issue:** Button hierarchy uses incorrect semantic mapping.
**Why it violates MD3:** MD3 defines five button types in priority order: FAB (highest emphasis), Filled, Filled Tonal, Outlined, Text. The current implementation uses two ambiguous types (`.btn` and `.btn-ghost`) without clear hierarchy. Multiple "primary" actions appear at the same visual weight on the same page.
**Impact:** Medium. Users cannot quickly identify the most important action on a screen.
**Recommended fix:** Audit every page, identify the single primary action (FAB or FilledButton), relegate secondary actions to OutlinedButton or TextButton.
**Priority:** P1

---

**CRITIQUE MD3-004**
**Issue:** Border-based surface differentiation conflicts with MD3's tonal surface system.
**Why it violates MD3:** MD3 uses surface tones (SurfaceContainerLowest through SurfaceContainerHighest) to communicate surface hierarchy. Borders are reserved for interactive input boundaries only. The current design uses borders everywhere — cards, panels, table rows, sidebars — replacing what should be a tonal surface system.
**Impact:** High. The application looks "boxed in" and visually dense. Removing borders and using tonal surfaces would dramatically improve perceived quality and approachability.
**Recommended fix:** Remove borders from cards and containers. Use SurfaceContainer tokens for panel backgrounds. Introduce 1dp bottom borders only on active tabs and table headers.
**Priority:** P2

---

**CRITIQUE MD3-005**
**Issue:** Typography uses 19 arbitrary font sizes without a defined type scale.
**Why it violates MD3:** MD3 defines exactly 15 type styles (Display through Body). Every text element in the application should map to one of these 15 styles. The current ad-hoc approach produces inconsistent visual rhythm and makes global type scale changes impossible.
**Impact:** High. Global rebrand or accessibility adjustments would require touching hundreds of inline size declarations.
**Recommended fix:** Map every current text style to the nearest MD3 type style. Eliminate all in-between sizes. Introduce the Material type scale as Tailwind utilities.
**Priority:** P1

---

**CRITIQUE MD3-006**
**Issue:** The application has no motion system — hover effects are arbitrary CSS transitions.
**Why it violates MD3:** MD3 specifies four motion patterns: Container Transform, Shared Axis, Fade Through, and Fade. Navigation between screens, panel open/close, and item selection all have canonical motion specifications. The current `fadeIn 0.15s` and `translateY(-2px)` on hover are decorative rather than communicative.
**Impact:** Low. Motion is a differentiator, not a blocker. However, MD3's Container Transform for workspace transitions (detection result expanding from a box) would significantly elevate the AI interaction experience.
**Recommended fix:** Implement Container Transform for workspace AI interactions; Fade Through for screen/tab transitions; Shared Axis for wizard step progression.
**Priority:** P3

---

**CRITIQUE MD3-007**
**Issue:** No focus states are defined for keyboard navigation.
**Why it violates MD3:** MD3 requires a 3dp ring with `on-surface` color on all interactive elements. The current application has no visible focus ring CSS (`:focus-visible` is not styled). This is a critical accessibility failure that makes the application unusable for keyboard-only users.
**Impact:** Critical. WCAG 2.1 violation. Potential legal risk for enterprise customers with accessibility requirements.
**Recommended fix:** Add `focus-visible` styles to every interactive element using MD3's focus indicator specification.
**Priority:** P0

---

## 8.2 IBM Carbon Design Reviewer Critique

**Reviewing application as a Carbon Design System compliance audit.**

---

**CRITIQUE C-001**
**Issue:** The application uses custom CSS grid layouts without a defined column grid system.
**Why it violates Carbon:** Carbon's grid system (16 columns, 4 breakpoints, defined gutters) is mandatory for all Carbon applications. Using arbitrary flexbox/grid layouts breaks the spatial rhythm that enterprise users rely on for scanning data-dense interfaces. Carbon grid compliance is how Carbon products "feel like Carbon."
**Impact:** High. Layout inconsistency degrades scanning speed for power users.
**Recommended fix:** Migrate all page layouts to the Carbon 16-column grid using `<Grid>` and `<Column>` components. Map content widths to column spans.
**Priority:** P0

---

**CRITIQUE C-002**
**Issue:** The application does not use Carbon's typography scale (`$productive-heading-*`, `$body-long-*`, etc.).
**Why it violates Carbon:** Carbon specifies two distinct type sets: Productive (for data and task-completion UIs) and Expressive (for marketing and editorial contexts). MillworkSuite is a Productive application — every text element should use the Productive scale. The current ad-hoc sizing (9px–34px in arbitrary steps) violates this.
**Impact:** High. Typographic inconsistency slows reading and scanning for data-dense workflows.
**Recommended fix:** Remap all type styles to Carbon Productive scale. Use `$productive-heading-01` (14px/600) for table headers and item names; `$body-short-01` (14px/400) for descriptions; `$code-01` (12px mono) for SKUs, dates, and numbers.
**Priority:** P0

---

**CRITIQUE C-003**
**Issue:** The DataTable is not implemented with Carbon's DataTable component and violates multiple Carbon table standards.
**Why it violates Carbon:** Carbon's DataTable is the most comprehensively specified component in the system — it defines toolbar placement, sort indicators, selection patterns, batch action bars, row height variants (xs/sm/md/lg/xl), hover states, and overflow menus. The current implementation builds these from scratch with incorrect patterns (e.g., sort arrows as text characters instead of Carbon's `CaretSort` icon).
**Impact:** Critical. The Projects Dashboard table is the most-used screen in the application. Getting the table right is the single highest-value design investment.
**Recommended fix:** Replace custom table with Carbon `<DataTable>`, implement `<TableToolbar>` with search and filter dropdowns, use `<TableBatchActions>` for multi-select operations.
**Priority:** P0

---

**CRITIQUE C-004**
**Issue:** No AI Label or Carbon AI patterns are used on AI-generated content.
**Why it violates Carbon:** Carbon 11+ includes an explicit AI pattern suite for Watson-powered products. The `AILabel` component, AI border gradient, and AI skeleton states exist precisely for this use case — communicating which content was generated by AI vs. human-entered. For MillworkSuite, where every detected item is AI-generated, this is a first-class requirement. Users must be able to distinguish AI detections from manually-entered items, and each item's confidence level must be communicated.
**Impact:** High. Without AI labels, users cannot determine what they can trust and what they should verify. This is a product liability issue — an uncommunicated AI error in a $500k bid is consequential.
**Recommended fix:** Apply `<AILabel>` to every AI-generated item row. Use `Tag type="blue"` for confidence level. Apply the AI border gradient to detection boxes in the canvas. Use `InlineNotification kind="info"` with AI icon for the detection status panel.
**Priority:** P0

---

**CRITIQUE C-005**
**Issue:** Modals do not implement Carbon's Modal specification — no focus trap, no `role="dialog"`, non-standard close behavior.
**Why it violates Carbon:** Carbon's `<Modal>` component is fully specified for enterprise accessibility requirements. It implements focus trap, `aria-modal`, Escape key dismissal, scroll lock, and multiple size variants. The current custom CSS modals implement none of these behaviors.
**Impact:** High. Accessibility failure (modals are usable by screen reader users only with proper focus trap implementation). Also creates UX inconsistency when some overlays are modals and some are drawers without a clear distinction.
**Recommended fix:** Replace all custom modals with `@carbon/react`'s `<Modal>` component. Use `kind="danger"` for destructive confirmations. Use `<SidePanel>` for product editing and item detail.
**Priority:** P1

---

**CRITIQUE C-006**
**Issue:** Form labels use an uppercase micro-label style that does not follow Carbon's label specification.
**Why it violates Carbon:** Carbon defines `$label-01` (12px/400) as the label style for form fields. Labels in Carbon sit above the field without text-transform. The current `UPPERCASE · 10.5px · font-weight:600` style is visually distinctive but creates a significantly smaller touch target for the label text and violates Carbon's accessibility label sizing guidelines.
**Impact:** Medium. Text at 10.5px with uppercase and tracking at 0.04em has insufficient contrast for users with low vision even when meeting 4.5:1 ratio — character recognition becomes difficult.
**Recommended fix:** Use Carbon `$label-01` (12px) for all form labels. Remove text-transform. Use `$label-02` (14px) for section labels.
**Priority:** P1

---

**CRITIQUE C-007**
**Issue:** Notifications are non-functional and incomplete.
**Why it violates Carbon:** Carbon defines four notification types for four use cases: `InlineNotification` (within content), `ToastNotification` (transient global), `ActionableNotification` (requires user response), and `CalloutNotification` (persistent info). The current application has a bell icon with no panel, no badge, and no notification component whatsoever.
**Impact:** High. AI detection completion, bid deadline alerts, and team collaboration events are all notification-worthy events in a time-sensitive estimating workflow. Missing notifications means users miss time-critical information.
**Recommended fix:** Implement the full Carbon notification system. Use `ToastNotification` for detection completion; `ActionableNotification` for bid deadline warnings; `InlineNotification` for catalog mapping issues in workspace.
**Priority:** P1

---

---

# PART 9 — FINAL DELIVERABLES SUMMARY

---

## 9.1 Component Inventory

| # | Component | Current | MD3 Equivalent | Carbon Equivalent | Accessibility |
|---|-----------|---------|---------------|-------------------|---------------|
| 1 | Top Bar | Custom 46px | SmallTopAppBar 64dp | UIShell Header 48px | A-001, A-002 fix required |
| 2 | Nav Drawer | Custom CSS | NavigationDrawer | SideNav | A-002 fix required |
| 3 | Navigation Rail | Not present | NavigationRail | SideNav rail | New component |
| 4 | Bottom Nav | Not present | BottomNavigationBar | Not applicable | New for mobile |
| 5 | Breadcrumb | Custom | Path chip row | Breadcrumb | OK |
| 6 | Tabs | Underline custom | Tab (Primary) | Tabs (line) | A-013 fix |
| 7 | Primary Button | `.btn-primary` | FilledButton | Button primary | OK |
| 8 | Secondary Button | `.btn` | OutlinedButton | Button secondary | OK |
| 9 | Ghost Button | `.btn-ghost` | TextButton | Button ghost | OK |
| 10 | Icon Button | `.icon-btn` | IconButton | IconButton | A-001 fix |
| 11 | FAB | Not present | FAB | Not standard | New |
| 12 | Text Input | `.input` | TextField Outlined | TextInput | A-006 |
| 13 | Select | Native | ExposedDropdownMenu | Select | OK |
| 14 | Toggle Switch | Custom CSS | Switch | Toggle | A-008 fix |
| 15 | Radio | Custom CSS | RadioButton | RadioButton | OK |
| 16 | Checkbox | Not present | Checkbox | Checkbox | New |
| 17 | Filter Chip | `.dash-filter` | FilterChip | MultiSelect/Dropdown | OK |
| 18 | Status Tag | `.tag` + color variants | AssistChip | Tag | A-005 fix |
| 19 | Data Table | Custom CSS grid | DataGrid (custom) | DataTable | A-003, A-013 fix |
| 20 | Project Card | `.proj` | Card (Elevated) | ClickableTile | OK |
| 21 | App Card | `.app-card` | Card (Filled) | Feature Tile | OK |
| 22 | Kanban Board | Custom CSS | Custom Card-based | Custom Tile-based | A-004 fix |
| 23 | Stat Box | `.stat-box` | Card (Filled tonal) | Tile | OK |
| 24 | Calendar | Custom CSS | DatePicker inline | DatePicker inline | OK |
| 25 | Modal | `.modal` | Dialog | Modal | A-010 fix |
| 26 | EULA Modal | `.eula-modal` | Dialog (full-screen) | Modal (full-width) | A-010 fix |
| 27 | Side Panel | `.prod-panel` | NavDrawer (right) | SidePanel | A-010 fix |
| 28 | Notification | Incomplete | Snackbar + Drawer | Notification family | Complete rebuild |
| 29 | AI Status Panel | `.canvas-ai-panel` | Card (Elevated) | InlineNotification | A-007 fix |
| 30 | Wizard Steps | Custom tabs | ProgressIndicator | ProgressIndicator | OK |
| 31 | Dropzone | `.dropzone` | Custom | FileUploader | OK |
| 32 | Formula Builder | Custom | Custom MD3-styled | Custom C-styled | A-009 fix |
| 33 | Bid Timeline | Custom | Custom MD3-styled | Custom C-styled | New a11y req |
| 34 | PDF Canvas | Custom | Custom MD3-styled | Custom C-styled | A-007 fix |
| 35 | Detection Box | Custom | SuggestionChip + box | AILabel + box | A-007 fix |
| 36 | Page Thumbnail | Custom | Custom | Custom | OK |
| 37 | OverflowMenu (⋯) | Custom `.icon-btn` | Menu (Dropdown) | OverflowMenu | OK |
| 38 | View Toggle | Segmented custom | SegmentedButton | ContentSwitcher | OK |
| 39 | Search | Custom `.input` | SearchBar | Search/TableToolbarSearch | OK |
| 40 | Avatar | Custom CSS | Avatar (MD3) | Avatar | OK |
| 41 | Avatar Stack | Custom CSS | AvatarGroup (custom) | AvatarGroup (custom) | OK |
| 42 | Pricing Tag | `.pricing-tag` | FilterChip | Tag | OK |
| 43 | Context Menu | Custom | DropdownMenu | OverflowMenu | OK |
| 44 | Confirm Dialog | Custom modal | AlertDialog | Modal (danger) | A-010 fix |
| 45 | Settings Toggle Row | Custom | SwitchListItem | Toggle + ListItem | A-008 fix |

---

## 9.2 Responsive Design Rules

### MD3 Responsive Rules

| Breakpoint | Name | Width | Navigation | Content | Workspace |
|------------|------|-------|-----------|---------|-----------|
| Compact | Mobile | <600dp | BottomNavBar | Single column, 16dp margins | Canvas only, panels via BottomSheet |
| Medium | Tablet | 600–839dp | NavigationRail | 8-column grid, 24dp margins | 2-panel (canvas + toggle sheet) |
| Expanded | Desktop | ≥840dp | Persistent Drawer | 12-column content, 24dp margins | 3-panel standard |

### Carbon Responsive Rules

| Breakpoint | Width | Columns | SideNav | Content |
|------------|-------|---------|---------|---------|
| sm | <672px | 4 | Hidden (hamburger) | Full-width, 0 margin |
| md | 672–1056px | 8 | Rail (icons only, 48px) | lg=8 columns |
| lg | 1056–1312px | 16 | Full (256px) | lg=10/16 columns |
| xlg | 1312–1584px | 16 | Full (256px) | lg=12/16 columns |
| max | >1584px | 16 | Full (256px) | max-width container |

---

## 9.3 Accessibility Audit Findings & Remediations

| ID | Current Severity | Finding | MD3 Remediation | Carbon Remediation |
|----|-----------------|---------|----------------|-------------------|
| A-001 | Critical | No focus rings | MD3 3dp focus ring, automatic | Carbon $focus: #0f62fe, automatic |
| A-002 | Critical | Nav drawer not semantic | NavigationDrawer with role="navigation" | SideNav with aria-label |
| A-003 | Critical | Table not semantic | DataGrid uses table semantics | DataTable uses semantic table |
| A-004 | High | Kanban not announced | role="list" + role="listitem" custom | role="list" + role="listitem" custom |
| A-005 | High | Ink-3 contrast failure (3.8:1) | on-surface-variant ≥ 4.5:1 guaranteed | $text-secondary ≥ 4.5:1 guaranteed |
| A-006 | High | Ink-4 contrast failure (3.4:1) | on-surface-variant passes | $text-secondary passes |
| A-007 | High | Canvas not keyboard accessible | Tab-navigable detection boxes with aria-label | Same + Carbon focus ring |
| A-008 | Medium | Toggle no accessible text | Switch component with labelText | Toggle with labelText prop |
| A-009 | Medium | Formula builder not keyboard accessible | Chip input pattern keyboard spec | Custom keyboard spec required |
| A-010 | Medium | Modal no focus trap | Dialog implements focus trap | Modal implements focus trap |
| A-011 | Medium | Errors not announced | Snackbar uses aria-live="polite" | InlineNotification uses aria-live |
| A-012 | Low | SVG not aria-hidden | All decorative icons aria-hidden="true" | All decorative icons aria-hidden |
| A-013 | Low | No aria-sort on table | DataGrid implements aria-sort | DataTable implements aria-sort |
| A-014 | Low | Micro labels too small | label-small: 11sp (passes) | $label-01: 12px (passes) |

---

---

# PART 10 — EXECUTIVE RECOMMENDATION

---

## 10.1 Summary Decision

**Recommended Design System: IBM Carbon Design System**

**Confidence:** High  
**Rationale:** Comprehensive (documented below)

---

## 10.2 Why Carbon is the Right Choice for MillworkSuite

### 10.2.1 Product Category Alignment

MillworkSuite is a **professional enterprise SaaS tool**, not a consumer application. Its primary users (estimators) spend 6–8 hours per day inside the product, managing complex data-dense workflows, reading tables with 11 columns, and making financially consequential decisions. This is precisely the product category IBM Carbon was designed for — complex enterprise software where **accuracy, speed, and data density matter more than visual expressiveness**.

Material Design 3 is excellent for Google Workspace-style products and consumer-facing enterprise apps. But its principles — expressive surfaces, dynamic color, large touch targets, animated transitions — are optimized for occasional use on mobile/touch devices. Applying MD3 to MillworkSuite would produce a product that looks modern and approachable but would frustrate power users who need dense information architecture and keyboard-optimized workflows.

### 10.2.2 Data Table Excellence

The Projects Dashboard list view is the most-used screen in the application. Carbon's `<DataTable>` is the best-specified, best-implemented enterprise data table in any open-source design system — sortable columns, batch selection, toolbar integration, inline actions, compact row variants. Nothing in the MD3 ecosystem comes close. For a product where tabular data manipulation is the primary workflow, this alone justifies the choice.

### 10.2.3 AI Interaction Patterns — Direct Match

MillworkSuite's core differentiator is its AI detection engine. Every item in the workspace is AI-generated with a confidence score. Carbon 11's **AI pattern suite** — `AILabel`, AI border gradient, AI skeleton states — was built specifically for exactly this use case. The `AILabel` component communicates "this content was generated by AI and may require verification" — which is precisely what MillworkSuite needs on every detected item. MD3 has no equivalent.

### 10.2.4 Implementation Velocity

`@carbon/react` is a production-grade, IBM-maintained React component library with TypeScript support, full WCAG 2.1 AA compliance built-in, and a direct 1:1 mapping between Figma components and React components. The estimated Carbon implementation is 19 weeks vs. 20 weeks for MD3, but Carbon's implementation risk is significantly lower because `@carbon/react` ships the complex components (DataTable, Modal, SidePanel) ready to use. MD3 would require building a custom DataTable from scratch.

### 10.2.5 Enterprise Sales Signal

MillworkSuite competes in the millwork ERP space where buyers evaluate products like IBM's own products. Carbon's visual language signals "enterprise-grade, production-ready, professionally designed" to buyers at mid-market millwork companies who are accustomed to software like Sage, Procore, and Autodesk. This is not a trivial consideration — enterprise B2B software purchasing decisions are heavily influenced by perceived quality and institutional credibility.

### 10.2.6 Theming with Brand Identity

Carbon's token system allows MillworkSuite to apply its emerald green brand color (`#22A082`) as the `$interactive` token, overriding Carbon's default blue (`#0f62fe`). All Carbon components then inherit the brand color through the token system — active states, focus rings, primary buttons, and interactive elements all become MillworkSuite-branded without rebuilding any components. This theming path is simpler and more reliable than MD3's Dynamic Color system, which requires runtime color generation.

---

## 10.3 Where Material Design 3 Has an Advantage

This recommendation is not absolute. MD3 is the better choice in four specific contexts:

1. **Mobile expansion:** If MillworkSuite plans a native iOS/Android companion app, MD3's mobile-first philosophy, Bottom Navigation Bar, and adaptive layout system would be superior. Carbon has poor mobile ergonomics.

2. **Consumer-facing landing page:** The marketing landing page (`#landing`) is better served by MD3's expressive design language. A recommendation: use Carbon for the authenticated product and MD3-inspired patterns for the marketing site.

3. **Brand expressiveness:** If MillworkSuite's brand strategy prioritizes "modern, approachable, and distinctive" over "serious enterprise tool," MD3 would better serve that positioning. This is a business strategy question, not a pure design question.

4. **Long-term design team familiarity:** If the team is more familiar with Material Design (common in Google Cloud / Firebase ecosystems), MD3 may have a lower learning curve.

---

## 10.4 Migration Phasing Recommendation

If Carbon is selected, the recommended 5-phase rollout:

| Phase | Scope | Weeks | Value |
|-------|-------|-------|-------|
| **Phase 1:** Foundation | Tokens, Shell, Navigation | 4 | Fixes P0 navigation issue; establishes system |
| **Phase 2:** Projects Dashboard | DataTable, filters, views | 3 | Highest-ROI screen; fixes data density issues |
| **Phase 3:** Workspace | 3-panel layout, AI labels, items panel | 4 | Core differentiator; AI credibility |
| **Phase 4:** Catalog + Admin | SidePanel, forms, user management | 3 | Completes admin surface; enables self-serve |
| **Phase 5:** Analytics + Polish | Charts, dark theme, accessibility audit | 5 | Executive visibility + a11y compliance |
| **Buffer** | Testing, QA, iteration | 2 | Risk mitigation |
| **Total** | | **~21 weeks** | Production-ready enterprise product |

---

## 10.5 Final Statement

MillworkSuite is a professional tool that handles real money, real bids, and real business outcomes for architectural millwork companies. The design system it runs on must be:

- **Trusted** — familiar enough that estimators don't think about the interface; they think about the bid
- **Dense** — capable of showing 11-column tables, 142-item lists, and 14-page rail panels without sacrificing legibility
- **Accessible** — legally and ethically compliant for enterprise buyers with accessibility requirements
- **Scalable** — capable of growing from 4 apps to 12 apps, from 10 users to 1,000 users, without redesigning the navigation

**IBM Carbon Design System delivers all four of these requirements.** It is the correct choice for MillworkSuite v1 enterprise launch.

---

*End of Specification*

---

**Document metadata:**
- Total screens specified: 12
- Total components mapped: 45
- Design tokens defined: 2 full token sets (MD3 + Carbon)
- Figma file structures: 2 (MD3 + Carbon)
- Design critiques: 14 (7 MD3 + 7 Carbon)
- Accessibility issues identified: 14
- Implementation estimate: ~19–21 weeks
- Recommendation: IBM Carbon Design System
