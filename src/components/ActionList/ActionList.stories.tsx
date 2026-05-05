import type { Meta, StoryObj } from '@storybook/react-vite'

import { Command } from '@/components/Command'

import { ActionList } from './ActionListCombobox'

const meta = {
  title: 'Design System/Components/ActionList',
  component: Command,
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
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof Command>

export const SimpleCommand: Story = {
  args: {
    children: ActionList(),
  },
}
