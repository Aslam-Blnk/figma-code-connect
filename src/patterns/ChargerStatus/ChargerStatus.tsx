import { Badge } from '@/components/Badge'

const operativeChargerStatus = () => (
  <Badge variant="flat" badgeColor="positive">
    <span className="mui-icon material-symbols-rounded filled">
      verified_user
    </span>
    Operative
  </Badge>
)

const inoperativeChargerStatus = () => (
  <Badge variant="flat" badgeColor="neutral">
    <span className="mui-icon material-symbols-rounded filled">
      shield_moon
    </span>
    Inoperative
  </Badge>
)

const disconnectedChargerStatus = () => (
  <Badge variant="flat" badgeColor="negative">
    <span className="mui-icon material-symbols-rounded filled">
      signal_wifi_bad
    </span>
    Disconnected
  </Badge>
)

const chargerStatus = (
  variant: 'operative' | 'inoperative' | 'disconnected'
) => {
  if (variant === 'operative') {
    return operativeChargerStatus()
  }
  if (variant === 'inoperative') {
    return inoperativeChargerStatus()
  }
  if (variant === 'disconnected') {
    return disconnectedChargerStatus()
  }
  return null
}

export { chargerStatus }
