import type { Meta, StoryObj } from '@storybook/react-vite'
import { toast } from 'sonner'

import { Button } from '@/components/Button'
import { Toaster } from '@/components/Toaster'

type TemplateProps = {
  toasterProps: React.ComponentProps<typeof Toaster>
  buttonText: string
  buttonOnClick: React.ComponentProps<typeof Button>['onClick']
}

function Template({ toasterProps, buttonText, buttonOnClick }: TemplateProps) {
  return (
    <>
      <Toaster {...toasterProps} />
      <Button variant="neutral" onClick={buttonOnClick}>
        {buttonText}
      </Button>
    </>
  )
}

const meta = {
  title: 'Design System/Components/Toast',
  component: Template,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Template>

export default meta
type Story = StoryObj<typeof Template>

export const NeutralToast: Story = {
  args: {
    buttonOnClick: () =>
      toast.info('Default toast', {
        description: 'This is a default toast',
        action: {
          label: 'Action',
          onClick: () => {},
        },
      }),
    buttonText: 'Default',
  },
}

export const PositiveToast: Story = {
  args: {
    buttonOnClick: () =>
      toast.success('Positive toast', {
        description: 'This is a positive toast',
        action: {
          label: 'Action',
          onClick: () => {},
        },
      }),
    buttonText: 'Positive',
  },
}

export const NoticeToast: Story = {
  args: {
    buttonOnClick: () =>
      toast.warning('Notice toast', {
        description: 'This is a notice toast',
        action: {
          label: 'Action',
          onClick: () => {},
        },
      }),
    buttonText: 'Notice',
  },
}

export const NegativeToast: Story = {
  args: {
    buttonOnClick: () =>
      toast.error('Negative toast', {
        description: 'This is a negative toast',
        action: {
          label: 'Action',
          onClick: () => {},
        },
      }),
    buttonText: 'Negative',
  },
}

export const ToastWithoutAutoHide: Story = {
  args: {
    buttonOnClick: () => {
      toast.info('Toast without auto hide', {
        description: 'This is a toast without auto hide',
        action: {
          label: 'Close',
          onClick: () => {
            toast.dismiss()
          },
        },
      })
    },
    toasterProps: {
      duration: Infinity,
    },
    buttonText: 'Without Auto Hide',
  },
}
