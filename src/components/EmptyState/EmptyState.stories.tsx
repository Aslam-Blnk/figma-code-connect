import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/Button'

import { cn } from '../../utils'
import { emptyState } from './EmptyState'

function Template({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />
}

const meta = {
  title: 'Design System/Components/EmptyState',
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
  args: {
    className: 'max-w-80',
  },
} satisfies Meta<typeof Template>

export default meta
type Story = StoryObj<typeof Template>

export const Done: Story = {
  args: {
    children: emptyState({
      imageSrc: '/empty-state-done.svg',
      content: 'All done!',
      description: 'You have no tasks to do',
    }),
  },
}

export const NoTasks: Story = {
  args: {
    children: emptyState({
      imageSrc: '/empty-state-no-tasks.svg',
      content: 'No tasks',
      description: 'You have no tasks to do',
    }),
  },
}

export const NoItems: Story = {
  args: {
    children: emptyState({
      imageSrc: '/empty-state-no-items.svg',
      content: 'This list is empty',
      description: 'There are currently no items to display in this section.',
    }),
  },
}

export const Error: Story = {
  args: {
    children: emptyState({
      imageSrc: '/empty-state-error.svg',
      content: 'Error loading content',
      description:
        'There was an issue loading the data. Please reload or try again later.',
    }),
  },
}

export const NoConnection: Story = {
  args: {
    children: emptyState({
      imageSrc: '/empty-state-no-connection.svg',
      content: 'No connection',
      description: 'Please check your internet connection and try again.',
    }),
  },
}

export const NoSearchResult: Story = {
  args: {
    children: emptyState({
      imageSrc: '/empty-state-no-search-result.svg',
      content: 'No items match your search',
      description:
        "We couldn't find any matches for your search. Try different keywords.",
    }),
  },
}

export const WithActions: Story = {
  args: {
    children: emptyState({
      imageSrc: '/empty-state-error.svg',
      content: 'Error loading content',
      description:
        'There was an issue loading the data. Please reload or try again later.',
      actions: (
        <Button variant="neutral" className="mx-auto">
          Reload content
        </Button>
      ),
    }),
  },
}
