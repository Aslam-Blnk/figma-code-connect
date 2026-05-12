# Table Design Map

## figma-design-context

### Component info

| | |
|---|---|
| **Name** | Table |
| **Figma node URL** | https://www.figma.com/design/eKAqJtRHEFoa6FOPw3xzCw/Components?node-id=1288-13226 |
| **Last scanned** | 2026-05-12 |
| **Category** | Data display (compound primitives + complex pattern in Figma) |

> The Figma "❖ Table" frame at `1288-13226` is a full **table pattern** — 20 enumerated symbol variants across 5 axes covering desktop/mobile, section/page layout, default/empty/error states, and loading. The React primitive at `lib/components/Table/index.tsx` covers only the bare `<table>` chrome with a 2-value `variant` prop. Loading skeletons, empty states, error states, pagination, sortable headers, and the mobile layout all live in `src/patterns/Table/` (and `src/components/TableSort/`) and compose the primitive — they are **not** part of the design-system component. This map documents the primitive; large gaps to the Figma pattern are listed under Gaps.

---

### Variants

The Figma component set is a 5-axis matrix. Values enumerated below come directly from the symbol layer names (sparse-metadata response from `get_design_context`), not from Code Connect (see Gap #1).

| Property | Values | Default _(inferred from layer ordering — Code Connect unavailable)_ |
|---|---|---|
| `breakpoint` | `Desktop` \| `Mobile` | `Desktop` |
| `variant` | `Section Table` \| `Page Table` | `Section Table` |
| `state` | `Default` \| `Empty List` \| `Empty Search` | `Default` |
| `isErrored?` | `True` \| `False` | `False` |
| `isLoading?` | `True` \| `False` | `False` |

#### Full symbol matrix (20 combinations present in Figma)

| Symbol id | breakpoint | variant | state | isErrored | isLoading |
|---|---|---|---|---|---|
| `1210:57638` | Desktop | Section | Default | False | False |
| `1934:23719` | Desktop | Section | Default | False | True |
| `1915:12828` | Desktop | Section | Empty List | False | False |
| `1934:18464` | Desktop | Section | Empty Search | False | False |
| `1934:20788` | Desktop | Section | Default | True | False |
| `1210:60980` | Desktop | Page | Default | False | False |
| `1934:23745` | Desktop | Page | Default | False | True |
| `1915:15439` | Desktop | Page | Empty List | False | False |
| `1934:18472` | Desktop | Page | Empty Search | False | False |
| `1934:20796` | Desktop | Page | Default | True | False |
| `1570:19244` | Mobile | Section | Default | False | False |
| `1934:23771` | Mobile | Section | Default | False | True |
| `1915:17085` | Mobile | Section | Empty List | False | False |
| `1915:11532` | Mobile | Section | Empty Search | False | False |
| `1934:20804` | Mobile | Section | Default | True | False |
| `1570:19270` | Mobile | Page | Default | False | False |
| `1934:23798` | Mobile | Page | Default | False | True |
| `1915:17112` | Mobile | Page | Empty List | False | False |
| `1915:11540` | Mobile | Page | Empty Search | False | False |
| `1934:20812` | Mobile | Page | Default | True | False |

> Of these 5 axes, only one (`Section Table` vs `Page Table`, roughly) is exposed as a React prop on the primitive (`variant: 'default' | 'rounded'`). All other axes must be composed by the consumer — see Gap #2.

---

### Design tokens used

Sourced from `lib/design-system/token-map.md`. Cross-referenced with the variables Figma reports for this node via `get_variable_defs`.

| Figma token | Tailwind path | Used for |
|---|---|---|
| `color/bg/default` | `backgroundColor.default` (`#FFFFFF`) | `.table-container` background |
| `color/border/default` | `borderColor.default` (`#e4e4e7`) | `.table-rounded` border; `tr` bottom border; `tfoot` top border; `.table-sort` dashed border |
| `color/accent/bg-gray-light` | `backgroundColor.accent.gray-light` (`#fafafa`) | `tbody tr:hover` background; `tbody tr[data-state="selected"]` background |
| `color/text/subtle` | `textColor.subtle` (`#3f3f46`) | `th` text color |
| `icon/color/subtle` | `colors.icon.subtle` (`#71717a`) | `.table-sort` icon color |
| `color/outline/focus-ring` | `outlineColor.focus-ring` (`#60a5fa`) | `.table-sort:focus-visible` outline |
| **Composite** `heading/h4` | global `<h4>` style via `h4Styles(theme)` | `th` typography (Favorit / 14px / 500 / 20px lh) |
| **Composite** `content/text` | utility `text-content` | typical cell text (applied by consumers — see story) |
| **Composite** `content/text-light` | utility `text-content-light` | secondary cell text (applied by consumers) |

#### Layout-only values (no Figma token in this node)

| Value | Used for |
|---|---|
| `1rem` (`16px`) → `1.25rem` (`20px`) above `sm` | `.table-default` first/last column padding (responsive) |
| `0.75rem` (`12px`) | `.table-rounded` first/last column padding (no responsive bump) |
| `0.5rem` (`8px`) | All other `td` / `th` horizontal padding |
| `1rem` (`16px`) | `.table-rounded` `border-radius` |
| `0.375rem` (`6px`) | `.table-sort` `border-radius` |
| `2.25rem` (`36px`) | `th` `height` / `min-height` |
| `0.75rem` (`12px`) | `.table-sort` icon size |

---

### Visual specs

#### `Table` wrapper (`.table-container`)

| Property | Value |
|---|---|
| position | `relative` |
| width | `100%` |
| overflow | `auto` |
| background | `backgroundColor.default` (`#FFFFFF`) |

#### `variant="default"` — `.table-default`

First/last column receive responsive horizontal padding:

| Selector | `< sm` | `≥ sm` (`640px`) |
|---|---|---|
| `thead th:first-of-type` `padding-left` | `1rem` (16px) | `1.25rem` (20px) |
| `thead th:last-of-type` `padding-right` | `1rem` | `1.25rem` _(see Gap #3 — applies `paddingLeft` again)_ |
| `tbody td:first-of-type` `padding-left` | `1rem` | `1.25rem` |
| `tbody td:last-of-type` `padding-right` | `1rem` | `1.25rem` _(see Gap #3)_ |

#### `variant="rounded"` — `.table-rounded`

| Property | Value |
|---|---|
| border-radius | `1rem` (16px) |
| border | `1px solid borderColor.default` |
| first/last column padding | `0.75rem` (12px), non-responsive |

#### `<table>` element

| Property | Value |
|---|---|
| position | `relative` |
| width | `100%` |

#### `<tr>` (any context)

| Property | Value |
|---|---|
| padding | `0 0.5rem` |
| border-bottom | `1px solid borderColor.default` |
| transition | `transitionColorsStyles(theme)` (bg / border / text / shadow) |

#### `<th>`

| Property | Value |
|---|---|
| height | `2.25rem` (36px) |
| min-height | `2.25rem` |
| padding | `0 0.5rem` |
| vertical-align | `middle` |
| typography | `h4Styles(theme)` → Favorit / 14px / 500 / 20px lh / `font-medium` |
| color | `textColor.subtle` (`#3f3f46`) |

#### `<tbody> <td>`

| Property | Value |
|---|---|
| padding | `0 0.5rem` |
| height | _(not set by primitive — consumer overrides per story, e.g. `[&_tbody_td]:h-[4.25rem]` or `h-[4.75rem]`)_ |

#### `<tfoot>`

| Property | Value |
|---|---|
| border-top-width | `1px` |
| border-top-color | `borderColor.default` |
| `> tr:last-child` border-bottom-width | `0` |

#### `.table-sort` (orphaned helper — see Gap #4)

| Property | Value |
|---|---|
| color | `colors.icon.subtle` |
| background | `backgroundColor.default` |
| border | `1px dashed borderColor.default` |
| border (selected) | `1px solid` |
| display | `flex`, center-aligned |
| border-radius | `0.375rem` (6px) |
| padding | `0.25rem` |
| outline (default) | `2px solid transparent`, offset `2px` |
| outline (focus-visible) | `2px solid outlineColor.focus-ring`, offset `0` |
| icon size | `0.75rem × 0.75rem` (`12px`) |

---

### Interaction states

#### Row (`<tr>` inside `<tbody>`)

| State | Visual changes | theme() path |
|---|---|---|
| Default | Transparent bg; bottom border `borderColor.default` | — |
| Hover | Background → accent gray-light | `backgroundColor.accent.gray-light` |
| Selected (`data-state="selected"`) | Same as hover background | `backgroundColor.accent.gray-light` |
| Last row | Bottom border width → `0` | — |
| Color transitions | Smooth via `transitionColorsStyles` | — |

#### Sort cell (`.table-sort`)

| State | Visual changes | theme() path |
|---|---|---|
| Default | Dashed border, subtle icon | `borderColor.default`, `colors.icon.subtle` |
| Focus-visible | `outline: 2px solid focus-ring`, offset 0 | `outlineColor.focus-ring` |
| Selected (`data-state="selected"`) | Border style: `dashed` → `solid` | — |

#### Cells (`<th>`, `<td>`)

No interaction states — fully passive.

---

### Accessibility

| Aspect | Implementation |
|---|---|
| Role | Native semantics — `<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, `<td>`. No explicit ARIA. |
| Keyboard | None at the primitive level. Sort triggers live in `src/components/TableSort/` and inherit Button focusability; row click handlers are consumer-provided. |
| ARIA attributes | None applied by the primitive. Consumers can pass `aria-label`, `aria-sort`, `scope` etc. via `...props`. |
| Focus management | Only `.table-sort:focus-visible` styled. No focus management for rows or cells. |
| Screen reader | Header semantics + caption (if consumer adds one) carry SR meaning. Selected rows expose `data-state="selected"` but no `aria-selected` — see Gap #5. |

---

### Slots

The compound API surfaces children through standard table semantics — each export wraps the matching HTML element.

| Slot | Component | Description |
|---|---|---|
| Container | `<Table>` | Renders a `<div class="table-container">` wrapping a `<table>`. Accepts `variant` (`default` / `rounded`), `className` (on `<table>`), `tableContainerClassName` (on the wrapper). |
| Header section | `<TableHeader>` | `<thead>` |
| Body section | `<TableBody>` | `<tbody>` |
| Footer section | `<TableFooter>` | `<tfoot>` |
| Row | `<TableRow>` | `<tr>` — can carry `data-state="selected"` to trigger the selected background |
| Header cell | `<TableHead>` | `<th>` — typography from `h4Styles` |
| Data cell | `<TableCell>` | `<td>` — height typically set by consumer (`[&_tbody_td]:h-[4.25rem]` etc.) |

The Figma pattern's empty state, error state, and loading skeleton slots are **not** exposed on the primitive — they belong to `src/patterns/Table/`.

---

### Animation & motion

Only color transitions on `<tr>` via `transitionColorsStyles(theme)`. No enter/exit animations, no skeleton shimmer (the loading skeleton in Figma is a pattern responsibility).

---

### Responsive behavior

| Breakpoint | Behavior on primitive |
|---|---|
| `< 640px` | `.table-default` first/last column padding = `1rem` |
| `≥ 640px` (Tailwind `sm`) | `.table-default` first/last column padding = `1.25rem` |
| Any | `.table-rounded` first/last column padding is non-responsive at `0.75rem` |

The Figma `breakpoint=Mobile` variants reshape the table into a card-stack layout. This shape change is **not** implemented by the primitive — Gap #6.

---

## react-design-context

### Component metadata

| | |
|---|---|
| **File** | `lib/components/Table/index.tsx` |
| **Styles** | `lib/components/Table/styles.js` |
| **Import** | `import { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell } from '@/components/Table'` |
| **Storybook story** | `src/components/Table/Table.stories.tsx` (primitive); `src/patterns/Table/Table.stories.tsx` (composed pattern) |
| **Dependencies** | `class-variance-authority` (only on `Table` itself) |
| **Ref forwarded** | Yes — every subcomponent uses `React.forwardRef`. Targets: `<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, `<td>` respectively. |

---

### Exported API

| Export | Element | Variants / props |
|---|---|---|
| `Table` | `<div class="table-container"><table />` | `variant?: 'default' \| 'rounded'`, `className`, `tableContainerClassName`, all `<table>` HTML attrs |
| `TableHeader` | `<thead>` | `className`, all `<thead>` HTML attrs |
| `TableBody` | `<tbody>` | `className`, all `<tbody>` HTML attrs |
| `TableFooter` | `<tfoot>` | `className`, all `<tfoot>` HTML attrs |
| `TableRow` | `<tr>` | `className`, all `<tr>` HTML attrs. Apply `data-state="selected"` for selected background. |
| `TableHead` | `<th>` | `className`, all `<th>` HTML attrs |
| `TableCell` | `<td>` | `className`, all `<td>` HTML attrs |

---

### Variant-to-class mapping (CVA — only on `Table`)

| `variant` prop | CSS class on wrapper | styles.js lines |
|---|---|---|
| `default` (default) | `.table-container.table-default` | 2–7 + 64–89 |
| `rounded` | `.table-container.table-rounded` | 2–7 + 8–24 |

All subcomponents (`TableHeader` … `TableCell`) have no CVA — they pass `className` straight through. State-based styling is driven by element selectors (`tr`, `tbody tr:hover`, `[data-state="selected"]`, etc.) in `styles.js`.

---

### Prop mapping

The Figma variant matrix maps to the React primitive only on the `variant` axis. Other Figma axes have no primitive counterpart.

| Figma variant | React equivalent | Type | Default | Notes |
|---|---|---|---|---|
| `variant: Section Table` | `<Table variant="default">` | `'default' \| 'rounded'` | `'default'` | Naming drift — Figma says "Section" / "Page"; React says "default" / "rounded". Section ↔ default, Page ↔ rounded is the implied mapping but see Gap #7. |
| `variant: Page Table` | `<Table variant="rounded">` | — | — | — |
| `breakpoint: Desktop \| Mobile` | _(no prop — CSS responds at `sm`)_ | — | — | Gap #6 |
| `state: Empty List \| Empty Search` | _(consumer renders alternative tbody content)_ | — | — | Gap #2 |
| `isErrored?: True` | _(consumer composition)_ | — | — | Gap #2 |
| `isLoading?: True` | _(consumer composition — typically Skeleton inside cells)_ | — | — | Gap #2 |
| _(Figma row selection state)_ | `<TableRow data-state="selected">` | — | — | No `isSelected` prop — must be set as a data attribute. Gap #5 |

---

### Behavior-only props

Passed through `...props` to the underlying element:

| Prop | Type | Where it applies |
|---|---|---|
| `className` | `string` | All subcomponents; merged via `cn()` on `Table` |
| `tableContainerClassName` | `string` | `Table` only — targets the wrapper `<div>` (the `<table>` itself uses `className`) |
| `ref` | forwarded | See Component metadata table |
| native `<table>` / `<thead>` / `<tbody>` / `<tfoot>` / `<tr>` / `<th>` / `<td>` attrs | native | passed through `...props` on each export |

---

### Shared helpers used in styles.js

| Helper | Source | Used in |
|---|---|---|
| `theme(...)` | Tailwind plugin context | Token reads |
| `transitionColorsStyles(theme)` | Tailwind plugin util | `tr` — smooth color transitions on hover / selected |
| `h4Styles(theme)` | Tailwind plugin util | `th` — applies the global `<h4>` typography (Favorit / 14px / 500 / 20px lh). Identical to using a semantic `<h4>` per `token-map.md` §15. |

---

### Storybook coverage

`src/components/Table/Table.stories.tsx` (primitive):

| Story export | Args | Notes |
|---|---|---|
| `DefaultTable` | `variant="default"`, `[&_tbody_td]:h-[4.25rem]` | Baseline section-style table, 68px rows |
| `DefaultTableWithLargeCellSize` | `variant="default"`, `[&_tbody_td]:h-[4.75rem]` | 76px rows |
| `RoundedTable` | `variant="rounded"`, `[&_tbody_td]:h-[4.25rem]` | Page-style with rounded outer border |
| `RoundedTableWithLargeCellSize` | `variant="rounded"`, `[&_tbody_td]:h-[4.75rem]` | — |
| `TableWithNoBorders` | `variant="default"`, `border-none [&_*]:!border-none [&_tbody_td]:h-[4.25rem]` | Override variant — drops all borders |

All five stories exercise the same 3-column body (Name / Address / arrow Button). None demonstrate `<TableFooter>`, the selected row state, or sorting.

A second, far richer story exists at `src/patterns/Table/Table.stories.tsx` (uses `@tanstack/react-query` + `client-side-pagination/data-table`) — that's where the actual loading/empty/error/pagination behavior is exercised. It composes the primitive rather than extending it.

---

### Gaps

Mismatches between Figma, the React primitive, and adjacent project conventions. Gap #1 is the standardized fallback marker required by the skill when Code Connect is unavailable.

| # | Gap | Figma | React |
|---|---|---|---|
| 1 | **Code Connect API unavailable** — `mcp__figma__get_context_for_code_connect` returned 403 / Developer-seat-required. The Variants section was derived from the React source + layer-name enumeration of the symbol matrix + `get_variable_defs` rather than the full Figma variant tree. Re-scan with a Developer seat to replace any rows marked `_(inferred)_`. | — | — |
| 2 | **Loading / Empty List / Empty Search / Errored states not in primitive** | 5 of Figma's 20 symbol combinations cover these states explicitly | The React primitive has no prop for any of them. They must be composed by the consumer (typically in `src/patterns/Table/`). |
| 3 | **`.table-default` last-column padding bug** | n/a | `styles.js` lines 73 and 84 set `paddingLeft: '1.25rem'` inside the `thead th:last-of-type` / `tbody td:last-of-type` `@media (min-width: sm)` blocks instead of `paddingRight`. Above `sm`, the right edge of the last column collapses to `1rem` (the base rule) — the responsive bump is silently broken. |
| 4 | **`.table-sort` class is orphaned in `styles.js`** | Figma includes a sortable header chip variant | The class exists in `lib/components/Table/styles.js` (lines 90–115) but no `TableSort` component is exported from this module. The actual `TableSort` lives at `src/components/TableSort/` — so the design-system primitive ships dead CSS, and the real implementation isn't in the design system. Either lift `TableSort` into `lib/components/` or move this CSS into the TableSort module. |
| 5 | **No `isSelected` / `aria-selected`** | Selected row is a visible state in Figma | Selection is gated entirely on the consumer applying `data-state="selected"` to `<TableRow>`. No prop, no automatic `aria-selected`, no `aria-current`. Screen readers don't announce selection. |
| 6 | **Mobile breakpoint reshape not implemented** | `breakpoint=Mobile` variants restructure the table into a card-stack layout (10 of 20 symbols) | The React primitive only switches first/last column padding at `sm`. There is no card-stack mode. Mobile responsive shape must be done by the consumer. |
| 7 | **Variant naming drift Figma ↔ React** | `Section Table` \| `Page Table` | `default` \| `rounded`. The two names refer to the same axis but a reader cannot translate between them without reading both files. Either rename React props to `section`/`page` or rename the Figma axis. |
| 8 | **`<TableRow>`'s selected styling targets `tr[data-state="selected"]` globally** | n/a | The `tbody` selector applies to **any** descendant `tr` with `data-state="selected"`. If a consumer nests another component that uses `data-state="selected"` (e.g. a Radix primitive), it will inadvertently get the gray-light background. Consider scoping to `tbody > tr[data-state="selected"]`. |
| 9 | **`<TableFooter>` is exported but never used in stories** | Figma's pagination/summary footers are part of the pattern | No story demonstrates `<TableFooter>`. Its border-top behavior is untested in Storybook. |
| 10 | **`color/bg/transparent` Figma token reported but no Zemetric token** | Figma variable defs include `color/bg/transparent` (`#ffffff00`) | `token-map.md` notes this token is only in the Claude Foundation library. The Table primitive uses bare `transparent` literals or no background where transparency is needed. |

---

> **Generated by** `component-context-generator` skill (patched 2026-05-12 with Code Connect 403 fallback) against Figma node `1288-13226` of file `eKAqJtRHEFoa6FOPw3xzCw`. Cross-referenced with `lib/design-system/token-map.md`, `src/components/Table/Table.stories.tsx`, and `src/patterns/Table/Table.stories.tsx`.
