# Zemetric Design system

This repository contains the design system for Zemetric.
It includes atomic components and patterns built on top of atomic components.

## File structure

- All the components files are located in the [`lib/components`](/lib/components) directory.

- Each component has its own directory.
  For example, the `Button` component is located in the [`lib/components/Button`](/lib/components/Button/) directory with the following files:
  - [`index.tsx`](/lib/components/Button/index.tsx): The component file containing the React code.
  - [`styles.js`](/lib/components/Button/styles.js): The component styles.

- All the stories are present in the [`src/`](/src/) directory.

- All component styles are then imported in the main [`styles.js`](lib/styles.js) file along with some animate styles and typography styles. This file exports the tailwind styles using `tailwindcss/plugin` library. Some common styles are added to the base styles using `addBase` function. All typography styles are added to utilities using the `addUtilities` function. Add component styles are added to components using `addComponents` function.

## List of atomic components

The Zemetric design system contains the following atomic components:

| Component         | Component definition                                                                                         | Style definition                                      | Stories                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Badge             | [index.tsx](lib/components/Badge/index.tsx)                                                                  | [styles.js](lib/components/Badge/styles.js)           | [Badge.stories.tsx](src/components/Badge/Badge.stories.tsx)                                   |
| Banner            | [index.tsx](lib/components/Banner/index.tsx)                                                                 | [styles.js](lib/components/Banner/styles.js)          | [Banner.stories.tsx](src/components/Banner/Banner.stories.tsx)                                |
| Button            | [index.tsx](lib/components/Button/index.tsx)                                                                 | [styles.js](lib/components/Button/styles.js)          | [Button.stories.tsx](src/components/Button/Button.stories.tsx)                                |
| Card              | [index.tsx](lib/components/Card/index.tsx)                                                                   | [styles.js](lib/components/Card/styles.js)            | [Card.stories.tsx](src/components/Card/Card.stories.tsx)                                      |
| Checkbox          | [index.tsx](lib/components/Checkbox/index.tsx)                                                               | [styles.js](lib/components/Checkbox/styles.js)        | [Checkbox.stories.tsx](src/components/Checkbox/Checkbox.stories.tsx)                          |
| Command           | [index.tsx](lib/components/Command/index.tsx)                                                                | [styles.js](lib/components/Command/styles.js)         |                                                                                               |
| ConnectorIcon     | [index.tsx](lib/components/ConnectorIcon/index.tsx)                                                          |                                                       | [ConnectorIcon.stories.tsx](src/components/ConnectorIcon/ConnectorIcon.stories.tsx)           |
| DateRangePicker   | [index.tsx](lib/components/DateRangePicker/index.tsx)                                                        | [styles.js](lib/components/DateRangePicker/styles.js) | [DateRangePicker.stories.tsx](src/components/DateRangePicker/DateRangePicker.stories.tsx)     |
| Dialog            | [index.tsx](lib/components/Dialog/index.tsx)                                                                 | [styles.js](lib/components/Dialog/styles.js)          |                                                                                               |
| Drawer            | [index.tsx](lib/components/Drawer/index.tsx)                                                                 | [styles.js](lib/components/Drawer/styles.js)          |                                                                                               |
| EmptyState        | [index.tsx](lib/components/EmptyState/index.tsx), [EmptyState.tsx](src/components/EmptyState/EmptyState.tsx) | [styles.js](lib/components/EmptyState/styles.js)      | [EmptyState.stories.tsx](src/components/EmptyState/EmptyState.stories.tsx)                    |
| Filter            | [index.tsx](lib/components/Filter/index.tsx)                                                                 | [styles.js](lib/components/Filter/styles.js)          | [Filter.stories.tsx](src/components/Filter/Filter.stories.tsx)                                |
| Form              | [index.tsx](lib/components/Form/index.tsx)                                                                   |                                                       |                                                                                               |
| FormBar           | [index.tsx](lib/components/FormBar/index.tsx), [FormBar.tsx](src/components/FormBar/FormBar.tsx)             | [styles.js](lib/components/FormBar/styles.js)         | [FormBar.stories.tsx](src/components/FormBar/FormBar.stories.tsx)                             |
| HoverResourceCard | [index.tsx](lib/components/HoverResourceCard/index.tsx)                                                      | [HoverResourceCard/](src/patterns/HoverResourceCard/) | [HoverResourceCard.stories.tsx](src/patterns/HoverResourceCard/HoverResourceCard.stories.tsx) |
| Input             | [index.tsx](lib/components/Input/index.tsx)                                                                  | [styles.js](lib/components/Input/styles.js)           | [Input.stories.tsx](src/components/Input/Input.stories.tsx)                                   |
| InputFile         | [index.tsx](lib/components/InputFile/index.tsx), [InputFile.tsx](src/components/InputFile/InputFile.tsx)     | [styles.js](lib/components/InputFile/styles.js)       | [InputFile.stories.tsx](src/components/InputFile/InputFile.stories.tsx)                       |
| InputSearch       | [index.tsx](lib/components/Input/index.tsx)                                                                  | [styles.js](lib/components/Input/styles.js)           | [InputSearch.stories.tsx](src/components/InputSearch/InputSearch.stories.tsx)                 |
| Label             | [index.tsx](lib/components/Label/index.tsx)                                                                  | [styles.js](lib/components/Label/styles.js)           | [Label.stories.tsx](src/components/Label/Label.stories.tsx)                                   |
| LinkAnchorButton  | [index.tsx](lib/components/LinkButton/index.tsx)                                                             | [styles.js](lib/components/LinkButton/styles.js)      | [LinkButton.stories.tsx](src/components/LinkButton/LinkButton.stories.tsx)                    |
| LinkButton        | [index.tsx](lib/components/LinkButton/index.tsx)                                                             | [styles.js](lib/components/LinkButton/styles.js)      | [LinkButton.stories.tsx](src/components/LinkButton/LinkButton.stories.tsx)                    |
| Popover           | [index.tsx](lib/components/Popover/index.tsx)                                                                | [styles.js](lib/components/Popover/styles.js)         | [Popover.stories.tsx](src/components/Popover/Popover.stories.tsx)                             |
| Progress          | [index.tsx](lib/components/Progress/index.tsx)                                                               | [styles.js](lib/components/Progress/styles.js)        | [Progress.stories.tsx](src/components/Progress/Progress.stories.tsx)                          |
| Radio             | [index.tsx](lib/components/Radio/index.tsx)                                                                  | [styles.js](lib/components/Radio/styles.js)           | [Radio.stories.tsx](src/components/Radio/Radio.stories.tsx)                                   |
| ResourceIcon      | [index.tsx](lib/components/ResourceIcon/index.tsx)                                                           | [styles.js](lib/components/ResourceIcon/styles.js)    | [ResourceIcon.stories.tsx](src/components/ResourceIcon/ResourceIcon.stories.tsx)              |
| ResourceTag       | [index.tsx](lib/components/ResourceTag/index.tsx)                                                            | [styles.js](lib/components/ResourceTag/styles.js)     | [ResourceTag.stories.tsx](src/components/ResourceTag/ResourceTag.stories.tsx)                 |
| Separator         | [index.tsx](lib/components/Separator/index.tsx)                                                              | [styles.js](lib/components/Separator/styles.js)       | [Separator.stories.tsx](src/components/Separator/Separator.stories.tsx)                       |
| Sheet             | [index.tsx](lib/components/Sheet/index.tsx)                                                                  | [styles.js](lib/components/Sheet/styles.js)           | [Sheet.stories.tsx](src/components/Sheet/Sheet.stories.tsx)                                   |
| Sidebar           | [index.tsx](lib/components/Sidebar/index.tsx), [Sidebar.tsx](src/patterns/Sidebar/Sidebar.tsx)               | [styles.js](lib/components/Sidebar/styles.js)         | [Sidebar.stories.tsx](src/patterns/Sidebar/Sidebar.stories.tsx)                               |
| Skeleton          | [index.tsx](lib/components/Skeleton/index.tsx)                                                               | [styles.js](lib/components/Skeleton/styles.js)        | [Skeleton.stories.tsx](src/components/Skeleton/Skeleton.stories.tsx)                          |
| Spinner           | [index.tsx](lib/components/Spinner/index.tsx)                                                                | [styles.js](lib/components/Spinner/styles.js)         | [Spinner.stories.tsx](src/components/Spinner/Spinner.stories.tsx)                             |
| Switch            | [index.tsx](lib/components/Switch/index.tsx)                                                                 | [styles.js](lib/components/Switch/styles.js)          | [Switch.stories.tsx](src/components/Switch/Switch.stories.tsx)                                |
| Table             | [index.tsx](lib/components/Table/index.tsx)                                                                  | [styles.js](lib/components/Table/styles.js)           | [Table.stories.tsx](src/components/Table/Table.stories.tsx)                                   |
| Tabs              | [index.tsx](lib/components/Tabs/index.tsx)                                                                   | [styles.js](lib/components/Tabs/styles.js)            | [Tabs.stories.tsx](src/components/Tabs/Tabs.stories.tsx)                                      |
| Tag               | [index.tsx](lib/components/Tag/index.tsx)                                                                    | [styles.js](lib/components/Tag/styles.js)             | [Tag.stories.tsx](src/components/Tag/Tag.stories.tsx)                                         |
| Toaster           | [index.tsx](lib/components/Toaster/index.tsx)                                                                | [styles.js](lib/components/Toaster/styles.js)         | [Toast.tsx](src/components/Toast/Toast.stories.tsx)                                           |
| ToggleFilter      | [index.tsx](lib/components/ToggleFilter/index.tsx)                                                           | [styles.js](lib/components/ToggleFilter/styles.js)    | [ToggleFilter.stories.tsx](src/components/ToggleFilter/ToggleFilter.stories.tsx)              |
| Tooltip           | [index.tsx](lib/components/Tooltip/index.tsx)                                                                | [styles.js](lib/components/Tooltip/styles.js)         | [Tooltip.stories.tsx](src/components/Tooltip/Tooltip.stories.tsx)                             |

Some components that are not atomic but are built using atomic components. These components are used almost everywhere, so they are included here for convenience.

| Component       | Component definition                                                              | Stories                                                                                   |
| --------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ActionList      | [ActionListCombobox.tsx](src/components/ActionList/ActionListCombobox.tsx)        | [ActionList.stories.tsx](src/components/ActionList/ActionList.stories.tsx)                |
| Modal           | [Modal.tsx](src/components/Modal/Modal.tsx)                                       | [Modal.stories.tsx](src/components/Modal/Modal.stories.tsx)                               |
| MultiOptionList | [MultiOptionList.tsx](src/components/MultiOptionList/MultiOptionListCombobox.tsx) | [MultiOptionList.stories.tsx](src/components/MultiOptionList/MultiOptionList.stories.tsx) |
| OptionList      | [OptionList.tsx](src/components/OptionList/OptionListCombobox.tsx)                | [OptionList.stories.tsx](src/components/OptionList/OptionList.stories.tsx)                |

Apart from components, there are common patterns that are built using the above components. These patterns are also included in the design system for convenience.

| Pattern                       | Pattern definition                                                                                             | Stories                                                                                                      |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Breadcrumb                    | [Breadcrumb.tsx](src/patterns/Breadcrumb/Breadcrumb.tsx)                                                       | [Breadcrumb.stories.tsx](src/patterns/Breadcrumb/Breadcrumb.stories.tsx)                                     |
| ChargerStatus                 | [ChargerStatus.tsx](src/patterns/ChargerStatus/ChargerStatus.tsx)                                              | [ChargerStatus.stories.tsx](src/patterns/ChargerStatus/ChargerStatus.stories.tsx)                            |
| InputForm and InputOptionForm | [InputForm.tsx](src/patterns/Form/InputForm.tsx), [InputOptionForm.tsx](src/patterns/Form/InputOptionForm.tsx) | [Form.stories.tsx](src/patterns/Form/Form.stories.tsx)                                                       |
| FormHeader                    | [FormHeader.tsx](src/patterns/FormHeader/FormHeader.tsx)                                                       | [FormHeader.stories.tsx](src/patterns/FormHeader/FormHeader.stories.tsx)                                     |
| Header                        | [Header.tsx](src/patterns/Header/Header.tsx)                                                                   | [Header.stories.tsx](src/patterns/Header/Header.stories.tsx)                                                 |
| PageLayout                    | [PageLayout.tsx](src/patterns/PageLayout/PageLayout.tsx)                                                       | [PageLayout.stories.tsx](src/patterns/PageLayout/PageLayout.stories.tsx)                                     |
| PopoverActionList             | [PopoverActionList.tsx](src/patterns/PopoverActionList/PopoverActionList.tsx)                                  | [PopoverActionList.stories.tsx](src/patterns/PopoverActionList/PopoverActionList.stories.tsx)                |
| PopoverFilter                 | [PopoverFilter.tsx](src/patterns/PopoverFilter/PopoverFilter.tsx)                                              | [PopoverFilter.stories.tsx](src/patterns/PopoverFilter/PopoverFilter.stories.tsx)                            |
| PopoverMultiOptionList        | [PopoverMultiOptionList.tsx](src/patterns/PopoverMultiOptionList/PopoverMultiOptionList.tsx)                   | [PopoverMultiOptionList.stories.tsx](src/patterns/PopoverMultiOptionList/PopoverMultiOptionList.stories.tsx) |
| DataTable                     | [Table/](src/patterns/Table/)                                                                                  | [Table.stories.tsx](src/patterns/Table/Table.stories.tsx)                                                    |

- Typography stories are distributed in two files:
  - [Content.stories](/src/typography/Content/Content.stories.tsx)
  - [Heading.stories](/src/typography/Heading/Heading.stories.tsx)

## Development

### Prerequisites

- Node.js (>=v24)
- pnpm@10.20.0

### Installation

First clone this repository and install the dependencies.

```bash
pnpm install
```

To start the storybook server, run the following command.

```bash
pnpm run storybook
```

## Usage in projects

1. First add a .npmrc file to the root of your project with the following content.

```
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
@zemetric:registry=https://npm.pkg.github.com
```

Make sure to **NOT** commit this file to the repository.

2. Install the package using the following command.

```bash
pnpm install @zemetric/design-system@latest
```

3. Update the tailwind config:

```typescript
// tailwind.config.ts
import theme from '@zemetric/design-system/tailwind.theme'
import type { Config } from 'tailwindcss'

export default {
    ...
  content: [
    ...
    './node_modules/@zemetric/design-system/**/*.{js,jsx,ts,tsx}',
  ],
  theme: { ...theme } as unknown as Config['theme'],
  plugins: [
    ...
    require('tailwindcss-animate'),
    require('@zemetric/design-system/styles')
  ],
} satisfies Config
```

- The theme is export using `as const` making it incompatible with the `Config['theme']` type. Hence, we need to manually typecast it to `Config['theme']`.

```javascript
// tailwind.config.js
const theme = require('@zemetric/design-system/tailwind.theme');

module.exports = {
  ...
  content: [
    ...
    './node_modules/@zemetric/design-system/**/*.{js,jsx,ts,tsx}',
  ],
  theme: { ...theme },
  plugins: [...
    require('tailwindcss-animate'),
    require('@zemetric/design-system/styles')
  ],
}
```

That's it! You can now use the components and styles in your project.
