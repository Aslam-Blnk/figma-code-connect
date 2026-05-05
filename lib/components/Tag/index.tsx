import React from 'react'

import { cn } from '../../utils'
import { linkButtonVariants } from '../LinkButton'

const Tag = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn('tag-root', className)} {...props} />
})
Tag.displayName = 'Tag'

export type TagOptionCancelProps = {
  className?: string
  onClick?: () => void
}

const TagOptionCancel = React.forwardRef<HTMLDivElement, TagOptionCancelProps>(
  ({ className, onClick }, ref) => {
    return (
      <div
        className={cn(linkButtonVariants({ variant: 'neutral' }), className)}
        tabIndex={0}
        ref={ref}
        onKeyDown={(event) => {
          if (onClick == undefined) {
            return
          }
          if (
            event.key == ' ' ||
            event.code == 'Space' ||
            event.key == 'Enter' ||
            event.code == 'Enter'
          ) {
            event.preventDefault()
            event.stopPropagation()
            onClick()
          }
        }}
        onKeyUp={(event) => {
          if (onClick == undefined) {
            return
          }
          if (
            event.key == ' ' ||
            event.code == 'Space' ||
            event.key == 'Enter' ||
            event.code == 'Enter'
          ) {
            event.preventDefault()
            event.stopPropagation()
            onClick()
          }
        }}
        onClick={(event) => {
          if (onClick == undefined) {
            return
          }
          event.preventDefault()
          event.stopPropagation()
          onClick()
        }}
      >
        <span className="mui-icon material-symbols-rounded">close</span>
      </div>
    )
  }
)
TagOptionCancel.displayName = 'TagOptionCancel'

export { Tag, TagOptionCancel }
