import {
  EmptyStateActions,
  EmptyStateContent,
  EmptyStateContentContainer,
  EmptyStateImage,
  EmptyStateRoot,
} from '@/components/EmptyState'

type EmptyStateProps = {
  imageSrc: string
  imageAlt?: string
  content: string
  description?: string
  actions?: React.ReactNode
}

export const emptyState = ({
  imageSrc,
  imageAlt,
  content,
  description,
  actions,
}: EmptyStateProps) => (
  <EmptyStateRoot>
    <EmptyStateContentContainer>
      <EmptyStateImage src={imageSrc} alt={imageAlt} />
      <EmptyStateContent content={content} description={description} />
    </EmptyStateContentContainer>
    {actions && <EmptyStateActions>{actions}</EmptyStateActions>}
  </EmptyStateRoot>
)
