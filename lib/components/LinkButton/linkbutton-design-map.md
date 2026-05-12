# LinkButton Design Map

## figma-design-context

### Component info

| | |
|---|---|
| **Name** | Link Button |
| **Figma node URL** | https://www.figma.com/design/eKAqJtRHEFoa6FOPw3xzCw/Components?node-id=4-1867 |
| **Last scanned** | 2026-05-12 |
| **Documentation** | https://66fa495fae52482a39d36cea-tjqfsylutk.chromatic.com/?path=/docs/design-system-components-linkbutton--docs |
| **Category** | Actions (text-style button / inline link affordance) |

> Per the Figma description: "The Link Button acts as a button that links users to other parts of the application or external resources. It combines button styling with hyperlink functionality for cohesive navigation and action."
>
> **Two React components from one Figma:** the lib module exports both `LinkButton` (renders `<button>`) and `LinkAnchorButton` (renders `<a href>`) — they share the same CVA classes, styles, slots, and behavior. Figma only models one component; the React split is a semantic-element distinction (action vs. navigation) — see Gap #2.

---

### Variants

Sourced from the `LinkButtonProps` type signature in the `get_design_context` response (Figma codegen). Code Connect itself was unavailable (see Gap #1), but the codegen output was rich enough to enumerate the matrix exhaustively.

| Property | Values | Default |
|---|---|---|
| `variant` | `Neutral` \| `Brand` \| `Destructive` | `Neutral` |
| `state` | `Default` \| `Focused` \| `Hover` | `Default` |
| `iconOnly` | `true` \| `false` | `false` |
| `isDisabled` | `true` \| `false` | `false` |
| `isLoading` | `true` \| `false` | `false` |
| `leadingIcon` | `true` \| `false` _(slot toggle)_ | `false` |
| `trailingIcon` | `true` \| `false` _(slot toggle)_ | `false` |
| `cIcon` | `React.ReactNode \| null` _(icon-only slot)_ | `null` |
| `cLabel` | `string` _(label slot)_ | `"{label}"` |
| `cLeadingIcon` | `React.ReactNode \| null` _(slot)_ | `null` |
| `cTrailingIcon` | `React.ReactNode \| null` _(slot)_ | `null` |

> Case-insensitive — Figma `Brand` maps to React `brand`, etc.

#### Variant combinations enumerated in Figma codegen

| variant | iconOnly | state | isDisabled | isLoading | Present in Figma? |
|---|---|---|---|---|---|
| Neutral | both | Default | false | false | ✓ |
| Neutral | both | Hover / Focused | false | false | ✓ |
| Neutral | both | Default | true | false | ✓ |
| Neutral | both | Default | false | true | ✓ |
| Brand | both | Default / Hover / Focused | false | false | ✓ |
| Brand | * | * | true / loading | * | ✗ _(see Gap #7)_ |
| Destructive | both | Default / Hover / Focused | false | false | ✓ |
| Destructive | * | * | true / loading | * | ✗ _(see Gap #7)_ |

Only `Neutral` has explicit Disabled and Loading symbols in Figma. Brand and Destructive disabled/loading are React-only.

---

### Design tokens used

Sourced from `lib/design-system/token-map.md`. Cross-referenced with `get_variable_defs` for this node.

#### Per-variant text colors

| State | `Neutral` | `Brand` | `Destructive` |
|---|---|---|---|
| Default text | `color/text/subtle` → `textColor.subtle` (`#3f3f46`) | `color/text/brand` → `textColor.brand.DEFAULT` (`#4043B5`) | `color/text/negative` → `textColor.negative` (`#dc2626`) |
| Hover text | `color/text/subtler` → `textColor.subtler` (`#71717a`) | `color/interactive/text-brand-hover` → `textColor.interactive.brand-hover` (`#5E6ED3`) | `color/interactive/text-negative-hover` → `textColor.interactive.negative-hover` (`#ef4444`) |
| Disabled text | `color/interactive/text-disabled` → `textColor.interactive.disabled` (`#d4d4d8`) | _(same — applied via `.disabled` rule on `.link-base`)_ | _(same)_ |
| Decoration (Neutral) | `color/text/subtler` → `textColor.subtler` (`#71717a`) — set as `text-decoration-color` on neutral non-loading non-disabled | _(default text color)_ | _(default text color)_ |

#### Focus

| Figma token | Tailwind path | Used for |
|---|---|---|
| `color/outline/focus-ring` | `outlineColor.focus-ring` (`#60a5fa`) | `.link-base:not(.disabled):focus-visible` — `2px solid` outline |
| `border/2` | `2px` | Figma applies as `border-2` (consumes layout space); React uses `outline-2` (doesn't shift layout) — see Gap #9 |

#### Loading (Spinner)

| Figma token | Tailwind path | Used for |
|---|---|---|
| `spinner/base-onLight` | `colors.spinner.base-onLight` (`rgba(0,0,0,0.1)`) | Spinner track when `<Spinner variant="on-light" />` is mounted |
| `spinner/front-onLight` | `colors.spinner.front-onLight` (`rgba(0,0,0,0.4)`) | Spinner head |
| `opacity/0` | `0` | Figma fades children to opacity 0 during loading; React sets `color: transparent` on the label — see Gap #8 |

#### Composite typography + geometry

| Figma token | Tailwind utility | Used for |
|---|---|---|
| `content/text` | utility `text-content` (via `textContentStyles(theme)`) | Label — Inter / 14px / 500 / 20px lh |
| `text-decoration: underline` | _(code-only — no Figma decoration token)_ | Default look; removed on `:hover` |
| `spacing/2` | `gap-2` (`0.5rem`, `8px`) | `.link-base` gap between leading icon / label / trailing icon |
| `rounded/lg` | `0.5rem` (`8px`) | `.link-base` border-radius |
| `icon/size/base` | `1.25rem` (`20px`) | Icon size via `fontSize: theme('fontSize.xl')` on `& svg, & .mui-icon` |

---

### Visual specs

#### `.link-base` (all variants)

| Property | Value |
|---|---|
| position | `relative` (anchors the spinner-container) |
| display | `flex`, items center |
| cursor | `pointer` |
| gap | `0.5rem` (8px) |
| border-radius | `0.5rem` (8px) |
| typography | `textContentStyles(theme)` — Inter / 14px / 500 / 20px lh |
| text-decoration | `underline` (removed on hover) |
| transition | `transitionColorsStyles(theme)` (bg / border / text / shadow) |
| inner icon size | `1.25rem` × `1.25rem` (20px); font-size `1.25rem` (`fontSize.xl`); `overflow: hidden` |

#### `.link-base.loading`

| Property | Value |
|---|---|
| pointer-events | `none` |
| color | `transparent` _(hides label color but keeps layout — see Gap #8)_ |
| `.spinner-container` display | `flex` (otherwise `none`) |

#### `.link-base.disabled`

| Property | Value |
|---|---|
| pointer-events | `none` |
| cursor | `not-allowed` |
| color | `textColor.interactive.disabled` (`#d4d4d8`) |

#### `.link-base:not(.disabled):hover`

| Property | Value |
|---|---|
| text-decoration | `none` (underline removed) |
| color | per-variant hover token (see Design tokens) |

#### `.link-base:not(.disabled):focus-visible`

| Property | Value |
|---|---|
| outline | `2px solid outlineColor.focus-ring` (`#60a5fa`) |

#### `.spinner-container`

| Property | Value |
|---|---|
| position | `absolute`, left/top `0` |
| z-index | `2` |
| width / height | `100%` |
| display | `none` _(flex when `.loading` is set)_ |
| align-items / justify-content | center |
| margin | `auto` |
| border-radius | `0.75rem` (12px) _(does not match `.link-base`'s 8px — see Gap #10)_ |
| background | `inherit` _(transparent on `.link-base`, so the backdrop is invisible — intentional)_ |

---

### Interaction states

| State | Visual changes | theme() path |
|---|---|---|
| Default | Underlined label with per-variant color | per-variant `textColor.*` |
| Hover | Underline removed; label color shifts (Neutral → `subtler`; Brand → `interactive.brand-hover`; Destructive → `interactive.negative-hover`) | per-variant hover token |
| Focus-visible | `outline: 2px solid` (no underline change) | `outlineColor.focus-ring` |
| Active / Pressed | _(no explicit rule — relies on `:hover` style continuing)_ | — |
| Loading | `color: transparent`, `pointer-events: none`; spinner revealed | — |
| Disabled | `cursor: not-allowed`, `pointer-events: none`; color → `interactive.disabled`; hover effects suppressed via `:not(.disabled)` guards | `textColor.interactive.disabled` |

---

### Accessibility

| Aspect | Implementation |
|---|---|
| Role | Native — `<button>` for `LinkButton`, `<a>` for `LinkAnchorButton`. The role correctly distinguishes actions from navigation. |
| Keyboard | Both elements are natively focusable. `LinkAnchorButton` forces `tabIndex={-1}` when `isDisabled` to skip focus (since `<a>` has no native `disabled`). `LinkButton` relies on the native `disabled` attribute being passed via `...props`. |
| ARIA attributes | `aria-disabled={isDisabled}` is set on both components regardless of the native `disabled` attribute — covers screen readers when `disabled` is omitted. |
| Focus management | Focus styles on `:focus-visible` only — no flash on mouse click. Focus ring is `2px solid` blue (`outlineColor.focus-ring`). |
| Screen reader | Reads the label content. Underline state is decorative — no SR cue. Loading + Disabled are signalled via `aria-disabled`; no `aria-busy` is set for the Loading state — see Gap #6. |

---

### Slots

| Figma slot | Figma prop / toggle | React equivalent | Description |
|---|---|---|---|
| Label | `cLabel: string` | `children` (string) | Visible whenever `!iconOnly`. Hidden via `color: transparent` during loading. |
| Icon (icon-only) | `cIcon: React.ReactNode \| null` (visible when `iconOnly = true`) | First/only child | No `iconOnly` React prop — consumer simply omits the label child |
| Leading icon | `cLeadingIcon: React.ReactNode \| null` (visible when `leadingIcon = true`) | First child before label | No `leadingIcon` React prop — consumer just puts the icon first |
| Trailing icon | `cTrailingIcon: React.ReactNode \| null` (visible when `trailingIcon = true`) | Last child after label | No `trailingIcon` React prop |
| Spinner | _(internal — appears when `isLoading = true`)_ | `<Spinner variant="on-light" />` inside `.spinner-container` | Always mounted by JSX when `isLoading`; CSS only reveals it when `.loading` is on root |

---

### Animation & motion

| Transition | Property | Source |
|---|---|---|
| Color | text, background, border, shadow | `transitionColorsStyles(theme)` on `.link-base` |
| Text-decoration | underline → none on `:hover` | inherits the same color transition (not a separate animation) |

---

### Responsive behavior

None. Intrinsic-sized; no responsive Tailwind classes in `styles.js`.

---

## react-design-context

### Component metadata

| | |
|---|---|
| **File** | `lib/components/LinkButton/index.tsx` |
| **Styles** | `lib/components/LinkButton/styles.js` |
| **Import** | `import { LinkButton, LinkAnchorButton, linkButtonVariants } from '@/components/LinkButton'` |
| **Storybook story** | `src/components/LinkButton/LinkButton.stories.tsx` + `src/components/LinkAnchorButton/LinkAnchorButton.stories.tsx` |
| **Dependencies** | `Spinner` (from `lib/components/Spinner`); `class-variance-authority` |
| **Ref forwarded** | Yes — `LinkButton` → `HTMLButtonElement`, `LinkAnchorButton` → `HTMLAnchorElement`. Both via `React.forwardRef`. |

---

### Exported API

| Export | Element | Notes |
|---|---|---|
| `LinkButton` | `<button>` | Use when the action has no destination URL. |
| `LinkAnchorButton` | `<a>` | Use when there's an `href`. Forces `tabIndex={-1}` when disabled (no native `disabled` on `<a>`). |
| `linkButtonVariants` | CVA factory | Re-exported for consumers who want to mix the same classes onto another element. |

Both components have the same prop shape (`variant?`, `isLoading?`, `isDisabled?` + native HTML attrs for their respective element).

---

### Variant-to-class mapping (CVA)

| Prop | Value | Class | styles.js |
|---|---|---|---|
| `variant` | `neutral` (default) | `.link-neutral` | lines 54–62 |
| `variant` | `brand` | `.link-brand` | lines 64–69 |
| `variant` | `destructive` | `.link-destructive` | lines 71–76 |
| `isLoading` | `true` | `.loading` _(appended outside CVA — line 44)_ | lines 20–23, 49–51 |
| `isDisabled` | `true` | `.disabled` _(appended outside CVA — line 45)_ | lines 24–28 |

All variants extend `.link-base` (lines 2–52). Loading and disabled rules guard against each other via `:not(.disabled)` selectors so disabled wins when both are set.

---

### Prop mapping

| Figma variant prop | React prop | Type | Default | Notes |
|---|---|---|---|---|
| `variant` | `variant` | `'neutral' \| 'brand' \| 'destructive'` | `'neutral'` | Case-insensitive |
| `isDisabled` | `isDisabled` | `boolean` | `false` | Adds `.disabled`; sets `aria-disabled={true}`. Does **not** set native `disabled` — the consumer must pass `disabled` separately if they want HTML semantics |
| `isLoading` | `isLoading` | `boolean` | `false` | Adds `.loading`; mounts `<Spinner variant="on-light" />` |
| `iconOnly` | _(via children composition)_ | — | — | Omit the label child; pass only an icon. No discrete React prop (see Gap #4) |
| `leadingIcon` | _(via children composition)_ | — | — | Pass icon as first child before label |
| `trailingIcon` | _(via children composition)_ | — | — | Pass icon as last child after label |
| `state: Focused` | _(CSS `:focus-visible`)_ | — | — | No React prop — handled by CSS |
| `state: Hover` | _(CSS `:hover`)_ | — | — | No React prop — handled by CSS |
| `cIcon` / `cLabel` / `cLeadingIcon` / `cTrailingIcon` | _(children — positional)_ | — | — | All four Figma slot props collapse to `children` |

---

### Behavior-only props

Passed via `...props`:

| Prop | Type | Notes |
|---|---|---|
| `className` | `string` | Merged via `cn()` after CVA output |
| `disabled` (native) | `boolean` | `LinkButton` only — passed through to `<button>`. `LinkAnchorButton` ignores it (no native `disabled` on `<a>`) and relies on `tabIndex`/`aria-disabled`. |
| `href` | `string` | `LinkAnchorButton` only |
| `onClick` etc. | native handlers | Standard |
| `ref` | forwarded | See Component metadata |
| `tabIndex` | `number` | `LinkAnchorButton` overrides to `-1` when `isDisabled`, otherwise uses `props.tabIndex ?? 0` |

---

### Shared helpers used in styles.js

| Helper | Source | Used in |
|---|---|---|
| `theme(...)` | Tailwind plugin context | Token reads |
| `transitionColorsStyles(theme)` | Tailwind plugin util | `.link-base` — smooth color transitions |
| `textContentStyles(theme)` | Tailwind plugin util | `.link-base` — applies the `text-content` composite (Inter / 14px / 500 / 20px lh) |

---

### Storybook coverage

#### `LinkButton.stories.tsx` — 15 stories

| variant | Label | WithIcon | WithIconAndLabel | Disabled | Loading |
|---|---|---|---|---|---|
| Neutral | `NeutralLink` | `NeutralLinkWithIcon` | `NeutralLinkWithIconAndLabel` | `DisabledNeutralLink` | `LoadingNeutralLink` |
| Brand | `BrandLink` | `BrandLinkWithIcon` | `BrandLinkWithIconAndLabel` | `DisabledBrandLink` | `LoadingBrandLink` |
| Destructive | `DestructiveLink` | `DestructiveLinkWithIcon` | `DestructiveLinkWithIconAndLabel` | `DisabledDestructiveLink` | `LoadingDestructiveLink` |

#### `LinkAnchorButton.stories.tsx` — 15 stories

Same matrix as above, with every story carrying `href="https://example.com"` and the `<a>` rendered via `LinkAnchorButton`.

#### Coverage observations

- **30 stories total** across the two components — Storybook exercises every `variant × state` combination on both `<button>` and `<a>` elements.
- **Brand + Loading / Disabled** and **Destructive + Loading / Disabled** exist as stories but **not as Figma symbols** (Gap #7) — the React side is more exhaustive.
- No story exercises a "leading icon + trailing icon" composition, even though styles.js supports it.

---

### Gaps

Mismatches between the Figma node, the React implementation, and adjacent project conventions. Gap #1 is the standardized fallback marker required by the skill when Code Connect is unavailable.

| # | Gap | Figma | React |
|---|---|---|---|
| 1 | **Code Connect API unavailable** — `mcp__figma__get_context_for_code_connect` returned 403 / Developer-seat-required. The Variants section was derived from the React source + the `LinkButtonProps` type signature returned by `get_design_context` (rich codegen response) + `get_variable_defs` rather than the full Figma variant tree. Re-scan with a Developer seat to replace any rows marked `_(inferred)_`. | — | — |
| 2 | **One Figma component, two React components** | Single "Link Button" symbol set | React splits into `LinkButton` (`<button>`) and `LinkAnchorButton` (`<a>`). Figma doesn't surface the action-vs-navigation distinction. A consumer reading Figma must know to pick the right React element based on whether the link goes anywhere. |
| 3 | **`state` prop is Figma-only** | `state: Default \| Focused \| Hover` is a Figma variant | No React prop. Hover / focus-visible are pure CSS in `styles.js`. ✓ Correct React idiom; flagged because a Figma reader may expect a controlled state. |
| 4 | **`iconOnly` Figma prop has no React counterpart** | Discrete boolean toggle | Composed via children — omit the label, pass only an icon. The React side allows arbitrary child arrangements; Figma's `iconOnly` is a state guarantee that doesn't survive translation. |
| 5 | **`leadingIcon` / `trailingIcon` Figma toggles have no React props** | Boolean toggles that gate slot rendering | Both fold into `children` positional composition. Consumer is responsible for ordering. |
| 6 | **No `aria-busy` during loading** | n/a | The `Loading` state sets `pointer-events: none` and `color: transparent` but never sets `aria-busy="true"` on the element. Screen readers can't announce the in-flight state. |
| 7 | **Brand and Destructive don't have Disabled / Loading symbols in Figma** | Only Neutral has explicit Disabled and Loading variants | React supports `isDisabled` / `isLoading` for all three variants and Storybook exercises all 6 combos. Either Figma is missing 4 symbols, or those combinations are intentionally not designed (probably the former — usage is reasonable). |
| 8 | **Loading hides label via `color: transparent` instead of `opacity: 0`** | Figma fades children to `opacity/0` during loading | styles.js sets `color: transparent` on `.link-base.loading`. Visually equivalent, but it doesn't hide icon children (the icons inherit `color` via `color: inherit` — they go transparent too, ✓). Where they diverge: any descendant with an explicit non-inherited color (e.g. a background-colored chip child) won't fade. Minor. |
| 9 | **Focus indicator: Figma uses `border`, React uses `outline`** | Figma applies `border-[length:var(--border/2,2px)] border-[color/outline/focus-ring]` for focused state (consumes layout space — shifts content by 2px) | styles.js applies `outline: 2px solid` (doesn't consume space). React's choice is correct; flag for Figma to align so designs reflect the real visual jitter-free focus. |
| 10 | **`.spinner-container` border-radius mismatches `.link-base`** | n/a | `.link-base` is `0.5rem` (8px). `.spinner-container` is `0.75rem` (12px). The container has `backgroundColor: inherit` which resolves to transparent, so the radius is invisible in practice. Dead style — unify to 8px or remove. |
| 11 | **`isDisabled` doesn't set native `disabled`** | n/a | `LinkButton`'s `isDisabled` only adds `.disabled` class + `aria-disabled={true}`. The native `disabled` HTML attribute is **not** set — consumers must pass `disabled` themselves via `...props` if they want HTML semantics (form-submit blocking, keyboard suppression). The `aria-disabled` covers SR users; the missing native attribute is a real footgun for forms. |
| 12 | **Spinner always uses `variant="on-light"`** | n/a | All three variants (Neutral, Brand, Destructive) render `<Spinner variant="on-light" />`. Visually correct because the LinkButton background is always transparent — but if a consumer wraps it on a dark surface, the spinner becomes invisible. Compare to `Button`, which selects spinner variant based on the button's `variant`. |

---

> **Generated by** `component-context-generator` skill (patched 2026-05-12 with Code Connect 403 fallback) against Figma node `4-1867` of file `eKAqJtRHEFoa6FOPw3xzCw`. Cross-referenced with `lib/design-system/token-map.md`, `src/components/LinkButton/LinkButton.stories.tsx`, and `src/components/LinkAnchorButton/LinkAnchorButton.stories.tsx`.
