import type { Meta, StoryObj } from '@storybook/react-vite'

import { cn } from '../../utils'
import { PopoverMultiOptionListWithSearch } from './PopoverMultiOptionList'

function Template({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />
}

const meta = {
  title: 'Design System/Patterns/PopoverMultiOptionList',
  component: Template,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Template>

export default meta
type Story = StoryObj<typeof Template>

export const WithSearch: Story = {
  args: {
    children: <PopoverMultiOptionListWithSearch />,
  },
}

export const Disabled: Story = {
  args: {
    children: <PopoverMultiOptionListWithSearch disabled />,
  },
}

export const Restricted: Story = {
  args: {
    children: <PopoverMultiOptionListWithSearch maxItems={3} />,
  },
}

export const RestrictedWithDisabledSelectAll: Story = {
  args: {
    children: (
      <PopoverMultiOptionListWithSearch maxItems={3} disableSelectAll />
    ),
  },
}
