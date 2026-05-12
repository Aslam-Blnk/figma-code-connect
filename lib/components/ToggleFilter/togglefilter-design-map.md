# ToggleFilter Design Map

## figma-design-context

### Component info

| | |
|---|---|
| **Name** | Toggle Filter |
| **Figma node URL** | https://www.figma.com/design/eKAqJtRHEFoa6FOPw3xzCw/Components?node-id=1859-30437 |
| **Last scanned** | 2026-05-12 |
| **Category** | Actions (toggle button — filter affordance) |

> Per the Figma description: "The Toggle Filter component provides a set of mutually exclusive filter buttons for switching between predefined views or categories. Use it above lists or tables to let users quickly switch between filter presets such as All, Active, or Archived."
>
> **Note on "mutually exclusive":** Figma describes ToggleFilter as a *set* of buttons with mutual-exclusion semantics, but the React component is a **single button** with no awareness of siblings. Selection / radio-group behavior is the consumer's responsibility — see Gap #4.

---

### Variants

Sourced from the `ToggleFilterProps` type signature in the `get_design_context` response (Figma codegen). Code Connect itself was unavailable (see Gap #1).

| Property | Values | Default |
|---|---|---|
| `state` | `Default` \| `Hover` \| `Focus` | `Default` |
| `isFilled` | `true` \| `false` | `false` |
| `showIcon` | `true` \| `false` _(slot toggle)_ | `true` |
| `icon` | `React.ReactNode \| null` _(slot)_ | `null` |
| `label` | `string` _(slot)_ | `"{label}"` |

> Case-insensitive — Figma `Hover` maps to React `:hover`, etc.

#### Full Figma matrix (6 combinations enumerated in codegen)

| state | isFilled | Background | Border |
|---|---|---|---|
| Default | false | `color/bg/default` (white) | `1px solid color/border/default` |
| Default | true | `color/interactive/bg-activated` (`#f2f4fc`) | _(none — `borderColor: transparent`)_ |
| Hover | false | `color/interactive/bg-hover` (`#f4f4f5`) | `1px solid color/border/default` |
| Hover | true | `color/interactive/bg-hover` (`#f4f4f5`) — overrides `activated` | _(transparent — inherits filled rules)_ |
| Focus | false | `color/bg/default` (white) | `2px solid color/outline/focus-ring` _(replaces the 1px default border)_ |
| Focus | true | `color/bg/default` (white) — **overrides** `activated` | `2px solid color/outline/focus-ring` |

> Two important state interactions worth highlighting: (a) Hover **wins over** filled's activated background (both Figma and React converge on `interactive.bg-hover`). (b) Focus **resets** the background to white in Figma — but the React implementation keeps the filled `bg-activated` when filled + focused (see Gap #5).

---

### Design tokens used

Sourced from `lib/design-system/token-map.md`. Cross-referenced with `get_variable_defs` for this node.

#### Default state (`isFilled = false`)

| Figma token | Tailwind path | Used for |
|---|---|---|
| `color/bg/default` | `backgroundColor.default` (`#FFFFFF`) | `.toggle-filter-root` background |
| `color/border/default` | `borderColor.default` (`#e4e4e7`) | `1px` border |
| `color/text/subtler` | `textColor.subtler` (`#71717a`) | Label color |
| `icon/color/subtle` | `colors.icon.subtle` (`#71717a`) | Leading icon color |

#### Filled state (`isFilled = true` — applies `.is-filled`)

| Figma token | Tailwind path | Used for |
|---|---|---|
| `color/interactive/bg-activated` | `backgroundColor.interactive.activated` (`#F2F4FC`) | `.is-filled` background |
| `color/interactive/text-activated` | `textColor.interactive.activated` (`#4A53C6`) | `.is-filled` label color |
| `icon/color/activated` | `colors.icon.activated` (`#4A53C6`) | `.is-filled` icon color |
| _(none — code-only)_ | `borderColor: transparent` | `.is-filled` border (border-width stays 1px so the layout reserved space is consistent) |

#### Hover state

| Figma token | Tailwind path | Used for |
|---|---|---|
| `color/interactive/bg-hover` | `backgroundColor.interactive.hover` (`#f4f4f5`) | `:hover` and `:active` background — overrides both default and `.is-filled` (CSS source order: `:hover` rule is later than `.is-filled` rule, same specificity) |

#### Focus

| Figma token | Tailwind path | Used for |
|---|---|---|
| `color/outline/focus-ring` | `outlineColor.focus-ring` (`#60a5fa`) | `:focus-visible` outline (`2px solid`) |
| `border/2` | `2px` | Figma uses a `2px` **border** to render focus (consumes 1px of layout); React uses `2px outline` (no layout shift) — see Gap #6 |

#### Composite typography + geometry

| Figma token | Tailwind utility | Used for |
|---|---|---|
| `content/text` | utility `text-content` (via `textContentStyles(theme)`) | Label — Inter / 14px / 500 / 20px lh |
| `spacing/2-5` | `0.625rem` (`10px`) | `.toggle-filter-root` horizontal padding (`px-2.5`) |
| `spacing/2` | `0.5rem` (`8px`) | `.toggle-filter-root` gap between icon and label |
| `spacing/xs` _(see Gap #3)_ | `spacing/xs` is **not** in `token-map.md` — only `width/xs` exists | Figma outer wrapper uses `gap-[var(--spacing/xs,0px)]` with a fallback of `0px`. Figma's variable resolves to `8` (= `spacing/2`). React uses `0.5rem` (8px) via `gap: '0.5rem'`. Should be `spacing/2`. |
| `rounded/xl` | `rounded-xl` (`0.75rem`, `12px`) | `.toggle-filter-root` border-radius |
| `border/1` | `1px` | `.toggle-filter-root` border width |
| `icon/size/sm` | `1rem` (`16px`) | Icon size (`& svg, & .mui-icon { height/width: 1rem }`, `fontSize: theme('fontSize.base')`) |

---

### Visual specs

#### `.toggle-filter-root` (base)

| Property | Value |
|---|---|
| display | `flex` row, items center |
| height / min-height | `2.25rem` (36px) |
| gap | `0.5rem` (8px) |
| padding | `0 0.625rem` (0 10px) |
| border-radius | `0.75rem` (12px) |
| border | `1px solid borderColor.default` |
| background | `backgroundColor.default` (`#FFFFFF`) |
| color | `textColor.subtler` (`#71717a`) |
| outline (default) | `2px solid transparent`, offset `2px` _(layout reservation for focus)_ |
| transition | `transitionColorsStyles(theme)` (bg / border / text / shadow) |
| typography | `textContentStyles(theme)` — Inter / 14px / 500 / 20px lh |
| inner icon size | `1rem` × `1rem` (16px); `fontSize: theme('fontSize.base')` |

#### `.toggle-filter-root.is-filled`

| Property | Value |
|---|---|
| color | `textColor.interactive.activated` (`#4A53C6`) |
| background | `backgroundColor.interactive.activated` (`#F2F4FC`) |
| border-color | `transparent` _(border-width stays 1px)_ |
| icon color | `colors.icon.activated` (`#4A53C6`) |

#### `.toggle-filter-root:hover` / `:active`

| Property | Value |
|---|---|
| background | `backgroundColor.interactive.hover` (`#f4f4f5`) — overrides both default and `.is-filled` bg |

#### `.toggle-filter-root:focus-visible`

| Property | Value |
|---|---|
| outline | `2px solid outlineColor.focus-ring` (`#60a5fa`), offset `0` |
| _(does **not** change background — see Gap #5)_ | — |

---

### Interaction states

| State | Visual changes | theme() path |
|---|---|---|
| Default (`isFilled=false`) | Baseline: white bg, 1px default border, subtler text + icon | — |
| Default (`isFilled=true`) | bg → `bg-activated`, text + icon → `activated`, border → transparent | `backgroundColor.interactive.activated`, `textColor.interactive.activated`, `colors.icon.activated` |
| Hover (any `isFilled`) | bg → `bg-hover` (overrides activated when filled) | `backgroundColor.interactive.hover` |
| Active / Pressed | Same as hover (explicit `:active` rule in styles.js line 37–39) | `backgroundColor.interactive.hover` |
| Focus-visible | `outline: 2px solid focus-ring`, offset `0` | `outlineColor.focus-ring` |
| Disabled | _(not implemented in code or Figma — see Gap #7)_ | — |
| Loading | _(not implemented — see Gap #7)_ | — |

---

### Accessibility

| Aspect | Implementation |
|---|---|
| Role | Native `<button type="button">`. |
| Keyboard | Native button focusability. Space/Enter activates click handler. |
| ARIA attributes | None applied automatically. **No `aria-pressed`** for the toggle state — screen readers can't tell whether the filter is active (see Gap #8). |
| Focus management | `:focus-visible` only — no flash on mouse click. Focus outline is `2px solid` blue. |
| Screen reader | Reads label content. Filled vs. unfilled is visually-only — no SR cue. |

---

### Slots

| Figma slot | Figma prop / toggle | React equivalent | Description |
|---|---|---|---|
| Label | `label: string` | `children` (text node) | The filter's text label |
| Leading icon | `icon: React.ReactNode \| null` (visible when `showIcon = true`) | First child before label | No discrete `icon` prop — pass an icon (e.g. `<span class="mui-icon">…</span>`) as the first child. No `showIcon` toggle either; consumer just omits the icon. |

---

### Animation & motion

| Transition | Property | Source |
|---|---|---|
| Color | bg, border, text, shadow | `transitionColorsStyles(theme)` on `.toggle-filter-root` |

---

### Responsive behavior

None. Intrinsic-sized (height fixed at 36px, width hugs content).

---

## react-design-context

### Component metadata

| | |
|---|---|
| **File** | `lib/components/ToggleFilter/index.tsx` |
| **Styles** | `lib/components/ToggleFilter/styles.js` |
| **Import** | `import { ToggleFilter } from '@/components/ToggleFilter'` |
| **Storybook story** | `src/components/ToggleFilter/ToggleFilter.stories.tsx` |
| **Dependencies** | None (no CVA, no Spinner, no Slot) |
| **Ref forwarded** | Yes — `React.forwardRef<HTMLButtonElement>` |

---

### Exported API

| Export | Element | Props |
|---|---|---|
| `ToggleFilter` | `<button type="button">` | `isFilled?: boolean`, plus all `React.HTMLAttributes<HTMLButtonElement>` (so `className`, `style`, `onClick`, `aria-*`, `data-*` pass through) |

---

### Variant-to-class mapping (no CVA)

ToggleFilter does **not** use CVA. Classes are static + a single conditional `.is-filled`:

| Logical state | Class | styles.js |
|---|---|---|
| Base | `.toggle-filter-root` | lines 2–44 (default styles + nested state selectors) |
| Filled | `.is-filled` | lines 26–30 (text + bg + border-color), lines 31–33 (icon color) |
| Hover / Active | `:hover`, `:active` | lines 34–39 |
| Focus-visible | `:focus-visible` | lines 40–43 |

The component file is **22 lines total** — among the smallest in the design system. There's no CVA helper because the prop space is just one boolean.

---

### Prop mapping

| Figma variant prop | React prop | Type | Default | Notes |
|---|---|---|---|---|
| `isFilled` | `isFilled` | `boolean` | `false` | Adds `.is-filled` class |
| `state: Hover` | _(CSS `:hover`)_ | — | — | No React prop — handled by CSS |
| `state: Focus` | _(CSS `:focus-visible`)_ | — | — | No React prop — handled by CSS |
| `showIcon` | _(via children composition)_ | — | — | No React prop — omit the icon child to hide it |
| `icon` | _(via children composition)_ | — | — | Pass icon as first child before label |
| `label` | _(via children composition)_ | — | — | Pass label as text child |

---

### Behavior-only props

Passed via `...props`:

| Prop | Type | Notes |
|---|---|---|
| `className` | `string` | Merged via `cn()` after the base + `.is-filled` |
| `onClick` | `React.MouseEventHandler` | Standard — consumer wires selection logic |
| `aria-pressed` | `boolean` | Consumer can (and should) set this to `isFilled` for accessibility (see Gap #8) |
| `aria-label` | `string` | Recommended if the visible label is icon-only |
| `ref` | forwarded to `<button>` | Standard |
| `type` | always `"button"` _(hardcoded)_ | Component sets `type="button"` explicitly — prevents accidental form submission |

---

### Shared helpers used in styles.js

| Helper | Source | Used in |
|---|---|---|
| `theme(...)` | Tailwind plugin context | Token reads |
| `transitionColorsStyles(theme)` | Tailwind plugin util | `.toggle-filter-root` — smooth color transitions on hover / active / focus |
| `textContentStyles(theme)` | Tailwind plugin util | `.toggle-filter-root` — applies the `text-content` composite (Inter / 14px / 500 / 20px lh) |

---

### Storybook coverage

`src/components/ToggleFilter/ToggleFilter.stories.tsx` exports **2 stories**:

| Story | Args |
|---|---|
| `DefaultToggleFilter` | `isFilled: false`, children = `<><span class="mui-icon">filter_list</span> Label</>` |
| `FilledToggleFilter` | `isFilled: true`, children = same |

Both stories use the `filter_list` Material Symbol as the leading icon. **Coverage is shallow:** no story exercises a no-icon case, a label-only case, an icon-only case, or a real toggle group. The Figma description's "mutually exclusive set" mode is entirely undemonstrated.

---

### Gaps

Mismatches between the Figma node, the React implementation, and adjacent project conventions. Gap #1 is the standardized fallback marker required by the skill when Code Connect is unavailable.

| # | Gap | Figma | React |
|---|---|---|---|
| 1 | **Code Connect API unavailable** — `mcp__figma__get_context_for_code_connect` returned 403 / Developer-seat-required. The Variants section was derived from the React source + the `ToggleFilterProps` type signature returned by `get_design_context` (rich codegen response) + `get_variable_defs` rather than the full Figma variant tree. Re-scan with a Developer seat to replace any rows marked `_(inferred)_`. | — | — |
| 2 | **No documentation URL in the Figma codegen** | Other recently-scanned components (Badge, LinkButton, ResourceIcon, Separator) included a Chromatic docs URL in the codegen response | None returned for ToggleFilter. Either the Figma component doesn't have a `Documentation` field set, or the linked Chromatic page hasn't been published. Worth setting one — the rest of the system has them. |
| 3 | **`spacing/xs` token typo in Figma** | Figma codegen uses `gap-[var(--spacing/xs,0px)]` on the outer wrapper; `get_variable_defs` returns `spacing/xs = 8` | `spacing/xs` is **not** a Foundation token (`token-map.md` lists only `width/xs`). The numeric value `8` matches `spacing/2`. Same typo as ResourceIcon's Indigo Large variant (Gap #10 there). Either rename Figma references to `spacing/2`, or add `spacing/xs` as an alias in Foundation. |
| 4 | **"Mutually exclusive set" semantics not encoded** | Figma description: "set of mutually exclusive filter buttons" | React is a single `<button>` with no awareness of siblings. There is no `ToggleFilterGroup` wrapper component, no shared selection state, no `role="radio"` / `role="radiogroup"`. Consumer must implement group behavior + ARIA themselves. Consider adding a `ToggleFilterGroup` to the lib. |
| 5 | **Filled + Focus bg drift** | Figma `Focus + isFilled=true`: background switches to `color/bg/default` (white) — overriding `bg-activated` | React's `:focus-visible` rule only sets outline, not background. When a filled ToggleFilter is focused, React keeps the `bg-activated` (#f2f4fc), but Figma shows white. Visual divergence on the most common interactive state. |
| 6 | **Focus indicator: Figma uses `border`, React uses `outline`** | Figma applies `border-2 border-focus-ring` in the focus state — replaces the 1px default border, consumes layout space | styles.js applies `outline: 2px solid focus-ring` — preserves the existing border and adds a non-layout-consuming outline. React's choice is correct (no jitter); flag for Figma to align. Same pattern as LinkButton Gap #9. |
| 7 | **No Disabled or Loading state** | Figma's `state` enum is `Default \| Hover \| Focus` only | styles.js has no `:disabled` rule and no `.loading` class. Unusual for a button — Button, LinkButton, and Input all have both. If the consumer disables the button (`<ToggleFilter disabled>`), there is no visual feedback. |
| 8 | **No `aria-pressed`** | n/a | The component renders `<button>` but never sets `aria-pressed={isFilled}`. Toggle buttons should communicate state to screen readers via `aria-pressed`. The component should set it automatically based on the `isFilled` prop, not rely on consumers to remember. |
| 9 | **`showIcon` Figma prop has no React counterpart** | Boolean toggle to hide / show the leading icon | Composed via children — the consumer omits the icon. Same pattern as `leadingIcon` on LinkButton. Flagged for documentation; not a bug. |
| 10 | **`.is-filled` border becomes transparent but still 1px wide** | Figma `isFilled = true` has no border drawn | styles.js sets `borderColor: 'transparent'` instead of `borderWidth: 0`. The 1px is reserved in the layout, so the filled button is **the same total size** as the unfilled one. ✓ Correct intent (no jitter when toggling), but worth flagging because it looks like a bug at a glance. |
| 11 | **`textColor.subtler` and `icon/color/subtle` collide on hex** | Figma reports both as `#71717a` (zinc-500) | `token-map.md` confirms: `textColor.subtler` and `colors.icon.subtle` are intentionally separate tokens that resolve to the same hex. The naming inconsistency (`subtler` vs `subtle`) is a project-wide quirk, not specific to ToggleFilter. |
| 12 | **Storybook coverage is minimal** | 6 Figma states (3 × 2 matrix) | Only 2 React stories — the two `Default` rows of the matrix. Hover / focus / focus-filled aren't exercised. Add stories that hover/focus programmatically, or use Storybook's `parameters.pseudo` plugin if present. |

---

> **Generated by** `component-context-generator` skill (patched 2026-05-12 with Code Connect 403 fallback) against Figma node `1859-30437` of file `eKAqJtRHEFoa6FOPw3xzCw`. Cross-referenced with `lib/design-system/token-map.md` and `src/components/ToggleFilter/ToggleFilter.stories.tsx`.
