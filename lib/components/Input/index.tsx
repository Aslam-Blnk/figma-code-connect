import React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../utils'
import { LinkButton } from '../LinkButton'
import { Separator } from '../Separator'

const InputRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean
    disabled?: boolean
    isValid?: boolean
    'aria-invalid'?: React.InputHTMLAttributes<HTMLInputElement>['aria-invalid']
  }
>(
  (
    {
      className,
      asChild = false,
      disabled = false,
      isValid = undefined,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        ref={ref}
        className={cn(
          'input-container-wrapper',
          disabled ? 'disabled' : '',
          className
        )}
        {...props}
        data-valid={isValid}
        aria-invalid={props['aria-invalid']}
      />
    )
  }
)
InputRoot.displayName = 'InputContainerWrapper'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leadingIcon?: React.ReactNode
  leading?: string
  leadingTab?: React.ReactNode
  trailingTab?: React.ReactNode
  trailing?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      leadingIcon,
      leading,
      leadingTab,
      trailing,
      trailingTab,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          'input-container',
          props.disabled ? 'disabled' : '',
          className
        )}
      >
        {leadingTab}
        {leadingTab && <Separator orientation="vertical" />}
        <div className="input-wrapper">
          {leadingIcon && (
            <div className="input-leading-icon">{leadingIcon}</div>
          )}
          {leading && <span className="input-leading">{leading}</span>}
          <input className={cn('input')} ref={ref} {...props} />
          {trailing && <span className="input-trailing">{trailing}</span>}
        </div>
        {trailingTab && <Separator orientation="vertical" />}
        {trailingTab}
      </div>
    )
  }
)
Input.displayName = 'Input'

export interface InputSearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean
}

const InputSearch = React.forwardRef<HTMLInputElement, InputSearchProps>(
  ({ className, isLoading = false, ...props }, ref) => {
    return (
      <div
        className={cn(
          'input-container-wrapper',
          props.disabled ? 'disabled' : '',
          className
        )}
        aria-invalid={props['aria-invalid']}
      >
        <div
          className={cn('input-container', props.disabled ? 'disabled' : '')}
        >
          <div className="input-wrapper">
            <div className="input-leading-icon">
              <span className="mui-icon material-symbols-rounded">search</span>
            </div>
            <input type="search" className={cn('input')} ref={ref} {...props} />
            <LinkButton
              variant="brand"
              isLoading={isLoading}
              isDisabled={props.disabled}
            >
              <span className="mui-icon material-symbols-rounded">search</span>
            </LinkButton>
          </div>
        </div>
      </div>
    )
  }
)
InputSearch.displayName = 'InputSearch'

export { Input, InputRoot, InputSearch }
