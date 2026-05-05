import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '@/components/Card'

const meta = {
  title: 'Design System/Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: (
      <div className="flex min-h-24 min-w-80 flex-1 items-center justify-center rounded border border-dashed text-subtle text-content">
        Content
      </div>
    ),
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    className: {
      control: 'text',
      description:
        'Additional classes to add to the card. Control the padding here.',
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['default', 'decorative'],
      description: 'The variant of the card.',
    },
    elevation: {
      control: {
        type: 'select',
      },
      options: ['flat', 'raised', 'floating'],
      description: 'The elevation of the card.',
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof Card>

export const DefaultFlatCard: Story = {
  args: {
    className: 'p-4',
    variant: 'default',
    elevation: 'flat',
  },
}

export const DefaultRaisedCard: Story = {
  args: {
    className: 'p-4',
    variant: 'default',
    elevation: 'raised',
  },
}

export const DefaultFloatingCard: Story = {
  args: {
    className: 'p-4',
    variant: 'default',
    elevation: 'floating',
  },
}

export const DecorativeFlatCard: Story = {
  args: {
    className: 'p-4',
    variant: 'decorative',
    elevation: 'flat',
  },
}

export const DecorativeRaisedCard: Story = {
  args: {
    className: 'p-4',
    variant: 'decorative',
    elevation: 'raised',
  },
}

export const DecorativeFloatingCard: Story = {
  args: {
    className: 'p-4',
    variant: 'decorative',
    elevation: 'floating',
  },
}
