import type { Meta, StoryObj } from '@storybook/react-vite'

import { Label } from '@/components/Label'

const meta = {
  title: 'Design System/Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof Label>

export const DefaultLabel: Story = {
  args: {
    children: 'Normal Label',
  },
}
