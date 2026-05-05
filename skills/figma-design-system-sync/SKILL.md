---
name: figma-design-system-sync
description: >
  Create a Figma design system from a React codebase — components with variants, Figma variables,
  Code Connect mappings, and documentation pages. Use when the user wants to sync React components
  to Figma, generate Figma from code, create Figma components matching React props, set up design
  tokens as Figma variables, establish Code Connect, or build an AI/MCP-friendly design system.
  Trigger on: "turn my components into Figma", "sync my design system", "create Figma from code",
  "mirror my React library in Figma", "set up Code Connect", "make my Figma AI-friendly", or any
  request to bridge a React/JS/TS component library with Figma. Handles .tsx and .jsx, uploaded
  files or repo URLs, and all token strategies (CSS vars, Tailwind, JS themes, Sass).
---

# Figma Design System Sync

Generate a production-grade Figma design system from a React codebase. The output is a 1:1
structural mirror of the code — every component, prop, variant, and token has a Figma
counterpart — layered with designer-friendly organization and rich AI/MCP-readable metadata.

---

## Phase 0 — Gather Inputs

Before doing anything, collect these from the user:

1. **The React codebase.** Accept either:
   - Uploaded files/folders (check `/mnt/user-data/uploads/`)
   - A GitHub repo URL (clone it with `git clone --depth 1`)
   - Pasted code snippets (for small libraries)

2. **The Figma target.** Ask:
   - "Do you have an existing Figma file I should add this to, or should I create a new one?"
   - If existing: get the file URL → extract `fileKey`
   - If new: use `Figma:create_new_file` to create one

3. **Quick sanity check.** Confirm:
   - "I'll scan your codebase, extract tokens and components, then build the Figma system. Sound good?"

---

## Phase 1 — Analyze the Codebase

Read `references/codebase-analysis.md` for the full analysis playbook. The short version:

### Step 1.1: Discover project structure
```bash
find <root> -type f \( -name "*.tsx" -o -name "*.jsx" -o -name "*.ts" -o -name "*.js" \) \
  | grep -v node_modules | grep -v __tests__ | grep -v .test. | grep -v .spec. | head -200
```

Look for the component library root — common patterns:
- `src/components/`, `src/ui/`, `lib/components/`, `packages/ui/src/`
- A barrel file (`index.ts`) re-exporting everything is a strong signal

### Step 1.2: Detect token strategy
Scan for design tokens across all common approaches:

| Strategy | Files to look for |
|----------|-------------------|
| CSS custom properties | `*.css` files with `--` variables, `:root` blocks |
| Tailwind | `tailwind.config.js/ts`, `theme.extend` |
| JS/TS theme objects | `theme.ts`, `tokens.ts`, `*.theme.ts`, `styled.d.ts` |
| Sass/SCSS variables | `_variables.scss`, `_tokens.scss` |
| CSS-in-JS | `ThemeProvider`, `createTheme()`, `styled-components` |

The skill should auto-detect which strategy (or mix) is in use. Don't assume one approach.

### Step 1.3: Extract design tokens
Build a normalized token map. Read `references/token-extraction.md` for parser details.

The output structure:
```json
{
  "colors": { "primary-500": "#3B82F6", "gray-100": "#F3F4F6" },
  "spacing": { "xs": "4px", "sm": "8px", "md": "16px" },
  "typography": {
    "heading-lg": { "fontFamily": "Inter", "fontSize": "32px", "fontWeight": 700, "lineHeight": "40px" },
  },
  "radii": { "sm": "4px", "md": "8px", "full": "9999px" },
  "shadows": { "sm": "0 1px 2px rgba(0,0,0,0.05)" },
  "breakpoints": {},
  "custom": {}
}
```

### Step 1.4: Extract components and their props
For each component file, extract:
- **Component name** (the default/named export)
- **Props interface/type** (TypeScript) or PropTypes (JavaScript)
- **Prop names, types, default values, and whether required**
- **Variant props** — props that control visual appearance (size, variant, color, state)
- **Boolean props** — often map to Figma boolean variants (disabled, loading, fullWidth)
- **Slot/children props** — indicate nestable/composable components
- **Import dependencies** — which tokens/other components it uses

Save the full analysis to `/home/claude/ds-analysis.json` for reference during Figma creation.

---

## Phase 2 — Plan the Figma Structure

The Figma file follows a **hybrid structure**: mirror the codebase organization, but layer
designer-friendly navigation on top.

### Page layout
```
📄 Cover            → Title, version, last sync date, codebase source
📄 Tokens           → All design tokens visualized as swatches/specimens
📄 Components       → One section per component, with all variants
📄 Patterns         → Common compositions (if detected in code)
📄 Documentation    → Per-component usage guidelines
📄 _Code Metadata   → Machine-readable annotations (AI/MCP reference page)
```

### Component organization within the Components page
Group components into sections. Use the folder structure from code as the primary grouping,
but apply these designer-friendly labels:

| Code folder pattern | Figma section name |
|---------------------|--------------------|
| `buttons/`, `button/` | Actions |
| `inputs/`, `form/`, `fields/` | Form Controls |
| `layout/`, `grid/`, `container/` | Layout |
| `nav/`, `navigation/`, `menu/` | Navigation |
| `modal/`, `dialog/`, `drawer/` | Overlays |
| `card/`, `list/`, `table/` | Data Display |
| `alert/`, `toast/`, `badge/` | Feedback |
| (ungrouped) | General |

If the code uses a flat structure (all components in one folder), apply this categorization
by analyzing each component's props and rendered output.

---

## Phase 3 — Create Figma Variables (Tokens)

Use `Figma:use_figma` to create Figma variables that mirror the extracted tokens.

### Variable collections to create:

1. **Colors** — one variable per color token
   - Group by semantic category: `primary/`, `secondary/`, `neutral/`, `success/`, `warning/`, `error/`
   - Use the token name as the variable name (e.g., `primary-500`)
   - Type: `COLOR`

2. **Spacing** — one variable per spacing token
   - Name matches code token name (e.g., `spacing/xs`, `spacing/sm`)
   - Type: `FLOAT`

3. **Radii** — border radius tokens
   - Type: `FLOAT`

4. **Typography** — composite tokens
   - Since Figma doesn't have composite variable types, create individual variables:
     `typography/heading-lg/fontSize`, `typography/heading-lg/lineHeight`, etc.
   - Also create Figma **text styles** for each typography token (these are more usable for designers)

5. **Shadows** — create as Figma **effect styles** (not variables, since Figma variables don't support effects)

### Figma Plugin API pattern for variable creation:
```javascript
// Create a variable collection
const collection = figma.variables.createVariableCollection("Colors");

// Create a variable
const variable = figma.variables.createVariable("primary-500", collection, "COLOR");
variable.setValueForMode(collection.defaultModeId, { r: 0.23, g: 0.51, b: 0.96, a: 1 });

// Set description for AI discoverability
variable.description = "Primary brand color, 500 weight. CSS: var(--primary-500). Tailwind: bg-primary-500";
```

Important: every variable gets a description that includes the original code reference
(CSS variable name, Tailwind class, or JS token path). This is what makes it AI/MCP friendly —
any agent querying the design system can trace a variable back to code.

---

## Phase 4 — Create Figma Components

For each React component, create a Figma component (or component set if it has variants).

Read `references/component-creation.md` for detailed Figma Plugin API patterns.

### The mapping logic:

**React props → Figma variants:**
- Enum/union props (e.g., `size: 'sm' | 'md' | 'lg'`) → Figma variant property
- Boolean props (e.g., `disabled?: boolean`) → Figma boolean variant property
- String literal unions for appearance → Figma variant property

**What becomes a variant vs. a separate component:**
- Props that change visual appearance → variant properties on a component set
- Props that change content (children, label text) → instance swap or text property
- Props that change behavior only (onClick, onChange) → not represented in Figma, but documented

### Component creation workflow:
1. Create a base frame with auto-layout that approximates the component's layout
2. Apply the correct Figma variables for colors, spacing, radii
3. If the component has variant props, create a component set with all combinations
4. Set component descriptions with structured metadata (see Phase 6)
5. Use `setSharedPluginData` to store machine-readable prop mappings

### Naming convention:
```
ComponentName/Variant=Value, Size=md, Disabled=false
```
This follows Figma's component set naming convention and maps directly to React props.

### Auto-layout rules:
- Use auto-layout on every component (mirrors flexbox in React)
- Horizontal for inline components (buttons, badges, chips)
- Vertical for block components (cards, modals, form groups)
- Bind spacing to Figma variables where possible

---

## Phase 5 — Set Up Code Connect

After components exist in Figma, create Code Connect mappings so that:
- Developers see React code snippets when inspecting Figma components
- AI agents can trace Figma nodes back to source files

### For each component:
1. Get the created component's node ID
2. Call `Figma:add_code_connect_map` with:
   - `componentName`: the React component name
   - `source`: relative path to the component file in the codebase
   - `label`: "React"
   - `template`: (optional) a Code Connect template showing prop usage

### Code Connect template example:
```javascript
// For a Button component with size and variant props:
const template = `
import { Button } from './components/Button';

<Button
  variant="${figma.properties.enum("Variant", { Primary: "primary", Secondary: "secondary" })}"
  size="${figma.properties.enum("Size", { Small: "sm", Medium: "md", Large: "lg" })}"
  disabled={${figma.properties.boolean("Disabled", { true: true, false: false })}}
>
  ${figma.properties.string("Label")}
</Button>
`;
```

### Bulk mapping:
If there are many components, use `Figma:send_code_connect_mappings` to send all mappings
in one call rather than one-by-one.

---

## Phase 6 — Add AI/MCP-Friendly Metadata

This is what makes the design system truly machine-readable. Three layers of metadata:

### Layer 1: Component descriptions (visible in Figma UI)
Every component and component set gets a structured description:

```
Button — Primary action trigger.

Props:
• variant: "primary" | "secondary" | "ghost" | "danger" (default: "primary")
• size: "sm" | "md" | "lg" (default: "md")
• disabled: boolean (default: false)
• loading: boolean (default: false)

Source: src/components/Button.tsx
Import: import { Button } from '@/components/Button'

Usage: Use for primary actions. Use "danger" variant for destructive actions.
```

### Layer 2: Shared plugin data (machine-readable, queryable by MCP)
Use `setSharedPluginData` with namespace `"design-system-sync"` to store structured JSON:

```javascript
node.setSharedPluginData("design-system-sync", "component-meta", JSON.stringify({
  componentName: "Button",
  sourcePath: "src/components/Button.tsx",
  importStatement: "import { Button } from '@/components/Button'",
  props: [
    { name: "variant", type: "enum", values: ["primary","secondary","ghost","danger"], default: "primary" },
    { name: "size", type: "enum", values: ["sm","md","lg"], default: "md" },
    { name: "disabled", type: "boolean", default: false },
  ],
  dependencies: ["Icon", "Spinner"],
  lastSyncedAt: "2025-05-01T00:00:00Z",
  codebaseHash: "<short-hash>"
}));
```

### Layer 3: Documentation page
For each component, create a frame on the Documentation page containing:
- Component name as heading
- Visual examples of each variant
- Props table (rendered as a Figma table/grid)
- Do's and Don'ts (if inferrable from prop constraints)
- Code snippet showing basic usage

---

## Phase 7 — Create Cover & Summary

On the Cover page, create a frame with:
- Design system name (derived from package.json name or repo name)
- Version (from package.json if available)
- Component count
- Token count
- Last synced timestamp
- Source (repo URL or "uploaded files")
- A table of contents linking to each page

---

## Phase 8 — Validate & Report

After creation, run validation:

1. **Token coverage**: Are all code tokens represented as Figma variables?
2. **Component coverage**: Does every exported React component have a Figma counterpart?
3. **Code Connect coverage**: Does every Figma component have a Code Connect mapping?
4. **Metadata completeness**: Does every component have description + shared plugin data?

Generate a sync report as a markdown file and also display it in chat:

```markdown
# Design System Sync Report

## Summary
- Components synced: 24/24 ✓
- Tokens created: 86 variables, 12 text styles, 4 effect styles
- Code Connect mappings: 24/24 ✓
- Documentation pages: 24/24 ✓

## Token Breakdown
- Colors: 32
- Spacing: 8
- Typography: 16
- Radii: 6
- Shadows: 4

## Warnings
- `Tooltip` component: complex render prop not representable as Figma variant
- `theme.shadows.xl`: multi-layer shadow simplified to single layer

## Figma File
[Link to file]
```

Save the report to `/mnt/user-data/outputs/design-system-sync-report.md`.

---

## Important Implementation Notes

### Figma Plugin API constraints
- Font loading: call `figma.loadFontAsync({ family, style })` before setting text
- Default to "Inter" / "Regular" if the codebase font isn't available in Figma
- Batch operations: group `use_figma` calls logically (all variables in one call, components
  in batches of 3-5) to avoid hitting rate limits
- Page creation: use `figma.createPage()` and `figma.setCurrentPageAsync(page)` — never
  assign `figma.currentPage` directly

### Handling large codebases
- If the component library has 30+ components, break Phase 4 into batches
- Process 3-5 components per `use_figma` call
- Show progress to the user: "Creating components... 12/36 done"

### Error recovery
- If a `use_figma` call fails, log the error, skip that component, and continue
- Report skipped components in the final sync report
- Common failures: unsupported font, overly complex variant matrix (>100 combinations)

### Token value parsing
Read `references/token-extraction.md` for robust parsing of:
- CSS `rgb()`, `hsl()`, `hex`, `oklch()` → Figma RGBA
- `rem`/`em` → `px` conversion (assume 16px base unless detected otherwise)
- Tailwind config theme values → resolved pixel/color values
- CSS `var()` references → resolved values via dependency tracking

---

## Reference Files

Read these before starting each phase:
- `references/codebase-analysis.md` — Detailed patterns for parsing React codebases
- `references/token-extraction.md` — Token parsing, color conversion, value normalization
- `references/component-creation.md` — Figma Plugin API patterns for component/variant creation
