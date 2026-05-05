import React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '../../utils'

const progressVariants = cva('progress-bar-root', {
  variants: {
    variant: {
      neutral: 'progress-neutral',
      highlight: 'progress-highlight',
      temperature: 'progress-temperature',
    },
  },
  defaultVariants: {
    variant: 'neutral',
  },
})

export interface ProgressProps
  extends
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {
  value?: number
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value = 0, variant = 'neutral', ...props }, ref) => {
  const progressValue = Math.min(100, Math.max(0, value))

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(progressVariants({ variant }), className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="progress-bar-indicator"
        style={{ transform: `translateX(${progressValue}%)` }}
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
