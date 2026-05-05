import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/Button'

const meta = {
  title: 'Design System/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    iconOnly: {
      control: 'boolean',
      description: 'Render as an icon button',
    },
    isLoading: {
      control: 'boolean',
      description: 'Render as a loading button',
    },
    variant: {
      control: { type: 'select' },
      options: ['brand', 'neutral', 'ghost', 'destructive'],
      description: 'Button variant',
    },
    children: {
      control: {
        disable: true,
      },
      description: 'Button content',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Brand: Story = {
  args: {
    variant: 'brand',
    children: 'Brand Button',
  },
}

export const BrandWithIcons: Story = {
  args: {
    variant: 'brand',
    children: (
      <>
        <span className="mui-icon material-symbols-rounded">add</span>
        Primary Button
        <span className="mui-icon material-symbols-rounded">add</span>
      </>
    ),
  },
}

export const BrandIconOnlyButton: Story = {
  args: {
    variant: 'brand',
    children: <span className="mui-icon material-symbols-rounded">add</span>,
    iconOnly: true,
  },
}
export const BrandLoadingButton: Story = {
  args: {
    variant: 'brand',
    children: 'Loading...',
    isLoading: true,
  },
}

export const BrandDisabled: Story = {
  args: {
    variant: 'brand',
    children: 'Brand Disabled Button',
    disabled: true,
  },
}

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    children: 'Neutral Button',
  },
}

export const NeutralWithIcons: Story = {
  args: {
    variant: 'neutral',
    children: (
      <>
        <span className="mui-icon material-symbols-rounded">add</span>
        Neutral Button
        <span className="mui-icon material-symbols-rounded">add</span>
      </>
    ),
  },
}

export const NeutralIconOnlyButton: Story = {
  args: {
    variant: 'neutral',
    children: <span className="mui-icon material-symbols-rounded">add</span>,
    iconOnly: true,
  },
}

export const NeutralLoadingButton: Story = {
  args: {
    variant: 'neutral',
    children: 'Loading...',
    isLoading: true,
  },
}

export const NeutralDisabled: Story = {
  args: {
    variant: 'neutral',
    children: 'Neutral Disabled Button',
    disabled: true,
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
}

export const GhostLoadingWithIcon: Story = {
  args: {
    variant: 'ghost',
    children: <span className="mui-icon material-symbols-rounded">add</span>,
    isLoading: true,
  },
}

export const GhostWithIcons: Story = {
  args: {
    variant: 'ghost',
    children: (
      <>
        <span className="mui-icon material-symbols-rounded">add</span>
        Ghost Button
        <span className="mui-icon material-symbols-rounded">add</span>
      </>
    ),
  },
}

export const GhostIconOnlyButton: Story = {
  args: {
    variant: 'ghost',
    children: <span className="mui-icon material-symbols-rounded">add</span>,
    iconOnly: true,
  },
}

export const GhostLoadingButton: Story = {
  args: {
    variant: 'ghost',
    children: 'Loading...',
    isLoading: true,
  },
}

export const GhostDisabled: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Disabled Button',
    disabled: true,
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive Button',
  },
}

export const DestructiveWithIcons: Story = {
  args: {
    variant: 'destructive',
    children: (
      <>
        <span className="mui-icon material-symbols-rounded">add</span>
        Destructive Button
        <span className="mui-icon material-symbols-rounded">add</span>
      </>
    ),
  },
}

export const DestructiveIconOnlyButton: Story = {
  args: {
    variant: 'destructive',
    children: <span className="mui-icon material-symbols-rounded">add</span>,
    iconOnly: true,
  },
}

export const DestructiveLoadingButton: Story = {
  args: {
    variant: 'destructive',
    children: 'Loading...',
    isLoading: true,
  },
}

export const DestructiveDisabled: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive Disabled Button',
    disabled: true,
  },
}
