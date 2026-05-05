# card — Design Map

> Last synced: 2026-05-05
> Figma node: https://www.figma.com/design/eKAqJtRHEFoa6FOPw3xzCw/Components?node-id=1213-64913

---

## figma-design-context

### Component info

- **Name:** Card
- **Figma node:** https://www.figma.com/design/eKAqJtRHEFoa6FOPw3xzCw/Components?node-id=1213-64913
- **Date scanned:** 2026-05-05

---

### Variants

| Property | Values | Default |
|---|---|---|
| `variant` | `Default` \| `Decorative` | `Default` |
| `elevation` | `Flat` \| `Raised` \| `Floating` | `Flat` |
| `padding` | `Spacing-3` \| `Spacing-4` | `Spacing-4` |

> `padding` controls the internal padding of the card surface: `Spacing-3` = 12px, `Spacing-4` = 16px. This property has **no React equivalent** — see Gaps.

---

### Design tokens used

| Figma token | theme() path | Used in |
|---|---|---|
| `color/bg/default` | `backgroundColor.default` | `.card-default` background |
| `color/accent/bg-gray-light` | `backgroundColor.accent.gray-light` | `.card-decorative` gradient start (from) ⚠️ not via theme() — see Gaps |
| `color/accent/bg-gray` | `backgroundColor.accent.gray` | `.card-decorative` gradient end (to) ⚠️ not via theme() — see Gaps |
| `color/border/default` | `borderColor.default` | `.card-flat` and `.card-floating` border |
| _(no Figma token — code-only)_ | `boxShadow.soft-xs` | `.card-floating` shadow |
| _(no Figma token — code-only)_ | `boxShadow.hard-sm` | `.card-raised` shadow |
| `rounded/2xl` | — (hardcoded `1rem`) | `.card-root` border-radius |
| `spacing/3` | — (Figma padding = 12px) | padding when `padding = Spacing-3` ⚠️ not applied in React |
| `spacing/4` | — (Figma padding = 16px) | padding when `padding = Spacing-4` ⚠️ not applied in React |

---

### Visual specs

**Base (all variants — `.card-root`):**

| Property | Value |
|---|---|
| display | flex, flex-direction: column |
| border-radius | 1rem (16px = rounded-2xl) |
| padding | none applied by component — consumer's responsibility |
| width / height | not constrained — adapts to container |

**Per variant × elevation:**

| Variant | Elevation | Background | Border | Shadow |
|---|---|---|---|---|
| Default | Flat | `backgroundColor.default` | 1px solid `borderColor.default` | none |
| Default | Raised | `backgroundColor.default` | none | `boxShadow.hard-sm` |
| Default | Floating | `backgroundColor.default` | 1px solid `borderColor.default` | `boxShadow.soft-xs` |
| Decorative | Flat | gradient 90° `backgroundColor.accent.gray-light` → `backgroundColor.accent.gray` | 1px solid `borderColor.default` | none |
| Decorative | Raised | gradient 90° `backgroundColor.accent.gray-light` → `backgroundColor.accent.gray` | none | `boxShadow.hard-sm` |
| Decorative | Floating | gradient 90° `backgroundColor.accent.gray-light` → `backgroundColor.accent.gray` | 1px solid `borderColor.default` | `boxShadow.soft-xs` |

> ⚠️ The `.card-decorative` gradient as implemented in styles.js does **not** use `theme()` and does **not** match the Figma token values. See Gaps.

**Padding applied in Figma (not in React):**

| Padding property | Value |
|---|---|
| `Spacing-3` | 12px on all sides |
| `Spacing-4` | 16px on all sides |

**Shadow resolved values (from token map — code-only):**

| theme() path | Resolved value |
|---|---|
| `boxShadow.soft-xs` | `0px 2px 4px -1px rgba(16,25,40,0.02), 0px 5px 13px -5px rgba(16,25,40,0.05)` |
| `boxShadow.hard-sm` | `0px 2px 5px -2px rgba(16,25,40,0.06), 0px 2px 7px 0px rgba(16,25,40,0.05), 0px 0px 0px 1px rgba(16,25,40,0.05)` |

---

### Interaction states

The Card is a **layout container**, not an interactive element. Neither Figma nor React defines hover, focus, active, or disabled states for any variant or elevation combination.

| State | What changes |
|---|---|
| Default | Baseline appearance per variant + elevation table above |
| Hover | No defined style change |
| Focus | No defined style change |
| Active | No defined style change |
| Disabled | No defined style change |

> If interactive card behaviour is needed (clickable cards, keyboard focus ring), styles must be added by the consumer — they are not part of this component.

---

### Slots

| Slot | Content | Constraints |
|---|---|---|
| Content slot | Any content (`.Slot` placeholder in Figma; `children` in React) | No size, color, or layout constraints enforced by the component |
| Figma placeholder dimensions | 328×128px (`Spacing-4`), 336×136px (`Spacing-3`) | Design-tool placeholder only — not reflected in React |

---

## react-design-context

### Component metadata

- **File:** `lib/components/Card/index.tsx`
- **Styles:** `lib/components/Card/styles.js`
- **Import:** `import { Card } from 'lib/components/Card'`
- **Exports:** `Card` (named), `CardProps` (interface)
- **Ref:** Forwarded to `HTMLDivElement`
- **Dependencies:** None

---

### Variant-to-class mapping (from CVA)

| CVA axis | Prop value | CSS class | styles.js lines |
|---|---|---|---|
| _(base)_ | _(always)_ | `.card-root` | 2–6 |
| `variant` | `default` | `.card-default` | 7–9 |
| `variant` | `decorative` | `.card-decorative` | 10–12 |
| `elevation` | `flat` | `.card-flat` | 13–15 |
| `elevation` | `raised` | `.card-raised` | 16–18 |
| `elevation` | `floating` | `.card-floating` | 19–22 |

Default variants: `variant = 'default'`, `elevation = 'flat'`.

The rendered element always receives `.card-root` plus one class from each axis. No modifier classes (no `.icon-only`, `.loading`, etc.).

---

### Prop mapping

| Figma property | React prop | Type | Default | Notes |
|---|---|---|---|---|
| `variant: Default` | `variant: 'default'` | `'default' \| 'decorative'` | `'default'` | Figma capitalises; React is lowercase |
| `variant: Decorative` | `variant: 'decorative'` | `'default' \| 'decorative'` | — | Same naming difference |
| `elevation: Flat` | `elevation: 'flat'` | `'flat' \| 'raised' \| 'floating'` | `'flat'` | Figma capitalises; React is lowercase |
| `elevation: Raised` | `elevation: 'raised'` | `'flat' \| 'raised' \| 'floating'` | — | |
| `elevation: Floating` | `elevation: 'floating'` | `'flat' \| 'raised' \| 'floating'` | — | |
| `padding: Spacing-3` | _(no prop)_ ⚠️ | — | — | Not implemented; consumer must apply `p-3` manually |
| `padding: Spacing-4` | _(no prop)_ ⚠️ | — | — | Not implemented; consumer must apply `p-4` manually |

---

### Behavior-only props (no Figma equivalent)

All props from `React.HTMLAttributes<HTMLDivElement>` are passed through to the root `<div>`:

| Prop | Notes |
|---|---|
| `className` | Merged after CVA output via `cn()` |
| `ref` | Forwarded to `HTMLDivElement` |
| `children` | The card content — equivalent to Figma's `.Slot` placeholder |
| `onClick`, `onKeyDown`, etc. | Standard DOM event handlers — no interactive styles defined |
| `id`, `style`, `data-*`, `aria-*` | Passed through as native HTML attributes |

---

### Shared helpers used in styles.js

This component's `styles.js` receives **only `theme`** — not the destructured helper object used by other components. The module signature is `module.exports = (theme) => ({...})`.

| Helper | What it does | Received? |
|---|---|---|
| `transitionColorsStyles` | Smooth color transitions | **No** |
| `textContentStyles` | Body font, sm size, medium weight | **No** |
| `transitionAllStyles` | All-property transitions | **No** |

> The Card has no text content and no interactive states, so the absence of `textContentStyles` and `transitionColorsStyles` is expected.

---

### Gaps

**Figma tokens not in token map:**

None found. All Figma tokens used by this component (`color/bg/default`, `color/accent/bg-gray-light`, `color/accent/bg-gray`, `color/border/default`) are present in the token map.

**Figma variants not in React:**

- **`padding: Spacing-3 | Spacing-4`** — Figma defines internal card padding as a first-class variant property (12px or 16px). React has no `padding` CVA axis. Consumers must supply padding themselves (e.g., `p-3` or `p-4` via `className`), making padding opt-in rather than enforced.

**React props not in Figma:**

- `children` — React uses the standard `children` prop for card content. Figma models this as a swappable `.Slot` placeholder with fixed placeholder dimensions.
- All native `HTMLDivElement` attributes (`onClick`, `aria-*`, `data-*`, etc.).

**theme() paths with no Figma token:**

- `boxShadow.soft-xs` — used for `.card-floating` shadow; token-map.md confirms this is code-only (no Figma foundation variable).
- `boxShadow.hard-sm` — used for `.card-raised` shadow; token-map.md confirms this is code-only (no Figma foundation variable).

**Visual spec mismatches:**

- **`.card-decorative` gradient uses hardcoded hex instead of `theme()`**: styles.js defines `backgroundImage: 'linear-gradient(90deg,#FFF 0%,#FAFAFA 100%)'`. This hardcodes two raw values instead of calling `theme('backgroundColor.accent.gray-light')` and `theme('backgroundColor.accent.gray')`. If either token changes in the design system, the card will not update.

- **`.card-decorative` gradient start color is wrong**: Figma specifies the gradient as `color/accent/bg-gray-light` (#fafafa, zinc-50) → `color/accent/bg-gray` (#f4f4f5, zinc-100). styles.js uses `#FFF` (pure white) → `#FAFAFA` (zinc-50). The start stop is `white` in code vs `zinc-50` in Figma — one ramp step off. The end stop is `zinc-50` in code vs `zinc-100` in Figma — also one ramp step off.

- **`border-radius` hardcoded as `1rem`**: Figma uses `rounded/2xl` (16px = 1rem). The values are identical but the code does not use `theme('borderRadius.2xl')`. This is a minor tokenisation gap — functionally equivalent but would drift if the `rounded/2xl` design token is ever updated.

- **No padding applied by the component**: Figma always renders the card with padding (12px or 16px depending on the `padding` variant). React's `Card` applies no padding, leaving it entirely to consumers. Cards rendered without padding will not match Figma.
