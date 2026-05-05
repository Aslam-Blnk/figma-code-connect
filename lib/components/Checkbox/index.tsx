import React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import { cn } from '../../utils'

export interface CheckboxProps extends React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn('peer', 'checkbox', className)}
    {...props}
  >
    <span className="checkbox-indicator">
      <CheckboxPrimitive.Indicator asChild>
        {props.checked !== 'indeterminate' ? (
          <span className="mui-icon material-symbols-rounded">check</span>
        ) : (
          <span className="mui-icon material-symbols-rounded">remove</span>
        )}
      </CheckboxPrimitive.Indicator>
    </span>
  </CheckboxPrimitive.Root>
))

Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
