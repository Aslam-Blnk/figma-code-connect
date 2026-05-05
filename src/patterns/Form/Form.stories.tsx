import { Meta, StoryObj } from '@storybook/react-vite'

import { cn } from '../../utils'
import { InputForm } from './InputForm'
import { InputOptionForm } from './InputOptionForm'

function Template({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />
}

const meta = {
  title: 'Design System/Patterns/Form',
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

export const Input: Story = {
  args: {
    children: <InputForm />,
  },
}

export const InputOption: Story = {
  args: {
    children: <InputOptionForm />,
  },
}
