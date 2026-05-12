# Card Design Map

## figma-design-context

### Component info

| | |
|---|---|
| **Name** | Card |
| **Figma node URL** | https://www.figma.com/design/eKAqJtRHEFoa6FOPw3xzCw/Components?node-id=1213-64913 |
| **Last scanned** | 2026-05-12 |
| **Category** | Layout / Data display (content container) |

> Per the Figma description: "The Card component is a container used to group related content and actions for a single subject. Use cards to display summaries, resource previews, or grouped information in a scannable layout. Cards support interactive and static variants."

---

### Variants

Sourced from the `CardProps` type signature in the `get_design_context` response (Figma codegen). Code Connect was unavailable (see Gap #1).

| Property | Values | Default |
|---|---|---|
| `variant` | `Default` \| `Decorative` | `Default` |
| `elevation` | `Flat` \| `Raised` \| `Floating` | `Flat` |
| `padding` | `Spacing-3` (12px) \| `Spacing-4` (16px) | `Spacing-4` |
| `slot` | `React.ReactNode \| null` _(slot)_ | `null` |

> Case-insensitive — Figma `Default` maps to React `default`, etc.

#### Full Figma matrix (12 combinations — 2 × 3 × 2)

All 12 `padding × variant × elevation` combinations have explicit symbols in the Figma codegen.

---

### Design tokens used

Sourced from `lib/design-system/token-map.md`. Cross-referenced with `get_variable_defs` for this node.

#### `variant`

| Variant | Background | Tailwind path |
|---|---|---|
| `Default` | `color/bg/default` (`#FFFFFF`) | `backgroundColor.default` |
| `Decorative` | Gradient: `color/accent/bg-gray-light` → `color/accent/bg-gray` | `backgroundColor.accent.gray-light` (`#fafafa`) → `backgroundColor.accent.gray` (`#f4f4f5`) — applied as `linear-gradient(90deg, #FFF 0%, #FAFAFA 100%)` in code (see Gap #4) |

#### `elevation`

| Elevation | Effect | Tailwind path |
|---|---|---|
| `Flat` | `1px solid color/border/default` | `borderColor.default` (`#e4e4e7`) |
| `Raised` | Shadow only (`hardShadows/sm`) — no border | `boxShadow.hard-sm` (code-only — no Figma `boxShadow.*` token; see Gap #5) |
| `Floating` | `1px solid color/border/default` + `softShadows/xs` | `borderColor.default` + `boxShadow.soft-xs` (code-only) |

#### Geometry tokens

| Figma token | Tailwind utility | Used for |
|---|---|---|
| `rounded/2xl` | `1rem` (`16px`) | `.card-root` border-radius |
| `spacing/3` | `0.75rem` (`12px`) | Figma `padding="Spacing-3"` — no React equivalent (Gap #3) |
| `spacing/4` | `1rem` (`16px`) | Figma `padding="Spacing-4"` — no React equivalent (Gap #3) |
| `border/1` | `1px` | Border width for Flat / Floating |

#### Shadow tokens

| Figma effect | Tailwind path | Resolved value |
|---|---|---|
| `softShadows/xs` | `boxShadow.soft-xs` | `0px 2px 4px -1px rgba(16,25,40,0.02), 0px 5px 13px -5px rgba(16,25,40,0.05)` |
| `hardShadows/sm` | `boxShadow.hard-sm` | `0px 2px 5px -2px rgba(16,25,40,0.06), 0px 2px 7px 0px rgba(16,25,40,0.05), 0px 0px 0px 1px rgba(16,25,40,0.05)` |

> Both shadow tokens are code-only in `tailwind.theme.ts` — `token-map.md` §9 confirms "No Figma variables found for shadows".

---

### Visual specs

#### `.card-root` (base — all variants)

| Property | Value |
|---|---|
| display | `flex` column |
| border-radius | `1rem` (16px) |

> The base class is intentionally minimal — variant + elevation classes layer background, border, and shadow on top.

#### `.card-default`

| Property | Value |
|---|---|
| background | `backgroundColor.default` (`#FFFFFF`) |

#### `.card-decorative`

| Property | Value |
|---|---|
| background-image | `linear-gradient(90deg, #FFF 0%, #FAFAFA 100%)` — hardcoded hex values (see Gap #4) |

#### `.card-flat`

| Property | Value |
|---|---|
| border | `1px solid borderColor.default` (`#e4e4e7`) |

#### `.card-raised`

| Property | Value |
|---|---|
| box-shadow | `boxShadow.hard-sm` |
| _(border)_ | _(none — relies on shadow's `0 0 0 1px` halo as a faux-border)_ |

#### `.card-floating`

| Property | Value |
|---|---|
| border | `1px solid borderColor.default` |
| box-shadow | `boxShadow.soft-xs` |

#### Padding (consumer-supplied — see Gap #3)

| Figma `padding` | Resolved value | How it's applied in React |
|---|---|---|
| `Spacing-3` | `0.75rem` (12px) | Consumer adds `className="p-3"` |
| `Spacing-4` | `1rem` (16px) | Consumer adds `className="p-4"` |

---

### Interaction states

Card is a passive container — no hover, focus, active, or disabled states are defined in code or designed in Figma.

| State | Visual changes |
|---|---|
| Default | Baseline per `variant + elevation` combination |
| Hover / Focus / Active | _(none — no selectors)_ |
| Disabled | _(not a concept for Card)_ |

> If the Card is used as an interactive surface (e.g., a clickable summary card), the consumer must add their own hover/focus styling and ARIA semantics. See Gap #7.

---

### Accessibility

| Aspect | Implementation |
|---|---|
| Role | `<div>` (no semantic role). For interactive cards, the consumer should wrap in `<a>` / `<button>` or add `role="button"` + `tabIndex={0}`. |
| Keyboard | Not focusable. |
| ARIA attributes | None applied automatically. |
| Focus management | None. |
| Screen reader | Reads child content directly — Card itself is invisible to SR. |

---

### Slots

| Slot | Figma prop | React equivalent | Description |
|---|---|---|---|
| Content | `slot: ReactNode` | `children` | The single content area. Figma uses a placeholder `.Slot` instance ("Swap me with your custom content"); React uses standard `children`. |

> Card has no header/body/footer subcomponents (compare with shadcn/ui's `CardHeader`, `CardContent`, `CardFooter`). Composition is consumer-driven.

---

### Animation & motion

None.

---

### Responsive behavior

None. Card is a passive container that adapts to its parent and children — no internal media queries.

---

## react-design-context

### Component metadata

| | |
|---|---|
| **File** | `lib/components/Card/index.tsx` |
| **Styles** | `lib/components/Card/styles.js` |
| **Import** | `import { Card } from '@/components/Card'` |
| **Storybook story** | `src/components/Card/Card.stories.tsx` |
| **Dependencies** | `class-variance-authority` |
| **Ref forwarded** | Yes — `React.forwardRef<HTMLDivElement>` |

---

### Exported API

| Export | Element | Notes |
|---|---|---|
| `Card` | `<div>` | Props: `variant?: 'default' \| 'decorative'`, `elevation?: 'flat' \| 'raised' \| 'floating'`, plus all `React.HTMLAttributes<HTMLDivElement>` (so `className`, `style`, `onClick`, `aria-*`, etc. pass through) |

---

### Variant-to-class mapping (CVA)

| Prop | Value | Class | styles.js |
|---|---|---|---|
| `variant` | `default` (default) | `.card-default` | lines 7–9 |
| `variant` | `decorative` | `.card-decorative` | lines 10–12 |
| `elevation` | `flat` (default) | `.card-flat` | lines 13–15 |
| `elevation` | `raised` | `.card-raised` | lines 16–18 |
| `elevation` | `floating` | `.card-floating` | lines 19–22 |

All variants extend `.card-root` (lines 2–6). The two axes compose cleanly (e.g., `decorative` + `raised` works); CVA generates 6 effective React combinations vs. Figma's 12 (the additional axis is `padding` — see Gap #3).

---

### Prop mapping

| Figma variant prop | React prop | Type | Default | Notes |
|---|---|---|---|---|
| `variant` | `variant` | `'default' \| 'decorative'` | `'default'` | Case-insensitive |
| `elevation` | `elevation` | `'flat' \| 'raised' \| 'floating'` | `'flat'` | Case-insensitive |
| `padding` | _(not exposed — consumer uses `className`)_ | — | — | Figma's `Spacing-3` / `Spacing-4` have no React prop; consumer adds `className="p-3"` or `className="p-4"`. See Gap #3. |
| `slot` | `children` | `React.ReactNode` | undefined | Standard React composition |

---

### Behavior-only props

Passed via `...props`:

| Prop | Type | Notes |
|---|---|---|
| `className` | `string` | Merged via `cn()` after CVA output. **Often used to set padding** (see Gap #3) |
| `style` | `React.CSSProperties` | Standard |
| `onClick` | `React.MouseEventHandler` | If used, see Gap #7 about interactive semantics |
| `ref` | `React.Ref<HTMLDivElement>` | Forwarded |

---

### Shared helpers used in styles.js

None. `styles.js` is 23 lines of plain CSS-in-JS with no helper imports.

---

### Storybook coverage

`src/components/Card/Card.stories.tsx` exports **6 stories** — full coverage of the React `variant × elevation` matrix:

| | Flat | Raised | Floating |
|---|---|---|---|
| `default` | `DefaultFlatCard` | `DefaultRaisedCard` | `DefaultFloatingCard` |
| `decorative` | `DecorativeFlatCard` | `DecorativeRaisedCard` | `DecorativeFloatingCard` |

All six stories pass `className="p-4"` (i.e., Figma's `Spacing-4` default). **No story demonstrates the `Spacing-3` padding option** — meaning that half of Figma's 12-variant matrix is invisible in Storybook. See Gap #3.

---

### Gaps

Mismatches between the Figma node, the React implementation, and adjacent project conventions. Gap #1 is the standardized fallback marker required by the skill when Code Connect is unavailable.

| # | Gap | Figma | React |
|---|---|---|---|
| 1 | **Code Connect API unavailable** — `mcp__figma__get_context_for_code_connect` returned 403 / Developer-seat-required. The Variants section was derived from the React source + the `CardProps` type signature returned by `get_design_context` (rich codegen response) + `get_variable_defs` rather than the full Figma variant tree. Re-scan with a Developer seat to replace any rows marked `_(inferred)_`. | — | — |
| 2 | **Variant default mismatch** | Figma's `CardProps` declares `elevation = "Flat"` and `padding = "Spacing-4"` as defaults; `variant = "Default"` | React's CVA defaults match Figma for `variant` and `elevation`. **Padding has no React default** — consumer must always supply one or the card has 0 padding. |
| 3 | **`padding` is a Figma prop with no React counterpart** | Figma's `padding: Spacing-3 \| Spacing-4` controls inner padding (12px or 16px) | React doesn't expose padding as a prop. Consumer uses `className="p-3"` or `className="p-4"`. Storybook only demonstrates `p-4`. Consider adding a `padding?: 'sm' \| 'md'` prop (mapped to `p-3` / `p-4`) for parity. |
| 4 | **Decorative gradient uses hardcoded hex** | Figma builds the gradient from `color/accent/bg-gray-light` (`#fafafa`) → `color/accent/bg-gray` (`#f4f4f5`) | styles.js hardcodes `linear-gradient(90deg, #FFF 0%, #FAFAFA 100%)`. The start color is **white** (not `#fafafa`!), and neither stop reads from `theme(...)`. Two issues: (a) start color drift between Figma and code; (b) no token resolution — changing the foundation tokens won't update the card gradient. |
| 5 | **Shadow tokens are code-only** | Figma references `softShadows/xs` and `hardShadows/sm` as effect tokens | styles.js uses `theme('boxShadow.soft-xs')` and `theme('boxShadow.hard-sm')`. `token-map.md` §9 confirms all 8 shadow tokens are code-only. ✓ matches but worth surfacing — there is no Foundation source of truth for shadows. |
| 6 | **No header/body/footer subcomponents** | Figma has a single `slot` | React also has only `children`. Compared to similar design systems (shadcn `Card.Header` / `.Content` / `.Footer`), this is intentionally minimal. Consumers compose padding + dividers manually. Not necessarily a bug; flagged for awareness. |
| 7 | **No interactive variant** | Figma description mentions "Cards support interactive and static variants" — but the symbol set has no Hover / Focus / Pressed | The React component renders a `<div>` with no focus / hover / cursor styling. If a Card is used as a clickable surface, consumers must (a) wrap in `<button>` or `<a>`, (b) add hover styles via `className`, (c) wire `role`/`tabIndex` themselves. The description hints at functionality that neither side provides. |
| 8 | **`.card-raised` has no visible border but the shadow's `0 0 0 1px` halo acts as one** | n/a | The `hard-sm` shadow includes a `0px 0px 0px 1px rgba(16,25,40,0.05)` ring that simulates a 1px border. This is intentional but a reader scanning `.card-raised` in styles.js (which has no `border` declaration) might mistakenly think it's borderless. |
| 9 | **`color/bg/transparent` Figma token referenced elsewhere but not used here** | n/a | Listed for cross-map consistency — Card doesn't need it. |
| 10 | **Storybook missing `Spacing-3` coverage** | Figma's 12-variant matrix splits across `Spacing-3` and `Spacing-4` | Storybook only renders the 6 `p-4` permutations. Adding 6 more stories (or one with a `padding` argType select) would close the gap. |

---

> **Generated by** `component-context-generator` skill (patched 2026-05-12 with Code Connect 403 fallback) against Figma node `1213-64913` of file `eKAqJtRHEFoa6FOPw3xzCw`. Cross-referenced with `lib/design-system/token-map.md` and `src/components/Card/Card.stories.tsx`.
