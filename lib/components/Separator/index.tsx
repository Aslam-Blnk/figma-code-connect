import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '../../utils'

const separatorVariants = cva('separator', {
  variants: {
    orientation: {
      vertical: 'separator-vertical',
      horizontal: 'separator-horizontal',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

export interface SeparatorProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof separatorVariants> {}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = 'horizontal', ...props }, ref) => {
    return (
      <div
        className={cn(separatorVariants({ orientation, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Separator.displayName = 'Separator'

export { Separator }
