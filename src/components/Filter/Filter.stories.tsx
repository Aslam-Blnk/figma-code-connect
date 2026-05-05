import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import { FilterRoot } from '@/components/Filter'
import { Tag, TagOptionCancel } from '@/components/Tag'

const meta = {
  title: 'Design System/Components/Filter',
  component: FilterRoot,
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
    isFilled: {
      control: 'boolean',
      description: 'Whether the filter is filled (has a selected value)',
    },
  },
} satisfies Meta<typeof FilterRoot>

export default meta
type Story = StoryObj<typeof FilterRoot>

export const DefaultFilter: Story = {
  args: {
    children: (
      <>
        <span className="mui-icon material-symbols-rounded">filter_list</span>
        Label
      </>
    ),
  },
}

export const FilledDefaultFilter: Story = {
  args: {
    onClick: () => fn(),
    isFilled: true,
    children: (
      <>
        <span className="mui-icon material-symbols-rounded">filter_list</span>
        Label
        <Tag>
          1
          <TagOptionCancel />
        </Tag>
      </>
    ),
  },
}
