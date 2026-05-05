import type { Meta, StoryObj } from '@storybook/react-vite'

import { Skeleton } from '@/components/Skeleton'

const meta = {
  title: 'Design System/Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof Skeleton>

export const SingleLineSkeleton: Story = {
  args: {
    className: 'h-4 w-24',
  },
}
