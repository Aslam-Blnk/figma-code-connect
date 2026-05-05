# Component Creation Reference

Detailed Figma Plugin API patterns for creating components, component sets (variants),
auto-layout, and applying design tokens. Use this reference during Phase 4 and Phase 5
of the design system sync.

---

## Table of Contents
1. [Creating Basic Components](#1-creating-basic-components)
2. [Component Sets and Variants](#2-component-sets-and-variants)
3. [Auto-Layout](#3-auto-layout)
4. [Applying Variables to Components](#4-applying-variables-to-components)
5. [Text Layers](#5-text-layers)
6. [Component Descriptions and Metadata](#6-component-descriptions-and-metadata)
7. [Instance Swap Properties](#7-instance-swap-properties)
8. [Common Component Recipes](#8-common-component-recipes)
9. [Batch Creation Patterns](#9-batch-creation-patterns)
10. [Error Handling](#10-error-handling)

---

## 1. Creating Basic Components

### Simple component (no variants)
```javascript
// Create the component
const component = figma.createComponent();
component.name = "Divider";
component.resize(320, 1);
component.fills = [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.9 } }];

// Move to the correct page and position
const page = figma.root.children.find(p => p.name === "Components");
if (page) {
  page.appendChild(component);
}
```

### Component with children
```javascript
const component = figma.createComponent();
component.name = "Badge";

// Add auto-layout first (so children flow correctly)
component.layoutMode = "HORIZONTAL";
component.primaryAxisAlignItems = "CENTER";
component.counterAxisAlignItems = "CENTER";
component.paddingLeft = 8;
component.paddingRight = 8;
component.paddingTop = 4;
component.paddingBottom = 4;
component.itemSpacing = 4;
component.cornerRadius = 9999; // pill shape

// Add text child
await figma.loadFontAsync({ family: "Inter", style: "Medium" });
const text = figma.createText();
text.fontName = { family: "Inter", style: "Medium" };
text.fontSize = 12;
text.characters = "Badge";
text.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
component.appendChild(text);

// Set fill
component.fills = [{ type: "SOLID", color: { r: 0.23, g: 0.51, b: 0.96 } }];

// Hug contents
component.primaryAxisSizingMode = "AUTO";
component.counterAxisSizingMode = "AUTO";
```

---

## 2. Component Sets and Variants

When a React component has variant props (size, variant, state), create a Figma component set.

### Building a variant matrix
```javascript
// Define the variant dimensions from React props
const variants = {
  "Variant": ["Primary", "Secondary", "Ghost"],
  "Size": ["Small", "Medium", "Large"],
  "Disabled": ["False", "True"]
};

// Generate all combinations
function generateCombinations(variants) {
  const keys = Object.keys(variants);
  const combos = [{}];
  for (const key of keys) {
    const newCombos = [];
    for (const combo of combos) {
      for (const value of variants[key]) {
        newCombos.push({ ...combo, [key]: value });
      }
    }
    combos.length = 0;
    combos.push(...newCombos);
  }
  return combos;
}

const combinations = generateCombinations(variants);
// Result: [{ Variant: "Primary", Size: "Small", Disabled: "False" }, ...]
```

### Creating the component set
```javascript
// Create individual variant components first
const variantComponents = [];

for (const combo of combinations) {
  const comp = figma.createComponent();

  // Name follows Figma convention: "Property=Value, Property=Value"
  const nameParts = Object.entries(combo).map(([k, v]) => `${k}=${v}`);
  comp.name = nameParts.join(", ");

  // Apply visual properties based on variant values
  await applyVariantStyles(comp, combo);

  variantComponents.push(comp);
}

// Combine into a component set
const componentSet = figma.combineAsVariants(variantComponents, figma.currentPage);
componentSet.name = "Button";
```

### Applying styles per variant
```javascript
async function applyVariantStyles(comp, combo) {
  // Size affects dimensions and text size
  const sizeMap = {
    "Small":  { h: 32, px: 12, py: 6,  fontSize: 13 },
    "Medium": { h: 40, px: 16, py: 8,  fontSize: 14 },
    "Large":  { h: 48, px: 24, py: 12, fontSize: 16 },
  };

  // Variant affects colors
  const colorMap = {
    "Primary":   { bg: { r: 0.23, g: 0.51, b: 0.96 }, text: { r: 1, g: 1, b: 1 } },
    "Secondary": { bg: { r: 0.95, g: 0.95, b: 0.97 }, text: { r: 0.1, g: 0.1, b: 0.1 } },
    "Ghost":     { bg: null, text: { r: 0.23, g: 0.51, b: 0.96 } },
  };

  const size = sizeMap[combo["Size"]];
  const colors = colorMap[combo["Variant"]];
  const disabled = combo["Disabled"] === "True";

  // Set up auto-layout
  comp.layoutMode = "HORIZONTAL";
  comp.primaryAxisAlignItems = "CENTER";
  comp.counterAxisAlignItems = "CENTER";
  comp.paddingLeft = size.px;
  comp.paddingRight = size.px;
  comp.paddingTop = size.py;
  comp.paddingBottom = size.py;
  comp.primaryAxisSizingMode = "AUTO";
  comp.counterAxisSizingMode = "FIXED";
  comp.resize(comp.width, size.h);

  // Apply fills
  if (colors.bg) {
    const fill = { type: "SOLID", color: colors.bg };
    if (disabled) fill.opacity = 0.5;
    comp.fills = [fill];
  } else {
    comp.fills = [];
  }

  // Corner radius
  comp.cornerRadius = 8;

  // Add text
  await figma.loadFontAsync({ family: "Inter", style: "Medium" });
  const text = figma.createText();
  text.fontName = { family: "Inter", style: "Medium" };
  text.fontSize = size.fontSize;
  text.characters = "Button";
  const textFill = { type: "SOLID", color: colors.text };
  if (disabled) textFill.opacity = 0.5;
  text.fills = [textFill];
  comp.appendChild(text);
}
```

### Adding component properties (Figma-level)
After creating the component set, add exposed properties:

```javascript
// The variant properties are automatically created by combineAsVariants.
// But you can also add text properties and boolean properties:

// Add a text property for the label
componentSet.addComponentProperty("Label", "TEXT", "Button");

// Then, in each variant component, connect the text layer to this property:
for (const variant of componentSet.children) {
  const textNode = variant.children.find(c => c.type === "TEXT");
  if (textNode) {
    textNode.componentPropertyReferences = { characters: "Label" };
  }
}
```

---

## 3. Auto-Layout

Auto-layout in Figma maps to CSS flexbox. Apply it to mirror React component layout:

### Horizontal layout (flex-direction: row)
```javascript
node.layoutMode = "HORIZONTAL";
node.primaryAxisAlignItems = "CENTER";  // justify-content
node.counterAxisAlignItems = "CENTER";  // align-items
node.itemSpacing = 8;                   // gap
```

### Vertical layout (flex-direction: column)
```javascript
node.layoutMode = "VERTICAL";
node.primaryAxisAlignItems = "MIN";     // "MIN" = flex-start, "CENTER", "MAX" = flex-end, "SPACE_BETWEEN"
node.counterAxisAlignItems = "MIN";     // "MIN" = flex-start, "CENTER", "MAX" = flex-end, "STRETCH"
node.itemSpacing = 16;
```

### Padding
```javascript
node.paddingLeft = 16;
node.paddingRight = 16;
node.paddingTop = 12;
node.paddingBottom = 12;
```

### Sizing modes
```javascript
// Hug contents (width: auto)
node.primaryAxisSizingMode = "AUTO";
node.counterAxisSizingMode = "AUTO";

// Fixed size
node.primaryAxisSizingMode = "FIXED";
node.resize(320, node.height);

// Fill container (flex: 1)
// Set on child nodes:
childNode.layoutSizingHorizontal = "FILL";
childNode.layoutSizingVertical = "FILL";
```

### Flex-wrap equivalent
Figma auto-layout supports wrapping:
```javascript
node.layoutWrap = "WRAP";
```

---

## 4. Applying Variables to Components

Bind Figma variables to component properties for a live token system:

```javascript
// First, find the variable by name
const collections = await figma.variables.getLocalVariableCollectionsAsync();
const colorCollection = collections.find(c => c.name === "Colors");

if (colorCollection) {
  const variables = [];
  for (const id of colorCollection.variableIds) {
    variables.push(await figma.variables.getVariableByIdAsync(id));
  }

  const primaryVar = variables.find(v => v.name === "primary-500");

  if (primaryVar) {
    // Bind fill to variable
    const fills = [figma.variables.setBoundVariableForPaint(
      { type: "SOLID", color: { r: 0, g: 0, b: 0 } },
      "color",
      primaryVar
    )];
    component.fills = fills;

    // Bind corner radius to variable
    const radiusVar = variables.find(v => v.name === "radius-md");
    if (radiusVar) {
      component.setBoundVariable("cornerRadius", radiusVar);
    }

    // Bind padding to spacing variable
    const spacingVar = variables.find(v => v.name === "spacing-md");
    if (spacingVar) {
      component.setBoundVariable("paddingLeft", spacingVar);
      component.setBoundVariable("paddingRight", spacingVar);
    }
  }
}
```

---

## 5. Text Layers

### Loading fonts (required before any text operation)
```javascript
// Always load fonts before setting text properties
await figma.loadFontAsync({ family: "Inter", style: "Regular" });
await figma.loadFontAsync({ family: "Inter", style: "Medium" });
await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
await figma.loadFontAsync({ family: "Inter", style: "Bold" });

// Note: "Semi Bold" has a space (not "SemiBold")
// Note: "Extra Bold" has a space (not "ExtraBold")
```

### Creating text with a text style applied
```javascript
const text = figma.createText();
text.fontName = { family: "Inter", style: "Regular" };
text.fontSize = 14;
text.characters = "Hello world";

// Apply a text style if one exists
const textStyles = await figma.getLocalTextStylesAsync();
const bodyStyle = textStyles.find(s => s.name === "Body/Regular");
if (bodyStyle) {
  text.textStyleId = bodyStyle.id;
}
```

### Text auto-resize
```javascript
// Fixed width, auto height (like a paragraph)
text.textAutoResize = "HEIGHT";
text.resize(280, text.height);

// Hug both dimensions (like a label)
text.textAutoResize = "WIDTH_AND_HEIGHT";
```

---

## 6. Component Descriptions and Metadata

### Human-readable descriptions
```javascript
componentSet.description = [
  "Button — Primary action trigger.",
  "",
  "Props:",
  "• variant: \"primary\" | \"secondary\" | \"ghost\" (default: \"primary\")",
  "• size: \"sm\" | \"md\" | \"lg\" (default: \"md\")",
  "• disabled: boolean (default: false)",
  "",
  "Source: src/components/Button.tsx",
  "Import: import { Button } from '@/components/Button'"
].join("\n");
```

### Machine-readable shared plugin data
```javascript
// Use a consistent namespace for all design-system-sync metadata
const NAMESPACE = "design-system-sync";

componentSet.setSharedPluginData(NAMESPACE, "component-meta", JSON.stringify({
  componentName: "Button",
  sourcePath: "src/components/Button.tsx",
  importStatement: "import { Button } from '@/components/Button'",
  props: [
    {
      name: "variant",
      type: "enum",
      values: ["primary", "secondary", "ghost"],
      default: "primary",
      figmaProperty: "Variant",
      description: "Visual style of the button"
    },
    {
      name: "size",
      type: "enum",
      values: ["sm", "md", "lg"],
      default: "md",
      figmaProperty: "Size"
    },
    {
      name: "disabled",
      type: "boolean",
      default: false,
      figmaProperty: "Disabled"
    }
  ],
  dependencies: ["Icon", "Spinner"],
  lastSyncedAt: new Date().toISOString()
}));

// Also store a quick-lookup index on the page level
const page = figma.currentPage;
const existingIndex = page.getSharedPluginData(NAMESPACE, "component-index");
const index = existingIndex ? JSON.parse(existingIndex) : {};
index["Button"] = {
  nodeId: componentSet.id,
  sourcePath: "src/components/Button.tsx",
  variantCount: componentSet.children.length
};
page.setSharedPluginData(NAMESPACE, "component-index", JSON.stringify(index));
```

### Reading metadata back (for AI/MCP agents)
```javascript
// An AI agent querying the design system can do:
const meta = JSON.parse(node.getSharedPluginData("design-system-sync", "component-meta"));
// → { componentName: "Button", sourcePath: "...", props: [...] }

// Or get the full index:
const index = JSON.parse(page.getSharedPluginData("design-system-sync", "component-index"));
// → { Button: { nodeId: "1:23", ... }, Card: { nodeId: "1:45", ... } }
```

---

## 7. Instance Swap Properties

For components with icon or slot props, use instance swap:

```javascript
// Create an icon placeholder component
const iconPlaceholder = figma.createComponent();
iconPlaceholder.name = "Icon Placeholder";
iconPlaceholder.resize(20, 20);
// ... add a generic icon shape

// In the main component, add the icon as an instance
const iconInstance = iconPlaceholder.createInstance();
comp.insertChild(0, iconInstance); // Insert at beginning (left icon)

// Expose as instance swap property
comp.addComponentProperty("Left Icon", "INSTANCE_SWAP", iconPlaceholder.id);
iconInstance.componentPropertyReferences = { mainComponent: "Left Icon" };
```

---

## 8. Common Component Recipes

### Button
- Auto-layout: horizontal, center/center
- Children: optional icon (instance swap) + text (text property)
- Variants: variant (primary/secondary/ghost), size (sm/md/lg), disabled (true/false)
- Tokens: background color, text color, padding, border-radius, font

### Input/TextField
- Auto-layout: vertical (label above input)
- Children: label text, input frame (horizontal auto-layout with padding), helper text
- Variants: size, error (true/false), disabled
- Tokens: border color, background, text color, padding, radius

### Card
- Auto-layout: vertical
- Children: optional header frame, content frame, optional footer frame
- Variants: elevated (true/false), bordered (true/false)
- Tokens: background, shadow, radius, padding

### Modal/Dialog
- Auto-layout: vertical
- Children: overlay (rectangle), dialog frame (vertical: header, content, footer)
- Variants: size (sm/md/lg)
- Tokens: overlay color, dialog background, shadow, radius

### Avatar
- Fixed size, circular clip
- Variants: size (xs/sm/md/lg/xl)
- Tokens: border radius (full), background color

---

## 9. Batch Creation Patterns

For large component libraries, batch operations to avoid timeouts:

```javascript
// Process components in groups of 3-5
const components = [...]; // array of component definitions
const BATCH_SIZE = 4;

for (let i = 0; i < components.length; i += BATCH_SIZE) {
  const batch = components.slice(i, i + BATCH_SIZE);

  for (const compDef of batch) {
    // Create component...
  }

  // Report progress
  figma.notify(`Created ${Math.min(i + BATCH_SIZE, components.length)}/${components.length} components`);
}
```

### Organizing on the canvas
Space components on the canvas so they don't overlap:

```javascript
let xOffset = 0;
let yOffset = 0;
const ROW_HEIGHT = 300;
const COL_WIDTH = 400;
const COLS = 4;

for (let i = 0; i < componentSets.length; i++) {
  const col = i % COLS;
  const row = Math.floor(i / COLS);
  componentSets[i].x = col * COL_WIDTH;
  componentSets[i].y = row * ROW_HEIGHT;
}
```

---

## 10. Error Handling

### Font loading failures
```javascript
try {
  await figma.loadFontAsync({ family: "CustomFont", style: "Regular" });
} catch (e) {
  // Fall back to Inter
  console.warn(`Font "CustomFont" not available, falling back to Inter`);
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
}
```

### Variable creation limits
Figma has limits on variables per collection. If you hit them:
- Split into multiple collections (e.g., "Colors - Primary", "Colors - Neutral")
- Note the split in the sync report

### Component set complexity
If a variant matrix exceeds 64 variants:
```javascript
const totalVariants = Object.values(variants).reduce((a, b) => a * b.length, 1);
if (totalVariants > 64) {
  // Strategy: create separate component sets for the largest dimension
  // e.g., Button/Primary (with size + disabled variants)
  //        Button/Secondary (with size + disabled variants)
}
```

### General error wrapper
```javascript
async function safeCreate(name, createFn) {
  try {
    return await createFn();
  } catch (error) {
    console.error(`Failed to create ${name}: ${error.message}`);
    // Store in error log for the sync report
    return null;
  }
}
```
