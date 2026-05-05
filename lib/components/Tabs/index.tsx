import React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '../../utils'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
    className?: string
    isBordered?: boolean
    isFullWidth?: boolean
    isFullyBorderless?: boolean
  }
>(
  (
    {
      className,
      isBordered = false,
      isFullWidth = false,
      isFullyBorderless = false,
      ...props
    },
    ref
  ) => (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        'tabs-list',
        !isFullyBorderless && isBordered ? 'tabs-list-bordered' : '',
        isFullWidth ? 'tabs-list-full-width' : '',
        isFullyBorderless ? 'tabs-list-fully-borderless' : '',
        className
      )}
      {...props}
    />
  )
)
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    className?: string
  }
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn('tabs-trigger', className)}
    {...props}
    asChild
  >
    <button>
      <span>{props.children}</span>
    </button>
  </TabsPrimitive.Trigger>
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & {
    className?: string
  }
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn('tabs-content', className)}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
