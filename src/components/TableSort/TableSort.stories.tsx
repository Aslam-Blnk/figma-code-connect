import type { Meta, StoryObj } from '@storybook/react-vite'

interface TableSortProps extends React.HTMLAttributes<HTMLButtonElement> {
  'data-state'?: string
}

function TableSort({ ...props }: TableSortProps) {
  return <button className="table-sort" {...props} />
}

const meta = {
  title: 'Design System/Components/TableSort',
  component: TableSort,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TableSort>

export default meta
type Story = StoryObj<typeof TableSort>

export const NotSelectedTableSort: Story = {
  args: {
    children: <span className="mui-icon material-symbols-rounded">sort</span>,
  },
}

export const AscTableSort: Story = {
  args: {
    'data-state': 'selected',
    children: <span className="mui-icon material-symbols-rounded">north</span>,
  },
}

export const DscTableSort: Story = {
  args: {
    'data-state': 'selected',
    children: <span className="mui-icon material-symbols-rounded">south</span>,
  },
}
