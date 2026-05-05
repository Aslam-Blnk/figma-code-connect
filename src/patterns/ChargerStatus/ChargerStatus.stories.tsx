import type { Meta, StoryObj } from '@storybook/react-vite'

import { cn } from '../../utils'
import { chargerStatus } from './ChargerStatus'

function Template({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />
}

const meta = {
  title: 'Design System/Patterns/ChargerStatus',
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

export const Operative: Story = {
  args: {
    children: chargerStatus('operative'),
  },
}

export const Inoperative: Story = {
  args: {
    children: chargerStatus('inoperative'),
  },
}

export const Disconnected: Story = {
  args: {
    children: chargerStatus('disconnected'),
  },
}
