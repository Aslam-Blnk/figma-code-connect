# Button Design Map

## figma-design-context

### Component info

| | |
|---|---|
| **Name** | Button |
| **Figma node URL** | https://www.figma.com/design/eKAqJtRHEFoa6FOPw3xzCw/Components?node-id=380-83853 |
| **Last scanned** | 2026-05-12 |
| **Documentation** | https://66fa495fae52482a39d36cea-tjqfsylutk.chromatic.com/?path=/docs/design-system-components-button--docs |
| **Category** | Actions (primary interactive control) |

> The reference template for the `component-context-generator` skill. Variant tree, slots, and gaps have been audited multiple times; this refresh normalizes formatting to match the skill's current output template.

---

### Variants

Sourced from the Figma component property tree (originally Code Connect; verified against the React source on refresh). Code Connect was unavailable on this run (see Gap #1), but the variant set is unchanged from prior scans.

| Property | Values | Default |
|---|---|---|
| `variant` | `Brand` \| `Neutral` \| `Ghost` \| `Destructive` | `Brand` |
| `iconOnly` | `true` \| `false` | `false` |
| `isLoading` | `true` \| `false` | `false` |
| `isDisabled` | `true` \| `false` | `false` |
| `state` | `Default` \| `Hover` \| `Focus` | `Default` |
| `leadingIcon` | `true` \| `false` | `false` |
| `trailingIcon` | `true` \| `false` | `false` |

> `state` is a Figma-only presentation prop. React handles these via CSS pseudo-classes (`:hover`, `:focus-visible`, `:active`). See Gap #3.

---

### Design tokens used

Sourced from `lib/design-system/token-map.md`. Cross-referenced with `get_variable_defs` for this node.

| Figma token | Tailwind path | Used for |
|---|---|---|
| `color/bg/brand-intense` | `backgroundColor.brand-intense` (`#4A53C6`) | `.button-brand` background |
| _(no Figma token)_ ⚠️ | `borderColor.brand-bold` | `.button-brand` border |
| `color/text/onIntense` | `textColor.onIntense` (`#FFFFFF`) | `.button-brand` / `.button-destructive` label |
| `icon/color/onIntense` | `textColor.icon.onIntense` † | `.button-brand` / `.button-destructive` icon color |
| `icon/color/onIntense-disabled` | `textColor.icon.onIntense-disabled` † | disabled icon on intense variants |
| `color/interactive/bg-brand-disabled` | `backgroundColor.interactive.brand-disabled` | `.button-brand:disabled` background |
| _(no Figma token)_ ⚠️ | `textColor.interactive.onIntense-disabled` | disabled label on intense variants |
| `color/bg/negative-intense` | `backgroundColor.negative-intense` | `.button-destructive` background |
| _(no Figma token)_ ⚠️ | `borderColor.negative-bold` | `.button-destructive` border |
| `color/interactive/bg-negative-disabled` | `backgroundColor.interactive.negative-disabled` | `.button-destructive:disabled` background |
| `color/bg/default` | `backgroundColor.default` (`#FFFFFF`) | `.button-neutral` background |
| `color/border/bold` | `borderColor.bold` (`#d4d4d8`) | `.button-neutral` border |
| `color/text/subtle` | `textColor.subtle` (`#3f3f46`) | `.button-neutral` / `.button-ghost` label |
| `icon/color/subtle` | `textColor.icon.subtle` † | `.button-neutral` / `.button-ghost` icon |
| `icon/color/disabled` | `textColor.icon.disabled` † | disabled icon on light variants |
| `color/interactive/bg-hover` | `backgroundColor.interactive.hover` (`#f4f4f5`) | `.button-neutral:hover` / `.button-ghost:hover` background |
| `color/interactive/border-disabled` | `borderColor.interactive.disabled` | `.button-neutral:disabled` border |
| `color/interactive/text-disabled` | `textColor.interactive.disabled` | `.button-neutral:disabled` / `.button-ghost:disabled` label |
| `color/outline/focus-ring` | `outlineColor.focus-ring` (`#60a5fa`) | `:focus-visible` outline |
| _(code-only)_ | `boxShadow.soft-xs` | `.button-base` drop shadow |
| _(code-only)_ | `boxShadow.reflection` | `.button-brand` / `.button-destructive` inset highlight |
| _(code-only)_ | `colors.blurEffect.bg-brand` (`#56A9DA`) | `.button-brand::before` circular glow |
| _(code-only)_ | `colors.blurEffect.bg-error` (`#f97316`) | `.button-destructive::before` circular glow |
| **Composite** `content/text` | utility `text-content` (via `textContentStyles(theme)`) | Label — Inter / 14px / 500 / 20px lh |

> † `textColor.icon.*` — Token map lists these under `colors.icon.*`, but `styles.js` accesses them via `theme('textColor.icon.*')`. The Tailwind config exposes icon colors under both namespaces.

---

### Visual specs

#### Base (all variants — `.button-base`)

| Property | Value |
|---|---|
| min-height | `2.25rem` (36px) |
| border-radius | `0.75rem` (rounded-xl, 12px) |
| padding (standard) | `0.25rem 1rem` (4px 16px) |
| padding (`.icon-only`) | `0.5rem` (8px) all sides |
| gap | `0.5rem` (8px) |
| icon font-size | `1.25rem` (20px) |
| typography | Inter / 14px / 500 / 20px lh (via `textContentStyles`) |
| box-shadow | `boxShadow.soft-xs` |
| outline (default) | `2px solid transparent`, offset `2px` |
| overflow | `hidden` (clips the `::before` glow) |
| display | `inline-flex`, items center |

#### Brand

| Property | Value |
|---|---|
| background | `backgroundColor.brand-intense` (`#4A53C6`) |
| border | `1px solid borderColor.brand-bold` (`#4A53C6`) |
| text | `textColor.onIntense` (white) |
| shadow | `boxShadow.reflection` inset + `boxShadow.soft-xs` |
| `::before` glow | `colors.blurEffect.bg-brand` (`#56A9DA`), 152×152px, blur 36px, `mix-blend-lighten` |

#### Neutral

| Property | Value |
|---|---|
| background | `backgroundColor.default` (white) |
| border | `1px solid borderColor.bold` (`#d4d4d8`) |
| text | `textColor.subtle` (`#3f3f46`) |
| shadow | `boxShadow.soft-xs` |

#### Ghost

| Property | Value |
|---|---|
| background | transparent |
| border | none |
| shadow | none |
| text | `textColor.subtle` (`#3f3f46`) |

#### Destructive

| Property | Value |
|---|---|
| background | `backgroundColor.negative-intense` (`#dc2626`) |
| border | `1px solid borderColor.negative-bold` (`#dc2626`) |
| text | `textColor.onIntense` (white) |
| shadow | `boxShadow.reflection` inset + `boxShadow.soft-xs` |
| `::before` glow | `colors.blurEffect.bg-error` (`#f97316`), 152×152px, blur 36px, `mix-blend-lighten` |

---

### Interaction states

#### Brand

| State | What changes | token() path |
|---|---|---|
| Default | Baseline: brand-intense bg, reflection shadow, glow visible | — |
| Hover | `::before` opacity → 0 (glow fades); inset white highlight remains | — |
| Focus | `outline: 2px solid`, offset 0 | `outlineColor.focus-ring` |
| Active | `boxShadow: none` | — |
| Loading | `cursor: not-allowed`, `pointer-events: none`; children `color: transparent`, icons `opacity: 0`; `::before` opacity 0; spinner revealed | — |
| Disabled | bg → brand-disabled, border removed, shadow removed, text → onIntense-disabled, glow removed | `backgroundColor.interactive.brand-disabled`, `textColor.interactive.onIntense-disabled` |

#### Neutral

| State | What changes | token() path |
|---|---|---|
| Default | white bg, bold border, subtle text | — |
| Hover | bg → interactive.hover | `backgroundColor.interactive.hover` |
| Focus | outline | `outlineColor.focus-ring` |
| Active | `boxShadow: none` | — |
| Loading | children hidden, spinner visible (on-light) | — |
| Disabled | border → interactive.disabled, text → interactive.disabled | `borderColor.interactive.disabled`, `textColor.interactive.disabled` |

#### Ghost

| State | What changes | token() path |
|---|---|---|
| Default | transparent bg, no border | — |
| Hover | bg → interactive.hover | `backgroundColor.interactive.hover` |
| Focus | bg → interactive.hover + outline | `backgroundColor.interactive.hover`, `outlineColor.focus-ring` |
| Active | `boxShadow: none` | — |
| Loading | children hidden, spinner visible (on-light) | — |
| Disabled | text → interactive.disabled | `textColor.interactive.disabled` |

#### Destructive

| State | What changes | token() path |
|---|---|---|
| Default | negative-intense bg, reflection, glow visible | — |
| Hover | `::before` opacity → 0 (glow fades) | — |
| Focus | outline | `outlineColor.focus-ring` |
| Active | `boxShadow: none` | — |
| Loading | children hidden, spinner visible (on-intense) | — |
| Disabled | bg → negative-disabled, border removed, shadow removed, text → onIntense-disabled | `backgroundColor.interactive.negative-disabled`, `textColor.interactive.onIntense-disabled` |

---

### Accessibility

| Aspect | Implementation |
|---|---|
| Role | Native `<button>` element with default type — see Gap #10 about implicit `type="submit"` |
| Keyboard | Native button focusability. Space/Enter activates. |
| ARIA attributes | None applied automatically. `disabled` (native) suppresses interaction. No `aria-busy` is set during loading — screen readers can't announce the in-flight state. |
| Focus management | `:focus-visible` only — no flash on mouse click. Focus outline `2px solid` blue. |
| Screen reader | Reads label content. Loading and Disabled are signalled by visual state + native `disabled`; no SR-only text for "Loading…". |

---

### Slots

| Slot | Figma prop | Description |
|---|---|---|
| Label | `cLabel` (string) | Button text. Visible in all non-icon-only states. Hidden (`color: transparent`) during loading. |
| Icon (icon-only) | `cIcon` | Single centered icon. Used when `iconOnly = true`. Size: 20px. |
| Leading icon | `cLeadingIcon` | Optional icon left of label. Visible when `leadingIcon = true`. Size: 20px. Opacity 0 during loading (layout preserved). |
| Trailing icon | `cTrailingIcon` | Optional icon right of label. Visible when `trailingIcon = true`. Size: 20px. Opacity 0 during loading. |
| Spinner | _(internal)_ | Centered absolutely over button content. Hidden by default; shown via `.loading .spinner-container { display: flex }`. Variant map: Brand/Destructive → `on-intense`; Neutral/Ghost → `on-light`. |

---

### Animation & motion

| Transition | Property | Source |
|---|---|---|
| Color | bg, border, text, shadow | `transitionColorsStyles(theme)` on `.button-base` |
| All (glow) | `::before` opacity / position | `transitionAllStyles(theme)` inside `circularBlur` helper |

---

### Responsive behavior

None. Button is intrinsic-sized; consumers can set `w-full` (note: also pass `justify-center` — see Gap #11).

---

## react-design-context

### Component metadata

| | |
|---|---|
| **File** | `lib/components/Button/index.tsx` |
| **Styles** | `lib/components/Button/styles.js` |
| **Import** | `import { Button, buttonVariants } from '@/components/Button'` |
| **Storybook story** | `src/components/Button/Button.stories.tsx` |
| **Dependencies** | `Spinner` (from `lib/components/Spinner`); `class-variance-authority` |
| **Ref forwarded** | Yes — `React.forwardRef<HTMLButtonElement>` |

---

### Exported API

| Export | Element | Notes |
|---|---|---|
| `Button` | `<button>` | Props: `variant` (required), `iconOnly?`, `isLoading?` + all `<button>` HTML attrs |
| `buttonVariants` | CVA factory | Re-exported for consumers who want to mix the same classes onto another element |

---

### Variant-to-class mapping (CVA)

| `variant` prop | CSS class | styles.js lines |
|---|---|---|
| `brand` | `.button-brand` | 92–118 |
| `neutral` | `.button-neutral` | 120–141 |
| `ghost` | `.button-ghost` | 143–159 |
| `destructive` | `.button-destructive` | 161–187 |

All variants extend `.button-base` (lines 25–90). `.icon-only` and `.loading` are appended outside CVA.

---

### Prop mapping

| Figma variant prop | React prop | Type | Default | Notes |
|---|---|---|---|---|
| `variant` | `variant` | `'brand' \| 'neutral' \| 'ghost' \| 'destructive'` | required | Case-insensitive (Brand → brand) |
| `iconOnly` | `iconOnly` | `boolean` | `false` | Adds `.icon-only` class; switches padding from `0.25rem 1rem` to `0.5rem` |
| `isLoading` | `isLoading` | `boolean` | `false` | Adds `.loading` class; hides children, reveals spinner |
| `isDisabled` | `disabled` (HTML attr) | `boolean` | `false` | Passed via `...props`. CSS `:disabled` selector applies disabled styles |
| `state: Hover` | _(CSS `:hover`)_ | — | — | No React prop; handled by CSS |
| `state: Focus` | _(CSS `:focus-visible`)_ | — | — | No React prop; handled by CSS |
| `leadingIcon` | _(children)_ | — | — | Pass icon as first child before label text |
| `trailingIcon` | _(children)_ | — | — | Pass icon as last child after label text |

---

### Spinner variant mapping

| `variant` prop | `Spinner` variant |
|---|---|
| `brand` | `on-intense` |
| `neutral` | `on-light` |
| `ghost` | `on-light` |
| `destructive` | `on-intense` |

Spinner is always mounted inside `.spinner-container`. It becomes visible via CSS only when `.loading` is present on the button.

---

### Behavior-only props

Passed via `...props`:

| Prop | Type | Notes |
|---|---|---|
| `onClick` | `React.MouseEventHandler` | Standard |
| `className` | `string` | Merged via `cn()` after CVA output |
| `disabled` | `boolean` | Triggers CSS `:disabled` styles |
| `ref` | `React.Ref<HTMLButtonElement>` | Forwarded |
| `type` | `'button' \| 'submit' \| 'reset'` | No default — see Gap #10 |

---

### Shared helpers used in styles.js

| Helper | Source | Used in |
|---|---|---|
| `theme(...)` | Tailwind plugin context | Token reads |
| `transitionColorsStyles(theme)` | Tailwind plugin util | `.button-base` — smooth color transitions on bg, border, text, shadow |
| `textContentStyles(theme)` | Tailwind plugin util | `.button-base` — applies the `text-content` composite typography |
| `transitionAllStyles(theme)` | Tailwind plugin util | `circularBlur` helper — all-property transition on the `::before` glow |
| `circularBlur({ theme, transitionAllStyles })` | local helper (lines 1–17) | Generates the 152×152px blurred circular glow used by `.button-brand::before` and `.button-destructive::before` |

> **Typography utility class** — button labels are styled internally via `textContentStyles`, equivalent to `text-content` (`font-body font-medium text-sm leading-4`). When overriding from outside, use `text-content` as the reference.

---

### Storybook coverage

`src/components/Button/Button.stories.tsx` exports **17 stories** — full matrix coverage across the four variants:

| variant | Plain | WithIcons | IconOnly | Loading | Disabled |
|---|---|---|---|---|---|
| Brand | `Brand` | `BrandWithIcons` | `BrandIconOnlyButton` | `BrandLoadingButton` | `BrandDisabled` |
| Neutral | `Neutral` | `NeutralWithIcons` | `NeutralIconOnlyButton` | `NeutralLoadingButton` | `NeutralDisabled` |
| Ghost | `Ghost` | `GhostWithIcons` | `GhostIconOnlyButton` | `GhostLoadingButton` | `GhostDisabled` |
| Destructive | `Destructive` | `DestructiveWithIcons` | `DestructiveIconOnlyButton` | `DestructiveLoadingButton` | `DestructiveDisabled` |

Plus `GhostLoadingWithIcon` (Ghost + icon child + isLoading) as the 17th story — demonstrates that `& svg, & .mui-icon { opacity: 0 }` correctly hides icons during loading.

---

### Gaps

Mismatches between the Figma node, the React implementation, and adjacent project conventions. Gap #1 is the standardized fallback marker required by the skill when Code Connect is unavailable.

| # | Gap | Figma | React |
|---|---|---|---|
| 1 | **Code Connect API unavailable** — `mcp__figma__get_context_for_code_connect` returned 403 / Developer-seat-required. The Variants section was derived from prior scans + the React source + `get_variable_defs`. The `get_design_context` response on this node exceeded the inline token limit and was deferred to a file. Re-scan with a Developer seat for full Figma fidelity. | — | — |
| 2 | **`isDisabled` naming** | `isDisabled: boolean` prop in Figma | Uses native `disabled` HTML attribute passed via `...props`; no `isDisabled` prop |
| 3 | **`state` prop** | `state: Default \| Hover \| Focus` is a Figma variant | No React prop; `:hover` / `:focus-visible` / `:active` are pure CSS |
| 4 | **Icon / label slots** | `cLabel`, `cIcon`, `cLeadingIcon`, `cTrailingIcon` as discrete props | All content passed as `children`; consumer controls order |
| 5 | **`leadingIcon` / `trailingIcon` toggles** | Boolean props show/hide icon slots explicitly | No such props; icons are always rendered if passed as children |
| 6 | **`borderColor.brand-bold` / `borderColor.negative-bold`** | No Figma foundation token | Used in styles.js; `token-map.md` confirms these are Tailwind-only |
| 7 | **`boxShadow.reflection`** | Figma models as `effect/reflection` inner shadow | Used in `.button-brand` / `.button-destructive` but absent from `token-map.md`; code-only custom shadow |
| 8 | **`textColor.icon.*` path** | Token map places icon colors at `colors.icon.*` | styles.js uses `theme('textColor.icon.*')` — Tailwind config registers icon colors under both namespaces |
| 9 | **Ghost `color/bg/transparent`** | Figma references `var(--color/bg/transparent)` | styles.js hardcodes `backgroundColor: 'transparent'`; token only in Claude Foundation library |
| 10 | **`type` attribute default** | n/a | Button renders without explicit `type`; browsers default to `type="submit"` inside forms. Consumers should set `type="button"` unless form submission is intended. |
| 11 | **Full-width content alignment** | Figma always shows button content centered horizontally | `.button-base` uses `inline-flex` with no `justify-content`. At natural width this is invisible; with `w-full` content left-aligns. **Fix:** add `justify-center` when using `w-full`: `<Button className="w-full justify-center">` |
| 12 | **No `aria-busy` during loading** | n/a | `.loading` sets `pointer-events: none` and hides content visually but never sets `aria-busy="true"`. Screen readers can't announce the in-flight state. Same gap as LinkButton (#6) and ToggleFilter (#8). |

---

> **Generated by** `component-context-generator` skill (patched 2026-05-12 with Code Connect 403 fallback) against Figma node `380-83853` of file `eKAqJtRHEFoa6FOPw3xzCw`. Cross-referenced with `lib/design-system/token-map.md` and `src/components/Button/Button.stories.tsx`.
