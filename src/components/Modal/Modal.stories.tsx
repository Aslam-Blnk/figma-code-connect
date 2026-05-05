import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { cn } from '../../utils'
import { Modal } from './Modal'

function Template({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />
}

const meta = {
  title: 'Design System/Components/Modal',
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

export const ModalSmall: Story = {
  args: {
    children: <Modal size="small" />,
  },
}

export const ModalForceMount: Story = {
  args: {
    children: <Modal size="small" forceMount />,
  },
}

export const ModalMedium: Story = {
  args: {
    children: <Modal size="medium" />,
  },
}

export const ModalLarge: Story = {
  args: {
    children: <Modal size="large" />,
  },
}
