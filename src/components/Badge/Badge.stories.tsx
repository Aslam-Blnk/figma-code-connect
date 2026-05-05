import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge, BadgeDot } from '@/components/Badge'

const meta = {
  title: 'Design System/Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'flat'],
      description: 'The variant of the badge',
    },
    badgeColor: {
      control: 'select',
      options: ['neutral', 'brand', 'positive', 'notice', 'negative'],
      description: 'The color of the badge',
    },
    children: {
      control: { disable: true },
      description: 'The content of the badge',
    },
    isCount: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the badge is a count badge',
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof Badge>

// Default neutral badges
export const OutlineBadge: Story = {
  args: {
    variant: 'outline',
    children: 'Label',
  },
}

export const OutlineBadgeWithDotIndicator: Story = {
  args: {
    variant: 'outline',
    children: (
      <>
        <BadgeDot />
        Label
      </>
    ),
  },
}

export const OutlineBadgeWithIconIndicator: Story = {
  args: {
    variant: 'outline',
    children: (
      <>
        <span className="mui-icon material-symbols-rounded">grain</span>
        Label
      </>
    ),
  },
}

export const FlatBadge: Story = {
  args: {
    variant: 'flat',
    children: 'Label',
  },
}

export const FlatBadgeWithDotIndicator: Story = {
  args: {
    variant: 'flat',
    children: (
      <>
        <BadgeDot />
        Label
      </>
    ),
  },
}

export const FlatBadgeWithIconIndicator: Story = {
  args: {
    variant: 'flat',
    children: (
      <>
        <span className="mui-icon material-symbols-rounded">grain</span>
        Label
      </>
    ),
  },
}

export const FlatCountBadge: Story = {
  args: {
    variant: 'flat',
    isCount: true,
    children: '0123456789',
  },
}

// Brand badges
export const BrandOutlineBadgeWithDotIndicator: Story = {
  args: {
    variant: 'outline',
    badgeColor: 'brand',
    children: (
      <>
        <BadgeDot />
        Label
      </>
    ),
  },
}

export const BrandOutlineBadgeWithIconIndicator: Story = {
  args: {
    variant: 'outline',
    badgeColor: 'brand',
    children: (
      <>
        <span className="mui-icon material-symbols-rounded">grain</span>
        Label
      </>
    ),
  },
}

export const BrandFlatBadge: Story = {
  args: {
    variant: 'flat',
    badgeColor: 'brand',
    children: 'Label',
  },
}

export const BrandFlatBadgeWithDotIndicator: Story = {
  args: {
    variant: 'flat',
    badgeColor: 'brand',
    children: (
      <>
        <BadgeDot />
        Label
      </>
    ),
  },
}

export const BrandFlatBadgeWithIconIndicator: Story = {
  args: {
    variant: 'flat',
    badgeColor: 'brand',
    children: (
      <>
        <span className="mui-icon material-symbols-rounded">grain</span>
        Label
      </>
    ),
  },
}

export const BrandFlatCountBadge: Story = {
  args: {
    variant: 'flat',
    badgeColor: 'brand',
    isCount: true,
    children: '0123456789',
  },
}

// Positive badges
export const PositiveOutlineBadgeWithDotIndicator: Story = {
  args: {
    variant: 'outline',
    badgeColor: 'positive',
    children: (
      <>
        <BadgeDot />
        Label
      </>
    ),
  },
}

export const PositiveOutlineBadgeWithIconIndicator: Story = {
  args: {
    variant: 'outline',
    badgeColor: 'positive',
    children: (
      <>
        <span className="mui-icon material-symbols-rounded">grain</span>
        Label
      </>
    ),
  },
}

export const PositiveFlatBadge: Story = {
  args: {
    variant: 'flat',
    badgeColor: 'positive',
    children: 'Label',
  },
}

export const PositiveFlatBadgeWithDotIndicator: Story = {
  args: {
    variant: 'flat',
    badgeColor: 'positive',
    children: (
      <>
        <BadgeDot />
        Label
      </>
    ),
  },
}

export const PositiveFlatBadgeWithIconIndicator: Story = {
  args: {
    variant: 'flat',
    badgeColor: 'positive',
    children: (
      <>
        <span className="mui-icon material-symbols-rounded">grain</span>
        Label
      </>
    ),
  },
}

export const PositiveFlatCountBadge: Story = {
  args: {
    variant: 'flat',
    badgeColor: 'positive',
    isCount: true,
    children: '0123456789',
  },
}

// Notice badges
export const NoticeOutlineBadgeWithDotIndicator: Story = {
  args: {
    variant: 'outline',
    badgeColor: 'notice',
    children: (
      <>
        <BadgeDot />
        Label
      </>
    ),
  },
}

export const NoticeOutlineBadgeWithIconIndicator: Story = {
  args: {
    variant: 'outline',
    badgeColor: 'notice',
    children: (
      <>
        <span className="mui-icon material-symbols-rounded">grain</span>
        Label
      </>
    ),
  },
}

export const NoticeFlatBadge: Story = {
  args: {
    variant: 'flat',
    badgeColor: 'notice',
    children: 'Label',
  },
}

export const NoticeFlatBadgeWithDotIndicator: Story = {
  args: {
    variant: 'flat',
    badgeColor: 'notice',
    children: (
      <>
        <BadgeDot />
        Label
      </>
    ),
  },
}

export const NoticeFlatBadgeWithIconIndicator: Story = {
  args: {
    variant: 'flat',
    badgeColor: 'notice',
    children: (
      <>
        <span className="mui-icon material-symbols-rounded">grain</span>
        Label
      </>
    ),
  },
}

export const NoticeFlatCountBadge: Story = {
  args: {
    variant: 'flat',
    badgeColor: 'notice',
    isCount: true,
    children: '0123456789',
  },
}

// Negative badges
export const NegativeOutlineBadgeWithDotIndicator: Story = {
  args: {
    variant: 'outline',
    badgeColor: 'negative',
    children: (
      <>
        <BadgeDot />
        Label
      </>
    ),
  },
}

export const NegativeOutlineBadgeWithIconIndicator: Story = {
  args: {
    variant: 'outline',
    badgeColor: 'negative',
    children: (
      <>
        <span className="mui-icon material-symbols-rounded">grain</span>
        Label
      </>
    ),
  },
}

export const NegativeFlatBadge: Story = {
  args: {
    variant: 'flat',
    badgeColor: 'negative',
    children: 'Label',
  },
}

export const NegativeFlatBadgeWithDotIndicator: Story = {
  args: {
    variant: 'flat',
    badgeColor: 'negative',
    children: (
      <>
        <BadgeDot />
        Label
      </>
    ),
  },
}

export const NegativeFlatBadgeWithIconIndicator: Story = {
  args: {
    variant: 'flat',
    badgeColor: 'negative',
    children: (
      <>
        <span className="mui-icon material-symbols-rounded">grain</span>
        Label
      </>
    ),
  },
}

export const NegativeFlatCountBadge: Story = {
  args: {
    variant: 'flat',
    badgeColor: 'negative',
    isCount: true,
    children: '0123456789',
  },
}
