import type { Meta, StoryObj } from '@storybook/react-vite'

import { ToggleFilter } from '@/components/ToggleFilter'

const meta = {
  title: 'Design System/Components/ToggleFilter',
  component: ToggleFilter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isFilled: {
      control: 'boolean',
      description: 'Whether the filter is applied or not',
    },
    children: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof ToggleFilter>

export default meta
type Story = StoryObj<typeof ToggleFilter>

export const DefaultToggleFilter: Story = {
  args: {
    isFilled: false,
    children: (
      <>
        <span className="mui-icon material-symbols-rounded">filter_list</span>
        Label
      </>
    ),
  },
}

export const FilledToggleFilter: Story = {
  args: {
    isFilled: true,
    children: (
      <>
        <span className="mui-icon material-symbols-rounded">filter_list</span>
        Label
      </>
    ),
  },
}
