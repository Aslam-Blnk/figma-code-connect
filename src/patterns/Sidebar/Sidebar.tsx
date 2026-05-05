import { Badge } from '@/components/Badge'
import { Button } from '@/components/Button'
import { Separator } from '@/components/Separator'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/Sidebar'

function SidebarTrigger() {
  const { toggleSidebar } = useSidebar()
  return (
    <Button variant="ghost" onClick={() => toggleSidebar()} iconOnly>
      <span className="mui-icon material-symbols-rounded">menu_open</span>
    </Button>
  )
}

export function SidebarOutsideTrigger() {
  const { toggleSidebar, state, isMobile } = useSidebar()
  if (state === 'expanded' && !isMobile) {
    return undefined
  }
  return (
    <Button variant="ghost" onClick={() => toggleSidebar()} iconOnly>
      <span className="mui-icon material-symbols-rounded">menu</span>
    </Button>
  )
}

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <img src="/sidebar-logo.svg" height={16} />
        <div className="flex items-center justify-end gap-2">
          <Button variant="ghost" iconOnly>
            <span className="mui-icon material-symbols-rounded">search</span>
          </Button>
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive>
                <div className="flex w-full items-center gap-2">
                  <span className="mui-icon material-symbols-rounded !size-4 !text-base text-icon-subtle">
                    domain
                  </span>
                  <span className="text-subtle text-content">Overview</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <div className="flex w-full items-center gap-2">
                  <span className="mui-icon material-symbols-rounded !size-4 !text-base text-icon-subtle">
                    crisis_alert
                  </span>
                  <span className="text-subtle text-content">Alerts</span>
                </div>
                <Badge variant="flat" badgeColor="neutral" isCount>
                  99+
                </Badge>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <div className="flex w-full items-center gap-2">
                  <span className="mui-icon material-symbols-rounded !size-4 !text-base text-icon-subtle">
                    receipt_long
                  </span>
                  <span className="text-subtle text-content">Sessions</span>
                </div>
                <Badge variant="flat" badgeColor="neutral" isCount>
                  99+
                </Badge>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>MANAGE ASSETS</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <div className="flex w-full items-center gap-2">
                  <div className="flex items-center justify-center rounded-md bg-violet-500 p-0.5">
                    <span className="mui-icon material-symbols-rounded !size-3.5 !text-sm text-icon-onIntense">
                      domain
                    </span>
                  </div>
                  <span className="text-subtle text-content">Sites</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <div className="flex w-full items-center gap-2">
                  <div className="flex items-center justify-center rounded-md bg-brand-intense p-0.5">
                    <span className="mui-icon material-symbols-rounded filled !size-3.5 !text-sm text-icon-onIntense">
                      ev_station
                    </span>
                  </div>
                  <span className="text-subtle text-content">Chargers</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>MANAGE USERS</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <div className="flex w-full items-center gap-2">
                  <span className="mui-icon material-symbols-rounded !size-4 !text-base text-icon-subtle">
                    badge
                  </span>
                  <span className="text-subtle text-content">Drivers</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <div className="flex w-full items-center gap-2">
                  <span className="mui-icon material-symbols-rounded !size-4 !text-base text-icon-subtle">
                    airport_shuttle
                  </span>
                  <span className="text-subtle text-content">Fleet</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarGroup>
          <div className="flex w-full items-center justify-between gap-2">
            <SidebarMenuButton>
              <div className="flex items-center gap-2">
                <span className="mui-icon material-symbols-rounded !size-4 !text-base text-icon-subtle">
                  help
                </span>
                <span className="text-subtle text-content">Support</span>
              </div>
            </SidebarMenuButton>
            <SidebarMenuButton isAvatar>
              <div className="flex size-7 items-center justify-center rounded-full bg-brand-intense text-icon-onIntense">
                <span className="mui-icon material-symbols-rounded filled !size-5 !text-xl">
                  person
                </span>
              </div>
            </SidebarMenuButton>
          </div>
        </SidebarGroup>
        <Separator orientation="horizontal" className="w-full" />
        <div className="flex w-full items-center justify-between p-4 text-subtler text-content-caption-strong">
          <p>Zemetric</p>
          <p>v3.0</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
