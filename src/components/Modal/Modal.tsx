import React from 'react'

import { Button } from '@/components/Button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/Dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/Drawer'
import { ResourceIcon } from '@/components/ResourceIcon'
import { useIsMobile } from '@/components/Sidebar'

export type ModalProps = {
  forceMount?: true | undefined
  size: 'small' | 'medium' | 'large'
}

export function Modal({ size, forceMount = undefined }: ModalProps) {
  const [open, setOpen] = React.useState(false)
  const isMobile = useIsMobile()

  if (!isMobile) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="neutral">Open</Button>
        </DialogTrigger>
        <DialogContent
          forceMount={forceMount}
          onOpenAutoFocus={(event) => {
            event.preventDefault()
          }}
          size={size}
        >
          <DialogHeader>
            <ResourceIcon size="large" resourceIconColor="neutral">
              <span className="mui-icon material-symbols-rounded">circle</span>
            </ResourceIcon>
            <div className="flex flex-1 flex-col items-start gap-2">
              <DialogTitle>Invite new member</DialogTitle>
              <DialogDescription>
                Enter the phone number of the member you&apos;d like to invite.
              </DialogDescription>
            </div>
          </DialogHeader>
          {content()}
          <DialogFooter>
            <div className="">Slot</div>
            <div className="flex flex-1 items-center justify-end gap-4 self-stretch">
              <DialogClose asChild>
                <Button type="button" variant="neutral" autoFocus={false}>
                  Close
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button type="button" variant="brand" autoFocus={false}>
                  Action
                </Button>
              </DialogClose>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="neutral">Open</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <ResourceIcon size="large" resourceIconColor="neutral">
            <span className="mui-icon material-symbols-rounded">circle</span>
          </ResourceIcon>
          <div className="flex flex-1 flex-col items-start gap-2">
            <DrawerTitle>Invite new member</DrawerTitle>
            <DrawerDescription>
              Enter the phone number of the member you&apos;d like to invite.
            </DrawerDescription>
          </div>
        </DrawerHeader>
        {content()}
        <DrawerFooter>
          <div className="">Slot</div>
          <div className="flex flex-1 items-center justify-end gap-4 self-stretch">
            <DrawerClose asChild>
              <Button type="button" variant="neutral" autoFocus={false}>
                Close
              </Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button type="button" variant="brand" autoFocus={false}>
                Action
              </Button>
            </DrawerClose>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const content = () => (
  <div className="h-auto w-full overflow-auto border border-dashed border-default">
    <div className="flex h-[1200px] w-full flex-1 items-center justify-center text-subtle text-content"></div>
  </div>
)
