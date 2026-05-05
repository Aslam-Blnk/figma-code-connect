import type { Meta, StoryObj } from '@storybook/react-vite'

type HeadingProps = {
  heading: 'h1' | 'h2' | 'h3' | 'h4'
}

const Heading = ({ heading }: HeadingProps) => {
  const Comp = heading
  return <Comp>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Comp>
}

const meta = {
  title: 'Design System/Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    heading: {
      control: {
        type: 'select',
      },
      options: ['h1', 'h2', 'h3', 'h4'],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof Heading>

export const Heading1: Story = {
  args: {
    heading: 'h1',
  },
}

export const Heading2: Story = {
  args: {
    heading: 'h2',
  },
}

export const Heading3: Story = {
  args: {
    heading: 'h3',
  },
}

export const Heading4: Story = {
  args: {
    heading: 'h4',
  },
}
