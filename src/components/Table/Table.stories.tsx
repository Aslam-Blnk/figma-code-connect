import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/Button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/Table'

const meta = {
  title: 'Design System/Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'rounded'],
      description: 'Choose the table variant',
    },
    children: {
      control: { disable: true },
    },
    className: {
      control: {
        type: 'text',
      },
      description: 'Apply custom styles to the table',
    },
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof Table>

const data = [
  {
    id: '1',
    name: 'Site 1',
    address: '1234 Main St',
  },
  {
    id: '2',
    name: 'Site 2',
    address: '1234 Main St',
  },
  {
    id: '3',
    name: 'Site 3',
    address: '1234 Main St',
  },
]

const tableHeader = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="text-left">Name</TableHead>
        <TableHead className="text-left">Address</TableHead>
        <TableHead></TableHead>
      </TableRow>
    </TableHeader>
  )
}
const tableBody = () => {
  return (
    <TableBody>
      {data.map((item) => {
        return (
          <TableRow key={item.id}>
            <TableCell className="text-subtle text-content">
              {item.name}
            </TableCell>
            <TableCell className="text-subtler text-content">
              {item.address}
            </TableCell>
            <TableCell>
              <Button variant="ghost" iconOnly>
                <span className="mui-icon material-symbols-rounded">
                  arrow_forward
                </span>
              </Button>
            </TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  )
}

export const DefaultTable: Story = {
  args: {
    variant: 'default',
    className: '[&_tbody_td]:h-[4.25rem]',
    children: (
      <>
        {tableHeader()}
        {tableBody()}
      </>
    ),
  },
}

export const DefaultTableWithLargeCellSize: Story = {
  args: {
    variant: 'default',
    className: '[&_tbody_td]:h-[4.75rem]',
    children: (
      <>
        {tableHeader()}
        {tableBody()}
      </>
    ),
  },
}

export const RoundedTable: Story = {
  args: {
    variant: 'rounded',
    className: '[&_tbody_td]:h-[4.25rem]',
    children: (
      <>
        {tableHeader()}
        {tableBody()}
      </>
    ),
  },
}

export const RoundedTableWithLargeCellSize: Story = {
  args: {
    variant: 'rounded',
    className: '[&_tbody_td]:h-[4.75rem]',
    children: (
      <>
        {tableHeader()}
        {tableBody()}
      </>
    ),
  },
}

export const TableWithNoBorders: Story = {
  args: {
    variant: 'default',
    className: 'border-none [&_*]:!border-none [&_tbody_td]:h-[4.25rem]',
    children: (
      <>
        {tableHeader()}
        {tableBody()}
      </>
    ),
  },
}
