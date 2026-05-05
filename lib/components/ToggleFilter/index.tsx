import React from 'react'

import { cn } from '../../utils'

const ToggleFilter = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & {
    isFilled?: boolean
  }
>(({ className, isFilled = false, ...props }, ref) => {
  return (
    <button
      type="button"
      ref={ref}
      className={cn(
        'toggle-filter-root',
        className,
        isFilled ? 'is-filled' : ''
      )}
      {...props}
    />
  )
})
ToggleFilter.displayName = 'ToggleFilter'

export { ToggleFilter }
