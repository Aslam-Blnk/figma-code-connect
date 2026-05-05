import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/Button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover'

const meta = {
  title: 'Design System/Components/Popover',
  component: Popover,
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
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof Popover>

const popoverChildren = (
  props?: React.ComponentPropsWithoutRef<typeof PopoverContent>
) => {
  return (
    <>
      <PopoverTrigger asChild>
        <Button variant="neutral">Open</Button>
      </PopoverTrigger>
      <PopoverContent {...props}>
        <div className="flex flex-col gap-3 px-4 py-2">
          <p className="text-subtle text-content">Popover Content</p>
          <p className="text-subtler text-content-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            fugiat repellendus consequatur, iusto pariatur similique rem officia
            ad ex saepe. Repellat ad natus ratione rem eum dolorem repellendus
            libero odit?
          </p>
        </div>
      </PopoverContent>
    </>
  )
}

export const DefaultPopover: Story = {
  args: {
    children: popoverChildren(),
  },
}

export const LeftSidePopover: Story = {
  args: {
    children: popoverChildren({ side: 'left' }),
  },
}

export const RightSidePopover: Story = {
  args: {
    children: popoverChildren({ side: 'right' }),
  },
}

export const BottomSidePopover: Story = {
  args: {
    children: popoverChildren({ side: 'bottom' }),
  },
}

export const TopSidePopover: Story = {
  args: {
    children: popoverChildren({ side: 'top' }),
  },
}

export const CustomOffsetPopover: Story = {
  args: {
    children: popoverChildren({ sideOffset: 16 }),
  },
}
