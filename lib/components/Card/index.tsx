import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '../../utils'

const cardVariants = cva('card-root', {
  variants: {
    variant: {
      default: 'card-default',
      decorative: 'card-decorative',
    },
    elevation: {
      flat: 'card-flat',
      raised: 'card-raised',
      floating: 'card-floating',
    },
  },
  defaultVariants: {
    variant: 'default',
    elevation: 'flat',
  },
})

export interface CardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', elevation = 'flat', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, elevation }), className)}
        {...props}
      />
    )
  }
)
Card.displayName = 'Card'

export { Card }
