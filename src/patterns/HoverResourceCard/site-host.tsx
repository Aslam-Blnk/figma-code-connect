import { Badge } from '@/components/Badge'
import { Card } from '@/components/Card'
import {
  HoverResourceCardContent,
  HoverResourceCardProvider,
  HoverResourceCardTrigger,
} from '@/components/HoverResourceCard'
import { ResourceIcon } from '@/components/ResourceIcon'
import { ResourceTag } from '@/components/ResourceTag'

const siteHostCardContent = () => (
  <div className="flex w-60 flex-col items-start gap-4 p-4">
    <div className="flex w-full flex-col items-start gap-3">
      <ResourceIcon size="large" resourceIconColor="neutral">
        <span className="mui-icon material-symbols-rounded filled">
          sensor_occupied
        </span>
      </ResourceIcon>
      <h3 className="text-default">Site host name</h3>
    </div>
    <Badge variant="outline" badgeColor="neutral">
      <span className="mui-icon material-symbols-rounded">phone</span>
      +1456666452
    </Badge>
    <Badge variant="outline" badgeColor="neutral">
      <span className="mui-icon material-symbols-rounded">alternate_email</span>
      johndoe@gmail.com
    </Badge>
  </div>
)

const siteHostResourceTag = () => (
  <HoverResourceCardProvider>
    <HoverResourceCardTrigger>
      <ResourceTag isInteractive asChild>
        <button type="button">
          <ResourceIcon resourceIconColor="neutral">
            <span className="mui-icon material-symbols-rounded filled">
              sensor_occupied
            </span>
          </ResourceIcon>
          Site host name
        </button>
      </ResourceTag>
    </HoverResourceCardTrigger>
    <HoverResourceCardContent>
      <Card variant="decorative" elevation="floating">
        {siteHostCardContent()}
      </Card>
    </HoverResourceCardContent>
  </HoverResourceCardProvider>
)

export { siteHostResourceTag }
