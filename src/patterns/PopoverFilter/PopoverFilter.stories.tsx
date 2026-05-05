import type { Meta, StoryObj } from '@storybook/react-vite'

import { cn } from '../../utils'
import {
  PopoverFilterMultiOptionList,
  PopoverFilterOptionList,
} from './PopoverFilter'

function Template({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />
}

const meta = {
  title: 'Design System/Patterns/PopoverFilter',
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
    className: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Template>

export default meta
type Story = StoryObj<typeof Template>

export const PopoverFilterWithMultiOptionList: Story = {
  args: {
    children: <PopoverFilterMultiOptionList />,
  },
}

export const DisabledPopoverFilterWithMultiOptionList: Story = {
  args: {
    children: <PopoverFilterMultiOptionList disabled />,
  },
}

export const PopoverFilterWithOptionList: Story = {
  args: {
    children: <PopoverFilterOptionList />,
  },
}

export const DisabledPopoverFilterWithOptionList: Story = {
  args: {
    children: <PopoverFilterOptionList disabled />,
  },
}
