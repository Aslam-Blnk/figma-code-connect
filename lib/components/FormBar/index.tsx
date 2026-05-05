import React from 'react'

import { cn } from '../../utils'

const FormBarRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn('form-bar-root', className)} {...props} />
})
FormBarRoot.displayName = 'FormBarRoot'

const FormBarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('form-bar-content', className)} {...props} />
  )
})
FormBarContent.displayName = 'FormBarContent'

export { FormBarRoot, FormBarContent }
