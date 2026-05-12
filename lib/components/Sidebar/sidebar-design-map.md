# Sidebar Design Map

## figma-design-context

### Component info

| | |
|---|---|
| **Name** | Sidebar |
| **Figma node URL** | https://www.figma.com/design/eKAqJtRHEFoa6FOPw3xzCw/Components?node-id=1577-66023 |
| **Last scanned** | 2026-05-12 |
| **Category** | Navigation (compound / shell + menu primitives) |

> The Figma node at `1577-66023` renders an **assembled example** — the full AppSidebar shell with logo, three nav groups, footer, and avatar — rather than a bare Sidebar primitive in isolation. Treat the React side of this map as the source of truth for the primitive API; Figma documents the canonical composition.

---

### Variants

The compound `Sidebar` shell has no CVA variants. Behavioral variants are exposed as props on individual subcomponents and via context.

| Subcomponent | Property | Values | Default |
|---|---|---|---|
| `SidebarProvider` | `defaultOpen` | `true` \| `false` | `true` |
| `SidebarProvider` | `open` _(controlled)_ | `boolean` | _(uncontrolled)_ |
| `Sidebar` | `side` | `left` \| `right` | `left` |
| `SidebarMenuButton` | `isActive` | `true` \| `false` | `false` |
| `SidebarMenuButton` | `isAvatar` | `true` \| `false` | `false` |
| `SidebarMenuButton` | `asChild` | `true` \| `false` | `false` |
| `SidebarGroupLabel` | `asChild` | `true` \| `false` | `false` |

Internal state (not directly settable but observable on `data-*` attributes):

| Attribute | Values | Set by |
|---|---|---|
| `data-state` | `expanded` \| `collapsed` | `SidebarProvider` — derived from `open` |
| `data-collapsible` | `offcanvas` \| `""` | `Sidebar` — `offcanvas` when collapsed |
| `data-side` | `left` \| `right` | `Sidebar` — mirrors `side` prop |
| `data-sidebar` | `sidebar` \| `header` \| `footer` \| `content` \| `group` \| `group-label` \| `menu` \| `menu-item` \| `menu-button` | each subcomponent — used for styling hooks |
| `data-active` | `true` \| `false` | `SidebarMenuButton` — mirrors `isActive` |
| `data-mobile` | `true` (mobile only) | `Sidebar` — set on the underlying `SheetContent` |

---

### Design tokens used

Sourced from `lib/design-system/token-map.md` (authoritative). Cross-referenced with the variables Figma reports for this node via `get_variable_defs`.

| Figma token | Tailwind path | Used for |
|---|---|---|
| `color/accent/bg-gray-light` | `backgroundColor.accent.gray-light` (`#fafafa`) | `.sidebar` background |
| `color/interactive/bg-hover` | `backgroundColor.interactive.hover` (`#f4f4f5`) | `.sidebar-menu-button:hover` background |
| `color/interactive/bg-pressed` | `backgroundColor.interactive.pressed` (`#f4f4f5`) | `.sidebar-menu-button[data-active="true"]` background |
| `color/text/subtler` | `textColor.subtler` (`#71717a`) | `.sidebar-group-label` color |
| `color/outline/focus-ring` | `outlineColor.focus-ring` (`#60a5fa`) | `.sidebar-menu-button:focus-visible` outline |
| _(primitive — no Figma token)_ | `colors.black-a10` (`rgba(0,0,0,0.1)`) | `.sidebar-overlay` background |
| `spacing/4` | `p-4` (`16px`) | `.sidebar-header` padding |
| `spacing/3` | `gap-3` (`12px`) | `.sidebar-content` gap |
| `spacing/2` | `p-2` (`8px`) | `.sidebar-group` padding |
| `spacing/2-5` / `spacing/3` | `0.625rem 0.75rem` | `.sidebar-group-label` padding (10px 12px) |
| `spacing/2` / `spacing/3` | `0.5rem 0.75rem` | `.sidebar-menu-button` padding (8px 12px) |
| `spacing/0-5` | `gap-0.5` (`2px`) | `.sidebar-menu` / `.sidebar-group` inner gap |
| `spacing/4` | `gap-4` (`16px`) | `.sidebar-menu-button` icon+label gap |
| `rounded/xl` | `rounded-xl` (`12px`) | `.sidebar-menu-button` border-radius |
| **Composite** `content/text` | utility class `text-content` | menu button label (Inter / 14px / 500 / 20px lh) |
| **Composite** `content/label` | utility class `text-content-label` | group label typography (Inter / 12px / 600 / 16px lh / +0.6px tracking) — _(see Gap #2)_ |

#### Layout-only values (no Figma token in this node)

| Value | Source | Used for |
|---|---|---|
| `16.25rem` (`260px`) | constant `SIDEBAR_WIDTH` | sidebar container width (desktop + mobile) |
| `100svh` | layout | `.sidebar-provider` min-height, `.sidebar-gap` / `.sidebar-container` height |
| `200ms` linear | code-only | width / left / right transition on `.sidebar-gap` + `.sidebar-container` |
| `z-index: 1030` | code-only | `.sidebar-overlay` stacking |
| `z-index: 1035` | code-only | `.sidebar-container` stacking |
| `640px` (Tailwind `sm`) | constant `MOBILE_BREAKPOINT` | mobile vs desktop branch |

---

### Visual specs

#### Sidebar shell (`.sidebar` — desktop)

| Property | Value |
|---|---|
| width | `var(--sidebar-width)` = `16.25rem` (`260px`) |
| height | `100svh` |
| display | `flex` column |
| background | `backgroundColor.accent.gray-light` (`#fafafa`) |
| position | fixed, anchored to `data-side` (left → `left:0`, right → `right:0`) |

#### Sidebar (`.sidebar-container` collapsed — `data-collapsible="offcanvas"`)

| Property | Value |
|---|---|
| left (when `data-side="left"`) | `calc(var(--sidebar-width) * -1)` (slides off-screen) |
| right (when `data-side="right"`) | `calc(var(--sidebar-width) * -1)` |
| `.sidebar-gap` width | `0px` (collapses the layout reservation) |
| transition | `left, right, width` `200ms linear` |

#### Mobile (`isMobile === true`)

Renders inside a `Sheet` from `@/components/Sheet` — no `.sidebar-root` / `.sidebar-container` classes. Sheet handles overlay, animation, and the `[&_.sheet-close]:hidden` selector suppresses Sheet's built-in close button. Width is fixed to `16.25rem` via the `--sidebar-width` CSS variable.

#### SidebarHeader (`.sidebar-header`)

| Property | Value |
|---|---|
| display | `flex` row |
| width | `100%` |
| align-items | center |
| justify-content | space-between |
| padding | `1rem` (16px) all sides |

#### SidebarContent (`.sidebar-content`)

| Property | Value |
|---|---|
| display | `flex` column |
| flex | `1 1 0%` (fills remaining height) |
| min-height | `0px` (allows overflow to scroll) |
| overflow | `auto` |
| align-items | `flex-start` |
| gap | `0.75rem` (12px) between groups |

#### SidebarGroup (`.sidebar-group`)

| Property | Value |
|---|---|
| display | `flex` column |
| width | `100%` |
| align-items | `flex-start` |
| gap | `0.125rem` (2px) |
| padding | `0.5rem` (8px) |
| position | `relative` |

#### SidebarGroupLabel (`.sidebar-group-label`)

| Property | Value |
|---|---|
| width | `100%` |
| padding | `0.625rem 0.75rem` (10px 12px) |
| color | `textColor.subtler` (`#71717a`) |
| typography | `textContentLabelStyles(theme)` — equivalent of `text-content-label` utility (Inter / 12px / 600 / 16px lh / `tracking-sparse` +0.6px) |

#### SidebarMenu (`.sidebar-menu`)

| Property | Value |
|---|---|
| display | `flex` column |
| width | `100%` |
| gap | `0.125rem` (2px) between items |
| min-width | `0px` |

#### SidebarMenuButton (`.sidebar-menu-button`)

| Property | Value (default) | Value (`isAvatar`) |
|---|---|---|
| display | `flex` row | `flex` row |
| width | `100%` | `auto` |
| padding | `0.5rem 0.75rem` (8px 12px) | `0.5rem` (8px) |
| gap | `1rem` (16px) | `0.625rem` (10px) |
| align-items | center | center |
| border-radius | `0.75rem` (rounded-xl, 12px) | `0.75rem` |
| outline (default) | `2px solid transparent`, offset `2px` | same |
| transition | `transitionColorsStyles(theme)` (bg / border / text / shadow) | same |

#### SidebarFooter (`.sidebar-footer`)

| Property | Value |
|---|---|
| display | `flex` column |
| width | `100%` |
| align-items | `flex-start` |

---

### Interaction states

#### SidebarMenuButton

| State | Visual changes | theme() path |
|---|---|---|
| Default | Transparent background, no border | — |
| Hover | Background → interactive hover | `backgroundColor.interactive.hover` |
| Focus-visible | Outline `2px solid focus-ring`, offset 0 | `outlineColor.focus-ring` |
| Active (`isActive` / `data-active="true"`) | Background → interactive pressed | `backgroundColor.interactive.pressed` |
| Disabled | _(not implemented — passes `disabled` through via `...props` but no styling)_ | _(Gap #3)_ |

#### Sidebar shell

| State | Visual changes |
|---|---|
| Expanded (`data-state="expanded"`) | `.sidebar-gap` reserves `var(--sidebar-width)` of layout; `.sidebar-container` at its anchored edge (`left:0` or `right:0`) |
| Collapsed (`data-state="collapsed"` + `data-collapsible="offcanvas"`) | `.sidebar-gap` width → `0`; `.sidebar-container` slides off-screen by `-var(--sidebar-width)` |
| Mobile | Component swaps to `Sheet` overlay; `state` still tracked but not used for layout |

#### SidebarOverlay (`.sidebar-overlay` — only used when a Sheet wraps the sidebar)

| State | Visual changes |
|---|---|
| `[data-force-mount="false"][data-state="open"]` | Animate in (opacity 0 → 1) via `animateIn(theme)` |
| `[data-force-mount="false"][data-state="closed"]` | Animate out via `animateOut(theme)` |
| `[data-force-mount="true"][data-state="open"]` | Force visible (`visibility:visible; opacity:1`), transition all |
| `[data-force-mount="true"][data-state="closed"]` | Force hidden (`visibility:hidden; opacity:0`), transition all |

---

### Accessibility

| Aspect | Implementation |
|---|---|
| Role | Generic `<div>`s; no explicit ARIA role on the shell. `SidebarMenu` uses `<ul>`, `SidebarMenuItem` uses `<li>`. `SidebarMenuButton` is a real `<button>` (or whatever `asChild` slots in). |
| Keyboard | Each `SidebarMenuButton` is natively focusable; Tab navigates between items. No arrow-key navigation implemented. Mobile sheet inherits focus trap + Esc-to-close from `@/components/Sheet`. |
| Focus management | Focus styles applied on `:focus-visible` only. Mobile branch's focus trap and return-focus come from Sheet (Radix Dialog underneath). |
| ARIA attributes | None directly applied. Mobile branch passes through to `SheetContent` which carries Radix Dialog's ARIA. Hidden `SheetTitle` / `SheetDescription` are mounted (in `.hidden` wrappers) to satisfy Radix's a11y requirements — see Gap #4. |
| Screen reader | No `aria-label` on the shell; SR users hear group labels and menu button text directly. Active state communicated only visually via `data-active` — no `aria-current="page"` is set automatically. |

---

### Slots

The compound API exposes slots through children — each subcomponent renders `children` into its own region.

| Slot | Component | Description |
|---|---|---|
| Top region | `<SidebarHeader>` | Logo + secondary controls (typically search, collapse trigger). Flex row, space-between. |
| Scrollable nav region | `<SidebarContent>` | Container for any number of `<SidebarGroup>`s. Scrolls when content overflows. |
| Group | `<SidebarGroup>` | Cluster of related menu items. Optional `<SidebarGroupLabel>` at top. |
| Group label | `<SidebarGroupLabel>` | Section heading (uppercase, +0.6px tracking). `asChild` available. |
| Menu list | `<SidebarMenu>` | `<ul>` wrapping `<SidebarMenuItem>` children. |
| Menu item | `<SidebarMenuItem>` | `<li>` wrapping a `<SidebarMenuButton>` (and optional badge / chevron siblings). |
| Menu button | `<SidebarMenuButton>` | The actionable row — children pass through. Composed structure observed in `src/patterns/Sidebar/Sidebar.tsx`: `<div class="flex items-center gap-2">` containing a Material Symbol icon + a `text-content` label, with an optional trailing `<Badge>`. |
| Bottom region | `<SidebarFooter>` | Pinned to the bottom. Typically holds Support link, avatar, version line. |

---

### Animation & motion

| Transition | Property | Duration | Easing |
|---|---|---|---|
| Expand / collapse | `width` on `.sidebar-gap`; `left, right, width` on `.sidebar-container` | `200ms` | `linear` |
| Overlay enter | `opacity` (and any classes from `animateIn`) | _(from `animateIn` helper)_ | _(from helper)_ |
| Overlay exit | `opacity` (and any classes from `animateOut`) | _(from `animateOut` helper)_ | _(from helper)_ |
| Menu button hover/focus/active | background / outline | inherited from `transitionColorsStyles(theme)` | inherited |

---

### Responsive behavior

| Breakpoint | Behavior |
|---|---|
| `< 640px` (mobile) | `useIsMobile()` returns `true`. `<Sidebar>` swaps to a `<Sheet>` controlled by `openMobile` state. Desktop chrome (`.sidebar-root` / `.sidebar-gap` / `.sidebar-container`) is not rendered. |
| `≥ 640px` (Tailwind `sm`) | Desktop branch: `.sidebar-root` is `display:none` below `sm` and `display:block` from `sm` up; `.sidebar-container` flips from `display:none` to `display:flex` at the same breakpoint. |

State (`open` / `state`) persists via cookie `sidebar:state` for one week. Cookie is set in `SidebarProvider.setOpen` regardless of mobile/desktop.

---

## react-design-context

### Component metadata

| | |
|---|---|
| **File** | `lib/components/Sidebar/index.tsx` |
| **Styles** | `lib/components/Sidebar/styles.js` |
| **Import** | `import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, useSidebar, useIsMobile } from '@/components/Sidebar'` |
| **Storybook story** | `src/patterns/Sidebar/Sidebar.stories.tsx` (uses `AppSidebar` from `src/patterns/Sidebar/Sidebar.tsx`) |
| **Dependencies** | `Sheet`, `SheetContent`, `SheetTitle`, `SheetDescription` from `@/components/Sheet`; `TooltipProvider` from `@/components/Tooltip`; `Slot` from `@radix-ui/react-slot` |
| **Ref forwarded** | Yes — every subcomponent uses `React.forwardRef`. Targets: `<div>` for Provider/Sidebar/Header/Footer/Content/Group/GroupLabel; `<ul>` for `SidebarMenu`; `<li>` for `SidebarMenuItem`; `<button>` for `SidebarMenuButton`. |

---

### Exported API

| Export | Kind | Signature / Notes |
|---|---|---|
| `SidebarProvider` | Component | Sets up `SidebarContext`, mounts `TooltipProvider`, injects `--sidebar-width` CSS var. Required wrapper. |
| `Sidebar` | Component | The shell. `side?: 'left' \| 'right'`. Branches on `useIsMobile()` between Sheet (mobile) and `.sidebar-root` (desktop). |
| `SidebarHeader` | Component | Flex row, space-between, padded. |
| `SidebarContent` | Component | Scrollable flex column. |
| `SidebarFooter` | Component | Flex column, flex-start. |
| `SidebarGroup` | Component | Cluster wrapper. |
| `SidebarGroupLabel` | Component | `asChild?: boolean` via Radix Slot. |
| `SidebarMenu` | Component | `<ul>`. |
| `SidebarMenuItem` | Component | `<li>`. Carries `group/menu-item` Tailwind group class for nested hover targeting. |
| `SidebarMenuButton` | Component | `<button>` (or `Slot` when `asChild`). Props: `isActive?`, `isAvatar?`, `asChild?`. |
| `useSidebar` | Hook | Returns `{ state, open, setOpen, openMobile, setOpenMobile, isMobile, toggleSidebar }`. Throws if used outside `SidebarProvider`. |
| `useIsMobile` | Hook | Returns `boolean`. Listens to `(max-width: 639px)` media query. |

---

### Variant-to-class mapping (no CVA)

This component does **not** use `class-variance-authority`. Classes are static per subcomponent — variants manifest as `data-*` attributes consumed by `styles.js` selectors:

| Logical variant | Drives | styles.js selector | Lines |
|---|---|---|---|
| `state === 'collapsed'` + offcanvas | Slide-out animation | `&[data-collapsible="offcanvas"] .sidebar-gap`, `&[data-collapsible="offcanvas"] .sidebar-container[data-side=…]` | 38–58 |
| `side === 'right'` | Mirror gap | `&[data-side="right"] .sidebar-gap { transform: rotate(180deg) }` | 46–48 |
| `isActive` on menu button | Pressed background | `&[data-active="true"] { backgroundColor: theme('backgroundColor.interactive.pressed') }` | 166–168 |
| `isAvatar` on menu button | Compact padding/width/gap | `&.avatar { width: auto; padding: 0.5rem; gap: 0.625rem }` | 169–173 |

Plain Tailwind classes (no styles.js): `.sidebar-provider`, `.sidebar`, `.sidebar-header`, `.sidebar-footer`, `.sidebar-content`, `.sidebar-group`, `.sidebar-menu`, `.sidebar-menu-item` (lines 9–148).

---

### Prop mapping

Sidebar has no Figma variant→React prop one-to-one mapping (the Figma node is an assembled example). The closest analogue is:

| Figma concept | React prop / API | Notes |
|---|---|---|
| _(implicit — left-anchored layout in screenshot)_ | `<Sidebar side="left">` | Default. `side="right"` would mirror anchoring. |
| _(implicit — sidebar shown expanded)_ | `<SidebarProvider defaultOpen>` | Cookie `sidebar:state` overrides on subsequent loads when the consumer reads it. |
| Active nav row | `<SidebarMenuButton isActive>` | One row in the assembled Figma is highlighted; this is the React expression of that state. |
| Avatar tile in footer | `<SidebarMenuButton isAvatar>` | Compact-size variant for the user avatar. |
| Group section heading ("MANAGE ASSETS", "MANAGE USERS") | `<SidebarGroupLabel>` | `text-content-label` typography. |
| Count chip on Alerts / Sessions | `<Badge variant="flat" badgeColor="neutral" isCount>` | Sits as a sibling inside `<SidebarMenuButton>` after the label. |
| Material Symbols icons | _(consumer-provided children — `<span class="mui-icon material-symbols-rounded">…</span>`)_ | The lib component is icon-agnostic; the pattern wrapper picks Material Symbols. |

---

### Behavior-only props

Passed through `...props` to the underlying element on every subcomponent:

| Prop | Type | Notes |
|---|---|---|
| `className` | `string` | Merged via `cn()` after the base sidebar-* class |
| `style` | `React.CSSProperties` | `SidebarProvider` also injects `--sidebar-width`; consumer styles spread on top |
| `onClick` etc. | native | Standard DOM handlers, especially relevant on `SidebarMenuButton` |
| `ref` | forwarded | See Component metadata table for the element each forwards to |

Provider-specific:

| Prop | Type | Notes |
|---|---|---|
| `defaultOpen` | `boolean` | Initial uncontrolled state |
| `open` | `boolean` | Controlled override |
| `onOpenChange` | `(open: boolean) => void` | Controlled handler |

---

### Shared helpers used in styles.js

| Helper | Source | Used in |
|---|---|---|
| `theme(...)` | Tailwind plugin context | All color / spacing / radius / breakpoint reads |
| `textContentLabelStyles(theme)` | Tailwind plugin util | `.sidebar-group-label` — applies the `text-content-label` composite typography |
| `transitionColorsStyles(theme)` | Tailwind plugin util | `.sidebar-menu-button` — smooth color transitions on hover / focus / active |
| `transitionAllStyles(theme)` | Tailwind plugin util | `.sidebar-overlay` force-mount branches |
| `animateIn(theme)` | Tailwind plugin util | `.sidebar-overlay` open state (non-force-mount) |
| `animateOut(theme)` | Tailwind plugin util | `.sidebar-overlay` closed state (non-force-mount) |

---

### Storybook coverage

| Story export | Args | Notes |
|---|---|---|
| `UncontrolledSidebar` | `children` = `<SidebarProvider><AppSidebar /><main>…<SidebarOutsideTrigger /></main></SidebarProvider>` | Sole story. Demonstrates the full compound API via the `AppSidebar` example in `src/patterns/Sidebar/Sidebar.tsx`. |

Only one Storybook story exists. It exercises the default desktop expanded state. The collapsed state, right-side mounting, controlled-mode usage, and the mobile branch are **not** covered as separate stories (see Gap #6).

---

### Gaps

Mismatches between the Figma node, the React implementation, and adjacent project conventions.

| # | Gap | Figma | React |
|---|---|---|---|
| 1 | **Code Connect API unavailable** | A full variant tree (every `state` / `collapsed` / `side` / `isActive` combination) is normally read via `mcp__figma__get_context_for_code_connect`. That endpoint returned `403 — Developer seat required`. | Variants table in this map is derived from `get_variable_defs` + the React source only. Re-scan once a Developer seat is granted. |
| 2 | **`SidebarGroupLabel` typography token reference** | Figma node exposes the composite `content/label` → maps to utility `text-content-label`. | `styles.js` applies `textContentLabelStyles(theme)` inline rather than the utility class. Functionally identical, but the inline form bypasses the canonical class — consider replacing with `text-content-label` (consistent with other components per `token-map.md` §15). |
| 3 | **Disabled state not implemented** | The Figma component set likely contains a Disabled state (standard for nav buttons). | `SidebarMenuButton` accepts native `disabled` via `...props` but applies no visual treatment for it. No `:disabled` selector in `styles.js`. |
| 4 | **A11y title/description hidden via `display:none`** | n/a | `Sidebar` mobile branch mounts `SheetTitle` and `SheetDescription` inside `<div className="hidden">` to satisfy Radix Dialog requirements. Title/description content is empty — screen-reader users hear nothing for the dialog name. Pass a real (visually-hidden) label instead. |
| 5 | **`aria-current` for active row** | Figma highlights the selected row visually. | `SidebarMenuButton isActive` sets only `data-active="true"`. No `aria-current="page"` is set, so screen readers don't announce the selection. |
| 6 | **Storybook coverage is shallow** | n/a | One story (`UncontrolledSidebar`) covers default desktop expanded. Missing: collapsed/offcanvas, `side="right"`, controlled mode, mobile sheet, `SidebarMenuButton` with `isActive` toggled, `isAvatar` standalone, `asChild` examples. |
| 7 | **Hardcoded layout constants** | n/a | `SIDEBAR_WIDTH`, `SIDEBAR_WIDTH_MOBILE`, `SIDEBAR_COOKIE_NAME`, `SIDEBAR_COOKIE_MAX_AGE` are file-private constants. The width is also injected as a CSS variable, but the cookie name/TTL are not configurable per consumer. |
| 8 | **`MOBILE_BREAKPOINT = 640` duplicates Tailwind `screens.sm`** | n/a | `useIsMobile` hardcodes `640` rather than reading `theme('screens.sm')`. If the design system breakpoint changes, this constant won't follow. |
| 9 | **Mobile branch depends on `Sheet` but doesn't surface it as a slot** | n/a | The mobile rendering implicitly inherits Sheet's overlay / animation / close-button suppression. Consumers can't customize the Sheet (e.g. anchor `side` is taken from the Sidebar prop, but other Sheet props are blocked). |
| 10 | **`color/bg/transparent` reported by Figma but no token in repo** | Figma variable defs include `color/bg/transparent` → `#ffffff00`. | `token-map.md` notes this token is only in the Claude Foundation library, not the Zemetric Foundation. Anywhere transparency is needed, code uses `transparent` literal. |

---

> **Generated by** `component-context-generator` skill (patched 2026-05-12) against Figma node `1577-66023` of file `eKAqJtRHEFoa6FOPw3xzCw`. Cross-referenced with `lib/design-system/token-map.md` and `src/patterns/Sidebar/Sidebar.stories.tsx`.
