import { useCallback, useState } from 'react'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { debounce } from 'lodash'

import { Button } from '@/components/Button'
import { InputSearch } from '@/components/Input'
import { ResourceIcon } from '@/components/ResourceIcon'
import { Skeleton } from '@/components/Skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableProps,
  TableRow,
} from '@/components/Table'

import { emptyState } from '../../../components/EmptyState/EmptyState'
import { fetchData, UserEntry } from './data'

export interface DataTableProps {
  columns: ColumnDef<UserEntry>[]
  tableProps?: TableProps
}

function TableLoadingState({ columnSize }: { columnSize: number }) {
  return Array.from({ length: 10 }, (_, i) => (
    <TableRow key={i}>
      {Array.from({ length: columnSize }, (_, j) => (
        <TableCell key={j}>
          <Skeleton className="h-5 w-20" />
        </TableCell>
      ))}
    </TableRow>
  ))
}

export function UserDataTable({ columns, tableProps }: DataTableProps) {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })

  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounced = useCallback(
    debounce((text: string) => setDebouncedSearch(text), 300),
    []
  )

  const { data, isLoading, isFetching, isError, isPending } = useQuery({
    queryKey: ['users', pagination, debouncedSearch],
    queryFn: () => fetchData({ ...pagination, search: debouncedSearch }),
    staleTime: 0,
    refetchOnWindowFocus: true,
    placeholderData: keepPreviousData,
  })

  const table = useReactTable({
    data: data?.users ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    manualFiltering: true,
    onPaginationChange: setPagination,
  })

  return (
    <div className="flex h-full w-full flex-1 flex-col items-start bg-default">
      <div className="flex w-full flex-wrap items-center justify-between gap-4 rounded-t-2xl border-b border-default bg-default px-4 py-5 md:flex-nowrap lg:px-6">
        <div className="flex items-center gap-3">
          <ResourceIcon size="large" resourceIconColor="teal">
            <span className="mui-icon material-symbols-rounded">person_2</span>
          </ResourceIcon>
          <h1 className="text-default">Users</h1>
        </div>
        <div className="flex flex-row items-center gap-3">
          <InputSearch
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              debounced(e.target.value)
            }}
            isLoading={isLoading || isFetching}
          />
        </div>
      </div>
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
          {isLoading || isFetching ? (
            <TableLoadingState columnSize={columns.length} />
          ) : (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      {data?.total === 0 &&
        !isLoading &&
        !isFetching &&
        !isPending &&
        debouncedSearch.length === 0 &&
        emptyState({
          imageSrc: '/empty-state-no-items.svg',
          content: 'This list is empty',
          description:
            'There are currently no items to display in this section.',
        })}

      {data?.total === 0 &&
        !isLoading &&
        !isFetching &&
        !isPending &&
        debouncedSearch.length > 0 &&
        emptyState({
          imageSrc: '/empty-state-no-search-result.svg',
          content: 'No items match your search',
          description:
            "We couldn't find any matches for your search. Try different keywords.",
        })}

      {data?.total === 0 &&
        isError &&
        emptyState({
          imageSrc: '/empty-state-error.svg',
          content: 'Error loading content',
          description:
            'There was an issue loading the data. Please reload or try again later.',
        })}

      <div className="mt-auto flex w-full flex-col items-center justify-between gap-4 border-t border-default p-4 sm:flex-row sm:gap-0 sm:px-5">
        {isLoading || isFetching ? (
          <Skeleton className="h-5 w-16" />
        ) : data?.total === 0 ? (
          <p className="w-full text-nowrap text-subtler text-content-light">
            No records to show
          </p>
        ) : (
          <p className="w-full text-nowrap text-subtler text-content-light">
            Showing{' '}
            <span className="text-number-sm">
              {Math.min(
                pagination.pageIndex * pagination.pageSize + 1,
                data?.total ?? 0
              )}
            </span>{' '}
            -{' '}
            <span className="text-number-sm">
              {Math.min(
                (pagination.pageIndex + 1) * pagination.pageSize,
                data?.total ?? 0
              )}
            </span>{' '}
            of <span className="text-subtle text-number-sm">{data?.total}</span>{' '}
            records
          </p>
        )}
        <div className="flex w-full items-center justify-between sm:w-auto sm:justify-end sm:gap-2">
          <Button
            variant="neutral"
            iconOnly
            onClick={() => table.previousPage()}
            disabled={data?.canFetchLess !== true}
          >
            <span className="mui-icon material-symbols-rounded">
              keyboard_arrow_left
            </span>
          </Button>
          <p className="text-nowrap text-subtle text-content">
            {pagination.pageIndex + 1} / {data?.totalPage}
          </p>
          <Button
            variant="neutral"
            iconOnly
            disabled={data?.canFetchMore !== true}
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
