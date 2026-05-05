# Token Map: Figma Foundation → Tailwind Theme

**Source:** Foundation library · file `sIGYK8Iaq9zu1nCDQPUlgZ` · collection `globalTokens`
**Date:** 2026-05-05

> Resolved values are derived from `tailwind.theme.ts`. Figma stores alias references to
> `colorPrimitives` — not raw hex values. Every hex listed here is what the alias resolves
> to in code, cross-referenced from the Tailwind source. Figma FLOAT tokens (spacing,
> radius, typography) use Tailwind's default utility scale.

---

## 1. Background Colors

### Core

| Figma token | Tailwind path | Resolved value |
|---|---|---|
| `color/bg/default` | `backgroundColor.default` | `#FFFFFF` (white) |
| `color/bg/brand` | `backgroundColor.brand.DEFAULT` | `#E2E6F7` (primary-100) |
| `color/bg/brand-intense` | `backgroundColor.brand-intense` | `#4A53C6` (primary-600) |
| `color/bg/positive` | `backgroundColor.positive` | `#dcfce7` (green-100) |
| `color/bg/positive-intense` | `backgroundColor.positive-intense` | `#16a34a` (green-600) |
| `color/bg/notice` | `backgroundColor.notice` | `#ffedd5` (orange-100) |
| `color/bg/notice-intense` | `backgroundColor.notice-intense` | `#ea580c` (orange-600) |
| `color/bg/negative` | `backgroundColor.negative` | `#fee2e2` (red-100) |
| `color/bg/negative-intense` | `backgroundColor.negative-intense` | `#dc2626` (red-600) |
| `color/bg/faded` | `backgroundColor.faded` | `rgba(255,255,255,0.3)` (white-a30) |

### Interactive

| Figma token | Tailwind path | Resolved value |
|---|---|---|
| `color/interactive/bg-hover` | `backgroundColor.interactive.hover` | `#f4f4f5` (zinc-100) |
| `color/interactive/bg-pressed` | `backgroundColor.interactive.pressed` | `#f4f4f5` (zinc-100) |
| `color/interactive/bg-activated` | `backgroundColor.interactive.activated` | `#F2F4FC` (primary-50) |
| `color/interactive/bg-disabled` | `backgroundColor.interactive.disabled` | `#e4e4e7` (zinc-200) |
| `color/interactive/bg-brand-highlighted` | `backgroundColor.interactive.brand-highlighted` | `#5E6ED3` (primary-500) |
| `color/interactive/bg-brand-disabled` | `backgroundColor.interactive.brand-disabled` | `#A7B6E9` (primary-300) |
| `color/interactive/bg-positive-highlighted` | `backgroundColor.interactive.positive-highlighted` | `#22c55e` (green-500) |
| `color/interactive/bg-positive-disabled` | `backgroundColor.interactive.positive-disabled` | `#86efac` (green-300) |
| `color/interactive/bg-notice-highlighted` | `backgroundColor.interactive.notice-highlighted` | `#f97316` (orange-500) |
| `color/interactive/bg-notice-disabled` | `backgroundColor.interactive.notice-disabled` | `#fdba74` (orange-300) |
| `color/interactive/bg-negative-highlighted` | `backgroundColor.interactive.negative-highlighted` | `#ef4444` (red-500) |
| `color/interactive/bg-negative-disabled` | `backgroundColor.interactive.negative-disabled` | `#fca5a5` (red-300) |

### Accent

| Figma token | Tailwind path | Resolved value |
|---|---|---|
| `color/accent/bg-gray-light` | `backgroundColor.accent.gray-light` | `#fafafa` (zinc-50) |
| `color/accent/bg-gray` | `backgroundColor.accent.gray` | `#f4f4f5` (zinc-100) |
| `color/accent/bg-gray-intense` | `backgroundColor.accent.gray-intense` | `#e4e4e7` (zinc-200) |
| `color/accent/bg-yellow` | `backgroundColor.accent.yellow` | `#fef9c3` (yellow-100) |
| `color/accent/bg-yellow-intense` | `backgroundColor.accent.yellow-intense` | `#fef08a` (yellow-200) |
| `color/accent/bg-amber-intense` | `backgroundColor.accent.amber-intense` | `#fcd34d` (amber-300) |
| `color/accent/bg-rose` | `backgroundColor.accent.rose` | `#ffe4e6` (rose-100) |
| `color/accent/bg-rose-intense` | `backgroundColor.accent.rose-intense` | `#fecdd3` (rose-200) |
| `color/accent/bg-lime` | `backgroundColor.accent.lime` | `#ecfccb` (lime-100) |
| `color/accent/bg-lime-intense` | `backgroundColor.accent.lime-intense` | `#bef264` (lime-300) |
| `color/accent/bg-teal` | `backgroundColor.accent.teal` | `#ccfbf1` (teal-100) |
| `color/accent/bg-teal-intense` | `backgroundColor.accent.teal-intense` | `#99f6e4` (teal-200) |
| `color/accent/bg-indigo-intense` | `backgroundColor.accent.indigo-intense` | `#c7d2fe` (indigo-200) |
| `color/accent/bg-violet-intense` | `backgroundColor.accent.violet-intense` | `#ddd6fe` (violet-200) |

---

## 2. Text Colors

### Core

| Figma token | Tailwind path | Resolved value |
|---|---|---|
| `color/text/default` | `textColor.default` | `#18181b` (zinc-900) |
| `color/text/subtle` | `textColor.subtle` | `#3f3f46` (zinc-700) |
| `color/text/subtler` | `textColor.subtler` | `#71717a` (zinc-500) |
| `color/text/brand` | `textColor.brand.DEFAULT` | `#4043B5` (primary-700) |
| `color/text/positive` | `textColor.positive` | `#16a34a` (green-600) |
| `color/text/notice` | `textColor.notice` | `#ea580c` (orange-600) |
| `color/text/negative` | `textColor.negative` | `#dc2626` (red-600) |
| `color/text/onIntense` | `textColor.onIntense` | `#FFFFFF` (white) |

### Interactive

| Figma token | Tailwind path | Resolved value |
|---|---|---|
| `color/interactive/text-activated` | `textColor.interactive.activated` | `#4A53C6` (primary-600) |
| `color/interactive/text-hover` | `textColor.interactive.hover` | `#71717a` (zinc-500) |
| `color/interactive/text-disabled` | `textColor.interactive.disabled` | `#d4d4d8` (zinc-300) |
| `color/interactive/text-brand-hover` | `textColor.interactive.brand-hover` | `#5E6ED3` (primary-500) |
| `color/interactive/text-brand-disabled` | `textColor.interactive.brand-disabled` | `#A7B6E9` (primary-300) |
| `color/interactive/text-positive-hover` | `textColor.interactive.positive-hover` | `#22c55e` (green-500) |
| `color/interactive/text-positive-disabled` | `textColor.interactive.positive-disabled` | `#86efac` (green-300) |
| `color/interactive/text-notice-hover` | `textColor.interactive.notice-hover` | `#f97316` (orange-500) |
| `color/interactive/text-notice-disabled` | `textColor.interactive.notice-disabled` | `#fdba74` (orange-300) |
| `color/interactive/text-negative-hover` | `textColor.interactive.negative-hover` | `#ef4444` (red-500) |
| `color/interactive/text-negative-disabled` | `textColor.interactive.negative-disabled` | `#fca5a5` (red-300) |

### Accent

| Figma token | Tailwind path | Resolved value |
|---|---|---|
| `color/accent/text-yellow` | `textColor.accent.yellow` | `#ca8a04` (yellow-600) |
| `color/accent/text-lime` | `textColor.accent.lime` | `#65a30d` (lime-600) |
| `color/accent/text-teal` | `textColor.accent.teal` | `#0d9488` (teal-600) |
| `color/accent/text-indigo` | `textColor.accent.indigo` | `#4f46e5` (indigo-600) |
| `color/accent/text-violet` | `textColor.accent.violet` | `#7c3aed` (violet-600) |
| `color/accent/text-amber` | `textColor.accent.amber` | `#f59e0b` (amber-500) |
| `color/accent/text-rose` | `textColor.accent.rose` | `#f43f5e` (rose-500) |

---

## 3. Border Colors

### Core

| Figma token | Tailwind path | Resolved value |
|---|---|---|
| `color/border/default` | `borderColor.default` | `#e4e4e7` (zinc-200) |
| `color/border/bold` | `borderColor.bold` | `#d4d4d8` (zinc-300) |
| `color/border/brand` | `borderColor.brand.DEFAULT` | `#A7B6E9` (primary-300) |
| `color/border/positive` | `borderColor.positive` | `#86efac` (green-300) |
| `color/border/notice` | `borderColor.notice` | `#fdba74` (orange-300) |
| `color/border/negative` | `borderColor.negative` | `#fca5a5` (red-300) |

### Interactive

| Figma token | Tailwind path | Resolved value |
|---|---|---|
| `color/interactive/border-activated` | `borderColor.interactive.activated` | `#4A53C6` (primary-600) |
| `color/interactive/border-disabled` | `borderColor.interactive.disabled` | `#f4f4f5` (zinc-100) |
| `color/interactive/border-brand-disabled` | `borderColor.interactive.brand-disabled` | `#A7B6E9` (primary-300) |
| `color/interactive/border-positive-disabled` | `borderColor.interactive.positive-disabled` | `#4ade80` (green-400) |
| `color/interactive/border-notice-disabled` | `borderColor.interactive.notice-disabled` | `#fb923c` (orange-400) |
| `color/interactive/border-negative-disabled` | `borderColor.interactive.negative-disabled` | `#f87171` (red-400) |

### Accent

| Figma token | Tailwind path | Resolved value |
|---|---|---|
| `color/accent/border-yellow` | `borderColor.accent.yellow` | `#fef08a` (yellow-200) |
| `color/accent/border-lime` | `borderColor.accent.lime` | `#bef264` (lime-200) |
| `color/accent/border-indigo` | `borderColor.accent.indigo` | `#c7d2fe` (indigo-200) |
| `color/accent/border-violet` | `borderColor.accent.violet` | `#ddd6fe` (violet-200) |
| `color/accent/border-rose` | `borderColor.accent.rose` | `#fecdd3` (rose-200) |

---

## 4. Outline Colors

| Figma token | Tailwind path | Resolved value |
|---|---|---|
| `color/outline/focus-ring` | `outlineColor.focus-ring` | `#60a5fa` (blue-400) |

---

## 5. Icon Colors

### Core (`colors.icon`)

| Figma token | Tailwind path | Resolved value |
|---|---|---|
| `icon/color/default` | `colors.icon.default` | `#3f3f46` (zinc-700) |
| `icon/color/subtle` | `colors.icon.subtle` | `#71717a` (zinc-500) |
| `icon/color/activated` | `colors.icon.activated` | `#4A53C6` (primary-600) |
| `icon/color/brand` | `colors.icon.brand` | `#4A53C6` (primary-600) |
| `icon/color/disabled` | `colors.icon.disabled` | `#d4d4d8` (zinc-300) |
| `icon/color/positive` | `colors.icon.positive` | `#16a34a` (green-600) |
| `icon/color/notice` | `colors.icon.notice` | `#ea580c` (orange-600) |
| `icon/color/negative` | `colors.icon.negative` | `#dc2626` (red-600) |
| `icon/color/onIntense` | `colors.icon.onIntense` | `#FFFFFF` (white) |
| `icon/color/onIntense-disabled` | `colors.icon.onIntense-disabled` | `rgba(255,255,255,0.6)` (white-a60) |

### Accent (`colors.icon-accent`)

| Figma token | Tailwind path | Resolved value |
|---|---|---|
| `icon/color/accent-yellow` | `colors.icon-accent.yellow` | `#ca8a04` (yellow-600) |
| `icon/color/accent-lime` | `colors.icon-accent.lime` | `#65a30d` (lime-600) |
| `icon/color/accent-teal` | `colors.icon-accent.teal` | `#0d9488` (teal-600) |
| `icon/color/accent-indigo` | `colors.icon-accent.indigo` | `#4f46e5` (indigo-600) |
| `icon/color/accent-violet` | `colors.icon-accent.violet` | `#7c3aed` (violet-600) |
| `icon/color/accent-amber` | `colors.icon-accent.amber` | `#f59e0b` (amber-500) |
| `icon/color/accent-rose` | `colors.icon-accent.rose` | `#f43f5e` (rose-500) |

---

## 6. Typography

### Font Family (`fontFamily`)

> No Figma variables found for font family — these are set directly in Tailwind config.

| Figma token | Tailwind path | Resolved value |
|---|---|---|
| _(none)_ | `fontFamily.body` | `Inter, …sans` |
| _(none)_ | `fontFamily.heading` | `Favorit, …serif` |
| _(none)_ | `fontFamily.number` | `JetBrains Mono, …mono` |

### Font Size (`fontSize`)

> No Figma variables found for font size — these are set directly in Tailwind config.

| Figma token | Tailwind path | Resolved value |
|---|---|---|
| _(none)_ | `fontSize.xs` | `0.75rem` (12px) |
| _(none)_ | `fontSize.sm` | `0.875rem` (14px) |
| _(none)_ | `fontSize.base` | `1rem` (16px) |
| _(none)_ | `fontSize.lg` | `1.125rem` (18px) |
| _(none)_ | `fontSize.xl` | `1.25rem` (20px) |
| _(none)_ | `fontSize.2xl` | `1.5rem` (24px) |
| _(none)_ | `fontSize.3xl` | `1.875rem` (30px) |
| _(none)_ | `fontSize.4xl` | `2.25rem` (36px) |
| _(none)_ | `fontSize.5xl` | `3rem` (48px) |
| _(none)_ | `fontSize.6xl` | `3.75rem` (60px) |
| _(none)_ | `fontSize.7xl` | `4.5rem` (72px) |

### Line Height (`lineHeight`)

| Figma token | Tailwind path | Resolved value |
|---|---|---|
| `font/lineHeight/leading-5` | `lineHeight.5` → `leading-5` | `1.5rem` (24px) |
| `font/lineHeight/leading-7` | `lineHeight.7` → `leading-7` | `1.75rem` (28px) |
| `font/lineHeight/leading-9` | `lineHeight.9` → `leading-9` | `2.25rem` (36px) |
| _(none)_ | `lineHeight.2` → `leading-2` | `1rem` (16px) |
| _(none)_ | `lineHeight.3` → `leading-3` | `1.125rem` (18px) |
| _(none)_ | `lineHeight.4` → `leading-4` | `1.25rem` (20px) |

### Letter Spacing (`letterSpacing`)

| Figma token | Tailwind path | Resolved value |
|---|---|---|
| `font/letterSpacing/dense` | `letterSpacing.dense` → `tracking-dense` | `-0.01875em` |
| `font/letterSpacing/denser` | `letterSpacing.denser` → `tracking-denser` | `-0.025em` |
| _(none)_ | `letterSpacing.sparse` → `tracking-sparse` | `0.0375em` |
| _(none)_ | `letterSpacing.sparser` → `tracking-sparser` | `0.125em` |

---

## 7. Spacing

> Figma `spacing/N` tokens map to Tailwind's default 4px-base spacing scale (`p-N`, `m-N`, `gap-N`, `w-N`, `h-N`). The Tailwind theme does not override spacing, so these resolve via the default scale.

| Figma token | Tailwind utility | Resolved value |
|---|---|---|
| `spacing/0` | `p-0` / `gap-0` | `0px` |
| `spacing/1` | `p-1` / `gap-1` | `4px` |
| `spacing/3` | `p-3` / `gap-3` | `12px` |
| `spacing/4` | `p-4` / `gap-4` | `16px` |
| `spacing/6` | `p-6` / `gap-6` | `24px` |
| `spacing/7` | `p-7` / `gap-7` | `28px` |
| `spacing/8` | `p-8` / `gap-8` | `32px` |
| `spacing/9` | `p-9` / `gap-9` | `36px` |
| `spacing/14` | `p-14` / `gap-14` | `56px` |
| `spacing/20` | `p-20` / `gap-20` | `80px` |
| `spacing/28` | `p-28` / `gap-28` | `112px` |
| `spacing/72` | `p-72` / `gap-72` | `288px` |

---

## 8. Border Radius

> Figma `rounded/*` tokens map to Tailwind's default border-radius scale. No custom overrides in the theme file.

| Figma token | Tailwind utility | Resolved value |
|---|---|---|
| `rounded/none` | `rounded-none` | `0px` |
| `rounded/sm` | `rounded-sm` | `2px` |
| `rounded/DEFAULT` | `rounded` | `4px` |
| `rounded/md` | `rounded-md` | `6px` |
| `rounded/lg` | `rounded-lg` | `8px` |
| `rounded/xl` | `rounded-xl` | `12px` |
| `rounded/2xl` | `rounded-2xl` | `16px` |
| `rounded/3xl` | `rounded-3xl` | `24px` |
| `rounded/4xl` | `rounded-4xl` ⚠️ | `32px` — not in Tailwind v3 defaults; needs explicit config extension |
| `rounded/full` | `rounded-full` | `9999px` |

---

## 9. Box Shadows

> No Figma variables found for shadows — all shadow tokens are code-only in `tailwind.theme.ts`.

| Figma token | Tailwind path | Resolved value |
|---|---|---|
| _(none)_ | `boxShadow.soft-xs` | `0px 2px 4px -1px rgba(16,25,40,0.02), 0px 5px 13px -5px rgba(16,25,40,0.05)` |
| _(none)_ | `boxShadow.soft-sm` | `0px 10px 18px -2px rgba(16,25,40,0.07)` |
| _(none)_ | `boxShadow.soft-md` | `0px 14px 22px -9px rgba(16,25,40,0.14), 0px 0px 3px -1px rgba(16,25,40,0.04)` |
| _(none)_ | `boxShadow.soft-lg` | `0px 24px 32px -4px rgba(16,25,40,0.08), 0px 8px 8px -4px rgba(16,25,40,0.03)` |
| _(none)_ | `boxShadow.soft-xl` | `0px 40px 72px -12px rgba(16,25,40,0.14)` |
| _(none)_ | `boxShadow.hard-sm` | `0px 2px 5px -2px rgba(16,25,40,0.06), 0px 2px 7px 0px rgba(16,25,40,0.05), 0px 0px 0px 1px rgba(16,25,40,0.05)` |
| _(none)_ | `boxShadow.hard-md` | `0px 0px 0px 1px rgba(16,25,40,0.05), 0px 6px 16px 0px rgba(16,25,40,0.08)` |
| _(none)_ | `boxShadow.hard-lg` | `0px 16px 24px -6px rgba(16,25,40,0.08), 0px 0px 3px -1px rgba(16,25,40,0.04), 0px 0px 0px 1px rgba(16,25,40,0.05)` |

---

## ⚠️ Figma tokens with no matching Tailwind path

These Foundation tokens exist in Figma but have no semantic path in `tailwind.theme.ts`.

| Figma token | Notes |
|---|---|
| `color/accent/border-gray` | Tailwind `borderColor.accent` has no `gray` key |
| `color/bg/transparent` | Only confirmed in Claude Foundation library, not in this Foundation file |

---

## ⚠️ Tailwind paths with no matching Figma token

These theme values are defined in `tailwind.theme.ts` but have no corresponding Foundation variable.

### Colors — Semantic

| Tailwind path | Resolved value | Notes |
|---|---|---|
| `backgroundColor.separator` | `#e4e4e7` (zinc-200) | No `color/bg/separator` token found in Foundation |
| `textColor.interactive.onIntense-disabled` | `rgba(255,255,255,0.6)` (white-a60) | No matching Figma token found |
| `borderColor.brand-bold` | `#4A53C6` (primary-600) | No `color/border/brand-bold` token found |
| `borderColor.positive-bold` | `#16a34a` (green-600) | No `color/border/positive-bold` token found |
| `borderColor.notice-bold` | `#ea580c` (orange-600) | No `color/border/notice-bold` token found |
| `borderColor.negative-bold` | `#dc2626` (red-600) | No `color/border/negative-bold` token found |
| `borderColor.accent.teal` | `#99f6e4` (teal-200) | No `color/accent/border-teal` token found |
| `borderColor.accent.amber` | `#fcd34d` (amber-200) | No `color/accent/border-amber` token found |
| `outlineColor.positive-bold` | `#16a34a` (green-600) | No Figma outline token |
| `outlineColor.negative-bold` | `#dc2626` (red-600) | No Figma outline token |
| `backgroundColor.accent.amber` | `#fef3c7` (amber-100) | `bg-amber-intense` found; light variant not confirmed |
| `backgroundColor.accent.indigo` | `#e0e7ff` (indigo-100) | `bg-indigo-intense` found; light variant not confirmed |
| `backgroundColor.accent.violet` | `#ede9fe` (violet-100) | `bg-violet-intense` found; light variant not confirmed |

### Colors — Primitive / System (intentionally not tokenized in Figma)

| Tailwind path | Resolved value | Notes |
|---|---|---|
| `colors.white` | `#FFFFFF` | Base primitive — no semantic Figma token expected |
| `colors.black` | `#000000` | Base primitive |
| `colors.transparent` | `transparent` | Base primitive |
| `colors.white-a30` | `rgba(255,255,255,0.3)` | Alpha primitive |
| `colors.white-a60` | `rgba(255,255,255,0.6)` | Alpha primitive |
| `colors.white-a80` | `rgba(255,255,255,0.8)` | Alpha primitive |
| `colors.black-a6` | `rgba(0,0,0,0.06)` | Alpha primitive |
| `colors.black-a10` | `rgba(0,0,0,0.1)` | Alpha primitive |
| `colors.black-a40` | `rgba(0,0,0,0.4)` | Alpha primitive |
| `colors.black-a60` | `rgba(0,0,0,0.6)` | Alpha primitive |
| `colors.brand.primary-*` | primary-50 → primary-950 ramp | Figma `colorPrimitives` collection — not in `globalTokens` |
| `colors.gray.*` | zinc-50 → zinc-950 ramp | Figma `colorPrimitives` collection — not in `globalTokens` |
| `colors.blurEffect.bg-brand` | `#56A9DA` (secondary-400) | No Figma token |
| `colors.blurEffect.bg-error` | `#f97316` (orange-500) | No Figma token |
| `colors.spinner.base-onIntense` | `rgba(255,255,255,0.6)` | No Figma token |
| `colors.spinner.base-onLight` | `rgba(0,0,0,0.1)` | No Figma token |
| `colors.spinner.front-onIntense` | `rgba(0,0,0,0.6)` | No Figma token |
| `colors.spinner.front-onLight` | `rgba(0,0,0,0.4)` | No Figma token |

### Typography (no Figma variables)

| Tailwind path | Resolved value | Notes |
|---|---|---|
| `fontFamily.body` | `Inter, …sans` | Set in code only |
| `fontFamily.heading` | `Favorit, …serif` | Set in code only |
| `fontFamily.number` | `JetBrains Mono, …mono` | Set in code only |
| `fontSize.xs` – `fontSize.7xl` | 0.75rem – 4.5rem | No Figma size variables |
| `lineHeight.2` | `1rem` | Not in Figma |
| `lineHeight.3` | `1.125rem` | Not in Figma |
| `lineHeight.4` | `1.25rem` | Not in Figma |
| `letterSpacing.sparse` | `0.0375em` | Not in Figma |
| `letterSpacing.sparser` | `0.125em` | Not in Figma |

### Box Shadows (no Figma variables)

All 8 shadow tokens (`soft-xs`, `soft-sm`, `soft-md`, `soft-lg`, `soft-xl`, `hard-sm`, `hard-md`, `hard-lg`) are code-only — see Section 9 above.

---

## Summary

| Category | Total Figma tokens | Matched to Tailwind | Unmatched in Figma | Tailwind-only |
|---|---|---|---|---|
| Background | 38 | 38 | 0 | 6 (separator + 5 accent light variants) |
| Text | 22 | 22 | 0 | 1 (onIntense-disabled) |
| Border | 16 | 15 | 1 (border-gray) | 6 (bold variants + 2 accent) |
| Outline | 1 | 1 | 0 | 2 (positive-bold, negative-bold) |
| Icon | 17 | 17 | 0 | 0 |
| Line Height | 3 | 3 | 0 | 3 (leading-2/3/4) |
| Letter Spacing | 2 | 2 | 0 | 2 (sparse, sparser) |
| Spacing | 12 | 12 | 0 | — (uses Tailwind default scale) |
| Border Radius | 10 | 9 | 0 | 1 (rounded-4xl needs config) |
| Box Shadows | 0 | 0 | 0 | 8 (all code-only) |
| Font Family / Size | 0 | 0 | 0 | 14 (all code-only) |
