# Separator Design Map

## figma-design-context

### Component info

| | |
|---|---|
| **Name** | Separator |
| **Figma node URL** | https://www.figma.com/design/eKAqJtRHEFoa6FOPw3xzCw/Components?node-id=549-292 |
| **Last scanned** | 2026-05-12 |
| **Documentation** | https://66fa495fae52482a39d36cea-atmssndpfo.chromatic.com/?path=/docs/design-system-components-separator--docs |
| **Category** | Layout (visual divider — 1px line) |

> Per the Figma description: "The Separator component is a thin line used to divide content or sections, improving layout organization and readability. It visually separates elements without drawing too much attention, making it ideal for form sections, lists, or menus."

---

### Variants

Sourced from the `SeparatorProps` type signature in the `get_design_context` response (Figma codegen). Code Connect itself was unavailable (see Gap #1).

| Property | Values | Default |
|---|---|---|
| `orientation` | `Horizontal` \| `Vertical` | `Vertical` _(Figma — but React defaults to `horizontal`; see Gap #2)_ |

> Case-insensitive — Figma `Horizontal` maps to React `horizontal`.

---

### Design tokens used

Sourced from `lib/design-system/token-map.md`. The only variable Figma reports for this node:

| Figma token | Tailwind path | Used for |
|---|---|---|
| `color/border/default` | `borderColor.default` (`#e4e4e7`) | _(this is what Figma references — but the React implementation uses a different Tailwind path; see Gap #3)_ |

#### Tailwind paths used by code

| Tailwind path | Resolved value | Used for |
|---|---|---|
| `backgroundColor.separator` | `#e4e4e7` (zinc-200) | `.separator` background — same hex as `borderColor.default` but a different code-only path. `token-map.md` §"Tailwind paths with no matching Figma token" lists this as code-only. |

> **Token resolution drift:** The visual output is identical (both paths resolve to `#e4e4e7`), but the **token names** differ. Figma uses a border token; React uses a dedicated `separator` background token. Reconciling would mean either (a) adding `color/bg/separator` to the Figma Foundation file, or (b) switching `.separator` to use `borderColor.default` in styles.js. The existing token-map already calls this out as code-only.

#### Code-only / fixed values

| Value | Used for |
|---|---|
| `1px` | Line thickness — `height` for horizontal, `width` for vertical |
| `mixBlendMode: multiply` | Container compositing — matches Figma's `mix-blend-multiply` on the underlying `<img>` |

#### Figma-only dimensions

The Figma symbols ship with fixed cross-axis sizes that the React component does not enforce:

| Orientation | Figma fixed size | React |
|---|---|---|
| Horizontal | `w-[132px]` (132px) | None — consumer must size via `className` (e.g. `w-32`, `w-full`) |
| Vertical | `h-[64px]` (64px) | None — consumer must size via `className` (e.g. `h-32`) |

See Gap #4.

---

### Visual specs

#### `.separator` (base — both orientations)

| Property | Value |
|---|---|
| display | `flex` |
| background-color | `backgroundColor.separator` (`#e4e4e7`) |
| mix-blend-mode | `multiply` |

#### `.separator-horizontal`

| Property | Value |
|---|---|
| height | `1px` |
| min-height | `1px` |
| _(width)_ | _(not set — flows to parent or `className`)_ |

#### `.separator-vertical`

| Property | Value |
|---|---|
| width | `1px` |
| min-width | `1px` |
| _(height)_ | _(not set — flows to parent or `className`)_ |

---

### Interaction states

None. Separator is a purely visual divider — no hover, focus, active, or disabled states.

---

### Accessibility

| Aspect | Implementation |
|---|---|
| Role | `<div>` (no explicit `role="separator"` — see Gap #5) |
| Keyboard | Not focusable |
| ARIA attributes | None applied automatically. Consumers can pass `role="separator"` + `aria-orientation` via `...props`. |
| Screen reader | Not announced. Decorative by default. |

---

### Slots

None. Separator has no children — it's a single `<div>` rendering the line itself.

---

### Animation & motion

None.

---

### Responsive behavior

None — the component is 1px thick in its line-direction and stretches to fill the other axis as constrained by the parent or consumer-supplied `className`.

---

## react-design-context

### Component metadata

| | |
|---|---|
| **File** | `lib/components/Separator/index.tsx` |
| **Styles** | `lib/components/Separator/styles.js` |
| **Import** | `import { Separator } from '@/components/Separator'` |
| **Storybook story** | `src/components/Separator/Separator.stories.tsx` |
| **Dependencies** | `class-variance-authority` |
| **Ref forwarded** | Yes — `React.forwardRef<HTMLDivElement>` |

---

### Exported API

| Export | Element | Props |
|---|---|---|
| `Separator` | `<div>` | `orientation?: 'horizontal' \| 'vertical'`, plus all `React.HTMLAttributes<HTMLDivElement>` (so `className`, `style`, `role`, `aria-*`, etc. pass through) |

---

### Variant-to-class mapping (CVA)

| Prop | Value | Class | styles.js |
|---|---|---|---|
| `orientation` | `horizontal` (default) | `.separator-horizontal` | lines 11–14 |
| `orientation` | `vertical` | `.separator-vertical` | lines 7–10 |

All variants extend `.separator` (lines 2–6).

---

### Prop mapping

| Figma variant prop | React prop | Type | Default | Notes |
|---|---|---|---|---|
| `orientation` | `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` _(React; Figma defaults to `Vertical` — see Gap #2)_ | Case-insensitive |
| `className` | `className` | `string` | — | Used by consumers to set the cross-axis dimension (`w-32`, `h-32`, `w-full`, etc.) since the component doesn't size itself |

---

### Behavior-only props

Passed through `...props` to the underlying `<div>`:

| Prop | Type | Notes |
|---|---|---|
| `className` | `string` | Merged via CVA |
| `style` | `React.CSSProperties` | Standard |
| `role` | `string` | Consumer can set `role="separator"` |
| `aria-orientation` | `'horizontal' \| 'vertical'` | Consumer can set to mirror the prop |
| `ref` | forwarded to `<div>` | Standard |

---

### Shared helpers used in styles.js

None. `styles.js` is 15 lines of plain CSS-in-JS with no helper imports.

---

### Storybook coverage

`src/components/Separator/Separator.stories.tsx` exports **2 stories**:

| Story | Args |
|---|---|
| `VerticalSeparator` | `orientation: 'vertical'`, `className: 'h-32'` |
| `HorizontalSeparator` | `orientation: 'horizontal'`, `className: 'w-32'` |

Both stories demonstrate the consumer-supplied sizing pattern (the component itself doesn't constrain the long axis — see Gap #4).

---

### Gaps

Mismatches between the Figma node, the React implementation, and adjacent project conventions. Gap #1 is the standardized fallback marker required by the skill when Code Connect is unavailable.

| # | Gap | Figma | React |
|---|---|---|---|
| 1 | **Code Connect API unavailable** — `mcp__figma__get_context_for_code_connect` returned 403 / Developer-seat-required. The Variants section was derived from the React source + the `SeparatorProps` type signature returned by `get_design_context` (rich codegen response) + `get_variable_defs` rather than the full Figma variant tree. Re-scan with a Developer seat to replace any rows marked `_(inferred)_`. | — | — |
| 2 | **Default value mismatch — `orientation`** | Figma's `SeparatorProps` declares `orientation = "Vertical"` as the default | React's CVA `defaultVariants` and the destructured default both set `orientation = 'horizontal'`. `<Separator />` with no props produces a horizontal line in code, vertical in Figma. Same pattern as ResourceIcon (Gap #6 there). |
| 3 | **Token path drift** | Figma references `color/border/default` (border token) | React uses `backgroundColor.separator` (a code-only Tailwind path). Both resolve to `#e4e4e7`, but the token names diverge. `token-map.md` §"Tailwind paths with no matching Figma token" already lists `backgroundColor.separator` as code-only. Either add `color/bg/separator` to Figma Foundation, or switch `.separator` to read `borderColor.default`. |
| 4 | **Figma fixes cross-axis sizes; React doesn't** | `w-[132px]` for horizontal, `h-[64px]` for vertical — Figma renders separators at fixed cross-axis dimensions | React only sets the 1px line-direction. Consumer **must** supply the cross-axis via `className` (`w-32`, `h-full`, etc.) or the separator collapses to 0. Storybook stories use `h-32` / `w-32` to demonstrate. This is a more flexible API but the contract isn't documented anywhere except the story examples. |
| 5 | **No `role="separator"` or `aria-orientation`** | n/a | The component renders a `<div>` with no ARIA role. Screen readers ignore it entirely. Best practice for non-decorative dividers is `role="separator" aria-orientation="vertical\|horizontal"`. Either set these automatically based on the `orientation` prop, or document the consumer's responsibility. |
| 6 | **Figma uses `<img>` assets for the line** | The Figma symbols render the 1px line as an `<img>` with `mix-blend-multiply` and inset positioning | React renders a CSS background-color div. Visually identical but the Figma assets are an unusual choice for a 1px line — likely a Figma-export artifact. No action needed on the React side. |
| 7 | **`mixBlendMode: multiply` on the line** | Figma applies `mix-blend-multiply` on the line `<img>` | styles.js applies `mixBlendMode: 'multiply'` on `.separator` | ✓ Consistent — but worth flagging because a Separator over a non-white surface will blend the line into the underlying color, possibly producing a darker or less-visible result than expected. |
| 8 | **Only one Figma variable returned** | `get_variable_defs` for this node returned a single token (`color/border/default`) | The React side uses one Tailwind path (`backgroundColor.separator`). Coverage is consistent — the simplicity is real, not a sampling issue. |

---

> **Generated by** `component-context-generator` skill (patched 2026-05-12 with Code Connect 403 fallback) against Figma node `549-292` of file `eKAqJtRHEFoa6FOPw3xzCw`. Cross-referenced with `lib/design-system/token-map.md` and `src/components/Separator/Separator.stories.tsx`.
