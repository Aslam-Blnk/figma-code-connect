import React from 'react'

import { Button } from '@/components/Button'
import { Command } from '@/components/Command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover'

import { ActionList } from '../../components/ActionList/ActionListCombobox'

export function PopoverActionList({
  disabled = false,
  withActions = true,
}: {
  disabled?: boolean
  withActions?: boolean
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={disabled}>
        <Button
          variant="neutral"
          role="combobox"
          aria-expanded={open}
          className="w-64 justify-between"
        >
          Charger Actions
          <span className="mui-icon material-symbols-rounded">
            keyboard_arrow_down
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <Command>{ActionList({ withActions: withActions })}</Command>
      </PopoverContent>
    </Popover>
  )
}
