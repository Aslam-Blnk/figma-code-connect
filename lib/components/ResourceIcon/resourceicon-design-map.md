# ResourceIcon Design Map

## figma-design-context

### Component info

| | |
|---|---|
| **Name** | Resource Icon |
| **Figma node URL** | https://www.figma.com/design/eKAqJtRHEFoa6FOPw3xzCw/Components?node-id=4-1277 |
| **Last scanned** | 2026-05-12 |
| **Documentation** | https://66fa495fae52482a39d36cea-owjzewrhmc.chromatic.com/?path=/docs/design-system-components-resourceicon--docs |
| **Category** | Data display (typed-resource indicator with color + overlay) |

> Per the Figma description: "The Resource Icon component represents various resource types using a combination of size, color, and iconography. It supports multiple color variants and sizes to align with the context and importance of the resource. Ideal for visually distinguishing resources or statuses in dashboards, lists, or notifications."

---

### Variants

Sourced from the `ResourceIconProps` type signature in the `get_design_context` response (Figma codegen). Code Connect itself was unavailable (see Gap #1), but the codegen output was rich enough to enumerate the matrix exhaustively.

| Property | Values | Default |
|---|---|---|
| `size` | `Default` \| `Large` | `Large` _(Figma default — React default is `Default`; see Gap #6)_ |
| `resourceIconColor` | `Neutral` \| `Brand` \| `Positive` \| `Notice` \| `Negative` \| `Teal` \| `Indigo` \| `Amber` \| `Violet` \| `Lime` | `Neutral` |
| `cIcon` | `React.ReactNode \| null` _(slot)_ | `null` |

Full matrix: 2 sizes × 10 colors = **20 combinations**, all enumerated in the Figma codegen and all covered by Storybook.

> Case-insensitive — Figma `Large` maps to React `large`, etc.

#### Color groups (drive token-resolution path)

| Group | Members | Token shape |
|---|---|---|
| **Non-accent** | `Brand`, `Positive`, `Notice`, `Negative` | `color/bg/{c}`, `color/border/{c}`, `icon/color/{c}` |
| **Neutral** (special) | `Neutral` | `color/accent/bg-gray`, `color/border/default`, `icon/color/subtle` |
| **Accent** | `Teal`, `Indigo`, `Amber`, `Violet`, `Lime` | `color/accent/bg-{c}`, `color/accent/border-{c}`, `icon/color/accent-{c}` |

---

### Design tokens used

Sourced from `lib/design-system/token-map.md`. Cross-referenced with `get_variable_defs` for this node.

#### Background / border / icon-color per `resourceIconColor`

| `resourceIconColor` | Background token | Border token | Icon color token |
|---|---|---|---|
| `Neutral` | `color/accent/bg-gray` → `backgroundColor.accent.gray` (`#f4f4f5`) | `color/border/default` → `borderColor.default` (`#e4e4e7`) | `icon/color/subtle` → `colors.icon.subtle` (`#71717a`) |
| `Brand` | `color/bg/brand` → `backgroundColor.brand.DEFAULT` (`#E2E6F7`) | `color/border/brand` → `borderColor.brand.DEFAULT` (`#A7B6E9`) | `icon/color/brand` → `colors.icon.brand` (`#4A53C6`) |
| `Positive` | `color/bg/positive` → `backgroundColor.positive` (`#dcfce7`) | `color/border/positive` → `borderColor.positive` (`#86efac`) | `icon/color/positive` → `colors.icon.positive` (`#16a34a`) |
| `Notice` | `color/bg/notice` → `backgroundColor.notice` (`#ffedd5`) | `color/border/notice` → `borderColor.notice` (`#fdba74`) | `icon/color/notice` → `colors.icon.notice` (`#ea580c`) |
| `Negative` | `color/bg/negative` → `backgroundColor.negative` (`#fee2e2`) | `color/border/negative` → `borderColor.negative` (`#fca5a5`) | `icon/color/negative` → `colors.icon.negative` (`#dc2626`) |
| `Teal` | `color/accent/bg-teal` → `backgroundColor.accent.teal` (`#ccfbf1`) | `color/accent/border-teal` → `borderColor.accent.teal` (`#99f6e4`) | `icon/color/accent-teal` → `colors.icon-accent.teal` (`#0d9488`) |
| `Indigo` | `color/accent/bg-indigo` → `backgroundColor.accent.indigo` (`#e0e7ff`) | `color/accent/border-indigo` → `borderColor.accent.indigo` (`#c7d2fe`) | `icon/color/accent-indigo` → `colors.icon-accent.indigo` (`#4f46e5`) |
| `Amber` | `color/accent/bg-amber` → `backgroundColor.accent.amber` (`#fef3c7`) | `color/accent/border-amber` → `borderColor.accent.amber` (no token in Foundation) _(see Gap #5)_ | `icon/color/accent-amber` → `colors.icon-accent.amber` (`#f59e0b`) |
| `Violet` | `color/accent/bg-violet` → `backgroundColor.accent.violet` (`#ede9fe`) | `color/accent/border-violet` → `borderColor.accent.violet` (`#ddd6fe`) | `icon/color/accent-violet` → `colors.icon-accent.violet` (`#7c3aed`) |
| `Lime` | `color/accent/bg-lime` → `backgroundColor.accent.lime` (`#ecfccb`) | `color/accent/border-lime` → `borderColor.accent.lime` (`#bef264`) _(token-map lists `#bef264`; Figma defs return `#d9f99d` — see Gap #5)_ | `icon/color/accent-lime` → `colors.icon-accent.lime` (`#65a30d`) |

#### Overlay (`::after`) background — intense variant per color

The Large variant ships a code-only `::after` pseudo-element that paints a semi-transparent circle behind the icon. Color and opacity resolve from the `*-intense` palette:

| `resourceIconColor` | Overlay token | Opacity (code) | Opacity (Figma) |
|---|---|---|---|
| `Neutral` | `backgroundColor.accent.gray-intense` (`#e4e4e7`) | `0.6` | `0.6` |
| `Brand` | `backgroundColor.brand-intense` (`#4A53C6`) | `0.1` | `0.1` |
| `Positive` | `backgroundColor.positive-intense` (`#16a34a`) | `0.1` | `0.1` |
| `Notice` | `backgroundColor.notice-intense` (`#ea580c`) | `0.1` | `0.1` |
| `Negative` | `backgroundColor.negative-intense` (`#dc2626`) | `0.1` | `0.1` |
| `Teal` / `Indigo` / `Amber` / `Violet` / `Lime` | `backgroundColor.accent.{c}-intense` | `0.6` | `0.6` |

#### Geometry tokens

| Figma token | Tailwind utility | Used for |
|---|---|---|
| `spacing/1` | `0.25rem` (`4px`) | `.resource-icon-default` padding |
| `spacing/2` | `0.5rem` (`8px`) | `.resource-icon-large` padding |
| `rounded/lg` | `0.5rem` (`8px`) | `.resource-icon-default` border-radius |
| `rounded/xl` | `0.75rem` (`12px`) | `.resource-icon-large` border-radius + container fallback |
| `icon/size/sm` | `1rem` (`16px`) | Default-size inner icon |
| `icon/size/base` | `1.25rem` (`20px`) | Large-size inner icon |
| `border/1` | `1px` | `.resource-icon-large` border width |
| `opacity/10` | `0.1` | Overlay opacity for non-accent colors |
| `opacity/60` | `0.6` | Overlay opacity for accent + neutral colors |

#### Code-only values (no Figma token)

| Value | Used for |
|---|---|
| `1.5rem` (`24px`) | Default size container w/h; Large overlay-circle w/h |
| `2.25rem` (`36px`) | Large size container w/h |
| `1rem, 1rem` offset | Large `::after` overlay position (`left: 1rem, top: 1rem`) |
| `100%` | `::after` overlay border-radius (full circle) |
| `mixBlendMode: multiply` | Container compositing |

---

### Visual specs

#### `.resource-icon-container` (base — all variants)

| Property | Value |
|---|---|
| display | `flex`, items center, justify center |
| position | `relative` |
| z-index | `1` |
| overflow | `hidden` (clips the `::after` overlay to the rounded shape) |
| border-radius | `0.75rem` (12px) _(overridden by size variants — see Gap #4)_ |
| mix-blend-mode | `multiply` |

#### `.resource-icon-default`

| Property | Value |
|---|---|
| width / height | `1.5rem` × `1.5rem` (24px × 24px) |
| min-width / min-height | same |
| padding | `0.25rem` (4px) |
| border-radius | `0.5rem` (8px) — overrides container's `0.75rem` |
| border | _(none — no `borderWidth` set)_ |
| inner icon size | `1rem` (16px) — applied to `& svg, & .mui-icon` with `fontSize: theme('fontSize.base')` |
| `::after` overlay | _(not painted — no `position`/`size` rules in this size; only the color rules paint, but with no geometry the pseudo-element collapses)_ |

#### `.resource-icon-large`

| Property | Value |
|---|---|
| width / height | `2.25rem` × `2.25rem` (36px × 36px) |
| min-width / min-height | same |
| padding | `0.5rem` (8px) |
| border-radius | `0.75rem` (12px) |
| border-width | `1px` |
| inner icon size | `1.25rem` (20px) — applied with `fontSize: theme('fontSize.xl')`, plus `overflow: visible` |
| `::after` overlay | painted (see next section) |

#### `::after` overlay (Large only)

| Property | Value |
|---|---|
| content | `""` |
| position | `absolute` |
| left, top | `1rem`, `1rem` (16px, 16px) |
| z-index | `-1` (behind the icon) |
| width / height | `1.5rem` × `1.5rem` (24px × 24px) |
| min-width / min-height | same |
| border-radius | `100%` (perfect circle) |
| background | resolves per color (see Overlay token table) |
| opacity | `0.6` (accent + neutral) or `0.1` (non-accent) |

> The overlay sits behind the icon and adds a colored "glow" inside the rounded container. The container's `overflow: hidden` clips it to the rounded shape. Figma positions the overlay differently per color group (top-right for non-accent, bottom-left for Violet/Indigo, fixed for others) — see Gap #3.

---

### Interaction states

ResourceIcon is a passive display element. No hover, focus, active, or disabled states are defined in code or designed in Figma.

| State | Visual changes |
|---|---|
| Default | Baseline appearance |
| Hover / Focus / Active / Disabled | _(none — no selectors)_ |

---

### Accessibility

| Aspect | Implementation |
|---|---|
| Role | `<div>` wrapping consumer-passed icon children. No semantic role applied. |
| Keyboard | Not focusable. |
| ARIA attributes | None applied automatically. The consumer-passed icon (`<span class="mui-icon">…</span>`) is decorative by default. If the ResourceIcon conveys meaning beyond its container's label, the consumer should add `aria-label` or wrap in an element with one. |
| Screen reader | Material Symbols icons via `<span>` are decorative — SR skips them. Add `aria-label` on the ResourceIcon when standalone. |

---

### Slots

| Slot | Component | Description |
|---|---|---|
| Icon | `children` (React) / `cIcon` (Figma) | The actual icon node. Default size renders at 16px; Large at 20px. Inherits color from the container's `color` (which is set per `resourceIconColor`). |
| Overlay | _(implicit — `::after` pseudo-element)_ | Code-only colored circle behind the icon (Large only). No way for the consumer to override or remove it. |

---

### Animation & motion

None.

---

### Responsive behavior

None. ResourceIcon is intrinsic-sized.

---

## react-design-context

### Component metadata

| | |
|---|---|
| **File** | `lib/components/ResourceIcon/index.tsx` |
| **Styles** | `lib/components/ResourceIcon/styles.js` |
| **Import** | `import { ResourceIcon } from '@/components/ResourceIcon'` |
| **Storybook story** | `src/components/ResourceIcon/ResourceIcon.stories.tsx` |
| **Dependencies** | `class-variance-authority` |
| **Ref forwarded** | No — plain function component. Native `<div>` ref cannot be passed through. _(see Gap #7)_ |

---

### Exported API

| Export | Kind | Notes |
|---|---|---|
| `ResourceIcon` | Component | Props: `size?`, `resourceIconColor?`, `className?`, `children` (required). |

---

### Variant-to-class mapping (CVA)

| Prop | Value | Class | styles.js |
|---|---|---|---|
| `size` | `default` (default) | `.resource-icon-default` | lines 37–52 |
| `size` | `large` | `.resource-icon-large` | lines 53–82 |
| `resourceIconColor` | `neutral` (default) | `.resource-icon-neutral` | lines 84–92 (explicit; differs from helper output — see Gap #2) |
| `resourceIconColor` | `brand` | `.resource-icon-brand` | line 94 (via `nonAccentVariant` with overrides for `bg`/`border` paths) |
| `resourceIconColor` | `positive` | `.resource-icon-positive` | line 100 (via `nonAccentVariant`) |
| `resourceIconColor` | `notice` | `.resource-icon-notice` | line 101 (via `nonAccentVariant`) |
| `resourceIconColor` | `negative` | `.resource-icon-negative` | line 102 (via `nonAccentVariant`) |
| `resourceIconColor` | `lime` | `.resource-icon-lime` | line 103 (via `accentVariant`) |
| `resourceIconColor` | `violet` | `.resource-icon-violet` | line 104 (via `accentVariant`) |
| `resourceIconColor` | `amber` | `.resource-icon-amber` | line 105 (via `accentVariant`) |
| `resourceIconColor` | `indigo` | `.resource-icon-indigo` | line 106 (via `accentVariant`) |
| `resourceIconColor` | `teal` | `.resource-icon-teal` | line 107 (via `accentVariant`) |

All variants extend `.resource-icon-container` (lines 27–36).

The two factory helpers in `styles.js`:

```js
accentVariant(theme, accent)     // for Lime, Violet, Amber, Indigo, Teal
nonAccentVariant(theme, variant) // for Brand, Positive, Notice, Negative
```

Both emit `{ borderColor, backgroundColor, color, '&::after': { backgroundColor, opacity } }`. The opacity is hardcoded inside each helper — `0.6` for accent, `0.1` for non-accent — keeping the code-only opacity values in sync with Figma's per-color choices.

---

### Prop mapping

| Figma variant prop | React prop | Type | Default | Notes |
|---|---|---|---|---|
| `size` | `size` | `'default' \| 'large'` | `'default'` _(React; Figma defaults to `Large` — see Gap #6)_ | Case-insensitive |
| `resourceIconColor` | `resourceIconColor` | `'neutral' \| 'brand' \| 'positive' \| 'notice' \| 'negative' \| 'lime' \| 'violet' \| 'amber' \| 'indigo' \| 'teal'` | `'neutral'` | Same case-insensitive mapping |
| `cIcon` | `children` (required) | `React.ReactNode` | — | No discrete prop — `children` is `required` on the React interface, no fallback |
| `className` | `className` | `string` | — | Merged via `cn()` after CVA output |

---

### Behavior-only props

| Prop | Type | Notes |
|---|---|---|
| `className` | `string` | Merged via `cn()` |

`ResourceIcon` does **not** spread `...props` onto the underlying `<div>` (the React component takes only the four props above). Compare to Badge which spreads `React.HTMLAttributes<HTMLDivElement>`. This means consumers cannot attach `style`, `onClick`, `aria-*`, `data-*`, or any other native DOM attribute — see Gap #8.

---

### Shared helpers used in styles.js

| Helper | Source | Used in |
|---|---|---|
| `theme(...)` | Tailwind plugin context | Token reads |
| `accentVariant(theme, accent)` | local helper (lines 1–9) | All 5 accent color variants (`lime`, `violet`, `amber`, `indigo`, `teal`) |
| `nonAccentVariant(theme, variant, bgColor?, borderColor?)` | local helper (lines 11–24) | `brand` (with explicit `backgroundColor.brand.DEFAULT` / `borderColor.brand.DEFAULT` overrides) + `positive` / `notice` / `negative` (no overrides) |

Neutral is **not** factory-generated — it has explicit declarations (lines 84–92) because its background uses `accent.gray` (not `accent.neutral`) and its border uses `borderColor.default` (not `borderColor.neutral`).

---

### Storybook coverage

`src/components/ResourceIcon/ResourceIcon.stories.tsx` exports **20 stories** — full coverage of the 2 × 10 matrix:

| Color | Default | Large |
|---|---|---|
| `Neutral` | `DefaultNeutral` | `LargeNeutral` |
| `Brand` | `DefaultBrand` | `LargeBrand` |
| `Positive` | `DefaultPositive` | `LargePositive` |
| `Notice` | `DefaultNotice` | `LargeNotice` |
| `Negative` | `DefaultNegative` | `LargeNegative` |
| `Lime` | `DefaultLime` | `LargeLime` |
| `Violet` | `DefaultViolet` | `LargeViolet` |
| `Amber` | `DefaultAmber` | `LargeAmber` |
| `Indigo` | `DefaultIndigo` | `LargeIndigo` |
| `Teal` | `DefaultTeal` | `LargeTeal` |

All stories use the same icon: `<span className="mui-icon material-symbols-rounded filled">badge</span>`. No story exercises a custom icon swap or the `className` override.

---

### Gaps

Mismatches between the Figma node, the React implementation, and adjacent project conventions. Gap #1 is the standardized fallback marker required by the skill when Code Connect is unavailable.

| # | Gap | Figma | React |
|---|---|---|---|
| 1 | **Code Connect API unavailable** — `mcp__figma__get_context_for_code_connect` returned 403 / Developer-seat-required. The Variants section was derived from the React source + the `ResourceIconProps` type signature returned by `get_design_context` (rich codegen response) + `get_variable_defs` rather than the full Figma variant tree. Re-scan with a Developer seat to replace any rows marked `_(inferred)_`. | — | — |
| 2 | **Neutral diverges from the factory pattern** | Treated as just another color variant | `.resource-icon-neutral` is implemented inline (lines 84–92), not via `nonAccentVariant` or `accentVariant`, because it uses `backgroundColor.accent.gray` (not `backgroundColor.neutral`, which doesn't exist) and `borderColor.default` (not `borderColor.neutral`). The deviation is necessary but unsignaled — a future refactor could introduce a third helper `neutralVariant(theme)` or add `neutral` to the accent group with a custom token-name override. |
| 3 | **Overlay position differs per color in Figma, fixed in code** | Figma codegen reveals 3+ overlay positions: top-right (Positive/Negative/Notice/Brand + default for Lime/Amber/Neutral), bottom-left (Violet/Indigo), and fixed (Teal at `left:15px top:15px`) | `styles.js` `::after` uses a single position: `left: 1rem, top: 1rem` (16px, 16px) for **all colors**. The React component does not vary overlay placement by color — visual drift between Figma and code. |
| 4 | **`.resource-icon-container` border-radius is redundant** | n/a | The base `.resource-icon-container` sets `borderRadius: '0.75rem'` (line 34), but every size variant overrides it (`0.5rem` for default, `0.75rem` for large). The container value matches large but is dead code for default. Remove from the base or rely on it instead of the variant override. |
| 5 | **Lime border token hex drift** | `get_variable_defs` returns `color/accent/border-lime` = `#d9f99d` (lime-200) | `token-map.md` lists `borderColor.accent.lime` = `#bef264` (lime-300). The styles.js `accentVariant('lime')` resolves the Tailwind path → `#bef264`, but Figma's variable defs report a different hex. Either the token map is stale or Figma has drifted from the foundation; reconcile against the Tailwind theme source. |
| 6 | **Default value mismatch — `size`** | Figma's `ResourceIconProps` declares `size = "Large"` as the default | React's CVA `defaultVariants` and the destructured default both set `size = 'default'`. Calling `<ResourceIcon resourceIconColor="brand" />` renders the small (24px) variant in code, but the equivalent Figma instance renders the large (36px). Pick one — Figma's default is more visible; React's is more conservative. |
| 7 | **Ref not forwarded** | n/a | `ResourceIcon` is not `React.forwardRef`. Consumers can't grab the underlying `<div>`. Same outlier status as Badge. |
| 8 | **Native DOM attributes blocked** | n/a | `ResourceIcon` accepts only `size`, `resourceIconColor`, `className`, `children`. No `...props` spread. Consumers cannot attach `style`, `onClick`, `aria-label`, `aria-hidden`, `data-*`, or any other native attribute. This blocks accessibility annotations and event handlers entirely — for a status indicator that often needs `aria-label`, this is a real hole. |
| 9 | **`children` is required but not enforced as non-null** | `cIcon: React.ReactNode \| null` (default `null`) in Figma | The React interface declares `children: React.ReactNode` as required. TypeScript will reject calls without a child, but at runtime `<ResourceIcon>{null}</ResourceIcon>` renders an empty padded container. Figma at least defaults to a known icon per variant; React renders nothing. |
| 10 | **`spacing/xs` typo in Figma `Indigo Large`** | The Figma codegen for `isIndigoAndLarge` uses `p-[var(--spacing/xs,8px)]` while all other Large variants use `p-[var(--spacing/2,8px)]` | `spacing/xs` is **not** a token in `lib/design-system/token-map.md` — only `width/xs` exists. The fallback `8px` happens to match, so visual output is correct, but the Figma component references an undefined token. Fix in the Figma component to use `spacing/2`. |
| 11 | **Default size doesn't get the overlay even though color rules paint `::after`** | Default-size symbols in Figma don't show the overlay | `accentVariant` / `nonAccentVariant` and explicit Neutral all emit `'&::after': { backgroundColor, opacity }`, but `.resource-icon-default` defines **no** `::after` geometry. Without `position`/`width`/`height`, the pseudo-element collapses and is invisible. ✓ matches Figma, but the color/opacity rules are still emitted as dead CSS for Default. Either gate the `::after` rule under `.resource-icon-large` or accept the harmless waste. |

---

> **Generated by** `component-context-generator` skill (patched 2026-05-12 with Code Connect 403 fallback) against Figma node `4-1277` of file `eKAqJtRHEFoa6FOPw3xzCw`. Cross-referenced with `lib/design-system/token-map.md` and `src/components/ResourceIcon/ResourceIcon.stories.tsx`.
