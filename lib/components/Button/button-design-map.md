# Button Design Map

## figma-design-context

### Component info

| | |
|---|---|
| **Name** | Button |
| **Figma node URL** | https://www.figma.com/design/eKAqJtRHEFoa6FOPw3xzCw/Components?node-id=380-83853 |
| **Last scanned** | 2026-05-05 |
| **Documentation** | https://66fa495fae52482a39d36cea-tjqfsylutk.chromatic.com/?path=/docs/design-system-components-button--docs |

---

### Variants

| Property | Values | Default |
|---|---|---|
| `variant` | `Brand` \| `Neutral` \| `Ghost` \| `Destructive` | `Brand` |
| `iconOnly` | `true` \| `false` | `false` |
| `isLoading` | `true` \| `false` | `false` |
| `isDisabled` | `true` \| `false` | `false` |
| `state` | `Default` \| `Hover` \| `Focus` | `Default` |
| `leadingIcon` | `true` \| `false` | `false` |
| `trailingIcon` | `true` \| `false` | `false` |

> `state` is a Figma-only presentation prop. React handles these via CSS pseudo-classes (`:hover`, `:focus-visible`, `:active`). See [Gaps](#gaps) below.

---

### Design tokens used

| Figma token | theme() path | Used for |
|---|---|---|
| `color/bg/brand-intense` | `backgroundColor.brand-intense` | `.button-brand` background |
| _(no Figma token)_ ⚠️ | `borderColor.brand-bold` | `.button-brand` border |
| `color/text/onIntense` | `textColor.onIntense` | `.button-brand` / `.button-destructive` label |
| `icon/color/onIntense` | `textColor.icon.onIntense` †  | `.button-brand` / `.button-destructive` icon color |
| `icon/color/onIntense-disabled` | `textColor.icon.onIntense-disabled` † | `.button-brand:disabled` / `.button-destructive:disabled` icon |
| `color/interactive/bg-brand-disabled` | `backgroundColor.interactive.brand-disabled` | `.button-brand:disabled` background |
| _(no Figma token)_ ⚠️ | `textColor.interactive.onIntense-disabled` | `.button-brand:disabled` / `.button-destructive:disabled` label |
| `color/bg/negative-intense` | `backgroundColor.negative-intense` | `.button-destructive` background |
| _(no Figma token)_ ⚠️ | `borderColor.negative-bold` | `.button-destructive` border |
| `color/interactive/bg-negative-disabled` | `backgroundColor.interactive.negative-disabled` | `.button-destructive:disabled` background |
| `color/bg/default` | `backgroundColor.default` | `.button-neutral` background |
| `color/border/bold` | `borderColor.bold` | `.button-neutral` border |
| `color/text/subtle` | `textColor.subtle` | `.button-neutral` / `.button-ghost` label |
| `icon/color/subtle` | `textColor.icon.subtle` † | `.button-neutral` / `.button-ghost` icon color |
| `icon/color/disabled` | `textColor.icon.disabled` † | `.button-neutral:disabled` / `.button-ghost:disabled` icon |
| `color/interactive/bg-hover` | `backgroundColor.interactive.hover` | `.button-neutral:hover` / `.button-ghost:hover` background |
| `color/interactive/border-disabled` | `borderColor.interactive.disabled` | `.button-neutral:disabled` border |
| `color/interactive/text-disabled` | `textColor.interactive.disabled` | `.button-neutral:disabled` / `.button-ghost:disabled` label |
| `color/outline/focus-ring` | `outlineColor.focus-ring` | `.button-base:focus-visible` outline |
| _(no Figma token — code-only)_ | `boxShadow.soft-xs` | `.button-base` drop shadow |
| _(no Figma token — code-only)_ | `boxShadow.reflection` | `.button-brand` / `.button-destructive` inset highlight |
| _(no Figma token — code-only)_ | `colors.blurEffect.bg-brand` | `.button-brand::before` circular glow |
| _(no Figma token — code-only)_ | `colors.blurEffect.bg-error` | `.button-destructive::before` circular glow |
| `font/family/body` | `fontFamily.body` | Label font family (Inter) |
| `font/size/sm` | `fontSize.sm` | Label font size (14px) |
| `font/lineHeight/leading-4` | `lineHeight.4` | Label line height (20px) |
| `font/weight/medium` | — (font-medium utility) | Label font weight (500) |

> † `textColor.icon.*` — Token map lists these under `colors.icon.*`, but `styles.js` accesses them via `theme('textColor.icon.*')`. The Tailwind config exposes icon colors under both namespaces. See [Gaps](#gaps).

---

### Visual specs

#### Base (all variants — from `.button-base`)

| Property | Value | Raw |
|---|---|---|
| min-height | 36px | `2.25rem` |
| border-radius | 12px | `0.75rem` (rounded-xl) |
| padding (standard) | 4px 16px | `0.25rem 1rem` |
| padding (icon-only) | 8px | `0.5rem` |
| gap | 8px | `0.5rem` |
| icon size | 20px | `1.25rem` |
| font | Inter, 14px, 500, 20px lh | — |
| box-shadow | `boxShadow.soft-xs` | `0px 2px 4px -1px rgba(16,25,40,0.02), 0px 5px 13px -5px rgba(16,25,40,0.05)` |
| outline (default) | 2px solid transparent | — |

#### Brand

| Property | Value |
|---|---|
| background | `backgroundColor.brand-intense` (#4A53C6) |
| border | 1px solid `borderColor.brand-bold` (#4A53C6) |
| text | `textColor.onIntense` (white) |
| shadow | `boxShadow.reflection` inset + `boxShadow.soft-xs` |
| `::before` glow | `colors.blurEffect.bg-brand` (#56A9DA), 152×152px circle, blur 36px, `mix-blend-lighten` |

#### Neutral

| Property | Value |
|---|---|
| background | `backgroundColor.default` (white) |
| border | 1px solid `borderColor.bold` (#d4d4d8) |
| text | `textColor.subtle` (#3f3f46) |
| shadow | `boxShadow.soft-xs` |

#### Ghost

| Property | Value |
|---|---|
| background | transparent |
| border | none |
| shadow | none |
| text | `textColor.subtle` (#3f3f46) |

#### Destructive

| Property | Value |
|---|---|
| background | `backgroundColor.negative-intense` (#dc2626) |
| border | 1px solid `borderColor.negative-bold` (#dc2626) |
| text | `textColor.onIntense` (white) |
| shadow | `boxShadow.reflection` inset + `boxShadow.soft-xs` |
| `::before` glow | `colors.blurEffect.bg-error` (#f97316), 152×152px circle, blur 36px, `mix-blend-lighten` |

---

### Interaction states

#### Brand

| State | What changes | token() path |
|---|---|---|
| Default | Baseline: brand-intense bg, reflection shadow, glow visible | — |
| Hover | `::before` opacity → 0 (glow fades); inset white highlight remains | — |
| Focus | `outline: 2px solid` + `outlineOffset: 0` | `outlineColor.focus-ring` |
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
| Hover | `::before` opacity → 0 (glow fades); inset white highlight remains | — |
| Focus | outline | `outlineColor.focus-ring` |
| Active | `boxShadow: none` | — |
| Loading | children hidden, spinner visible (on-intense) | — |
| Disabled | bg → negative-disabled, border removed, shadow removed, text → onIntense-disabled | `backgroundColor.interactive.negative-disabled`, `textColor.interactive.onIntense-disabled` |

---

### Slots

| Slot | Figma prop | Description |
|---|---|---|
| Label | `cLabel` (string) | Button text. Visible in all non-icon-only states. Hidden (`color: transparent`) during loading. |
| Icon (icon-only) | `cIcon` | Single centered icon. Used when `iconOnly = true`. Size: 20px. |
| Leading icon | `cLeadingIcon` | Optional icon left of label. Visible when `leadingIcon = true`. Size: 20px. Opacity 0 during loading (layout preserved). |
| Trailing icon | `cTrailingIcon` | Optional icon right of label. Visible when `trailingIcon = true`. Size: 20px. Opacity 0 during loading. |
| Spinner | _(internal)_ | Centered absolutely over button content. Hidden by default; shown via `.loading .spinner-container { display: flex }`. Variant maps: Brand/Destructive → `on-intense`; Neutral/Ghost → `on-light`. |

---

## react-design-context

### Component metadata

| | |
|---|---|
| **File** | `lib/components/Button/index.tsx` |
| **Styles** | `lib/components/Button/styles.js` |
| **Import** | `import { Button } from 'lib/components/Button'` |
| **Dependencies** | `Spinner` (from `lib/components/Spinner`) |
| **Ref forwarded** | Yes — `React.forwardRef<HTMLButtonElement>` |

---

### Variant-to-class mapping (from CVA)

| `variant` prop value | CSS class | styles.js lines |
|---|---|---|
| `brand` | `.button-brand` | 92–118 |
| `neutral` | `.button-neutral` | 119–141 |
| `ghost` | `.button-ghost` | 142–159 |
| `destructive` | `.button-destructive` | 160–187 |

All variants extend `.button-base` (lines 25–90).

---

### Prop mapping

| Figma variant prop | React prop | Type | Default | Notes |
|---|---|---|---|---|
| `variant` | `variant` | `'brand' \| 'neutral' \| 'ghost' \| 'destructive'` | required | Case-insensitive in Figma (Brand → brand) |
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

These are passed through `...props` to the native `<button>` element — no CVA involvement:

| Prop | Type | Notes |
|---|---|---|
| `onClick` | `React.MouseEventHandler` | Standard click handler |
| `className` | `string` | Merged via `cn()` after CVA output |
| `disabled` | `boolean` | Triggers CSS `:disabled` styles for all four variants |
| `ref` | `React.Ref<HTMLButtonElement>` | Forwarded via `React.forwardRef` |
| `type` | `'button' \| 'submit' \| 'reset'` | Passed through; no default set in component |

---

### Shared helpers used in styles.js

| Helper | Source | Used in |
|---|---|---|
| `transitionColorsStyles(theme)` | Tailwind plugin util | `.button-base` — smooth color transitions on bg, border, text, shadow |
| `textContentStyles(theme)` | Tailwind plugin util | `.button-base` — sets body font, `font-size: sm`, `font-weight: medium` (equivalent of `text-content` utility class) |
| `transitionAllStyles(theme)` | Tailwind plugin util | `circularBlur` helper — all-property transition on the `::before` glow element |

> **Typography utility class** — button labels are styled internally via `textContentStyles`, which is identical to the `text-content` utility class (`font-body font-medium text-sm leading-4`). When overriding button label styles from outside, use `text-content` as the reference. See `token-map.md` Section 15.

---

### Gaps

Mismatches between the Figma spec and current React implementation:

| # | Gap | Figma | React |
|---|---|---|---|
| 1 | **`state` prop** | `state: Default \| Hover \| Focus` is a Figma variant | No React prop; :hover / :focus-visible / :active are pure CSS in styles.js |
| 2 | **`isDisabled` naming** | `isDisabled: boolean` prop in Figma | Uses native `disabled` HTML attribute passed via `...props`; no `isDisabled` prop |
| 3 | **Icon / label slots** | `cLabel`, `cIcon`, `cLeadingIcon`, `cTrailingIcon` as discrete props | All content passed as `children`; consumer controls order of icons and label |
| 4 | **`leadingIcon` / `trailingIcon` toggles** | Boolean props show/hide icon slots explicitly | No such props; icons are always rendered if passed as children |
| 5 | **`borderColor.brand-bold` / `borderColor.negative-bold`** | No Figma foundation token exists | Used in styles.js; token-map.md confirms these are Tailwind-only semantic paths |
| 6 | **`boxShadow.reflection`** | Figma models as `effect/reflection` inner shadow (`color/base/white-a30`, 0px 1.5px offset) | Used in `.button-brand` and `.button-destructive` but absent from token-map.md; code-only custom shadow |
| 7 | **`textColor.icon.*` path** | Token map places icon colors at `colors.icon.*` | styles.js uses `theme('textColor.icon.*')` — Tailwind config must register `textColor.icon` separately from `colors.icon` |
| 8 | **Ghost `color/bg/transparent` token** | Figma references `var(--color/bg/transparent)` | styles.js hardcodes `backgroundColor: 'transparent'`; token-map.md notes this token is only in the Claude Foundation library |
| 9 | **`textColor.interactive.onIntense-disabled`** | No Figma token | Used for Brand/Destructive disabled text; token-map.md confirms it is Tailwind-only |
| 10 | **`type` attribute default** | N/A | Button renders without explicit `type`; browsers default to `type="submit"` inside forms. Consumers should set `type="button"` unless form submission is intended |
| 11 | **Full-width content alignment** | Figma always shows button content (label + icons) centered horizontally | `.button-base` uses `inline-flex` with no `justify-content`. At natural width this is invisible (no spare space), but with `w-full` content left-aligns. **Fix:** add `justify-center` to `className` whenever `w-full` is used: `<Button className="w-full justify-center">` |
