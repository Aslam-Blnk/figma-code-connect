import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '@/components/Card'
import { LinkAnchorButton } from '@/components/LinkButton'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/Tooltip'

const meta = {
  title: 'Design System/Components/Tooltip',
  component: TooltipProvider,
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
    delayDuration: {
      control: {
        type: 'number',
      },
      table: {
        defaultValue: {
          summary: '700',
        },
      },
      description:
        'The duration from when the mouse enters a tooltip trigger until the tooltip opens.',
    },
    skipDelayDuration: {
      control: {
        type: 'number',
      },
      table: {
        defaultValue: {
          summary: '300',
        },
      },
      description:
        'How much time a user has to enter another trigger without incurring a delay again.',
    },
  },
} satisfies Meta<typeof TooltipProvider>

export default meta
type Story = StoryObj<typeof TooltipProvider>

export const SimpleTooltip: Story = {
  args: {
    children: (
      <Tooltip>
        <TooltipTrigger className="focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-focus-ring">
          Hover
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-white-a80 text-content-caption-strong">Title</p>
          <p className="text-white-a60 text-content-caption">Description</p>
        </TooltipContent>
      </Tooltip>
    ),
  },
}

const ForceMountChildren = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <Tooltip open={open} onOpenChange={setOpen}>
      <TooltipTrigger className="focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-focus-ring">
        Hover
      </TooltipTrigger>
      <TooltipContent forceMount>
        <p className="text-white-a80 text-content-caption-strong">Title</p>
        <p className="text-white-a60 text-content-caption">Description</p>
      </TooltipContent>
    </Tooltip>
  )
}

export const SimpleTooltipForceMount: Story = {
  args: {
    children: <ForceMountChildren />,
  },
}

export const TooltipOnLinkButton: Story = {
  args: {
    delayDuration: 300,
    children: (
      <Tooltip>
        <TooltipTrigger asChild>
          <LinkAnchorButton variant="neutral">Hover me</LinkAnchorButton>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-white-a80 text-content-caption-strong">Title</p>
          <p className="text-white-a60 text-content-caption">Description</p>
        </TooltipContent>
      </Tooltip>
    ),
  },
}

export const TooltipOnLinkButtonUnstyled: Story = {
  args: {
    children: (
      <Tooltip>
        <TooltipTrigger asChild>
          <LinkAnchorButton variant="neutral">Hover me</LinkAnchorButton>
        </TooltipTrigger>
        <TooltipContent unstyled asChild>
          <Card className="p-4">
            <p className="text-subtle text-content-caption-strong">Title</p>
            <p className="text-subtle text-content-caption">Description</p>
          </Card>
        </TooltipContent>
      </Tooltip>
    ),
  },
}
