import { Button } from '@/components/Button'
import { InputSearch } from '@/components/Input'
import { ResourceIcon } from '@/components/ResourceIcon'
import { Separator } from '@/components/Separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/Tabs'

const buttonWrapper = () => {
  return (
    <div className="flex flex-row items-center gap-3 p-1">
      <InputSearch
        placeholder="Search"
        className="min-w-40 !max-w-80 xl:!min-w-80"
      />
      <Button variant="brand">
        <span className="mui-icon material-symbols-rounded">add</span>
        Add new Site
      </Button>
      <Button variant="neutral">
        <span className="mui-icon material-symbols-rounded">add</span>
        Add new Site
      </Button>
    </div>
  )
}

const sectionHeadingWrapper = () => {
  return (
    <div className="flex items-center gap-3">
      <ResourceIcon size="large" resourceIconColor="teal">
        <span className="mui-icon material-symbols-rounded">domain</span>
      </ResourceIcon>
      <h1 className="text-default">Configurations</h1>
    </div>
  )
}

const content = () => (
  <div className="w-full rounded-md border border-dashed border-bold bg-accent-gray-intense text-center text-subtler text-content">
    Content
  </div>
)

const trailingActions = () => (
  <div className="flex items-center gap-4">
    <Button variant="brand">Action</Button>
    <Button variant="neutral">Action</Button>
  </div>
)

const tabsList = () => (
  <TabsList isBordered className="-mb-px">
    <TabsTrigger value="location">Location</TabsTrigger>
    <TabsTrigger value="session">Session</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
)

const tabsContent = () => (
  <>
    <TabsContent value="location">Location content</TabsContent>
    <TabsContent value="session">Session content</TabsContent>
    <TabsContent value="settings">Settings content</TabsContent>
  </>
)

const sectionHeading = ({
  sidebarClosed = false,
  headingTrailing = undefined,
}: {
  sidebarClosed?: boolean
  headingTrailing?: React.ReactNode
}) => (
  <div className="flex w-full flex-1 gap-2">
    {sidebarClosed && (
      <Button variant="ghost" iconOnly>
        <span className="mui-icon material-symbols-rounded">menu</span>
      </Button>
    )}
    <div className="flex items-center gap-4">
      <ResourceIcon size="large" resourceIconColor="neutral">
        <span className="mui-icon material-symbols-rounded">circle</span>
      </ResourceIcon>
      <div className="flex items-center gap-3">
        <h1>Configurations</h1>
        {headingTrailing && (
          <Separator orientation="vertical" className="h-5" />
        )}
        {headingTrailing}
      </div>
    </div>
  </div>
)

const sectionHeader = ({
  sidebarClosed = false,
  headingTrailing = undefined,
}: {
  sidebarClosed?: boolean
  headingTrailing?: React.ReactNode
}) => (
  <div className="flex w-full flex-col gap-4 border-b border-default bg-default p-4 sm:px-5 sm:py-4">
    <div className="flex w-full flex-col items-start gap-3 sm:flex-row">
      {sectionHeading({ sidebarClosed, headingTrailing })}
      {trailingActions()}
    </div>
    {content()}
  </div>
)

const sectionHeaderWithTabs = ({
  sidebarClosed = false,
  headingTrailing = undefined,
}: {
  sidebarClosed?: boolean
  headingTrailing?: React.ReactNode
}) => (
  <Tabs defaultValue="location">
    <div className="flex w-full flex-col gap-4 border-b border-default bg-default px-4 pt-4 sm:px-5 sm:pt-4">
      <div className="flex w-full flex-col items-start gap-3 sm:flex-row">
        {sectionHeading({ sidebarClosed, headingTrailing })}
        {trailingActions()}
      </div>
      {content()}
      {tabsList()}
    </div>
    {tabsContent()}
  </Tabs>
)

export {
  trailingActions,
  buttonWrapper,
  sectionHeadingWrapper,
  sectionHeader,
  sectionHeaderWithTabs,
}
