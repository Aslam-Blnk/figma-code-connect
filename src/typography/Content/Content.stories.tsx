import type { Meta, StoryObj } from '@storybook/react-vite'

type ContentProps = {
  className:
    | 'text-content'
    | 'text-content-light'
    | 'text-content-paragraph'
    | 'text-content-caption-strong'
    | 'text-content-caption'
    | 'text-content-label'
    | 'text-content-label-light'
    | 'text-number-xs'
    | 'text-number-sm'
    | 'text-number-xl'
    | 'text-number-3xl'
}

const Content = ({ className }: ContentProps) => (
  <p className={className}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit
  </p>
)

const meta = {
  title: 'Design System/Typography/Content',
  component: Content,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: {
      control: {
        type: 'select',
      },
      options: [
        'text-content',
        'text-content-light',
        'text-content-paragraph',
        'text-content-caption-strong',
        'text-content-caption',
        'text-content-label',
        'text-content-label-light',
        'text-number-xs',
        'text-number-sm',
        'text-number-xl',
        'text-number-3xl',
      ],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Content>

export default meta
type Story = StoryObj<typeof Content>

export const ContentText: Story = {
  args: {
    className: 'text-content',
  },
}

export const ContentTextLight: Story = {
  args: {
    className: 'text-content-light',
  },
}

export const ContentParagraph: Story = {
  args: {
    className: 'text-content-paragraph',
  },
}

export const ContentCaptionStrong: Story = {
  args: {
    className: 'text-content-caption-strong',
  },
}

export const ContentCaption: Story = {
  args: {
    className: 'text-content-caption',
  },
}

export const ContentLabel: Story = {
  args: {
    className: 'text-content-label',
  },
}

export const ContentLabelLight: Story = {
  args: {
    className: 'text-content-label-light',
  },
}

export const NumberXS: Story = {
  args: {
    className: 'text-number-xs',
  },
}

export const NumberSM: Story = {
  args: {
    className: 'text-number-sm',
  },
}

export const NumberXL: Story = {
  args: {
    className: 'text-number-xl',
  },
}

export const Number3XL: Story = {
  args: {
    className: 'text-number-3xl',
  },
}
