import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../utils'
import { LinkButton } from '../LinkButton'

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay> & {
    className?: string
  }
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn('sheet-overlay', className)}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva('sheet-content', {
  variants: {
    side: {
      top: 'sheet-top',
      bottom: 'sheet-bottom',
      left: 'sheet-left',
      right: 'sheet-right',
    },
    size: {
      small: 'sheet-small',
      medium: 'sheet-medium',
      large: 'sheet-large',
    },
  },
  defaultVariants: {
    side: 'right',
    size: 'small',
  },
})

interface SheetContentProps
  extends
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = 'right', className, size = 'small', children, ...props }, ref) => (
  <SheetPortal forceMount={props.forceMount}>
    <SheetOverlay data-force-mount={props.forceMount ? 'true' : 'false'} />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), `sheet-${size}`, className)}
      data-force-mount={props.forceMount ? 'true' : 'false'}
      {...props}
    >
      {children}
      <div className="sheet-close">
        <SheetPrimitive.Close asChild>
          <LinkButton variant="neutral">
            <span className="mui-icon material-symbols-rounded">close</span>
            <span className="sr-only">Close</span>
          </LinkButton>
        </SheetPrimitive.Close>
      </div>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('sheet-header', className)} {...props} />
)
SheetHeader.displayName = 'SheetHeader'

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('sheet-footer', className)} {...props} />
)
SheetFooter.displayName = 'SheetFooter'

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title> & {
    className?: string
  }
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn('sheet-title', className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description> & {
    className?: string
  }
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn('sheet-description', className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
