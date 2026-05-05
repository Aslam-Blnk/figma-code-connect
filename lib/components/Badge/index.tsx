import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../utils'

const badgeVariants = cva('badge-base', {
  variants: {
    variant: {
      outline: 'badge-outline',
      flat: 'badge-flat',
    },
    badgeColor: {
      neutral: 'badge-neutral',
      brand: 'badge-brand',
      positive: 'badge-positive',
      notice: 'badge-notice',
      negative: 'badge-negative',
    },
  },
  defaultVariants: {
    variant: 'outline',
    badgeColor: 'neutral',
  },
})

function BadgeDot() {
  return <div className="badge-dot" />
}

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  isCount?: boolean
}

function Badge({
  className,
  variant = 'outline',
  badgeColor = 'neutral',
  isCount = false,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({ variant, badgeColor }),
        isCount ? 'badge-count' : '',
        className
      )}
      {...props}
    />
  )
}

export { Badge, BadgeDot }
