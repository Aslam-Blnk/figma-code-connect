import React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { cn } from '../../utils'
import { Tooltip, TooltipTrigger } from '../Tooltip'

export type HoverResourceCardContext = {
  open: boolean
  setOpen: (open: boolean) => void
  contentRef: React.MutableRefObject<HTMLDivElement | null>
}

const HoverResourceCardContext = React.createContext<
  HoverResourceCardContext | undefined
>(undefined)

const useHoverResourceCard = () => {
  const context = React.useContext(HoverResourceCardContext)
  if (!context) {
    throw new Error(
      'useHoverResourceCard must be used within a HoverResourceCardProvider'
    )
  }
  return context
}

const HoverResourceCardProvider: React.FC<TooltipPrimitive.TooltipProps> = ({
  children,
  ...props
}) => {
  const [open, setOpen] = React.useState(false)
  const contentRef = React.useRef<HTMLDivElement | null>(null)

  return (
    <HoverResourceCardContext.Provider value={{ open, setOpen, contentRef }}>
      <Tooltip open={open} onOpenChange={setOpen} {...props}>
        {children}
      </Tooltip>
    </HoverResourceCardContext.Provider>
  )
}

const HoverResourceCardTrigger = React.forwardRef<
  React.ElementRef<typeof TooltipTrigger>,
  React.HTMLAttributes<HTMLButtonElement>
>(({ children, ...props }, ref) => {
  const { contentRef } = useHoverResourceCard()

  return (
    <TooltipTrigger
      ref={ref}
      asChild
      onBlur={(e) => {
        if (contentRef.current?.contains(e.relatedTarget)) {
          e.preventDefault()
          e.stopPropagation()
        }
      }}
      onClick={(e) => {
        const target = e.currentTarget
        if (target.getAttribute('data-state') === 'closed') {
          setTimeout(() => {
            target.blur()
            target.focus()
          })
        }
      }}
      {...props}
    >
      {children}
    </TooltipTrigger>
  )
})
HoverResourceCardTrigger.displayName = 'HoverResourceCardTrigger'

const HoverResourceCardContent: React.FC<
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
> = ({ className, ...props }) => {
  const { setOpen, contentRef } = useHoverResourceCard()

  return (
    <TooltipPrimitive.Content
      ref={contentRef}
      asChild
      sideOffset={12}
      className={cn('ds-tooltip', className)}
      onBlur={() => setOpen(false)}
      {...props}
    />
  )
}

export {
  // eslint-disable-next-line react-refresh/only-export-components
  useHoverResourceCard,
  HoverResourceCardProvider,
  HoverResourceCardTrigger,
  HoverResourceCardContent,
}
