import React from 'react'

import { cn } from '../../utils'

const FilterRoot = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & {
    isFilled?: boolean
  }
>(({ className, isFilled = false, ...props }, ref) => {
  return (
    <button
      type="button"
      ref={ref}
      className={cn('filter-root', className, isFilled ? 'is-filled' : '')}
      {...props}
    />
  )
})
FilterRoot.displayName = 'FilterRoot'

export { FilterRoot }
