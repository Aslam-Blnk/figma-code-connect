import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '../../utils'
import { Spinner, SpinnerProps } from '../Spinner'

const buttonVariants = cva('button-base', {
  variants: {
    variant: {
      brand: 'button-brand',
      neutral: 'button-neutral',
      ghost: 'button-ghost',
      destructive: 'button-destructive',
    },
  },
})

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  iconOnly?: boolean
  isLoading?: boolean
  variant: NonNullable<VariantProps<typeof buttonVariants>['variant']>
}

const buttonVariantToSpinnerMap: Record<
  NonNullable<ButtonProps['variant']>,
  NonNullable<SpinnerProps['variant']>
> = {
  brand: 'on-intense',
  neutral: 'on-light',
  ghost: 'on-light',
  destructive: 'on-intense',
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      iconOnly = false,
      isLoading = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, className }),
          iconOnly ? 'icon-only' : '',
          isLoading ? 'loading' : ''
        )}
        ref={ref}
        {...props}
      >
        <div className="spinner-container">
          <Spinner variant={buttonVariantToSpinnerMap[variant]} />
        </div>
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants }
