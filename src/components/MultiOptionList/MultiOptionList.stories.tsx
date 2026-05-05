import type { Meta, StoryObj } from '@storybook/react-vite'

import { cn } from '../../utils'
import { MultiOptionListWithSearch } from './MultiOptionListCombobox'

function Template({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />
}

const meta = {
  title: 'Design System/Components/MultiOptionList',
  component: Template,
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
} satisfies Meta<typeof Template>

export default meta
type Story = StoryObj<typeof Template>

export const CommandWithSearch: Story = {
  args: {
    className: 'w-80 rounded-xl bg-default flex flex-column shadow-hard-sm',
    children: <MultiOptionListWithSearch />,
  },
}
