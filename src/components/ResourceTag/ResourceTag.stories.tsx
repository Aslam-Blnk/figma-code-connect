import type { Meta, StoryObj } from '@storybook/react-vite'

import { ResourceIcon } from '@/components/ResourceIcon'
import { ResourceTag } from '@/components/ResourceTag'

const meta = {
  title: 'Design System/Components/ResourceTag',
  component: ResourceTag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isLink: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the tag should be a link',
      type: 'boolean',
    },
    children: {
      control: {
        disable: true,
      },
    },
    href: {
      control: {
        type: 'text',
      },
      description: 'The URL to link to',
    },
    asChild: {
      control: {
        type: 'boolean',
      },
      description:
        'Use Slot to render children. Useful when using framework provided Link component',
    },
    isInteractive: {
      control: {
        type: 'boolean',
      },
      description: 'To enable hover and focus styles',
      type: 'boolean',
    },
  },
} satisfies Meta<typeof ResourceTag>

export default meta
type Story = StoryObj<typeof ResourceTag>

export const NonLinkResourceTag: Story = {
  args: {
    isLink: false,
    children: (
      <>
        <ResourceIcon resourceIconColor="lime">
          <span className="mui-icon material-symbols-rounded filled">
            badge
          </span>
        </ResourceIcon>
        Label
      </>
    ),
  },
}

export const InteractiveResourceTag: Story = {
  args: {
    isLink: false,
    asChild: true,
    isInteractive: true,
    children: (
      <button type="button">
        <ResourceIcon resourceIconColor="lime">
          <span className="mui-icon material-symbols-rounded filled">
            badge
          </span>
        </ResourceIcon>
        Label
      </button>
    ),
  },
}

export const LinkResourceTag: Story = {
  args: {
    isLink: true,
    children: (
      <>
        <ResourceIcon resourceIconColor="lime">
          <span className="mui-icon material-symbols-rounded filled">
            badge
          </span>
        </ResourceIcon>
        Link Label
      </>
    ),
    href: 'https://example.com',
  },
}

export const LinkResourceTagAsChild: Story = {
  args: {
    isLink: true,
    children: (
      <a>
        <ResourceIcon resourceIconColor="lime">
          <span className="mui-icon material-symbols-rounded filled">
            badge
          </span>
        </ResourceIcon>
        Link Label
      </a>
    ),
    href: 'https://example.com',
    asChild: true,
  },
}
