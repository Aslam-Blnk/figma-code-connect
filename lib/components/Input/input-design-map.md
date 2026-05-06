# input — Design Map

> Last synced: 2026-05-05
> Figma node: https://www.figma.com/design/eKAqJtRHEFoa6FOPw3xzCw/Components?node-id=703-11630

---

## figma-design-context

### Component info

- **Name:** Input Text
- **Figma node:** https://www.figma.com/design/eKAqJtRHEFoa6FOPw3xzCw/Components?node-id=703-11630
- **Date scanned:** 2026-05-05

---

### Variants

| Property | Values | Default |
|---|---|---|
| `state` | `Placeholder` \| `Active` \| `Hover` \| `Focus` | `Placeholder` |
| `validationState` | `None` \| `Positive` \| `Negative` | `None` |
| `isDisabled` | `true` \| `false` | `false` |
| `showLeadingTab` | `true` \| `false` | `true` |
| `showTrailingTab` | `true` \| `false` | `true` |
| `showLeadingIcon` | `true` \| `false` | `true` |
| `showLeading` | `true` \| `false` | `true` |
| `showTrailing` | `true` \| `false` | `true` |
| `showHelperText` | `true` \| `false` | `true` |

> `state` is a Figma-only presentation property. React handles these via CSS pseudo-classes (`:hover`, `:focus-within`) and the native `disabled` attribute. `validationState` maps to HTML attributes on `InputRoot`, not a React prop. See [Gaps](#gaps).

---

### Design tokens used

| Figma token | theme() path | Used in |
|---|---|---|
| `color/bg/default` | `backgroundColor.default` | `.input-container` background (default + focus-within) |
| `color/interactive/bg-hover` | `backgroundColor.interactive.hover` | `.input-container:hover` background |
| `color/border/bold` | `borderColor.bold` | `.input-container` border — default and hover states (Figma) ⚠️ see Gaps |
| `color/interactive/border-disabled` | `borderColor.interactive.disabled` | `.input-container.disabled` border; `.separator` in disabled state |
| `color/text/subtle` | `textColor.subtle` | `.input` value text; `.input-container:focus-within` inherited color; active/focus leading + trailing (validation states) |
| `color/text/subtler` | `textColor.subtler` | `.input-container` default color (leading/trailing inherit); `.input::placeholder`; leading + trailing in None state |
| `color/interactive/text-disabled` | `textColor.interactive.disabled` | All text when disabled; `.input:disabled`, placeholder-disabled, `.disabled > *` |
| `color/outline/focus-ring` | `outlineColor.focus-ring` | `.input-container-wrapper:focus-within` outline (2px) |
| `color/border/negative-bold` ⚠️ | `outlineColor.negative-bold` | `.input-container-wrapper[aria-invalid]` outline (1px) — see Gaps |
| `color/border/positive-bold` ⚠️ | `outlineColor.positive-bold` | `.input-container-wrapper[data-valid=true]` outline (1px) — see Gaps |
| `icon/color/subtle` | `colors.icon.subtle` | `.input-leading-icon` default color |
| `icon/color/disabled` | `colors.icon.disabled` | `.input-container.disabled .input-leading-icon` color |
| `color/text/negative` | `textColor.negative` | Helper text color when `validationState = Negative` (Figma; consumer-rendered in React) |
| `color/text/positive` | `textColor.positive` | Helper text color when `validationState = Positive` (Figma; consumer-rendered in React) |
| `font/family/body` | `fontFamily.body` | All text elements via `textContentStyles` |
| `font/weight/medium` | — (font-medium, 500) | Input value, leading, trailing via `textContentStyles`; label (`content/caption-strong`) |
| `font/weight/normal` | — (font-normal, 400) | Helper text, "(mandatory)" label text (`content/caption`) |
| `font/size/sm` | `fontSize.sm` | Input value, leading, trailing (14px) via `textContentStyles` |
| `font/size/xs` | `fontSize.xs` | Label text, helper text (12px) |
| `font/lineHeight/leading-4` | `lineHeight.4` | Input value, leading, trailing (20px) |
| `font/lineHeight/leading-2` | `lineHeight.2` | Label text, helper text (16px) |

> ⚠️ `color/border/negative-bold` and `color/border/positive-bold` have no matching Figma foundation token. They resolve to the same values as `outlineColor.negative-bold` and `outlineColor.positive-bold` in the Tailwind config, but are different CSS properties (border vs outline). See Gaps.

---

### Visual specs

**Base (all states):**

| Property | Value | Notes |
|---|---|---|
| min-height | 36px (2.25rem) | On `.input-wrapper` |
| border-radius | 12px (0.75rem) | On `.input-container` and `.input-container-wrapper` |
| border | 1px solid | On `.input-container` |
| padding | 0rem 0.75rem (horizontal) | On `.input-wrapper` |
| gap | 0.5rem (8px) | On `.input-wrapper` between icon / leading / input / trailing |
| icon size | 16px (1rem) | `.input-leading-icon svg`, `.mui-icon` — forced via `fontSize.base` |
| outline (default) | 2px solid transparent | On `.input-container-wrapper`; real color applied on focus/validation |
| outline-offset | 2px (default) → 0 (focus / validation) | |
| typography | `textContentStyles(theme)` | Applies to `.input`, `.input-leading`, `.input-trailing` |

**Per state — `.input-container`:**

| State | Background | Border | Text color | Outline on wrapper |
|---|---|---|---|---|
| Default (Placeholder) | `backgroundColor.default` | `borderColor.default` ⚠️ | `textColor.subtler` (inherited) | none |
| Hover | `backgroundColor.interactive.hover` | unchanged | `.input` → `textColor.subtle` | none |
| Focus-within | `backgroundColor.default` | unchanged | `textColor.subtle` (inherited) | 2px solid `outlineColor.focus-ring` |
| Disabled | `backgroundColor.default` | `borderColor.interactive.disabled` | `textColor.interactive.disabled` | none |
| `aria-invalid` + not focus | unchanged | unchanged | unchanged | 1px solid `outlineColor.negative-bold` |
| `data-valid` + not focus | unchanged | unchanged | unchanged | 1px solid `outlineColor.positive-bold` |

> ⚠️ styles.js uses `borderColor.default` (zinc-200, `#e4e4e7`) for the base container border. Figma specifies `color/border/bold` (zinc-300, `#d4d4d8`) — one tone darker. See Gaps.

**Leading tab / trailing tab (Popover sub-component in Figma):**

| State | Background | Text | Border |
|---|---|---|---|
| Default | `color/bg/transparent` | `color/text/subtler` | none |
| Focus | `color/bg/transparent` | `color/text/subtler` | 2px solid `color/outline/focus-ring` |
| Disabled | `color/bg/default` | `color/interactive/text-disabled` | none |

> Tabs are generic ReactNode slots in React (`leadingTab`, `trailingTab`). Their visual styling is the responsibility of the composed component (e.g., a Popover trigger).

---

### Interaction states

| State | What changes | theme() paths |
|---|---|---|
| Default | Baseline: white bg, 1px border, subtler text/placeholder | `backgroundColor.default`, `borderColor.default` ⚠️, `textColor.subtler` |
| Hover | bg → interactive.hover; `.input` color → subtle | `backgroundColor.interactive.hover`, `textColor.subtle` |
| Focus-within | Outline 2px focus-ring on wrapper; bg stays default; inherited color → subtle; leading/trailing → subtle | `outlineColor.focus-ring`, `backgroundColor.default`, `textColor.subtle` |
| Disabled | cursor not-allowed; border → interactive.disabled; all text → interactive.disabled; icon → icon.disabled; separator → interactive.disabled color | `borderColor.interactive.disabled`, `textColor.interactive.disabled`, `colors.icon.disabled` |
| `aria-invalid="true"` (not focused) | Outline 1px negative-bold on wrapper | `outlineColor.negative-bold` |
| `data-valid="true"` (not focused) | Outline 1px positive-bold on wrapper | `outlineColor.positive-bold` |
| Focus-within takes priority | Focus outline overrides validation outline when focused | — |

**Figma state–text color matrix (for slot content):**

| State | `validationState` | Placeholder | Value | Leading | Trailing |
|---|---|---|---|---|---|
| Placeholder | None | `textColor.subtler` | — | `textColor.subtler` | `textColor.subtler` |
| Active | None | — | `textColor.subtle` | `textColor.subtler` | `textColor.subtler` |
| Hover | None | — | `textColor.subtle` | `textColor.subtler` | `textColor.subtler` |
| Focus | None | — | `textColor.subtle` | `textColor.subtle` | `textColor.subtle` |
| Active | Positive | — | `textColor.subtle` | `textColor.subtle` | `textColor.subtle` |
| Active | Negative | — | `textColor.subtle` | `textColor.subtle` | `textColor.subtle` |
| Any | Disabled | — | `textColor.interactive.disabled` | `textColor.interactive.disabled` | `textColor.interactive.disabled` |

**Helper text color per validation state:**

| `validationState` | Helper text color |
|---|---|
| None (Active / Hover / Focus) | `textColor.subtle` |
| Negative | `textColor.negative` |
| Positive | `textColor.positive` |
| Disabled | `textColor.interactive.disabled` |

---

### Slots

| Slot | Figma prop | React prop | Content | Constraints |
|---|---|---|---|---|
| Label | `label` (FormGroupLabel) | — (consumer-rendered) | Label text string | `content/caption-strong` (xs, medium, leading-2); color: `textColor.subtle` |
| Mandatory marker | `variant: Mandatory` (FormGroupLabel) | — (consumer-rendered) | "(mandatory)" text + asterisk | asterisk color: `textColor.negative` |
| Tooltip | `showTooltip` (FormGroupLabel) | — (consumer-rendered) | Info icon | 12px icon |
| Leading tab | `showLeadingTab` | `leadingTab: ReactNode` | Dropdown trigger (e.g., country selector) | Generic slot; separator auto-inserted after if present |
| Leading icon | `showLeadingIcon`, `leadingIcon` | `leadingIcon: ReactNode` | 16px icon | Forced to 1rem via `.input-leading-icon`; color: `colors.icon.subtle` (default), `colors.icon.disabled` (disabled) |
| Leading text | `showLeading`, `leading` | `leading: string` | Prefix string (e.g., "+1") | Inherits container color; `textContentStyles` applied |
| Input value | `value`, `placeholder` | native `value` / `placeholder` | Text input | Full-width (`flex: 1`); value: `textColor.subtle`; placeholder: `textColor.subtler` |
| Clear button | _(Focus state only)_ | — (not implemented) | Icon / Clear (✕, 16px) | Figma-only; appears in Focus state; no React equivalent — see Gaps |
| Trailing text | `showTrailing`, `trailing` | `trailing: string` | Suffix string (e.g., "USD") | `margin-left: auto`; inherits container color |
| Trailing tab | `showTrailingTab` | `trailingTab: ReactNode` | Dropdown trigger (e.g., currency selector) | Generic slot; separator auto-inserted before if present |
| Helper text | `showHelperText`, `helperText` | — (consumer-rendered) | Hint / error / success message | `content/caption` (xs, normal, leading-2); color varies by validation state |

---

## react-design-context

### Component metadata

- **File:** `lib/components/input/index.tsx`
- **Styles:** `lib/components/input/styles.js`
- **Import:** `import { Input, InputRoot, InputSearch } from 'lib/components/input'`
- **Exports:** `Input`, `InputRoot`, `InputSearch` (named); also `InputProps`, `InputSearchProps` (interfaces)
- **Ref:**
  - `InputRoot` → forwarded to `HTMLDivElement`
  - `Input` → forwarded to `HTMLInputElement`
  - `InputSearch` → forwarded to `HTMLInputElement`
- **Dependencies:** `Separator` (`../Separator`), `LinkButton` (`../LinkButton`), `@radix-ui/react-slot`

---

### CSS class architecture

This component does **not** use CVA. Classes are applied directly.

| CSS class | Applied by | styles.js lines | Role |
|---|---|---|---|
| `.input-container-wrapper` | `InputRoot`, `InputSearch` (outer div) | 3–26 | Outer shell; handles focus-ring outline, validation outlines, disabled cursor |
| `.disabled` | Modifier on `.input-container-wrapper` when `disabled=true` | 19–21 | Signals disabled; suppresses focus/validation styles |
| `.input-container` | `Input` (inner div), `InputSearch` (inner div) | 28–65 | Border, bg, overflow clip, hover/disabled colors |
| `.input-wrapper` | `Input` inner div, `InputSearch` inner div | 92–102 | Flex row holding icon + leading + input + trailing; min-height, padding, gap |
| `.input` | `<input>` element | 103–143 | Native input; text color, placeholder, autofill override, search cancel button |
| `.input-leading-icon` | Wrapper div around `leadingIcon` | 72–87 | Centers icon; forces 16px size; sets `colors.icon.subtle` color |
| `.input-leading` | `<span>` around `leading` prop | 67–71 | Inherits container color; `textContentStyles` |
| `.input-trailing` | `<span>` around `trailing` prop | 67–71, 88–90 | Inherits container color; `margin-left: auto`; `textContentStyles` |

---

### Component split — which props go where

> ⚠️ **Critical usage note:** `InputRoot` and `Input` are two separate components with distinct prop sets. All slot props (`leadingTab`, `trailingTab`, `leadingIcon`, `leading`, `trailing`) belong on **`Input`**, not on `InputRoot`. Passing them to `InputRoot` silently drops them — they spread into `...props` as unknown HTML attributes and never render.

**Correct pattern:**
```tsx
<InputRoot>                        {/* handles focus ring, validation outline, disabled cursor */}
  <Input
    leadingTab={<MyTab />}         {/* ✓ slot props on Input */}
    leadingIcon={<MyIcon />}
    trailing="USD"
    trailingTab={<MyTrailingTab />}
    placeholder="Enter value"
    value={value}
    onChange={...}
  />
</InputRoot>
```

**Wrong pattern (tabs will not render):**
```tsx
<InputRoot leadingTab={<MyTab />}> {/* ✗ InputRoot has no leadingTab prop */}
  <Input />
</InputRoot>
```

---

### Prop mapping

| Figma variant / prop | React prop | Component | Type | Default | Notes |
|---|---|---|---|---|---|
| `state: Placeholder` | _(no prop)_ | — | — | — | CSS `:placeholder-shown` / default; no React prop |
| `state: Hover` | _(no prop)_ | — | — | — | CSS `:hover:not(.disabled)` |
| `state: Focus` | _(no prop)_ | — | — | — | CSS `:focus-within:not(.disabled)` on wrapper |
| `state: Active` | _(no prop)_ | — | — | — | Represented by having a value; no React prop |
| `validationState: Negative` | `aria-invalid="true"` | `InputRoot` | `React.AriaAttributes['aria-invalid']` | — | Triggers `outlineColor.negative-bold` outline |
| `validationState: Positive` | `isValid={true}` → `data-valid="true"` | `InputRoot` | `boolean \| undefined` | `undefined` | Triggers `outlineColor.positive-bold` outline |
| `validationState: None` | _(default — neither attr set)_ | — | — | — | |
| `isDisabled` | `disabled` | `InputRoot` + `Input` | `boolean` | `false` | Pass on both; `InputRoot` adds `.disabled` class for cursor; `Input` disables the native `<input>` |
| `showLeadingTab` | `leadingTab` present | **`Input`** ⚠️ | `ReactNode \| undefined` | `undefined` | Tab renders if prop is truthy; Separator auto-inserted after |
| `showTrailingTab` | `trailingTab` present | **`Input`** ⚠️ | `ReactNode \| undefined` | `undefined` | Tab renders if prop is truthy; Separator auto-inserted before |
| `showLeadingIcon` | `leadingIcon` present | **`Input`** ⚠️ | `ReactNode \| undefined` | `undefined` | Icon renders if prop is truthy |
| `showLeading` | `leading` present | **`Input`** ⚠️ | `string \| undefined` | `undefined` | Text renders if prop is truthy |
| `showTrailing` | `trailing` present | **`Input`** ⚠️ | `string \| undefined` | `undefined` | Text renders if prop is truthy |
| `placeholder` | `placeholder` | `Input` | `string` | — | Native HTML attribute on `<input>` |
| `value` | `value` | `Input` | `string` | — | Native HTML attribute on `<input>` |

---

### Behavior-only props (no Figma equivalent)

| Prop | Component | Type | Notes |
|---|---|---|---|
| `asChild` | `InputRoot` | `boolean` | Radix UI Slot pattern; renders as child element instead of `<div>` |
| `className` | All | `string` | Merged at root element |
| `ref` | All | forwarded | To `HTMLDivElement` (InputRoot) or `HTMLInputElement` (Input, InputSearch) |
| `isLoading` | `InputSearch` | `boolean` | Passes to internal `LinkButton`; no Figma equivalent |
| `onChange`, `onBlur`, `onFocus` | `Input`, `InputSearch` | event handlers | Native HTML attributes via `...props` spread |
| `type` | `Input` | `string` | No default set — browsers default to `text`; `InputSearch` hardcodes `type="search"` |
| `name`, `id`, `autoComplete`, `readOnly` | `Input`, `InputSearch` | native attrs | Via `...props` spread |
| `aria-label`, `aria-describedby`, `aria-invalid` | All | ARIA attrs | `aria-invalid` on `InputRoot` drives negative validation outline |

---

### Shared helpers used in styles.js

| Helper | What it does | Received from lib/styles.js |
|---|---|---|
| `transitionColorsStyles(theme)` | Smooth transitions on `color`, `background-color`, `border-color`, `outline-color` | Yes — applied to `.input-container-wrapper`, `.input-container`, `.input-leading`, `.input-trailing`, `.input-leading-icon`, `.input-wrapper`, `.input` |
| `textContentStyles(theme)` | Sets `fontFamily.body`, `fontSize.sm` (14px), `fontWeight` medium (500), `lineHeight.4` (20px) | Yes — applied to `.input-leading`, `.input-trailing`, `.input` |

---

### Gaps

**Figma tokens not in token map:**

- `color/border/negative-bold` — Used in Figma as a 1px border on the outer wrapper for `validationState: Negative`. Not listed in token-map.md as a Figma foundation token (`borderColor.negative-bold` exists as a Tailwind-only path). styles.js uses `outlineColor.negative-bold` instead — same resolved value, different CSS property and theme namespace.
- `color/border/positive-bold` — Same situation as above for `validationState: Positive`.
- `color/bg/transparent` — Referenced in Figma for leading/trailing tab backgrounds (`rgba(255,255,255,0)`). Token map notes this only exists in the Claude Foundation library, not this Foundation file.
- `spacing/1-5` (6px) — Used in Figma for the vertical gap between the label, input wrapper, and helper text layers. Not listed in token-map.md spacing table. Resolves to Tailwind `gap-1.5`.
- `spacing/0-5` (2px) — Used in Figma for helper text icon vertical padding (`py-[var(--spacing/0-5,2px)]`). Not listed in token-map.md. Resolves to Tailwind `py-0.5`.

**Figma variants not in React:**

- `state: Placeholder | Active | Hover | Focus` — React has no `state` prop; driven entirely by CSS pseudo-classes and native browser state.
- `validationState: None | Positive | Negative` — React uses `aria-invalid="true"` (negative) and `isValid={true}` / `data-valid="true"` (positive) on `InputRoot`, not a `validationState` prop.
- `isDisabled` — Maps to native `disabled` HTML attribute; React adds a `.disabled` CSS class.
- `showHelperText` / `showLeading` / `showLeadingIcon` / `showLeadingTab` / `showTrailing` / `showTrailingTab` — Figma uses explicit boolean toggles. React renders slots only when the corresponding prop is truthy (prop-presence pattern, no booleans).
- `FormGroupLabel` (label text, "(mandatory)" text, required asterisk, info tooltip) — Figma composes this automatically above every Input. React does not; consumers must render a label element themselves.

**React props not in Figma:**

- `InputSearch` component — search-specific variant with built-in search icon, `type="search"`, and a `LinkButton` trigger. No Figma equivalent for this sub-type.
- `InputRoot.asChild` — Radix UI Slot pattern; no Figma representation.
- `InputRoot.isValid` — drives `data-valid` attribute for positive validation.
- `InputSearch.isLoading` — controls `LinkButton` loading state; no Figma equivalent.
- All native HTML input attributes (`name`, `autoComplete`, `readOnly`, etc.).

**theme() paths with no Figma token:**

- `outlineColor.negative-bold` — token-map.md confirms no Figma foundation token. Nearest Figma concept is `color/border/negative-bold` (rendered as a border, not outline). Resolved value is identical (`#dc2626`).
- `outlineColor.positive-bold` — same as above. Nearest Figma concept is `color/border/positive-bold`. Resolved value: `#16a34a`.
- `fontSize.base` — used in `.input-leading-icon` to size SVG / MUI icons (16px = 1rem). No Figma variable; code-only.

**Visual spec mismatches:**

- **Base container border color**: ~~styles.js uses `theme('borderColor.default')` → zinc-200 (`#e4e4e7`). Figma consistently uses `color/border/bold` → `borderColor.bold` → zinc-300 (`#d4d4d8`) for both default and hover states.~~ **Fixed** — styles.js now uses `theme('borderColor.bold')` (`#d4d4d8`) to match Figma.
- **Validation state border vs outline**: Figma renders `validationState: Negative/Positive` as a 1px **border** on a wrapping `<div>`. React implements this as a 1px **outline** on `.input-container-wrapper`. CSS `outline` doesn't affect layout; `border` does. Visually similar but structurally different.
- **Clear button missing**: Figma shows an "Icon / Clear" (✕, 16px) inside the input area in the `state: Focus` variant, positioned between the value text and trailing text. React does not implement this icon or its click-to-clear behavior.
- **`borderColor.bold` not used in hover**: Figma shows the container border remaining `color/border/bold` on hover (background changes, border stays). React styles do not explicitly re-assert a border on hover, so the border stays at whatever the base `borderColor.default` is — still mismatched from Figma's `borderColor.bold`.
