import { Card } from '@/components/Card'
import {
  HoverResourceCardContent,
  HoverResourceCardProvider,
  HoverResourceCardTrigger,
} from '@/components/HoverResourceCard'
import { LinkAnchorButton } from '@/components/LinkButton'
import { ResourceIcon } from '@/components/ResourceIcon'
import { ResourceTag } from '@/components/ResourceTag'

const driverCardContent = () => (
  <div className="flex w-60 flex-col items-start gap-4 p-4">
    <div className="flex w-full flex-col items-start gap-3">
      <ResourceIcon size="large" resourceIconColor="lime">
        <span className="mui-icon material-symbols-rounded filled">badge</span>
      </ResourceIcon>
      <h3 className="text-default">+1 000000000</h3>
    </div>
    <div className="flex w-full flex-wrap items-start gap-2">
      <div className="flex items-center pt-0.5 [&>span]:text-base">
        <span className="mui-icon material-symbols-rounded text-icon-subtle">
          person
        </span>
      </div>
      <p className="text-subtle text-content">John Doe II jr.</p>
    </div>
    <LinkAnchorButton variant="brand">
      More
      <span className="mui-icon material-symbols-rounded">
        keyboard_arrow_right
      </span>
    </LinkAnchorButton>
  </div>
)

const driverResourceTag = () => (
  <HoverResourceCardProvider>
    <HoverResourceCardTrigger>
      <ResourceTag isInteractive asChild>
        <button type="button">
          <ResourceIcon resourceIconColor="lime">
            <span className="mui-icon material-symbols-rounded filled">
              badge
            </span>
          </ResourceIcon>
          John Doe
        </button>
      </ResourceTag>
    </HoverResourceCardTrigger>
    <HoverResourceCardContent>
      <Card variant="decorative" elevation="floating">
        {driverCardContent()}
      </Card>
    </HoverResourceCardContent>
  </HoverResourceCardProvider>
)

export { driverResourceTag }
