import { ColumnDef } from '@tanstack/react-table'

import { Badge, BadgeDot, BadgeProps } from '@/components/Badge'
import { Button } from '@/components/Button'
import { Checkbox } from '@/components/Checkbox'

import { LoadManagementStatus, Site } from './data'

const siteNameColumn = (site: Site) => {
  return (
    <div className="flex items-center gap-2">
      <div className="text-icon-subtle [&_span]:text-xl">
        <span className="mui-icon material-symbols-rounded">domain</span>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-nowrap text-subtle text-content">{site.name}</p>
        <p className="text-subtler text-content">{site.address}</p>
      </div>
    </div>
  )
}

type LoadManagementStatusEntry = {
  name: string
  badgeColor: BadgeProps['badgeColor']
}

const loadManagementStatusMapping: Record<
  LoadManagementStatus,
  LoadManagementStatusEntry
> = {
  NOT_CONFIGURED: {
    name: 'Not Configured',
    badgeColor: 'neutral',
  },
  ACTIVE: {
    name: 'Active',
    badgeColor: 'positive',
  },
  INACTIVE: {
    name: 'Inactive',
    badgeColor: 'notice',
  },
  FAULTED: {
    name: 'Faulted',
    badgeColor: 'negative',
  },
}

const loadManagementStatusBadge = (status: LoadManagementStatus) => {
  const { name, badgeColor } = loadManagementStatusMapping[status]
  return (
    <div className="flex">
      <Badge variant="flat" badgeColor={badgeColor}>
        <BadgeDot />
        {name}
      </Badge>
    </div>
  )
}

export const siteColumns: ColumnDef<Site>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    header: 'Site',
    cell: ({ row }) => {
      const site = row.original
      return siteNameColumn(site)
    },
    meta: {
      headerProps: {
        className: 'text-left',
      },
    },
  },
  {
    header: 'Load Management Status',
    cell: ({ row }) => {
      const site = row.original
      return loadManagementStatusBadge(site.loadManagementStatus)
    },
    meta: {
      headerProps: {
        className: 'text-left',
      },
    },
  },
  {
    id: 'actions',
    header: '',
    cell: ({ row }) => {
      const site = row.original
      return (
        <Button
          onClick={() => window.alert(`Site id: ${site.id}`)}
          variant="ghost"
          iconOnly
        >
          <span className="mui-icon material-symbols-rounded">
            keyboard_arrow_right
          </span>
        </Button>
      )
    },
  },
]
