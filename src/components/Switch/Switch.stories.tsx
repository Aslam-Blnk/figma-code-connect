import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import { Switch } from '@/components/Switch'

const meta = {
  title: 'Design System/Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onCheckedChange: fn(),
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the switch is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
    },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof Switch>

export const DefaultSwitch: Story = {
  args: {},
}

export const DisabledSwitch: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledCheckedSwitch: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
}

export const CheckedDefaultSwitch: Story = {
  args: {
    defaultChecked: true,
  },
}
