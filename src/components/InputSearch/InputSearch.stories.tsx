import type { Meta, StoryObj } from '@storybook/react-vite'

import { InputSearch } from '@/components/Input'

const meta = {
  title: 'Design System/Components/InputSearch',
  component: InputSearch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isLoading: {
      control: 'boolean',
      description: 'If `true`, a input goes into a loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'If `true`, the input is disabled',
    },
  },
  args: {
    placeholder: 'Search...',
  },
} satisfies Meta<typeof InputSearch>

export default meta
type Story = StoryObj<typeof InputSearch>

export const DefaultInputSearch: Story = {
  args: {},
}

export const DisabledInputSearch: Story = {
  args: {
    disabled: true,
  },
}

export const LoadingInputSearch: Story = {
  args: {
    isLoading: true,
  },
}
