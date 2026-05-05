import { ResourceIcon } from '@/components/ResourceIcon'
import { Separator } from '@/components/Separator'
import { SidebarProvider, useSidebar } from '@/components/Sidebar'

import { trailingActions } from '../Header/Header'
import { AppSidebar, SidebarOutsideTrigger } from '../Sidebar/Sidebar'

// eslint-disable-next-line react-refresh/only-export-components
function SidebarSeparator() {
  const { state } = useSidebar()
  return (
    <Separator
      orientation="vertical"
      className={state === 'expanded' ? 'block' : 'hidden'}
    />
  )
}

export const pageLayoutChildren = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarSeparator />
      <main className="relative min-h-svh w-full">
        {/* Header */}
        <div className="flex w-full flex-col gap-4 border-b border-default bg-default p-4 sm:px-5 sm:py-4">
          <div className="flex w-full flex-col items-start gap-3 sm:flex-row">
            <div className="flex w-full flex-1 gap-2">
              <SidebarOutsideTrigger />
              <div className="flex items-center gap-4">
                <ResourceIcon size="large" resourceIconColor="neutral">
                  <span className="mui-icon material-symbols-rounded">
                    circle
                  </span>
                </ResourceIcon>
                <div className="flex items-center gap-3">
                  <h1>Configurations</h1>
                  <Separator orientation="vertical" className="h-5" />
                </div>
              </div>
            </div>
            {trailingActions()}
          </div>
        </div>
        {/* Content */}
        <div className="m-3 rounded-lg border border-dashed border-bold p-3 text-center text-subtle text-content">
          Content
        </div>
      </main>
    </SidebarProvider>
  )
}
