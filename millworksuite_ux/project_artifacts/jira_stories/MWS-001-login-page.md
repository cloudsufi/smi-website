# MWS-001 — Login Page

**Type:** Story  
**Epic:** MWS — Public & Auth Pages  
**Priority:** P0 — Blocker  
**Labels:** frontend, auth, UX  
**Story Points:** 5

---

## User Story

> As a MillworkSuite user, I want to sign in to the platform with my email and password so that I can access my company's estimating workspace securely.

---

## Design Reference

Open `millworksuite_ux.html` → click **Sign in** from the landing page, or navigate directly to `#login`.

```
┌─────────────────────────────────────────────────────────┐
│              [full-bleed dark gradient bg]              │
│                                                         │
│          ┌────────────────────────────────┐             │
│          │  [MillworkSuite logo]          │             │
│          │                               │             │
│          │  Welcome back                 │             │
│          │  Continue where you left off. │             │
│          │                               │             │
│          │  Email ID                     │             │
│          │  ┌───────────────────────┐    │             │
│          │  │ rob@smicabinetry.com  │    │             │
│          │  └───────────────────────┘    │             │
│          │                               │             │
│          │  Password                     │             │
│          │  ┌──────────────────── 👁 ┐   │             │
│          │  │ ••••••••••           │   │             │
│          │  └───────────────────────┘   │             │
│          │                               │             │
│          │  [ Sign in  → ]               │             │
│          │                               │             │
│          │  Forgot password?             │             │
│          └────────────────────────────────┘             │
└─────────────────────────────────────────────────────────┘
```

---

## Page Layout & Components

### 1. Background
- Full-viewport dark gradient background (deep navy/forest tone matching the app's premium aesthetic).
- No topbar or navigation is shown on this page — it is completely standalone.

### 2. Login Card
- Centered white card, fixed width (~380px), with rounded corners, subtle box shadow.
- Vertically centered in the viewport.

#### 2a. Logo
- MillworkSuite logo SVG rendered at `height: 30px` at the top of the card.
- Links to the landing page on click.

#### 2b. Heading & Sub-heading
- **H1:** "Welcome back" — bold, dark ink, `~20px`.
- **Sub:** "Continue where you left off." — muted secondary text below.

#### 2c. Email Field
- **Label:** `Email ID` — uppercase micro-label style.
- **Input type:** `email` with `autocomplete="email"`.
- **Placeholder:** `rob@smicabinetry.com`
- On production: pre-fills with the authenticated session email if returning user.
- Full-width, standard input height (~36px), border on all sides, focus ring in `--blue-500`.

#### 2d. Password Field
- **Label:** `Password` — uppercase micro-label style.
- **Input type:** `password` with `autocomplete="current-password"`.
- **Placeholder:** `••••••••••`
- **Show/hide toggle:** Eye icon button inside the right edge of the input.
  - Click toggles `type` between `password` and `text`.
  - Icon swaps between open-eye and eye-with-slash.
  - `aria-label="Show or hide password"` required.

#### 2e. Sign In Button
- **Label:** `Sign in` with a right-arrow `→` icon.
- Full-width, primary blue, `~44px` height, bold text.
- On click: validates that both fields are non-empty, then triggers the **EULA modal** (see MWS-004).
- Disabled state: button should be visually disabled if either field is empty.
- Loading state: button shows a spinner while auth request is in flight.

#### 2f. Forgot Password Link
- Anchored below the sign-in button, right-aligned or centered.
- Text: `Forgot password?`
- Opens a password reset flow (separate story MWS-005).

---

## Behaviour & States

| State | Behaviour |
|---|---|
| Empty fields | Sign in button disabled; no validation message until submit attempted |
| Invalid email format | Inline error: "Please enter a valid email address" below the field |
| Wrong credentials | Card-level error banner: "Incorrect email or password. Please try again." |
| Successful auth | EULA modal appears (first login) OR direct redirect to App Hub (returning user) |
| Forgot password click | Navigate to password reset screen |
| Network error | Error banner: "Could not connect. Check your connection and try again." |

---

## EULA Flow (triggered by Sign In)

After credential validation succeeds, the EULA modal is shown **on first login only**.  
- On accept → store acceptance in user profile, navigate to App Hub.  
- On decline → remain on login screen, session not established.  
- On subsequent logins → skip EULA, go directly to App Hub.

See **MWS-004** for the full EULA modal story.

---

## Accessibility Requirements

- All form fields must have associated `<label>` elements (not just placeholders).
- Password toggle must have `aria-label="Show password"` / `"Hide password"` toggling correctly.
- Sign in button must be keyboard-submittable via `Enter` key in any field.
- Error messages must be announced via `aria-live="polite"`.
- Focus order: Logo → Email → Password → Show/Hide toggle → Sign in → Forgot password.

---

## Responsive Behaviour

| Breakpoint | Behaviour |
|---|---|
| Desktop (≥1024px) | Centered card, max-width 400px |
| Tablet (768–1023px) | Same card, slightly reduced padding |
| Mobile (<768px) | Card goes full-width with 16px horizontal margin |

---

## Acceptance Criteria

- [ ] Background is full-viewport dark gradient with no topbar or nav.
- [ ] MillworkSuite logo renders at correct size and is visible against the dark bg.
- [ ] Email and password fields are correctly labelled and focusable.
- [ ] Password show/hide toggle switches input type and swaps icon correctly.
- [ ] Sign in button is disabled when either field is empty.
- [ ] Successful sign in triggers EULA on first login, bypasses on subsequent logins.
- [ ] Inline validation errors appear correctly for empty/invalid inputs.
- [ ] Card-level error appears for wrong credentials.
- [ ] `Forgot password?` link is present and navigates to reset flow.
- [ ] Page passes WCAG 2.1 AA keyboard navigation and screen-reader audit.
- [ ] Responsive layout works on mobile, tablet, and desktop.

---

## Out of Scope for This Story

- SSO / OAuth login (separate story MWS-006)
- MFA / 2-factor authentication
- Account creation / sign-up
- Session timeout handling
