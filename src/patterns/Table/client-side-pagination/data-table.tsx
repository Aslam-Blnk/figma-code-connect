import { useState } from 'react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  RowData,
  useReactTable,
} from '@tanstack/react-table'

import { Button } from '@/components/Button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableProps,
  TableRow,
} from '@/components/Table'

import { Site } from './data'

declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    headerProps?: React.HTMLAttributes<HTMLTableCellElement>
  }
}

export interface DataTableProps {
  columns: ColumnDef<Site>[]
  data: Site[]
  tableProps?: TableProps
}

export function SiteDataTable({ columns, data, tableProps }: DataTableProps) {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })

  const [rowSelection, setRowSelection] = useState({})

  /* eslint-disable react-hooks/incompatible-library */
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    state: {
      pagination,
      rowSelection,
    },
  })
  /* eslint-enable react-hooks/incompatible-library */

  return (
    <div className="flex h-full w-full flex-1 flex-col">
      <Table {...tableProps} className="[&_tbody_td]:h-[4.25rem]">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    {...header.column.columnDef.meta?.headerProps}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && 'selected'}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-auto flex w-full flex-col items-center justify-between gap-4 border-t border-default p-4 sm:flex-row sm:gap-0 sm:px-5">
        <p className="w-full text-nowrap text-subtler text-content-light">
          <span className="text-subtle text-number-sm">
            {table.getFilteredSelectedRowModel().rows.length}
          </span>{' '}
          of{' '}
          <span className="text-subtle text-number-sm">
            {table.getPaginationRowModel().rows.length}
          </span>{' '}
          row(s) selected.
        </p>
        <div className="flex w-full items-center justify-between sm:w-auto sm:justify-end sm:gap-2">
          <Button
            variant="neutral"
            iconOnly
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="mui-icon material-symbols-rounded">
              keyboard_arrow_left
            </span>
          </Button>
          <p className="text-subtle text-content">
            {pagination.pageIndex + 1} / {table.getPageCount()}
          </p>
          <Button
            variant="neutral"
            iconOnly
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            <span className="mui-icon material-symbols-rounded">
              chevron_right
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}
