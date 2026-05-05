import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/Tabs'

const meta = {
  title: 'Design System/Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The value of the tab that should be selected by default',
    },
    children: {
      control: {
        disable: true,
      },
    },
  },
  args: {
    onValueChange: fn(),
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof Tabs>

const tabs = (props?: React.ComponentPropsWithoutRef<typeof TabsList>) => {
  return (
    <>
      <TabsList {...props}>
        <TabsTrigger value="location">Location</TabsTrigger>
        <TabsTrigger value="session">
          <span className="mui-icon material-symbols-rounded">domain</span>
          Session
        </TabsTrigger>
      </TabsList>
      <TabsContent value="location" className="text-subtle text-content">
        Location content
      </TabsContent>
      <TabsContent value="session" className="text-subtle text-content">
        Session content
      </TabsContent>
    </>
  )
}

export const BorderedTabs: Story = {
  args: {
    children: tabs({ isBordered: true }),
    defaultValue: 'location',
  },
}

export const BorderedFullWidthTabs: Story = {
  args: {
    children: tabs({ isBordered: true, isFullWidth: true }),
    defaultValue: 'location',
  },
}

export const BorderlessTabs: Story = {
  args: {
    children: tabs(),
    defaultValue: 'location',
  },
}

export const BorderlessFullWidthTabs: Story = {
  args: {
    children: tabs({ isFullWidth: true }),
    defaultValue: 'location',
  },
}

export const FullyBorderlessTabs: Story = {
  args: {
    children: tabs({ isFullyBorderless: true }),
    defaultValue: 'location',
  },
}

export const FullyBorderlessFullWidthTabs: Story = {
  args: {
    children: tabs({ isFullyBorderless: true, isFullWidth: true }),
    defaultValue: 'location',
  },
}
