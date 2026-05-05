import type { Meta, StoryObj } from '@storybook/react-vite'

import { LinkAnchorButton } from '@/components/LinkButton'

const meta = {
  title: 'Design System/Components/LinkAnchorButton',
  component: LinkAnchorButton,
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
      description: 'The variant of the LinkAnchorButton',
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
      description: 'Disables the LinkAnchorButton',
    },
    href: {
      control: {
        type: 'text',
      },
      description: 'The URL to link to',
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
      description: 'The content of the LinkAnchorButton',
    },
  },
} satisfies Meta<typeof LinkAnchorButton>

export default meta
type Story = StoryObj<typeof LinkAnchorButton>

const href = 'https://example.com'
const children = 'Label'

export const NeutralLink: Story = {
  args: {
    variant: 'neutral',
    href: href,
    children: children,
  },
}

export const NeutralLinkWithIcon: Story = {
  args: {
    variant: 'neutral',
    href: href,
    children: <span className="mui-icon material-symbols-rounded">add</span>,
  },
}

export const NeutralLinkWithIconAndLabel: Story = {
  args: {
    variant: 'neutral',
    href: href,
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
    href: href,
    children: children,
    isDisabled: true,
  },
}

export const LoadingNeutralLink: Story = {
  args: {
    variant: 'neutral',
    href: href,
    children: children,
    isLoading: true,
  },
}

export const BrandLink: Story = {
  args: {
    variant: 'brand',
    href: href,
    children: children,
  },
}

export const BrandLinkWithIcon: Story = {
  args: {
    variant: 'brand',
    href: href,
    children: <span className="mui-icon material-symbols-rounded">add</span>,
  },
}

export const BrandLinkWithIconAndLabel: Story = {
  args: {
    variant: 'brand',
    href: href,
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
    href: href,
    children: children,
    isDisabled: true,
  },
}

export const LoadingBrandLink: Story = {
  args: {
    variant: 'brand',
    href: href,
    children: children,
    isLoading: true,
  },
}

export const DestructiveLink: Story = {
  args: {
    variant: 'destructive',
    href: href,
    children: children,
  },
}

export const DestructiveLinkWithIcon: Story = {
  args: {
    variant: 'destructive',
    href: href,
    children: <span className="mui-icon material-symbols-rounded">add</span>,
  },
}

export const DestructiveLinkWithIconAndLabel: Story = {
  args: {
    variant: 'destructive',
    href: href,
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
    href: href,
    children: children,
    isDisabled: true,
  },
}

export const LoadingDestructiveLink: Story = {
  args: {
    variant: 'destructive',
    href: href,
    children: children,
    isLoading: true,
  },
}
