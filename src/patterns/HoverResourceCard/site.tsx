import { Badge } from '@/components/Badge'
import { Card } from '@/components/Card'
import {
  HoverResourceCardContent,
  HoverResourceCardProvider,
  HoverResourceCardTrigger,
} from '@/components/HoverResourceCard'
import { LinkAnchorButton } from '@/components/LinkButton'
import { ResourceIcon } from '@/components/ResourceIcon'
import { ResourceTag } from '@/components/ResourceTag'

const siteCardContent = () => (
  <div className="flex w-60 flex-col items-start gap-4 p-4">
    <div className="flex w-full flex-col items-start gap-3">
      <div className="flex w-full items-start justify-between">
        <ResourceIcon size="large" resourceIconColor="violet">
          <span className="mui-icon material-symbols-rounded">domain</span>
        </ResourceIcon>
        <Badge variant="flat" badgeColor="neutral" isCount>
          #1234A
        </Badge>
      </div>
      <h3 className="text-default">24 Delaware</h3>
    </div>
    <div className="flex w-full content-start items-start gap-2">
      <div className="flex items-center pt-0.5 [&_span]:text-base">
        <span className="mui-icon material-symbols-rounded filled text-icon-subtle">
          location_on
        </span>
      </div>
      <p className="text-wrap text-subtler text-content">
        591 Connecticut 12, Connecticut 06340
      </p>
    </div>
    <div className="flex w-full items-center justify-between">
      <p className="text-subtler text-content-caption-strong">12 chargers</p>
      <LinkAnchorButton variant="brand">
        More
        <span className="mui-icon material-symbols-rounded">
          keyboard_arrow_right
        </span>
      </LinkAnchorButton>
    </div>
  </div>
)

const siteResourceTag = () => (
  <HoverResourceCardProvider>
    <HoverResourceCardTrigger>
      <ResourceTag asChild isInteractive>
        <button type="button">
          <ResourceIcon resourceIconColor="violet">
            <span className="mui-icon material-symbols-rounded">domain</span>
          </ResourceIcon>
          24 Delaware
        </button>
      </ResourceTag>
    </HoverResourceCardTrigger>
    <HoverResourceCardContent>
      <Card variant="decorative" elevation="floating">
        {siteCardContent()}
      </Card>
    </HoverResourceCardContent>
  </HoverResourceCardProvider>
)

export { siteResourceTag }
