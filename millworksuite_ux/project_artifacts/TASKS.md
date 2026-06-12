# MillworkSuite Carbon — Build Tasks

**File:** `millworksuite_carbon.html`  
**Design system:** IBM Carbon Design System (G10 White theme, brand overlay)  
**Total screens:** 12  
**Final line count:** ~5,387

---

## Status

| # | Task | Status |
|---|------|--------|
| 1 | Carbon CSS foundation — tokens, shell, common components | ✅ Complete |
| 2 | Screen 1 — Landing Page | ✅ Complete |
| 3 | Screen 2 — Login Page | ✅ Complete |
| 4 | Screen 3 — App Hub | ✅ Complete |
| 5 | Screen 4 — Projects Dashboard (Grid + List + Board) | ✅ Complete |
| 6 | Screen 5 — New Project Wizard | ✅ Complete |
| 7 | Screen 6 — Project Workspace | ✅ Complete |
| 8 | Screen 7 — Product Catalog | ✅ Complete |
| 9 | Screen 8 — User Management | ✅ Complete |
| 10 | Screen 9 — User Roles & Permissions | ✅ Complete |
| 11 | Screen 10 — Settings | ✅ Complete |
| 12 | Screen 11 — Analytics | ✅ Complete |
| 13 | Overlays — EULA, Confirm, Notifications, Search, Toast | ✅ Complete |
| 14 | JavaScript — all navigation, interactions, event handlers | ✅ Complete |
| 15 | Supplemental CSS — all new component classes | ✅ Complete |

---

## Screen Inventory

### Screen 1 — Landing Page (`#landing`)
Marketing page. Sticky nav, hero with pilot badge + stats strip, app preview window (faux browser + PDF canvas), 6-card features grid, CTA band, footer.

### Screen 2 — Login Page (`#login`)
Standalone auth page. Dark gradient background, centered card, email + password fields, EULA trigger on sign-in.

### Screen 3 — App Hub (`#hub`)
Welcome screen inside the app shell. App cards (Estimate, Catalog, Users, Analytics), 30-day bid strip with calendar pins, recent projects list, quick-stats row, notifications panel toggle.

### Screen 4 — Projects Dashboard (`#dashboard`)
Three interchangeable views:
- **Grid** — 6 project cards with thumbnail, status tag, stats row, avatar stack
- **List** (default) — 11-column Carbon DataTable with overflow menus
- **Board** — 5-column Kanban (Not Started / In Progress / Bid Placed / Won / Lost)

Toolbar: search + 4 filter dropdowns + view-toggle buttons.

### Screen 5 — New Project Wizard (`#newproject`)
3-step ProgressIndicator wizard:
1. Project Details — name, GC, bid date, address, type, notes
2. Upload Plans — drag-and-drop FileUploader with progress tracking
3. Review & Launch — StructuredList summary, Launch AI Detection CTA

### Screen 6 — Project Workspace (`#workspace`)
3-panel layout:
- **Pages rail** (left 96px) — page thumbnails with item count badges
- **PDF canvas** (center) — simulated floor plan SVG with AI detection bounding boxes
- **Items panel** (right 320px) — AI status card, tabbed content (Estimate / Rooms / CAD Export), footer totals bar
Mode bar: Estimate / Draft / Manage tabs + Export/Submit buttons.

### Screen 7 — Product Catalog (`#catalog`)
Tabs: AI Suggestions / Company Catalog / Templates / Defaults.  
Category sidebar (left 220px) + product DataTable + slide-out detail panel.  
Detail panel: pricing switcher (Flat Rate / Formula / Tiered), formula builder with token chips, dimensions grid.

### Screen 8 — User Management (`#users`)
Full DataTable of 5 users with avatars, role tags, status tags, last-active timestamps, overflow menus.

### Screen 9 — User Roles & Permissions (`#roles`)
4 role cards (Admin / Estimator / Drafter / Viewer) + full permissions matrix table (14 permissions × 4 roles).

### Screen 10 — Settings (`#settings`)
Left-nav with 5 sections:
- **Appearance** — theme switcher, compact mode toggle, default view
- **Notifications** — 4 on/off toggles
- **Integrations** — Microvellum (connected), Cabinet Vision (not connected), Email SMTP (connected)
- **Security** — 2FA toggle, session timeout selector, IP allowlist
- **API Keys** — key list with revoke action

### Screen 11 — Analytics (`#analytics`)
KPI row (5 tiles), charts row (bar chart + win-rate donut), active pipeline DataTable.

---

## Overlays

| Overlay | ID | Trigger |
|---------|-----|---------|
| EULA modal | `#eulaOverlay` | First login — scroll-gated accept button |
| Confirm dialog | `#confirmOverlay` | Delete/revoke destructive actions |
| Notification panel | `#notifPanel` | Bell icon in header |
| Search overlay | `#searchOverlay` | Search icon or ⌘K |
| Toast container | `#toastContainer` | `showToast(msg, type)` calls |

---

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-forest` | `#0c1810` | Header background |
| `--brand-primary` | `#006437` | Interactive, focus, buttons |
| `--brand-primary-hover` | `#004b29` | Button hover |
| `--brand-primary-light` | `#defbe6` | Selected states, AI card bg |
| `--brand-emerald` | `#22A082` | Accent, AI label |
| `--cds-background` | `#f4f4f4` | App body background |
| `--cds-layer-01/02/03` | `#f4f4f4 / #fff / #f4f4f4` | Card layers |
| `--header-height` | `48px` | Shell header |
| `--sidenav-width` | `256px` | Left navigation |

---

## JavaScript Functions

| Function | Purpose |
|----------|---------|
| `show(id)` | Navigate between screens |
| `setSideNav(id)` | Highlight active sidenav item |
| `toggleSideNav()` | Collapse/expand sidebar |
| `handleLogin()` | Trigger EULA or direct hub access |
| `showEula() / eulaAccept() / eulaDecline()` | EULA flow |
| `startNewProject()` | Open wizard at step 1 |
| `gotoStep(n)` | Wizard step navigation |
| `setDashView(view, btn)` | Switch grid/list/board |
| `setWsMode(mode, btn)` | Workspace mode tabs |
| `setWsTab(tab, btn)` | Workspace item panel tabs |
| `openProdPanel() / closeProdPanel()` | Catalog detail panel |
| `setCatalogTab(tab, btn)` | Catalog top tabs |
| `setCsPricing(mode, btn)` | Pricing type switcher |
| `formulaToken(token)` | Add token to formula builder |
| `setSettingsSection(id, btn)` | Settings left-nav |
| `showConfirm(title, body, type, cb)` | Confirm dialog |
| `closeConfirm()` | Close confirm dialog |
| `toggleNotif() / openNotif() / closeNotif()` | Notification panel |
| `openSearch() / closeSearch()` | Search overlay |
| `showToast(msg, type)` | Toast notifications |
