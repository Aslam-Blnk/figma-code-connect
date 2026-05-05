import {
  LinkAnchorButton,
  LinkButton,
  linkButtonVariants,
} from '@/components/LinkButton'

type BreadcrumbItem = {
  label: string
  href?: string
  icon?: React.ReactNode
}

type BreadcrumbProps = {
  items: BreadcrumbItem[]
}

const breadcrumb = ({ items }: BreadcrumbProps) => {
  const lastItem = items[items.length - 1]
  const totalItems = items.length
  return (
    <>
      {items.slice(0, -1).map((item, index) =>
        item.href ? (
          <LinkAnchorButton key={index}>
            <span className="mui-icon material-symbols-rounded text-icon-subtle">
              chevron_left
            </span>
            {item.label}
          </LinkAnchorButton>
        ) : (
          <LinkButton key={index}>
            <span className="mui-icon material-symbols-rounded text-icon-subtle">
              chevron_left
            </span>
            {item.label}
          </LinkButton>
        )
      )}
      {totalItems > 1 && (
        <span className="text-subtler text-content-light">/</span>
      )}
      <div className={linkButtonVariants({ variant: 'neutral' })}>
        {lastItem.icon}
        {lastItem.label}
      </div>
    </>
  )
}

export { breadcrumb }
