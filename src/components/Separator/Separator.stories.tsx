import type { Meta, StoryObj } from '@storybook/react-vite'

import { Separator } from '@/components/Separator'

const meta = {
  title: 'Design System/Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: {
        type: 'select',
      },
      options: ['vertical', 'horizontal'],
      description: 'The orientation of the separator.',
    },
    className: {
      control: {
        type: 'text',
      },
      description:
        'Additional classes to add to the separator. Use this to set width or height.',
    },
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof Separator>

export const VerticalSeparator: Story = {
  args: {
    orientation: 'vertical',
    className: 'h-32',
  },
}

export const HorizontalSeparator: Story = {
  args: {
    orientation: 'horizontal',
    className: 'w-32',
  },
}
