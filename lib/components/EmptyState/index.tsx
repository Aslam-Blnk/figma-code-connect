import React from 'react'

import { cn } from '../../utils'

const EmptyStateRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div className={cn('empty-state-root', className)} ref={ref} {...props} />
  )
})
EmptyStateRoot.displayName = 'EmptyStateRoot'

const EmptyStateContentContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn('empty-state-content-container', className)}
      ref={ref}
      {...props}
    />
  )
})
EmptyStateContentContainer.displayName = 'EmptyStateContentContainer'

const EmptyStateImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement> & {
    className?: string
  }
>(({ className, ...props }, ref) => {
  return (
    <img className={cn('empty-state-image', className)} ref={ref} {...props} />
  )
})
EmptyStateImage.displayName = 'EmptyStateImage'

const EmptyStateContent = React.forwardRef<
  HTMLDivElement,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {
    content: string
    description?: string
  }
>(({ className, content, description, ...props }, ref) => {
  return (
    <div className={cn('empty-state-content', className)} ref={ref} {...props}>
      <p>{content}</p>
      {description && <p>{description}</p>}
    </div>
  )
})
EmptyStateContent.displayName = 'EmptyStateContent'

const EmptyStateActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn('empty-state-actions', className)}
      ref={ref}
      {...props}
    />
  )
})
EmptyStateActions.displayName = 'EmptyStateActions'

export {
  EmptyStateRoot,
  EmptyStateContentContainer,
  EmptyStateImage,
  EmptyStateContent,
  EmptyStateActions,
}
