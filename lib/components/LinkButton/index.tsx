import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '../../utils'
import { Spinner } from '../Spinner'

const linkButtonVariants = cva('link-base', {
  variants: {
    variant: {
      neutral: 'link-neutral',
      brand: 'link-brand',
      destructive: 'link-destructive',
    },
  },
  defaultVariants: {
    variant: 'neutral',
  },
})

export interface LinkButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof linkButtonVariants> {
  isLoading?: boolean
  isDisabled?: boolean
}

const LinkButton = React.forwardRef<HTMLButtonElement, LinkButtonProps>(
  (
    {
      className,
      variant,
      isLoading = false,
      isDisabled = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          linkButtonVariants({ variant, className }),
          isLoading ? 'loading' : '',
          isDisabled ? 'disabled' : ''
        )}
        ref={ref}
        {...props}
        aria-disabled={isDisabled}
      >
        {isLoading && (
          <div className="spinner-container">
            <Spinner variant="on-light" />
          </div>
        )}
        {children}
      </button>
    )
  }
)
LinkButton.displayName = 'LinkButton'

export interface LinkAnchorButtonProps
  extends
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkButtonVariants> {
  isLoading?: boolean
  isDisabled?: boolean
}

const LinkAnchorButton = React.forwardRef<
  HTMLAnchorElement,
  LinkAnchorButtonProps
>(
  (
    {
      className,
      variant,
      isLoading = false,
      isDisabled = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <a
        className={cn(
          linkButtonVariants({ variant, className }),
          isLoading ? 'loading' : '',
          isDisabled ? 'disabled' : ''
        )}
        ref={ref}
        {...props}
        tabIndex={isDisabled ? -1 : (props.tabIndex ?? 0)}
        aria-disabled={isDisabled}
      >
        {isLoading && (
          <div className="spinner-container">
            <Spinner variant="on-light" />
          </div>
        )}
        {children}
      </a>
    )
  }
)
LinkAnchorButton.displayName = 'LinkAnchorButton'
// eslint-disable-next-line react-refresh/only-export-components
export { LinkAnchorButton, LinkButton, linkButtonVariants }
