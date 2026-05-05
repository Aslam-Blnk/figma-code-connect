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

import { chargerStatus } from '../ChargerStatus/ChargerStatus'

const chargerCardContent = () => (
  <div className="flex w-60 flex-col items-start gap-4 p-4">
    <div className="flex w-full flex-col items-start gap-3">
      <div className="flex w-full items-start justify-between">
        <ResourceIcon size="large" resourceIconColor="brand">
          <span className="mui-icon material-symbols-rounded filled">
            ev_station
          </span>
        </ResourceIcon>
        <Badge variant="flat" badgeColor="neutral" isCount>
          #1234A
        </Badge>
      </div>
      <div className="flex w-full flex-col gap-2">
        <h3 className="text-default">SH-10024</h3>
        <p className="text-subtler text-content">Zemetric Shasta 180</p>
      </div>
    </div>
    <div className="flex w-full content-start items-start gap-2">
      <div className="flex items-center pt-0.5 [&_span]:text-base">
        <span className="mui-icon material-symbols-rounded text-icon-subtle">
          domain
        </span>
      </div>
      <p className="text-wrap text-subtler text-content">24 Delaware</p>
    </div>
    <div className="flex w-full items-center justify-between">
      {chargerStatus('operative')}
      <LinkAnchorButton variant="brand">
        More
        <span className="mui-icon material-symbols-rounded">
          keyboard_arrow_right
        </span>
      </LinkAnchorButton>
    </div>
  </div>
)

const chargerResourceTag = () => (
  <HoverResourceCardProvider>
    <HoverResourceCardTrigger>
      <ResourceTag isInteractive asChild>
        <button type="button">
          <ResourceIcon resourceIconColor="brand">
            <span className="mui-icon material-symbols-rounded filled">
              ev_station
            </span>
          </ResourceIcon>
          SH-10024
        </button>
      </ResourceTag>
    </HoverResourceCardTrigger>
    <HoverResourceCardContent>
      <Card variant="decorative" elevation="floating">
        {chargerCardContent()}
      </Card>
    </HoverResourceCardContent>
  </HoverResourceCardProvider>
)

export { chargerResourceTag }
