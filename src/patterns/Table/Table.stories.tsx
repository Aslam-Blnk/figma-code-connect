import type { Meta, StoryObj } from '@storybook/react-vite'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { cn } from '../../utils'
import { siteColumns } from './client-side-pagination/columns'
import { sites } from './client-side-pagination/data'
import { SiteDataTable } from './client-side-pagination/data-table'
import { userColumns } from './manual-pagination/columns'
import { UserDataTable } from './manual-pagination/data-table'

const queryClient = new QueryClient()

function DemoTable({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={cn(className)} {...props} />
    </QueryClientProvider>
  )
}

const meta = {
  title: 'Design System/Patterns/DataTable',
  component: DemoTable,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: { disable: true } },
  },
} satisfies Meta<typeof DemoTable>

export default meta
type Story = StoryObj<typeof DemoTable>

export const TableWithClientSidePaginationAndRowSelection: Story = {
  args: {
    className: 'flex flex-col w-full min-h-svh',
    children: (
      <SiteDataTable
        columns={siteColumns}
        data={sites}
        tableProps={{ variant: 'default' }}
      />
    ),
  },
}

export const TableWithServerSidePaginationAndSearch: Story = {
  args: {
    className: 'flex flex-col w-full h-svh',
    children: (
      <UserDataTable
        columns={userColumns}
        tableProps={{
          variant: 'default',
        }}
      />
    ),
  },
}
