import { ColumnDef } from '@tanstack/react-table'

import { UserEntry } from './data'

export const userColumns: ColumnDef<UserEntry>[] = [
  {
    id: 'fullName',
    header: 'Full Name',
    cell: ({ row }) => (
      <p className="text-subtle text-content">
        {row.original.firstName} {row.original.lastName}
      </p>
    ),
    meta: {
      headerProps: {
        className: 'text-left w-full min-w-[160px]',
      },
    },
  },
  {
    header: 'Age',
    accessorKey: 'age',
    cell: ({ row }) => (
      <p className="text-right text-subtle text-number-sm">
        {row.original.age}
      </p>
    ),
    meta: {
      headerProps: {
        className: 'text-right min-w-[120px]',
      },
    },
  },
  {
    header: 'Email',
    cell: ({ row }) => (
      <p className="text-right text-subtle text-content">
        {row.original.email}
      </p>
    ),
    meta: {
      headerProps: {
        className: 'text-right min-w-[320px]',
      },
    },
  },
]
