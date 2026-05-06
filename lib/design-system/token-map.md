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

| Figma token | Tailwind path | Resolved value |
|---|---|---|
| `font/family/Body` | `fontFamily.body` | `Inter, …sans` |
| `font/family/Heading` | `fontFamily.heading` | `Favorit, …serif` |
| `font/family/Number` | `fontFamily.number` | `JetBrains Mono, …mono` |

### Font Size (`fontSize`)

| Figma token | Tailwind path | Resolved value |
|---|---|---|
| `font/size/xs` | `fontSize.xs` | `0.75rem` (12px) |
| `font/size/sm` | `fontSize.sm` | `0.875rem` (14px) |
| `font/size/base` | `fontSize.base` | `1rem` (16px) |
| `font/size/lg` | `fontSize.lg` | `1.125rem` (18px) |
| `font/size/xl` | `fontSize.xl` | `1.25rem` (20px) |
| `font/size/2xl` | `fontSize.2xl` | `1.5rem` (24px) |
| `font/size/3xl` | `fontSize.3xl` | `1.875rem` (30px) |
| `font/size/4xl` | `fontSize.4xl` | `2.25rem` (36px) |
| `font/size/5xl` | `fontSize.5xl` | `3rem` (48px) |
| `font/size/6xl` | `fontSize.6xl` | `3.75rem` (60px) |
| `font/size/7xl` | `fontSize.7xl` | `4.5rem` (72px) |

### Font Weight

> Figma stores these as STRING variables with font style names. They map to Tailwind's default `fontWeight` utilities — no custom theme extension needed.

| Figma token | Figma value | Tailwind utility | CSS value |
|---|---|---|---|
| `font/weight/normal` | `"Regular"` | `font-normal` | `400` |
| `font/weight/medium` | `"Medium"` | `font-medium` | `500` |
| `font/weight/semibold` | `"Semibold"` | `font-semibold` | `600` |
| `font/weight/bold` | `"Bold"` | `font-bold` | `700` |

### Line Height (`lineHeight`)

> `font/lineHeight/leading-7` (28px) does **not** exist in the Figma Foundation file — `lineHeight.7` is code-only.

| Figma token | Tailwind path | Resolved value |
|---|---|---|
| `font/lineHeight/leading-2` | `lineHeight.2` → `leading-2` | `1rem` (16px) |
| `font/lineHeight/leading-3` | `lineHeight.3` → `leading-3` | `1.125rem` (18px) |
| `font/lineHeight/leading-4` | `lineHeight.4` → `leading-4` | `1.25rem` (20px) |
| `font/lineHeight/leading-5` | `lineHeight.5` → `leading-5` | `1.5rem` (24px) |
| `font/lineHeight/leading-9` | `lineHeight.9` → `leading-9` | `2.25rem` (36px) |
| _(none — code-only)_ | `lineHeight.7` → `leading-7` | `1.75rem` (28px) |

### Letter Spacing (`letterSpacing`)

> Figma stores these as FLOAT values in **px**. Tailwind uses **em** at a 16px base — values are equivalent.

| Figma token | Figma value (px) | Tailwind path | Resolved value (em) |
|---|---|---|---|
| `font/letterSpacing/dense` | `-0.3px` | `letterSpacing.dense` → `tracking-dense` | `-0.01875em` |
| `font/letterSpacing/denser` | `-0.4px` | `letterSpacing.denser` → `tracking-denser` | `-0.025em` |
| `font/letterSpacing/sparse` | `0.6px` | `letterSpacing.sparse` → `tracking-sparse` | `0.0375em` |
| `font/letterSpacing/sparser` | `2px` | `letterSpacing.sparser` → `tracking-sparser` | `0.125em` |

---

## 7. Spacing

> Figma `spacing/N` tokens map to Tailwind's default 4px-base spacing scale. Fractional names (`0-5`, `1-5`, `2-5`, `3-5`) map to Tailwind's decimal utilities (`0.5`, `1.5`, `2.5`, `3.5`). `spacing/px` maps to `p-px` (1px).

| Figma token | Tailwind utility | Resolved value |
|---|---|---|
| `spacing/0` | `p-0` / `gap-0` | `0px` |
| `spacing/px` | `p-px` / `gap-px` | `1px` |
| `spacing/0-5` | `p-0.5` / `gap-0.5` | `2px` |
| `spacing/1` | `p-1` / `gap-1` | `4px` |
| `spacing/1-5` | `p-1.5` / `gap-1.5` | `6px` |
| `spacing/2` | `p-2` / `gap-2` | `8px` |
| `spacing/2-5` | `p-2.5` / `gap-2.5` | `10px` |
| `spacing/3` | `p-3` / `gap-3` | `12px` |
| `spacing/3-5` | `p-3.5` / `gap-3.5` | `14px` |
| `spacing/4` | `p-4` / `gap-4` | `16px` |
| `spacing/5` | `p-5` / `gap-5` | `20px` |
| `spacing/6` | `p-6` / `gap-6` | `24px` |
| `spacing/7` | `p-7` / `gap-7` | `28px` |
| `spacing/8` | `p-8` / `gap-8` | `32px` |
| `spacing/9` | `p-9` / `gap-9` | `36px` |
| `spacing/10` | `p-10` / `gap-10` | `40px` |
| `spacing/11` | `p-11` / `gap-11` | `44px` |
| `spacing/12` | `p-12` / `gap-12` | `48px` |
| `spacing/14` | `p-14` / `gap-14` | `56px` |
| `spacing/16` | `p-16` / `gap-16` | `64px` |
| `spacing/20` | `p-20` / `gap-20` | `80px` |
| `spacing/24` | `p-24` / `gap-24` | `96px` |
| `spacing/28` | `p-28` / `gap-28` | `112px` |
| `spacing/32` | `p-32` / `gap-32` | `128px` |
| `spacing/36` | `p-36` / `gap-36` | `144px` |
| `spacing/40` | `p-40` / `gap-40` | `160px` |
| `spacing/44` | `p-44` / `gap-44` | `176px` |
| `spacing/48` | `p-48` / `gap-48` | `192px` |
| `spacing/52` | `p-52` / `gap-52` | `208px` |
| `spacing/56` | `p-56` / `gap-56` | `224px` |
| `spacing/60` | `p-60` / `gap-60` | `240px` |
| `spacing/64` | `p-64` / `gap-64` | `256px` |
| `spacing/72` | `p-72` / `gap-72` | `288px` |
| `spacing/80` | `p-80` / `gap-80` | `320px` |
| `spacing/96` | `p-96` / `gap-96` | `384px` |

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

## 10. Width

> Container-width tokens. Smaller values (`3xs`–`sm`) map to Tailwind's spacing-based `w-*` utilities; larger values (`md`–`7xl`) map to `max-w-*`.

| Figma token | Tailwind utility | Resolved value |
|---|---|---|
| `width/0` | `w-0` | `0px` |
| `width/3xs` | `w-64` | `256px` |
| `width/2xs` | `w-72` | `288px` |
| `width/xs` | `w-80` | `320px` |
| `width/sm` | `w-96` / `max-w-sm` | `384px` |
| `width/md` | `max-w-md` | `448px` |
| `width/lg` | `max-w-lg` | `512px` |
| `width/xl` | `max-w-xl` | `576px` |
| `width/2xl` | `max-w-2xl` | `672px` |
| `width/3xl` | `max-w-3xl` | `768px` |
| `width/4xl` | `max-w-4xl` | `896px` |
| `width/5xl` | `max-w-5xl` | `1024px` |
| `width/6xl` | `max-w-6xl` | `1152px` |
| `width/7xl` | `max-w-7xl` | `1280px` |

---

## 11. Opacity

> Figma stores opacity as 0–100 integer. Tailwind's `opacity-{N}` utilities use the same scale.

| Figma token | Tailwind utility | Resolved value |
|---|---|---|
| `opacity/0` | `opacity-0` | `0%` |
| `opacity/5` | `opacity-5` | `5%` |
| `opacity/10` | `opacity-10` | `10%` |
| `opacity/15` | `opacity-15` | `15%` |
| `opacity/20` | `opacity-20` | `20%` |
| `opacity/25` | `opacity-25` | `25%` |
| `opacity/30` | `opacity-30` | `30%` |
| `opacity/35` | `opacity-35` | `35%` |
| `opacity/40` | `opacity-40` | `40%` |
| `opacity/45` | `opacity-45` | `45%` |
| `opacity/50` | `opacity-50` | `50%` |
| `opacity/55` | `opacity-55` | `55%` |
| `opacity/60` | `opacity-60` | `60%` |
| `opacity/65` | `opacity-65` | `65%` |
| `opacity/70` | `opacity-70` | `70%` |
| `opacity/75` | `opacity-75` | `75%` |
| `opacity/80` | `opacity-80` | `80%` |
| `opacity/85` | `opacity-85` | `85%` |
| `opacity/90` | `opacity-90` | `90%` |
| `opacity/95` | `opacity-95` | `95%` |
| `opacity/100` | `opacity-100` | `100%` |

---

## 12. Border Width

| Figma token | Tailwind utility | Resolved value |
|---|---|---|
| `border/0` | `border-0` | `0px` |
| `border/1` | `border` | `1px` |
| `border/2` | `border-2` | `2px` |
| `border/4` | `border-4` | `4px` |
| `border/8` | `border-8` | `8px` |

---

## 13. Blur

| Figma token | Tailwind utility | Resolved value |
|---|---|---|
| `blur/none` | `blur-none` | `0px` |
| `blur/sm` | `blur-sm` | `4px` |
| `blur/DEFAULT` | `blur` | `8px` |
| `blur/md` | `blur-md` | `12px` |
| `blur/lg` | `blur-lg` | `16px` |
| `blur/xl` | `blur-xl` | `24px` |
| `blur/2xl` | `blur-2xl` | `40px` |
| `blur/3xl` | `blur-3xl` | `64px` |

---

## 14. Breakpoints

> Figma breakpoint tokens map to Tailwind's responsive prefix modifiers. Use as `sm:`, `md:`, etc.

| Figma token | Tailwind modifier | Resolved value |
|---|---|---|
| `breakpoint/sm` | `sm:` | `640px` |
| `breakpoint/md` | `md:` | `768px` |
| `breakpoint/lg` | `lg:` | `1024px` |
| `breakpoint/xl` | `xl:` | `1280px` |
| `breakpoint/2xl` | `2xl:` | `1536px` |

---

## 15. Text Styles (Composite Typography)

> Figma named text styles that combine multiple tokens into a single preset. In code these are exposed as **single-class utilities** — always prefer a utility class over writing the individual atomic classes manually.

### Heading element styles (`h1`–`h4`)

Applied globally via `addBase` in `lib/styles.js`. Use semantic HTML elements — no extra class needed.

| Element | Figma style | Font | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|---|---|
| `<h1>` | `heading/h1` | Favorit | `text-xl` (20px) | `font-medium` | `leading-5` (24px) | `tracking-denser` (-0.4px) |
| `<h2>` | `heading/h2` | Favorit | `text-lg` (18px) | `font-medium` | `leading-5` (24px) | `tracking-dense` (-0.3px) |
| `<h3>` | `heading/h3` | Favorit | `text-base` (16px) | `font-medium` | `leading-4` (20px) | — |
| `<h4>` | `heading/h4` | Favorit | `text-sm` (14px) | `font-medium` | `leading-4` (20px) | — |

> All heading elements also apply Favorit OpenType features: `lining-nums`, `proportional-nums`, `slashed-zero`, `ss02`–`ss05`, `liga off`.

### Content utility classes

Registered as Tailwind utilities in `lib/styles.js`. Apply a single class to any text element.

| Utility class | Figma style | Font | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|---|---|
| `text-content` | `content/text` | Inter | `text-sm` (14px) | `font-medium` (500) | `leading-4` (20px) | — |
| `text-content-light` | `content/text-light` | Inter | `text-sm` (14px) | `font-normal` (400) | `leading-4` (20px) | — |
| `text-content-paragraph` | `content/text-paragraph` | Inter | `text-sm` (14px) | `font-normal` (400) | `leading-4` (20px) | — |
| `text-content-caption-strong` | `content/caption-strong` | Inter | `text-xs` (12px) | `font-medium` (500) | `leading-2` (16px) | — |
| `text-content-caption` | `content/caption` | Inter | `text-xs` (12px) | `font-normal` (400) | `leading-2` (16px) | — |
| `text-content-label` | `content/label` | Inter | `text-xs` (12px) | `font-semibold` (600) | `leading-2` (16px) | `tracking-sparse` (+0.6px) |
| `text-content-label-light` | `content/label-light` | Inter | `text-xs` (12px) | `font-normal` (400) | `leading-2` (16px) | `tracking-sparse` (+0.6px) |

### Number utility classes

| Utility class | Font | Size | Weight | Line height |
|---|---|---|---|---|
| `text-number-xs` | JetBrains Mono | `text-xs` (12px) | `font-medium` | `leading-2` (16px) |
| `text-number-sm` | JetBrains Mono | `text-sm` (14px) | `font-medium` | `leading-4` (20px) |
| `text-number-xl` | JetBrains Mono | `text-xl` (20px) | `font-medium` | `leading-5` (24px) |
| `text-number-3xl` | JetBrains Mono | `text-3xl` (30px) | `font-medium` | `leading-9` (36px) |

### Quick-pick guide

| What you're styling | Use |
|---|---|
| Page / section heading | `<h1>` – `<h4>` (semantic element, no extra class) |
| Body text, labels inside components | `text-content` |
| Secondary / lighter body text | `text-content-light` |
| Long-form paragraph copy | `text-content-paragraph` |
| Small label above a field | `text-content-caption-strong` |
| Helper text, hints, timestamps | `text-content-caption` |
| Uppercase / spaced label (badge-style) | `text-content-label` |
| Numeric data / stats | `text-number-xs` – `text-number-3xl` |

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

### Typography (code-only — no Figma variable)

> Font families, sizes, weights, most line heights, and all letter spacings are now confirmed in the Figma Foundation file. Only the entry below is code-only.

| Tailwind path | Resolved value | Notes |
|---|---|---|
| `lineHeight.7` | `1.75rem` (28px) | Not in Figma Foundation — `font/lineHeight/leading-7` does not exist |

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
| Font Family | 3 | 3 | 0 | 0 |
| Font Size | 11 | 11 | 0 | 0 |
| Font Weight | 4 | 4 | 0 | 0 |
| Line Height | 5 | 5 | 0 | 1 (leading-7) |
| Letter Spacing | 4 | 4 | 0 | 0 |
| Spacing | 35 | 35 | 0 | — (uses Tailwind default scale) |
| Border Radius | 10 | 9 | 0 | 1 (rounded-4xl needs config) |
| Box Shadows | 0 | 0 | 0 | 8 (all code-only) |
| Width | 14 | 14 | 0 | 0 |
| Opacity | 21 | 21 | 0 | 0 |
| Border Width | 5 | 5 | 0 | 0 |
| Blur | 8 | 8 | 0 | 0 |
| Breakpoints | 5 | 5 | 0 | 0 |
| Text Styles | 8 | 8 | 0 | 0 |
