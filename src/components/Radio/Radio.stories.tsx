import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import { Label } from '@/components/Label'
import { RadioGroup, RadioGroupItem } from '@/components/Radio'

const meta = {
  title: 'Design System/Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the radio group',
    },
    defaultValue: {
      control: 'text',
      description: 'Default/Initial value of the radio group',
    },
    'aria-invalid': {
      control: 'boolean',
      description: 'Indicates that the radio group has an error',
    },
    children: {
      control: {
        disable: true,
      },
    },
  },
  tags: ['autodocs'],
  args: {
    onValueChange: fn(),
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof RadioGroup>

const radioGroupItems = () => {
  return (
    <>
      {['1', '2', '3'].map((value, i) => (
        <div className="flex items-center gap-2" key={i}>
          <RadioGroupItem id={`radio-${i}`} value={value} />
          <Label htmlFor={`radio-${i}`}>{value}</Label>
        </div>
      ))}
    </>
  )
}

export const DefaultRadioGroup: Story = {
  args: {
    children: radioGroupItems(),
  },
}

export const RadioGroupWithDefaultValue: Story = {
  args: {
    children: radioGroupItems(),
    defaultValue: '2',
  },
}

export const DisabledRadioGroup: Story = {
  args: {
    children: radioGroupItems(),
    disabled: true,
  },
}

export const DisabledRadioGroupWithDefaultValue: Story = {
  args: {
    children: radioGroupItems(),
    defaultValue: '2',
    disabled: true,
  },
}

export const InvalidRadioGroup: Story = {
  args: {
    children: radioGroupItems(),
    'aria-invalid': true,
  },
}
