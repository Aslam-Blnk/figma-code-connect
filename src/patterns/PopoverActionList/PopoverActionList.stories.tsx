import type { Meta, StoryObj } from '@storybook/react-vite'

import { cn } from '../../utils'
import { PopoverActionList } from './PopoverActionList'

function Template({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />
}

const meta = {
  title: 'Design System/Patterns/PopoverActionList',
  component: Template,
  parameters: {
    layout: 'centered',
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

export const Default: Story = {
  args: {
    children: <PopoverActionList />,
  },
}

export const Disabled: Story = {
  args: {
    children: <PopoverActionList disabled />,
  },
}

export const WithoutActions: Story = {
  args: {
    children: <PopoverActionList withActions={false} />,
  },
}
