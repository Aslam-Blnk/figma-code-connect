import { Meta, StoryObj } from '@storybook/react-vite'

import { SidebarProvider } from '@/components/Sidebar'

import { cn } from '../../utils'
import { AppSidebar, SidebarOutsideTrigger } from './Sidebar'

function Template({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />
}

const meta = {
  title: 'Design System/Patterns/Sidebar',
  component: Template,
  parameters: {
    layout: 'fullscreen',
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

export const UncontrolledSidebar: Story = {
  args: {
    children: (
      <SidebarProvider>
        <AppSidebar />
        <main className="block px-4 py-2">
          <SidebarOutsideTrigger />
        </main>
      </SidebarProvider>
    ),
  },
}
