# Token Extraction Reference

How to extract, parse, and normalize design tokens from various sources into a unified format
that can be translated to Figma variables and styles.

---

## Table of Contents
1. [Unified Token Format](#1-unified-token-format)
2. [CSS Custom Properties](#2-css-custom-properties)
3. [Tailwind Config](#3-tailwind-config)
4. [JS/TS Theme Objects](#4-jsts-theme-objects)
5. [Sass/SCSS Variables](#5-sassscss-variables)
6. [Color Conversion](#6-color-conversion)
7. [Unit Conversion](#7-unit-conversion)
8. [Typography Tokens](#8-typography-tokens)
9. [Shadow Tokens](#9-shadow-tokens)
10. [Handling Token References](#10-handling-token-references)

---

## 1. Unified Token Format

All extracted tokens normalize to this shape before Figma creation:

```json
{
  "colors": {
    "<token-name>": {
      "value": { "r": 0.0, "g": 0.0, "b": 0.0, "a": 1.0 },
      "originalValue": "#000000",
      "source": "var(--color-black)",
      "category": "neutral"
    }
  },
  "spacing": {
    "<token-name>": {
      "value": 16,
      "originalValue": "1rem",
      "source": "theme.spacing.md"
    }
  },
  "typography": {
    "<token-name>": {
      "fontFamily": "Inter",
      "fontSize": 16,
      "fontWeight": 400,
      "lineHeight": 24,
      "letterSpacing": 0,
      "originalValues": { "fontSize": "1rem", "lineHeight": "1.5" },
      "source": "theme.typography.body"
    }
  },
  "radii": {
    "<token-name>": { "value": 8, "originalValue": "0.5rem", "source": "var(--radius-md)" }
  },
  "shadows": {
    "<token-name>": {
      "layers": [
        { "x": 0, "y": 1, "blur": 3, "spread": 0, "color": { "r": 0, "g": 0, "b": 0, "a": 0.1 } }
      ],
      "originalValue": "0 1px 3px rgba(0,0,0,0.1)",
      "source": "var(--shadow-sm)"
    }
  }
}
```

---

## 2. CSS Custom Properties

### Extraction pattern
```bash
# Find all CSS files with custom properties
grep -rn "\-\-" <root>/src --include="*.css" | grep -v "node_modules"
```

### Parsing rules
```css
:root {
  --color-primary-500: #3B82F6;
  --spacing-md: 1rem;
  --font-size-base: 16px;
  --radius-lg: 0.75rem;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}
```

**Token name**: strip the `--` prefix, use as-is
**Category detection**: infer from naming convention:
- `--color-*`, `--bg-*`, `--text-*`, `--border-color-*` → colors
- `--spacing-*`, `--space-*`, `--gap-*`, `--padding-*`, `--margin-*` → spacing
- `--font-*`, `--text-*` (when value is a font/size) → typography
- `--radius-*`, `--rounded-*` → radii
- `--shadow-*` → shadows

**Handling var() references:**
```css
:root {
  --color-primary: #3B82F6;
  --button-bg: var(--color-primary);
}
```
Build a dependency graph and resolve references. Keep the original reference in `source` for
documentation, but resolve to the final value for Figma variable creation.

---

## 3. Tailwind Config

### Extraction
```bash
cat <root>/tailwind.config.{js,ts,mjs,cjs}
```

### Key paths in the config
```javascript
module.exports = {
  theme: {
    colors: { /* base palette */ },
    spacing: { /* spacing scale */ },
    fontSize: { /* type scale */ },
    borderRadius: { /* radii */ },
    boxShadow: { /* shadows */ },
    fontFamily: { /* font stacks */ },
    extend: {
      colors: { /* overrides and additions */ },
      // ... same structure
    }
  }
};
```

**Merge logic**: `theme.extend.*` merges on top of `theme.*` (and Tailwind defaults if
using the default theme). The skill should resolve this merge.

### Tailwind default values
If the config doesn't override a category, Tailwind's defaults apply. The most important:

**Default spacing scale** (used unless overridden):
`0: 0px, 0.5: 2px, 1: 4px, 1.5: 6px, 2: 8px, 2.5: 10px, 3: 12px, 3.5: 14px, 4: 16px, 5: 20px, 6: 24px, 8: 32px, 10: 40px, 12: 48px, 16: 64px, 20: 80px, 24: 96px`

**Default border radius**: `none: 0, sm: 2px, DEFAULT: 4px, md: 6px, lg: 8px, xl: 12px, 2xl: 16px, 3xl: 24px, full: 9999px`

If the config extends (not replaces) these, include the defaults in the token set.

### Nested color objects
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    900: '#1e3a8a',
    DEFAULT: '#3b82f6',
  }
}
```
Flatten to: `primary-50`, `primary-100`, `primary-500`, etc.
The `DEFAULT` key maps to just `primary` (no suffix).

---

## 4. JS/TS Theme Objects

### Common patterns

**styled-components / Emotion theme:**
```typescript
export const theme = {
  colors: { primary: '#3B82F6', secondary: '#10B981' },
  spacing: { xs: '4px', sm: '8px', md: '16px', lg: '24px', xl: '32px' },
  typography: {
    h1: { fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2 },
    body: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.5 },
  },
  radii: { sm: '4px', md: '8px', lg: '16px' },
};
```

**MUI createTheme:**
```typescript
const theme = createTheme({
  palette: {
    primary: { main: '#3B82F6', light: '#60A5FA', dark: '#2563EB' },
    secondary: { main: '#10B981' },
  },
  spacing: 8, // base unit, multiplied: spacing(1)=8, spacing(2)=16
  typography: {
    h1: { fontSize: '2.5rem', fontWeight: 700 },
  },
  shape: { borderRadius: 8 },
});
```

**Chakra UI theme:**
```typescript
const theme = extendTheme({
  colors: { brand: { 50: '#f0e4ff', 500: '#7928CA', 900: '#1a0533' } },
  space: { 1: '0.25rem', 2: '0.5rem', 4: '1rem' },
});
```

### Extraction approach
1. Find the theme file (look for `theme`, `tokens`, `designTokens` in exports)
2. Parse the object structure — handle nested objects by flattening with `/` separators
3. Resolve any `createTheme()` or `extendTheme()` wrapper (extract the config object inside)
4. Map framework-specific keys to unified categories:
   - MUI: `palette` → colors, `shape.borderRadius` → radii
   - Chakra: `space` → spacing, `colors` → colors

---

## 5. Sass/SCSS Variables

```scss
// _variables.scss
$color-primary: #3B82F6;
$color-secondary: #10B981;
$spacing-md: 16px;
$font-size-base: 1rem;
$radius-sm: 4px;
$shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
```

Parse `$variable-name: value;` pairs. Category detection uses the same naming heuristics
as CSS custom properties.

For Sass maps:
```scss
$colors: (
  'primary': #3B82F6,
  'secondary': #10B981,
);
```
Flatten to individual tokens: `primary`, `secondary`.

---

## 6. Color Conversion

All color values must be converted to Figma's RGBA format: `{ r, g, b, a }` where each
channel is a float from 0 to 1.

### Conversion formulas

**Hex → RGBA:**
```
#RGB    → r=R/15, g=G/15, b=B/15, a=1
#RRGGBB → r=RR/255, g=GG/255, b=BB/255, a=1
#RRGGBBAA → r=RR/255, g=GG/255, b=BB/255, a=AA/255
```

**rgb() / rgba() → RGBA:**
```
rgb(59, 130, 246) → r=59/255, g=130/255, b=246/255, a=1
rgba(0, 0, 0, 0.1) → r=0, g=0, b=0, a=0.1
rgb(59 130 246 / 0.5) → r=59/255, g=130/255, b=246/255, a=0.5
```

**hsl() / hsla() → RGBA:**
Convert via the HSL-to-RGB algorithm:
1. Normalize: H to 0-360, S and L to 0-1
2. C = (1 - |2L - 1|) × S
3. X = C × (1 - |(H/60) mod 2 - 1|)
4. m = L - C/2
5. Map (R1,G1,B1) based on H sector, add m to each

**oklch() → RGBA:**
oklch is increasingly common in modern CSS. Convert via:
1. OKLCH → OKLab → Linear sRGB → sRGB
2. This is complex — use a lookup table or the standard conversion matrices
3. If conversion is too complex, fall back to a reasonable approximation and note it

**Named colors:**
Map common CSS named colors (e.g., `red` → `#FF0000`, `transparent` → `rgba(0,0,0,0)`)

---

## 7. Unit Conversion

Figma uses pixels for all dimensions. Convert other units:

| Unit | Conversion | Notes |
|------|-----------|-------|
| `px` | 1:1 | Direct |
| `rem` | × 16 | Assume 16px root unless html font-size is set differently |
| `em` | × 16 | Approximate; actual depends on context |
| `%` | Skip | Percentage values are contextual, not absolute tokens |
| `vw`, `vh` | Skip | Viewport units aren't token-able |
| unitless (line-height) | × fontSize | e.g., lineHeight 1.5 with fontSize 16 = 24px |

### Detecting custom root font size
```bash
grep -r "html" <root>/src --include="*.css" | grep "font-size"
```
If found (e.g., `html { font-size: 14px; }`), use that value instead of 16px for rem conversion.

---

## 8. Typography Tokens

Typography tokens are composite — they combine multiple properties. Extract each sub-property:

```json
{
  "fontFamily": "Inter",
  "fontSize": 16,
  "fontWeight": 400,
  "lineHeight": 24,
  "letterSpacing": 0
}
```

### Font weight mapping
```
100 = Thin
200 = Extra Light
300 = Light
400 = Regular
500 = Medium
600 = Semi Bold    (note: in Figma/Inter, it's "Semi Bold" with a space)
700 = Bold
800 = Extra Bold   (note: "Extra Bold" with a space)
900 = Black
```

### Font family resolution
- Extract the first font in a font stack: `"Inter, sans-serif"` → `"Inter"`
- Common fonts available in Figma: Inter, Roboto, Open Sans, Lato, Montserrat, Poppins
- If the codebase uses a custom/uncommon font, note it in the report and default to Inter

### Creating Figma text styles
For each typography token, create a Figma text style (not just variables, since text styles
are more usable for designers):

```javascript
const style = figma.createTextStyle();
style.name = "Heading/Large";
style.fontSize = 32;
style.lineHeight = { value: 40, unit: "PIXELS" };
style.fontName = { family: "Inter", style: "Bold" };
style.letterSpacing = { value: -0.5, unit: "PIXELS" };
style.description = "heading-lg: 32px/40px Inter Bold. Source: theme.typography.headingLg";
```

---

## 9. Shadow Tokens

CSS shadows can have multiple layers. Parse each layer separately:

```
box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1);
```

Becomes two layers:
```json
[
  { "x": 0, "y": 1, "blur": 3, "spread": 0, "color": { "r": 0, "g": 0, "b": 0, "a": 0.1 } },
  { "x": 0, "y": 1, "blur": 2, "spread": -1, "color": { "r": 0, "g": 0, "b": 0, "a": 0.1 } }
]
```

### Creating Figma effect styles
```javascript
const style = figma.createEffectStyle();
style.name = "Shadow/Small";
style.effects = [
  {
    type: "DROP_SHADOW",
    visible: true,
    blendMode: "NORMAL",
    offset: { x: 0, y: 1 },
    radius: 3,
    spread: 0,
    color: { r: 0, g: 0, b: 0, a: 0.1 }
  }
];
style.description = "shadow-sm: 0 1px 3px rgba(0,0,0,0.1). Source: var(--shadow-sm)";
```

---

## 10. Handling Token References

Design tokens often reference other tokens:

```css
:root {
  --blue-500: #3B82F6;
  --color-primary: var(--blue-500);
  --button-bg: var(--color-primary);
}
```

### Resolution strategy
1. Build a dependency graph of all token references
2. Topologically sort: resolve base tokens first, then derived tokens
3. Store both the resolved value (for Figma creation) and the reference chain (for docs)

### In Figma
Figma variables support aliasing — a variable can reference another variable.
When a token references another token, create the Figma variable as an alias:

```javascript
// If --color-primary references --blue-500:
const blue500 = figma.variables.createVariable("blue-500", colorCollection, "COLOR");
blue500.setValueForMode(modeId, { r: 0.23, g: 0.51, b: 0.96, a: 1 });

const primary = figma.variables.createVariable("color-primary", colorCollection, "COLOR");
// Create alias instead of raw value:
primary.setValueForMode(modeId, { type: "VARIABLE_ALIAS", id: blue500.id });
```

This preserves the semantic relationship in Figma, making the system more maintainable and
matching the code architecture exactly.
