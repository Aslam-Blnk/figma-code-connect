---
name: figma-to-markdown
description: >
  Converts a Figma design into a detailed, section-by-section markdown specification
  rich enough for an AI agent or developer to generate production-level code without
  opening Figma. Use whenever the user wants to: document a Figma design, convert
  Figma to markdown, generate a design spec, create a code-ready spec, "document this
  design", "write a spec for this Figma", "convert Figma to spec", "generate
  implementation spec", "break down this Figma design", "create a markdown from
  Figma", "extract design info from Figma", "figma to markdown", "design
  specification", "break this into sections", "I want to implement this design",
  "turn this Figma into a spec", "generate a handoff doc". Produces structured markdown
  with layout (flex/grid), typography, color tokens, spacing, component hierarchy,
  states, and interactions — organized by visual page sections so each section can be
  implemented independently.
---

# Figma → Markdown Design Spec

Converts a Figma design into a structured, production-ready markdown specification
organized by page section. Each section contains all layout, component, typography,
color, spacing, and interaction details needed to write code without opening Figma.

---

## When to use

- User provides a Figma URL and wants a written spec, handoff doc, or code-ready breakdown
- User says "convert this Figma to markdown", "document this design", "write a spec",
  "break this into sections", "create a design spec", "generate implementation spec",
  "figma to markdown", "extract design info", "I want to implement this"
- User wants to work on design sections independently with an AI agent
- User wants to review a design before implementation starts

---

## Step 1 — Retrieve the design

Parse the Figma URL to extract `fileKey` and `nodeId`:
- `figma.com/design/:fileKey/...?node-id=:nodeId` — convert `-` to `:` in nodeId
- If no nodeId: use the file root

Call `get_design_context` with the `fileKey` and `nodeId`. This returns:
- Component tree with names, types, and layout properties
- Auto-layout (flex/grid) properties on frames and groups
- Typography, color fills, and effect styles
- Variant and interactive component data

Also call `get_screenshot` on the same node to get a visual reference image. Use it
to verify section boundaries match what you see visually and to confirm component names.

If the file uses design variables or tokens, call `get_variable_defs` to list them.

---

## Step 2 — Map the visual sections

Before writing the spec, identify the top-level visual sections of the page/screen from
the component tree and screenshot. Typical sections:

- Navigation / Header
- Hero / Banner
- Content area (may have sub-sections: sidebar, main content, cards grid, etc.)
- Forms / Input areas
- Modals / Overlays
- Footer

Name each section by its visual role (not the Figma layer name if it's generic like
"Frame 47"). Aim for 4–10 sections for a full page; fewer for a single component.

Each section becomes its own `###` heading in the output. This lets the user — or an
AI agent — implement one section at a time without reading the whole document.

---

## Step 3 — Extract design tokens

Before writing sections, collect all reused values from the design and list them as
tokens. Scan all layers for:

**Colors**
- Background fills, border colors, text colors, icon colors
- Group by role: primary, secondary, neutral, semantic (success/warning/error/info),
  overlay, surface

**Typography**
- Each distinct font style: family, weight, size, line-height, letter-spacing
- Name by role: Heading 1–6, Body, Caption, Label, Code, etc.

**Spacing**
- Recurring padding/margin/gap values — list as a spacing scale (4, 8, 12, 16, 24, etc.)

**Breakpoints** (if variants show responsive states)
- Mobile, Tablet, Desktop widths if present

**Radii & Shadows**
- Recurring border-radius values and box-shadow definitions

List these in the "Design Tokens" section at the top of the spec. Reference token names
(not raw values) throughout the rest of the document so the spec reads like real code.

---

## Step 4 — Document each section

For every section, produce a `###` block with these sub-sections:

### [Section Name]

**Purpose:** One sentence — what this section does for the user.
**Semantic element:** The HTML element that best represents it (`<header>`, `<nav>`,
`<main>`, `<section>`, `<aside>`, `<footer>`, `<form>`, `<dialog>`, etc.)

#### Layout
Describe the layout system on the section container. Be explicit:

For **Flexbox containers**:
```
- display: flex
- flex-direction: row | column
- justify-content: flex-start | center | space-between | space-around | flex-end
- align-items: flex-start | center | flex-end | stretch | baseline
- flex-wrap: nowrap | wrap
- gap: [value]
- padding: [top right bottom left]
```

For **CSS Grid containers**:
```
- display: grid
- grid-template-columns: [definition — e.g. repeat(3, 1fr) or 240px 1fr]
- grid-template-rows: [definition]
- grid-template-areas: [named areas if applicable]
- gap: [row-gap] [column-gap]
- padding: [value]
```

For **nested sub-containers** within the section, document each one the same way
under an indented sub-heading.

Include the section's:
- `width` / `max-width` / `min-width`
- `height` / `min-height` (if constrained)
- Responsive behavior: how the layout changes at breakpoints (stack to column, hide
  sidebar, grid becomes 1-col, etc.)

#### Components

List every direct child component. For each one:

```
##### [Component Name]
- Type: [Button | Input | Card | Image | Icon | Badge | Tag | Text | Link | Avatar | etc.]
- Variant: [Primary | Secondary | Ghost | Destructive — if applicable]
- State: [Default | Hover | Active | Disabled | Loading | Error — document all visible]
- Content: [exact text string, placeholder text, or "dynamic — [description]"]
- Width: [value | fill | hug]
- Height: [value | fill | hug]
- Padding: [top right bottom left]
- Typography: [token name — e.g. Body/Regular]
- Color (text): [token]
- Color (bg): [token]
- Color (border): [token, or "none"]
- Border radius: [value or token]
- Icon: [name/description if present, position: left | right | only]
- Shadow: [token or "none"]
- Interactive: [Yes/No — describe click/hover behavior if yes]
```

If a component contains nested sub-components (e.g. a Card with an image, title, body,
and button), document the card layout and then nest each child under it.

For repeating components (a list of cards, table rows, nav items) document ONE item in
full and note "× N items" or "dynamic count from data".

#### States & Interactions

List every interactive state visible in the design:

- Hover: what changes (color, shadow, underline, scale, cursor)
- Focus: focus ring color, offset, style
- Active/Pressed: visual change
- Disabled: opacity, cursor change, pointer-events behavior
- Loading: skeleton, spinner, or shimmer behavior
- Error / Success: color, icon, message placement
- Empty: empty-state illustration or message

For animations or transitions noted in the design, describe:
- Property being animated (opacity, transform, background-color, etc.)
- Duration and easing (if specified)

#### Accessibility notes

Flag anything relevant for implementation:
- Keyboard navigation pattern (tab order, arrow key behavior for dropdowns/lists)
- Required ARIA roles or attributes (aria-label, aria-expanded, role="dialog", etc.)
- Focus management (modals must trap focus; dropdowns must restore focus on close)
- Color contrast status (pass | fail | needs verification)
- Text alternatives for images and icons

---

## Step 5 — Component inventory

After all sections, add a **Component Inventory** table listing every distinct
component type found across all sections — with how many times it appears and which
sections use it. This helps the implementer know which components to build as
reusable shared components vs. one-off elements.

```markdown
| Component       | Count | Sections                        | Reusable? |
|-----------------|-------|---------------------------------|-----------|
| Primary Button  | 8     | Hero, CTA Banner, Form, Footer  | Yes       |
| Nav Link        | 5     | Navigation                      | Yes       |
| Product Card    | 12    | Product Grid, Related Items     | Yes       |
```

---

## Step 6 — Implementation checklist

End the spec with a checklist the implementer (human or AI) can use:

```markdown
## Implementation Checklist

### Setup
- [ ] Define design tokens (colors, typography, spacing) in CSS variables or theme file
- [ ] Set up base typography styles (reset + global font family)
- [ ] Configure responsive breakpoints

### Sections (implement in this order for dependency clarity)
- [ ] [Section 1 name] — [~effort estimate: S/M/L]
- [ ] [Section 2 name] — [S/M/L]
- [ ] ...

### Shared components (build before sections that use them)
- [ ] [Component A]
- [ ] [Component B]
- [ ] ...

### After implementation
- [ ] Verify contrast ratios for all text/background pairs
- [ ] Test keyboard navigation through interactive elements
- [ ] Test responsive layout at each breakpoint
- [ ] Verify all interactive states render correctly
```

---

## Output format

Produce the full spec as a single markdown document. Follow this top-level structure:

```
# Design Spec: [Page or Component Name]
> **Source:** [Figma URL]
> **Frame/Node:** [Node name from Figma]
> **Generated:** [today's date]

---

## Overview
[2–3 sentences: what this screen/component is, who uses it, what problem it solves]

---

## Design Tokens

### Colors
| Token | Value | Usage |
|-------|-------|-------|

### Typography
| Token | Family | Weight | Size | Line-height | Letter-spacing |
|-------|--------|--------|------|-------------|----------------|

### Spacing Scale
| Token | Value |
|-------|-------|

### Border Radius
### Shadows
### Breakpoints

---

## Page Layout
[Overall layout description — how sections stack/grid at the page level]
[Diagram in ASCII or description if it helps]

---

## Sections

### 1. [Section Name]
...

### 2. [Section Name]
...

[continue for all sections]

---

## Component Inventory
[table]

---

## Implementation Checklist
[checklist]
```

Keep section headings consistent. Use code blocks for CSS/layout property lists so
they render clearly. Use tables for tokens and component inventory.

---

## Quality bar

The finished spec should let an AI agent implement the page without asking any
clarifying questions about layout, spacing, colors, typography, or component behavior.
If any value is ambiguous in the Figma data, make a reasonable assumption and note it
with `[Assumed: reason — verify]`.

Do not reference Figma layer IDs or internal names in the output unless they are also
the intended component names. Use human-readable, intent-driven names.

---

## After delivering the spec

- Offer to implement any single section immediately: "Want me to start coding
  [Section Name]?"
- Offer to export the spec as a `.md` file the user can save
- If the design has variants for mobile/tablet, offer to extend the spec with a
  responsive addendum for any section
- If Code Connect mappings exist for the file, note which components already have
  code mappings and can be used directly from the codebase
