import type { Meta, StoryObj } from '@storybook/react-vite'

import { cn } from '../../utils'
import { sectionHeader, sectionHeaderWithTabs } from './Header'

function Template({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />
}

const meta = {
  title: 'Design System/Patterns/Header',
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

export const SectionHeaderSidebarOpen: Story = {
  args: {
    children: sectionHeader({ sidebarClosed: false }),
  },
}

export const SectionHeaderSidebarOpenWithHeadingTrailing: Story = {
  args: {
    children: sectionHeader({
      sidebarClosed: false,
      headingTrailing: <p>Slot</p>,
    }),
  },
}

export const SectionHeaderSidebarClosed: Story = {
  args: {
    children: sectionHeader({ sidebarClosed: true }),
  },
}

export const SectionHeaderSidebarOpenWithTabs: Story = {
  args: {
    children: sectionHeaderWithTabs({ sidebarClosed: false }),
  },
}

export const SectionHeaderSidebarClosedWithTabs: Story = {
  args: {
    children: sectionHeaderWithTabs({ sidebarClosed: true }),
  },
}
