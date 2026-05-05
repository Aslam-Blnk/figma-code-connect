# Layout Extraction Reference

Detailed guidance for extracting flex, grid, and component layout data from Figma's
`get_design_context` response.

---

## Reading Auto-Layout (Flexbox) from Figma

Figma's Auto Layout maps directly to CSS Flexbox. When you see `layoutMode` in the
design context, map it like this:

| Figma property            | CSS equivalent                        |
|---------------------------|---------------------------------------|
| `layoutMode: HORIZONTAL`  | `flex-direction: row`                 |
| `layoutMode: VERTICAL`    | `flex-direction: column`              |
| `primaryAxisAlignItems`   | `justify-content`                     |
| `counterAxisAlignItems`   | `align-items`                         |
| `itemSpacing`             | `gap`                                 |
| `paddingTop/Right/Bottom/Left` | `padding`                        |
| `layoutWrap: WRAP`        | `flex-wrap: wrap`                     |
| `primaryAxisSizingMode: FIXED` | fixed width/height              |
| `primaryAxisSizingMode: AUTO`  | `width: fit-content` or `height: fit-content` |
| `counterAxisSizingMode: FIXED` | fixed cross-axis dimension      |
| `counterAxisSizingMode: AUTO`  | grows to fit children           |

### Alignment value mapping

| Figma value       | justify-content / align-items |
|-------------------|-------------------------------|
| `MIN`             | `flex-start`                  |
| `CENTER`          | `center`                      |
| `MAX`             | `flex-end`                    |
| `SPACE_BETWEEN`   | `space-between`               |
| `BASELINE`        | `baseline` (align-items only) |

### Child sizing in Figma Auto Layout

| Figma child property             | CSS equivalent                     |
|----------------------------------|------------------------------------|
| `layoutGrow: 1`                  | `flex: 1` (fill available space)   |
| `layoutGrow: 0`                  | `flex: none` (fixed/hug size)      |
| `layoutAlign: STRETCH`           | `align-self: stretch`              |
| `layoutAlign: INHERIT`           | inherits from parent align-items   |
| `minWidth` / `maxWidth`          | `min-width` / `max-width`          |
| `minHeight` / `maxHeight`        | `min-height` / `max-height`        |

---

## Reading Grid Layout from Figma

Figma doesn't have native CSS Grid, but grid-like layouts appear as:
1. **Grid layout guides** on frames (visual guides, not actual grid)
2. **Nested frames** with equal columns in horizontal Auto Layout
3. **Component grids** built with wrap + fixed-width children

When you see a frame with `layoutWrap: WRAP` and fixed-width children:
- Document as `display: grid` with `grid-template-columns: repeat(auto-fill, [child-width])`
- Or as `display: flex; flex-wrap: wrap; gap: [itemSpacing]`

When children form a clear N-column layout with consistent sizes:
- Document as `display: grid; grid-template-columns: repeat(N, 1fr)`
- Note the gutter (gap) value from `itemSpacing` or visual spacing

For complex grid areas (sidebars, asymmetric layouts), use:
- `grid-template-columns: [sidebar-width] 1fr`
- Or describe named areas if the layout has a clear two/three-column structure

---

## Component type identification

When the design context gives you a node, identify its implementation type:

| Figma node type / name pattern        | Implementation component         |
|---------------------------------------|----------------------------------|
| Frame/Group named "Button*", "CTA*"   | `<button>` or `<a>` styled       |
| COMPONENT with text + icon children   | Button variant                   |
| INSTANCE of a text input component   | `<input>` or `<textarea>`        |
| Frame with image fill                 | `<img>` or CSS `background-image`|
| VECTOR / SVG node                     | Inline SVG or `<img>` SVG        |
| Frame named "Card*", "Item*"          | Card component (`<article>`)     |
| Frame named "Modal*", "Dialog*"       | `<dialog>` or modal component    |
| Frame named "Nav*", "Header*"         | `<header>` + `<nav>`             |
| Repeated sibling frames (same name+N) | List / map over data array       |
| Frame named "Tag*", "Badge*", "Chip*" | Inline tag/badge component       |
| Frame named "Avatar*"                 | Avatar component                 |
| Frame named "Tooltip*"               | Tooltip / popover component      |
| Frame named "Toast*", "Alert*"        | Notification component           |
| Frame named "Skeleton*"               | Loading skeleton component       |

---

## Typography extraction

From `get_design_context`, text nodes include style properties. Map them:

| Figma property    | CSS property          |
|-------------------|-----------------------|
| `fontFamily`      | `font-family`         |
| `fontWeight`      | `font-weight`         |
| `fontSize`        | `font-size`           |
| `lineHeightPx`    | `line-height` (px) or compute ratio |
| `letterSpacing`   | `letter-spacing` (em or px) |
| `textAlignHorizontal` | `text-align`      |
| `textDecoration`  | `text-decoration`     |
| `textCase`        | `text-transform`      |
| `fills[0].color`  | `color` (convert RGBA 0–1 to hex) |

For `lineHeightPx`: if `lineHeightUnit` is `PERCENT` use the percentage directly;
if `AUTO`, set `line-height: normal` in CSS.

---

## Color extraction

Figma colors are RGBA with values from 0 to 1. Convert to CSS hex or rgba:
- `r: 0.2, g: 0.4, b: 0.8, a: 1` → `#3366cc` or `rgb(51, 102, 204)`
- `a < 1` → use `rgba(r*255, g*255, b*255, a)` — do not convert to hex

For fills with `type: GRADIENT_LINEAR`, document the gradient direction and stops.
For fills with `type: IMAGE`, note it as an image fill (background image or `<img>`).

---

## Effects (shadows, blur)

| Figma effect type    | CSS equivalent                                     |
|----------------------|----------------------------------------------------|
| `DROP_SHADOW`        | `box-shadow: [x]px [y]px [blur]px [spread]px rgba(...)` |
| `INNER_SHADOW`       | `box-shadow: inset [x]px [y]px [blur]px [spread]px rgba(...)` |
| `LAYER_BLUR`         | `filter: blur([radius]px)`                        |
| `BACKGROUND_BLUR`    | `backdrop-filter: blur([radius]px)`               |

---

## Spacing normalization

When listing spacing values, normalize to the project's scale if one exists (4px base
is most common). Round to nearest scale value and note if Figma uses a non-standard
value:
- 3px → assume 4px, note `[Rounded from 3px]`
- 13px → assume 12px or 16px, note `[Rounded from 13px — verify]`
- 24px, 32px, 48px — standard scale, use as-is

---

## Responsive design from Figma

If the Figma file has multiple frames for the same screen at different sizes:
- Note each frame and its width (e.g. Mobile @ 375px, Tablet @ 768px, Desktop @ 1440px)
- For each section, document layout changes per breakpoint using a table:

```markdown
| Breakpoint | Layout changes |
|------------|---------------|
| Desktop (≥1280px) | 3-column grid, sidebar visible |
| Tablet (768–1279px) | 2-column grid, sidebar collapses to top |
| Mobile (<768px) | Single column, sidebar hidden behind toggle |
```

If only one frame is provided, infer responsive behavior from the layout structure
and note `[Responsive behavior inferred — verify with designer]`.

---

## Section boundary detection

Use the screenshot + layer tree to identify where one section ends and the next begins:

1. Top-level children of the page frame → each is typically a section
2. Visual whitespace / dividers in the screenshot → section boundaries
3. Background color changes → new section
4. Semantic groupings: navigation, hero, content, footer are almost always separate

If a frame contains both a full-bleed background and content, the entire frame is
the section container. Document the background as a property of the section itself,
not as a child component.
