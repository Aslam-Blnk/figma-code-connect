import * as React from 'react'
import { Command as CommandPrimitive } from 'cmdk'

import { cn } from '../../utils'
import { InputSearch } from '../Input'

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive> & {
    className?: string
  }
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn('cmdk-root', className)}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> & {
    className?: string
  }
>(({ className, ...props }, ref) => (
  <div cmdk-input-wrapper="">
    <CommandPrimitive.Input
      ref={ref}
      className={cn(className)}
      {...props}
      asChild
    >
      <InputSearch type="search" />
    </CommandPrimitive.Input>
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List> & {
    className?: string
  }
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List ref={ref} className={cn(className)} {...props} />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> & {
    className?: string
  }
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Empty className={cn(className)} ref={ref} {...props} />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> & {
    className?: string
  }
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group ref={ref} className={cn(className)} {...props} />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator> & {
    className?: string
  }
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={cn(className)} {...props} />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> & {
    className?: string
  }
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item ref={ref} className={cn(className)} {...props} />
))
CommandItem.displayName = CommandPrimitive.Item.displayName

const ActionListItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> & {
    className?: string
  }
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    cmdk-action-list-item=""
    ref={ref}
    className={cn(className)}
    {...props}
  />
))
ActionListItem.displayName = 'ActionListItem'

const ActionListItemContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      cmdk-action-list-item-content=""
      ref={ref}
      className={cn(className)}
      {...props}
    />
  )
})
ActionListItemContent.displayName = 'ActionListItemContent'

const OptionListItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> & {
    className?: string
  }
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    cmdk-option-list-item=""
    ref={ref}
    className={cn(className)}
    {...props}
  />
))
OptionListItem.displayName = 'OptionListItem'

const OptionListItemContentContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    checked?: boolean
  }
>(({ className, checked = false, ...props }, ref) => {
  return (
    <div
      cmdk-option-list-item-content-container=""
      data-checked={checked}
      ref={ref}
      className={cn('group', className)}
      {...props}
    />
  )
})
OptionListItemContentContainer.displayName = 'OptionListItemRow'

const OptionListItemCheckMark = () => {
  return (
    <span
      cmdk-option-check=""
      className="mui-icon material-symbols-rounded group-data-[checked='true']:block"
    >
      check
    </span>
  )
}

const MultiOptionListItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> & {
    className?: string
  }
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    cmdk-multi-option-list-item=""
    ref={ref}
    className={cn(className)}
    {...props}
  />
))
MultiOptionListItem.displayName = 'MultiOptionListItem'

const MultiOptionListHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      cmdk-multi-option-list-header=""
      ref={ref}
      className={cn(className)}
      {...props}
    />
  )
})
MultiOptionListHeader.displayName = 'MultiOptionListHeader'

const MultiOptionListHeading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h4
      cmdk-multi-option-list-heading=""
      ref={ref}
      className={cn(className)}
      {...props}
    />
  )
})
MultiOptionListHeading.displayName = 'MultiOptionListHeading'

const MultiOptionListContentContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    checked?: boolean
  }
>(({ className, checked = false, ...props }, ref) => {
  return (
    <div
      cmdk-multi-option-list-item-content-container=""
      data-checked={checked}
      ref={ref}
      className={cn('group', className)}
      {...props}
    />
  )
})
MultiOptionListContentContainer.displayName = 'MultiOptionListItemRow'

const MultiOptionListFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      cmdk-multi-option-list-footer=""
      ref={ref}
      className={cn(className)}
      {...props}
    />
  )
})
MultiOptionListFooter.displayName = 'MultiOptionListFooter'

const MultiOptionListFooterText = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      cmdk-multi-option-list-footer-text=""
      ref={ref}
      className={cn(className)}
      {...props}
    />
  )
})
MultiOptionListFooterText.displayName = 'MultiOptionListFooterText'

const MultiOptionListFooterActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      cmdk-multi-option-list-footer-actions=""
      ref={ref}
      className={cn(className)}
      {...props}
    />
  )
})
MultiOptionListFooterActions.displayName = 'MultiOptionListFooterActions'

export {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  ActionListItem,
  ActionListItemContent,
  OptionListItem,
  OptionListItemContentContainer,
  OptionListItemCheckMark,
  MultiOptionListItem,
  MultiOptionListHeader,
  MultiOptionListHeading,
  MultiOptionListContentContainer,
  MultiOptionListFooter,
  MultiOptionListFooterText,
  MultiOptionListFooterActions,
  CommandSeparator,
}
