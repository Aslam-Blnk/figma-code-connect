import type { Meta, StoryObj } from '@storybook/react-vite'

import { Progress } from '@/components/Progress'

const meta = {
  title: 'Design System/Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    className: 'w-[250px]',
    value: 44,
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Adjust the width of the progress bar',
    },
    value: {
      control: 'number',
      description: 'Progress value',
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['neutral', 'highlight', 'temperature'],
      description: 'Progress bar variant',
    },
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof Progress>

export const NeutralProgressBar: Story = {
  args: {
    variant: 'neutral',
  },
}

export const HighlightProgressBar: Story = {
  args: {
    variant: 'highlight',
  },
}

export const TemperatureProgressBar: Story = {
  args: {
    variant: 'temperature',
  },
}
