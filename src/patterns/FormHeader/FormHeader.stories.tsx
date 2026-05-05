import type { Meta, StoryObj } from '@storybook/react-vite'

import { cn } from '../../utils'
import { formHeaderWithoutTabs, formHeaderWithTabs } from './FormHeader'

function Template({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />
}

const meta = {
  title: 'Design System/Patterns/FormHeader',
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

export const FormHeaderSidebarClosed: Story = {
  args: {
    children: formHeaderWithoutTabs({
      sidebarClosed: true,
    }),
  },
}

export const FormHeaderSidebarOpened: Story = {
  args: {
    children: formHeaderWithoutTabs({
      sidebarClosed: false,
    }),
  },
}

export const FormHeaderWithBreadcrumbs: Story = {
  args: {
    children: formHeaderWithoutTabs({
      withBreadcrumbs: true,
    }),
  },
}

export const FormHeaderWithTabs: Story = {
  args: {
    children: formHeaderWithTabs(),
  },
}
