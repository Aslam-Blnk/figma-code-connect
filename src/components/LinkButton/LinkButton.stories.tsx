import type { Meta, StoryObj } from '@storybook/react-vite'

import { LinkButton } from '@/components/LinkButton'

const meta = {
  title: 'Design System/Components/LinkButton',
  component: LinkButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['neutral', 'brand', 'destructive'],
      },
      description: 'The variant of the LinkButton',
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
      description: 'Disables the LinkButton',
    },
    isLoading: {
      control: {
        type: 'boolean',
      },
      description: 'Shows a loading spinner',
    },
    children: {
      control: {
        disable: true,
      },
      description: 'The content of the LinkButton',
    },
  },
} satisfies Meta<typeof LinkButton>

export default meta
type Story = StoryObj<typeof LinkButton>

const children = 'Label'

export const NeutralLink: Story = {
  args: {
    variant: 'neutral',
    children: children,
  },
}

export const NeutralLinkWithIcon: Story = {
  args: {
    variant: 'neutral',
    children: <span className="mui-icon material-symbols-rounded">add</span>,
  },
}

export const NeutralLinkWithIconAndLabel: Story = {
  args: {
    variant: 'neutral',
    children: (
      <>
        <span className="mui-icon material-symbols-rounded">add</span>
        {children}
      </>
    ),
  },
}

export const DisabledNeutralLink: Story = {
  args: {
    variant: 'neutral',
    children: children,
    isDisabled: true,
  },
}

export const LoadingNeutralLink: Story = {
  args: {
    variant: 'neutral',
    children: children,
    isLoading: true,
  },
}

export const BrandLink: Story = {
  args: {
    variant: 'brand',
    children: children,
  },
}

export const BrandLinkWithIcon: Story = {
  args: {
    variant: 'brand',
    children: <span className="mui-icon material-symbols-rounded">add</span>,
  },
}

export const BrandLinkWithIconAndLabel: Story = {
  args: {
    variant: 'brand',
    children: (
      <>
        <span className="mui-icon material-symbols-rounded">add</span>
        {children}
      </>
    ),
  },
}

export const DisabledBrandLink: Story = {
  args: {
    variant: 'brand',
    children: children,
    isDisabled: true,
  },
}

export const LoadingBrandLink: Story = {
  args: {
    variant: 'brand',
    children: children,
    isLoading: true,
  },
}

export const DestructiveLink: Story = {
  args: {
    variant: 'destructive',
    children: children,
  },
}

export const DestructiveLinkWithIcon: Story = {
  args: {
    variant: 'destructive',
    children: <span className="mui-icon material-symbols-rounded">add</span>,
  },
}

export const DestructiveLinkWithIconAndLabel: Story = {
  args: {
    variant: 'destructive',
    children: (
      <>
        <span className="mui-icon material-symbols-rounded">add</span>
        {children}
      </>
    ),
  },
}

export const DisabledDestructiveLink: Story = {
  args: {
    variant: 'destructive',
    children: children,
    isDisabled: true,
  },
}

export const LoadingDestructiveLink: Story = {
  args: {
    variant: 'destructive',
    children: children,
    isLoading: true,
  },
}
