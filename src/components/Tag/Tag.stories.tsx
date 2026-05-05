import type { Meta, StoryObj } from '@storybook/react-vite'

import { LinkButton } from '@/components/LinkButton'
import { Tag } from '@/components/Tag'

const meta = {
  title: 'Design System/Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof Tag>

export const DefaultTag: Story = {
  args: {
    children: (
      <>
        Label
        <LinkButton variant="neutral" type="button">
          <span className="mui-icon material-symbols-rounded">close</span>
        </LinkButton>
      </>
    ),
  },
}

export const DisabledTag: Story = {
  args: {
    'aria-disabled': 'true',
    children: (
      <>
        Label
        <LinkButton variant="neutral" isDisabled type="button">
          <span className="mui-icon material-symbols-rounded">close</span>
        </LinkButton>
      </>
    ),
  },
}
