import React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../utils'

export type ConditionalProps<T extends boolean> = (T extends true
  ? React.AnchorHTMLAttributes<HTMLAnchorElement>
  : React.HTMLAttributes<HTMLDivElement>) & {
  isInteractive?: boolean
  isLink?: T
  asChild?: boolean
}

const ResourceTag = React.forwardRef(
  <T extends boolean>(
    {
      className,
      isLink = false as T,
      asChild = false,
      isInteractive = false,
      ...props
    }: ConditionalProps<T>,
    ref: React.Ref<HTMLAnchorElement | HTMLDivElement>
  ) => {
    if (isLink) {
      const Comp = asChild ? Slot : 'a'
      return (
        <Comp
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={cn(
            'resource-tag',
            className,
            isLink ? 'resource-tag-link' : '',
            isInteractive ? 'resource-tag-interactive' : ''
          )}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      )
    }
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        ref={ref as React.Ref<HTMLDivElement>}
        className={cn(
          'resource-tag',
          className,
          isLink ? 'resource-tag-link' : '',
          isInteractive ? 'resource-tag-interactive' : ''
        )}
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
      />
    )
  }
)

ResourceTag.displayName = 'ResourceTag'

export { ResourceTag }
