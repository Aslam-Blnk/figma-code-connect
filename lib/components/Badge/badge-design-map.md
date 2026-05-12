# Badge Design Map

## figma-design-context

### Component info

| | |
|---|---|
| **Name** | Badge |
| **Figma node URL** | https://www.figma.com/design/eKAqJtRHEFoa6FOPw3xzCw/Components?node-id=523-9561 |
| **Last scanned** | 2026-05-12 |
| **Documentation** | https://66fa495fae52482a39d36cea-slxzmtnbrx.chromatic.com/?path=/docs/design-system-components-badge--docs |
| **Category** | Data display (status / count label) |

> Per the Figma description: "The Badge component is a versatile UI element used to highlight specific labels, statuses, or counts on your application — for notifications, statuses, tags, or any other category label."

---

### Variants

Sourced from the `BadgeProps` type signature in the `get_design_context` response (Figma codegen). Code Connect itself was unavailable (see Gap #1), but the codegen output was rich enough to enumerate the matrix exhaustively.

| Property | Values | Default |
|---|---|---|
| `variant` | `Outline` \| `Flat` | `Outline` |
| `badgeColor` | `Neutral` \| `Brand` \| `Positive` \| `Notice` \| `Negative` | `Neutral` |
| `content` | `Text` \| `Dot + Text` \| `Icon + Text` | `Text` |
| `isCount?` | `true` \| `false` | `false` |
| `cIcon` | `React.ReactNode \| null` _(slot)_ | `null` |
| `cLabel` | `string` _(slot)_ | `"{label}"` |

> Case-insensitive — Figma `Outline` maps to React `outline`, etc.

#### Symbol-level completeness in Figma _(observed from conditional render paths)_

| Combination subset | Present in Figma? |
|---|---|
| Flat × all 5 colors × `Text` × `isCount=true` | ✓ all 5 |
| Flat × all 5 colors × `Text` × `isCount=false` | ✓ all 5 |
| Flat × all 5 colors × `Dot + Text` × `isCount=false` | ✓ all 5 |
| Flat × all 5 colors × `Icon + Text` × `isCount=false` | ✓ all 5 |
| Outline × `Text` × `Neutral` × `isCount=false` | ✓ |
| Outline × `Text` × {Brand/Positive/Notice/Negative} × `isCount=false` | ✗ _(see Gap #4)_ |
| Outline × `Dot + Text` × {Brand/Negative/Neutral/Positive} × `isCount=false` | ✓ |
| Outline × `Dot + Text` × `Notice` × `isCount=false` | ✗ _(see Gap #4)_ |
| Outline × `Icon + Text` × all 5 colors × `isCount=false` | ✓ |
| Outline × `isCount=true` × any color | ✗ _(see Gap #4)_ |

---

### Design tokens used

Sourced from `lib/design-system/token-map.md`. Cross-referenced with the variables Figma reports for this node via `get_variable_defs`.

#### Outline variant

| Figma token | Tailwind path | Used for |
|---|---|---|
| `color/bg/default` | `backgroundColor.default` (`#FFFFFF`) | `.badge-outline` background |
| `color/border/bold` | `borderColor.bold` (`#d4d4d8`) | `.badge-outline` 1px border |
| `color/text/subtle` | `textColor.subtle` (`#3f3f46`) | `.badge-outline` label color (all colors) |
| `border/1` | `border` (`1px`) | `.badge-outline` border width |

#### Flat variant — backgrounds + label colors per `badgeColor`

| `badgeColor` | Figma background token | Tailwind path | Figma label token | Tailwind path |
|---|---|---|---|---|
| `Neutral` | `color/accent/bg-gray` | `backgroundColor.accent.gray` (`#f4f4f5`) | `color/text/subtle` | `textColor.subtle` (`#3f3f46`) |
| `Brand` | `color/bg/brand` | `backgroundColor.brand.DEFAULT` (`#E2E6F7`) | `color/text/brand` | `textColor.brand.DEFAULT` (`#4043B5`) |
| `Positive` | `color/bg/positive` | `backgroundColor.positive` (`#dcfce7`) | `color/text/positive` | `textColor.positive` (`#16a34a`) |
| `Notice` | `color/bg/notice` | `backgroundColor.notice` (`#ffedd5`) | `color/text/notice` | `textColor.notice` (`#ea580c`) |
| `Negative` | `color/bg/negative` | `backgroundColor.negative` (`#fee2e2`) | `color/text/negative` | `textColor.negative` (`#dc2626`) |

#### Dot + Icon color per `badgeColor`

| `badgeColor` | Figma token | Tailwind path | Used for |
|---|---|---|---|
| `Neutral` | `icon/color/subtle` | `colors.icon.subtle` (`#71717a`) | `.badge-neutral .badge-dot` bg + svg color |
| `Brand` | `icon/color/brand` | `colors.icon.brand` (`#4A53C6`) | dot bg + svg color |
| `Positive` | `icon/color/positive` | `colors.icon.positive` (`#16a34a`) | dot bg + svg color |
| `Notice` | `icon/color/notice` | `colors.icon.notice` (`#ea580c`) | dot bg + svg color |
| `Negative` | `icon/color/negative` | `colors.icon.negative` (`#dc2626`) | dot bg + svg color |

#### Composite typography

| Figma token | Tailwind utility | Used for |
|---|---|---|
| `content/text` | `text-content` (via `textContentStyles(theme)`) | Label text — Inter / 14px / 500 / 20px lh |
| `decorative/number/xs` | `text-number-xs` (via `textNumberXSStyles(theme)`) | `.badge-count` label — JetBrains Mono / 12px / 500 / 16px lh |

#### Geometry tokens

| Figma token | Tailwind utility | Used for |
|---|---|---|
| `spacing/2` | `0.5rem` (`8px`) | `.badge-base` horizontal padding |
| `spacing/1` | `0.25rem` (`4px`) | `.badge-base` vertical padding; `.badge-count` horizontal padding |
| `spacing/px` | `1px` | `.badge-count` vertical padding |
| `spacing/1-5` | `0.375rem` (`6px`) | `.badge-base` gap between icon/dot and label |
| `rounded/lg` | `0.5rem` (`8px`) | `.badge-base` border-radius |
| `rounded/md` | `0.375rem` (`6px`) | `.badge-count` border-radius _(override)_ |
| `rounded/sm` | `0.125rem` (`2px`) | `.badge-dot` border-radius |
| `icon/size/sm` | `1rem` (`16px`) | icon size in `Icon + Text` (matches `fontSize.base` applied to `svg, .mui-icon`) |

---

### Visual specs

#### `.badge-base` (all variants)

| Property | Value |
|---|---|
| display | `flex` row, items center, justify center |
| flex-wrap | `nowrap` |
| gap | `0.375rem` (6px) |
| padding | `0.25rem 0.5rem` (4px 8px) |
| border-radius | `0.5rem` (8px) |
| text-wrap | `nowrap` |
| mix-blend-mode | `multiply` |
| outline (default) | `2px solid transparent`, offset `2px` _(layout reservation only — no `:focus-visible` selector)_ |
| typography | `textContentStyles(theme)` — equivalent of `text-content` utility |
| icon font-size | `fontSize.base` (`16px`) |

#### `.badge-outline`

| Property | Value |
|---|---|
| background | `backgroundColor.default` (`#FFFFFF`) |
| border | `1px solid borderColor.bold` (`#d4d4d8`) |
| color | `textColor.subtle` (`#3f3f46`) _(applies regardless of `badgeColor`)_ |

#### `.badge-flat`

Background + text color resolve via nested `.badge-{color}` rules — see the per-color table in Design tokens.

#### `.badge-count` (overrides applied on top of `.badge-base`)

| Property | Value |
|---|---|
| border-radius | `0.375rem` (6px) — was `8px` |
| padding | `1px 0.25rem` (1px 4px) — was `4px 8px` |
| typography | `textNumberXSStyles(theme)` — JetBrains Mono / 12px / 500 / 16px lh |

#### `.badge-dot`

| Property | Value |
|---|---|
| width / height | `0.375rem` × `0.375rem` (6px × 6px) |
| min-width / min-height | same |
| border-radius | `0.125rem` (2px) |
| background | resolves via `.badge-{color} .badge-dot` (see per-color table) |

---

### Interaction states

Badge is a passive label — no hover, focus, active, or disabled states are defined.

| State | Visual changes |
|---|---|
| Default | Baseline appearance |
| Hover / Active | _(none — no selectors)_ |
| Focus-visible | _(no focus styling — `outline: 2px solid transparent` reserves space but never reveals — see Gap #6)_ |
| Disabled | _(not a concept for Badge)_ |

---

### Accessibility

| Aspect | Implementation |
|---|---|
| Role | `<div>` (semantic-less). Consumers should add `role="status"` or `aria-label` if the badge carries meaning beyond the surrounding context (e.g. an alert count). |
| Keyboard | Not focusable. |
| ARIA attributes | None applied automatically. Count badges relying on numeric content (e.g. "99+") may need `aria-label` for screen readers (e.g. `aria-label="99 unread alerts"`). |
| Screen reader | Reads the label content directly. Dot indicators are decorative — no SR text. Icon indicators inherit from the consumer-passed icon element. |

---

### Slots

In Figma the badge has two named slots and a `content` discriminator. In React, slots are composed via children (see Gap #2).

| Figma slot | Figma prop | React equivalent | Description |
|---|---|---|---|
| Label | `cLabel: string` | `children` (string) | The badge text |
| Icon | `cIcon: React.ReactNode \| null` | first child + label as siblings | Visible when `content="Icon + Text"`. Default icon `size=16px` |
| Dot | _(rendered when `content="Dot + Text"`)_ | `<BadgeDot />` exported separately | 6×6px square with `rounded-sm`, colored by parent's `badgeColor` |

---

### Animation & motion

None. Badge has no transitions or animations.

---

### Responsive behavior

None. Badge is intrinsic-sized and doesn't react to breakpoints.

---

## react-design-context

### Component metadata

| | |
|---|---|
| **File** | `lib/components/Badge/index.tsx` |
| **Styles** | `lib/components/Badge/styles.js` |
| **Import** | `import { Badge, BadgeDot } from '@/components/Badge'` |
| **Storybook story** | `src/components/Badge/Badge.stories.tsx` |
| **Dependencies** | `class-variance-authority` |
| **Ref forwarded** | No — `Badge` and `BadgeDot` are plain function components. Native `<div>` ref cannot be passed through. _(see Gap #7)_ |

---

### Exported API

| Export | Kind | Notes |
|---|---|---|
| `Badge` | Component | Props: `variant?`, `badgeColor?`, `isCount?`, plus all `React.HTMLAttributes<HTMLDivElement>` (so `className`, `style`, `onClick`, `aria-*`, etc. pass through). |
| `BadgeDot` | Component | Zero props. Renders `<div class="badge-dot" />`. Color is resolved from the parent `Badge`'s `badgeColor` via descendant selectors — must be rendered inside a `<Badge>` to inherit color. |

---

### Variant-to-class mapping (CVA)

| Prop | Value | Class | styles.js |
|---|---|---|---|
| `variant` | `outline` (default) | `.badge-outline` | lines 27–31 |
| `variant` | `flat` | `.badge-flat` | lines 53–75 |
| `badgeColor` | `neutral` (default) | `.badge-neutral` | scoped under `.badge-flat` (lines 55–58) + dot/svg selectors |
| `badgeColor` | `brand` | `.badge-brand` | scoped under `.badge-flat` (lines 59–62) + dot/svg selectors |
| `badgeColor` | `positive` | `.badge-positive` | scoped under `.badge-flat` (lines 63–66) + dot/svg selectors |
| `badgeColor` | `notice` | `.badge-notice` | scoped under `.badge-flat` (lines 67–70) + dot/svg selectors |
| `badgeColor` | `negative` | `.badge-negative` | scoped under `.badge-flat` (lines 71–74) + dot/svg selectors |
| `isCount` | `true` | `.badge-count` _(appended outside CVA — line 48)_ | lines 32–36 |

All variants extend `.badge-base` (lines 2–19). Outline `.badge-outline` always paints `textColor.subtle`; the per-color text rules in lines 55–74 only fire when `.badge-flat` is also present.

---

### Prop mapping

| Figma variant prop | React prop | Type | Default | Notes |
|---|---|---|---|---|
| `variant` | `variant` | `'outline' \| 'flat'` | `'outline'` | Case-insensitive (Outline → outline) |
| `badgeColor` | `badgeColor` | `'neutral' \| 'brand' \| 'positive' \| 'notice' \| 'negative'` | `'neutral'` | Same case-insensitive mapping |
| `isCount?` | `isCount` | `boolean` | `false` | Adds `.badge-count` class; overrides border-radius + padding + typography |
| `content: "Text"` | _(children = label string)_ | — | — | Just pass a string as child |
| `content: "Dot + Text"` | _(children = `<><BadgeDot />Label</>`)_ | — | — | Manual composition |
| `content: "Icon + Text"` | _(children = `<><span class="mui-icon material-symbols-rounded">…</span>Label</>`)_ | — | — | Manual composition (see Gap #2) |
| `cLabel` | _(children string)_ | — | — | No discrete prop |
| `cIcon` | _(children — first child)_ | — | — | No discrete prop |

---

### Behavior-only props

Passed through `...props` to the underlying `<div>`:

| Prop | Type | Notes |
|---|---|---|
| `className` | `string` | Merged via `cn()` after CVA output and `.badge-count` |
| `style` | `React.CSSProperties` | Standard |
| `onClick` etc. | native DOM handlers | Standard. Note: Badge is not focusable, so click without a parent focusable target is mouse-only. |
| `aria-*` | native | Consumers can attach `aria-label` / `role="status"` here |

---

### Shared helpers used in styles.js

| Helper | Source | Used in |
|---|---|---|
| `theme(...)` | Tailwind plugin context | Token reads |
| `textContentStyles(theme)` | Tailwind plugin util | `.badge-base` — applies the `text-content` composite (Inter / 14px / 500 / 20px lh) |
| `textNumberXSStyles(theme)` | Tailwind plugin util | `.badge-count` — applies the `text-number-xs` composite (JetBrains Mono / 12px / 500 / 16px lh) |

---

### Storybook coverage

`src/components/Badge/Badge.stories.tsx` exports **35 stories**, organized in color groups. Coverage matrix (✓ = a dedicated story exists):

| | Outline + Text | Outline + Dot | Outline + Icon | Flat + Text | Flat + Dot | Flat + Icon | Flat + Count |
|---|---|---|---|---|---|---|---|
| Neutral | ✓ `OutlineBadge` | ✓ | ✓ | ✓ `FlatBadge` | ✓ | ✓ | ✓ `FlatCountBadge` |
| Brand | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Positive | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Notice | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Negative | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

#### Coverage observations

- **No stories for `Outline + Text + (non-Neutral)`** — matches Figma's symbol matrix (those combos aren't designed; see Gap #4). Storybook and Figma agree this is intentional.
- **No stories for `Outline + Count`** — Count is shown only in Flat in both Figma and Storybook. Consistent.
- **No stories for `Outline + Dot + Notice`** — Figma is missing this combo too (Gap #4). Storybook fills it, but Figma doesn't.

The stories also exercise the `<BadgeDot />` and Material Symbols icon composition patterns. Count stories use `"0123456789"` as a width-stress label.

---

### Gaps

Mismatches between the Figma node, the React implementation, and adjacent project conventions. Gap #1 is the standardized fallback marker required by the skill when Code Connect is unavailable.

| # | Gap | Figma | React |
|---|---|---|---|
| 1 | **Code Connect API unavailable** — `mcp__figma__get_context_for_code_connect` returned 403 / Developer-seat-required. The Variants section was derived from the React source + the `BadgeProps` type signature returned by `get_design_context` (rich codegen response, not sparse metadata) + `get_variable_defs` rather than the full Figma variant tree. Re-scan with a Developer seat to replace any rows marked `_(inferred)_`. | — | — |
| 2 | **`content` is a Figma prop but children-composition in React** | `content: "Text" \| "Dot + Text" \| "Icon + Text"` as a discrete enum | No `content` prop. Consumers compose: `<Badge><BadgeDot />Label</Badge>` or `<Badge><span className="mui-icon">…</span>Label</Badge>`. More flexible (any child layout possible) but loses the discrete-state guarantee Figma offers — a consumer can render `<Badge><BadgeDot /><span className="mui-icon">…</span>Label</Badge>` with both indicators, which Figma never sanctions. |
| 3 | **`BadgeDot` color coupling is brittle** | n/a | `<BadgeDot />` styling lives in `.badge-{color} .badge-dot` descendant selectors. Rendering `<BadgeDot />` outside a `<Badge>` produces a colorless dot. The export pattern doesn't signal this constraint — there is no runtime check or TypeScript type that requires `BadgeDot` to be a child of `Badge`. Consider scoping the export under `Badge.Dot` or accepting a `badgeColor` prop. |
| 4 | **Figma symbol matrix is partial** | Figma is missing: (a) Outline + Text for all non-Neutral colors; (b) Outline + Dot + Text + Notice; (c) any Outline + Count combo. | The React API allows all of these combinations to render — there's no runtime guard. Either Figma should add the missing combos, or React should narrow the props (probably the former). |
| 5 | **`cLabel` / `cIcon` Figma slot props have no React counterpart** | Figma exposes `cLabel: string` and `cIcon: React.ReactNode \| null` as discrete slot inputs | Both are folded into `children`. Migrating from Figma's named-slot mental model to React's positional-children model is a documentation gap — a consumer reading the Figma component spec won't immediately know the React shape. |
| 6 | **`outline: 2px solid transparent` is dead weight** | n/a | `.badge-base` reserves 2px of outline for `:focus-visible` but no `:focus-visible` rule ever fills it. Badge is not focusable (no `tabIndex`), so the outline never reveals. Either remove the reservation or define a focus style for cases where the Badge is wrapped in a focusable parent. |
| 7 | **Ref not forwarded** | n/a | Neither `Badge` nor `BadgeDot` use `React.forwardRef`. Consumers can't grab the underlying `<div>` for measurement, portaling, or focus management. Other primitives in this design system (`Button`, `Input`, every Sidebar / Table subcomponent) do forward refs — Badge is an outlier. |
| 8 | **`mixBlendMode: multiply` on root** | Figma applies this on the root | `.badge-base` also applies it | ✓ Consistent — but worth noting because rendering a badge over certain backgrounds (e.g. a tinted hover row) will compose colors unpredictably. Not a divergence, just a constraint the docs should highlight. |
| 9 | **Icon size: `1rem` (16px) via `fontSize.base`** | Figma uses `icon/size/sm` (16px) | styles.js sets `fontSize: theme('fontSize.base')` on `& svg, & .mui-icon` (line 17) which resolves to `1rem` (16px). | ✓ Match. Worth surfacing because the path goes through `fontSize` rather than a dedicated icon-size token, which is unusual within this design system. |
| 10 | **`color/bg/transparent` referenced by Figma but no Zemetric token** | `get_variable_defs` did not return `color/bg/transparent` for this node (it's not used here) — listed for consistency with other maps | — | _(no action needed for Badge specifically)_ |

---

> **Generated by** `component-context-generator` skill (patched 2026-05-12 with Code Connect 403 fallback) against Figma node `523-9561` of file `eKAqJtRHEFoa6FOPw3xzCw`. Cross-referenced with `lib/design-system/token-map.md` and `src/components/Badge/Badge.stories.tsx`.
