import type { Meta, StoryObj } from '@storybook/react-vite'

import { cn } from '../../utils'
import { formBar } from './FormBar'

function Template({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />
}

const meta = {
  title: 'Design System/Components/FormBar',
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

export const FormBarWithoutError: Story = {
  args: {
    children: formBar(),
  },
}

export const FormBarWithError: Story = {
  args: {
    children: formBar({ isErrored: true }),
  },
}

export const FormBarWithErrorAndShakeAnimation: Story = {
  args: {
    children: formBar({ isErrored: true, shake: true }),
  },
}
