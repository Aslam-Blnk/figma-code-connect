#!/usr/bin/env node
// Generates COMPONENTS.md — a flat markdown reference of every Storybook story.
// Run: node scripts/generate-components-md.mjs
import { readFileSync, writeFileSync } from 'fs'
import { glob } from 'glob'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = `${__dirname}/..`
const OUT = `${ROOT}/COMPONENTS.md`

// ─── Helpers ──────────────────────────────────────────────────────────────────

// Extract content inside the outermost { } starting at startIdx
function extractBraceBlock(src, startIdx) {
  let depth = 0
  for (let i = startIdx; i < src.length; i++) {
    if (src[i] === '{') depth++
    else if (src[i] === '}') {
      depth--
      if (depth === 0) return src.slice(startIdx + 1, i)
    }
  }
  return ''
}

// Pull simple scalar props (string / number / boolean) from an args block
// Returns array of "key=value" strings for the props table
function extractScalarProps(argsBlock) {
  const props = []
  // Match: key: 'value' | key: "value" | key: true | key: false | key: 123
  for (const m of argsBlock.matchAll(/\b(\w+):\s*(?:'([^']*)'|"([^"]*)"|(true|false)|(\d+(?:\.\d+)?))/g)) {
    const key = m[1]
    if (key === 'children') continue
    const val = m[2] ?? m[3] ?? m[4] ?? m[5]
    const quoted = m[2] !== undefined || m[3] !== undefined
    props.push(quoted ? `${key}="${val}"` : `${key}={${val}}`)
  }
  return props
}

// Detect whether args block contains a JSX children value
function hasJSXChildren(argsBlock) {
  return /\bchildren:\s*[<(]/.test(argsBlock)
}

// Build a minimal JSX usage line from component name + args block
function buildUsage(componentName, argsBlock) {
  if (!argsBlock) return `<${componentName} />`
  const props = extractScalarProps(argsBlock)
  const propsStr = props.length ? ' ' + props.join(' ') : ''

  // Simple string children
  const strChildM = argsBlock.match(/\bchildren:\s*['"]([^'"]+)['"]/)
  if (strChildM) {
    return `<${componentName}${propsStr}>${strChildM[1]}</${componentName}>`
  }

  // JSX / complex children
  if (hasJSXChildren(argsBlock)) {
    return `<${componentName}${propsStr}>{/* JSX children */}</${componentName}>`
  }

  return `<${componentName}${propsStr} />`
}

// ─── Parser ───────────────────────────────────────────────────────────────────

function parseFile(filePath) {
  const raw = readFileSync(`${ROOT}/${filePath}`, 'utf-8')

  // Title
  const titleM = raw.match(/title:\s*['"]([^'"]+)['"]/)
  if (!titleM) return null
  const title = titleM[1]

  // Component name used in meta.component (first word after "component:")
  const componentNameM = raw.match(/\bcomponent:\s*([A-Z]\w*)/)
  const componentName = componentNameM ? componentNameM[1] : ''

  // @/ imports only (skip type-only imports)
  const imports = []
  for (const m of raw.matchAll(/^import\s+(?!type\s*[{*])([^'"]+?)\s+from\s+['"](@\/[^'"]+)['"]/gm)) {
    imports.push(`import ${m[1].trim()} from '${m[2]}'`)
  }

  // Meta-level default args (merged into every story)
  let metaArgsBlock = ''
  const metaArgsM = raw.match(/\bargTypes:\s*\{/) // find argTypes to know where meta args end
  const metaBodyStart = raw.indexOf('{', raw.match(/^const meta/)?.index ?? 0)
  if (metaBodyStart !== -1) {
    const metaBody = extractBraceBlock(raw, metaBodyStart)
    const defaultArgsM = metaBody.match(/\bargs:\s*\{/)
    if (defaultArgsM) {
      const argsStart = metaBody.indexOf('{', defaultArgsM.index)
      metaArgsBlock = extractBraceBlock(metaBody, argsStart)
    }
  }

  // Individual stories — match `export const Name: Story`
  const stories = []
  for (const m of raw.matchAll(/^export const (\w+):\s*Story[^\n]*=\s*(\{)/gm)) {
    const name = m[1]
    const storyBodyStart = raw.indexOf('{', m.index + m[0].length - 1)
    const storyBody = extractBraceBlock(raw, storyBodyStart)

    // Story-level args
    let argsBlock = metaArgsBlock // start with meta defaults
    const storyArgsM = storyBody.match(/\bargs:\s*\{/)
    if (storyArgsM) {
      const argsStart = storyBody.indexOf('{', storyArgsM.index)
      const storyArgs = extractBraceBlock(storyBody, argsStart)
      // Merge: story args override meta args (simple concatenation is enough for display)
      argsBlock = storyArgs + (metaArgsBlock ? '\n' + metaArgsBlock : '')
    }

    const usage = buildUsage(componentName, argsBlock)
    const scalarProps = extractScalarProps(argsBlock)
    const childrenType = hasJSXChildren(argsBlock)
      ? 'JSX'
      : argsBlock.match(/\bchildren:\s*['"]([^'"]+)['"]/)
        ? `"${argsBlock.match(/\bchildren:\s*['"]([^'"]+)['"]/)[1]}"`
        : '—'

    stories.push({ name, usage, scalarProps, childrenType })
  }

  return { title, componentName, imports, stories, filePath }
}

// ─── Group & render ───────────────────────────────────────────────────────────

const CATEGORY_ORDER = [
  'Design System / Typography',
  'Design System / Components',
  'Design System / Patterns',
  'Design System / Pages',
]

const allFiles = glob.sync('src/**/*.stories.tsx', { cwd: ROOT }).sort()
const byCategory = {}

for (const file of allFiles) {
  const parsed = parseFile(file)
  if (!parsed || !parsed.stories.length) continue

  const parts = parsed.title.split('/')
  const category = parts.slice(0, -1).map(s => s.trim()).join(' / ')
  const name = parts[parts.length - 1].trim()

  if (!byCategory[category]) byCategory[category] = []
  byCategory[category].push({ ...parsed, displayName: name })
}

const sortedCategories = [
  ...CATEGORY_ORDER.filter(c => byCategory[c]),
  ...Object.keys(byCategory).filter(c => !CATEGORY_ORDER.includes(c)).sort(),
]

let md = `# Components Reference

> Auto-generated from \`src/**/*.stories.tsx\` — do not edit by hand.
> Run \`node scripts/generate-components-md.mjs\` to regenerate.
>
> **How to use:** When building a Figma design in React, look up each component here to find
> the exact import path, variant names, and prop combinations. Cross-reference with
> \`lib/components/*/\*-design-map.md\` for the Figma↔prop mapping.

---

`

for (const category of sortedCategories) {
  const components = byCategory[category]
  md += `## ${category}\n\n`

  for (const comp of components) {
    md += `### ${comp.displayName}\n\n`

    if (comp.imports.length) {
      md += `\`\`\`tsx\n${comp.imports.join('\n')}\n\`\`\`\n\n`
    }

    md += `| Variant | Props | Children |\n|---|---|---|\n`
    for (const story of comp.stories) {
      const props = comp.scalarProps ?? []
      const propsStr = story.scalarProps.length ? `\`${story.scalarProps.join('` `')}\`` : '—'
      md += `| \`${story.name}\` | ${propsStr} | ${story.childrenType} |\n`
    }

    // Usage example for the first story
    if (comp.stories[0]) {
      md += `\n**Example:**\n\`\`\`tsx\n${comp.stories[0].usage}\n\`\`\`\n`
    }

    md += '\n'
  }
}

writeFileSync(OUT, md)
const lineCount = md.split('\n').length
const compCount = Object.values(byCategory).flat().length
const storyCount = Object.values(byCategory).flat().reduce((s, c) => s + c.stories.length, 0)
console.log(`✓ COMPONENTS.md written — ${compCount} components, ${storyCount} stories, ${lineCount} lines`)
