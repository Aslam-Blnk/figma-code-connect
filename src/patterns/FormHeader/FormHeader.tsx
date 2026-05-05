import { Button } from '@/components/Button'
import { LinkAnchorButton } from '@/components/LinkButton'
import { ResourceIcon } from '@/components/ResourceIcon'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/Tabs'

const sidebarToggle = () => (
  <Button variant="ghost" iconOnly>
    <span className="mui-icon material-symbols-rounded">menu</span>
  </Button>
)
const breadcrumbs = () => (
  <div className="flex items-start gap-2">
    <LinkAnchorButton>Manage notifications</LinkAnchorButton>
    <p className="text-subtle text-content-light">/</p>
  </div>
)

const resourceIcon = () => (
  <ResourceIcon size="large" resourceIconColor="neutral">
    <span className="mui-icon material-symbols-rounded">circle</span>
  </ResourceIcon>
)
const heading = () => <h1>Manage notifications</h1>

const description = () => (
  <p className="text-subtler text-content-light">
    Customize your preferences for system and email notifications.
  </p>
)

const cancelButton = () => (
  <Button variant="neutral" iconOnly>
    <span className="mui-icon material-symbols-rounded">close</span>
  </Button>
)

const tabsList = () => (
  <TabsList isBordered className="-mb-px w-full">
    <TabsTrigger value="system-notification">System notifications</TabsTrigger>
    <TabsTrigger value="email-notification">Email notifications</TabsTrigger>
  </TabsList>
)

const tabsContent = () => (
  <>
    <TabsContent value="system-notification">
      System notifications content
    </TabsContent>
    <TabsContent value="email-notification">
      Email notifications content
    </TabsContent>
  </>
)

const formHeaderWithoutTabs = ({
  sidebarClosed = false,
  withBreadcrumbs = false,
  isDismissible = true,
}: {
  sidebarClosed?: boolean
  withBreadcrumbs?: boolean
  isDismissible?: boolean
}) => {
  return (
    <div className="flex max-w-3xl flex-col items-start gap-4">
      <div className="flex w-full flex-row items-start gap-4">
        <div className="flex w-full flex-1 items-start gap-2">
          {sidebarClosed && sidebarToggle()}
          <div className="flex flex-1 flex-col items-start gap-4">
            {withBreadcrumbs && breadcrumbs()}
            {resourceIcon()}
            {heading()}
            {description()}
          </div>
        </div>
        {isDismissible && cancelButton()}
      </div>
    </div>
  )
}

const formHeaderWithTabs = ({
  sidebarClosed = false,
  withBreadcrumbs = false,
  isDismissible = true,
} = {}) => {
  return (
    <Tabs defaultValue="system-notification">
      <div className="flex max-w-3xl flex-col items-start gap-4">
        <div className="flex w-full flex-row items-start gap-4">
          <div className="flex w-full flex-1 items-start gap-2">
            {sidebarClosed && sidebarToggle()}
            <div className="flex flex-1 flex-col items-start gap-4">
              {withBreadcrumbs && breadcrumbs()}
              {resourceIcon()}
              {heading()}
              {description()}
            </div>
          </div>
          {isDismissible && cancelButton()}
        </div>
        {tabsList()}
      </div>
      {tabsContent()}
    </Tabs>
  )
}
export { formHeaderWithoutTabs, formHeaderWithTabs }
