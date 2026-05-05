import type { Meta, StoryObj } from '@storybook/react-vite'

import { cn } from '../../utils'
import { pageLayoutChildren } from './PageLayout'

function PageLayout({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />
}

const meta = {
  title: 'Design System/Patterns/PageLayout',
  component: PageLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        type: 'auto',
      },
    },
  },

  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof PageLayout>

export default meta
type Story = StoryObj<typeof PageLayout>

export const PageLayoutWithSidebarAndTableContent: Story = {
  args: {
    className: 'bg-gray-50 relative',
    children: pageLayoutChildren(),
  },
}
