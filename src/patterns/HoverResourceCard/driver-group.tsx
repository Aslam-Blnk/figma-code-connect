import { Card } from '@/components/Card'
import {
  HoverResourceCardContent,
  HoverResourceCardProvider,
  HoverResourceCardTrigger,
} from '@/components/HoverResourceCard'
import { LinkAnchorButton } from '@/components/LinkButton'
import { ResourceIcon } from '@/components/ResourceIcon'
import { ResourceTag } from '@/components/ResourceTag'

const driverGroupCardContent = () => (
  <div className="flex w-60 flex-col items-start gap-3 p-4">
    <div className="flex w-full flex-col items-start gap-3">
      <ResourceIcon size="large" resourceIconColor="neutral">
        <span className="mui-icon material-symbols-rounded filled">
          groups_3
        </span>
      </ResourceIcon>
      <h3 className="text-default">Splendid Elite</h3>
    </div>
    <div className="flex w-full items-center justify-between">
      <p className="text-subtler text-content-caption-strong">24 members</p>
      <LinkAnchorButton variant="brand">
        More
        <span className="mui-icon material-symbols-rounded">
          keyboard_arrow_right
        </span>
      </LinkAnchorButton>
    </div>
  </div>
)

const driverGroupResourceTag = () => (
  <HoverResourceCardProvider>
    <HoverResourceCardTrigger>
      <ResourceTag isInteractive asChild>
        <button type="button">
          <ResourceIcon resourceIconColor="neutral">
            <span className="mui-icon material-symbols-rounded filled">
              groups_3
            </span>
          </ResourceIcon>
          Z Apartments
        </button>
      </ResourceTag>
    </HoverResourceCardTrigger>
    <HoverResourceCardContent>
      <Card variant="decorative" elevation="floating">
        {driverGroupCardContent()}
      </Card>
    </HoverResourceCardContent>
  </HoverResourceCardProvider>
)

export { driverGroupResourceTag }
