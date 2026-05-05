import React from 'react'

import {
  ActionListItem,
  ActionListItemContent,
  CommandGroup,
  CommandList,
} from '@/components/Command'

type ActionItemProps = Pick<
  React.ComponentProps<typeof ActionListItem>,
  'onSelect' | 'key' | 'value'
> & {
  itemLabel: string
  itemDescription?: string
  icon?: React.ReactNode
}

const ActionItem = React.forwardRef<HTMLDivElement, ActionItemProps>(
  ({ itemLabel, itemDescription, icon, ...commandProps }, ref) => (
    <ActionListItem {...commandProps} ref={ref}>
      <ActionListItemContent className="flex items-start gap-2">
        {icon && (
          <div className="flex w-4 flex-col py-0.5 text-icon-subtle [&_span]:text-base">
            {icon}
          </div>
        )}
        <div className="flex flex-col items-start gap-1">
          <p className="text-subtle text-content">{itemLabel}</p>
          {itemDescription && (
            <p className="text-subtler text-content-light">{itemDescription}</p>
          )}
        </div>
      </ActionListItemContent>
    </ActionListItem>
  )
)
ActionItem.displayName = 'ActionItem'

// NOTE: We need the input element for autofocus to work in ActionList only.
// For the rest of the components, `CommandInput` will handle this functionality.
function ActionList(
  { withActions }: { withActions?: boolean } = { withActions: true }
) {
  return (
    <>
      <input className="h-0 w-0 opacity-0" maxLength={0} readOnly />
      <CommandList>
        {withActions ? (
          <CommandGroup heading="CHARGER ACTIONS" cmdk-action-list-group="">
            <ActionItem
              itemLabel="Activate Charger"
              icon={
                <span className="mui-icon material-symbols-rounded filled">
                  book
                </span>
              }
              onSelect={() => alert('Activate Charger')}
            />
            <ActionItem
              itemLabel="Pause charging"
              itemDescription="Temporarily halt the charging session"
              icon={
                <span className="mui-icon material-symbols-rounded filled">
                  pause
                </span>
              }
              onSelect={() => alert('Pause charging')}
            />
            <ActionItem
              itemLabel="Schedule maintenance"
              icon={
                <span className="mui-icon material-symbols-rounded">
                  schedule
                </span>
              }
              onSelect={() => alert('Schedule maintenance')}
            />
            <ActionItem
              itemLabel="View usage history"
              icon={
                <span className="mui-icon material-symbols-rounded">
                  data_usage
                </span>
              }
              onSelect={() => alert('View usage history')}
            />
            <ActionItem
              itemLabel="Delete charger"
              itemDescription="Permanently remove this charger from the network"
              icon={
                <span className="mui-icon material-symbols-rounded text-icon-negative">
                  delete
                </span>
              }
              onSelect={() => alert('Delete charger')}
            />
          </CommandGroup>
        ) : (
          <CommandGroup
            heading="NO ACTIONS"
            cmdk-action-list-group=""
          ></CommandGroup>
        )}
      </CommandList>
    </>
  )
}
export { ActionList }
