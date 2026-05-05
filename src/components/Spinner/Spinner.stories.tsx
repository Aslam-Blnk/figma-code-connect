import type { Meta, StoryObj } from '@storybook/react-vite'

import { Spinner } from '@/components/Spinner'

const meta = {
  title: 'Design System/Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['on-intense', 'on-light'],
      description: 'The variant of the spinner',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof Spinner>

export const OnIntenseSpinner: Story = {
  args: {
    variant: 'on-intense',
  },
}

export const OnLightSpinner: Story = {
  args: {
    variant: 'on-light',
  },
}
