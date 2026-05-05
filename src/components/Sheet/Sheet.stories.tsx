import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/Button'
import { ResourceIcon } from '@/components/ResourceIcon'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/Sheet'

const meta = {
  title: 'Design System/Components/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof Sheet>

const content = () => (
  <div className="h-auto w-full overflow-auto border border-dashed border-default bg-default">
    <div className="flex h-[1200px] w-full flex-1 items-center justify-center text-subtle text-content"></div>
  </div>
)

const children = (
  size: 'small' | 'medium' | 'large',
  forceMount: true | undefined = undefined
) => (
  <>
    <SheetTrigger asChild>
      <Button variant="neutral">Open</Button>
    </SheetTrigger>
    <SheetContent size={size} forceMount={forceMount}>
      <SheetHeader>
        <ResourceIcon size="large" resourceIconColor="neutral">
          <span className="mui-icon material-symbols-rounded">circle</span>
        </ResourceIcon>
        <div className="flex flex-1 flex-col items-start gap-2">
          <SheetTitle>Invite new member</SheetTitle>
          <SheetDescription>
            Enter the phone number of the member you&apos;d like to invite.
          </SheetDescription>
        </div>
      </SheetHeader>
      {content()}
      <SheetFooter>
        <div className="">Slot</div>
        <div className="flex flex-1 items-center justify-end gap-4 self-stretch">
          <SheetClose asChild>
            <Button type="button" variant="neutral" autoFocus={false}>
              Close
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button type="button" variant="brand" autoFocus={false}>
              Action
            </Button>
          </SheetClose>
        </div>
      </SheetFooter>
    </SheetContent>
  </>
)

export const SheetSmall: Story = {
  args: {
    children: children('small'),
  },
}

export const SheetSmallForceMount: Story = {
  args: {
    children: children('small', true),
  },
}

export const SheetMedium: Story = {
  args: {
    children: children('medium'),
  },
}

export const SheetLarge: Story = {
  args: {
    children: children('large'),
  },
}
