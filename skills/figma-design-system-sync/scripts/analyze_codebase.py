#!/usr/bin/env python3
"""
Analyze a React codebase and extract design tokens + component metadata.

Usage:
    python analyze_codebase.py <codebase_root> [--output <output.json>]

Outputs a JSON file with:
  - tokens: { colors, spacing, typography, radii, shadows }
  - components: [ { name, filePath, props, variants, dependencies } ]
  - meta: { rootDir, tokenStrategy, componentCount, tokenCount }
"""

import argparse
import json
import os
import re
import sys
from pathlib import Path
from typing import Any


def find_component_root(root: str) -> str:
    """Find the most likely component library root directory."""
    candidates = [
        "src/components", "src/ui", "lib/components", "packages/ui/src",
        "src/lib/components", "src/lib/ui", "components", "app/components"
    ]
    for c in candidates:
        full = os.path.join(root, c)
        if os.path.isdir(full):
            # Verify it has component files
            has_components = any(
                f.endswith(('.tsx', '.jsx'))
                for f in os.listdir(full)
                if not f.startswith('_') and not f.endswith('.test.tsx')
            )
            if has_components:
                return full
    # Fallback: find any directory with the most .tsx/.jsx files
    best_dir = root
    best_count = 0
    for dirpath, _, filenames in os.walk(root):
        if 'node_modules' in dirpath or '__tests__' in dirpath:
            continue
        count = sum(1 for f in filenames if f.endswith(('.tsx', '.jsx')))
        if count > best_count:
            best_count = count
            best_dir = dirpath
    return best_dir


def detect_token_strategies(root: str) -> list[str]:
    """Detect which token/styling strategies are in use."""
    strategies = []

    # Tailwind
    for ext in ['js', 'ts', 'mjs', 'cjs']:
        if os.path.exists(os.path.join(root, f'tailwind.config.{ext}')):
            strategies.append('tailwind')
            break

    # CSS custom properties
    for dirpath, _, filenames in os.walk(root):
        if 'node_modules' in dirpath:
            continue
        for f in filenames:
            if f.endswith('.css'):
                try:
                    content = Path(os.path.join(dirpath, f)).read_text(errors='ignore')
                    if '--' in content and ':root' in content:
                        strategies.append('css-custom-properties')
                        break
                except:
                    pass
        if 'css-custom-properties' in strategies:
            break

    # JS/TS theme objects
    theme_patterns = ['theme.ts', 'theme.js', 'tokens.ts', 'tokens.js',
                      'designTokens.ts', 'designTokens.js']
    for dirpath, _, filenames in os.walk(root):
        if 'node_modules' in dirpath:
            continue
        for f in filenames:
            if f in theme_patterns:
                strategies.append('js-theme-object')
                break
        if 'js-theme-object' in strategies:
            break

    # Sass/SCSS
    for dirpath, _, filenames in os.walk(root):
        if 'node_modules' in dirpath:
            continue
        for f in filenames:
            if f.startswith('_') and f.endswith(('.scss', '.sass')):
                try:
                    content = Path(os.path.join(dirpath, f)).read_text(errors='ignore')
                    if '$' in content:
                        strategies.append('sass-variables')
                        break
                except:
                    pass
        if 'sass-variables' in strategies:
            break

    # styled-components / Emotion
    for dirpath, _, filenames in os.walk(root):
        if 'node_modules' in dirpath:
            continue
        for f in filenames:
            if f.endswith(('.tsx', '.jsx', '.ts', '.js')):
                try:
                    content = Path(os.path.join(dirpath, f)).read_text(errors='ignore')
                    if 'styled.' in content or 'styled(' in content:
                        strategies.append('styled-components')
                        break
                    if '@emotion' in content:
                        strategies.append('emotion')
                        break
                except:
                    pass
        if 'styled-components' in strategies or 'emotion' in strategies:
            break

    return strategies if strategies else ['unknown']


def extract_css_tokens(root: str) -> dict:
    """Extract tokens from CSS custom properties."""
    tokens = {"colors": {}, "spacing": {}, "typography": {}, "radii": {}, "shadows": {}, "custom": {}}
    css_var_pattern = re.compile(r'--([a-zA-Z0-9_-]+)\s*:\s*([^;]+);')

    for dirpath, _, filenames in os.walk(root):
        if 'node_modules' in dirpath:
            continue
        for f in filenames:
            if f.endswith('.css'):
                try:
                    content = Path(os.path.join(dirpath, f)).read_text(errors='ignore')
                    for match in css_var_pattern.finditer(content):
                        name = match.group(1)
                        value = match.group(2).strip()
                        category = categorize_token(name, value)
                        tokens[category][name] = {
                            "value": value,
                            "source": f"var(--{name})",
                            "file": os.path.relpath(os.path.join(dirpath, f), root)
                        }
                except:
                    pass
    return tokens


def extract_tailwind_tokens(root: str) -> dict:
    """Extract tokens from tailwind.config."""
    tokens = {"colors": {}, "spacing": {}, "typography": {}, "radii": {}, "shadows": {}, "custom": {}}

    config_path = None
    for ext in ['js', 'ts', 'mjs', 'cjs']:
        p = os.path.join(root, f'tailwind.config.{ext}')
        if os.path.exists(p):
            config_path = p
            break

    if not config_path:
        return tokens

    try:
        content = Path(config_path).read_text(errors='ignore')
        # Extract color definitions
        color_blocks = re.findall(r'colors?\s*:\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}', content)
        for block in color_blocks:
            pairs = re.findall(r"['\"]?([a-zA-Z0-9_-]+)['\"]?\s*:\s*['\"]([^'\"]+)['\"]", block)
            for name, value in pairs:
                tokens["colors"][name] = {"value": value, "source": f"tailwind.colors.{name}"}

        # Extract spacing
        spacing_blocks = re.findall(r'spacing\s*:\s*\{([^}]+)\}', content)
        for block in spacing_blocks:
            pairs = re.findall(r"['\"]?([a-zA-Z0-9._-]+)['\"]?\s*:\s*['\"]([^'\"]+)['\"]", block)
            for name, value in pairs:
                tokens["spacing"][name] = {"value": value, "source": f"tailwind.spacing.{name}"}

        # Extract borderRadius
        radius_blocks = re.findall(r'borderRadius\s*:\s*\{([^}]+)\}', content)
        for block in radius_blocks:
            pairs = re.findall(r"['\"]?([a-zA-Z0-9_-]+)['\"]?\s*:\s*['\"]([^'\"]+)['\"]", block)
            for name, value in pairs:
                tokens["radii"][name] = {"value": value, "source": f"tailwind.borderRadius.{name}"}

        # Extract fontSize
        font_blocks = re.findall(r'fontSize\s*:\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}', content)
        for block in font_blocks:
            pairs = re.findall(r"['\"]?([a-zA-Z0-9_-]+)['\"]?\s*:\s*['\"]([^'\"]+)['\"]", block)
            for name, value in pairs:
                tokens["typography"][name] = {"value": value, "source": f"tailwind.fontSize.{name}"}

    except Exception as e:
        print(f"Warning: Error parsing tailwind config: {e}", file=sys.stderr)

    return tokens


def extract_js_theme_tokens(root: str) -> dict:
    """Extract tokens from JS/TS theme files."""
    tokens = {"colors": {}, "spacing": {}, "typography": {}, "radii": {}, "shadows": {}, "custom": {}}
    theme_files = ['theme.ts', 'theme.js', 'tokens.ts', 'tokens.js',
                   'designTokens.ts', 'designTokens.js']

    for dirpath, _, filenames in os.walk(root):
        if 'node_modules' in dirpath:
            continue
        for f in filenames:
            if f in theme_files:
                try:
                    filepath = os.path.join(dirpath, f)
                    content = Path(filepath).read_text(errors='ignore')
                    rel_path = os.path.relpath(filepath, root)

                    # Extract simple key-value pairs from object literals
                    pairs = re.findall(
                        r"['\"]?([a-zA-Z0-9_-]+)['\"]?\s*:\s*['\"]([^'\"]+)['\"]",
                        content
                    )
                    for name, value in pairs:
                        category = categorize_token(name, value)
                        tokens[category][name] = {
                            "value": value,
                            "source": f"{rel_path}:{name}"
                        }
                except:
                    pass
    return tokens


def categorize_token(name: str, value: str) -> str:
    """Determine which category a token belongs to based on name and value."""
    name_lower = name.lower()

    # Color indicators
    color_prefixes = ['color', 'bg', 'text-color', 'border-color', 'fill', 'stroke',
                      'primary', 'secondary', 'accent', 'success', 'warning', 'error',
                      'danger', 'info', 'neutral', 'gray', 'grey', 'red', 'blue', 'green']
    if any(name_lower.startswith(p) or name_lower.endswith(p) for p in color_prefixes):
        return "colors"
    if re.match(r'^#[0-9a-fA-F]{3,8}$', value) or 'rgb' in value or 'hsl' in value:
        return "colors"

    # Spacing indicators
    spacing_prefixes = ['spacing', 'space', 'gap', 'padding', 'margin', 'inset']
    if any(name_lower.startswith(p) for p in spacing_prefixes):
        return "spacing"

    # Typography indicators
    typo_prefixes = ['font', 'text', 'heading', 'body', 'caption', 'display',
                     'line-height', 'letter-spacing']
    if any(name_lower.startswith(p) for p in typo_prefixes):
        return "typography"

    # Radius indicators
    if 'radius' in name_lower or 'rounded' in name_lower or 'corner' in name_lower:
        return "radii"

    # Shadow indicators
    if 'shadow' in name_lower or 'elevation' in name_lower:
        return "shadows"

    # Value-based fallback
    if re.match(r'^-?\d+(\.\d+)?(px|rem|em|%)$', value):
        return "spacing"

    return "custom"


def merge_tokens(*token_dicts: dict) -> dict:
    """Merge multiple token dictionaries, later values override earlier ones."""
    merged = {"colors": {}, "spacing": {}, "typography": {}, "radii": {}, "shadows": {}, "custom": {}}
    for td in token_dicts:
        for category in merged:
            if category in td:
                merged[category].update(td[category])
    return merged


def extract_component_props(filepath: str) -> list[dict]:
    """Extract props from a React component file."""
    try:
        content = Path(filepath).read_text(errors='ignore')
    except:
        return []

    props = []

    # TypeScript interface/type pattern
    # Match: interface XProps { ... } or type XProps = { ... }
    interface_pattern = re.compile(
        r'(?:interface|type)\s+(\w+Props)\s*(?:=\s*)?\{([^}]*(?:\{[^}]*\}[^}]*)*)\}',
        re.DOTALL
    )

    for match in interface_pattern.finditer(content):
        interface_name = match.group(1)
        body = match.group(2)

        # Extract individual props
        prop_pattern = re.compile(
            r'(\w+)(\?)?:\s*([^;\n]+)',
        )
        for pm in prop_pattern.finditer(body):
            prop_name = pm.group(1)
            optional = pm.group(2) == '?'
            prop_type = pm.group(3).strip().rstrip(',')

            # Skip common HTML/React pass-through props
            skip_props = {'className', 'style', 'id', 'key', 'ref', 'children',
                          'onClick', 'onChange', 'onFocus', 'onBlur', 'onSubmit',
                          'onKeyDown', 'onKeyUp', 'onMouseEnter', 'onMouseLeave',
                          'aria-label', 'aria-labelledby', 'aria-describedby',
                          'data-testid', 'tabIndex', 'role'}
            if prop_name in skip_props:
                # Still record children as it may be relevant
                if prop_name == 'children':
                    props.append({
                        "name": prop_name,
                        "type": prop_type,
                        "optional": optional,
                        "default": None,
                        "isVariant": False,
                        "figmaType": "slot"
                    })
                continue

            # Determine if it's a variant prop
            is_variant = False
            figma_type = "not-represented"
            enum_values = None

            # Check for string literal union type
            literals = re.findall(r"'([^']+)'", prop_type)
            if not literals:
                literals = re.findall(r'"([^"]+)"', prop_type)

            if literals and len(literals) <= 8:
                is_variant = True
                figma_type = "variant"
                enum_values = literals
            elif prop_type.strip() == 'boolean':
                is_variant = True
                figma_type = "boolean-variant"
            elif prop_type.strip() == 'string':
                if prop_name in ('label', 'title', 'description', 'placeholder',
                                 'helperText', 'errorMessage', 'text', 'heading'):
                    figma_type = "text-property"
                elif prop_name in ('icon', 'leftIcon', 'rightIcon', 'avatar',
                                   'startAdornment', 'endAdornment'):
                    figma_type = "instance-swap"

            # Find default value
            default_val = None
            default_pattern = re.compile(
                rf'{prop_name}\s*=\s*[\'"]?([^\'",:)\s}}]+)[\'"]?'
            )
            default_match = default_pattern.search(content)
            if default_match:
                default_val = default_match.group(1)

            props.append({
                "name": prop_name,
                "type": prop_type,
                "optional": optional,
                "default": default_val,
                "isVariant": is_variant,
                "figmaType": figma_type,
                "enumValues": enum_values
            })

    # JavaScript PropTypes fallback
    if not props:
        proptypes_pattern = re.compile(
            r'(\w+)\.propTypes\s*=\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}',
            re.DOTALL
        )
        for match in proptypes_pattern.finditer(content):
            body = match.group(2)
            prop_entries = re.findall(r'(\w+)\s*:\s*PropTypes\.(\w+)', body)
            for name, ptype in prop_entries:
                if name in ('className', 'style', 'children', 'onClick'):
                    continue
                props.append({
                    "name": name,
                    "type": ptype,
                    "optional": True,
                    "default": None,
                    "isVariant": ptype in ('oneOf', 'bool'),
                    "figmaType": "variant" if ptype == 'oneOf' else (
                        "boolean-variant" if ptype == 'bool' else "not-represented"
                    ),
                    "enumValues": None
                })

    return props


def discover_components(comp_root: str, project_root: str) -> list[dict]:
    """Discover all React components in the component root directory."""
    components = []

    component_pattern = re.compile(
        r'export\s+(?:default\s+)?(?:function|const|class)\s+([A-Z]\w+)',
    )
    forward_ref_pattern = re.compile(
        r'(?:export\s+(?:default\s+)?)?(?:const\s+)?([A-Z]\w+)\s*=\s*(?:React\.)?(?:forwardRef|memo)',
    )

    for dirpath, _, filenames in os.walk(comp_root):
        if any(skip in dirpath for skip in ['node_modules', '__tests__', '__mocks__',
                                              '.test.', '.spec.', '.stories.', '.story.']):
            continue

        for f in filenames:
            if not f.endswith(('.tsx', '.jsx')):
                continue
            if any(pattern in f for pattern in ['.test.', '.spec.', '.stories.', '.story.',
                                                 '.d.ts']):
                continue
            if f in ('index.tsx', 'index.jsx', 'index.ts', 'index.js'):
                continue
            if f.startswith(('utils', 'helpers', 'hooks', 'constants', 'types')):
                continue

            filepath = os.path.join(dirpath, f)
            try:
                content = Path(filepath).read_text(errors='ignore')
            except:
                continue

            # Find component names
            names = set()
            for m in component_pattern.finditer(content):
                names.add(m.group(1))
            for m in forward_ref_pattern.finditer(content):
                names.add(m.group(1))

            if not names:
                continue

            rel_path = os.path.relpath(filepath, project_root)
            props = extract_component_props(filepath)

            # Find internal dependencies
            deps = []
            import_pattern = re.compile(r"from\s+['\"]\./?\.?/([^'\"]+)['\"]")
            for im in import_pattern.finditer(content):
                dep_path = im.group(1)
                dep_name = Path(dep_path).stem
                if dep_name[0].isupper():
                    deps.append(dep_name)

            for name in names:
                variant_props = [p for p in props if p.get('isVariant')]
                components.append({
                    "name": name,
                    "filePath": rel_path,
                    "language": "tsx" if f.endswith('.tsx') else "jsx",
                    "props": props,
                    "variantProps": variant_props,
                    "dependencies": deps,
                    "category": categorize_component(name, props)
                })

    return components


def categorize_component(name: str, props: list) -> str:
    """Categorize a component for Figma page organization."""
    name_lower = name.lower()

    categories = {
        "Actions": ['button', 'btn', 'iconbutton', 'fab', 'toggle'],
        "Form Controls": ['input', 'textfield', 'textarea', 'select', 'checkbox',
                          'radio', 'switch', 'slider', 'datepicker', 'timepicker',
                          'autocomplete', 'combobox', 'form', 'field'],
        "Layout": ['container', 'grid', 'stack', 'box', 'flex', 'divider',
                   'spacer', 'section', 'layout'],
        "Navigation": ['nav', 'navbar', 'sidebar', 'menu', 'tabs', 'breadcrumb',
                       'pagination', 'stepper', 'link'],
        "Overlays": ['modal', 'dialog', 'drawer', 'popover', 'tooltip',
                     'dropdown', 'overlay', 'sheet'],
        "Data Display": ['card', 'list', 'table', 'avatar', 'image', 'icon',
                         'accordion', 'collapse', 'tree', 'timeline'],
        "Feedback": ['alert', 'toast', 'snackbar', 'badge', 'tag', 'chip',
                     'progress', 'spinner', 'skeleton', 'banner', 'notification'],
        "Typography": ['heading', 'text', 'paragraph', 'label', 'caption', 'title'],
    }

    for category, keywords in categories.items():
        if any(kw in name_lower for kw in keywords):
            return category

    return "General"


def main():
    parser = argparse.ArgumentParser(description="Analyze a React codebase for design system extraction")
    parser.add_argument("root", help="Path to the codebase root")
    parser.add_argument("--output", "-o", default="ds-analysis.json", help="Output JSON file path")
    args = parser.parse_args()

    root = os.path.abspath(args.root)
    if not os.path.isdir(root):
        print(f"Error: {root} is not a directory", file=sys.stderr)
        sys.exit(1)

    print(f"Analyzing codebase at: {root}")

    # Step 1: Find component root
    comp_root = find_component_root(root)
    print(f"Component root: {comp_root}")

    # Step 2: Detect token strategies
    strategies = detect_token_strategies(root)
    print(f"Token strategies detected: {', '.join(strategies)}")

    # Step 3: Extract tokens from all detected sources
    all_tokens = []
    if 'css-custom-properties' in strategies:
        all_tokens.append(extract_css_tokens(root))
    if 'tailwind' in strategies:
        all_tokens.append(extract_tailwind_tokens(root))
    if 'js-theme-object' in strategies:
        all_tokens.append(extract_js_theme_tokens(root))

    tokens = merge_tokens(*all_tokens) if all_tokens else {
        "colors": {}, "spacing": {}, "typography": {}, "radii": {}, "shadows": {}, "custom": {}
    }

    # Step 4: Discover components
    components = discover_components(comp_root, root)
    print(f"Components found: {len(components)}")

    # Step 5: Build output
    token_count = sum(len(v) for v in tokens.values())
    output = {
        "meta": {
            "rootDir": root,
            "componentRoot": os.path.relpath(comp_root, root),
            "tokenStrategies": strategies,
            "componentCount": len(components),
            "tokenCount": token_count,
        },
        "tokens": tokens,
        "components": sorted(components, key=lambda c: (c['category'], c['name'])),
    }

    output_path = args.output
    with open(output_path, 'w') as f:
        json.dump(output, f, indent=2)

    print(f"\nAnalysis complete!")
    print(f"  Tokens: {token_count} ({', '.join(f'{k}: {len(v)}' for k, v in tokens.items() if v)})")
    print(f"  Components: {len(components)}")
    print(f"  Output: {output_path}")


if __name__ == "__main__":
    main()
