import { useState } from 'react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  RowData,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'

import { Badge } from '@/components/Badge'
import { Button } from '@/components/Button'
import { FilterRoot } from '@/components/Filter'
import { InputSearch } from '@/components/Input'
import { LinkButton } from '@/components/LinkButton'
import { ResourceIcon } from '@/components/ResourceIcon'
import { ResourceTag } from '@/components/ResourceTag'
import { Separator } from '@/components/Separator'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  useSidebar,
} from '@/components/Sidebar'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/Table'
import { ToggleFilter } from '@/components/ToggleFilter'

declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    headerProps?: React.HTMLAttributes<HTMLTableCellElement>
  }
}

// --- Types ---

type TerminalStatus = 'operative' | 'disconnected' | 'inoperative' | 'faulted'

type PaymentTerminal = {
  id: string
  serialNumber: string
  networkBoundary: string
  site: string
  status: TerminalStatus
}

// --- Sample data ---

const NETWORK_BOUNDARIES = ['Payter', 'Nayax', '24 Delaware', 'AeroCharge']
const SITES = [
  'Downtown Hub',
  'Airport Terminal',
  'Westside Mall',
  'Harbor District',
  'City Center',
  'East Side Depot',
  'North Gateway',
  'South Station',
  'Zemetric Shasta 80',
  'Central Plaza',
  'Tech Park',
  'Riverside Station',
]
const STATUSES: TerminalStatus[] = [
  'operative',
  'operative',
  'disconnected',
  'operative',
  'operative',
  'disconnected',
  'faulted',
  'operative',
  'operative',
  'inoperative',
]

const terminals: PaymentTerminal[] = Array.from({ length: 60 }, (_, i) => ({
  id: `PT-${String(i + 1).padStart(4, '0')}`,
  serialNumber: `SN-${String(i + 1).padStart(6, '0')}`,
  networkBoundary: NETWORK_BOUNDARIES[i % NETWORK_BOUNDARIES.length],
  site: SITES[i % SITES.length],
  status: STATUSES[i % STATUSES.length],
}))

// --- Status config ---

const statusConfig: Record<
  TerminalStatus,
  {
    label: string
    badgeColor: 'positive' | 'neutral' | 'notice' | 'negative'
    icon: string
  }
> = {
  operative: { label: 'Operative', badgeColor: 'positive', icon: 'check_circle' },
  disconnected: { label: 'Offline', badgeColor: 'neutral', icon: 'circle' },
  inoperative: { label: 'Inoperative', badgeColor: 'notice', icon: 'cancel' },
  faulted: { label: 'Operative', badgeColor: 'negative', icon: 'error' },
}

// --- Column definitions ---

const columns: ColumnDef<PaymentTerminal>[] = [
  {
    accessorKey: 'id',
    enableSorting: true,
    header: ({ column }) => (
      <button
        className="flex items-center gap-1"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Terminal ID
        <span className="mui-icon material-symbols-rounded !size-4 !text-base text-icon-subtler">
          {column.getIsSorted() === 'desc' ? 'arrow_downward' : 'arrow_upward'}
        </span>
      </button>
    ),
    cell: ({ row }) => (
      <div className="flex flex-col gap-1">
        <p className="text-subtle text-content">{row.original.id}</p>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center justify-center rounded bg-brand-muted p-0.5">
            <span className="mui-icon material-symbols-rounded !size-3.5 !text-sm text-icon-brand">
              receipt_long
            </span>
          </div>
          <LinkButton variant="brand">
            {row.original.serialNumber}
          </LinkButton>
        </div>
      </div>
    ),
    meta: { headerProps: { className: 'text-left' } },
  },
  {
    accessorKey: 'networkBoundary',
    header: () => (
      <div className="flex items-center gap-1.5">
        Network Boundary
        <span className="mui-icon material-symbols-rounded !size-4 !text-base text-icon-subtler">
          filter_list
        </span>
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center rounded bg-brand-muted p-0.5">
          <span className="mui-icon material-symbols-rounded filled !size-4 !text-base text-icon-brand">
            point_of_sale
          </span>
        </div>
        <p className="text-subtle text-content">{row.original.networkBoundary}</p>
      </div>
    ),
    meta: { headerProps: { className: 'text-left' } },
  },
  {
    accessorKey: 'site',
    header: () => (
      <div className="flex items-center gap-1.5">
        <span className="mui-icon material-symbols-rounded !size-4 !text-base text-icon-subtle">
          language
        </span>
        Site
        <span className="mui-icon material-symbols-rounded !size-4 !text-base text-icon-subtler">
          filter_list
        </span>
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex">
        <ResourceTag>{row.original.site}</ResourceTag>
      </div>
    ),
    meta: { headerProps: { className: 'text-left' } },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const { label, badgeColor, icon } = statusConfig[row.original.status]
      return (
        <div className="flex">
          <Badge variant="flat" badgeColor={badgeColor}>
            <span className="mui-icon material-symbols-rounded">{icon}</span>
            {label}
          </Badge>
        </div>
      )
    },
    meta: { headerProps: { className: 'text-left' } },
  },
]

// --- Sidebar components ---

function SidebarTrigger() {
  const { toggleSidebar } = useSidebar()
  return (
    <Button variant="ghost" onClick={() => toggleSidebar()} iconOnly>
      <span className="mui-icon material-symbols-rounded">menu_open</span>
    </Button>
  )
}

function SidebarOutsideTrigger() {
  const { toggleSidebar, state, isMobile } = useSidebar()
  if (state === 'expanded' && !isMobile) return undefined
  return (
    <Button variant="ghost" onClick={() => toggleSidebar()} iconOnly>
      <span className="mui-icon material-symbols-rounded">menu</span>
    </Button>
  )
}

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenuButton isAvatar>
          <div className="flex min-w-0 flex-1 items-center gap-2">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-red-100">
              <span className="mui-icon material-symbols-rounded filled !size-5 !text-xl text-red-500">
                domain
              </span>
            </div>
            <span className="min-w-0 flex-1 truncate text-subtle text-content">
              Acme Corporation Ltd
            </span>
            <span className="mui-icon material-symbols-rounded shrink-0 !size-5 !text-xl text-icon-subtle">
              keyboard_arrow_down
            </span>
          </div>
        </SidebarMenuButton>
        <SidebarTrigger />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <div className="flex w-full items-center gap-2">
                  <span className="mui-icon material-symbols-rounded !size-4 !text-base text-icon-subtle">
                    home
                  </span>
                  <span className="text-subtle text-content">Home</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <div className="flex w-full items-center gap-2">
                  <span className="mui-icon material-symbols-rounded !size-4 !text-base text-icon-subtle">
                    nearby_error
                  </span>
                  <span className="text-subtle text-content">Charger faults</span>
                </div>
                <Badge variant="flat" badgeColor="neutral" isCount>
                  99+
                </Badge>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <div className="flex w-full items-center gap-2">
                  <span className="mui-icon material-symbols-rounded !size-4 !text-base text-icon-subtle">
                    receipt_long
                  </span>
                  <span className="text-subtle text-content">Sessions</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <div className="flex w-full items-center gap-2">
                  <span className="mui-icon material-symbols-rounded !size-4 !text-base text-icon-subtle">
                    trending_up
                  </span>
                  <span className="text-subtle text-content">Analytics</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <div className="flex w-full items-center gap-2">
                  <span className="mui-icon material-symbols-rounded !size-4 !text-base text-icon-subtle">
                    search
                  </span>
                  <span className="text-subtle text-content">Search</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>MANAGE ASSETS</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <div className="flex w-full items-center gap-2">
                  <div className="flex items-center justify-center rounded-md bg-violet-500 p-0.5">
                    <span className="mui-icon material-symbols-rounded !size-3.5 !text-sm text-icon-onIntense">
                      domain
                    </span>
                  </div>
                  <span className="text-subtle text-content">Sites</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton isActive>
                <div className="flex w-full items-center gap-2">
                  <div className="flex items-center justify-center rounded-md bg-brand-intense p-0.5">
                    <span className="mui-icon material-symbols-rounded filled !size-3.5 !text-sm text-icon-onIntense">
                      ev_station
                    </span>
                  </div>
                  <span className="text-subtle text-content">Chargers</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <div className="flex w-full items-center gap-2">
                  <div className="flex items-center justify-center rounded-md bg-amber-500 p-0.5">
                    <span className="mui-icon material-symbols-rounded !size-3.5 !text-sm text-icon-onIntense">
                      request_quote
                    </span>
                  </div>
                  <span className="text-subtle text-content">Pricing models</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <div className="flex w-full items-center gap-2">
                  <span className="mui-icon material-symbols-rounded !size-4 !text-base text-icon-subtle">
                    terminal
                  </span>
                  <span className="text-subtle text-content">Command queue</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>MANAGE USERS</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <div className="flex w-full items-center gap-2">
                  <span className="mui-icon material-symbols-rounded !size-4 !text-base text-icon-subtle">
                    badge
                  </span>
                  <span className="text-subtle text-content">Drivers</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <div className="flex w-full items-center gap-2">
                  <span className="mui-icon material-symbols-rounded !size-4 !text-base text-icon-subtle">
                    groups
                  </span>
                  <span className="text-subtle text-content">Driver groups</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <div className="flex w-full items-center gap-2">
                  <span className="mui-icon material-symbols-rounded !size-4 !text-base text-icon-subtle">
                    commute
                  </span>
                  <span className="text-subtle text-content">Fleets</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <div className="flex w-full items-center gap-2">
                  <span className="mui-icon material-symbols-rounded !size-4 !text-base text-icon-subtle">
                    contactless
                  </span>
                  <span className="text-subtle text-content">RFID keys</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <div className="flex w-full items-center gap-2">
                  <span className="mui-icon material-symbols-rounded !size-4 !text-base text-icon-subtle">
                    help_outline
                  </span>
                  <span className="text-subtle text-content">Support</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <Separator orientation="horizontal" className="w-full" />
        <div className="flex w-full items-center justify-between p-4">
          <p className="text-subtler text-content-caption-strong">Chargeconnect</p>
          <p className="text-subtler text-content-caption-strong">v3.0</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

// --- Table component ---

function PaymentTerminalsTable() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 })

  const table = useReactTable({
    data: terminals,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    state: { sorting, pagination },
  })

  const { pageIndex, pageSize } = pagination
  const totalRows = terminals.length
  const start = pageIndex * pageSize + 1
  const end = Math.min((pageIndex + 1) * pageSize, totalRows)

  return (
    <div className="flex h-full w-full flex-1 flex-col">
      <Table variant="default" className="[&_tbody_td]:h-[4.25rem]">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  {...header.column.columnDef.meta?.headerProps}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
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
        <p className="text-nowrap text-subtler text-content-light">
          {start}–{end} of{' '}
          <span className="text-subtle text-number-sm">{totalRows}</span> records
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant="neutral"
            iconOnly
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="mui-icon material-symbols-rounded">keyboard_arrow_left</span>
          </Button>
          <p className="text-subtle text-content">
            {pageIndex + 1} / {table.getPageCount()}
          </p>
          <Button
            variant="neutral"
            iconOnly
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            <span className="mui-icon material-symbols-rounded">chevron_right</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

// --- Sidebar separator ---

function SidebarSeparator() {
  const { state } = useSidebar()
  return (
    <Separator
      orientation="vertical"
      className={state === 'expanded' ? 'block' : 'hidden'}
    />
  )
}

// --- Page ---

export default function PaymentTerminals() {
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set())

  function toggleFilter(filter: string) {
    setActiveFilters((prev) => {
      const next = new Set(prev)
      next.has(filter) ? next.delete(filter) : next.add(filter)
      return next
    })
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarSeparator />
      <main className="flex min-h-svh w-full flex-col">
        {/* Header */}
        <div className="flex w-full flex-col items-start gap-3 border-b border-default bg-default px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <SidebarOutsideTrigger />
            <ResourceIcon size="large" resourceIconColor="brand">
              <span className="mui-icon material-symbols-rounded filled">
                ev_station
              </span>
            </ResourceIcon>
            <div className="flex items-center gap-3">
              <h1>Payment Terminals</h1>
              <Separator orientation="vertical" className="h-5" />
              <div className="flex items-center gap-1.5">
                <Button variant="ghost" iconOnly>
                  <span className="mui-icon material-symbols-rounded">refresh</span>
                </Button>
                <p className="w-20 text-subtler text-content-caption-strong">
                  14 mins ago
                </p>
                <Button variant="ghost" iconOnly>
                  <span className="mui-icon material-symbols-rounded">
                    keyboard_arrow_down
                  </span>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="brand">
              <span className="mui-icon material-symbols-rounded">add</span>
              Add Terminal
            </Button>
            <Button variant="neutral">
              <span className="mui-icon material-symbols-rounded">text_snippet</span>
              Export
            </Button>
          </div>
        </div>

        {/* Filter bar */}
        <div className="flex w-full flex-wrap items-center justify-between gap-3 border-b border-default bg-default px-5 py-3">
          <div className="flex flex-wrap items-center gap-3">
            <ToggleFilter
              isFilled={activeFilters.has('operative')}
              onClick={() => toggleFilter('operative')}
            >
              Operative
            </ToggleFilter>
            <ToggleFilter
              isFilled={activeFilters.has('inoperative')}
              onClick={() => toggleFilter('inoperative')}
            >
              Inoperative
            </ToggleFilter>
            <ToggleFilter
              isFilled={activeFilters.has('disconnected')}
              onClick={() => toggleFilter('disconnected')}
            >
              Disconnected
            </ToggleFilter>
            <Separator orientation="vertical" className="h-4" />
            <FilterRoot>
              <span className="mui-icon material-symbols-rounded">tune</span>
              All filters
            </FilterRoot>
          </div>
          <InputSearch
            placeholder="Search by charger name"
            className="w-80"
          />
        </div>

        {/* Table */}
        <PaymentTerminalsTable />
      </main>
    </SidebarProvider>
  )
}
