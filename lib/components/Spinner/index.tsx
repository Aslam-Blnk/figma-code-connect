import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '../../utils'

const spinnerVariants = cva('spinner', {
  variants: {
    variant: {
      'on-intense': 'spinner-intense',
      'on-light': 'spinner-light',
    },
  },
  defaultVariants: {
    variant: 'on-intense',
  },
})

export interface SpinnerProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, variant = 'on-intense', ...props }, ref) => (
    <div
      ref={ref}
      className={cn(spinnerVariants({ variant }), className)}
      {...props}
    />
  )
)
Spinner.displayName = 'Spinner'

export { Spinner }
