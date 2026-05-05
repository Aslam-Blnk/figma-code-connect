import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '../../utils'

const resourceIconVariants = cva('resource-icon-container', {
  variants: {
    size: {
      default: 'resource-icon-default',
      large: 'resource-icon-large',
    },
    resourceIconColor: {
      neutral: 'resource-icon-neutral',
      brand: 'resource-icon-brand',
      positive: 'resource-icon-positive',
      notice: 'resource-icon-notice',
      negative: 'resource-icon-negative',
      lime: 'resource-icon-lime',
      violet: 'resource-icon-violet',
      amber: 'resource-icon-amber',
      indigo: 'resource-icon-indigo',
      teal: 'resource-icon-teal',
    },
  },
  defaultVariants: {
    size: 'default',
    resourceIconColor: 'neutral',
  },
})

export interface ResourceIconProps extends VariantProps<
  typeof resourceIconVariants
> {
  children: React.ReactNode
  className?: string
}

const ResourceIcon = ({
  size = 'default',
  resourceIconColor = 'neutral',
  className,
  children,
}: ResourceIconProps) => {
  return (
    <div
      className={cn(
        resourceIconVariants({ size, resourceIconColor }),
        className
      )}
    >
      {children}
    </div>
  )
}

export { ResourceIcon }
