import type { Meta, StoryObj } from '@storybook/react-vite'

import { cn } from '../../utils'
import {
  PopoverOptionList,
  PopoverOptionListWithSearch,
} from './PopoverOptionList'

function Template({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />
}

const meta = {
  title: 'Design System/Patterns/PopoverOptionList',
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
    children: <PopoverOptionList />,
  },
}

export const WithSearch: Story = {
  args: {
    children: <PopoverOptionListWithSearch />,
  },
}

export const Disabled: Story = {
  args: {
    children: <PopoverOptionList disabled />,
  },
}
