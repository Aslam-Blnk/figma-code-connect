import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Input, InputRoot } from '@/components/Input'

import { cn } from '../../utils'

function Template({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />
}

const meta = {
  title: 'Design System/Components/Input',
  component: Template,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Template>

export default meta
type Story = StoryObj<typeof Template>

const inputInline = (disabled?: boolean) => (
  <button
    disabled={disabled}
    type="button"
    className="flex items-center gap-1 bg-inherit px-3 py-2 text-subtler hover:bg-interactive-hover focus:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring active:bg-interactive-pressed disabled:bg-default [&_span]:text-base"
  >
    <p className="text-content">US</p>
    <span className="mui-icon material-symbols-rounded">
      keyboard_arrow_down
    </span>
  </button>
)

export const SimpleInput: Story = {
  args: {
    children: (
      <InputRoot>
        <Input placeholder="Enter a phone number" />
      </InputRoot>
    ),
  },
}

export const ValidInput: Story = {
  args: {
    children: (
      <InputRoot isValid>
        <Input placeholder="Enter a phone number" />
      </InputRoot>
    ),
  },
}

export const InvalidInput: Story = {
  args: {
    children: (
      <InputRoot isValid={false} aria-invalid="true">
        <Input placeholder="Enter a phone number" aria-invalid="true" />
      </InputRoot>
    ),
  },
}

export const DisabledInput: Story = {
  args: {
    children: (
      <InputRoot disabled>
        <Input placeholder="Enter a phone number" disabled />
      </InputRoot>
    ),
  },
}

export const DisabledInputWithValue: Story = {
  args: {
    children: (
      <InputRoot disabled>
        <Input
          placeholder="Enter a phone number"
          disabled
          value="+911234567890"
        />
      </InputRoot>
    ),
  },
}

export const LeadingIconInput: Story = {
  args: {
    children: (
      <InputRoot>
        <Input
          placeholder="Enter a phone number"
          leadingIcon={
            <span className="mui-icon material-symbols-rounded filled">
              phone
            </span>
          }
        />
      </InputRoot>
    ),
  },
}

export const LeadingIconDisabledInput: Story = {
  args: {
    children: (
      <InputRoot disabled>
        <Input
          placeholder="Enter a phone number"
          leadingIcon={
            <span className="mui-icon material-symbols-rounded filled">
              phone
            </span>
          }
          disabled
        />
      </InputRoot>
    ),
  },
}

export const LeadingInput: Story = {
  args: {
    children: (
      <InputRoot>
        <Input placeholder="Enter a phone number" leading="+00" />
      </InputRoot>
    ),
  },
}

export const LeadingTabInput: Story = {
  args: {
    children: (
      <InputRoot>
        <Input placeholder="Enter a phone number" leadingTab={inputInline()} />
      </InputRoot>
    ),
  },
}

export const LeadingTabDisabledInput: Story = {
  args: {
    children: (
      <InputRoot disabled>
        <Input
          placeholder="Enter a phone number"
          leadingTab={inputInline(true)}
          disabled
        />
      </InputRoot>
    ),
  },
}

export const LeadingWithLeadingTabInput: Story = {
  args: {
    children: (
      <InputRoot>
        <Input
          placeholder="Enter a phone number"
          leading="+00"
          leadingTab={inputInline()}
        />
      </InputRoot>
    ),
  },
}

export const LeadingWithTrailingTabInput: Story = {
  args: {
    children: (
      <InputRoot>
        <Input
          placeholder="Enter a phone number"
          leading="+00"
          trailingTab={inputInline()}
        />
      </InputRoot>
    ),
  },
}

export const LeadingWithTrailingTabDisabledInput: Story = {
  args: {
    children: (
      <InputRoot disabled>
        <Input
          placeholder="Enter a phone number"
          leading="+00"
          trailingTab={inputInline(true)}
          disabled
        />
      </InputRoot>
    ),
  },
}
