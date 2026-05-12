# Input Design Map

## figma-design-context

### Component info

| | |
|---|---|
| **Name** | Input Text |
| **Figma node URL** | https://www.figma.com/design/eKAqJtRHEFoa6FOPw3xzCw/Components?node-id=703-11630 |
| **Last scanned** | 2026-05-12 |
| **Category** | Form controls (single-line text field with slots) |

> Per the Figma description: "The Input Text component is the standard single-line text input for forms. It supports label, placeholder, helper text, error state, disabled state, and optional leading/trailing elements. Use for any free-text form field."
>
> **Three React exports from one Figma:** `InputRoot` (validation outline wrapper), `Input` (the field + leading/trailing slots), and `InputSearch` (composes Input + a search LinkButton). Figma documents the field; React splits responsibility across three components — see Gap #2.

---

### Variants

Sourced from the `InputTextProps` type signature in the `get_design_context` response (Figma codegen). Code Connect was unavailable (see Gap #1).

| Property | Values | Default |
|---|---|---|
| `state` | `Placeholder` \| `Active` \| `Hover` \| `Focus` | `Placeholder` |
| `validationState` | `None` \| `Positive` \| `Negative` | `None` |
| `isDisabled` | `true` \| `false` | `false` |
| `showLeadingTab` | `true` \| `false` _(slot toggle)_ | `true` |
| `showTrailingTab` | `true` \| `false` _(slot toggle)_ | `true` |
| `showLeading` | `true` \| `false` _(slot toggle)_ | `true` |
| `showTrailing` | `true` \| `false` _(slot toggle)_ | `true` |
| `showLeadingIcon` | `true` \| `false` _(slot toggle)_ | `true` |
| `showHelperText` | `true` \| `false` _(slot toggle)_ | `true` |
| `leadingIcon` | `React.ReactNode \| null` _(slot)_ | `null` |
| `leading` / `trailing` | `string` _(slot)_ | `"{leading}"` / `"{trailing}"` |
| `placeholder` / `value` / `helperText` | `string` _(slot)_ | `"{placeholder}"` / `"{value}"` / `"{helper text}"` |

#### Symbol-level completeness in Figma _(observed from conditional render paths)_

- `Placeholder + None + !disabled` ✓
- `Hover + None + !disabled` ✓
- `Active + None + !disabled` ✓
- `Active + None + disabled` ✓
- `Active + Positive + !disabled` ✓
- `Active + Negative + !disabled` ✓
- `Focus + None + !disabled` ✓
- Combinations involving `Hover + (Positive/Negative)` or `Focus + (Positive/Negative)` are not enumerated — implied to fall back to validationState's outline color via CSS

---

### Design tokens used

Sourced from `lib/design-system/token-map.md`. Cross-referenced with `get_variable_defs` for this node.

#### Container (`.input-container`)

| Figma token | Tailwind path | Used for |
|---|---|---|
| `color/bg/default` | `backgroundColor.default` (`#FFFFFF`) | Default background |
| `color/interactive/bg-hover` | `backgroundColor.interactive.hover` (`#f4f4f5`) | `:hover` background |
| `color/border/bold` | `borderColor.bold` (`#d4d4d8`) | `1px` border in default + hover |
| `color/text/subtler` | `textColor.subtler` (`#71717a`) | Container text color (placeholder) |
| `color/text/subtle` | `textColor.subtle` (`#3f3f46`) | `:focus-within` / hover text color |
| `color/interactive/text-disabled` | `textColor.interactive.disabled` (`#d4d4d8`) | `.disabled` text + border |
| `color/interactive/border-disabled` | `borderColor.interactive.disabled` (`#f4f4f5`) | `.disabled` border |
| `border/1` | `1px` | Container border width |

#### Validation outline (`.input-container-wrapper`)

| Figma token | Tailwind path | Used for |
|---|---|---|
| `color/outline/focus-ring` | `outlineColor.focus-ring` (`#60a5fa`) | `:focus-within:not(.disabled)` outline (`2px solid`) |
| `color/border/negative-bold` _(via)_ | `outlineColor.negative-bold` _(no Figma token)_ | `[aria-invalid="true"]:not(:focus-within):not(.disabled)` outline (`1px solid`) — Tailwind-only path; see Gap #4 |
| `color/border/positive-bold` _(via)_ | `outlineColor.positive-bold` _(no Figma token)_ | `[data-valid="true"]:not(:focus-within):not(.disabled)` outline (`1px solid`) — Tailwind-only path; see Gap #4 |
| `border/2` | `2px` | Focus outline width |

#### Slots & icons

| Figma token | Tailwind path | Used for |
|---|---|---|
| `icon/color/subtle` | `colors.icon.subtle` (`#71717a`) | `.input-leading-icon` default color |
| `icon/color/disabled` | `colors.icon.disabled` (`#d4d4d8`) | `.input-leading-icon` when `.disabled` |
| `font/size/sm` | `1rem` (16px) icon size via `fontSize.base` | `& svg, & .mui-icon { height/width: 1rem }` |

#### Composite typography + geometry

| Figma token | Tailwind utility | Used for |
|---|---|---|
| `content/text` | utility `text-content` (via `textContentStyles(theme)`) | Field text + leading/trailing labels — Inter / 14px / 500 / 20px lh |
| `content/caption` | utility `text-content-caption` | Helper text (Inter / 12px / 400 / 16px lh) — applied at slot level |
| `content/caption-strong` | utility `text-content-caption-strong` | Form group label (Inter / 12px / 500 / 16px lh) — applied by `_Form Group Label` |
| `spacing/3` | `0.75rem` (12px) | `.input-wrapper` horizontal padding |
| `spacing/2` | `0.5rem` (8px) | `.input-wrapper` gap |
| `spacing/1-5` | `0.375rem` (6px) | Gap between input wrapper and helper text |
| `rounded/xl` | `0.75rem` (12px) | `.input-container` border-radius |

#### Field-level fixed values

| Value | Used for |
|---|---|
| `2.25rem` (36px) | `.input-wrapper` min-height |
| `1rem` (16px) | Leading icon size |

---

### Visual specs

#### `.input-container-wrapper` (outer — validation outline owner)

| Property | Value |
|---|---|
| display | `flex` row |
| width | `100%` |
| border-radius | `0.75rem` (12px) |
| outline (default) | `2px solid transparent`, offset `2px` |
| transition | `transitionColorsStyles(theme)` |
| outline (`:focus-within:not(.disabled)`) | `2px solid outlineColor.focus-ring`, offset `0` |
| outline (`[aria-invalid="true"]:not(:focus-within):not(.disabled)`) | `1px solid outlineColor.negative-bold`, offset `0` |
| outline (`[data-valid="true"]:not(:focus-within):not(.disabled)`) | `1px solid outlineColor.positive-bold`, offset `0` |
| cursor (`.disabled`) | `not-allowed` |

#### `.input-container` (inner — visual frame)

| Property | Value |
|---|---|
| position | `relative` |
| display | `flex` row |
| width | `100%` |
| overflow | `hidden` |
| border-radius | `0.75rem` |
| border | `1px solid borderColor.bold` |
| background | `backgroundColor.default` |
| color | `textColor.subtler` |
| transition | `transitionColorsStyles(theme)` |

Variants applied via state selectors:
- `:hover:not(.disabled)` → bg → `interactive.hover`; `.input` color → `subtle`
- `:focus-within` → bg → `default`; color → `subtle`
- `.disabled` → cursor `not-allowed`; color + border → `interactive.disabled`; descendant `.separator` bg → `interactive.disabled`
- `.disabled .input-leading-icon` → icon color → `disabled`

#### `.input-wrapper` (field row)

| Property | Value |
|---|---|
| position | `relative` |
| display | `flex` row, items center |
| min-height | `2.25rem` (36px) |
| width | `100%` |
| flex | `1 1 0%` |
| gap | `0.5rem` |
| padding | `0 0.75rem` |
| transition | `transitionColorsStyles(theme)` |

#### `.input` (native `<input>`)

| Property | Value |
|---|---|
| width | `100%` |
| background | `transparent` |
| color | `textColor.subtle` |
| outline (default) | `2px solid transparent`, offset `2px` |
| transition | `transitionColorsStyles(theme)` |
| typography | `textContentStyles(theme)` |
| `:disabled` | `cursor: not-allowed`, color → `interactive.disabled` |
| `::placeholder` | color → `subtler`; `:disabled` → `interactive.disabled` |
| `::-webkit-search-cancel-button` | Custom inline-SVG `x` icon, 16×16, no native styling |
| `:autofill` (and `:-webkit-autofill` variants) | `background: transparent !important`, color → `subtle`, suppresses Chrome's autofill yellow via `-webkit-box-shadow: none !important` |

#### `.input-leading-icon` / `.input-leading` / `.input-trailing`

| Property | Value |
|---|---|
| `.input-leading-icon` | flex, full height, items center, justify center, color `colors.icon.subtle`, `16×16` icon |
| `.input-leading` / `.input-trailing` | color `inherit`; typography `textContentStyles(theme)` |
| `.input-trailing` | `marginLeft: auto` |

---

### Interaction states

| State | Visual changes | theme() path |
|---|---|---|
| Default (placeholder) | white bg, bold border, subtler text + subtle leading icon | — |
| Hover (non-disabled) | bg → `bg-hover`; input color → `subtle` | `backgroundColor.interactive.hover` |
| Focus-within (non-disabled) | bg → `default`; container text → `subtle`; outer wrapper outline → `2px solid focus-ring` | `outlineColor.focus-ring` |
| Validation: invalid (non-focus, non-disabled) | outer wrapper outline → `1px solid negative-bold` | `outlineColor.negative-bold` _(Tailwind-only)_ |
| Validation: valid (non-focus, non-disabled) | outer wrapper outline → `1px solid positive-bold` | `outlineColor.positive-bold` _(Tailwind-only)_ |
| Disabled | cursor `not-allowed`; container text + border → `interactive.disabled`; descendants inherit; separator bg → `interactive.disabled` | `textColor.interactive.disabled`, `borderColor.interactive.disabled` |

---

### Accessibility

| Aspect | Implementation |
|---|---|
| Role | Native `<input>` (with `<div>` wrappers for layout). Validation outline lives on the outer wrapper via `aria-invalid` and `data-valid` attribute selectors. |
| Keyboard | Native input focus + caret. Tab navigates through `leadingTab` / input / `trailingTab` children. |
| ARIA attributes | `aria-invalid` is passed through `InputRoot` from `props['aria-invalid']` and used by the validation-outline selector. No automatic association between Input and an external `<label>` — the consumer must wire `htmlFor`/`id` or `aria-labelledby` themselves. |
| Focus management | `:focus-within` on the outer wrapper drives the focus ring; `:focus-within:not(.disabled)` so disabled inputs don't draw focus styling. |
| Screen reader | Reads input value + placeholder. Helper text is not auto-associated via `aria-describedby` (see Gap #5). |

---

### Slots

| Figma slot | Figma prop / toggle | React equivalent | Description |
|---|---|---|---|
| Leading tab | `showLeadingTab` + `_Input Inline` instance | `leadingTab?: React.ReactNode` prop on `Input` | A small inline button (e.g. country code selector). Followed by an automatic `<Separator orientation="vertical" />` from `@/components/Separator`. |
| Leading icon | `showLeadingIcon` + `leadingIcon: ReactNode` | `leadingIcon?: React.ReactNode` | Rendered inside `.input-leading-icon` (16×16) before the input field |
| Leading text | `showLeading` + `leading: string` | `leading?: string` | Static text label rendered before the input (e.g. `+00`) |
| Input field | — _(native)_ | `<input>` with `...props` from `Input` | Receives `type`, `value`, `onChange`, etc. via `...props`. Always rendered. |
| Trailing text | `showTrailing` + `trailing: string` | `trailing?: string` | Static text label rendered after the input (e.g. `USD`) |
| Trailing tab | `showTrailingTab` + `_Input Inline` instance | `trailingTab?: React.ReactNode` prop on `Input` | Optional inline trailing control. Preceded by an automatic `<Separator orientation="vertical" />`. |
| Form group label | `_Form Group Label` sub-component | _(not exposed in React)_ — see Gap #3 | Figma always pairs the input with a label + optional tooltip. React doesn't ship a `FormGroupLabel`; consumer composes with `<Label>` from `@/components/Label`. |
| Helper text | `showHelperText` + `helperText: string` | _(not exposed)_ — see Gap #5 | Figma always renders helper text below the field with an info icon and validation-state coloring. React provides no equivalent slot. |

---

### Animation & motion

| Transition | Property | Source |
|---|---|---|
| Color | bg, border, text, shadow | `transitionColorsStyles(theme)` on `.input-container-wrapper`, `.input-container`, `.input-wrapper`, `.input-leading`, `.input-trailing`, `.input-leading-icon`, `.input` |

No enter/exit animations.

---

### Responsive behavior

The component is `width: 100%` and fills its container. Internal layout (flex row) doesn't change across breakpoints.

---

## react-design-context

### Component metadata

| | |
|---|---|
| **File** | `lib/components/Input/index.tsx` |
| **Styles** | `lib/components/Input/styles.js` |
| **Import** | `import { Input, InputRoot, InputSearch } from '@/components/Input'` |
| **Storybook story** | `src/components/Input/Input.stories.tsx`; `src/components/InputSearch/InputSearch.stories.tsx` |
| **Dependencies** | `Separator` (from `lib/components/Separator`); `LinkButton` (from `lib/components/LinkButton`, used by `InputSearch`); `Slot` from `@radix-ui/react-slot` |
| **Ref forwarded** | Yes — `InputRoot` → `HTMLDivElement`, `Input` → `HTMLInputElement`, `InputSearch` → `HTMLInputElement`. All via `React.forwardRef`. |

---

### Exported API

| Export | Element | Notes |
|---|---|---|
| `InputRoot` | `<div>` (or any element via `asChild`) | Validation outline owner. Props: `asChild?`, `disabled?`, `isValid?`, `aria-invalid?`, plus `<div>` HTML attrs. Sets `data-valid` from `isValid`. |
| `Input` | `<div class="input-container">` wrapping `<input>` | The field row. Props: `leadingIcon?`, `leading?`, `leadingTab?`, `trailing?`, `trailingTab?`, plus all `<input>` HTML attrs (forwarded to the native input via `...props`). |
| `InputSearch` | Composed — same wrapper + container + a built-in search icon + a brand `LinkButton` trigger | Props: `isLoading?`, plus all `<input type="search">` attrs |

---

### CSS class architecture

| Class | Lives in | Purpose |
|---|---|---|
| `.input-container-wrapper` | applied by `InputRoot` | Outer wrapper. Owns the validation outline (`focus-within`, `[aria-invalid]`, `[data-valid]`). |
| `.input-container` | applied by `Input` | Visual frame — bg, border, hover/disabled behavior. |
| `.input-wrapper` | applied by `Input` inside `.input-container` | Field row — `min-height: 36px`, padding, gap. |
| `.input-leading-icon` | applied inside `.input-wrapper` | 16×16 icon slot before the input |
| `.input-leading`, `.input-trailing` | applied inside `.input-wrapper` | Static text slots |
| `.input` | applied to native `<input>` | Field-level reset + typography + autofill suppression |
| `.disabled` | toggled on both wrapper + container | Disabled state |

InputSearch reuses `.input-container-wrapper` and `.input-container` directly — it doesn't have its own class namespace.

---

### Component split — which props go where

| Concern | Component | Why |
|---|---|---|
| Validation outline | `InputRoot` | Listens to `aria-invalid` / `data-valid` on the outer wrapper so children don't need to be invalidation-aware |
| Field layout (leading tab → leading icon → leading text → input → trailing text → trailing tab) | `Input` | Single component that orchestrates the row, including the auto-inserted `<Separator orientation="vertical">` flanking tabs |
| Search affordance (built-in search icon + submit button) | `InputSearch` | Common compound — pre-wires a `LinkButton variant="brand"` trigger that consumes `isLoading` to drive its spinner |

---

### Prop mapping

| Figma variant prop | React prop | Type | Default | Notes |
|---|---|---|---|---|
| `state: Placeholder \| Active \| Hover \| Focus` | _(CSS pseudo-classes + native input state)_ | — | — | No React prop; CSS handles all four via `:focus-within`, `:hover`, native input value |
| `validationState: None \| Positive \| Negative` | `isValid?: boolean` (InputRoot) + `aria-invalid` (Input or wrapper) | `boolean` / standard ARIA value | `undefined` / unset | `isValid=true` → green outline; `aria-invalid="true"` → red outline |
| `isDisabled: boolean` | `disabled` (native HTML attr on `<input>`) | `boolean` | `false` | Also passed to `InputRoot` to apply `.disabled` class to the wrapper |
| `showLeadingTab` | `leadingTab` (truthy) | `React.ReactNode` | undefined | When passed, also renders an auto-Separator after the tab |
| `showTrailingTab` | `trailingTab` (truthy) | `React.ReactNode` | undefined | When passed, also renders an auto-Separator before the tab |
| `showLeadingIcon` | `leadingIcon` (truthy) | `React.ReactNode` | undefined | When passed, renders inside `.input-leading-icon` |
| `showLeading` | `leading` (truthy string) | `string` | undefined | When passed, renders inside `.input-leading` |
| `showTrailing` | `trailing` (truthy string) | `string` | undefined | When passed, renders inside `.input-trailing` |
| `showHelperText` + `helperText` | _(not exposed)_ | — | — | See Gap #5 |
| `leadingIcon` (ReactNode) | `leadingIcon` | same | undefined | Direct mapping |
| `placeholder` / `value` | native HTML attrs | string | undefined | Passed via `...props` to native input |

---

### Behavior-only props

Passed via `...props`:

| Prop | Type | Where it applies | Notes |
|---|---|---|---|
| `className` | `string` | All three components | Merged via `cn()` |
| `ref` | forwarded | See Component metadata | Standard |
| `aria-invalid` | `'true' \| 'false'` (string) | `InputRoot`, `Input` | InputRoot reads `props['aria-invalid']` explicitly so the outline rule fires |
| `disabled` | `boolean` | All three | Triggers `.disabled` class + native disabling |
| `type` | `string` | `Input` (passed through) / `InputSearch` (forces `"search"`) | Standard |
| `onChange` / `onFocus` / `onBlur` | native | passed through | Standard |
| `value` / `defaultValue` | string | passed through | Standard |

---

### Shared helpers used in styles.js

| Helper | Source | Used in |
|---|---|---|
| `theme(...)` | Tailwind plugin context | Token reads |
| `transitionColorsStyles(theme)` | Tailwind plugin util | Smooth color transitions on container, wrapper, input, leading/trailing slots |
| `textContentStyles(theme)` | Tailwind plugin util | Applies the `text-content` composite typography to `.input` and `.input-leading` / `.input-trailing` |

---

### Storybook coverage

`src/components/Input/Input.stories.tsx` exports **13 stories**:

| Story | Demonstrates |
|---|---|
| `SimpleInput` | Baseline placeholder |
| `ValidInput` | `InputRoot isValid` → green outline |
| `InvalidInput` | `aria-invalid="true"` → red outline |
| `DisabledInput` | `disabled` (empty) |
| `DisabledInputWithValue` | `disabled` (filled) |
| `LeadingIconInput` | `leadingIcon` prop |
| `LeadingIconDisabledInput` | `leadingIcon` + `disabled` |
| `LeadingInput` | `leading="+00"` static text |
| `LeadingTabInput` | `leadingTab` inline button (country code selector) |
| `LeadingTabDisabledInput` | `leadingTab` + `disabled` |
| `LeadingWithLeadingTabInput` | `leading` + `leadingTab` combined |
| `LeadingWithTrailingTabInput` | `leading` + `trailingTab` combined |
| `LeadingWithTrailingTabDisabledInput` | Above + `disabled` |

`InputSearch` has its own story file at `src/components/InputSearch/InputSearch.stories.tsx`.

**Missing stories:** no `trailingIcon` story (the prop doesn't exist in React — only the Figma `trailingIcon` slot type), no Positive + Hover combination, no plain `trailing` text without a tab.

---

### Gaps

Mismatches between the Figma node, the React implementation, and adjacent project conventions. Gap #1 is the standardized fallback marker required by the skill when Code Connect is unavailable.

| # | Gap | Figma | React |
|---|---|---|---|
| 1 | **Code Connect API unavailable** — `mcp__figma__get_context_for_code_connect` returned 403 / Developer-seat-required. The Variants section was derived from the React source + the `InputTextProps` type signature returned by `get_design_context` (rich codegen response) + `get_variable_defs` rather than the full Figma variant tree. Re-scan with a Developer seat to replace any rows marked `_(inferred)_`. | — | — |
| 2 | **One Figma component, three React components** | Single "Input Text" symbol with slot toggles | React splits into `InputRoot` (outline), `Input` (field + slots), and `InputSearch` (composed search affordance). The split is sensible for composition flexibility but isn't surfaced in Figma. |
| 3 | **`_Form Group Label` is internal in Figma, separate in React** | Figma always nests `_Form Group Label` (label + optional `(mandatory)` + asterisk + tooltip trigger) above the field | React provides no `FormGroupLabel` export — consumer uses `<Label>` from `@/components/Label` and wires the layout manually. The Figma description even says `_Form Group Label` is "Not for direct use — composed automatically", but in React it's a manual composition. |
| 4 | **Validation outline tokens are Tailwind-only** | Figma references `color/border/negative-bold` / `color/border/positive-bold` as the border colors in Active+Negative / Active+Positive symbols | styles.js uses `outlineColor.negative-bold` / `outlineColor.positive-bold` — these are **outline** tokens (not border) and `token-map.md` flags them as Tailwind-only with no Figma equivalent. Figma also uses `border-2 focus-ring` for the Focus + None state instead of an outline — same `border` vs `outline` pattern as LinkButton/ToggleFilter. |
| 5 | **`helperText` slot has no React equivalent** | Figma's Input Text always renders helper text below the field, with an info icon and validation-state coloring | React Input has no `helperText` prop. Consumer must render their own helper text outside `Input`. No automatic `aria-describedby` wiring either — the Input can't expose itself to a helper-text element for screen readers. |
| 6 | **Default validation messages icon (info / check / x) is Figma-only** | Figma renders a 12×12 status icon next to helper text that changes per validation state | React has no equivalent. Tied to Gap #5. |
| 7 | **`_Input Inline` sub-component is internal in Figma** | Figma codegen references `_Input Inline` (the inline button used for country code / currency tabs) and notes "Not for direct use — use Input Text instead" | React has no `InputInline` export. The stories pass a hand-rolled `<button>` for `leadingTab` (see `inputInline()` helper in `Input.stories.tsx`). A dedicated component would be a more discoverable API. |
| 8 | **`type` prop is open** | Figma is a text input | `Input` accepts `type` via `...props` (text, email, password, number, etc.). `InputSearch` forces `type="search"` — that's the only enforced type. |
| 9 | **No password-mode toggle** | n/a | A common form field is "password with visible toggle". Neither Figma nor React provide it — consumer must compose with a `trailingTab` button. Worth surfacing. |
| 10 | **`textColor.subtler` and `icon/color/subtle` collide on hex** | Both resolve to `#71717a` | Same naming inconsistency noted on ToggleFilter Gap #11. |
| 11 | **InputSearch couples to LinkButton's `variant="brand"`** | n/a | `InputSearch` always renders a brand `LinkButton` as its submit affordance. Consumers can't change the variant or replace the trigger. If a search box appears on a brand-tinted background, the brand trigger may not have enough contrast. |
| 12 | **`isValid={false}` vs `aria-invalid="true"` overlap** | n/a | The story `InvalidInput` passes BOTH `isValid={false}` on `InputRoot` and `aria-invalid="true"`. The component logic prioritizes `aria-invalid` (red outline wins because `[aria-invalid="true"]` rule comes after `[data-valid="true"]` in source order — but `isValid={false}` doesn't set `data-valid="false"`, it sets it to `false` literally, which doesn't match `[data-valid="true"]`). Documentation should clarify the canonical pattern: prefer `aria-invalid` alone for native-form alignment. |

---

> **Generated by** `component-context-generator` skill (patched 2026-05-12 with Code Connect 403 fallback) against Figma node `703-11630` of file `eKAqJtRHEFoa6FOPw3xzCw`. Cross-referenced with `lib/design-system/token-map.md`, `src/components/Input/Input.stories.tsx`, and `src/components/InputSearch/InputSearch.stories.tsx`.
