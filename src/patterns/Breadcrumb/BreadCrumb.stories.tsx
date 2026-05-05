import type { Meta, StoryObj } from '@storybook/react-vite'

import { cn } from '../../utils'
import { breadcrumb } from './Breadcrumb'

function Template({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />
}

const meta = {
  title: 'Design System/Patterns/Breadcrumb',
  component: Template,
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
    className: {
      control: {
        type: 'text',
      },
      description: 'The class for breadcrumb container',
    },
  },
  args: {
    className: 'inline-flex items-center gap-2',
  },
} satisfies Meta<typeof Template>

export default meta
type Story = StoryObj<typeof Template>

export const BreadcrumbWithSingleEntry: Story = {
  args: {
    children: breadcrumb({
      items: [
        {
          label: 'Zemetric',
          icon: (
            <span className="mui-icon material-symbols-rounded filled text-icon-subtle">
              precision_manufacturing
            </span>
          ),
        },
      ],
    }),
  },
}

export const BreadcrumbWithMultipleEntries: Story = {
  args: {
    children: breadcrumb({
      items: [
        {
          label: 'Dashboard',
          href: '/',
        },
        {
          label: 'Manufacturer',
          href: '/',
        },
        {
          label: 'Zemetric',
          icon: (
            <span className="mui-icon material-symbols-rounded filled text-icon-subtle">
              precision_manufacturing
            </span>
          ),
        },
      ],
    }),
  },
}
