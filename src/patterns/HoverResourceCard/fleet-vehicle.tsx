import { Badge } from '@/components/Badge'
import { Card } from '@/components/Card'
import {
  HoverResourceCardContent,
  HoverResourceCardProvider,
  HoverResourceCardTrigger,
} from '@/components/HoverResourceCard'
import { ResourceIcon } from '@/components/ResourceIcon'
import { ResourceTag } from '@/components/ResourceTag'

const fleetVehicleCardContent = (vin: string) => (
  <div className="flex w-60 flex-col items-start gap-3 p-4">
    <div className="flex w-full flex-col items-start gap-3">
      <ResourceIcon size="large" resourceIconColor="teal">
        <span className="mui-icon material-symbols-rounded filled">
          airport_shuttle
        </span>
      </ResourceIcon>
      <h3 className="text-default">{vin}</h3>
    </div>
    <div className="flex w-full gap-3">
      <ResourceTag>
        <ResourceIcon size="default" resourceIconColor="neutral">
          <span className="mui-icon material-symbols-rounded">commute</span>
        </ResourceIcon>
        FleetX
      </ResourceTag>
      <Badge variant="outline" badgeColor="neutral">
        +3
      </Badge>
    </div>
  </div>
)

const truncateVIN = (vin: string) => {
  if (vin.length <= 8) {
    return vin
  }
  return `${vin.slice(0, 4)}...${vin.slice(-4)}`
}

const fleetVehicleResourceTag = (vin: string) => (
  <HoverResourceCardProvider>
    <HoverResourceCardTrigger>
      <ResourceTag isInteractive asChild>
        <button type="button">
          <ResourceIcon resourceIconColor="teal">
            <span className="mui-icon material-symbols-rounded filled">
              airport_shuttle
            </span>
          </ResourceIcon>
          {truncateVIN(vin)}
        </button>
      </ResourceTag>
    </HoverResourceCardTrigger>
    <HoverResourceCardContent>
      <Card variant="decorative" elevation="floating">
        {fleetVehicleCardContent(vin)}
      </Card>
    </HoverResourceCardContent>
  </HoverResourceCardProvider>
)

export { fleetVehicleResourceTag }
