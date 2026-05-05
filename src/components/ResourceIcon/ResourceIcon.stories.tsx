import type { Meta, StoryObj } from '@storybook/react-vite'

import { ResourceIcon } from '@/components/ResourceIcon'

const meta = {
  title: 'Design System/Components/ResourceIcon',
  component: ResourceIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'large'],
      description: 'Size of the icon',
    },
    resourceIconColor: {
      control: 'select',
      options: [
        'neutral',
        'brand',
        'positive',
        'notice',
        'negative',
        'lime',
        'violet',
        'amber',
        'indigo',
        'teal',
      ],
      description: 'Color of the icon',
    },
    children: {
      control: {
        disable: true,
      },
      description: 'Icon to display',
    },
    className: {
      control: {
        type: 'text',
      },
      description: 'Additional class name',
    },
  },
} satisfies Meta<typeof ResourceIcon>

export default meta
type Story = StoryObj<typeof ResourceIcon>

const icon = () => (
  <span className="mui-icon material-symbols-rounded filled">badge</span>
)

export const DefaultNeutral: Story = {
  args: {
    size: 'default',
    resourceIconColor: 'neutral',
    children: icon(),
  },
}

export const LargeNeutral: Story = {
  args: {
    size: 'large',
    resourceIconColor: 'neutral',
    children: icon(),
  },
}

export const DefaultBrand: Story = {
  args: {
    size: 'default',
    resourceIconColor: 'brand',
    children: icon(),
  },
}

export const LargeBrand: Story = {
  args: {
    size: 'large',
    resourceIconColor: 'brand',
    children: icon(),
  },
}

export const DefaultPositive: Story = {
  args: {
    size: 'default',
    resourceIconColor: 'positive',
    children: icon(),
  },
}

export const LargePositive: Story = {
  args: {
    size: 'large',
    resourceIconColor: 'positive',
    children: icon(),
  },
}

export const DefaultNotice: Story = {
  args: {
    size: 'default',
    resourceIconColor: 'notice',
    children: icon(),
  },
}

export const LargeNotice: Story = {
  args: {
    size: 'large',
    resourceIconColor: 'notice',
    children: icon(),
  },
}

export const DefaultNegative: Story = {
  args: {
    size: 'default',
    resourceIconColor: 'negative',
    children: icon(),
  },
}

export const LargeNegative: Story = {
  args: {
    size: 'large',
    resourceIconColor: 'negative',
    children: icon(),
  },
}

export const DefaultLime: Story = {
  args: {
    size: 'default',
    resourceIconColor: 'lime',
    children: icon(),
  },
}

export const LargeLime: Story = {
  args: {
    size: 'large',
    resourceIconColor: 'lime',
    children: icon(),
  },
}

export const DefaultViolet: Story = {
  args: {
    size: 'default',
    resourceIconColor: 'violet',
    children: icon(),
  },
}

export const LargeViolet: Story = {
  args: {
    size: 'large',
    resourceIconColor: 'violet',
    children: icon(),
  },
}

export const DefaultAmber: Story = {
  args: {
    size: 'default',
    resourceIconColor: 'amber',
    children: icon(),
  },
}

export const LargeAmber: Story = {
  args: {
    size: 'large',
    resourceIconColor: 'amber',
    children: icon(),
  },
}

export const DefaultIndigo: Story = {
  args: {
    size: 'default',
    resourceIconColor: 'indigo',
    children: icon(),
  },
}

export const LargeIndigo: Story = {
  args: {
    size: 'large',
    resourceIconColor: 'indigo',
    children: icon(),
  },
}

export const DefaultTeal: Story = {
  args: {
    size: 'default',
    resourceIconColor: 'teal',
    children: icon(),
  },
}

export const LargeTeal: Story = {
  args: {
    size: 'large',
    resourceIconColor: 'teal',
    children: icon(),
  },
}
