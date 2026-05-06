# Components Reference

> Auto-generated from `src/**/*.stories.tsx` — do not edit by hand.
> Run `node scripts/generate-components-md.mjs` to regenerate.
>
> **How to use:** When building a Figma design in React, look up each component here to find
> the exact import path, variant names, and prop combinations. Cross-reference with
> `lib/components/*/*-design-map.md` for the Figma↔prop mapping.

---

## Design System / Typography

### Content

| Variant | Props | Children |
|---|---|---|
| `ContentText` | `className="text-content"` | — |
| `ContentTextLight` | `className="text-content-light"` | — |
| `ContentParagraph` | `className="text-content-paragraph"` | — |
| `ContentCaptionStrong` | `className="text-content-caption-strong"` | — |
| `ContentCaption` | `className="text-content-caption"` | — |
| `ContentLabel` | `className="text-content-label"` | — |
| `ContentLabelLight` | `className="text-content-label-light"` | — |
| `NumberXS` | `className="text-number-xs"` | — |
| `NumberSM` | `className="text-number-sm"` | — |
| `NumberXL` | `className="text-number-xl"` | — |
| `Number3XL` | `className="text-number-3xl"` | — |

**Example:**
```tsx
<Content className="text-content" />
```

### Heading

| Variant | Props | Children |
|---|---|---|
| `Heading1` | `heading="h1"` | — |
| `Heading2` | `heading="h2"` | — |
| `Heading3` | `heading="h3"` | — |
| `Heading4` | `heading="h4"` | — |

**Example:**
```tsx
<Heading heading="h1" />
```

## Design System / Components

### ActionList

```tsx
import { Command } from '@/components/Command'
```

| Variant | Props | Children |
|---|---|---|
| `SimpleCommand` | — | — |

**Example:**
```tsx
<Command />
```

### Badge

```tsx
import { Badge, BadgeDot } from '@/components/Badge'
```

| Variant | Props | Children |
|---|---|---|
| `OutlineBadge` | `variant="outline"` | "Label" |
| `OutlineBadgeWithDotIndicator` | `variant="outline"` | JSX |
| `OutlineBadgeWithIconIndicator` | `variant="outline"` | JSX |
| `FlatBadge` | `variant="flat"` | "Label" |
| `FlatBadgeWithDotIndicator` | `variant="flat"` | JSX |
| `FlatBadgeWithIconIndicator` | `variant="flat"` | JSX |
| `FlatCountBadge` | `variant="flat"` `isCount={true}` | "0123456789" |
| `BrandOutlineBadgeWithDotIndicator` | `variant="outline"` `badgeColor="brand"` | JSX |
| `BrandOutlineBadgeWithIconIndicator` | `variant="outline"` `badgeColor="brand"` | JSX |
| `BrandFlatBadge` | `variant="flat"` `badgeColor="brand"` | "Label" |
| `BrandFlatBadgeWithDotIndicator` | `variant="flat"` `badgeColor="brand"` | JSX |
| `BrandFlatBadgeWithIconIndicator` | `variant="flat"` `badgeColor="brand"` | JSX |
| `BrandFlatCountBadge` | `variant="flat"` `badgeColor="brand"` `isCount={true}` | "0123456789" |
| `PositiveOutlineBadgeWithDotIndicator` | `variant="outline"` `badgeColor="positive"` | JSX |
| `PositiveOutlineBadgeWithIconIndicator` | `variant="outline"` `badgeColor="positive"` | JSX |
| `PositiveFlatBadge` | `variant="flat"` `badgeColor="positive"` | "Label" |
| `PositiveFlatBadgeWithDotIndicator` | `variant="flat"` `badgeColor="positive"` | JSX |
| `PositiveFlatBadgeWithIconIndicator` | `variant="flat"` `badgeColor="positive"` | JSX |
| `PositiveFlatCountBadge` | `variant="flat"` `badgeColor="positive"` `isCount={true}` | "0123456789" |
| `NoticeOutlineBadgeWithDotIndicator` | `variant="outline"` `badgeColor="notice"` | JSX |
| `NoticeOutlineBadgeWithIconIndicator` | `variant="outline"` `badgeColor="notice"` | JSX |
| `NoticeFlatBadge` | `variant="flat"` `badgeColor="notice"` | "Label" |
| `NoticeFlatBadgeWithDotIndicator` | `variant="flat"` `badgeColor="notice"` | JSX |
| `NoticeFlatBadgeWithIconIndicator` | `variant="flat"` `badgeColor="notice"` | JSX |
| `NoticeFlatCountBadge` | `variant="flat"` `badgeColor="notice"` `isCount={true}` | "0123456789" |
| `NegativeOutlineBadgeWithDotIndicator` | `variant="outline"` `badgeColor="negative"` | JSX |
| `NegativeOutlineBadgeWithIconIndicator` | `variant="outline"` `badgeColor="negative"` | JSX |
| `NegativeFlatBadge` | `variant="flat"` `badgeColor="negative"` | "Label" |
| `NegativeFlatBadgeWithDotIndicator` | `variant="flat"` `badgeColor="negative"` | JSX |
| `NegativeFlatBadgeWithIconIndicator` | `variant="flat"` `badgeColor="negative"` | JSX |
| `NegativeFlatCountBadge` | `variant="flat"` `badgeColor="negative"` `isCount={true}` | "0123456789" |

**Example:**
```tsx
<Badge variant="outline">Label</Badge>
```

### Banner

```tsx
import {
  BannerContent,
  BannerContentWrapper,
  BannerRoot,
} from '@/components/Banner'
import { LinkAnchorButton } from '@/components/LinkButton'
import { ResourceIcon } from '@/components/ResourceIcon'
```

| Variant | Props | Children |
|---|---|---|
| `NeutralBlockBanner` | `variant="block"` `bannerIntent="neutral"` | JSX |
| `DismissibleNeutralBlockBanner` | `variant="block"` `bannerIntent="neutral"` `isDismissible={true}` | JSX |
| `HighlightBlockBanner` | `variant="block"` `bannerIntent="highlight"` | JSX |
| `PositiveBlockBanner` | `variant="block"` `bannerIntent="positive"` | JSX |
| `NoticeBlockBanner` | `variant="block"` `bannerIntent="notice"` | JSX |
| `NegativeBlockBanner` | `variant="block"` `bannerIntent="negative"` | JSX |
| `NeutralInlineBanner` | `variant="inline"` `bannerIntent="neutral"` | JSX |
| `HighlightInlineBanner` | `variant="inline"` `bannerIntent="highlight"` | JSX |
| `PositiveInlineBanner` | `variant="inline"` `bannerIntent="positive"` | JSX |
| `NoticeInlineBanner` | `variant="inline"` `bannerIntent="notice"` | JSX |
| `NegativeInlineBanner` | `variant="inline"` `bannerIntent="negative"` | JSX |

**Example:**
```tsx
<BannerRoot variant="block" bannerIntent="neutral">{/* JSX children */}</BannerRoot>
```

### Button

```tsx
import { Button } from '@/components/Button'
```

| Variant | Props | Children |
|---|---|---|
| `Brand` | `variant="brand"` | "Brand Button" |
| `BrandWithIcons` | `variant="brand"` | JSX |
| `BrandIconOnlyButton` | `variant="brand"` `iconOnly={true}` | JSX |
| `BrandLoadingButton` | `variant="brand"` `isLoading={true}` | "Loading..." |
| `BrandDisabled` | `variant="brand"` `disabled={true}` | "Brand Disabled Button" |
| `Neutral` | `variant="neutral"` | "Neutral Button" |
| `NeutralWithIcons` | `variant="neutral"` | JSX |
| `NeutralIconOnlyButton` | `variant="neutral"` `iconOnly={true}` | JSX |
| `NeutralLoadingButton` | `variant="neutral"` `isLoading={true}` | "Loading..." |
| `NeutralDisabled` | `variant="neutral"` `disabled={true}` | "Neutral Disabled Button" |
| `Ghost` | `variant="ghost"` | "Ghost Button" |
| `GhostLoadingWithIcon` | `variant="ghost"` `isLoading={true}` | JSX |
| `GhostWithIcons` | `variant="ghost"` | JSX |
| `GhostIconOnlyButton` | `variant="ghost"` `iconOnly={true}` | JSX |
| `GhostLoadingButton` | `variant="ghost"` `isLoading={true}` | "Loading..." |
| `GhostDisabled` | `variant="ghost"` `disabled={true}` | "Ghost Disabled Button" |
| `Destructive` | `variant="destructive"` | "Destructive Button" |
| `DestructiveWithIcons` | `variant="destructive"` | JSX |
| `DestructiveIconOnlyButton` | `variant="destructive"` `iconOnly={true}` | JSX |
| `DestructiveLoadingButton` | `variant="destructive"` `isLoading={true}` | "Loading..." |
| `DestructiveDisabled` | `variant="destructive"` `disabled={true}` | "Destructive Disabled Button" |

**Example:**
```tsx
<Button variant="brand">Brand Button</Button>
```

### Card

```tsx
import { Card } from '@/components/Card'
```

| Variant | Props | Children |
|---|---|---|
| `DefaultFlatCard` | `className="p-4"` `variant="default"` `elevation="flat"` | — |
| `DefaultRaisedCard` | `className="p-4"` `variant="default"` `elevation="raised"` | — |
| `DefaultFloatingCard` | `className="p-4"` `variant="default"` `elevation="floating"` | — |
| `DecorativeFlatCard` | `className="p-4"` `variant="decorative"` `elevation="flat"` | — |
| `DecorativeRaisedCard` | `className="p-4"` `variant="decorative"` `elevation="raised"` | — |
| `DecorativeFloatingCard` | `className="p-4"` `variant="decorative"` `elevation="floating"` | — |

**Example:**
```tsx
<Card className="p-4" variant="default" elevation="flat" />
```

### Checkbox

```tsx
import { Checkbox } from '@/components/Checkbox'
```

| Variant | Props | Children |
|---|---|---|
| `DefaultCheckbox` | — | — |
| `IndeterminateCheckbox` | `checked="indeterminate"` | — |
| `DisabledCheckbox` | `disabled={true}` | — |
| `DisabledCheckedCheckbox` | `disabled={true}` `checked={true}` | — |
| `DisabledIntermediateCheckbox` | `disabled={true}` `checked="indeterminate"` | — |
| `ErrorCheckbox` | — | — |
| `ErrorCheckedCheckbox` | `checked={true}` | — |
| `ErrorIntermediateCheckbox` | `checked="indeterminate"` | — |

**Example:**
```tsx
<Checkbox />
```

### ConnectorIcon

```tsx
import { ConnectorIcon } from '@/components/ConnectorIcon'
```

| Variant | Props | Children |
|---|---|---|
| `CHADEMO` | `connectorType="CHADEMO"` | — |
| `CHAOJI` | `connectorType="CHAOJI"` | — |
| `DOMESTIC_A` | `connectorType="DOMESTIC_A"` | — |
| `DOMESTIC_B` | `connectorType="DOMESTIC_B"` | — |
| `DOMESTIC_C` | `connectorType="DOMESTIC_C"` | — |
| `DOMESTIC_D` | `connectorType="DOMESTIC_D"` | — |
| `DOMESTIC_E` | `connectorType="DOMESTIC_E"` | — |
| `DOMESTIC_F` | `connectorType="DOMESTIC_F"` | — |
| `DOMESTIC_G` | `connectorType="DOMESTIC_G"` | — |
| `DOMESTIC_H` | `connectorType="DOMESTIC_H"` | — |
| `DOMESTIC_I` | `connectorType="DOMESTIC_I"` | — |
| `DOMESTIC_J` | `connectorType="DOMESTIC_J"` | — |
| `DOMESTIC_K` | `connectorType="DOMESTIC_K"` | — |
| `DOMESTIC_L` | `connectorType="DOMESTIC_L"` | — |
| `DOMESTIC_M` | `connectorType="DOMESTIC_M"` | — |
| `DOMESTIC_N` | `connectorType="DOMESTIC_N"` | — |
| `DOMESTIC_O` | `connectorType="DOMESTIC_O"` | — |
| `GBT_AC` | `connectorType="GBT_AC"` | — |
| `GBT_DC` | `connectorType="GBT_DC"` | — |
| `IEC_60309_2_single_16` | `connectorType="IEC_60309_2_single_16"` | — |
| `IEC_60309_2_three_16` | `connectorType="IEC_60309_2_three_16"` | — |
| `IEC_60309_2_three_32` | `connectorType="IEC_60309_2_three_32"` | — |
| `IEC_60309_2_three_64` | `connectorType="IEC_60309_2_three_64"` | — |
| `IEC_62196_T1` | `connectorType="IEC_62196_T1"` | — |
| `IEC_62196_T1_COMBO` | `connectorType="IEC_62196_T1_COMBO"` | — |
| `IEC_62196_T2` | `connectorType="IEC_62196_T2"` | — |
| `IEC_62196_T2_COMBO` | `connectorType="IEC_62196_T2_COMBO"` | — |
| `IEC_62196_T3A` | `connectorType="IEC_62196_T3A"` | — |
| `IEC_62196_T3C` | `connectorType="IEC_62196_T3C"` | — |
| `NEMA_5_20` | `connectorType="NEMA_5_20"` | — |
| `NEMA_6_30` | `connectorType="NEMA_6_30"` | — |
| `NEMA_6_50` | `connectorType="NEMA_6_50"` | — |
| `NEMA_10_30` | `connectorType="NEMA_10_30"` | — |
| `NEMA_10_50` | `connectorType="NEMA_10_50"` | — |
| `NEMA_14_30` | `connectorType="NEMA_14_30"` | — |
| `NEMA_14_50` | `connectorType="NEMA_14_50"` | — |
| `PANTOGRAPH_BOTTOM_UP` | `connectorType="PANTOGRAPH_BOTTOM_UP"` | — |
| `PANTOGRAPH_TOP_DOWN` | `connectorType="PANTOGRAPH_TOP_DOWN"` | — |
| `TESLA_R` | `connectorType="TESLA_R"` | — |
| `TESLA_S` | `connectorType="TESLA_S"` | — |

**Example:**
```tsx
<ConnectorIcon connectorType="CHADEMO" />
```

### DateRangePicker

```tsx
import { DateRangePicker } from '@/components/DateRangePicker'
```

| Variant | Props | Children |
|---|---|---|
| `DefaultDateRangePicker` | `id="default-date-range-picker"` | — |
| `DateRangePickerWithCustomInitialRange` | `id="date-range-picker-with-custom-initial-range"` | — |
| `DateRangePickerWithCustomRanges` | `id="date-range-picker-with-custom-ranges"` | — |
| `DateRangePickerWithMaxSpan` | `id="date-range-picker-with-custom-initial-range"` `days={7}` | — |

**Example:**
```tsx
<DateRangePicker id="default-date-range-picker" />
```

### EmptyState

```tsx
import { Button } from '@/components/Button'
```

| Variant | Props | Children |
|---|---|---|
| `Done` | `imageSrc="/empty-state-done.svg"` `content="All done!"` `description="You have no tasks to do"` | — |
| `NoTasks` | `imageSrc="/empty-state-no-tasks.svg"` `content="No tasks"` `description="You have no tasks to do"` | — |
| `NoItems` | `imageSrc="/empty-state-no-items.svg"` `content="This list is empty"` `description="There are currently no items to display in this section."` | — |
| `Error` | `imageSrc="/empty-state-error.svg"` `content="Error loading content"` `description="There was an issue loading the data. Please reload or try again later."` | — |
| `NoConnection` | `imageSrc="/empty-state-no-connection.svg"` `content="No connection"` `description="Please check your internet connection and try again."` | — |
| `NoSearchResult` | `imageSrc="/empty-state-no-search-result.svg"` `content="No items match your search"` `description="We couldn't find any matches for your search. Try different keywords."` | — |
| `WithActions` | `imageSrc="/empty-state-error.svg"` `content="Error loading content"` `description="There was an issue loading the data. Please reload or try again later."` | — |

**Example:**
```tsx
<Template imageSrc="/empty-state-done.svg" content="All done!" description="You have no tasks to do" />
```

### Filter

```tsx
import { FilterRoot } from '@/components/Filter'
import { Tag, TagOptionCancel } from '@/components/Tag'
```

| Variant | Props | Children |
|---|---|---|
| `DefaultFilter` | — | JSX |
| `FilledDefaultFilter` | `isFilled={true}` | JSX |

**Example:**
```tsx
<FilterRoot>{/* JSX children */}</FilterRoot>
```

### FormBar

| Variant | Props | Children |
|---|---|---|
| `FormBarWithoutError` | — | — |
| `FormBarWithError` | `isErrored={true}` | — |
| `FormBarWithErrorAndShakeAnimation` | `isErrored={true}` `shake={true}` | — |

**Example:**
```tsx
<Template />
```

### Input

```tsx
import { Input, InputRoot } from '@/components/Input'
```

| Variant | Props | Children |
|---|---|---|
| `SimpleInput` | — | JSX |
| `ValidInput` | — | JSX |
| `InvalidInput` | — | JSX |
| `DisabledInput` | — | JSX |
| `DisabledInputWithValue` | — | JSX |
| `LeadingIconInput` | — | JSX |
| `LeadingIconDisabledInput` | — | JSX |
| `LeadingInput` | — | JSX |
| `LeadingTabInput` | — | JSX |
| `LeadingTabDisabledInput` | — | JSX |
| `LeadingWithLeadingTabInput` | — | JSX |
| `LeadingWithTrailingTabInput` | — | JSX |
| `LeadingWithTrailingTabDisabledInput` | — | JSX |

**Example:**
```tsx
<Template>{/* JSX children */}</Template>
```

### InputFile

| Variant | Props | Children |
|---|---|---|
| `DropzoneWithNoInitialFiles` | — | — |
| `DropzoneWithOnlyOneFileAllowed` | — | — |
| `DropzoneWithMultipleFilesAllowed` | `multiple={true}` | — |
| `DropzoneWithOnlyImagesAllowed` | `accept="image/*"` | — |
| `DropzoneWithMaxFileSize` | `maxFileSize={1024}` `accept="image/*"` | — |

**Example:**
```tsx
<InputFileComponent />
```

### InputSearch

```tsx
import { InputSearch } from '@/components/Input'
```

| Variant | Props | Children |
|---|---|---|
| `DefaultInputSearch` | — | — |
| `DisabledInputSearch` | `disabled={true}` | — |
| `LoadingInputSearch` | `isLoading={true}` | — |

**Example:**
```tsx
<InputSearch />
```

### Label

```tsx
import { Label } from '@/components/Label'
```

| Variant | Props | Children |
|---|---|---|
| `DefaultLabel` | — | "Normal Label" |

**Example:**
```tsx
<Label>Normal Label</Label>
```

### LinkAnchorButton

```tsx
import { LinkAnchorButton } from '@/components/LinkButton'
```

| Variant | Props | Children |
|---|---|---|
| `NeutralLink` | `variant="neutral"` | — |
| `NeutralLinkWithIcon` | `variant="neutral"` | JSX |
| `NeutralLinkWithIconAndLabel` | `variant="neutral"` | JSX |
| `DisabledNeutralLink` | `variant="neutral"` `isDisabled={true}` | — |
| `LoadingNeutralLink` | `variant="neutral"` `isLoading={true}` | — |
| `BrandLink` | `variant="brand"` | — |
| `BrandLinkWithIcon` | `variant="brand"` | JSX |
| `BrandLinkWithIconAndLabel` | `variant="brand"` | JSX |
| `DisabledBrandLink` | `variant="brand"` `isDisabled={true}` | — |
| `LoadingBrandLink` | `variant="brand"` `isLoading={true}` | — |
| `DestructiveLink` | `variant="destructive"` | — |
| `DestructiveLinkWithIcon` | `variant="destructive"` | JSX |
| `DestructiveLinkWithIconAndLabel` | `variant="destructive"` | JSX |
| `DisabledDestructiveLink` | `variant="destructive"` `isDisabled={true}` | — |
| `LoadingDestructiveLink` | `variant="destructive"` `isLoading={true}` | — |

**Example:**
```tsx
<LinkAnchorButton variant="neutral" />
```

### LinkButton

```tsx
import { LinkButton } from '@/components/LinkButton'
```

| Variant | Props | Children |
|---|---|---|
| `NeutralLink` | `variant="neutral"` | — |
| `NeutralLinkWithIcon` | `variant="neutral"` | JSX |
| `NeutralLinkWithIconAndLabel` | `variant="neutral"` | JSX |
| `DisabledNeutralLink` | `variant="neutral"` `isDisabled={true}` | — |
| `LoadingNeutralLink` | `variant="neutral"` `isLoading={true}` | — |
| `BrandLink` | `variant="brand"` | — |
| `BrandLinkWithIcon` | `variant="brand"` | JSX |
| `BrandLinkWithIconAndLabel` | `variant="brand"` | JSX |
| `DisabledBrandLink` | `variant="brand"` `isDisabled={true}` | — |
| `LoadingBrandLink` | `variant="brand"` `isLoading={true}` | — |
| `DestructiveLink` | `variant="destructive"` | — |
| `DestructiveLinkWithIcon` | `variant="destructive"` | JSX |
| `DestructiveLinkWithIconAndLabel` | `variant="destructive"` | JSX |
| `DisabledDestructiveLink` | `variant="destructive"` `isDisabled={true}` | — |
| `LoadingDestructiveLink` | `variant="destructive"` `isLoading={true}` | — |

**Example:**
```tsx
<LinkButton variant="neutral" />
```

### Modal

| Variant | Props | Children |
|---|---|---|
| `ModalSmall` | — | JSX |
| `ModalForceMount` | — | JSX |
| `ModalMedium` | — | JSX |
| `ModalLarge` | — | JSX |

**Example:**
```tsx
<Template>{/* JSX children */}</Template>
```

### MultiOptionList

| Variant | Props | Children |
|---|---|---|
| `CommandWithSearch` | `className="w-80 rounded-xl bg-default flex flex-column shadow-hard-sm"` | JSX |

**Example:**
```tsx
<Template className="w-80 rounded-xl bg-default flex flex-column shadow-hard-sm">{/* JSX children */}</Template>
```

### OptionList

| Variant | Props | Children |
|---|---|---|
| `SimpleCommand` | `className="w-80 rounded-xl bg-default flex flex-column shadow-hard-sm"` | JSX |
| `CommandWithSearch` | `className="w-80 rounded-xl bg-default flex flex-column shadow-hard-sm"` | JSX |

**Example:**
```tsx
<Template className="w-80 rounded-xl bg-default flex flex-column shadow-hard-sm">{/* JSX children */}</Template>
```

### Popover

```tsx
import { Button } from '@/components/Button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover'
```

| Variant | Props | Children |
|---|---|---|
| `DefaultPopover` | — | — |
| `LeftSidePopover` | `side="left"` | — |
| `RightSidePopover` | `side="right"` | — |
| `BottomSidePopover` | `side="bottom"` | — |
| `TopSidePopover` | `side="top"` | — |
| `CustomOffsetPopover` | `sideOffset={16}` | — |

**Example:**
```tsx
<Popover />
```

### Progress

```tsx
import { Progress } from '@/components/Progress'
```

| Variant | Props | Children |
|---|---|---|
| `NeutralProgressBar` | `variant="neutral"` | — |
| `HighlightProgressBar` | `variant="highlight"` | — |
| `TemperatureProgressBar` | `variant="temperature"` | — |

**Example:**
```tsx
<Progress variant="neutral" />
```

### RadioGroup

```tsx
import { Label } from '@/components/Label'
import { RadioGroup, RadioGroupItem } from '@/components/Radio'
```

| Variant | Props | Children |
|---|---|---|
| `DefaultRadioGroup` | — | — |
| `RadioGroupWithDefaultValue` | `defaultValue="2"` | — |
| `DisabledRadioGroup` | `disabled={true}` | — |
| `DisabledRadioGroupWithDefaultValue` | `defaultValue="2"` `disabled={true}` | — |
| `InvalidRadioGroup` | — | — |

**Example:**
```tsx
<RadioGroup />
```

### ResourceIcon

```tsx
import { ResourceIcon } from '@/components/ResourceIcon'
```

| Variant | Props | Children |
|---|---|---|
| `DefaultNeutral` | `size="default"` `resourceIconColor="neutral"` | — |
| `LargeNeutral` | `size="large"` `resourceIconColor="neutral"` | — |
| `DefaultBrand` | `size="default"` `resourceIconColor="brand"` | — |
| `LargeBrand` | `size="large"` `resourceIconColor="brand"` | — |
| `DefaultPositive` | `size="default"` `resourceIconColor="positive"` | — |
| `LargePositive` | `size="large"` `resourceIconColor="positive"` | — |
| `DefaultNotice` | `size="default"` `resourceIconColor="notice"` | — |
| `LargeNotice` | `size="large"` `resourceIconColor="notice"` | — |
| `DefaultNegative` | `size="default"` `resourceIconColor="negative"` | — |
| `LargeNegative` | `size="large"` `resourceIconColor="negative"` | — |
| `DefaultLime` | `size="default"` `resourceIconColor="lime"` | — |
| `LargeLime` | `size="large"` `resourceIconColor="lime"` | — |
| `DefaultViolet` | `size="default"` `resourceIconColor="violet"` | — |
| `LargeViolet` | `size="large"` `resourceIconColor="violet"` | — |
| `DefaultAmber` | `size="default"` `resourceIconColor="amber"` | — |
| `LargeAmber` | `size="large"` `resourceIconColor="amber"` | — |
| `DefaultIndigo` | `size="default"` `resourceIconColor="indigo"` | — |
| `LargeIndigo` | `size="large"` `resourceIconColor="indigo"` | — |
| `DefaultTeal` | `size="default"` `resourceIconColor="teal"` | — |
| `LargeTeal` | `size="large"` `resourceIconColor="teal"` | — |

**Example:**
```tsx
<ResourceIcon size="default" resourceIconColor="neutral" />
```

### ResourceTag

```tsx
import { ResourceIcon } from '@/components/ResourceIcon'
import { ResourceTag } from '@/components/ResourceTag'
```

| Variant | Props | Children |
|---|---|---|
| `NonLinkResourceTag` | `isLink={false}` | JSX |
| `InteractiveResourceTag` | `isLink={false}` `asChild={true}` `isInteractive={true}` | JSX |
| `LinkResourceTag` | `isLink={true}` `href="https://example.com"` | JSX |
| `LinkResourceTagAsChild` | `isLink={true}` `href="https://example.com"` `asChild={true}` | JSX |

**Example:**
```tsx
<ResourceTag isLink={false}>{/* JSX children */}</ResourceTag>
```

### Separator

```tsx
import { Separator } from '@/components/Separator'
```

| Variant | Props | Children |
|---|---|---|
| `VerticalSeparator` | `orientation="vertical"` `className="h-32"` | — |
| `HorizontalSeparator` | `orientation="horizontal"` `className="w-32"` | — |

**Example:**
```tsx
<Separator orientation="vertical" className="h-32" />
```

### Sheet

```tsx
import { Button } from '@/components/Button'
import { ResourceIcon } from '@/components/ResourceIcon'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/Sheet'
```

| Variant | Props | Children |
|---|---|---|
| `SheetSmall` | — | — |
| `SheetSmallForceMount` | — | — |
| `SheetMedium` | — | — |
| `SheetLarge` | — | — |

**Example:**
```tsx
<Sheet />
```

### Skeleton

```tsx
import { Skeleton } from '@/components/Skeleton'
```

| Variant | Props | Children |
|---|---|---|
| `SingleLineSkeleton` | `className="h-4 w-24"` | — |

**Example:**
```tsx
<Skeleton className="h-4 w-24" />
```

### Spinner

```tsx
import { Spinner } from '@/components/Spinner'
```

| Variant | Props | Children |
|---|---|---|
| `OnIntenseSpinner` | `variant="on-intense"` | — |
| `OnLightSpinner` | `variant="on-light"` | — |

**Example:**
```tsx
<Spinner variant="on-intense" />
```

### Switch

```tsx
import { Switch } from '@/components/Switch'
```

| Variant | Props | Children |
|---|---|---|
| `DefaultSwitch` | — | — |
| `DisabledSwitch` | `disabled={true}` | — |
| `DisabledCheckedSwitch` | `disabled={true}` `defaultChecked={true}` | — |
| `CheckedDefaultSwitch` | `defaultChecked={true}` | — |

**Example:**
```tsx
<Switch />
```

### Table

```tsx
import { Button } from '@/components/Button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/Table'
```

| Variant | Props | Children |
|---|---|---|
| `DefaultTable` | `variant="default"` `className="[&_tbody_td]:h-[4.25rem]"` | JSX |
| `DefaultTableWithLargeCellSize` | `variant="default"` `className="[&_tbody_td]:h-[4.75rem]"` | JSX |
| `RoundedTable` | `variant="rounded"` `className="[&_tbody_td]:h-[4.25rem]"` | JSX |
| `RoundedTableWithLargeCellSize` | `variant="rounded"` `className="[&_tbody_td]:h-[4.75rem]"` | JSX |
| `TableWithNoBorders` | `variant="default"` `className="border-none [&_*]:!border-none [&_tbody_td]:h-[4.25rem]"` | JSX |

**Example:**
```tsx
<Table variant="default" className="[&_tbody_td]:h-[4.25rem]">{/* JSX children */}</Table>
```

### TableSort

| Variant | Props | Children |
|---|---|---|
| `NotSelectedTableSort` | — | JSX |
| `AscTableSort` | — | JSX |
| `DscTableSort` | — | JSX |

**Example:**
```tsx
<TableSort>{/* JSX children */}</TableSort>
```

### Tabs

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/Tabs'
```

| Variant | Props | Children |
|---|---|---|
| `BorderedTabs` | `isBordered={true}` `defaultValue="location"` | — |
| `BorderedFullWidthTabs` | `isBordered={true}` `isFullWidth={true}` `defaultValue="location"` | — |
| `BorderlessTabs` | `defaultValue="location"` | — |
| `BorderlessFullWidthTabs` | `isFullWidth={true}` `defaultValue="location"` | — |
| `FullyBorderlessTabs` | `isFullyBorderless={true}` `defaultValue="location"` | — |
| `FullyBorderlessFullWidthTabs` | `isFullyBorderless={true}` `isFullWidth={true}` `defaultValue="location"` | — |

**Example:**
```tsx
<Tabs isBordered={true} defaultValue="location" />
```

### Tag

```tsx
import { LinkButton } from '@/components/LinkButton'
import { Tag } from '@/components/Tag'
```

| Variant | Props | Children |
|---|---|---|
| `DefaultTag` | — | JSX |
| `DisabledTag` | — | JSX |

**Example:**
```tsx
<Tag>{/* JSX children */}</Tag>
```

### Toast

```tsx
import { Button } from '@/components/Button'
import { Toaster } from '@/components/Toaster'
```

| Variant | Props | Children |
|---|---|---|
| `NeutralToast` | `description="This is a default toast"` `label="Action"` `buttonText="Default"` | — |
| `PositiveToast` | `description="This is a positive toast"` `label="Action"` `buttonText="Positive"` | — |
| `NoticeToast` | `description="This is a notice toast"` `label="Action"` `buttonText="Notice"` | — |
| `NegativeToast` | `description="This is a negative toast"` `label="Action"` `buttonText="Negative"` | — |
| `ToastWithoutAutoHide` | `description="This is a toast without auto hide"` `label="Close"` `buttonText="Without Auto Hide"` | — |

**Example:**
```tsx
<Template description="This is a default toast" label="Action" buttonText="Default" />
```

### ToggleFilter

```tsx
import { ToggleFilter } from '@/components/ToggleFilter'
```

| Variant | Props | Children |
|---|---|---|
| `DefaultToggleFilter` | `isFilled={false}` | JSX |
| `FilledToggleFilter` | `isFilled={true}` | JSX |

**Example:**
```tsx
<ToggleFilter isFilled={false}>{/* JSX children */}</ToggleFilter>
```

### Tooltip

```tsx
import { Card } from '@/components/Card'
import { LinkAnchorButton } from '@/components/LinkButton'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/Tooltip'
```

| Variant | Props | Children |
|---|---|---|
| `SimpleTooltip` | — | JSX |
| `SimpleTooltipForceMount` | — | JSX |
| `TooltipOnLinkButton` | `delayDuration={300}` | JSX |
| `TooltipOnLinkButtonUnstyled` | — | JSX |

**Example:**
```tsx
<TooltipProvider>{/* JSX children */}</TooltipProvider>
```

## Design System / Patterns

### Breadcrumb

| Variant | Props | Children |
|---|---|---|
| `BreadcrumbWithSingleEntry` | `label="Zemetric"` | — |
| `BreadcrumbWithMultipleEntries` | `label="Dashboard"` `href="/"` `label="Manufacturer"` `href="/"` `label="Zemetric"` | — |

**Example:**
```tsx
<Template label="Zemetric" />
```

### ChargerStatus

| Variant | Props | Children |
|---|---|---|
| `Operative` | — | — |
| `Inoperative` | — | — |
| `Disconnected` | — | — |

**Example:**
```tsx
<Template />
```

### Form

| Variant | Props | Children |
|---|---|---|
| `Input` | — | JSX |
| `InputOption` | — | JSX |

**Example:**
```tsx
<Template>{/* JSX children */}</Template>
```

### FormHeader

| Variant | Props | Children |
|---|---|---|
| `FormHeaderSidebarClosed` | `sidebarClosed={true}` | — |
| `FormHeaderSidebarOpened` | `sidebarClosed={false}` | — |
| `FormHeaderWithBreadcrumbs` | `withBreadcrumbs={true}` | — |
| `FormHeaderWithTabs` | — | — |

**Example:**
```tsx
<Template sidebarClosed={true} />
```

### Header

| Variant | Props | Children |
|---|---|---|
| `SectionHeaderSidebarOpen` | `sidebarClosed={false}` | — |
| `SectionHeaderSidebarOpenWithHeadingTrailing` | `sidebarClosed={false}` | — |
| `SectionHeaderSidebarClosed` | `sidebarClosed={true}` | — |
| `SectionHeaderSidebarOpenWithTabs` | `sidebarClosed={false}` | — |
| `SectionHeaderSidebarClosedWithTabs` | `sidebarClosed={true}` | — |

**Example:**
```tsx
<Template sidebarClosed={false} />
```

### HoverResourceCard

```tsx
import { TooltipProvider } from '@/components/Tooltip'
```

| Variant | Props | Children |
|---|---|---|
| `DriverHoverResourceCard` | — | — |
| `SiteHoverResourceCard` | — | — |
| `ChargerHoverResourceCard` | — | — |
| `DriverGroupHoverResourceCard` | — | — |
| `FleetHoverResourceCard` | — | — |
| `SiteHostHoverResourceCard` | — | — |
| `FleetVehicleHoverResourceCard` | — | — |

**Example:**
```tsx
<TooltipProvider />
```

### PageLayout

| Variant | Props | Children |
|---|---|---|
| `PageLayoutWithSidebarAndTableContent` | `className="bg-gray-50 relative"` | — |

**Example:**
```tsx
<PageLayout className="bg-gray-50 relative" />
```

### PopoverActionList

| Variant | Props | Children |
|---|---|---|
| `Default` | — | JSX |
| `Disabled` | — | JSX |
| `WithoutActions` | — | JSX |

**Example:**
```tsx
<Template>{/* JSX children */}</Template>
```

### PopoverFilter

| Variant | Props | Children |
|---|---|---|
| `PopoverFilterWithMultiOptionList` | — | JSX |
| `DisabledPopoverFilterWithMultiOptionList` | — | JSX |
| `PopoverFilterWithOptionList` | — | JSX |
| `DisabledPopoverFilterWithOptionList` | — | JSX |

**Example:**
```tsx
<Template>{/* JSX children */}</Template>
```

### PopoverMultiOptionList

| Variant | Props | Children |
|---|---|---|
| `WithSearch` | — | JSX |
| `Disabled` | — | JSX |
| `Restricted` | — | JSX |
| `RestrictedWithDisabledSelectAll` | — | JSX |

**Example:**
```tsx
<Template>{/* JSX children */}</Template>
```

### PopoverOptionList

| Variant | Props | Children |
|---|---|---|
| `Default` | — | JSX |
| `WithSearch` | — | JSX |
| `Disabled` | — | JSX |

**Example:**
```tsx
<Template>{/* JSX children */}</Template>
```

### Sidebar

```tsx
import { SidebarProvider } from '@/components/Sidebar'
```

| Variant | Props | Children |
|---|---|---|
| `UncontrolledSidebar` | — | JSX |

**Example:**
```tsx
<Template>{/* JSX children */}</Template>
```

### DataTable

| Variant | Props | Children |
|---|---|---|
| `TableWithClientSidePaginationAndRowSelection` | `className="flex flex-col w-full min-h-svh"` `variant="default"` | JSX |
| `TableWithServerSidePaginationAndSearch` | `className="flex flex-col w-full h-svh"` `variant="default"` | JSX |

**Example:**
```tsx
<DemoTable className="flex flex-col w-full min-h-svh" variant="default">{/* JSX children */}</DemoTable>
```

## Pages

### Login

| Variant | Props | Children |
|---|---|---|
| `Default` | — | — |

**Example:**
```tsx
<LoginPage />
```

### Payment Terminals

| Variant | Props | Children |
|---|---|---|
| `List` | — | — |

**Example:**
```tsx
<PaymentTerminals />
```

