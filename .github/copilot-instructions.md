# Copilot Instructions for Zemetric Design System

## Repository Overview

This repository contains the **Zemetric Design System** - a React-based component library built with TypeScript, Vite, and Tailwind CSS. It provides atomic components and patterns for Zemetric applications.

**Key Stats:**

- ~15,000 lines of TypeScript/React code
- 37 reusable components
- 52 Storybook stories
- NPM package published to GitHub Package Registry

**Tech Stack:**

- **Build**: Vite + TypeScript + vite-plugin-dts
- **Styling**: Tailwind CSS with custom theme
- **Components**: React 18 + Radix UI primitives
- **Documentation**: Storybook 8.5
- **Quality**: ESLint, Prettier, TypeScript strict mode
- **CI/CD**: GitHub Actions + Chromatic visual testing

## Environment Requirements

**ALWAYS install exact versions to avoid compatibility issues:**

```bash
# Required versions (from package.json)
node --version  # Must be >=v23
npm install -g pnpm@10.2.0  # Exact version required
pnpm --version  # Should show 10.2.0
```

## Build and Development Commands

**ALWAYS run commands in this exact sequence for reliable builds:**

### Initial Setup

```bash
# 1. ALWAYS install pnpm first if not available
npm install -g pnpm@10.2.0

# 2. Install dependencies (takes ~60 seconds)
pnpm install
```

### Development Workflow

```bash
# 3. Run quality checks (recommended before making changes)
pnpm run typecheck    # TypeScript validation (~5-10 seconds)
pnpm run lint         # ESLint validation (~5-10 seconds)
pnpm run format:check # Prettier formatting check (~3-5 seconds)

# 4. Build the library (takes ~30-60 seconds)
pnpm run build       # Compiles TypeScript + bundles with Vite

# 5. Clean build artifacts when needed
pnpm run clean       # Removes dist/ directory
```

### Storybook Development

```bash
# Start Storybook development server
pnpm run storybook   # Runs on port 6006
# Note: May have ES module config issues - see troubleshooting section
```

### Testing Commands

```bash
# Format code automatically
pnpm run format      # Auto-fixes formatting issues

# Build Storybook for production
pnpm run build-storybook
```

## Project Architecture

### Directory Structure

```
├── lib/                    # 📦 BUILD SOURCE (components for NPM package)
│   ├── components/         # Individual component folders
│   │   └── [ComponentName]/
│   │       ├── index.tsx   # Component implementation
│   │       └── styles.js   # Tailwind styles (optional)
│   ├── index.ts           # Main library export
│   ├── styles.js          # Combined Tailwind plugin styles
│   ├── tailwind.theme.ts  # Custom Tailwind theme
│   └── utils.ts           # Shared utilities
├── src/                   # 📖 STORYBOOK STORIES & DEMOS
│   ├── components/        # Component stories
│   └── patterns/          # Pattern stories
├── .storybook/           # Storybook configuration
├── dist/                 # 🏗️ BUILD OUTPUT (generated)
└── public/               # Static assets for Storybook
```

### Component Architecture Pattern

Each component follows this structure:

- **Implementation**: `lib/components/[Name]/index.tsx`
- **Styles**: `lib/components/[Name]/styles.js` (Tailwind classes)
- **Stories**: `src/components/[Name]/[Name].stories.tsx`
- **Export**: Added to `lib/index.ts`

### Build Configuration Files

- `vite.config.ts` - Build configuration with multiple entry points
- `tailwind.config.js` - Tailwind CSS configuration
- `eslint.config.js` - ESLint rules for TypeScript/React
- `tsconfig.json` + `tsconfig.build.json` - TypeScript configs
- `postcss.config.js` - PostCSS for Tailwind processing

## CI/CD Pipeline

### GitHub Actions Workflow (.github/workflows/ci.yaml)

Runs on every push/PR to `master`:

1. **Setup**: Node.js 24 + pnpm installation
2. **Dependencies**: `pnpm install`
3. **Build**: `pnpm run build`
4. **Quality Checks**:
   - `pnpm run lint`
   - `pnpm run typecheck`
   - `pnpm run format:check`

### Chromatic Integration (.github/workflows/chromatic.yaml)

- Visual regression testing for Storybook
- Runs on pushes to `master` only
- Requires `CHROMATIC_PROJECT_TOKEN` secret

### Pre-commit Hooks (.husky/pre-commit)

Automatically runs before each commit:

```bash
lint-staged && pnpm run typecheck
```

## Troubleshooting Common Issues

### Build Failures

**Problem**: TypeScript compilation errors  
**Solution**: Always run `pnpm run typecheck` first to identify issues

**Problem**: "pnpm: command not found"
**Solution**: Install exact version: `npm install -g pnpm@10.2.0`

### Prettier Plugin Warnings

**Expected**: You may see babel parsing warnings for import sorting - these are non-blocking

### Git Pre-commit Failures

**Problem**: Pre-commit hooks fail on lint or typecheck
**Solution**: Run `pnpm run lint --fix` and `pnpm run format` to auto-fix issues

## Usage in Consumer Projects

This package is consumed by other Zemetric applications:

1. **Authentication**: Requires GitHub token in `.npmrc`
2. **Installation**: `pnpm install @zemetric/design-system@latest`
3. **Tailwind Integration**: Must import theme and styles into consumer's Tailwind config
4. **Component Usage**: Import from package root or individual components

## Making Changes

### Adding New Components

1. Create component: `lib/components/[Name]/index.tsx`
2. Add styles: `lib/components/[Name]/styles.js` (if needed)
3. Export component: Add to `lib/index.ts`
4. Create story: `src/components/[Name]/[Name].stories.tsx`
5. Test build: `pnpm run build`

### Modifying Existing Components

1. Edit in `lib/components/[ComponentName]/`
2. Update related story in `src/components/[ComponentName]/`
3. Run quality checks: `pnpm run typecheck && pnpm run lint`
4. Test build: `pnpm run build`

### Styling Changes

- Component styles: `lib/components/[Name]/styles.js`
- Global theme: `lib/tailwind.theme.ts`
- Base styles: `lib/styles.js`

## Key Dependencies

**Peer Dependencies** (required by consumers):

- React 18.3+, React DOM 18.3+
- Radix UI components (checkbox, dialog, popover, etc.)
- class-variance-authority, clsx, tailwind-merge
- Additional: react-hook-form, sonner, cmdk, vaul

**Build Dependencies**:

- Vite 5.4+ with React plugin
- TypeScript 5.7+ with strict mode
- Tailwind CSS 3.4+ with animate plugin

Trust these instructions and only search for additional information if you encounter issues not covered here or if the provided information appears outdated.
