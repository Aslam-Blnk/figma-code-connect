import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import { Checkbox } from '@/components/Checkbox'

const meta = {
  title: 'Design System/Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onCheckedChange: {
      control: {
        disable: true,
      },
      description: 'Callback when the checked state changes.',
    },
    disabled: {
      control: 'boolean',
      description: 'If `true`, the checkbox will be disabled.',
    },
    checked: {
      control: {
        type: 'select',
      },
      options: ['indeterminate', true, false],
      description: 'If `true`, the checkbox will be checked.',
    },
    'aria-invalid': {
      control: {
        type: 'select',
      },
      options: ['true', 'false'],
      description: 'If `true`, the checkbox will be in an error state.',
    },
  },
  args: {
    onCheckedChange: fn(),
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof Checkbox>

export const DefaultCheckbox: Story = {
  args: {},
}

export const IndeterminateCheckbox: Story = {
  args: {
    checked: 'indeterminate',
  },
}

export const DisabledCheckbox: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledCheckedCheckbox: Story = {
  args: {
    disabled: true,
    checked: true,
  },
}

export const DisabledIntermediateCheckbox: Story = {
  args: {
    disabled: true,
    checked: 'indeterminate',
  },
}

export const ErrorCheckbox: Story = {
  args: {
    'aria-invalid': 'true',
  },
}

export const ErrorCheckedCheckbox: Story = {
  args: {
    'aria-invalid': 'true',
    checked: true,
  },
}

export const ErrorIntermediateCheckbox: Story = {
  args: {
    'aria-invalid': 'true',
    checked: 'indeterminate',
  },
}
