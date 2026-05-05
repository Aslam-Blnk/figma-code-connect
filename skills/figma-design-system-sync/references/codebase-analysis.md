# Codebase Analysis Reference

Detailed patterns and strategies for analyzing a React codebase to extract design system
information. This document covers project structure detection, component discovery, and
prop extraction across both TypeScript and JavaScript codebases.

---

## Table of Contents
1. [Project Structure Detection](#1-project-structure-detection)
2. [Component Discovery](#2-component-discovery)
3. [Prop Extraction — TypeScript](#3-prop-extraction-typescript)
4. [Prop Extraction — JavaScript](#4-prop-extraction-javascript)
5. [Identifying Variant Props](#5-identifying-variant-props)
6. [Dependency Mapping](#6-dependency-mapping)
7. [Barrel File Analysis](#7-barrel-file-analysis)

---

## 1. Project Structure Detection

### Finding the component library root
Run a file tree scan and look for these patterns (in priority order):

```bash
# Check for common component library roots
for dir in src/components src/ui lib/components packages/ui/src src/lib/components; do
  if [ -d "<root>/$dir" ]; then
    echo "Found component root: $dir"
  fi
done
```

**Strong signals for the library root:**
- A barrel file (`index.ts` or `index.js`) that re-exports components
- A `package.json` with a "main" or "exports" field pointing here
- Multiple `.tsx`/`.jsx` files with `export default` or `export const` of React components

**Ambiguity resolution:**
If multiple candidate roots exist (e.g., both `src/components/` and `packages/ui/src/`):
- Prefer `packages/*/src/` in monorepos (it's the published library)
- If no monorepo, prefer the directory with the most component files
- Ask the user if truly ambiguous

### Detecting the styling approach
Check these files in order:

```bash
# Tailwind
ls <root>/tailwind.config.{js,ts,mjs,cjs} 2>/dev/null

# CSS Modules
find <root>/src -name "*.module.css" -o -name "*.module.scss" | head -3

# Styled-components / Emotion
grep -rl "styled\." <root>/src --include="*.tsx" --include="*.jsx" | head -3
grep -rl "@emotion" <root>/src --include="*.tsx" --include="*.jsx" | head -3

# CSS-in-JS theme
find <root>/src -name "theme.ts" -o -name "theme.js" -o -name "tokens.ts" | head -5

# Plain CSS custom properties
grep -rl "\-\-" <root>/src --include="*.css" | head -3

# Sass variables
find <root>/src -name "_variables.scss" -o -name "_tokens.scss" | head -5
```

Record ALL detected approaches — many projects use multiple (e.g., Tailwind for utilities +
CSS variables for theming + a theme.ts for runtime access).

---

## 2. Component Discovery

### Scanning for React components
A file exports a React component if it matches any of these patterns:

```
# Default exports
export default function ComponentName
export default class ComponentName
export default React.memo(
export default React.forwardRef(
const ComponentName = ...; export default ComponentName

# Named exports (common in libraries)
export function ComponentName
export const ComponentName = React.forwardRef(
export const ComponentName: React.FC<
export const ComponentName = memo(
export const ComponentName = styled(
```

### Filtering out non-components
Skip files matching:
- `*.test.*`, `*.spec.*`, `*.stories.*`, `*.story.*`
- `__tests__/`, `__mocks__/`, `__fixtures__/`
- `*.d.ts` (type declarations — read these for types, but they aren't components)
- `utils.*`, `helpers.*`, `hooks.*`, `constants.*`, `types.*`
- `index.ts` barrel files (these re-export, not define)

### Building the component manifest
For each discovered component file, record:

```json
{
  "name": "Button",
  "filePath": "src/components/Button.tsx",
  "language": "tsx",
  "exportType": "default",
  "hasForwardRef": true,
  "hasMemo": false,
  "propsInterface": "ButtonProps",
  "dependencies": ["Icon", "Spinner"],
  "tokenUsage": ["--color-primary", "--spacing-md", "--radius-sm"]
}
```

---

## 3. Prop Extraction — TypeScript

TypeScript codebases define props via `interface` or `type`. Extract these using text parsing.

### Pattern: Interface declaration
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}
```

**Extraction rules:**
- Property name: text before the `?:` or `:`
- Optional: has `?` before `:`
- Type: text after `:` until `;` or end of line
- Default values: look in the function signature destructuring or the component body:
  ```typescript
  const Button = ({ variant = 'primary', size = 'md', ...props }: ButtonProps) => {
  ```

### Pattern: Type alias
```typescript
type ButtonProps = {
  variant?: 'primary' | 'secondary';
} & BaseComponentProps;
```

For intersection types (`&`), resolve the base type by finding its definition.

### Pattern: Extending/Omitting HTML attributes
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}
```

Only extract the custom props (not the HTML attributes). The HTML attributes are standard
and don't need Figma variants.

### Complex type patterns to handle
```typescript
// Mapped types — resolve to their values
type Size = 'sm' | 'md' | 'lg';
type ButtonProps = { size?: Size };

// Conditional types — use the most common branch
type Props = { as?: 'button' | 'a' } & (
  { as: 'button'; onClick: () => void } |
  { as: 'a'; href: string }
);

// Enum-like const objects
const VARIANTS = { primary: 'primary', secondary: 'secondary' } as const;
type Variant = keyof typeof VARIANTS;
```

---

## 4. Prop Extraction — JavaScript

JavaScript codebases may use PropTypes or JSDoc for prop definitions.

### Pattern: PropTypes
```javascript
Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  disabled: false,
};
```

### Pattern: Destructured defaults (no PropTypes)
```javascript
function Button({ variant = 'primary', size = 'md', disabled = false, children }) {
```

If no PropTypes or TypeScript, infer types from default values and usage patterns.

---

## 5. Identifying Variant Props

Not all props should become Figma variants. Classify each prop:

### → Figma variant property
Props that change **visual appearance**:
- `variant`, `color`, `size`, `weight`, `shape`, `appearance`, `intent`
- Any prop with a small set of string literal values (<= 8 options)
- `boolean` props that toggle visual states: `disabled`, `loading`, `active`, `selected`, `error`

### → Figma text property
- `label`, `title`, `description`, `placeholder`, `helperText`
- `children` when the component renders text content

### → Figma instance swap property
- `icon`, `leftIcon`, `rightIcon`, `avatar`
- `children` when the component nests other components

### → Not represented in Figma (document only)
- Event handlers: `onClick`, `onChange`, `onFocus`
- Refs: `ref`, `innerRef`
- HTML pass-through: `className`, `style`, `id`, `data-*`, `aria-*`
- Complex objects: `options`, `items`, `data`, `config`

### Variant matrix limits
If the combination of all variant props produces > 64 variants, reduce by:
1. Drop the least impactful boolean props (e.g., `fullWidth`)
2. Merge similar variants (e.g., `ghost` and `link` into one)
3. Document the full set but only create the most common combinations
4. Note the simplification in the sync report

---

## 6. Dependency Mapping

Track which components import other components from the same library:

```bash
# Find internal imports for each component
grep -E "from ['\"]\./" <component-file>
```

This helps determine:
- **Composition relationships** — a Card that uses Button internally
- **Shared tokens** — multiple components using the same color variable
- **Documentation cross-references** — "Used by: Card, Dialog, Popover"

---

## 7. Barrel File Analysis

Barrel files (`index.ts`) tell you what the library considers its public API:

```typescript
export { Button } from './Button';
export { Card } from './Card';
export { Input } from './Input';
export type { ButtonProps, CardProps, InputProps } from './types';
```

Only create Figma components for publicly exported components. Internal/private components
(not in the barrel file) can be noted in metadata but don't get their own Figma counterpart
unless they're visually distinct building blocks.
