import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '../../utils'
import { LinkButton } from '../LinkButton'

const bannerVariants = cva('banner-root', {
  variants: {
    variant: {
      block: 'banner-block',
      inline: 'banner-inline',
    },
    bannerIntent: {
      neutral: 'banner-neutral',
      highlight: 'banner-highlight',
      positive: 'banner-positive',
      notice: 'banner-notice',
      negative: 'banner-negative',
    },
  },
  defaultVariants: {
    variant: 'block',
    bannerIntent: 'neutral',
  },
})

export interface BannerRootProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bannerVariants> {
  isDismissible?: boolean
  afterDismiss?: () => void
}

const BannerRoot = ({
  className,
  variant = 'block',
  bannerIntent = 'neutral',
  isDismissible = false,
  afterDismiss,
  children,
  ...props
}: BannerRootProps) => {
  const ref = React.useRef<HTMLDivElement>(null)
  return (
    <div
      ref={ref}
      className={cn(bannerVariants({ variant, bannerIntent }), className)}
      {...props}
    >
      {children}
      {isDismissible && (
        <LinkButton
          variant="neutral"
          onClick={() => {
            ref.current?.remove()
            if (afterDismiss) {
              afterDismiss()
            }
          }}
        >
          <span className="mui-icon material-symbols-rounded">close</span>
        </LinkButton>
      )}
    </div>
  )
}
BannerRoot.displayName = 'BannerRoot'

const BannerContentWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('banner-content-wrapper', className)}
      {...props}
    />
  )
})
BannerContentWrapper.displayName = 'BannerContentWrapper'

const BannerContent = React.forwardRef<
  HTMLDivElement,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {
    bannerContent: string
    bannerDescription?: string
  }
>(({ className, bannerContent, bannerDescription, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('banner-content', className)} {...props}>
      <p>{bannerContent}</p>
      {bannerDescription && <p>{bannerDescription}</p>}
    </div>
  )
})
BannerContent.displayName = 'BannerContent'

export { BannerRoot, BannerContentWrapper, BannerContent }
